import {
  Biohazard,
  Droplets,
  Feather,
  FlaskConical,
  Gauge,
  Layers3,
  Link2,
  Mountain,
  Waves,
} from "lucide-react";
import { applicationCapabilities } from "@/lib/industries";

const capabilityIcons = [
  Layers3,
  Gauge,
  Waves,
  Feather,
  Mountain,
  Droplets,
  FlaskConical,
  Link2,
  Biohazard,
] as const;

export function IndustryCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="bg-[#F1F7FD] py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1604px] px-5 sm:px-8 lg:px-[41px]">
        <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(112deg,#00152F_0%,#012349_56%,#001A3D_100%)] px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-12 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(42,107,168,0.32),transparent_66%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.08),transparent_70%)] blur-2xl"
          />

          <div className="relative grid gap-9 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[340px_minmax(0,1fr)]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow">
                Capability
              </p>
              <h2
                id="capabilities-heading"
                className="mt-3 text-[28px] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-[32px]"
              >
                Wide Range
                <br />
                of Applications
              </h2>
              <span className="mt-4 block h-[4px] w-16 rounded-full bg-brand-yellow" />
              <p className="mt-4 max-w-[280px] text-[13px] leading-relaxed text-white/65">
                Progressive cavity pumps handle an unusually broad range of
                fluids and operating conditions.
              </p>
            </div>

            <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {applicationCapabilities.map((capability, index) => {
                const Icon = capabilityIcons[index] ?? Layers3;
                return (
                  <li
                    key={capability}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-3.5 transition-colors duration-300 hover:border-brand-yellow/35 hover:bg-white/[0.07]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                    </span>
                    <span className="text-[12.5px] font-semibold leading-[1.4] text-white/85">
                      {capability}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
