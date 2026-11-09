"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  Droplets,
  Gauge,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Tag,
  Thermometer,
  Timer,
  Trash2,
  UserRound,
} from "lucide-react";
import {
  deleteEnquiry,
  updateEnquiryStatus,
} from "@/app/gajananadmin/actions";
import {
  ENQUIRY_STATUSES,
  formatDate,
  statusLabels,
  type Enquiry,
  type EnquiryStatus,
} from "@/lib/enquiries";
import { cn } from "@/lib/utils";

const statusClasses: Record<EnquiryStatus, string> = {
  new: "border-amber-200 bg-amber-50 text-amber-800",
  contacted: "border-sky-200 bg-sky-50 text-sky-800",
  qualified: "border-emerald-200 bg-emerald-50 text-emerald-800",
  closed: "border-slate-200 bg-slate-100 text-slate-600",
};

const sourceLabels: Record<string, string> = {
  "contact-page": "Contact page",
  website: "Popup enquiry",
};

function sourceLabel(source: string | null) {
  if (!source) return "Website";
  return sourceLabels[source] ?? source.replace(/[-_]+/g, " ");
}

function StatusSelect({ lead }: { lead: Enquiry }) {
  return (
    <form action={updateEnquiryStatus}>
      <input type="hidden" name="id" value={lead.id} />
      <select
        name="status"
        defaultValue={lead.status}
        aria-label={`Update status for ${lead.name}`}
        onChange={(event) => event.currentTarget.form?.requestSubmit()}
        className={cn(
          "cursor-pointer rounded-lg border px-2.5 py-1.5 text-[11px] font-extrabold outline-none transition focus:ring-4 focus:ring-brand-yellow/20",
          statusClasses[lead.status],
        )}
      >
        {ENQUIRY_STATUSES.map((status) => (
          <option key={status} value={status}>
            {statusLabels[status]}
          </option>
        ))}
      </select>
    </form>
  );
}

function DeleteButton({ lead, compact = false }: { lead: Enquiry; compact?: boolean }) {
  return (
    <form
      action={deleteEnquiry}
      onSubmit={(event) => {
        const confirmed = window.confirm(
          `Delete the enquiry from ${lead.name}? This permanently removes it and cannot be undone.`,
        );
        if (!confirmed) event.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={lead.id} />
      <button
        type="submit"
        aria-label={`Delete enquiry from ${lead.name}`}
        title="Delete lead"
        className={cn(
          "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
          compact ? "h-8 w-8" : "h-9 w-9",
        )}
      >
        <Trash2 className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={1.9} />
      </button>
    </form>
  );
}

function ContactLinks({ lead }: { lead: Enquiry }) {
  return (
    <div className="space-y-1">
      <a
        href={`mailto:${lead.email}`}
        className="flex items-center gap-1.5 text-[11.5px] font-semibold text-slate-500 transition-colors hover:text-brand-blue"
      >
        <Mail className="h-3 w-3 shrink-0" />
        <span className="truncate">{lead.email}</span>
      </a>
      <a
        href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
        className="flex items-center gap-1.5 text-[11.5px] font-semibold text-slate-500 transition-colors hover:text-brand-blue"
      >
        <Phone className="h-3 w-3 shrink-0" />
        {lead.phone}
      </a>
    </div>
  );
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Tag;
  label: string;
  value: string | null;
}) {
  if (!value) return null;
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white px-3 py-2.5">
      <p className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
        <Icon className="h-3 w-3" strokeWidth={2} />
        {label}
      </p>
      <p className="mt-1 text-[12px] font-bold leading-snug text-navy-900">{value}</p>
    </div>
  );
}

function LeadDetails({ lead }: { lead: Enquiry }) {
  const hasSpecs =
    lead.flow_rate ||
    lead.pressure ||
    lead.viscosity ||
    lead.temperature ||
    lead.timeline;

  return (
    <div className="grid gap-5 rounded-2xl border border-navy-100/80 bg-[#F7FAFE] p-4 sm:p-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div>
        <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-navy-700">
          <MessageSquare className="h-3.5 w-3.5 text-brand-yellow-deep" />
          Enquiry message
        </p>
        <p className="mt-2.5 whitespace-pre-wrap text-[12.5px] leading-[1.75] text-slate-600">
          {lead.message}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
            <Tag className="h-3 w-3" />
            Source: {sourceLabel(lead.source)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
            <CalendarDays className="h-3 w-3" />
            {formatDate(lead.created_at)} IST
          </span>
        </div>
      </div>

      <div>
        <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-navy-700">
          <UserRound className="h-3.5 w-3.5 text-brand-yellow-deep" />
          Requirement snapshot
        </p>
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <DetailItem icon={Tag} label="Product" value={lead.product} />
          <DetailItem icon={Tag} label="Industry" value={lead.industry} />
          <DetailItem icon={Droplets} label="Flow rate" value={lead.flow_rate} />
          <DetailItem icon={Gauge} label="Pressure" value={lead.pressure} />
          <DetailItem icon={Droplets} label="Viscosity" value={lead.viscosity} />
          <DetailItem icon={Thermometer} label="Temperature" value={lead.temperature} />
          <DetailItem icon={Timer} label="Timeline" value={lead.timeline} />
          <DetailItem icon={Tag} label="Application" value={lead.application} />
          <DetailItem
            icon={MapPin}
            label="Location"
            value={[lead.city, lead.state].filter(Boolean).join(", ") || null}
          />
        </div>
        {!hasSpecs && !lead.product && !lead.industry && !lead.application && (
          <p className="mt-2 rounded-xl border border-dashed border-slate-200 bg-white px-3 py-3 text-[11px] leading-relaxed text-slate-400">
            No additional application details were provided.
          </p>
        )}
        <div className="mt-2.5">
          <ContactLinks lead={lead} />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ filtered }: { filtered: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[22px] border border-dashed border-navy-100 bg-white px-6 py-14 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mist text-navy-500">
        <MessageSquare className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <p className="mt-4 text-[15px] font-extrabold text-navy-900">
        {filtered ? "No leads match these filters." : "No enquiries yet."}
      </p>
      <p className="mt-1.5 max-w-sm text-[12px] leading-relaxed text-slate-400">
        {filtered
          ? "Try a different search term, status or product."
          : "New enquiries from the website popup and Contact page will appear here."}
      </p>
      {filtered && (
        <Link
          href="/gajananadmin"
          className="mt-4 text-[12px] font-bold text-brand-blue transition-colors hover:text-navy-900"
        >
          Clear all filters
        </Link>
      )}
    </div>
  );
}

export function LeadsView({
  leads,
  filtered,
}: {
  leads: Enquiry[];
  filtered: boolean;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (leads.length === 0) {
    return <EmptyState filtered={filtered} />;
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-[22px] border border-navy-100/80 bg-white shadow-[0_24px_60px_-58px_rgba(2,27,61,0.5)] lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Website enquiries</caption>
          <thead>
            <tr className="border-b border-navy-100/80 bg-[#F7FAFE] text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
              <th scope="col" className="px-5 py-3.5">
                Lead
              </th>
              <th scope="col" className="px-4 py-3.5">
                Contact
              </th>
              <th scope="col" className="px-4 py-3.5">
                Interest
              </th>
              <th scope="col" className="px-4 py-3.5">
                Received
              </th>
              <th scope="col" className="px-4 py-3.5">
                Status
              </th>
              <th scope="col" className="px-4 py-3.5 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => {
              const expanded = expandedId === lead.id;
              return (
                <Fragment key={lead.id}>
                  <tr
                    className={cn(
                      "border-b border-navy-100/60 transition-colors",
                      expanded ? "bg-[#FBFDFF]" : "hover:bg-[#FBFDFF]",
                    )}
                  >
                    <td className="px-5 py-4 align-top">
                      <button
                        type="button"
                        onClick={() => setExpandedId(expanded ? null : lead.id)}
                        aria-expanded={expanded}
                        className="group flex items-start gap-2 text-left"
                      >
                        <span className="min-w-0">
                          <span className="block text-[13px] font-extrabold tracking-[-0.01em] text-navy-900 group-hover:text-brand-blue">
                            {lead.name}
                          </span>
                          <span className="mt-0.5 block text-[11px] font-semibold text-slate-400">
                            {lead.company || "Individual enquiry"}
                          </span>
                        </span>
                        <ChevronDown
                          className={cn(
                            "mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform duration-200",
                            expanded && "rotate-180 text-brand-blue",
                          )}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <ContactLinks lead={lead} />
                    </td>
                    <td className="px-4 py-4 align-top">
                      <p className="max-w-[190px] text-[11.5px] font-bold leading-snug text-navy-800">
                        {lead.product || "General enquiry"}
                      </p>
                      {lead.industry && (
                        <p className="mt-1 text-[10.5px] font-semibold text-slate-400">
                          {lead.industry}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <p className="text-[11.5px] font-bold text-navy-800">
                        {formatDate(lead.created_at).split(",")[0]}
                      </p>
                      <p className="mt-0.5 text-[10px] font-semibold text-slate-400">
                        {formatDate(lead.created_at).split(",").slice(1).join(",").trim()}
                      </p>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <StatusSelect lead={lead} />
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setExpandedId(expanded ? null : lead.id)}
                          aria-label={`${expanded ? "Hide" : "View"} enquiry from ${lead.name}`}
                          aria-expanded={expanded}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-colors hover:border-brand-yellow hover:text-navy-900"
                        >
                          <ChevronDown
                            className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
                          />
                        </button>
                        <DeleteButton lead={lead} />
                      </div>
                    </td>
                  </tr>
                  {expanded && (
                    <tr className="border-b border-navy-100/60 bg-[#FBFDFF]">
                      <td colSpan={6} className="px-5 pb-5 pt-1">
                        <LeadDetails lead={lead} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 lg:hidden">
        {leads.map((lead) => {
          const expanded = expandedId === lead.id;
          return (
            <article
              key={lead.id}
              className="rounded-[20px] border border-navy-100/80 bg-white p-4 shadow-[0_18px_44px_-46px_rgba(2,27,61,0.5)]"
            >
              <div className="flex items-start justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setExpandedId(expanded ? null : lead.id)}
                  aria-expanded={expanded}
                  className="min-w-0 flex-1 text-left"
                >
                  <p className="truncate text-[14px] font-extrabold tracking-[-0.01em] text-navy-900">
                    {lead.name}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] font-semibold text-slate-400">
                    {lead.company || "Individual enquiry"}
                  </p>
                </button>
                <StatusSelect lead={lead} />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-[#F7FAFE] px-3 py-2">
                  <p className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Interest
                  </p>
                  <p className="mt-0.5 truncate text-[11px] font-bold text-navy-800">
                    {lead.product || "General enquiry"}
                  </p>
                </div>
                <div className="rounded-xl bg-[#F7FAFE] px-3 py-2">
                  <p className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Received
                  </p>
                  <p className="mt-0.5 text-[11px] font-bold text-navy-800">
                    {formatDate(lead.created_at).split(",")[0]}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-navy-100/70 pt-3">
                <ContactLinks lead={lead} />
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setExpandedId(expanded ? null : lead.id)}
                    aria-expanded={expanded}
                    className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-200 px-2.5 text-[10.5px] font-bold text-slate-500"
                  >
                    {expanded ? "Hide" : "Details"}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", expanded && "rotate-180")}
                    />
                  </button>
                  <DeleteButton lead={lead} compact />
                </div>
              </div>

              {expanded && (
                <div className="mt-3">
                  <LeadDetails lead={lead} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
