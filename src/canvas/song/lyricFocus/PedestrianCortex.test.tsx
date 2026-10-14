import { it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import PedestrianCortex, { womanFrames } from "./PedestrianCortex";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("keeps one portrait and a fixed body placement through growth, without changing source", () => {
  const before = JSON.stringify(a);
  const r = render(<PedestrianCortex annotation={a} time={221} start={201.68} view={2} />);
  const pose = (document.querySelector("[data-pedestrian-cortex]") as HTMLElement).style.cssText;
  r.rerender(<PedestrianCortex annotation={a} time={222.8} start={201.68} view={2} />);
  expect(document.querySelectorAll('[data-pedestrian-cortex="1"]')).toHaveLength(1);
  expect(document.querySelectorAll('[data-woman-part="portrait"]')).toHaveLength(1);
  expect((document.querySelector("[data-pedestrian-cortex]") as HTMLElement).style.cssText).toBe(
    pose,
  );
  expect(JSON.stringify(a)).toBe(before);
  expect(womanFrames[4][2]).toBeLessThan(90);
  for (const [x, crown, foot] of womanFrames) {
    expect(x).toBeGreaterThan(0);
    expect(foot).toBeGreaterThan(crown);
  }
});
