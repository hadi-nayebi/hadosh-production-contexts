import { it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import StreetCortexBranches from "./StreetCortexBranches";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
afterEach(cleanup);
it("retains individual owned branches while adding growth on actual stem events", () => {
  const a = performances[0].annotation as Annotation,
    before = JSON.stringify(a);
  const r = render(
    <StreetCortexBranches annotation={a} time={210} start={201.68} owner={0} pulse={0} />,
  );
  const retained = [...document.querySelectorAll("[data-owned-branch]")].map((e) =>
    e.getAttribute("data-owned-branch"),
  );
  r.rerender(
    <StreetCortexBranches annotation={a} time={221} start={201.68} owner={0} pulse={0.5} />,
  );
  const later = [...document.querySelectorAll("[data-owned-branch]")].map((e) =>
    e.getAttribute("data-owned-branch"),
  );
  expect(later.length).toBeGreaterThan(retained.length);
  expect(retained.every((id) => later.includes(id))).toBe(true);
  const roots = [...document.querySelectorAll("linearGradient")].map((e) => e.getAttribute("x1"));
  expect(new Set(roots).size).toBeGreaterThan(5);
  expect(JSON.stringify(a)).toBe(before);
});
