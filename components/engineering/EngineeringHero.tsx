import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { engineeringHero, engineeringStats } from "@/lib/engineering";
import { EnquireButton } from "@/components/ui/EnquireButton";

export function EngineeringHero() {
  return (
    <section
      aria-labelledby="engineering-page-heading"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/about/hero-plant.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%] opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000C20_0%,rgba(0,13,32,0.96)_38%,rgba(0,20,46,0.72)_66%,rgba(0,18,42,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,8,22,0.75)_0%,rgba(0,8,22,0.1)_45%,rgba(0,10,26,0.62)_100%)]" />
      </div>

      <div className="shell relative pb-8 pt-[132px] sm:pt-[150px] lg:pb-9 lg:pt-[168px]">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-white/70 sm:text-[13px]"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
          >
            <Home className="h-[15px] w-[15px]" strokeWidth={2.2} />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/35" strokeWidth={2.4} />
          <span aria-current="page" className="text-white">
            Engineering
          </span>
        </nav>

        <div className="mt-8 max-w-[860px] sm:mt-10">
          <p className="eyebrow">{engineeringHero.eyebrow}</p>
          <h1
            id="engineering-page-heading"
            className="mt-5 text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[52px] lg:text-[62px]"
          >
            {engineeringHero.title}
          </h1>
          <p className="mt-5 max-w-[700px] text-[15px] leading-[1.7] text-white/70 sm:text-[17px]">
            {engineeringHero.intro}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <EnquireButton
              source="engineering-hero"
              icon="message"
              className="w-full sm:w-auto"
            >
              Discuss your application
            </EnquireButton>
            <Link
              href="#selection"
              className="btn-outline group w-full sm:w-auto"
            >
              Pump selection guide
              <ChevronRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </Link>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 pt-7 sm:mt-12 sm:grid-cols-4 lg:mt-14">
          {engineeringStats.map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0 sm:pl-5 sm:first:pl-0">
              <dt className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
                {stat.label}
              </dt>
              <dd className="mt-2 text-[21px] font-extrabold leading-none tracking-[-0.03em] text-brand-yellow sm:text-[25px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
