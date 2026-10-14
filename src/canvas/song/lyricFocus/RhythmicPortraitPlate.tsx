import { useMemo, useEffect, useState } from "react";
import { percussionPulses } from "./stemAnalysis";
export function portraitNod(time: number, hash: string) {
  const cues = percussionPulses(hash);
  const previous = cues.filter((p) => p.time <= time && p.strength >= 0.4).at(-1);
  if (!previous) return 0;
  const next = cues.find((p) => p.time > previous.time && p.strength >= 0.4);
  const duration = Math.min(
    0.6,
    Math.max(0.28, (next?.time ?? previous.time + 0.4) - previous.time),
  );
  const p = Math.max(0, Math.min(1, (time - previous.time) / duration));
  return Math.sin(p * Math.PI) ** 2 * (0.6 + 0.4 * previous.strength);
}
/** Registered, rigid transparent head sprites over clean body plates. No morph filter. */
export default function RhythmicPortraitPlate({
  src,
  time,
  hash,
  view = 0,
  modern = false,
  kitchen = false,
}: {
  src: string;
  time: number;
  hash: string;
  view?: number;
  modern?: boolean;
  kitchen?: boolean;
}) {
  const [ready, setReady] = useState(false);
  const base = "/scene-assets/web-room/";
  const body =
    base +
    (kitchen
      ? "kitchen-body-clean-v38.png"
      : modern
        ? "modern-body-clean-v36.png"
        : "cortex-body-clean-2x2-v36.png");
  const head =
    base +
    (kitchen
      ? "kitchen-heads-v38.png"
      : modern
        ? "modern-head-v36.png"
        : "cortex-heads-2x2-v36.png");
  useEffect(() => {
    let active = true;
    Promise.all(
      [body, head].map(
        (url) =>
          new Promise<boolean>((resolve) => {
            const image = new Image();
            image.onload = () => {
              if (typeof image.decode === "function")
                void image.decode().then(
                  () => resolve(true),
                  () => resolve(true),
                );
              else resolve(true);
            };
            image.onerror = () => resolve(false);
            image.src = url;
          }),
      ),
    ).then((ok) => {
      if (active) setReady(ok.every(Boolean));
    });
    return () => {
      active = false;
    };
  }, [body, head]);
  const registration = useMemo(
    () =>
      kitchen
        ? [
            { scale: 0.37, x: 20.8, y: 25.5, ox: 29, oy: 25, hx: 26.5, hy: 47 },
            { scale: 0.4, x: 45.2, y: 4, ox: 31.5, oy: 23, hx: 51, hy: 28 },
            { scale: 0.53, x: 27, y: -2, ox: 24.6, oy: 14, hx: 40, hy: 35 },
            { scale: 0.38, x: 45, y: 6.5, ox: 31.5, oy: 21, hx: 51, hy: 30 },
          ][view]
        : modern
          ? { scale: 0.74, x: 26.1, y: 12.7, ox: 24.16, oy: 12.54, hx: 34, hy: 41 }
          : [
              { scale: 0.42, x: 28.8, y: 13, ox: 29.07 * 1.02, oy: 14.47 * 1.02, hx: 36, hy: 41 },
              {
                scale: 0.39,
                x: 25,
                y: 20.2,
                ox: 26.32 * 1.02 - 2,
                oy: 14.04 * 1.02,
                hx: 34,
                hy: 45,
              },
              { scale: 0.56, x: -0.2, y: 0, ox: 0.6 * 1.02, oy: 2.98 * 1.02 - 2, hx: 14, hy: 48 },
            ][view],
    [view, modern, kitchen],
  );
  const nod = portraitNod(time, hash),
    position = modern ? "50% 50%" : `${(view % 2) * 100}% ${Math.floor(view / 2) * 100}%`;
  const plateStyle = {
    position: "absolute" as const,
    inset: 0,
    backgroundSize: modern ? "100% 100%" : "202% 202%",
    backgroundPosition: position,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      data-rhythmic-portrait
      data-head-nod={nod}
      data-nod-source="isolated-drums-percussion"
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <div style={{ ...plateStyle, backgroundImage: `url(${ready ? body : src})` }} />
      {ready && (
        <div
          data-portrait-head-sprite
          style={{
            position: "absolute",
            inset: 0,
            transform: `rotate(${nod * 8}deg)`,
            transformOrigin: `${registration.hx}% ${registration.hy}%`,
            willChange: "transform",
          }}
        >
          <div
            style={{
              ...plateStyle,
              backgroundImage: `url(${head})`,
              transform: `translate(${registration.x - registration.ox}%,${registration.y - registration.oy}%) scale(${registration.scale})`,
              transformOrigin: `${registration.ox}% ${registration.oy}%`,
              clipPath: modern ? "inset(10% 50% 42% 22%)" : "none",
            }}
          />
        </div>
      )}
    </div>
  );
}
