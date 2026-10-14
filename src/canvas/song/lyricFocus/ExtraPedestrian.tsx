import StreetCortexBranches from "./StreetCortexBranches";
import { useMemo, type CSSProperties } from "react";
import type { Annotation } from "./audioAnnotation";
import { walkerCues, walkerPerformance } from "./CortexWalker";
import BunWalkStudy, { bunWalkPhase, bunGaitState } from "./BunWalkStudy";
import { snapToStem } from "./stemAnalysis";
export const bunFrames = [
  [63, 40.3, 76],
  [61.5, 41, 77],
  [55.5, 57.5, 84.5],
  [56, 58, 77.5],
  [50.5, 63.5, 78],
];
export const bunRegistration = {
  crown: 384,
  foot: 1006,
  bodyX: 380,
  offsets: [0, 54, 114],
  yOffsets: [0, 0, -1],
};
function Sprite({ phase, style, part }: { phase: number; style?: CSSProperties; part?: string }) {
  const r = bunRegistration,
    origin = phase * 512 - 60 - r.offsets[phase];
  return (
    <div
      data-extra-sprite={phase}
      data-extra-part={part}
      style={{ position: "absolute", inset: 0, overflow: "hidden", ...style }}
    >
      <img
        src="/scene-assets/web-room/street-bun-cortex-1x3-v3.png"
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          left: (-origin / 600) * 100 + "%",
          top: (r.yOffsets[phase] / 1024) * 100 + "%",
          width: 256 + "%",
          height: "100%",
          maxWidth: "none",
        }}
      />
    </div>
  );
}
export default function ExtraPedestrian({
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
      growth: [start, ...[13.2, 21.2].map((t) => snapToStem(start + t, annotation.audioHash))],
    }),
    [annotation, start],
  );
  const p = walkerPerformance(time, cues),
    r = bunRegistration,
    gaitPhase = bunWalkPhase(time, cues.steps),
    gait = bunGaitState(gaitPhase),
    [x, crown, foot] = bunFrames[view];
  const h = ((foot - crown) * 1024) / (r.foot - r.crown),
    w = (((h * 600) / 1024) * 9) / 16;
  return (
    <div
      data-extra-pedestrian="3"
      data-extra-growth={p.growth}
      data-extra-cues={cues.growth.join(",")}
      data-extra-motion={JSON.stringify({
        event: p.event,
        nod: 2.2 * p.pulse,
        leg: 3 * Math.sin(p.phase),
      })}
      style={{
        position: "absolute",
        left: x - (w * r.bodyX) / 600 + "%",
        top: crown - ((foot - crown) * r.crown) / (r.foot - r.crown) + "%",
        width: w + "%",
        height: h + "%",
        pointerEvents: "none",
      }}
    >
      <Sprite phase={0} style={{ clipPath: "polygon(43% 48%,81% 48%,82% 74%,42% 74%)" }} />
      <div
        data-extra-ground
        style={{
          position: "absolute",
          // The rear-facing sole is lifted in the source pose. Ground the
          // weight-bearing shoe at y=983, rather than the lifted sole at y=1006.
          left: "51%",
          top: "94.7%",
          width: "26%",
          height: "5.4%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse,#17131c99 12%,#17131c55 42%,transparent 74%)",
          transform: "rotate(-12deg)",
          filter: "blur(.08cqw)",
        }}
      />
      <div
        data-extra-contact
        style={{
          position: "absolute",
          left: view === 3 ? (gait.stance === "left" ? 56 : 61.7) + "%" : "61%",
          top: "95.5%",
          width: "9%",
          height: "1.8%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse,#18111dde 20%,#18111d88 50%,transparent 78%)",
          filter: "blur(.035cqw)",
        }}
      />
      {view === 3 ? (
        <BunWalkStudy phase={gaitPhase} />
      ) : (
        <>
          <Sprite
            phase={0}
            style={{
              clipPath: "polygon(50% 64%,66% 64%,66% 100%,47% 100%)",
              transform: `rotate(${3 * Math.sin(p.phase)}deg)`,
              transformOrigin: "58% 66%",
            }}
          />
          <Sprite
            phase={0}
            style={{
              clipPath: "polygon(65% 64%,77% 64%,77% 100%,61% 100%)",
              transform: `rotate(${-3 * Math.sin(p.phase)}deg)`,
              transformOrigin: "70% 66%",
            }}
          />
        </>
      )}
      <div
        data-extra-head
        style={{
          position: "absolute",
          inset: 0,
          transform: `rotate(${2.2 * p.pulse}deg)`,
          transformOrigin: "64% 48%",
        }}
      >
        {Array.from({ length: p.growth + 1 }, (_, phase) => (
          <Sprite
            key={phase}
            phase={phase}
            style={{
              clipPath: `polygon(${phase ? 14 : 0}% 0,100% 0,100% 47%,${phase ? 14 : 0}% 47%)`,
              maskImage: "linear-gradient(#000 44%,transparent 47%)",
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
          owner={3}
          pulse={p.pulse}
        />
        <Sprite
          phase={0}
          part="portrait"
          style={{ clipPath: "polygon(53% 36%,74% 36%,75% 49%,52% 49%)" }}
        />
      </div>
    </div>
  );
}
