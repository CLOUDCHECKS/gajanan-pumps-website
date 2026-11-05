import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About Gajanan"
      title="Moving fluids positively, since the beginning."
      intro="The company story, manufacturing capability and the people behind Gajanan Pumps & Systems."
    />
  );
}
