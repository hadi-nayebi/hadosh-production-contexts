import { phraseIntervals, validatePhraseTiming, type PhraseInterval } from "./phraseTiming";
import {
  validateWordTiming,
  wordTiming,
  wordTimingStructureProblem,
  type WordTiming,
  type WordInterval,
} from "./wordTiming";
import { validateReview, type Review } from "./anchorReview";
import type { Draft } from "./model";
import { lyricStamp } from "./arrangement";
import { songStructure } from "./structure";
export type Item = {
  id: string;
  groupId: string;
  phraseId?: string;
  kind: "lyric" | "instrumental" | "unassigned";
  text: string;
  confidence?: number | null;
  evidence?: string;
  observedStart?: number | null;
  observedEnd?: number | null;
};
export type Annotation = {
  schema: 1;
  phraseTiming?: PhraseInterval[];
  wordTiming?: WordTiming;
  review?: Review;
  audioHash: string;
  filename: string;
  duration: number;
  lyricStamp: string;
  revision: number;
  items: Item[];
  original: number[];
  boundaries: number[];
  manual: boolean[];
  history: { revision: number; boundaries: number[]; manual: boolean[] }[];
  basis: string;
  undoStack: {
    boundaries: number[];
    manual: boolean[];
    phrases?: { before: PhraseInterval[]; after: PhraseInterval[] };
    words?: { before: WordInterval[]; after: WordInterval[] };
  }[];
};
export function annotationItems(d: Draft): Item[] {
  return songStructure(d).flatMap<Item>((m) =>
    m.kind === "instrumental"
      ? [
          {
            id: m.id,
            groupId: m.id,
            kind: "instrumental" as const,
            text: m.label,
          },
        ]
      : d.units
          .find((u) => u.id === m.id)!
          .text.split(/\s+/)
          .filter(Boolean)
          .map((text, i) => ({
            id: `${m.id}:word:${i + 1}`,
            groupId: m.id,
            kind: "lyric" as const,
            text,
          })),
  );
}
export function freshAnnotation(
  d: Draft,
  audioHash: string,
  duration: number,
  filename: string,
): Annotation {
  if (
    !/^[a-f0-9]{64}$/.test(audioHash) ||
    !Number.isFinite(duration) ||
    duration <= 0 ||
    duration > 3600
  )
    throw new Error("Invalid audio identity or duration.");
  const items = annotationItems(d),
    weights = items.map((i) => (i.kind === "instrumental" ? 5 : 1)),
    total = weights.reduce((a, b) => a + b, 0);
  let cursor = 0;
  const boundaries = [0, ...weights.map((w) => ((cursor += w) / total) * duration)];
  boundaries[boundaries.length - 1] = duration;
  return {
    schema: 1,
    audioHash,
    filename,
    duration,
    lyricStamp: lyricStamp(d),
    revision: 1,
    items,
    original: [...boundaries],
    boundaries,
    manual: boundaries.map(() => false),
    history: [],
    undoStack: [],
    basis:
      "Unverified proportional anchors from lyric order, not speech recognition. Instrumental labels are intended, not detected. Audio itself is unchanged.",
  };
}
function validateTimes(times: number[], n: number, duration: number) {
  if (
    !Array.isArray(times) ||
    times.length !== n + 1 ||
    times[0] !== 0 ||
    times.at(-1) !== duration ||
    times.some((t, i) => !Number.isFinite(t) || (i > 0 && t <= times[i - 1]))
  )
    throw new Error(
      "Boundaries must cover the exact audio duration in positive ordered intervals.",
    );
}
export function parseAnnotation(
  raw: string,
  d: Draft,
  hash: string,
  duration: number,
  sourceTemplate?: Annotation,
): Annotation {
  if (raw.length > 128 * 1024 * 1024) throw new Error("Annotation is too large.");
  const a = JSON.parse(raw) as Annotation,
    items = sourceTemplate?.items ?? annotationItems(d);
  if (
    a.schema !== 1 ||
    a.audioHash !== hash ||
    a.duration !== duration ||
    a.lyricStamp !== (sourceTemplate?.lyricStamp ?? lyricStamp(d)) ||
    JSON.stringify(a.items) !== JSON.stringify(items) ||
    (sourceTemplate && JSON.stringify(a.original) !== JSON.stringify(sourceTemplate.original))
  )
    throw new Error(
      "Audio source or lyric mismatch. Existing timestamps were not imported; choose the matching recording or its backup.",
    );
  const check = (b: number[], m: boolean[]) => {
    validateTimes(b, items.length, duration);
    if (
      b.slice(1).some((v, i) => v - b[i] < Math.min(0.01, a.original[i + 1] - a.original[i]) - 1e-9)
    )
      throw new Error("Minimum interval duration violated.");
    if (
      !Array.isArray(m) ||
      m.length !== b.length ||
      m.some((v) => typeof v !== "boolean") ||
      m[0] ||
      m.at(-1)
    )
      throw new Error("Invalid manual boundary metadata.");
  };
  if (
    !Number.isInteger(a.revision) ||
    a.revision < 1 ||
    !Array.isArray(a.history) ||
    a.history.length !== a.revision - 1
  )
    throw new Error("Invalid annotation revision.");
  validateTimes(a.original, items.length, duration);
  check(a.boundaries, a.manual);
  if (!Array.isArray(a.undoStack)) throw new Error("Missing undo history.");
  a.undoStack.forEach((h) => {
    check(h.boundaries, h.manual);
    if (h.phrases)
      for (const phrases of [h.phrases.before, h.phrases.after])
        validatePhraseTiming({ ...a, phraseTiming: phrases });
    if (h.words)
      for (const words of [h.words.before, h.words.after]) {
        const problem = wordTimingStructureProblem(a, words);
        if (problem) throw Error(problem);
      }
  });
  a.history.forEach((h, i) => {
    if (h.revision !== i + 1) throw new Error("Invalid annotation history.");
    check(h.boundaries, h.manual);
  });
  validateReview(a.review, duration);
  validateWordTiming(a);
  validatePhraseTiming(a);
  return a;
}
// Keep at least 10 ms per item; retain shorter legacy anchors without shrinking them.
export function boundaryLimits(a: Annotation, index: number) {
  return {
    min: a.boundaries[index - 1] + Math.min(0.01, a.original[index] - a.original[index - 1]),
    max: a.boundaries[index + 1] - Math.min(0.01, a.original[index + 1] - a.original[index]),
  };
}
export function adjustBoundary(a: Annotation, index: number, time: number): Annotation {
  if (index <= 0 || index >= a.items.length || !Number.isInteger(index))
    throw new Error("The first start and final end are fixed to the decoded audio.");
  if (
    !Number.isFinite(time) ||
    time < boundaryLimits(a, index).min ||
    time > boundaryLimits(a, index).max
  )
    throw new Error(
      "Keep the minimum duration on both sides of this shared boundary (normally 10 ms).",
    );
  if (time === a.boundaries[index]) return a;
  const words = wordTiming(a).intervals;
  const right = a.items[index],
    left = a.items[index - 1];
  if (right.phraseId && right.phraseId !== left.phraseId) {
    const firstWord = words.find((w) => w.id === right.id);
    if (firstWord && time > firstWord.start + 1e-9)
      throw Error(
        "Phrase start would exclude its first word. Move the phrase group or keep the edge before the word.",
      );
  }
  if (left.phraseId && left.phraseId !== right.phraseId) {
    const lastWord = words.find((w) => w.id === left.id);
    if (lastWord && time < lastWord.end - 1e-9)
      throw Error(
        "Phrase end would exclude its last word. Move the phrase group or keep the edge after the word.",
      );
  }
  const next = structuredClone(a);
  next.wordTiming = structuredClone(wordTiming(a));
  next.phraseTiming = structuredClone(phraseIntervals(a));
  next.history.push({
    revision: a.revision,
    boundaries: [...a.boundaries],
    manual: [...a.manual],
  });
  next.undoStack.push({ boundaries: [...a.boundaries], manual: [...a.manual] });
  next.revision++;
  next.boundaries[index] = time;
  next.manual[index] = time !== a.original[index];
  return next;
}
export function undoAnnotation(a: Annotation): Annotation {
  const before = a.undoStack.at(-1);
  if (!before) return a;
  let timing = a.wordTiming;
  if (before.words) {
    timing = structuredClone(wordTiming(a));
    if (JSON.stringify(timing.intervals) !== JSON.stringify(before.words.after))
      throw Error("Undo newer word adjustments before undoing this phrase group.");
    timing.history.push(structuredClone(timing.intervals));
    timing.intervals = structuredClone(before.words.before);
    timing.undo.pop();
    timing.revision++;
  }
  let phrases = a.phraseTiming;
  if (before.phrases) {
    phrases = phraseIntervals(a).map((current) => {
      const prior = before.phrases!.before.find((p) => p.id === current.id)!;
      const after = before.phrases!.after.find((p) => p.id === current.id)!;
      if (prior.start === after.start && prior.end === after.end) return current;
      if (current.start !== after.start || current.end !== after.end)
        throw Error("Undo newer phrase changes before undoing this group.");
      return { ...prior, revision: Math.max(current.revision, prior.revision) + 1 };
    });
  }
  return {
    ...a,
    wordTiming: timing,
    ...(phrases ? { phraseTiming: phrases } : {}),
    undoStack: a.undoStack.slice(0, -1),
    revision: a.revision + 1,
    boundaries: [...before.boundaries],
    manual: [...before.manual],
    history: [
      ...a.history,
      {
        revision: a.revision,
        boundaries: [...a.boundaries],
        manual: [...a.manual],
      },
    ],
  };
}
export function annotationGroups(a: Annotation) {
  const groups: {
    id: string;
    kind: Item["kind"];
    text: string;
    first: number;
    last: number;
    start: number;
    end: number;
  }[] = [];
  a.items.forEach((item, i) => {
    const g = groups.at(-1);
    if (g?.id === item.groupId) {
      g.last = i;
      g.end = a.boundaries[i + 1];
      if (item.kind === "lyric") {
        g.text += " " + item.text;
        g.kind = "lyric";
      }
    } else
      groups.push({
        id: item.groupId,
        kind: item.kind,
        text: item.text,
        first: i,
        last: i,
        start: a.boundaries[i],
        end: a.boundaries[i + 1],
      });
  });
  return groups;
}
