/** Source-anchored, continuously moving strip with shared word spacing. */
export function roomStreamPositions(
  words: { id: string; text: string; start: number; end?: number; phraseId?: string }[],
  time: number,
  handoffEnd: number,
) {
  const entrance = handoffEnd + 0.35;
  if (!words.length || time < entrance) return [];

  return verseStreamPositions(words, time).map((w, i) => {
    // First phrase glides slowly through center exactly on its vocal anchor.
    const doorway = /^doorway\W*$/i.test(w.text);
    const spokenEnd = w.end ?? w.start + 0.4;
    const delta = time < w.start ? time - w.start : Math.max(0, time - spokenEnd);
    const x = doorway
      ? 50 - Math.sign(delta) * 55 * Math.pow(Math.min(1.5, Math.abs(delta)), 2)
      : w.x;
    const entry = Math.min(1, Math.max(0, (x - 85) / 40));
    const y = doorway ? 50 : w.lane === "upper" ? 11 - 18 * entry * entry : 88 + 18 * entry * entry;
    const end = w.end ?? words[i + 1]?.start ?? w.start + 0.3;
    const vocalFade = doorway
      ? Math.max(0, Math.min(1, (time - w.start + 0.65) / 0.3, (spokenEnd + 0.8 - time) / 0.4))
      : 0.04 + 0.96 * w.highlight;
    return {
      ...w,
      x,
      y,
      visible: x > -25 && x < 125,
      opacity: Math.min(1, Math.max(0, (x + 25) / 10), Math.max(0, (125 - x) / 10)) * vocalFade,
    };
  });
}

export function verseStreamPositions(
  words: { id: string; text: string; start: number; end?: number; phraseId?: string }[],
  time: number,
  smoothing = 0.4,
) {
  if (!words.length) return [];
  const widths = words.map((w) => Math.max(2, w.text.length) * 2.5);
  const centers = [0];
  for (let i = 1; i < words.length; i++)
    centers.push(centers[i - 1] + (widths[i - 1] + widths[i]) / 2 + 5);
  const rates = words
    .slice(1)
    .map((w, i) => (centers[i + 1] - centers[i]) / Math.max(0.02, w.start - words[i].start));
  const slopes = words.map((_, i) =>
    i === 0
      ? (rates[0] ?? 30)
      : i === words.length - 1
        ? (rates.at(-1) ?? 30)
        : 2 / (1 / rates[i - 1] + 1 / rates[i]),
  );
  function cameraAt(time: number) {
    let camera: number;
    if (time <= words[0].start) camera = (time - words[0].start) * slopes[0];
    else if (time >= words.at(-1)!.start)
      camera = centers.at(-1)! + (time - words.at(-1)!.start) * slopes.at(-1)!;
    else {
      const i = words.findIndex(
        (w, j) => j < words.length - 1 && time >= w.start && time < words[j + 1].start,
      );
      const dt = words[i + 1].start - words[i].start,
        u = (time - words[i].start) / dt;
      camera =
        (2 * u ** 3 - 3 * u ** 2 + 1) * centers[i] +
        (u ** 3 - 2 * u ** 2 + u) * dt * slopes[i] +
        (-2 * u ** 3 + 3 * u ** 2) * centers[i + 1] +
        (u ** 3 - u ** 2) * dt * slopes[i + 1];
    }
    return camera;
  }
  function smoothAt(t: number) {
    if (smoothing <= 0) return cameraAt(t);
    let total = 0,
      weight = 0;
    for (let i = -6; i <= 6; i++) {
      const offset = (i / 6) * smoothing,
        w = Math.exp(-2 * (offset / smoothing) ** 2);
      total += cameraAt(t + offset) * w;
      weight += w;
    }
    return total / weight;
  }
  let camera = smoothAt(time);
  // Preserve every irregular vocal anchor while keeping the filtered velocity continuous.
  if (time >= words[0].start && time <= words.at(-1)!.start) {
    const i = Math.max(
        0,
        words.reduce((last, w, k) => (w.start <= time ? k : last), 0),
      ),
      j = Math.min(words.length - 1, i + 1),
      u = j === i ? 0 : (time - words[i].start) / (words[j].start - words[i].start),
      p = u * u * (3 - 2 * u);
    camera +=
      (centers[i] - smoothAt(words[i].start)) * (1 - p) +
      (centers[j] - smoothAt(words[j].start)) * p;
  }
  const phrases = [...new Set(words.map((w) => w.phraseId ?? "verse"))];
  return words.map((w, i) => {
    const spokenEnd = (w.end ?? words[i + 1]?.start ?? w.start + 0.4) + 0.14;
    const distanceToVoice =
      time < w.start ? w.start - time : time > spokenEnd ? time - spokenEnd : 0;
    const highlight = Math.exp(-Math.pow(distanceToVoice / 0.22, 2));
    const distance = centers[i] - camera,
      x = 50 + 0.6 * distance + 0.000035 * distance ** 3;
    const lane = phrases.indexOf(w.phraseId ?? "verse") % 2 === 0 ? "upper" : "lower";
    const entry = Math.min(1, Math.max(0, (x - 85) / 40));
    const y = lane === "upper" ? 11 - 18 * entry * entry : 88 + 18 * entry * entry;
    return {
      ...w,
      x,
      y,
      lane,
      highlight,
      visible: x > -25 && x < 125,
      opacity: Math.min(1, Math.max(0, (x + 25) / 10), Math.max(0, (125 - x) / 10)),
    };
  });
}
