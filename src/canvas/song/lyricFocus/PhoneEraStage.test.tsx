import { it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { SceneVideoFrame } from "./SceneVideoFrame";
import { newScenePlan, sceneContainers } from "./sceneContainers";
import { phoneCamera, phoneDetailBlend, phoneEraDefaults } from "./phoneEra";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("keeps the returning character visible and ends phone images at the app verse boundary", () => {
  const nodes = sceneContainers(a),
    end = nodes.find((n) => n.id === "phone-app-verse")!.end;
  const r = render(<SceneVideoFrame annotation={a} plan={newScenePlan(a)} time={77} />);
  const body = document.querySelector('[data-room-object="laptop-pose"]') as HTMLElement;
  expect(body).not.toBeNull();
  expect(body.style.opacity).toBe("1");
  expect(document.querySelector("[data-wide-open-door]")).toBeNull();
  r.rerender(<SceneVideoFrame annotation={a} plan={newScenePlan(a)} time={end - 0.01} />);
  expect(document.querySelector("[data-phone-era]")).not.toBeNull();
  r.rerender(<SceneVideoFrame annotation={a} plan={newScenePlan(a)} time={end} />);
  expect(document.querySelector("[data-phone-era]")).toBeNull();
  expect(document.querySelector("[data-social-ai-bridge]")).not.toBeNull();
  r.rerender(<SceneVideoFrame annotation={a} plan={newScenePlan(a)} time={120} />);
  expect(document.querySelector("[data-social-ai-bridge]")).not.toBeNull();
  expect(document.querySelector("[data-phone-app-stage]")).toBeNull();
  r.rerender(<SceneVideoFrame annotation={a} plan={newScenePlan(a)} time={123} />);
  expect(document.querySelector("[data-social-ai-bridge]")).toBeNull();
});
it("settles on the phone by86seconds without changing anchors", () => {
  expect(phoneCamera(86).scale).toBe(phoneEraDefaults.zoom);
  expect(phoneCamera(90)).toEqual(phoneCamera(86));
});
it("dissolves into the detail shot over 1.25 seconds with no opacity step", () => {
  expect(phoneDetailBlend(84.75)).toBe(0);
  expect(phoneDetailBlend(85.375)).toBeCloseTo(0.5);
  expect(phoneDetailBlend(86)).toBe(1);
  for (let t = 84.75; t < 86; t += 1 / 60)
    expect(phoneDetailBlend(t + 1 / 60) - phoneDetailBlend(t)).toBeLessThan(0.021);
});
