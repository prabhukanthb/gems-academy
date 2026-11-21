import { InfoPage } from "@/components/InfoPage";
import { ui, brand } from "@/lib/content";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <InfoPage title={ui.contactUs} backHref="/learning" accent="#7a1838">
      <p className="text-lg leading-relaxed">
        Reach GEMS Academy for admissions, fees, and tutor programmes.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        అడ్మిషన్లు, ఫీజులు మరియు ట్యూటర్ కార్యక్రమాల కోసం GEMS అకాడమీని
        సంప్రదించండి.
      </p>
      <ul className="mt-4 space-y-2 text-[#1a2a3a]">
        <li>
          <strong>Website:</strong> {brand.domain}
        </li>
        <li>
          <strong>Email:</strong> hello@gemsacademy.in
        </li>
        <li>
          <strong>Phone / WhatsApp / Google Pay / PhonePe:</strong>{" "}
          <a
            href="tel:9494447457"
            className="text-[#0d6a3a] underline-offset-2 hover:underline"
          >
            9494447457
          </a>
        </li>
        <li>
          <strong>Hours:</strong> Mon–Sat, 9:00 AM – 7:00 PM IST
          <span className="font-telugu block text-sm text-[#4a6a8a]">
            సోమ–శని, ఉదయం 9:00 – సాయంత్రం 7:00
          </span>
        </li>
      </ul>
    </InfoPage>
  );
}
