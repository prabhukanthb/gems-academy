import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import { ui } from "@/lib/content";

export const metadata = { title: "Pay the Fee" };

export default function PayPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#1e7a3a]">
        {ui.payFee.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.payFee.te}
      </p>

      <div className="anim-enter-delay-1 mt-8 space-y-5 rounded-2xl border border-[#c5d8e8] bg-white/75 p-6 shadow-sm">
        <section>
          <h2 className="font-display text-lg font-semibold text-[#0d355f]">
            How to pay · చెల్లించే విధానం
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#1a2a3a]">
            <li>
              <span>Choose your course level from Fee Details.</span>
              <span className="font-telugu block text-sm text-[#4a6a8a]">
                ఫీజు వివరాల నుండి మీ కోర్సు స్థాయిని ఎంచుకోండి.
              </span>
            </li>
            <li>
              <span>Transfer to the account below or pay via Google Pay / PhonePe.</span>
              <span className="font-telugu block text-sm text-[#4a6a8a]">
                క్రింది ఖాతాకు బదిలీ చేయండి లేదా Google Pay / PhonePe ద్వారా చెల్లించండి.
              </span>
            </li>
            <li>
              <span>Share the payment screenshot via Contact Us.</span>
              <span className="font-telugu block text-sm text-[#4a6a8a]">
                చెల్లింపు స్క్రీన్‌షాట్‌ను Contact Us ద్వారా పంపండి.
              </span>
            </li>
          </ol>
        </section>

        <div className="rounded-xl bg-[#eef6ee] p-4">
          <p className="font-display font-semibold text-[#0d355f]">
            Bank account · బ్యాంక్ ఖాతా
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#1a2a3a]">
            <span className="font-semibold">Name:</span> Kiron Satyamurthy
            <br />
            <span className="font-semibold">Bank:</span> State Bank of India
            <br />
            <span className="font-semibold">Account No:</span> 62456080486
            <br />
            <span className="font-semibold">IFSC:</span> SBIN0020337
            <br />
            <span className="font-semibold">Branch:</span> Garla Branch
            <br />
            <span className="font-semibold">District:</span> Mahabubabad District
            <br />
            <span className="font-semibold">State:</span> Telangana
          </p>
          <p className="mt-4 font-display font-semibold text-[#0d355f]">
            Google Pay / PhonePe
          </p>
          <p className="mt-1 text-sm text-[#1a2a3a]">
            <span className="font-semibold">Mobile:</span>{" "}
            <a
              href="tel:9494447457"
              className="text-[#0d6a3a] underline-offset-2 hover:underline"
            >
              9494447457
            </a>
          </p>
        </div>
      </div>

      <NavFooter backHref="/learning/fees" />
    </SiteShell>
  );
}
