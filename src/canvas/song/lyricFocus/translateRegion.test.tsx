import { phraseAt } from "./phraseTiming";
import { it, expect } from "vitest";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import { eligibleAnchors } from "./anchorReview";
import { translateRegion } from "./translateRegion";
import { wordTiming, undoWordTiming } from "./wordTiming";
import { undoAnnotation } from "./audioAnnotation";
for (const raw of packages)
  it(`moves intervals atomically without neighbor drift ${raw.id}`, () => {
    const p = raw as Performance,
      a = p.annotation,
      anchors = eligibleAnchors(a, p.containers, p.phrases);
    const start = anchors.find((x) => x.wordIndex !== undefined && x.edge === "start")!,
      end = anchors.find((x) => x.wordIndex === start.wordIndex && x.edge === "end")!;
    const before = wordTiming(a).intervals,
      moved = translateRegion(a, start, end, -0.01),
      after = wordTiming(moved);
    expect(after.intervals[0].start).toBeCloseTo(before[0].start - 0.01);
    expect(after.intervals[0].end).toBeCloseTo(before[0].end - 0.01);
    expect(after.intervals.slice(1)).toEqual(before.slice(1));
    expect(after.undo).toHaveLength(1);
    expect(wordTiming(undoWordTiming(moved)).intervals).toEqual(before);
    expect(() => translateRegion(a, start, end, 1)).toThrow();
    expect(wordTiming(translateRegion(a, start, end, -100)).intervals[0].start).toBe(0);
    const phrase = p.phrases[0],
      ps = anchors.find((x) => x.phraseId === phrase.id && x.edge === "start")!,
      pe = anchors.find((x) => x.phraseId === phrase.id && x.edge === "end")!;
    const shifted = translateRegion(a, ps, pe, 0.005);
    expect(phraseAt(shifted, phrase.first, phrase.last).start).toBeCloseTo(
      a.boundaries[phrase.first] + 0.005,
    );
    expect(shifted.boundaries).toEqual(a.boundaries);
    expect(wordTiming(shifted).intervals.slice(0, 2)).toEqual(
      before.slice(0, 2).map((w) => ({ ...w, start: w.start + 0.005, end: w.end + 0.005 })),
    );
    expect(wordTiming(shifted).intervals.slice(2)).toEqual(before.slice(2));
    expect(shifted.review).toEqual(a.review);
    expect(wordTiming(undoAnnotation(shifted)).intervals).toEqual(before);
    expect(undoWordTiming(shifted).boundaries).toEqual(a.boundaries);
    expect(wordTiming(undoWordTiming(shifted)).intervals).toEqual(before);
    expect(shifted.undoStack).toHaveLength(a.undoStack.length + 1);
    expect(undoAnnotation(shifted).boundaries).toEqual(a.boundaries);
  });

it("group move rejects overlaps, retains evidence, invalidates approval, and validates on import", async () => {
  const { approveAnchor } = await import("./anchorReview");
  const { adjustBoundary, parseAnnotation } = await import("./audioAnnotation");
  const { initialDraft } = await import("./model");
  const { previewStale } = await import("./wordPreviewStore");
  const p = packages[1] as Performance,
    phrase = p.phrases[0];
  let a = structuredClone(p.annotation);
  const originalAnchors = eligibleAnchors(a, p.containers, p.phrases);
  for (const anchor of originalAnchors.filter(
    (v) =>
      (v.phraseId === phrase.id && v.edge === "start") ||
      (v.phraseId === phrase.id && v.edge === "end") ||
      (v.wordIndex !== undefined && v.wordIndex >= phrase.first && v.wordIndex <= phrase.last),
  ))
    a = approveAnchor(a, anchor);
  const anchors = eligibleAnchors(a, p.containers, p.phrases),
    start = anchors.find((v) => v.phraseId === phrase.id && v.edge === "start")!,
    end = anchors.find((v) => v.phraseId === phrase.id && v.edge === "end")!;
  const moved = translateRegion(a, start, end, 0.05);
  expect(previewStale(a, moved)).toBe(true);
  expect(moved.items).toEqual(a.items);
  expect(moved.original).toEqual(a.original);
  expect(moved.review).toEqual(a.review);
  expect(
    eligibleAnchors(moved, p.containers, p.phrases)
      .filter((v) => v.wordIndex === phrase.first || v.wordIndex === phrase.last)
      .every((v) => v.status === "stale"),
  ).toBe(true);
  expect(
    parseAnnotation(JSON.stringify(moved), initialDraft(), a.audioHash, a.duration, a).wordTiming,
  ).toEqual(moved.wordTiming);
  expect(() => translateRegion(a, start, end, 1)).toThrow();
  expect(() => adjustBoundary(a, phrase.first, a.boundaries[phrase.first] + 0.05)).toThrow(
    /exclude/,
  );
  expect(() => adjustBoundary(a, phrase.last + 1, a.boundaries[phrase.last + 1] - 0.05)).toThrow(
    /exclude/,
  );
  const resized = adjustBoundary(a, phrase.first, a.boundaries[phrase.first] - 0.05);
  expect(wordTiming(resized).intervals).toEqual(wordTiming(a).intervals);
});
