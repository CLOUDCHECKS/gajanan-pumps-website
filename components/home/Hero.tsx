"use client";

import Image from "next/image";
import { ArrowRight, Cog, Factory, Globe2, MessageSquare, ShieldCheck, Wrench } from "lucide-react";
import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { trustItems } from "@/lib/navigation";

const trustIcons = {
  expertise: Cog,
  manufacturing: Factory,
  quality: ShieldCheck,
  presence: Globe2,
  support: Wrench,
} as const;

export function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Atmospheric industrial backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_28%,#0C3D72_0%,#001A3F_52%,#000E24_100%)]" />
        <Image
          src="/images/industries/industry-5.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_36%] opacity-[0.62] [mask-image:linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.45)_30%,black_56%)]"
        />
        <div className="absolute inset-0 bg-[#0A2F57]/22" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,7,20,0.68)_0%,rgba(0,12,32,0.18)_24%,rgba(1,18,42,0.16)_56%,rgba(0,9,26,0.60)_100%)]" />

        {/* Sweeping blue arc that frames the pump, as in the reference */}
        <svg
          viewBox="0 0 1672 540"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="hero-arc" x1="0" y1="0" x2="0.85" y2="1">
              <stop offset="0%" stopColor="#2A6BA8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#154B7E" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0B3358" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path d="M520 -40 C 840 90 1030 270 1700 600 L 1700 -40 Z" fill="url(#hero-arc)" />
          <path
            d="M520 -40 C 840 90 1030 270 1700 600"
            stroke="rgba(122, 180, 233, 0.45)"
            strokeWidth="1.8"
          />
          <path
            d="M610 -40 C 920 110 1110 300 1740 620"
            stroke="rgba(110, 170, 224, 0.16)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Left scrim keeps the copy legible over the imagery */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,8,22,0.97)_0%,rgba(0,15,38,0.94)_26%,rgba(0,16,40,0.62)_44%,rgba(0,16,40,0.18)_66%,transparent_100%)]" />
        <div className="absolute -right-[8%] top-[10%] h-[560px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(255,176,0,0.08),transparent_66%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(160,196,232,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(160,196,232,0.35)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_78%_46%,black_0%,transparent_62%)]"
        />
      </div>

      {/* Pump cutout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[54px] right-[3.5%] z-[1] hidden w-[73%] max-w-[1240px] lg:block xl:w-[72%]"
      >
        <Image
          src="/images/hero-pump-cutout.png"
          alt=""
          width={2129}
          height={726}
          priority
          sizes="(min-width: 1280px) 82vw, 78vw"
          className="h-auto w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
        />
        <span className="absolute inset-x-[12%] bottom-[-18px] h-10 rounded-full bg-black/45 blur-2xl" />
      </div>

      <div className="relative z-10 flex min-h-[720px] flex-col pt-[104px] sm:pt-[116px] lg:min-h-[540px] lg:pt-[111px] xl:min-h-[540px]">
        <div className="shell flex-1">
          <div className="max-w-[900px] lg:pl-6 xl:pl-7">
            <p className="eyebrow animate-fade-up">Progressive Cavity Pumps</p>

            <h1 className="mt-3 animate-fade-up text-[clamp(2.35rem,3.55vw,3.8rem)] font-extrabold leading-[1.0] tracking-[-0.045em] [animation-delay:80ms] sm:mt-[15px]">
              <span className="block">Engineered to</span>
              <span className="block">
                Move <span className="text-brand-yellow">Challenging Fluids</span>
              </span>
            </h1>

            <p className="mt-2 max-w-[620px] animate-fade-up text-[15px] leading-[1.42] text-white/80 [animation-delay:160ms] sm:text-[17px] xl:text-[18.5px]">
              Progressive cavity pumps and fluid-handling solutions
              <br className="hidden sm:block" /> for viscous, abrasive,
              shear-sensitive and solid-laden fluids
              <br className="hidden sm:block" /> across critical industries.
            </p>

            <div className="mt-3.5 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center sm:gap-6">
              <a href="#products" className="btn-yellow group h-11 w-full px-9 sm:w-auto">
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                onClick={() => openEnquiry({ source: "hero" })}
                className="btn-outline group h-11 w-full px-7 sm:w-auto"
              >
                <MessageSquare className="h-[18px] w-[18px]" strokeWidth={1.8} />
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* Mobile / tablet pump */}
          <div className="relative mt-6 lg:hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-4 h-24 rounded-full bg-brand-yellow/15 blur-2xl"
            />
            <Image
              src="/images/hero-pump-cutout.png"
              alt="Progressive cavity pump with golden fluid flowing from the discharge flange"
              width={2129}
              height={726}
              sizes="(max-width: 1024px) 118vw, 1px"
              className="relative -ml-[8%] w-[116%] max-w-none drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        <div className="relative mt-8 pb-6 sm:mt-10 lg:mt-4 lg:pb-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,rgba(0,12,34,0.55)_55%,rgba(0,12,34,0.7)_100%)]"
          />
          <div className="shell">
            <div className="mx-auto grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 lg:flex lg:max-w-[1010px] lg:items-center lg:justify-between lg:gap-0">
              {trustItems.map((item, index) => {
                const Icon = trustIcons[item.icon];
                return (
                  <div
                    key={item.icon}
                    className={
                      index === 0
                        ? "flex items-center gap-3 lg:flex-1"
                        : "flex items-center gap-3 lg:flex-1 lg:border-l lg:border-white/20 lg:pl-6 xl:pl-8"
                    }
                  >
                    <Icon
                      className="h-8 w-8 shrink-0 text-brand-yellow"
                      strokeWidth={1.5}
                    />
                    <p className="text-[12.5px] font-bold leading-[1.25] text-white sm:text-[13px]">
                      {item.label}
                      <span className="mt-0.5 block font-medium text-white/70">
                        {item.sub}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
