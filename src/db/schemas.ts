import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";
import { InferInsertModel } from "drizzle-orm";

export const UpdatesSubscribersTable = mysqlTable(
  "vgseven_updates_subscribers",
  {
    id: int("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).unique().notNull(),
    created_at: timestamp("created_at")
      .$defaultFn(() => sql`NOW()`)
      .notNull(),
  }
);

export type TInsertUpdatesSubscribers = InferInsertModel<
  typeof UpdatesSubscribersTable
>;
