// app/config/db.js
import mysql from 'mysql2/promise';

let pool;

async function createPool() {
  const host = process.env.MYSQL_HOST || '127.0.0.1';
  const port = Number(process.env.MYSQL_PORT) || 3306;
  pool = await mysql.createPool({
    host,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    connectTimeout: 15000,
  });
  return pool;
}

async function ensureHealthyPool() {
  if (!pool) return createPool();
  try {
    const conn = await pool.getConnection();
    try { await conn.ping(); } finally { conn.release(); }
    return pool;
  } catch (_) {
    try { await pool.end(); } catch (_) {}
    pool = undefined;
    return createPool();
  }
}

export async function connectToDatabase() {
  return ensureHealthyPool();
}
