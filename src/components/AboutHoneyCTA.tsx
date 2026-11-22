import Link from "next/link";
import { roundedHexAt } from "@/lib/hexPaths";
import { ui } from "@/lib/content";

/** Honeycomb cluster with honey pouring out — About Us entry. */
export function AboutHoneyCTA() {
  return (
    <Link
      href="/about"
      aria-label={`${ui.aboutUs.en} · ${ui.aboutUs.te}`}
      className="about-honey group relative mx-auto block w-[min(100%,18rem)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020]"
    >
      <svg
        viewBox="0 0 220 280"
        className="h-auto w-full drop-shadow-[0_12px_24px_rgba(120,70,10,0.28)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
        aria-hidden
      >
        <defs>
          <linearGradient id="ah-wax" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe9a0" />
            <stop offset="45%" stopColor="#f0b020" />
            <stop offset="100%" stopColor="#c47808" />
          </linearGradient>
          <linearGradient id="ah-cell" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#fff2c0" />
            <stop offset="50%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#e09810" />
          </linearGradient>
          <linearGradient id="ah-honey" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe56a" />
            <stop offset="35%" stopColor="#f0b020" />
            <stop offset="70%" stopColor="#d48810" />
            <stop offset="100%" stopColor="#a06008" />
          </linearGradient>
          <linearGradient id="ah-pour" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffec88" />
            <stop offset="40%" stopColor="#f0b020" />
            <stop offset="100%" stopColor="#b87810" />
          </linearGradient>
          <radialGradient id="ah-shine" cx="40%" cy="25%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="ah-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Honeycomb cells — top cluster */}
        <g stroke="#8a6010" strokeWidth="1.4" strokeLinejoin="round">
          <path d={roundedHexAt(70, 42, 28)} fill="url(#ah-cell)" />
          <path d={roundedHexAt(118, 42, 28)} fill="url(#ah-wax)" />
          <path d={roundedHexAt(94, 78, 28)} fill="url(#ah-cell)" />
          <path d={roundedHexAt(46, 78, 26)} fill="url(#ah-wax)" opacity="0.92" />
          <path d={roundedHexAt(142, 78, 26)} fill="url(#ah-wax)" opacity="0.92" />
          <path d={roundedHexAt(70, 114, 26)} fill="url(#ah-cell)" />
          <path d={roundedHexAt(118, 114, 26)} fill="url(#ah-wax)" />
        </g>

        {/* Cell gloss */}
        <ellipse cx="94" cy="62" rx="10" ry="4" fill="rgba(255,255,255,0.45)" />
        <ellipse cx="70" cy="30" rx="8" ry="3.2" fill="rgba(255,255,255,0.4)" />

        {/* Honey pouring from the open centre cell */}
        <g filter="url(#ah-glow)" className="honey-flow">
          {/* Main pour stream */}
          <path
            className="honey-stream"
            d="M86 118
               C88 128 90 138 92 150
               C94 162 96 172 98 184
               C100 196 102 206 104 214
               C106 220 108 224 110 228
               L102 232
               C98 226 94 216 90 204
               C86 190 82 176 80 162
               C78 148 80 134 86 118 Z"
            fill="url(#ah-pour)"
          />
          {/* Side drip */}
          <path
            className="honey-drip honey-drip--a"
            d="M72 120 C70 132 68 144 70 156 C72 166 76 172 78 176 L72 180 C68 174 64 164 64 152 C64 138 68 126 72 120 Z"
            fill="url(#ah-honey)"
          />
          <path
            className="honey-drip honey-drip--b"
            d="M128 122 C132 134 134 148 132 160 C130 170 126 176 124 180 L130 184 C136 176 140 164 138 150 C136 136 132 126 128 122 Z"
            fill="url(#ah-honey)"
          />
          {/* Honey pool / droplet that holds the label */}
          <path
            className="honey-pool"
            d="M48 210
               C48 190 70 178 110 178
               C150 178 172 190 172 210
               C172 236 148 258 110 258
               C72 258 48 236 48 210 Z"
            fill="url(#ah-honey)"
            stroke="#8a6010"
            strokeWidth="1.2"
          />
          <ellipse
            cx="95"
            cy="198"
            rx="38"
            ry="12"
            fill="url(#ah-shine)"
          />
          {/* Falling droplet */}
          <ellipse
            className="honey-drop"
            cx="110"
            cy="168"
            rx="6"
            ry="9"
            fill="#ffd24a"
          />
        </g>

        {/* Tiny empty outline cells for depth */}
        <g
          fill="none"
          stroke="#d4a840"
          strokeWidth="1"
          opacity="0.55"
          strokeLinejoin="round"
        >
          <path d={roundedHexAt(166, 48, 18)} />
          <path d={roundedHexAt(30, 48, 16)} />
        </g>
      </svg>

      <span className="pointer-events-none absolute inset-x-0 bottom-[11%] z-10 flex flex-col items-center px-6 text-center">
        <span className="font-display text-[1.15rem] font-extrabold tracking-wide text-white drop-shadow-[0_1px_1px_rgba(80,40,0,0.45)] sm:text-[1.25rem]">
          ABOUT US
        </span>
        <span className="font-telugu mt-0.5 text-[0.85rem] font-bold text-[#fff6d0]">
          {ui.aboutUs.te}
        </span>
      </span>
    </Link>
  );
}
