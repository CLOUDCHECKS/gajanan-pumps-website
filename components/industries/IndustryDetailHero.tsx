import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { EnquireButton } from "@/components/ui/EnquireButton";

export function IndustryDetailHero({ industry }: { industry: Industry }) {
  return (
    <section
      aria-labelledby="industry-page-heading"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <div className="absolute inset-0">
        <Image
          src={industry.image}
          alt={`${industry.name} process application`}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: industry.imagePosition }}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000D22_0%,rgba(0,14,34,0.96)_34%,rgba(0,18,42,0.78)_60%,rgba(0,18,42,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,8,22,0.72)_0%,rgba(0,8,22,0.12)_38%,rgba(0,12,30,0.78)_100%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.12),transparent_66%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_46%,rgba(30,91,153,0.28),transparent_58%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1604px] px-5 pb-14 pt-[112px] sm:px-8 sm:pb-16 lg:px-[41px] lg:pb-[72px] lg:pt-[124px]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-white/75"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
          >
            <Home className="h-[15px] w-[15px]" strokeWidth={2.2} />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/40" strokeWidth={2.4} />
          <Link
            href="/industries"
            className="transition-colors hover:text-brand-yellow"
          >
            Industries
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/40" strokeWidth={2.4} />
          <span aria-current="page" className="text-white">
            {industry.name}
          </span>
        </nav>

        <p className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-yellow">
          <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-brand-yellow" />
          Industry Solutions
        </p>

        <h1
          id="industry-page-heading"
          className="mt-4 max-w-[900px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]"
        >
          {industry.name}
        </h1>

        <p className="mt-4 max-w-[660px] text-[15px] leading-[1.6] text-white/80 sm:text-[17px]">
          {industry.summary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <EnquireButton
            industry={industry.name}
            source={`industry-${industry.slug}`}
            className="btn-yellow h-12 w-full px-8 sm:w-auto"
          >
            Contact Us
          </EnquireButton>
          <Link
            href="/industries"
            className="btn-outline group h-12 w-full px-7 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
