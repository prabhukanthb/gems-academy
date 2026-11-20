import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { ui } from "@/lib/content";

export const metadata = { title: "Beautiful Handwriting" };

export default function HandwritingPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-script text-5xl text-[#1a4f8a]">
        {ui.handwriting.en}
      </h1>
      <p className="font-telugu anim-enter mt-2 text-lg text-[#3a5a7a]">
        {ui.handwriting.te}
      </p>

      <div className="anim-enter-delay-1 mt-8 space-y-4 rounded-2xl border border-[#c5d8e8] bg-white/75 p-6">
        <p className="text-lg leading-relaxed">
          Learn neat English cursive and print letters with guided sheets —
          perfect for school notebooks and exam papers.
        </p>
        <p className="font-telugu leading-relaxed text-[#3a5a7a]">
          మార్గదర్శక పత్రాలతో సుందరమైన ఇంగ్లీష్ కర్సివ్ మరియు ప్రింట్ అక్షరాలు
          నేర్చుకోండి — స్కూల్ నోట్‌బుక్‌లు మరియు పరీక్షా పేపర్లకు అనువైనది.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Letter formation drills · అక్షర నిర్మాణ అభ్యాసాలు
          </li>
          <li>
            Word and sentence practice · పదాలు మరియు వాక్య అభ్యాసం
          </li>
          <li>
            Speed with neatness goals · వేగం తో పాటు అందం
          </li>
        </ul>
      </div>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
