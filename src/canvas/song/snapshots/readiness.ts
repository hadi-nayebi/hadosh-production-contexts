export const reviewGates = [
  "audioPlayback",
  "phraseContinuity",
  "recordingAlignment",
  "spatialPurpose",
  "readability",
  "continuousPlayback",
  "editSaveParity",
  "humanListening",
] as const;
export type ReviewGate = (typeof reviewGates)[number];
export type ReviewReadiness = {
  sourceRevision: string;
  evidence: Partial<Record<ReviewGate, { status: "pass" | "fail" | "not-run"; note: string }>>;
};
// A timestamp, generated file or old audio take cannot establish review readiness.
export function isReviewReady(candidate: { sourceCommit: string; readiness?: ReviewReadiness }) {
  return (
    candidate.readiness?.sourceRevision === candidate.sourceCommit &&
    reviewGates.every(
      (gate) =>
        candidate.readiness?.evidence[gate]?.status === "pass" &&
        Boolean(candidate.readiness.evidence[gate]?.note.trim()),
    )
  );
}
