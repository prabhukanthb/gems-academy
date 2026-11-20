import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { levels, ui } from "@/lib/content";

export const metadata = { title: "Baseline Tests" };

export default function BaselinePage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#1a4f8a]">
        {ui.baselineTests.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.baselineTests.te}
      </p>
      <p className="anim-enter-delay-1 mt-3 max-w-xl text-[#1a2a3a]">
        Take a short placement test to find the right English level for you.
      </p>
      <p className="font-telugu text-sm text-[#4a6a8a]">
        మీకు సరైన ఇంగ్లీష్ స్థాయిని కనుగొనడానికి చిన్న ప్లేస్‌మెంట్ పరీక్ష రాయండి.
      </p>

      <ul className="anim-enter-delay-2 mt-8 space-y-3">
        {levels.map((level) => (
          <li key={level.id}>
            <Link
              href={`/learning/${level.id}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-[#c5d8e8] bg-white/75 px-4 py-3 shadow-sm transition-transform hover:-translate-y-0.5"
              style={{ borderLeftWidth: 6, borderLeftColor: level.color }}
            >
              <span>
                <span className="font-display font-semibold text-[#0d355f]">
                  {level.name.en}
                </span>
                <span className="font-telugu ml-2 text-sm text-[#4a6a8a]">
                  {level.name.te}
                </span>
              </span>
              <span className="text-[#1a4f8a]" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
