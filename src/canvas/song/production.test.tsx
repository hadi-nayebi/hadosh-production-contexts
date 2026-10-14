import { describe, expect, test } from "vitest";
import { toasterProject, sunoLyrics } from "./toaster";
import { approve, parseProject, revise, packet } from "./model";
import { partSectionIds } from "./production";

describe("planned instrumental sections and generation continuity", () => {
  test("music-only passages are not invented lyric rows or timestamp cues", () => {
    const p = toasterProject();
    const text = sunoLyrics(p);
    expect(text.startsWith("[Instrumental Intro]\n\n[Verse 1]")).toBe(true);
    expect(text).toContain("[Instrumental Break 2]\n\n[Verse 3]");
    expect(
      p.arrangement?.filter((s) => s.kind === "instrumental").every((s) => s.lines.length === 0),
    ).toBe(true);
    expect(p.cues).toEqual([]);
    expect(packet(p).lyrics).toBe(text);
    expect(p.lines).toHaveLength(24);
  });
  test("part handoff retains the section order and only the next lyrics", () => {
    const p = toasterProject();
    const a = sunoLyrics(p, partSectionIds(p, "A"));
    const b = sunoLyrics(p, partSectionIds(p, "B"));
    expect(a).toContain("[Instrumental Turnaround]");
    expect(a).not.toContain("The model brings");
    expect(b.startsWith("[Verse 2]")).toBe(true);
    expect(b).not.toContain("I pay for the power");
  });
  test("arrangement import rejects vocal references in instrumental passages", () => {
    const p = toasterProject();
    p.arrangement![0].lines = [p.lines[0].id];
    expect(() => parseProject(JSON.stringify(p))).toThrow(/arrangement/);
  });
  test("arrangement changes invalidate lyric and downstream approvals", () => {
    const p = approve(approve(toasterProject(), 0), 1);
    const next = revise(p, 1, {
      arrangement: p.arrangement!.map((s, i) => (i === 0 ? { ...s, bars: 12 } : s)),
    });
    expect(next.approved[0]).toBe(p.approved[0]);
    expect(next.approved.slice(1).every((x) => x === null)).toBe(true);
  });
});
