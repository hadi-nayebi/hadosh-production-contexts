import { phraseIntervals } from "./phraseTiming";
import { wordTiming, adjustWord, validateWordTiming, wordTimingProblem } from "./wordTiming";
import type { Annotation } from "./audioAnnotation";
import type { Container, Phrase } from "./audioAnchors";
import type { TapReceipt } from "./stampPractice";
export type RhythmChoice = {
  id: string;
  laneId: string;
  label: string;
  sectionId: string;
  time: number;
  originalTime: number;
  revision: number;
  history?: number[];
  origin?: "manual";
  removed?: boolean;
};
export type Review = {
  rhythm: RhythmChoice[];
  approvals: { id: string; fingerprint: string; at: string; revision: number }[];
  taps: { id: string; revision: number; receipt: TapReceipt }[];
};
export type Anchor = {
  id: string;
  index?: number;
  phraseId?: string;
  wordIndex?: number;
  edge?: "start" | "end";
  time: number;
  types: string[];
  sectionId: string;
  label: string;
  manual: boolean;
  fingerprint: string;
  status: "approved" | "stale" | "manual pending" | "automatic pending";
};
export const emptyReview = (): Review => ({ rhythm: [], approvals: [], taps: [] });
function changedAt(a: Annotation, indices: number[]) {
  let last = 1;
  const states = [...a.history, { revision: a.revision, boundaries: a.boundaries }];
  for (let i = 1; i < states.length; i++)
    if (indices.some((n) => states[i].boundaries[n] !== states[i - 1].boundaries[n]))
      last = states[i].revision;
  return last;
}
export function eligibleAnchors(
  a: Annotation,
  sections: Pick<Container, "id" | "first" | "last" | "label">[],
  phrases: Phrase[],
): Anchor[] {
  const roles = new Map<number, Set<string>>();
  const add = (i: number, type: string) => {
    if (!roles.has(i)) roles.set(i, new Set());
    roles.get(i)!.add(type);
  };
  sections.forEach((s) => {
    add(s.first, "section start");
    add(s.last + 1, "section end");
  });
  const review = a.review ?? emptyReview();
  const finish = (v: Omit<Anchor, "status">): Anchor => {
    const previous = review.approvals.filter((r) => r.id === v.id).at(-1);
    return {
      ...v,
      status:
        previous?.fingerprint === v.fingerprint
          ? "approved"
          : previous
            ? "stale"
            : v.manual
              ? "manual pending"
              : "automatic pending",
    };
  };
  const anchors = [...roles]
    .sort((x, y) => x[0] - y[0])
    .map(([index, r]) => {
      const section = sections.find((s) => index >= s.first && index <= s.last) ?? sections.at(-1)!;
      const types = [...r].sort();
      const deps = [index - 1, index, index + 1, section.first, section.last + 1].filter(
        (n) => n >= 0 && n < a.boundaries.length,
      );
      return finish({
        id: `boundary:${index}`,
        index,
        time: a.boundaries[index],
        types,
        sectionId: section.id,
        label: a.items[index]?.text ?? "Recording end",
        manual: a.manual[index],
        fingerprint: JSON.stringify([
          a.audioHash,
          a.lyricStamp,
          types,
          section.id,
          section.label,
          [a.items[index - 1], a.items[index]],
          phrases.filter((p) => p.first === index || p.last + 1 === index),
          deps.map((i) => [i, a.boundaries[i]]),
          changedAt(a, deps),
        ]),
      });
    });
  for (const p of phraseIntervals(a)) {
    const definition = phrases.find((q) => q.id === p.id);
    if (!definition) continue;
    for (const edge of ["start", "end"] as const)
      anchors.push(
        finish({
          id: `phrase:${p.id}:${edge}`,
          phraseId: p.id,
          index: edge === "start" ? p.first : p.last + 1,
          edge,
          time: p[edge],
          types: [`phrase ${edge}`],
          sectionId: definition.sectionId,
          label: definition.text,
          manual: p[edge] !== a.original[edge === "start" ? p.first : p.last + 1],
          fingerprint: JSON.stringify([a.audioHash, a.lyricStamp, p.id, edge, p[edge], p.revision]),
        }),
      );
  }
  const timing = wordTiming(a);
  timing.intervals.forEach((word, n) => {
    const index = a.items.findIndex((w) => w.id === word.id);
    const section = sections.find((s) => index >= s.first && index <= s.last)!;
    for (const edge of ["start", "end"] as const) {
      const deps = timing.intervals.slice(Math.max(0, n - 1), n + 2);
      const states = [...timing.history, timing.intervals].map((state) =>
        state.slice(Math.max(0, n - 1), n + 2),
      );
      let lastChanged = 0;
      for (let k = 1; k < states.length; k++)
        if (JSON.stringify(states[k]) !== JSON.stringify(states[k - 1])) lastChanged = k;
      const changes = lastChanged;
      anchors.push(
        finish({
          id: `word:${word.id}:${edge}`,
          wordIndex: index,
          edge,
          time: word[edge],
          types: [`word ${edge}`],
          sectionId: section.id,
          label: a.items[index].text,
          manual: word[edge] !== a.original[index + (edge === "end" ? 1 : 0)],
          fingerprint: JSON.stringify([
            a.audioHash,
            a.lyricStamp,
            timing.lane,
            edge,
            word.id,
            deps,
            changes,
            a.boundaries[section.first],
            a.boundaries[section.last + 1],
          ]),
        }),
      );
    }
  });
  for (const r of review.rhythm) {
    if (r.removed) continue;
    const s = sections.find((s) => s.id === r.sectionId);
    if (!s) continue;
    anchors.push(
      finish({
        id: r.id,
        time: r.time,
        types: ["chosen rhythm"],
        sectionId: r.sectionId,
        label: r.label,
        manual: r.origin === "manual" || r.time !== r.originalTime,
        fingerprint: JSON.stringify([
          a.audioHash,
          a.lyricStamp,
          r,
          s.id,
          a.boundaries[s.first],
          a.boundaries[s.last + 1],
          changedAt(a, [s.first, s.last + 1]),
        ]),
      }),
    );
  }
  return anchors.sort((x, y) => x.time - y.time || x.id.localeCompare(y.id));
}
export function approveAnchor(a: Annotation, anchor: Anchor) {
  const conflict = wordTimingProblem(a, wordTiming(a).intervals);
  if (conflict) throw Error(`Resolve timing conflicts before approval: ${conflict}`);
  const review = structuredClone(a.review ?? emptyReview());
  review.approvals.push({
    id: anchor.id,
    fingerprint: anchor.fingerprint,
    at: new Date().toISOString(),
    revision: a.revision,
  });
  return { ...a, review };
}
export function validateReview(r: Review | undefined, duration: number) {
  if (r === undefined) return;
  if (
    !r ||
    !Array.isArray(r.rhythm) ||
    !Array.isArray(r.approvals) ||
    !Array.isArray(r.taps) ||
    r.rhythm.length > 10000 ||
    r.approvals.length > 50000 ||
    r.taps.length > 50000
  )
    throw new Error("Invalid anchor review history.");
  const finite = (n: number) => Number.isFinite(n) && n >= 0 && n <= duration;
  if (
    r.rhythm.some(
      (v) =>
        !v ||
        ![v.id, v.laneId, v.label, v.sectionId].every((x) => typeof x === "string") ||
        (v.origin !== undefined && v.origin !== "manual") ||
        (v.removed !== undefined && (typeof v.removed !== "boolean" || v.origin !== "manual")) ||
        !finite(v.time) ||
        !finite(v.originalTime) ||
        !Number.isInteger(v.revision) ||
        v.revision < 1 ||
        (v.history !== undefined &&
          (!Array.isArray(v.history) || v.history.some((n) => !finite(n)))),
    ) ||
    new Set(r.rhythm.map((v) => v.id)).size !== r.rhythm.length
  )
    throw new Error("Invalid chosen rhythm anchor.");
  if (
    r.approvals.some(
      (v) =>
        !v ||
        typeof v.id !== "string" ||
        typeof v.fingerprint !== "string" ||
        !Number.isFinite(Date.parse(v.at)) ||
        !Number.isInteger(v.revision),
    )
  )
    throw new Error("Invalid approval receipt.");
  if (
    r.taps.some(
      (v) =>
        !v ||
        typeof v.id !== "string" ||
        !Number.isInteger(v.revision) ||
        !v.receipt ||
        !finite(v.receipt.mediaTime) ||
        !finite(v.receipt.contextStart) ||
        !finite(v.receipt.contextEnd) ||
        v.receipt.contextEnd <= v.receipt.contextStart ||
        v.receipt.mediaTime < v.receipt.contextStart ||
        v.receipt.mediaTime > v.receipt.contextEnd ||
        !Number.isFinite(Date.parse(v.receipt.capturedAt)) ||
        typeof v.receipt.input !== "string",
    )
  )
    throw new Error("Invalid tap receipt.");
}

/** Return one complete candidate for a single atomic storage write. */
export function approveWordTiming(
  a: Annotation,
  id: string,
  edge: "start" | "end",
  time: number,
  sections: Pick<Container, "id" | "first" | "last" | "label">[],
  phrases: Phrase[],
): Annotation {
  let next = adjustWord(a, id, edge, time);
  validateWordTiming(next);
  const anchors = eligibleAnchors(next, sections, phrases);
  for (const which of ["start", "end"] as const) {
    const anchor = anchors.find((v) => v.id === `word:${id}:${which}`);
    if (!anchor) throw new Error("Word timing no longer matches this source.");
    next = approveAnchor(next, anchor);
  }
  return next;
}
