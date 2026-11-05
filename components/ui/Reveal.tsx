"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

type RevealState = "static" | "pending" | "revealed";

/**
 * Lightweight scroll reveal.
 *
 * Content renders visible on the server so it is never blank before hydration
 * (and remains visible without JS). On mount, anything below the first
 * viewport is moved into the hidden state and revealed as it scrolls in.
 * Visitors who prefer reduced motion always see the content immediately.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setState("revealed");
      return;
    }

    const rect = node.getBoundingClientRect();
    const inInitialViewport = rect.top < window.innerHeight - 40 && rect.bottom > 0;

    if (inInitialViewport) {
      setState("revealed");
      return;
    }

    // Elements above the viewport have already been passed; leave them visible.
    if (rect.bottom <= 0) {
      setState("revealed");
      return;
    }

    // Hide only content that is safely below the fold, then reveal on scroll.
    setState("pending");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("revealed");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // The ref type varies by tag but all are HTMLElements.
      ref={ref as never}
      data-reveal={state}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
