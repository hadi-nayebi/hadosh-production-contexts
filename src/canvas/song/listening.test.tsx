import { expect, test } from "vitest";
import {
  mergeNotes,
  notesJSON,
  parseListeningNotes,
  validRange,
  type ListeningNote,
} from "./listening";
const note: ListeningNote = {
  id: "fixture",
  take: {
    title: "K2",
    style: "R6",
    url: "https://suno.com/song/4730a619-4c4e-4df6-8734-d9729cff9066",
  },
  audioHash: "a".repeat(64),
  filename: "k.mp3",
  start: 2,
  end: 12,
  stage: "Visual idea",
  kind: "Instrumental / scene setup",
  text: "Build the browser frame before the verse.",
  created: "2026-10-10",
};
test("notes round-trip exact audio identity and time range", () => {
  expect(parseListeningNotes(notesJSON([note]))).toEqual([note]);
});
test("ranges reject invalid, reversed and out-of-bounds values", () => {
  for (const [s, e, d] of [
    [-1, 2, 10],
    [5, 5, 10],
    [6, 5, 10],
    [0, 11, 10],
    [NaN, 3, 10],
  ])
    expect(validRange(s, e, d)).toBe(false);
  expect(validRange(0, 10, 10)).toBe(true);
});
test("import rejects incomplete provenance and unsafe sources", () => {
  for (const change of [
    { audioHash: "" },
    { take: { ...note.take, url: "javascript:alert(1)" } },
    { stage: "approved" },
    { start: 20 },
    { text: "" },
  ])
    expect(() => parseListeningNotes(notesJSON([{ ...note, ...change }]))).toThrow();
});
test("merge preserves older takes and rejects conflicting edits without mutation", () => {
  const newer = { ...note, id: "second", audioHash: "b".repeat(64) };
  expect(mergeNotes([note], [note, newer])).toEqual([note, newer]);
  const original = [note];
  expect(() => mergeNotes(original, [{ ...note, text: "Conflict" }])).toThrow();
  expect(original).toEqual([note]);
});
