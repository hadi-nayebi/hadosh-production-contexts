import { withStoryChoices } from "./testChoices";
import { it, expect } from "vitest";
import { initialDraft, approve, passages, revise } from "./model";
import {
  createArrangement,
  arrangementReady,
  setDuration,
  timedBlocks,
  parseArrangement,
  audioTimingCurrent,
  layoutBlocks,
} from "./arrangement";
function ready(actor: "human-ui" | "test" = "human-ui") {
  let d = initialDraft();
  for (const u of passages((d = withStoryChoices(d))))
    d = approve(d, u.id, actor);
  return d;
}
it("gates every revision and isolates practice from human approval", () => {
  expect(() => createArrangement(initialDraft())).toThrow();
  expect(arrangementReady(ready("test"))).toBe(false);
  expect(arrangementReady(ready("test"), true)).toBe(true);
  const d = ready();
  expect(arrangementReady(revise(d, d.units[10].id, "Changed lyric"))).toBe(
    false,
  );
});
it("preserves vocal wording and order, splitting only the spoken intro", () => {
  const d = ready(),
    a = createArrangement(d);
  for (const u of d.units) {
    const blocks = a.blocks.filter(
      (b) => b.kind === "vocal" && b.lyricId === u.id,
    );
    expect(blocks.map((b) => b.text).join("\n")).toBe(u.text);
    if (u.section !== "Spoken Intro") expect(blocks).toHaveLength(1);
  }
  expect(new Set(a.blocks.map((b) => b.id)).size).toBe(a.blocks.length);
  expect(
    a.blocks.every((b, i) => b.kind === (i % 2 ? "instrumental" : "vocal")),
  ).toBe(true);
});
it("uses contiguous numeric intervals and preserves totals after duration edits", () => {
  const a = createArrangement(ready()),
    b = setDuration(a, a.blocks[1].id, 3.5),
    t = timedBlocks(b);
  expect(t[1].end - t[1].start).toBe(3.5);
  expect(
    t.every((x, i) => (i === 0 ? x.start === 0 : x.start === t[i - 1].end)),
  ).toBe(true);
  expect(t.at(-1)!.end).toBeCloseTo(
    b.blocks.reduce((s, x) => s + x.seconds, 0),
  );
  expect(b.history[0].blocks).toEqual(a.blocks);
});
it("invalidates dependent audio timing and rejects stale lyric binding", () => {
  const d = ready(),
    a = createArrangement(d);
  a.audioTiming = { arrangementRevision: a.revision, lyricStamp: a.lyricStamp };
  expect(audioTimingCurrent(a)).toBe(true);
  expect(audioTimingCurrent(setDuration(a, a.blocks[0].id, 6))).toBe(false);
  const changed = revise(d, d.units[0].id, "New wording");
  const approved = approve(changed, changed.units[0].id, "human-ui");
  expect(() => parseArrangement(JSON.stringify(a), approved)).toThrow();
});
it("rejects invalid durations and round trips source-linked blocks", () => {
  const d = ready(),
    a = createArrangement(d);
  expect(() => setDuration(a, a.blocks[0].id, 0)).toThrow();
  expect(() => setDuration(a, a.blocks[1].id, NaN)).toThrow();
  expect(setDuration(a, a.blocks[1].id, 0).blocks[1].seconds).toBe(0);
  expect(parseArrangement(JSON.stringify(a), d)).toEqual(a);
});
it("lays out ordered, non-overlapping serpentine blocks at phone and desktop widths", () => {
  const a = createArrangement(ready());
  for (const width of [358, 1050]) {
    const l = layoutBlocks(a, width, null);
    expect(l.placed).toHaveLength(a.blocks.length);
    for (const p of l.placed) {
      expect(p.x).toBeGreaterThanOrEqual(0);
      expect(p.x + p.width).toBeLessThanOrEqual(width);
      expect(p.width).toBeCloseTo(Math.max(100, p.block.seconds * l.scale));
    }
    for (let i = 1; i < l.placed.length; i++) {
      const p = l.placed[i],
        prev = l.placed[i - 1];
      if (p.y === prev.y)
        expect(
          p.reverse ? p.x + p.width < prev.x : p.x > prev.x + prev.width,
        ).toBe(true);
    }
  }
});
