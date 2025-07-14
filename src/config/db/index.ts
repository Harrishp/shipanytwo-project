import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

export function db() {
  return drizzle({ connection: { url: process.env.DB_FILE_NAME! } });
}
