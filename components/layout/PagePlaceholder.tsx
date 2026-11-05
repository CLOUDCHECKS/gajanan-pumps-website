"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageSquare } from "lucide-react";
import { useEnquiry } from "@/components/providers/EnquiryProvider";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

/**
 * Temporary, on-brand holding page for routes whose detailed designs have not
 * been supplied yet. It contains no invented company claims.
 */
export function PagePlaceholder({ eyebrow, title, intro }: PagePlaceholderProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-[150px] text-white sm:pb-20 sm:pt-[170px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(31,95,163,0.38),transparent_45%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.08),transparent_65%)] blur-2xl"
        />
        <div className="shell relative">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-[900px] text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            {title}
          </h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-white/70 sm:text-[17px]">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#EDF5FD_0%,#F8FBFF_100%)] py-14 sm:py-20">
        <div className="shell">
          <div className="mx-auto max-w-[760px] rounded-[26px] border border-white bg-white p-8 text-center shadow-[0_26px_70px_-45px_rgba(2,27,61,0.45)] sm:p-12">
            <span className="mx-auto block h-[4px] w-12 rounded-full bg-brand-yellow" />
            <h2 className="mt-5 text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-navy-900 sm:text-[30px]">
              The full page is being prepared.
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              We are building this section with Gajanan Pumps&apos; approved
              content. In the meantime, our team can answer your questions
              directly.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openEnquiry({ source: `placeholder-${title}` })}
                className="btn-yellow w-full sm:w-auto"
              >
                <MessageSquare className="h-[18px] w-[18px]" />
                Talk to an Expert
              </button>
              <Link href="/" className="btn-navy w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
            <Link
              href="/#products"
              className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-blue transition-colors hover:text-navy-800"
            >
              Explore the product portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
