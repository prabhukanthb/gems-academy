import { GlossHex, type GlossVariant } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { levels, type LevelId } from "@/lib/content";

const variants: Record<LevelId, GlossVariant> = {
  toddler: "blue",
  beginner: "green",
  elementary: "orange",
  standard: "gold",
  professional: "blue",
};

/** Short blurbs that fit inside a honeycomb (full text stays on the level page). */
const shortDetail: Record<
  LevelId,
  { en: string; te: string }
> = {
  toddler: {
    en: "Before joining school",
    te: "స్కూల్‌లో చేరే ముందు",
  },
  beginner: {
    en: "KG to 5th Class",
    te: "కేజీ – 5వ తరగతి",
  },
  elementary: {
    en: "6th – Inter – Degree",
    te: "6వ – ఇంటర్ – డిగ్రీ",
  },
  standard: {
    en: "Degree – PG Level",
    te: "డిగ్రీ – పీజీ",
  },
  professional: {
    en: "Teachers, Doctors, IT & more",
    te: "ఉపాధ్యాయులు, వైద్యులు మరిన్ని",
  },
};

function LevelIcon({ id }: { id: LevelId }) {
  const common = "h-full w-full text-white";
  if (id === "professional") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <path d="M7 4h10v2h2a2 2 0 0 1 2 2v1a5 5 0 0 1-4.1 4.9A5.01 5.01 0 0 1 13 17.9V19h3v2H8v-2h3v-1.1A5.01 5.01 0 0 1 5.1 9.9 5 5 0 0 1 1 5V4h2v1a2 2 0 0 0 2 2h2V4zm2 2v2H5a3 3 0 0 0 3 2.83V6zm6 0v2.83A3 3 0 0 0 19 8h-4V6z" />
      </svg>
    );
  }
  if (id === "toddler") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <circle cx="12" cy="5.5" r="2.2" />
        <path d="M8 10.5c0-1.2 1.8-2.2 4-2.2s4 1 4 2.2v1.2l2.2 3.4-1.7 1.1-1.5-2.3-.5 5.6H11.5l-.5-5.6-1.5 2.3-1.7-1.1L9.5 11.7V10.5z" />
      </svg>
    );
  }
  if (id === "beginner") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <circle cx="12" cy="5" r="2.2" />
        <path d="M10.2 8.2h3.6l1.2 3.8 2.8 1.5-.9 1.6-2.8-1.4-.8 6.3h-2.6l-.8-6.3-2.8 1.4-.9-1.6 2.8-1.5 1.2-3.8z" />
      </svg>
    );
  }
  if (id === "elementary") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <circle cx="12" cy="5" r="2.2" />
        <path d="M10 8.5h4l1.5 4.2 3 1.2-.8 1.8-2.7-1-1.2 6.3h-2.6l-1.2-6.3-2.7 1-.8-1.8 3-1.2L10 8.5z" />
      </svg>
    );
  }
  // standard — arms raised
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
      <circle cx="12" cy="4.8" r="2.1" />
      <path d="M8.2 9.2 5.5 6.8l1.4-1.5 3.2 2.8h4l3.2-2.8 1.4 1.5-2.7 2.4.8 3.2 2.6 1.2-.8 1.7-3.1-1.3L14 20h-4l-.8-5.3-3.1 1.3-.8-1.7 2.6-1.2.8-3.2z" />
    </svg>
  );
}

/** Same level content as the staircase — honeycomb shapes in a horizontal row. */
export function LevelStaircase() {
  return (
    <HexHoneycomb perRow={5} className="level-path">
      {levels.map((level) => {
        const detail = shortDetail[level.id];
        return (
          <GlossHex
            key={level.id}
            href={`/learning/${level.id}`}
            variant={variants[level.id]}
            size="sm"
            icon={<LevelIcon id={level.id} />}
            titleEn={level.name.en}
            titleTe={level.name.te}
            detailEn={detail.en}
            detailTe={detail.te}
            highlightAccent={false}
            className="hex-cell-fill"
            ariaLabel={`${level.name.en} — ${level.description.en}`}
          />
        );
      })}
    </HexHoneycomb>
  );
}
