import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, act } from "@testing-library/react";
import BoundaryMarker from "./BoundaryMarker";
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
it("both markers use actual playback crossings, ignoring paused movement and large seeks", () => {
  vi.useFakeTimers();
  const media = { currentTime: 0, paused: false, seeking: false } as HTMLAudioElement,
    audio = { current: media };
  render(
    <div>
      <BoundaryMarker
        edge="start"
        value={0.1}
        selected
        disabled={false}
        windowStart={0}
        windowEnd={1}
        audio={audio}
        onChange={() => {}}
      />
      <BoundaryMarker
        edge="end"
        value={0.2}
        selected={false}
        disabled={false}
        windowStart={0}
        windowEnd={1}
        audio={audio}
        onChange={() => {}}
      />
    </div>,
  );
  const start = screen.getByRole("slider", { name: "Start word boundary" }),
    end = screen.getByRole("slider", { name: "End word boundary" });
  act(() => {
    media.currentTime = 0.11;
    vi.advanceTimersByTime(16);
  });
  expect(start.getAttribute("data-pulse")).toBe("true");
  expect(end.getAttribute("data-pulse")).toBe("false");
  act(() => {
    media.currentTime = 0.21;
    vi.advanceTimersByTime(16);
  });
  expect(end.getAttribute("data-pulse")).toBe("true");
  act(() => {
    vi.advanceTimersByTime(250);
    media.currentTime = 0;
    vi.advanceTimersByTime(16);
    media.currentTime = 0.9;
    vi.advanceTimersByTime(16);
  });
  expect(start.getAttribute("data-pulse")).toBe("false");
  expect(end.getAttribute("data-pulse")).toBe("false");
});
it("keyboard editing identifies the requested edge and does not bubble into plot or word navigation", () => {
  const changed = vi.fn(),
    parent = vi.fn();
  render(
    <div onKeyDown={parent}>
      <BoundaryMarker
        edge="end"
        value={1}
        selected
        disabled={false}
        windowStart={0}
        windowEnd={2}
        audio={{ current: null }}
        onChange={changed}
      />
    </div>,
  );
  fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowLeft" });
  expect(changed).toHaveBeenCalledWith("end", 0.99);
  expect(parent).not.toHaveBeenCalled();
});
