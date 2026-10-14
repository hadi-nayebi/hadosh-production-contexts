import { expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import seed from "./original-combined-seed.json";
import { validateScene, sceneAt } from "./scene.mjs";
import { sourceFrameAt } from "../wordMotion/arrangement.mjs";
import SceneArtwork from "./SceneArtwork";
it("plays uninterrupted original audio through every frame and preserves JSON state", () => {
  const p = validateScene(seed);
  for (let f = 0; f < 1089; f++) expect(sourceFrameAt(p, f)).toBe(f);
  expect(validateScene(JSON.parse(JSON.stringify(p)))).toEqual(p);
  expect(p.arrangement).toHaveLength(1);
});
it("keeps spoken phrases inside and places Earth in the existing musical interval", () => {
  const p = validateScene(seed);
  for (const frame of [42, 119, 187, 238, 353]) expect(sceneAt(p, frame).id).toMatch(/invitation/);
  expect(sceneAt(p, 360).id).toBe("earth-capabilities");
  const { container, rerender } = render(<SceneArtwork project={p} frame={50} />);
  expect(container.textContent).toContain("Come closer");
  rerender(<SceneArtwork project={p} frame={680} />);
  expect(container.querySelector('[data-opening-prop="window-sash"]')).toBeTruthy();
  rerender(<SceneArtwork project={p} frame={700} />);
  expect(container.textContent).toContain("THE WEB IS BORN");
  cleanup();
});
