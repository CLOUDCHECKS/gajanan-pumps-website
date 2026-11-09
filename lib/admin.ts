import type { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  isEnquiryStatus,
  type Enquiry,
  type EnquiryStatus,
} from "@/lib/enquiries";

export type EnquiryFilters = {
  q?: string;
  status?: string;
  product?: string;
};

export type AdminDataResult<T> = {
  data: T;
  error: string | null;
};

const SERVICE_ROLE_ERROR =
  "Supabase admin access is not configured. Add SUPABASE_SERVICE_ROLE_KEY to the environment and redeploy.";

function adminClient(): SupabaseClient | null {
  return getSupabaseAdminClient();
}

function normaliseSearch(value: string) {
  return value
    .replace(/[%_,().:*'"\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

export async function getEnquiries(
  filters: EnquiryFilters = {},
  limit = 500,
): Promise<AdminDataResult<Enquiry[]>> {
  const admin = adminClient();
  if (!admin) return { data: [], error: SERVICE_ROLE_ERROR };

  let query = admin
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (filters.q) {
    const search = normaliseSearch(filters.q);
    if (search) {
      const pattern = `%${search}%`;
      query = query.or(
        [
          `name.ilike.${pattern}`,
          `company.ilike.${pattern}`,
          `email.ilike.${pattern}`,
          `phone.ilike.${pattern}`,
          `message.ilike.${pattern}`,
          `application.ilike.${pattern}`,
        ].join(","),
      );
    }
  }

  if (filters.status && isEnquiryStatus(filters.status)) {
    query = query.eq("status", filters.status);
  }

  if (filters.product) {
    query = query.eq("product", filters.product);
  }

  const { data, error } = await query;

  if (error) {
    console.error("[admin] Failed to load enquiries:", error.code);
    return {
      data: [],
      error:
        error.code === "42P01"
          ? "The enquiries table does not exist yet. Run supabase/schema.sql in the Supabase SQL editor."
          : "Could not load enquiries. Check the Supabase configuration and try again.",
    };
  }

  return { data: (data ?? []) as Enquiry[], error: null };
}

export type DashboardStats = {
  total: number;
  new: number;
  contacted: number;
  qualified: number;
  closed: number;
};

export async function getDashboardStats(): Promise<
  AdminDataResult<DashboardStats>
> {
  const admin = adminClient();
  if (!admin) {
    return {
      data: { total: 0, new: 0, contacted: 0, qualified: 0, closed: 0 },
      error: SERVICE_ROLE_ERROR,
    };
  }

  const count = (status?: EnquiryStatus) => {
    let query = admin
      .from("enquiries")
      .select("id", { count: "exact", head: true });
    if (status) query = query.eq("status", status);
    return query;
  };

  const results = await Promise.all([
    count(),
    count("new"),
    count("contacted"),
    count("qualified"),
    count("closed"),
  ]);

  const failed = results.find((result) => result.error);

  return {
    data: {
      total: results[0].count ?? 0,
      new: results[1].count ?? 0,
      contacted: results[2].count ?? 0,
      qualified: results[3].count ?? 0,
      closed: results[4].count ?? 0,
    },
    error: failed
      ? "Could not load lead statistics. Check the Supabase configuration."
      : null,
  };
}

export type DatabaseUsage = {
  databaseBytes: number;
  enquiriesBytes: number;
  enquiriesCount: number;
  oldestEnquiry: string | null;
  newestEnquiry: string | null;
  limitMb: number;
};

export async function getDatabaseUsage(): Promise<
  AdminDataResult<DatabaseUsage | null>
> {
  const admin = adminClient();
  if (!admin) {
    return { data: null, error: SERVICE_ROLE_ERROR };
  }

  const limitRaw = Number(process.env.SUPABASE_DB_LIMIT_MB ?? 500);
  const limitMb = Number.isFinite(limitRaw) && limitRaw > 0 ? limitRaw : 500;

  const { data, error } = await admin.rpc("database_usage");

  if (error) {
    console.error("[admin] Failed to read database usage:", error.code);
    return {
      data: null,
      error:
        error.code === "PGRST202" || error.code === "42883"
          ? "The database usage function is not installed yet. Run the latest supabase/schema.sql in the Supabase SQL editor."
          : "Could not read database storage usage. Check the Supabase configuration and try again.",
    };
  }

  const row = Array.isArray(data) ? data[0] : data;
  if (!row) {
    return {
      data: null,
      error:
        "The database usage function returned no data. Run the latest supabase/schema.sql in the Supabase SQL editor.",
    };
  }

  const record = row as Record<string, unknown>;

  return {
    data: {
      databaseBytes: Number(record.database_size ?? 0),
      enquiriesBytes: Number(record.enquiries_table_size ?? 0),
      enquiriesCount: Number(record.enquiries_count ?? 0),
      oldestEnquiry:
        typeof record.oldest_enquiry === "string"
          ? record.oldest_enquiry
          : null,
      newestEnquiry:
        typeof record.newest_enquiry === "string"
          ? record.newest_enquiry
          : null,
      limitMb,
    },
    error: null,
  };
}
