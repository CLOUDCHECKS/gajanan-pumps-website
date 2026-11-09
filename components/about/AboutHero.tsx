import Image from "next/image";
import { aboutHero } from "@/lib/about";

/**
 * About-page hero. The refinery backdrop establishes the industrial setting
 * while the pump cut-out carries the established product language from the
 * homepage hero. The fixed site header supplies the logo lock-up, so it is
 * deliberately not repeated inside the hero.
 */
export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/about/hero-plant.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_46%] opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_34%,rgba(20,72,128,0.28)_0%,rgba(0,15,38,0.18)_46%,rgba(0,15,38,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,8,22,0.97)_0%,rgba(0,13,33,0.93)_30%,rgba(0,16,40,0.66)_48%,rgba(0,16,40,0.2)_72%,rgba(0,10,26,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,7,20,0.7)_0%,rgba(0,9,25,0.08)_32%,rgba(0,9,26,0.16)_64%,rgba(0,8,22,0.74)_100%)]" />

        {/* Fine engineering grid, fading out before it reaches the copy */}
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(154,193,233,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(154,193,233,0.32)_1px,transparent_1px)] [background-size:92px_92px] [mask-image:radial-gradient(ellipse_at_78%_52%,black_0%,transparent_66%)]" />
        <div className="absolute -right-[6%] bottom-[-12%] h-[520px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(255,181,0,0.15),transparent_66%)] blur-3xl" />
      </div>

      {/* Desktop pump composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[30px] right-[-1%] z-[1] hidden w-[63%] max-w-[1120px] lg:block xl:bottom-[26px] xl:w-[61%]"
      >
        <Image
          src="/images/hero-pump-cutout.png"
          alt=""
          width={2129}
          height={726}
          priority
          sizes="(min-width: 1280px) 66vw, 62vw"
          className="h-auto w-full drop-shadow-[0_44px_56px_rgba(0,0,0,0.5)]"
        />
        <span className="absolute inset-x-[16%] bottom-[-16px] h-9 rounded-full bg-black/45 blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="shell flex min-h-[590px] flex-col justify-center pb-24 pt-[136px] sm:min-h-[630px] sm:pb-28 sm:pt-[154px] lg:min-h-[620px] lg:pb-28 lg:pt-[158px] xl:min-h-[648px]">
          <div className="max-w-[720px] lg:max-w-[620px] xl:max-w-[700px]">
            <p className="eyebrow animate-fade-up">{aboutHero.eyebrow}</p>

            <h1
              id="about-hero-heading"
              className="mt-4 animate-fade-up text-[clamp(2.3rem,4vw,3.75rem)] font-extrabold leading-[1.01] tracking-[-0.045em] [animation-delay:80ms] sm:mt-5"
            >
              <span className="block">{aboutHero.titleLineOne}</span>{" "}
              <span className="mt-1 block italic">
                {aboutHero.titleLineTwoPrefix}{" "}
                <span className="text-brand-yellow">
                  {aboutHero.titleLineTwoHighlight}
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-[590px] animate-fade-up text-[14.5px] leading-[1.65] text-white/80 [animation-delay:160ms] sm:mt-6 sm:text-[16px] sm:leading-[1.7] xl:text-[17px]">
              {aboutHero.intro}
            </p>
          </div>

          {/* Mobile / tablet pump */}
          <div className="relative mt-9 lg:hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-3 h-20 rounded-full bg-brand-yellow/15 blur-2xl"
            />
            <Image
              src="/images/hero-pump-cutout.png"
              alt={aboutHero.pumpAlt}
              width={2129}
              height={726}
              priority
              sizes="(max-width: 1024px) 112vw, 1px"
              className="relative -ml-[6%] w-[112%] max-w-none drop-shadow-[0_26px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
