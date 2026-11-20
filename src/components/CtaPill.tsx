import Link from "next/link";

/** Red + gold CTA pill with hand-click icon (blueprint landing). */
export function CtaPill({
  href,
  en,
  te,
}: {
  href: string;
  en: string;
  te: string;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex w-full max-w-md items-center gap-3 overflow-hidden rounded-full px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0b020] sm:gap-4 sm:px-5 sm:py-3.5"
      style={{
        background: "linear-gradient(180deg, #e84848 0%, #c01018 55%, #880810 100%)",
        border: "3.5px solid #f0b020",
        boxShadow:
          "0 0 0 1.5px #8a6010, 0 10px 22px rgba(120,20,20,0.35), inset 0 2px 0 rgba(255,255,255,0.28)",
      }}
    >
      <span className="anim-hint flex shrink-0 items-center justify-center">
        <HandClick />
      </span>
      <span className="hidden h-10 w-px bg-white/55 sm:block" aria-hidden />
      <span className="min-w-0 text-left">
        <span className="block font-display text-sm font-extrabold leading-tight text-white sm:text-base">
          {en}
        </span>
        <span className="font-telugu mt-0.5 block text-xs font-bold text-[#ffe84a] sm:text-sm">
          {te}
        </span>
      </span>
    </Link>
  );
}

function HandClick() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="22" cy="22" r="20" fill="rgba(255,255,255,0.12)" />
      {/* Click rays */}
      <path
        d="M14 10 L12 6M22 8 L22 3M30 10 L32 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Hand */}
      <path
        d="M18 28c0 0 1-10 2.5-12.5 0.8-1.3 2.2-1.2 2.5.2L24 22l.3-6.5c.1-1.4 1.4-1.8 2.2-.5L28 20l.5-4c.2-1.3 1.5-1.5 2.2-.2L32 22v6.5c0 3.5-2.2 6-5.5 6h-3C20.2 34.5 18 32 18 28z"
        fill="white"
        stroke="#c01018"
        strokeWidth="0.8"
      />
      <path
        d="M18 26c-2 .5-3.5 2-3.5 4.2 0 2.5 1.8 4.3 4 4.3"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
