"use client";

import {
  ArrowUpRight,
  Cog,
  Headset,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { useEnquiry } from "@/components/providers/EnquiryProvider";

const benefits = [
  { label: "Custom Design & Engineering", icon: Cog },
  { label: "Multiple Material Options", icon: Layers },
  { label: "Application Consultation", icon: ShieldCheck },
  { label: "After-Sales Support", icon: Headset },
];

export function CustomSolutionBanner() {
  const { openEnquiry } = useEnquiry();

  return (
    <section
      aria-labelledby="custom-solution-heading"
      className="bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)] pb-14 sm:pb-20"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-[24px] bg-navy-950 px-6 py-8 text-white shadow-[0_26px_70px_-48px_rgba(0,10,28,0.9)] sm:rounded-[28px] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.14),transparent_65%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-[22%] h-[280px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(36,105,173,0.28),transparent_68%)] blur-3xl"
          />

          <div className="relative grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,2.1fr)_auto] lg:items-center lg:gap-8">
            <h2
              id="custom-solution-heading"
              className="max-w-[280px] text-[24px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[29px] lg:text-[31px]"
            >
              Need a Customized{" "}
              <span className="italic text-brand-yellow">Pumping Solution?</span>
            </h2>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10 lg:border-l lg:border-white/10 lg:pl-6">
              {benefits.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-start gap-2.5 lg:px-4 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow ring-1 ring-brand-yellow/20">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
                  </span>
                  <span className="text-[11.5px] font-semibold leading-[1.45] text-white/80">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                openEnquiry({ source: "products-custom-solution" })
              }
              className="btn-yellow group w-full px-5 text-[13px] sm:w-auto lg:justify-self-end"
            >
              Talk to Our Experts
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
