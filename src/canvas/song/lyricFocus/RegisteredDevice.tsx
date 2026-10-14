import type { Placement } from "./openingDirection";
// Bounds of the nine opaque device components in the original atlas, not equal cells.
export const deviceFrames = [
  [256, 60, 327, 283],
  [763, 63, 357, 282],
  [1302, 94, 291, 250],
  [256, 365, 340, 289],
  [783, 367, 344, 287],
  [1327, 377, 272, 279],
  [285, 675, 268, 244],
  [796, 665, 312, 260],
  [1292, 735, 299, 192],
];
export default function RegisteredDevice({
  index,
  opacity,
  scale = 1,
  pulse = 0,
  placement,
}: {
  index: number;
  opacity: number;
  scale?: number;
  pulse?: number;
  placement: Placement;
}) {
  const [x, y, w, h] = deviceFrames[index];
  return (
    <div
      data-registered-device={index}
      data-device-contact="desk"
      data-browser-pulse={pulse.toFixed(4)}
      style={{
        position: "absolute",
        left: placement.x + (index === 8 ? -1 : 12) + "%",
        top: placement.y + (index === 8 ? 16 : 11) + "%",
        width: (index === 8 ? 32 : 26) * placement.scale + "%",
        aspectRatio: `${w}/${h}`,
        overflow: "hidden",
        transform: `translate(-50%,-100%) scale(${scale * (1 + 0.025 * pulse)})`,
        transformOrigin: "50% 100%",
        opacity,
        filter: `brightness(${1 + 0.12 * pulse}) drop-shadow(0 0 ${0.6 * pulse}cqw #88cfff66)`,
        zIndex: 1,
        willChange: "transform,opacity",
      }}
    >
      <img
        src="/scene-assets/web-room/device-evolution-3x3-v2.png"
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          maxWidth: "none",
          width: (1672 / w) * 100 + "%",
          height: (941 / h) * 100 + "%",
          left: (-x / w) * 100 + "%",
          top: (-y / h) * 100 + "%",
        }}
      />
    </div>
  );
}
