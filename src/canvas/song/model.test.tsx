import { describe, expect, test } from "vitest";
import { approve, demoProject, parseProject, problems, revise } from "./model";
import { playbackHTML } from "./export";
describe("song context and approval lineage", () => {
  test("upstream edit preserves work but invalidates every dependent approval", () => {
    let p = approve(demoProject(), 0);
    p = approve(p, 1);
    const next = revise(p, 0, { message: "A revised claim" });
    expect(next.lines).toEqual(p.lines);
    expect(next.approved.every((a) => a === null)).toBe(true);
    expect(problems(next, 1)).toContain("Approve Context first.");
  });
  test("old audio cannot be approved against revised lyrics", () => {
    let p = approve(approve(demoProject(), 0), 1);
    p.takes = [
      {
        id: "take",
        name: "Candidate",
        provider: "fixture",
        filename: "test.wav",
        size: 1,
        modified: 1,
        notes: "",
        revision: 1,
        style: p.style,
      },
    ];
    p.selected = "take";
    expect(problems(p, 2)).toEqual([]);
    p = revise(p, 1, { lines: p.lines.map((l) => ({ ...l, text: l.text + " revised" })) });
    p = approve(p, 1);
    expect(problems(p, 2).join(" ")).toMatch(/current lyrics/);
  });
  test("musical direction changes make an existing take outdated", () => {
    const p = approve(approve(demoProject(), 0), 1);
    p.takes = [
      {
        id: "take",
        name: "Candidate",
        provider: "fixture",
        filename: "a.wav",
        size: 1,
        modified: 1,
        notes: "",
        revision: 1,
        style: p.style,
      },
    ];
    p.selected = "take";
    const next = revise(p, 2, { style: "A different arrangement" });
    expect(problems(next, 2).join(" ")).toMatch(/current lyrics/);
  });
  test("imports reject broken references and cannot import approval authority", () => {
    const p = approve(demoProject(), 0);
    expect(parseProject(JSON.stringify(p)).approved[0]).toBe(null);
    expect(parseProject(JSON.stringify(p), false).approved[0]).toBe(1);
    p.lines[0].claim = "missing";
    expect(() => parseProject(JSON.stringify(p))).toThrow(/provenance/);
  });
  test("timing refuses gaps in line coverage and overlapping ranges", () => {
    const p = demoProject();
    p.approved[2] = 1;
    p.cues = p.lines.map((l, i) => ({ line: l.id, start: i, end: i + 2 }));
    expect(problems(p, 3).join(" ")).toMatch(/non-overlapping/);
  });
  test("HTML export treats source text as data rather than executable markup", () => {
    const p = demoProject();
    p.title = "</script><script>alert(1)</script>";
    const html = playbackHTML(p);
    expect(html).not.toContain(p.title);
    expect(html).toContain("\\u003c/script>");
    expect(html).toContain(".textContent=");
  });
});
