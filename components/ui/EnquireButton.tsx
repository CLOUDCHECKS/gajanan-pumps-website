"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { cn } from "@/lib/utils";

type EnquireButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "yellow" | "outline" | "navy" | "link";
  industry?: string;
  product?: string;
  source: string;
  icon?: "arrow" | "message" | "none";
  ariaLabel?: string;
};

export function EnquireButton({
  children,
  className,
  variant = "yellow",
  industry,
  product,
  source,
  icon = "arrow",
  ariaLabel,
}: EnquireButtonProps) {
  const { openEnquiry } = useEnquiry();

  const variantClass =
    variant === "yellow"
      ? "btn-yellow"
      : variant === "outline"
        ? "btn-outline"
        : variant === "navy"
          ? "btn-navy"
          : "inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-blue transition-colors hover:text-navy-800";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => openEnquiry({ industry, product, source })}
      className={cn("group", variantClass, className)}
    >
      {children}
      {icon === "arrow" && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === "message" && (
        <MessageSquare className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
      )}
    </button>
  );
}
