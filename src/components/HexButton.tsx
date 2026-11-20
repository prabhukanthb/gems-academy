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
    wall: "var(--wall)",
    glow: "rgba(90, 160, 210, 0.35)",
    text: "#f7fbff",
  },
  green: {
    fill: "url(#cell-green)",
    wall: "var(--wall)",
    glow: "rgba(80, 160, 100, 0.35)",
    text: "#f7fff8",
  },
  red: {
    fill: "url(#cell-red)",
    wall: "var(--wall)",
    glow: "rgba(200, 80, 70, 0.35)",
    text: "#fff8f7",
  },
  orange: {
    fill: "url(#cell-orange)",
    wall: "var(--wall)",
    glow: "rgba(220, 140, 50, 0.4)",
    text: "#fffaf3",
  },
  purple: {
    fill: "url(#cell-purple)",
    wall: "var(--wall)",
    glow: "rgba(140, 100, 180, 0.35)",
    text: "#faf7ff",
  },
  maroon: {
    fill: "url(#cell-maroon)",
    wall: "var(--wall)",
    glow: "rgba(160, 60, 80, 0.35)",
    text: "#fff7f8",
  },
  gold: {
    fill: "url(#cell-gold)",
    wall: "var(--wall-strong)",
    glow: "rgba(230, 180, 60, 0.45)",
    text: "var(--foreground)",
  },
};

type Size = "sm" | "md" | "lg" | "xl";

/** Width × height keeps regular hex proportion (h ≈ w × 2/√3). */
const sizes: Record<Size, string> = {
  sm: "w-[7.25rem] h-[8.37rem] text-[0.68rem] leading-tight px-2",
  md: "w-[10.25rem] h-[11.83rem] text-sm leading-snug px-3",
  lg: "w-[13.5rem] h-[15.59rem] text-base leading-snug px-4",
  xl: "w-[15.75rem] h-[18.18rem] text-lg leading-snug px-5",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

/** Sharp-edged honeycomb cell — miter corners like real wax walls. */
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
        className="absolute inset-0 h-full w-full drop-shadow-[0_8px_14px_rgba(90,60,10,0.16)]"
        viewBox={VIEW}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <path
          d={POINTY_HEX}
          fill={v.fill}
          stroke={v.wall}
          strokeWidth="1.75"
          strokeLinejoin="miter"
          strokeMiterlimit={8}
          strokeLinecap="butt"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={INNER_HEX}
          fill="none"
          stroke="rgba(255,236,180,0.4)"
          strokeWidth="0.9"
          strokeLinejoin="miter"
          strokeMiterlimit={8}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span
        className="pointer-events-none absolute inset-[22%] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: v.glow,
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
        aria-hidden
      />
      <span className="relative z-10 flex max-w-[82%] flex-col items-center justify-center gap-0.5 px-1">
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
      className={`honey-cell relative inline-flex h-[6.12rem] w-[5.3rem] items-center justify-center text-center font-display text-[0.62rem] font-bold leading-tight tracking-wide ${className}`}
      style={{ color: v.text }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={VIEW}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <path
          d={POINTY_HEX}
          fill={v.fill}
          stroke={v.wall}
          strokeWidth="1.9"
          strokeLinejoin="miter"
          strokeMiterlimit={8}
          strokeLinecap="butt"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative z-10 px-1.5">{children}</span>
    </span>
  );
}

/** Regular pointy-top hex: width 100, height 100×2/√3 */
const VIEW = "0 0 100 115.47";
const POINTY_HEX =
  "M50 0.75 L96.56 28.67 L96.56 86.8 L50 114.72 L3.44 86.8 L3.44 28.67 Z";
const INNER_HEX =
  "M50 8 L89.5 32 L89.5 83.5 L50 107.5 L10.5 83.5 L10.5 32 Z";
