import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { brand, ui } from "@/lib/content";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#0d355f]">
        {ui.aboutUs.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.aboutUs.te}
      </p>

      <div className="anim-enter-delay-1 mt-8 space-y-5 rounded-2xl border border-[#c5d8e8] bg-white/80 p-6 shadow-sm">
        <p className="text-lg leading-relaxed text-[#1a2a3a]">
          {brand.name} helps learners across Telangana build confident English —
          from Pre-Beginner through Professional — with bilingual support in
          English and Telugu.
        </p>
        <p className="font-telugu leading-relaxed text-[#3a5a7a]">
          {brand.name} తెలంగాణలోని విద్యార్థులకు ప్రీ-బిగినర్ నుండి ప్రొఫెషనల్
          వరకు ఇంగ్లీష్ మరియు తెలుగు ద్విభాషా మద్దతుతో నమ్మకమైన ఇంగ్లీష్
          నైపుణ్యాలు అందిస్తుంది.
        </p>
        <p className="leading-relaxed text-[#1a2a3a]">
          Led by Kiron Satyamurthy, our programmes blend concept cards, baseline
          tests, and practical speaking so rural and urban learners can grow,
          excel, master, and succeed.
        </p>
        <p className="font-telugu leading-relaxed text-[#3a5a7a]">
          కిరాన్ సత్యమూర్తి నాయకత్వంలో, కాన్సెప్ట్ కార్డులు, బేస్‌లైన్ పరీక్షలు
          మరియు ప్రాక్టికల్ స్పీకింగ్ ద్వారా గ్రామీణ మరియు పట్టణ విద్యార్థులు
          ఎదగడానికి, మెరుస్తూ ఉండటానికి, నైపుణ్యం సాధించడానికి, విజయం
          పొందడానికి సహాయపడతాము.
        </p>
        <p className="text-sm text-[#4a6a8a]">
          Garla · Mahabubabad District · Telangana ·{" "}
          <a
            href="tel:9494447457"
            className="font-semibold text-[#0d6a3a] underline-offset-2 hover:underline"
          >
            9494447457
          </a>
        </p>
      </div>

      <NavFooter backHref="/" />
    </SiteShell>
  );
}
