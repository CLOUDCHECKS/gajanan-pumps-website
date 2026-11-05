"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, type NavLink } from "@/lib/navigation";
import { Logo } from "@/components/ui/Logo";
import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { SearchDialog } from "@/components/layout/SearchDialog";

export function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
          scrolled
            ? "bg-navy-900/95 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "bg-gradient-to-b from-navy-950/80 via-navy-950/35 to-transparent",
        )}
      >
        <div className="shell flex h-[76px] items-center gap-4 xl:gap-6">
          <Logo priority />

          <div className="hidden items-center gap-5 xl:flex">
            <span aria-hidden="true" className="h-11 w-px bg-white/25" />
            <p className="text-[14px] italic leading-[1.2] text-white/90">
              Moving Fluids
              <br />
              Positively
            </p>
          </div>

          <nav
            aria-label="Primary"
            className="ml-auto hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8"
          >
            {mainNav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="nav-link"
                  data-active={isActive(item.href) ? "true" : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                      strokeWidth={2.4}
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-20 w-[min(480px,80vw)] -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 ease-premium group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[0_30px_70px_-25px_rgba(0,15,39,0.55)]">
                      <div className="grid grid-cols-2 gap-0.5 p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/link flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-navy-50"
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                            <span className="text-[13px] font-semibold leading-snug text-navy-800 transition-colors group-hover/link:text-navy-900">
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between border-t border-navy-100 bg-navy-50/60 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-navy-700 transition-colors hover:bg-navy-100"
                      >
                        View all {item.label.toLowerCase()}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-6 xl:ml-[86px] xl:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the website"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <Search className="h-[19px] w-[19px]" />
            </button>

            <button
              type="button"
              onClick={() => openEnquiry({ source: "header" })}
              className="hidden h-10 items-center gap-2 rounded-full bg-brand-yellow px-5 text-[13px] font-extrabold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-soft sm:inline-flex"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.6} />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-950/65 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(89vw,400px)] flex-col bg-navy-900 shadow-2xl transition-transform duration-500 ease-premium",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <nav aria-label="Mobile" className="flex flex-col">
              {mainNav
                .filter((item) => !item.children)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-white/10 py-4 text-[17px] font-bold text-white transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </Link>
                ))}

              {mainNav
                .filter((item) => item.children)
                .map((item) => {
                  const isOpen = openAccordion === item.label;
                  return (
                    <div key={item.label} className="border-b border-white/10">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenAccordion(isOpen ? null : item.label)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between py-4 text-left text-[17px] font-bold text-white transition-colors hover:text-brand-yellow"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid overflow-hidden transition-all duration-300 ease-premium",
                          isOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="min-h-0 space-y-0.5">
                          {item.children?.map((child: NavLink) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-[14px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            className="mt-1 flex items-center gap-1.5 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-yellow"
                          >
                            View all {item.label.toLowerCase()}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

              <Link
                href="/contact"
                className="border-b border-white/10 py-4 text-[17px] font-bold text-white transition-colors hover:text-brand-yellow"
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
                Talk to an expert
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                Tell us about your fluid and duty point. We will recommend the
                right progressive cavity pump.
              </p>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openEnquiry({ source: "mobile-menu" });
                }}
                className="btn-yellow mt-4 h-11 w-full"
              >
                Send an enquiry
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
