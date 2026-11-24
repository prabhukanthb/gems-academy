import Link from "next/link";
import { HEX_ROUNDED, HEX_VIEW, INNER_ROUNDED, roundedHexAt } from "@/lib/hexPaths";
import { ui } from "@/lib/content";

/** Cute cartoon bee for the About honeycomb. */
function BeeGraphic({ x, y }: { x: number; y: number }) {
  return (
    <g className="about-bee" transform={`translate(${x} ${y})`}>
      <path
        d="M-28 -8 C-18 -18 -6 -20 4 -10"
        fill="none"
        stroke="#5a4010"
        strokeWidth="1.2"
        strokeDasharray="2.2 2.8"
        strokeLinecap="round"
        opacity="0.55"
      />
      <ellipse
        cx="-6"
        cy="-10"
        rx="9"
        ry="6"
        fill="rgba(255,255,255,0.85)"
        stroke="#c8d8e8"
        strokeWidth="0.8"
        transform="rotate(-18 -6 -10)"
      />
      <ellipse
        cx="8"
        cy="-10"
        rx="9"
        ry="6"
        fill="rgba(255,255,255,0.85)"
        stroke="#c8d8e8"
        strokeWidth="0.8"
        transform="rotate(18 8 -10)"
      />
      <ellipse cx="0" cy="2" rx="14" ry="11" fill="#1a1a1a" />
      <ellipse cx="0" cy="2" rx="12" ry="9" fill="#ffd24a" />
      <path d="M-10 -2 Q0 -6 10 -2 L10 2 Q0 -1 -10 2 Z" fill="#1a1a1a" />
      <path d="M-10 5 Q0 2 10 5 L10 8.5 Q0 6 -10 8.5 Z" fill="#1a1a1a" />
      <circle cx="-12" cy="-2" r="6.5" fill="#1a1a1a" />
      <circle cx="-12" cy="-2" r="5.2" fill="#ffd24a" />
      <circle cx="-14" cy="-3.5" r="1.1" fill="#1a1a1a" />
      <circle cx="-10" cy="-3.5" r="1.1" fill="#1a1a1a" />
      <path
        d="M-14.5 0 Q-12 2 -9.5 0"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="-15.5" cy="0.5" r="1.6" fill="#f07090" opacity="0.7" />
      <circle cx="-8.5" cy="0.5" r="1.6" fill="#f07090" opacity="0.7" />
      <path
        d="M-14 -7 Q-16 -14 -13 -16"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M-10 -7 Q-8 -14 -11 -16"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="-13" cy="-16" r="1.4" fill="#1a1a1a" />
      <circle cx="-11" cy="-16" r="1.4" fill="#1a1a1a" />
      <path d="M12 2 L18 2 L14 6 Z" fill="#1a1a1a" />
    </g>
  );
}

/** Honeycomb cluster + bee + About Us written inside a honeycomb. */
export function AboutHoneyCTA() {
  return (
    <Link
      href="/about"
      aria-label={`${ui.aboutUs.en} · ${ui.aboutUs.te}`}
      className="about-honey group relative mx-auto flex w-[min(100%,16.5rem)] flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020]"
    >
      {/* Small comb cluster + bee above the title hex */}
      <svg
        viewBox="0 0 200 150"
        className="relative z-10 -mb-3 h-auto w-[88%] drop-shadow-[0_8px_16px_rgba(120,70,10,0.22)] transition-transform duration-300 group-hover:-translate-y-1"
        aria-hidden
      >
        <defs>
          <linearGradient id="ah-wax" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff0b0" />
            <stop offset="40%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#c88810" />
          </linearGradient>
          <linearGradient id="ah-cell" x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#fff8d0" />
            <stop offset="55%" stopColor="#f0b020" />
            <stop offset="100%" stopColor="#b07008" />
          </linearGradient>
          <filter id="ah-soft" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="b" />
            <feOffset dy="1" result="o" />
            <feComponentTransfer in="o" result="s">
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="s" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          stroke="#7a5010"
          strokeWidth="1.35"
          strokeLinejoin="round"
          filter="url(#ah-soft)"
        >
          <path d={roundedHexAt(64, 38, 26)} fill="url(#ah-cell)" />
          <path d={roundedHexAt(108, 38, 26)} fill="url(#ah-wax)" />
          <path d={roundedHexAt(152, 38, 24)} fill="url(#ah-cell)" opacity="0.95" />
          <path d={roundedHexAt(42, 72, 24)} fill="url(#ah-wax)" opacity="0.9" />
          <path d={roundedHexAt(86, 72, 26)} fill="url(#ah-cell)" />
          <path d={roundedHexAt(130, 72, 26)} fill="url(#ah-wax)" />
          <path d={roundedHexAt(64, 106, 24)} fill="url(#ah-wax)" />
          <path d={roundedHexAt(108, 106, 26)} fill="url(#ah-cell)" />
        </g>
        <ellipse cx="86" cy="58" rx="9" ry="3.5" fill="rgba(255,255,255,0.5)" />
        <ellipse cx="108" cy="28" rx="7" ry="2.8" fill="rgba(255,255,255,0.45)" />
        <BeeGraphic x={168} y={118} />
      </svg>

      {/* About Us inside a honeycomb hex — no oval */}
      <div className="relative z-20 flex h-[14.5rem] w-[12.75rem] flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03] sm:h-[15.5rem] sm:w-[13.5rem]">
        <svg
          className="absolute inset-0 h-full w-full drop-shadow-[0_14px_28px_rgba(120,70,10,0.32)]"
          viewBox={HEX_VIEW}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="ah-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff6a8" />
              <stop offset="35%" stopColor="#ffd24a" />
              <stop offset="70%" stopColor="#e0a010" />
              <stop offset="100%" stopColor="#b07808" />
            </linearGradient>
            <linearGradient id="ah-face" x1="0.2" y1="0" x2="0.85" y2="1">
              <stop offset="0%" stopColor="#fff2a8" />
              <stop offset="45%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#a86808" />
            </linearGradient>
            <radialGradient id="ah-shine" cx="50%" cy="18%" r="55%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <path
            d={HEX_ROUNDED}
            fill="url(#ah-gold)"
            stroke="#7a5010"
            strokeWidth="1.15"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d={INNER_ROUNDED} fill="url(#ah-face)" strokeLinejoin="round" />
          <path d={INNER_ROUNDED} fill="url(#ah-shine)" />
          <ellipse cx="50" cy="14" rx="8" ry="3.4" fill="rgba(255,255,255,0.85)" />
          <ellipse cx="50" cy="102" rx="6" ry="2.6" fill="rgba(255,255,255,0.28)" />
        </svg>

        <span className="relative z-10 flex w-[72%] flex-col items-center text-center">
          <span className="font-display text-[1.55rem] font-extrabold leading-none tracking-wide text-white drop-shadow-[0_1px_2px_rgba(60,30,0,0.45)] sm:text-[1.7rem]">
            {ui.aboutUs.en}
          </span>
          <span className="font-telugu mt-2 text-[1.05rem] font-bold leading-snug text-[#fff8d8] sm:text-[1.15rem]">
            {ui.aboutUs.te}
          </span>
        </span>
      </div>
    </Link>
  );
}
