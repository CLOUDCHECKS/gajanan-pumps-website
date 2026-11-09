import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Product } from "@/lib/products";
import type { ProductDetail } from "@/lib/product-details";
import { ProductEnquiryButton } from "@/components/products/ProductEnquiryButton";
import { ProductSectionHeading } from "@/components/products/ProductSectionHeading";
import { cn } from "@/lib/utils";

type ProductDetailBodyProps = {
  product: Product;
  detail?: ProductDetail;
};

export function ProductDetailBody({ product, detail }: ProductDetailBodyProps) {
  return (
    <div className="relative z-10 -mt-10 rounded-t-[30px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] pb-14 shadow-[0_-24px_70px_-45px_rgba(0,15,39,0.45)] sm:-mt-12 sm:rounded-t-[40px] sm:pb-20">
      <div className="shell py-10 sm:py-14 lg:py-16">
        {!detail ? (
          <div className="mx-auto max-w-[760px] rounded-[26px] border border-slate-200/80 bg-white p-7 text-center shadow-[0_26px_70px_-50px_rgba(2,27,61,0.5)] sm:p-10">
            <span className="mx-auto block h-[4px] w-14 rounded-full bg-brand-yellow" />
            <h2 className="mt-5 text-[25px] font-extrabold leading-tight tracking-[-0.03em] text-navy-900 sm:text-[32px]">
              Detailed specifications are being finalised.
            </h2>
            <p className="mx-auto mt-3 max-w-[540px] text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              The full technical sheet for the {product.name} is not published
              yet. Our team can share the available product information directly.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ProductEnquiryButton
                product={product.name}
                source={`product-placeholder-${product.slug}`}
                label="Contact Us"
                className="w-full sm:w-auto"
              />
              <Link href="/products" className="btn-navy w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                Back to All Products
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] lg:gap-10">
              <div>
                <ProductSectionHeading id="overview-heading">
                  Overview
                </ProductSectionHeading>
                <div className="mt-5 space-y-4 text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15.5px]">
                  {detail.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_45px_-38px_rgba(2,27,61,0.55)]">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                    At a Glance
                  </h2>
                  <dl className="mt-4 divide-y divide-slate-100">
                    {detail.specifications.map((specification) => (
                      <div
                        key={specification.label}
                        className="flex items-baseline justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
                      >
                        <dt className="text-[12px] font-medium text-slate-500">
                          {specification.label}
                        </dt>
                        <dd className="text-right text-[12.5px] font-extrabold text-navy-900">
                          {specification.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </div>

            <section
              id="specifications"
              aria-labelledby="specifications-heading"
              className="mt-12 scroll-mt-28 sm:mt-16"
            >
              <ProductSectionHeading id="specifications-heading">
                Technical Specifications
              </ProductSectionHeading>
              <div
                className={cn(
                  "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2",
                  detail.specifications.length <= 3
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-4",
                )}
              >
                {detail.specifications.map((specification) => (
                  <div
                    key={specification.label}
                    className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_16px_38px_-36px_rgba(2,27,61,0.5)]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                      {specification.label}
                    </p>
                    <p className="mt-2 text-[20px] font-extrabold leading-tight tracking-[-0.02em] text-navy-900 sm:text-[22px]">
                      {specification.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 sm:mt-16">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_-40px_rgba(2,27,61,0.5)] sm:p-7">
                  <ProductSectionHeading as="h2" id="performance-heading">
                    Performance &amp; Drive Options
                  </ProductSectionHeading>
                  <ul className="mt-5 space-y-3.5">
                    {detail.performance.map((option) => (
                      <li
                        key={option}
                        className="flex gap-3 text-[13.5px] leading-[1.65] text-slate-600 sm:text-[14px]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-yellow"
                          strokeWidth={2.3}
                        />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-navy-950 p-6 text-white sm:p-7">
                  <ProductSectionHeading as="h2" invert>
                    Sealing Options
                  </ProductSectionHeading>
                  <ul className="mt-5 space-y-2.5">
                    {detail.sealing.map((option) => (
                      <li
                        key={option}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[13px] font-semibold text-white/80"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-12 sm:mt-16">
              <div
                className={cn(
                  "grid gap-5",
                  detail.fluids.length > 0 ? "lg:grid-cols-2" : "grid-cols-1",
                )}
              >
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_-40px_rgba(2,27,61,0.5)] sm:p-7">
                  <ProductSectionHeading as="h2" id="applications-heading">
                    Applications
                  </ProductSectionHeading>
                  <ul
                    className={cn(
                      "mt-5 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2",
                      detail.fluids.length === 0 && "lg:grid-cols-3",
                    )}
                  >
                    {detail.applications.map((application) => (
                      <li
                        key={application}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-slate-600"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow"
                          strokeWidth={2.3}
                        />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>

                {detail.fluids.length > 0 && (
                  <div className="rounded-2xl bg-[linear-gradient(145deg,#001736_0%,#082B55_100%)] p-6 text-white sm:p-7">
                    <ProductSectionHeading as="h2" invert>
                      Fluids Handled
                    </ProductSectionHeading>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {detail.fluids.map((fluid) => (
                        <li
                          key={fluid}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11.5px] font-medium text-white/75"
                        >
                          {fluid}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
