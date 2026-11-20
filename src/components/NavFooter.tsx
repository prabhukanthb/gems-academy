import { HexButton } from "./HexButton";
import { Bilingual } from "./Bilingual";
import { ui } from "@/lib/content";
import Link from "next/link";

type Props = {
  backHref?: string;
  showHome?: boolean;
  className?: string;
};

export function NavFooter({
  backHref,
  showHome = true,
  className = "",
}: Props) {
  return (
    <nav
      className={`mt-10 flex flex-wrap items-center justify-center gap-5 ${className}`}
      aria-label="Page navigation"
    >
      {backHref ? (
        <Link
          href={backHref}
          className="back-arrow group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#4a90d9] to-[#1a4f8a] px-5 py-3 text-white shadow-[0_6px_0_#0a2a4a] transition-transform hover:-translate-y-0.5"
        >
          <span aria-hidden className="text-lg font-bold">
            ←
          </span>
          <Bilingual
            text={ui.back}
            stack={false}
            className="text-sm font-semibold"
            teClassName="text-[0.8em]"
          />
        </Link>
      ) : null}
      {showHome ? (
        <HexButton href="/hub" variant="green" size="sm" ariaLabel="Home">
          <Bilingual
            text={ui.home}
            enClassName="text-[0.75rem] leading-tight"
            teClassName="text-[0.65rem] leading-tight font-normal"
          />
        </HexButton>
      ) : null}
    </nav>
  );
}
