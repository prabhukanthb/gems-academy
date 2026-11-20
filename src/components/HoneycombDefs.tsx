/** Shared SVG paint servers for honeycomb cells — mount once in the layout. */
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
          <stop offset="0%" stopColor="#6eb0e0" />
          <stop offset="45%" stopColor="#2a6fa8" />
          <stop offset="100%" stopColor="#0d3f68" />
        </linearGradient>
        <linearGradient id="cell-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7dcc8e" />
          <stop offset="45%" stopColor="#2f8f4a" />
          <stop offset="100%" stopColor="#145c2c" />
        </linearGradient>
        <linearGradient id="cell-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e87868" />
          <stop offset="45%" stopColor="#b83232" />
          <stop offset="100%" stopColor="#6e1418" />
        </linearGradient>
        <linearGradient id="cell-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b050" />
          <stop offset="45%" stopColor="#d07820" />
          <stop offset="100%" stopColor="#8a4810" />
        </linearGradient>
        <linearGradient id="cell-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c090d8" />
          <stop offset="45%" stopColor="#6e3a98" />
          <stop offset="100%" stopColor="#3a1860" />
        </linearGradient>
        <linearGradient id="cell-maroon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d07088" />
          <stop offset="45%" stopColor="#8a2848" />
          <stop offset="100%" stopColor="#4a1028" />
        </linearGradient>
        <linearGradient id="cell-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="45%" stopColor="#e0a830" />
          <stop offset="100%" stopColor="#a07010" />
        </linearGradient>
      </defs>
    </svg>
  );
}
