import { withStoryChoices } from "./testChoices";
import { it, expect } from "vitest";
import {
  initialDraft,
  approve,
  approved,
  parseDraft,
  revise,
  passages,
} from "./model";
import {
  selectVariant,
  addVariant,
  harnessAlternatives,
  legacyHarnessAlternatives,
  migrateVariants,
  invariantRefrain,
} from "./variants";
import { arrangementReady, lyricStamp } from "./arrangement";
const target = (d: ReturnType<typeof initialDraft>) =>
  d.units.find((u) =>
    u.originalText.startsWith(
      "Show the plan. Let me choose.\nAsk before you use my tools.",
    ),
  )!;
it("applies explicit B selection without inferring approval", () => {
  const d = initialDraft(),
    u = target(d);
  expect(u.id).toBe("r7-section-12-passage-01");
  expect(u.selectedVariantId).toBe("harness-b");
  expect(u.variants!.slice(1).map((v) => v.text)).toEqual(
    harnessAlternatives.map((v) => v.text),
  );
  expect(approved(u)).toBe(false);
  expect(d.units.filter((x) => x.variants!.length > 1)).toHaveLength(4);
});
it("select A, approve, switch B and back invalidates every previous approval", () => {
  let d = initialDraft(),
    id = target(d).id;
  d = selectVariant(d, id, "harness-a");
  d = approve(d, id, "human-ui");
  expect(approved(target(d))).toBe(true);
  expect(target(d).approval!.variantId).toBe("harness-a");
  d = selectVariant(d, id, "harness-b");
  expect(approved(target(d))).toBe(false);
  d = selectVariant(d, id, "harness-a");
  expect(approved(target(d))).toBe(false);
});
it("editing and restoring alternate wording retain history but require fresh approval", () => {
  let d = initialDraft(),
    id = target(d).id;
  d = selectVariant(d, id, "harness-a");
  const text = target(d).text;
  d = approve(d, id, "human-ui");
  d = revise(d, id, "Edited A");
  expect(approved(target(d))).toBe(false);
  d = revise(d, id, text);
  expect(target(d).revision).toBe(3);
  expect(target(d).variants![1].history.map((h) => h.text)).toEqual([
    text,
    "Edited A",
    text,
  ]);
  expect(parseDraft(JSON.stringify(d))).toEqual(d);
});
it("migration preserves real single-version edits and exact approval", () => {
  let d = initialDraft();
  d = revise(d, d.units[0].id, "Existing human wording");
  d = approve(d, d.units[0].id, "human-ui");
  for (const u of passages(d)) {
    delete u.variants;
    delete u.selectedVariantId;
    if (u.approval) delete u.approval.variantId;
  }
  const restored = parseDraft(JSON.stringify(d));
  expect(restored.units[0].text).toBe("Existing human wording");
  expect(restored.units[0].history).toEqual(d.units[0].history);
  expect(approved(restored.units[0])).toBe(true);
  expect(target(restored).selectedVariantId).toBe("original");
});
it("a version switch locks Phase2, changes its binding and leaves other verses intact", () => {
  let d = initialDraft();
  for (const u of passages((d = withStoryChoices(d))))
    d = approve(d, u.id, "human-ui");
  const before = structuredClone(d);
  d = selectVariant(d, target(d).id, "harness-c");
  expect(arrangementReady(d)).toBe(false);
  expect(lyricStamp(d)).not.toBe(lyricStamp(before));
  expect(d.units.filter((u) => u.id !== target(d).id)).toEqual(
    before.units.filter((u) => u.id !== target(d).id),
  );
});
it("generic alternative creation preserves original and is pending", () => {
  const d = initialDraft(),
    id = d.units[3].id,
    next = addVariant(d, id),
    u = next.units[3];
  expect(u.variants).toHaveLength(2);
  expect(u.variants![0].text).toBe(d.units[3].text);
  expect(u.selectedVariantId).not.toBe("original");
  expect(approved(u)).toBe(false);
});

it("corrects untouched old proposals without selecting them and preserves their history", () => {
  const d = selectVariant(
      initialDraft(),
      "r7-section-12-passage-01",
      "original",
    ),
    u = target(d);
  for (const a of legacyHarnessAlternatives) {
    const v = u.variants!.find((v) => v.id === a.id)!;
    v.text = a.text;
    v.history[0].text = a.text;
  }
  const result = migrateVariants(d),
    updated = target(result);
  expect(updated.selectedVariantId).toBe("original");
  for (const v of updated.variants!.slice(1)) {
    expect(v.text.split("\n").slice(2)).toEqual(invariantRefrain);
    expect(v.revision).toBe(2);
    expect(v.history).toHaveLength(2);
  }
  expect(updated.originalText.split("\n")).toEqual([
    "Show the plan. Let me choose.",
    "Ask before you use my tools.",
    "Let me look. Let me change it.",
    "Leave the final say with me.",
  ]);
});
it("flags edited proposal conflicts without overwriting their wording or history", () => {
  let d = initialDraft(),
    id = target(d).id;
  d = selectVariant(d, id, "harness-a");
  d = revise(d, id, "My personal edited verse");
  const history = structuredClone(target(d).history);
  const result = migrateVariants(d);
  expect(target(result).text).toBe("My personal edited verse");
  expect(target(result).history).toEqual(history);
  expect(target(result).refrainConstraint!.conflicts).toContain("A");
  expect(() => approve(result, id, "human-ui")).toThrow("original refrain");
});
