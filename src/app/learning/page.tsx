import { SiteShell } from "@/components/SiteShell";
import { GlossHex } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { LevelStaircase } from "@/components/LevelStaircase";
import { NavFooter } from "@/components/NavFooter";
import { ui } from "@/lib/content";

export const metadata = {
  title: "Learning @ GEMS",
};

export default function LearningPage() {
  return (
    <SiteShell wide showBrand={false}>
      <div className="anim-enter mb-4 text-center">
        <h1 className="font-display text-2xl font-bold text-[#b01e2e] sm:text-3xl">
          {ui.englishCourses.en}
        </h1>
        <p className="font-telugu mt-1 text-[#3a5a7a]">{ui.englishCourses.te}</p>
      </div>

      <div className="anim-enter-delay-1">
        <LevelStaircase />
      </div>

      <div className="anim-enter-delay-2 learning-part2 mt-10 sm:mt-14">
        <HexHoneycomb perRow={3}>
          <GlossHex
            href="/learning/baseline"
            variant="gold"
            size="sm"
            titleEn={"BASELINE\nTESTS"}
            titleTe={ui.baselineTests.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
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
