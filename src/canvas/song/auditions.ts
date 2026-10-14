export interface AuditionRound {
  schema: "canvas-auditions-v1";
  title: string;
  lyricRevision: string;
  creditsBefore: number;
  creditsAfter: number;
  takes: { title: string; style: string; url: string; duration: string }[];
}
export function parseAuditions(raw: string): AuditionRound {
  if (raw.length > 100000) throw new Error("Audition file is too large.");
  const p = JSON.parse(raw);
  const text = (v: unknown) => typeof v === "string" && v.length > 0 && v.length <= 2000;
  if (
    p?.schema !== "canvas-auditions-v1" ||
    !text(p.title) ||
    !text(p.lyricRevision) ||
    !Number.isSafeInteger(p.creditsBefore) ||
    !Number.isSafeInteger(p.creditsAfter) ||
    p.creditsAfter < 0 ||
    p.creditsBefore < p.creditsAfter ||
    !Array.isArray(p.takes) ||
    !p.takes.length ||
    p.takes.length > 30 ||
    p.takes.some(
      (t: AuditionRound["takes"][number]) =>
        !t ||
        !text(t.title) ||
        !text(t.style) ||
        !text(t.duration) ||
        typeof t.url !== "string" ||
        !/^https:\/\/suno\.com\/song\/[a-f0-9-]{36}$/.test(t.url),
    )
  ) {
    throw new Error(
      "Invalid audition round. Expected titled Suno takes, lyric revision and credit totals.",
    );
  }
  return {
    schema: p.schema,
    title: p.title,
    lyricRevision: p.lyricRevision,
    creditsBefore: p.creditsBefore,
    creditsAfter: p.creditsAfter,
    takes: p.takes.map((t: AuditionRound["takes"][number]) => ({
      title: t.title,
      style: t.style,
      url: t.url,
      duration: t.duration,
    })),
  };
}
