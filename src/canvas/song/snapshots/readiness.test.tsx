import { expect, it } from "vitest";
import { isReviewReady, reviewGates, type ReviewReadiness } from "./readiness";
import { snapshots, latestReviewReady } from "./registry";
it("does not promote archived timestamps or partial evidence", () => {
  expect(latestReviewReady).toBeUndefined();
  expect(snapshots.some(isReviewReady)).toBe(false);
  const readiness: ReviewReadiness = { sourceRevision: "abc", evidence: {} };
  const p = { sourceCommit: "abc", readiness };
  expect(isReviewReady(p)).toBe(false);
  for (const gate of reviewGates)
    readiness.evidence[gate] = { status: "pass", note: "Recorded evidence" };
  expect(isReviewReady(p)).toBe(true);
  readiness.evidence.humanListening = { status: "not-run", note: "Cannot hear audio" };
  expect(isReviewReady(p)).toBe(false);
  readiness.evidence.humanListening.status = "pass";
  p.sourceCommit = "changed";
  expect(isReviewReady(p)).toBe(false);
});
