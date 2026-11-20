/** Simple colorful SVG icons matching the blueprint tiles. */

export function IconBookCap({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="52" rx="18" ry="4" fill="rgba(0,0,0,0.2)" />
      <path d="M10 38 L32 30 L54 38 L32 46 Z" fill="#f5e6c0" stroke="#8a6010" strokeWidth="1.5" />
      <path d="M12 38 V46 L32 54 L52 46 V38" fill="#e8d4a0" stroke="#8a6010" strokeWidth="1.2" />
      <path d="M32 30 V46" stroke="#8a6010" strokeWidth="1.2" />
      <path d="M20 22 L32 16 L44 22 L44 26 L32 32 L20 26 Z" fill="#1a1a1a" />
      <rect x="30" y="32" width="4" height="6" fill="#1a1a1a" />
      <circle cx="32" cy="36" r="1.5" fill="#ffe84a" />
      <rect x="22" y="48" width="20" height="5" rx="1" fill="#c01018" />
    </svg>
  );
}

export function IconRupeeStack({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="54" rx="16" ry="3.5" fill="rgba(0,0,0,0.2)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${14 + i * 6},${28 - i * 5})`}>
          <rect width="26" height="16" rx="2" fill="#e8f0d8" stroke="#2a5a20" strokeWidth="1.2" />
          <text x="13" y="11" textAnchor="middle" fill="#1a5a18" fontSize="9" fontWeight="800">
            ₹
          </text>
        </g>
      ))}
    </svg>
  );
}

export function IconHome({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M32 12 L54 30 V52 H40 V40 H24 V52 H10 V30 Z"
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M28 36 H36 V44 H28 Z" fill="white" opacity="0.85" />
    </svg>
  );
}

export function IconClipboard({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="16" y="12" width="32" height="42" rx="3" fill="white" stroke="#5a4010" strokeWidth="1.5" />
      <rect x="24" y="8" width="16" height="8" rx="2" fill="#d4a017" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(22,${24 + i * 10})`}>
          <rect width="8" height="8" rx="1.5" fill="#2f8f4a" />
          <path d="M2 4 L3.5 5.5 L6.5 2.5" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="12" y="2" width="14" height="4" rx="1" fill="#c8d0d8" />
        </g>
      ))}
    </svg>
  );
}

export function IconCards({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="18" width="28" height="36" rx="3" fill="#f0b050" stroke="#8a6010" transform="rotate(-12 24 36)" />
      <rect x="22" y="14" width="28" height="36" rx="3" fill="#4a9fe8" stroke="#0d3f68" />
      <text x="36" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">
        A
      </text>
      <circle cx="36" cy="44" r="5" fill="#e84848" />
    </svg>
  );
}

export function IconLaptop({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="12" y="14" width="40" height="28" rx="2" fill="#d0d8e0" stroke="#3a4a5a" strokeWidth="1.5" />
      <rect x="16" y="18" width="32" height="20" fill="#1a3a5c" />
      <polygon points="28,24 40,28 28,32" fill="#e84848" />
      <path d="M8 44 H56 L52 50 H12 Z" fill="#a8b0b8" stroke="#3a4a5a" strokeWidth="1.2" />
    </svg>
  );
}

export function IconStars({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="34" rx="22" ry="18" fill="white" stroke="#3a6a98" strokeWidth="2" />
      <path d="M18 48 L12 58 L24 50 Z" fill="white" stroke="#3a6a98" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon
          key={i}
          points="0,-6 1.8,-1.8 6,-1.8 2.6,0.8 4,5 -0,2.2 -4,5 -2.6,0.8 -6,-1.8 -1.8,-1.8"
          fill="#f0b020"
          transform={`translate(${18 + i * 7},28) scale(0.7)`}
        />
      ))}
    </svg>
  );
}

export function IconFaq({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="24" cy="28" rx="16" ry="14" fill="#4a9fe8" stroke="#0d3f68" strokeWidth="1.5" />
      <text x="24" y="34" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">
        ?
      </text>
      <ellipse cx="42" cy="40" rx="14" ry="12" fill="#f0b020" stroke="#8a6010" strokeWidth="1.5" />
      <text x="42" y="45" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">
        !
      </text>
    </svg>
  );
}

export function IconClapper({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="24" width="44" height="28" rx="2" fill="#1a4f8a" stroke="#0d2840" strokeWidth="1.5" />
      <path d="M10 24 L18 12 H50 L42 24 Z" fill="#2a6fa8" stroke="#0d2840" strokeWidth="1.5" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={14 + i * 8} y="14" width="5" height="8" fill={i % 2 ? "#e84848" : "white"} transform="skewX(-18)" />
      ))}
      <circle cx="32" cy="38" r="8" fill="#e84848" />
      <polygon points="29,33 38,38 29,43" fill="white" />
    </svg>
  );
}

export function IconComment({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="28" cy="30" rx="18" ry="14" fill="#4a9fe8" stroke="#0d3f68" strokeWidth="1.5" />
      <path d="M20 40 L14 50 L28 42 Z" fill="#4a9fe8" />
      <path
        d="M38 36 L50 28 L52 48 L44 44 Z"
        fill="#f0b020"
        stroke="#8a6010"
        strokeWidth="1.3"
      />
      <line x1="42" y1="34" x2="48" y2="40" stroke="#8a6010" strokeWidth="1.5" />
    </svg>
  );
}

export function IconContact({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M18 22 C14 28 16 40 22 46 L28 40 C26 36 26 32 28 28 Z"
        fill="#4a9fe8"
        stroke="#0d3f68"
        strokeWidth="1.3"
      />
      <path
        d="M36 18 H52 V36 H36 Z"
        fill="#f0b020"
        stroke="#8a6010"
        strokeWidth="1.3"
      />
      <text x="44" y="31" textAnchor="middle" fill="#8a6010" fontSize="12" fontWeight="800">
        @
      </text>
    </svg>
  );
}

export function IconSchool({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="16" y="28" width="32" height="24" fill="#f5e6c0" stroke="#8a6010" strokeWidth="1.3" />
      <path d="M14 28 L32 16 L50 28 Z" fill="#c01018" stroke="#8a6010" strokeWidth="1.3" />
      <rect x="28" y="38" width="8" height="14" fill="#1a5f8a" />
      <rect x="20" y="34" width="6" height="6" fill="#4a9fe8" />
      <rect x="38" y="34" width="6" height="6" fill="#4a9fe8" />
      <text x="32" y="26" textAnchor="middle" fill="white" fontSize="6" fontWeight="800">
        GEMS
      </text>
      <ellipse cx="12" cy="48" rx="5" ry="8" fill="#2f8f4a" />
      <ellipse cx="52" cy="48" rx="5" ry="8" fill="#2f8f4a" />
    </svg>
  );
}

export function IconTutor({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="26" cy="22" r="7" fill="#f5c8a0" />
      <path d="M16 42 C16 32 36 32 36 42 Z" fill="#e05090" />
      <circle cx="44" cy="30" r="5" fill="#f5c8a0" />
      <path d="M38 46 C38 38 50 38 50 46 Z" fill="#4a9fe8" />
      <rect x="34" y="40" width="16" height="8" rx="1" fill="#d4a017" />
      <path d="M48 18 H58 V28 H48 Z" fill="#c8e8f8" stroke="#1a5f8a" strokeWidth="1" />
    </svg>
  );
}

export function IconCoins({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="34" r="14" fill="#f0b020" stroke="#8a6010" strokeWidth="2" />
      <circle cx="32" cy="34" r="10" fill="#ffe84a" stroke="#c48810" strokeWidth="1.2" />
      <text x="32" y="39" textAnchor="middle" fill="#8a6010" fontSize="14" fontWeight="800">
        ₹
      </text>
      <path
        d="M18 20 A18 18 0 0 1 46 20"
        fill="none"
        stroke="#4a9fe8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M46 48 A18 18 0 0 1 18 48"
        fill="none"
        stroke="#e84848"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconHandshake({ className = "h-full w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M8 28 L22 22 L30 30 L38 24 L56 30 L52 40 L36 36 L28 42 L18 36 Z"
        fill="#f5c8a0"
        stroke="#8a6010"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 26 H16 V38 H6 Z" fill="#1a4f8a" />
      <path d="M48 28 H58 V40 H48 Z" fill="#1a4f8a" />
    </svg>
  );
}
