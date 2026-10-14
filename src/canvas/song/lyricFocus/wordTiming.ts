import { undoAnnotation, type Annotation } from "./audioAnnotation";

export type WordInterval = { id: string; start: number; end: number };
export type WordTiming = {
  schema: 1;
  lane: "primary-vocal";
  revision: number;
  intervals: WordInterval[];
  history: WordInterval[][];
  undo: WordInterval[][];
};

/** Separate words from the contiguous coverage grid. Never infer silence or another vocal lane. */
export function wordTiming(a: Annotation): WordTiming {
  return (
    a.wordTiming ?? {
      schema: 1,
      lane: "primary-vocal",
      revision: 1,
      intervals: a.items.flatMap((item, i) =>
        item.kind === "lyric"
          ? [{ id: item.id, start: a.boundaries[i], end: a.boundaries[i + 1] }]
          : [],
      ),
      history: [],
      undo: [],
    }
  );
}

export function wordTimingStructureProblem(
  a: Annotation,
  intervals: WordInterval[],
): string | null {
  const words = a.items.filter((item) => item.kind === "lyric");
  if (!Array.isArray(intervals) || intervals.length !== words.length)
    return "Word timing must contain every source word exactly once.";
  for (let i = 0; i < intervals.length; i++) {
    const word = intervals[i];
    if (!word || word.id !== words[i].id) return "Word timing does not match source word order.";
    if (!Number.isFinite(word.start) || !Number.isFinite(word.end))
      return "Enter a finite start and end time.";
    if (word.start < 0 || word.end > a.duration) return "Keep the word inside the recording.";
    if (word.start >= word.end) return "Word start must be before its end.";
  }
  return null;
}

export function wordTimingProblem(a: Annotation, intervals: WordInterval[]): string | null {
  const structural = wordTimingStructureProblem(a, intervals);
  if (structural) return structural;
  for (let i = 1; i < intervals.length; i++)
    if (intervals[i - 1].end > intervals[i].start + 1e-9)
      return `Word overlaps the previous word: ${a.items.find((w) => w.id === intervals[i - 1].id)?.text}.`;
  return null;
}

export function validateWordTiming(a: Annotation): void {
  const t = a.wordTiming;
  if (t === undefined) return;
  if (
    !t ||
    t.schema !== 1 ||
    t.lane !== "primary-vocal" ||
    !Number.isInteger(t.revision) ||
    t.revision < 1 ||
    !Array.isArray(t.history) ||
    t.history.length !== t.revision - 1 ||
    !Array.isArray(t.undo)
  )
    throw new Error("Invalid word timing history.");
  for (const intervals of [t.intervals, ...t.history, ...t.undo]) {
    const problem = wordTimingStructureProblem(a, intervals);
    if (problem) throw new Error(problem);
  }
}

export function adjustWord(
  a: Annotation,
  id: string,
  edge: "start" | "end",
  time: number,
): Annotation {
  const t = structuredClone(wordTiming(a));
  const word = t.intervals.find((w) => w.id === id);
  if (!word) throw new Error("Unknown source word.");
  const before = structuredClone(t.intervals);
  word[edge] = time;
  const problem = wordTimingStructureProblem(a, t.intervals);
  if (problem) throw new Error(problem);
  // Existing conflicts may be reduced or left alone while another word is fixed.
  for (let i = 1; i < t.intervals.length; i++)
    if (
      Math.max(0, t.intervals[i - 1].end - t.intervals[i].start) >
      Math.max(0, before[i - 1].end - before[i].start) + 1e-9
    )
      throw Error(
        "Word overlaps the previous word; reduce the conflict or resize the phrase group.",
      );
  if (JSON.stringify(before) === JSON.stringify(t.intervals)) return a;
  t.history.push(before);
  t.undo.push(structuredClone(before));
  t.revision++;
  return { ...a, wordTiming: t };
}

export function undoWordTiming(a: Annotation): Annotation {
  const t = structuredClone(wordTiming(a));
  const previous = t.undo.at(-1);
  if (!previous) return a;
  const group =
    a.undoStack
      .map((entry, index) =>
        entry.words &&
        JSON.stringify(entry.words.before) === JSON.stringify(previous) &&
        JSON.stringify(entry.words.after) === JSON.stringify(t.intervals)
          ? index
          : -1,
      )
      .filter((index) => index >= 0)
      .at(-1) ?? -1;
  if (group >= 0) {
    if (group !== a.undoStack.length - 1)
      throw Error("Undo newer phrase-edge adjustments before undoing this phrase group.");
    return undoAnnotation(a);
  }
  t.undo.pop();
  const problem = wordTimingStructureProblem(a, previous);
  if (problem) throw new Error(problem);
  t.history.push(structuredClone(t.intervals));
  t.intervals = previous;
  t.revision++;
  return { ...a, wordTiming: t };
}

export function wordEdge(a: Annotation, index: number, edge: "start" | "end"): number {
  const word = wordTiming(a).intervals.find((w) => w.id === a.items[index]?.id);
  if (!word) throw new Error("Unknown source word.");
  return word[edge];
}
export function wordLimits(a: Annotation, index: number, edge: "start" | "end") {
  const all = wordTiming(a).intervals,
    i = all.findIndex((w) => w.id === a.items[index]?.id),
    w = all[i];
  if (!w) throw new Error("Unknown source word.");
  // Positive duration: 1 microsecond is the numerical editor resolution, not an added silence gap.
  return edge === "start"
    ? { min: Math.min(all[i - 1]?.end ?? 0, w.start), max: w.end - 0.000001 }
    : { min: w.start + 0.000001, max: Math.max(all[i + 1]?.start ?? a.duration, w.end) };
}
