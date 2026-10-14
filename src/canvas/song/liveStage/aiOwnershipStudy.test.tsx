import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import previous from "./aiCrownStudy";
import study from "./aiOwnershipStudy";
import SceneArtwork from "./SceneArtwork";
import { imagePose } from "./views.mjs";
import { editObject, validateScene } from "./scene.mjs";
import ledger from "./director-ledger.json";
afterEach(cleanup);
it("accepts the additional full-song shot while retaining a bounded import scene count", () => {
  expect(study.scenes).toHaveLength(41);
  const oversized = structuredClone(study);
  oversized.scenes = Array.from({ length: 97 }, () => structuredClone(study.scenes[0]));
  expect(() => validateScene(oversized)).toThrow("Invalid settings");
});
it("preserves sources, assets and every scene outside the continuation with full contiguous coverage", () => {
  for (const key of ["source", "words", "assets", "arrangement", "composition"] as const)
    expect(study[key]).toEqual(previous[key]);
  const outside = (s: { start: number }) => s.start < 4303 || s.start >= 4980;
  expect(study.scenes.filter(outside)).toEqual(previous.scenes.filter(outside));
  expect(study.scenes[0].start).toBe(0);
  expect(study.scenes.at(-1)!.end).toBe(study.composition.durationInFrames);
  for (let i = 1; i < study.scenes.length; i++)
    expect(study.scenes[i].start).toBe(study.scenes[i - 1].end);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("replaces the supplier while preserving the same owned files through the final return", () => {
  const v = render(<SceneArtwork project={study} frame={4390} />);
  expect(v.container.textContent).toContain("Model A");
  expect(v.container.textContent).not.toContain("Model B");
  for (const frame of [4391, 4477, 4806, 4979]) {
    v.rerender(<SceneArtwork project={study} frame={frame} />);
    expect(v.container.textContent).toContain("Model B");
    expect(v.container.textContent).not.toContain("Model A");
    for (const id of ["s08-notes", "s08-rules", "s08-page"]) {
      expect(v.container.querySelector(`[data-scene-object="${id}"]`)).not.toBeNull();
      const before = imagePose(study, id, 4390),
        after = imagePose(study, id, frame);
      expect([after.x, after.y]).toEqual([before.x, before.y]);
    }
  }
});
it("limits permission after the human contact and keeps publication waiting", () => {
  const arm = study.objects.find((o) => o.id === "s09-forearm")!;
  expect(arm.animation!.endFrame).toBe(4560);
  const v = render(<SceneArtwork project={study} frame={4560} />);
  expect(v.container.textContent).toContain("Choose scope");
  expect(v.container.textContent).not.toContain("Read only ✓");
  v.rerender(<SceneArtwork project={study} frame={4561} />);
  expect(v.container.textContent).toContain("Read only ✓");
  expect(v.container.textContent).toContain("Publish still waits");
  expect(v.container.textContent).not.toContain("Page online");
});
it("shows the changed result and then recalls the same memory without extra lyric tokens", () => {
  const v = render(<SceneArtwork project={study} frame={4673} />);
  expect(v.container.textContent).toContain("Build a simple page");
  v.rerender(<SceneArtwork project={study} frame={4674} />);
  expect(v.container.textContent).toContain("Build your own page");
  expect(v.container.textContent).toContain("Publish only when I say");
  for (const [frame, count] of [
    [4303, 10],
    [4391, 10],
    [4478, 12],
    [4621, 13],
    [4764, 0],
    [4806, 0],
  ]) {
    v.rerender(<SceneArtwork project={study} frame={frame} />);
    expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(count);
  }
  v.rerender(<SceneArtwork project={study} frame={4764} />);
  for (const text of ["notes.txt", "Clear words.", "Skip the pitch.", "Saved ✓"])
    expect(v.container.textContent).toContain(text);
  v.rerender(<SceneArtwork project={study} frame={4860} />);
  expect(v.container.textContent).toContain("Build your own page");
  expect(v.container.textContent).not.toContain("Build a simple page");
});
it("retains independent file edits through JSON without changing the supplier or source", () => {
  const changed = validateScene(
    JSON.parse(JSON.stringify(editObject(study, "s08-notes", { x: 511 }))),
  );
  expect(imagePose(changed, "s08-notes", 4806).x).toBe(511);
  expect(changed.objects.find((o) => o.id === "s08-model-b")).toEqual(
    study.objects.find((o) => o.id === "s08-model-b"),
  );
  expect(changed.words).toEqual(previous.words);
});
it("provides version-scoped context and return routes for every continuation component", () => {
  const contexts = ledger.componentContexts.filter((c) => c.documents.includes(study.documentId!));
  for (const scene of study.scenes.filter((s) => s.start >= 4303 && s.start < 4980))
    for (const id of scene.objectIds) {
      const c = contexts.find((c) => c.objectIds.includes(id));
      expect(c, `${scene.id}:${id}`).toBeDefined();
      expect(c!.reviewHref).toMatch(/^\/songs\/live-ai-ownership\?inspect=/);
      expect(ledger.proposals.some((p) => p.id === c!.proposalId)).toBe(true);
    }
});
