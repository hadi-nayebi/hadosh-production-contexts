import { describe, it, expect } from "vitest";
import seed from "./seed.json";
import {
  initialDraft,
  parseDraft,
  approve,
  approved,
  complete,
  revise,
  restoreDraft,
  type Draft,
} from "./model";
import {
  migrateStructure,
  closingId,
  removedId,
  endingId,
  closingText,
  endingText,
  structureConflicts,
  additions,
} from "./structureMigration";
import { migrateVariants, selectVariant } from "./variants";
import { createArrangement, arrangementReady } from "./arrangement";
const legacy = () => migrateVariants(structuredClone(seed) as Draft);
describe("4/4/4/4/2 structure migration", () => {
  it("inserts three pending drafts and retains exact finale source/history", () => {
    const d = initialDraft();
    expect(d.units).toHaveLength(22);
    expect(
      [1, 2, 3, 4].map(
        (v) => d.units.filter((u) => u.section === `Verse ${v}`).length,
      ),
    ).toEqual([4, 4, 4, 4]);
    expect(d.units.slice(-2).map((u) => u.text)).toEqual([
      closingText,
      endingText,
    ]);
    expect(d.units.slice(-2).map((u) => u.id)).toEqual([closingId, endingId]);
    expect(d.units.filter((u) => u.section.includes("Chorus"))).toHaveLength(4);
    expect(d.archivedUnits?.find((u) => u.id === removedId)?.text).toBe(
      seed.units.find((u) => u.id === removedId)!.text,
    );
    expect(d.units.find((u) => u.id === closingId)?.history[0].text).toContain(
      "I choose the bread.",
    );
    expect(
      d.gaps.find((g) => g.afterUnit === "draft-section-09-passage-04"),
    ).toBeDefined();
    expect(
      d.units
        .filter((u) => additions.some((a) => a.id === u.id))
        .some(approved),
    ).toBe(false);
    expect(parseDraft(JSON.stringify(d))).toEqual(d);
    expect(migrateStructure(d)).toEqual(d);
  });
  it("preserves exact unchanged approvals and archives removed edits and approvals", () => {
    let old = legacy();
    old = revise(old, removedId, "My retained closing edit");
    for (const u of [old.title, ...old.units])
      old = approve(old, u.id, "human-ui");
    const d = parseDraft(JSON.stringify(old));
    expect(d.units.filter(approved)).toHaveLength(17);
    expect(approved(d.title)).toBe(true);
    expect(d.archivedUnits?.find((u) => u.id === removedId)?.text).toBe(
      "My retained closing edit",
    );
    expect(approved(d.archivedUnits!.find((u) => u.id === removedId)!)).toBe(
      true,
    );
    expect(complete(d)).toBe(false);
    expect(arrangementReady(d)).toBe(false);
    expect(() => createArrangement(d)).toThrow();
  });
  it("flags edited closing without replacing it or claiming the new draft approved", () => {
    let old = revise(legacy(), closingId, "User edited closing");
    // Legacy approval is evidence for this exact text only.
    const u = old.units.find((u) => u.id === closingId)!;
    u.approvedRevision = u.revision;
    u.approval = {
      actor: "human-ui",
      at: "test",
      revision: u.revision,
      text: u.text,
      variantId: u.selectedVariantId,
    };
    let d = parseDraft(JSON.stringify(old));
    expect(d.units.find((u) => u.id === closingId)?.text).toBe(
      "User edited closing",
    );
    expect(structureConflicts(d)).toHaveLength(1);
    expect(() => approve(d, closingId, "human-ui")).toThrow();
    d = selectVariant(d, closingId, "requested-closing");
    expect(d.units.find((u) => u.id === closingId)?.text).toBe(closingText);
    expect(approved(d.units.find((u) => u.id === closingId)!)).toBe(false);
    expect(structureConflicts(d)).toHaveLength(0);
    expect(parseDraft(JSON.stringify(d))).toEqual(d);
  });
  it("retains an edited original ending and recovers unsaved removed wording into archive", () => {
    const old = revise(legacy(), endingId, "User ending");
    expect(parseDraft(JSON.stringify(old)).units.at(-1)?.text).toBe(
      "User ending",
    );
    expect(structureConflicts(parseDraft(JSON.stringify(old)))).toHaveLength(1);
    const d = restoreDraft(
      JSON.stringify({
        ...legacy(),
        unsavedText: { id: removedId, text: "Unsaved removed text" },
      }),
    );
    expect(d.archivedUnits?.find((u) => u.id === removedId)?.text).toBe(
      "Unsaved removed text",
    );
    expect(parseDraft(JSON.stringify(d))).toEqual(d);
  });
});

it("applies B once, retains existing B approval, and does not overwrite edited B", () => {
  let old = selectVariant(legacy(), "r7-section-12-passage-01", "harness-b");
  old = approve(old, "r7-section-12-passage-01", "human-ui");
  let d = parseDraft(JSON.stringify(old));
  expect(
    approved(d.units.find((u) => u.id === "r7-section-12-passage-01")!),
  ).toBe(true);
  old = revise(
    old,
    "r7-section-12-passage-01",
    "Edited first line\nEdited second line\nLet me look. Let me change it.\nLeave the final say with me.",
  );
  d = parseDraft(JSON.stringify(old));
  expect(d.harnessSelection?.conflict).toBe(true);
  expect(
    d.units.find((u) => u.id === "r7-section-12-passage-01")?.text,
  ).toContain("Edited first line");
  expect(() => approve(d, "r7-section-12-passage-01", "human-ui")).toThrow(
    "Saved B",
  );
  expect(parseDraft(JSON.stringify(d))).toEqual(d);
});
