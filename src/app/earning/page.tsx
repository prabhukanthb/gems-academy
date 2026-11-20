import { SiteShell } from "@/components/SiteShell";
import { WideHexBar } from "@/components/GlossHex";
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
    <SiteShell showBrand={false}>
      <div className="relative flex flex-1 flex-col items-center py-2">
        <h1 className="anim-enter text-center font-display text-2xl font-extrabold text-[#0d3f68] sm:text-3xl">
          {ui.earning.en}
        </h1>
        <p className="font-telugu anim-enter mt-1 text-center font-bold text-[#1a5f8a]">
          {ui.earning.te}
        </p>

        <div className="anim-enter-delay-1 mt-8 flex w-full flex-col gap-4 sm:gap-5">
          <WideHexBar
            href="/earning/tuition"
            variant="blue"
            icon={<IconSchool />}
            line1="GEMS"
            line1Accent="TUITION CENTER"
            line2Te={ui.tuitionCenter.te}
          />
          <WideHexBar
            href="/earning/home-tutors"
            variant="red"
            icon={<IconTutor />}
            line1="GEMS"
            line1Accent="HOME TUTORS"
            line2Te={ui.homeTutors.te}
          />
          <WideHexBar
            href="/earning/earn-back"
            variant="green"
            icon={<IconCoins />}
            line1="EARN BACK"
            line1Accent="YOUR FEE"
            line2Te={ui.earnBack.te}
          />
          <WideHexBar
            href="/earning/work-with"
            variant="orange"
            icon={<IconHandshake />}
            line1="WORK WITH"
            line1Accent="GEMS"
            line2Te={ui.workWith.te}
          />
        </div>

        <NavFooter backHref="/hub" />
      </div>
    </SiteShell>
  );
}
