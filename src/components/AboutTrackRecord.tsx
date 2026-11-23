import { roundedHexAt } from "@/lib/hexPaths";
import {
  aboutContact,
  aboutHero,
  affiliations,
  endorsements,
  experienceStats,
  impactBlocks,
  mediaAndSeminars,
} from "@/lib/aboutContent";
import { brand, ui } from "@/lib/content";

function StatIcon({
  icon,
  className = "",
}: {
  icon: "teach" | "book" | "home";
  className?: string;
}) {
  if (icon === "book") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5zm2 0V20a.5.5 0 0 1 .5-.5H18V4H6.5a.5.5 0 0 0-.5.5z" />
        <path d="M8 7h8v1.5H8V7zm0 3.5h8V12H8v-1.5zm0 3.5h5V16H8v-1.5z" />
      </svg>
    );
  }
  if (icon === "home") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M12 3 3 10.2V21h6v-6h6v6h6V10.2L12 3zm0 2.4 6 4.7V19h-2v-6H8v6H6v-8.9l6-4.7z" />
        <path d="M9 9.5h6l-1.2 2.2H10.2L9 9.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4 19h16v2H4v-2zm2-2V5h2v12H6zm5 0V8h2v9h-2zm5 0V3h2v14h-2z" />
      <circle cx="7" cy="4" r="1.5" />
      <circle cx="12" cy="7" r="1.5" />
      <circle cx="17" cy="2.5" r="1.5" />
    </svg>
  );
}

const hexFills: Record<string, { a: string; b: string; c: string }> = {
  blue: { a: "#4a9fe8", b: "#1560b0", c: "#0a3a78" },
  green: { a: "#4ecf6a", b: "#1a9a38", c: "#0a6420" },
  gold: { a: "#ffe060", b: "#f0b020", c: "#b07808" },
};

function ExperienceHex({
  years,
  label,
  icon,
  variant,
}: (typeof experienceStats)[number]) {
  const f = hexFills[variant];
  const uid = `ex-${variant}`;
  // Keep copy inside the flat sides of the hex (not the pointed tips).
  return (
    <div className="relative flex h-[11.5rem] w-[10rem] flex-col items-center justify-center sm:h-[13rem] sm:w-[11.25rem]">
      <svg
        className="absolute inset-0 h-full w-full drop-shadow-[0_8px_14px_rgba(20,40,80,0.22)]"
        viewBox="0 0 100 115.47"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${uid}-g`} x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor={f.a} />
            <stop offset="50%" stopColor={f.b} />
            <stop offset="100%" stopColor={f.c} />
          </linearGradient>
          <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff6a8" />
            <stop offset="50%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#b07808" />
          </linearGradient>
        </defs>
        <path
          d={roundedHexAt(50, 57.7, 48)}
          fill={`url(#${uid}-gold)`}
          stroke="#8a6010"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d={roundedHexAt(50, 57.7, 40)}
          fill={`url(#${uid}-g)`}
          stroke="rgba(255,236,160,0.45)"
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative z-10 flex w-[58%] max-w-[5.8rem] flex-col items-center px-0.5 py-3 text-center text-white sm:max-w-[6.5rem]">
        <StatIcon icon={icon} className="mb-0.5 h-4 w-4 opacity-95 sm:h-5 sm:w-5" />
        <span className="font-display text-[1.65rem] font-extrabold leading-none sm:text-[1.9rem]">
          {years}
        </span>
        <span className="mt-1 whitespace-pre-line text-[0.58rem] font-bold uppercase leading-snug tracking-wide sm:text-[0.65rem]">
          {label.en}
        </span>
        <span className="font-telugu mt-0.5 max-w-full whitespace-pre-line text-[0.52rem] leading-snug text-[#ffe9a8] sm:text-[0.58rem]">
          {label.te}
        </span>
      </div>
    </div>
  );
}

function SectionTitle({
  en,
  te,
}: {
  en: string;
  te: string;
}) {
  return (
    <header className="mb-3 text-center">
      <h2 className="font-display text-xl font-extrabold text-[#0d355f] sm:text-2xl">
        {en}
      </h2>
      <p className="font-telugu text-sm font-semibold text-[#8a6010]">{te}</p>
      <div
        className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#ffd24a] via-[#f0b020] to-[#c48810]"
        aria-hidden
      />
    </header>
  );
}

/** Full About / track-record story — text + honeycomb graphics (not a flyer scan). */
export function AboutTrackRecord() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 pb-4">
      {/* Identity */}
      <section className="anim-enter-delay-1 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#c48810]">
          My Track Record · నా అనుభవ గాథ
        </p>
        <h2 className="mt-2 font-display text-2xl font-extrabold text-[#0d355f] sm:text-3xl">
          {aboutHero.name}
        </h2>
        <p className="mt-1 text-sm font-semibold text-[#1a5f8a] sm:text-base">
          {aboutHero.roles.en}
        </p>
        <p className="font-telugu text-sm text-[#3a5a7a]">{aboutHero.roles.te}</p>
        <p className="mt-3 inline-block rounded-full border border-[#f0b020]/50 bg-[#fff8e0]/90 px-4 py-1.5 font-display text-sm font-extrabold text-[#8a5010]">
          {aboutHero.motto.en}
        </p>
        <p className="font-telugu mt-1 text-xs text-[#8a6010]">
          {aboutHero.motto.te}
        </p>
        <p className="mt-2 text-xs font-semibold tracking-wide text-[#4a6a8a]">
          {aboutHero.tagline.en}
        </p>
      </section>

      {/* Experience hexes */}
      <section className="anim-enter-delay-2">
        <SectionTitle en="Lifetime of Learning" te="నేర్పు జీవితం" />
        <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-4">
          {experienceStats.map((s) => (
            <ExperienceHex key={s.years} {...s} />
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="anim-enter-delay-3 space-y-4">
        <SectionTitle en="Impact Across India" te="భారతదేశం అంతటా ప్రభావం" />
        <ul className="space-y-4">
          {impactBlocks.map((block) => (
            <li
              key={block.title.en}
              className="relative overflow-hidden rounded-2xl border border-[#e0c878]/70 bg-[#fffaf0]/85 px-4 py-4 sm:px-5"
            >
              <span
                className="pointer-events-none absolute -right-3 -top-3 opacity-30"
                aria-hidden
              >
                <svg viewBox="0 0 60 70" className="h-16 w-14">
                  <path
                    d={roundedHexAt(30, 35, 26)}
                    fill="#f0b020"
                    stroke="#8a6010"
                    strokeWidth="1"
                  />
                </svg>
              </span>
              <h3 className="relative font-display text-base font-extrabold text-[#0d355f] sm:text-lg">
                {block.title.en}
              </h3>
              <p className="font-telugu relative text-xs font-semibold text-[#8a6010]">
                {block.title.te}
              </p>
              <p className="relative mt-2 text-sm leading-relaxed text-[#1a2a3a]">
                {block.body.en}
              </p>
              <p className="font-telugu relative mt-1.5 text-sm leading-relaxed text-[#3a5a7a]">
                {block.body.te}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Endorsements */}
      <section>
        <SectionTitle en="Appreciated By" te="ప్రశంసించినవారు" />
        <p className="mb-3 text-center text-sm text-[#1a2a3a]">
          {endorsements.intro.en}
        </p>
        <p className="font-telugu mb-4 text-center text-sm text-[#3a5a7a]">
          {endorsements.intro.te}
        </p>
        <ul className="flex flex-wrap justify-center gap-2">
          {endorsements.names.map((name) => (
            <li
              key={name}
              className="rounded-full border border-[#c5a040]/45 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#3a2810] sm:text-sm"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Media */}
      <section className="space-y-3">
        <SectionTitle en="Seminars, Press & TV" te="సెమినార్లు, పత్రికలు & టీవీ" />
        <div className="space-y-3 text-sm leading-relaxed">
          <p className="text-[#1a2a3a]">{mediaAndSeminars.seminars.en}</p>
          <p className="font-telugu text-[#3a5a7a]">
            {mediaAndSeminars.seminars.te}
          </p>
          <p className="text-[#1a2a3a]">{mediaAndSeminars.press.en}</p>
          <p className="font-telugu text-[#3a5a7a]">{mediaAndSeminars.press.te}</p>
          <p className="font-semibold text-[#0d355f]">{mediaAndSeminars.tv.en}</p>
          <p className="font-telugu text-[#3a5a7a]">{mediaAndSeminars.tv.te}</p>
        </div>
      </section>

      {/* Affiliations */}
      <section>
        <SectionTitle en="Affiliations" te="సంబంధిత సంస్థలు" />
        <ul className="grid gap-2 sm:grid-cols-2">
          {affiliations.map((a) => (
            <li
              key={a.en}
              className="rounded-xl border border-[#d4b060]/50 bg-gradient-to-br from-[#fff8e0] to-[#ffe9a8]/60 px-3 py-2.5 text-center"
            >
              <span className="block text-sm font-bold text-[#0d355f]">{a.en}</span>
              <span className="font-telugu block text-xs text-[#8a6010]">
                {a.te}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="rounded-2xl border border-[#f0b020]/40 bg-[#fff6d8]/90 px-4 py-5 text-center sm:px-6">
        <p className="font-display text-lg font-extrabold text-[#0d355f]">
          {brand.name}
        </p>
        <p className="text-sm font-semibold text-[#8a6010]">
          {aboutContact.focus.en}
        </p>
        <p className="font-telugu text-xs text-[#8a6010]">
          {aboutContact.focus.te}
        </p>
        <p className="mt-3 text-sm text-[#1a2a3a]">{aboutContact.place.en}</p>
        <p className="font-telugu text-xs text-[#3a5a7a]">
          {aboutContact.place.te}
        </p>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-bold text-[#0d6a3a]">
          {aboutContact.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p}`}
              className="underline-offset-2 hover:underline"
            >
              {p.replace(/(\d{3})(\d{4})(\d{3})/, "$1 $2 $3")}
            </a>
          ))}
        </p>
        <p className="mt-1 text-sm">
          <a
            href={`mailto:${aboutContact.email}`}
            className="font-semibold text-[#1560b0] underline-offset-2 hover:underline"
          >
            {aboutContact.email}
          </a>
        </p>
        <p className="mt-2 text-xs text-[#4a6a8a]">
          Google Pay / PhonePe · {aboutContact.phones[1]}
        </p>
        <p className="font-telugu mt-3 text-sm font-bold text-[#0d355f]">
          {ui.aboutUs.te}
        </p>
      </section>
    </div>
  );
}
