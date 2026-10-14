import { expect, it } from "vitest";
import sources from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { buildVisualWordTiming, validateVisualWordTiming } from "./visualWordTiming";
for (const source of sources)
  it(`visual holds preserve source and remain nonoverlapping: ${source.id}`, () => {
    const a = source.annotation as Annotation,
      before = JSON.stringify(a),
      v = buildVisualWordTiming(a);
    expect(JSON.stringify(a)).toBe(before);
    expect(v.intervals).toHaveLength(a.items.filter((w) => w.kind === "lyric").length);
    for (let i = 0; i < v.intervals.length; i++) {
      const w = v.intervals[i];
      expect(w.end - w.start).toBeGreaterThanOrEqual(0.14 - 1e-8);
      if (i) expect(w.start).toBeGreaterThanOrEqual(v.intervals[i - 1].end - 1e-8);
      let frames = 0;
      for (let f = Math.ceil(w.start * 30); f / 30 < w.end; f++) frames++;
      expect(frames).toBeGreaterThanOrEqual(4);
    }
    expect(() => validateVisualWordTiming(a, v)).not.toThrow();
    const changed = structuredClone(v);
    changed.intervals[0].end += 1;
    expect(() => validateVisualWordTiming(a, changed)).toThrow();
    const short = v.intervals.filter((w) => w.sourceEnd - w.sourceStart < 0.021);
    expect(short.length).toBeGreaterThan(0);
    expect(short.every((w) => w.end - w.start >= 0.14 - 1e-8)).toBe(true);
  });
