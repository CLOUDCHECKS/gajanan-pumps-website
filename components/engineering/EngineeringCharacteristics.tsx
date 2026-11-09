import {
  Activity,
  ArrowDownUp,
  Gauge,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Waves,
  Wind,
  Wrench,
} from "lucide-react";
import { characteristics, type EngineeringIcon } from "@/lib/engineering";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<EngineeringIcon, typeof Gauge> = {
  "positive-displacement": Gauge,
  "self-priming": Wind,
  "low-npsh": Waves,
  "uniform-flow": Activity,
  "non-clogging": ShieldCheck,
  reversible: RotateCcw,
  "low-velocity": ArrowDownUp,
  simplicity: Wrench,
  "stuffing-box": Ruler,
  "mechanical-seal": ShieldCheck,
  joint: ArrowDownUp,
  shield: ShieldCheck,
};

export function EngineeringCharacteristics() {
  return (
    <section
      aria-labelledby="engineering-characteristics-heading"
      className="relative z-10 -mt-6 rounded-t-[28px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] pb-14 pt-11 shadow-[0_-24px_70px_-55px_rgba(0,15,39,0.5)] sm:-mt-8 sm:rounded-t-[40px] sm:pb-20 sm:pt-14"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              Characteristics
            </p>
            <h2
              id="engineering-characteristics-heading"
              className="mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-navy-900 sm:text-[38px] lg:text-[42px]"
            >
              Built around the way{" "}
              <span className="text-brand-blue">fluids move.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[620px] text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15.5px] lg:pb-1">
              Every characteristic below comes from the single-screw pumping
              principle — a low internal velocity, a sealed cavity and a
              positive-displacement action that stays stable across the duty
              range.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {characteristics.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal
                key={item.title}
                delay={40 + index * 45}
                className="group relative flex h-full flex-col rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-[0_20px_45px_-42px_rgba(2,27,61,0.6)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-yellow/60 hover:shadow-[0_26px_55px_-36px_rgba(2,27,61,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-navy-700 ring-1 ring-inset ring-navy-100/70 transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-navy-900">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-[10px] font-extrabold tracking-[0.18em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-extrabold leading-tight tracking-[-0.01em] text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.65] text-slate-500">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
