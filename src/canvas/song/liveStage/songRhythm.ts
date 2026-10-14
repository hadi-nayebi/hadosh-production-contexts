import rhythm from "./full-song-rhythm.json";
/** Short, damped per-object accents. Bands are onset candidates, not certified beats. */
export function bandPulse(frame: number, band: "low" | "mid" | "high", id = "") {
  const ms = (frame * 1000) / 30;
  // Different components select different subdivisions; no shared whole-scene wobble.
  const phase = [...id].reduce((n, c) => n + c.charCodeAt(0), 0) % 3;
  const event = rhythm.bands[band].events.filter((e, i) => i % 3 === phase && e.ms <= ms).pop();
  if (!event || ms - event.ms > 180) return 0;
  return event.strength * Math.exp(-(ms - event.ms) / 65);
}
