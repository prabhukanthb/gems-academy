import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { HoneycombArt } from "@/components/HoneycombArt";
import { ui, brand } from "@/lib/content";

export default function LandingPage() {
  return (
    <SiteShell showBrand={false}>
      <div className="relative flex flex-1 flex-col items-center justify-center py-6 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-4 mx-auto w-full max-w-lg opacity-90 sm:top-0 sm:max-w-xl">
          <HoneycombArt className="anim-comb h-auto w-full" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="anim-enter font-brand text-5xl tracking-tight text-[#0d3f68] sm:text-6xl">
            GEMS
          </p>
          <p className="anim-enter-delay-1 mt-1 font-display text-base text-[#5a4a28] sm:text-lg">
            Academy · {brand.domain}
          </p>
          <p className="anim-enter-delay-1 font-telugu mt-1 text-sm text-[#6a5a38]">
            {brand.tagline.te}
          </p>

          <div className="anim-enter-delay-2 mt-8 sm:mt-10">
            <Link
              href="/hub"
              aria-label="GEMS కి స్వాగతం — Welcome to GEMS"
              className="landing-comb honey-cell group relative flex h-[16.5rem] w-[14.75rem] flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] sm:h-[18.5rem] sm:w-[16.5rem]"
            >
              <svg
                className="absolute inset-0 h-full w-full drop-shadow-[0_14px_28px_rgba(90,60,10,0.22)]"
                viewBox="0 0 100 112"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M50 4 L92 28 L92 84 L50 108 L8 84 L8 28 Z"
                  fill="url(#cell-gold)"
                  stroke="#7a5a14"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 14 L84 34 L84 78 L50 98 L16 78 L16 34 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
                <ellipse
                  cx="50"
                  cy="32"
                  rx="22"
                  ry="10"
                  fill="rgba(255,255,255,0.28)"
                />
              </svg>
              <span className="relative z-10 flex flex-col items-center px-4 text-[#3a2808]">
                <span className="font-script text-4xl leading-none text-[#5a3a08] sm:text-5xl">
                  {ui.welcome.en}
                </span>
                <span className="mt-1 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-[#6a4a10]/90">
                  <span className="h-px w-5 bg-[#8f6a1c]/70" aria-hidden />
                  {ui.to.en}
                  <span className="h-px w-5 bg-[#8f6a1c]/70" aria-hidden />
                </span>
                <span className="font-brand mt-1 text-4xl font-bold tracking-wide text-[#0d3f68] sm:text-5xl">
                  GEMS
                </span>
                <span className="font-telugu mt-3 text-base text-[#4a3810] sm:text-lg">
                  GEMS కి స్వాగతం!
                </span>
              </span>
            </Link>
          </div>

          <div className="anim-hint relative z-10 mt-8 flex items-center gap-3 text-[#8f3a18]">
            <TapIcon />
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

function TapIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M20 3.5 L33.5 11.5 V27.5 L20 35.5 L6.5 27.5 V11.5 Z"
        stroke="#8f6a1c"
        strokeWidth="1.8"
        fill="#ffe9a8"
      />
      <circle cx="20" cy="20" r="4.5" fill="#c4922a" />
      <path
        d="M26 22c4 3 7 2 9-1"
        stroke="#8f3a18"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
