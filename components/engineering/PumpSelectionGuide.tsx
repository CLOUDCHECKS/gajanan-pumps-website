import Image from "next/image";
import { Info } from "lucide-react";
import { selectionRows } from "@/lib/engineering";
import { Reveal } from "@/components/ui/Reveal";

export function PumpSelectionGuide() {
  return (
    <section
      id="selection"
      aria-labelledby="pump-selection-heading"
      className="scroll-mt-24 bg-white py-14 sm:py-16 lg:py-[76px]"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              Selection of Pump
            </p>
            <h2
              id="pump-selection-heading"
              className="mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-navy-900 sm:text-[38px] lg:text-[42px]"
            >
              Start with the{" "}
              <span className="text-brand-blue">velocity zone.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[620px] text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15.5px] lg:pb-1">
              The selection table groups applications by internal velocity,
              abrasiveness, viscosity and media type. Use it as a starting point —
              our engineering team confirms the final pump, materials and sealing
              arrangement against your duty.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-9">
          <div className="overflow-hidden rounded-[24px] border border-navy-100/80 bg-white shadow-[0_30px_70px_-58px_rgba(2,27,61,0.55)] sm:rounded-[30px]">
            <div className="flex flex-col gap-2 border-b border-navy-100/80 bg-[linear-gradient(110deg,#00152F_0%,#012A55_70%,#013467_100%)] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6 lg:px-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow">
                  Application guide
                </p>
                <h3 className="mt-1.5 text-[20px] font-extrabold tracking-[-0.025em] sm:text-[23px]">
                  Velocity, abrasion &amp; viscosity
                </h3>
              </div>
              <p className="max-w-[350px] text-[11.5px] leading-relaxed text-white/55 sm:text-right">
                Velocity is shown as the recommended internal flow velocity for
                the media group.
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Pump selection guide by zone, velocity, abrasive content,
                  viscosity and medium types
                </caption>
                <thead>
                  <tr className="bg-[#F7FAFE] text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-500">
                    <th scope="col" className="border-b border-navy-100/80 px-6 py-4 xl:px-8">
                      Zone
                    </th>
                    <th scope="col" className="border-b border-navy-100/80 px-4 py-4">
                      Velocity
                    </th>
                    <th scope="col" className="border-b border-navy-100/80 px-4 py-4">
                      Abrasive
                    </th>
                    <th scope="col" className="border-b border-navy-100/80 px-4 py-4">
                      Viscosity
                    </th>
                    <th scope="col" className="border-b border-navy-100/80 px-4 py-4 xl:px-8">
                      Medium types
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectionRows.map((row, index) => (
                    <tr
                      key={row.zone}
                      className={index % 2 === 1 ? "bg-[#FAFCFF]" : "bg-white"}
                    >
                      <th
                        scope="row"
                        className="border-b border-navy-100/70 px-6 py-4 align-top xl:px-8"
                      >
                        <span className="inline-flex items-center gap-2 text-[12px] font-extrabold text-navy-900">
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-brand-yellow ring-4 ring-brand-yellow/15"
                          />
                          {row.zone}
                        </span>
                      </th>
                      <td className="border-b border-navy-100/70 px-4 py-4 align-top text-[12.5px] font-semibold leading-relaxed text-navy-800">
                        {row.velocity}
                      </td>
                      <td className="border-b border-navy-100/70 px-4 py-4 align-top">
                        <span className="inline-flex rounded-full bg-brand-mist px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-navy-700">
                          {row.abrasive}
                        </span>
                      </td>
                      <td className="border-b border-navy-100/70 px-4 py-4 align-top text-[12.5px] font-semibold leading-relaxed text-navy-800">
                        {row.viscosity}
                      </td>
                      <td className="border-b border-navy-100/70 px-4 py-4 align-top text-[12px] leading-[1.65] text-slate-500 xl:px-8">
                        {row.media}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / tablet cards */}
            <div className="divide-y divide-navy-100/70 lg:hidden">
              {selectionRows.map((row, index) => (
                <div key={row.zone} className="px-5 py-5 sm:px-7">
                  <div className="flex items-center justify-between gap-3">
                    <p className="inline-flex items-center gap-2 text-[13px] font-extrabold text-navy-900">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-brand-yellow ring-4 ring-brand-yellow/15"
                      />
                      {row.zone}
                    </p>
                    <span className="rounded-full bg-brand-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-navy-700">
                      {row.abrasive}
                    </span>
                  </div>
                  <dl className="mt-3 grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl bg-[#F7FAFE] px-3 py-2.5">
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Velocity
                      </dt>
                      <dd className="mt-1 text-[12px] font-bold leading-snug text-navy-800">
                        {row.velocity}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-[#F7FAFE] px-3 py-2.5">
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Viscosity
                      </dt>
                      <dd className="mt-1 text-[12px] font-bold leading-snug text-navy-800">
                        {row.viscosity}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-[12.5px] leading-[1.65] text-slate-500">
                    {row.media}
                  </p>
                  <span className="sr-only">Zone {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.32fr)_minmax(300px,0.68fr)]">
            <figure className="overflow-hidden rounded-[24px] border border-navy-100/80 bg-[#F8FBFF] p-3 shadow-[0_24px_60px_-55px_rgba(2,27,61,0.5)] sm:rounded-[30px] sm:p-5">
              <div className="overflow-hidden rounded-[18px] border border-navy-100/70 bg-white">
                <Image
                  src="/images/engineering/pump-selection-graph.png"
                  alt="Pump selection graphs showing capacity against pressure with speed and viscosity zones, plus a theoretical performance curve for water-like media"
                  width={1558}
                  height={1052}
                  sizes="(min-width: 1024px) 900px, 92vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 flex items-start gap-2.5 px-1 text-[11.5px] leading-relaxed text-slate-500">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-yellow-deep" />
                Selection graph — capacity, pressure, speed and viscosity zones.
                Theoretical values are for water-like media; confirm the duty
                point with our engineering team.
              </figcaption>
            </figure>

            <aside className="flex flex-col justify-between rounded-[24px] border border-navy-100/80 bg-[linear-gradient(160deg,#00152F_0%,#012A55_100%)] p-6 text-white shadow-[0_24px_60px_-50px_rgba(2,27,61,0.7)] sm:rounded-[30px] sm:p-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
                  How to read it
                </p>
                <ul className="mt-4 space-y-3.5">
                  {[
                    "Identify the media group and abrasive content.",
                    "Read the recommended velocity zone.",
                    "Match viscosity against the pump speed range.",
                    "Confirm capacity, pressure and materials with our team.",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-extrabold text-navy-900">
                        {index + 1}
                      </span>
                      <span className="text-[12.5px] leading-[1.6] text-white/70">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/45">
                Selection guidance is not a substitute for a full application
                review. Fluid properties, site conditions and operating profile
                all affect the final configuration.
              </p>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
