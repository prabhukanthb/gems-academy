import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Demo Videos" };

export default function DemoVideosPage() {
  return (
    <InfoPage title={ui.demoVideos} backHref="/learning" accent="#d06820">
      <p className="text-lg leading-relaxed">
        Watch sample classroom demos for each level. Videos include English
        instruction with Telugu support lines.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        ప్రతి స్థాయికి నమూనా తరగతి డెమోలు చూడండి. వీడియోలలో ఇంగ్లీష్ బోధనతో
        పాటు తెలుగు సహాయ పంక్తులు ఉంటాయి.
      </p>
    </InfoPage>
  );
}
