"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, FileText, Search, X } from "lucide-react";
import { products } from "@/lib/products";
import { industries } from "@/lib/industries";
import { mainNav } from "@/lib/navigation";

type Result = {
  id: string;
  label: string;
  meta: string;
  href: string;
  kind: "product" | "industry" | "page";
  image?: string;
};

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  const results = useMemo<Result[]>(() => {
    const term = query.trim().toLowerCase();

    const productResults: Result[] = products.map((product) => ({
      id: `product-${product.slug}`,
      label: product.subtitle
        ? `${product.code} — ${product.subtitle}`
        : product.name,
      meta: "Product",
      href: `/products/${product.slug}`,
      kind: "product",
      image: product.image,
    }));

    const industryResults: Result[] = industries.map((industry) => ({
      id: `industry-${industry.slug}`,
      label: industry.name,
      meta: "Industry",
      href: `/industries/${industry.slug}`,
      kind: "industry",
    }));

    const pageResults: Result[] = mainNav.map((item) => ({
      id: `page-${item.href}`,
      label: item.label,
      meta: "Page",
      href: item.href,
      kind: "page",
    }));

    const all = [...productResults, ...industryResults, ...pageResults];
    if (!term) return productResults;

    return all.filter((result) => {
      const haystack = `${result.label} ${result.meta}`.toLowerCase();
      const product = products.find((item) => `product-${item.slug}` === result.id);
      const industry = industries.find(
        (item) => `industry-${item.slug}` === result.id,
      );
      return (
        haystack.includes(term) ||
        product?.category.toLowerCase().includes(term) ||
        industry?.name.toLowerCase().includes(term)
      );
    });
  }, [query]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        window.requestAnimationFrame(() => {
          const target = document.getElementById(id);
          if (!target) return;
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("ring-highlight");
          window.setTimeout(() => target.classList.remove("ring-highlight"), 1900);
        });
      } else {
        router.push(href);
      }
      return;
    }
    router.push(href);
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-navy-950/70 px-4 pb-6 pt-[88px] backdrop-blur-sm animate-fade-in sm:px-6 sm:pt-[110px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search Gajanan Pumps"
        className="w-full max-w-[660px] overflow-hidden rounded-2xl bg-white shadow-modal animate-fade-up"
      >
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-navy-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && results[0]) go(results[0].href);
            }}
            placeholder="Search products, industries or pages…"
            aria-label="Search"
            className="h-8 w-full bg-transparent text-[15px] font-medium text-navy-900 outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-navy-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[min(62vh,480px)] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-semibold text-navy-800">
                No matches for “{query}”
              </p>
              <p className="mt-1 text-[13px] text-slate-500">
                Try a product code such as NYMB or an industry name.
              </p>
            </div>
          ) : (
            <ul className="space-y-0.5">
              {results.slice(0, 9).map((result) => (
                <li key={result.id}>
                  <button
                    type="button"
                    onClick={() => go(result.href)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-navy-50"
                  >
                    {result.image ? (
                      <span className="flex h-11 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-mist">
                        <Image
                          src={result.image}
                          alt=""
                          width={120}
                          height={70}
                          className="h-9 w-12 object-contain"
                        />
                      </span>
                    ) : (
                      <span className="flex h-11 w-14 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
                        <FileText className="h-5 w-5" />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14px] font-bold text-navy-900">
                        {result.label}
                      </span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {result.meta}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-5 py-3">
          <p className="text-[11px] font-medium text-slate-400">
            Press <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5">Enter</kbd> to open the first result
          </p>
          <p className="text-[11px] font-semibold text-navy-400">
            Gajanan Pumps & Systems
          </p>
        </div>
      </div>
    </div>
  );
}
