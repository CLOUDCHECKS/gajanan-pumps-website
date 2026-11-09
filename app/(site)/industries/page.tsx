import type { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { IndustriesBenefits } from "@/components/industries/IndustriesBenefits";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Reliable progressive cavity pump solutions for environment and energy, chemical, pulp and paper, food and pharmaceutical, vegetable oil, oil and gas, namkeen, mineral, cement and construction, and textile industries.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <div className="bg-navy-950">
      <IndustriesHero />
      <section
        aria-label="Industries we serve"
        className="relative rounded-t-[24px] bg-white pb-10 pt-6 sm:rounded-t-[30px] sm:pt-7 lg:rounded-t-[26px] lg:pt-6"
      >
        <IndustryGrid />
        <IndustriesBenefits />
      </section>
    </div>
  );
}
