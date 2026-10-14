import fullSongSeed from "./full-song-seed.json";
import earthSeed from "./earth-upgrade-seed.json";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import LiveStage from "./LiveStage";
import { paintedBounds } from "./visibleGeometry";
import { editableHistory } from "./editableHistory.mjs";
import { editObject, validateScene } from "./scene.mjs";
import seed from "./dance-review-seed.json";
import original from "./typography-seed.json";
import Productions from "../Productions";
import SceneArtwork from "./SceneArtwork";
describe("selection and composition navigation", () => {
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
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });
  it("exposes latest creative study first and keeps older versions in a collapsed archive", () => {
    const { container } = render(<Productions />);
    expect(container.querySelector("ol a")?.getAttribute("href")).toBe("/songs/live-full-song");
    expect(container.querySelector("details")?.open).toBe(false);
    expect(screen.getByText("Audio baseline: R7 · L1")).toBeTruthy();
  });
  it("keeps a new moving token editable and round-trips its saved position", () => {
    const mount = () =>
      render(<LiveStage defaultProject={earthSeed} storageKey="earth-token-test" />);
    const view = mount();
    fireEvent.click(
      screen.getByRole("button", { name: "Select Electricity · moving upgrade token" }),
    );
    fireEvent.click(screen.getByRole("button", { name: "position" }));
    fireEvent.change(screen.getByLabelText("Object X"), { target: { value: "90" } });
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(
      JSON.parse(localStorage.getItem("earth-token-test")!).objects.find(
        (o: { id: string }) => o.id === "earth-token-power",
      ).x,
    ).toBe(90);
    view.unmount();
    mount();
    fireEvent.click(
      screen.getByRole("button", { name: "Select Electricity · moving upgrade token" }),
    );
    fireEvent.click(screen.getByRole("button", { name: "position" }));
    expect((screen.getByLabelText("Object X") as HTMLInputElement).value).toBe("90");
  });
  it("persists one cortex node independently and restores saved state with Discard and Undo", () => {
    const key = "cortex-round-trip-test";
    const mount = () => render(<LiveStage defaultProject={fullSongSeed} storageKey={key} />);
    const read = () =>
      JSON.parse((screen.getByLabelText("Working draft JSON") as HTMLTextAreaElement).value);
    const selectNode = () => {
      fireEvent.change(screen.getByLabelText("Song time"), { target: { value: "4500" } });
      fireEvent.click(screen.getByRole("button", { name: "Select neural-node-25" }));
      fireEvent.click(screen.getByRole("button", { name: "position" }));
    };
    const view = mount();
    selectNode();
    const originalX = Number((screen.getByLabelText("Object X") as HTMLInputElement).value);
    fireEvent.change(screen.getByLabelText("Object X"), {
      target: { value: String(originalX + 17) },
    });
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    const changed = read();
    expect(
      changed.objects
        .filter(
          (o: { id: string }, i: number) =>
            JSON.stringify(o) !== JSON.stringify(fullSongSeed.objects[i]),
        )
        .map((o: { id: string }) => o.id),
    ).toEqual(["neural-node-25"]);
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(JSON.parse(localStorage.getItem(key)!)).toEqual(changed);
    view.unmount();
    mount();
    selectNode();
    expect((screen.getByLabelText("Object X") as HTMLInputElement).value).toBe(
      String(originalX + 17),
    );
    fireEvent.change(screen.getByLabelText("Object X"), {
      target: { value: String(originalX + 31) },
    });
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    const unsaved = read();
    fireEvent.click(screen.getByRole("button", { name: "Discard unsaved changes" }));
    // Discard creates a new revision while restoring every saved object.
    expect(read().objects).toEqual(changed.objects);
    fireEvent.click(screen.getByRole("button", { name: "Undo" }));
    expect(read()).toEqual(unsaved);
    expect(JSON.parse(localStorage.getItem(key)!)).toEqual(changed);
  });
  it("adds selectable history without changing existing fields or stored bytes", () => {
    const p = validateScene(original);
    const bytes = JSON.stringify(p);
    const next = editableHistory(p);
    expect(JSON.stringify(p)).toBe(bytes);
    expect(next.objects.slice(0, p.objects.length)).toEqual(p.objects);
    expect(next.objects.some((o) => o.kind === "history-overlay-badge")).toBe(true);
    expect(editableHistory(next)).toEqual(next);
    expect(validateScene(next)).toEqual(next);
  });
  it("hover only describes, selection opens tools, hidden characters remain recoverable and saved", () => {
    const mount = () =>
      render(<LiveStage defaultProject={seed} storageKey="isolated-selection-test" />);
    const view = mount();
    const target = screen.getByRole("button", { name: "Select Narrator" });
    fireEvent.mouseEnter(target);
    expect(screen.queryByRole("region", { name: "Object tools" })).toBeNull();
    fireEvent.click(target);
    expect(screen.getByRole("toolbar", { name: "Tools for Narrator" })).toBeTruthy();
    fireEvent.click(screen.getByLabelText("Character visible"));
    expect(screen.queryByRole("button", { name: "Select Narrator" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Discard unsaved changes" }));
    expect(screen.getByRole("button", { name: "Select Narrator" })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Select Narrator" }));
    fireEvent.click(screen.getByLabelText("Character visible"));
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    view.unmount();
    mount();
    expect(screen.queryByRole("button", { name: "Select Narrator" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Objects" }));
    fireEvent.click(screen.getByRole("button", { name: "Narrator (hidden)" }));
    expect((screen.getByLabelText("Character visible") as HTMLInputElement).checked).toBe(false);
    fireEvent.click(screen.getByLabelText("Character visible"));
    expect(screen.getByRole("button", { name: "Select Narrator" })).toBeTruthy();
  });
  it.each([false, true])(
    "keeps the active tool while dragging a scaled child (nested=%s), with one Undo and persistent Save",
    (nested) => {
      vi.stubGlobal("PointerEvent", MouseEvent);
      const base = validateScene(structuredClone(seed));
      const p = nested
        ? editObject(
            editObject(base, "intro-browser", { parentId: "group-24-120" }),
            "group-24-120",
            { scale: 0.5 },
          )
        : base;
      const mount = () => render(<LiveStage defaultProject={p} storageKey="scaled-child-qa" />);
      const view = mount();
      const target = screen.getByRole("button", { name: "Select Computer hardware" });
      target.setPointerCapture = vi.fn();
      const stage = view.container.querySelector(".live-artboard")!;
      stage.getBoundingClientRect = () => ({
        x: 0,
        y: 0,
        left: 0,
        top: 0,
        right: 1280,
        bottom: 720,
        width: 1280,
        height: 720,
        toJSON() {},
      });
      fireEvent.click(target);
      fireEvent.click(screen.getByRole("button", { name: "position" }));
      fireEvent.pointerDown(target, { clientX: 100, clientY: 100 });
      expect(screen.getByLabelText("Object X")).toBeTruthy();
      fireEvent.pointerMove(target, { clientX: 115, clientY: 100 });
      fireEvent.pointerMove(target, { clientX: 130, clientY: 100 });
      fireEvent.pointerUp(target);
      fireEvent.click(target);
      expect((screen.getByLabelText("Object X") as HTMLInputElement).value).toBe(
        nested ? "200" : "100",
      );
      fireEvent.click(screen.getByRole("button", { name: "Document" }));
      const read = () =>
        JSON.parse((screen.getByLabelText("Working draft JSON") as HTMLTextAreaElement).value);
      const changed = read();
      expect(
        changed.objects
          .filter(
            (o: { id: string }, i: number) => JSON.stringify(o) !== JSON.stringify(p.objects[i]),
          )
          .map((o: { id: string }) => o.id),
      ).toEqual(["intro-monitor"]);
      fireEvent.click(screen.getByRole("button", { name: "Undo" }));
      expect(read()).toEqual(p);
      fireEvent.click(screen.getByRole("button", { name: "Redo" }));
      fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
      view.unmount();
      mount();
      fireEvent.click(screen.getByRole("button", { name: "Document" }));
      expect(read()).toEqual(changed);
    },
  );
  it("renders selectable legacy Chrome without a fallback plaque covering it", () => {
    const p = editableHistory(validateScene(original));
    const { container } = render(<SceneArtwork project={p} frame={620} />);
    const badge = container.querySelector('[data-scene-object="history-overlay-badge"]')!;
    expect(badge.querySelector('[data-history-symbol="chrome"]')).toBeTruthy();
    expect(badge.querySelector('[data-text-role="explanatory"]')).toBeNull();
  });
  it("uses visible painted geometry and paint order, excludes zero-opacity transition layers", () => {
    const stage = document.createElement("div");
    stage.innerHTML =
      '<svg><g data-scene-object="character"><g opacity="0"><image id="old" /></g><g opacity="1"><image id="now" /></g></g><text data-scene-object="word">Hi</text></svg>';
    const rect = (x: number, y: number, width: number, height: number) => ({
      left: x,
      top: y,
      right: x + width,
      bottom: y + height,
      width,
      height,
      x,
      y,
      toJSON() {},
    });
    stage.getBoundingClientRect = () => rect(100, 100, 600, 400);
    stage.querySelector("#old")!.getBoundingClientRect = () => rect(110, 110, 400, 300);
    stage.querySelector("#now")!.getBoundingClientRect = () => rect(300, 200, 60, 90);
    stage.querySelector("text")!.getBoundingClientRect = () => rect(310, 215, 8, 9);
    const hits = paintedBounds(stage);
    expect(hits.map((h) => h.id)).toEqual(["character", "word"]);
    expect(hits[0]).toMatchObject({ x: 200, y: 100, width: 60, height: 90 });
    expect(hits[1].width).toBeGreaterThanOrEqual(32);
    stage.querySelector("#old")!.parentElement!.setAttribute("opacity", "0.5");
    stage.querySelector("#now")!.parentElement!.setAttribute("opacity", "0.5");
    expect(paintedBounds(stage)[0]).toMatchObject({
      id: "character",
      x: 10,
      y: 10,
      width: 400,
      height: 300,
    });
  });
});
