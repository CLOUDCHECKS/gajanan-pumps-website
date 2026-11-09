import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type AdminNoticeProps = {
  title: string;
  children: React.ReactNode;
  tone?: "error" | "info";
  className?: string;
};

export function AdminNotice({
  title,
  children,
  tone = "error",
  className,
}: AdminNoticeProps) {
  const Icon = tone === "error" ? AlertTriangle : Info;

  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3.5",
        tone === "error"
          ? "border-amber-200 bg-amber-50 text-amber-900"
          : "border-sky-200 bg-sky-50 text-sky-900",
        className,
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
      <div>
        <p className="text-[12.5px] font-extrabold">{title}</p>
        <div className="mt-1 text-[11.5px] leading-relaxed opacity-80">
          {children}
        </div>
      </div>
    </div>
  );
}
