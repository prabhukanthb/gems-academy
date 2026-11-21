import { SiteShell } from "@/components/SiteShell";
import { GlossHex, type GlossVariant } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { NavFooter } from "@/components/NavFooter";
import { levels, ui } from "@/lib/content";

export const metadata = {
  title: "Learning @ GEMS",
};

const levelVariants: GlossVariant[] = [
  "blue",
  "green",
  "orange",
  "gold",
  "purple",
];

export default function LearningPage() {
  return (
    <SiteShell wide showBrand={false}>
      <div className="anim-enter mb-4 text-center">
        <h1 className="font-display text-2xl font-bold text-[#b01e2e] sm:text-3xl">
          {ui.englishCourses.en}
        </h1>
        <p className="font-telugu mt-1 text-[#3a5a7a]">{ui.englishCourses.te}</p>
      </div>

      {/* Levels — keep Toddler → Professional honeycomb as-is */}
      <div className="anim-enter-delay-1">
        <HexHoneycomb perRow={4}>
          {levels.map((level, i) => (
            <GlossHex
              key={level.id}
              href={`/learning/${level.id}`}
              variant={levelVariants[i] ?? "blue"}
              size="sm"
              titleEn={level.name.en}
              titleTe={level.name.te}
              highlightAccent={false}
              className="hex-cell-fill"
              ariaLabel={`${level.name.en} — ${level.description.en}`}
            />
          ))}
        </HexHoneycomb>
      </div>

      {/* Part 1 — Fee Details + Pay Fee, extreme right honeycomb */}
      <div className="anim-enter-delay-2 mt-2 flex w-full justify-end pr-1 sm:pr-4">
        <HexHoneycomb perRow={2} className="learning-part1">
          <GlossHex
            href="/learning/fees"
            variant="red"
            size="sm"
            titleEn={"FEE\nDETAILS"}
            titleTe={ui.feeDetails.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/learning/pay"
            variant="green"
            size="sm"
            titleEn={"PAY — the —\nFEE"}
            titleTe={ui.payFee.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
        </HexHoneycomb>
      </div>

      {/* Part 2 — lower; Baseline on left; FAQ next to Family */}
      <div className="anim-enter-delay-3 learning-part2 mt-10 sm:mt-14">
        <HexHoneycomb perRow={4}>
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
            href="/learning/handwriting"
            variant="blue"
            size="sm"
            titleEn={"HAND\nWRITING"}
            titleTe={ui.handwriting.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/learning/family"
            variant="purple"
            size="sm"
            titleEn={"FAMILY\nENGLISH"}
            titleTe={ui.familyEnglish.te}
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
