import { SiteShell } from "@/components/SiteShell";
import { HexButton } from "@/components/HexButton";
import { HoneycombArt } from "@/components/HoneycombArt";
import { Bilingual } from "@/components/Bilingual";
import { ui } from "@/lib/content";

export const metadata = {
  title: "Choose Your Path",
};

export default function HubPage() {
  return (
    <SiteShell>
      <div className="relative flex flex-1 flex-col items-center py-4">
        <div className="pointer-events-none absolute -top-6 right-0 w-48 opacity-50 sm:w-64">
          <HoneycombArt density="soft" className="h-auto w-full" />
        </div>

        <h1 className="anim-enter relative z-10 text-center font-display text-2xl font-semibold text-[#0d3f68] sm:text-3xl">
          Choose your path
        </h1>
        <p className="anim-enter font-telugu relative z-10 mt-1 text-center text-[#5a4a28]">
          మీ మార్గాన్ని ఎంచుకోండి
        </p>
        <p className="anim-enter-delay-1 relative z-10 mt-2 max-w-sm text-center text-sm text-[#6a5a38]">
          A honeycomb of learning and earning — tap a cell to continue.
          <span className="font-telugu mt-1 block">
            నేర్చుకోవడం మరియు సంపాదన కలయిక — కొనసాగడానికి ఒక గూడును తాకండి.
          </span>
        </p>

        <div className="anim-enter-delay-2 honeycomb-cluster relative z-10 mt-10">
          <HexButton
            href="/learning"
            variant="blue"
            size="xl"
            ariaLabel="Learning at GEMS"
            className="cluster-learn"
          >
            <Bilingual
              text={ui.learning}
              enClassName="text-base sm:text-lg"
              teClassName="text-sm font-normal"
            />
          </HexButton>

          <HexButton
            href="/earning"
            variant="maroon"
            size="xl"
            ariaLabel="Earning at GEMS"
            className="cluster-earn"
          >
            <Bilingual
              text={ui.earning}
              enClassName="text-base sm:text-lg"
              teClassName="text-sm font-normal"
            />
          </HexButton>

          <HexButton
            href="/"
            variant="green"
            size="sm"
            ariaLabel="Home screen"
            className="cluster-home"
          >
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
