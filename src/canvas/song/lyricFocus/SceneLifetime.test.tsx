import { afterEach, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { SceneEffects, SceneScope, sceneLifetimes, insideLifetime } from "./SceneLifetime";
import { SceneVideoFrame } from "./SceneVideoFrame";
import { newScenePlan, sceneContainers } from "./sceneContainers";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("bounds every production family through all boundaries, forward and backward", () => {
  const before = JSON.stringify(a),
    scopes = sceneLifetimes(a),
    plan = newScenePlan(a);
  expect(scopes.flatMap((s) => s.sections)).toEqual(Array.from({ length: 16 }, (_, i) => i + 1));
  const boundaries = [
    ...new Set([
      0,
      a.duration,
      ...sceneContainers(a).flatMap((n) => [n.start, n.end]),
      ...scopes.flatMap((s) => [s.start, s.end, s.effectsEnd]),
    ]),
  ];
  const times = boundaries
    .flatMap((t) => [t - 0.001, t, t + 0.001])
    .filter((t) => t >= 0 && t <= a.duration);
  const view = render(<SceneVideoFrame annotation={a} time={0} plan={plan} />);
  for (const time of [...times, ...[...times].reverse(), ...times]) {
    view.rerender(<SceneVideoFrame annotation={a} time={time} plan={plan} />);
    const actual = [...document.querySelectorAll("[data-scene-owner]")].map((x) =>
      x.getAttribute("data-scene-owner"),
    );
    expect(actual.sort(), `owners at ${time}`).toEqual(
      scopes
        .filter((s) => insideLifetime(time, s.start, s.end))
        .map((s) => s.id)
        .sort(),
    );
    if (time >= scopes.find((s) => s.id === "opening")!.effectsEnd) {
      expect(document.querySelector('[data-testid="web-birth-reveal"]')).toBeNull();
      expect(document.querySelector("[data-question]")).toBeNull();
    }
    if (
      time >= scopes.find((s) => s.id === "infinity")!.effectsEnd &&
      time < scopes.find((s) => s.id === "infinity")!.end
    )
      expect(document.querySelector("[data-tempo-asset]")).toBeNull();
  }
  expect(JSON.stringify(a)).toBe(before);
}, 15000);
it("a carried background cannot carry its effect layer beyond its own half-open cutoff", () => {
  const lifetime = {
    id: "outgoing",
    start: 1,
    end: 3,
    effectsEnd: 2,
    sections: [1],
    persistence: "Background-only dissolve",
  };
  const view = render(
    <SceneScope lifetime={lifetime} time={1.99}>
      <img alt="background" />
      <SceneEffects>
        <b>old words</b>
      </SceneEffects>
    </SceneScope>,
  );
  expect(document.querySelector("b")).not.toBeNull();
  for (const time of [2, 2.5, 1.99, 3, 1]) {
    view.rerender(
      <SceneScope lifetime={lifetime} time={time}>
        <img alt="background" />
        <SceneEffects>
          <b>old words</b>
        </SceneEffects>
      </SceneScope>,
    );
    expect(!!document.querySelector("img")).toBe(time >= 1 && time < 3);
    expect(!!document.querySelector("b")).toBe(time >= 1 && time < 2);
  }
});
