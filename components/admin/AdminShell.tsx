"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Database,
  Inbox,
  LogOut,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { lockBodyScroll } from "@/lib/scroll-lock";
import { cn } from "@/lib/utils";

type AdminShellProps = {
  user: {
    name: string;
    email: string;
  };
  children: ReactNode;
};

const navItems = [
  { href: "/gajananadmin", label: "Leads", icon: Inbox, exact: true },
  {
    href: "/gajananadmin/storage",
    label: "Storage",
    icon: Database,
    exact: false,
  },
] as const;

function initials(name: string) {
  return name
    .split(/[\s._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function AdminShell({ user, children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const release = lockBodyScroll();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      release();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const signOut = async () => {
    setSigningOut(true);
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase?.auth.signOut();
    } finally {
      router.replace("/gajananadmin/login");
      router.refresh();
    }
  };

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-5 pb-6 pt-5">
        <Image
          src="/images/brand/monogram-gold.png"
          alt=""
          aria-hidden="true"
          width={640}
          height={535}
          className="h-9 w-auto"
        />
        <div className="min-w-0">
          <p className="truncate text-[14px] font-extrabold leading-tight tracking-[-0.02em] text-white">
            Gajanan CRM
          </p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">
            Enquiry desk
          </p>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
          className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mx-5 flex items-center gap-2 rounded-xl border border-brand-yellow/20 bg-brand-yellow/[0.07] px-3 py-2.5">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-yellow" />
        <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow/80">
          Private workspace
        </p>
      </div>

      <nav aria-label="CRM navigation" className="mt-6 px-3">
        <p className="px-3 pb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/25">
          Workspace
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href, item.exact);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-bold transition-all duration-200",
                    active
                      ? "bg-brand-yellow text-navy-900 shadow-[0_10px_24px_-14px_rgba(255,201,7,0.8)]"
                      : "text-white/60 hover:bg-white/[0.07] hover:text-white",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-[17px] w-[17px]",
                      active ? "text-navy-900" : "text-white/40 group-hover:text-brand-yellow",
                    )}
                    strokeWidth={1.9}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 px-3">
        <p className="px-3 pb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-white/25">
          Public site
        </p>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-bold text-white/60 transition-colors hover:bg-white/[0.07] hover:text-white"
        >
          <ArrowUpRight
            className="h-[17px] w-[17px] text-white/40 group-hover:text-brand-yellow"
            strokeWidth={1.9}
          />
          View website
        </a>
      </div>

      <div className="mt-auto border-t border-white/10 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.045] p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[11px] font-extrabold text-navy-900">
            {initials(user.name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-bold text-white">{user.name}</p>
            <p className="truncate text-[10px] font-medium text-white/40">
              {user.email}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={signOut}
          disabled={signingOut}
          className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[12px] font-bold text-white/50 transition-colors hover:bg-white/[0.07] hover:text-white disabled:opacity-60"
        >
          <LogOut className="h-[16px] w-[16px]" strokeWidth={1.9} />
          {signingOut ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </div>
  );

  const pageLabel = pathname.startsWith("/gajananadmin/storage")
    ? "Storage"
    : "Leads";

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-navy-900">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] bg-[linear-gradient(180deg,#00152F_0%,#001A3A_55%,#000F27_100%)] lg:block">
        {sidebar}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-navy-950/65 backdrop-blur-sm"
          />
          <aside className="relative h-full w-[288px] max-w-[86vw] bg-[linear-gradient(180deg,#00152F_0%,#001A3A_55%,#000F27_100%)] shadow-modal">
            {sidebar}
          </aside>
        </div>
      )}

      <div className="lg:pl-[264px]">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-navy-100/80 bg-white/90 px-4 backdrop-blur-md sm:px-6 lg:h-[70px] lg:px-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 text-navy-700 transition-colors hover:bg-brand-mist lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
              Gajanan CRM
            </p>
            <p className="truncate text-[15px] font-extrabold tracking-[-0.02em] text-navy-900">
              {pageLabel}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Secure session
            </span>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-navy-100 bg-white px-3 text-[11px] font-bold text-navy-700 transition-colors hover:bg-brand-mist"
            >
              Website
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9 xl:px-10">
          <div className="mx-auto w-full max-w-[1500px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
