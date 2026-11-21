import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  HEX_ROUNDED,
  HEX_VIEW,
  INNER_ROUNDED,
  roundedPolygon,
} from "@/lib/hexPaths";

export type GlossVariant =
  | "blue"
  | "green"
  | "red"
  | "orange"
  | "purple"
  | "maroon"
  | "pink"
  | "gold";

const fills: Record<GlossVariant, { a: string; b: string; c: string }> = {
  blue: { a: "#4a9fe8", b: "#1560b0", c: "#0a3a78" },
  green: { a: "#4ecf6a", b: "#1a9a38", c: "#0a6420" },
  red: { a: "#e84848", b: "#c01018", c: "#780808" },
  orange: { a: "#ff9a3c", b: "#e06810", c: "#a04008" },
  purple: { a: "#b070e0", b: "#7030b0", c: "#401868" },
  maroon: { a: "#e05070", b: "#a01840", c: "#601028" },
  pink: { a: "#f070a0", b: "#d03068", c: "#901040" },
  gold: { a: "#ffe060", b: "#f0b020", c: "#b07808" },
};

const VIEW = HEX_VIEW;
const HEX = HEX_ROUNDED;
const INNER = INNER_ROUNDED;

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "w-[8.5rem] h-[9.8rem]",
  md: "w-[12.75rem] h-[14.72rem]",
  lg: "w-[14rem] h-[16.16rem]",
  xl: "w-[16.5rem] h-[19.05rem]",
};

/** Content column must stay inside the flat sides of the hex (not the points). */
const contentWidth: Record<Size, string> = {
  sm: "w-[54%] max-w-[4.4rem]",
  md: "w-[56%] max-w-[6.6rem]",
  lg: "w-[60%] max-w-[8rem]",
  xl: "w-[62%] max-w-[9.6rem]",
};

const iconBox: Record<Size, string> = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

const enType: Record<Size, string> = {
  sm: "text-[0.55rem] leading-[1.05]",
  md: "text-[0.7rem] leading-[1.08]",
  lg: "text-[0.95rem] leading-tight sm:text-[1.05rem]",
  xl: "text-[1.05rem] leading-tight sm:text-[1.15rem]",
};

const teType: Record<Size, string> = {
  sm: "text-[0.46rem] leading-[1.15]",
  md: "text-[0.58rem] leading-[1.2]",
  lg: "text-[0.72rem] leading-snug sm:text-[0.78rem]",
  xl: "text-[0.78rem] leading-snug sm:text-[0.85rem]",
};

type Props = {
  href: string;
  variant?: GlossVariant;
  size?: Size;
  icon?: ReactNode;
  titleEn: string;
  titleAccent?: string;
  titleTe: string;
  /** Optional short EN blurb under the titles (e.g. level description). */
  detailEn?: string;
  detailTe?: string;
  className?: string;
  ariaLabel?: string;
  highlightAccent?: boolean;
};

/** Glossy honeycomb cell — hover flips to dark + gold (menu-style). */
export function GlossHex({
  href,
  variant = "blue",
  size = "md",
  icon,
  titleEn,
  titleAccent,
  titleTe,
  detailEn,
  detailTe,
  className = "",
  ariaLabel,
  highlightAccent = true,
}: Props) {
  const f = fills[variant];
  const uid = `gh-${variant}-${titleEn.replace(/\W+/g, "").slice(0, 12)}`;

  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? `${titleEn} ${titleTe}`}
      className={`gloss-hex group relative inline-flex flex-col items-center justify-center text-center select-none transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.04] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020] ${sizes[size]} ${className}`}
      style={
        {
          "--hex-base-a": f.a,
          "--hex-base-b": f.b,
          "--hex-base-c": f.c,
        } as CSSProperties
      }
    >
      <svg
        className="absolute inset-0 h-full w-full drop-shadow-[0_10px_18px_rgba(20,40,80,0.28)] transition-[filter] duration-300 group-hover:drop-shadow-[0_12px_22px_rgba(0,0,0,0.45)]"
        viewBox={VIEW}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${uid}-fill`} x1="0.2" y1="0" x2="0.85" y2="1">
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
          <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff6a8" />
            <stop offset="35%" stopColor="#ffd24a" />
            <stop offset="70%" stopColor="#e0a010" />
            <stop offset="100%" stopColor="#b07808" />
          </linearGradient>
          <radialGradient id={`${uid}-shine`} cx="50%" cy="18%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <path
          d={HEX}
          fill={`url(#${uid}-gold)`}
          stroke="#8a6010"
          strokeWidth="1.1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          className="hex-face"
          d={INNER}
          fill={`url(#${uid}-fill)`}
          stroke="rgba(255,236,160,0.55)"
          strokeWidth="0.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d={INNER} fill={`url(#${uid}-shine)`} className="hex-shine" />
        <ellipse
          className="hex-flare"
          cx="50"
          cy="14"
          rx="7"
          ry="3.2"
          fill="rgba(255,255,255,0.85)"
        />
        <ellipse
          className="hex-flare"
          cx="50"
          cy="102"
          rx="5.5"
          ry="2.4"
          fill="rgba(255,255,255,0.45)"
        />
      </svg>

      <span
        className={`relative z-10 flex flex-col items-center justify-center gap-0.5 overflow-hidden px-0.5 ${contentWidth[size]}`}
      >
        {icon ? (
          <span
            className={`hex-icon mb-0.5 flex shrink-0 items-center justify-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-[filter] duration-300 ${iconBox[size]}`}
          >
            {icon}
          </span>
        ) : null}
        <span
          className={`hex-title font-display w-full whitespace-pre-line font-extrabold tracking-wide text-balance text-white hyphens-none transition-colors duration-300 ${enType[size]}`}
        >
          {titleAccent && highlightAccent ? (
            <>
              {titleEn}{" "}
              <span className="hex-accent text-[#ffe84a] transition-colors duration-300">
                {titleAccent}
              </span>
            </>
          ) : (
            titleEn
          )}
        </span>
        <span
          className={`hex-te font-telugu w-full whitespace-pre-line font-bold text-balance break-words text-[#fff6b0] transition-colors duration-300 ${teType[size]}`}
        >
          {titleTe}
        </span>
        {detailEn ? (
          <span
            className={`hex-detail mt-0.5 w-full text-balance break-words text-[0.42rem] font-semibold leading-[1.15] text-white/90 transition-colors duration-300 sm:text-[0.48rem]`}
          >
            {detailEn}
          </span>
        ) : null}
        {detailTe ? (
          <span
            className={`hex-detail font-telugu w-full text-balance break-words text-[0.38rem] font-medium leading-[1.15] text-white/80 transition-colors duration-300 sm:text-[0.42rem]`}
          >
            {detailTe}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

/** Elongated honeycomb bar — same hover flip as GlossHex. */
export function WideHexBar({
  href,
  variant = "blue",
  icon,
  line1,
  line1Accent,
  line2Te,
  ariaLabel,
}: {
  href: string;
  variant?: GlossVariant;
  icon?: ReactNode;
  line1: string;
  line1Accent?: string;
  line2Te: string;
  ariaLabel?: string;
}) {
  const f = fills[variant];
  const uid = `wh-${variant}-${line1.replace(/\W+/g, "").slice(0, 10)}`;
  const W = 320;
  const H = 92;
  const tip = 28;
  const d = roundedPolygon(
    [
      [tip, 2],
      [W - tip, 2],
      [W - 2, H / 2],
      [W - tip, H - 2],
      [tip, H - 2],
      [2, H / 2],
    ],
    10,
  );
  const di = roundedPolygon(
    [
      [tip + 6, 10],
      [W - tip - 6, 10],
      [W - 10, H / 2],
      [W - tip - 6, H - 10],
      [tip + 6, H - 10],
      [10, H / 2],
    ],
    8,
  );

  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? `${line1} ${line2Te}`}
      className="gloss-hex group relative mx-auto flex h-[5.75rem] w-full max-w-[22rem] items-center transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020] sm:h-[6.25rem] sm:max-w-[26rem]"
      style={
        {
          "--hex-base-a": f.a,
          "--hex-base-b": f.b,
          "--hex-base-c": f.c,
        } as CSSProperties
      }
    >
      <svg
        className="absolute inset-0 h-full w-full drop-shadow-[0_8px_16px_rgba(20,40,80,0.28)]"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="1" y2="1">
            <stop
              className="hex-stop-a"
              offset="0%"
              style={{ stopColor: "var(--hex-a)" }}
            />
            <stop
              className="hex-stop-b"
              offset="50%"
              style={{ stopColor: "var(--hex-b)" }}
            />
            <stop
              className="hex-stop-c"
              offset="100%"
              style={{ stopColor: "var(--hex-c)" }}
            />
          </linearGradient>
          <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff6a8" />
            <stop offset="40%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#b07808" />
          </linearGradient>
        </defs>
        <path
          d={d}
          fill={`url(#${uid}-gold)`}
          stroke="#8a6010"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d={di} fill={`url(#${uid}-fill)`} strokeLinejoin="round" />
        <ellipse
          className="hex-flare"
          cx={W / 2}
          cy="12"
          rx="28"
          ry="5"
          fill="rgba(255,255,255,0.35)"
        />
      </svg>
      <span className="relative z-10 flex w-full items-center gap-3 px-8 sm:gap-4 sm:px-10">
        {icon ? (
          <span className="hex-icon flex h-12 w-12 shrink-0 items-center justify-center drop-shadow sm:h-14 sm:w-14">
            {icon}
          </span>
        ) : null}
        <span className="min-w-0 text-left">
          <span className="hex-title block font-display text-base font-extrabold leading-tight tracking-wide text-white transition-colors duration-300 sm:text-lg">
            {line1Accent ? (
              <>
                {line1}{" "}
                <span className="hex-accent text-[#ffe84a] transition-colors duration-300">
                  {line1Accent}
                </span>
              </>
            ) : (
              line1
            )}
          </span>
          <span className="hex-te font-telugu mt-0.5 block text-sm font-bold text-white/95 transition-colors duration-300">
            {line2Te}
          </span>
        </span>
      </span>
    </Link>
  );
}

export function PathBanner({
  en,
  te,
}: {
  en: string;
  te: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="relative overflow-hidden rounded-full px-6 py-3 text-center shadow-[0_8px_20px_rgba(20,40,80,0.25)]"
        style={{
          background:
            "linear-gradient(180deg, #3a8fd4 0%, #1560b0 45%, #0a3a78 100%)",
          border: "3.5px solid #f0b020",
          boxShadow:
            "0 0 0 1.5px #8a6010, 0 8px 20px rgba(20,40,80,0.25), inset 0 2px 0 rgba(255,255,255,0.35)",
        }}
      >
        <p className="font-display text-xl font-extrabold tracking-wide text-white sm:text-2xl">
          {en}
        </p>
        <p className="font-telugu mt-0.5 text-sm font-bold text-[#ffe84a] sm:text-base">
          {te}
        </p>
      </div>
    </div>
  );
}
