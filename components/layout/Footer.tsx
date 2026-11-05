"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { footerLinks } from "@/lib/navigation";
import { Logo } from "@/components/ui/Logo";
import { useEnquiry } from "@/components/providers/EnquiryProvider";

export function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.10),transparent_65%)] blur-2xl"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-6 border-b border-white/10 py-9 lg:flex-row lg:items-center lg:justify-between lg:py-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-yellow">
              Fluid-handling, engineered
            </p>
            <h2 className="mt-2 max-w-[620px] text-[26px] font-extrabold leading-tight tracking-[-0.02em] sm:text-[32px]">
              Have a challenging fluid? Let’s move it positively.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => openEnquiry({ source: "footer" })}
              className="btn-yellow group w-full sm:w-auto"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link href="/contact" className="btn-outline w-full sm:w-auto">
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-9 py-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Logo />
            <p className="mt-4 max-w-[290px] text-[13px] leading-relaxed text-white/60">
              Progressive cavity pumps and fluid-handling solutions for viscous,
              abrasive, shear-sensitive and solid-laden fluids.
            </p>
            <p className="mt-4 text-[12px] font-semibold italic text-white/45">
              Moving Fluids Positively
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-white/70 transition-colors hover:text-brand-yellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gajanan Pumps &amp; Systems. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Progressive Cavity Pumps</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>DIN EN ISO 9001 Quality System</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
