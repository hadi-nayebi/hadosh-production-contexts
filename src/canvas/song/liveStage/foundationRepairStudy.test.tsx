import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import previous from "./foundationFinaleStudy";
import study from "./foundationRepairStudy";
import { validateScene } from "./scene.mjs";
import { imagePose } from "./views.mjs";
import { planReviewState } from "./FoundationPlanReview";
import { toasterStateAt } from "./FoundationToasterProps";
import SceneArtwork from "./SceneArtwork";

it("preserves source, words, all cut clocks and the previous version", () => {
  for (const k of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[k]).toEqual(previous[k]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(previous.objects.find((o) => o.id === "v16-harness-15-monitor")!.suggestion).toBe("rules");
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("shows the proposed change, then edits its preview without applying it before confirmation", () => {
  expect(planReviewState(4731).applied).toBe(false);
  expect(planReviewState(4732).applied).toBe(true);
  for (const f of [4520, 4587, 4654, 4731]) {
    const html = renderToStaticMarkup(<SceneArtwork project={study} frame={f} />);
    expect(html).toContain("Replace its heading");
    expect(html).toContain("CURRENT PAGE");
    expect(html).not.toContain("Draft saved");
  }
  const html = renderToStaticMarkup(<SceneArtwork project={study} frame={4732} />);
  expect(html).toContain("Draft saved");
  expect(html).toContain("SAVED PAGE");
  expect(html).toContain("Publishing is not allowed by this choice.");
});
it("keeps bread and grip inside the shot throughout approach and maintains their attachment", () => {
  const scene = study.scenes.find((s) => s.id.endsWith("toaster-02"))!;
  const b = study.objects.find((o) => o.id === "v17-toaster-02-chosen-bread")!;
  const h = study.objects.find((o) => o.id === "v17-toaster-02-bread-hand")!;
  for (let f = scene.start; f < h.exitFrame; f++) {
    const bread = imagePose(study, b.id, f),
      hand = imagePose(study, h.id, f);
    expect(bread.y).toBeGreaterThanOrEqual(0);
    expect(hand.y).toBeGreaterThanOrEqual(0);
    expect(bread.y + bread.height).toBeLessThan(560);
    expect(hand.x - bread.x).toBeCloseTo(h.x - b.x, 5);
    expect(hand.y - bread.y).toBeCloseTo(h.y - b.y, 5);
  }
});
it("carries late power contact across the cut without changing old versions", () => {
  expect(toasterStateAt(5212).powered).toBe(true);
  expect(toasterStateAt(5253, 5254).powered).toBe(false);
  expect(toasterStateAt(5254, 5254).powered).toBe(true);
  const plug = study.objects.find((o) => o.id === "v17-toaster-03-plug")!;
  const hand = study.objects.find((o) => o.id === "v17-toaster-03-plug-hand")!;
  expect(plug.motion).toEqual(hand.motion);
  expect(plug.motion!.at(-1)!.frame).toBe(5253);
  const next = study.scenes.find((s) => s.id.endsWith("toaster-04"))!;
  expect(next.start).toBe(5255);
  const html = renderToStaticMarkup(<SceneArtwork project={study} frame={5255} />);
  expect(html).toContain('fill="#d6a35e"');
  expect(
    study.words.some(
      (w) => w.enterFrame <= 5254 && w.exitFrame > 5254 && w.phraseId === "utterance-36",
    ),
  ).toBe(true);
});
