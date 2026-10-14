import type { Draft } from "./model";
// Arc grouping is editorial interpretation. IDs and ordering remain source-derived.
export function songStructure(d: Draft) {
  let chorus = 0;
  return d.units.flatMap((u) => {
    const section = Number(u.id.split("-")[2]);
    const verse = /^Verse (\d+)/.exec(u.section)?.[1];
    const part = Number(u.id.split("-").at(-1));
    const arc =
      section <= 1
        ? "Opening"
        : section <= 4
          ? "Arc 1 · Internet"
          : section <= 7
            ? "Arc 2 · Social"
            : section <= 12
              ? "Arc 3 · AI"
              : "Resolution";
    const kind = verse
      ? "part"
      : u.section.includes("Chorus")
        ? "chorus"
        : "passage";
    const label = verse
      ? `${arc}, Verse ${verse}, Part ${part}`
      : kind === "chorus"
        ? `${arc}, Chorus ${++chorus}`
        : u.id === "r7-section-14-passage-01" ? `${arc}, Closing verse, Part 1` : `${arc}, ${u.section}, Passage ${part}`;
    const vocal = { id: u.id, lyricId: u.id, arc, kind, label };
    const gap = d.gaps.find((g) => g.afterUnit === u.id);
    return gap
      ? [
          vocal,
          {
            id: `${u.id}:instrumental`,
            lyricId: u.id,
            arc,
            kind: "instrumental",
            label: `${arc}, ${gap.label} after ${label.split(", ").slice(1).join(", ")}`,
          },
        ]
      : [vocal];
  });
}
export const structureStamp = (d: Draft) => JSON.stringify(songStructure(d));
export const proposals = [
  {
    after: "r7-section-06-passage-03",
    role: "Proposed Verse 2 Part 4: make the opaque ranking cause a concrete loss; the chorus then asks to inspect the cause.",
    text: "My friend's workshop opens.\nI never see the day.\nThe feed keeps serving strangers.\nHer notice slips away.",
  },
  {
    after: "r7-section-09-passage-03",
    role: "Proposed Verse 3 Part 4: publication leads to a real-world result, completing the task before the next verse explains what persists.",
    text: "Now the page is open.\nSomeone finds the place.\nBrings a chair on Saturday.\nJoins us in the space.",
  },
  {
    after: "r7-section-11-passage-03",
    role: "Proposed Verse 4 Part 4: demonstrate model replacement rather than repeat the ownership claim; retained instructions produce continuity.",
    text: "Try another model.\nGive it notes we kept.\nPlain words fill the new page.\nI choose the next step.",
  },
];
