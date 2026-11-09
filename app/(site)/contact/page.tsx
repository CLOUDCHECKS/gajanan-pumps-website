import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Gajanan Pumps & Systems in Kanpur, Uttar Pradesh. Share your fluid, flow rate, pressure, viscosity and application for a progressive cavity pump recommendation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section
        aria-labelledby="contact-form-heading"
        className="relative z-10 -mt-5 rounded-t-[28px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_55%,#EDF5FD_100%)] pb-14 pt-9 shadow-[0_-24px_70px_-55px_rgba(0,15,39,0.5)] sm:-mt-7 sm:rounded-t-[40px] sm:pb-20 sm:pt-12"
      >
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(300px,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-blue">
                  <span
                    aria-hidden="true"
                    className="h-[3px] w-8 rounded-full bg-brand-yellow"
                  />
                  Direct contact
                </p>
                <h2
                  id="contact-form-heading"
                  className="mt-4 text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-navy-900 sm:text-[34px]"
                >
                  Speak to the people who{" "}
                  <span className="text-brand-blue">engineer the pump.</span>
                </h2>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-slate-600 sm:text-[14px]">
                  Call, email or send the form. For application questions, the
                  more operating detail you include, the faster we can respond.
                </p>
              </Reveal>
              <Reveal delay={80} className="mt-6">
                <ContactDetails />
              </Reveal>
            </div>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
