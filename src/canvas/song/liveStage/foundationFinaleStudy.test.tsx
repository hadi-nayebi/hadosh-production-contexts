import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationToasterStudy";
import study from "./foundationFinaleStudy";
import blocking from "./foundation-finale-blocking.json";
import SceneArtwork from "./SceneArtwork";
import OpeningProps from "./OpeningProps";
import { validateScene } from "./scene.mjs";
import { imagePose } from "./views.mjs";
it("preserves source, cut evidence and all earlier chapters", () => {
  for (const k of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes.slice(0, 64)).toEqual(previous.scenes.slice(0, 64));
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("renders each callback at its donor action clock rather than an already completed state", () => {
  for (const o of study.objects.filter((o) => o.id.startsWith("v18-") && o.performanceClock)) {
    const c = o.performanceClock!,
      source = previous.objects.find((s) => o.id.endsWith(":" + s.id))!;
    for (const f of [o.enterFrame, o.exitFrame - 1]) {
      const sourceFrame = c.sourceStart + f - c.timelineStart;
      expect(renderToStaticMarkup(<OpeningProps object={o} frame={f} />)).toEqual(
        renderToStaticMarkup(<OpeningProps object={source} frame={sourceFrame} />),
      );
    }
  }
});
it("leaves notes and tools after disconnect without inventing instrumental lyrics", () => {
  const shot = blocking.shots[6];
  for (const f of [shot.eventFrame - 1, shot.eventFrame]) {
    const html = renderToStaticMarkup(<SceneArtwork project={study} frame={f} />);
    expect(html).toContain("Clear words.");
    expect(html).toContain("Publish: ask every time");
    expect(html.includes("Model disconnected")).toBe(f === shot.eventFrame);
    if (f < shot.eventFrame) expect(html).toContain("Model C");
  }
  for (const s of study.scenes.slice(70))
    expect(s.objectIds.some((id) => id.startsWith("foundation-utterance-"))).toBe(false);
});
it("makes the final wide cut visibly different and keeps Earth travelling to the last frame", () => {
  const a = study.objects.find((o) => o.id === "v18-finale-11-travelling-earth")!,
    b = study.objects.find((o) => o.id === "v18-finale-12-travelling-earth")!;
  const cut = study.scenes[75].start;
  expect(b.width).toBe(a.width / 2);
  expect(b.x).not.toBe(a.x);
  expect(imagePose(study, b.id, 6803).x).toBeGreaterThan(imagePose(study, b.id, cut).x);
});
it("scores actual eligible events and renders all finale boundaries", () => {
  for (const s of blocking.shots) {
    const active = study.words.filter(
      (w) => w.enterFrame <= s.eventFrame && w.exitFrame > s.eventFrame,
    );
    if (s.expectedPhraseIds.length)
      expect(active.some((w) => s.expectedPhraseIds.includes(w.phraseId))).toBe(true);
    else expect(active).toHaveLength(0);
    if (s.eventType === "continuity-hold") expect(s.timingScore).toBeNull();
    else {
      const d = Math.abs(s.eventFrame / 30 - s.observedBeat.seconds);
      expect(
        70 * Math.max(0, 1 - (d / 0.15) ** 2) +
          30 * (d <= 0.15 ? Math.min(1, s.observedBeat.strength) : 0),
      ).toBeCloseTo(s.timingScore!, 2);
    }
    for (const f of [s.startFrame, s.eventFrame, s.endFrame - 1])
      expect(renderToStaticMarkup(<SceneArtwork project={study} frame={f} />)).not.toMatch(
        /NaN|undefined/,
      );
  }
});
