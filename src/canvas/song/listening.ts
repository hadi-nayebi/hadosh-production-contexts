export type ListeningTake = { title: string; style: string; url: string };
export type ListeningNote = {
  id: string;
  take: ListeningTake;
  audioHash: string;
  filename: string;
  start: number;
  end: number;
  stage: string;
  kind: string;
  text: string;
  created: string;
};
export const noteStages = ["Visual idea", "Lyrics", "Music", "Timing", "Verification"];
export const passageKinds = ["Vocal", "Instrumental / scene setup", "Transition", "Unclassified"];
export function validRange(start: number, end: number, duration: number) {
  return (
    Number.isFinite(start) && Number.isFinite(end) && start >= 0 && end > start && end <= duration
  );
}
export function parseListeningNotes(raw: string): ListeningNote[] {
  if (raw.length > 2000000) throw new Error("Notes file is too large.");
  const p = JSON.parse(raw);
  const str = (v: unknown, max = 2000) => typeof v === "string" && v.length > 0 && v.length <= max;
  if (
    p?.schema !== "canvas-listening-notes-v1" ||
    !Array.isArray(p.notes) ||
    p.notes.length > 1000 ||
    p.notes.some(
      (n: ListeningNote) =>
        !n ||
        !str(n.id) ||
        !str(n.filename) ||
        !str(n.created) ||
        !str(n.text, 10000) ||
        !n.take ||
        !str(n.take.title) ||
        !str(n.take.style) ||
        !/^https:\/\/suno\.com\/song\/[a-f0-9-]{36}$/.test(n.take.url) ||
        !/^[a-f0-9]{64}$/.test(n.audioHash) ||
        !validRange(n.start, n.end, 86400) ||
        !noteStages.includes(n.stage) ||
        !passageKinds.includes(n.kind),
    )
  )
    throw new Error("Invalid listening notes. No notes were replaced.");
  if (new Set(p.notes.map((n: ListeningNote) => n.id)).size !== p.notes.length)
    throw new Error("Duplicate note IDs.");
  return p.notes.map((n: ListeningNote) => ({
    id: n.id,
    take: { title: n.take.title, style: n.take.style, url: n.take.url },
    audioHash: n.audioHash,
    filename: n.filename,
    start: n.start,
    end: n.end,
    stage: n.stage,
    kind: n.kind,
    text: n.text,
    created: n.created,
  }));
}
export const notesJSON = (notes: ListeningNote[]) =>
  JSON.stringify({ schema: "canvas-listening-notes-v1", notes }, null, 2);
export function mergeNotes(current: ListeningNote[], incoming: ListeningNote[]) {
  const result = [...current];
  for (const n of incoming) {
    const existing = result.find((x) => x.id === n.id);
    if (!existing) result.push(n);
    else if (JSON.stringify(existing) !== JSON.stringify(n))
      throw new Error(
        "A note ID conflicts with an existing note. Export both versions before reconciling.",
      );
  }
  return result;
}
