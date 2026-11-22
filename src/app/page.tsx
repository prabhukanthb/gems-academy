import { SiteShell } from "@/components/SiteShell";
import { CrestBadge } from "@/components/CrestBadge";
import { CtaPill } from "@/components/CtaPill";
import { AboutHoneyCTA } from "@/components/AboutHoneyCTA";
import { WelcomeHex } from "@/components/WelcomeHex";
import { ui } from "@/lib/content";

export default function LandingPage() {
  return (
    <SiteShell showBrand={false}>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-5 py-4 text-center sm:gap-6 sm:py-6">
        <div className="anim-enter">
          <CrestBadge />
        </div>

        <div className="anim-enter-delay-1">
          <WelcomeHex />
        </div>

        <div className="anim-enter-delay-2 w-full px-1">
          <CtaPill href="/hub" en={ui.clickHint.en} te={ui.clickHint.te} />
        </div>

        <div className="anim-enter-delay-3 w-full">
          <AboutHoneyCTA />
        </div>
      </div>
    </SiteShell>
  );
}
