/** GEMS Academy crest — gold shield, lotus, Learn More ribbon. */
export function CrestBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 200"
      className={`h-auto w-full max-w-[13.5rem] drop-shadow-[0_10px_18px_rgba(20,40,80,0.22)] ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="crest-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6b0" />
          <stop offset="40%" stopColor="#ffd24a" />
          <stop offset="100%" stopColor="#c48810" />
        </linearGradient>
        <linearGradient id="crest-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffef5" />
          <stop offset="100%" stopColor="#ffe9a0" />
        </linearGradient>
        <linearGradient id="crest-ribbon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e84848" />
          <stop offset="100%" stopColor="#a01018" />
        </linearGradient>
      </defs>

      {/* Shield */}
      <path
        d="M110 8 L188 28 L188 105 Q188 155 110 188 Q32 155 32 105 L32 28 Z"
        fill="url(#crest-gold)"
        stroke="#8a6010"
        strokeWidth="2"
      />
      <path
        d="M110 18 L176 36 L176 102 Q176 145 110 174 Q44 145 44 102 L44 36 Z"
        fill="url(#crest-face)"
      />

      {/* Sunburst */}
      <g transform="translate(110,42)">
        <circle r="10" fill="#e84848" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-12"
            x2="0"
            y2="-18"
            stroke="#e84848"
            strokeWidth="2.2"
            strokeLinecap="round"
            transform={`rotate(${deg})`}
          />
        ))}
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
          <polygon
            key={`star-${i}`}
            points="0,-4 1.2,-1.2 4,-1.2 1.8,0.6 2.6,3.5 0,1.8 -2.6,3.5 -1.8,0.6 -4,-1.2 -1.2,-1.2"
            fill="#c01018"
            transform={`rotate(${deg}) translate(0,-22) scale(0.55)`}
          />
        ))}
      </g>

      <text
        x="110"
        y="78"
        textAnchor="middle"
        fill="#c01018"
        fontSize="15"
        fontWeight="800"
        fontFamily="Georgia, serif"
      >
        GEMS Academy
      </text>

      {/* Lotus */}
      <g transform="translate(110,102)">
        <ellipse cx="-10" cy="2" rx="8" ry="12" fill="#f8a0c0" transform="rotate(-28)" />
        <ellipse cx="10" cy="2" rx="8" ry="12" fill="#f8a0c0" transform="rotate(28)" />
        <ellipse cx="0" cy="-2" rx="7" ry="14" fill="#ffd0e0" />
        <ellipse cx="-6" cy="6" rx="5" ry="8" fill="#7ecf6a" transform="rotate(-20)" />
        <ellipse cx="6" cy="6" rx="5" ry="8" fill="#7ecf6a" transform="rotate(20)" />
        <circle cy="-4" r="2.5" fill="#ffe84a" />
      </g>

      <text
        x="110"
        y="138"
        textAnchor="middle"
        fill="#0d3f68"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.5"
        fontFamily="system-ui, sans-serif"
      >
        LEARNING IS SIMPLE.
      </text>

      {/* Figures */}
      <g transform="translate(110,148)">
        <circle cx="-18" cy="0" r="4" fill="#e87830" />
        <rect x="-21" y="4" width="6" height="8" rx="2" fill="#e87830" />
        <circle cx="0" cy="-1" r="4.2" fill="#2f8f4a" />
        <rect x="-3.2" y="3.5" width="6.4" height="8.5" rx="2" fill="#2f8f4a" />
        <circle cx="18" cy="0" r="4" fill="#e05090" />
        <rect x="15" y="4" width="6" height="8" rx="2" fill="#e05090" />
      </g>

      {/* Ribbon */}
      <path
        d="M28 168 L48 160 L172 160 L192 168 L180 182 L40 182 Z"
        fill="url(#crest-ribbon)"
        stroke="#f0b020"
        strokeWidth="1.6"
      />
      <text
        x="68"
        y="175"
        textAnchor="middle"
        fill="#ffe84a"
        fontSize="9"
        fontWeight="800"
        fontFamily="Georgia, serif"
      >
        LEARN
      </text>
      <text
        x="152"
        y="175"
        textAnchor="middle"
        fill="#ffe84a"
        fontSize="9"
        fontWeight="800"
        fontFamily="Georgia, serif"
      >
        MORE
      </text>
    </svg>
  );
}
