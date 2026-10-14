import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
import seed from "./checklist-seed.json";
const project = validateScene(seed);
afterEach(cleanup);
it("keeps the ingredient words while checking them and only then forms the network", () => {
  const { container, rerender } = render(<SceneArtwork project={project} frame={0} />);
  const checked = () => container.querySelectorAll('[data-ingredient][data-checked="true"]').length;
  expect(container.textContent).toContain("ElectricityTransistorsComputers");
  expect(checked()).toBe(0);
  for (const [frame, count] of [
    [60, 1],
    [150, 2],
    [240, 3],
  ]) {
    rerender(<SceneArtwork project={project} frame={frame} />);
    expect(checked()).toBe(count);
    expect(container.querySelectorAll("[data-ingredient]")).toHaveLength(3);
  }
  expect(container.querySelector("[data-connected-computers]")?.getAttribute("opacity")).toBe("0");
  rerender(<SceneArtwork project={project} frame={390} />);
  expect(container.querySelector("[data-connected-computers]")?.getAttribute("opacity")).toBe("1");
  expect(container.querySelector("[data-internet-emerges]")?.getAttribute("opacity")).toBe("1");
  expect(container.textContent).toContain("not an invention timeline");
  expect(container.textContent).toContain("What is internet");
  rerender(<SceneArtwork project={project} frame={480} />);
  expect(container.querySelector("[data-internet-checklist]")).toBeNull();
  expect(container.textContent).toContain("29 OCT 1969");
});
