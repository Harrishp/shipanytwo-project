import { usersTable } from "@/config/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/config/db";

export async function createUser(
  newUser: typeof usersTable.$inferInsert
): Promise<typeof usersTable.$inferSelect> {
  const [user] = await db().insert(usersTable).values(newUser).returning();

  return user;
}

export async function readUser(
  id: number
): Promise<typeof usersTable.$inferSelect> {
  const [user] = await db()
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id));

  return user;
}

export async function updateUser(
  id: number,
  changes: Partial<typeof usersTable.$inferInsert>
): Promise<typeof usersTable.$inferSelect> {
  const [user] = await db()
    .update(usersTable)
    .set(changes)
    .where(eq(usersTable.id, id))
    .returning();

  return user;
}

export async function deleteUser(
  id: number
): Promise<typeof usersTable.$inferSelect> {
  const [user] = await db()
    .delete(usersTable)
    .where(eq(usersTable.id, id))
    .returning();

  return user;
}
