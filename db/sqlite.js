import sqlite3 from "sqlite3";
import { open } from "sqlite3";

export async function initDB() {
  const db = await open({
    filename: "../pos.db",
    driver: sqlite3.Database
  });


};
