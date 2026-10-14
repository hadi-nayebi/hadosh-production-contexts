import { expect, it } from "vitest";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import { addManualBeat, setManualBeatRemoved } from "./manualBeat";
import { eligibleAnchors, approveAnchor, validateReview } from "./anchorReview";
for (const raw of packages)
  it(`manual beats retain source timing and reversible pending provenance: ${raw.id}`, () => {
    const p = raw as Performance,
      a = p.annotation,
      before = JSON.stringify(a);
    const { annotation: added, id } = addManualBeat(
      a,
      p.containers,
      p.lanes,
      p.lanes[0].id,
      2,
      "test",
    );
    expect(id).toContain(a.audioHash);
    const get = (value: typeof a) =>
      eligibleAnchors(value, p.containers, p.phrases).find((x) => x.id === id);
    expect(get(added)?.status).toBe("manual pending");
    expect(added.boundaries).toEqual(a.boundaries);
    expect(added.wordTiming).toEqual(a.wordTiming);
    const approved = approveAnchor(added, get(added)!);
    expect(get(approved)?.status).toBe("approved");
    const removed = setManualBeatRemoved(approved, id, true);
    expect(get(removed)).toBeUndefined();
    const restored = setManualBeatRemoved(removed, id, false);
    expect(get(restored)?.status).toBe("stale");
    expect(restored.review?.rhythm.find((x) => x.id === id)?.time).toBe(2);
    expect(() =>
      validateReview(JSON.parse(JSON.stringify(restored.review)), a.duration),
    ).not.toThrow();
    expect(JSON.stringify(a)).toBe(before);
    expect(() => addManualBeat(a, p.containers, p.lanes, "", 2)).toThrow("lane");
    expect(() => addManualBeat(a, p.containers, p.lanes, p.lanes[0].id, a.duration)).toThrow(
      "inside",
    );
    expect(() => addManualBeat(a, p.containers, p.lanes, p.lanes[0].id, NaN)).toThrow("inside");
  });
