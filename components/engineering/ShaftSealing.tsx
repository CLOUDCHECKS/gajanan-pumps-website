import { CircleDot, Layers3 } from "lucide-react";
import { shaftSealings } from "@/lib/engineering";
import { Reveal } from "@/components/ui/Reveal";

const sealIcons = [Layers3, CircleDot] as const;

export function ShaftSealing() {
  return (
    <section
      aria-labelledby="shaft-sealing-heading"
      className="bg-[#F1F7FD] py-14 sm:py-16 lg:py-[76px]"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(118deg,#00152F_0%,#012349_55%,#001A3D_100%)] px-6 py-9 text-white sm:rounded-[30px] sm:px-9 sm:py-11 lg:px-12 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(42,107,168,0.35),transparent_66%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:60px_60px]"
          />

          <div className="relative max-w-[720px]">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-yellow">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              {shaftSealings.eyebrow}
            </p>
            <h2
              id="shaft-sealing-heading"
              className="mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[38px]"
            >
              {shaftSealings.title}
            </h2>
            <p className="mt-4 text-[13.5px] leading-[1.8] text-white/65 sm:text-[14.5px]">
              {shaftSealings.intro}
            </p>
          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
            {shaftSealings.options.map((option, index) => {
              const Icon = sealIcons[index];
              return (
                <Reveal
                  key={option.title}
                  delay={60 + index * 80}
                  className="group flex h-full flex-col rounded-[20px] border border-white/10 bg-white/[0.055] p-5 transition-colors duration-400 hover:border-brand-yellow/40 hover:bg-white/[0.08] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-navy-900">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
                    </span>
                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.02em] text-white">
                    {option.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-[1.75] text-white/60">
                    {option.description}
                  </p>
                  <p className="mt-auto flex items-center gap-2 border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-yellow">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand-yellow"
                    />
                    {option.emphasis}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
