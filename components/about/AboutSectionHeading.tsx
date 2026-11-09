import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AboutSectionHeadingProps = {
  children: ReactNode;
  id?: string;
  as?: "h2" | "h3";
  className?: string;
  underlineClassName?: string;
};

/**
 * Shared display heading for the About page. The short yellow rule under each
 * heading is part of the design language across every section.
 */
export function AboutSectionHeading({
  children,
  id,
  as: Tag = "h2",
  className,
  underlineClassName,
}: AboutSectionHeadingProps) {
  return (
    <div className={className}>
      <Tag
        id={id}
        className="text-[clamp(1.9rem,3.15vw,2.8rem)] font-extrabold leading-[1.04] tracking-[-0.04em]"
      >
        {children}
      </Tag>
      <span
        aria-hidden="true"
        className={cn(
          "mt-3 block h-[4px] w-14 rounded-full bg-brand-yellow sm:w-16",
          underlineClassName,
        )}
      />
    </div>
  );
}
