import { SiteShell } from "@/components/SiteShell";
import { GlossHex } from "@/components/GlossHex";
import { NavFooter } from "@/components/NavFooter";
import {
  IconCards,
  IconClapper,
  IconClipboard,
  IconComment,
  IconContact,
  IconFaq,
  IconLaptop,
  IconStars,
} from "@/components/MenuIcons";
import { ui } from "@/lib/content";

export const metadata = { title: "Resources" };

const tiles = [
  {
    href: "/resources/track-record",
    variant: "pink" as const,
    icon: <IconClipboard />,
    en: ui.ourTrack.en,
    te: ui.ourTrack.te,
  },
  {
    href: "/resources/concept-cards",
    variant: "green" as const,
    icon: <IconCards />,
    en: ui.conceptCards.en,
    te: ui.conceptCards.te,
  },
  {
    href: "/resources/concept-videos",
    variant: "red" as const,
    icon: <IconLaptop />,
    en: ui.conceptVideos.en,
    te: ui.conceptVideos.te,
  },
  {
    href: "/resources/testimonials",
    variant: "orange" as const,
    icon: <IconStars />,
    en: ui.testimonials.en,
    te: ui.testimonials.te,
  },
  {
    href: "/resources/faqs",
    variant: "purple" as const,
    icon: <IconFaq />,
    en: ui.faqs.en,
    te: ui.faqs.te,
  },
  {
    href: "/resources/demo-videos",
    variant: "gold" as const,
    icon: <IconClapper />,
    en: ui.demoVideos.en,
    te: ui.demoVideos.te,
  },
  {
    href: "/resources/comments",
    variant: "green" as const,
    icon: <IconComment />,
    en: ui.yourComments.en,
    te: ui.yourComments.te,
  },
  {
    href: "/resources/contact",
    variant: "pink" as const,
    icon: <IconContact />,
    en: ui.contactUs.en,
    te: ui.contactUs.te,
  },
];

export default function ResourcesPage() {
  return (
    <SiteShell showBrand={false}>
      <div className="anim-enter grid grid-cols-2 justify-items-center gap-x-2 gap-y-3 sm:gap-x-4 sm:gap-y-4">
        {tiles.map((t) => (
          <GlossHex
            key={t.href}
            href={t.href}
            variant={t.variant}
            size="md"
            icon={t.icon}
            titleEn={t.en}
            titleTe={t.te}
            highlightAccent={false}
          />
        ))}
      </div>
      <NavFooter backHref="/hub" />
    </SiteShell>
  );
}
