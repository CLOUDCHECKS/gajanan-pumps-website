import Image from "next/image";
import { AboutGlyph } from "@/components/about/AboutGlyph";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ourApproach } from "@/lib/about";

export function OurApproach() {
  return (
    <section
      aria-labelledby="our-approach-heading"
      className="rounded-[24px] bg-white px-5 py-8 shadow-[0_20px_60px_-48px_rgba(2,27,61,0.5)] sm:rounded-[30px] sm:px-8 sm:py-10 lg:px-11 lg:py-12 xl:px-14 2xl:px-16 2xl:py-14"
    >
      <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-end lg:gap-10 xl:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)]">
        <Reveal>
          <AboutSectionHeading id="our-approach-heading">
            Our Approach
          </AboutSectionHeading>
        </Reveal>
        <Reveal delay={70}>
          <p className="max-w-[900px] text-[13.5px] leading-[1.75] text-slate-600 sm:text-[14.5px] lg:pb-1 lg:text-[15px] lg:leading-[1.8]">
            {ourApproach.intro}
          </p>
        </Reveal>
      </div>

      <Reveal delay={130} className="relative mt-7 sm:mt-8">
        <div className="relative overflow-hidden rounded-[20px] bg-navy-950 sm:rounded-[26px] lg:rounded-[30px] lg:rounded-tl-[160px]">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.4/1]">
            <Image
              src="/images/about/engineer.jpg"
              alt="Technician operating a CNC machining centre"
              fill
              sizes="(min-width: 1024px) 1500px, 92vw"
              className="object-cover object-[46%_38%] transition-transform duration-[1200ms] ease-premium hover:scale-[1.02]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,46,0.5)_0%,rgba(0,20,46,0.08)_34%,rgba(0,15,38,0.12)_58%,rgba(0,15,38,0.42)_100%)]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,26,0.06)_0%,transparent_44%,rgba(0,12,30,0.5)_100%)]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 ring-1 ring-inset ring-white/10"
            />
            <span
              aria-hidden="true"
              className="absolute left-5 top-5 hidden h-[3px] w-16 rounded-full bg-brand-yellow sm:block lg:left-8 lg:top-8"
            />
          </div>
        </div>

        <div className="relative z-10 mx-3 -mt-20 rounded-[20px] border border-white/70 bg-white/90 p-5 shadow-[0_30px_70px_-34px_rgba(2,27,61,0.65)] backdrop-blur-xl sm:mx-6 sm:-mt-24 sm:p-6 lg:absolute lg:bottom-7 lg:right-7 lg:mx-0 lg:mt-0 lg:w-[56%] lg:p-6 xl:bottom-8 xl:right-8 xl:w-[53%] xl:p-7 2xl:w-[50%] 2xl:p-8">
          <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.03em] text-navy-900 sm:text-[24px]">
            {ourApproach.panelTitle}
          </h3>
          <span
            aria-hidden="true"
            className="mt-2.5 block h-[3px] w-11 rounded-full bg-brand-yellow"
          />

          <div className="mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
            {ourApproach.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-navy-800 ring-1 ring-inset ring-brand-yellow/30">
                  <AboutGlyph icon={feature.icon} className="h-[17px] w-[17px]" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-[12.5px] font-extrabold leading-snug text-navy-900 sm:text-[13px]">
                    {feature.title}
                  </h4>
                  <p className="mt-0.5 text-[11.5px] leading-[1.55] text-slate-500 sm:text-[12px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
