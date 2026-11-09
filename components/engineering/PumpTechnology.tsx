import Image from "next/image";
import { Check } from "lucide-react";
import { progressiveCavity } from "@/lib/engineering";
import { Reveal } from "@/components/ui/Reveal";

export function PumpTechnology() {
  const { joint } = progressiveCavity;

  return (
    <section
      aria-labelledby="pump-technology-heading"
      className="bg-white py-14 sm:py-16 lg:py-[76px]"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              {progressiveCavity.eyebrow}
            </p>
            <h2
              id="pump-technology-heading"
              className="mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-navy-900 sm:text-[38px] lg:text-[42px]"
            >
              {progressiveCavity.title}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[620px] text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15.5px] lg:pb-1">
              {progressiveCavity.intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-9">
          <figure className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#F7FAFE_0%,#EDF4FB_100%)] p-4 shadow-[0_30px_70px_-55px_rgba(2,27,61,0.5)] sm:rounded-[30px] sm:p-7 lg:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(16,62,110,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,62,110,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
            />
            <div className="relative mx-auto max-w-[1440px]">
              <Image
                src={progressiveCavity.image}
                alt={progressiveCavity.imageAlt}
                width={1800}
                height={689}
                sizes="(min-width: 1440px) 1360px, 94vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="relative mt-4 flex items-start gap-2.5 border-t border-navy-100/70 pt-4 text-[11.5px] leading-relaxed text-slate-500 sm:text-[12px]">
              <span
                aria-hidden="true"
                className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
              />
              {progressiveCavity.imageCaption}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-12 grid gap-8 border-t border-navy-100/70 pt-10 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
          <Reveal className="order-2 lg:order-1">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              {joint.eyebrow}
            </p>
            <h3 className="mt-4 text-[28px] font-extrabold leading-[1.06] tracking-[-0.035em] text-navy-900 sm:text-[34px]">
              {joint.title}
            </h3>
            <div className="mt-4 space-y-3.5 text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]">
              {joint.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {joint.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-[#F8FBFF] px-3.5 py-2.5 text-[12px] font-semibold text-navy-800"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-navy-900">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#F7FAFE_0%,#EDF4FB_100%)] p-4 sm:rounded-[28px] sm:p-6">
              <Image
                src={joint.image}
                alt={joint.imageAlt}
                width={1800}
                height={575}
                sizes="(min-width: 1024px) 640px, 92vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
