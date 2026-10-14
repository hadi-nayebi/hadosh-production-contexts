import { expect, it } from "vitest";
import study from "./aiReadabilityStudy";
import previous from "./aiMonitorLayerStudy";
import { validateScene } from "./scene.mjs";
it("keeps audio and lyrics intact and isolates readability changes from the previous draft", () => {
  expect(study.documentId).not.toBe(previous.documentId);
  expect(study.source).toEqual(previous.source);
  expect(study.arrangement).toEqual(previous.arrangement);
  expect(study.words).toEqual(previous.words);
  expect(study.scenes.find((s) => s.start === 3679)?.boundaryTransitionFrames).toBe(0);
  expect(previous.scenes.find((s) => s.start === 3679)?.boundaryTransitionFrames).toBeUndefined();
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("keeps enlarged page words within their measured monitor plane", () => {
  for (const o of study.objects.filter((o) => o.textPlane)) {
    expect(o.x).toBeGreaterThanOrEqual(0);
    expect(o.x + o.width).toBeLessThanOrEqual(o.textPlane!.width);
    expect(o.y + o.height).toBeLessThanOrEqual(o.textPlane!.height);
  }
});
