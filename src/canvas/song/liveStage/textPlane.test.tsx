import { expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { projectPoint, validateTextPlane, unprojectPoint, planeDragDelta } from "./textPlane.mjs";
import { imagePose } from "./views.mjs";
import { validateScene } from "./scene.mjs";
import study from "./aiMonitorLayerStudy";
import prior from "./aiMonitorStudy";
import SceneArtwork from "./SceneArtwork";
const plane = study.objects.find((o) => o.textPlane)!.textPlane!;
it("maps all four screen corners and rejects folded/degenerate planes", () => {
  for (const [i, [x, y]] of [
    [0, 0],
    [600, 0],
    [600, 350],
    [0, 350],
  ].entries()) {
    const q = projectPoint(plane, x, y);
    expect(q.x).toBeCloseTo(plane.corners[i].x);
    expect(q.y).toBeCloseTo(plane.corners[i].y);
  }
  expect(() =>
    validateTextPlane({
      ...plane,
      corners: [plane.corners[0], plane.corners[2], plane.corners[1], plane.corners[3]],
    }),
  ).toThrow();
  expect(() => validateTextPlane({ ...plane, width: 0 })).toThrow();
});
it("projects selection bounds into the same screen while preserving local editable coordinates", () => {
  const local = imagePose(study, "ai-page-learning-0", 3610, false),
    displayed = imagePose(study, "ai-page-learning-0", 3610);
  expect(local.x).toBe(30);
  expect(displayed.x).toBeGreaterThan(620);
  expect(displayed.x + displayed.width).toBeLessThan(1135);
  const copy = validateScene(JSON.parse(JSON.stringify(study)));
  expect(imagePose(copy, "ai-page-learning-0", 3610)).toEqual(displayed);
});
it("preserves source audio and prior draft and renders independent foreground plus perspective text", () => {
  expect(study.source).toEqual(prior.source);
  expect(study.arrangement).toEqual(prior.arrangement);
  expect(study.words).toEqual(prior.words);
  expect(prior.objects.some((o) => o.id === "ai-monitor-foreground")).toBe(false);
  const v = render(<SceneArtwork project={study} frame={3610} />);
  expect(
    v.container.querySelector('[data-scene-object="ai-monitor-foreground"] image'),
  ).toBeTruthy();
  expect(
    v.container.querySelector('[data-scene-object="ai-page-learning-0"] foreignObject'),
  ).toBeTruthy();
  expect(v.container.textContent).toContain("Buildasimplepage");
  cleanup();
});

it("inverts the screen projection and translates pointer movement into local edits", () => {
  for (const local of [
    { x: 30, y: 108 },
    { x: 300, y: 170 },
    { x: 550, y: 300 },
  ]) {
    const screen = projectPoint(plane, local.x, local.y);
    const restored = unprojectPoint(plane, screen.x, screen.y);
    expect(restored.x).toBeCloseTo(local.x);
    expect(restored.y).toBeCloseTo(local.y);
    const delta = planeDragDelta(plane, local, 32, -11);
    const moved = projectPoint(plane, local.x + delta.x, local.y + delta.y);
    expect(moved.x - screen.x).toBeCloseTo(32);
    expect(moved.y - screen.y).toBeCloseTo(-11);
  }
});
