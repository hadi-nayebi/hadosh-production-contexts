import { it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import EndCredits, { creditBounds } from "./EndCredits";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
afterEach(cleanup);
it("credits occupy only instrumental time after the final sung word without extending audio", () => {
  const a = performances[0].annotation as Annotation;
  const before = JSON.stringify(a),
    b = creditBounds(a)!;
  expect(b.start).toBeGreaterThanOrEqual(Math.max(...wordTiming(a).intervals.map((w) => w.end)));
  expect(b.end).toBe(a.duration);
  const r = render(<EndCredits annotation={a} time={b.start - 0.01} />);
  expect(document.querySelector("[data-end-credits]")).toBeNull();
  r.rerender(<EndCredits annotation={a} time={b.start + 1} />);
  expect(document.querySelectorAll("[data-credit-quarter]")).toHaveLength(0);
  for (let i = 0; i < 4; i++) {
    r.rerender(<EndCredits annotation={a} time={b.start + 2 + ((b.end - b.start - 2) * (i + 0.5)) / 4} />);
    expect(document.querySelector("[data-end-credits]")?.getAttribute("data-end-credits")).toBe(
      String(i),
    );
    expect(document.querySelectorAll("[data-credit-quarter]")).toHaveLength(i + 1);
  }
  r.rerender(<EndCredits annotation={a} time={b.end} />);
  expect(document.querySelector("[data-end-credits]")).toBeNull();
  expect(JSON.stringify(a)).toBe(before);
});
