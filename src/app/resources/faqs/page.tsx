import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { faqs, ui } from "@/lib/content";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#6e2a9a]">
        {ui.faqs.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.faqs.te}
      </p>

      <ul className="anim-enter-delay-1 mt-8 space-y-4">
        {faqs.map((item) => (
          <li
            key={item.q.en}
            className="rounded-2xl border border-[#c5d8e8] bg-white/75 p-5 shadow-sm"
          >
            <p className="font-display font-semibold text-[#0d355f]">
              {item.q.en}
            </p>
            <p className="font-telugu text-sm text-[#4a6a8a]">{item.q.te}</p>
            <p className="mt-3 leading-relaxed">{item.a.en}</p>
            <p className="font-telugu mt-2 text-sm leading-relaxed text-[#3a5a7a]">
              {item.a.te}
            </p>
          </li>
        ))}
      </ul>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
