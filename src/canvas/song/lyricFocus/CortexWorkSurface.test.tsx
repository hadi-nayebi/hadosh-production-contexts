import { expect, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { cortexModules } from "./InstructionCortex";
import CortexWorkSurface, { workSurfaceState } from "./CortexWorkSurface";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("binds draft checks and human permission to actual phrase cues, preserving source", () => {
  const before = JSON.stringify(a),
    modules = cortexModules(a);
  const t = (i: number) => modules[i].words[0].start;
  expect(workSurfaceState(modules, t(0) - 0.1).draft).toBe(0);
  const wait = workSurfaceState(modules, t(10) + 0.1);
  expect(wait.waiting).toBe(true);
  expect(wait.published).toBe(0);
  expect(workSurfaceState(modules, t(11) + 1).published).toBe(1);
  expect(workSurfaceState(modules, t(8) - 0.1).date).toBe(0);
  expect(workSurfaceState(modules, t(9) + 1).date).toBe(1);
  expect(workSurfaceState(modules, t(14) + 1)).toMatchObject({
    saved: 1,
    recall: 1,
    nextBrief: true,
    modelUnchanged: true,
    memoryId: modules[12].id,
  });
  expect(JSON.stringify(a)).toBe(before);
});
it("retains the correction identity in all three screen angles without named file labels", () => {
  const modules = cortexModules(a);
  const r = render(<CortexWorkSurface modules={modules} time={modules[15].at} view={0} />);
  for (const view of [0, 1, 2]) {
    r.rerender(<CortexWorkSurface modules={modules} time={modules[15].at} view={view} />);
    expect(
      document
        .querySelector("[data-persistent-correction]")
        ?.getAttribute("data-persistent-correction"),
    ).toBe(modules[12].id);
    expect(r.container.textContent).toBe("");
  }
});
