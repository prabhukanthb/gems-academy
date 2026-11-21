import Link from "next/link";
import { HEX_ROUNDED, HEX_VIEW, INNER_ROUNDED } from "@/lib/hexPaths";

const VIEW = HEX_VIEW;
const HEX = HEX_ROUNDED;
const INNER = INNER_ROUNDED;

/** Blueprint Welcome hex — blue face, gold rim, red Telugu ribbon. */
export function WelcomeHex() {
  return (
    <Link
      href="/hub"
      aria-label="Welcome to GEMS — GEMS కి స్వాగతం"
      className="group relative inline-flex h-[18.5rem] w-[16rem] flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020] sm:h-[20.5rem] sm:w-[17.75rem]"
    >
      <svg
        className="absolute inset-0 h-full w-full drop-shadow-[0_12px_22px_rgba(20,40,80,0.3)]"
        viewBox={VIEW}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="welcome-fill" x1="0.2" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#4a9fe8" />
            <stop offset="45%" stopColor="#1560b0" />
            <stop offset="100%" stopColor="#0a3a78" />
          </linearGradient>
          <linearGradient id="welcome-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff6a8" />
            <stop offset="35%" stopColor="#ffd24a" />
            <stop offset="70%" stopColor="#e0a010" />
            <stop offset="100%" stopColor="#b07808" />
          </linearGradient>
          <linearGradient id="welcome-ribbon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e84848" />
            <stop offset="100%" stopColor="#a01018" />
          </linearGradient>
          <radialGradient id="welcome-shine" cx="50%" cy="18%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <path
          d={HEX}
          fill="url(#welcome-gold)"
          stroke="#8a6010"
          strokeWidth="1.15"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d={INNER} fill="url(#welcome-fill)" strokeLinejoin="round" />
        <path d={INNER} fill="url(#welcome-shine)" />
        <ellipse cx="50" cy="14" rx="8" ry="3.4" fill="rgba(255,255,255,0.9)" />
        <ellipse cx="50" cy="102" rx="6" ry="2.6" fill="rgba(255,255,255,0.4)" />
        {/* Red ribbon across lower third */}
        <path
          d="M8 78 Q50 70 92 78 L88 92 Q50 84 12 92 Z"
          fill="url(#welcome-ribbon)"
          stroke="#f0b020"
          strokeWidth="1.1"
        />
      </svg>

      <span className="relative z-10 flex w-[78%] flex-col items-center pt-1">
        <span className="font-display text-[2rem] font-extrabold leading-none tracking-wide text-white sm:text-[2.35rem]">
          Welcome
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-[0.8rem] font-extrabold uppercase tracking-[0.22em] text-[#ffe84a]">
          <span className="h-px w-6 bg-[#ffe84a]" aria-hidden />
          TO
          <span className="h-px w-6 bg-[#ffe84a]" aria-hidden />
        </span>
        <span className="mt-1 font-display text-[2.6rem] font-extrabold leading-none tracking-wide text-[#ffe84a] drop-shadow-[0_2px_0_rgba(0,0,0,0.25)] sm:text-[3rem]">
          GEMS
        </span>
        <span className="font-telugu mt-5 text-[0.95rem] font-extrabold leading-snug text-white sm:mt-6 sm:text-[1.05rem]">
          GEMS కి స్వాగతం!
        </span>
      </span>
    </Link>
  );
}
