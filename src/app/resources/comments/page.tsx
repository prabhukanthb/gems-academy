import { InfoPage } from "@/components/InfoPage";
import { ui } from "@/lib/content";

export const metadata = { title: "Your Comments" };

export default function CommentsPage() {
  return (
    <InfoPage title={ui.yourComments} backHref="/learning" accent="#1e7a3a">
      <p className="text-lg leading-relaxed">
        Share feedback about your GEMS experience. Write in English or Telugu —
        we read both.
      </p>
      <p className="font-telugu leading-relaxed text-[#3a5a7a]">
        మీ GEMS అనుభవం గురించి అభిప్రాయం పంచుకోండి. ఇంగ్లీష్ లేదా తెలుగులో
        రాయండి — మేము రెండూ చదువుతాము.
      </p>
      <form className="mt-4 space-y-3" action="#" method="get">
        <label className="block text-sm font-medium text-[#0d355f]">
          Your message · మీ సందేశం
          <textarea
            name="comment"
            rows={4}
            className="mt-1 w-full rounded-xl border border-[#c5d8e8] bg-white px-3 py-2 text-base outline-none focus:border-[#1a4f8a]"
            placeholder="Type here… / ఇక్కడ టైప్ చేయండి…"
          />
        </label>
        <button
          type="button"
          className="rounded-full bg-[#1e7a3a] px-5 py-2.5 text-sm font-semibold text-white shadow-md"
        >
          Send · పంపండి
        </button>
        <p className="text-xs text-[#4a6a8a]">
          Demo form — wire to email or WhatsApp when you go live.
        </p>
      </form>
    </InfoPage>
  );
}
