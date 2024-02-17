import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";

const pg = drizzle(neon(process.env.POSTGRES_URL as string));

await migrate(pg, { migrationsFolder: "../../drizzle" });
