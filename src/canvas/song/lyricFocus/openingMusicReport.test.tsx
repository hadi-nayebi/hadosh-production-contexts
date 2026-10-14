import { expect, it } from "vitest";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { openingMusicReport } from "./openingMusicReport";
import { openingDefaults } from "./openingDirection";
const a = performances[0].annotation as Annotation;
it("reports actual musical proximity without silently snapping human cue overrides", () => {
  const before = JSON.stringify(a);
  const normal = openingMusicReport(a)!;
  // Baseline fixture ends earlier than savedr39: no four late keyboard bursts.
  expect(normal.eventCount).toBe(63);
  expect(normal.matched).toBe(normal.eventCount);
  expect(normal.maxErrorMs).toBeLessThan(8);
  const custom = openingMusicReport(a, {
    ...openingDefaults,
    events: { "question-what": 21.99 },
  })!;
  expect(custom.events.find((e) => e.id === "question-what")?.time).toBe(21.99);
  expect(custom.score).toBeLessThan(100);
  expect(JSON.stringify(a)).toBe(before);
});
