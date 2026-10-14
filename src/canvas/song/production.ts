import type { SongProject } from "./model";
export function renderLyrics(p: SongProject, sectionIds?: string[]) {
  if (p.arrangement?.length)
    return p.arrangement
      .filter((s) => !sectionIds || sectionIds.includes(s.id))
      .map(
        (s) =>
          `[${s.label}]` +
          (s.lines.length ? "\n" : "") +
          s.lines.map((id) => p.lines.find((l) => l.id === id)?.text || "").join("\n"),
      )
      .join("\n\n")
      .trim();
  let last = "";
  return p.lines
    .map((line) => {
      const tag = line.section !== last ? `\n[${line.section}]\n` : "";
      last = line.section;
      return tag + line.text;
    })
    .join("\n")
    .trim();
}

export function partSectionIds(p: SongProject, part: "A" | "B") {
  const sections = p.arrangement || [];
  const boundary = sections.findIndex((s) => s.id === "tailA");
  return (part === "A" ? sections.slice(0, boundary + 1) : sections.slice(boundary + 1)).map(
    (s) => s.id,
  );
}
