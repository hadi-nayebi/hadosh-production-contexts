import { it, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { kitchenPerformance } from "./kitchenDirection";
import KitchenFinale from "./KitchenFinale";
import { cortexModules } from "./InstructionCortex";
import { outdoorProjection } from "./outdoorShots";
const a = performances[0].annotation as Annotation;
it("uses exact vocal action cues and has no double-exposed kitchen cameras", () => {
  const before = JSON.stringify(a),
    p = kitchenPerformance(a, 198);
  const power = p.words.find((w) => /^power\W*$/i.test(w.item.text))!;
  expect(kitchenPerformance(a, power.start).view).toBe(2);
  const r = render(<KitchenFinale annotation={a} time={power.start} />);
  expect(document.querySelectorAll("[data-kitchen-camera]")).toHaveLength(1);
  expect(document.querySelector("[data-kitchen-word]")?.textContent).toBe(power.item.text);
  r.rerender(<KitchenFinale annotation={a} time={a.duration - 0.1} />);
  expect(document.querySelector("[data-kitchen-word]")).toBeNull();
  expect(
    Number((document.querySelector("[data-final-fade]") as HTMLElement).style.opacity),
  ).toBeGreaterThan(0.95);
  expect(JSON.stringify(a)).toBe(before);
  cleanup();
});
it("uses the actual toaster question cue and preserves the original context across departure", () => {
  const p = kitchenPerformance(a, 196);
  const who = p.words.find((w) => w.item.groupId.endsWith(":section:14"))!;
  expect(p.toasterCue).toBe(who.start);
  expect(kitchenPerformance(a, who.start - 0.01).view).toBe(0);
  expect(kitchenPerformance(a, who.start).view).toBe(1);
  const r = render(<KitchenFinale annotation={a} time={who.start + 0.1} />);
  const original = cortexModules(a).map((m) => m.id);
  const kitchen = [...document.querySelectorAll("[data-retained-node]")].map((e) =>
    e.getAttribute("data-retained-node"),
  );
  expect(kitchen).toEqual(original);
  r.rerender(<KitchenFinale annotation={a} time={p.chorus + 8} />);
  expect(document.querySelector("[data-kitchen-camera]")).toBeNull();
  expect(document.querySelectorAll("[data-outdoor-camera]")).toHaveLength(1);
  expect(
    [
      ...document
        .querySelector('[data-personal-cortex="0"]')!
        .querySelectorAll("[data-retained-node]"),
    ].map((e) => e.getAttribute("data-retained-node")),
  ).toEqual(original);
  const others = [
    ...document.querySelectorAll('[data-personal-cortex="1"] [data-retained-node]'),
  ].map((e) => e.getAttribute("data-retained-node"));
  expect(others.every((id) => !original.includes(id!))).toBe(true);
  expect(
    new Set(
      [...document.querySelectorAll("[data-personal-cortex]")].map((e) =>
        e.getAttribute("data-personal-cortex"),
      ),
    ).size,
  ).toBe(4);
  cleanup();
});
it("retreats monotonically without camera speed restarts", () => {
  const p = kitchenPerformance(a, 200);
  let previous = Infinity;
  for (let t = p.chorus; t <= a.duration - 2; t += 0.05) {
    const camera = outdoorProjection(t, p.chorus, a.duration - 2, 0);
    expect(camera.height).toBeLessThanOrEqual(previous);
    previous = camera.height;
  }
  expect(previous).toBeCloseTo(21, 1);
});
