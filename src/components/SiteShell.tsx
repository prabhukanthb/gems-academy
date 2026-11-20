import type { ReactNode } from "react";
import Link from "next/link";
import { brand } from "@/lib/content";
import { HoneycombDefs } from "@/components/HoneycombDefs";

type Props = {
  children: ReactNode;
  wide?: boolean;
  showBrand?: boolean;
};

export function SiteShell({
  children,
  wide = false,
  showBrand = true,
}: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HoneycombDefs />
      <div className="atmosphere" aria-hidden />
      <div className="hex-grid" aria-hidden />
      <div
        className={`relative z-10 mx-auto flex min-h-screen w-full flex-col px-4 pb-14 pt-6 sm:px-6 ${
          wide ? "max-w-5xl" : "max-w-3xl"
        }`}
      >
        {showBrand ? (
          <header className="mb-6 flex items-center justify-between gap-3">
            <Link
              href="/"
              className="group flex items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--honey)]"
            >
              <span className="font-brand text-3xl tracking-tight text-[var(--brand-deep)] transition-colors group-hover:text-[var(--brand-blue)] sm:text-4xl">
                GEMS
              </span>
              <span className="font-display text-sm font-medium tracking-wide text-[var(--honey-deep)] sm:text-base">
                Academy
              </span>
            </Link>
            <div className="flex flex-col items-end gap-1 text-right text-xs sm:text-sm">
              <div className="flex flex-col items-end gap-0.5">
                <Link
                  href="/resources"
                  className="font-semibold text-[var(--hint)] underline-offset-2 hover:underline"
                >
                  Resources
                </Link>
                <Link
                  href="/samples"
                  className="text-[0.7rem] font-semibold text-[var(--hint)]/80 underline-offset-2 hover:underline"
                >
                  Colour samples
                </Link>
              </div>
              <p className="hidden text-[var(--hint)] sm:block">
                <span className="block font-medium">{brand.domain}</span>
                <span className="font-telugu opacity-80">
                  {brand.tagline.te}
                </span>
              </p>
            </div>
          </header>
        ) : null}
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
