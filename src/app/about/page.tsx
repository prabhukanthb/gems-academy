import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { AboutTrackRecord } from "@/components/AboutTrackRecord";
import { ui } from "@/lib/content";
import { roundedHexAt } from "@/lib/hexPaths";

export const metadata = { title: "About Us · Track Record" };

export default function AboutPage() {
  return (
    <SiteShell wide>
      {/* Honeycomb title mark */}
      <div className="anim-enter relative mx-auto mb-2 w-full max-w-sm">
        <svg
          viewBox="0 0 280 150"
          className="mx-auto h-auto w-full max-w-xs drop-shadow-[0_8px_16px_rgba(120,70,10,0.2)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="ap-wax" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff0b0" />
              <stop offset="55%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#c47808" />
            </linearGradient>
            <radialGradient id="ap-blob" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#fff2a8" />
              <stop offset="55%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#a86808" />
            </radialGradient>
          </defs>
          <g stroke="#7a5010" strokeWidth="1.3" strokeLinejoin="round">
            <path d={roundedHexAt(90, 40, 26)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(136, 40, 26)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(182, 40, 24)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(113, 74, 26)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(159, 74, 26)} fill="url(#ap-wax)" />
          </g>
          {/* Bee between comb and title */}
          <g transform="translate(136 108)">
            <ellipse
              cx="-5"
              cy="-7"
              rx="6"
              ry="4"
              fill="rgba(255,255,255,0.85)"
              transform="rotate(-15)"
            />
            <ellipse
              cx="6"
              cy="-7"
              rx="6"
              ry="4"
              fill="rgba(255,255,255,0.85)"
              transform="rotate(15)"
            />
            <ellipse cx="0" cy="1" rx="10" ry="7.5" fill="#ffd24a" stroke="#1a1a1a" strokeWidth="0.8" />
            <path d="M-7 -1 H7 M-7 3 H7" stroke="#1a1a1a" strokeWidth="1.6" />
            <circle cx="-8" cy="-2" r="4" fill="#ffd24a" stroke="#1a1a1a" strokeWidth="0.7" />
          </g>
          <ellipse
            cx="140"
            cy="138"
            rx="88"
            ry="14"
            fill="url(#ap-blob)"
            stroke="#7a5010"
            strokeWidth="1"
          />
        </svg>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center pb-0.5 text-center">
          <h1 className="font-display text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(60,30,0,0.4)] sm:text-3xl">
            {ui.aboutUs.en}
          </h1>
          <p className="font-telugu text-sm font-bold text-[#fff8d8]">
            {ui.aboutUs.te}
          </p>
        </div>
      </div>

      <AboutTrackRecord />

      <NavFooter backHref="/" />
    </SiteShell>
  );
}
