import { it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import CortexWalker, { walkerCues, walkerPerformance, walkerRegistration } from "./CortexWalker";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("grows without changing body registration or crossfading full figures", () => {
  const before = JSON.stringify(a),
    c = walkerCues(a, 201.68);
  const r = render(
    <CortexWalker
      annotation={a}
      time={c.growth[2] - 0.1}
      start={201.68}
      x={50}
      head={34}
      height={61}
    />,
  );
  const placement = (document.querySelector("[data-cortex-walker]") as HTMLElement).style.cssText;
  r.rerender(
    <CortexWalker
      annotation={a}
      time={c.growth[2] + 0.4}
      start={201.68}
      x={50}
      head={34}
      height={61}
    />,
  );
  expect((document.querySelector("[data-cortex-walker]") as HTMLElement).style.cssText).toBe(
    placement,
  );
  expect(document.querySelectorAll("[data-cortex-walker]")).toHaveLength(1);
  expect(
    document.querySelectorAll('[data-walker-head] [data-integrated-part="portrait"]'),
  ).toHaveLength(1);
  expect(walkerRegistration.offsets).toEqual([0, 5, 9, 4]);
  expect(JSON.stringify(a)).toBe(before);
});
it("keeps source-linked motion continuous through step events and never reports future triggers", () => {
  const c = walkerCues(a, 201.68);
  expect(walkerPerformance(c.steps[0].time - 0.01, c).event).toBeUndefined();
  const e = c.steps[4];
  expect(
    Math.abs(
      walkerPerformance(e.time + 0.00001, c).phase - walkerPerformance(e.time - 0.00001, c).phase,
    ),
  ).toBeLessThan(0.01);
  expect(walkerPerformance(e.time + 0.18, c).pulse).toBeGreaterThan(0.4);
  expect(c.steps.every((e, i) => !i || e.time - c.steps[i - 1].time >= 0.38)).toBe(true);
  for (let t = 201.68; t < 238; t += 0.13) {
    const p = walkerPerformance(t, c);
    expect(Number.isFinite(p.phase)).toBe(true);
    expect(p.blend).toBeGreaterThanOrEqual(0);
    expect(p.blend).toBeLessThanOrEqual(1);
  }
});
