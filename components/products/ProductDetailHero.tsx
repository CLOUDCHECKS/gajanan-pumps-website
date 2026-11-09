import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { Product } from "@/lib/products";
import type { ProductDetail } from "@/lib/product-details";
import { ProductEnquiryButton } from "@/components/products/ProductEnquiryButton";
import { cn } from "@/lib/utils";

type ProductDetailHeroProps = {
  product: Product;
  detail?: ProductDetail;
};

export function ProductDetailHero({ product, detail }: ProductDetailHeroProps) {
  const seriesTitle = detail?.seriesTitle ?? product.name;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/about/hero-plant.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_50%] opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000F27_0%,rgba(0,15,39,0.98)_36%,rgba(0,23,54,0.78)_62%,rgba(0,23,54,0.48)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[62%] bg-[linear-gradient(118deg,#0B5CF6_0%,#0B4FCC_44%,#082B55_100%)] opacity-90 [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(ellipse_at_68%_38%,rgba(84,163,255,0.48),transparent_62%)] [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:92px_92px]" />
      </div>

      <div className="shell relative z-10">
        <div className="grid gap-10 pb-16 pt-[116px] lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center lg:gap-8 lg:pb-20 lg:pt-[132px]">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-white/65"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
              >
                <Home className="h-3.5 w-3.5" strokeWidth={2.2} />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/30" />
              <Link
                href="/products"
                className="transition-colors hover:text-brand-yellow"
              >
                Products
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/30" />
              <span aria-current="page" className="text-white">
                {product.name}
              </span>
            </nav>

            <h1 className="mt-5 max-w-[680px] text-[clamp(2.5rem,4.8vw,4.2rem)] font-extrabold leading-[1.01] tracking-[-0.045em]">
              {seriesTitle}
            </h1>

            {product.subtitle && (
              <p className="mt-2 text-[clamp(1.05rem,1.7vw,1.35rem)] font-bold italic text-brand-yellow">
                {product.subtitle}
              </p>
            )}

            <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.7] text-white/75 sm:text-[16px]">
              {product.category}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductEnquiryButton
                product={product.name}
                source={`product-hero-${product.slug}`}
                label="Contact Us"
                className="w-full sm:w-auto"
              />
              {detail && (
                <Link
                  href="#specifications"
                  className="btn-outline w-full sm:w-auto"
                >
                  View Specifications
                </Link>
              )}
            </div>

            {detail && (
              <dl
                className={cn(
                  "mt-8 grid max-w-[600px] grid-cols-2 gap-2.5",
                  detail.specifications.length <= 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-4",
                )}
              >
                {detail.specifications.map((specification) => (
                  <div
                    key={specification.label}
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-3 backdrop-blur-sm"
                  >
                    <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/45">
                      {specification.label}
                    </dt>
                    <dd className="mt-1 text-[13px] font-extrabold leading-tight text-white">
                      {specification.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="relative mx-auto w-full max-w-[640px] lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-x-[12%] bottom-4 h-20 rounded-full bg-black/30 blur-2xl"
            />
            <Image
              src={product.image}
              alt={`Gajanan ${product.category}`}
              width={800}
              height={560}
              priority
              sizes="(min-width: 1024px) 46vw, 88vw"
              className="relative mx-auto h-auto w-auto max-h-[300px] max-w-full object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.4)] sm:max-h-[360px] lg:max-h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
