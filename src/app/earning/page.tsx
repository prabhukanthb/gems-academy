import { SiteShell } from "@/components/SiteShell";
import { HexButton } from "@/components/HexButton";
import { NavFooter } from "@/components/NavFooter";
import { Bilingual } from "@/components/Bilingual";
import { ui } from "@/lib/content";

export const metadata = { title: "Earning @ GEMS" };

export default function EarningPage() {
  return (
    <SiteShell>
      <h1 className="anim-enter text-center font-display text-2xl font-bold text-[#7a1838] sm:text-3xl">
        {ui.earning.en}
      </h1>
      <p className="font-telugu anim-enter text-center text-[#3a5a7a]">
        {ui.earning.te}
      </p>
      <p className="anim-enter-delay-1 mx-auto mt-3 max-w-md text-center text-sm text-[#4a6a8a]">
        Learn English and build income pathways with GEMS programmes.
        <span className="font-telugu mt-1 block">
          ఇంగ్లీష్ నేర్చుకుంటూ GEMS కార్యక్రమాలతో ఆదాయ మార్గాలు నిర్మించుకోండి.
        </span>
      </p>

      <div className="anim-enter-delay-2 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <HexButton
          href="/earning/tuition"
          variant="blue"
          size="lg"
          className="justify-self-center"
        >
          <Bilingual
            text={ui.tuitionCenter}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
        <HexButton
          href="/earning/home-tutors"
          variant="red"
          size="lg"
          className="justify-self-center"
        >
          <Bilingual
            text={ui.homeTutors}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
        <HexButton
          href="/earning/earn-back"
          variant="blue"
          size="lg"
          className="justify-self-center"
        >
          <Bilingual
            text={ui.earnBack}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
        <HexButton
          href="/earning/work-with"
          variant="orange"
          size="lg"
          className="justify-self-center"
        >
          <Bilingual
            text={ui.workWith}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
      </div>

      <div className="mt-8 flex justify-center">
        <HexButton href="/resources/track-record" variant="purple" size="md">
          <Bilingual
            text={ui.ourTrack}
            enClassName="text-sm"
            teClassName="text-[0.7rem] font-normal"
          />
        </HexButton>
      </div>

      <NavFooter backHref="/hub" />
    </SiteShell>
  );
}
