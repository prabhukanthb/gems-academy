import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { AboutTrackRecord } from "@/components/AboutTrackRecord";
import { ui } from "@/lib/content";
import { roundedHexAt } from "@/lib/hexPaths";

export const metadata = { title: "About Us · Track Record" };

export default function AboutPage() {
  return (
    <SiteShell wide>
      {/* Honeycomb above; title sits fully inside the honey oval below — no overlap */}
      <div className="anim-enter mx-auto mb-4 flex w-full max-w-md flex-col items-center">
        <svg
          viewBox="0 0 280 200"
          className="h-auto w-full max-w-sm drop-shadow-[0_8px_16px_rgba(120,70,10,0.2)]"
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

          {/* Larger honeycomb cluster */}
          <g stroke="#7a5010" strokeWidth="1.35" strokeLinejoin="round">
            <path d={roundedHexAt(88, 36, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(140, 36, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(192, 36, 28)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(114, 74, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(166, 74, 30)} fill="url(#ap-wax)" />
          </g>
          <ellipse cx="140" cy="52" rx="10" ry="3.5" fill="rgba(255,255,255,0.4)" />

          {/* Bee in the gap — clear of the title oval */}
          <g transform="translate(140 112)">
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
            <ellipse
              cx="0"
              cy="1"
              rx="10"
              ry="7.5"
              fill="#ffd24a"
              stroke="#1a1a1a"
              strokeWidth="0.8"
            />
            <path d="M-7 -1 H7 M-7 3 H7" stroke="#1a1a1a" strokeWidth="1.6" />
            <circle
              cx="-8"
              cy="-2"
              r="4"
              fill="#ffd24a"
              stroke="#1a1a1a"
              strokeWidth="0.7"
            />
          </g>

          {/* Title honey oval — roomy so text fits inside */}
          <ellipse
            cx="140"
            cy="168"
            rx="108"
            ry="28"
            fill="url(#ap-blob)"
            stroke="#7a5010"
            strokeWidth="1.2"
          />
          <ellipse
            cx="118"
            cy="158"
            rx="48"
            ry="8"
            fill="rgba(255,255,255,0.32)"
          />
        </svg>

        <div className="pointer-events-none relative -mt-[4.6rem] flex h-[3.6rem] w-[min(88%,16rem)] flex-col items-center justify-center text-center sm:-mt-[5.1rem] sm:h-[4rem]">
          <h1 className="font-display text-xl font-extrabold leading-none tracking-wide text-white drop-shadow-[0_1px_2px_rgba(60,30,0,0.45)] sm:text-2xl">
            {ui.aboutUs.en}
          </h1>
          <p className="font-telugu mt-1 text-sm font-bold leading-none text-[#fff8d8]">
            {ui.aboutUs.te}
          </p>
        </div>
      </div>

      <AboutTrackRecord />

      <NavFooter backHref="/" />
    </SiteShell>
  );
}
