import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIndustry,
  industries,
} from "@/lib/industries";
import { IndustryDetailHero } from "@/components/industries/IndustryDetailHero";
import { IndustryApplications } from "@/components/industries/IndustryApplications";
import { IndustryCapabilities } from "@/components/industries/IndustryCapabilities";
import { IndustryRelated } from "@/components/industries/IndustryRelated";
import { IndustryDetailCta } from "@/components/industries/IndustryDetailCta";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.name} Solutions`,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} Solutions`,
      description: industry.summary,
      images: [{ url: industry.image }],
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <IndustryDetailHero industry={industry} />
      <IndustryApplications industry={industry} />
      <IndustryCapabilities />
      <IndustryRelated industry={industry} />
      <IndustryDetailCta industry={industry} />
    </>
  );
}
