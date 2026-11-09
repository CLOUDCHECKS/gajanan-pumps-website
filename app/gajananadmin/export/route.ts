import { NextResponse, type NextRequest } from "next/server";
import { getAdminUser } from "@/lib/auth";
import { getEnquiries } from "@/lib/admin";
import { formatDate } from "@/lib/enquiries";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function csvCell(value: unknown) {
  const raw = value == null ? "" : String(value);
  // Prevent spreadsheet formula injection when the file is opened in Excel.
  const safe = /^[=+\-@\t\r]/.test(raw) ? `'${raw}` : raw;
  return `"${safe.replace(/"/g, '""')}"`;
}

export async function GET(request: NextRequest) {
  const user = await getAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const filters = {
    q: searchParams.get("q")?.trim() || undefined,
    status: searchParams.get("status") || undefined,
    product: searchParams.get("product") || undefined,
  };

  const { data, error } = await getEnquiries(filters, 10000);
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const columns = [
    ["Created (IST)", (row: (typeof data)[number]) => formatDate(row.created_at)],
    ["Name", (row: (typeof data)[number]) => row.name],
    ["Company", (row: (typeof data)[number]) => row.company],
    ["Email", (row: (typeof data)[number]) => row.email],
    ["Phone", (row: (typeof data)[number]) => row.phone],
    ["City", (row: (typeof data)[number]) => row.city],
    ["State", (row: (typeof data)[number]) => row.state],
    ["Product", (row: (typeof data)[number]) => row.product],
    ["Industry", (row: (typeof data)[number]) => row.industry],
    ["Application", (row: (typeof data)[number]) => row.application],
    ["Flow rate", (row: (typeof data)[number]) => row.flow_rate],
    ["Pressure", (row: (typeof data)[number]) => row.pressure],
    ["Viscosity", (row: (typeof data)[number]) => row.viscosity],
    ["Temperature", (row: (typeof data)[number]) => row.temperature],
    ["Timeline", (row: (typeof data)[number]) => row.timeline],
    ["Message", (row: (typeof data)[number]) => row.message],
    ["Source", (row: (typeof data)[number]) => row.source],
    ["Status", (row: (typeof data)[number]) => row.status],
  ] as const;

  const lines = [
    columns.map(([label]) => csvCell(label)).join(","),
    ...data.map((row) => columns.map(([, getValue]) => csvCell(getValue(row))).join(",")),
  ];

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `\uFEFF${lines.join("\r\n")}\r\n`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="gajanan-leads-${stamp}.csv"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
