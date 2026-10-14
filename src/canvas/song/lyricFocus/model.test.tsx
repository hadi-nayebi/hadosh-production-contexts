import { withStoryChoices } from "./testChoices";
import { describe, it, expect } from "vitest";
import {
  initialDraft,
  restoreDraft,
  passages,
  approve,
  approved,
  revise,
  complete,
  parseDraft,
} from "./model";
describe("lyric approval boundaries", () => {
  it("retains all R7 words and intended breaks without importing approval", () => {
    const d = initialDraft();
    expect(
      [...d.units, ...d.archivedUnits!].map((u) => u.originalText).join("\n"),
    ).toContain("When I change the model,");
    expect(d.gaps).toHaveLength(6);
    expect(passages(d).some(approved)).toBe(false);
    expect(d.units[0].history).toHaveLength(2);
    expect(d.source.originalLyrics).toContain("Let me take you back.");
  });
  it("approves the exact revision and advances; changing wording invalidates approval", () => {
    const d = initialDraft(),
      a = approve(d, d.activeId, "human-ui");
    expect(approved(a.title)).toBe(true);
    expect(a.activeId).toBe(a.units[0].id);
    const b = revise(a, a.title.id, "A different title");
    expect(approved(b.title)).toBe(false);
    expect(b.title.history[0].text).toBe(d.title.text);
    expect(b.title.revision).toBe(2);
  });
  it("restoring wording is a new pending revision, even if previously approved", () => {
    let d = initialDraft();
    d = approve(d, d.title.id, "human-ui");
    const text = d.title.text;
    d = revise(d, d.title.id, "Changed");
    d = revise(d, d.title.id, text);
    expect(d.title.revision).toBe(3);
    expect(approved(d.title)).toBe(false);
  });
  it("requires all human approvals and isolates test approvals", () => {
    let d = initialDraft();
    for (const u of passages((d = withStoryChoices(d))))
      d = approve(d, u.id, "test");
    expect(complete(d)).toBe(false);
    for (const u of passages((d = withStoryChoices(d))))
      d = approve(d, u.id, "human-ui");
    expect(complete(d)).toBe(true);
    expect(complete(revise(d, d.units[4].id, "A revision"))).toBe(false);
  });
  it("round trips history and rejects altered source and false revision approval", () => {
    let d = approve(initialDraft(), "song-title", "human-ui");
    expect(parseDraft(JSON.stringify(d))).toEqual(d);
    d.title.text = "Changed without revision";
    expect(() => parseDraft(JSON.stringify(d))).toThrow();
    d = initialDraft();
    d.source.originalLyrics = "changed";
    expect(() => parseDraft(JSON.stringify(d))).toThrow();
  });
});

it("backup restoration preserves wording and history but resets every approval", () => {
  let d = initialDraft();
  for (const u of passages((d = withStoryChoices(d))))
    d = approve(d, u.id, "human-ui");
  const restored = restoreDraft(JSON.stringify(d));
  expect(passages(restored).some(approved)).toBe(false);
  expect(restored.units.map((u) => u.history)).toEqual(
    d.units.map((u) => u.history),
  );
  expect(restored.units.map((u) => u.text)).toEqual(d.units.map((u) => u.text));
});
it("refuses a backup that rewrites the immutable source passage", () => {
  const d = initialDraft();
  d.units[0].originalText = "fabricated";
  expect(() => restoreDraft(JSON.stringify(d))).toThrow();
});

it("restores exported unsaved text as a pending revision", () => {
  const d = initialDraft();
  const r = restoreDraft(
    JSON.stringify({
      ...d,
      unsavedText: { id: d.title.id, text: "Recovered title" },
    }),
  );
  expect(r.title.text).toBe("Recovered title");
  expect(r.title.history).toHaveLength(2);
  expect(approved(r.title)).toBe(false);
});
