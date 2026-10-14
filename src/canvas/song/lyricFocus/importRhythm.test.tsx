import { expect, it } from "vitest";
import packages from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import { addManualBeat, setManualBeatRemoved } from "./manualBeat";
import { eligibleAnchors, approveAnchor } from "./anchorReview";
import { importRhythm } from "./importRhythm";
for (const raw of packages) {
  const p = raw as Performance;
  const merge = (a: typeof p.annotation, incoming: typeof p.annotation) => ({
    ...a,
    review: importRhythm(a, incoming, p.containers, p.lanes),
  });
  it(`restores manual markers without importing approvals or losing local beats: ${p.id}`, () => {
    const a = p.annotation;
    const backup = addManualBeat(a, p.containers, p.lanes, p.lanes[0].id, 2, "backup");
    const anchor = eligibleAnchors(backup.annotation, p.containers, p.phrases).find(
      (v) => v.id === backup.id,
    )!;
    const approved = approveAnchor(backup.annotation, anchor);
    const local = addManualBeat(a, p.containers, p.lanes, p.lanes[0].id, 3, "local");
    const before = JSON.stringify(local.annotation);
    const restored = merge(local.annotation, approved);
    expect(restored.review!.rhythm.map((r) => r.id)).toEqual([local.id, backup.id]);
    expect(
      eligibleAnchors(restored, p.containers, p.phrases).find((v) => v.id === backup.id)?.status,
    ).toBe("manual pending");
    expect(JSON.stringify(local.annotation)).toBe(before);
    const removed = setManualBeatRemoved(approved, backup.id, true);
    const revived = merge(removed, approved);
    expect(revived.review!.rhythm[0].removed).not.toBe(true);
    expect(
      eligibleAnchors(revived, p.containers, p.phrases).find((v) => v.id === backup.id)?.status,
    ).toBe("stale");
    const moved = structuredClone(approved);
    moved.review!.rhythm[0].time = 2.2;
    const updated = merge(approved, moved);
    expect(updated.review!.rhythm[0].history?.at(-1)).toBe(2);
    expect(updated.review!.rhythm[0].time).toBe(2.2);
  });
  it(`rejects mismatched rhythm identity atomically: ${p.id}`, () => {
    const beat = addManualBeat(
      p.annotation,
      p.containers,
      p.lanes,
      p.lanes[0].id,
      2,
      "test",
    ).annotation;
    const before = JSON.stringify(beat);
    for (const patch of [
      { laneId: "missing" },
      { sectionId: "missing" },
      { id: "manual-beat:wrong:source" },
      { originalTime: 4 },
    ]) {
      const incoming = structuredClone(beat);
      Object.assign(incoming.review!.rhythm[0], patch);
      expect(() => merge(beat, incoming)).toThrow();
      expect(JSON.stringify(beat)).toBe(before);
    }
    expect(() => merge(beat, { ...beat, audioHash: "wrong" })).toThrow("source");
  });
}
