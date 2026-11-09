import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { EnquireButton } from "@/components/ui/EnquireButton";

export function IndustryDetailCta({ industry }: { industry: Industry }) {
  return (
    <section
      aria-labelledby="industry-cta-heading"
      className="bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)] pb-14 sm:pb-20"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-[26px] bg-navy-950 px-6 py-9 text-white shadow-[0_30px_80px_-50px_rgba(0,10,28,0.9)] sm:rounded-[30px] sm:px-9 sm:py-10 lg:px-12 lg:py-11">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.15),transparent_65%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-[18%] h-[320px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(36,105,173,0.32),transparent_68%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:74px_74px]"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[690px]">
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow">
                <PhoneCall className="h-3.5 w-3.5" strokeWidth={2.2} />
                Talk to our team
              </p>
              <h2
                id="industry-cta-heading"
                className="mt-3 text-[26px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[31px] lg:text-[34px]"
              >
                Have a {industry.name} challenge{" "}
                <span className="text-brand-yellow">on your line?</span>
              </h2>
              <p className="mt-3 max-w-[600px] text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
                Tell us about the medium, the duty point and the conditions.
                We will help you specify a pump that fits the application.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <EnquireButton
                industry={industry.name}
                source={`industry-cta-${industry.slug}`}
                className="w-full sm:w-auto"
              >
                Contact Us
              </EnquireButton>
              <Link
                href="/products"
                className="btn-outline group w-full sm:w-auto"
              >
                Explore Products
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.4}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
