import StreetCortexBranches from "./StreetCortexBranches";
import { useMemo, type CSSProperties } from "react";
import type { Annotation } from "./audioAnnotation";
import { walkerCues, walkerPerformance } from "./CortexWalker";
import { snapToStem } from "./stemAnalysis";
export const backpackFrames = [
  [75, 34.5, 87],
  [75, 40, 94.5],
  [65, 59, 96],
  [61.5, 63, 90],
  [53.7, 71.5, 86],
];
export const backpackRegistration = { crown: 235, foot: 991, bodyX: 281, offsets: [0, 100, 158] };
function Sprite({ phase, style, part }: { phase: number; style?: CSSProperties; part?: string }) {
  const r = backpackRegistration,
    origin = phase * 512 - 60 - r.offsets[phase];
  return (
    <div
      data-backpack-sprite={phase}
      data-backpack-part={part}
      style={{ position: "absolute", inset: 0, overflow: "hidden", ...style }}
    >
      <img
        src="/scene-assets/web-room/street-hoodie-cortex-1x3-v1.png"
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          left: (-origin / 700) * 100 + "%",
          top: 0,
          width: (1536 / 700) * 100 + "%",
          height: "100%",
          maxWidth: "none",
        }}
      />
    </div>
  );
}
export default function BackpackCortex({
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
      growth: [start, ...[13.8, 21.8].map((t) => snapToStem(start + t, annotation.audioHash))],
    }),
    [annotation, start],
  );
  const p = walkerPerformance(time, cues),
    r = backpackRegistration,
    [x, crown, foot] = backpackFrames[view];
  const h = ((foot - crown) * 1024) / (r.foot - r.crown),
    w = (((h * 700) / 1024) * 9) / 16;
  return (
    <div
      data-backpack-cortex="2"
      data-backpack-growth={p.growth}
      data-backpack-cues={cues.growth.join(",")}
      data-backpack-motion={JSON.stringify({
        event: p.event,
        nod: 2.5 * p.pulse,
        leg: 3 * Math.sin(p.phase),
      })}
      style={{
        position: "absolute",
        left: x - (w * r.bodyX) / 700 + "%",
        top: crown - ((foot - crown) * r.crown) / (r.foot - r.crown) + "%",
        width: w + "%",
        height: h + "%",
        pointerEvents: "none",
      }}
    >
      <div
        data-backpack-ground
        style={{
          position: "absolute",
          left: "29%",
          top: "96.3%",
          width: "23%",
          height: "1.8%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse,#10101466,transparent 72%)",
          filter: "blur(.12cqw)",
        }}
      />
      <Sprite phase={0} style={{ clipPath: "polygon(18% 31%,63% 31%,63% 64%,18% 64%)" }} />
      <Sprite
        phase={0}
        style={{
          clipPath: "polygon(32% 58%,47% 58%,47% 100%,28% 100%)",
          transform: `rotate(${3 * Math.sin(p.phase)}deg)`,
          transformOrigin: "39% 59%",
        }}
      />
      <Sprite
        phase={0}
        style={{
          clipPath: "polygon(43% 58%,54% 58%,55% 100%,42% 100%)",
          transform: `rotate(${-3 * Math.sin(p.phase)}deg)`,
          transformOrigin: "49% 59%",
        }}
      />
      <div
        data-backpack-head
        style={{
          position: "absolute",
          inset: 0,
          transform: `rotate(${2.5 * p.pulse}deg)`,
          transformOrigin: "44% 34%",
        }}
      >
        {Array.from({ length: p.growth + 1 }, (_, phase) => (
          <Sprite
            key={phase}
            phase={phase}
            style={{
              clipPath: `polygon(${phase === 2 ? 22 : phase === 1 ? 14 : 0}% 0,${phase === 2 ? 100 : phase === 1 ? 85 : 70}% 0,${phase === 2 ? 100 : phase === 1 ? 85 : 70}% 40%,${phase === 2 ? 22 : phase === 1 ? 14 : 0}% 40%)`,
              maskImage: "linear-gradient(#000 36%,transparent 40%)",
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
          owner={2}
          pulse={p.pulse}
        />
        <Sprite
          phase={0}
          part="portrait"
          style={{ clipPath: "polygon(35% 21%,54% 21%,54% 35%,35% 35%)" }}
        />
      </div>
    </div>
  );
}
