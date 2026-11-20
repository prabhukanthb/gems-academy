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
          <p className="anim-enter font-brand text-5xl font-bold tracking-tight text-[var(--brand-deep)] sm:text-6xl">
            GEMS
          </p>
          <p className="anim-enter-delay-1 mt-1 font-display text-base font-semibold text-[var(--honey-deep)] sm:text-lg">
            Academy · {brand.domain}
          </p>
          <p className="anim-enter-delay-1 font-telugu mt-1 text-sm font-medium text-[var(--hint)]">
            {brand.tagline.te}
          </p>

          <div className="anim-enter-delay-2 mt-8 sm:mt-10">
            <Link
              href="/hub"
              aria-label="GEMS కి స్వాగతం — Welcome to GEMS"
              className="landing-comb honey-cell group relative flex h-[17.6rem] w-[15.25rem] flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] sm:h-[19.6rem] sm:w-[17rem]"
            >
              <svg
                className="absolute inset-0 h-full w-full drop-shadow-[0_12px_22px_rgba(90,60,10,0.2)]"
                viewBox="0 0 100 115.47"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <path
                  d="M50 0.75 L96.56 28.67 L96.56 86.8 L50 114.72 L3.44 86.8 L3.44 28.67 Z"
                  fill="url(#cell-gold)"
                  stroke="var(--wall-strong)"
                  strokeWidth="1.9"
                  strokeLinejoin="miter"
                  strokeMiterlimit={8}
                  strokeLinecap="butt"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M50 8 L89.5 32 L89.5 83.5 L50 107.5 L10.5 83.5 L10.5 32 Z"
                  fill="none"
                  stroke="rgba(255,236,180,0.45)"
                  strokeWidth="1"
                  strokeLinejoin="miter"
                  strokeMiterlimit={8}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Text sits in the honey “cell” mid-band so Welcome fits the comb */}
              <span className="relative z-10 flex w-[78%] flex-col items-center justify-center gap-1 pt-2">
                <span className="font-display text-[2rem] font-extrabold leading-[1.05] tracking-wide text-[var(--welcome)] [text-shadow:0_1px_0_rgba(255,233,168,0.65)] sm:text-[2.35rem]">
                  {ui.welcome.en}
                </span>
                <span className="flex items-center gap-2 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[var(--honey-deep)]">
                  <span className="h-px w-5 bg-[var(--honey-deep)]/70" aria-hidden />
                  {ui.to.en}
                  <span className="h-px w-5 bg-[var(--honey-deep)]/70" aria-hidden />
                </span>
                <span className="font-brand text-[2.45rem] font-extrabold leading-none tracking-wide text-[var(--brand-deep)] sm:text-[2.85rem]">
                  GEMS
                </span>
                <span className="font-telugu mt-2 text-[1rem] font-bold leading-snug text-[var(--wall)] sm:text-[1.05rem]">
                  GEMS కి స్వాగతం!
                </span>
              </span>
            </Link>
          </div>

          <Link
            href="/samples"
            className="anim-enter-delay-3 relative z-10 mt-6 text-sm font-bold text-[var(--hint)] underline-offset-2 hover:underline"
          >
            Colour samples · రంగు నమూనాలు
          </Link>

          <Link
            href="/hub"
            className="group relative z-10 mt-4 flex items-center gap-3 rounded-2xl px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--honey)]"
          >
            <span className="bee-buzz inline-flex shrink-0">
              <BumbleBee />
            </span>
            <div className="text-left">
              <p className="font-display text-base font-extrabold text-[var(--hint)] sm:text-lg">
                {ui.clickHint.en}
              </p>
              <p className="font-telugu text-sm font-bold text-[var(--wall)]">
                {ui.clickHint.te}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}

function BumbleBee() {
  return (
    <svg
      width="56"
      height="48"
      viewBox="0 0 56 48"
      fill="none"
      aria-hidden
      className="overflow-visible"
    >
      {/* Wings */}
      <ellipse
        className="bee-wing bee-wing-left"
        cx="18"
        cy="14"
        rx="11"
        ry="7"
        fill="#e8f4ff"
        stroke="#8f6a1c"
        strokeWidth="1.2"
        opacity="0.9"
      />
      <ellipse
        className="bee-wing bee-wing-right"
        cx="38"
        cy="14"
        rx="11"
        ry="7"
        fill="#e8f4ff"
        stroke="#8f6a1c"
        strokeWidth="1.2"
        opacity="0.9"
      />
      {/* Body */}
      <ellipse cx="28" cy="26" rx="14" ry="10" fill="#1a1a1a" />
      <path
        d="M18 22.5h20M18 26.5h20M18 30.5h20"
        stroke="#e0a830"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Head */}
      <circle cx="14" cy="24" r="6.2" fill="#2a2214" />
      <circle cx="12.2" cy="22.5" r="1.3" fill="#ffe9a8" />
      {/* Antennae */}
      <path
        d="M11 19c-2-3-1.5-5 0-6M16 18.5c1.5-3 3-4 5-4"
        stroke="#2a2214"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="11" cy="12.5" r="1.4" fill="#c4922a" />
      <circle cx="21.5" cy="14" r="1.4" fill="#c4922a" />
      {/* Stinger hint */}
      <path d="M41.5 26 L47 28 L41.5 30 Z" fill="#2a2214" />
    </svg>
  );
}
