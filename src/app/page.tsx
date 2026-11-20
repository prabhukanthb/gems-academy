import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ui, brand } from "@/lib/content";

export default function LandingPage() {
  return (
    <SiteShell showBrand={false}>
      <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
        <p className="anim-enter font-brand text-5xl tracking-tight text-[#0d355f] sm:text-6xl">
          GEMS
        </p>
        <p className="anim-enter-delay-1 mt-1 font-display text-base text-[#3a5a7a] sm:text-lg">
          Academy · {brand.domain}
        </p>

        <div className="anim-enter-delay-2 mt-10 flex flex-col items-center gap-8 sm:gap-10">
          <Link
            href="/hub"
            aria-label="GEMS కి స్వాగతం — Welcome to GEMS"
            className="hex-btn landing-hex group relative flex h-[15.5rem] w-[17.5rem] flex-col items-center justify-center text-white transition-transform duration-300 hover:-translate-y-1 sm:h-[17rem] sm:w-[19rem]"
            style={{
              background:
                "linear-gradient(160deg, #4a90d9 0%, #1a4f8a 45%, #0d355f 100%)",
              filter:
                "drop-shadow(0 10px 0 #0a2a4a) drop-shadow(0 18px 22px rgba(10,30,50,0.3))",
            }}
          >
            <span className="font-script text-4xl leading-none sm:text-5xl">
              {ui.welcome.en}
            </span>
            <span className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/85">
              <span className="h-px w-6 bg-white/70" aria-hidden />
              {ui.to.en}
              <span className="h-px w-6 bg-white/70" aria-hidden />
            </span>
            <span className="font-brand mt-1 text-4xl font-bold tracking-wide sm:text-5xl">
              GEMS
            </span>
            <span className="font-telugu mt-3 text-base text-white/95 sm:text-lg">
              GEMS కి స్వాగతం!
            </span>
          </Link>

          <div className="anim-hint flex items-center gap-3 text-[#b01e2e]">
            <MouseIcon />
            <div className="text-left">
              <p className="font-display text-base font-semibold sm:text-lg">
                {ui.clickHint.en}
              </p>
              <p className="font-telugu text-sm opacity-90">{ui.clickHint.te}</p>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function MouseIcon() {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect
        x="6"
        y="2"
        width="24"
        height="36"
        rx="12"
        stroke="#b01e2e"
        strokeWidth="2.5"
        fill="#fff5f5"
      />
      <rect x="16" y="8" width="4" height="8" rx="2" fill="#6e2a9a" />
      <path
        d="M28 28c4 2 8 1 10-2"
        stroke="#b01e2e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        transform="translate(-8,4)"
      />
    </svg>
  );
}
