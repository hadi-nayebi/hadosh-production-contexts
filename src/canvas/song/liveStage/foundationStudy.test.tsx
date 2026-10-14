import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./aiOwnershipStudy";
import study from "./foundationStudy";
import schedule from "./scored-editorial-sequence-v11.json";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
it("keeps original media and words and assembles all scored cuts without gaps", () => {
  for (const k of ["source", "words", "arrangement", "composition", "assets"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes).toHaveLength(71);
  expect(study.scenes.map((s) => [s.start, s.end])).toEqual(
    schedule.shots.map((s) => [s.startFrame, s.endFrame]),
  );
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
  for (const s of study.scenes) {
    expect(s.end - s.start).toBeGreaterThanOrEqual(60);
    expect(s.end - s.start).toBeLessThanOrEqual(120);
    expect(s.boundaryTransitionFrames).toBe(0);
  }
  expect(schedule.detailWorkUnlocked).toBe(false);
});
it("renders every shot entry, middle and exit without missing references", () => {
  for (const s of study.scenes) {
    for (const frame of [s.start, Math.floor((s.start + s.end) / 2), s.end - 1]) {
      const html = renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />);
      expect(html).toContain("Live illustrated song scene");
      expect(html).not.toMatch(/NaN|undefined/);
    }
  }
});
it("retains one readable source-phrase block per phrase across camera cuts", () => {
  const blocks = study.objects.filter((o) => o.kind === "lyric-block");
  expect(blocks).toHaveLength(new Set(study.words.map((w) => w.phraseId)).size);
  for (const o of blocks) {
    const phrase = o.id.replace("foundation-", "");
    expect(o.text!.replace(/\n/g, " ")).toBe(
      study.words
        .filter((w) => w.phraseId === phrase)
        .map((w) => w.text)
        .join(" "),
    );
  }
});
it("rejects stale cut evidence after source mapping or boundary changes", () => {
  const a = structuredClone(study);
  a.scenes[1].cutEvidence!.measuredFrame++;
  expect(() => validateScene(a)).toThrow("Invalid cut timing evidence");
  const b = structuredClone(study);
  b.scenes[1].cutEvidence!.sourceMapping = "different mapping";
  expect(() => validateScene(b)).toThrow("Invalid cut timing evidence");
  const c = structuredClone(study);
  c.scenes[1].cutEvidence!.frequencyBands.low = -1;
  expect(() => validateScene(c)).toThrow("Invalid cut timing evidence");
});
