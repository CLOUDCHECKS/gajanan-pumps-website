import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact Us"
      title="Tell us what you're moving."
      intro="Share your fluid, duty point and application. Our team will help you specify the right pump."
    />
  );
}
