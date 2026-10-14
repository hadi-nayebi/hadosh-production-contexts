import { expect, it } from "vitest";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { wordTiming, wordTimingProblem } from "./wordTiming";
import { audioAssetsFor, percussionPulses, snapToStem, stemWordPreview } from "./stemAnalysis";
import { annotationIdentity } from "./audioIdentity";

it("retains both verified masters, all formats and twelve separately measured stems", () => {
  for (const performance of performances) {
    const source = audioAssetsFor(performance.annotation.audioHash)!;
    expect(source.assets).toHaveLength(28);
    expect(source.lanes).toHaveLength(12);
    expect(source.master.sampleRate).toBe(48000);
    expect(source.master.channels).toBe(2);
    expect(source.master.duration).toBeCloseTo(performance.annotation.duration, 3);
    expect(source.lanes.every((l) => l.events.length > 100)).toBe(true);
    expect(
      annotationIdentity(source.master.sha256, {
        annotation: performance.annotation,
        playbackSha256: source.master.sha256,
      }),
    ).toBe(performance.annotation.audioHash);
    expect(
      annotationIdentity("unrelated", {
        annotation: performance.annotation,
        playbackSha256: source.master.sha256,
      }),
    ).toBe("unrelated");
    const pulse = percussionPulses(performance.annotation.audioHash)[20];
    expect(snapToStem(pulse.time + 0.001, performance.annotation.audioHash)).toBe(pulse.time);
  }
});

it("keeps estimated words ordered and leaves authoritative timing and history untouched", () => {
  const a = structuredClone(performances[0].annotation) as Annotation;
  a.wordTiming = wordTiming(a);
  const before = JSON.stringify(a),
    result = stemWordPreview(a);
  expect(result.matched).toBe(397);
  expect(result.changedIds.length).toBeGreaterThan(0);
  expect(wordTimingProblem(result.annotation, wordTiming(result.annotation).intervals)).toBeNull();
  expect(JSON.stringify(a)).toBe(before);
  expect(result.annotation.revision).toBe(a.revision);
  expect(result.annotation.wordTiming?.revision).toBe(a.wordTiming.revision);
  expect(result.annotation.boundaries).toEqual(a.boundaries);
  const id = result.changedIds[0];
  a.wordTiming.history = [structuredClone(a.wordTiming.intervals)];
  const edited = a.wordTiming.intervals.find((w) => w.id === id)!;
  edited.start += 0.001;
  expect(stemWordPreview(a).changedIds).not.toContain(id);
  expect(wordTiming(stemWordPreview(a).annotation).intervals.find((w) => w.id === id)).toEqual(
    edited,
  );
});
