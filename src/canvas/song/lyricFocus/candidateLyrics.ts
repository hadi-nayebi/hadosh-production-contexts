export function candidateLyricUnits(sections: { id: string; label: string; text: string }[]) {
  return sections.flatMap((s) => {
    if (!/^Verse \d/.test(s.label)) return [s];
    const lines = s.text
      .split(/\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    return Array.from({ length: Math.ceil(lines.length / 4) }, (_, i) => ({
      id: `${s.id}:part:${i + 1}`,
      label: `${s.label} · Part ${i + 1} of ${Math.ceil(lines.length / 4)}`,
      text: lines.slice(i * 4, i * 4 + 4).join("\n"),
    }));
  });
}
