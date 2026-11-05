import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Service & Support" };

export default function ServiceSupportPage() {
  return (
    <PagePlaceholder
      eyebrow="Service & Support"
      title="Support that stays with the pump."
      intro="Installation, commissioning, spares and after-sales support — end to end."
    />
  );
}
