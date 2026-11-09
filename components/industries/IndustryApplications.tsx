import { Check, Compass, Headset, Layers3, ShieldCheck } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { EnquireButton } from "@/components/ui/EnquireButton";

const supportPoints = [
  { label: "Duty-point sizing", icon: Compass },
  { label: "Material selection", icon: Layers3 },
  { label: "Sealing review", icon: ShieldCheck },
] as const;

export function IndustryApplications({ industry }: { industry: Industry }) {
  const hasMultipleGroups = industry.applicationGroups.length > 1;

  return (
    <section
      aria-labelledby="industry-applications-heading"
      className="relative z-10 -mt-8 rounded-t-[30px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] pb-14 pt-11 shadow-[0_-24px_70px_-52px_rgba(0,15,39,0.4)] sm:-mt-10 sm:rounded-t-[40px] sm:pb-20 sm:pt-14"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.7fr)] lg:gap-12">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
              <span
                aria-hidden="true"
                className="h-[3px] w-8 rounded-full bg-brand-yellow"
              />
              Industry Applications
            </p>

            <h2
              id="industry-applications-heading"
              className="mt-4 max-w-[680px] text-[30px] font-extrabold leading-[1.05] tracking-[-0.035em] text-navy-900 sm:text-[36px] lg:text-[40px]"
            >
              Where our pumps{" "}
              <span className="text-brand-blue">prove their worth.</span>
            </h2>

            <p className="mt-4 max-w-[740px] text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15.5px]">
              {industry.intro}
            </p>

            <div
              className={
                hasMultipleGroups
                  ? "mt-8 space-y-7"
                  : "mt-8"
              }
            >
              {industry.applicationGroups.map((group, groupIndex) => (
                <div key={group.title ?? groupIndex}>
                  {group.title && (
                    <h3 className="mb-3 flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-navy-700">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-brand-yellow"
                      />
                      {group.title}
                    </h3>
                  )}

                  <ul
                    className={
                      group.items.length === 1
                        ? "grid grid-cols-1 gap-2.5"
                        : "grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                    }
                  >
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-[0_14px_30px_-30px_rgba(2,27,61,0.55)] transition-colors duration-300 hover:border-brand-yellow/70"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-navy-800 transition-colors duration-300 group-hover:bg-brand-yellow">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                        <span className="text-[13px] font-semibold leading-[1.45] text-navy-800 sm:text-[13.5px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(150deg,#001736_0%,#012A57_58%,#00152F_100%)] p-6 text-white shadow-[0_30px_70px_-44px_rgba(0,15,39,0.85)] sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.16),transparent_68%)] blur-2xl"
              />

              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-navy-900">
                <Headset className="h-5 w-5" strokeWidth={2} />
              </span>

              <p className="relative mt-5 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
                Application Support
              </p>
              <h2 className="relative mt-2 text-[22px] font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-[24px]">
                Let’s match the right pump to your process.
              </h2>
              <p className="relative mt-3 text-[13px] leading-relaxed text-white/65">
                Share your fluid, duty point and operating conditions. Our team
                will help you narrow down the configuration.
              </p>

              <ul className="relative mt-5 space-y-2">
                {supportPoints.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 text-[12px] font-semibold text-white/80"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-brand-yellow"
                      strokeWidth={1.8}
                    />
                    {label}
                  </li>
                ))}
              </ul>

              <EnquireButton
                industry={industry.name}
                source={`industry-support-${industry.slug}`}
                className="relative mt-6 w-full"
              >
                Contact Us
              </EnquireButton>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
