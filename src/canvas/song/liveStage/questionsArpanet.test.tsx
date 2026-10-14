import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import SceneArtwork from "./SceneArtwork";
import { validateScene } from "./scene.mjs";
import { openingOpacity } from "./OpeningProps";
import seed from "./questions-arpanet-seed.json";
const project = validateScene(seed);
afterEach(cleanup);
it("holds all questions together, then fades them as Earth appears", () => {
  const { container, rerender } = render(<SceneArtwork project={project} frame={210} />);
  for (const text of ["What is internet", "Who is internet", "When is internet"])
    expect(container.textContent).toContain(text);
  const question = project.objects.find((o) => o.id === "inside-question-what")!;
  const earth = project.objects.find((o) => o.id === "inside-earth")!;
  expect(openingOpacity(question, 360)).toBe(1);
  expect(openingOpacity(question, 420)).toBeCloseTo(0.5);
  expect(openingOpacity(earth, 240)).toBe(0);
  expect(openingOpacity(earth, 330)).toBeCloseTo(0.5);
  rerender(<SceneArtwork project={project} frame={480} />);
  expect(container.textContent).not.toContain("What is internet");
});
it("localizes the first message, moves one signal, holds its arrival, and separates broader growth", () => {
  const { container, rerender } = render(<SceneArtwork project={project} frame={510} />);
  expect(container.querySelectorAll("[data-arpanet-site]")).toHaveLength(2);
  expect(container.querySelectorAll("[data-arpanet-link]")).toHaveLength(1);
  expect(container.textContent).toContain("29 OCT 1969");
  expect(container.querySelector("[data-arpanet-signal]")).toBeNull();
  expect(container.querySelector('[data-opening-prop="network"]')).toBeNull();
  const signal = () => container.querySelector("[data-arpanet-signal]")?.getAttribute("transform");
  rerender(<SceneArtwork project={project} frame={540} />);
  const start = signal();
  rerender(<SceneArtwork project={project} frame={570} />);
  expect(signal()).not.toBe(start);
  rerender(<SceneArtwork project={project} frame={600} />);
  const arrival = signal();
  rerender(<SceneArtwork project={project} frame={660} />);
  expect(signal()).toBe(arrival);
  rerender(<SceneArtwork project={project} frame={840} />);
  expect(container.querySelector("[data-arpanet]")).toBeNull();
  expect(container.querySelector('[data-opening-prop="network"]')).toBeTruthy();
  expect(container.textContent).toContain("1983");
});
it("rejects reversed fade ranges", () => {
  const invalid = structuredClone(seed);
  invalid.objects[0].fade = { in: [30, 10] };
  expect(() => validateScene(invalid)).toThrow();
});
