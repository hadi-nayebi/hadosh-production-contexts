export type SourceUnit = { id: string; label: string; text: string };
export type Wording = {
  id: string;
  name: string;
  text: string;
  revision: number;
  approval: null | {
    revision: number;
    text: string;
    variantId: string;
    at: string;
    actor: "test" | "human-ui";
  };
  approvalInvalidated?: boolean;
  history: { text: string; revision: number; at: string }[];
};
export type LyricReview = {
  schema: 1;
  sourceHash: string;
  sourceUnits: SourceUnit[];
  active: number;
  units: {
    id: string;
    selected: string;
    sourceApprovalInvalidated?: boolean;
    variants: Wording[];
  }[];
};
export function newLyricReview(sourceHash: string, sourceUnits: SourceUnit[]): LyricReview {
  return {
    schema: 1,
    sourceHash,
    sourceUnits: structuredClone(sourceUnits),
    active: 0,
    units: sourceUnits.map((u) => ({
      id: u.id,
      selected: "source",
      variants: [
        { id: "source", name: "Source", text: u.text, revision: 1, approval: null, history: [] },
      ],
    })),
  };
}
export function parseLyricReview(raw: string, hash: string, units: SourceUnit[]): LyricReview {
  if (raw.length > 3000000) throw new Error("Lyric review is too large.");
  const a = JSON.parse(raw) as LyricReview;
  if (
    a.schema !== 1 ||
    a.sourceHash !== hash ||
    JSON.stringify(a.sourceUnits) !== JSON.stringify(units) ||
    !Array.isArray(a.units) ||
    a.units.length !== units.length ||
    !Number.isInteger(a.active) ||
    a.active < 0 ||
    a.active >= units.length
  )
    throw new Error("Lyric source mismatch. Saved wording was preserved.");
  a.units.forEach((u, i) => {
    if (
      u.id !== units[i].id ||
      !Array.isArray(u.variants) ||
      !u.variants.length ||
      new Set(u.variants.map((v) => v.id)).size !== u.variants.length ||
      !u.variants.some((v) => v.id === u.selected)
    )
      throw new Error("Invalid lyric variants.");
    if (
      u.sourceApprovalInvalidated !== undefined &&
      typeof u.sourceApprovalInvalidated !== "boolean"
    )
      throw new Error("Invalid source approval state.");
    for (const v of u.variants) {
      if (v.approvalInvalidated !== undefined && typeof v.approvalInvalidated !== "boolean")
        throw new Error("Invalid approval state.");
      if (
        typeof v.id !== "string" ||
        typeof v.name !== "string" ||
        typeof v.text !== "string" ||
        v.text.length > 10000 ||
        !Number.isInteger(v.revision) ||
        v.revision < 1 ||
        !Array.isArray(v.history) ||
        v.history.some(
          (h) =>
            typeof h.text !== "string" ||
            !Number.isInteger(h.revision) ||
            !Number.isFinite(Date.parse(h.at)),
        )
      )
        throw new Error("Invalid wording history.");
      if (
        v.approval &&
        (!["test", "human-ui"].includes(v.approval.actor) ||
          !Number.isFinite(Date.parse(v.approval.at)) ||
          !Number.isInteger(v.approval.revision) ||
          typeof v.approval.text !== "string" ||
          typeof v.approval.variantId !== "string")
      )
        throw new Error("Invalid wording approval.");
    }
  });
  return a;
}
export const selectedWording = (a: LyricReview, index = a.active) =>
  a.units[index].variants.find((v) => v.id === a.units[index].selected)!;
export const wordingApproved = (v: Wording) =>
  !v.approvalInvalidated &&
  v.approval?.revision === v.revision &&
  v.approval.text === v.text &&
  v.approval.variantId === v.id;
export function pendingWording(a: LyricReview, sourcePacketApproved = false): number[] {
  return a.units.flatMap((u, i) =>
    !a.sourceUnits[i].text ||
    wordingApproved(selectedWording(a, i)) ||
    (sourcePacketApproved &&
      !u.sourceApprovalInvalidated &&
      u.selected === "source" &&
      selectedWording(a, i).revision === 1 &&
      selectedWording(a, i).text === a.sourceUnits[i].text)
      ? []
      : [i],
  );
}
export function reviewReady(a: LyricReview, sourcePacketApproved = false) {
  return pendingWording(a, sourcePacketApproved).length === 0;
}
export function reviseWording(a: LyricReview, text: string) {
  if (!text.trim() || text.length > 10000)
    throw new Error("Keep a nonempty lyric under 10,000 characters.");
  const next = structuredClone(a),
    v = selectedWording(next);
  if (v.text === text) return next;
  v.history.push({ text: v.text, revision: v.revision, at: new Date().toISOString() });
  v.text = text;
  v.revision++;
  v.approval = null;
  return next;
}
export function approveWording(a: LyricReview, practice: boolean) {
  const next = structuredClone(a),
    v = selectedWording(next);
  v.approvalInvalidated = false;
  v.approval = {
    revision: v.revision,
    text: v.text,
    variantId: v.id,
    at: new Date().toISOString(),
    actor: practice ? "test" : "human-ui",
  };
  return next;
}
export function addWording(a: LyricReview) {
  const next = structuredClone(a),
    u = next.units[next.active],
    v = selectedWording(next);
  let n = u.variants.length + 1;
  while (u.variants.some((v) => v.id === `draft-${n}`)) n++;
  u.variants.push({
    id: `draft-${n}`,
    name: `Draft ${n}`,
    text: v.text,
    revision: 1,
    approval: null,
    history: [],
  });
  return selectWording(next, `draft-${n}`);
}

export function selectWording(a: LyricReview, id: string) {
  const next = structuredClone(a),
    u = next.units[next.active];
  if (!u.variants.some((v) => v.id === id)) throw new Error("Unknown wording variant.");
  if (u.selected === id) return next;
  selectedWording(next).approvalInvalidated = true;
  u.selected = id;
  selectedWording(next).approvalInvalidated = true;
  u.sourceApprovalInvalidated = true;
  return next;
}
