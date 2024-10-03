// app/config/db.js
import mysql from 'mysql2/promise';

let connection;

export async function connectToDatabase() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD, // Default to empty string if not set
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
    });
  }

  return connection;
}