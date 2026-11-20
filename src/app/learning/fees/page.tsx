import { SiteShell } from "@/components/SiteShell";
import { HexButton } from "@/components/HexButton";
import { NavFooter } from "@/components/NavFooter";
import { Bilingual } from "@/components/Bilingual";
import { feePlans, ui } from "@/lib/content";

export const metadata = { title: "Fee Details" };

export default function FeesPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter font-display text-3xl font-bold text-[#b01e2e]">
        {ui.feeDetails.en}
      </h1>
      <p className="font-telugu anim-enter text-lg text-[#3a5a7a]">
        {ui.feeDetails.te}
      </p>

      <ul className="anim-enter-delay-1 mt-8 space-y-4">
        {feePlans.map((plan) => (
          <li
            key={plan.level.en}
            className="rounded-2xl border border-[#c5d8e8] bg-white/75 p-5 shadow-sm backdrop-blur-sm"
          >
            <p className="font-display text-xl font-semibold text-[#0d355f]">
              {plan.level.en}
            </p>
            <p className="font-telugu text-sm text-[#4a6a8a]">{plan.level.te}</p>
            <p className="mt-3 text-2xl font-bold text-[#1a4f8a]">
              {plan.monthly.en}
            </p>
            <p className="font-telugu text-sm text-[#3a5a7a]">
              {plan.monthly.te}
            </p>
            <p className="mt-2 text-sm text-[#4a6a8a]">{plan.note.en}</p>
            <p className="font-telugu text-xs text-[#4a6a8a]">{plan.note.te}</p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-sm text-[#4a6a8a]">
        Sample fees for illustration · వివరణ కోసం నమూనా ఫీజులు
      </p>

      <div className="mt-8 flex justify-center">
        <HexButton href="/learning/pay" variant="green" size="md">
          <Bilingual
            text={ui.payFee}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
      </div>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
