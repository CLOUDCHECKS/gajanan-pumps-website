import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function ProductPortfolio() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative scroll-mt-20 bg-[linear-gradient(180deg,#DCEBF9_0%,#EDF5FD_46%,#F7FBFF_100%)] pb-1"
    >
      <div className="mx-auto w-full max-w-[1636px] px-[18px]">
        <div className="relative rounded-[22px] bg-[#EFF5FC] px-4 pb-6 pt-6 shadow-[0_18px_60px_-42px_rgba(2,27,61,0.5)] sm:rounded-[28px] sm:px-6 sm:pb-7 sm:pt-7 lg:px-8 lg:pb-[30px] lg:pt-9 2xl:px-10 2xl:pr-7">
          <Link
            href="/products"
            className="group absolute right-5 top-2.5 hidden items-center gap-1.5 text-[13px] font-bold text-brand-blue transition-colors hover:text-navy-800 lg:inline-flex 2xl:right-8 2xl:top-3.5"
          >
            View All Products
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.4}
            />
          </Link>

          <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-4 xl:grid-cols-[264px_minmax(0,1fr)] 2xl:grid-cols-[300px_minmax(0,1fr)]">
            <Reveal>
              <h2
                id="products-heading"
                className="text-[26px] font-extrabold leading-[1.05] tracking-[-0.035em] text-navy-900 sm:text-[28px] lg:whitespace-nowrap 2xl:text-[30px]"
              >
                Our Product Portfolio
              </h2>
              <span className="mt-3 block h-[4px] w-16 rounded-full bg-brand-yellow" />
            </Reveal>

            <div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 xl:gap-[9px]">
                {products.map((product, index) => (
                  <Reveal key={product.slug} delay={index * 45}>
                    <Link
                      href={`/products/${product.slug}`}
                      id={`product-${product.slug}`}
                      aria-label={`View ${product.code}${
                        product.subtitle ? ` — ${product.subtitle}` : ""
                      } product details`}
                      className={cn(
                        "group flex h-full w-full scroll-mt-28 flex-col items-center rounded-xl bg-brand-mist px-2 pb-3 pt-2 text-center transition-all duration-400 ease-premium hover:-translate-y-1 hover:bg-[#E3EEF9] hover:shadow-card focus-visible:ring-offset-white",
                      )}
                    >
                      <span className="relative flex h-[92px] w-full items-center justify-center overflow-hidden sm:h-[96px] xl:h-[98px] 2xl:h-[100px]">
                        <Image
                          src={product.image}
                          alt={`${product.code}${
                            product.subtitle ? ` ${product.subtitle}` : ""
                          } progressive cavity pump`}
                          width={500}
                          height={385}
                          sizes="(min-width: 1280px) 160px, (min-width: 768px) 22vw, 44vw"
                          className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
                        />
                        <span className="absolute right-0 top-0 flex h-6 w-6 translate-y-1 items-center justify-center rounded-full bg-white/0 text-navy-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-white group-hover:opacity-100">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </span>
                      <span className="mt-1 block text-[13px] font-extrabold leading-[1.15] text-navy-900 2xl:text-[13.5px]">
                        {product.slug === "namkeen-extruder" ? (
                          <>
                            Namkeen
                            <br />
                            Extruder
                          </>
                        ) : (
                          product.name
                        )}
                      </span>
                      {product.subtitle && (
                        <span className="mt-0.5 block text-[11.5px] font-medium leading-tight text-navy-600/90">
                          {product.subtitle}
                        </span>
                      )}
                    </Link>
                  </Reveal>
                ))}
              </div>

              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-blue transition-colors hover:text-navy-800 lg:hidden"
              >
                View All Products
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
