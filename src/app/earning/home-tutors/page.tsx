import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "GEMS Home Tutors" };

export default function HomeTutorsPage() {
  return (
    <InfoPage title={ui.homeTutors} backHref="/earning" accent="#b01e2e">
      <p className="text-lg leading-relaxed">
        Become a GEMS Home Tutor. Teach English one-to-one at student homes or
        online after completing our facilitator training.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        GEMS హోమ్ ట్యూటర్ అవ్వండి. మా ఫెసిలిటేటర్ శిక్షణ పూర్తి చేసిన తర్వాత
        విద్యార్థుల ఇళ్లలో లేదా ఆన్‌లైన్‌లో వ్యక్తిగతంగా ఇంగ్లీష్ బోధించండి.
      </p>
    </InfoPage>
  );
}
