import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import SeekPlayhead from "./SeekPlayhead";
afterEach(cleanup);
it("seeks only playback with keyboard, clamps edges, and stops parent gestures", () => {
  const el = document.createElement("audio");
  el.currentTime = 3;
  let parentKeys = 0,
    parentPointers = 0;
  render(
    <div onKeyDown={() => parentKeys++} onPointerDown={() => parentPointers++}>
      <span>
        <SeekPlayhead audio={{ current: el }} start={0} end={10} duration={10} />
      </span>
    </div>,
  );
  const handle = screen.getByRole("slider", { name: "Playback position" });
  fireEvent.keyDown(handle, { key: "ArrowRight" });
  expect(el.currentTime).toBe(4);
  fireEvent.keyDown(handle, { key: "ArrowLeft", shiftKey: true });
  expect(el.currentTime).toBe(0);
  fireEvent.keyDown(handle, { key: "End" });
  expect(el.currentTime).toBe(10);
  fireEvent.keyDown(handle, { key: "ArrowRight" });
  expect(el.currentTime).toBe(10);
  expect(parentKeys).toBe(0);
  handle.setPointerCapture = () => {};
  fireEvent.pointerDown(handle, { pointerId: 1 });
  expect(parentPointers).toBe(0);
});
