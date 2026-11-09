import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/lib/products";
import type { ProductDetail } from "@/lib/product-details";
import { ProductEnquiryButton } from "@/components/products/ProductEnquiryButton";

type ProductDetailCtaProps = {
  product: Product;
  detail?: ProductDetail;
};

export function ProductDetailCta({ product, detail }: ProductDetailCtaProps) {
  const title = detail?.seriesTitle ?? product.name;

  return (
    <section
      aria-labelledby="product-cta-heading"
      className="bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)] pb-14 sm:pb-20"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-[24px] bg-navy-950 px-6 py-8 text-white shadow-[0_26px_70px_-48px_rgba(0,10,28,0.9)] sm:rounded-[28px] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.14),transparent_65%)] blur-2xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
                Product Support
              </p>
              <h2
                id="product-cta-heading"
                className="mt-2 max-w-[640px] text-[25px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[30px] lg:text-[32px]"
              >
                Ready to specify the {title}?
              </h2>
              <p className="mt-2 max-w-[560px] text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
                Share your application with our team and we will help you take
                the next step.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <ProductEnquiryButton
                product={product.name}
                source={`product-cta-${product.slug}`}
                label="Contact Us"
                className="w-full sm:w-auto"
              />
              <Link href="/products" className="btn-outline w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
