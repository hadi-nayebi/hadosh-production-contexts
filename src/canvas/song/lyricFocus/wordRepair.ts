import type { Annotation } from "./audioAnnotation";
import { wordTiming, wordTimingProblem } from "./wordTiming";
export type RepairWord = { id: string; start: string; end: string };
export type WordRepair = {
  schema: 1;
  active: boolean;
  audioHash: string;
  base: string;
  words: RepairWord[];
  history: RepairWord[][];
};
export function newWordRepair(a: Annotation): WordRepair {
  return {
    schema: 1,
    active: true,
    audioHash: a.audioHash,
    base: JSON.stringify(a),
    words: wordTiming(a).intervals.map((w) => ({
      id: w.id,
      start: String(w.start),
      end: String(w.end),
    })),
    history: [],
  };
}
export function parseWordRepair(raw: string, a: Annotation): WordRepair {
  const d = JSON.parse(raw),
    ids = wordTiming(a).intervals.map((w) => w.id);
  const valid = (ws: RepairWord[]) =>
    Array.isArray(ws) &&
    ws.length === ids.length &&
    ws.every(
      (w, i) =>
        w?.id === ids[i] &&
        typeof w.start === "string" &&
        typeof w.end === "string" &&
        w.start.length <= 40 &&
        w.end.length <= 40,
    );
  if (
    d.schema !== 1 ||
    typeof d.active !== "boolean" ||
    d.audioHash !== a.audioHash ||
    typeof d.base !== "string" ||
    !valid(d.words) ||
    !Array.isArray(d.history) ||
    !d.history.every(valid)
  )
    throw Error("Repair draft does not match this recording.");
  return d;
}
export function repairProblem(a: Annotation, d: WordRepair) {
  if (d.words.some((w) => !w.start.trim() || !w.end.trim()))
    return "Enter start and end seconds for every edited word.";
  return wordTimingProblem(
    a,
    d.words.map((w) => ({ id: w.id, start: Number(w.start), end: Number(w.end) })),
  );
}
export function applyWordRepair(a: Annotation, d: WordRepair): Annotation {
  if (d.base !== JSON.stringify(a))
    throw Error(
      "Saved timing changed since this repair began. Draft retained; resolve source changes before applying.",
    );
  const problem = repairProblem(a, d);
  if (problem) throw Error(problem);
  const t = structuredClone(wordTiming(a));
  t.history.push(structuredClone(t.intervals));
  t.undo.push(structuredClone(t.intervals));
  t.revision++;
  t.intervals = d.words.map((w) => ({ id: w.id, start: Number(w.start), end: Number(w.end) }));
  return { ...a, wordTiming: t };
}
