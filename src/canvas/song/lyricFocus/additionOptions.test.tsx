import { it, expect } from "vitest";
import { initialDraft, revise, approve, approved, parseDraft } from "./model";
import { selectVariant, migrateVariants } from "./variants";
import { additionPlans, isRejectedAddition } from "./additionOptions";
import { lyricHandoff } from "./lyricExport";
it("retains rejected originals and alternatives after explicit final selection", () => {
  let d = initialDraft();
  for (const p of additionPlans.filter(p => !p.id.includes("-06-"))) {
    d = selectVariant(d, p.id, "original");
    const u = d.units.find((u) => u.id === p.id)!;
    expect(u.variants).toHaveLength(4);
    expect(u.selectedVariantId).toBe("original");
    expect(new Set(u.variants!.map((v) => v.text)).size).toBe(4);
    expect(isRejectedAddition(u)).toBe(true);
    expect(() => approve(d, u.id, "human-ui")).toThrow("rejected");
    expect(lyricHandoff(d)).not.toContain(p.options[0][1]);
  }
  expect(lyricHandoff(d)).toContain("REJECTED ORIGINAL");
});
it("preserves edited options and existing ordinary lyric evidence on repeat migration", () => {
  let d = initialDraft();
  const id = additionPlans[1].id;
  const prior = d.units.filter((u) => !u.id.startsWith("draft-"));
  d = selectVariant(d, id, "story-revised-2");
  d = revise(d, id, "My user wording");
  const expected = structuredClone(d.units.find((u) => u.id === id));
  d = migrateVariants(d);
  expect(d.units.find((u) => u.id === id)).toEqual(expected);
  expect(d.units.filter((u) => !u.id.startsWith("draft-"))).toEqual(prior);
  expect(approved(d.units.find((u) => u.id === id)!)).toBe(false);
  expect(parseDraft(JSON.stringify(d))).toEqual(d);
  expect(lyricHandoff(d)).toContain("My user wording");
  expect(lyricHandoff(d)).not.toContain(additionPlans[1].options[0][1]);
});

it("keeps a selected earlier user edit while adding three revised options", () => {
  let d = initialDraft();
  const id = additionPlans[1].id;
  const u = d.units.find((u) => u.id === id)!;
  u.variants!.push({
    id: "story-option-1",
    name: "Earlier personal version",
    text: "My retained words",
    revision: 1,
    history: [
      {
        revision: 1,
        text: "My retained words",
        at: "test",
        reason: "User draft",
      },
    ],
  });
  d = selectVariant(d, id, "story-option-1");
  d = revise(d, id, "My revised retained words");
  const before = structuredClone(d.units.find((u) => u.id === id)!);
  d = migrateVariants(d);
  expect(d.units.find((u) => u.id === id)).toEqual(before);
  expect(
    d.units
      .find((u) => u.id === id)!
      .variants!.filter((v) => v.id.startsWith("story-revised-")),
  ).toHaveLength(3);
  expect(parseDraft(JSON.stringify(d))).toEqual(d);
});

it('persists exact selected social wording as r2 retaining becomes in r1', () => {
 const d = initialDraft(), u = d.units.find(u=>u.id==='draft-section-06-passage-04')!;
 expect(u.selectedVariantId).toBe('story-option-3');
 expect(u.revision).toBe(2);
 expect(u.text).toContain('A clip became a chain.');
 expect(u.history[0].text).toContain('A clip becomes a chain.');
 expect(approved(u)).toBe(false);
 expect(d.socialSelection?.conflict).toBe(false);
 expect(parseDraft(JSON.stringify(d))).toEqual(d);
});

it('records final exact choices once and makes later wording changes stale', async () => {
 const {finalSelectionCurrent}=await import('./additionOptions');
 let d=initialDraft();
 expect(d.units.find(u=>u.id==='draft-section-09-passage-04')?.selectedVariantId).toBe('story-revised-1');
 expect(d.units.find(u=>u.id==='draft-section-11-passage-04')?.selectedVariantId).toBe('story-revised-3');
 expect(finalSelectionCurrent(d)).toBe(true);
 expect(d.units.some(approved)).toBe(false);
 expect(parseDraft(JSON.stringify(d))).toEqual(d);
 d=revise(d,'draft-section-09-passage-04','Later user edit');
 expect(finalSelectionCurrent(d)).toBe(false);
 expect(parseDraft(JSON.stringify(d)).units.find(u=>u.id==='draft-section-09-passage-04')?.text).toBe('Later user edit');
});
