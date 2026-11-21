import { SiteShell } from "@/components/SiteShell";
import { GlossHex, PathBanner } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import {
  IconBookCap,
  IconHome,
  IconRupeeStack,
} from "@/components/MenuIcons";
import { ui } from "@/lib/content";

export const metadata = {
  title: "Choose Your Path",
};

export default function HubPage() {
  return (
    <SiteShell showBrand={false} wide>
      <div className="relative flex flex-1 flex-col items-center gap-6 py-4 sm:gap-8">
        <div className="anim-enter w-full">
          <PathBanner en="Choose your path" te="మీ మార్గాన్ని ఎంచుకోండి" />
        </div>

        <div className="anim-enter-delay-1 w-full">
          <HexHoneycomb perRow={4}>
            <GlossHex
              href="/learning"
              variant="blue"
              size="sm"
              icon={<IconBookCap />}
              titleEn="LEARNING @"
              titleAccent="GEMS"
              titleTe={ui.learning.te}
              ariaLabel="Learning at GEMS"
              className="hex-cell-fill"
            />
            <GlossHex
              href="/earning"
              variant="red"
              size="sm"
              icon={<IconRupeeStack />}
              titleEn="EARNING @"
              titleAccent="GEMS"
              titleTe={ui.earning.te}
              ariaLabel="Earning at GEMS"
              className="hex-cell-fill"
            />
            <GlossHex
              href="/"
              variant="green"
              size="sm"
              icon={<IconHome className="h-8 w-8" />}
              titleEn="HOME"
              titleAccent="SCREEN"
              titleTe={ui.home.te}
              ariaLabel="Home screen"
              className="hex-cell-fill"
            />
          </HexHoneycomb>
        </div>
      </div>
    </SiteShell>
  );
}
