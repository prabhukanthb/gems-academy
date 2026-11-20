import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { ui } from "@/lib/content";

export const metadata = { title: "English for the Family" };

export default function FamilyPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold italic text-[#6e2a9a]">
        {ui.familyEnglish.en}
      </h1>
      <p className="font-telugu anim-enter mt-1 text-lg text-[#3a5a7a]">
        {ui.familyEnglish.te}
      </p>

      <div className="anim-enter-delay-1 mt-8 space-y-4 rounded-2xl border border-[#c5d8e8] bg-white/75 p-6">
        <p className="text-lg leading-relaxed">
          Learn English together as a family — parents and children practise
          greetings, shopping, school talks, and celebrations in bilingual
          sessions.
        </p>
        <p className="font-telugu leading-relaxed text-[#3a5a7a]">
          కుటుంబంగా కలిసి ఇంగ్లీష్ నేర్చుకోండి — తల్లిదండ్రులు మరియు పిల్లలు
          శుభాకాంక్షలు, షాపింగ్, స్కూల్ సంభాషణలు మరియు పండుగలను ద్విభాషా
          సెషన్‌లలో అభ్యసిస్తారు.
        </p>
      </div>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
