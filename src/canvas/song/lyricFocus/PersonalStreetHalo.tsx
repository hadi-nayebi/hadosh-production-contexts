import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { percussionPulses, snapToStem } from "./stemAnalysis";
const smooth = (v: number) => {
  const p = Math.max(0, Math.min(1, v));
  return p * p * (3 - 2 * p);
};
export function streetHaloPerformance(a: Annotation, time: number, start: number, owner: number) {
  const cuts = [
    start,
    ...[5.5, 12, 20].map((t) => snapToStem(start + t + owner * 0.6, a.audioHash)),
  ];
  const phase = cuts.reduce((n, t, i) => (time >= t ? i : n), 0);
  const events = percussionPulses(a.audioHash).filter(
    (e) => e.strength >= 0.4 && time >= e.time && time - e.time < 0.7,
  );
  const pulse = events.reduce(
    (p, e) => Math.max(p, e.strength * Math.sin((Math.PI * (time - e.time)) / 0.7) ** 2),
    0,
  );
  return {
    phase,
    previous: Math.max(0, phase - 1),
    blend: smooth((time - cuts[phase]) / 0.7),
    pulse,
    events,
    cuts,
  };
}
export default function PersonalStreetHalo({
  annotation,
  time,
  start,
  owner,
  x,
  y,
  width,
  opacity = 1,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  owner: number;
  x: number;
  y: number;
  width: number;
  opacity?: number;
}) {
  const p = streetHaloPerformance(annotation, time, start, owner);
  const hues = [0, 75, 280, 125];
  const context = useMemo(
    () =>
      annotation.items
        .filter((i) => [9, 11].some((n) => i.groupId.endsWith(":section:" + n)))
        .map((i) => i.phraseId)
        .filter((v, i, a) => a.indexOf(v) === i),
    [annotation],
  );
  return (
    <div
      data-street-halo={owner}
      data-halo-phase={p.phase}
      data-halo-rhythm-events={p.events.map((e) => e.id).join(",")}
      data-owned-context={owner === 0 ? context.join("|") : `pedestrian-${owner}`}
      style={{
        position: "absolute",
        left: x + "%",
        top: y + "%",
        width: width + "%",
        aspectRatio: "16/9",
        transform: `translate(-50%,-50%) scale(${1 + 0.035 * p.pulse})`,
        opacity,
        filter: `hue-rotate(${hues[owner]}deg) saturate(.8)`,
        pointerEvents: "none",
      }}
    >
      {[p.previous, p.phase].map((phase, i) => (
        <div
          key={i}
          data-halo-layer={phase}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/scene-assets/web-room/outdoor-personal-halo-2x2-v1.png)",
            backgroundSize: "200% 200%",
            backgroundPosition: `${(phase % 2) * 100}% ${Math.floor(phase / 2) * 100}%`,
              opacity: i === 0 ? 1 - p.blend : p.blend,
          }}
        />
      ))}
    </div>
  );
}
