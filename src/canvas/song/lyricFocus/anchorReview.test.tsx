import { adjustWord, undoWordTiming, wordTiming } from "./wordTiming";
import { expect, it } from "vitest";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import { eligibleAnchors, approveAnchor, approveWordTiming, emptyReview } from "./anchorReview";
import { adjustBoundary, undoAnnotation, parseAnnotation } from "./audioAnnotation";
import { initialDraft } from "./model";
const p = packages[0] as Performance;
const anchors = (a = p.annotation) => eligibleAnchors(a, p.containers, p.phrases);
it("uses unique eligible boundaries and one section owner; dense detections are not eligible or approved", () => {
  const all = anchors();
  expect(all.every((v) => v.status === "automatic pending")).toBe(true);
  expect(new Set(all.map((v) => v.id)).size).toBe(all.length);
  expect(all.length).toBeLessThan(p.lanes.reduce((n, l) => n + l.events.length, 0));
  for (const s of p.containers) {
    const start = all.find((v) => v.index === s.first)!;
    expect(start.sectionId).toBe(s.id);
  }
  expect(all.at(-1)?.sectionId).toBe(p.containers.at(-1)?.id);
  expect(all.find((v) => v.types.includes("word start") && v.wordIndex !== undefined)).toBeTruthy();
});
it("explicit approval survives reload but timing, neighbours, source, type and undo changes stale it", () => {
  const initial = p.annotation;
  const n = p.containers[2].first;
  const chosen = anchors().find((v) => v.index === n)!;
  const approved = approveAnchor(initial, chosen);
  expect(anchors(approved).find((v) => v.index === n)?.status).toBe("approved");
  expect(
    parseAnnotation(
      JSON.stringify(approved),
      initialDraft(),
      initial.audioHash,
      initial.duration,
      initial,
    ),
  ).toEqual(approved);
  const edited = adjustBoundary(
    approved,
    n,
    (initial.boundaries[n - 1] + initial.boundaries[n + 1]) / 2,
  );
  expect(anchors(edited).find((v) => v.index === n)?.status).toBe("stale");
  expect(anchors(undoAnnotation(edited)).find((v) => v.index === n)?.status).toBe("stale");
  expect(
    anchors({ ...approved, audioHash: "f".repeat(64) }).find((v) => v.index === n)?.status,
  ).toBe("stale");
  expect(eligibleAnchors(approved, p.containers, []).find((v) => v.index === n)?.status).toBe(
    "stale",
  );
});
it("only chosen rhythm adds to the stable denominator, edits reopen it, source review data is validated", () => {
  const a = structuredClone(p.annotation);
  a.review = emptyReview();
  a.review.rhythm.push({
    id: "rhythm:low:1",
    laneId: "low",
    label: "Low onset",
    time: 1,
    originalTime: 1,
    sectionId: p.containers[0].id,
    revision: 1,
  });
  expect(anchors(a).length).toBe(anchors().length + 1);
  const chosen = anchors(a).find((v) => v.id === "rhythm:low:1")!;
  const approved = approveAnchor(a, chosen);
  approved.review!.rhythm[0].time = 1.1;
  approved.review!.rhythm[0].revision++;
  expect(anchors(approved).find((v) => v.id === chosen.id)?.status).toBe("stale");
  approved.review!.rhythm[0].time = -1;
  expect(() =>
    parseAnnotation(
      JSON.stringify(approved),
      initialDraft(),
      a.audioHash,
      a.duration,
      p.annotation,
    ),
  ).toThrow("rhythm");
});

it("word-edge approvals stale on own and neighboring edits including undo, while unrelated edits preserve them", () => {
  const a = p.annotation,
    words = wordTiming(a).intervals;
  const word = words[3],
    id = `word:${word.id}:start`;
  const approved = approveAnchor(
    a,
    anchors(a).find((v) => v.id === id)!,
  );
  const edited = adjustWord(approved, word.id, "start", (word.start + word.end) / 2);
  expect(anchors(edited).find((v) => v.id === id)?.status).toBe("stale");
  expect(anchors(undoWordTiming(edited)).find((v) => v.id === id)?.status).toBe("stale");
  const far = words[20];
  const other = adjustWord(approved, far.id, "end", (far.start + far.end) / 2);
  expect(anchors(other).find((v) => v.id === id)?.status).toBe("approved");
  expect(edited.boundaries).toEqual(a.boundaries);
});

it.each(packages as Performance[])(
  "saves both exact word-edge approvals atomically, survives reload and invalidates later edits: $id",
  (source) => {
    const a = source.annotation,
      word = wordTiming(a).intervals[2],
      time = (word.start + word.end) / 2;
    const next = approveWordTiming(a, word.id, "start", time, source.containers, source.phrases);
    expect(next.review?.approvals.slice(-2).map((r) => r.id)).toEqual([
      `word:${word.id}:start`,
      `word:${word.id}:end`,
    ]);
    const restored = parseAnnotation(
      JSON.stringify(next),
      initialDraft(),
      a.audioHash,
      a.duration,
      a,
    );
    const status = (v: typeof a) =>
      eligibleAnchors(v, source.containers, source.phrases)
        .filter((x) => x.id.startsWith(`word:${word.id}:`))
        .map((x) => x.status);
    expect(status(restored)).toEqual(["approved", "approved"]);
    expect(wordTiming(restored).intervals[2].start).toBe(time);
    const revised = adjustWord(restored, word.id, "start", (time + word.end) / 2);
    expect(status(revised)).toEqual(["stale", "stale"]);
    const before = JSON.stringify(a);
    expect(() =>
      approveWordTiming(a, word.id, "start", word.end, source.containers, source.phrases),
    ).toThrow();
    expect(JSON.stringify(a)).toBe(before);
  },
);
