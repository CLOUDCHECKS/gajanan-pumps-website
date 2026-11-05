import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Engineering" };

export default function EngineeringPage() {
  return (
    <PagePlaceholder
      eyebrow="Engineering"
      title="The right pump starts with the right questions."
      intro="Selection, design and engineering support for viscous, abrasive, shear-sensitive and solid-laden fluids."
    />
  );
}
