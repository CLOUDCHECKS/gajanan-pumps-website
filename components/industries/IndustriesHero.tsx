import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function IndustriesHero() {
  return (
    <section
      aria-labelledby="industries-page-heading"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      {/* Chemical plant photograph sits to the right, beneath the fixed header. */}
      <div className="absolute inset-x-0 bottom-0 top-[76px] lg:left-[27%]">
        <Image
          src="/images/industries/industries-hero.jpg"
          alt="Illuminated chemical plant at dusk"
          fill
          priority
          sizes="(min-width: 1024px) 73vw, 100vw"
          className="object-cover object-[54%_58%]"
        />
        <div className="absolute inset-0 bg-[#0A2F57]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_44%,rgba(255,171,64,0.16),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,13,34,0.97)_0%,rgba(0,20,47,0.88)_38%,rgba(0,22,50,0.5)_68%,rgba(0,22,50,0.2)_100%)] lg:hidden" />
      </div>

      {/* Sweeping blue arc between the copy and the plant imagery. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1672 296"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      >
        <defs>
          <linearGradient id="industries-hero-fill" x1="0" y1="0" x2="1" y2="0.35">
            <stop offset="0%" stopColor="#001A3C" />
            <stop offset="62%" stopColor="#052B58" />
            <stop offset="100%" stopColor="#0B3C73" />
          </linearGradient>
          <linearGradient id="industries-hero-band" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#2A6BA8" stopOpacity="0.72" />
            <stop offset="55%" stopColor="#16518A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0A3566" stopOpacity="0.24" />
          </linearGradient>
        </defs>

        <path
          d="M0 0 H912 C 904 82 848 178 756 296 H0 Z"
          fill="url(#industries-hero-fill)"
        />
        <path
          d="M912 0 C 904 82 848 178 756 296 L 804 296 C 896 176 952 84 962 0 Z"
          fill="url(#industries-hero-band)"
        />
        <path
          d="M912 0 C 904 82 848 178 756 296"
          stroke="rgba(118, 178, 234, 0.48)"
          strokeWidth="1.6"
        />
        <path
          d="M932 0 C 924 84 868 182 778 296"
          stroke="rgba(118, 178, 234, 0.18)"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-[330px] w-full max-w-[1604px] flex-col px-5 pb-10 pt-[101px] sm:px-8 sm:pb-12 lg:h-[296px] lg:min-h-0 lg:px-[41px] lg:pb-0">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[15px] font-semibold text-white/80"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
          >
            <Home className="h-[17px] w-[17px]" strokeWidth={2.2} />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/40" strokeWidth={2.4} />
          <span aria-current="page" className="text-white">
            Industries
          </span>
        </nav>

        <h1
          id="industries-page-heading"
          className="mt-4 text-[42px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:mt-[11px] lg:text-[64px]"
        >
          Industries We{" "}
          <span className="italic text-brand-yellow">Serve</span>
        </h1>

        <p className="mt-3 max-w-[640px] text-[16px] leading-[1.5] text-white/85 sm:text-[19.5px] lg:mt-2">
          Reliable pumping solutions for a wide range of industries, handling
          viscous, abrasive, shear-sensitive and solid-laden fluids with ease.
        </p>
      </div>
    </section>
  );
}
