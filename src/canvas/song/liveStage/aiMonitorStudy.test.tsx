import { expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import baseline from "./full-song-seed.json";
import study from "./aiMonitorStudy";
import SceneArtwork from "./SceneArtwork";
import { validateScene, editObject } from "./scene.mjs";
it("retains complete original audio and lyric identities in an isolated study", () => {
  expect(study.source).toEqual(baseline.source);
  expect(study.arrangement).toEqual(baseline.arrangement);
  expect(study.composition).toEqual(baseline.composition);
  expect(study.words).toEqual(baseline.words);
  expect(study.documentId).not.toEqual(baseline.documentId);
  for (let i = 1; i < study.scenes.length; i++)
    expect(study.scenes[i].start).toBe(study.scenes[i - 1].end);
});
it("replaces independently editable sales words with learning details at the correction cue", () => {
  const v = render(<SceneArtwork project={study} frame={3550} />);
  expect(v.container.textContent).toContain("Amazingworkshop!");
  expect(v.container.querySelector('[data-scene-object="ai-page-learning-0"]')).toBeNull();
  v.rerender(<SceneArtwork project={study} frame={3610} />);
  expect(v.container.textContent).toContain("Buildasimplepage");
  expect(v.container.querySelector('[data-scene-object="ai-page-sales-0"]')).toBeNull();
  expect(v.container.querySelector('[data-scene-object="headset-seated-character"]')).toBeNull();
  expect(v.container.querySelector('[data-scene-object="ai-page-learning-0"] rect')).toBeNull();
  cleanup();
});
it("round trips a page word independently without changing adjacent words", () => {
  const original = study.objects.find((o) => o.id === "ai-page-learning-0")!;
  const changed = editObject(study, original.id, { x: original.x + 8, enterFrame: 3595 });
  const roundTrip = validateScene(JSON.parse(JSON.stringify(changed)));
  expect(roundTrip.objects.find((o) => o.id === original.id)?.x).toBe(original.x + 8);
  expect(roundTrip.objects.find((o) => o.id === "ai-page-learning-1")).toEqual(
    study.objects.find((o) => o.id === "ai-page-learning-1"),
  );
  expect(study.objects.find((o) => o.id === original.id)).toEqual(original);
});
