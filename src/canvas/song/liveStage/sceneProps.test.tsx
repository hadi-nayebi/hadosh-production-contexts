import { afterEach, it, expect } from "vitest";
import { cleanup, render } from "@testing-library/react";
import seed from "./scene-props-seed.json";
import previous from "./typography-seed.json";
import { validateScene } from "./scene.mjs";
import { entranceAt } from "./SceneProps";
import SceneArtwork from "./SceneArtwork";
afterEach(cleanup);
it("preserves recording, lyrics, camera pacing and art while offering a separate document", () => {
  const p = validateScene(seed);
  expect(p.words).toEqual(previous.words);
  expect(p.source).toEqual(previous.source);
  expect(p.assets?.slice(0, previous.assets.length)).toEqual(previous.assets);
  expect(p.assets?.length).toBe(previous.assets.length + 2);
  expect(p.scenes.map((s) => [s.start, s.end, s.camera])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.camera]),
  );
  expect(p.documentId).not.toBe(previous.documentId);
});
it("has bounded one-shot entrances on observed accents near each milestone", () => {
  const p = validateScene(seed);
  for (const m of p.browserHistory!) {
    const e = entranceAt(p, m.frame)!;
    expect(e.observed).toBe(true);
    expect(e.cue - m.frame).toBeGreaterThanOrEqual(0);
    expect(e.cue - m.frame).toBeLessThanOrEqual(36);
    expect(entranceAt(p, e.cue + 7)!.scale).toBeGreaterThan(1);
    expect(entranceAt(p, e.cue + 20)!.scale).toBe(1);
    expect(entranceAt(p, e.cue + 20)!.lift).toBe(0);
  }
});
it("renders editable physical signs and one calendar inside scene coordinates", () => {
  const p = validateScene(seed);
  const { container, rerender } = render(<SceneArtwork project={p} frame={177} />);
  expect(container.querySelectorAll('[data-scene-prop="calendar"]')).toHaveLength(1);
  expect(container.querySelectorAll('[data-scene-prop="wooden-sign"]')).toHaveLength(1);
  expect(container.querySelector('[data-character-view="pointing-speaking"]')).not.toBeNull();
  rerender(<SceneArtwork project={p} frame={558} />);
  expect(container.querySelector('[data-history-symbol="chrome"]')).not.toBeNull();
  expect(container.querySelectorAll("[data-history-year]")).toHaveLength(1);
});
it("pins scene character views to reusable part identities and outfit-compatible anchors", async () => {
  const library = (await import("../../characters/workshop-narrator.json")).default;
  const p = validateScene(seed),
    character = p.objects.find((o) => o.kind === "character")!;
  expect(library.parts).toHaveLength(6);
  expect(library.combinations).toHaveLength(8);
  for (const c of library.combinations) {
    const view = character.views!.find((v) => v.id === c.id)!;
    expect(view.rig).toEqual(c.rig);
    expect(view.assetId).toBe(c.bodyPartId);
    const part = library.parts.find((a) => a.id === c.bodyPartId)!;
    expect(part.outfitId).toBe(c.outfitId);
    expect(part.anchor.point).toEqual(c.rig.bodyAnchor);
    expect(p.assets!.find((a) => a.id === part.id)?.sha256).toBe(part.sha256);
  }
});
