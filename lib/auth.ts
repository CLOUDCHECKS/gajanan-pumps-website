import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin-access";

export type AdminUser = {
  id: string;
  email: string;
  name: string;
};

export const getAdminUser = cache(async (): Promise<AdminUser | null> => {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user?.email || !isAdminEmail(user.email)) return null;

  const metadataName =
    typeof user.user_metadata?.full_name === "string"
      ? user.user_metadata.full_name
      : typeof user.user_metadata?.name === "string"
        ? user.user_metadata.name
        : "";

  return {
    id: user.id,
    email: user.email,
    name: metadataName || user.email.split("@")[0],
  };
});

export async function requireAdminUser(): Promise<AdminUser> {
  const user = await getAdminUser();
  if (!user) {
    throw new Error("Unauthorized: an allow-listed admin session is required.");
  }
  return user;
}
