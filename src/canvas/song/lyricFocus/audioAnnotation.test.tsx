import { it, expect } from "vitest";
import { initialDraft, revise } from "./model";
import {
  freshAnnotation,
  adjustBoundary,
  undoAnnotation,
  parseAnnotation,
  annotationGroups,
} from "./audioAnnotation";
const hash = "a".repeat(64);
it("partitions the exact duration into stable lyric and instrumental word items", () => {
  const d = initialDraft(),
    a = freshAnnotation(d, hash, 123.456, "test.wav");
  expect(a.boundaries[0]).toBe(0);
  expect(a.boundaries.at(-1)).toBe(123.456);
  expect(new Set(a.items.map((i) => i.id)).size).toBe(a.items.length);
  expect(annotationGroups(a)).toHaveLength(28);
  expect(a.items.filter((i) => i.kind === "instrumental")).toHaveLength(6);
  expect(parseAnnotation(JSON.stringify(a), d, hash, a.duration)).toEqual(a);
});
it("updates a single shared boundary and preserves coverage and original anchors", () => {
  const a = freshAnnotation(initialDraft(), hash, 120, "test.wav"),
    n = 20,
    t = (a.boundaries[n] + a.boundaries[n + 1]) / 2,
    b = adjustBoundary(a, n, t);
  expect(b.boundaries[n]).toBe(t);
  expect(b.original).toEqual(a.original);
  expect(b.manual[n]).toBe(true);
  expect(b.boundaries.filter((v, i) => v !== a.boundaries[i])).toHaveLength(1);
  expect(b.boundaries.slice(1).reduce((sum, v, i) => sum + v - b.boundaries[i], 0)).toBeCloseTo(
    120,
    10,
  );
  expect(() => adjustBoundary(a, 0, 1)).toThrow();
  expect(() => adjustBoundary(a, n, a.boundaries[n + 1])).toThrow();
  expect(() => adjustBoundary(a, a.items.length, 119)).toThrow();
});
it("undo restores multiple prior adjustments while preserving revision evidence", () => {
  const a = freshAnnotation(initialDraft(), hash, 120, "test.wav");
  let b = adjustBoundary(a, 2, (a.boundaries[2] + a.boundaries[3]) / 2);
  b = adjustBoundary(b, 4, (a.boundaries[4] + a.boundaries[5]) / 2);
  b = undoAnnotation(undoAnnotation(b));
  expect(b.boundaries).toEqual(a.boundaries);
  expect(b.revision).toBe(5);
  expect(b.history).toHaveLength(4);
  expect(b.undoStack).toHaveLength(0);
  expect(parseAnnotation(JSON.stringify(b), initialDraft(), hash, 120)).toEqual(b);
});
it("refuses different audio, duration, lyrics and invalid interval imports", () => {
  const d = initialDraft(),
    a = freshAnnotation(d, hash, 120, "test.wav");
  expect(() => parseAnnotation(JSON.stringify(a), d, "b".repeat(64), 120)).toThrow("mismatch");
  expect(() => parseAnnotation(JSON.stringify(a), d, hash, 121)).toThrow("mismatch");
  expect(() =>
    parseAnnotation(JSON.stringify(a), revise(d, d.units[1].id, "changed"), hash, 120),
  ).toThrow("mismatch");
  a.boundaries[3] = a.boundaries[2];
  expect(() => parseAnnotation(JSON.stringify(a), d, hash, 120)).toThrow("positive");
});

it("enforces minimum adjacent durations while preserving short original anchors", () => {
  const a = freshAnnotation(initialDraft(), hash, 120, "test.wav");
  expect(() => adjustBoundary(a, 2, a.boundaries[1] + 0.001)).toThrow("minimum");
  expect(() => adjustBoundary(a, 2, a.boundaries[3] - 0.001)).toThrow("minimum");
  const b = adjustBoundary(a, 2, a.boundaries[1] + 0.01);
  expect(b.boundaries[2] - b.boundaries[1]).toBeCloseTo(0.01);
  expect(undoAnnotation(b).boundaries).toEqual(a.boundaries);
});
