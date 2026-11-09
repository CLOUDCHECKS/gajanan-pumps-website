import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Download,
  FileText,
  Home,
  Layers,
  Settings2,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EnquireButton } from "@/components/ui/EnquireButton";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download the Gajanan Pumps & Systems company brochure, explore the product range, and find engineering selection guidance.",
};

const brochureContents = [
  "Company overview and who we are",
  "Characteristics of Gajanan single-screw pumps",
  "Progressive cavity pumps with Cardinal joints",
  "Shaft sealing options and pump performance",
  "Pump selection table and selection graph",
  "Gajanan pump series and wide application range",
];

const exploreLinks = [
  {
    title: "Engineering",
    description:
      "Characteristics, Cardinal joints, sealing options, performance range and pump selection guidance.",
    href: "/engineering",
    icon: Settings2,
    label: "Explore engineering",
  },
  {
    title: "Product range",
    description:
      "Seven pump and extrusion models, from general-purpose progressive cavity pumps to hygienic and dosing units.",
    href: "/products",
    icon: Layers,
    label: "View products",
  },
  {
    title: "Industries",
    description:
      "Application detail for environment, chemical, food, vegetable oil, oil & gas and namkeen manufacturing.",
    href: "/industries",
    icon: BookOpen,
    label: "View industries",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section
        aria-labelledby="resources-page-heading"
        className="relative isolate overflow-hidden bg-navy-950 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_24%,#0C3D72_0%,#001A3F_46%,#000C20_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-[-5%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.09),transparent_68%)] blur-3xl"
        />

        <div className="shell relative pb-12 pt-[132px] sm:pb-16 sm:pt-[150px] lg:pb-20 lg:pt-[168px]">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-white/70 sm:text-[13px]"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-yellow"
            >
              <Home className="h-[15px] w-[15px]" strokeWidth={2.2} />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" strokeWidth={2.4} />
            <span aria-current="page" className="text-white">
              Resources
            </span>
          </nav>

          <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-end lg:gap-16">
            <Reveal>
              <p className="eyebrow">Resources</p>
              <h1
                id="resources-page-heading"
                className="mt-5 max-w-[760px] text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[54px] lg:text-[64px]"
              >
                The full range,{" "}
                <span className="text-gradient-yellow">documented.</span>
              </h1>
              <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-white/68 sm:text-[17px]">
                Download the Gajanan Pumps &amp; Systems brochure for the complete
                product range, engineering characteristics and pump selection
                reference.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/[0.055] p-4 backdrop-blur-sm sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-navy-900">
                  <FileText className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                    Available now
                  </p>
                  <p className="mt-1 text-[15px] font-extrabold tracking-[-0.015em] text-white">
                    Company brochure
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/55">
                    18 pages · PDF · 11.9 MB
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="brochure-download-heading"
        className="relative z-10 -mt-5 rounded-t-[28px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_55%,#EDF5FD_100%)] pb-14 pt-9 shadow-[0_-24px_70px_-55px_rgba(0,15,39,0.5)] sm:-mt-7 sm:rounded-t-[40px] sm:pb-20 sm:pt-12"
      >
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)] lg:items-stretch lg:gap-8">
            <Reveal className="relative">
              <div className="relative mx-auto w-full max-w-[370px] lg:mx-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-2 top-8 rounded-[20px] bg-navy-950/20 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[20px] border border-navy-100/80 bg-white p-2.5 shadow-[0_35px_70px_-45px_rgba(2,27,61,0.65)] sm:p-3">
                  <Image
                    src="/images/resources/brochure-cover.jpg"
                    alt="Cover of the Gajanan Pumps & Systems company brochure"
                    width={840}
                    height={1088}
                    sizes="(min-width: 1024px) 370px, 78vw"
                    className="h-auto w-full rounded-[13px]"
                  />
                </div>
                <div className="absolute -bottom-3 left-4 rounded-full bg-brand-yellow px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-navy-900 shadow-[0_12px_24px_-12px_rgba(2,27,61,0.55)]">
                  Company profile
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} className="flex flex-col justify-center">
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
                <span
                  aria-hidden="true"
                  className="h-[3px] w-8 rounded-full bg-brand-yellow"
                />
                Brochure
              </p>
              <h2
                id="brochure-download-heading"
                className="mt-4 text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-navy-900 sm:text-[38px]"
              >
                Gajanan Pumps &amp; Systems{" "}
                <span className="text-brand-blue">product range.</span>
              </h2>
              <p className="mt-3.5 max-w-[620px] text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]">
                A complete reference covering who we are, the single-screw pump
                principle, Cardinal joint construction, shaft sealing, performance
                data and pump selection.
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {brochureContents.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[12.5px] leading-[1.55] text-slate-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href="/downloads/gajanan-pumps-brochure.pdf"
                  download="Gajanan-Pumps-Systems-Brochure.pdf"
                  className="btn-yellow group w-full sm:w-auto"
                >
                  <Download className="h-[17px] w-[17px]" strokeWidth={2.1} />
                  Download brochure
                  <span className="text-[10px] font-bold opacity-60">PDF</span>
                </a>
                <a
                  href="/downloads/gajanan-pumps-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy group w-full sm:w-auto"
                >
                  <FileText className="h-4 w-4" strokeWidth={2} />
                  View online
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                File size 11.9 MB. If the download does not start, open the PDF in
                a new tab and save it from your browser.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-navy-100/80 pt-9 sm:mt-16 sm:pt-11">
            <Reveal>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
                <span
                  aria-hidden="true"
                  className="h-[3px] w-8 rounded-full bg-brand-yellow"
                />
                Explore online
              </p>
              <h2 className="mt-4 text-[26px] font-extrabold leading-[1.06] tracking-[-0.035em] text-navy-900 sm:text-[32px]">
                More ways to find the right answer.
              </h2>
            </Reveal>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {exploreLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Reveal
                    key={link.href}
                    as="article"
                    delay={60 + index * 60}
                    className="group flex h-full flex-col rounded-[22px] border border-navy-100/80 bg-white p-5 shadow-[0_22px_50px_-48px_rgba(2,27,61,0.55)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-yellow/60 hover:shadow-[0_28px_55px_-40px_rgba(2,27,61,0.55)] sm:p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-navy-700 transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-navy-900">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 text-[18px] font-extrabold tracking-[-0.02em] text-navy-900">
                      {link.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-[1.7] text-slate-500">
                      {link.description}
                    </p>
                    <Link
                      href={link.href}
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12px] font-bold text-brand-blue transition-colors hover:text-navy-900"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDF5FD] pb-14 sm:pb-20">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(118deg,#00152F_0%,#01254B_54%,#001C40_100%)] px-6 py-9 text-white sm:rounded-[32px] sm:px-9 sm:py-11 lg:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.16),transparent_66%)] blur-2xl"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow">
                  Need something specific?
                </p>
                <h2 className="mt-2 max-w-[620px] text-[25px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[31px]">
                  Ask for a model datasheet or application reference.
                </h2>
                <p className="mt-2.5 max-w-[560px] text-[13px] leading-[1.75] text-white/60">
                  Tell us the model or application and our team will help with the
                  relevant technical information.
                </p>
              </div>
              <EnquireButton
                source="resources-cta"
                icon="message"
                className="w-full shrink-0 sm:w-auto"
              >
                Request information
              </EnquireButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
