export type PhoneFlightWord = {
  id: string;
  text: string;
  start: number;
  end: number;
  phrase?: string;
};
const clamp = (x: number) => Math.min(1, Math.max(0, x));
const smooth = (x: number) => {
  const p = clamp(x);
  return p * p * (3 - 2 * p);
};
/** Every word follows its phrase's phone -> reading area -> left exit path.
 * Its vocal anchor, not the first phrase word, controls arrival. Pure absolute-time
 * evaluation keeps playback, seeks and exports identical; no frame-based integration. */
export function phoneWordFlights(words: PhoneFlightWord[], time: number) {
  const phraseIds = [...new Set(words.map((w) => w.phrase ?? "verse"))];
  const out = words.flatMap((w, index) => {
    const lane = phraseIds.indexOf(w.phrase ?? "verse") % 4;
    const next = words.slice(index + 1).find((n) => n.phrase === w.phrase);
    const holdEnd = next
      ? w.end
      : Math.min(w.end + 0.45, (words[index + 1]?.start ?? Infinity) - 0.1);
    const end = Math.max(w.start + 0.04, Math.min(holdEnd, next?.start ?? Infinity));
    const age = time - w.start,
      exit = time - end;
    if (age < -0.7 || exit >= 0.9) return [];
    const reading = age >= 0 && time < end;
    const voice = age >= 0 && time < Math.min(w.end, next?.start ?? Infinity);
    const x =
      age < 0
        ? 22 + 28 * (1 - smooth((age + 0.7) / 0.7))
        : exit < 0
          ? 22 - 1.2 * smooth(age / (end - w.start))
          : 20.8 - 42 * Math.pow(clamp(exit / 0.9), 2);
    // Spoken onset is brightest. Previews/remnants stay subordinate and expire.
    const opacity =
      age < 0
        ? 0.22 * smooth((age + 0.7) / 0.7)
        : reading
          ? 1 -
            0.78 *
              smooth(
                (time - end + Math.min(0.08, (end - w.start) * 0.2)) /
                  Math.min(0.08, (end - w.start) * 0.2),
              )
          : 0.22 * Math.exp(-5 * exit) * (1 - smooth((exit - 0.55) / 0.35));
    return [
      {
        ...w,
        lane,
        x,
        y: [22, 39, 62, 79][lane],
        scale: age < 0 ? 0.96 + 0.04 * smooth((age + 0.2) / 0.2) : 1,
        width: Math.max(1, w.text.length) * 2.1,
        opacity,
        voice,
        reading,
        visualEnd: end,
        direction: "left",
      },
    ];
  });
  // A quiet approaching/remnant word must not obscure the current sung word.
  const active = out.filter((w) => w.reading).sort((a, b) => b.start - a.start)[0];
  return out.map((w) => ({
    ...w,
    opacity:
      active && w.id !== active.id && w.lane === active.lane
        ? w.opacity * smooth((Math.abs(w.x - active.x) - (w.width + active.width) / 2 - 1) / 5)
        : w.opacity,
  }));
}
