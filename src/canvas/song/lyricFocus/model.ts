import { isRejectedAddition } from "./additionOptions";
import {
  migrateStructure,
  structureConflicts,
  selectRequestedB,
  harnessSelectionConflict,
} from "./structureMigration";
import {
  migrateVariants,
  syncVariant,
  refrainConflict,
  type Variant,
} from "./variants";
import seed from "./seed.json";
export type Revision = {
  revision: number;
  text: string;
  reason: string;
  at: string;
};
export type Unit = {
  id: string;
  section: string;
  purpose: string;
  originalText: string;
  variants?: Variant[];
  refrainConstraint?: {
    sourceId: string;
    lines: string[];
    conflicts: string[];
  };
  selectedVariantId?: string;
  revision: number;
  text: string;
  approvedRevision: number | null;
  approval: {
    variantId?: string;
    actor: "human-ui" | "test";
    at: string;
    revision: number;
    text: string;
  } | null;
  history: Revision[];
};
export type Draft = Omit<typeof seed, "units" | "title"> & {
  units: Unit[];
  title: Unit;
  structureVersion?: 2;
  finalSelections?: {instruction:string;conflicts:string[];priorSelections:{id:string;variantId:string;approval:Unit["approval"]}[];units:{id:string;revision:number;variantId:string;text:string}[]};
  socialSelection?: {instruction:string;conflict:boolean;priorId:string;priorApproval:Unit["approval"]};
  harnessSelection?: {
    instruction: string;
    priorId: string;
    priorApproval: Unit["approval"];
    conflict: boolean;
  };
  archivedUnits?: Unit[];
};
export const initialDraft = (): Draft =>
  selectRequestedB(
    migrateStructure(migrateVariants(structuredClone(seed) as Draft)),
  );
export const passages = (d: Draft) => [d.title, ...d.units];
const exactApproval = (u: Unit) =>
  u.approvedRevision === u.revision &&
  u.approval?.revision === u.revision &&
  u.approval.text === u.text &&
  (u.approval.variantId ?? "original") === (u.selectedVariantId ?? "original");
export const approved = (u: Unit) => !isRejectedAddition(u) && exactApproval(u);
export const complete = (d: Draft) =>
  !harnessSelectionConflict(d) &&
  structureConflicts(d).length === 0 &&
  passages(d).every((u) => approved(u) && u.approval?.actor === "human-ui");
export function revise(
  d: Draft,
  id: string,
  text: string,
  reason = "Saved wording change",
): Draft {
  if (!text.trim() || text.length > 10000)
    throw new Error("Keep a nonempty passage under 10,000 characters.");
  const next = structuredClone(d);
  const u = passages(next).find((x) => x.id === id);
  if (!u) throw new Error("Passage not found.");
  if (text === u.text) return next;
  u.text = text;
  u.revision++;
  u.approvedRevision = null;
  u.approval = null;
  u.history.push({
    revision: u.revision,
    text,
    reason,
    at: new Date().toISOString(),
  });
  syncVariant(u);
  return migrateVariants(next);
}
export function approve(
  d: Draft,
  id: string,
  actor: "human-ui" | "test",
): Draft {
  const next = structuredClone(d),
    all = passages(next),
    index = all.findIndex((u) => u.id === id);
  if (index < 0) throw new Error("Passage not found.");
  const u = all[index];
  if (isRejectedAddition(u))
    throw new Error(
      "This added draft was rejected. Select an alternative or revise it before approving.",
    );
  if (id === "r7-section-12-passage-01" && harnessSelectionConflict(next))
    throw new Error(
      "Saved B differs from your requested selection; reconcile the wording before approving.",
    );
  if (structureConflicts(next).some((c) => c.id === id))
    throw new Error(
      "Review the requested closing version; your conflicting wording is preserved.",
    );
  if (refrainConflict(u))
    throw new Error(
      "Keep the original refrain in lines 3 and 4 before approving this version.",
    );
  u.approvedRevision = u.revision;
  u.approval = {
    variantId: u.selectedVariantId ?? "original",
    actor,
    at: new Date().toISOString(),
    revision: u.revision,
    text: u.text,
  };
  next.activeId = all[Math.min(index + 1, all.length - 1)].id;
  return next;
}
export function parseDraft(raw: string): Draft {
  if (raw.length > 5000000)
    throw new Error("Draft is too large; existing work was not changed.");
  const d = JSON.parse(raw) as Draft;
  if (d.structureVersion !== undefined && d.structureVersion !== 2)
    throw new Error("Unknown structure revision.");
  const template =
    d.structureVersion === 2
      ? initialDraft()
      : (structuredClone(seed) as Draft);
  if (
    d.schema !== 1 ||
    !d.title ||
    !Array.isArray(d.units) ||
    d.units.length !== template.units.length ||
    JSON.stringify(d.source) !== JSON.stringify(seed.source) ||
    JSON.stringify(d.gaps) !== JSON.stringify(template.gaps)
  )
    throw new Error(
      "This saved draft has an unknown source or structure. It has not been replaced.",
    );
  const all = passages(d),
    ids = passages(template).map((u) => u.id);
  if (
    all.some(
      (u, i) =>
        u.id !== ids[i] ||
        u.originalText !== passages(template)[i].originalText ||
        typeof u.section !== "string" ||
        typeof u.purpose !== "string" ||
        typeof u.text !== "string" ||
        !u.text.trim() ||
        u.text.length > 10000 ||
        !Number.isInteger(u.revision) ||
        u.revision < 1 ||
        !Array.isArray(u.history) ||
        u.history.length !== u.revision ||
        u.history.some(
          (r, j) =>
            r.revision !== j + 1 ||
            typeof r.text !== "string" ||
            typeof r.at !== "string" ||
            typeof r.reason !== "string",
        ) ||
        u.history.at(-1)?.text !== u.text ||
        (u.approvedRevision !== null &&
          (!exactApproval(u) ||
            !["human-ui", "test"].includes(u.approval!.actor))),
    )
  )
    throw new Error(
      "Saved revision validation failed. Your data has not been replaced.",
    );
  if (!ids.includes(d.activeId)) throw new Error("Saved passage is unknown.");
  if (d.structureVersion === 2) {
    if (!Array.isArray(d.archivedUnits) || d.archivedUnits.length !== 2)
      throw new Error("Missing retained closing history.");
    // Validate archived units using the unchanged legacy structure and source contracts.
    const legacy = structuredClone(seed) as Draft;
    for (const u of d.archivedUnits) {
      const index = legacy.units.findIndex((x) => x.id === u.id);
      if (
        index < 0 ||
        !["r7-section-14-passage-01", "r7-section-14-passage-02"].includes(u.id)
      )
        throw new Error("Unknown archived source.");
      legacy.units[index] = u;
    }
    if (new Set(d.archivedUnits.map((u) => u.id)).size !== 2)
      throw new Error("Duplicate archive.");
    parseDraft(JSON.stringify(legacy));
  }
  return selectRequestedB(migrateStructure(migrateVariants(d)));
}

// Restoration carries wording/history, never a new human approval.
export function restoreDraft(raw: string): Draft {
  let d = parseDraft(raw);
  const unsaved = JSON.parse(raw).unsavedText;
  if (unsaved !== undefined && unsaved !== null) {
    if (typeof unsaved.id !== "string" || typeof unsaved.text !== "string")
      throw new Error("Invalid unsaved text in backup.");
    if (
      d.archivedUnits?.some((u) => u.id === unsaved.id) &&
      !d.units.some((u) => u.id === unsaved.id)
    ) {
      const archived = d.archivedUnits.find((u) => u.id === unsaved.id)!;
      if (!unsaved.text.trim() || unsaved.text.length > 10000)
        throw new Error("Invalid archived unsaved text.");
      archived.text = unsaved.text;
      archived.revision++;
      archived.approval = null;
      archived.approvedRevision = null;
      archived.history.push({
        revision: archived.revision,
        text: archived.text,
        at: new Date().toISOString(),
        reason: "Recovered unsaved wording of removed closing unit",
      });
      syncVariant(archived);
    } else
      d = revise(
        d,
        unsaved.id,
        unsaved.text,
        "Recovered unsaved text from exported backup",
      );
  }
  for (const u of passages(d)) {
    u.approvedRevision = null;
    u.approval = null;
  }
  return d;
}
