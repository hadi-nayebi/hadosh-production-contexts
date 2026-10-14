import { it, expect } from "vitest";
import packages from "./v0Performance.json";
import { type Performance, exportAudioAnchors, timedContainers } from "./audioAnchors";
import { adjustBoundary, parseAnnotation, undoAnnotation } from "./audioAnnotation";
import { initialDraft } from "./model";
it("covers each recording with 16 contiguous sections and distinct phrase/word evidence", () => {
  for (const raw of packages) {
    const p = raw as Performance,
      a = p.annotation,
      sections = timedContainers(a, p.containers);
    expect(sections).toHaveLength(16);
    expect(sections[0].start).toBe(0);
    expect(sections.at(-1)?.end).toBe(a.duration);
    expect(sections.slice(1).every((s, i) => s.start === sections[i].end)).toBe(true);
    expect(new Set(p.phrases.map((f) => f.id)).size).toBe(p.phrases.length);
    expect(
      p.phrases.every((f) => f.first <= f.last && a.items[f.first].groupId === f.sectionId),
    ).toBe(true);
    expect(p.lanes).toHaveLength(4);
    expect(p.annotation.items.some((w) => w.text === "tracking.")).toBe(true);
    expect(p.report.humanVerifiedWords).toBe(0);
    expect(parseAnnotation(JSON.stringify(a), initialDraft(), a.audioHash, a.duration, a)).toEqual(
      a,
    );
  }
});
it("exports current section and phrase times with immutable origins and a recoverable edit history", () => {
  const p = packages[0] as Performance,
    a = p.annotation;
  const n = p.containers[2].first;
  const edited = adjustBoundary(a, n, (a.boundaries[n - 1] + a.boundaries[n + 1]) / 2);
  const exported = exportAudioAnchors(p, edited);
  expect(exported.containers[2].start).toBe(edited.boundaries[n]);
  expect(exported.containers[1].end).toBe(exported.containers[2].start);
  expect(exported.containers[2].originalStart).toBe(a.boundaries[n]);
  expect(exported.annotation.history).toHaveLength(1);
  expect(undoAnnotation(edited).boundaries).toEqual(a.boundaries);
  expect(() => exportAudioAnchors(packages[1] as Performance, edited)).toThrow("mismatch");
  expect(
    parseAnnotation(
      JSON.stringify(exported.annotation),
      initialDraft(),
      a.audioHash,
      a.duration,
      a,
    ),
  ).toEqual(edited);
});
it("rejects altered source origins and imported intervals below the minimum", () => {
  const a = (packages[0] as Performance).annotation;
  const altered = structuredClone(a);
  altered.original[1] += 0.001;
  expect(() =>
    parseAnnotation(JSON.stringify(altered), initialDraft(), a.audioHash, a.duration, a),
  ).toThrow("mismatch");
  const short = structuredClone(a);
  short.boundaries[1] = short.boundaries[2] - 0.001;
  expect(() =>
    parseAnnotation(JSON.stringify(short), initialDraft(), a.audioHash, a.duration, a),
  ).toThrow("Minimum");
});
