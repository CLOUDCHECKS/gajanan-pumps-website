import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import { isAdminAllowlistConfigured } from "@/lib/admin-access";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Sign In",
  robots: { index: false, follow: false },
};

const reasonMessages: Record<string, string> = {
  auth: "Please sign in to open the CRM.",
  unauthorized:
    "That account is signed in but is not on the admin allow-list. Sign in with an authorised account or add its email to ADMIN_EMAILS.",
  config:
    "The CRM is waiting for Supabase configuration. Add the environment variables listed below, then redeploy.",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const user = await getAdminUser();
  if (user) redirect("/gajananadmin");

  const params = await searchParams;
  const reason = params.reason ? reasonMessages[params.reason] ?? null : null;
  const configured = isSupabaseConfigured;
  const allowlistConfigured = isAdminAllowlistConfigured;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#EAF2FA]">
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <section
          aria-labelledby="admin-login-brand-heading"
          className="relative hidden overflow-hidden bg-navy-950 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_16%,#0C3D72_0%,#001A3F_48%,#000C20_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:58px_58px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-24 h-[380px] w-[380px] rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.12),transparent_66%)] blur-2xl"
          />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
              </span>
              <div>
                <p className="text-[14px] font-extrabold tracking-[-0.02em] text-white">
                  Gajanan Pumps
                </p>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-white/40">
                  Private CRM
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-[480px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow">
                Sales &amp; enquiry desk
              </p>
              <h1
                id="admin-login-brand-heading"
                className="mt-4 text-[42px] font-extrabold leading-[1.02] tracking-[-0.045em] xl:text-[50px]"
              >
                Every enquiry,{" "}
                <span className="text-gradient-yellow">in one place.</span>
              </h1>
              <p className="mt-5 max-w-[420px] text-[14px] leading-[1.75] text-white/60">
                Review website enquiries, move leads through the pipeline and
                keep an eye on database storage — from one private workspace.
              </p>
            </div>
          </div>

          <div className="relative mt-12 grid gap-3">
            {[
              "Popup and Contact page enquiries in a single feed",
              "Status pipeline from new to closed",
              "Delete individual leads to free storage",
              "Live database usage in the Storage tab",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[12.5px] font-semibold text-white/70"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                </span>
                {item}
              </div>
            ))}
          </div>

          <p className="relative mt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
            Gajanan Pumps &amp; Systems · Kanpur
          </p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-10 xl:px-16">
          <div className="w-full max-w-[440px]">
            <div className="mb-7 flex items-center justify-between gap-4 lg:hidden">
              <div>
                <p className="text-[14px] font-extrabold tracking-[-0.02em] text-navy-900">
                  Gajanan Pumps
                </p>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-navy-400">
                  Private CRM
                </p>
              </div>
              <a
                href="/"
                className="text-[11px] font-bold text-brand-blue transition-colors hover:text-navy-900"
              >
                View website
              </a>
            </div>

            <AdminLoginForm
              configured={configured}
              allowlistConfigured={allowlistConfigured}
              reason={reason}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
