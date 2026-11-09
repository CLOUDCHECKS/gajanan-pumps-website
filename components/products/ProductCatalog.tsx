"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CirclePlus,
  Cog,
  Droplet,
  Layers,
  LayoutGrid,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { products, type ProductCategory } from "@/lib/products";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type FilterId = "all" | ProductCategory;

const filters: { id: FilterId; label: string; icon: LucideIcon }[] = [
  { id: "all", label: "All Products", icon: LayoutGrid },
  { id: "progressive-cavity", label: "Progressive Cavity Pumps", icon: Waves },
  { id: "special-purpose", label: "Special Purpose Pumps", icon: Cog },
  { id: "dosing", label: "Dosing Pumps", icon: Droplet },
  { id: "hygienic", label: "Hygienic Pumps", icon: CirclePlus },
  { id: "extruders", label: "Extruders", icon: Layers },
];

export function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const visibleProducts = useMemo(
    () =>
      activeFilter === "all"
        ? products
        : products.filter((product) =>
            product.categories.includes(activeFilter),
          ),
    [activeFilter],
  );

  return (
    <section
      aria-labelledby="product-range-heading"
      className="relative z-20 -mt-10 rounded-t-[28px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] pb-12 shadow-[0_-24px_70px_-45px_rgba(0,15,39,0.55)] sm:-mt-12 sm:rounded-t-[38px] sm:pb-16"
    >
      <div className="shell">
        <h2 id="product-range-heading" className="sr-only">
          All products
        </h2>

        <div
          role="group"
          aria-label="Filter products by category"
          className="flex flex-wrap gap-2.5 pb-8 pt-8 sm:justify-center sm:gap-3 sm:pb-10 sm:pt-10 lg:pt-12"
        >
          {filters.map(({ id, label, icon: Icon }) => {
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-[12.5px] font-bold transition-all duration-300 ease-premium focus-visible:ring-offset-white sm:h-12 sm:px-5 sm:text-[13px]",
                  isActive
                    ? "border-brand-yellow bg-brand-yellow text-navy-900 shadow-[0_10px_24px_-12px_rgba(255,201,7,0.85)]"
                    : "border-slate-200 bg-white text-navy-800 hover:-translate-y-0.5 hover:border-brand-yellow/70 hover:bg-brand-yellow/5",
                )}
              >
                <Icon
                  className={cn(
                    "h-[17px] w-[17px]",
                    isActive ? "text-navy-900" : "text-navy-500",
                  )}
                  strokeWidth={2}
                />
                {label}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {visibleProducts.length}{" "}
          {visibleProducts.length === 1 ? "product" : "products"}.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
          {visibleProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 45} className="h-full">
              <Link
                href={`/products/${product.slug}`}
                aria-label={`View ${product.code}${
                  product.subtitle ? ` — ${product.subtitle}` : ""
                } product details`}
                className="group flex h-full flex-col rounded-[20px] border border-slate-200/90 bg-white p-4 pb-5 shadow-[0_16px_38px_-32px_rgba(2,27,61,0.55)] transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-card-hover focus-visible:ring-offset-white sm:p-5"
              >
                <span className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-[14px] bg-[radial-gradient(ellipse_at_center,#F0F7FE_0%,#FFFFFF_72%)] sm:h-[176px] lg:h-[186px] xl:h-[196px]">
                  <Image
                    src={product.image}
                    alt={`Gajanan ${product.category}`}
                    width={500}
                    height={385}
                    sizes="(min-width: 1280px) 300px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 88vw"
                    className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-premium group-hover:scale-[1.05]"
                  />
                </span>

                <span className="mt-4 flex flex-1 items-end justify-between gap-3">
                  <span className="min-w-0">
                    {product.subtitle && (
                      <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-brand-blue/85">
                        {product.subtitle}
                      </span>
                    )}
                    <span className="mt-1 block text-[20px] font-extrabold leading-tight tracking-[-0.025em] text-navy-900 xl:text-[21px]">
                      {product.name}
                    </span>
                    <span className="mt-2 block text-[12.5px] leading-[1.55] text-slate-500">
                      {product.category}
                    </span>
                  </span>

                  <span className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-navy-900 shadow-[0_8px_18px_-10px_rgba(255,201,7,0.9)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-brand-yellow-soft">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
