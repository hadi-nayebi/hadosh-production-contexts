import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import previous from "./aiHarnessStudy";
import study from "./aiCrownStudy";
import SceneArtwork from "./SceneArtwork";
import { imagePose } from "./views.mjs";
import { editObject, validateScene } from "./scene.mjs";
afterEach(cleanup);
it("links every S05 component to its version-scoped intention and return route", async () => {
  const { default: ledger } = await import("./director-ledger.json");
  const contexts = ledger.componentContexts.filter((c) => c.documents.includes(study.documentId!));
  const scene = study.scenes.find((s) => s.start === 3950)!;
  for (const id of scene.objectIds) {
    const context = contexts.find((c) => c.objectIds.includes(id));
    expect(context, id).toBeDefined();
    expect(context!.reviewHref).toMatch(/^\/songs\/live-ai-crown\?inspect=/);
    expect(ledger.proposals.some((p) => p.id === context!.proposalId)).toBe(true);
  }
});
it("preserves the full recording, exact source words and earlier draft while replacing only S05", () => {
  for (const key of ["source", "words", "arrangement", "composition"] as const)
    expect(study[key]).toEqual(previous[key]);
  expect(study.scenes).toHaveLength(previous.scenes.length);
  expect(study.scenes.filter((s) => s.start !== 3950)).toEqual(
    previous.scenes.filter((s) => s.start !== 3950),
  );
  expect(study.assets!.slice(0, previous.assets!.length)).toEqual(previous.assets);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("moves the original five clause tokens into memory without duplicating or changing their words", () => {
  const words = study.objects.filter((o) => o.id.startsWith("lyric-27-"));
  expect(words).toHaveLength(10);
  for (const o of words.slice(5)) {
    const before = imagePose(study, o.id, 3974),
      after = imagePose(study, o.id, 4002);
    expect(after.x - before.x).toBe(120);
    expect(after.y - before.y).toBe(-200);
    expect(imagePose(study, o.id, 4035).x).toBe(after.x);
  }
  const v = render(<SceneArtwork project={study} frame={3955} />);
  expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(10);
  expect(v.container.textContent).not.toContain("Saved ✓");
  v.rerender(<SceneArtwork project={study} frame={4001} />);
  expect(v.container.textContent).not.toContain("Saved ✓");
  v.rerender(<SceneArtwork project={study} frame={4002} />);
  expect(v.container.textContent).toContain("Saved ✓");
  expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(10);
  v.rerender(<SceneArtwork project={study} frame={4036} />);
  expect(v.container.querySelector('[data-scene-object="s05-file"]')).toBeNull();
  expect(v.container.textContent).toContain("notes.txt");
  expect(v.container.textContent).toContain("Clear words.");
  expect(v.container.textContent).toContain("Skip the pitch.");
});
it("keeps memory timing and person independently editable through JSON recovery", () => {
  const changed = editObject(study, "s05-file", { x: 620 });
  const loaded = validateScene(JSON.parse(JSON.stringify(changed)));
  expect(loaded.objects.find((o) => o.id === "s05-file")!.x).toBe(620);
  expect(loaded.objects.find((o) => o.id === "s05-person")).toEqual(
    study.objects.find((o) => o.id === "s05-person"),
  );
  expect(loaded.words).toEqual(previous.words);
});
