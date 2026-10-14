import type { percussionPulses } from "./stemAnalysis";
export function bunWalkPhase(time: number, steps: ReturnType<typeof percussionPulses>) {
  if (!steps.length || time < steps[0].time) return 0;
  let index = 0;
  while (index + 1 < steps.length && steps[index + 1].time <= time) index++;
  const current = steps[index].time;
  const next =
    steps[index + 1]?.time ?? current + (steps[index - 1] ? current - steps[index - 1].time : 0.5);
  return (
    (index + Math.max(0, Math.min(1, (time - current) / Math.max(0.1, next - current)))) * Math.PI
  );
}
export function bunWalkFrame(phase: number) {
  return ((Math.floor((phase / (Math.PI * 2)) * 8) % 8) + 8) % 8;
}
// Pixel landmarks from the retained sheet, in each 384x512 cell.
// Left/right refer to the image, not anatomical labels in the rear view.
export const bunShoeLandmarks = {
  left: [
    [183, 474],
    [185, 494],
    [172, 477],
    [150, 480],
    [200, 487],
    [172, 454],
    [168, 487],
    [156, 472],
  ],
  right: [
    [216, 497],
    [223, 461],
    [193, 499],
    [182, 499],
    [230, 474],
    [211, 487],
    [204, 474],
    [190, 487],
  ],
};
const offsets = [0, 14, 25, 39, 0, 14, 24, 33];
const yOffsets = [0, 3, -2, -1, 11, 10, 10, 10];
export function bunGaitState(phase: number) {
  const cycle = (((phase / (Math.PI * 2)) % 1) + 1) % 1;
  const frame = bunWalkFrame(phase);
  const stance = cycle < 0.5 ? "left" : "right";
  return {
    frame,
    stance,
    legs: (["left", "right"] as const).map((side) => {
      const [px, py] = bunShoeLandmarks[side][frame];
      const source = [
        18.23 + ((px + offsets[frame]) / 384) * 80.96,
        34.59 + ((py + yOffsets[frame]) / 512) * 63.25,
      ];
      const target = [side === "left" ? 60 : 65.7, 96];
      // Shear and vertical stretch about the thigh join keep the hip line fixed
      // while mapping the measured shoe to its stationary street contact.
      const shear = ((target[0] - source[0]) / (source[1] - 74)) * (600 / 1024);
      const scale = (target[1] - 74) / (source[1] - 74);
      return { side, source, target, shear, scale };
    }),
  };
}
/** One opaque lower-body pose avoids slicing overlapping legs into duplicate fragments. */
export default function BunWalkStudy({ phase }: { phase: number }) {
  const { frame, stance, legs } = bunGaitState(phase);
  const support = legs.find((leg) => leg.side === stance)!;
  return (
    <div
      data-bun-walk-study={frame}
      data-bun-stance={stance}
      data-bun-contact={JSON.stringify(support)}
      style={{
        position: "absolute",
        inset: 0,
        clipPath: "polygon(45% 74%,81% 74%,81% 103%,45% 103%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `matrix(1,0,${support.shear},${support.scale},0,0)`,
          transformOrigin: "0 74%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "18.23%",
            top: "34.59%",
            width: "80.96%",
            height: "63.25%",
            overflow: "hidden",
          }}
        >
          <img
            src="/scene-assets/web-room/street-bun-walk-4x2-study-v1.png"
            alt=""
            draggable={false}
            style={{
              position: "absolute",
              maxWidth: "none",
              width: "400%",
              height: "200%",
              left: `${(-((frame % 4) * 384 - offsets[frame]) / 384) * 100}%`,
              top: `${(-(Math.floor(frame / 4) * 512 - yOffsets[frame]) / 512) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
