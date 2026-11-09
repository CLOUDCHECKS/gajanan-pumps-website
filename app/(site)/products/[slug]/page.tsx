import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { getProductDetail } from "@/lib/product-details";
import { ProductDetailHero } from "@/components/products/ProductDetailHero";
import { ProductDetailBody } from "@/components/products/ProductDetailBody";
import { ProductDetailCta } from "@/components/products/ProductDetailCta";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const detail = getProductDetail(slug);
  const title = detail?.seriesTitle ?? product.name;

  return {
    title,
    description: product.category,
    openGraph: {
      title,
      description: product.category,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const detail = getProductDetail(slug);

  return (
    <>
      <ProductDetailHero product={product} detail={detail} />
      <ProductDetailBody product={product} detail={detail} />
      <ProductDetailCta product={product} detail={detail} />
    </>
  );
}
