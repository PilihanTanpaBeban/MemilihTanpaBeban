import fs from 'fs';
import net from 'net';

let sshServer = null;
let sshLocalPort = null;
let listenersRegistered = false;

const toNumber = (v, def) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : def;
};

export async function resolveDbHostPortWithDevTunnel(env = process.env) {
  const isDev = env.NODE_ENV !== 'production';
  const useTunnel = isDev && String(env.SSH_TUNNEL_ENABLED || '').toLowerCase() === 'true';

  const direct = {
    host: env.MYSQL_HOST || '127.0.0.1',
    port: toNumber(env.MYSQL_PORT, 3306),
    isUsingTunnel: false,
  };

  if (!useTunnel) return direct;

  if (sshServer && sshLocalPort) {
    const ok = await (async () => {
      const socket = await new Promise((resolve) => {
        const s = net.createConnection({ host: '127.0.0.1', port: sshLocalPort }, () => {
          try { s.destroy(); } catch (_) {}
          resolve(true);
        });
        s.setTimeout(750);
        s.on('error', () => { try { s.destroy(); } catch (_) {} resolve(false); });
        s.on('timeout', () => { try { s.destroy(); } catch (_) {} resolve(false); });
      });
      return socket === true;
    })();
    if (ok) {
      return { host: '127.0.0.1', port: sshLocalPort, isUsingTunnel: true };
    }
  }

  let tunnelModule;
  try {
    tunnelModule = await import('tunnel-ssh');
  } catch (e) {
    console.warn('[DB] SSH tunnel disabled: install dev dependency "tunnel-ssh" to enable tunneling. Falling back to direct DB connection.');
    return direct;
  }

  const sshHost = env.SSH_HOST;
  const sshPort = toNumber(env.SSH_PORT, 22);
  const sshUser = env.SSH_USER;
  const localHost = '127.0.0.1';
  sshLocalPort = toNumber(env.SSH_LOCAL_PORT, 33306);
  const dstHost = env.SSH_DST_HOST || '127.0.0.1';
  const dstPort = toNumber(env.SSH_DST_PORT, 3306);

  if (!sshHost || !sshUser) {
    console.warn('[DB] SSH tunnel env incomplete: SSH_HOST and SSH_USER are required. Falling back to direct connection.');
    return direct;
  }

  const config = {
    username: sshUser,
    host: sshHost,
    port: sshPort,
    keepAlive: true,
    dstHost,
    dstPort,
    localHost,
    localPort: sshLocalPort,
  };

  if (env.SSH_PRIVATE_KEY) {
    config.privateKey = env.SSH_PRIVATE_KEY;
  } else if (env.SSH_PRIVATE_KEY_PATH) {
    try {
      config.privateKey = fs.readFileSync(env.SSH_PRIVATE_KEY_PATH);
    } catch (err) {
      console.warn('[DB] Failed to read SSH_PRIVATE_KEY_PATH. Falling back to password if provided.', err?.message);
    }
  }
  if (!config.privateKey && env.SSH_PASSWORD) {
    config.password = env.SSH_PASSWORD;
  }

  // Support both CommonJS-style default export function and named createTunnel API
  const tunnelFn = tunnelModule?.default ?? tunnelModule;
  if (typeof tunnelModule?.createTunnel === 'function') {
    try {
      const sshConfig = {
        host: sshHost,
        port: sshPort,
        username: sshUser,
      };
      if (config.privateKey) sshConfig.privateKey = config.privateKey;
      if (config.password) sshConfig.password = config.password;

      const serverOptions = { host: localHost, port: sshLocalPort };
      const forwardOptions = { dstAddr: dstHost, dstPort: dstPort };

      // Use v5+ signature: createTunnel(tunnelOptions, serverOptions, sshOptions, forwardOptions)
      let res;
      try {
        res = await tunnelModule.createTunnel({}, serverOptions, sshConfig, forwardOptions);
      } catch (err) {
        if (err && err.code === 'EADDRINUSE') {
          console.warn(`[DB] Local port ${sshLocalPort} in use; picking a free port.`);
          const altServerOptions = { host: localHost, port: 0 }; // ephemeral
          res = await tunnelModule.createTunnel({}, altServerOptions, sshConfig, forwardOptions);
        } else {
          throw err;
        }
      }
      sshServer = res?.server ?? res;
      // If the server assigned an ephemeral port, capture it
      if (sshServer && typeof sshServer.address === 'function') {
        const addr = sshServer.address();
        if (addr && typeof addr.port === 'number') {
          sshLocalPort = addr.port;
        }
      }
      if (sshServer && typeof sshServer.on === 'function') {
        sshServer.on('close', () => { sshServer = null; sshLocalPort = null; });
      }

      // Ensure the server is actually listening before proceeding (if events are available)
      if (sshServer && typeof sshServer.on === 'function') {
        if (!sshServer.listening) {
          await new Promise((resolve, reject) => {
            const resolveOnce = () => resolve();
            const rejectOnce = (err) => reject(err);
            if (typeof sshServer.once === 'function') {
              sshServer.once('listening', resolveOnce);
              sshServer.once('error', rejectOnce);
            } else {
              sshServer.on('listening', resolveOnce);
              sshServer.on('error', rejectOnce);
            }
          });
        }
      }

      console.log(`[DB] SSH tunnel established: ${localHost}:${sshLocalPort} -> ${dstHost}:${dstPort}`);
    } catch (err) {
      console.error('[DB] Failed to establish SSH tunnel (createTunnel):', err);
      // Fallback to legacy function API if available
      if (typeof tunnelFn === 'function') {
        try {
          await new Promise((resolve, reject) => {
            // If EADDRINUSE happened, try with ephemeral local port on legacy API
            const cfg = { ...config };
            if (err && err.code === 'EADDRINUSE') cfg.localPort = 0;
            tunnelFn(cfg, (e, server) => {
              if (e) {
                console.error('[DB] Fallback tunnel (legacy) failed:', e);
                return reject(e);
              }
              sshServer = server;
              if (sshServer && typeof sshServer.address === 'function') {
                const addr = sshServer.address();
                if (addr && typeof addr.port === 'number') {
                  sshLocalPort = addr.port;
                }
              }
              if (sshServer && typeof sshServer.on === 'function') {
                sshServer.on('close', () => { sshServer = null; sshLocalPort = null; });
              }
              console.log(`[DB] SSH tunnel established (legacy): ${localHost}:${sshLocalPort} -> ${dstHost}:${dstPort}`);
              resolve();
            });
          });
        } catch (e2) {
          return direct;
        }
      } else {
        return direct;
      }
    }
  } else if (typeof tunnelFn === 'function') {
    await new Promise((resolve, reject) => {
      tunnelFn(config, (err, server) => {
        if (err) {
          console.error('[DB] Failed to establish SSH tunnel:', err);
          return reject(err);
        }
        sshServer = server;
        console.log(`[DB] SSH tunnel established: ${localHost}:${sshLocalPort} -> ${dstHost}:${dstPort}`);
        resolve();
      });
    });
  } else {
    console.warn('[DB] tunnel-ssh module did not export a usable function. Falling back to direct DB connection.');
    return direct;
  }

  // Sanity check: ensure local port is actually accepting connections
  const ensureLocalPortOpen = async (host, port, retries = 5, delayMs = 300) => {
    const tryOnce = () => new Promise((resolve) => {
      const socket = net.createConnection({ host, port }, () => {
        try { socket.destroy(); } catch (_) {}
        resolve(true);
      });
      socket.setTimeout(1000);
      socket.on('error', () => { try { socket.destroy(); } catch (_) {} resolve(false); });
      socket.on('timeout', () => { try { socket.destroy(); } catch (_) {} resolve(false); });
    });
    for (let i = 0; i < retries; i++) {
      const ok = await tryOnce();
      if (ok) return true;
      await new Promise(r => setTimeout(r, delayMs));
    }
    return false;
  };

  const isOpen = await ensureLocalPortOpen(localHost, sshLocalPort);
  if (!isOpen) {
    console.error(`[DB] SSH tunnel listener check failed: ${localHost}:${sshLocalPort} not accepting connections`);
    try { sshServer && sshServer.close && sshServer.close(); } catch (_) {}
    return direct;
  }

  const clean = () => {
    try { sshServer && sshServer.close && sshServer.close(); } catch (_) {}
    sshServer = null;
    sshLocalPort = null;
  };
  if (!listenersRegistered) {
    process.once('exit', clean);
    process.once('SIGINT', clean);
    process.once('SIGTERM', clean);
    listenersRegistered = true;
  }

  return { host: localHost, port: sshLocalPort, isUsingTunnel: true };
}