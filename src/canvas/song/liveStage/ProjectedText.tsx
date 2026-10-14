import type { Scene, SceneObject } from "./scene.mjs";
import { imagePose } from "./views.mjs";
import { planeMatrix } from "./textPlane.mjs";
export default function ProjectedText({
  project,
  object: o,
  frame,
}: {
  project: Scene;
  object: SceneObject;
  frame: number;
}) {
  const plane = o.textPlane!,
    n = imagePose(project, o.id, frame, false);
  return (
    <foreignObject
      x={0}
      y={0}
      width={1280}
      height={720}
      style={{ overflow: "visible", pointerEvents: "none" }}
    >
      <div
        style={{
          width: plane.width,
          height: plane.height,
          transformOrigin: "0 0",
          transform: planeMatrix(plane),
        }}
      >
        <svg width={plane.width} height={plane.height} style={{ overflow: "hidden" }}>
          <text
            x={n.x + 12}
            y={n.y + 26}
            fill={o.textColor || "#244b4b"}
            fontSize={o.textStyle?.fontSize || 19}
            fontWeight={o.textStyle?.weight || 600}
            fontFamily="Arial,sans-serif"
            data-text-role="explanatory"
          >
            {o.text}
          </text>
        </svg>
      </div>
    </foreignObject>
  );
}
