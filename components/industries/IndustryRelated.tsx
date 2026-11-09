import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { listingIndustries } from "@/lib/industries";
import { IndustryGlyph } from "@/components/ui/IndustryGlyph";

export function IndustryRelated({ industry }: { industry: Industry }) {
  const pool = listingIndustries.filter((item) => item.slug !== industry.slug);
  const start = Math.max(
    0,
    listingIndustries.findIndex((item) => item.slug === industry.slug),
  );

  const related = Array.from(
    { length: Math.min(3, pool.length) },
    (_, offset) => pool[(start + offset) % pool.length],
  );

  return (
    <section
      aria-labelledby="related-industries-heading"
      className="bg-white py-14 sm:py-16 lg:py-[72px]"
    >
      <div className="shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              More Industries
            </p>
            <h2
              id="related-industries-heading"
              className="mt-3 text-[28px] font-extrabold leading-[1.06] tracking-[-0.035em] text-navy-900 sm:text-[32px]"
            >
              Explore other industries
            </h2>
          </div>

          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-brand-blue transition-colors hover:text-navy-900"
          >
            View all industries
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.4}
            />
          </Link>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/industries/${item.slug}`}
              aria-label={`${item.name} — explore industry solutions`}
              className="group relative flex h-[248px] flex-col justify-end overflow-hidden rounded-[20px] bg-navy-900 p-5 text-white shadow-[0_18px_40px_-32px_rgba(0,15,39,0.7)] transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:shadow-[0_26px_55px_-32px_rgba(0,15,39,0.75)] focus-visible:ring-offset-white sm:h-[230px]"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectPosition: item.imagePosition }}
                className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.06]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,28,0.02)_16%,rgba(0,12,32,0.28)_42%,rgba(0,11,29,0.84)_76%,rgba(0,9,25,0.97)_100%)]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,10,28,0.42)_0%,rgba(0,10,28,0.1)_48%,transparent_72%)]"
              />

              <span className="relative flex items-end justify-between gap-4">
                <span className="flex min-w-0 items-center gap-3.5">
                  <IndustryGlyph
                    icon={item.icon}
                    className="h-[38px] w-[38px] shrink-0 text-white"
                  />
                  <span className="text-[16px] font-extrabold leading-[1.24] tracking-[-0.01em] sm:text-[17px]">
                    {item.lines[0]}
                    {item.lines[1] && (
                      <>
                        <br />
                        {item.lines[1]}
                      </>
                    )}
                  </span>
                </span>

                <span className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-navy-950 transition-transform duration-300 ease-premium group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
