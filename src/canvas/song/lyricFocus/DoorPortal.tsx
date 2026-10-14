import { infinityCamera } from "./doorwayDirection";
import { doorCamera } from "./doorCamera";
/** The same open-door plate and aperture in both owners. Only reveal the next
 * blue world through the aperture before entry, then keeps it registered with
 * the chorus camera. The room itself never dissolves mid-approach. */
export default function DoorPortal({
  time,
  chorusStart,
  blur = 0,
}: {
  time: number;
  chorusStart: number;
  blur?: number;
}) {
  const c = doorCamera(time, chorusStart);
  return (
    <div
      data-door-portal
      data-door-camera-scale={c.scale}
      data-door-world-opacity={c.worldOpacity}
      style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 1 - c.worldOpacity }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translate(${c.x}%,${c.y}%) scale(${c.scale})`,
          transformOrigin: "67.5% 41%",
          willChange: "transform",
          filter: blur ? `blur(${blur}cqw)` : undefined,
        }}
      >
        <img
          src="/scene-assets/web-room/door-open-wide-v1.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </div>
      <div
        data-blue-door-aperture
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `polygon(${[
            [59, 13.7],
            [75.7, 11.9],
            [76.1, 72],
            [59, 75],
          ]
            .map(
              ([x, y]) => `${67.5 + (x - 67.5) * c.scale + c.x}% ${41 + (y - 41) * c.scale + c.y}%`,
            )
            .join(",")})`,
        }}
      >
        <div
          data-door-blue-world
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/scene-assets/web-room/infinity-window-return-3x3-v1.png)",
            backgroundSize: "300% 300%",
            backgroundPosition: "0% 0%",
            transform: `translate(${infinityCamera(time, chorusStart, 0).x + 17.5 * (1 - c.progress)}%,${infinityCamera(time, chorusStart, 0).y + 7 * (1 - c.progress)}%) scale(${infinityCamera(time, chorusStart, 0).scale * (0.6 + 0.4 * c.progress)})`,
            transformOrigin: "51.5% 28.4%",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}
