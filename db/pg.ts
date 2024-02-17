import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const pg = drizzle(neon(process.env.POSTGRES_URL as string));
