/** Decorative honeycomb with sharp mitered cell edges. */

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
      </defs>

      <g
        stroke="#8f6a1c"
        strokeWidth="1.35"
        strokeLinejoin="miter"
        strokeMiterlimit={8}
        strokeLinecap="butt"
        opacity={soft ? 0.35 : 0.55}
      >
        <path d={hex(70, 58, 38)} fill="url(#waxFill)" />
        <path d={hex(140, 58, 38)} fill="url(#skyCell)" />
        <path d={hex(210, 58, 38)} fill="url(#waxFill)" />
        <path d={hex(280, 58, 38)} fill="url(#sageCell)" />
        <path d={hex(350, 58, 38)} fill="url(#waxFill)" />
      </g>

      <g
        stroke="#7a5a14"
        strokeWidth="1.5"
        strokeLinejoin="miter"
        strokeMiterlimit={8}
        strokeLinecap="butt"
        opacity={soft ? 0.45 : 0.75}
      >
        <path d={hex(105, 118, 40)} fill="url(#skyCell)" />
        <path d={hex(175, 118, 40)} fill="url(#waxFill)" />
        <path d={hex(245, 118, 40)} fill="url(#sageCell)" />
        <path d={hex(315, 118, 40)} fill="url(#waxFill)" />
      </g>

      <g
        stroke="#6b4a10"
        strokeWidth="1.65"
        strokeLinejoin="miter"
        strokeMiterlimit={8}
        strokeLinecap="butt"
        opacity={soft ? 0.5 : 0.9}
      >
        <path d={hex(70, 180, 42)} fill="url(#waxFill)" />
        <path d={hex(140, 180, 42)} fill="url(#sageCell)" />
        <path d={hex(210, 180, 42)} fill="url(#skyCell)" />
        <path d={hex(280, 180, 42)} fill="url(#waxFill)" />
        <path d={hex(350, 180, 42)} fill="url(#skyCell)" />
      </g>

      <g
        stroke="#5a4010"
        strokeWidth="1.4"
        strokeLinejoin="miter"
        strokeMiterlimit={8}
        strokeLinecap="butt"
        opacity={0.4}
      >
        <path d={hex(105, 242, 38)} fill="url(#waxFill)" />
        <path d={hex(175, 242, 38)} fill="url(#skyCell)" />
        <path d={hex(245, 242, 38)} fill="url(#waxFill)" />
        <path d={hex(315, 242, 38)} fill="url(#sageCell)" />
      </g>

      <g
        stroke="#8f6a1c"
        strokeWidth="1.2"
        strokeLinejoin="miter"
        strokeMiterlimit={8}
        opacity={0.3}
      >
        <path d={hex(140, 302, 36)} fill="url(#waxFill)" />
        <path d={hex(210, 302, 36)} fill="url(#sageCell)" />
        <path d={hex(280, 302, 36)} fill="url(#skyCell)" />
      </g>
    </svg>
  );
}

/** Pointy-top hexagon path centered at (cx, cy) with outer radius r */
function hex(cx: number, cy: number, r: number) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  });
  return `M ${pts.join(" L ")} Z`;
}
