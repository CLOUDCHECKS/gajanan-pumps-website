import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/lib/contact";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-[24px] border border-navy-100/80 bg-white p-6 shadow-[0_24px_60px_-52px_rgba(2,27,61,0.5)] sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mist text-navy-700">
            <MapPin className="h-[19px] w-[19px]" strokeWidth={1.8} />
          </span>
          <h2 className="text-[15px] font-extrabold tracking-[-0.015em] text-navy-900">
            Plant &amp; registered office
          </h2>
        </div>
        <address className="mt-4 space-y-0.5 pl-[52px] text-[13.5px] not-italic leading-[1.7] text-slate-600">
          {contactDetails.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <a
          href={contactDetails.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 ml-[52px] inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-blue transition-colors hover:text-navy-900"
        >
          Open in Google Maps
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.3} />
        </a>
      </div>

      <div className="rounded-[24px] border border-navy-100/80 bg-white p-6 shadow-[0_24px_60px_-52px_rgba(2,27,61,0.5)] sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mist text-navy-700">
            <Phone className="h-[19px] w-[19px]" strokeWidth={1.8} />
          </span>
          <h2 className="text-[15px] font-extrabold tracking-[-0.015em] text-navy-900">
            Talk to our team
          </h2>
        </div>
        <ul className="mt-4 space-y-2 pl-[52px]">
          {contactDetails.phones.map((phone) => (
            <li key={phone.href}>
              <a
                href={phone.href}
                className="text-[13.5px] font-semibold text-slate-600 transition-colors hover:text-brand-blue"
              >
                {phone.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${contactDetails.email}`}
          className="mt-4 ml-[52px] inline-flex items-center gap-2 text-[13px] font-bold text-brand-blue transition-colors hover:text-navy-900"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={2.2} />
          {contactDetails.email}
        </a>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,#00152F_0%,#012A55_100%)] p-6 text-white shadow-[0_24px_60px_-48px_rgba(2,27,61,0.7)] sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.16),transparent_66%)] blur-2xl"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
          What happens next
        </p>
        <ol className="relative mt-4 space-y-3">
          {[
            "Our team reviews the application and duty details.",
            "We come back with the right pump configuration.",
            "Materials, sealing and delivery are confirmed.",
          ].map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-extrabold text-navy-900">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[12.5px] leading-[1.6] text-white/65">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
