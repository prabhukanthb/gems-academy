import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { HEX_ROUNDED, HEX_VIEW, INNER_ROUNDED } from "@/lib/hexPaths";

type Variant =
  | "blue"
  | "green"
  | "red"
  | "orange"
  | "purple"
  | "maroon"
  | "gold"
  | "pink";

const fills: Record<Variant, { a: string; b: string; c: string }> = {
  blue: { a: "#4a9fe8", b: "#1560b0", c: "#0a3a78" },
  green: { a: "#4ecf6a", b: "#1a9a38", c: "#0a6420" },
  red: { a: "#e84848", b: "#c01018", c: "#780808" },
  orange: { a: "#ff9a3c", b: "#e06810", c: "#a04008" },
  purple: { a: "#b070e0", b: "#7030b0", c: "#401868" },
  maroon: { a: "#e05070", b: "#a01840", c: "#601028" },
  gold: { a: "#ffe060", b: "#f0b020", c: "#b07808" },
  pink: { a: "#f070a0", b: "#d03068", c: "#901040" },
};

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "w-[8.5rem] h-[9.8rem] text-[0.68rem] leading-tight",
  md: "w-[10.25rem] h-[11.83rem] text-sm leading-snug",
  lg: "w-[13.5rem] h-[15.59rem] text-base leading-snug",
  xl: "w-[15.75rem] h-[18.18rem] text-lg leading-snug",
};

const contentWidth: Record<Size, string> = {
  sm: "w-[54%] max-w-[4.4rem]",
  md: "w-[56%] max-w-[6.6rem]",
  lg: "w-[60%] max-w-[8rem]",
  xl: "w-[62%] max-w-[9.6rem]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

const VIEW = HEX_VIEW;
const HEX = HEX_ROUNDED;
const INNER = INNER_ROUNDED;

/** Glossy gold-rim honeycomb cell with site-wide hover colour flip. */
export function HexButton({
  href,
  children,
  variant = "blue",
  size = "md",
  className = "",
  ariaLabel,
}: Props) {
  const f = fills[variant];
  const uid = `hb-${variant}-${href.replace(/\W+/g, "").slice(-10)}`;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`gloss-hex honey-cell group relative inline-flex items-center justify-center text-center font-display font-semibold tracking-wide select-none transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020] ${sizes[size]} ${className}`}
      style={
        {
          "--hex-base-a": f.a,
          "--hex-base-b": f.b,
          "--hex-base-c": f.c,
          color: "#ffffff",
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
        <path d={INNER} fill={`url(#${uid}-shine)`} />
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
        className={`hex-title relative z-10 flex flex-col items-center justify-center gap-0.5 overflow-hidden px-0.5 transition-colors duration-300 ${contentWidth[size]}`}
      >
        {children}
      </span>
    </Link>
  );
}

export function HexBadge({
  children,
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const f = fills[variant];
  const uid = `badge-${variant}`;
  return (
    <span
      className={`gloss-hex honey-cell relative inline-flex h-[6.12rem] w-[5.3rem] items-center justify-center text-center font-display text-[0.62rem] font-bold leading-tight tracking-wide ${className}`}
      style={
        {
          "--hex-base-a": f.a,
          "--hex-base-b": f.b,
          "--hex-base-c": f.c,
          color: "#ffffff",
        } as CSSProperties
      }
    >
      <svg
        className="absolute inset-0 h-full w-full"
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
            <stop offset="50%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#b07808" />
          </linearGradient>
        </defs>
        <path
          d={HEX}
          fill={`url(#${uid}-gold)`}
          stroke="#8a6010"
          strokeWidth="1.1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d={INNER} fill={`url(#${uid}-fill)`} strokeLinejoin="round" />
      </svg>
      <span className="hex-title relative z-10 px-1.5 transition-colors duration-300">
        {children}
      </span>
    </span>
  );
}
