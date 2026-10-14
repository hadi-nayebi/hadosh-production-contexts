import { it, expect } from "vitest";
import { timelineRegions } from "./TimelineRegions";
import { eligibleAnchors } from "./anchorReview";
import { adjustWord, wordTiming } from "./wordTiming";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
for (const raw of packages)
  it(`derives word and phrase regions from current canonical anchors ${raw.id}`, () => {
    const p = raw as Performance,
      a = p.annotation,
      w = wordTiming(a).intervals[0];
    const get = (source: typeof a) =>
      timelineRegions(source, p.phrases, eligibleAnchors(source, p.containers, p.phrases));
    const before = get(a),
      after = get(adjustWord(a, w.id, "start", (w.start + w.end) / 2));
    expect(before.filter((r) => r.kind === "phrase")).toHaveLength(p.phrases.length);
    expect(after.find((r) => r.id === w.id)?.start.time).toBe((w.start + w.end) / 2);
    expect(after.find((r) => r.id === w.id)?.end.time).toBe(w.end);
    expect(after.filter((r) => r.kind === "phrase")).toEqual(
      before.filter((r) => r.kind === "phrase"),
    );
    expect(after.every((r) => r.start.time < r.end.time)).toBe(true);
  });
