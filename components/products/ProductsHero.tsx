import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

/**
 * Product-range hero. The composition follows the supplied product-page
 * reference: navy stage, diagonal blue field, refinery context and a large
 * pump cut-out.
 */
export function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/about/hero-plant.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%] opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000F27_0%,rgba(0,15,39,0.98)_34%,rgba(0,23,54,0.8)_58%,rgba(0,23,54,0.48)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[70%] bg-[linear-gradient(116deg,#0B5CF6_0%,#0B4FCC_42%,#082B55_100%)] opacity-90 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[70%] bg-[radial-gradient(ellipse_at_70%_38%,rgba(84,163,255,0.5),transparent_62%)] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.32)_1px,transparent_1px)] [background-size:92px_92px]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,15,39,0.45))]" />
      </div>

      <div className="shell relative z-10">
        <div className="flex min-h-[350px] flex-col justify-center pb-20 pt-[116px] sm:min-h-[390px] lg:min-h-[430px] lg:pb-24 lg:pt-[132px]">
          <nav
            aria-label="Breadcrumb"
            className="flex animate-fade-up items-center gap-2 text-[12px] font-semibold text-white/65"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
            >
              <Home className="h-3.5 w-3.5" strokeWidth={2.2} />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" />
            <span aria-current="page" className="text-white">
              Products
            </span>
          </nav>

          <h1 className="mt-5 max-w-[780px] animate-fade-up text-[clamp(2.7rem,5vw,4.4rem)] font-extrabold leading-[1.01] tracking-[-0.045em] [animation-delay:70ms]">
            Our <span className="italic text-brand-yellow">Product</span> Range
          </h1>

          <p className="mt-4 max-w-[630px] animate-fade-up text-[15px] leading-[1.7] text-white/80 [animation-delay:140ms] sm:text-[17px]">
            A comprehensive range of progressive cavity pumps and specialized
            pumping solutions, engineered for a wide variety of fluids and
            applications.
          </p>
        </div>
      </div>

      {/* Desktop pump composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20px] right-[-2%] z-[1] hidden w-[58%] max-w-[1040px] lg:block xl:right-[1%] xl:w-[54%]"
      >
        <span className="absolute inset-x-[14%] bottom-3 h-16 rounded-full bg-black/35 blur-2xl" />
        <Image
          src="/images/products/product-1.png"
          alt=""
          width={730}
          height={460}
          priority
          sizes="(min-width: 1280px) 56vw, 60vw"
          className="relative h-auto w-full drop-shadow-[0_38px_46px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Mobile / tablet pump */}
      <div className="relative z-[1] mx-auto mt-2 w-[92%] max-w-[620px] pb-10 lg:hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-10 bottom-8 h-14 rounded-full bg-brand-yellow/15 blur-2xl"
        />
        <Image
          src="/images/products/product-1.png"
          alt="Gajanan progressive cavity pump"
          width={730}
          height={460}
          sizes="(max-width: 1024px) 92vw, 1px"
          className="relative -ml-[2%] h-auto w-[104%] max-w-none drop-shadow-[0_26px_38px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
}
