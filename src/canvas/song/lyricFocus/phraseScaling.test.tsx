import { expect, it } from "vitest";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import { changePhrase, phraseIntervals } from "./phraseTiming";
import { wordTiming, adjustWord, wordTimingProblem, undoWordTiming } from "./wordTiming";
import { approveAnchor, eligibleAnchors } from "./anchorReview";
import { parseAnnotation, undoAnnotation, type Annotation } from "./audioAnnotation";
import { initialDraft } from "./model";
import { buildWordPreview, previewKeys, previewStale } from "./wordPreviewStore";
const source = packages[0] as Performance;
function fixture() {
  const a = structuredClone(source.annotation);
  a.review = {
    rhythm: [
      {
        id: "fixture-beat",
        laneId: "manual",
        label: "Fixture beat",
        sectionId: source.containers[0].id,
        time: 1,
        originalTime: 1,
        revision: 1,
        origin: "manual",
      },
    ],
    approvals: [],
    taps: [],
  };
  a.wordTiming = wordTiming(a);
  a.wordTiming.intervals[0].end -= 0.05;
  a.wordTiming.intervals[1].start += 0.05;
  return a;
}
const reload = (a: Annotation) =>
  parseAnnotation(JSON.stringify(a), initialDraft(), a.audioHash, a.duration, source.annotation);
for (const [edge, delta] of [
  ["start", 0.2],
  ["start", -0.2],
  ["end", -0.2],
  ["end", 0.2],
] as const) {
  it(`affine ${edge} ${delta}: all children and gaps, isolation, receipts, atomic undo and preview`, async () => {
    let a = fixture();
    const p = phraseIntervals(a)[0];
    const anchors = eligibleAnchors(a, source.containers, source.phrases);
    for (const anchor of anchors.filter(
      (v) => v.phraseId === p.id || v.wordIndex === p.first || v.wordIndex === p.last,
    ))
      a = approveAnchor(a, anchor);
    const before = structuredClone(a),
      next = changePhrase(a, p.id, edge, p[edge] + delta);
    const q = phraseIntervals(next)[0],
      scale = (q.end - q.start) / (p.end - p.start),
      pivot = edge === "start" ? p.end : p.start;
    const oldWords = wordTiming(a).intervals,
      newWords = wordTiming(next).intervals;
    for (let i = 0; i < 2; i++)
      for (const boundary of ["start", "end"] as const)
        expect(newWords[i][boundary]).toBeCloseTo(
          pivot + (oldWords[i][boundary] - pivot) * scale,
          12,
        );
    expect(newWords[1].start - newWords[0].end).toBeCloseTo(
      (oldWords[1].start - oldWords[0].end) * scale,
      12,
    );
    expect(newWords.slice(2)).toEqual(oldWords.slice(2));
    expect(phraseIntervals(next).slice(1)).toEqual(phraseIntervals(a).slice(1));
    expect(next.boundaries).toEqual(a.boundaries);
    expect(next.review).toEqual(a.review);
    expect(a).toEqual(before);
    const revised = eligibleAnchors(next, source.containers, source.phrases);
    for (const receipt of a.review!.approvals)
      expect(revised.find((v) => v.id === receipt.id)?.status).toBe("stale");
    const persisted = reload(next),
      undone = undoAnnotation(persisted);
    expect(wordTiming(undone).intervals).toEqual(oldWords);
    expect(phraseIntervals(undone).map(({ revision, ...p }) => p)).toEqual(
      phraseIntervals(a).map(({ revision, ...p }) => p),
    );
    expect(wordTiming(undoWordTiming(persisted)).intervals).toEqual(oldWords);
    expect(undoWordTiming(persisted).phraseTiming).toEqual(undone.phraseTiming);
    const map = new Map<string, string>(),
      store = {
        getItem: (k: string) => map.get(k) ?? null,
        setItem: (k: string, v: string) => {
          map.set(k, v);
        },
      };
    store.setItem(previewKeys(a, true).saved, JSON.stringify(a));
    const preview = await buildWordPreview(store, a, true, async () => {});
    store.setItem(previewKeys(a, true).saved, JSON.stringify(persisted));
    expect(previewStale(preview.version.annotation, persisted)).toBe(true);
    const updated = await buildWordPreview(store, a, true, async () => {});
    expect(wordTiming(updated.version.annotation).intervals).toEqual(newWords);
    expect(updated.stale).toBe(false);
  });
}
it("overlap can save, reload, reduce in steps and undo without moving the neighbour; approval/preview remain gated", async () => {
  const a = fixture(),
    p = phraseIntervals(a)[1];
  const overlap = reload(changePhrase(a, p.id, "end", p.end + 0.001));
  expect(wordTimingProblem(overlap, wordTiming(overlap).intervals)).toMatch(/overlaps/);
  const last = wordTiming(overlap).intervals.find((w) => w.id === a.items[p.last].id)!;
  const reduced = adjustWord(overlap, last.id, "end", last.end - 0.0005);
  expect(() => reload(reduced)).not.toThrow();
  const fixed = adjustWord(reduced, last.id, "end", last.end - 0.001);
  expect(wordTimingProblem(fixed, wordTiming(fixed).intervals)).toBeNull();
  const anchor = eligibleAnchors(overlap, source.containers, source.phrases)[0];
  expect(() => approveAnchor(overlap, anchor)).toThrow(/conflicts/);
  const store = { getItem: () => JSON.stringify(overlap), setItem: () => {} };
  // Use only the saved-source key; repair drafts and histories are absent.
  const key = previewKeys(a, true).saved;
  await expect(
    buildWordPreview(
      { ...store, getItem: (k) => (k === key ? JSON.stringify(overlap) : null) },
      a,
      true,
      async () => {},
    ),
  ).rejects.toThrow(/resolve overlaps/);
  expect(wordTiming(undoAnnotation(overlap)).intervals).toEqual(wordTiming(a).intervals);
  expect(wordTiming(reduced).intervals.filter((w) => w.id !== last.id)).toEqual(
    wordTiming(overlap).intervals.filter((w) => w.id !== last.id),
  );
});
