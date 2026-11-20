import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { testimonials, ui } from "@/lib/content";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#d06820]">
        {ui.testimonials.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.testimonials.te}
      </p>

      <ul className="anim-enter-delay-1 mt-8 space-y-5">
        {testimonials.map((t) => (
          <li
            key={t.name.en}
            className="rounded-2xl border border-[#c5d8e8] bg-white/75 p-5 shadow-sm"
          >
            <p className="font-display text-lg italic leading-relaxed text-[#1a2a3a]">
              “{t.quote.en}”
            </p>
            <p className="font-telugu mt-2 text-sm leading-relaxed text-[#3a5a7a]">
              “{t.quote.te}”
            </p>
            <p className="mt-4 font-semibold text-[#0d355f]">
              — {t.name.en}{" "}
              <span className="font-telugu font-normal text-[#4a6a8a]">
                / {t.name.te}
              </span>
            </p>
            <p className="text-sm text-[#4a6a8a]">
              {t.role.en} · {t.role.te}
            </p>
          </li>
        ))}
      </ul>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
