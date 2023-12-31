import pg from 'pg';
require('dotenv').config();

const db = new pg.Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.PORT ? parseInt(process.env.PORT, 10): undefined
});

export default db; 