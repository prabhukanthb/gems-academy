import { SiteShell } from "@/components/SiteShell";
import { GlossHex, PathBanner } from "@/components/GlossHex";
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
    <SiteShell showBrand={false}>
      <div className="relative flex flex-1 flex-col items-center gap-6 py-4 sm:gap-8">
        <div className="anim-enter w-full">
          <PathBanner en="Choose your path" te="మీ మార్గాన్ని ఎంచుకోండి" />
        </div>

        <div className="anim-enter-delay-1 flex flex-col items-center gap-5 sm:gap-6">
          <GlossHex
            href="/learning"
            variant="blue"
            size="xl"
            icon={<IconBookCap />}
            titleEn="LEARNING @"
            titleAccent="GEMS"
            titleTe={ui.learning.te}
            ariaLabel="Learning at GEMS"
          />

          <GlossHex
            href="/earning"
            variant="red"
            size="xl"
            icon={<IconRupeeStack />}
            titleEn="EARNING @"
            titleAccent="GEMS"
            titleTe={ui.earning.te}
            ariaLabel="Earning at GEMS"
          />

          <GlossHex
            href="/"
            variant="green"
            size="md"
            icon={<IconHome className="h-10 w-10" />}
            titleEn="HOME"
            titleAccent="SCREEN"
            titleTe={ui.home.te}
            ariaLabel="Home screen"
          />
        </div>
      </div>
    </SiteShell>
  );
}
