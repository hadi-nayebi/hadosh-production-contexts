import { it, expect } from "vitest";
import sources from "./v0Candidates.json";
import {
  parseAnnotation,
  adjustBoundary,
  undoAnnotation,
  type Annotation,
} from "./audioAnnotation";
import { initialDraft } from "./model";
it("keeps both exact-source packages separate with complete coverage and rhythmic lanes", () => {
  expect(new Set(sources.map((s) => s.sha256)).size).toBe(2);
  for (const s of sources) {
    const a = s.annotation as Annotation;
    expect(a.audioHash).toBe(s.sha256);
    expect(a.boundaries[0]).toBe(0);
    expect(a.boundaries.at(-1)).toBe(s.decodedDuration);
    expect(a.boundaries).toHaveLength(a.items.length + 1);
    expect(a.boundaries.slice(1).every((v, i) => v > a.boundaries[i])).toBe(true);
    expect(new Set(a.items.map((i) => i.id)).size).toBe(a.items.length);
    expect(s.lanes).toHaveLength(3);
    expect(s.lanes.every((l) => l.events.every((e) => e.time >= 0 && e.time <= a.duration))).toBe(
      true,
    );
    expect(s.sections).toHaveLength(16);
    expect(s.postedLyrics).not.toContain("Came to check on a friend");
    expect(s.postedLyrics).not.toContain("Put the time up top");
    expect(s.postedLyrics).not.toContain("Now it bears my hand");
    expect(parseAnnotation(JSON.stringify(a), initialDraft(), s.sha256, a.duration, a)).toEqual(a);
    const n = 2,
      edited = adjustBoundary(a, n, (a.boundaries[n - 1] + a.boundaries[n + 1]) / 2);
    expect(undoAnnotation(edited).boundaries).toEqual(a.boundaries);
  }
  expect(() =>
    parseAnnotation(
      JSON.stringify(sources[0].annotation),
      initialDraft(),
      sources[1].sha256,
      sources[1].decodedDuration,
      sources[1].annotation as Annotation,
    ),
  ).toThrow("mismatch");
});

import { candidateLyricUnits } from "./candidateLyrics";
it("shows the latest consolidated verse parts as 4-3-3-3-1, separate from choruses", () => {
  for (const source of sources) {
    const units = candidateLyricUnits(source.sections);
    expect(
      [1, 2, 3, 4].map((n) => units.filter((u) => u.label.startsWith(`Verse ${n}`)).length),
    ).toEqual([4, 3, 3, 3]);
    expect(units.filter((u) => u.label.startsWith("Bridge"))).toHaveLength(1);
    expect(units.filter((u) => u.label === "Chorus")).toHaveLength(3);
  }
});
