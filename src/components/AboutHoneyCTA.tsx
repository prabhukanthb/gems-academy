import Link from "next/link";
import { roundedHexAt } from "@/lib/hexPaths";
import { ui } from "@/lib/content";

/** Cute cartoon bee for the About honeycomb. */
function BeeGraphic({ x, y }: { x: number; y: number }) {
  return (
    <g className="about-bee" transform={`translate(${x} ${y}) scale(0.92)`}>
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

type Cell = { cx: number; cy: number; r: number; fill: "nectar" | "amber" | "deep" };

/** Rich nectar honeycomb with About Us blended into the comb. */
export function AboutHoneyCTA() {
  const cells: Cell[] = [
    { cx: 78, cy: 52, r: 34, fill: "nectar" },
    { cx: 142, cy: 52, r: 34, fill: "amber" },
    { cx: 46, cy: 104, r: 32, fill: "amber" },
    { cx: 110, cy: 104, r: 36, fill: "nectar" },
    { cx: 174, cy: 104, r: 32, fill: "deep" },
    { cx: 78, cy: 156, r: 34, fill: "deep" },
    { cx: 142, cy: 156, r: 34, fill: "nectar" },
  ];

  return (
    <Link
      href="/about"
      aria-label={`${ui.aboutUs.en} · ${ui.aboutUs.te}`}
      className="about-honey group relative mx-auto block w-[min(100%,18rem)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020]"
    >
      <svg
        viewBox="0 0 220 220"
        className="h-auto w-full drop-shadow-[0_16px_32px_rgba(120,70,10,0.34)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
        aria-hidden
      >
        <defs>
          <linearGradient id="ah-nectar" x1="0.2" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#fff6c0" />
            <stop offset="28%" stopColor="#ffe060" />
            <stop offset="62%" stopColor="#f0a818" />
            <stop offset="100%" stopColor="#b86808" />
          </linearGradient>
          <linearGradient id="ah-amber" x1="0.15" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#fff0a0" />
            <stop offset="40%" stopColor="#ffc830" />
            <stop offset="100%" stopColor="#c87810" />
          </linearGradient>
          <linearGradient id="ah-deep" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#ffe878" />
            <stop offset="45%" stopColor="#e09818" />
            <stop offset="100%" stopColor="#9a5808" />
          </linearGradient>
          <radialGradient id="ah-glow" cx="50%" cy="42%" r="48%">
            <stop offset="0%" stopColor="rgba(255,248,200,0.72)" />
            <stop offset="55%" stopColor="rgba(240,176,32,0.28)" />
            <stop offset="100%" stopColor="rgba(160,90,10,0)" />
          </radialGradient>
          <filter id="ah-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" result="b" />
            <feOffset dy="1.5" result="o" />
            <feComponentTransfer in="o" result="s">
              <feFuncA type="linear" slope="0.28" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="s" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ah-text-glow" x="-30%" y="-40%" width="160%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.4" result="blur" />
            <feFlood floodColor="#fff4b0" floodOpacity="0.85" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="soft" />
            <feMerge>
              <feMergeNode in="soft" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft nectar bloom behind the comb */}
        <ellipse cx="110" cy="110" rx="92" ry="78" fill="url(#ah-glow)" />

        <g
          stroke="#6a4010"
          strokeWidth="1.45"
          strokeLinejoin="round"
          filter="url(#ah-soft)"
        >
          {cells.map((cell) => (
            <path
              key={`${cell.cx}-${cell.cy}`}
              d={roundedHexAt(cell.cx, cell.cy, cell.r)}
              fill={
                cell.fill === "nectar"
                  ? "url(#ah-nectar)"
                  : cell.fill === "amber"
                    ? "url(#ah-amber)"
                    : "url(#ah-deep)"
              }
            />
          ))}
        </g>

        {/* Specular nectar highlights */}
        <ellipse cx="78" cy="38" rx="11" ry="4.2" fill="rgba(255,255,255,0.62)" />
        <ellipse cx="142" cy="38" rx="10" ry="3.8" fill="rgba(255,255,255,0.55)" />
        <ellipse cx="110" cy="88" rx="14" ry="5" fill="rgba(255,255,255,0.48)" />
        <ellipse cx="46" cy="90" rx="8" ry="3.2" fill="rgba(255,255,255,0.4)" />
        <ellipse cx="174" cy="90" rx="8" ry="3.2" fill="rgba(255,255,255,0.38)" />
        <ellipse cx="78" cy="142" rx="10" ry="3.6" fill="rgba(255,255,255,0.32)" />
        <ellipse cx="142" cy="142" rx="10" ry="3.6" fill="rgba(255,255,255,0.3)" />

        {/* Inner honey sheen on center cell */}
        <path
          d={roundedHexAt(110, 104, 22)}
          fill="rgba(255,250,210,0.28)"
          stroke="none"
        />

        <BeeGraphic x={196} y={168} />
      </svg>

      {/* About Us blended into the nectar — centered over the comb */}
      <span className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <span
          className="font-display text-[1.65rem] font-extrabold leading-none tracking-[0.04em] text-[#5a2808] drop-shadow-[0_1px_0_rgba(255,248,200,0.9)] sm:text-[1.85rem]"
          style={{ textShadow: "0 0 18px rgba(255,244,176,0.95), 0 1px 0 rgba(255,250,220,0.9)" }}
        >
          {ui.aboutUs.en}
        </span>
        <span
          className="font-telugu mt-1.5 text-[1.05rem] font-bold leading-snug text-[#6a3010] sm:text-[1.15rem]"
          style={{ textShadow: "0 0 14px rgba(255,244,176,0.9), 0 1px 0 rgba(255,250,220,0.85)" }}
        >
          {ui.aboutUs.te}
        </span>
      </span>
    </Link>
  );
}
