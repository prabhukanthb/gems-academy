import { SiteShell } from "@/components/SiteShell";
import { HexButton } from "@/components/HexButton";
import { Bilingual } from "@/components/Bilingual";
import { ui } from "@/lib/content";

export const metadata = {
  title: "Choose Your Path",
};

export default function HubPage() {
  return (
    <SiteShell>
      <div className="flex flex-1 flex-col items-center py-4">
        <h1 className="anim-enter text-center font-display text-2xl font-semibold text-[#0d355f] sm:text-3xl">
          Choose your path
        </h1>
        <p className="anim-enter font-telugu mt-1 text-center text-[#3a5a7a]">
          మీ మార్గాన్ని ఎంచుకోండి
        </p>

        <div className="anim-enter-delay-1 mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          <HexButton
            href="/learning"
            variant="blue"
            size="xl"
            ariaLabel="Learning at GEMS"
            className="justify-self-center"
          >
            <Bilingual
              text={ui.learning}
              enClassName="text-lg sm:text-xl"
              teClassName="text-sm font-normal"
            />
          </HexButton>

          <HexButton
            href="/earning"
            variant="maroon"
            size="xl"
            ariaLabel="Earning at GEMS"
            className="justify-self-center"
          >
            <Bilingual
              text={ui.earning}
              enClassName="text-lg sm:text-xl"
              teClassName="text-sm font-normal"
            />
          </HexButton>
        </div>

        <div className="anim-enter-delay-2 mt-12">
          <HexButton href="/" variant="green" size="sm" ariaLabel="Home screen">
            <Bilingual
              text={ui.home}
              enClassName="text-[0.75rem]"
              teClassName="text-[0.65rem] font-normal"
            />
          </HexButton>
        </div>
      </div>
    </SiteShell>
  );
}
