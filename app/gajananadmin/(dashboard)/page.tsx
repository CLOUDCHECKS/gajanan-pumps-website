import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  BadgeCheck,
  Download,
  Inbox,
  PhoneCall,
  RefreshCw,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { LeadsView } from "@/components/admin/LeadsView";
import { getDashboardStats, getEnquiries } from "@/lib/admin";
import { ENQUIRY_STATUSES, statusLabels } from "@/lib/enquiries";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type AdminLeadsPageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
    product?: string;
  }>;
};

const statCards = [
  { key: "total", label: "All leads", status: "", icon: Inbox },
  { key: "new", label: "New", status: "new", icon: Sparkles },
  { key: "contacted", label: "Contacted", status: "contacted", icon: PhoneCall },
  { key: "qualified", label: "Qualified", status: "qualified", icon: BadgeCheck },
  { key: "closed", label: "Closed", status: "closed", icon: Archive },
] as const;

export default async function AdminLeadsPage({
  searchParams,
}: AdminLeadsPageProps) {
  const params = await searchParams;
  const filters = {
    q: params.q?.trim() || undefined,
    status: params.status || undefined,
    product: params.product || undefined,
  };

  const [leadsResult, statsResult] = await Promise.all([
    getEnquiries(filters),
    getDashboardStats(),
  ]);

  const error = leadsResult.error ?? statsResult.error;
  const stats = statsResult.data;
  const hasFilters = Boolean(filters.q || filters.status || filters.product);

  const query = new URLSearchParams();
  if (filters.q) query.set("q", filters.q);
  if (filters.status) query.set("status", filters.status);
  if (filters.product) query.set("product", filters.product);
  const queryString = query.toString();
  const exportHref = `/gajananadmin/export${queryString ? `?${queryString}` : ""}`;
  const refreshHref = `/gajananadmin${queryString ? `?${queryString}` : ""}`;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2.5 text-[9.5px] font-bold uppercase tracking-[0.24em] text-brand-blue">
            <span className="h-[3px] w-7 rounded-full bg-brand-yellow" />
            Enquiry feed
          </p>
          <h1 className="mt-2 text-[28px] font-extrabold leading-tight tracking-[-0.04em] text-navy-900 sm:text-[34px]">
            Leads
          </h1>
          <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
            Website enquiries from the popup and Contact page, newest first.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={refreshHref}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-navy-100 bg-white px-3.5 text-[11.5px] font-bold text-navy-700 transition-colors hover:bg-brand-mist"
          >
            <RefreshCw className="h-3.5 w-3.5" strokeWidth={2} />
            Refresh
          </Link>
          <Link
            href={exportHref}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-navy-900 px-4 text-[11.5px] font-bold text-white transition-colors hover:bg-navy-800"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={2} />
            Export CSV
          </Link>
        </div>
      </div>

      {error && (
        <AdminNotice title="Admin data could not be loaded">
          {error}
        </AdminNotice>
      )}

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          const value =
            card.key === "total" ? stats.total : stats[card.key as keyof typeof stats];
          const active = card.status
            ? filters.status === card.status
            : !filters.status;
          const href = card.status
            ? `/gajananadmin?status=${card.status}`
            : "/gajananadmin";

          return (
            <Link
              key={card.key}
              href={href}
              className={cn(
                "group rounded-[18px] border bg-white p-4 transition-all duration-300",
                active
                  ? "border-brand-yellow/70 shadow-[0_16px_34px_-28px_rgba(255,201,7,0.9)]"
                  : "border-navy-100/80 hover:border-brand-yellow/50",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                    active
                      ? "bg-brand-yellow text-navy-900"
                      : "bg-brand-mist text-navy-600 group-hover:bg-brand-yellow group-hover:text-navy-900",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {card.label}
                </span>
              </div>
              <p className="mt-3 text-[24px] font-extrabold leading-none tracking-[-0.04em] text-navy-900">
                {value ?? 0}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="rounded-[20px] border border-navy-100/80 bg-white p-3.5 shadow-[0_18px_44px_-52px_rgba(2,27,61,0.4)] sm:p-4">
        <form
          method="get"
          action="/gajananadmin"
          className="grid gap-2.5 md:grid-cols-[minmax(0,1fr)_170px_210px_auto_auto]"
        >
          <div className="relative">
            <label htmlFor="lead-search" className="sr-only">
              Search leads
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="lead-search"
              name="q"
              defaultValue={filters.q ?? ""}
              placeholder="Search name, company, email, phone, message…"
              className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-[12.5px] font-medium text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/15"
            />
          </div>

          <div>
            <label htmlFor="lead-status" className="sr-only">
              Filter by status
            </label>
            <select
              id="lead-status"
              name="status"
              defaultValue={filters.status ?? ""}
              className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[12px] font-bold text-navy-800 outline-none transition focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/15"
            >
              <option value="">All statuses</option>
              {ENQUIRY_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {statusLabels[status]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lead-product" className="sr-only">
              Filter by product
            </label>
            <select
              id="lead-product"
              name="product"
              defaultValue={filters.product ?? ""}
              className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-[12px] font-bold text-navy-800 outline-none transition focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/15"
            >
              <option value="">All products</option>
              {products.map((product) => (
                <option key={product.slug} value={product.name}>
                  {product.name}
                  {product.subtitle ? ` — ${product.subtitle}` : ""}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-brand-yellow px-4 text-[11.5px] font-extrabold text-navy-900 transition-colors hover:bg-brand-yellow-soft"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={2.4} />
            Apply
          </button>

          {hasFilters && (
            <Link
              href="/gajananadmin"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 text-[11.5px] font-bold text-slate-500 transition-colors hover:bg-slate-50 hover:text-navy-900"
            >
              <X className="h-3.5 w-3.5" />
              Clear
            </Link>
          )}
        </form>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {leadsResult.data.length} {leadsResult.data.length === 1 ? "lead" : "leads"}
          {hasFilters ? " matching" : ""}
        </p>
        {filters.q && (
          <p className="truncate text-[11px] font-semibold text-slate-400">
            Search: “{filters.q}”
          </p>
        )}
      </div>

      <LeadsView leads={leadsResult.data} filtered={hasFilters} />
    </div>
  );
}
