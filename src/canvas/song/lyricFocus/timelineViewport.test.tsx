import { expect, it } from "vitest";
import { clampViewport, zoomViewport } from "./timelineViewport";
it("keeps pointer source time stable while zooming and moving a pinch midpoint", () => {
  const next = zoomViewport(40, 20, 238, 2, 0.3, 0.6);
  expect(next.span).toBe(10);
  expect(next.start + next.span * 0.6).toBe(46);
  const restored = zoomViewport(next.start, next.span, 238, 0.5, 0.6, 0.3);
  expect(restored).toEqual({ start: 40, span: 20 });
});
it("clamps recording edges and min/max zoom", () => {
  expect(clampViewport(-20, 6, 238)).toEqual({ start: 0, span: 6 });
  expect(clampViewport(240, 6, 238)).toEqual({ start: 232, span: 6 });
  expect(zoomViewport(200, 6, 238, 0.001, 0.5)).toEqual({ start: 0, span: 238 });
  expect(zoomViewport(40, 6, 238, 1000, 0.5).span).toBe(0.25);
});
