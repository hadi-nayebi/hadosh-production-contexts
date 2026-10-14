import { emptyReview } from "./anchorReview";
import type { Annotation } from "./audioAnnotation";
import type { Container, Lane } from "./audioAnchors";

export function addManualBeat(
  a: Annotation,
  sections: Container[],
  lanes: Lane[],
  laneId: string,
  time: number,
  nonce: string = crypto.randomUUID(),
) {
  if (!Number.isFinite(time) || time < 0 || time >= a.duration)
    throw Error("Choose a time inside the recording.");
  const lane = lanes.find((l) => l.id === laneId);
  if (!lane) throw Error("Choose a rhythm lane first.");
  const section = sections.find(
    (s) => time >= a.boundaries[s.first] && time < a.boundaries[s.last + 1],
  );
  if (!section) throw Error("This time has no source section.");
  const review = structuredClone(a.review ?? emptyReview());
  const id = `manual-beat:${a.audioHash}:${nonce}`;
  if (review.rhythm.some((r) => r.id === id)) throw Error("This marker already exists.");
  review.rhythm.push({
    id,
    laneId,
    sectionId: section.id,
    label: `Manual beat · ${lane.label}`,
    time,
    originalTime: time,
    revision: 1,
    origin: "manual",
  });
  return { annotation: { ...a, review }, id };
}

export function setManualBeatRemoved(a: Annotation, id: string, removed: boolean) {
  const review = structuredClone(a.review ?? emptyReview());
  const beat = review.rhythm.find((r) => r.id === id && r.origin === "manual");
  if (!beat) throw Error("Unknown manual beat.");
  beat.removed = removed;
  beat.revision++;
  return { ...a, review };
}
