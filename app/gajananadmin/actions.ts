"use server";

import { revalidatePath } from "next/cache";
import { requireAdminUser } from "@/lib/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { isEnquiryStatus } from "@/lib/enquiries";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function updateEnquiryStatus(formData: FormData) {
  await requireAdminUser();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!UUID_PATTERN.test(id) || !isEnquiryStatus(status)) {
    throw new Error("Invalid status update.");
  }

  const admin = getSupabaseAdminClient();
  if (!admin) throw new Error("Supabase admin access is not configured.");

  const { error } = await admin
    .from("enquiries")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("[admin] Status update failed:", error.code);
    throw new Error("Could not update the lead status.");
  }

  revalidatePath("/gajananadmin");
  revalidatePath("/gajananadmin/storage");
}

export async function deleteEnquiry(formData: FormData) {
  await requireAdminUser();

  const id = String(formData.get("id") ?? "");

  if (!UUID_PATTERN.test(id)) {
    throw new Error("Invalid lead reference.");
  }

  const admin = getSupabaseAdminClient();
  if (!admin) throw new Error("Supabase admin access is not configured.");

  const { error } = await admin.from("enquiries").delete().eq("id", id);

  if (error) {
    console.error("[admin] Delete failed:", error.code);
    throw new Error("Could not delete this lead.");
  }

  revalidatePath("/gajananadmin");
  revalidatePath("/gajananadmin/storage");
}
