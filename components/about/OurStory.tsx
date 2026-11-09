import { AboutGlyph } from "@/components/about/AboutGlyph";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { StoryVideoCarousel } from "@/components/about/StoryVideoCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { ourStory } from "@/lib/about";
import type { StoryVideoItem } from "@/lib/videos";
import { cn } from "@/lib/utils";

type OurStoryProps = {
  videos: StoryVideoItem[];
};

export function OurStory({ videos }: OurStoryProps) {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative overflow-hidden rounded-[24px] bg-navy-900 px-5 py-8 text-white shadow-[0_24px_70px_-52px_rgba(0,10,28,0.9)] sm:rounded-[30px] sm:px-8 sm:py-10 lg:px-11 lg:py-12 xl:px-14 2xl:px-16 2xl:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(38,102,167,0.36),transparent_66%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-6%] h-[360px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,201,7,0.08),transparent_68%)] blur-3xl"
      />

      <div className="relative">
        <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[280px_minmax(0,1fr)]">
          <Reveal>
            <AboutSectionHeading
              id="our-story-heading"
              underlineClassName="bg-brand-yellow"
            >
              Our Story
            </AboutSectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[940px] text-[13.5px] leading-[1.75] text-white/70 sm:text-[14.5px] lg:pt-1 lg:text-[15px] lg:leading-[1.8]">
              {ourStory.intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-7 sm:mt-8">
          <StoryVideoCarousel videos={videos} />
        </Reveal>

        <Reveal delay={100} className="mt-7 sm:mt-8">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 border-t border-white/10 pt-6 sm:gap-x-6 sm:gap-y-7 sm:pt-7 lg:grid-cols-4 lg:gap-0 lg:pt-8">
            {ourStory.trust.map((item, index) => (
              <li
                key={`${item.label}-${item.sublabel}`}
                className={cn(
                  "flex items-start gap-3",
                  index > 0 && "lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8",
                )}
              >
                <AboutGlyph
                  icon={item.icon}
                  className="mt-0.5 h-7 w-7 shrink-0 text-brand-yellow sm:h-8 sm:w-8"
                  strokeWidth={1.45}
                />
                <p className="text-[12px] font-bold leading-[1.3] text-white sm:text-[12.5px]">
                  {item.label}
                  <span className="mt-0.5 block font-medium text-white/55">
                    {item.sublabel}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
