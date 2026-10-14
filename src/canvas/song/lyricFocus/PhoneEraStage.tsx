import RhythmicPortraitPlate from "./RhythmicPortraitPlate";
import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import {
  phoneCamera,
  phoneMatch,
  phoneDetailBlend,
  phoneEraDefaults,
  type PhoneEraDirection,
} from "./phoneEra";
import { percussionPulses, snapToStem } from "./stemAnalysis";
import PhoneAppStage from "./PhoneAppStage";
import YearCalendar from "./YearCalendar";
import { wordTiming } from "./wordTiming";
const logos = [
  { name: "Reddit", mark: "●", color: "#ff4500" },
  { name: "YouTube", mark: "▶", color: "#ff0033" },
  { name: "Facebook", mark: "f", color: "#1877f2" },
  { name: "Instagram", mark: "◎", color: "#c13584" },
  { name: "Twitter", mark: "t", color: "#1da1f2" },
  { name: "WhatsApp", mark: "☎", color: "#25d366" },
];
export default function PhoneEraStage({
  annotation,
  time,
  direction = phoneEraDefaults,
  children,
}: {
  annotation: Annotation;
  time: number;
  direction?: PhoneEraDirection;
  children?: React.ReactNode;
}) {
  const d = direction,
    camera = phoneCamera(time, d),
    match = phoneMatch(time, d),
    u = Math.min(1, Math.max(0, (time - d.upgradeStart) / (d.upgradeEnd - d.upgradeStart))),
    blend = u * u * (3 - 2 * u);
  const yearStep = Math.max(0.1, (d.zoomStart - d.upgradeStart) / 10);
  const elapsedYears = Math.min(10, Math.max(0, Math.floor((time - d.upgradeStart) / yearStep)));
  const currentYear = 2005 + elapsedYears;
  const appStart = useMemo(
    () =>
      wordTiming(annotation).intervals.find(
        (w) =>
          w.start > 80 &&
          annotation.items.find((i) => i.id === w.id)?.text.toLowerCase() === "open",
      )?.start ?? 87.267,
    [annotation],
  );
  const events = useMemo(
    () =>
      logos.map((logo, i) => ({
        ...logo,
        time: snapToStem(d.upgradeStart + 0.45 + i * 0.85, annotation.audioHash),
        id: "social-" + logo.name,
      })),
    [annotation.audioHash, d.upgradeStart],
  );
  const pulse = percussionPulses(annotation.audioHash)
    .filter((b) => time >= b.time && time - b.time < 0.16)
    .reduce((p, b) => Math.max(p, b.strength * (1 - (time - b.time) / 0.16)), 0);
  return (
    <div
      data-phone-era
      data-camera-scale={camera.scale.toFixed(5)}
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#111722" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translate(${match.outgoing.x}%,${match.outgoing.y}%) scale(${match.outgoing.sx},${match.outgoing.sy})`,
          transformOrigin: "50% 50%",
          willChange: "transform",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 1 - blend }}>{children}</div>
        <div data-modern-room style={{ position: "absolute", inset: 0, opacity: blend }}>
          <RhythmicPortraitPlate
            src="/scene-assets/web-room/modern-room-2015-v1.png"
            time={time}
            hash={annotation.audioHash}
            modern
          />
        </div>
        <div style={{ opacity: blend }}>
          <YearCalendar
            year={currentYear}
            previous={Math.max(2005, currentYear - 1)}
            age={
              (time - d.upgradeStart - elapsedYears * yearStep) * (0.8 / Math.min(0.25, yearStep))
            }
            x={69.5}
            y={5}
            width={12}
          />
        </div>
        {events
          .filter((e) => time >= e.time && time < e.time + 1.4)
          .map((e, i) => {
            const age = (time - e.time) / 1.4,
              x = 86 + (i % 3) * 4 + (d.phoneX - 86 - (i % 3) * 4) * age,
              y = 20 + i * 6 + (d.phoneY - 20 - i * 6) * age - Math.sin(age * Math.PI) * 5;
            return (
              <div
                key={e.id}
                data-social-logo={e.name}
                data-onset={e.time}
                style={{
                  position: "absolute",
                  left: x + "%",
                  top: y + "%",
                  transform: `translate(-50%,-50%) rotate(${(i % 2 ? 1 : -1) * age * 12}deg) scale(${1 - 0.6 * age + 0.07 * pulse})`,
                  opacity: Math.min(1, age / 0.12, (1 - age) / 0.2) * blend,
                  background: e.color,
                  color: "white",
                  borderRadius: "1cqw",
                  padding: ".4cqw .7cqw",
                  boxShadow: "0 .3cqw .7cqw #0008",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "1.4cqw",
                }}
              >
                <b style={{ fontSize: "2.6cqw" }}>{e.mark}</b> {e.name}
              </div>
            );
          })}
      </div>
      {time >= d.upgradeStart && time < d.zoomStart && (
        <div
          data-web-to-phone-phrase
          style={{
            position: "absolute",
            left: "4%",
            top: "5%",
            color: "#fff3dc",
            font: "700 3cqw Arial",
            lineHeight: 1.2,
            textShadow: "0 .2cqw .5cqw #000",
            opacity: Math.min(1, (time - d.upgradeStart) / 0.5, (d.zoomStart - time) / 0.35),
          }}
        >
          The web moves
          <br />
          into our hands
        </div>
      )}
      <img
        data-phone-detail
        src="/scene-assets/web-room/phone-hand-detail-v1.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          opacity: phoneDetailBlend(time, d),
          transform: `translate(${match.incoming.x}%,${match.incoming.y}%) scale(${match.incoming.sx},${match.incoming.sy})`,
          transformOrigin: "49.2% 47.2%",
          pointerEvents: "none",
          willChange: "transform,opacity",
        }}
      />
      {time >= appStart && (
        <PhoneAppStage annotation={annotation} time={time} artScale={match.artScale} />
      )}
    </div>
  );
}
