import { it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import ExtraPedestrian from "./ExtraPedestrian";
import BackpackCortex from "./BackpackCortex";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("keeps each remaining person and portrait single through growth without modifying source", () => {
  const before = JSON.stringify(a);
  const r = render(
    <>
      <ExtraPedestrian annotation={a} time={222} start={201.68} view={2} />
      <BackpackCortex annotation={a} time={222} start={201.68} view={2} />
    </>,
  );
  const poses = [
    ...document.querySelectorAll("[data-extra-pedestrian],[data-backpack-cortex]"),
  ].map((e) => (e as HTMLElement).style.cssText);
  r.rerender(
    <>
      <ExtraPedestrian annotation={a} time={224} start={201.68} view={2} />
      <BackpackCortex annotation={a} time={224} start={201.68} view={2} />
    </>,
  );
  expect(
    [...document.querySelectorAll("[data-extra-pedestrian],[data-backpack-cortex]")].map(
      (e) => (e as HTMLElement).style.cssText,
    ),
  ).toEqual(poses);
  expect(document.querySelectorAll('[data-extra-part="portrait"]')).toHaveLength(1);
  expect(document.querySelectorAll('[data-backpack-part="portrait"]')).toHaveLength(1);
  expect(
    document.querySelector("[data-extra-pedestrian]")?.getAttribute("data-extra-pedestrian"),
  ).toBe("3");
  expect(
    document.querySelector("[data-backpack-cortex]")?.getAttribute("data-backpack-cortex"),
  ).toBe("2");
  expect(JSON.stringify(a)).toBe(before);
});
