import Image from "next/image";
import Link from "next/link";
import { featuredIndustries } from "@/lib/industries";
import { IndustryGlyph } from "@/components/ui/IndustryGlyph";
import { Reveal } from "@/components/ui/Reveal";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative scroll-mt-20 overflow-hidden rounded-t-[24px] bg-navy-900 pb-14 pt-8 text-white sm:rounded-t-[32px] lg:pb-16 lg:pt-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(30,90,150,0.35),transparent_70%)] blur-2xl"
      />

      <div className="shell relative">
        <div className="grid gap-7 lg:grid-cols-[165px_minmax(0,1fr)] lg:items-start lg:gap-4 xl:grid-cols-[178px_minmax(0,1fr)] 2xl:grid-cols-[188px_minmax(0,1fr)]">
          <Reveal className="lg:pt-[18px]">
            <h2
              id="industries-heading"
              className="text-[30px] font-extrabold leading-[1.03] tracking-[-0.03em] sm:text-[32px]"
            >
              Industries
              <br />
              We Power
            </h2>
            <span className="mt-3 block h-[4px] w-16 rounded-full bg-brand-yellow" />
          </Reveal>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
            {featuredIndustries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 55}>
                <Link
                  id={`industry-${industry.slug}`}
                  href={`/industries/${industry.slug}`}
                  aria-label={`${industry.name} — explore industry solutions`}
                  className="group relative block h-[232px] scroll-mt-28 overflow-hidden rounded-[18px] border border-[#1B5794]/80 bg-navy-800 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-yellow/80 focus-visible:ring-offset-navy-900 sm:h-[250px] lg:h-[300px] lg:-skew-x-[7deg] lg:rounded-[14px] xl:h-[318px] 2xl:h-[336px]"
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.07]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,20,45,0.06)_12%,rgba(2,20,45,0.32)_48%,rgba(1,16,38,0.86)_78%,rgba(0,12,32,0.98)_100%)]"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end gap-2.5 p-3.5 sm:p-4 lg:skew-x-[7deg] lg:p-4 2xl:p-5">
                    <IndustryGlyph
                      icon={industry.icon}
                      className="mb-0.5 h-[22px] w-[22px] shrink-0 text-white xl:h-6 xl:w-6"
                    />
                    <span className="text-[12px] font-extrabold leading-[1.2] text-white xl:text-[13px]">
                      {industry.lines[0]}
                      {industry.lines[1] && (
                        <>
                          <br />
                          {industry.lines[1]}
                        </>
                      )}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-brand-yellow transition-transform duration-500 ease-premium group-hover:scale-x-100"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
