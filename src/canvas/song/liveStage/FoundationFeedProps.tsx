import type { SceneObject } from "./scene.mjs";
import { progress } from "./FoundationOpeningProps";
export default function FoundationFeedProps({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const w = o.width,
    h = o.height;
  const t = progress(
    frame,
    o.animation?.startFrame ?? o.enterFrame,
    o.animation?.endFrame ?? o.exitFrame,
  );
  const active = frame >= (o.animation?.endFrame ?? o.exitFrame);
  if (o.kind === "story-feed-phone")
    return (
      <g data-feed-blocking="phone">
        <rect x="9" y="12" width={w} height={h} rx="32" fill="#0b2428" opacity=".45" />
        <rect width={w} height={h} rx="32" fill="#17363d" stroke="#bac8b4" strokeWidth="5" />
        <rect x="13" y="17" width={w - 26} height={h - 34} rx="23" fill="#e7ddbb" />
        <rect x={w * 0.35} y="14" width={w * 0.3} height="13" rx="6" fill="#17363d" />
        <path d={`M${w * 0.36} ${h - 12}H${w * 0.64}`} stroke="#bac8b4" strokeWidth="4" />
      </g>
    );
  if (o.kind === "story-feed-post")
    return (
      <g data-feed-post={o.suggestion}>
        <rect
          width={w}
          height={h}
          rx="8"
          fill={
            o.suggestion === "garden" ? "#9eaf78" : o.suggestion === "shop" ? "#cf9c70" : "#91b5b0"
          }
          stroke="#456b63"
          strokeWidth="3"
        />
        {o.suggestion === "friend" ? (
          <>
            <circle cx={w * 0.26} cy={h * 0.36} r={h * 0.19} fill="#be9377" />
            <path
              d={`M${w * 0.09} ${h * 0.91}Q${w * 0.08} ${h * 0.5} ${w * 0.27} ${h * 0.53}Q${w * 0.46} ${h * 0.5} ${w * 0.47} ${h * 0.91}Z`}
              fill="#426d89"
            />
            <path
              d={`M${w * 0.5} ${h * 0.36}H${w * 0.87}M${w * 0.5} ${h * 0.57}H${w * 0.79}`}
              stroke="#dfe7c9"
              strokeWidth="6"
            />
          </>
        ) : o.suggestion === "shop" ? (
          <>
            <rect x={w * 0.2} y={h * 0.3} width={w * 0.6} height={h * 0.56} fill="#ead8ae" />
            <path
              d={`M${w * 0.16} ${h * 0.35}L${w * 0.24} ${h * 0.12}H${w * 0.76}L${w * 0.84} ${h * 0.35}Z`}
              fill="#9b5c4d"
            />
            <rect x={w * 0.48} y={h * 0.47} width={w * 0.17} height={h * 0.4} fill="#5c8177" />
          </>
        ) : (
          <>
            {[0.23, 0.5, 0.75].map((x, i) => (
              <g key={i}>
                <path d={`M${w * x} ${h * 0.88}V${h * 0.32}`} stroke="#3b6849" strokeWidth="5" />
                <ellipse
                  cx={w * (x + 0.07)}
                  cy={h * 0.67}
                  rx={w * 0.07}
                  ry={h * 0.1}
                  fill="#487c51"
                />
                <circle cx={w * x} cy={h * 0.32} r={h * 0.16} fill="#ead5a0" />
                <circle cx={w * x} cy={h * 0.32} r={h * 0.055} fill="#b68550" />
              </g>
            ))}
          </>
        )}
      </g>
    );
  if (o.kind === "story-feed-bookmark")
    return (
      <g data-feed-blocking={active ? "saved" : "save-control"}>
        <path
          d={`M5 3H${w - 5}V${h - 3}L${w / 2} ${h * 0.72}L5 ${h - 3}Z`}
          fill={active ? "#d99558" : "none"}
          stroke="#38574f"
          strokeWidth="4"
        />
      </g>
    );
  if (o.kind === "story-feed-queue")
    return (
      <g data-feed-blocking="queue">
        <rect width={w} height={h} rx="18" fill="#213f43" stroke="#789b8b" strokeWidth="6" />
        {[0.17, 0.5, 0.83].map((y) => (
          <g key={y}>
            <path d={`M15 ${h * y}H${w - 15}`} stroke="#9b9072" strokeWidth="4" />
            {Array.from({ length: 12 }, (_, i) => (
              <circle
                key={i}
                cx={15 + ((i * 73 + (frame - o.enterFrame) * 1.5) % (w - 30))}
                cy={h * y}
                r="4"
                fill="#bed1b5"
              />
            ))}
          </g>
        ))}
      </g>
    );
  if (o.kind === "story-feed-cover")
    return (
      <g data-feed-blocking="opaque-ordering">
        <rect width={w} height={h} rx="12" fill="#152e35" stroke="#81978a" strokeWidth="5" />
        {[0.2, 0.4, 0.6, 0.8].map((x) => (
          <path key={x} d={`M${w * x} ${h * 0.2}V${h * 0.8}`} stroke="#314d51" strokeWidth="5" />
        ))}
      </g>
    );
  if (o.kind === "story-feed-mute")
    return (
      <g data-feed-blocking={active ? "muted" : "voice-control"}>
        <path
          d={`M4 ${h * 0.35}H${w * 0.28}L${w * 0.55} ${h * 0.15}V${h * 0.85}L${w * 0.28} ${h * 0.65}H4Z`}
          fill="#456b63"
        />
        {active ? (
          <path
            d={`M${w * 0.67} ${h * 0.25}L${w * 0.94} ${h * 0.75}M${w * 0.94} ${h * 0.25}L${w * 0.67} ${h * 0.75}`}
            stroke="#a8604f"
            strokeWidth="5"
          />
        ) : (
          <path
            d={`M${w * 0.68} ${h * 0.2}Q${w} ${h * 0.5} ${w * 0.68} ${h * 0.8}`}
            stroke="#456b63"
            fill="none"
            strokeWidth="4"
          />
        )}
      </g>
    );
  if (o.kind === "story-feed-signal")
    return (
      <g data-feed-blocking="saved-signal">
        <circle
          cx={w / 2}
          cy={h / 2}
          r={Math.min(w, h) * 0.38}
          fill="#d99558"
          stroke="#f0d29b"
          strokeWidth="3"
        />
        <path
          d={`M${w * 0.35} ${h * 0.22}H${w * 0.65}V${h * 0.78}L${w * 0.5} ${h * 0.62}L${w * 0.35} ${h * 0.78}Z`}
          fill="#324f49"
        />
      </g>
    );
  return null;
}
