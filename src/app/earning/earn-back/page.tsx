import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Earn Back Your Fee" };

export default function EarnBackPage() {
  return (
    <InfoPage title={ui.earnBack} backHref="/earning" accent="#1a4f8a">
      <p className="text-lg leading-relaxed">
        Eligible learners can recover course fees by referring families,
        assisting junior batches, or joining the Home Tutors programme.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        అర్హులైన విద్యార్థులు కుటుంబాలను సూచించడం, జూనియర్ బ్యాచ్‌లకు సహాయం
        చేయడం లేదా హోమ్ ట్యూటర్ల కార్యక్రమంలో చేరడం ద్వారా కోర్సు ఫీజు తిరిగి
        సంపాదించవచ్చు.
      </p>
    </InfoPage>
  );
}
