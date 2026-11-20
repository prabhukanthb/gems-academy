/** Decorative drawn honeycomb — atmosphere, not chrome buttons. */

type Props = {
  className?: string;
  density?: "hero" | "soft";
};

export function HoneycombArt({ className = "", density = "hero" }: Props) {
  const soft = density === "soft";

  return (
    <svg
      className={`honeycomb-art ${className}`}
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="waxFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity={soft ? 0.35 : 0.55} />
          <stop offset="55%" stopColor="#f0c14d" stopOpacity={soft ? 0.22 : 0.4} />
          <stop offset="100%" stopColor="#d4922a" stopOpacity={soft ? 0.12 : 0.28} />
        </linearGradient>
        <linearGradient id="skyCell" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#7eb8e8" stopOpacity={soft ? 0.25 : 0.45} />
          <stop offset="100%" stopColor="#1a5f8a" stopOpacity={soft ? 0.15 : 0.35} />
        </linearGradient>
        <linearGradient id="sageCell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9fd4a8" stopOpacity={soft ? 0.2 : 0.4} />
          <stop offset="100%" stopColor="#2d7a48" stopOpacity={soft ? 0.12 : 0.3} />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Back row — faint drawn cells */}
      <g
        stroke="#b8892a"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity={soft ? 0.35 : 0.55}
      >
        <path d={hex(70, 58, 38)} fill="url(#waxFill)" />
        <path d={hex(140, 58, 38)} fill="url(#skyCell)" />
        <path d={hex(210, 58, 38)} fill="url(#waxFill)" />
        <path d={hex(280, 58, 38)} fill="url(#sageCell)" />
        <path d={hex(350, 58, 38)} fill="url(#waxFill)" />
      </g>

      <g
        stroke="#a67c22"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity={soft ? 0.45 : 0.7}
        filter="url(#softGlow)"
      >
        <path d={hex(105, 118, 40)} fill="url(#skyCell)" />
        <path d={hex(175, 118, 40)} fill="url(#waxFill)" />
        <path d={hex(245, 118, 40)} fill="url(#sageCell)" />
        <path d={hex(315, 118, 40)} fill="url(#waxFill)" />
      </g>

      <g
        stroke="#8f6a1c"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity={soft ? 0.5 : 0.85}
      >
        <path d={hex(70, 180, 42)} fill="url(#waxFill)" />
        <path d={hex(140, 180, 42)} fill="url(#sageCell)" />
        <path d={hex(210, 180, 42)} fill="url(#skyCell)" />
        <path d={hex(280, 180, 42)} fill="url(#waxFill)" />
        <path d={hex(350, 180, 42)} fill="url(#skyCell)" />
      </g>

      <g stroke="#7a5a14" strokeWidth="1.5" strokeLinejoin="round" opacity={0.4}>
        <path d={hex(105, 242, 38)} fill="url(#waxFill)" />
        <path d={hex(175, 242, 38)} fill="url(#skyCell)" />
        <path d={hex(245, 242, 38)} fill="url(#waxFill)" />
        <path d={hex(315, 242, 38)} fill="url(#sageCell)" />
      </g>

      <g stroke="#b8892a" strokeWidth="1.2" opacity={0.3}>
        <path d={hex(140, 302, 36)} fill="url(#waxFill)" />
        <path d={hex(210, 302, 36)} fill="url(#sageCell)" />
        <path d={hex(280, 302, 36)} fill="url(#skyCell)" />
      </g>

      {/* Hand-drawn accent ticks on a few edges */}
      <g stroke="#c4922a" strokeWidth="1.1" strokeLinecap="round" opacity="0.55">
        <path d="M52 48c6-4 12-3 18 1" />
        <path d="M188 95c8 2 14 8 16 14" />
        <path d="M320 168c-5 6-4 14 1 20" />
        <path d="M98 228c7 3 11 9 10 16" />
      </g>
    </svg>
  );
}

/** Pointy-top hexagon path centered at (cx, cy) with outer radius r */
function hex(cx: number, cy: number, r: number) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  });
  return `M ${pts.join(" L ")} Z`;
}
