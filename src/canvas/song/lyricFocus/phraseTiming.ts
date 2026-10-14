import type { Annotation } from "./audioAnnotation";
import { wordTiming, wordTimingProblem, wordTimingStructureProblem } from "./wordTiming";
export type PhraseInterval = {
  id: string;
  first: number;
  last: number;
  start: number;
  end: number;
  revision: number;
};
export function phraseIntervals(a: Annotation): PhraseInterval[] {
  const groups = new Map<string, { first: number; last: number }>();
  a.items.forEach((w, i) => {
    if (w.phraseId) {
      const p = groups.get(w.phraseId);
      if (p) p.last = i;
      else groups.set(w.phraseId, { first: i, last: i });
    }
  });
  return [...groups].map(
    ([id, p]) =>
      a.phraseTiming?.find((q) => q.id === id) ?? {
        id,
        ...p,
        start: a.boundaries[p.first],
        end: a.boundaries[p.last + 1],
        revision: 1,
      },
  );
}
export function phraseAt(a: Annotation, first: number, last: number) {
  const p = phraseIntervals(a).find((p) => p.first === first && p.last === last);
  if (!p) throw Error("Unknown phrase interval.");
  return p;
}
export function phraseLimits(a: Annotation, p: PhraseInterval, edge: "start" | "end") {
  const group = a.items[p.first].groupId,
    first = a.items.findIndex((i) => i.groupId === group);
  let last = first;
  while (last + 1 < a.items.length && a.items[last + 1].groupId === group) last++;
  return edge === "start"
    ? { min: a.boundaries[first], max: p.end - 0.000001 }
    : { min: p.start + 0.000001, max: a.boundaries[last + 1] };
}
export function changePhrase(
  a: Annotation,
  id: string,
  edge: "start" | "end" | "move",
  value: number,
): Annotation {
  const before = phraseIntervals(a),
    p = before.find((p) => p.id === id);
  if (!p || !Number.isFinite(value)) throw Error("Invalid phrase adjustment.");
  const next = structuredClone(a),
    after = structuredClone(before),
    q = after.find((p) => p.id === id)!;
  if (edge === "move") {
    q.start += value;
    q.end += value;
  } else q[edge] = value;
  if (q.end <= q.start) throw Error("Phrase start must be before its end.");
  const children = new Set(a.items.slice(p.first, p.last + 1).map((w) => w.id));
  const timing = structuredClone(wordTiming(a)),
    beforeWords = structuredClone(timing.intervals);
  const scale = (q.end - q.start) / (p.end - p.start);
  const transform = (time: number) =>
    edge === "move"
      ? time + value
      : edge === "start"
        ? p.end + (time - p.end) * scale
        : p.start + (time - p.start) * scale;
  for (const w of timing.intervals)
    if (children.has(w.id)) {
      w.start = transform(w.start);
      w.end = transform(w.end);
    }
  // Edge resizing may temporarily conflict with an external word. Keep that
  // recoverable state; never move the neighbour or reject subsequent correction.
  const problem = (edge === "move" ? wordTimingProblem : wordTimingStructureProblem)(
    a,
    timing.intervals,
  );
  if (problem) throw Error(problem);
  const group = a.items[p.first].groupId,
    indices = a.items.flatMap((w, i) => (w.groupId === group ? [i] : []));
  if (
    q.start < a.boundaries[indices[0]] ||
    q.end > a.boundaries[indices.at(-1)! + 1] ||
    q.end <= q.start
  )
    throw Error("Keep this phrase inside its section.");
  if (q.start === p.start && q.end === p.end) return a;
  q.revision++;
  next.history.push({ revision: a.revision, boundaries: [...a.boundaries], manual: [...a.manual] });
  next.undoStack.push({
    boundaries: [...a.boundaries],
    manual: [...a.manual],
    phrases: { before, after },
    words: { before: beforeWords, after: structuredClone(timing.intervals) },
  });
  next.revision++;
  next.phraseTiming = after;
  {
    timing.history.push(beforeWords);
    timing.undo.push(structuredClone(beforeWords));
    timing.revision++;
    next.wordTiming = timing;
  }
  return next;
}
export function validatePhraseTiming(a: Annotation) {
  if (a.phraseTiming === undefined) return;
  const expected = phraseIntervals({ ...a, phraseTiming: undefined });
  if (!Array.isArray(a.phraseTiming) || a.phraseTiming.length !== expected.length)
    throw Error("Independent phrase timing must contain every source phrase.");
  const ids = new Set<string>();
  for (const p of a.phraseTiming) {
    if (
      !p ||
      ids.has(p.id) ||
      !expected.some((q) => q.id === p.id && q.first === p.first && q.last === p.last) ||
      !Number.isInteger(p.first) ||
      !Number.isInteger(p.last) ||
      p.first < 0 ||
      p.last < p.first ||
      p.last >= a.items.length ||
      a.items[p.first].phraseId !== p.id ||
      a.items[p.last].phraseId !== p.id ||
      !Number.isFinite(p.start) ||
      !Number.isFinite(p.end) ||
      p.start < 0 ||
      p.end > a.duration ||
      p.end <= p.start ||
      !Number.isInteger(p.revision) ||
      p.revision < 1
    )
      throw Error("Invalid independent phrase timing.");
    ids.add(p.id);
  }
}
