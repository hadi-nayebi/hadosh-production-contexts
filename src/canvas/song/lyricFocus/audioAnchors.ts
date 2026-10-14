import { phraseAt } from "./phraseTiming";
import type { Annotation } from "./audioAnnotation";
export type Container = {
  id: string;
  label: string;
  kind: string;
  first: number;
  last: number;
  wordCount: number;
};
export type Phrase = { id: string; sectionId: string; text: string; first: number; last: number };
export type Lane = {
  id: string;
  label: string;
  events: { id: string; time: number; strength: number }[];
};
export type Performance = {
  schema: string;
  id: string;
  sourceHash: string;
  annotation: Annotation;
  containers: Container[];
  phrases: Phrase[];
  lanes: Lane[];
  repetitions: {
    phraseId: string;
    repeatOf: string;
    start: number;
    end: number;
    evidence: string;
  }[];
  uncertainties: { id: string; text: string; start: number; end: number; reason: string }[];
  additionalRecognitions: {
    id: string;
    start: number;
    end: number;
    text: string;
    status: string;
  }[];
  report: Record<string, unknown>;
  repetitionCandidates?: {
    sectionId: string;
    text: string;
    start: number;
    end: number;
    evidence: string;
  }[];
  canonicalLyricsSha256: string;
};
export function timedContainers(a: Annotation, containers: Container[]) {
  return containers.map((c) => ({
    ...c,
    text: c.kind === "instrumental" ? c.label.replace(/ \d+ sec/g, "") + " (intended)" : c.label,
    start: a.boundaries[c.first],
    end: a.boundaries[c.last + 1],
    originalStart: a.original[c.first],
    originalEnd: a.original[c.last + 1],
  }));
}
export function exportAudioAnchors(performance: Performance, a: Annotation) {
  if (performance.sourceHash !== a.audioHash || performance.annotation.lyricStamp !== a.lyricStamp)
    throw new Error("Source mismatch.");
  return {
    ...performance,
    annotation: a,
    containers: timedContainers(a, performance.containers),
    phrases: performance.phrases.map((p) => ({
      ...p,
      start: phraseAt(a, p.first, p.last).start,
      end: phraseAt(a, p.first, p.last).end,
      originalStart: a.original[p.first],
      originalEnd: a.original[p.last + 1],
    })),
    repetitions: performance.repetitions.map((r) => {
      const p = performance.phrases.find((p) => p.id === r.phraseId)!;
      return {
        ...r,
        start: phraseAt(a, p.first, p.last).start,
        end: phraseAt(a, p.first, p.last).end,
      };
    }),
    uncertainties: performance.uncertainties.map((u) => {
      const i = a.items.findIndex((w) => w.id === u.id);
      return { ...u, start: a.boundaries[i], end: a.boundaries[i + 1], manual: a.manual[i] };
    }),
  };
}
