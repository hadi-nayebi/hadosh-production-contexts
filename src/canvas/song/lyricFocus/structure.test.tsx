import { withStoryChoices } from "./testChoices";
import { describe, it, expect } from "vitest";
import { initialDraft, approve } from "./model";
import { songStructure, structureStamp, proposals } from "./structure";
import { createArrangement, lyricStamp } from "./arrangement";
describe("shared song structure", () => {
  it("keeps exact source parts, chorus count and non-approval instrumental marks", () => {
    const d = initialDraft(),
      marks = songStructure(d);
    expect(marks.filter((m) => m.kind === "part")).toHaveLength(16);
    expect(marks.filter((m) => m.kind === "chorus")).toHaveLength(4);
    expect(marks.filter((m) => m.kind === "instrumental")).toHaveLength(6);
    expect(
      marks.filter((m) => m.kind !== "instrumental").map((m) => m.id),
    ).toEqual(d.units.map((u) => u.id));
    expect(
      [1, 2, 3, 4].map(
        (v) =>
          marks
            .filter((m) => m.label.includes(`Verse ${v},`))
            .filter((m) => m.kind === "part").length,
      ),
    ).toEqual([4, 4, 4, 4]);
    expect(proposals).toHaveLength(3);
  });
  it("changes arrangement binding on structural changes without changing approvals", () => {
    let d = initialDraft();
    for (const u of [d.title, ...(d = withStoryChoices(d)).units])
      d = approve(d, u.id, "test");
    const changed = { ...d, gaps: d.gaps.slice(1) };
    expect(structureStamp(changed)).not.toEqual(structureStamp(d));
    expect(lyricStamp(changed)).not.toEqual(lyricStamp(d));
    expect(changed.units).toEqual(d.units);
    const a = createArrangement(d, true);
    expect([
      ...new Set(
        a.blocks.filter((b) => b.kind === "vocal").map((b) => b.lyricId),
      ),
    ]).toEqual(
      songStructure(d)
        .filter((m) => m.kind !== "instrumental")
        .map((m) => m.id),
    );
  });
});
