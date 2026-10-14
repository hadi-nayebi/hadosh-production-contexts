import { expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import type { Annotation } from "./audioAnnotation";
import performances from "./v0Performance.json";
import PersonalOwnershipStage, { ownershipPerformance } from "./PersonalOwnershipStage";
const a = performances[0].annotation as Annotation;
it("retains the same context through look/change and the instrumental passage without editing timing", () => {
  const before = JSON.stringify(a);
  const p = ownershipPerformance(a, 170);
  const look = p.words.find((w) => /^look\W*$/i.test(w.item.text))!;
  const change = p.words.find((w) => /^change\W*$/i.test(w.item.text))!;
  expect(ownershipPerformance(a, look.start + 0.5).focus).toBe(1);
  expect(ownershipPerformance(a, change.start + 0.9).progress).toBe(1);
  const r = render(<PersonalOwnershipStage annotation={a} time={look.start + 0.5} />);
  const ids = [...document.querySelectorAll("[data-cortex-node]")].map((x) =>
    x.getAttribute("data-cortex-node"),
  );
  r.rerender(<PersonalOwnershipStage annotation={a} time={change.start + 0.9} />);
  expect(
    [...document.querySelectorAll("[data-cortex-node]")].map((x) =>
      x.getAttribute("data-cortex-node"),
    ),
  ).toEqual(ids);
  r.rerender(<PersonalOwnershipStage annotation={a} time={190} />);
  expect(document.querySelector("[data-personal-ownership]")).not.toBeNull();
  expect(document.querySelector("[data-ownership-word]")).toBeNull();
  expect(document.querySelector("[data-instruction-word]")).toBeNull();
  expect(JSON.stringify(a)).toBe(before);
  cleanup();
});
