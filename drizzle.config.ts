import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./db/schemas.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
   connectionString: process.env.POSTGRES_URL as string
  },
} satisfies Config;
