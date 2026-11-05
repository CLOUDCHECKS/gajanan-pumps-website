import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <PagePlaceholder
      eyebrow="Resources"
      title="Documentation, when you need it."
      intro="Brochures, datasheets and technical downloads for the Gajanan range."
    />
  );
}
