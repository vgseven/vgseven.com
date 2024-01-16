import { pscale } from "@/db/pscale";
import {
  TInsertUpdatesSubscribers,
  UpdatesSubscribersTable,
} from "@/db/schemas";
import { desc } from "drizzle-orm";

export async function GetMaxID() {
  return pscale
    .select({ id: UpdatesSubscribersTable.id })
    .from(UpdatesSubscribersTable)
    .orderBy(desc(UpdatesSubscribersTable.id))
    .limit(1);
}

export async function InsertUser(props: TInsertUpdatesSubscribers) {
  return pscale.insert(UpdatesSubscribersTable).values(props).execute();
}
