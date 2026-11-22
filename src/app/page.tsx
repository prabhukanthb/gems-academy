import { SiteShell } from "@/components/SiteShell";
import { CrestBadge } from "@/components/CrestBadge";
import { CtaPill } from "@/components/CtaPill";
import { GlossHex } from "@/components/GlossHex";
import { WelcomeHex } from "@/components/WelcomeHex";
import { ui } from "@/lib/content";

export default function LandingPage() {
  return (
    <SiteShell showBrand={false}>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-5 py-4 text-center sm:gap-6 sm:py-6">
        {/* Decorative honeycomb + bees at 35% opacity */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-visible"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/honeycomb-bees.png"
            alt=""
            className="absolute -left-8 -top-8 w-[min(100vw,40rem)] max-w-none object-contain opacity-[0.35] sm:-left-6 sm:w-[min(88vw,34rem)]"
          />
        </div>

        <div className="anim-enter relative z-10">
          <CrestBadge />
        </div>

        <div className="anim-enter-delay-1 relative z-10">
          <WelcomeHex />
        </div>

        <div className="anim-enter-delay-2 relative z-10 w-full px-1">
          <CtaPill href="/hub" en={ui.clickHint.en} te={ui.clickHint.te} />
        </div>

        <div className="anim-enter-delay-3 relative z-10">
          <GlossHex
            href="/about"
            variant="orange"
            size="md"
            titleEn="ABOUT"
            titleAccent="US"
            titleTe={ui.aboutUs.te}
            ariaLabel="About us"
          />
        </div>
      </div>
    </SiteShell>
  );
}
