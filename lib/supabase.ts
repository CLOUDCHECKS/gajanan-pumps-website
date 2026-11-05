import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client.
 *
 * The public anon key is used deliberately: the `enquiries` table exposes an
 * insert-only policy to anonymous traffic and no read policy. Never put the
 * service-role key in this file or in any NEXT_PUBLIC_* variable.
 */
let client: SupabaseClient | null | undefined;

export function getSupabaseServerClient(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    client = null;
    return client;
  }

  client = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return client;
}
