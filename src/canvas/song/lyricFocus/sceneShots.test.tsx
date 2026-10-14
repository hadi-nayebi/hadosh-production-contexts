import { it, expect } from "vitest";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { sceneShots } from "./sceneShots";
import { outdoorFrames, outdoorProjection, outdoorShotCuts } from "./outdoorShots";
import { streetHaloPerformance } from "./PersonalStreetHalo";
const a = performances[0].annotation as Annotation;
it("partitions the source without zero-duration counters or audio mutation", () => {
  const before = JSON.stringify(a),
    shots = sceneShots(a);
  expect(shots[0].start).toBe(0);
  expect(shots.at(-1)!.end).toBe(a.duration);
  for (let i = 0; i < shots.length; i++) {
    expect(shots[i].end).toBeGreaterThan(shots[i].start);
    if (i) expect(shots[i].start).toBe(shots[i - 1].end);
  }
  expect(JSON.stringify(a)).toBe(before);
  expect(shots.filter((s) => s.backgroundId.includes("registered-window-return"))).toHaveLength(1);
});
it("matches projected character geometry across every outdoor image handoff", () => {
  const start = 201.68,
    cuts = outdoorShotCuts(a, start);
  cuts.forEach((t, i) => {
    if (!i) return;
    for (const time of [t, t + 0.4, t + 0.8]) {
      const from = outdoorProjection(time, start, a.duration - 2, i - 1),
        to = outdoorProjection(time, start, a.duration - 2, i);
      expect(from.height).toBe(to.height);
      expect(from.head).toBe(to.head);
      expect(from.y + outdoorFrames[i - 1].head * from.scale).toBeCloseTo(
        to.y + outdoorFrames[i].head * to.scale,
        8,
      );
    }
  });
  for (let i = 0; i < cuts.length; i++)
    expect((cuts[i + 1] ?? a.duration) - cuts[i]).toBeLessThanOrEqual(8);
});
it("grows street shapes forward and uses finite source-linked motion envelopes", () => {
  const start = 201.68;
  for (const owner of [0, 1, 2, 3]) {
    let previous = 0;
    for (let t = start; t < a.duration; t += 0.1) {
      const p = streetHaloPerformance(a, t, start, owner);
      expect(p.phase).toBeGreaterThanOrEqual(previous);
      expect(p.pulse).toBeGreaterThanOrEqual(0);
      expect(p.pulse).toBeLessThanOrEqual(1);
      previous = p.phase;
    }
    expect(previous).toBe(3);
  }
});
