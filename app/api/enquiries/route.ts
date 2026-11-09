import { NextResponse, type NextRequest } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { enquirySchema } from "@/lib/validation";
import { getSupabaseServerClient } from "@/lib/supabase/public";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 8;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

async function persistLocally(record: Record<string, unknown>) {
  try {
    const directory = path.join(process.cwd(), ".data");
    await fs.mkdir(directory, { recursive: true });
    await fs.appendFile(
      path.join(directory, "enquiries.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
    return true;
  } catch {
    // Serverless file systems are read-only — this is only a local fallback.
    return false;
  }
}

const clean = (value?: string) => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
};

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "local";
  const userAgent = request.headers.get("user-agent") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many enquiries from this connection. Please try again in a few minutes.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const payload = body as Record<string, unknown>;

  // Honeypot — pretend success so bots do not retry.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true, persisted: false });
  }

  const parsed = enquirySchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  const record = {
    name: data.name,
    company: clean(data.company),
    email: data.email,
    phone: data.phone,
    product: clean(data.product),
    industry: clean(data.industry),
    application: clean(data.application),
    city: clean(data.city),
    state: clean(data.state),
    flow_rate: clean(data.flowRate),
    pressure: clean(data.pressure),
    viscosity: clean(data.viscosity),
    temperature: clean(data.temperature),
    timeline: clean(data.timeline),
    message: data.message,
    source:
      typeof payload.source === "string"
        ? payload.source.slice(0, 80)
        : "website",
    status: "new" as const,
    user_agent: userAgent.slice(0, 300),
  };

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    await persistLocally(record);
    console.warn(
      "[enquiries] Supabase is not configured — enquiry accepted but not persisted remotely.",
    );
    return NextResponse.json({ ok: true, persisted: false });
  }

  const { error } = await supabase.from("enquiries").insert(record);

  if (error) {
    console.error("[enquiries] Supabase insert failed:", error.code);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not save your enquiry right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, persisted: true });
}
