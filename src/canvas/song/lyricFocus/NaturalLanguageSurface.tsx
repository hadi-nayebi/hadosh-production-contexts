import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { percussionPulses } from "./stemAnalysis";
const registrations = [
  { x: 66, y: 34, w: 18, h: 25, skew: -2 },
  { x: 71, y: 36, w: 16, h: 29, skew: -3 },
  { x: 48, y: 26, w: 32, h: 39, skew: -5 },
];
/** Symbolic natural-language exchange, not fabricated lyric or a real model session. */
export default function NaturalLanguageSurface({
  view,
  age,
  time,
  annotation,
  settling,
  networkOnly = false,
}: {
  view: number;
  age: number;
  time: number;
  annotation: Annotation;
  settling: boolean;
  networkOnly?: boolean;
}) {
  const r = registrations[view];
  const pulses = useMemo(() => percussionPulses(annotation.audioHash), [annotation.audioHash]);
  const cue = pulses
    .filter((p) => p.time <= time && p.time >= time - age && p.strength >= 0.4)
    .at(-1);
  const signalAge = cue ? time - cue.time : Infinity;
  const response = Math.min(1, Math.max(0, (age - 0.85) / 0.75));
  const settle = settling ? Math.max(0, 1 - age / 0.8) : 1;
  const phase = Math.min(1, signalAge / 0.55);
  // Side view has a physical speech origin; other views feed text from the near-screen edge.
  const origin = view === 1 ? [43.5, 49] : [r.x - 6, r.y + r.h * 0.65];
  const target = [r.x + r.w * 0.28, r.y + r.h * 0.62];
  if (networkOnly) {
    const pulse = Math.max(0, 1 - signalAge / 0.3);
    const nodes = [
      [20, 30],
      [45, 17],
      [72, 30],
      [30, 68],
      [60, 68],
      [82, 52],
    ];
    return (
      <svg
        data-ai-network-progress
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <g transform={`matrix(${r.w / 100} ${r.skew / 100} 0 ${r.h / 100} ${r.x} ${r.y})`}>
          <rect width="100" height="100" rx="3" fill="#152432" />
          {nodes.map(([x, y], i) => (
            <g key={i}>
              <path
                d={`M${x} ${y}L${nodes[(i + 1) % 6][0]} ${nodes[(i + 1) % 6][1]}M${x} ${y}L${nodes[(i + 3) % 6][0]} ${nodes[(i + 3) % 6][1]}`}
                fill="none"
                stroke="#92c9cf"
                strokeWidth={0.8 + pulse * 0.7}
                opacity={0.45 + pulse * 0.4}
              />
              <circle cx={x} cy={y} r={3 + pulse * 2} fill="#d5e7bf" />
            </g>
          ))}
        </g>
      </svg>
    );
  }
  return (
    <svg
      data-natural-language-surface
      data-language-view={view}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <g transform={`matrix(${r.w / 100} ${r.skew / 100} 0 ${r.h / 100} ${r.x} ${r.y})`}>
        <rect width="100" height="100" rx="3" fill="#152432" />
        <g opacity={settle}>
          <path d="M10 13H43" stroke="#9ad0d6" strokeWidth="2" />
          <rect x="8" y="48" width="83" height="27" rx="5" fill="#f0e4c9" />
          <text x="15" y="67" fontFamily="Georgia" fontSize="16" fill="#233e4b">
            {settling ? "words" : age < 0.35 ? "w" : age < 0.65 ? "wor" : "words"}
          </text>
          <path
            d="M65 55v14"
            stroke="#477c73"
            strokeWidth="2"
            opacity={0.5 + 0.5 * Math.sin(time * 8) ** 2}
          />
          <g opacity={response}>
            <circle cx="13" cy="28" r="4" fill="#86b9aa" />
            {[0, 1, 2].map((i) => (
              <path
                key={i}
                d={`M23 ${25 + i * 6}h${[55, 45, 31][i]}`}
                stroke="#9dcac1"
                strokeWidth="2.3"
                strokeDasharray="60"
                strokeDashoffset={60 * (1 - response)}
              />
            ))}
          </g>
          <path d="M83 58l5 4-5 4" fill="none" stroke="#477c73" strokeWidth="2" />
        </g>
      </g>
      {!settling && signalAge < 0.65 && (
        <g
          data-spoken-input-packet
          opacity={Math.min(1, signalAge / 0.1, (0.65 - signalAge) / 0.12)}
        >
          <text
            x={origin[0] + (target[0] - origin[0]) * phase}
            y={origin[1] + (target[1] - origin[1]) * phase - 3 * Math.sin(phase * Math.PI)}
            textAnchor="middle"
            fontFamily="Georgia"
            fontSize="2.5"
            fontWeight="700"
            fill="#fff3dc"
            stroke="#152432"
            strokeWidth=".09"
          >
            Aa
          </text>
        </g>
      )}
    </svg>
  );
}
