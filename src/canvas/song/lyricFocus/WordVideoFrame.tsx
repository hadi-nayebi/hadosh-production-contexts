import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import type { VisualWordTiming } from "./visualWordTiming";

/** Half-open source intervals: a cut can never display two words. Gaps stay empty. */
export function activeWord(a: Annotation, time: number) {
  const interval = wordTiming(a).intervals.find((w) => time >= w.start && time < w.end);
  if (!interval) return null;
  return { ...interval, text: a.items.find((w) => w.id === interval.id)!.text };
}
export function WordVideoFrame({
  annotation,
  time,
  visualTiming,
  transparent = false,
}: {
  annotation: Annotation;
  time: number;
  visualTiming?: VisualWordTiming;
  transparent?: boolean;
}) {
  const interval = visualTiming?.intervals.find((w) => time >= w.start && time < w.end);
  const word = visualTiming
    ? interval
      ? { ...interval, text: annotation.items.find((w) => w.id === interval.id)!.text }
      : null
    : activeWord(annotation, time);
  const progress = word ? Math.min(1, (time - word.start) / (word.end - word.start)) : 0;
  // Short words remain fully legible. Longer holds settle gently into the center.
  const motion =
    word && word.end - word.start > 0.3 ? Math.pow(1 - Math.min(1, progress * 4), 3) * 1.5 : 0;
  return (
    <div
      data-testid="word-video-frame"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: transparent ? "transparent" : "#101214",
        color: "#f4f0e7",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        containerType: "inline-size",
      }}
    >
      {word && (
        <span
          key={word.id}
          data-word-id={word.id}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: `${Math.min(16, 125 / Math.max(1, word.text.length))}cqw`,
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            transform: `translateY(${motion}cqw)`,
            maxWidth: "90%",
          }}
        >
          {word.text}
        </span>
      )}
    </div>
  );
}
