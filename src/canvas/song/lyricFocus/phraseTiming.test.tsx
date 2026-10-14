import { expect, it } from "vitest";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import { changePhrase, phraseIntervals, validatePhraseTiming } from "./phraseTiming";
import { eligibleAnchors, approveAnchor } from "./anchorReview";
import { parseAnnotation, undoAnnotation } from "./audioAnnotation";
import { initialDraft } from "./model";
import { wordTiming } from "./wordTiming";
import { previewStale } from "./wordPreviewStore";
for (const [index, raw] of packages.entries()) {
  const source = raw as Performance;
  const pairs = source.phrases
    .slice(0, -1)
    .flatMap((p, i) =>
      p.last + 1 === source.phrases[i + 1].first ? [[p, source.phrases[i + 1]]] : [],
    );
  it(`independent identity at every adjacency ${source.id}`, () => {
    expect(pairs.length).toBe(index === 0 ? 45 : 40);
    const anchors = eligibleAnchors(source.annotation, source.containers, source.phrases);
    for (const [left, right] of pairs) {
      const end = anchors.find((x) => x.phraseId === left.id && x.edge === "end")!;
      const start = anchors.find((x) => x.phraseId === right.id && x.edge === "start")!;
      expect(end.time).toBe(start.time);
      expect(end.id).not.toBe(start.id);
    }
  });
  for (const [left, right] of pairs)
    it(`isolates resize, body, undo and roundtrip ${left.id}`, () => {
      const a = structuredClone(source.annotation);
      // Provide a 2ms word gap in the fixture to exercise a valid group move at each adjacency.
      // Section and phrase coverage is the exact source grid.
      a.wordTiming = wordTiming(a);
      a.wordTiming.intervals = a.wordTiming.intervals.map((w) => ({
        ...w,
        start: w.start + 0.002,
        end: w.end - 0.002,
      }));
      const before = phraseIntervals(a),
        p = before.find((p) => p.id === left.id)!;
      const section = source.containers.find((s) => s.id === left.sectionId)!;
      const delta = p.end < a.boundaries[section.last + 1] ? 0.001 : -0.001;
      const moved = changePhrase(a, left.id, "move", delta);
      expect(moved.boundaries).toEqual(a.boundaries);
      expect(phraseIntervals(moved).filter((p) => p.id !== left.id)).toEqual(
        before.filter((p) => p.id !== left.id),
      );
      const own = new Set(a.items.slice(left.first, left.last + 1).map((w) => w.id));
      expect(wordTiming(moved).intervals).toEqual(
        wordTiming(a).intervals.map((w) =>
          own.has(w.id) ? { ...w, start: w.start + delta, end: w.end + delta } : w,
        ),
      );
      expect(previewStale(a, moved)).toBe(true);
      const reloaded = parseAnnotation(
        JSON.stringify(moved),
        initialDraft(),
        a.audioHash,
        a.duration,
        a,
      );
      const undone = undoAnnotation(reloaded);
      expect(phraseIntervals(undone).map(({ revision, ...p }) => p)).toEqual(
        before.map(({ revision, ...p }) => p),
      );
      expect(wordTiming(undone).intervals).toEqual(wordTiming(a).intervals);
      const edge = delta > 0 ? "end" : "start";
      const resized = changePhrase(a, left.id, edge, p[edge] + delta);
      expect(resized.boundaries).toEqual(a.boundaries);
      const q = phraseIntervals(resized).find((x) => x.id === left.id)!;
      const scale = (q.end - q.start) / (p.end - p.start);
      const pivot = edge === "start" ? p.end : p.start;
      for (const w of wordTiming(resized).intervals) {
        const old = wordTiming(a).intervals.find((v) => v.id === w.id)!;
        expect(w.start).toBeCloseTo(
          own.has(w.id) ? pivot + (old.start - pivot) * scale : old.start,
          10,
        );
        expect(w.end).toBeCloseTo(own.has(w.id) ? pivot + (old.end - pivot) * scale : old.end, 10);
      }
      expect(wordTiming(undoAnnotation(resized)).intervals).toEqual(wordTiming(a).intervals);
      expect(phraseIntervals(resized).find((p) => p.id === right.id)).toEqual(
        before.find((p) => p.id === right.id),
      );
      expect(
        phraseIntervals(resized).find((p) => p.id === left.id)?.[edge === "end" ? "start" : "end"],
      ).toBe(p[edge === "end" ? "start" : "end"]);
    });
}
it("migrates without moving source timings, validates complete identities, and keeps undo approval stale", () => {
  const source = packages[1] as Performance;
  const original = source.annotation;
  const phrase = source.phrases[1];
  const anchors = eligibleAnchors(original, source.containers, source.phrases);
  const edge = anchors.find((a) => a.phraseId === phrase.id && a.edge === "end")!;
  const approved = approveAnchor(original, edge);
  const changed = changePhrase(approved, phrase.id, "end", edge.time + 0.01);
  expect(phraseIntervals(changed).filter((p) => p.id !== phrase.id)).toEqual(
    phraseIntervals(original).filter((p) => p.id !== phrase.id),
  );
  const undone = undoAnnotation(changed);
  expect(
    eligibleAnchors(undone, source.containers, source.phrases).find((a) => a.id === edge.id)
      ?.status,
  ).toBe("stale");
  expect(() =>
    validatePhraseTiming({ ...changed, phraseTiming: changed.phraseTiming!.slice(1) }),
  ).toThrow();
  expect(() => changePhrase(original, phrase.id, "start", 100)).toThrow();
  expect(original.phraseTiming).toBeUndefined();
});
