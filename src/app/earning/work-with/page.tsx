import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Work With GEMS" };

export default function WorkWithPage() {
  return (
    <InfoPage title={ui.workWith} backHref="/earning" accent="#d06820">
      <p className="text-lg leading-relaxed">
        Partner with GEMS as content creators, demo hosts, centre managers, or
        campus ambassadors. Grow with the academy while earning.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        కంటెంట్ క్రియేటర్లు, డెమో హోస్ట్‌లు, సెంటర్ మేనేజర్లు లేదా క్యాంపస్
        అంబాసిడర్లుగా GEMS తో భాగస్వామ్యం చేయండి. సంపాదిస్తూ అకాడమీతో
        ఎదగండి.
      </p>
    </InfoPage>
  );
}
