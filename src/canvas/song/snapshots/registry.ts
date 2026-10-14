import neuralScene from "./2026-10-11T161407Z.json";
import neuralManifest from "./2026-10-11T161407Z.manifest.json";
import composedScene from "./2026-10-11T160806Z.json";
import composedManifest from "./2026-10-11T160806Z.manifest.json";
import fullScene from "./2026-10-11T152503Z.json";
import fullManifest from "./2026-10-11T152503Z.manifest.json";
import combinedScene from "./2026-10-11T150356Z.json";
import combinedManifest from "./2026-10-11T150356Z.manifest.json";
import { isReviewReady } from "./readiness";
import checklistScene from "./2026-10-11T030921Z.json";
import checklistManifest from "./2026-10-11T030921Z.manifest.json";
import questionsScene from "./2026-10-11T025423Z.json";
import questionsManifest from "./2026-10-11T025423Z.manifest.json";
import feedScene from "./2026-10-11T022138Z.json";
import feedManifest from "./2026-10-11T022138Z.manifest.json";
import insideScene from "./2026-10-11T021746Z.json";
import insideManifest from "./2026-10-11T021746Z.manifest.json";
import scene from "./2026-10-11T020537Z.json";
import manifest from "./2026-10-11T020537Z.manifest.json";
export const snapshots = [
  { ...neuralManifest, scene: neuralScene },
  { ...composedManifest, scene: composedScene },
  { ...fullManifest, scene: fullScene },
  { ...combinedManifest, scene: combinedScene },
  { ...checklistManifest, scene: checklistScene },
  { ...questionsManifest, scene: questionsScene },
  { ...feedManifest, scene: feedScene },
  { ...insideManifest, scene: insideScene },
  { ...manifest, scene },
];
export const snapshotDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Detroit",
    dateStyle: "medium",
    timeStyle: "long",
  }).format(new Date(iso));
export const snapshotHref = (id: string) => `/songs/snapshots/${id}`;

export const latestAudioBacked = snapshots.find((s) =>
  s.audio.arrangement.every((c) => c.sourceStartMs !== null),
);
export function audioCoverageLabel(
  clips: { timelineStartMs: number; sourceStartMs: number | null; durationMs: number }[],
) {
  const ranges = clips
    .filter((c) => c.sourceStartMs !== null)
    .map(
      (c) =>
        `${Number((c.timelineStartMs / 1000).toFixed(1))}–${Number(((c.timelineStartMs + c.durationMs) / 1000).toFixed(1))}s`,
    )
    .join(", ");
  return clips.some((c) => c.sourceStartMs === null)
    ? `Silent timing study • audio only ${ranges || "unavailable"}`
    : `Audio-backed review • existing recording ${ranges}`;
}

export const latestReviewReady = snapshots.find(isReviewReady);
