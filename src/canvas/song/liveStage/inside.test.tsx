import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import LiveStage from "./LiveStage";
import SceneArtwork from "./SceneArtwork";
import inside from "./inside-seed.json";
import opening from "./opening-seed.json";
import { validateScene } from "./scene.mjs";
import { sourceFrameAt } from "../wordMotion/arrangement.mjs";
beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
it("preserves source words while making explicit room for a visual-first opening", () => {
  const p = validateScene(inside);
  expect(p.composition.durationInFrames).toBe(2643);
  expect(sourceFrameAt(p, 1199)).toBeNull();
  expect(sourceFrameAt(p, 1200)).toBe(720);
  expect(sourceFrameAt(p, 2642)).toBe(2162);
  for (const word of p.words) {
    const old = opening.words.find((w) => w.id === word.id)!;
    expect(word.sourceStart).toBe(old.sourceStart);
    expect(word.enterFrame).toBe(old.enterFrame + 480);
  }
  for (const change of ["overlap", "range", "coverage"] as const) {
    const broken = structuredClone(p);
    if (change === "overlap") broken.arrangement![1].startFrame--;
    if (change === "range") broken.arrangement![1].sourceStartFrame = 3000;
    if (change === "coverage") broken.arrangement![1].endFrame--;
    expect(() => validateScene(broken)).toThrow();
  }
});
it("keeps the same interior sash closed until the single reveal and holds its title", () => {
  const p = validateScene(inside);
  const { container, rerender } = render(<SceneArtwork project={p} frame={420} />);
  const sash = () =>
    container.querySelector('[data-opening-prop="window-sash"] path')?.getAttribute("d");
  const closed = sash();
  expect(container.textContent).not.toContain("THE WEB IS BORN");
  rerender(<SceneArtwork project={p} frame={810} />);
  expect(sash()).toBe(closed);
  rerender(<SceneArtwork project={p} frame={1120} />);
  expect(sash()).not.toBe(closed);
  expect(container.textContent).toContain("THE WEB IS BORN");
  expect(container.textContent).toContain("1991");
  rerender(<SceneArtwork project={p} frame={1199} />);
  expect(container.textContent).toContain("THE WEB IS BORN");
  rerender(<SceneArtwork project={p} frame={1200} />);
  expect(container.textContent).not.toContain("THE WEB IS BORN");
});
it("advances silent frames, maps the audio boundary, and pauses on timeline time", async () => {
  let now = 0,
    tick: FrameRequestCallback = () => {};
  vi.spyOn(performance, "now").mockImplementation(() => now);
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    tick = cb;
    return 1;
  });
  vi.stubGlobal("cancelAnimationFrame", () => {});
  const pause = vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  const play = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  const { container } = render(<LiveStage defaultProject={inside} readOnly />);
  const audio = container.querySelector("audio")!;
  // jsdom does not load media: firing loadedmetadata alone leaves readyState=0.
  // Model an actually ready recording before checking the silent-to-audio join.
  Object.defineProperty(audio, "readyState", { get: () => 4 });
  fireEvent.loadedMetadata(audio);
  fireEvent.change(screen.getByLabelText("Song time"), { target: { value: "1197" } });
  fireEvent.click(screen.getByRole("button", { name: "Play" }));
  await act(async () => {
    tick(0);
  });
  expect(play).not.toHaveBeenCalled();
  expect(pause).toHaveBeenCalled();
  now = 200;
  await act(async () => {
    tick(now);
  });
  expect(audio.currentTime).toBeCloseTo(24.1);
  expect(play).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByRole("button", { name: "Pause" }));
  expect(screen.getByLabelText("Song clock").textContent).toContain("40.10s");
  // Starting on the final frame intentionally replays from zero. Start three
  // frames before the end to exercise natural playback completion instead.
  fireEvent.change(screen.getByLabelText("Song time"), { target: { value: "2640" } });
  fireEvent.click(screen.getByRole("button", { name: "Play" }));
  await act(async () => {
    tick(now);
  });
  now = 300;
  await act(async () => {
    tick(now);
  });
  expect(screen.getByRole("button", { name: "Play" })).toBeTruthy();
  expect(screen.getByLabelText("Song clock").textContent).toContain("88.07s");
});
