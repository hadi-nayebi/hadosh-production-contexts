const clamp = (v: number) => Math.max(0, Math.min(1, v));
/** One camera shared across the room/chorus owner boundary; no reset on the cut. */
export function doorCamera(time: number, chorusStart: number) {
  const duration = 1.47,
    start = chorusStart - 1.55;
  const u = clamp((time - start) / duration),
    p = u * u * (3 - 2 * u);
  const logScale = Math.log(6.8) * (-2 * u ** 3 + 3 * u ** 2) + 0.12 * duration * (u ** 3 - u ** 2);
  return {
    scale: Math.exp(logScale + 0.12 * Math.max(0, time - start - duration)),
    x: -17.5 * p,
    y: 9 * p,
    progress: p,
    worldOpacity: clamp((time - chorusStart) / 0.32),
  };
}
