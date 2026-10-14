import type { SceneObject } from "./scene.mjs";
import { progress } from "./FoundationOpeningProps";
export default function FoundationBrowserProps({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const t = progress(
    frame,
    o.animation?.startFrame ?? o.enterFrame,
    o.animation?.endFrame ?? o.exitFrame,
  );
  const active = frame >= (o.animation?.endFrame ?? o.exitFrame);
  const w = o.width,
    h = o.height;
  if (o.kind === "story-browser-bench")
    return (
      <g data-browser-blocking="bench">
        <rect width={w} height={h} fill="#142f33" />
        <path d={`M0 ${h * 0.28}L${w} ${h * 0.18}V${h}H0Z`} fill="#765137" />
        {[0.38, 0.57, 0.77].map((n, i) => (
          <path key={i} d={`M0 ${h * n}L${w} ${h * (n - 0.1)}`} stroke="#442f26" strokeWidth="4" />
        ))}
        <path d={`M0 ${h * 0.87}H${w}V${h}H0Z`} fill="#304442" />
      </g>
    );
  if (o.kind === "story-browser-hand")
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 260 100"
        overflow="visible"
        data-browser-blocking="reaching-hand"
      >
        <path
          d="M260 35L82 27Q53 8 29 16L8 24Q0 30 10 37L44 36L28 47Q24 57 39 59L64 48Q78 74 102 70L260 86Z"
          fill="#b88d6e"
          stroke="#46352c"
          strokeWidth="3"
        />
        <path d="M122 30L260 35V86L112 72Z" fill="#3d7887" />
      </svg>
    );
  if (o.kind === "story-browser-chip")
    return (
      <g data-browser-blocking="shared-code-fragment">
        <path
          d={`M0 0H${w - 18}L${w} 18V${h}H0Z`}
          fill="#ddd2ad"
          stroke="#283e3c"
          strokeWidth="3"
        />
        <path d={`M${w - 18} 0V18H${w}`} fill="#abb59b" />
        <text x={w * 0.12} y={h * 0.66} fontFamily="monospace" fontSize={h * 0.5} fill="#254d48">
          {"</>"}
        </text>
      </g>
    );
  if (o.kind === "story-browser-board")
    return (
      <g data-browser-blocking={active ? "source-change-visible" : "exposed-code"}>
        <rect width={w} height={h} rx="12" fill="#183b3e" stroke="#a0bfa1" strokeWidth="5" />
        <rect x="12" y="12" width={w - 24} height="36" fill="#9baa8b" />
        <text x="26" y="38" fontSize="22" fontFamily="monospace" fill="#153b38">
          browser / source
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${w * 0.08} ${h * (0.3 + i * 0.15)})`}>
            <text fontSize={Math.max(22, h * 0.08)} fontFamily="monospace" fill="#efd7a0">
              {["<window>", "  <view />", "  <controls />", "</window>"][i]}
            </text>
            <path
              d={`M${w * 0.5} -8H${w * (active && i === 2 ? 0.88 : 0.72)}`}
              stroke={active && i === 2 ? "#e9bd69" : "#709784"}
              strokeWidth="5"
            />
          </g>
        ))}
      </g>
    );
  if (o.kind === "story-browser-cover")
    return (
      <g data-browser-blocking="lifted-housing">
        <rect width={w} height={h} rx="18" fill="#d0c6a5" stroke="#4b5548" strokeWidth="6" />
        {[0.3, 0.4, 0.5, 0.6].map((n) => (
          <path key={n} d={`M${w * 0.15} ${h * n}H${w * 0.8}`} stroke="#6a715c" strokeWidth="5" />
        ))}
        <rect x={w * 0.46} y={h * 0.83} width={w * 0.1} height="14" rx="5" fill="#37483d" />
      </g>
    );
  if (o.kind === "story-browser-control")
    return (
      <g data-browser-blocking={active ? "user-control-changed" : "user-control-ready"}>
        <rect width={w} height={h} rx="14" fill="#bba77a" stroke="#405448" strokeWidth="4" />
        <circle cx={w * 0.25} cy={h * 0.5} r={h * 0.3} fill="#294b45" />
        <path
          d={`M${w * 0.25} ${h * 0.5}V${h * 0.24}`}
          transform={`rotate(${t * 80} ${w * 0.25} ${h * 0.5})`}
          stroke="#edc47c"
          strokeWidth="6"
        />
        <path
          d={`M${w * 0.48} ${h * 0.5}H${w * 0.86}`}
          stroke={active ? "#628775" : "#d2825b"}
          strokeWidth="6"
          strokeDasharray={active ? undefined : "8 6"}
        />
        <path
          d={`M${w * 0.68} ${h * 0.18}V${h * 0.82}`}
          stroke="#183d38"
          strokeWidth="10"
          transform={`translate(${(1 - t) * w * 0.18} 0)`}
        />
      </g>
    );
  if (o.kind === "story-browser-frame") {
    const doorway = o.suggestion === "doorway";
    const left = o.suggestion === "Netscape";
    return (
      <g data-browser-blocking={doorway ? "owned-doorway" : "browser-frame"}>
        <rect x="8" y="13" width={w} height={h} rx="16" fill="#071f24" opacity=".35" />
        <rect
          width={w}
          height={h}
          rx={doorway ? 2 : 14}
          fill="#c4b991"
          stroke="#4f5d4f"
          strokeWidth="8"
        />
        <rect x="18" y="40" width={w - 36} height={h - 58} fill={active ? "#96b6aa" : "#427b92"} />
        <path
          d={`M18 ${h * 0.73}L${w * 0.3} ${h * 0.43}L${w * 0.53} ${h * 0.68}L${w * 0.72} ${h * 0.36}L${w - 18} ${h * 0.62}V${h - 18}H18Z`}
          fill={active ? "#4f7657" : "#315869"}
        />
        <circle cx={w * 0.75 - t * w * 0.2} cy={h * 0.28} r={h * 0.085} fill="#efd497" />
        <path
          d={`M${w * 0.2} ${h - 18}Q${w * 0.25 + t * w * 0.2} ${h * 0.63} ${w * 0.57} ${h * 0.65}`}
          stroke="#c8cdb3"
          strokeWidth="18"
          fill="none"
        />
        {!doorway && (
          <>
            <path d={`M18 40H${w - 18}`} stroke="#627562" strokeWidth="4" />
            <text x="24" y="29" fontSize="20" fill="#243e3c">
              {o.suggestion}
            </text>
            <circle cx={w - 30} cy="23" r="6" fill={left ? "#72a997" : "#bd8357"} />
          </>
        )}
        {doorway && (
          <path
            d={`M${w * 0.84} ${h * 0.46}v${h * 0.16}`}
            stroke="#efd497"
            strokeWidth="13"
            transform={`rotate(${-t * 35} ${w * 0.84} ${h * 0.46})`}
          />
        )}
      </g>
    );
  }
  return null;
}
