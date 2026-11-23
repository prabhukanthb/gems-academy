import { roundedHexAt } from "@/lib/hexPaths";
import {
  aboutContact,
  aboutHero,
  endorsements,
  expertiseBanner,
  experienceStats,
  impactBlocks,
  instituteCard,
  mediaSections,
  partnerLogos,
} from "@/lib/aboutContent";
import { brand, ui } from "@/lib/content";
import Image from "next/image";

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

function SectionTitle({ en, te }: { en: string; te: string }) {
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

/** Expertise card — holds content moved from the cancelled intro block. */
function ExpertiseBlock() {
  return (
    <section className="anim-enter-delay-1 mx-auto w-full max-w-2xl">
      <p className="mb-3 text-center font-display text-sm font-bold uppercase tracking-[0.2em] text-[#c48810]">
        My Track Record · నా అనుభవ గాథ
      </p>
      <div className="overflow-hidden rounded-xl border border-[#c9a84a]/50 bg-white shadow-[0_8px_20px_rgba(80,50,10,0.12)]">
        <div className="h-1.5 bg-gradient-to-r from-[#fff6a8] via-[#f0b020] to-[#c48810]" />
        <div className="px-4 py-5 text-center sm:px-6">
          <h2 className="font-display text-xl font-extrabold text-[#0d3f68] sm:text-2xl">
            {expertiseBanner.name}
          </h2>
          <div className="mx-auto mt-1 h-0.5 w-28 bg-[#c01018]" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-[#1a5f8a] sm:text-base">
            {aboutHero.roles.en}
          </p>
          <p className="font-telugu text-sm text-[#3a5a7a]">{aboutHero.roles.te}</p>
          <p className="mt-2 text-sm font-bold text-[#0d3f68]">
            {expertiseBanner.focus}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#1560b0]">
            {aboutHero.schoolsLine}
          </p>

          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center justify-center rounded-md bg-[#c01018] px-6 py-2.5 shadow-md">
              <span className="font-display text-lg font-extrabold tracking-[0.12em] text-white sm:text-xl">
                {expertiseBanner.label}
              </span>
            </div>
          </div>

          <p className="mt-4 inline-block rounded-full border border-[#f0b020]/50 bg-[#fff8e0]/90 px-4 py-1.5 font-display text-sm font-extrabold text-[#8a5010]">
            {aboutHero.motto.en}
          </p>
          <p className="font-telugu mt-1 text-xs text-[#8a6010]">
            {aboutHero.motto.te}
          </p>
          <p className="mt-2 text-xs font-semibold tracking-wide text-[#4a6a8a]">
            {aboutHero.tagline.en}
          </p>

          <p className="mt-4 text-sm font-bold text-[#0d3f68]">
            {expertiseBanner.phones.join(" | ")}
          </p>
        </div>
        <div className="h-1.5 bg-gradient-to-r from-[#fff6a8] via-[#f0b020] to-[#c48810]" />
      </div>
    </section>
  );
}

function ImpactLogo({ id }: { id: "ncert" | "aptwreis" | "bss" }) {
  const logo = partnerLogos.find((l) => l.id === id);
  if (!logo) return null;
  return (
    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#e0c878]/70 bg-white p-1 shadow-sm sm:h-16 sm:w-16">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={64}
        height={64}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

/** Full About / track-record story — text + honeycomb graphics (not a flyer scan). */
export function AboutTrackRecord() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 pb-4">
      <ExpertiseBlock />

      {/* Experience hexes */}
      <section className="anim-enter-delay-2">
        <SectionTitle en="Lifetime of Learning" te="నేర్పు జీవితం" />
        <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-4">
          {experienceStats.map((s) => (
            <ExperienceHex key={s.years} {...s} />
          ))}
        </div>
      </section>

      {/* Impact — logos beside org headings */}
      <section className="anim-enter-delay-3 space-y-4">
        <SectionTitle en="Impact Across India" te="భారతదేశం అంతటా ప్రభావం" />
        <ul className="space-y-4">
          {impactBlocks.map((block) => (
            <li
              key={block.title.en}
              className="relative overflow-hidden rounded-2xl border border-[#e0c878]/70 bg-[#fffaf0]/85 px-4 py-4 sm:px-5"
            >
              <div className="relative flex items-start gap-3">
                {block.logoId ? <ImpactLogo id={block.logoId} /> : null}
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-extrabold text-[#0d355f] sm:text-lg">
                    {block.title.en}
                  </h3>
                  <p className="font-telugu text-xs font-semibold text-[#8a6010]">
                    {block.title.te}
                  </p>
                </div>
              </div>
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

      {/* Full endorsement names — 3 columns like the flyer */}
      <section>
        <div className="mb-3 rounded-lg bg-[#1a7a3a] px-3 py-2 text-center">
          <h2 className="font-display text-sm font-extrabold text-white sm:text-base">
            {endorsements.header}
          </h2>
        </div>
        <div className="rounded-xl border border-[#e0c878]/80 bg-[#fff8e0]/90 p-3 sm:p-4">
          <div className="grid gap-4 text-left sm:grid-cols-3">
            {endorsements.columns.map((col, i) => (
              <ul key={i} className="space-y-1.5">
                {col.map((name) => (
                  <li
                    key={name}
                    className="border-b border-[#e8d4a0]/60 pb-1 text-[0.72rem] font-semibold leading-snug text-[#1a2a3a] sm:text-xs"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Institute card */}
      <section className="rounded-2xl border-2 border-[#c01018]/70 bg-white/90 px-4 py-4 text-center sm:px-5">
        <p className="font-display text-lg font-extrabold uppercase tracking-wide text-[#c01018]">
          {instituteCard.name}
        </p>
        <p className="text-sm font-semibold text-[#1a1a1a]">{instituteCard.title}</p>
        <p className="mt-1 text-sm font-bold text-[#c01018]">{instituteCard.org}</p>
        <p className="mt-2 text-xs text-[#3a5a7a]">{instituteCard.address}</p>
        <p className="mt-1 text-xs font-semibold text-[#1560b0]">
          {instituteCard.website}
        </p>
      </section>

      {/* Seminars / Newspapers / TV — exact flyer bullet format */}
      <section className="space-y-4">
        {mediaSections.map((block) => (
          <div key={block.title}>
            <div className="mb-2 inline-block rounded-full bg-[#6b2d8a] px-4 py-1.5">
              <h3 className="font-display text-sm font-extrabold text-white">
                {block.title}
              </h3>
            </div>
            <ul className="ml-1 space-y-2">
              {block.bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm font-semibold leading-snug text-[#1a1a1a]"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-[#6b2d8a]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
