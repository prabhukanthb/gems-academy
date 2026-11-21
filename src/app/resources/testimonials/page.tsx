import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { testimonials, ui } from "@/lib/content";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <SiteShell wide>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#d06820]">
        {ui.testimonials.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.testimonials.te}
      </p>
      <p className="anim-enter mt-2 max-w-2xl text-sm text-[#4a6a8a]">
        Words from educators and leaders about Kiron Satyamurthy and the GEMS
        methodology.
        <span className="font-telugu mt-1 block">
          కిరణ్ సత్యమూర్తి గారు మరియు GEMS పద్ధతి గురించి విద్యావేత్తలు, నాయకుల
          మాటలు.
        </span>
      </p>

      <ul className="anim-enter-delay-1 mt-8 space-y-10">
        {testimonials.map((t) => (
          <li
            key={t.id}
            className="overflow-hidden rounded-2xl border border-[#c5d8e8] bg-white/80 shadow-sm backdrop-blur-sm"
          >
            <div className="border-b border-[#e5d4a8] bg-gradient-to-b from-[#faf6ea] to-white p-3 sm:p-4">
              <Image
                src={t.image}
                alt={`${t.name.en} — testimonial`}
                width={900}
                height={1200}
                className="mx-auto h-auto w-full max-w-xl rounded-lg shadow-md"
                sizes="(max-width: 640px) 100vw, 576px"
              />
            </div>

            <div className="space-y-3 p-5 sm:p-6">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0d355f]">
                  {t.name.en}
                </h2>
                <p className="font-telugu text-sm text-[#3a5a7a]">{t.name.te}</p>
                <p className="mt-1 text-sm text-[#4a6a8a]">{t.role.en}</p>
                <p className="font-telugu text-xs text-[#4a6a8a]">{t.role.te}</p>
              </div>

              {/* English is already on the letter image — show Telugu only to avoid duplication */}
              <p className="font-telugu text-base leading-relaxed text-[#1a2a3a]">
                {t.quote.te}
              </p>

              {t.link ? (
                <a
                  href={t.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#b01e2e] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  {t.link.label.en}
                  <span className="font-telugu text-xs font-normal opacity-90">
                    · {t.link.label.te}
                  </span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
