import Link from "next/link";
import { levels } from "@/lib/content";

const icons = ["crawl", "walk", "run", "win", "trophy"] as const;

function StepIcon({ kind }: { kind: (typeof icons)[number] }) {
  const common = "h-7 w-7 text-white/95";
  if (kind === "trophy") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <path d="M7 4h10v2h2a2 2 0 0 1 2 2v1a5 5 0 0 1-4.1 4.9A5.01 5.01 0 0 1 13 17.9V19h3v2H8v-2h3v-1.1A5.01 5.01 0 0 1 5.1 9.9 5 5 0 0 1 1 5V4h2v1a2 2 0 0 0 2 2h2V4zm2 2v2H5a3 3 0 0 0 3 2.83V6zm6 0v2.83A3 3 0 0 0 19 8h-4V6z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M10.2 8.2h3.6l1.4 4.2 2.6 1.4-.9 1.7-3-1.5-1.1 3.2 2.8 2.6-1.4 1.5-3.3-3.1-3.3 3.1-1.4-1.5 2.8-2.6-1.1-3.2-3 1.5-.9-1.7 2.6-1.4 1.4-4.2z" />
    </svg>
  );
}

export function LevelStaircase() {
  return (
    <ol className="staircase relative mx-auto mt-4 flex w-full max-w-xl flex-col gap-3">
      {[...levels].reverse().map((level, idx) => {
        const visualIndex = levels.length - 1 - idx;
        const indent = visualIndex * 12;
        return (
          <li key={level.id} style={{ marginLeft: `${indent}%` }}>
            <Link
              href={`/learning/${level.id}`}
              className="stair-step group relative flex items-stretch overflow-hidden rounded-r-2xl shadow-[0_8px_24px_rgba(10,30,50,0.18)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a4f8a]"
              style={{ background: level.color }}
            >
              <span
                className="flex w-14 shrink-0 items-center justify-center border-r border-white/15"
                style={{ background: level.accent }}
                aria-hidden
              >
                <StepIcon kind={icons[visualIndex]} />
              </span>
              <span className="flex flex-1 flex-col justify-center gap-0.5 px-4 py-3 text-white">
                <span className="font-display text-lg font-bold tracking-wide sm:text-xl">
                  {level.name.en}
                </span>
                <span className="font-telugu text-sm text-white/90">
                  {level.name.te}
                </span>
                <span className="mt-1 text-xs text-white/85 sm:text-sm">
                  {level.description.en}
                </span>
                <span className="font-telugu text-[0.7rem] text-white/75 sm:text-xs">
                  {level.description.te}
                </span>
              </span>
              <span
                className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
