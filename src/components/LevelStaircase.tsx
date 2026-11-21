import { GlossHex, type GlossVariant } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { levels } from "@/lib/content";

const variants: GlossVariant[] = [
  "blue",
  "green",
  "orange",
  "gold",
  "purple",
];

/** Course levels as a horizontal staggered honeycomb (not a vertical stair). */
export function LevelStaircase() {
  return (
    <HexHoneycomb perRow={3} className="level-honeycomb">
      {levels.map((level, i) => (
        <GlossHex
          key={level.id}
          href={`/learning/${level.id}`}
          variant={variants[i] ?? "blue"}
          size="sm"
          titleEn={level.name.en}
          titleTe={level.name.te}
          highlightAccent={false}
          className="hex-cell-fill"
          ariaLabel={`${level.name.en} — ${level.description.en}`}
        />
      ))}
    </HexHoneycomb>
  );
}
