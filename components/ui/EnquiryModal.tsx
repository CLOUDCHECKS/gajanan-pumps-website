"use client";

import { useEffect, useId, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";
import { products } from "@/lib/products";
import { enquirySchema, type EnquiryInput } from "@/lib/validation";
import { lockBodyScroll } from "@/lib/scroll-lock";
import { cn } from "@/lib/utils";

type EnquiryModalProps = {
  open: boolean;
  product?: string;
  industry?: string;
  source?: string;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function EnquiryModal({
  open,
  product,
  industry,
  source,
  onClose,
}: EnquiryModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    },
  });

  const { ref: nameRef, ...nameRegistration } = register("name");

  useEffect(() => {
    if (!open) return;

    setSubmitted(false);
    setServerError(null);
    reset({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
    setValue("product", product ?? "");
    setValue(
      "message",
      industry
        ? `I would like to discuss a pumping solution for the ${industry} industry.\n\n`
        : "",
    );

    const releaseScrollLock = lockBodyScroll();

    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((node) => node.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      releaseScrollLock();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, product, industry, reset, setValue, onClose]);

  if (!open) return null;

  const onSubmit = async (values: EnquiryInput) => {
    setServerError(null);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: source ?? "website" }),
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
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again in a moment.",
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-navy-950/70 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative my-0 max-h-[100dvh] w-full max-w-[620px] overflow-y-auto overscroll-contain rounded-t-3xl bg-white shadow-modal animate-fade-up sm:my-6 sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl"
      >
        <div className="relative overflow-hidden bg-navy-900 px-6 pb-6 pt-7 text-white sm:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-brand-yellow/10 blur-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-yellow">
            Enquiry
          </p>
          <h2
            id={titleId}
            className="mt-2 max-w-[430px] text-2xl font-extrabold leading-tight sm:text-[30px]"
          >
            {submitted ? "Thank you — we have your enquiry." : "Let’s talk fluids."}
          </h2>
          {!submitted && (
            <p className="mt-2 max-w-[440px] text-sm leading-relaxed text-white/70">
              Tell us about your fluid, duty point and application. Our team will
              get back to you with the right pump configuration.
            </p>
          )}
          {!submitted && industry && (
            <span className="mt-3 inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
              Industry · {industry}
            </span>
          )}
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <p className="mt-5 text-lg font-bold text-navy-900">
              Your enquiry is on its way.
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
              A member of the Gajanan Pumps team will review your requirement and
              contact you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-navy mt-7 w-full sm:w-auto sm:px-10"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="px-6 py-6 sm:px-8 sm:py-7"
          >
            <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="enquiry-name" error={errors.name?.message} required>
                <input
                  id="enquiry-name"
                  autoComplete="name"
                  className={cn("field", errors.name && "field-error")}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  {...nameRegistration}
                  ref={(node) => {
                    nameRef(node);
                    firstFieldRef.current = node;
                  }}
                />
              </Field>

              <Field label="Company" htmlFor="enquiry-company" error={errors.company?.message}>
                <input
                  id="enquiry-company"
                  autoComplete="organization"
                  className={cn("field", errors.company && "field-error")}
                  placeholder="Company name"
                  {...register("company")}
                />
              </Field>

              <Field label="Email" htmlFor="enquiry-email" error={errors.email?.message} required>
                <input
                  id="enquiry-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className={cn("field", errors.email && "field-error")}
                  placeholder="you@company.com"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </Field>

              <Field label="Phone" htmlFor="enquiry-phone" error={errors.phone?.message} required>
                <input
                  id="enquiry-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={cn("field", errors.phone && "field-error")}
                  placeholder="+91 00000 00000"
                  aria-invalid={Boolean(errors.phone)}
                  {...register("phone")}
                />
              </Field>

              <Field
                label="Product of interest"
                htmlFor="enquiry-product"
                error={errors.product?.message}
                className="sm:col-span-2"
              >
                <select
                  id="enquiry-product"
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
                label="How can we help?"
                htmlFor="enquiry-message"
                error={errors.message?.message}
                className="sm:col-span-2"
                required
              >
                <textarea
                  id="enquiry-message"
                  rows={4}
                  className={cn("field resize-none", errors.message && "field-error")}
                  placeholder="Fluid type, flow rate, pressure, temperature or application details…"
                  aria-invalid={Boolean(errors.message)}
                  {...register("message")}
                />
              </Field>
            </div>

            {/* Honeypot: hidden from humans and assistive tech. */}
            <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="enquiry-website">Website</label>
              <input id="enquiry-website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            {serverError && (
              <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {serverError}
              </p>
            )}

            <div className="mt-5 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-center text-[11px] leading-relaxed text-slate-400 sm:text-left">
                Your details are used only to respond to this enquiry.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-yellow w-full shrink-0 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send enquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
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
