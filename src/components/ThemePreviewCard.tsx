"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Theme } from "@/lib/themes";
import { applyThemeId } from "@/components/ThemeRoot";
import { HEX_ROUNDED, HEX_VIEW } from "@/lib/hexPaths";

const SWATCH_KEYS = [
  "--cell-gold-1",
  "--cell-blue-1",
  "--cell-green-1",
  "--cell-maroon-1",
  "--cell-orange-1",
  "--wall",
] as const;

export function ThemePreviewCard({ theme }: { theme: Theme }) {
  const router = useRouter();

  function tryTheme() {
    applyThemeId(theme.id);
    router.push(`/?theme=${theme.id}`);
  }

  return (
    <article
      className="overflow-hidden rounded-2xl border shadow-sm"
      style={{
        borderColor: `${theme.vars["--wall"]}55`,
        background: theme.vars["--atm-base-0"],
        color: theme.vars["--foreground"],
      }}
    >
      {/* Mini atmosphere strip */}
      <div
        className="relative h-28 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 90% at 20% 0%, ${theme.vars["--atm-1"]} 0%, transparent 55%),
            radial-gradient(ellipse 60% 80% at 90% 100%, ${theme.vars["--atm-2"]} 0%, transparent 50%),
            linear-gradient(160deg, ${theme.vars["--atm-base-0"]}, ${theme.vars["--atm-base-2"]})
          `,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-4">
          {(
            [
              ["--cell-blue-0", "--cell-blue-1"],
              ["--cell-gold-0", "--cell-gold-1"],
              ["--cell-maroon-0", "--cell-maroon-1"],
            ] as const
          ).map(([a, b]) => {
            const gid = `sw-${theme.id}-${b.replace(/[^a-z0-9]+/gi, "")}`;
            return (
              <svg
                key={b}
                className="h-14 w-12 shrink-0"
                viewBox={HEX_VIEW}
                aria-hidden
              >
                <defs>
                  <linearGradient id={gid} x1="0.2" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stopColor={theme.vars[a]} />
                    <stop offset="100%" stopColor={theme.vars[b]} />
                  </linearGradient>
                </defs>
                <path
                  d={HEX_ROUNDED}
                  fill={`url(#${gid})`}
                  stroke={theme.vars["--wall"]}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h2
            className="font-display text-xl font-bold"
            style={{ color: theme.vars["--brand-deep"] }}
          >
            {theme.name.en}
          </h2>
          <p className="font-telugu text-sm" style={{ color: theme.vars["--hint"] }}>
            {theme.name.te}
          </p>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: theme.vars["--foreground"] }}>
          {theme.blurb.en}
        </p>
        <p className="font-telugu text-xs leading-relaxed" style={{ color: theme.vars["--hint"] }}>
          {theme.blurb.te}
        </p>

        <div className="flex flex-wrap gap-1.5" aria-label="Palette swatches">
          {SWATCH_KEYS.map((key) => (
            <span
              key={key}
              title={key}
              className="h-7 w-7 rounded-full border"
              style={{
                background: theme.vars[key],
                borderColor: theme.vars["--wall"],
              }}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={tryTheme}
            className="rounded-full px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: theme.vars["--cell-blue-1"] }}
          >
            Try on site · సైట్‌లో చూడండి
          </button>
          <Link
            href={`/?theme=${theme.id}`}
            className="rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              borderColor: theme.vars["--wall"],
              color: theme.vars["--wall"],
            }}
            onClick={() => applyThemeId(theme.id)}
          >
            Welcome only
          </Link>
        </div>
      </div>
    </article>
  );
}
