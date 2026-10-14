import type { SceneObject } from "./scene.mjs";
export const progress = (frame: number, start: number, end: number) => {
  const t = Math.max(0, Math.min(1, (frame - start) / Math.max(1, end - start)));
  return t * t * (3 - 2 * t);
};
// Blocking primitives only: readable motion and causal contact before surface detail.
export default function FoundationOpeningProps({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const start = o.animation?.startFrame ?? o.enterFrame;
  const end = o.animation?.endFrame ?? o.exitFrame;
  const t = progress(frame, start, end);
  if (o.kind === "story-space-field")
    return (
      <g data-foundation-action="parallax-travel">
        <rect width={o.width} height={o.height} fill="#07131f" />
        {[0, 1, 2].map((layer) => (
          <g key={layer} opacity={0.25 + layer * 0.25}>
            {Array.from({ length: 34 }, (_, i) => {
              const speed = [0.12, 0.45, 1.1][layer];
              const x =
                (((i * 173 + layer * 61 - (frame - o.enterFrame) * speed) % o.width) + o.width) %
                o.width;
              const y = (i * 97 + layer * 181) % o.height;
              return <circle key={i} cx={x} cy={y} r={0.7 + layer * 0.65} fill="#dae7ec" />;
            })}
          </g>
        ))}
      </g>
    );
  if (o.kind === "story-physical-capsule")
    return (
      <g
        data-foundation-action="capsule-approach"
        transform={`rotate(${-360 + 360 * t} ${o.width / 2} ${o.height / 2})`}
      >
        <rect
          width={o.width}
          height={o.height}
          rx={o.height / 2}
          fill="#ddd6bb"
          stroke="#273c43"
          strokeWidth="2"
        />
        <path
          d={`M${o.width / 2} 1H${o.width - o.height / 2}A${o.height / 2 - 1} ${o.height / 2 - 1} 0 0 1 ${o.width - o.height / 2} ${o.height - 1}H${o.width / 2}Z`}
          fill="#ce8653"
        />
        <path d={`M${o.width / 2} 2V${o.height - 2}`} stroke="#34474b" strokeWidth="2" />
      </g>
    );
  if (o.kind === "story-window-passage") {
    const scale =
      o.suggestion === "hold" ? 1 : o.suggestion === "reverse" ? 4.8 - 3.8 * t : 1 + 3.8 * t;
    return (
      <g
        data-foundation-action="window-passage"
        transform={`translate(${o.width / 2} ${o.height / 2}) scale(${scale}) translate(${-o.width / 2} ${-o.height / 2})`}
      >
        <path
          d={`M0 0H${o.width}V${o.height}H0Z M${o.width * 0.2} ${o.height * 0.15}V${o.height * 0.85}H${o.width * 0.8}V${o.height * 0.15}Z`}
          fill="#26352f"
          fillRule="evenodd"
        />
        <rect
          x={o.width * 0.2}
          y={o.height * 0.15}
          width={o.width * 0.6}
          height={o.height * 0.7}
          fill="none"
          stroke="#ac8156"
          strokeWidth="16"
        />
      </g>
    );
  }
  if (o.kind === "story-window-grip")
    return (
      <g data-foundation-action="window-grip" transform={`rotate(${-65 * t} 28 36)`}>
        <rect
          x="22"
          y="8"
          width="12"
          height="58"
          rx="5"
          fill="#d7ae62"
          stroke="#453626"
          strokeWidth="3"
        />
        <path
          d="M190 46L65 40Q48 10 29 17Q9 19 12 40Q17 56 38 53L72 73L190 84Z"
          fill="#b99073"
          stroke="#493c32"
          strokeWidth="3"
        />
        <path d="M112 42L190 46V84L105 78Z" fill="#34748a" />
      </g>
    );
  return null;
}
