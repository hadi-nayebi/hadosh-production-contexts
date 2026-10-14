import { expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import seed from "./full-song-seed.json";
import { validateScene, sceneAt } from "./scene.mjs";
import { sourceFrameAt } from "../wordMotion/arrangement.mjs";
import SceneArtwork from "./SceneArtwork";
it("covers the full recording with continuous original audio and authored scenes", () => {
  const p = validateScene(seed);
  for (let f = 0; f < p.composition.durationInFrames; f++) {
    expect(sourceFrameAt(p, f)).toBe(f);
    expect(sceneAt(p, f).assetStatus).not.toBe("awaiting asset");
    expect(sceneAt(p, f).objectIds.length).toBeGreaterThan(0);
  }
  expect(p.composition.durationInFrames).toBe(6804);
  expect(validateScene(JSON.parse(JSON.stringify(p)))).toEqual(p);
  expect(p.scenes).toHaveLength(33);
  expect(p.source.outMs).toBe(226824);
  expect(() => validateScene({ ...p, source: { ...p.source, outMs: 230000 } })).toThrow();
});
it("keeps every lyric word independent with readable holds and semantic motion", () => {
  const p = validateScene(seed),
    words = p.objects.filter((o) => o.kind === "word");
  expect(words).toHaveLength(425);
  expect(p.objects.some((o) => o.kind === "lyric-block")).toBe(false);
  expect(new Set(words.map((o) => o.wordId)).size).toBe(425);
  for (const o of words) expect(o.exitFrame - o.enterFrame).toBeGreaterThanOrEqual(65);
  expect(words.filter((o) => o.motion?.length).length).toBeGreaterThan(30);
  expect(sceneAt(p, 90).id).toBe(sceneAt(p, 10).id);
  const target = words.find((o) => p.words.find((w) => w.id === o.wordId)?.text === "notes")!;
  const changed = structuredClone(p);
  const edit = changed.objects.find((o) => o.id === target.id)!;
  edit.x += 10;
  edit.enterFrame += 3;
  const saved = validateScene(JSON.parse(JSON.stringify(changed)));
  expect(saved.objects.find((o) => o.id === target.id)?.x).toBe(target.x + 10);
  expect(p.objects.find((o) => o.id === target.id)?.x).toBe(target.x);
});
it("shows all later story stages including approval, retained memory and toaster", () => {
  const p = validateScene(seed);
  const { container, rerender } = render(<SceneArtwork project={p} frame={2500} />);
  expect(container.querySelector('[data-story="feed"]')).toBeTruthy();
  rerender(<SceneArtwork project={p} frame={3750} />);
  expect(container.textContent).toContain("Publish waits for your say");
  rerender(<SceneArtwork project={p} frame={3850} />);
  expect(container.textContent).toContain("Approved → published ✓");
  rerender(<SceneArtwork project={p} frame={4400} />);
  expect(container.textContent).toContain("Saved note · editable");
  rerender(<SceneArtwork project={p} frame={5350} />);
  expect(container.textContent).toContain("MY TOASTER");
  rerender(<SceneArtwork project={p} frame={6803} />);
  expect(container.textContent).toContain("Leave the final say with me.");
  cleanup();
});

it("accumulates separately editable cortex parts across feedback and later projects", () => {
  const p = validateScene(seed);
  const { container, rerender } = render(<SceneArtwork project={p} frame={3400} />);
  const early = container.querySelectorAll('[data-harness-component="node"]').length;
  rerender(<SceneArtwork project={p} frame={4100} />);
  expect(container.querySelectorAll('[data-harness-component="node"]').length).toBeGreaterThan(
    early,
  );
  expect(container.querySelector('[data-scene-object="headset-seated-character"]')).toBeTruthy();
  expect(container.querySelector('[data-story-file="HTML"]')).toBeTruthy();
  const parts = p.objects.filter((o) => o.parentId === "owned-cortex");
  expect(parts.length).toBeGreaterThan(30);
  expect(p.scenes.find((s) => s.id === "agent-workshop")!.objectIds).toContain("cortex-feedback");
  expect(p.scenes.find((s) => s.id === "memory")!.objectIds).toContain("cortex-feedback");
  cleanup();
});

it("keeps lyric and cortex text unboxed in the new physical desk scene", () => {
  const p = validateScene(seed);
  const { container } = render(<SceneArtwork project={p} frame={4200} />);
  for (const node of container.querySelectorAll('[data-harness-component="instruction"]'))
    expect(node.querySelector("rect,path")).toBeNull();
  for (const node of container.querySelectorAll('[data-text-role="lyric"]'))
    expect(node.tagName.toLowerCase()).toBe("text");
  expect(container.querySelector('[data-physical-screen="projective-monitor"]')).toBeTruthy();
  expect(p.objects.find((o) => o.id === "headset-seated-character")?.kind).toBe("image");
  cleanup();
});
