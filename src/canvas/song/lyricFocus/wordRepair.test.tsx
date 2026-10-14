import { it, expect } from "vitest";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { newWordRepair, parseWordRepair, repairProblem, applyWordRepair } from "./wordRepair";
import { wordTiming, validateWordTiming } from "./wordTiming";
import { buildWordPreview, previewKeys } from "./wordPreviewStore";
for (const p of performances)
  it(`recoverable invalid drafts and explicit repair: ${p.id}`, async () => {
    const a = p.annotation as Annotation,
      d = newWordRepair(a),
      before = JSON.stringify(a);
    d.words[0].end = String(Number(d.words[1].start) + 0.01);
    expect(repairProblem(a, d)).toMatch(/overlap/i);
    const restored = parseWordRepair(JSON.stringify(d), a);
    expect(restored.words).toEqual(d.words);
    expect(() => applyWordRepair(a, restored)).toThrow();
    restored.words[1].start = restored.words[0].end;
    expect(repairProblem(a, restored)).toBeNull();
    const applied = applyWordRepair(a, restored);
    validateWordTiming(applied);
    expect(wordTiming(applied).intervals[0].end).toBe(Number(d.words[0].end));
    expect(JSON.stringify(a)).toBe(before);
    const map = new Map<string, string>(),
      keys = previewKeys(a, true),
      store = {
        getItem: (k: string) => map.get(k) ?? null,
        setItem: (k: string, v: string) => {
          map.set(k, v);
        },
      };
    await buildWordPreview(store, a, true, async () => {});
    const ready = map.get(keys.history);
    map.set(`${keys.saved}:word-repair`, JSON.stringify(d));
    await expect(buildWordPreview(store, a, true, async () => {})).rejects.toThrow(/repair/i);
    expect(map.get(keys.history)).toBe(ready);
  });
it("retains inversion, empty and out-of-range first/last boundaries without approving", () => {
  const a = performances[0].annotation as Annotation;
  for (const [i, edge, value] of [
    [0, "start", "-1"],
    [0, "end", "0"],
    [0, "start", ""],
    [wordTiming(a).intervals.length - 1, "end", String(a.duration + 1)],
  ] as const) {
    const d = newWordRepair(a);
    d.words[i][edge] = value;
    expect(parseWordRepair(JSON.stringify(d), a).words[i][edge]).toBe(value);
    expect(repairProblem(a, d)).toBeTruthy();
    expect(() => applyWordRepair(a, d)).toThrow();
  }
});
