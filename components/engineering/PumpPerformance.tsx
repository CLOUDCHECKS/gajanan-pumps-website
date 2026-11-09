import { performanceRows } from "@/lib/engineering";
import { Reveal } from "@/components/ui/Reveal";

export function PumpPerformance() {
  return (
    <section
      aria-labelledby="pump-performance-heading"
      className="bg-[#F1F7FD] py-14 sm:py-16 lg:py-[76px]"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              Pump Performance
            </p>
            <h2
              id="pump-performance-heading"
              className="mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-navy-900 sm:text-[38px] lg:text-[42px]"
            >
              A duty window for{" "}
              <span className="text-brand-blue">demanding media.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[620px] text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15.5px] lg:pb-1">
              From thin, watery fluids to pastes with high solids content, the
              pump range is configured around the media, the duty point and the
              operating environment.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-9">
          <div className="overflow-hidden rounded-[24px] border border-navy-100/80 bg-white shadow-[0_30px_70px_-58px_rgba(2,27,61,0.55)] sm:rounded-[30px]">
            <div className="flex flex-col gap-2 border-b border-navy-100/80 bg-navy-900 px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6 lg:px-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow">
                  Performance range
                </p>
                <h3 className="mt-1.5 text-[20px] font-extrabold tracking-[-0.025em] sm:text-[23px]">
                  Operating parameters
                </h3>
              </div>
              <p className="max-w-[330px] text-[11.5px] leading-relaxed text-white/55 sm:text-right">
                Final selection depends on the fluid, application and required
                operating point.
              </p>
            </div>

            <dl className="grid sm:grid-cols-2">
              {performanceRows.map((row, index) => (
                <div
                  key={row.label}
                  className={[
                    "flex items-baseline justify-between gap-5 border-b border-navy-100/70 px-5 py-4 last:border-b-0 sm:px-7 sm:py-[18px] lg:px-9",
                    index % 2 === 1 ? "sm:border-l sm:border-navy-100/70" : "",
                    index >= performanceRows.length - 2 ? "sm:border-b-0" : "",
                  ].join(" ")}
                >
                  <dt className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    {row.label}
                  </dt>
                  <dd className="text-right text-[14px] font-extrabold leading-snug tracking-[-0.015em] text-navy-900 sm:text-[15px]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
