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
  { fill: string; edge: string; shine: string }
> = {
  blue: {
    fill: "linear-gradient(160deg, #4a90d9 0%, #1a4f8a 45%, #0d355f 100%)",
    edge: "#0a2a4a",
    shine: "rgba(255,255,255,0.35)",
  },
  green: {
    fill: "linear-gradient(160deg, #4caf6e 0%, #1e7a3a 45%, #0f5a28 100%)",
    edge: "#0a4020",
    shine: "rgba(255,255,255,0.3)",
  },
  red: {
    fill: "linear-gradient(160deg, #e85a5a 0%, #b01e2e 45%, #7a1020 100%)",
    edge: "#5a0c18",
    shine: "rgba(255,255,255,0.3)",
  },
  orange: {
    fill: "linear-gradient(160deg, #f0a040 0%, #d06820 45%, #a84810 100%)",
    edge: "#7a3010",
    shine: "rgba(255,255,255,0.35)",
  },
  purple: {
    fill: "linear-gradient(160deg, #b06ad0 0%, #6e2a9a 45%, #4a1a6e 100%)",
    edge: "#301048",
    shine: "rgba(255,255,255,0.3)",
  },
  maroon: {
    fill: "linear-gradient(160deg, #c04060 0%, #7a1838 45%, #501028 100%)",
    edge: "#380818",
    shine: "rgba(255,255,255,0.28)",
  },
  gold: {
    fill: "linear-gradient(160deg, #e8c040 0%, #b88810 45%, #806008 100%)",
    edge: "#5a4008",
    shine: "rgba(255,255,255,0.4)",
  },
};

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "w-[7.5rem] h-[6.6rem] text-[0.7rem] leading-tight px-3",
  md: "w-[10.5rem] h-[9.2rem] text-sm leading-snug px-4",
  lg: "w-[14rem] h-[12.2rem] text-base leading-snug px-5",
  xl: "w-[16.5rem] h-[14.5rem] text-lg leading-snug px-6",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

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
      className={`hex-btn group relative inline-flex items-center justify-center text-center text-white font-display font-semibold tracking-wide select-none transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a4f8a] ${sizes[size]} ${className}`}
      style={{
        background: v.fill,
        filter: `drop-shadow(0 8px 0 ${v.edge}) drop-shadow(0 14px 18px rgba(10,30,50,0.28))`,
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `linear-gradient(180deg, ${v.shine} 0%, transparent 42%)`,
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
        aria-hidden
      />
      <span className="relative z-10 flex flex-col items-center justify-center gap-0.5 px-1">
        {children}
      </span>
    </Link>
  );
}

export function HexBadge({
  children,
  variant = "blue",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const v = variants[variant];
  return (
    <span
      className={`hex-btn inline-flex items-center justify-center text-center text-white font-display font-bold text-xs tracking-wide w-[6.5rem] h-[5.7rem] px-2 ${className}`}
      style={{
        background: v.fill,
        filter: `drop-shadow(0 4px 0 ${v.edge})`,
      }}
    >
      {children}
    </span>
  );
}
