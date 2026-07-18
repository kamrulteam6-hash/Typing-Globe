import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";

/**
 * proxy.ts only does an optimistic "is there a session" check for
 * /blog/admin routes — this is the real authorization boundary, same
 * pattern as requireSession() in dal.ts but layered with an admin_users
 * membership check. Called at the top of every /blog/admin/* page and
 * every blog-mutating Server Action.
 */
export const isAdmin = cache(async (userId: string) => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();
  return !!data;
});

export async function requireAdmin(next: string) {
  const user = await requireSession(next);
  const admin = await isAdmin(user.id);
  if (!admin) {
    redirect("/");
  }
  return user;
}
