import { SiteShell } from "@/components/SiteShell";
import { CrestBadge } from "@/components/CrestBadge";
import { CtaPill } from "@/components/CtaPill";
import { AboutHoneyCTA } from "@/components/AboutHoneyCTA";
import { WelcomeHex } from "@/components/WelcomeHex";
import { ui } from "@/lib/content";

export default function LandingPage() {
  return (
    <SiteShell showBrand={false}>
      <div className="relative flex flex-1 flex-col items-center gap-5 py-2 text-center sm:gap-6 sm:py-4">
        {/* Welcome at the top; crest sits to the right */}
        <div className="anim-enter relative z-10 flex w-full items-start justify-center gap-2 pr-[5.5rem] sm:pr-[7.25rem] md:pr-[8.25rem]">
          <WelcomeHex />
          <div className="absolute right-0 top-0 w-[5.75rem] sm:w-[7.25rem] md:w-[8.25rem]">
            <CrestBadge className="max-w-none drop-shadow-[0_8px_14px_rgba(20,40,80,0.2)]" />
          </div>
        </div>

        <div className="anim-enter-delay-2 relative z-10 w-full px-1">
          <CtaPill href="/hub" en={ui.clickHint.en} te={ui.clickHint.te} />
        </div>

        <div className="anim-enter-delay-3 relative z-10 w-full">
          <AboutHoneyCTA />
        </div>
      </div>
    </SiteShell>
  );
}
