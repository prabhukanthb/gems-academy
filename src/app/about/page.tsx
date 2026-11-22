import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { brand, ui } from "@/lib/content";
import { roundedHexAt } from "@/lib/hexPaths";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="anim-enter relative mx-auto w-full max-w-lg overflow-hidden">
        {/* Honey pouring from honeycomb — page identity */}
        <svg
          viewBox="0 0 320 220"
          className="about-page-pour mx-auto h-auto w-full max-w-md drop-shadow-[0_10px_20px_rgba(120,70,10,0.22)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="ap-wax" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffe9a0" />
              <stop offset="50%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#c47808" />
            </linearGradient>
            <linearGradient id="ap-honey" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe56a" />
              <stop offset="40%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#a06008" />
            </linearGradient>
            <radialGradient id="ap-shine" cx="40%" cy="30%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <g stroke="#8a6010" strokeWidth="1.5" strokeLinejoin="round">
            <path d={roundedHexAt(110, 48, 32)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(162, 48, 32)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(214, 48, 32)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(136, 90, 32)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(188, 90, 32)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(162, 132, 30)} fill="url(#ap-wax)" />
          </g>
          <ellipse cx="162" cy="70" rx="14" ry="5" fill="rgba(255,255,255,0.4)" />

          {/* Honey spilling from the lowest cell */}
          <path
            className="honey-stream"
            d="M148 148
               C150 158 154 170 158 182
               C162 194 168 204 174 210
               L160 216
               C152 208 144 194 140 180
               C136 166 140 154 148 148 Z"
            fill="url(#ap-honey)"
          />
          <ellipse
            className="honey-drop"
            cx="168"
            cy="188"
            rx="7"
            ry="10"
            fill="#ffd24a"
          />
          {/* Honey puddle with title sitting on it */}
          <ellipse
            cx="160"
            cy="205"
            rx="92"
            ry="18"
            fill="url(#ap-honey)"
            stroke="#8a6010"
            strokeWidth="1"
          />
          <ellipse cx="140" cy="198" rx="50" ry="8" fill="url(#ap-shine)" />
        </svg>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex flex-col items-center text-center sm:bottom-3">
          <h1 className="font-display text-3xl font-extrabold tracking-wide text-[#5a3808] sm:text-4xl">
            {ui.aboutUs.en}
          </h1>
          <p className="font-telugu text-lg font-bold text-[#8a6010]">
            {ui.aboutUs.te}
          </p>
        </div>
      </div>

      <div className="anim-enter-delay-1 relative -mt-2 space-y-5 px-1 sm:px-2">
        <p className="text-center text-lg leading-relaxed text-[#1a2a3a]">
          Like honey from the comb, {brand.name} shares English knowledge —
          sweet, steady, and meant to be shared — from Pre-Beginner through
          Professional, in English and Telugu.
        </p>
        <p className="font-telugu text-center leading-relaxed text-[#3a5a7a]">
          తేనె తొట్టి నుండి తేనెలా, {brand.name} ఇంగ్లీష్ జ్ఞానాన్ని —
          తీపిగా, నిలకడగా, పంచుకునేలా — ప్రీ-బిగినర్ నుండి ప్రొఫెషనల్ వరకు
          ఇంగ్లీష్ మరియు తెలుగులో అందిస్తుంది.
        </p>
        <p className="text-center leading-relaxed text-[#1a2a3a]">
          Led by Kiron Satyamurthy from Garla, Mahabubabad District, Telangana —
          concept cards, baseline tests, and practical speaking help learners
          grow, excel, master, and succeed.
        </p>
        <p className="font-telugu text-center leading-relaxed text-[#3a5a7a]">
          గార్ల, మహబూబాబాద్ జిల్లా, తెలంగాణ నుండి కిరాన్ సత్యమూర్తి
          నాయకత్వంలో — కాన్సెప్ట్ కార్డులు, బేస్‌లైన్ పరీక్షలు మరియు ప్రాక్టికల్
          స్పీకింగ్ ద్వారా విద్యార్థులు ఎదగడానికి, మెరుస్తూ ఉండటానికి, నైపుణ్యం
          సాధించడానికి, విజయం పొందడానికి సహాయపడతాము.
        </p>
        <p className="text-center text-sm text-[#4a6a8a]">
          <a
            href="tel:9494447457"
            className="font-semibold text-[#0d6a3a] underline-offset-2 hover:underline"
          >
            9494447457
          </a>
          {" · "}Google Pay / PhonePe
        </p>
      </div>

      <NavFooter backHref="/" />
    </SiteShell>
  );
}
