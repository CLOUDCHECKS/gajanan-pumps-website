export const adminEmails = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export const isAdminAllowlistConfigured = adminEmails.length > 0;

/**
 * Admin access is deliberately deny-by-default when ADMIN_EMAILS is empty.
 * An authenticated Supabase user alone is not enough to read enquiry data.
 */
export function isAdminEmail(email?: string | null) {
  if (!email || adminEmails.length === 0) return false;
  return adminEmails.includes(email.trim().toLowerCase());
}
