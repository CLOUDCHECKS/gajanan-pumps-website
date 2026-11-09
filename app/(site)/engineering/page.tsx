import type { Metadata } from "next";
import { EngineeringHero } from "@/components/engineering/EngineeringHero";
import { EngineeringCharacteristics } from "@/components/engineering/EngineeringCharacteristics";
import { PumpTechnology } from "@/components/engineering/PumpTechnology";
import { ShaftSealing } from "@/components/engineering/ShaftSealing";
import { PumpPerformance } from "@/components/engineering/PumpPerformance";
import { PumpSelectionGuide } from "@/components/engineering/PumpSelectionGuide";
import { EngineeringCta } from "@/components/engineering/EngineeringCta";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Progressive cavity pump engineering — characteristics, cardinal joints, shaft sealing, pump performance and selection guidance from Gajanan Pumps & Systems.",
};

export default function EngineeringPage() {
  return (
    <>
      <EngineeringHero />
      <EngineeringCharacteristics />
      <PumpTechnology />
      <ShaftSealing />
      <PumpPerformance />
      <PumpSelectionGuide />
      <EngineeringCta />
    </>
  );
}
