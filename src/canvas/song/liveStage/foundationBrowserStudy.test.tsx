import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationOpeningStudy";
import study from "./foundationBrowserStudy";
import blocking from "./foundation-browser-blocking.json";
import { imagePose } from "./views.mjs";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
it("keeps all scored cuts and original recording/words while isolating the browser chapter", () => {
  for (const k of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(study.scenes.slice(0, 8)).toEqual(previous.scenes.slice(0, 8));
  expect(study.scenes.slice(24)).toEqual(previous.scenes.slice(24));
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("keeps lifted housing and carrying hands together throughout the action", () => {
  for (const [shot, part, hand] of [
    ["browser-05", "cover", "opening-hand"],
    ["browser-06", "shared-part", "working-hand"],
    ["browser-07", "shared-part", "working-hand"],
    ["browser-10", "rear-cover", "panel-hand"],
    ["browser-11", "connector", "connection-hand"],
  ] as const) {
    const cue = blocking.shots.find((s) => s.id === shot)!;
    const id = (role: string) => `v14-${shot}-${role}`;
    const contact = cue.actionFrame - 18;
    const a = imagePose(study, id(part), contact),
      b = imagePose(study, id(hand), contact);
    for (const frame of [contact, contact + 9, cue.actionFrame]) {
      const p = imagePose(study, id(part), frame),
        h = imagePose(study, id(hand), frame);
      expect(h.x - p.x).toBeCloseTo(b.x - a.x, 5);
      expect(h.y - p.y).toBeCloseTo(b.y - a.y, 5);
    }
  }
});
it("arrives at the dial before its change and preserves the lyric cue", () => {
  const shot = blocking.shots.find((s) => s.id === "browser-09")!;
  const hand = study.objects.find((o) => o.id === "v14-browser-09-control-hand")!;
  const control = study.objects.find((o) => o.id === "v14-browser-09-controls")!;
  expect(hand.motion![1].frame).toBeLessThanOrEqual(control.animation!.startFrame);
  const contact = imagePose(study, hand.id, control.animation!.startFrame);
  expect(contact.x + 8).toBe(control.x + control.width * 0.25);
  expect(contact.y + 30).toBe(control.y + control.height * 0.5);
  expect(shot.expectedPhraseIds).toContain("utterance-7");
});
it("renders entry/contact/result of all16setups without retained floating explanation cards", () => {
  for (const shot of blocking.shots) {
    const scene = study.scenes.find((s) => s.id === `foundation-v12-${shot.id}`)!;
    const objects = study.objects.filter((o) => scene.objectIds.includes(o.id));
    expect(
      objects.every((o) => o.kind.startsWith("story-browser-") || o.kind === "lyric-block"),
    ).toBe(true);
    for (const frame of [scene.start, shot.actionFrame, scene.end - 1]) {
      const html = renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />);
      expect(html).not.toMatch(/NaN|undefined/);
      expect(html).toContain("data-browser-blocking=");
    }
  }
});

it("keeps every action event inside its assigned original lyric interval", () => {
  for (const shot of blocking.shots) {
    const words = study.words.filter((w) => shot.expectedPhraseIds.includes(w.phraseId));
    expect(
      words.some((w) => shot.actionFrame >= w.enterFrame && shot.actionFrame < w.exitFrame),
    ).toBe(true);
    const distance = Math.abs(shot.actionFrame / 30 - shot.observedBeat.seconds);
    const score =
      70 * Math.max(0, 1 - (distance / 0.15) ** 2) + 30 * Math.min(1, shot.observedBeat.strength);
    expect(score).toBeCloseTo(shot.timingScore, 2);
    expect(shot.semanticScore).toBeNull();
  }
});
