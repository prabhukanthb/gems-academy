import Link from "next/link";
import { roundedHexAt } from "@/lib/hexPaths";
import { ui } from "@/lib/content";

/** Cute cartoon bee for the About honeycomb. */
function BeeGraphic({ x, y }: { x: number; y: number }) {
  return (
    <g className="about-bee" transform={`translate(${x} ${y})`}>
      {/* Dotted flight trail */}
      <path
        d="M-28 -8 C-18 -18 -6 -20 4 -10"
        fill="none"
        stroke="#5a4010"
        strokeWidth="1.2"
        strokeDasharray="2.2 2.8"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Wings */}
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
      {/* Body */}
      <ellipse cx="0" cy="2" rx="14" ry="11" fill="#1a1a1a" />
      <ellipse cx="0" cy="2" rx="12" ry="9" fill="#ffd24a" />
      {/* Stripes */}
      <path
        d="M-10 -2 Q0 -6 10 -2 L10 2 Q0 -1 -10 2 Z"
        fill="#1a1a1a"
      />
      <path
        d="M-10 5 Q0 2 10 5 L10 8.5 Q0 6 -10 8.5 Z"
        fill="#1a1a1a"
      />
      {/* Head */}
      <circle cx="-12" cy="-2" r="6.5" fill="#1a1a1a" />
      <circle cx="-12" cy="-2" r="5.2" fill="#ffd24a" />
      {/* Face */}
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
      {/* Antennae */}
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
      {/* Stinger */}
      <path d="M12 2 L18 2 L14 6 Z" fill="#1a1a1a" />
    </g>
  );
}

/** Honeycomb + bee + About Us honey blob (no drip streams). */
export function AboutHoneyCTA() {
  return (
    <Link
      href="/about"
      aria-label={`${ui.aboutUs.en} · ${ui.aboutUs.te}`}
      className="about-honey group relative mx-auto block w-[min(100%,17.5rem)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020]"
    >
      <svg
        viewBox="0 0 200 270"
        className="h-auto w-full drop-shadow-[0_14px_28px_rgba(120,70,10,0.3)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
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
          <radialGradient id="ah-blob" cx="42%" cy="28%" r="62%">
            <stop offset="0%" stopColor="#fff2a8" />
            <stop offset="45%" stopColor="#f0b020" />
            <stop offset="100%" stopColor="#a86808" />
          </radialGradient>
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

        {/* Honeycomb cluster */}
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

        {/* Bee in the former drip gap */}
        <BeeGraphic x={100} y={148} />

        {/* About Us honey blob */}
        <g filter="url(#ah-soft)">
          <path
            className="honey-pool"
            d="M36 200
               C36 178 62 164 100 164
               C138 164 164 178 164 200
               C164 230 138 254 100 254
               C62 254 36 230 36 200 Z"
            fill="url(#ah-blob)"
            stroke="#7a5010"
            strokeWidth="1.4"
          />
          <ellipse
            cx="82"
            cy="186"
            rx="36"
            ry="11"
            fill="rgba(255,255,255,0.38)"
          />
          <ellipse
            cx="118"
            cy="226"
            rx="22"
            ry="7"
            fill="rgba(255,255,255,0.18)"
          />
        </g>
      </svg>

      <span className="pointer-events-none absolute inset-x-[12%] bottom-[8%] z-10 flex flex-col items-center justify-center px-3 pb-2 pt-1 text-center">
        <span className="font-display text-[1.2rem] font-extrabold leading-none tracking-wide text-white drop-shadow-[0_1px_2px_rgba(60,30,0,0.5)] sm:text-[1.35rem]">
          ABOUT US
        </span>
        <span className="font-telugu mt-1 text-[0.9rem] font-bold leading-tight text-[#fff8d8]">
          {ui.aboutUs.te}
        </span>
      </span>
    </Link>
  );
}
