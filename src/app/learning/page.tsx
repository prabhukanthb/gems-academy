import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { HexButton, HexBadge } from "@/components/HexButton";
import { LevelStaircase } from "@/components/LevelStaircase";
import { NavFooter } from "@/components/NavFooter";
import { Bilingual } from "@/components/Bilingual";
import { ui } from "@/lib/content";

export const metadata = {
  title: "Learning @ GEMS",
};

export default function LearningPage() {
  return (
    <SiteShell wide>
      <div className="anim-enter flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-[#b01e2e] sm:text-3xl">
            {ui.englishCourses.en}
          </h1>
          <p className="font-telugu mt-1 text-[#3a5a7a]">
            {ui.englishCourses.te}
          </p>
        </div>
        <Link href="/learning/baseline" aria-label="Baseline tests">
          <HexBadge variant="gold" className="!text-[0.62rem] !leading-tight">
            <span>{ui.baselineTests.en}</span>
            <span className="font-telugu mt-0.5 block text-[0.55rem] font-normal">
              {ui.baselineTests.te}
            </span>
          </HexBadge>
        </Link>
      </div>

      <div className="anim-enter-delay-1 mt-6">
        <LevelStaircase />
      </div>

      <div className="anim-enter-delay-2 mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/learning/handwriting"
          className="ribbon bg-gradient-to-r from-[#1a4f8a] to-[#0d355f] shadow-md"
        >
          <span className="font-script text-xl">{ui.handwriting.en}</span>
          <span className="font-telugu ml-2 text-xs opacity-90">
            {ui.handwriting.te}
          </span>
        </Link>
        <Link
          href="/learning/family"
          className="ribbon bg-gradient-to-r from-[#7a3a9a] to-[#4a1a6e] shadow-md"
        >
          <span className="font-display italic text-sm sm:text-base">
            {ui.familyEnglish.en}
          </span>
          <span className="font-telugu ml-2 text-xs opacity-90">
            {ui.familyEnglish.te}
          </span>
        </Link>
      </div>

      <div className="anim-enter-delay-3 mt-10 flex flex-wrap items-center justify-center gap-6">
        <HexButton href="/learning/fees" variant="red" size="md">
          <Bilingual
            text={ui.feeDetails}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
        <HexButton href="/learning/pay" variant="green" size="md">
          <Bilingual
            text={ui.payFee}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <HexButton href="/resources/concept-cards" variant="green" size="sm">
          <Bilingual
            text={ui.conceptCards}
            enClassName="text-[0.65rem]"
            teClassName="text-[0.55rem] font-normal"
          />
        </HexButton>
        <HexButton href="/resources/concept-videos" variant="red" size="sm">
          <Bilingual
            text={ui.conceptVideos}
            enClassName="text-[0.65rem]"
            teClassName="text-[0.55rem] font-normal"
          />
        </HexButton>
        <HexButton href="/resources/testimonials" variant="orange" size="sm">
          <Bilingual
            text={ui.testimonials}
            enClassName="text-[0.65rem]"
            teClassName="text-[0.55rem] font-normal"
          />
        </HexButton>
        <HexButton href="/resources/faqs" variant="purple" size="sm">
          <Bilingual
            text={ui.faqs}
            enClassName="text-[0.65rem]"
            teClassName="text-[0.55rem] font-normal"
          />
        </HexButton>
      </div>

      <NavFooter backHref="/hub" />
    </SiteShell>
  );
}
