import { SiteShell } from "@/components/SiteShell";
import { GlossHex } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { NavFooter } from "@/components/NavFooter";
import {
  IconCoins,
  IconHandshake,
  IconSchool,
  IconTutor,
} from "@/components/MenuIcons";
import { ui } from "@/lib/content";

export const metadata = { title: "Earning @ GEMS" };

export default function EarningPage() {
  return (
    <SiteShell showBrand={false} wide>
      <div className="relative flex flex-1 flex-col items-center py-2">
        <h1 className="anim-enter text-center font-display text-2xl font-extrabold text-[#0d3f68] sm:text-3xl">
          {ui.earning.en}
        </h1>
        <p className="font-telugu anim-enter mt-1 text-center font-bold text-[#1a5f8a]">
          {ui.earning.te}
        </p>

        <div className="anim-enter-delay-1 mt-8 w-full">
          <HexHoneycomb perRow={4}>
            <GlossHex
              href="/earning/tuition"
              variant="blue"
              size="sm"
              icon={<IconSchool />}
              titleEn="GEMS"
              titleAccent="TUITION"
              titleTe={ui.tuitionCenter.te}
              className="hex-cell-fill"
            />
            <GlossHex
              href="/earning/home-tutors"
              variant="red"
              size="sm"
              icon={<IconTutor />}
              titleEn="GEMS"
              titleAccent="TUTORS"
              titleTe={ui.homeTutors.te}
              className="hex-cell-fill"
            />
            <GlossHex
              href="/earning/earn-back"
              variant="green"
              size="sm"
              icon={<IconCoins />}
              titleEn={"EARN BACK\nYOUR FEE"}
              titleTe={ui.earnBack.te}
              highlightAccent={false}
              className="hex-cell-fill"
            />
            <GlossHex
              href="/earning/work-with"
              variant="orange"
              size="sm"
              icon={<IconHandshake />}
              titleEn="WORK WITH"
              titleAccent="GEMS"
              titleTe={ui.workWith.te}
              className="hex-cell-fill"
            />
          </HexHoneycomb>
        </div>

        <NavFooter backHref="/hub" />
      </div>
    </SiteShell>
  );
}
