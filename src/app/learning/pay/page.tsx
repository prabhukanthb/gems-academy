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
              <span>Transfer to the GEMS Academy account below.</span>
              <span className="font-telugu block text-sm text-[#4a6a8a]">
                క్రింది GEMS అకాడమీ ఖాతాకు బదిలీ చేయండి.
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
            Sample account · నమూనా ఖాతా
          </p>
          <p className="mt-2 text-sm">
            Account Name: GEMS Academy
            <br />
            Bank: Sample Bank of India
            <br />
            Account No: 0000 0000 0000
            <br />
            IFSC: SAMP0001234
            <br />
            UPI: gems@sampleupi
          </p>
          <p className="mt-3 text-xs text-[#4a6a8a]">
            Replace with real payment details before going live · ప్రత్యక్షం
            చేసే ముందు నిజమైన చెల్లింపు వివరాలతో మార్చండి
          </p>
        </div>
      </div>

      <NavFooter backHref="/learning/fees" />
    </SiteShell>
  );
}
