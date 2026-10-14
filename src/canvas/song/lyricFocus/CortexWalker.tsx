import StreetCortexBranches from "./StreetCortexBranches";
import { useMemo, type CSSProperties } from "react";
import type { Annotation } from "./audioAnnotation";
import { percussionPulses, snapToStem } from "./stemAnalysis";
export const walkerRegistration = {
  cropWidth: 544,
  cropHeight: 1024,
  crown: 250,
  foot: 991,
  bodyX: 325,
  offsets: [0, 5, 9, 4],
  yOffsets: [0, -1, 0, 0],
};
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (v: number) => {
  const p = clamp(v);
  return p * p * (3 - 2 * p);
};
export function walkerCues(a: Annotation, start: number) {
  const events = percussionPulses(a.audioHash).filter((e) => e.time >= start && e.strength >= 0.5);
  const steps = events.reduce<typeof events>((out, e) => {
    if (!out.length || e.time - out.at(-1)!.time >= 0.38) out.push(e);
    return out;
  }, []);
  return {
    steps,
    growth: [start, ...[5.5, 12, 20].map((t) => snapToStem(start + t, a.audioHash))],
  };
}
export function walkerPerformance(time: number, cues: ReturnType<typeof walkerCues>) {
  const index = Math.max(
    0,
    cues.steps.reduce((i, e, n) => (e.time <= time ? n : i), 0),
  );
  const current = cues.steps[index],
    next = cues.steps[index + 1];
  const fraction = current
    ? clamp(
        (time - current.time) / Math.max(0.1, (next?.time ?? current.time + 0.5) - current.time),
      )
    : 0;
  const phase = (index + smooth(fraction)) * Math.PI;
  const pulse =
    current && time >= current.time
      ? current.strength * Math.sin(Math.PI * clamp((time - current.time) / 0.36)) ** 2
      : 0;
  const growth = cues.growth.reduce((i, t, n) => (t <= time ? n : i), 0);
  return {
    phase,
    pulse,
    growth,
    previous: Math.max(0, growth - 1),
    blend: smooth((time - cues.growth[growth]) / 0.8),
    event: current && time >= current.time ? current.id : undefined,
  };
}
function Sprite({ phase, style, part }: { phase: number; style?: CSSProperties; part?: string }) {
  const r = walkerRegistration;
  const origin = phase * 384 - 100 - r.offsets[phase];
  return (
    <div
      data-integrated-sprite={phase}
      data-integrated-part={part}
      style={{ position: "absolute", inset: 0, overflow: "hidden", ...style }}
    >
      <img
        src="/scene-assets/web-room/street-character-cortex-1x4-v1.png"
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          left: (-origin / r.cropWidth) * 100 + "%",
          top: (r.yOffsets[phase] / 1024) * 100 + "%",
          width: (1536 / r.cropWidth) * 100 + "%",
          height: "100%",
          maxWidth: "none",
        }}
      />
    </div>
  );
}
/** Growth was generated with the full character. Fixed portrait/body prevents double figures. */
export default function CortexWalker({
  annotation,
  time,
  start,
  x,
  head,
  height,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  x: number;
  head: number;
  height: number;
}) {
  const cues = useMemo(() => walkerCues(annotation, start), [annotation, start]);
  const p = walkerPerformance(time, cues),
    r = walkerRegistration;
  const h = (height * 1024) / (r.foot - r.crown),
    w = h * (544 / 1024) * (9 / 16);
  const nod = 5.5 * p.pulse,
    sway = 0.7 * Math.sin(p.phase);
  const networkMask = "linear-gradient(to bottom,#000 0%,#000 34%,transparent 35%)";
  return (
    <div
      data-cortex-walker
      data-cortex-growth={p.growth}
      data-cortex-growth-cues={cues.growth.join(",")}
      data-walker-event={p.event}
      data-walker-motion={JSON.stringify({ nod, leg: 5 * Math.sin(p.phase), phase: p.phase })}
      style={{
        position: "absolute",
        left: x - (w * r.bodyX) / r.cropWidth + "%",
        top: head - (height * r.crown) / (r.foot - r.crown) + "%",
        width: w + "%",
        height: h + "%",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `rotate(${sway}deg)`,
          transformOrigin: "59% 60%",
        }}
      >
        <Sprite
          phase={0}
          style={{
            clipPath:
              "polygon(33% 34%,78% 34%,87% 43%,89% 68%,76% 69%,75% 64%,38% 64%,38% 60%,32% 53%)",
          }}
        />
        <Sprite
          phase={0}
          style={{
            clipPath: "polygon(46% 59%,61% 59%,65% 86%,61% 100%,42% 100%,43% 76%)",
            transform: `rotate(${5 * Math.sin(p.phase)}deg)`,
            transformOrigin: "51% 60%",
          }}
        />
        <Sprite
          phase={0}
          style={{
            clipPath: "polygon(58% 59%,75% 59%,76% 98%,59% 98%,55% 79%)",
            transform: `rotate(${-5 * Math.sin(p.phase)}deg)`,
            transformOrigin: "65% 60%",
          }}
        />
        <div
          data-walker-head
          style={{
            position: "absolute",
            inset: 0,
            transform: `rotate(${nod}deg)`,
            transformOrigin: "63% 35%",
          }}
        >
          {Array.from({ length: p.growth + 1 }, (_, phase) => phase).map((phase) => (
            <Sprite
              key={phase}
              phase={phase}
              style={{
                maskImage: networkMask,
                mixBlendMode: "lighten",
                clipPath: "polygon(0 0,75% 0,75% 35%,0 35%)",
                opacity: 0.14 * (phase === p.growth ? p.blend : 1),
                filter: `brightness(${1 + 0.2 * p.pulse})`,
              }}
            />
          ))}
          <StreetCortexBranches
            annotation={annotation}
            time={time}
            start={start}
            owner={0}
            pulse={p.pulse}
          />
          <Sprite
            phase={0}
            part="portrait"
            style={{ clipPath: "polygon(48% 24%,74% 24%,76% 34%,65% 36%,49% 34%)" }}
          />
        </div>
      </div>
    </div>
  );
}
