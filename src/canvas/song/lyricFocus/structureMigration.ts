import seed from "./seed.json";
import type { Draft, Unit } from "./model";
import { migrateVariants, syncVariant, harnessAlternatives } from "./variants";
import { proposals } from "./structure";
export const closingId = "r7-section-14-passage-01";
export const removedId = "r7-section-14-passage-02";
export const endingId = "r7-section-15-passage-01";
export const closingText =
  "Who owns the toaster?\nI buy the power.\nI choose the model.\nI choose the rules.";
export const endingText = seed.units.find(
  (u) => u.id === endingId,
)!.originalText;
export const additions = proposals.map((p, i) => ({
  ...p,
  id: `draft-section-${["06", "09", "11"][i]}-passage-04`,
  section: `Verse ${i + 2}`,
}));
const at = "2026-10-12T05:11:00Z";
export const structureConflicts = (d: Draft) =>
  d.structureVersion !== 2
    ? []
    : [
        { id: closingId, expected: closingText },
        { id: endingId, expected: endingText },
      ].filter((c) => d.units.find((u) => u.id === c.id)?.text !== c.expected);
export function migrateStructure(input: Draft): Draft {
  const d = structuredClone(input);
  if (d.structureVersion === 2) return migrateVariants(d);
  const removed = d.units.find((u) => u.id === removedId)!;
  const closing = d.units.find((u) => u.id === closingId)!;
  d.archivedUnits = [structuredClone(removed), structuredClone(closing)];
  d.units = d.units.filter((u) => u.id !== removedId);
  for (const a of additions) {
    const u: Unit = {
      id: a.id,
      section: a.section,
      purpose: a.role.replace("Proposed", "Draft"),
      originalText: a.text,
      text: a.text,
      revision: 1,
      approval: null,
      approvedRevision: null,
      history: [
        {
          revision: 1,
          text: a.text,
          at,
          reason: `Agent-authored fourth part under Hadi's 4/4/4/4/2 draft instruction; inserted after ${a.after}; pending review. Sentinel_95577be6a93c819190dae39a44e43be0`,
        },
      ],
    };
    d.units.splice(d.units.findIndex((u) => u.id === a.after) + 1, 0, u);
  }
  d.gaps = d.gaps.map((g) =>
    g.afterUnit === "r7-section-09-passage-03"
      ? { ...g, afterUnit: "draft-section-09-passage-04" }
      : g,
  );
  // Only exact untouched source wording is replaced. Any user revision remains selected.
  if (
    closing.revision === 1 &&
    closing.text === closing.originalText &&
    (!closing.selectedVariantId || closing.selectedVariantId === "original")
  ) {
    closing.text = closingText;
    closing.revision++;
    closing.history.push({
      revision: closing.revision,
      text: closingText,
      at,
      reason:
        "Exact Hadi closing replacement; old wording and approval retained in archive. Pending review.",
    });
    closing.approval = null;
    closing.approvedRevision = null;
    syncVariant(closing);
  }
  migrateVariants(d);
  d.structureVersion = 2;
  for (const c of structureConflicts(d)) {
    const u = d.units.find((u) => u.id === c.id)!;
    u.variants!.push({
      id: "requested-closing",
      name: "Requested closing",
      text: c.expected,
      revision: 1,
      history: [
        {
          revision: 1,
          text: c.expected,
          at,
          reason:
            "Requested exact closing; conflicting user wording preserved and not automatically replaced.",
        },
      ],
    });
  }
  if (d.activeId === removedId) d.activeId = closingId;
  d.structureVersion = 2;
  return d;
}

export function selectRequestedB(d: Draft): Draft {
  if (d.harnessSelection) return d;
  const u = d.units.find((u) => u.id === "r7-section-12-passage-01")!;
  const b = u.variants!.find((v) => v.id === "harness-b")!;
  const expected = harnessAlternatives.find((v) => v.id === "harness-b")!.text;
  d.harnessSelection = {
    instruction: "Sentinel_fca513573ef48191ad0790065f6952fd",
    priorId: u.selectedVariantId!,
    priorApproval: structuredClone(u.approval),
    conflict: b.text !== expected,
  };
  if (b.text !== expected) return d;
  if (u.selectedVariantId !== b.id) {
    u.selectedVariantId = b.id;
    u.text = b.text;
    u.revision = b.revision;
    u.history = structuredClone(b.history);
    u.approval = null;
    u.approvedRevision = null;
  }
  return d;
}
export const harnessSelectionConflict = (d: Draft) =>
  !!d.harnessSelection?.conflict &&
  d.units.find((u) => u.id === "r7-section-12-passage-01")?.text !==
    harnessAlternatives.find((v) => v.id === "harness-b")!.text;
