"use client";

import { ArrowUpRight } from "lucide-react";
import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { cn } from "@/lib/utils";

type ProductEnquiryButtonProps = {
  product: string;
  source: string;
  label?: string;
  variant?: "yellow" | "outline" | "navy";
  className?: string;
};

const variants = {
  yellow: "btn-yellow",
  outline: "btn-outline",
  navy: "btn-navy",
} as const;

export function ProductEnquiryButton({
  product,
  source,
  label = "Contact Us",
  variant = "yellow",
  className,
}: ProductEnquiryButtonProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      onClick={() => openEnquiry({ product, source })}
      className={cn("group", variants[variant], className)}
    >
      {label}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={2.4}
      />
    </button>
  );
}
