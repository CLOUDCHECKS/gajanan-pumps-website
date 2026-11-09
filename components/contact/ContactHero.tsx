import Link from "next/link";
import { ChevronRight, Home, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/lib/contact";
import { Reveal } from "@/components/ui/Reveal";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_18%,#0C3D72_0%,#001A3F_48%,#000C20_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-[460px] w-[460px] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-28 h-[300px] w-[300px] rounded-full border border-brand-yellow/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.10),transparent_66%)] blur-2xl"
      />

      <div className="shell relative pb-11 pt-[132px] sm:pb-14 sm:pt-[150px] lg:pb-16 lg:pt-[168px]">
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
            Contact Us
          </span>
        </nav>

        <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-end lg:gap-14">
          <Reveal>
            <p className="eyebrow">Contact Us</p>
            <h1
              id="contact-page-heading"
              className="mt-5 max-w-[760px] text-[40px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[54px] lg:text-[64px]"
            >
              Tell us what{" "}
              <span className="text-gradient-yellow">you&apos;re moving.</span>
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.7] text-white/68 sm:text-[17px]">
              Share the fluid, the duty point and the application. Our team will
              help you specify the right pump, materials and sealing arrangement.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-2.5">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/12 bg-white/[0.055] px-4 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/40 hover:bg-white/[0.09]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-navy-900">
                    <Mail className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/45">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-[13.5px] font-bold text-white group-hover:text-brand-yellow">
                      {contactDetails.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contactDetails.phones[0].href}
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/12 bg-white/[0.055] px-4 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/40 hover:bg-white/[0.09]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-navy-900">
                    <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/45">
                      Call us
                    </span>
                    <span className="mt-0.5 block text-[13.5px] font-bold text-white group-hover:text-brand-yellow">
                      {contactDetails.phones[0].label}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contactDetails.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/12 bg-white/[0.055] px-4 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/40 hover:bg-white/[0.09]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-navy-900">
                    <MapPin className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/45">
                      Plant &amp; office
                    </span>
                    <span className="mt-0.5 block text-[13.5px] font-bold text-white group-hover:text-brand-yellow">
                      Kanpur, Uttar Pradesh
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
