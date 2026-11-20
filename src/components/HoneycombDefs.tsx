/** Shared SVG paint servers — stop colors come from theme CSS variables. */
export function HoneycombDefs() {
  return (
    <svg
      width="0"
      height="0"
      className="absolute"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="cell-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-blue-0)" />
          <stop offset="45%" stopColor="var(--cell-blue-1)" />
          <stop offset="100%" stopColor="var(--cell-blue-2)" />
        </linearGradient>
        <linearGradient id="cell-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-green-0)" />
          <stop offset="45%" stopColor="var(--cell-green-1)" />
          <stop offset="100%" stopColor="var(--cell-green-2)" />
        </linearGradient>
        <linearGradient id="cell-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-red-0)" />
          <stop offset="45%" stopColor="var(--cell-red-1)" />
          <stop offset="100%" stopColor="var(--cell-red-2)" />
        </linearGradient>
        <linearGradient id="cell-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-orange-0)" />
          <stop offset="45%" stopColor="var(--cell-orange-1)" />
          <stop offset="100%" stopColor="var(--cell-orange-2)" />
        </linearGradient>
        <linearGradient id="cell-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-purple-0)" />
          <stop offset="45%" stopColor="var(--cell-purple-1)" />
          <stop offset="100%" stopColor="var(--cell-purple-2)" />
        </linearGradient>
        <linearGradient id="cell-maroon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-maroon-0)" />
          <stop offset="45%" stopColor="var(--cell-maroon-1)" />
          <stop offset="100%" stopColor="var(--cell-maroon-2)" />
        </linearGradient>
        <linearGradient id="cell-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cell-gold-0)" />
          <stop offset="45%" stopColor="var(--cell-gold-1)" />
          <stop offset="100%" stopColor="var(--cell-gold-2)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
