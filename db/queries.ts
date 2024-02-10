import { pg } from "@/db/pg";
import {
  TInsertUpdatesSubscribers,
  UpdatesSubscribersTable,
} from "@/db/schemas";
import { desc } from "drizzle-orm";

export async function GetMaxID() {
  return pg
    .select({ id: UpdatesSubscribersTable.id })
    .from(UpdatesSubscribersTable)
    .orderBy(desc(UpdatesSubscribersTable.id))
    .limit(1);
}

export async function InsertUser(props: TInsertUpdatesSubscribers) {
  return pg.insert(UpdatesSubscribersTable).values(props).execute();
}
