"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Film } from "lucide-react";
import type { StoryVideoItem } from "@/lib/videos";
import { EnquireButton } from "@/components/ui/EnquireButton";
import { cn } from "@/lib/utils";

type StoryVideoCarouselProps = {
  videos: StoryVideoItem[];
};

export function StoryVideoCarousel({ videos }: StoryVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (videos.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-navy-950 sm:rounded-[24px]">
        <div className="relative flex min-h-[280px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[360px] sm:px-10 lg:min-h-[420px]">
          <Image
            src="/images/about/manufacturing.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 1500px, 92vw"
            className="object-cover object-center opacity-35"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,28,0.45)_0%,rgba(0,10,28,0.76)_55%,rgba(0,8,22,0.94)_100%)]"
          />
          <div className="relative flex flex-col items-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-yellow/35 bg-brand-yellow/10 text-brand-yellow">
              <Film className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
              Our story on film
            </p>
            <p className="mt-2 max-w-[460px] text-[20px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[25px]">
              Manufacturing films are being prepared.
            </p>
            <p className="mt-2.5 max-w-[500px] text-[12.5px] leading-[1.7] text-white/60 sm:text-[13.5px]">
              In the meantime, our team can tell you more about our in-house
              manufacturing capabilities and how our pumps are engineered and
              built.
            </p>
            <EnquireButton
              source="about-manufacturing-film"
              icon="message"
              className="mt-6 h-11 px-5"
            >
              Ask about our capabilities
            </EnquireButton>
          </div>
        </div>
      </div>
    );
  }

  const active = videos[activeIndex];
  const hasMultiple = videos.length > 1;

  const goTo = (index: number) => {
    videoRef.current?.pause();
    setActiveIndex(index);
  };

  const previous = () => {
    goTo((activeIndex - 1 + videos.length) % videos.length);
  };

  const next = () => {
    goTo((activeIndex + 1) % videos.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Gajanan Pumps story videos"
      className="overflow-hidden rounded-[20px] border border-white/10 bg-navy-950 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.9)] sm:rounded-[24px]"
    >
      <div className="relative aspect-video w-full bg-black">
        <video
          key={active.src}
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={active.poster}
          className="h-full w-full object-contain"
          aria-label={active.title}
        >
          <source src={active.src} type={active.mimeType} />
          Your browser does not support embedded video.{" "}
          <a href={active.src} className="underline">
            Open the film
          </a>
          .
        </video>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(0,8,22,0.72)_0%,rgba(0,8,22,0)_100%)]"
        />

        <div className="pointer-events-none absolute left-3 top-3 flex max-w-[calc(100%-6rem)] items-center gap-2 rounded-full border border-white/15 bg-navy-950/65 px-3 py-1.5 backdrop-blur-md sm:left-4 sm:top-4">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
          <span className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-white/85">
            Film {String(activeIndex + 1).padStart(2, "0")}
            {hasMultiple ? ` / ${String(videos.length).padStart(2, "0")}` : ""}
          </span>
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous film"
              className="absolute left-2.5 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy-950/65 text-white backdrop-blur-md transition-colors hover:border-brand-yellow/60 hover:bg-navy-950/85 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:left-4 sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.4} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next film"
              className="absolute right-2.5 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy-950/65 text-white backdrop-blur-md transition-colors hover:border-brand-yellow/60 hover:bg-navy-950/85 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:right-4 sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-navy-900">
            <Film className="h-4 w-4" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-extrabold tracking-[-0.015em] text-white">
              {active.title}
            </p>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              Gajanan Pumps &amp; Systems
            </p>
          </div>
        </div>

        {hasMultiple && (
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Choose a film"
          >
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Film ${index + 1}: ${video.title}`}
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 ease-premium focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
                  index === activeIndex
                    ? "w-7 bg-brand-yellow"
                    : "w-2 bg-white/25 hover:bg-white/45",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
