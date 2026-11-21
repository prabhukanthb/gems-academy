import type { ReactNode } from "react";

type Props = {
  children: ReactNode[];
  /** Max cells per top row before wrapping to a staggered second row. */
  perRow?: number;
  className?: string;
};

/** Horizontal honeycomb with cream gaps; odd rows nest into valleys. */
export function HexHoneycomb({
  children,
  perRow = 4,
  className = "",
}: Props) {
  const items = children.filter(Boolean);
  const rows: ReactNode[][] = [];
  for (let i = 0; i < items.length; i += perRow) {
    rows.push(items.slice(i, i + perRow));
  }

  return (
    <div className={`hex-honeycomb ${className}`.trim()}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={`hex-row${ri % 2 === 1 ? " hex-row--stagger" : ""}`}
        >
          {row}
        </div>
      ))}
    </div>
  );
}
