import { imagePose } from "./views.mjs";
import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationHarnessStudy";
import study from "./foundationToasterStudy";
import blocking from "./foundation-toaster-blocking.json";
import { toasterEvents as e, toasterStateAt as state } from "./FoundationToasterProps";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
it("preserves all source material, cut evidence and outside chapters", () => {
  for (const k of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(study.scenes.slice(0, 56)).toEqual(previous.scenes.slice(0, 56));
  expect(study.scenes.slice(64)).toEqual(previous.scenes.slice(64));
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("inserts chosen bread before power, dial control and eventual toast", () => {
  expect(e["toaster-02"]).toBeLessThan(e["toaster-03"]);
  expect(e["toaster-03"]).toBeLessThan(e["toaster-04"]);
  expect(e["toaster-04"]).toBeLessThan(e["toaster-08"]);
  expect(state(e["toaster-03"] - 1).powered).toBe(false);
  expect(state(e["toaster-03"]).powered).toBe(true);
  const bread = study.objects.find((o) => o.id === "v17-toaster-02-chosen-bread")!;
  const hand = study.objects.find((o) => o.id === "v17-toaster-02-bread-hand")!;
  expect(hand.motion).toEqual(bread.motion);
  const plug = study.objects.find((o) => o.id === "v17-toaster-03-plug")!;
  expect(plug.motion!.at(-1)!.frame).toBeLessThan(e["toaster-03"]);
});
it("does not invent beat evidence for the lyric-bound power event", () => {
  for (const s of blocking.shots) {
    expect(
      study.words.some(
        (w) =>
          s.expectedPhraseIds.includes(w.phraseId) &&
          w.enterFrame <= s.eventFrame &&
          w.exitFrame > s.eventFrame,
      ),
    ).toBe(true);
    if (s.eventType === "continuity-hold") expect(s.timingScore).toBeNull();
    else {
      const d = Math.abs(s.eventFrame / 30 - s.observedBeat.seconds);
      expect(
        70 * Math.max(0, 1 - (d / 0.15) ** 2) +
          30 * (d <= 0.15 ? Math.min(1, s.observedBeat.strength) : 0),
      ).toBeCloseTo(s.timingScore!, 2);
    }
  }
  expect(blocking.shots[2].timingScore).toBe(0);
});
it("changes displayed model while retaining the same notes and tools", () => {
  const before = renderToStaticMarkup(<SceneArtwork project={study} frame={e["toaster-07"] - 1} />),
    after = renderToStaticMarkup(<SceneArtwork project={study} frame={e["toaster-07"]} />);
  expect(before).toContain("Model B");
  expect(after).toContain("Model C");
  for (const html of [before, after]) {
    expect(html).toContain("Clear words.");
    expect(html).toContain("Skip the pitch.");
    expect(html).toContain("Publish: ask every time");
  }
});
it("renders every entry/action/exit and keeps captions last", () => {
  for (const s of blocking.shots)
    for (const frame of [s.startFrame, s.eventFrame, s.endFrame - 1])
      expect(renderToStaticMarkup(<SceneArtwork project={study} frame={frame} />)).not.toMatch(
        /NaN|undefined/,
      );
  const first = study.objects.findIndex((o) => o.kind === "lyric-block");
  expect(study.objects.slice(first).every((o) => o.kind === "lyric-block")).toBe(true);
});

it("keeps the bread grip registered throughout insertion and retrieval", () => {
  for (const id of ["toaster-02", "toaster-08"]) {
    const shot = blocking.shots.find((s) => s.id === id)!;
    for (let f = shot.startFrame; f < shot.endFrame; f += 3) {
      const bread = imagePose(study, `v17-${id}-chosen-bread`, f),
        hand = imagePose(study, `v17-${id}-bread-hand`, f);
      expect(hand.x + 8).toBeCloseTo(bread.x + bread.width * 0.85, 5);
      expect(hand.y + 30).toBeCloseTo(bread.y + 55, 5);
    }
  }
});
