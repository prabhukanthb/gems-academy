import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { HexButton } from "@/components/HexButton";
import { themes } from "@/lib/themes";
import { ThemePreviewCard } from "@/components/ThemePreviewCard";

export const metadata = {
  title: "Colour samples",
};

export default function SamplesPage() {
  return (
    <SiteShell wide>
      <h1 className="anim-enter font-display text-3xl font-bold text-[var(--brand-deep)]">
        Colour samples
      </h1>
      <p className="font-telugu anim-enter text-lg text-[var(--honey-deep)]">
        రంగు నమూనాలు
      </p>
      <p className="anim-enter-delay-1 mt-2 max-w-2xl text-sm text-[var(--hint)]">
        Six honeycomb palettes. Tap <strong>Try on site</strong> to preview the
        whole app in that theme (saved in this browser). Not published live.
        <span className="font-telugu mt-1 block">
          ఆరు హనీకాంబ్ పాలెట్‌లు. సైట్‌లో చూడటానికి Try on site నొక్కండి.
          ప్రచురించబడలేదు.
        </span>
      </p>

      <ul className="anim-enter-delay-2 mt-8 grid gap-8 lg:grid-cols-2">
        {themes.map((theme) => (
          <li key={theme.id}>
            <ThemePreviewCard theme={theme} />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <HexButton href="/" variant="gold" size="md">
          <span className="text-sm font-bold">Back to Welcome</span>
          <span className="font-telugu text-[0.7rem] font-normal">
            స్వాగతానికి
          </span>
        </HexButton>
        <Link
          href="/hub"
          className="inline-flex items-center rounded-full border border-[var(--wall)]/40 bg-[var(--wax)] px-5 py-3 text-sm font-bold text-[var(--wall)]"
        >
          Hub · హబ్
        </Link>
      </div>
    </SiteShell>
  );
}
