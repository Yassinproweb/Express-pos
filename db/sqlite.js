import sqlite3 from "sqlite3";
import { open } from "sqlite3";

export async function initDB() {
  const db = await open({
    filename: "../pos.db",
    driver: sqlite3.Database
  });

  const productQuery = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price REAL,
      stock INTEGER,
      image TEXT
    );
  `;

  const tableQuery = `
    CREATE TABLE IF NOT EXISTS tables (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      booked BOOLEAN,
      capacity INTEGER
    );
  `;

  const orderQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      table_id TEXT, 
      status TEXT, 
      created_at TEXT, 
      total_price REAL
    );
  `;

  const boughtQuery = `
    CREATE TABLE IF NOT EXISTS bought_items (
      order_id TEXT, 
      product_name TEXT,
      quantity INTEGER,
      price REAL
    );
  `;
};
