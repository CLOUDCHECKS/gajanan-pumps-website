import { Cog, Handshake, Layers3, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Cog, label: "Handles", sub: "Challenging Fluids" },
  { icon: Layers3, label: "Process-Specific", sub: "Configurations" },
  { icon: ShieldCheck, label: "Reliable &", sub: "Efficient Operation" },
  { icon: Handshake, label: "Long-Term", sub: "Industry Partnership" },
] as const;

export function IndustriesBenefits() {
  return (
    <div className="mx-auto mt-8 w-full max-w-[1604px] px-5 sm:px-8 lg:mt-[34px] lg:px-0">
      <div className="relative overflow-hidden rounded-[16px] bg-[linear-gradient(100deg,#001D46_0%,#012A57_48%,#001A40_100%)] px-6 py-6 text-white sm:px-9 lg:px-[47px] lg:py-[24px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(42,107,168,0.32),transparent_66%)] blur-2xl"
        />

        <div className="relative flex flex-col gap-6 min-[1500px]:flex-row min-[1500px]:items-center min-[1500px]:gap-9">
          <p className="shrink-0 text-[23px] font-extrabold italic leading-[1.16] tracking-[-0.025em] sm:text-[25px] min-[1500px]:w-[420px] min-[1500px]:text-[31px]">
            Pumping Solutions
            <br />
            <span className="text-brand-yellow">Across Diverse Applications</span>
          </p>

          <span
            aria-hidden="true"
            className="hidden h-[66px] w-px shrink-0 bg-white/[0.18] min-[1500px]:block"
          />

          <div className="grid flex-1 grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.label}
                  className="flex items-center gap-4 lg:px-4 lg:first:pl-0 lg:last:pr-0 min-[1500px]:gap-2.5"
                >
                  <Icon
                    className="h-10 w-10 shrink-0 text-brand-yellow min-[1500px]:h-14 min-[1500px]:w-14"
                    strokeWidth={1.5}
                  />
                  <p className="text-[13px] font-semibold leading-[1.3] text-white min-[1500px]:text-[15px] min-[1500px]:leading-[1.36]">
                    {benefit.label}
                    <br />
                    {benefit.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
