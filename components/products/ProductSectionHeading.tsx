import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProductSectionHeadingProps = {
  children: ReactNode;
  id?: string;
  as?: "h2" | "h3";
  className?: string;
  invert?: boolean;
};

export function ProductSectionHeading({
  children,
  id,
  as: Tag = "h2",
  className,
  invert = false,
}: ProductSectionHeadingProps) {
  return (
    <div className={className}>
      <Tag
        id={id}
        className={cn(
          "text-[clamp(1.7rem,2.8vw,2.4rem)] font-extrabold leading-[1.05] tracking-[-0.04em]",
          invert ? "text-white" : "text-navy-900",
        )}
      >
        {children}
      </Tag>
      <span
        aria-hidden="true"
        className="mt-3 block h-[4px] w-14 rounded-full bg-brand-yellow sm:w-16"
      />
    </div>
  );
}
