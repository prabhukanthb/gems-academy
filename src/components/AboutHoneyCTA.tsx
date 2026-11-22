import Link from "next/link";
import { roundedHexAt } from "@/lib/hexPaths";
import { ui } from "@/lib/content";

/** Honeycomb with honey pouring into a droplet — About Us entry. */
export function AboutHoneyCTA() {
  return (
    <Link
      href="/about"
      aria-label={`${ui.aboutUs.en} · ${ui.aboutUs.te}`}
      className="about-honey group relative mx-auto block w-[min(100%,17.5rem)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020]"
    >
      <svg
        viewBox="0 0 200 300"
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
          <linearGradient id="ah-honey" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe978" />
            <stop offset="30%" stopColor="#f5bc28" />
            <stop offset="65%" stopColor="#e09812" />
            <stop offset="100%" stopColor="#9a5808" />
          </linearGradient>
          <linearGradient id="ah-stream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff0a0" />
            <stop offset="25%" stopColor="#ffd84a" />
            <stop offset="70%" stopColor="#e8a018" />
            <stop offset="100%" stopColor="#c07810" />
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

        {/* Viscous honey pour from open lower cell */}
        <g filter="url(#ah-soft)">
          {/* Thick centre stream */}
          <path
            className="honey-stream"
            d="M96 120
               C102 128 106 138 108 150
               C110 164 110 176 108 188
               C106 198 102 206 98 210
               C94 214 92 216 92 216
               L84 212
               C86 206 90 196 92 184
               C94 170 94 156 90 142
               C88 132 90 124 96 120 Z"
            fill="url(#ah-stream)"
          />
          {/* Left ribbon of honey */}
          <path
            className="honey-drip honey-drip--a"
            d="M78 118
               C74 130 70 144 72 158
               C74 170 80 178 84 182
               L78 188
               C72 182 64 170 62 156
               C60 140 66 126 78 118 Z"
            fill="url(#ah-honey)"
            opacity="0.92"
          />
          {/* Right ribbon */}
          <path
            className="honey-drip honey-drip--b"
            d="M122 120
               C128 132 132 146 130 160
               C128 172 122 180 118 184
               L124 190
               C132 182 140 170 140 154
               C140 138 132 126 122 120 Z"
            fill="url(#ah-honey)"
            opacity="0.9"
          />
          {/* Mid droplet still falling */}
          <path
            className="honey-drop"
            d="M110 175
               C116 175 120 182 120 190
               C120 200 114 208 110 214
               C106 208 100 200 100 190
               C100 182 104 175 110 175 Z"
            fill="#ffd84a"
          />
          {/* Honey blob / pool — label sits here */}
          <path
            className="honey-pool"
            d="M36 222
               C36 200 62 186 100 186
               C138 186 164 200 164 222
               C164 252 138 276 100 276
               C62 276 36 252 36 222 Z"
            fill="url(#ah-blob)"
            stroke="#7a5010"
            strokeWidth="1.4"
          />
          {/* Highlight on pool */}
          <ellipse
            cx="82"
            cy="208"
            rx="36"
            ry="11"
            fill="rgba(255,255,255,0.38)"
          />
          <ellipse
            cx="118"
            cy="248"
            rx="22"
            ry="7"
            fill="rgba(255,255,255,0.18)"
          />
        </g>
      </svg>

      <span className="pointer-events-none absolute inset-x-[12%] bottom-[7.5%] z-10 flex flex-col items-center justify-center px-3 pb-2 pt-1 text-center">
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
