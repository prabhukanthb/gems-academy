import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Concept Videos" };

export default function ConceptVideosPage() {
  return (
    <InfoPage title={ui.conceptVideos} backHref="/learning" accent="#b01e2e">
      <p className="text-lg leading-relaxed">
        Short concept videos explain each topic with on-screen English and
        Telugu captions so every learner can follow along.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        చిన్న కాన్సెప్ట్ వీడియోలు ప్రతి అంశాన్ని స్క్రీన్‌పై ఇంగ్లీష్ మరియు తెలుగు
        కాప్షన్‌లతో వివరిస్తాయి, కాబట్టి ప్రతి విద్యార్థి అనుసరించగలరు.
      </p>
    </InfoPage>
  );
}
