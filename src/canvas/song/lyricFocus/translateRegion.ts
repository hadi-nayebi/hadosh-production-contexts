import { changePhrase } from "./phraseTiming";
import { type Annotation } from "./audioAnnotation";
import type { Anchor } from "./anchorReview";
import { wordTiming, wordTimingProblem } from "./wordTiming";
export function clampRegionDelta(a: Annotation, start: Anchor, end: Anchor, delta: number) {
  const children = new Set(a.items.slice(start.index, end.index).map((w) => w.id));
  const words = wordTiming(a).intervals.filter((w) =>
    start.wordIndex !== undefined ? w.id === a.items[start.wordIndex].id : children.has(w.id),
  );
  const earliest = Math.min(start.time, ...words.map((w) => w.start));
  const latest = Math.max(end.time, ...words.map((w) => w.end));
  return Math.max(-earliest, Math.min(a.duration - latest, delta));
}
/** Phrase translation moves its explicit source children by the same delta. */
export function translateRegion(
  a: Annotation,
  start: Anchor,
  end: Anchor,
  delta: number,
): Annotation {
  if (!Number.isFinite(delta)) throw Error("Enter a finite interval move.");
  delta = clampRegionDelta(a, start, end, delta);
  if (delta === 0) return a;
  if (start.phraseId && start.phraseId === end.phraseId)
    return changePhrase(a, start.phraseId, "move", delta);
  const next = structuredClone(a);
  if (start.wordIndex !== undefined && start.wordIndex === end.wordIndex) {
    const timing = structuredClone(wordTiming(a)),
      before = structuredClone(timing.intervals),
      w = timing.intervals.find((w) => w.id === a.items[start.wordIndex!].id)!;
    w.start += delta;
    w.end += delta;
    const problem = wordTimingProblem(a, timing.intervals);
    if (problem) throw Error(problem);
    timing.history.push(before);
    timing.undo.push(structuredClone(before));
    timing.revision++;
    next.wordTiming = timing;
    return next;
  }
  throw Error("Choose an explicit phrase or word interval to move.");
}
