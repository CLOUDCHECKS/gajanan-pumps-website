import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { listingIndustries } from "@/lib/industries";
import { IndustryGlyph } from "@/components/ui/IndustryGlyph";
import { Reveal } from "@/components/ui/Reveal";

export function IndustryGrid() {
  return (
    <div className="mx-auto w-full max-w-[1604px] px-5 sm:px-8 lg:px-[13px] min-[1660px]:pr-px">
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {listingIndustries.map((industry, index) => (
          <Reveal key={industry.slug} delay={index * 55}>
            <Link
              id={`industry-card-${industry.slug}`}
              href={`/industries/${industry.slug}`}
              aria-label={`${industry.name} — explore pumping solutions`}
              className="group relative flex h-[250px] scroll-mt-24 flex-col justify-end overflow-hidden rounded-[18px] bg-navy-900 p-5 text-white shadow-[0_18px_40px_-30px_rgba(0,15,39,0.65)] transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-32px_rgba(0,15,39,0.7)] focus-visible:ring-offset-white sm:h-[230px] xl:h-[209px]"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectPosition: industry.imagePosition }}
                className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.06]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,28,0.02)_18%,rgba(0,12,32,0.24)_42%,rgba(0,11,29,0.82)_74%,rgba(0,9,25,0.97)_100%)]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,10,28,0.48)_0%,rgba(0,10,28,0.12)_48%,transparent_72%)]"
              />

              <span className="relative flex items-end justify-between gap-4">
                <span className="flex min-w-0 items-center gap-3.5">
                  <IndustryGlyph
                    icon={industry.icon}
                    className="h-[42px] w-[42px] shrink-0 text-white sm:h-[46px] sm:w-[46px]"
                  />
                  <span className="text-[17px] font-extrabold leading-[1.24] tracking-[-0.01em] text-white sm:text-[19px]">
                    {industry.lines[0]}
                    {industry.lines[1] && (
                      <>
                        <br />
                        {industry.lines[1]}
                      </>
                    )}
                  </span>
                </span>

                <span className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-navy-950 transition-transform duration-300 ease-premium group-hover:translate-x-0.5">
                  <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2.3} />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
