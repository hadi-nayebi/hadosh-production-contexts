import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import seed from "./dance-review-seed.json";
import previous from "./dance-extended-seed.json";
import { validateScene } from "./scene.mjs";
import { imagePose } from "./views.mjs";
import { cameraAt } from "./camera.mjs";
import { characterGeometry } from "./CharacterLayer";
import SceneArtwork from "./SceneArtwork";
import TextTools from "./TextTools";
import LiveStage from "./LiveStage";
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  localStorage.clear();
});
describe("scoped dance review candidate", () => {
  it("preserves audio, lyric timing, choreography and camera cuts", () => {
    const p = validateScene(seed);
    expect(p.words).toEqual(previous.words);
    expect(p.source).toEqual(previous.source);
    expect(p.scenes.map((s) => s.camera)).toEqual(previous.scenes.map((s) => s.camera));
    expect(p.objects.filter((o) => o.kind === "character").map((o) => o.viewCues)).toEqual(
      previous.objects.filter((o) => o.kind === "character").map((o) => o.viewCues),
    );
  });
  it("keeps every full pose inside the camera and changes supporting level at the matched cut", () => {
    const p = validateScene(seed),
      actor = p.objects.find((o) => o.id === "narrator-doorway")!,
      scene = p.scenes.find((s) => s.id === "doorway")!;
    for (let frame = 640; frame < 892; frame++) {
      const n = imagePose(p, actor.id, frame),
        camera = cameraAt(scene, frame);
      expect(n.y + actor.height).toBe(frame < 805 ? 482 : 426);
      for (const view of actor.views!) {
        const g = characterGeometry({ ...actor, defaultView: view.id, viewCues: [] }, frame);
        for (const box of [g.head, g.body]) {
          expect((n.x + box.x) * camera.zoom + camera.tx).toBeGreaterThan(20);
          expect((n.x + box.x + box.width) * camera.zoom + camera.tx).toBeLessThan(1260);
          expect((n.y + box.y) * camera.zoom + camera.ty).toBeGreaterThan(0);
          expect((n.y + box.y + box.height) * camera.zoom + camera.ty).toBeLessThan(720);
        }
      }
    }
  });
  it("keeps complete reviewed phrase envelopes left of the computer", () => {
    const p = validateScene(seed);
    for (const o of p.objects.filter((o) =>
      ["more-eyes", "more-hands", "final-say"].includes(o.textFlow?.group || ""),
    )) {
      for (let frame = o.enterFrame; frame < o.exitFrame; frame++) {
        const word = imagePose(p, o.id, frame),
          hardware = imagePose(
            p,
            o.textFlow?.group === "final-say" ? "monitor-final" : "monitor",
            frame,
          );
        expect(word.x + word.width).toBeLessThan(hardware.x - 12);
      }
    }
  });
  it("crossfades supported placements with the existing background transition", () => {
    const p = validateScene(seed);
    const { container, rerender } = render(<SceneArtwork project={p} frame={805} />);
    expect(
      container.querySelector('[data-placement-layer="previous"]')?.getAttribute("opacity"),
    ).toBe("1");
    expect(
      container
        .querySelector('[data-scene-object="narrator-doorway"] [data-placement-layer="current"]')
        ?.getAttribute("opacity"),
    ).toBe("0");
    rerender(<SceneArtwork project={p} frame={809} />);
    expect(
      container.querySelector('[data-placement-layer="previous"]')?.getAttribute("opacity"),
    ).toBe("0.5");
    rerender(<SceneArtwork project={p} frame={813} />);
    expect(container.querySelector('[data-placement-layer="previous"]')).toBeNull();
    expect(container.textContent).not.toContain("LOCAL CONTROL");
  });
  it("uses the newspaper only for the 1998 event, with editable headline/date/context", () => {
    const p = validateScene(seed);
    const { container, rerender } = render(<SceneArtwork project={p} frame={100} />);
    expect(container.querySelector('[data-scene-prop="newspaper"]')).not.toBeNull();
    expect(container.textContent).toContain("ILLUSTRATIVE FRONT PAGE");
    expect(container.querySelectorAll("[data-history-year]")).toHaveLength(1);
    rerender(<SceneArtwork project={p} frame={300} />);
    expect(container.querySelector('[data-scene-prop="newspaper"]')).toBeNull();
    expect(container.querySelector('[data-history-year="2004"]')).not.toBeNull();
    cleanup();
    function Editor() {
      const [project, setProject] = useState(p);
      return (
        <>
          <TextTools
            project={project}
            object={project.objects.find((o) => o.id === "intro-newspaper")!}
            change={(fn) => setProject(fn())}
          />
          <SceneArtwork project={project} frame={100} />
        </>
      );
    }
    render(<Editor />);
    fireEvent.change(screen.getByLabelText("Explanatory text"), {
      target: { value: "Browser source released" },
    });
    fireEvent.change(screen.getByLabelText("Newspaper date"), {
      target: { value: "31 MARCH 1998" },
    });
    fireEvent.change(screen.getByLabelText("Newspaper context"), {
      target: { value: "Mozilla welcomes contributors." },
    });
    expect(screen.getByRole("img").textContent).toContain("Browser source released");
    expect(screen.getByRole("img").textContent).toContain("31 MARCH 1998");
    expect(screen.getByRole("img").textContent).toContain("Mozilla welcomes contributors.");
  });
  it("shows explicit version comparison when paused and hides the header during playback", async () => {
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    const label = "Who Holds the Keys? · Latest candidate v7 · 35.8s · unapproved";
    const { container } = render(
      <LiveStage defaultProject={seed} storageKey="review-test" workspaceLabel={label} />,
    );
    expect(screen.getByLabelText("Draft status").textContent).toContain("not saved locally");
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    fireEvent.click(screen.getByRole("button", { name: "Save locally" }));
    expect(JSON.parse(localStorage.getItem("review-test")!).revision).toBe(33);
    expect(screen.getByLabelText("Draft status").textContent).toContain("saved local checkpoint");
    fireEvent.click(screen.getByRole("button", { name: "Document" }));
    expect(screen.getByText(label)).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Original comparison · 24s" }).getAttribute("href"),
    ).toBe("/songs/live-original");
    expect(
      screen.getByRole("link", { name: "Saved opening draft · 72.1s" }).getAttribute("href"),
    ).toBe("/songs/live-opening");
    fireEvent.loadedMetadata(container.querySelector("audio")!);
    fireEvent.click(screen.getByRole("button", { name: "Play" }));
    await screen.findByRole("button", { name: "Pause" });
    expect(container.querySelector(".live-top")).toBeNull();
  });
});
