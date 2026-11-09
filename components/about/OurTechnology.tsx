import Image from "next/image";
import { AboutGlyph } from "@/components/about/AboutGlyph";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ourTechnology } from "@/lib/about";

export function OurTechnology() {
  return (
    <section
      aria-labelledby="our-technology-heading"
      className="relative overflow-hidden rounded-[24px] border border-white/80 bg-[#EDF4FB] px-5 py-8 shadow-[0_20px_60px_-50px_rgba(2,27,61,0.5)] sm:rounded-[30px] sm:px-8 sm:py-10 lg:px-11 lg:py-12 xl:px-14 2xl:px-16 2xl:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[-120px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(72,139,203,0.16),transparent_66%)] blur-2xl"
      />

      <div className="relative">
        <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-end lg:gap-10 xl:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)]">
          <Reveal>
            <AboutSectionHeading id="our-technology-heading">
              Our Technology
            </AboutSectionHeading>
          </Reveal>
          <Reveal delay={70}>
            <p className="max-w-[860px] text-[13.5px] leading-[1.75] text-slate-600 sm:text-[14.5px] lg:pb-1 lg:text-[15px] lg:leading-[1.8]">
              {ourTechnology.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
          <Reveal
            delay={110}
            className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-navy-950 shadow-[0_26px_60px_-40px_rgba(0,15,39,0.9)] sm:min-h-[360px] sm:rounded-[24px] lg:min-h-0"
          >
            <Image
              src="/images/about/rotor-core.png"
              alt="Cutaway of the rotor and stator geometry inside a progressive cavity pump"
              fill
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="scale-[1.06] object-cover object-center"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,transparent_34%,rgba(0,15,39,0.5)_100%)]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,15,39,0.32)_0%,transparent_26%,transparent_58%,rgba(0,11,29,0.9)_100%)]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 ring-1 ring-inset ring-white/10"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-brand-yellow sm:text-[10px]">
                Single-screw progressive cavity
              </p>
              <p className="mt-1.5 text-[17px] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[19px]">
                Rotor and stator geometry
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={170}
            className="rounded-[20px] border border-white bg-white p-5 shadow-[0_24px_60px_-36px_rgba(2,27,61,0.45)] sm:rounded-[24px] sm:p-6 lg:p-7 2xl:p-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.03em] text-navy-900 sm:text-[24px]">
                  Key Characteristics
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-2.5 block h-[3px] w-11 rounded-full bg-brand-yellow"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">
                8 characteristics
              </p>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {ourTechnology.characteristics.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-xl border border-navy-100/80 bg-[#FBFDFF] p-3 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-navy-700">
                    <AboutGlyph icon={item.icon} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[12px] font-extrabold leading-snug text-navy-900 sm:text-[12.5px]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-[1.45] text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
