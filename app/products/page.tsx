import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <PagePlaceholder
      eyebrow="Product Range"
      title="Progressive cavity pumps, built for the duty."
      intro="The complete Gajanan range — general purpose, cardinal joint, hopper, chemical, hygienic, dosing and the Namkeen extruder."
    />
  );
}
