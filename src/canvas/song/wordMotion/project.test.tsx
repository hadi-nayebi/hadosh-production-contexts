import { test, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import seed from "./seed.json";
import { validateProject, reviseWord, frameFromSource, wordPose, visibleAt } from "./project.mjs";
import WordEditor from "./WordEditor";
import MotionStage from "./MotionStage";
afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.restoreAllMocks();
});
test("real source timestamps convert once, overlap allowed, exclusive boundaries", () => {
  const p = validateProject(seed);
  expect(p.words[0].enterFrame).toBe(frameFromSource(48.32));
  expect(visibleAt(p.words[0], p.words[0].enterFrame - 1)).toBe(false);
  expect(visibleAt(p.words[0], p.words[0].enterFrame)).toBe(true);
  expect(visibleAt(p.words[0], p.words[0].exitFrame)).toBe(false);
  expect(wordPose(p.words[0], p.words[0].enterFrame + 4).dy).toBe(0);
  expect(validateProject(reviseWord(p, "w002", { enterFrame: 7 }))).toBeTruthy();
});
test("reject wrong audio, malformed coordinates, reversed timing and invalid phrase IDs", () => {
  for (const mutate of [
    (p: any) => (p.source.sha256 = "wrong"),
    (p: any) => (p.words[0].x = Infinity),
    (p: any) => (p.words[0].exitFrame = 0),
    (p: any) => p.phrases[0].wordIds.push("missing"),
  ]) {
    const p = structuredClone(seed);
    mutate(p);
    expect(() => validateProject(p)).toThrow();
  }
});
test("shared stage uses exact edited frame, position and exit", () => {
  const p = reviseWord(validateProject(seed), "w001", {
    enterFrame: 10,
    exitFrame: 29,
    x: 115,
    y: 145,
  });
  const html = (frame: number) => renderToStaticMarkup(<MotionStage project={p} frame={frame} />);
  expect(html(9)).not.toContain('data-word-id="w001"');
  expect(html(10)).toContain('data-word-id="w001" x="115"');
  expect(html(14)).toContain('y="145"');
  expect(html(29)).not.toContain('data-word-id="w001"');
  expect(validateProject(JSON.parse(JSON.stringify(p)))).toEqual(p);
});
test("numeric edits undo redo save reload and backward seek retain exact project", () => {
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  const view = render(<WordEditor />);
  fireEvent.change(screen.getByLabelText("Enter frame"), { target: { value: "10" } });
  fireEvent.change(screen.getByLabelText("Exit frame (exclusive)"), { target: { value: "29" } });
  fireEvent.change(screen.getByLabelText("X position"), { target: { value: "115" } });
  fireEvent.click(screen.getByText("Undo"));
  expect((screen.getByLabelText("X position") as HTMLInputElement).value).toBe("85");
  fireEvent.click(screen.getByText("Redo"));
  fireEvent.click(screen.getByText("Save locally *"));
  view.unmount();
  render(<WordEditor />);
  expect((screen.getByLabelText("Enter frame") as HTMLInputElement).value).toBe("10");
  expect((screen.getByLabelText("Exit frame (exclusive)") as HTMLInputElement).value).toBe("29");
  expect((screen.getByLabelText("X position") as HTMLInputElement).value).toBe("115");
  fireEvent.change(screen.getByLabelText("Playhead"), { target: { value: "400" } });
  fireEvent.change(screen.getByLabelText("Playhead"), { target: { value: "5" } });
  expect(screen.getByLabelText("Position w001 Add").className).toContain("ghost");
});
test("corrupt saved data stays untouched and cannot be silently overwritten", () => {
  localStorage.setItem("canvas-word-motion-l1-v1", "broken");
  render(<WordEditor />);
  fireEvent.click(screen.getByText("Save locally"));
  expect(localStorage.getItem("canvas-word-motion-l1-v1")).toBe("broken");
  expect(document.querySelector(".we-status")!.textContent).toContain("backup");
});

test("paused seek rounds exact frame after media floating-point conversion", () => {
  render(<WordEditor />);
  const audio = document.querySelector("audio")!;
  fireEvent.change(screen.getByLabelText("Playhead"), { target: { value: "14" } });
  audio.currentTime = 14 / 30;
  fireEvent.seeked(audio);
  expect((screen.getByLabelText("Playhead") as HTMLInputElement).value).toBe("14");
});
test("malformed import preserves the working project", async () => {
  render(<WordEditor />);
  const file = {
    text: async () => JSON.stringify({ ...seed, source: { ...seed.source, sha256: "wrong" } }),
  };
  fireEvent.change(screen.getByLabelText("Import JSON"), { target: { files: [file] } });
  await screen.findByText(/Import rejected/);
  expect((screen.getByLabelText("Enter frame") as HTMLInputElement).value).toBe("7");
});
