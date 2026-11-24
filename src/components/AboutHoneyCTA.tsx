"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
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

type Cell = { cx: number; cy: number; r: number };

/** Rich nectar honeycomb — About Us in the middle; hover flips black like other pages. */
export function AboutHoneyCTA() {
  const cells: Cell[] = [
    { cx: 78, cy: 52, r: 34 },
    { cx: 142, cy: 52, r: 34 },
    { cx: 46, cy: 104, r: 32 },
    { cx: 110, cy: 104, r: 36 },
    { cx: 174, cy: 104, r: 32 },
    { cx: 78, cy: 156, r: 34 },
    { cx: 142, cy: 156, r: 34 },
  ];

  return (
    <Link
      href="/about"
      aria-label={`${ui.aboutUs.en} · ${ui.aboutUs.te}`}
      className="about-honey gloss-hex group relative mx-auto block w-[min(100%,18rem)] select-none transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020]"
      style={
        {
          "--hex-base-a": "#fff6c0",
          "--hex-base-b": "#f0a818",
          "--hex-base-c": "#b86808",
        } as CSSProperties
      }
    >
      <svg
        viewBox="0 0 220 220"
        className="h-auto w-full drop-shadow-[0_16px_32px_rgba(120,70,10,0.34)] transition-[filter] duration-300 group-hover:drop-shadow-[0_14px_28px_rgba(0,0,0,0.5)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="ah-nectar" x1="0.2" y1="0" x2="0.85" y2="1">
            <stop
              className="hex-stop-a"
              offset="0%"
              style={{ stopColor: "var(--hex-a)" }}
            />
            <stop
              className="hex-stop-b"
              offset="48%"
              style={{ stopColor: "var(--hex-b)" }}
            />
            <stop
              className="hex-stop-c"
              offset="100%"
              style={{ stopColor: "var(--hex-c)" }}
            />
          </linearGradient>
          <linearGradient id="ah-rim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff6a8" />
            <stop offset="40%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#b07808" />
          </linearGradient>
          <radialGradient id="ah-glow" cx="50%" cy="42%" r="48%">
            <stop offset="0%" stopColor="rgba(255,248,200,0.55)" />
            <stop offset="55%" stopColor="rgba(240,176,32,0.2)" />
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
        </defs>

        <ellipse cx="110" cy="110" rx="92" ry="78" fill="url(#ah-glow)" className="about-nectar-glow" />

        <g stroke="#6a4010" strokeWidth="1.45" strokeLinejoin="round" filter="url(#ah-soft)">
          {cells.map((cell) => (
            <g key={`${cell.cx}-${cell.cy}`}>
              {/* Thin gold rim so hover black still feels like honeycomb */}
              <path d={roundedHexAt(cell.cx, cell.cy, cell.r + 1.4)} fill="url(#ah-rim)" />
              <path d={roundedHexAt(cell.cx, cell.cy, cell.r)} fill="url(#ah-nectar)" />
            </g>
          ))}
        </g>

        {/* Specular nectar highlights — soften on hover via CSS */}
        <ellipse className="hex-flare" cx="78" cy="38" rx="11" ry="4.2" fill="rgba(255,255,255,0.62)" />
        <ellipse className="hex-flare" cx="142" cy="38" rx="10" ry="3.8" fill="rgba(255,255,255,0.55)" />
        <ellipse className="hex-flare" cx="110" cy="88" rx="14" ry="5" fill="rgba(255,255,255,0.48)" />
        <ellipse className="hex-flare" cx="46" cy="90" rx="8" ry="3.2" fill="rgba(255,255,255,0.4)" />
        <ellipse className="hex-flare" cx="174" cy="90" rx="8" ry="3.2" fill="rgba(255,255,255,0.38)" />
        <ellipse className="hex-flare" cx="78" cy="142" rx="10" ry="3.6" fill="rgba(255,255,255,0.32)" />
        <ellipse className="hex-flare" cx="142" cy="142" rx="10" ry="3.6" fill="rgba(255,255,255,0.3)" />

        <BeeGraphic x={196} y={168} />
      </svg>

      {/* About Us centered in the middle of the comb */}
      <span className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <span className="hex-title font-display text-[1.65rem] font-extrabold leading-none tracking-[0.04em] text-[#5a2808] transition-colors duration-300 sm:text-[1.85rem]">
          {ui.aboutUs.en}
        </span>
        <span className="hex-te font-telugu mt-1.5 text-[1.05rem] font-bold leading-snug text-[#6a3010] transition-colors duration-300 sm:text-[1.15rem]">
          {ui.aboutUs.te}
        </span>
      </span>
    </Link>
  );
}
