import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { GlossHex } from "@/components/GlossHex";
import { HexHoneycomb } from "@/components/HexHoneycomb";
import { NavFooter } from "@/components/NavFooter";
import { getLevel, levels, topics, ui } from "@/lib/content";

type Props = {
  params: Promise<{ level: string }>;
};

export async function generateStaticParams() {
  return levels.map((l) => ({ level: l.id }));
}

export async function generateMetadata({ params }: Props) {
  const { level: id } = await params;
  const level = getLevel(id);
  if (!level) return { title: "Level" };
  return { title: `${level.name.en} · Learning` };
}

export default async function LevelPage({ params }: Props) {
  const { level: id } = await params;
  const level = getLevel(id);
  if (!level) notFound();

  const opening = topics.filter((t) => t.group === "opening");
  const core = topics.filter((t) => t.group === "core");

  return (
    <SiteShell wide>
      <div
        className="anim-enter rounded-2xl px-5 py-4 text-white shadow-lg"
        style={{ background: level.color }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
          {ui.sampleContent.en}
        </p>
        <h1 className="font-display mt-1 text-3xl font-bold">{level.name.en}</h1>
        <p className="font-telugu text-lg text-white/95">{level.name.te}</p>
        <p className="mt-2 text-sm text-white/85">{level.description.en}</p>
        <p className="font-telugu text-xs text-white/75">
          {level.description.te}
        </p>
      </div>

      <div className="anim-enter-delay-1 mt-8">
        <h2 className="font-display text-xl font-semibold text-[#0d355f]">
          {ui.sampleContent.en}
        </h2>
        <p className="font-telugu text-sm text-[#3a5a7a]">
          {ui.sampleContent.te}
        </p>

        <ul className="topic-list mt-4 space-y-2 font-display text-lg text-[#1a2a3a]">
          {opening.map((topic) => (
            <li key={topic.id} className="flex items-start gap-2">
              <span className="mt-2 text-xs text-[#0d355f]" aria-hidden>
                ◆
              </span>
              <Link
                href={`/learning/${level.id}/${topic.id}`}
                className="hover:underline"
              >
                <span>{topic.title.en}</span>
                <span className="font-telugu ml-2 text-sm text-[#4a6a8a]">
                  {topic.title.te}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="my-5 h-1 rounded-full bg-[#b01e2e]/40" />

        <ul className="topic-list space-y-2 font-display text-lg text-[#1a2a3a]">
          {core.map((topic) => (
            <li
              key={topic.id}
              className={`flex items-start gap-2 ${
                topic.highlight ? "justify-center py-2" : ""
              }`}
            >
              {!topic.highlight ? (
                <span className="mt-2 text-xs text-[#0d355f]" aria-hidden>
                  ◆
                </span>
              ) : null}
              <Link
                href={`/learning/${level.id}/${topic.id}`}
                className={`hover:underline ${
                  topic.highlight
                    ? "font-brand text-2xl font-bold text-[#0d355f]"
                    : ""
                }`}
              >
                <span>{topic.title.en}</span>
                <span
                  className={`font-telugu ml-2 text-[#4a6a8a] ${
                    topic.highlight ? "block text-center text-base" : "text-sm"
                  }`}
                >
                  {topic.title.te}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="anim-enter-delay-2 mt-10">
        <HexHoneycomb perRow={4}>
          <GlossHex
            href="/resources/track-record"
            variant="maroon"
            size="sm"
            titleEn={"OUR TRACK\nRECORD"}
            titleTe={ui.ourTrack.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/concept-cards"
            variant="green"
            size="sm"
            titleEn={"CONCEPT\nCARDS"}
            titleTe={ui.conceptCards.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/concept-videos"
            variant="red"
            size="sm"
            titleEn={"CONCEPT\nVIDEOS"}
            titleTe={ui.conceptVideos.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/testimonials"
            variant="orange"
            size="sm"
            titleEn="TESTIMONIALS"
            titleTe={ui.testimonials.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/faqs"
            variant="purple"
            size="sm"
            titleEn={ui.faqs.en}
            titleTe={ui.faqs.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/demo-videos"
            variant="gold"
            size="sm"
            titleEn={"DEMO\nVIDEOS"}
            titleTe={ui.demoVideos.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/comments"
            variant="green"
            size="sm"
            titleEn={"YOUR\nCOMMENTS"}
            titleTe={ui.yourComments.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
          <GlossHex
            href="/resources/contact"
            variant="pink"
            size="sm"
            titleEn={"CONTACT\nUS"}
            titleTe={ui.contactUs.te}
            highlightAccent={false}
            className="hex-cell-fill"
          />
        </HexHoneycomb>
      </div>

      <NavFooter backHref="/learning" />
    </SiteShell>
  );
}
