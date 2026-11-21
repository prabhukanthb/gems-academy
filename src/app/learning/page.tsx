import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { GlossHex } from "@/components/GlossHex";
import { HexBadge } from "@/components/HexButton";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { LevelStaircase } from "@/components/LevelStaircase";
import { NavFooter } from "@/components/NavFooter";
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

      <div className="anim-enter-delay-3 mt-10">
        <HexHoneycomb perRow={2} className="fee-honeycomb">
          <GlossHex
            href="/learning/fees"
            variant="red"
            size="md"
            titleEn="FEE"
            titleAccent="DETAILS"
            titleTe={ui.feeDetails.te}
          />
          <GlossHex
            href="/learning/pay"
            variant="green"
            size="md"
            titleEn={"PAY — the —\nFEE"}
            titleTe={ui.payFee.te}
            highlightAccent={false}
          />
        </HexHoneycomb>
      </div>

      <div className="anim-enter-delay-3 mt-8">
        <HexHoneycomb perRow={4}>
          <GlossHex
            href="/resources/concept-cards"
            variant="green"
            size="sm"
            titleEn={"CONCEPT\nCARDS"}
            titleTe={ui.conceptCards.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/concept-videos"
            variant="red"
            size="sm"
            titleEn={"CONCEPT\nVIDEOS"}
            titleTe={ui.conceptVideos.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/testimonials"
            variant="orange"
            size="sm"
            titleEn="TESTIMONIALS"
            titleTe={ui.testimonials.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/faqs"
            variant="purple"
            size="sm"
            titleEn={ui.faqs.en}
            titleTe={ui.faqs.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
        </HexHoneycomb>
      </div>

      <NavFooter backHref="/hub" />
    </SiteShell>
  );
}
