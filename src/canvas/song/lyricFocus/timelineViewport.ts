export function clampViewport(start: number, span: number, duration: number) {
  const length = Math.min(duration, Math.max(0.25, span));
  return { start: Math.max(0, Math.min(duration - length, start)), span: length };
}
/** The same source time remains under the pointer, except at recording edges. */
export function zoomViewport(
  start: number,
  span: number,
  duration: number,
  factor: number,
  fraction: number,
  targetFraction = fraction,
) {
  const f = Math.max(0, Math.min(1, fraction));
  const next = clampViewport(start, span / factor, duration);
  return clampViewport(
    start + span * f - next.span * Math.max(0, Math.min(1, targetFraction)),
    next.span,
    duration,
  );
}
