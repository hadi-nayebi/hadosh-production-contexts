import { afterEach, it, expect, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import BoundarySlider, { boundaryAtPointer } from "./BoundarySlider";
afterEach(cleanup);
it("clamps pointer movement at both interval limits", () => {
  expect(boundaryAtPointer(-10, 0, 224, 1, 3)).toBe(1);
  expect(boundaryAtPointer(500, 0, 224, 1, 3)).toBe(3);
  expect(boundaryAtPointer(112, 0, 224, 1, 3)).toBe(2);
});
it("supports keyboard endpoints and fixed fine/coarse increments", () => {
  function Editor() {
    const [v, setV] = useState(2);
    return <BoundarySlider min={1} max={3} value={v} onChange={setV} />;
  }
  render(<Editor />);
  const s = screen.getByRole("slider");
  fireEvent.keyDown(s, { key: "ArrowRight" });
  expect(s.getAttribute("aria-valuenow")).toBe("2.01");
  fireEvent.keyDown(s, { key: "End" });
  expect(s.getAttribute("aria-valuenow")).toBe("3");
  fireEvent.keyDown(s, { key: "ArrowRight" });
  expect(s.getAttribute("aria-valuenow")).toBe("3");
  fireEvent.keyDown(s, { key: "Home" });
  expect(s.getAttribute("aria-valuenow")).toBe("1");
  fireEvent.keyDown(s, { key: "ArrowRight", shiftKey: true });
  expect(s.getAttribute("aria-valuenow")).toBe("1.1");
});
it("captures a touch drag and restores its starting value on cancellation", () => {
  function Editor() {
    const [v, setV] = useState(2);
    return <BoundarySlider min={1} max={3} value={v} onChange={setV} />;
  }
  render(<Editor />);
  const s = screen.getByRole("slider");
  Object.defineProperty(s, "getBoundingClientRect", { value: () => ({ left: 0, width: 224 }) });
  const capture = vi.fn();
  Object.defineProperty(s, "setPointerCapture", { value: capture });
  Object.defineProperty(s, "hasPointerCapture", { value: () => true });
  Object.defineProperty(s, "releasePointerCapture", { value: vi.fn() });
  const pointer = (type: string, x: number) => {
    const e = new MouseEvent(type, { bubbles: true, clientX: x, button: 0 });
    Object.defineProperties(e, { pointerId: { value: 7 }, pointerType: { value: "touch" } });
    fireEvent(s, e);
  };
  pointer("pointerdown", 112);
  expect(capture).toHaveBeenCalledWith(7);
  pointer("pointermove", 162);
  expect(s.getAttribute("aria-valuenow")).toBe("2.5");
  pointer("pointercancel", 162);
  expect(s.getAttribute("aria-valuenow")).toBe("2");
  pointer("pointermove", 200);
  expect(s.getAttribute("aria-valuenow")).toBe("2");
});
