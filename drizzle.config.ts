import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/db/schemas.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URI as string,
  },
} satisfies Config;
