import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Concept Cards" };

export default function ConceptCardsPage() {
  return (
    <InfoPage title={ui.conceptCards} backHref="/learning" accent="#1e7a3a">
      <p className="text-lg leading-relaxed">
        Printable bilingual concept cards cover grammar, vocabulary, and
        conversation prompts — English on one side, Telugu on the other.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        ప్రింట్ చేసుకోదగిన ద్విభాషా కాన్సెప్ట్ కార్డులు వ్యాకరణం, పదజాలం మరియు
        సంభాషణ ప్రాంప్ట్‌లను కవర్ చేస్తాయి — ఒక వైపు ఇంగ్లీష్, మరొక వైపు తెలుగు.
      </p>
    </InfoPage>
  );
}
