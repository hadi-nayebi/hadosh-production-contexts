import StreetCortexBranches from "./StreetCortexBranches";
import { useMemo, type CSSProperties } from "react";
import type { Annotation } from "./audioAnnotation";
import { walkerCues, walkerPerformance } from "./CortexWalker";
import { snapToStem } from "./stemAnalysis";
export const womanFrames = [
  [27, 39, 85],
  [27.5, 40.5, 91.5],
  [31.5, 59, 91.5],
  [39, 62, 93],
  [43, 70, 85],
];
export const womanRegistration = {
  crown: 295,
  foot: 961,
  bodyX: 340,
  cropWidth: 600,
  offsets: [0, 70, 64],
  yOffsets: [0, 0, 0],
};
function WomanSprite({
  phase,
  style,
  part,
}: {
  phase: number;
  style?: CSSProperties;
  part?: string;
}) {
  const r = womanRegistration,
    origin = phase * 512 - 60 - r.offsets[phase];
  return (
    <div
      data-woman-sprite={phase}
      data-woman-part={part}
      style={{ position: "absolute", inset: 0, overflow: "hidden", ...style }}
    >
      <img
        src="/scene-assets/web-room/street-woman-cortex-1x3-v2.png"
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          left: (-origin / 600) * 100 + "%",
          top: (r.yOffsets[phase] / 1024) * 100 + "%",
          width: (1536 / 600) * 100 + "%",
          height: "100%",
          maxWidth: "none",
        }}
      />
    </div>
  );
}
/** One integrated full-person sequence, body fixed during network growth. */
export default function PedestrianCortex({
  annotation,
  time,
  start,
  view,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  view: number;
}) {
  const cues = useMemo(
    () => ({
      ...walkerCues(annotation, start),
      growth: [start, ...[12.6, 20.6].map((t) => snapToStem(start + t, annotation.audioHash))],
    }),
    [annotation, start],
  );
  const p = walkerPerformance(time, cues),
    r = womanRegistration,
    [x, crown, foot] = womanFrames[view];
  const h = ((foot - crown) * 1024) / (r.foot - r.crown),
    w = (((h * 600) / 1024) * 9) / 16;
  return (
    <div
      data-pedestrian-cortex="1"
      data-pedestrian-growth={p.growth}
      data-pedestrian-cues={cues.growth.join(",")}
      data-pedestrian-motion={JSON.stringify({
        nod: 2.5 * p.pulse,
        leg: 3 * Math.sin(p.phase),
        event: p.event,
      })}
      style={{
        position: "absolute",
        left: x - w * (1 - r.bodyX / 600) + "%",
        top: crown - ((foot - crown) * r.crown) / (r.foot - r.crown) + "%",
        width: w + "%",
        height: h + "%",
        pointerEvents: "none",
      }}
    >
      <div style={{ position: "absolute", inset: 0, transform: "scaleX(-1)" }}>
        <WomanSprite phase={0} style={{ clipPath: "polygon(34% 39%,78% 39%,80% 66%,33% 66%)" }} />
        <WomanSprite
          phase={0}
          style={{
            clipPath: "polygon(41% 56%,59% 56%,59% 95%,36% 95%)",
            transform: `rotate(${3 * Math.sin(p.phase)}deg)`,
            transformOrigin: "50% 57%",
          }}
        />
        <WomanSprite
          phase={0}
          style={{
            clipPath: "polygon(58% 56%,71% 56%,73% 99%,56% 99%)",
            transform: `rotate(${-3 * Math.sin(p.phase)}deg)`,
            transformOrigin: "63% 57%",
          }}
        />
        <div
          data-pedestrian-head
          style={{
            position: "absolute",
            inset: 0,
            transform: `rotate(${2.5 * p.pulse}deg)`,
            transformOrigin: "56% 43%",
          }}
        >
          {Array.from({ length: p.growth + 1 }, (_, phase) => (
            <WomanSprite
              key={phase}
              phase={phase}
              style={{
                clipPath: `polygon(${phase === 1 ? 22 : phase === 2 ? 12 : 0}% 0,100% 0,100% 42%,${phase === 1 ? 22 : phase === 2 ? 12 : 0}% 42%)`,
                maskImage: "linear-gradient(#000 39%,transparent 42%)",
                opacity: 0.14 * (phase === p.growth ? p.blend : 1),
                mixBlendMode: "lighten",
                filter: `brightness(${1 + 0.12 * p.pulse})`,
              }}
            />
          ))}
          <StreetCortexBranches
            annotation={annotation}
            time={time}
            start={start}
            owner={1}
            pulse={p.pulse}
          />
          <WomanSprite
            phase={0}
            part="portrait"
            style={{ clipPath: "polygon(46% 28%,71% 28%,73% 49%,47% 51%)" }}
          />
        </div>
      </div>
    </div>
  );
}
