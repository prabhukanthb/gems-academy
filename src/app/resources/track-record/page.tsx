import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Our Track Record" };

export default function TrackRecordPage() {
  return (
    <InfoPage title={ui.ourTrack} backHref="/hub" accent="#7a1838">
      <ul className="space-y-3 text-lg">
        <li>
          500+ learners across Telugu-speaking regions
          <span className="font-telugu block text-sm text-[#4a6a8a]">
            తెలుగు ప్రాంతాల్లో 500+ విద్యార్థులు
          </span>
        </li>
        <li>
          Levels from Pre-Beginner to Professional
          <span className="font-telugu block text-sm text-[#4a6a8a]">
            ప్రీ-బిగినర్ నుండి ప్రొఫెషనల్ వరకు స్థాయులు
          </span>
        </li>
        <li>
          Home tutors earning while teaching
          <span className="font-telugu block text-sm text-[#4a6a8a]">
            బోధిస్తూ సంపాదిస్తున్న హోమ్ ట్యూటర్లు
          </span>
        </li>
      </ul>
      <p className="mt-4 text-xs text-[#4a6a8a]">
        Sample figures for the blueprint site · బ్లూప్రింట్ సైట్ కోసం నమూనా
        గణాంకాలు
      </p>
    </InfoPage>
  );
}
