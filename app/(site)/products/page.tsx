import type { Metadata } from "next";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { CustomSolutionBanner } from "@/components/products/CustomSolutionBanner";

export const metadata: Metadata = {
  title: "Products",
  description:
    "A comprehensive range of progressive cavity pumps and specialized pumping solutions, engineered for a wide variety of fluids and applications.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCatalog />
      <CustomSolutionBanner />
    </>
  );
}
