import Image from "next/image";
import { AboutGlyph } from "@/components/about/AboutGlyph";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ourJourney } from "@/lib/about";
import { cn } from "@/lib/utils";

export function JourneyCapabilities() {
  return (
    <section
      aria-labelledby="journey-capabilities-heading"
      className="relative overflow-hidden rounded-[24px] bg-navy-900 px-5 py-8 text-white shadow-[0_24px_70px_-52px_rgba(0,10,28,0.9)] sm:rounded-[30px] sm:px-8 sm:py-10 lg:px-11 lg:py-12 xl:px-14 2xl:px-16 2xl:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[-140px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(36,105,173,0.32),transparent_66%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-[18%] h-[460px] w-[580px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.1),transparent_68%)] blur-3xl"
      />

      <div className="relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div>
            <Reveal>
              <AboutSectionHeading id="journey-capabilities-heading">
                Our Journey{" "}
                <br />
                <span className="text-brand-yellow">&amp; Capabilities</span>
              </AboutSectionHeading>
            </Reveal>

            <ol className="relative mt-7 space-y-0 border-l border-white/15 pl-5 sm:mt-8 sm:pl-6">
              {ourJourney.milestones.map((milestone, index) => (
                <Reveal
                  as="li"
                  key={milestone.year}
                  delay={90 + index * 80}
                  className={cn(
                    "group relative",
                    index === ourJourney.milestones.length - 1
                      ? "pb-0"
                      : "pb-6 sm:pb-7",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[25px] top-[7px] h-[9px] w-[9px] rounded-full border-2 border-brand-yellow bg-navy-900 transition-colors duration-300 group-hover:bg-brand-yellow sm:-left-[29px]"
                  />
                  <p className="text-[17px] font-extrabold leading-none tracking-[-0.02em] text-brand-yellow sm:text-[19px]">
                    {milestone.year}
                  </p>
                  <p className="mt-1.5 max-w-[410px] text-[12.5px] leading-[1.6] text-white/60 sm:text-[13px]">
                    {milestone.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal
            delay={140}
            className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,#062A54_0%,#001A3F_58%,#00112B_100%)] sm:rounded-[24px]"
          >
            <div className="relative aspect-[5/4] sm:aspect-[16/11] lg:aspect-[5/4]">
              <div
                aria-hidden="true"
                className="absolute inset-x-[8%] top-[8%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,190,0,0.16),transparent_66%)] blur-2xl"
              />
              <div className="absolute inset-[5%]">
                <Image
                  src="/images/about/rotor-body.png"
                  alt="Gajanan progressive cavity pump with cutaway rotor and stator"
                  fill
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="object-contain drop-shadow-[0_34px_38px_rgba(0,0,0,0.48)] transition-transform duration-700 ease-premium hover:scale-[1.025]"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute inset-0 ring-1 ring-inset ring-white/10"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,10,28,0.72)_100%)]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={90}
          className="mt-8 rounded-[20px] bg-white p-5 text-brand-ink shadow-[0_28px_70px_-38px_rgba(0,0,0,0.65)] sm:mt-9 sm:rounded-[24px] sm:p-6 lg:p-7 2xl:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-[19px] font-extrabold leading-tight tracking-[-0.03em] text-navy-900 sm:text-[22px]">
                Manufacturing Strengths
              </h3>
              <span
                aria-hidden="true"
                className="mt-2.5 block h-[3px] w-11 rounded-full bg-brand-yellow"
              />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">
              In-house capability
            </p>
          </div>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4">
            {ourJourney.strengths.map((strength) => (
              <li
                key={`${strength.title}-${strength.subtitle}`}
                className="flex items-start gap-3 rounded-xl border border-navy-100/80 bg-[#FBFDFF] p-3.5 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-brand-yellow">
                  <AboutGlyph
                    icon={strength.icon}
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.5}
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold leading-[1.25] text-navy-900">
                    {strength.title}
                  </p>
                  <p className="mt-0.5 text-[11.5px] leading-[1.45] text-slate-500">
                    {strength.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
