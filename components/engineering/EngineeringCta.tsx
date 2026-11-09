import { ArrowRight, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";
import { EnquireButton } from "@/components/ui/EnquireButton";

export function EngineeringCta() {
  return (
    <section aria-labelledby="engineering-cta-heading" className="bg-white pb-14 sm:pb-16 lg:pb-20">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(118deg,#00152F_0%,#01254B_54%,#001C40_100%)] px-6 py-9 text-white sm:rounded-[32px] sm:px-9 sm:py-11 lg:px-12 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.16),transparent_66%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:56px_56px]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-yellow">
                <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-brand-yellow" />
                Application engineering
              </p>
              <h2
                id="engineering-cta-heading"
                className="mt-4 max-w-[640px] text-[28px] font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-[36px]"
              >
                Tell us the fluid. We&apos;ll define the pump.
              </h2>
              <p className="mt-3.5 max-w-[560px] text-[13.5px] leading-[1.8] text-white/60 sm:text-[14.5px]">
                Share your flow rate, pressure, viscosity, temperature and
                application. Our team will recommend the right model, materials
                and sealing arrangement.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:justify-end">
              <EnquireButton
                source="engineering-cta"
                icon="message"
                className="w-full sm:w-auto"
              >
                Request a selection review
              </EnquireButton>
              <Link href="/resources" className="btn-outline group w-full sm:w-auto">
                <FileText className="h-4 w-4" strokeWidth={2} />
                View resources
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
