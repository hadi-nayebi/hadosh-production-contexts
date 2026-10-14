import { useEffect, useMemo } from "react";
import { audioAssetsFor } from "./stemAnalysis";
// Read-only measured centers/diameters compensate for sprite-sheet registration.
const registration = [
  [54.23, 51.99, 81.98],
  [51.04, 51.99, 81.98],
  [47.69, 51.99, 82.3],
  [44.98, 51.83, 81.98],
  [54.23, 49.6, 84.53],
  [51.2, 49.76, 84.85],
  [48.33, 49.76, 84.85],
  [45.45, 49.76, 85.49],
  [55.18, 47.69, 86.44],
  [51.52, 48.17, 84.85],
  [47.85, 48.17, 86.44],
  [45.3, 48.01, 85.81],
  [54.39, 44.66, 84.21],
  [51.83, 44.82, 84.85],
  [48.33, 44.66, 84.85],
  [45.61, 44.66, 85.17],
];
export const earthEraYears = [
  "1920s",
  "1930s",
  "1940s",
  "1947",
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1989",
];
export function moonCues(hash: string, start: number, end: number) {
  const beats =
    audioAssetsFor(hash)
      ?.lanes.find((l) => l.id === "stem-drums")
      ?.events.filter((e) => e.time >= start && e.time < end && e.strength >= 0.35) ?? [];
  return Array.from({ length: 16 }, (_, i) => {
    const target = start + ((end - start - 0.5) * i) / 15;
    const nearest = beats.reduce<(typeof beats)[number] | null>(
      (p, c) => (!p || Math.abs(c.time - target) < Math.abs(p.time - target) ? c : p),
      null,
    );
    return {
      phase: i,
      time: i && nearest ? nearest.time : start,
      eventId: i && nearest ? nearest.id : null,
      target,
    };
  });
}
export default function MoonEraClock({
  time,
  start,
  end,
  hash,
  imageIndex,
  pulse,
}: {
  time: number;
  start: number;
  end: number;
  hash: string;
  imageIndex: number;
  pulse: number;
}) {
  const cues = useMemo(() => moonCues(hash, start, end), [hash, start, end]);
  useEffect(() => {
    const image = new Image();
    image.src = "/scene-assets/earth-build/moon-phases-4x4-v1.png";
    void image.decode?.().catch(() => undefined);
  }, []);
  if (time < start || time >= end) return null;
  const phase = cues.reduce((n, c) => (time >= c.time ? c.phase : n), 0);
  const age = time - cues[phase].time,
    fade = Math.max(0, Math.min(1, age / 0.2));
  const tile = (i: number, opacity: number) => {
    const [x, y, d] = registration[i];
    return (
      <div
        key={i}
        data-moon-phase={i}
        style={{
          position: "absolute",
          inset: 0,
          opacity,
          backgroundImage: "url(/scene-assets/earth-build/moon-phases-4x4-v1.png)",
          backgroundSize: "400% 400%",
          backgroundPosition: `${((i % 4) * 100) / 3}% ${(Math.floor(i / 4) * 100) / 3}%`,
          transform: `translate(${50 - x}%,${50 - y}%) scale(${82 / d})`,
          transformOrigin: `${x}% ${y}%`,
          willChange: "opacity",
        }}
      />
    );
  };
  return (
    <div
      data-moon-era-clock
      data-moon-onset={cues[phase].time}
      data-moon-event={cues[phase].eventId}
      data-moon-rhythm-source="stem-drums"
      data-era-year={earthEraYears[imageIndex]}
      style={{
        position: "absolute",
        left: "80%",
        top: "38%",
        width: "13%",
        textAlign: "center",
        color: "#f5ecd8",
        pointerEvents: "none",
        opacity: Math.min(1, (time - start) / 0.4, (end - time) / 0.18),
      }}
    >
      <div
        style={{
          position: "relative",
          width: "74%",
          aspectRatio: "1",
          margin: "0 auto",
          clipPath: "circle(41% at 50% 50%)",
          transform: `scale(${1 + 0.025 * pulse})`,
          willChange: "transform",
        }}
      >
        {phase > 0 && tile(phase - 1, 1)}
        {tile(phase, phase ? fade : 1)}
      </div>
      <strong
        style={{
          display: "block",
          font: "600 clamp(14px,3cqw,42px) Georgia,serif",
          fontVariantNumeric: "tabular-nums",
          textShadow: "0 .1cqw .5cqw #000",
        }}
      >
        {earthEraYears[imageIndex]}
      </strong>
      <span
        style={{
          display: "block",
          font: "400 clamp(9px,1.1cqw,16px) Arial",
          marginTop: ".3cqw",
          color: "#abbfd2",
        }}
      >
        1920s → 1990s
      </span>
    </div>
  );
}
