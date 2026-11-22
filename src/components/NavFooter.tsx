import { Bilingual } from "./Bilingual";
import { ui } from "@/lib/content";
import Link from "next/link";

type Props = {
  backHref?: string;
  className?: string;
};

/** Back-only footer — Home hex removed site-wide. */
export function NavFooter({ backHref, className = "" }: Props) {
  if (!backHref) return null;

  return (
    <nav
      className={`mt-10 flex flex-wrap items-center justify-center gap-5 ${className}`}
      aria-label="Page navigation"
    >
      <Link
        href={backHref}
        className="back-arrow group inline-flex items-center gap-2 rounded-full border border-[#8f6a1c]/40 bg-gradient-to-br from-[#6eb0e0] to-[#1a5f8a] px-5 py-3 text-white shadow-[0_4px_0_rgba(143,106,28,0.35),0_8px_16px_rgba(90,60,10,0.12)] transition-transform hover:-translate-y-0.5"
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
    </nav>
  );
}
