"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { cn } from "@/lib/utils";

type AdminLoginFormProps = {
  configured: boolean;
  allowlistConfigured: boolean;
  reason: string | null;
};

export function AdminLoginForm({
  configured,
  allowlistConfigured,
  reason,
}: AdminLoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const ready = configured && allowlistConfigured;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ready || submitting) return;

    setError(null);
    setSubmitting(true);

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setError(
          "Supabase is not configured. Add the project URL and anon key, then redeploy.",
        );
        return;
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError(
          signInError.message === "Invalid login credentials"
            ? "The email or password is incorrect."
            : signInError.message,
        );
        return;
      }

      router.replace("/gajananadmin");
      router.refresh();
    } catch {
      setError("Could not sign in right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-[26px] border border-white/80 bg-white p-6 shadow-[0_35px_80px_-55px_rgba(2,27,61,0.65)] sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-brand-yellow">
        <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
        Admin access
      </p>
      <h2 className="mt-2 text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-navy-900 sm:text-[32px]">
        Sign in to the CRM.
      </h2>
      <p className="mt-2.5 text-[13px] leading-[1.65] text-slate-500">
        Use the admin account created in Supabase Authentication. This page is
        private and is not linked from the public website.
      </p>

      {reason && (
        <p
          role="status"
          className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-[12px] font-medium leading-relaxed text-amber-800"
        >
          {reason}
        </p>
      )}

      {!ready && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3">
          <p className="flex items-center gap-2 text-[12px] font-extrabold text-amber-900">
            <AlertTriangle className="h-4 w-4" strokeWidth={2} />
            Setup required
          </p>
          <p className="mt-1.5 text-[11.5px] leading-relaxed text-amber-800">
            {!configured
              ? "Add the Supabase project URL and anon key to the environment."
              : "Add at least one admin email to ADMIN_EMAILS."}{" "}
            See <code className="rounded bg-white/70 px-1 py-0.5">.env.example</code>{" "}
            for the full list, then redeploy.
          </p>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="admin-email" className="field-label">
            Email
          </label>
          <div className="relative">
            <Mail
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="admin-email"
              type="email"
              inputMode="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={!ready || submitting}
              className="field pl-10"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="admin-password" className="field-label">
            Password
          </label>
          <div className="relative">
            <LockKeyhole
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={!ready || submitting}
              className="field pl-10 pr-11"
              placeholder="Your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 px-3.5 py-3 text-[12.5px] font-medium text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={!ready || submitting}
          className={cn("btn-yellow w-full", !ready && "cursor-not-allowed opacity-60")}
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in
            </>
          ) : (
            <>
              Sign in
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-[11px] font-semibold text-slate-400">
        <a href="/" className="transition-colors hover:text-brand-blue">
          ← Back to website
        </a>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5" />
          Private &amp; noindex
        </span>
      </div>
    </div>
  );
}
