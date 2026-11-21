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
    en: "OUR TRACK\nRECORD",
    te: ui.ourTrack.te,
  },
  {
    href: "/resources/concept-cards",
    variant: "green" as const,
    icon: <IconCards />,
    en: "CONCEPT\nCARDS",
    te: "కాన్సెప్ట్\nకార్డులు",
  },
  {
    href: "/resources/concept-videos",
    variant: "red" as const,
    icon: <IconLaptop />,
    en: "CONCEPT\nVIDEOS",
    te: "కాన్సెప్ట్\nవీడియోలు",
  },
  {
    href: "/resources/testimonials",
    variant: "orange" as const,
    icon: <IconStars />,
    en: "TESTIMONIALS",
    te: "విద్యార్థి\nఅభిప్రాయాలు",
  },
  {
    href: "/resources/faqs",
    variant: "purple" as const,
    icon: <IconFaq />,
    en: ui.faqs.en,
    te: "తరచు అడిగే\nప్రశ్నలు",
  },
  {
    href: "/resources/demo-videos",
    variant: "gold" as const,
    icon: <IconClapper />,
    en: "DEMO\nVIDEOS",
    te: "డెమో\nవీడియోలు",
  },
  {
    href: "/resources/comments",
    variant: "green" as const,
    icon: <IconComment />,
    en: "YOUR\nCOMMENTS",
    te: ui.yourComments.te,
  },
  {
    href: "/resources/contact",
    variant: "pink" as const,
    icon: <IconContact />,
    en: "CONTACT\nUS",
    te: "మమ్మల్ని\nసంప్రదించండి",
  },
];

const rowTop = tiles.slice(0, 4);
const rowBottom = tiles.slice(4);

export default function ResourcesPage() {
  return (
    <SiteShell showBrand={false} wide>
      <div className="resource-honeycomb anim-enter">
        <div className="resource-row">
          {rowTop.map((t) => (
            <GlossHex
              key={t.href}
              href={t.href}
              variant={t.variant}
              size="sm"
              icon={t.icon}
              titleEn={t.en}
              titleTe={t.te}
              highlightAccent={false}
              className="resource-cell"
            />
          ))}
        </div>
        <div className="resource-row resource-row--stagger">
          {rowBottom.map((t) => (
            <GlossHex
              key={t.href}
              href={t.href}
              variant={t.variant}
              size="sm"
              icon={t.icon}
              titleEn={t.en}
              titleTe={t.te}
              highlightAccent={false}
              className="resource-cell"
            />
          ))}
        </div>
      </div>
      <NavFooter backHref="/hub" />
    </SiteShell>
  );
}
