import type { Bilingual as BilingualText } from "@/lib/content";

type Props = {
  text: BilingualText;
  className?: string;
  teClassName?: string;
  enClassName?: string;
  stack?: boolean;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
};

export function Bilingual({
  text,
  className = "",
  teClassName = "",
  enClassName = "",
  stack = true,
  as: Tag = "div",
}: Props) {
  if (!stack) {
    return (
      <Tag className={className}>
        <span className={enClassName}>{text.en}</span>
        <span className="mx-1.5 opacity-50" aria-hidden>
          ·
        </span>
        <span className={`font-telugu ${teClassName}`}>{text.te}</span>
      </Tag>
    );
  }

  return (
    <Tag className={`flex flex-col gap-0.5 ${className}`}>
      <span className={enClassName}>{text.en}</span>
      <span className={`font-telugu opacity-90 ${teClassName}`}>{text.te}</span>
    </Tag>
  );
}
