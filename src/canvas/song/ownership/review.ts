import type { SunoPacket } from "./SunoFields";

/** Read-only Departments content and a separate, exportable local review overlay. */
export interface Source {
  repository: string;
  ref: string;
  commit: string;
  path: string;
  url: string;
  jobUrl: string;
}
export interface ReviewSection {
  id: string;
  title: string;
  purpose: string;
  vocalMode: string;
  lyrics: string[];
  visual: string;
  actions: string[];
  onScreenText: string[];
  assets: string[];
  status: string;
  claims: string[];
}
export interface Snapshot {
  suno: SunoPacket & { sourceUrl: string };
  title: string;
  revision: string;
  source: Source;
  message: string;
  lyricConstraint: string;
  claims: { id: string; text: string; sources: string[] }[];
  sections: ReviewSection[];
  decisions: { title: string; detail: string; status: string }[];
  iterations: { title: string; detail: string; status: string; url: string }[];
  assetStatus: string;
  audioStatus: string;
  renderStatus: string;
}
export interface Proposal {
  sectionId: string;
  lyrics: string;
  visual: string;
  notes: string;
  verdict: "unreviewed" | "revise" | "discuss";
}
export interface ReviewState {
  schema: "canvas-song-review-v1";
  source: Source;
  revision: number;
  proposals: Proposal[];
}
export function initialReview(snapshot: Snapshot): ReviewState {
  return {
    schema: "canvas-song-review-v1",
    source: { ...snapshot.source },
    revision: 1,
    proposals: snapshot.sections.map((s) => ({
      sectionId: s.id,
      lyrics: s.lyrics.join("\n"),
      visual: [s.visual, ...s.actions].join("\n\n"),
      notes: "",
      verdict: "unreviewed",
    })),
  };
}
export function parseReview(raw: string, snapshot: Snapshot): ReviewState {
  let p: ReviewState;
  try {
    p = JSON.parse(raw);
  } catch {
    throw Error("Choose a valid Canvas review JSON file.");
  }
  const expected = initialReview(snapshot);
  const text = (v: unknown) => typeof v === "string" && v.length <= 100000;
  if (
    !p ||
    p.schema !== expected.schema ||
    !p.source ||
    Object.keys(expected.source).some(
      (k) => p.source[k as keyof Source] !== expected.source[k as keyof Source],
    )
  )
    throw Error(
      "This proposal belongs to a different Departments snapshot. Keep the file for reconciliation with its original revision.",
    );
  if (
    !Number.isSafeInteger(p.revision) ||
    p.revision < 1 ||
    !Array.isArray(p.proposals) ||
    p.proposals.length !== expected.proposals.length ||
    new Set(p.proposals.map((s) => s?.sectionId)).size !== expected.proposals.length ||
    p.proposals.some(
      (s) =>
        !s ||
        !expected.proposals.some((e) => e.sectionId === s.sectionId) ||
        ![s.lyrics, s.visual, s.notes].every(text) ||
        !["unreviewed", "revise", "discuss"].includes(s.verdict),
    )
  )
    throw Error("Invalid review sections. The existing local review has not been replaced.");
  // Return only known fields; uploaded data cannot add approval authority.
  return {
    schema: expected.schema,
    source: expected.source,
    revision: p.revision,
    proposals: p.proposals.map((s) => ({
      sectionId: s.sectionId,
      lyrics: s.lyrics,
      visual: s.visual,
      notes: s.notes,
      verdict: s.verdict,
    })),
  };
}
export function reviseProposal(
  state: ReviewState,
  sectionId: string,
  patch: Partial<Omit<Proposal, "sectionId">>,
): ReviewState {
  return {
    ...state,
    revision: state.revision + 1,
    proposals: state.proposals.map((p) => (p.sectionId === sectionId ? { ...p, ...patch } : p)),
  };
}
export function changedSections(state: ReviewState, snapshot: Snapshot) {
  const base = initialReview(snapshot);
  return state.proposals.filter(
    (p) =>
      JSON.stringify(p) !== JSON.stringify(base.proposals.find((b) => b.sectionId === p.sectionId)),
  ).length;
}
export function reviewPacket(state: ReviewState, snapshot: Snapshot) {
  return {
    ...state,
    purpose:
      "Proposed changes for reconciliation in Departments. Not canonical content or approval.",
    baseline: initialReview(snapshot).proposals,
    changedSections: changedSections(state, snapshot),
  };
}
