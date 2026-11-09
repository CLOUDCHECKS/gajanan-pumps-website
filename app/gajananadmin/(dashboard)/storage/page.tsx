import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  HardDrive,
  Inbox,
  PieChart,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { getDatabaseUsage, getDashboardStats } from "@/lib/admin";
import { formatBytes, formatDate } from "@/lib/enquiries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Storage",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminStoragePage() {
  const [usageResult, statsResult] = await Promise.all([
    getDatabaseUsage(),
    getDashboardStats(),
  ]);

  const usage = usageResult.data;
  const stats = statsResult.data;
  const error = usageResult.error ?? statsResult.error;

  const limitBytes = (usage?.limitMb ?? 500) * 1024 * 1024;
  const usedBytes = usage?.databaseBytes ?? 0;
  const percentage = limitBytes > 0 ? (usedBytes / limitBytes) * 100 : 0;
  const remainingBytes = Math.max(limitBytes - usedBytes, 0);
  const averageBytes =
    usage && usage.enquiriesCount > 0
      ? usage.enquiriesBytes / usage.enquiriesCount
      : 0;

  const severity =
    percentage >= 90 ? "critical" : percentage >= 70 ? "warning" : "healthy";

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2.5 text-[9.5px] font-bold uppercase tracking-[0.24em] text-brand-blue">
            <span className="h-[3px] w-7 rounded-full bg-brand-yellow" />
            Database
          </p>
          <h1 className="mt-2 text-[28px] font-extrabold leading-tight tracking-[-0.04em] text-navy-900 sm:text-[34px]">
            Storage
          </h1>
          <p className="mt-1 max-w-xl text-[12.5px] leading-relaxed text-slate-500">
            Database usage for the enquiry CRM. Website images and documents are
            served from the site deploy, not from Supabase storage.
          </p>
        </div>
        <Link
          href="/gajananadmin?status=closed"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-navy-100 bg-white px-3.5 text-[11.5px] font-bold text-navy-700 transition-colors hover:bg-brand-mist"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Review closed leads
        </Link>
      </div>

      {error && (
        <AdminNotice title="Storage data could not be loaded">
          {error}
        </AdminNotice>
      )}

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <section
          aria-labelledby="storage-summary-heading"
          className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,#00152F_0%,#012A55_62%,#001A3D_100%)] p-5 text-white shadow-[0_28px_60px_-50px_rgba(2,27,61,0.8)] sm:p-7"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.14),transparent_66%)] blur-2xl"
          />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
                Plan database usage
              </p>
              <h2
                id="storage-summary-heading"
                className="mt-2 text-[20px] font-extrabold tracking-[-0.025em] sm:text-[24px]"
              >
                {formatBytes(usedBytes)} used
                <span className="text-white/35"> of {usage?.limitMb ?? 500} MB</span>
              </h2>
            </div>
            <span
              className={cn(
                "rounded-full border px-3 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.12em]",
                severity === "critical"
                  ? "border-red-400/40 bg-red-400/10 text-red-200"
                  : severity === "warning"
                    ? "border-amber-300/40 bg-amber-300/10 text-amber-200"
                    : "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
              )}
            >
              {percentage.toFixed(1)}%
            </span>
          </div>

          <div className="relative mt-6">
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.min(Number(percentage.toFixed(1)), 100)}
              aria-label="Database storage used"
              className="h-2.5 overflow-hidden rounded-full bg-white/10"
            >
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  severity === "critical"
                    ? "bg-red-400"
                    : severity === "warning"
                      ? "bg-amber-300"
                      : "bg-brand-yellow",
                )}
                style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">
              <span>0 MB</span>
              <span>{usage?.limitMb ?? 500} MB allowance</span>
            </div>
          </div>

          <div className="relative mt-7 grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                Remaining
              </p>
              <p className="mt-1 text-[17px] font-extrabold text-brand-yellow">
                {formatBytes(remainingBytes)}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                Enquiries table
              </p>
              <p className="mt-1 text-[17px] font-extrabold text-white">
                {usage ? formatBytes(usage.enquiriesBytes) : "—"}
              </p>
            </div>
          </div>

          {percentage >= 70 && (
            <p className="relative mt-4 flex items-start gap-2 rounded-xl border border-amber-300/25 bg-amber-300/10 px-3 py-2.5 text-[11px] leading-relaxed text-amber-100">
              <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Storage is filling up. Delete old or closed leads from the Leads tab
              to free database space.
            </p>
          )}
        </section>

        <section className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-[20px] border border-navy-100/80 bg-white p-5 shadow-[0_18px_44px_-52px_rgba(2,27,61,0.4)]">
            <div className="flex items-center justify-between">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Total leads stored
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mist text-navy-600">
                <Inbox className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 text-[26px] font-extrabold leading-none tracking-[-0.04em] text-navy-900">
              {usage?.enquiriesCount ?? stats.total}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold text-slate-400">
              {stats.new} new · {stats.contacted} contacted · {stats.qualified} qualified
            </p>
          </div>

          <div className="rounded-[20px] border border-navy-100/80 bg-white p-5 shadow-[0_18px_44px_-52px_rgba(2,27,61,0.4)]">
            <div className="flex items-center justify-between">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Average per lead
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mist text-navy-600">
                <PieChart className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 text-[26px] font-extrabold leading-none tracking-[-0.04em] text-navy-900">
              {averageBytes ? formatBytes(averageBytes) : "—"}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold text-slate-400">
              Approximate table space per enquiry
            </p>
          </div>

          <div className="rounded-[20px] border border-navy-100/80 bg-white p-5 shadow-[0_18px_44px_-52px_rgba(2,27,61,0.4)] sm:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-between">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Enquiry timeline
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mist text-navy-600">
                <Database className="h-3.5 w-3.5" />
              </span>
            </div>
            <dl className="mt-2.5 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between gap-3">
                <dt className="font-semibold text-slate-400">Oldest</dt>
                <dd className="font-bold text-navy-800">
                  {usage?.oldestEnquiry ? formatDate(usage.oldestEnquiry) : "—"}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="font-semibold text-slate-400">Newest</dt>
                <dd className="font-bold text-navy-800">
                  {usage?.newestEnquiry ? formatDate(usage.newestEnquiry) : "—"}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      <section className="rounded-[22px] border border-navy-100/80 bg-white p-5 shadow-[0_18px_44px_-52px_rgba(2,27,61,0.4)] sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[720px]">
            <p className="flex items-center gap-2 text-[9.5px] font-bold uppercase tracking-[0.2em] text-brand-blue">
              <HardDrive className="h-3.5 w-3.5" />
              How storage works
            </p>
            <h2 className="mt-2 text-[18px] font-extrabold tracking-[-0.025em] text-navy-900 sm:text-[20px]">
              Only enquiry data counts against the database.
            </h2>
            <p className="mt-2 text-[12px] leading-[1.75] text-slate-500">
              Product images, brochure files and page media are part of the
              website deploy and do not consume Supabase database space. The
              figure above is the total database size reported by Supabase,
              including the enquiries table and PostgreSQL overhead. Deleting a
              lead permanently removes its row and frees the space it used.
            </p>
          </div>
          <Link
            href="/gajananadmin"
            className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-brand-yellow px-4 text-[11.5px] font-extrabold text-navy-900 transition-colors hover:bg-brand-yellow-soft"
          >
            Manage leads
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {!error && !usage && (
        <AdminNotice tone="info" title="Usage function not installed">
          Run the latest <code className="rounded bg-white/70 px-1">supabase/schema.sql</code>{" "}
          in the Supabase SQL editor to enable database size reporting.
        </AdminNotice>
      )}
    </div>
  );
}
