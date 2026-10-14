import type { Annotation } from "./audioAnnotation";
import type { RoomDirection } from "./roomDirection";
import RoomSequence from "./RoomSequence";
export function windowApproach(time: number, start: number, end: number) {
  const establish = Math.min(0.6, (end - start) * 0.2),
    u = Math.min(1, Math.max(0, (time - start - establish) / (end - start - establish)));
  const p = u * u * (3 - 2 * u);
  return { scale: Math.exp(Math.log(2.5) * p), progress: p };
}
/** One spatial composition: both the inset bedroom and its exterior scale together. */
export default function WindowReturn({
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
  const camera = windowApproach(time, start, end);
  return (
    <div
      data-window-approach
      data-window-progress={camera.progress}
      style={{ position: "absolute", inset: 0, background: "#080e1c", overflow: "hidden" }}
    >
      <div
        data-window-world
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camera.scale})`,
          transformOrigin: "50% 50%",
          willChange: "transform",
        }}
      >
        <div
          data-registered-room-in-window
          style={{
            position: "absolute",
            left: "30%",
            top: "30%",
            width: "40%",
            height: "40%",
            containerType: "inline-size",
            overflow: "hidden",
          }}
        >
          <RoomSequence annotation={annotation} time={time} direction={direction} returning />
        </div>
        <div
          data-exterior-window
          style={{
            position: "absolute",
            inset: 0,
            background: "#0b1520",
            clipPath:
              "polygon(evenodd,0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,30% 30%,30% 70%,70% 70%,70% 30%,30% 30%,0% 0%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/scene-assets/web-room/exterior-wide-window-v1.png)",
              backgroundSize: "100% 100%",
              transform: "translate(-1.984%,7.396%) scale(1.0873,1.1396)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
