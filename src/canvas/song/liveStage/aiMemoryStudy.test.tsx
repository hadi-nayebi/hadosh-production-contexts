import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import previous from "./aiPermissionStudy";
import study from "./aiMemoryStudy";
import SceneArtwork from "./SceneArtwork";
import { editObject, validateScene } from "./scene.mjs";
afterEach(cleanup);
it("preserves source and prior draft while keeping all scene intervals contiguous", () => {
  expect(study.source).toEqual(previous.source);
  expect(study.words).toEqual(previous.words);
  expect(study.arrangement).toEqual(previous.arrangement);
  expect(study.composition).toEqual(previous.composition);
  expect(previous.objects.find((o) => o.id === "s04-saved")!.text).toBe("Saved locally");
  for (let i = 1; i < study.scenes.length; i++)
    expect(study.scenes[i].start).toBe(study.scenes[i - 1].end);
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("depicts an online result only after human contact", () => {
  const v = render(<SceneArtwork project={study} frame={3879} />);
  expect(v.container.textContent).toContain("Your approval");
  expect(v.container.textContent).not.toContain("Page online");
  v.rerender(<SceneArtwork project={study} frame={3880} />);
  expect(v.container.textContent).toContain("Page online");
  expect(v.container.textContent).toContain("You gave permission");
});
it("retains the same note body and complete lyric through heading edit, save and reopen", () => {
  const v = render(<SceneArtwork project={study} frame={4036} />);
  for (const [frame, heading, status] of [
    [4036, "Writing notes", "Opened"],
    [4072, "My writing rules", "Editing heading"],
    [4086, "My writing rules", "Saved"],
    [4104, "My writing rules", "Reopened · same note"],
  ] as const) {
    v.rerender(<SceneArtwork project={study} frame={frame} />);
    const text = v.container.textContent!;
    expect(text).toContain(heading);
    expect(text).toContain(status);
    expect(text).toContain("Clear words.");
    expect(text).toContain("Skip the pitch.");
    expect(v.container.querySelectorAll('[data-text-role="lyric"]')).toHaveLength(9);
    expect(v.container.querySelectorAll('[data-scene-object="s06-body-clear"]')).toHaveLength(1);
  }
  v.rerender(<SceneArtwork project={study} frame={4095} />);
  expect(v.container.textContent).toContain("Reopen note →");
  expect(v.container.querySelector('[data-scene-object="s06-body-clear"]')).toBeNull();
  v.rerender(<SceneArtwork project={study} frame={4104} />);
  expect(v.container.textContent).toContain("My writing rules");
  expect(v.container.querySelectorAll('[data-scene-object="s06-body-clear"]')).toHaveLength(1);
  v.rerender(<SceneArtwork project={study} frame={4036} />);
  expect(v.container.textContent).not.toContain("My writing rules");
  expect(v.container.textContent).toContain("Writing notes");
  v.rerender(<SceneArtwork project={study} frame={4126} />);
  expect(v.container.querySelector('[data-scene-object="s06-body-clear"]')).toBeNull();
});
it("round-trips an independent heading edit without rewriting source or prior draft", () => {
  const edited = editObject(study, "s06-heading-after", { text: "My notes", x: 36 });
  const loaded = validateScene(JSON.parse(JSON.stringify(edited)));
  expect(loaded.objects.find((o) => o.id === "s06-heading-after")!.text).toBe("My notes");
  expect(loaded.objects.find((o) => o.id === "s06-body-clear")).toEqual(
    study.objects.find((o) => o.id === "s06-body-clear"),
  );
  expect(loaded.words).toEqual(previous.words);
});
