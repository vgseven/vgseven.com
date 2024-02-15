import { pgTable, integer, varchar, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { InferInsertModel } from "drizzle-orm";

export const UpdatesSubscribersTable = pgTable("vgseven_updates_subscribers", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).unique().notNull(),
  created_at: timestamp("created_at")
    .$defaultFn(() => sql`NOW()`)
    .notNull(),
});

export type TInsertUpdatesSubscribers = InferInsertModel<
  typeof UpdatesSubscribersTable
>;
