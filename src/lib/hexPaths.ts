/** Pointy-top hex vertices in the shared 100×115.47 viewBox. */
export const HEX_VIEW = "0 0 100 115.47";

const OUTER_POINTS: [number, number][] = [
  [50, 1.2],
  [96.2, 28.9],
  [96.2, 86.6],
  [50, 114.3],
  [3.8, 86.6],
  [3.8, 28.9],
];

const INNER_POINTS: [number, number][] = [
  [50, 9.5],
  [88.5, 32.5],
  [88.5, 83],
  [50, 106],
  [11.5, 83],
  [11.5, 32.5],
];

/** Build a closed path with quadratic rounded corners. */
export function roundedPolygon(
  points: [number, number][],
  radius: number,
): string {
  const n = points.length;
  let d = "";
  for (let i = 0; i < n; i++) {
    const prev = points[(i + n - 1) % n];
    const curr = points[i];
    const next = points[(i + 1) % n];
    const toPrevX = prev[0] - curr[0];
    const toPrevY = prev[1] - curr[1];
    const toNextX = next[0] - curr[0];
    const toNextY = next[1] - curr[1];
    const lenPrev = Math.hypot(toPrevX, toPrevY) || 1;
    const lenNext = Math.hypot(toNextX, toNextY) || 1;
    const r = Math.min(radius, lenPrev * 0.45, lenNext * 0.45);
    const p1x = curr[0] + (toPrevX / lenPrev) * r;
    const p1y = curr[1] + (toPrevY / lenPrev) * r;
    const p2x = curr[0] + (toNextX / lenNext) * r;
    const p2y = curr[1] + (toNextY / lenNext) * r;
    if (i === 0) d += `M${p1x.toFixed(2)} ${p1y.toFixed(2)} `;
    else d += `L${p1x.toFixed(2)} ${p1y.toFixed(2)} `;
    d += `Q${curr[0]} ${curr[1]} ${p2x.toFixed(2)} ${p2y.toFixed(2)} `;
  }
  return `${d}Z`;
}

/** Smooth gold-rim outer hex. */
export const HEX_ROUNDED = roundedPolygon(OUTER_POINTS, 5.2);

/** Smooth inner face hex. */
export const INNER_ROUNDED = roundedPolygon(INNER_POINTS, 4.4);

/** Pointy-top hex centered at (cx, cy) with outer radius r and soft corners. */
export function roundedHexAt(
  cx: number,
  cy: number,
  r: number,
  cornerRadius = r * 0.14,
): string {
  const points: [number, number][] = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  return roundedPolygon(points, cornerRadius);
}
