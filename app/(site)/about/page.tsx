import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { JourneyCapabilities } from "@/components/about/JourneyCapabilities";
import { OurApproach } from "@/components/about/OurApproach";
import { OurStory } from "@/components/about/OurStory";
import { OurTechnology } from "@/components/about/OurTechnology";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { getStoryVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "For more than two decades, Gajanan Pumps has been manufacturing positive displacement pumps, delivering reliable and efficient fluid-handling solutions across diverse industries worldwide.",
};

export default async function AboutPage() {
  const videos = await getStoryVideos();

  return (
    <>
      <AboutHero />

      <div className="relative bg-[linear-gradient(180deg,#DCEBF9_0%,#EDF5FD_46%,#F7FBFF_100%)] pb-10 pt-3 sm:pb-14 sm:pt-4">
        <div className="mx-auto w-full max-w-[1636px] px-[18px]">
          <div className="flex flex-col gap-3 sm:gap-4">
            <WhoWeAre />
            <OurStory videos={videos} />
            <OurApproach />
            <OurTechnology />
            <JourneyCapabilities />
          </div>
        </div>
      </div>
    </>
  );
}
