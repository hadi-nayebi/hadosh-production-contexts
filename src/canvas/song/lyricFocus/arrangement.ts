import {
  structureConflicts,
  harnessSelectionConflict,
} from "./structureMigration";
import { songStructure, structureStamp } from "./structure";
import { approved, complete, passages, type Draft } from "./model";
export type Block = {
  id: string;
  kind: "vocal" | "instrumental";
  lyricId: string;
  lyricRevision: number;
  text: string;
  seconds: number;
  basis: string;
};
export type Arrangement = {
  schema: 1;
  lyricStamp: string;
  revision: number;
  blocks: Block[];
  audioTiming: { arrangementRevision: number; lyricStamp: string } | null;
  history: { revision: number; blocks: Block[] }[];
};
export const lyricStamp = (d: Draft) =>
  structureStamp(d) +
  JSON.stringify(
    passages(d).map((u) =>
      u.selectedVariantId && u.selectedVariantId !== "original"
        ? [u.id, u.selectedVariantId, u.revision, u.text]
        : [u.id, u.revision, u.text],
    ),
  );
export const arrangementReady = (d: Draft, practice = false) =>
  practice
    ? !harnessSelectionConflict(d) &&
      structureConflicts(d).length === 0 &&
      passages(d).every((u) => approved(u) && u.approval?.actor === "test")
    : complete(d);
export function createArrangement(d: Draft, practice = false): Arrangement {
  if (!arrangementReady(d, practice))
    throw new Error("Approve every current lyric revision first.");
  const blocks: Block[] = [];
  for (const [i, mark] of songStructure(d)
    .filter((m) => m.kind !== "instrumental")
    .entries()) {
    const u = d.units.find((u) => u.id === mark.lyricId)!;
    // Only spoken opening lines become smaller source-linked phrases; sung passages stay intact.
    const phrases =
      u.section === "Spoken Intro"
        ? u.text.split("\n").filter((x) => x.trim())
        : [u.text];
    for (const [j, text] of phrases.entries()) {
      blocks.push({
        id: `${u.id}:v${j}`,
        kind: "vocal",
        lyricId: u.id,
        lyricRevision: u.revision,
        text,
        seconds: Math.max(
          1.5,
          Math.round((text.split(/\s+/).length / 2.5) * 10) / 10,
        ),
        basis:
          "Proposed at 2.5 words/second; adjust by ear later, not recorded timing",
      });
      const gap = songStructure(d).find(
        (m) => m.lyricId === u.id && m.kind === "instrumental",
      );
      const last = j === phrases.length - 1;
      if (i < d.units.length - 1 || gap)
        blocks.push({
          id: `${u.id}:gap${j}`,
          kind: "instrumental",
          lyricId: u.id,
          lyricRevision: u.revision,
          text:
            last && gap
              ? d.gaps.find((g) => g.afterUnit === u.id)!.label
              : "Breathing space",
          seconds: last && gap ? 4 : last ? 0.5 : 1,
          basis:
            last && gap
              ? "Source requests an instrumental gap; 4 seconds is a proposal"
              : "Proposed spacing; may be set to zero for continuous delivery",
        });
    }
  }
  return {
    schema: 1,
    lyricStamp: lyricStamp(d),
    revision: 1,
    blocks,
    audioTiming: null,
    history: [],
  };
}
export function setDuration(
  a: Arrangement,
  id: string,
  seconds: number,
): Arrangement {
  const block = a.blocks.find((b) => b.id === id);
  if (!block) throw new Error("Block not found.");
  if (
    !Number.isFinite(seconds) ||
    seconds < (block.kind === "vocal" ? 0.1 : 0) ||
    seconds > 120
  )
    throw new Error("Use 0.1–120 seconds for vocals, or 0–120 for spacing.");
  if (seconds === block.seconds) return a;
  return {
    ...a,
    revision: a.revision + 1,
    history: [
      ...a.history,
      { revision: a.revision, blocks: structuredClone(a.blocks) },
    ],
    blocks: a.blocks.map((b) => (b.id === id ? { ...b, seconds } : b)),
  };
}
export const audioTimingCurrent = (a: Arrangement) =>
  !!a.audioTiming &&
  a.audioTiming.arrangementRevision === a.revision &&
  a.audioTiming.lyricStamp === a.lyricStamp;
export function timedBlocks(a: Arrangement) {
  let start = 0;
  return a.blocks.map((b) => {
    const result = { ...b, start, end: start + b.seconds };
    start = result.end;
    return result;
  });
}
export function parseArrangement(
  raw: string,
  d: Draft,
  practice = false,
): Arrangement {
  const a = JSON.parse(raw) as Arrangement,
    base = createArrangement(d, practice);
  if (
    a.schema !== 1 ||
    a.lyricStamp !== base.lyricStamp ||
    !Number.isInteger(a.revision) ||
    a.revision < 1 ||
    !Array.isArray(a.blocks) ||
    a.blocks.length !== base.blocks.length ||
    !Array.isArray(a.history)
  )
    throw new Error(
      "Saved arrangement does not match the approved lyric. It was preserved.",
    );
  const checkBlocks = (blocks: Block[]) => {
    if (!Array.isArray(blocks) || blocks.length !== base.blocks.length)
      throw new Error("Invalid arrangement history.");
    blocks.forEach((b, i) => {
      const expected = base.blocks[i];
      if (
        b.id !== expected.id ||
        b.kind !== expected.kind ||
        b.lyricId !== expected.lyricId ||
        b.lyricRevision !== expected.lyricRevision ||
        b.text !== expected.text ||
        !Number.isFinite(b.seconds) ||
        b.seconds < (b.kind === "vocal" ? 0.1 : 0) ||
        b.seconds > 120
      )
        throw new Error("Saved block failed validation.");
    });
  };
  checkBlocks(a.blocks);
  a.history.forEach((h) => {
    if (
      !Number.isInteger(h.revision) ||
      h.revision < 1 ||
      h.revision >= a.revision
    )
      throw new Error("Invalid history revision.");
    checkBlocks(h.blocks);
  });
  if (
    a.audioTiming !== null &&
    (!a.audioTiming ||
      !Number.isInteger(a.audioTiming.arrangementRevision) ||
      typeof a.audioTiming.lyricStamp !== "string")
  )
    throw new Error("Invalid audio timing binding.");
  return a;
}
export function layoutBlocks(
  a: Arrangement,
  width: number,
  selected: string | null,
) {
  const available = Math.max(260, width) - 24,
    scale = Math.min(
      24,
      available / Math.max(...a.blocks.map((b) => b.seconds), 1),
    );
  const rows: Block[][] = [];
  let row: Block[] = [],
    used = 0;
  for (const b of a.blocks) {
    const w = Math.max(100, b.seconds * scale);
    if (row.length && used + w + 20 > available) {
      rows.push(row);
      row = [];
      used = 0;
    }
    row.push(b);
    used += w + (row.length > 1 ? 20 : 0);
  }
  if (row.length) rows.push(row);
  let y = 20;
  const placed: {
    block: Block;
    x: number;
    y: number;
    width: number;
    reverse: boolean;
  }[] = [];
  for (const [i, r] of rows.entries()) {
    let x = i % 2 ? available + 12 : 12;
    for (const b of r) {
      const w = Math.max(100, b.seconds * scale);
      placed.push({
        block: b,
        x: i % 2 ? x - w : x,
        y,
        width: w,
        reverse: !!(i % 2),
      });
      x += (i % 2 ? -1 : 1) * (w + 20);
    }
    y += r.some((b) => b.id === selected) ? 440 : 150;
  }
  return { placed, height: y, scale };
}
