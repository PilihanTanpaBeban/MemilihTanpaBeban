/** @type {import('next').NextConfig} */
// next.config.js
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Prevent Next from treating the `/app` directory as App Router root
    appDir: false,
  },
  env: {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_PORT: process.env.MYSQL_PORT,
    X_API_KEY: process.env.X_API_KEY,
    NEXT_PUBLIC_X_API_KEY: process.env.X_API_KEY,
    FACTS_TABLE_NAME: process.env.FACTS_TABLE_NAME || 'Tbl_Facts',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
