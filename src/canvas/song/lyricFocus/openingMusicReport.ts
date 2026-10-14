import type { Annotation } from "./audioAnnotation";
import {
  openingDefaults,
  openingMoonStart,
  openingEvents,
  openingImageStages,
  openingLanding,
  type OpeningDirection,
} from "./openingDirection";
import { openingBounds } from "./openingDirection";
import { roomArrival } from "./roomDirection";
import { audioAssetsFor } from "./stemAnalysis";
import { moonCues } from "./MoonEraClock";
/** Onset proximity is a measurable timing check, not artistic approval. */
export function openingMusicReport(a: Annotation, d: OpeningDirection = openingDefaults) {
  if (!openingBounds(a)) return null;
  const source = audioAssetsFor(a.audioHash);
  const drums =
    source?.lanes.find((l) => l.id === "stem-drums")?.events.filter((e) => e.strength >= 0.25) ??
    [];
  const keyboard = source?.lanes.find((l) => l.id === "stem-keyboard")?.events ?? [];
  if (!drums.length) return null;
  const events = openingEvents(d),
    birth = events.find((e) => e.id === "web-birth")!.time;
  const cues: { id: string; kind: string; lane: "drums" | "keyboard"; time: number }[] = [];
  for (const e of events) {
    if (e.kind === "falling-asset" || e.kind === "question")
      cues.push({ id: e.id, kind: "entrance", lane: "drums", time: e.time });
    if (e.kind === "falling-asset")
      cues.push({ id: e.id, kind: "landing", lane: "drums", time: openingLanding(e.time) });
  }
  for (const e of openingImageStages(d).filter((e) => e.imageIndex! > 0))
    cues.push({ id: e.id, kind: "picture-change", lane: "drums", time: e.time });
  for (const e of moonCues(a.audioHash, openingMoonStart(a, d), birth).slice(1))
    cues.push({ id: `moon-phase-${e.phase}`, kind: "phase-change", lane: "drums", time: e.time });
  for (const [i, e] of keyboard
    .filter(
      (e) =>
        e.time >= birth - 0.03 &&
        e.time < (roomArrival(a)?.start ?? a.duration) &&
        e.strength >= 0.5,
    )
    .slice(0, 4)
    .entries())
    cues.push({
      id: `web-burst-${i}`,
      kind: "burst",
      lane: "keyboard",
      time: Math.max(birth, e.time),
    });
  const rows = cues.map((c) => {
    const lane = c.lane === "drums" ? drums : keyboard;
    const hit = lane.reduce((p, e) =>
      Math.abs(e.time - c.time) < Math.abs(p.time - c.time) ? e : p,
    );
    const errorMs = Math.abs(hit.time - c.time) * 1000;
    return { ...c, sourceEvent: hit.id, sourceTime: hit.time, errorMs, within50ms: errorMs <= 50 };
  });
  return {
    criterion:
      "Nearest selected musical onset within50ms; static initial states excluded. Not a visual quality rating.",
    eventCount: rows.length,
    matched: rows.filter((e) => e.within50ms).length,
    score: Math.round((100 * rows.filter((e) => e.within50ms).length) / rows.length),
    maxErrorMs: Math.max(...rows.map((e) => e.errorMs)),
    meanErrorMs: rows.reduce((n, e) => n + e.errorMs, 0) / rows.length,
    events: rows,
  };
}
