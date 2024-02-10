import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";

const pg = drizzle(sql);

await migrate(pg, { migrationsFolder: "../../drizzle" });
