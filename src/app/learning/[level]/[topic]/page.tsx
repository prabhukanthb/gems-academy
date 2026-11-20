import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { NavFooter } from "@/components/NavFooter";
import {
  getLevel,
  getTopic,
  levels,
  topics,
} from "@/lib/content";

type Props = {
  params: Promise<{ level: string; topic: string }>;
};

export async function generateStaticParams() {
  return levels.flatMap((l) =>
    topics.map((t) => ({ level: l.id, topic: t.id })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) return { title: "Topic" };
  return { title: topic.title.en };
}

export default async function TopicPage({ params }: Props) {
  const { level: levelId, topic: topicId } = await params;
  const level = getLevel(levelId);
  const topic = getTopic(topicId);
  if (!level || !topic) notFound();

  return (
    <SiteShell>
      <article className="anim-enter">
        <p className="text-sm font-medium uppercase tracking-wide text-[#4a6a8a]">
          {level.name.en} · {level.name.te}
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-[#0d355f] sm:text-4xl">
          {topic.title.en}
        </h1>
        <p className="font-telugu mt-1 text-xl text-[#3a5a7a]">
          {topic.title.te}
        </p>

        <div className="mt-8 space-y-6 rounded-2xl border border-[#c5d8e8] bg-white/70 p-6 shadow-sm backdrop-blur-sm">
          <section>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[#1a4f8a]">
              English
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-[#1a2a3a]">
              {topic.body.en}
            </p>
          </section>
          <div className="h-px bg-[#b01e2e]/30" />
          <section>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[#1a4f8a]">
              తెలుగు
            </h2>
            <p className="font-telugu mt-2 text-lg leading-relaxed text-[#1a2a3a]">
              {topic.body.te}
            </p>
          </section>
        </div>

        <p className="mt-6 text-center text-sm text-[#4a6a8a]">
          Sample content page · నమూనా విషయ పేజీ
        </p>
      </article>

      <NavFooter backHref={`/learning/${level.id}`} />
    </SiteShell>
  );
}
