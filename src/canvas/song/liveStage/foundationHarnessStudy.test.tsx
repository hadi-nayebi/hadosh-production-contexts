import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationFeedStudy";
import study from "./foundationHarnessStudy";
import { harnessEvents as e, harnessStateAt as state } from "./foundationHarnessState";
import blocking from "./foundation-harness-blocking.json";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
it("preserves audio, original words, cut clock and all outside chapters", () => {
  for (const k of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(study.scenes.slice(0, 36)).toEqual(previous.scenes.slice(0, 36));
  expect(study.scenes.slice(56)).toEqual(previous.scenes.slice(56));
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("requires a corrected and checked draft before publication and preserves the result", () => {
  expect(e["harness-04"]).toBeLessThan(e["harness-05"]);
  expect(e["harness-05"]).toBeLessThan(e["harness-06"]);
  expect(e["harness-06"]).toBeLessThan(e["harness-07"]);
  expect(state(e["harness-07"] - 1).published).toBe(false);
  expect(state(e["harness-07"])).toMatchObject({ published: true, checked: true, corrected: true });
  expect(state(4999)).toMatchObject({ published: true, checked: true, corrected: true });
});
it("retains the same instruction and work when changing models; pending tool request waits for confirmation", () => {
  expect(state(e["harness-14"] - 1)).toMatchObject({
    model: "A",
    instructionSaved: true,
    instructionEdited: true,
    published: true,
  });
  expect(state(e["harness-14"])).toMatchObject({
    model: "B",
    instructionSaved: true,
    instructionEdited: true,
    published: true,
    pending: true,
  });
  expect(state(e["harness-18"] - 1)).toMatchObject({
    pending: true,
    finalEdit: true,
    confirmed: false,
  });
  expect(state(e["harness-18"])).toMatchObject({ pending: false, confirmed: true });
});
it("keeps musical action evidence inside its original phrase, with holds unscored", () => {
  for (const s of blocking.shots) {
    const active = study.words.filter(
      (w) => w.enterFrame <= s.eventFrame && w.exitFrame > s.eventFrame,
    );
    if (s.expectedPhraseIds.length)
      expect(active.some((w) => s.expectedPhraseIds.includes(w.phraseId))).toBe(true);
    else expect(active).toHaveLength(0);
    if (s.eventType === "continuity-hold") expect(s.timingScore).toBeNull();
    else
      expect(
        70 * Math.max(0, 1 - ((s.eventFrame / 30 - s.observedBeat.seconds) / 0.15) ** 2) +
          30 * Math.min(1, s.observedBeat.strength),
      ).toBeCloseTo(s.timingScore!, 2);
  }
});
it("has hand contact before approval and renders all entry/action/exit frames without caption occlusion order", () => {
  for (const id of ["harness-07", "harness-12", "harness-18"]) {
    const hand = study.objects.find((o) => o.id === `v16-${id}-acting-hand`)!;
    expect(hand.motion![1].frame).toBeLessThan(e[id]);
  }
  for (const s of blocking.shots)
    for (const frame of [s.startFrame, s.eventFrame, s.endFrame - 1]) {
      const html = renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />);
      expect(html).not.toMatch(/NaN|undefined/);
      expect(html).toContain('data-harness="physical-monitor"');
    }
  const first = study.objects.findIndex((o) => o.kind === "lyric-block");
  expect(study.objects.slice(first).every((o) => o.kind === "lyric-block")).toBe(true);
});
