import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { brand, ui } from "@/lib/content";
import { roundedHexAt } from "@/lib/hexPaths";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="anim-enter relative mx-auto w-full max-w-md">
        <svg
          viewBox="0 0 320 260"
          className="about-page-pour mx-auto h-auto w-full drop-shadow-[0_12px_22px_rgba(120,70,10,0.24)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="ap-wax" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff0b0" />
              <stop offset="50%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#c47808" />
            </linearGradient>
            <linearGradient id="ap-honey" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe978" />
              <stop offset="40%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#9a5808" />
            </linearGradient>
            <radialGradient id="ap-blob" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#fff2a8" />
              <stop offset="50%" stopColor="#f0b020" />
              <stop offset="100%" stopColor="#a86808" />
            </radialGradient>
          </defs>

          <g stroke="#7a5010" strokeWidth="1.45" strokeLinejoin="round">
            <path d={roundedHexAt(100, 42, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(152, 42, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(204, 42, 28)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(126, 82, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(178, 82, 30)} fill="url(#ap-wax)" />
            <path d={roundedHexAt(152, 122, 28)} fill="url(#ap-wax)" />
          </g>
          <ellipse cx="152" cy="62" rx="12" ry="4.5" fill="rgba(255,255,255,0.42)" />

          {/* Thick pour into title pool */}
          <path
            className="honey-stream"
            d="M142 138
               C148 148 154 160 158 174
               C162 186 164 196 162 204
               L150 208
               C150 198 148 186 144 174
               C140 160 138 146 142 138 Z"
            fill="url(#ap-honey)"
          />
          <path
            className="honey-drop"
            d="M168 168 C176 168 180 176 180 184 C180 196 172 206 168 212 C164 206 156 196 156 184 C156 176 160 168 168 168 Z"
            fill="#ffd84a"
          />
          <ellipse
            cx="160"
            cy="228"
            rx="108"
            ry="26"
            fill="url(#ap-blob)"
            stroke="#7a5010"
            strokeWidth="1.2"
          />
          <ellipse
            cx="130"
            cy="218"
            rx="48"
            ry="9"
            fill="rgba(255,255,255,0.35)"
          />
        </svg>

        <div className="pointer-events-none absolute inset-x-0 bottom-[4%] flex flex-col items-center text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(60,30,0,0.45)] sm:text-4xl">
            {ui.aboutUs.en}
          </h1>
          <p className="font-telugu text-base font-bold text-[#fff8d8] sm:text-lg">
            {ui.aboutUs.te}
          </p>
        </div>
      </div>

      <div className="anim-enter-delay-1 mt-6 space-y-5 px-1 sm:px-2">
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
