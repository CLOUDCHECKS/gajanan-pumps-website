export const ENQUIRY_STATUSES = [
  "new",
  "contacted",
  "qualified",
  "closed",
] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export const statusLabels: Record<EnquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  closed: "Closed",
};

export type Enquiry = {
  id: string;
  created_at: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  product: string | null;
  industry: string | null;
  application: string | null;
  city: string | null;
  state: string | null;
  flow_rate: string | null;
  pressure: string | null;
  viscosity: string | null;
  temperature: string | null;
  timeline: string | null;
  message: string;
  source: string | null;
  status: EnquiryStatus;
  user_agent: string | null;
};

export function isEnquiryStatus(value: string): value is EnquiryStatus {
  return (ENQUIRY_STATUSES as readonly string[]).includes(value);
}

export function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";

  const units = ["B", "KB", "MB", "GB", "TB"];
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / 1024 ** exponent;

  return `${value.toLocaleString("en-IN", {
    maximumFractionDigits: exponent === 0 ? 0 : value < 10 ? 2 : 1,
  })} ${units[exponent]}`;
}

export function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export function formatShortDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}
