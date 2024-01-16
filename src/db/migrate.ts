import { drizzle } from "drizzle-orm/planetscale-serverless";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { connect } from "@planetscale/database";

const pscale = drizzle(
  connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  })
);

await migrate(pscale, { migrationsFolder: "../../drizzle" });
