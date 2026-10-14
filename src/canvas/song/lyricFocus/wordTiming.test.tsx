import { expect, it } from "vitest";
import { freshAnnotation, parseAnnotation } from "./audioAnnotation";
import { initialDraft } from "./model";
import { adjustWord, undoWordTiming, wordTiming, validateWordTiming } from "./wordTiming";
const draft = initialDraft();
const fresh = () => freshAnnotation(draft, "a".repeat(64), 240, "fixture.mp3");
it("migrates saved boundaries without moving words, changing coverage, or mutating the source", () => {
  const a = fresh(),
    t = wordTiming(a),
    first = t.intervals[0];
  const changed = adjustWord(a, first.id, "end", (first.start + first.end) / 2);
  expect(changed.boundaries).toEqual(a.boundaries);
  expect(wordTiming(changed).intervals.slice(1)).toEqual(t.intervals.slice(1));
  expect(a.wordTiming).toBeUndefined();
  expect(wordTiming(changed).intervals[0].end).toBeLessThan(t.intervals[1].start);
  expect(parseAnnotation(JSON.stringify(changed), draft, a.audioHash, a.duration)).toEqual(changed);
});
it("allows exact shared edges without artificial gaps but rejects overlap, inversion, nonfinite and source overflow", () => {
  const a = fresh(),
    t = wordTiming(a),
    [first, second] = t.intervals;
  expect(() => adjustWord(a, first.id, "end", second.start)).not.toThrow();
  for (const end of [second.start + 0.001, first.start, NaN, Infinity, 241])
    expect(() => adjustWord(a, first.id, "end", end)).toThrow();
  expect(() => adjustWord(a, first.id, "start", -0.01)).toThrow();
  expect(() => adjustWord(a, second.id, "start", first.end - 0.001)).toThrow();
  expect(a).toEqual(fresh());
});
it("undo restores only word intervals and retains history with source-valid import", () => {
  const a = fresh(),
    first = wordTiming(a).intervals[0];
  const changed = adjustWord(a, first.id, "end", (first.start + first.end) / 2),
    restored = undoWordTiming(changed);
  expect(wordTiming(restored).intervals).toEqual(wordTiming(a).intervals);
  expect(restored.boundaries).toEqual(a.boundaries);
  expect(restored.wordTiming?.revision).toBe(3);
  expect(() => validateWordTiming(restored)).not.toThrow();
  const corrupt = structuredClone(changed);
  corrupt.wordTiming!.intervals[0].end = NaN;
  expect(() => parseAnnotation(JSON.stringify(corrupt), draft, a.audioHash, a.duration)).toThrow(
    "finite",
  );
  corrupt.wordTiming!.intervals = structuredClone(changed.wordTiming!.intervals);
  corrupt.wordTiming!.undo[0][0].end = 300;
  expect(() => validateWordTiming(corrupt)).toThrow();
});
