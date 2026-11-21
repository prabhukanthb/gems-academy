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

/** One honeycomb menu — every cell the same size, staggered like the reference. */
const cells: {
  href: string;
  variant: GlossVariant;
  en: string;
  te: string;
  accent?: string;
}[] = [
  ...levels.map((level, i) => ({
    href: `/learning/${level.id}`,
    variant: levelVariants[i] ?? ("blue" as GlossVariant),
    en: level.name.en,
    te: level.name.te,
  })),
  {
    href: "/learning/baseline",
    variant: "gold",
    en: "BASELINE\nTESTS",
    te: ui.baselineTests.te,
  },
  {
    href: "/learning/fees",
    variant: "red",
    en: "FEE\nDETAILS",
    te: ui.feeDetails.te,
  },
  {
    href: "/learning/pay",
    variant: "green",
    en: "PAY — the —\nFEE",
    te: ui.payFee.te,
  },
  {
    href: "/resources/concept-cards",
    variant: "green",
    en: "CONCEPT\nCARDS",
    te: ui.conceptCards.te,
  },
  {
    href: "/resources/concept-videos",
    variant: "red",
    en: "CONCEPT\nVIDEOS",
    te: ui.conceptVideos.te,
  },
  {
    href: "/resources/testimonials",
    variant: "orange",
    en: "TESTIMONIALS",
    te: ui.testimonials.te,
  },
  {
    href: "/resources/faqs",
    variant: "purple",
    en: ui.faqs.en,
    te: ui.faqs.te,
  },
  {
    href: "/learning/handwriting",
    variant: "blue",
    en: "HAND\nWRITING",
    te: ui.handwriting.te,
  },
  {
    href: "/learning/family",
    variant: "purple",
    en: "FAMILY\nENGLISH",
    te: ui.familyEnglish.te,
  },
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

      <div className="anim-enter-delay-1">
        <HexHoneycomb perRow={4}>
          {cells.map((c) => (
            <GlossHex
              key={c.href}
              href={c.href}
              variant={c.variant}
              size="sm"
              titleEn={c.en}
              titleAccent={c.accent}
              titleTe={c.te}
              highlightAccent={Boolean(c.accent)}
              className="hex-cell-fill"
            />
          ))}
        </HexHoneycomb>
      </div>

      <NavFooter backHref="/hub" />
    </SiteShell>
  );
}
