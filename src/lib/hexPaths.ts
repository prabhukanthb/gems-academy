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

/**
 * Closed polygon with circular-arc fillets at every corner.
 * Looks soft/rounded rather than quadratic tips that stay pointed.
 */
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

    const v1x = prev[0] - curr[0];
    const v1y = prev[1] - curr[1];
    const v2x = next[0] - curr[0];
    const v2y = next[1] - curr[1];
    const len1 = Math.hypot(v1x, v1y) || 1;
    const len2 = Math.hypot(v2x, v2y) || 1;
    const u1x = v1x / len1;
    const u1y = v1y / len1;
    const u2x = v2x / len2;
    const u2y = v2y / len2;

    const dot = Math.max(-1, Math.min(1, u1x * u2x + u1y * u2y));
    const angle = Math.acos(dot);
    const half = angle / 2;
    const tanHalf = Math.tan(half) || 1e-6;
    const dist = Math.min(radius / tanHalf, len1 * 0.42, len2 * 0.42);
    const r = dist * tanHalf;

    const p1x = curr[0] + u1x * dist;
    const p1y = curr[1] + u1y * dist;
    const p2x = curr[0] + u2x * dist;
    const p2y = curr[1] + u2y * dist;

    // Cross product of outward edge directions: choose the short arc
    // that rounds toward the vertex (cuts the sharp tip).
    // SVG y-down: invert the usual math-space sweep.
    const cross = u1x * u2y - u1y * u2x;
    const sweep = cross < 0 ? 1 : 0;

    if (i === 0) d += `M${p1x.toFixed(2)} ${p1y.toFixed(2)} `;
    else d += `L${p1x.toFixed(2)} ${p1y.toFixed(2)} `;
    d += `A${r.toFixed(2)} ${r.toFixed(2)} 0 0 ${sweep} ${p2x.toFixed(2)} ${p2y.toFixed(2)} `;
  }
  return `${d}Z`;
}

/** Smooth gold-rim outer hex. */
export const HEX_ROUNDED = roundedPolygon(OUTER_POINTS, 11);

/** Smooth inner face hex. */
export const INNER_ROUNDED = roundedPolygon(INNER_POINTS, 9);

/** Pointy-top hex centered at (cx, cy) with outer radius r and soft corners. */
export function roundedHexAt(
  cx: number,
  cy: number,
  r: number,
  cornerRadius = r * 0.2,
): string {
  const points: [number, number][] = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  return roundedPolygon(points, cornerRadius);
}
