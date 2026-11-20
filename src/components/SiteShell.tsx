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
              className="group flex items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4922a]"
            >
              <span className="font-brand text-3xl tracking-tight text-[#0d3f68] transition-colors group-hover:text-[#1a5f8a] sm:text-4xl">
                GEMS
              </span>
              <span className="font-display text-sm font-medium tracking-wide text-[#5a4a28] sm:text-base">
                Academy
              </span>
            </Link>
            <p className="hidden text-right text-xs text-[#6a5a38] sm:block sm:text-sm">
              <span className="block font-medium">{brand.domain}</span>
              <span className="font-telugu opacity-80">
                {brand.tagline.te}
              </span>
            </p>
          </header>
        ) : null}
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
