import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import LiveStage from "./LiveStage";
import seed from "./original-combined-seed.json";
let tick: FrameRequestCallback;
let time = 0;
let paused = true;
let writes: number[];
beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  time = 0;
  paused = true;
  writes = [];
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    tick = callback;
    return 1;
  });
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {
    paused = true;
  });
  vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(async () => {
    paused = false;
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
function mount() {
  const view = render(<LiveStage defaultProject={seed} storageKey="audio-owner-test" />);
  const audio = view.container.querySelector("audio")!;
  Object.defineProperties(audio, {
    readyState: { get: () => 4 },
    ended: { get: () => false },
    paused: { get: () => paused },
    currentTime: {
      get: () => time,
      set: (v: number) => {
        writes.push(v);
        time = v;
      },
    },
  });
  fireEvent.loadedMetadata(audio);
  return { ...view, audio };
}
it("uses one audio clock without corrective backward seeks after delayed visual frames", async () => {
  const view = mount();
  expect(view.container.querySelectorAll("audio")).toHaveLength(1);
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Play" }));
  });
  writes = [];
  time = 4.5;
  act(() => tick(10000));
  expect(writes).toEqual([]);
  fireEvent.click(screen.getByRole("button", { name: "Pause" }));
  expect(screen.getByLabelText("Song time").getAttribute("value")).toBe("135");
  expect(paused).toBe(true);
});
it("pauses the captured media element when navigating away/unmounting", async () => {
  const view = mount();
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Play" }));
  });
  expect(view.audio.paused).toBe(false);
  view.unmount();
  expect(view.audio.paused).toBe(true);
});
it("stops a pending play promise after unmount and replays from zero at the end", async () => {
  const view = mount();
  fireEvent.change(screen.getByLabelText("Song time"), { target: { value: "1088" } });
  let finish!: () => void;
  vi.spyOn(view.audio, "play").mockImplementation(
    () =>
      new Promise<void>((resolve) => {
        finish = () => {
          paused = false;
          resolve();
        };
      }),
  );
  fireEvent.click(screen.getByRole("button", { name: "Play" }));
  expect(time).toBe(0);
  view.unmount();
  await act(async () => finish());
  expect(view.audio.paused).toBe(true);
});
