import { AboutGlyph } from "@/components/about/AboutGlyph";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { LaurelWreath } from "@/components/about/LaurelWreath";
import { Reveal } from "@/components/ui/Reveal";
import { whoWeAre } from "@/lib/about";

export function WhoWeAre() {
  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="rounded-[24px] bg-white px-5 py-8 shadow-[0_20px_60px_-48px_rgba(2,27,61,0.5)] sm:rounded-[30px] sm:px-8 sm:py-10 lg:px-11 lg:py-12 xl:px-14 2xl:px-16 2xl:py-14"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.34fr)_minmax(340px,0.86fr)] lg:gap-0">
        <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
          <Reveal>
            <AboutSectionHeading id="who-we-are-heading">
              {whoWeAre.title}
            </AboutSectionHeading>
            <p className="mt-5 max-w-[670px] text-[14px] leading-[1.75] text-slate-600 sm:text-[15px] lg:max-w-[640px]">
              {whoWeAre.intro}
            </p>
          </Reveal>

          <ul className="mt-7 space-y-2.5 sm:mt-8 sm:space-y-3">
            {whoWeAre.points.map((point, index) => (
              <Reveal as="li" key={point.title} delay={80 + index * 70}>
                <div className="group flex items-start gap-3.5 rounded-2xl border border-transparent px-1 py-2 transition-colors duration-300 hover:border-navy-100/70 hover:bg-brand-mist/45 sm:gap-4 sm:px-2.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-navy-700 ring-1 ring-inset ring-navy-100/80 transition-colors duration-300 group-hover:bg-white sm:h-11 sm:w-11">
                    <AboutGlyph icon={point.icon} className="h-[19px] w-[19px] sm:h-5 sm:w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[14.5px] font-extrabold leading-snug tracking-[-0.01em] text-navy-900 sm:text-[15.5px]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-[1.6] text-slate-500 sm:text-[13.5px]">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          delay={120}
          className="flex flex-col justify-center border-t border-navy-100 pt-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14 2xl:pl-20"
        >
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-navy-400">
            {whoWeAre.trustedSince}
          </p>

          <div className="relative mx-auto mt-3 flex h-[210px] w-full max-w-[330px] items-center justify-center">
            <LaurelWreath className="absolute inset-0 h-full w-full text-brand-yellow" />
            <div className="relative flex w-[250px] flex-col items-center justify-center text-center">
              <p className="text-[58px] font-extrabold leading-none tracking-[-0.06em] text-navy-900 sm:text-[64px]">
                {whoWeAre.years}
              </p>
              <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.32em] text-navy-500">
                {whoWeAre.yearsLabel}
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-2.5">
            {whoWeAre.signals.map((signal) => (
              <div
                key={signal.label}
                className="flex flex-col items-center justify-center rounded-xl border border-navy-100/70 bg-brand-mist/55 px-2.5 py-4 text-center transition-colors duration-300 hover:bg-brand-mist"
              >
                <AboutGlyph
                  icon={signal.icon}
                  className="h-5 w-5 text-navy-700"
                  strokeWidth={1.5}
                />
                <p className="mt-2 text-[11.5px] font-bold leading-[1.25] text-navy-800">
                  {signal.label}
                </p>
                {signal.sublabel && (
                  <p className="mt-0.5 text-[10px] font-semibold leading-tight text-navy-500">
                    {signal.sublabel}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
