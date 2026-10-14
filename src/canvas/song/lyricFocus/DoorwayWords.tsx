import { useMemo } from "react";
import { wordTiming } from "./wordTiming";
import type { Annotation } from "./audioAnnotation";
function chorusWords(a: Annotation) {
  const source = new Map(a.items.map((i) => [i.id, i]));
  return wordTiming(a)
    .intervals.filter((w) => source.get(w.id)?.groupId.endsWith(":section:4"))
    .map((w) => ({ ...w, text: source.get(w.id)!.text }))
    .sort((a, b) => a.start - b.start);
}
function activeChorusWord(words: ReturnType<typeof chorusWords>, time: number) {
  const current = words.filter((w) => w.start <= time).at(-1);
  if (!current) return null;
  const index = words.indexOf(current),
    text = current.text;
  const meaningful = /^(look|see|doorway|change|final|say)\W*$/i.test(text);
  const end = Math.min(
    words[index + 1]?.start ?? current.end,
    meaningful ? Math.max(current.end, current.start + 0.5) : current.end + 0.12,
  );
  return time < end ? { ...current, visualEnd: end, meaningful } : null;
}
export function doorwayWord(a: Annotation, time: number) {
  return activeChorusWord(chorusWords(a), time);
}
export default function DoorwayWords({
  annotation,
  time,
}: {
  annotation: Annotation;
  time: number;
}) {
  const words = useMemo(() => chorusWords(annotation), [annotation]);
  const word = activeChorusWord(words, time);
  if (!word) return null;
  return (
    <div
      data-doorway-lyric
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        pointerEvents: "none",
        background: "radial-gradient(ellipse at center,#02071533,transparent 48%)",
      }}
    >
      <span
        data-word-id={word.id}
        data-doorway-word={word.text}
        data-word-onset={word.start}
        data-word-visual-end={word.visualEnd}
        style={{
          fontFamily: "Georgia,serif",
          fontWeight: word.meaningful ? 700 : 500,
          fontSize: `${Math.min(word.meaningful ? 12 : 10, 95 / word.text.length)}cqw`,
          color: "#fff1d1",
          whiteSpace: "nowrap",
          textShadow: "0 .2cqw .8cqw #030711,0 0 1.4cqw #030711",
          WebkitTextStroke: ".035cqw #111828",
          paintOrder: "stroke fill",
        }}
      >
        {word.text}
      </span>
    </div>
  );
}
