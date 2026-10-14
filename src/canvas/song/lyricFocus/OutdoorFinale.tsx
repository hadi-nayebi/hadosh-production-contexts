import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { kitchenPerformance } from "./kitchenDirection";
import { FileSymbol } from "./RetainedHarness";
import CortexWalker from "./CortexWalker";
import PedestrianCortex from "./PedestrianCortex";
import ExtraPedestrian from "./ExtraPedestrian";
import BackpackCortex from "./BackpackCortex";
import { cortexModules } from "./InstructionCortex";
import { outdoorFrames, outdoorProjection, outdoorShotCuts } from "./outdoorShots";
import { percussionPulses } from "./stemAnalysis";
import { creditBounds } from "./EndCredits";
const smooth = (v: number) => {
  const p = Math.max(0, Math.min(1, v));
  return p * p * (3 - 2 * p);
};
export function outdoorCamera(time: number, start: number, end: number) {
  const p = Math.max(0, Math.min(1, (time - start) / (end - start)));
  return { scale: 2.1 - 1.1 * smooth(p), originY: 33 + 17 * p, reveal: smooth((p - 0.1) / 0.35) };
}
export default function OutdoorFinale({
  annotation,
  time,
  start,
  outro,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  outro: number;
}) {
  const camera = outdoorCamera(time, start, annotation.duration - 2);
  const p = kitchenPerformance(annotation, time);
  const finalLeave = p.words.reduce((last, w, i) => /^leave\W*$/i.test(w.item.text) ? i : last, -1);
  const finalPhrase = finalLeave >= 0 ? p.words.slice(finalLeave) : [];
  const phraseEnd = creditBounds(annotation)?.start ?? outro;
  const showFinalPhrase =
    finalPhrase.length > 0 && time >= finalPhrase[0].start && time < phraseEnd;
  const cuts = useMemo(() => outdoorShotCuts(annotation, start), [annotation, start]);
  const shot = cuts.reduce((n, t, i) => (time >= t ? i : n), 0);
  const modules = useMemo(() => cortexModules(annotation), [annotation]);
  const events = useMemo(() => {
    const selected: ReturnType<typeof percussionPulses> = [];
    for (const e of percussionPulses(annotation.audioHash))
      if (
        e.time >= start + 5 &&
        e.strength >= 0.65 &&
        (!selected.length || e.time - selected.at(-1)!.time >= 2.2)
      )
        selected.push(e);
    return selected;
  }, [annotation.audioHash, start]);
  const exchanges = events.filter((e) => time >= e.time && time - e.time < 1.6);
  const fade = smooth((time - annotation.duration + 2) / 2);
  return (
    <div
      data-outdoor-finale
      data-outdoor-owner={time < outro ? "section-15" : "section-16"}
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#08121a" }}
    >
      {[shot].map((view, layer) => {
        const projection = outdoorProjection(time, start, annotation.duration - 2, view);
        const frame = outdoorFrames[view];
        return (
          <div
            key={layer}
            data-outdoor-camera={view}
            data-outdoor-shot-start={cuts[shot]}
            style={{
              position: "absolute",
              inset: 0,
              opacity: 1,
              transform: `translate(${projection.x}%,${projection.y}%) scale(${projection.scale})`,
              transformOrigin: "0 0",
            }}
          >
            {view === 0 ? (
              <img
                src="/scene-assets/web-room/street-empty-v1.png"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url(/scene-assets/web-room/street-retreat-empty-2x2-v1.png)",
                  backgroundSize: "203% 203%",
                  backgroundPosition: `${((view - 1) % 2) * 100}% ${Math.floor((view - 1) / 2) * 100}%`,
                }}
              />
            )}
            <CortexWalker
              annotation={annotation}
              time={time}
              start={start}
              x={frame.x}
              head={frame.head}
              height={frame.height}
            />
            <PedestrianCortex annotation={annotation} time={time} start={start} view={view} />
            <ExtraPedestrian annotation={annotation} time={time} start={start} view={view} />
            <BackpackCortex annotation={annotation} time={time} start={start} view={view} />
            <svg
              viewBox="0 0 100 56.25"
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            >
              {frame.people.map(([x, head], i) => (
                <g key={i} data-personal-cortex={i}>
                  {modules
                    .filter((_, n) => i === 0 || n % 3 === 0)
                    .map((m) => (
                      <g
                        key={m.id}
                        data-retained-node={i === 0 ? m.id : `pedestrian-${i}:personal:${m.id}`}
                      />
                    ))}
                </g>
              ))}
              {exchanges.map((e) => {
                const i = (Number(e.id.split("-").at(-1)) % 3) + 1,
                  target = frame.people[i],
                  origin = frame.people[0],
                  q = smooth((time - e.time) / 1.6);
                return (
                  <g
                    key={e.id}
                    data-selective-exchange={e.id}
                    opacity={camera.reveal * Math.sin(q * Math.PI)}
                    transform={`translate(${origin[0] + (target[0] - origin[0]) * q},${(origin[1] + (target[1] - origin[1]) * q - 5) * 0.5625 - 2 * Math.sin(q * Math.PI)}) scale(.7)`}
                  >
                    <FileSymbol />
                  </g>
                );
              })}
            </svg>
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(transparent 68%,#07101a88)",
        }}
      />
      {showFinalPhrase && (
        <div
          data-final-chorus-phrase
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            top: "73%",
            textAlign: "center",
            color: "#fff1d4",
            font: "700 4.5cqw Georgia,serif",
            lineHeight: 1.15,
            textShadow: "0 .2cqw .8cqw #000",
            opacity: smooth((time - finalPhrase[0].start) / 0.2),
          }}
        >
          Leave the final say
          <br />
          with me
        </div>
      )}
      {!showFinalPhrase && p.word && (
        <span
          data-kitchen-word={p.word.id}
          style={{
            position: "absolute",
            left: "50%",
            top: "85%",
            transform: "translate(-50%,-50%)",
            font: `${/harness|say|me|own/i.test(p.word.item.text) ? 700 : 500} 5.8cqw Georgia,serif`,
            color: "#fff1d4",
            opacity: p.spoken ? 1 : smooth((time - p.word.start + 0.12) / 0.12),
            textShadow: "0 .2cqw .8cqw #000",
          }}
        >
          {p.word.item.text}
        </span>
      )}
      <div
        data-final-fade
        style={{
          position: "absolute",
          inset: 0,
          background: "#070b13",
          opacity: fade,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
