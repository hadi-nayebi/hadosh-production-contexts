import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import seed from "./seed.json";
import LiveStage from "./LiveStage";
import MotionStage from "../wordMotion/MotionStage";
import {
  validateScene,
  evaluateObject,
  editObject,
  shiftTiming,
  groupObjects,
  ungroup,
  applySuggestion,
  splitScene,
  SCENE_KEY,
} from "./scene.mjs";
const fresh = () => validateScene(structuredClone(seed));
describe("live scene document", () => {
  it("keeps cue identity when the displayed word changes", () => {
    let p = fresh();
    const before = evaluateObject(p, "extension");
    p = applySuggestion(editObject(p, "w003", { suggestion: "extension" }), "w003");
    expect(evaluateObject(p, "extension")).toEqual(before);
    expect(p.words.find((w) => w.id === "w003")?.originalText).toBe(
      seed.words.find((w) => w.id === "w003")?.originalText,
    );
  });
  it("moves compound children together and ungroup preserves world poses", () => {
    let p = fresh();
    p = editObject(p, "controls", { x: -10, y: 20 });
    p = shiftTiming(p, "controls", "move", 5);
    const before = ["extension", "tracking"].map((id) => evaluateObject(p, id));
    const u = ungroup(p, "controls");
    before.forEach((n) =>
      expect(evaluateObject(u, n.id)).toMatchObject({
        x: n.x,
        y: n.y,
        enter: n.enter,
        exit: n.exit,
      }),
    );
  });
  it("counts shared cue ancestry once", () => {
    let p = fresh();
    p = editObject(p, "extension", { parentId: null, x: 1005, y: 317 });
    p = groupObjects(p, ["extension", "w003"]);
    const g = p.objects.at(-1)!;
    const before = evaluateObject(p, "extension");
    p = shiftTiming(p, g.id, "move", 4);
    expect(evaluateObject(p, "extension").enter).toBe(before.enter + 4);
    const u = ungroup(p, g.id);
    expect(evaluateObject(u, "extension").enter).toBe(before.enter + 4);
  });
  it("inherits group scale and preserves child geometry on ungroup", () => {
    let p = editObject(fresh(), "controls", { scale: 0.5 });
    const n = evaluateObject(p, "extension");
    expect(n.width).toBe(14);
    expect(n.x).toBe(215 + 790 * 0.5);
    p = ungroup(p, "controls");
    expect(evaluateObject(p, "extension")).toMatchObject({
      x: n.x,
      y: n.y,
      width: n.width,
      height: n.height,
    });
  });
  it("rejects cycles, out-of-bounds motion and invalid scene memberships", () => {
    expect(() => editObject(fresh(), "browser", { parentId: "controls" })).toThrow();
    expect(() => editObject(fresh(), "w001", { x: -5 })).toThrow();
    const p = fresh();
    p.scenes[0].objectIds.push("unknown");
    expect(() => validateScene(p)).toThrow();
  });
  it("partitions settings without moving audio, objects or downstream cues", () => {
    const p = fresh();
    const n = splitScene(p, "browser-setting", 300, "A doorway; art pending");
    expect(n.scenes.map((s) => [s.start, s.end])).toEqual([
      [0, 300],
      [300, 720],
    ]);
    expect(n.source).toEqual(p.source);
    expect(n.objects).toEqual(p.objects);
    expect(n.scenes[1].objectIds).toEqual([]);
    expect(() => splitScene(p, "browser-setting", 0, "bad boundary")).toThrow();
  });
  it("uses the exact object data in shared artwork", () => {
    const p = editObject(fresh(), "w001", { x: 99 });
    const html = renderToStaticMarkup(<MotionStage project={p} frame={30} />);
    expect(html).toContain('data-scene-object="w001" x="99"');
    const split = splitScene(p, "browser-setting", 300, "Doorway brief");
    const markup = renderToStaticMarkup(<MotionStage project={split} frame={400} />);
    expect(markup).toContain("ASSET PENDING");
    expect(markup).not.toContain('data-scene-object="window"');
  });
});
describe("live stage interactions", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );
    localStorage.clear();
    sessionStorage.clear();
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });
  it("keeps object timing separate from song time and undo survives edits", () => {
    render(<LiveStage />);
    fireEvent.click(screen.getByRole("button", { name: "Select Add" }));
    fireEvent.click(screen.getByRole("button", { name: "timing" }));
    fireEvent.change(screen.getByLabelText("What should the dial change?"), {
      target: { value: "entry" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Forward one frame" }));
    expect(screen.getByText(/8 → 53 frames/)).toBeTruthy();
    expect(screen.getByLabelText("Song clock").textContent).toContain("1.00");
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Undo" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(
      JSON.parse(localStorage.getItem(SCENE_KEY)!).objects.find(
        (o: { id: string }) => o.id === "w001",
      ).enterFrame,
    ).toBe(7);
  });
  it("playing hides editing tools and Escape keeps edits", async () => {
    const { container } = render(<LiveStage />);
    fireEvent.loadedMetadata(container.querySelector("audio")!);
    fireEvent.click(screen.getByRole("button", { name: "Select Add" }));
    fireEvent.click(screen.getByRole("button", { name: "position" }));
    fireEvent.change(screen.getByLabelText("Object X"), { target: { value: "95" } });
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByLabelText("Object tools")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(
      JSON.parse(localStorage.getItem(SCENE_KEY)!).objects.find(
        (o: { id: string }) => o.id === "w001",
      ).x,
    ).toBe(95);
    fireEvent.click(screen.getByRole("button", { name: "Play" }));
    await screen.findByRole("button", { name: "Pause" });
    expect(screen.queryByRole("button", { name: "Document" })).toBeNull();
    expect(screen.queryByLabelText("Scene objects")).toBeNull();
  });
  it("recovers new saved documents without reading or overwriting the old word save", () => {
    const p = editObject(fresh(), "w001", { note: "QA: keep the browser readable" });
    localStorage.setItem(SCENE_KEY, JSON.stringify(p));
    localStorage.setItem("canvas-word-motion-l1-v1", "earlier protected bytes");
    render(<LiveStage />);
    fireEvent.click(screen.getByRole("button", { name: "Select Add" }));
    fireEvent.click(screen.getByRole("button", { name: "note" }));
    expect((screen.getByLabelText("Object note") as HTMLTextAreaElement).value).toContain("QA:");
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(localStorage.getItem("canvas-word-motion-l1-v1")).toBe("earlier protected bytes");
  });
  it("validates saved documents without destroying malformed bytes", () => {
    localStorage.setItem(SCENE_KEY, "broken");
    render(<LiveStage />);
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(localStorage.getItem(SCENE_KEY)).toBe("broken");
    cleanup();
    render(<LiveStage />);
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(localStorage.getItem(SCENE_KEY)).toBe("broken");
  });
  it("splits through a timing preview and supports undo", () => {
    render(<LiveStage />);
    fireEvent.click(screen.getByRole("button", { name: "Scenes" }));
    fireEvent.change(
      screen.getByPlaceholderText("Describe a setting. No image will be generated."),
      { target: { value: "Door opens; illustration pending" } },
    );
    expect(screen.getByText(/Audio and object cues stay fixed/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Apply interval split" }));
    expect(screen.getByRole("button", { name: /New setting/ })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Undo" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(JSON.parse(localStorage.getItem(SCENE_KEY)!).scenes).toHaveLength(1);
  });
});

describe("working draft and saved render checkpoint", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );
    localStorage.clear();
    sessionStorage.clear();
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });
  it("discards unsaved edits to the saved checkpoint and Undo recovers them", () => {
    render(<LiveStage />);
    fireEvent.click(screen.getByRole("button", { name: "Select Add" }));
    fireEvent.click(screen.getByRole("button", { name: "position" }));
    fireEvent.change(screen.getByLabelText("Object X"), { target: { value: "95" } });
    expect(screen.getByLabelText("Draft status").textContent).toContain("UNSAVED");
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Export saved scene JSON" }));
    expect(screen.getByRole("dialog", { name: "Choose render snapshot" })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Cancel export" }));
    fireEvent.click(screen.getByRole("button", { name: "Discard unsaved changes" }));
    expect(screen.getByLabelText("Draft status").textContent).not.toContain("UNSAVED");
    fireEvent.click(screen.getByRole("button", { name: "Undo" }));
    expect(screen.getByLabelText("Draft status").textContent).toContain("UNSAVED");
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(
      JSON.parse(localStorage.getItem(SCENE_KEY)!).objects.find(
        (o: { id: string }) => o.id === "w001",
      ).x,
    ).toBe(95);
  });
  it("pauses a playing picture and consumes the tap without selecting or editing", async () => {
    const { container } = render(<LiveStage />);
    const audio = container.querySelector("audio")!;
    fireEvent.loadedMetadata(audio);
    audio.currentTime = 4.2;
    fireEvent.click(screen.getByRole("button", { name: "Play" }));
    await screen.findByRole("button", { name: "Pause" });
    const image = screen.getByRole("img", { name: "Live illustrated song scene" });
    fireEvent.pointerDown(image);
    // Pausing mounts targets under the pointer. A held tap can end on that new target
    // well after the former 450ms guard expired; consume the whole gesture.
    const now = Date.now();
    vi.spyOn(Date, "now").mockReturnValue(now + 2000);
    const target = screen.getAllByRole("button", { name: /^Select / })[0];
    fireEvent.mouseEnter(target);
    fireEvent.pointerUp(target);
    fireEvent.click(target);
    expect(screen.getByRole("button", { name: "Play" })).toBeTruthy();
    expect(screen.getByLabelText("Song clock").textContent).toContain("4.20");
    expect(screen.queryByLabelText("Object tools")).toBeNull();
    expect(screen.getByLabelText("Draft status").textContent).not.toContain("UNSAVED");
  });
});
