import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <PagePlaceholder
      eyebrow="Industries We Power"
      title="Built around your process."
      intro="Application detail across environment and energy, chemical, pulp and paper, food and pharmaceutical, vegetable oil, oil and gas, and namkeen manufacturing."
    />
  );
}
