import { it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import InstructionCortex, { cortexModules, cortexVocalWord } from "./InstructionCortex";
import { cortexOrigin } from "./InstructionCortex";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
it("turns completed instruction phrases into persistent files without changing source timing", () => {
  const before = JSON.stringify(a),
    modules = cortexModules(a);
  expect(modules.map((m) => m.name)).toContain("publish-rule.json");
  const r = render(<InstructionCortex annotation={a} time={modules[0].at - 0.01} />);
  expect(document.querySelector("[data-cortex-file]")).toBeNull();
  r.rerender(<InstructionCortex annotation={a} time={modules[0].at + 0.9} />);
  expect(document.querySelector('[data-cortex-file="workshop.md"]')).not.toBeNull();
  r.rerender(<InstructionCortex annotation={a} time={modules.at(-1)!.at + 1} />);
  expect(document.querySelectorAll("[data-cortex-file]").length).toBe(Math.min(12, modules.length));
  for (const file of document.querySelectorAll("[data-cortex-file]")) {
    expect(file.textContent).not.toMatch(/\.md|\.json|\.css/);
    expect(file.querySelector("svg")).not.toBeNull();
  }
  expect(new Set(modules.map((m) => m.id)).size).toBe(modules.length);
  expect(JSON.stringify(a)).toBe(before);
});
it("registers distinct head origins and keeps the depth mask and stem rhythm source", () => {
  expect(new Set(Array.from({ length: 28 }, (_, i) => cortexOrigin(i).join(","))).size).toBe(28);
  const sideRoots = Array.from({ length: 28 }, (_, i) => cortexOrigin(i, 1));
  expect(sideRoots.every(([x, y]) => x >= 29 && x <= 39 && y >= 14.5 && y <= 21)).toBe(true);
  render(<InstructionCortex annotation={a} time={153} />);
  expect(
    document.querySelector("[data-instruction-cortex]")?.getAttribute("data-cortex-rhythm-source"),
  ).toBe("isolated-drums-percussion");
  expect(document.querySelector("#cortex-depth-mask")).not.toBeNull();
});

// Consecutive phrases can have a lingering final word and overlapping anchor ends.
// The newest sung word must win that shared reading position.
it("gives incoming speech priority over overlapping anchors", () => {
  const modules = cortexModules(a);
  for (let t = 122; t < 164; t += 0.05) {
    const active = modules.flatMap((m) => m.words).filter((w) => t >= w.start && t < w.end);
    const selected = cortexVocalWord(modules, t);
    if (active.length) expect(selected?.start).toBe(Math.max(...active.map((w) => w.start)));
    else expect(selected).toBeUndefined();
  }
});
