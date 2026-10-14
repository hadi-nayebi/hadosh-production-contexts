import { expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import baseline from "./full-song-seed.json";
import study from "./toasterStudy";
import { validateScene } from "./scene.mjs";
import SceneArtwork from "./SceneArtwork";
it("preserves original audio, duration and all objects outside the toaster interval", () => {
  expect(study.source).toEqual(baseline.source);
  expect(study.arrangement).toEqual(baseline.arrangement);
  expect(study.composition).toEqual(baseline.composition);
  for (const object of baseline.objects.filter(
    (o) => !o.id.startsWith("toaster-") && !/^lyric-3[5-9]-/.test(o.id),
  ))
    expect(study.objects.find((o) => o.id === object.id)).toEqual(object);
  expect(baseline.objects.find((o) => o.id === "toaster-narrator")).toBeTruthy();
  expect(study.objects.find((o) => o.id === "toaster-narrator")).toBeUndefined();
});
it("renders independently targetable contact components while preserving the pinned baseline", () => {
  const a = render(<SceneArtwork project={study} frame={5220} />);
  for (const id of [
    "toaster-appliance",
    "toaster-dial",
    "toaster-hand",
    "toaster-cord",
    "toaster-shadow",
  ])
    expect(a.container.querySelector(`[data-scene-object="${id}"]`)).toBeTruthy();
  expect(a.container.textContent).not.toContain("The supply is bought.");
  cleanup();
  const b = render(<SceneArtwork project={validateScene(baseline)} frame={5220} />);
  expect(b.container.textContent).toContain("The supply is bought.");
  cleanup();
});

it("changes the supplier while retaining the same owned workspace in the match study", async () => {
  const { default: match } = await import("./toasterRetainedStudy");
  expect(match.source).toEqual(study.source);
  expect(match.arrangement).toEqual(study.arrangement);
  const view = render(<SceneArtwork project={match} frame={5540} />);
  expect(view.container.textContent).toContain("Model provider A");
  expect(view.container.textContent).toContain("MY WORKSPACE");
  const appliance = view.container.querySelector(
    '[data-scene-object="toaster-appliance"]',
  )!.innerHTML;
  view.rerender(<SceneArtwork project={match} frame={5600} />);
  expect(view.container.textContent).toContain("Model provider B");
  expect(view.container.textContent).not.toContain("Model provider A");
  expect(
    view.container.querySelector('[data-scene-object="toaster-appliance"]')!.innerHTML,
  ).toEqual(appliance);
  expect(view.container.textContent).not.toContain("Notes · rules · tools");
  for (const id of ["lyric-37-02", "lyric-37-07"]) {
    const word = view.container.querySelector(`[data-scene-object="${id}"]`)!;
    expect(word).toBeTruthy();
    expect(word.getAttribute("y")).toBe("504");
  }
  view.rerender(<SceneArtwork project={match} frame={5778} />);
  expect(view.container.querySelector('[data-scene-object="lyric-37-02"]')).toBeNull();
  cleanup();
});

it("cuts the retained study cleanly into finale while preserving V6 dissolve", async () => {
  const { default: retained } = await import("./toasterRetainedStudy");
  const view = render(<SceneArtwork project={retained} frame={5760} />);
  expect(view.container.querySelector('[data-scene-object="toaster-appliance"]')).toBeNull();
  expect(view.container.querySelector('[data-scene-object="lyric-37-02"]')).toBeNull();
  view.rerender(<SceneArtwork project={validateScene(baseline)} frame={5760} />);
  expect(view.container.querySelector('[data-scene-object="toaster-board"]')).toBeTruthy();
  for (const value of [-1, 1.5, 31]) {
    const invalid = structuredClone(retained);
    invalid.scenes[0].boundaryTransitionFrames = value;
    expect(() => validateScene(invalid)).toThrow("Invalid scene boundary transition");
  }
  cleanup();
});
