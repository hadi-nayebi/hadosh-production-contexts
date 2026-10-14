import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import InstructionCortex, { cortexModules } from "./InstructionCortex";
import { wordTiming } from "./wordTiming";
const clamp = (x: number) => Math.max(0, Math.min(1, x));
const ease = (x: number) => {
  const p = clamp(x);
  return p * p * (3 - 2 * p);
};
export function ownershipPerformance(annotation: Annotation, time: number) {
  const words = wordTiming(annotation)
    .intervals.map((w) => ({ ...w, item: annotation.items.find((i) => i.id === w.id)! }))
    .filter((w) => w.item.groupId.endsWith(":section:12"));
  const phrases = [...new Set(words.map((w) => w.item.phraseId))];
  const cuts = phrases.map((id) => words.find((w) => w.item.phraseId === id)!.start);
  const shot = Math.max(
    0,
    cuts.reduce((last, t, i) => (time >= t ? i : last), 0),
  );
  // Begin with the screen-facing inspection view, distinct from the preceding verse.
  const views = [2, 0, 1, 2];
  const view = views[Math.floor(shot / 2) % views.length];
  const previous = views[Math.floor(Math.max(0, shot - 1) / 2) % views.length];
  const look = words.filter((w) => /^look\W*$/i.test(w.item.text) && time >= w.start).at(-1);
  const change = words.filter((w) => /^change\W*$/i.test(w.item.text) && time >= w.start).at(-1);
  const focus = look ? 1 - ease((time - look.start - 1.1) / 0.8) : 0;
  return {
    words,
    view,
    previous,
    blend: ease((time - cuts[shot]) / 0.65),
    progress: change ? ease((time - change.start) / 0.8) : 0,
    focus,
  };
}
export default function PersonalOwnershipStage({
  annotation,
  time,
}: {
  annotation: Annotation;
  time: number;
}) {
  const modules = useMemo(() => cortexModules(annotation), [annotation]);
  const p = ownershipPerformance(annotation, time);
  const selected = modules.at(-1)!;
  const spoken = p.words.find((w) => time >= w.start && time < w.end);
  const word = spoken ?? p.words.find((w) => time >= w.start - 0.12 && time < w.start);
  const enter = word ? (spoken ? 1 : ease((time - word.start + 0.12) / 0.12)) : 0;
  // Physical context survives the chorus and instrumental pause. Only lyric words change.
  return (
    <div data-personal-ownership style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <InstructionCortex
        annotation={annotation}
        time={time}
        camera={p}
        ownership={{ node: selected.id!, progress: p.progress, focus: p.focus }}
      />
      <div
        data-inspect-context
        style={{
          position: "absolute",
          left: selected.x - 8 * p.progress + "%",
          top: selected.y + 6 * p.progress + "%",
          width: 5 + p.focus * 2 + "%",
          aspectRatio: "1",
          border: ".2cqw solid #ffedb9",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          opacity: p.focus,
          boxShadow: "0 0 1.5cqw #ffdfa477",
          pointerEvents: "none",
        }}
      />
      {word && (
        <span
          data-ownership-word={word.id}
          style={{
            position: "absolute",
            left: "50%",
            top: "58%",
            transform: `translate(-50%,-50%) scale(${0.94 + 0.06 * enter})`,
            opacity: enter,
            font: "700 5.5cqw Georgia,serif",
            color: "#fff3db",
            textShadow: "0 .25cqw .7cqw #000",
            whiteSpace: "nowrap",
          }}
        >
          {word.item.text}
        </span>
      )}
    </div>
  );
}
