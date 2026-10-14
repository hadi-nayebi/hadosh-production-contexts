import { useId, useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { percussionPulses } from "./stemAnalysis";
const registrations = [
  [60, 26, 12],
  [57, 31, 11],
  [44, 23, 9],
  [63, 38, 10],
];
export function streetGrowthEvents(a: Annotation, start: number, owner: number) {
  let last = -Infinity;
  return percussionPulses(a.audioHash)
    .filter((e) => {
      if (e.time < start + owner * 0.3 || e.strength < 0.55 || e.time - last < 0.35) return false;
      last = e.time;
      return true;
    })
    .slice(0, 32);
}
/** Fine persistent branches attach to distributed crown roots. They move with
 * the registered portrait, never float as a separate ring or a shared network. */
export default function StreetCortexBranches({
  annotation,
  time,
  start,
  owner,
  pulse,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  owner: number;
  pulse: number;
}) {
  const id = useId().replace(/:/g, "");
  const events = useMemo(
    () => streetGrowthEvents(annotation, start, owner),
    [annotation, start, owner],
  );
  const [cx, cy, spread] = registrations[owner];
  const geometry = useMemo(
    () =>
      Array.from({ length: 38 }, (_, n) => {
        const lane = n % 9;
        const rootX = cx + (lane / 8 - 0.5) * spread * 1.6;
        const rootY = cy - 2.8 * Math.sin((Math.PI * lane) / 8);
        const angle = n * 2.399963 + owner * 0.65;
        const extent = 5 + Math.sqrt(n / 38) * 20;
        return {
          rootX,
          rootY,
          x: Math.max(3, Math.min(96, cx + Math.sin(angle) * extent)),
          y: Math.max(2, Math.min(cy - 5, cy - 13 + Math.cos(angle) * extent * 0.62)),
        };
      }),
    [cx, cy, spread, owner],
  );
  const count = 6 + events.filter((e) => e.time <= time).length;
  const hue = ["#96d6e3", "#d5badb", "#b4d0ab", "#d9c3a3"][owner];
  return (
    <svg
      data-street-cortex-roots={owner}
      data-persistent-branch-count={count}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      <defs>
        {geometry.map((g, n) => (
          <linearGradient
            key={n}
            id={`${id}-${n}`}
            gradientUnits="userSpaceOnUse"
            x1={g.rootX}
            y1={g.rootY}
            x2={g.x}
            y2={g.y}
          >
            <stop stopColor={hue} stopOpacity=".04" />
            <stop offset=".35" stopColor={hue} stopOpacity=".3" />
            <stop offset="1" stopColor={hue} stopOpacity=".7" />
          </linearGradient>
        ))}
      </defs>
      {geometry.slice(0, count).map((g, n) => {
        const onset = n < 6 ? start : (events[n - 6]?.time ?? Infinity);
        const reveal = Math.max(0, Math.min(1, (time - onset) / 0.55));
        const parents =
          n >= 9
            ? geometry
                .slice(0, n)
                .map((p, i) => ({ ...p, index: i, distance: (p.x - g.x) ** 2 + (p.y - g.y) ** 2 }))
                .sort((a, b) => a.distance - b.distance)
                .slice(0, 2)
            : [];
        return (
          <g key={n} data-owned-branch={`${owner}:${n}`} opacity={reveal}>
            {n < 9 && (
              <path
                d={`M${g.rootX} ${g.rootY} Q${(g.rootX + g.x) / 2} ${g.rootY - 4} ${g.x} ${g.y}`}
                fill="none"
                stroke={`url(#${id}-${n})`}
                strokeWidth={0.17 + 0.065 * pulse}
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={1 - reveal}
              />
            )}
            {parents.map((parent) => (
              <path
                key={parent.index}
                d={`M${parent.x} ${parent.y} L${g.x} ${g.y}`}
                stroke={hue}
                strokeOpacity={0.42 + 0.14 * pulse}
                strokeWidth=".12"
              />
            ))}
            <circle cx={g.x} cy={g.y} r={0.48 + 0.12 * pulse} fill={hue} opacity=".8" />
            {n % 5 === 0 && (
              <path
                d={`M${g.x - 0.65} ${g.y - 0.7}h.85l.45 .45v.9h-1.3z`}
                fill="#182739"
                stroke={hue}
                strokeWidth=".15"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
