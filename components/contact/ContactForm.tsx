"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Loader2,
  MessageSquare,
  Send,
} from "lucide-react";
import { products } from "@/lib/products";
import { industries } from "@/lib/industries";
import { timelineOptions } from "@/lib/contact";
import { enquirySchema, type EnquiryInput } from "@/lib/validation";
import { cn } from "@/lib/utils";

const defaultValues: EnquiryInput = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  industry: "",
  application: "",
  city: "",
  state: "",
  flowRate: "",
  pressure: "",
  viscosity: "",
  temperature: "",
  timeline: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues,
  });

  const onSubmit = async (values: EnquiryInput) => {
    setServerError(null);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "contact-page" }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(
          data?.message ??
            "We could not send your enquiry. Please try again in a moment.",
        );
      }

      setSubmitted(true);
      reset(defaultValues);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again in a moment.",
      );
    }
  };

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="flex min-h-[420px] flex-col items-center justify-center rounded-[26px] border border-navy-100/80 bg-white px-6 py-12 text-center shadow-[0_30px_70px_-58px_rgba(2,27,61,0.55)] sm:rounded-[30px] sm:px-10"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <p className="mt-5 text-[20px] font-extrabold tracking-[-0.025em] text-navy-900">
          Thank you — we have your enquiry.
        </p>
        <p className="mt-2 max-w-md text-[13.5px] leading-[1.7] text-slate-500">
          A member of the Gajanan Pumps team will review your application and
          contact you with the next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-navy mt-7 h-11 px-6"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[26px] border border-navy-100/80 bg-white shadow-[0_30px_70px_-58px_rgba(2,27,61,0.55)] sm:rounded-[30px]"
    >
      <div className="border-b border-navy-100/80 px-5 py-5 sm:px-7 sm:py-6 lg:px-9">
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-blue">
          Project enquiry
        </p>
        <h2 className="mt-1.5 text-[24px] font-extrabold tracking-[-0.035em] text-navy-900 sm:text-[28px]">
          Tell us about your application.
        </h2>
        <p className="mt-2 max-w-[620px] text-[12.5px] leading-relaxed text-slate-500 sm:text-[13px]">
          The more detail you share about the fluid and operating conditions, the
          more precisely we can configure the pump. Fields marked{" "}
          <span className="font-bold text-brand-yellow-deep">*</span> are
          required.
        </p>
      </div>

      <div className="space-y-7 px-5 py-6 sm:px-7 sm:py-7 lg:px-9">
        <fieldset>
          <legend className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy-900">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-extrabold text-navy-900">
              01
            </span>
            Your details
          </legend>
          <div className="mt-4 grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <Field
              label="Full name"
              htmlFor="contact-name"
              error={errors.name?.message}
              required
            >
              <input
                id="contact-name"
                autoComplete="name"
                className={cn("field", errors.name && "field-error")}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                {...register("name")}
              />
            </Field>

            <Field
              label="Company"
              htmlFor="contact-company"
              error={errors.company?.message}
            >
              <input
                id="contact-company"
                autoComplete="organization"
                className={cn("field", errors.company && "field-error")}
                placeholder="Company name"
                {...register("company")}
              />
            </Field>

            <Field
              label="Email"
              htmlFor="contact-email"
              error={errors.email?.message}
              required
            >
              <input
                id="contact-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className={cn("field", errors.email && "field-error")}
                placeholder="you@company.com"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
            </Field>

            <Field
              label="Phone"
              htmlFor="contact-phone"
              error={errors.phone?.message}
              required
            >
              <input
                id="contact-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={cn("field", errors.phone && "field-error")}
                placeholder="+91 00000 00000"
                aria-invalid={Boolean(errors.phone)}
                {...register("phone")}
              />
            </Field>

            <Field label="City" htmlFor="contact-city" error={errors.city?.message}>
              <input
                id="contact-city"
                autoComplete="address-level2"
                className={cn("field", errors.city && "field-error")}
                placeholder="City"
                {...register("city")}
              />
            </Field>

            <Field label="State" htmlFor="contact-state" error={errors.state?.message}>
              <input
                id="contact-state"
                autoComplete="address-level1"
                className={cn("field", errors.state && "field-error")}
                placeholder="State"
                {...register("state")}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="border-t border-navy-100/70 pt-6">
          <legend className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy-900">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-extrabold text-navy-900">
              02
            </span>
            Your application
          </legend>
          <div className="mt-4 grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <Field
              label="Product of interest"
              htmlFor="contact-product"
              error={errors.product?.message}
            >
              <select
                id="contact-product"
                className={cn("field appearance-none", errors.product && "field-error")}
                {...register("product")}
              >
                <option value="">General enquiry</option>
                {products.map((item) => (
                  <option key={item.slug} value={item.name}>
                    {item.subtitle ? `${item.code} — ${item.subtitle}` : item.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="Industry"
              htmlFor="contact-industry"
              error={errors.industry?.message}
            >
              <select
                id="contact-industry"
                className={cn("field appearance-none", errors.industry && "field-error")}
                {...register("industry")}
              >
                <option value="">Select an industry</option>
                {industries.map((industry) => (
                  <option key={industry.slug} value={industry.name}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="Application / process"
              htmlFor="contact-application"
              error={errors.application?.message}
              className="sm:col-span-2"
            >
              <input
                id="contact-application"
                className={cn("field", errors.application && "field-error")}
                placeholder="e.g. Sludge transfer, chemical dosing, fruit paste…"
                {...register("application")}
              />
            </Field>

            <Field
              label="Flow rate"
              htmlFor="contact-flow-rate"
              error={errors.flowRate?.message}
            >
              <input
                id="contact-flow-rate"
                className={cn("field", errors.flowRate && "field-error")}
                placeholder="e.g. 12 m³/hr"
                {...register("flowRate")}
              />
            </Field>

            <Field
              label="Pressure"
              htmlFor="contact-pressure"
              error={errors.pressure?.message}
            >
              <input
                id="contact-pressure"
                className={cn("field", errors.pressure && "field-error")}
                placeholder="e.g. 6 bar"
                {...register("pressure")}
              />
            </Field>

            <Field
              label="Viscosity"
              htmlFor="contact-viscosity"
              error={errors.viscosity?.message}
            >
              <input
                id="contact-viscosity"
                className={cn("field", errors.viscosity && "field-error")}
                placeholder="e.g. 5,000 cst"
                {...register("viscosity")}
              />
            </Field>

            <Field
              label="Temperature"
              htmlFor="contact-temperature"
              error={errors.temperature?.message}
            >
              <input
                id="contact-temperature"
                className={cn("field", errors.temperature && "field-error")}
                placeholder="e.g. 80°C"
                {...register("temperature")}
              />
            </Field>

            <Field
              label="Timeline"
              htmlFor="contact-timeline"
              error={errors.timeline?.message}
              className="sm:col-span-2"
            >
              <select
                id="contact-timeline"
                className={cn("field appearance-none", errors.timeline && "field-error")}
                {...register("timeline")}
              >
                <option value="">Select a timeline</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </fieldset>

        <fieldset className="border-t border-navy-100/70 pt-6">
          <legend className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy-900">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-extrabold text-navy-900">
              03
            </span>
            Your requirement
          </legend>
          <div className="mt-4">
            <Field
              label="How can we help?"
              htmlFor="contact-message"
              error={errors.message?.message}
              required
            >
              <textarea
                id="contact-message"
                rows={5}
                className={cn("field resize-y", errors.message && "field-error")}
                placeholder="Describe the fluid, solids content, operating conditions and any site constraints…"
                aria-invalid={Boolean(errors.message)}
                {...register("message")}
              />
            </Field>
          </div>
        </fieldset>

        {/* Honeypot: hidden from humans and assistive tech. */}
        <div
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {serverError && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {serverError}
          </p>
        )}

        <div className="flex flex-col-reverse items-center gap-4 border-t border-navy-100/70 pt-5 sm:flex-row sm:justify-between">
          <p className="max-w-[330px] text-center text-[11px] leading-relaxed text-slate-400 sm:text-left">
            Your details are used only to respond to this enquiry. We do not
            share them with third parties.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-yellow w-full shrink-0 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending enquiry
              </>
            ) : (
              <>
                <MessageSquare className="h-[17px] w-[17px]" strokeWidth={1.9} />
                Send enquiry
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && <span className="ml-1 text-brand-yellow-deep">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[12px] font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
