import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "GEMS Tuition Center" };

export default function TuitionPage() {
  return (
    <InfoPage title={ui.tuitionCenter} backHref="/earning" accent="#1a4f8a">
      <p className="text-lg leading-relaxed">
        Join the GEMS Tuition Center as a trained facilitator. Conduct batch
        classes for Pre-Beginner to Standard levels in your neighbourhood.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        శిక్షణ పొందిన ఫెసిలిటేటర్‌గా GEMS ట్యూషన్ సెంటర్‌లో చేరండి. మీ ప్రాంతంలో
        ప్రీ-బిగినర్ నుండి స్టాండర్డ్ స్థాయి బ్యాచ్‌లు నడపండి.
      </p>
    </InfoPage>
  );
}
