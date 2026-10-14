import { SceneEffects } from "./SceneLifetime";
import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import DoorwayWords from "./DoorwayWords";
import DoorPortal from "./DoorPortal";
import { infinityCamera, infinityCuts } from "./doorwayDirection";
import { percussionPulses } from "./stemAnalysis";
import WebsiteFlyby from "./WebsiteFlyby";
import WindowReturn from "./WindowReturn";
import { doorCamera } from "./doorCamera";
import type { RoomDirection } from "./roomDirection";
export default function DoorwayChorus({
  annotation,
  time,
  start,
  end,
  direction,
}: {
  annotation: Annotation;
  time: number;
  start: number;
  end: number;
  direction?: RoomDirection;
}) {
  const doorwayCamera = doorCamera(time, start);
  const cuts = useMemo(
    () => infinityCuts(start, end, annotation.audioHash),
    [start, end, annotation.audioHash],
  );
  const index = Math.max(
      0,
      cuts.reduce((last, t, i) => (time >= t ? i : last), 0),
    ),
    mix = Math.min(1, Math.max(0, (time - cuts[index]) / 0.7));
  const beats = useMemo(() => {
    let last = -Infinity;
    return percussionPulses(annotation.audioHash).filter((p) => {
      if (p.time < start || p.time > end || p.strength < 0.8 || p.time - last < 0.7) return false;
      last = p.time;
      return true;
    });
  }, [annotation.audioHash, start, end]);
  const image = (i: number, opacity: number) =>
    i >= 6 ? (
      <div
        key={i}
        data-infinity-image={i}
        data-image-onset={cuts[i]}
        data-registered-window-return
        style={{ position: "absolute", inset: 0, opacity, background: "#080e1c" }}
      >
        <WindowReturn
          annotation={annotation}
          time={time}
          start={cuts[6]}
          end={end}
          direction={direction}
        />
      </div>
    ) : (
      <div
        key={i}
        data-infinity-image={i}
        data-image-onset={cuts[i]}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/scene-assets/web-room/infinity-window-return-3x3-v1.png)",
          backgroundSize: "300% 300%",
          backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
          transform: `translate(${infinityCamera(time, start, i).x}%,${infinityCamera(time, start, i).y}%) scale(${infinityCamera(time, start, i).scale})`,
          transformOrigin: `${infinityCamera(time, start, i).originX}% ${infinityCamera(time, start, i).originY}%`,
          willChange: "transform,opacity",
          opacity,
        }}
      />
    );
  return (
    <div
      data-doorway-chorus
      data-rhythm-source="isolated-drums-percussion"
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#080e1c" }}
    >
      {doorwayCamera.worldOpacity < 1 && <DoorPortal time={time} chorusStart={start} />}
      <div style={{ position: "absolute", inset: 0, opacity: doorwayCamera.worldOpacity }}>
        {index > 0 && image(index - 1, 1)}
        {image(index, index > 0 ? mix * mix * (3 - 2 * mix) : 1)}
      </div>
      <SceneEffects>
        <WebsiteFlyby time={time} start={start} end={end} hash={annotation.audioHash} />
        {beats
          .filter((b) => time >= b.time && time < b.time + 1.3)
          .map((b, i) => {
            const age = (time - b.time) / 1.3,
              seed = Number(b.id.split("-").at(-1)) || i,
              x = 50 + Math.sin(seed * 2.4) * 30 * age,
              y = 50 + Math.cos(seed * 1.8) * 30 * age;
            return (
              <div
                key={b.id}
                data-tempo-asset={b.time}
                style={{
                  position: "absolute",
                  left: x + "%",
                  top: y + "%",
                  width: "5.5%",
                  aspectRatio: "1.4",
                  border: ".15cqw solid #bcecff99",
                  borderRadius: ".5cqw",
                  background: "#18507044",
                  boxShadow: "0 0 1.2cqw #5ed5ff66",
                  transform: `translate(-50%,-50%) scale(${0.3 + age * 1.5}) rotate(${Math.sin(seed) * age * 12}deg)`,
                  opacity: Math.sin(Math.PI * age) * 0.35,
                  color: "#d9f5ff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "2cqw",
                }}
              >
                {["◎", "⌘", "↗", "◇"][seed % 4]}
              </div>
            );
          })}
        <DoorwayWords annotation={annotation} time={time} />
      </SceneEffects>
    </div>
  );
}
