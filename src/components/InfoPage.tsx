import type { ReactNode } from "react";
import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import type { Bilingual as BilingualText } from "@/lib/content";

type Props = {
  title: BilingualText;
  children: ReactNode;
  backHref: string;
  accent?: string;
};

export function InfoPage({
  title,
  children,
  backHref,
  accent = "#0d355f",
}: Props) {
  return (
    <SiteShell>
      <h1
        className="anim-enter font-display text-3xl font-bold"
        style={{ color: accent }}
      >
        {title.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">{title.te}</p>
      <div className="anim-enter-delay-1 mt-8 space-y-4 rounded-2xl border border-[#c5d8e8] bg-white/75 p-6 shadow-sm">
        {children}
      </div>
      <NavFooter backHref={backHref} />
    </SiteShell>
  );
}
