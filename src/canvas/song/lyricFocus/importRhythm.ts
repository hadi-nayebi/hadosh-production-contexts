import type { Annotation } from "./audioAnnotation";
import type { Container, Lane } from "./audioAnchors";
import { emptyReview, validateReview } from "./anchorReview";

/** Merge source-bound markers without discarding local-only work or importing approvals. */
export function importRhythm(
  current: Annotation,
  incoming: Annotation,
  sections: Pick<Container, "id">[],
  lanes: Pick<Lane, "id">[],
) {
  if (current.audioHash !== incoming.audioHash || current.lyricStamp !== incoming.lyricStamp)
    throw Error("Rhythm source mismatch.");
  const review = structuredClone(current.review ?? emptyReview());
  const imported = incoming.review ?? emptyReview();
  validateReview(imported, current.duration);
  for (const marker of imported.rhythm) {
    if (
      !lanes.some((l) => l.id === marker.laneId) ||
      !sections.some((s) => s.id === marker.sectionId)
    )
      throw Error("Imported rhythm marker has an unknown lane or section.");
    if (marker.origin === "manual" && !marker.id.startsWith(`manual-beat:${current.audioHash}:`))
      throw Error("Manual beat source mismatch.");
    const index = review.rhythm.findIndex((r) => r.id === marker.id);
    const previous = review.rhythm[index];
    if (
      previous &&
      (previous.origin !== marker.origin ||
        previous.laneId !== marker.laneId ||
        previous.originalTime !== marker.originalTime)
    )
      throw Error("Imported rhythm marker conflicts with its existing identity.");
    const restored = {
      ...structuredClone(marker),
      revision: Math.max(marker.revision, previous?.revision ?? 0) + 1,
      history: previous
        ? [...(previous.history ?? []), previous.time]
        : [...(marker.history ?? [])],
    };
    if (previous) review.rhythm[index] = restored;
    else review.rhythm.push(restored);
  }
  validateReview(review, current.duration);
  return review;
}
