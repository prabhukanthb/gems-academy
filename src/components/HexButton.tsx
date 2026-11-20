import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "blue"
  | "green"
  | "red"
  | "orange"
  | "purple"
  | "maroon"
  | "gold";

const variants: Record<
  Variant,
  { fill: string; wall: string; glow: string; text: string }
> = {
  blue: {
    fill: "url(#cell-blue)",
    wall: "#8f6a1c",
    glow: "rgba(90, 160, 210, 0.35)",
    text: "#f7fbff",
  },
  green: {
    fill: "url(#cell-green)",
    wall: "#8f6a1c",
    glow: "rgba(80, 160, 100, 0.35)",
    text: "#f7fff8",
  },
  red: {
    fill: "url(#cell-red)",
    wall: "#8f6a1c",
    glow: "rgba(200, 80, 70, 0.35)",
    text: "#fff8f7",
  },
  orange: {
    fill: "url(#cell-orange)",
    wall: "#8f6a1c",
    glow: "rgba(220, 140, 50, 0.4)",
    text: "#fffaf3",
  },
  purple: {
    fill: "url(#cell-purple)",
    wall: "#8f6a1c",
    glow: "rgba(140, 100, 180, 0.35)",
    text: "#faf7ff",
  },
  maroon: {
    fill: "url(#cell-maroon)",
    wall: "#8f6a1c",
    glow: "rgba(160, 60, 80, 0.35)",
    text: "#fff7f8",
  },
  gold: {
    fill: "url(#cell-gold)",
    wall: "#7a5a14",
    glow: "rgba(230, 180, 60, 0.45)",
    text: "#3a2808",
  },
};

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "w-[7.25rem] h-[8.1rem] text-[0.68rem] leading-tight px-2",
  md: "w-[10.25rem] h-[11.5rem] text-sm leading-snug px-3",
  lg: "w-[13.5rem] h-[15.1rem] text-base leading-snug px-4",
  xl: "w-[15.75rem] h-[17.6rem] text-lg leading-snug px-5",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

/** Pointy-top honeycomb cell — drawn wax walls, not plastic hex chrome. */
export function HexButton({
  href,
  children,
  variant = "blue",
  size = "md",
  className = "",
  ariaLabel,
}: Props) {
  const v = variants[variant];

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`honey-cell group relative inline-flex items-center justify-center text-center font-display font-semibold tracking-wide select-none transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4922a] ${sizes[size]} ${className}`}
      style={{ color: v.text }}
    >
      <svg
        className="absolute inset-0 h-full w-full drop-shadow-[0_10px_18px_rgba(90,60,10,0.18)]"
        viewBox="0 0 100 112"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={POINTY_HEX}
          fill={v.fill}
          stroke={v.wall}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d={INNER_HEX}
          fill="none"
          stroke="rgba(255,236,180,0.5)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <ellipse
          cx="50"
          cy="30"
          rx="20"
          ry="9"
          fill="rgba(255,255,255,0.2)"
        />
      </svg>
      <span
        className="pointer-events-none absolute inset-[18%] rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: v.glow }}
        aria-hidden
      />
      <span className="relative z-10 flex max-w-[85%] flex-col items-center justify-center gap-0.5 px-1">
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
  const v = variants[variant];
  return (
    <span
      className={`honey-cell relative inline-flex h-[5.9rem] w-[5.3rem] items-center justify-center text-center font-display text-[0.62rem] font-bold leading-tight tracking-wide ${className}`}
      style={{ color: v.text }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 112"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={POINTY_HEX}
          fill={v.fill}
          stroke={v.wall}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10 px-1.5">{children}</span>
    </span>
  );
}

const POINTY_HEX = "M50 4 L92 28 L92 84 L50 108 L8 84 L8 28 Z";
const INNER_HEX = "M50 14 L84 34 L84 78 L50 98 L16 78 L16 34 Z";
