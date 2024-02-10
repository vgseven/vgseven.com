import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const pg = drizzle(sql);
