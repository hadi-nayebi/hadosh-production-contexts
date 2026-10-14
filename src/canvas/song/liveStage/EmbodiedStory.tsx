import { bandPulse } from "./songRhythm";
import type { SceneObject } from "./scene.mjs";
const paper = "#f3e9d0",
  mint = "#8ad9b9",
  gold = "#edbc69",
  ink = "#122a2d";
const progress = (t: number, a: number, b: number) => Math.max(0, Math.min(1, (t - a) / (b - a)));
function Phone({ t }: { t: number }) {
  const unfold = progress(t, 72.1, 78),
    rank = progress(t, 84, 87),
    profile = t >= 81;
  return (
    <g data-story="feed">
      <g opacity={1 - unfold}>
        <rect
          x="380"
          y="175"
          width="520"
          height="310"
          rx="18"
          fill="#a7b4a9"
          stroke="#122a2d"
          strokeWidth="10"
        />
        <rect x="405" y="200" width="470" height="250" fill="#173d3d" />
        <path d="M340 490 H940 L985 520 H300Z" fill="#bac8bd" />
      </g>
      <g opacity={unfold} transform={`translate(${560 - 60 * unfold} ${85 * unfold})`}>
        <rect width="285" height="470" rx="38" fill="#182928" stroke="#d4cfb6" strokeWidth="6" />
        <rect x="14" y="18" width="257" height="428" rx="28" fill="#f1e5c9" />
        <rect x="92" y="14" width="103" height="19" rx="8" fill="#182928" />
        <text x="33" y="65" fill={ink} fontSize="23" fontWeight="700">
          My feed
        </text>
        {[
          { name: "Friends", color: "#d59979", to: 1 },
          { name: "Gardens", color: "#a4c884", to: 0 },
          { name: "Shop", color: "#88b4ad", to: 2 },
        ].map((card, i) => (
          <g key={card.name} transform={`translate(28 ${84 + (i + (card.to - i) * rank) * 80})`}>
            <rect width="229" height="70" rx="9" fill={card.color} />
            <path d="M12 52 L38 19 L60 52Z" fill="#f2ead6" />
            <text x="72" y="32" fill={ink} fontSize="20">
              {card.name}
            </text>
            <text x="72" y="57" fill={ink} fontSize="17">
              {i === 1 && t >= 81 ? "♥ saved" : "○  ↗  ☆"}
            </text>
          </g>
        ))}
        <rect x="28" y="332" width="229" height="95" rx="8" fill="#233e3b" />
        <text x="42" y="356" fill={paper} fontSize="15">
          {profile ? "Inferred interests" : "Your follows"}
        </text>
        <text x="42" y="380" fill={mint} fontSize="17">
          {profile ? "Gardens ↑  ·  Shop →" : "Friends · Gardens"}
        </text>
        <text x="42" y="408" fill={gold} fontSize="15">
          {t >= 90 ? "Order: chosen by app" : "Pause · save · follow"}
        </text>
        <path d="M108 456 H177" stroke={paper} strokeWidth="4" strokeLinecap="round" />
      </g>
      {t >= 80 && t < 90 && (
        <g
          transform={`translate(${810 + 10 * Math.sin(t * 3)} ${285 + 30 * Math.sin(t)}) rotate(-25)`}
        >
          <path
            d="M0 45 V-8 Q12-28 24-8 V24 Q62 15 64 50 V88 H5Z"
            fill="#deb580"
            stroke="#74583e"
            strokeWidth="3"
          />
          <circle
            cx="10"
            cy="-10"
            r={10 + 12 * Math.abs(Math.sin(t * 3))}
            stroke={gold}
            strokeWidth="2"
            fill="none"
          />
        </g>
      )}
    </g>
  );
}
function Cortex({ t, workshop }: { t: number; workshop: boolean }) {
  const corrected = t >= 119.74,
    approved = t >= 127.2,
    saved = t >= 131.66;
  return (
    <g data-story={workshop ? "workshop" : "harness"}>
      <text
        x="957"
        y="145"
        fill={paper}
        stroke={ink}
        strokeWidth="4"
        paintOrder="stroke"
        fontSize="20"
      >
        External intelligence
      </text>
      <text
        x="957"
        y="175"
        fill={mint}
        stroke={ink}
        strokeWidth="4"
        paintOrder="stroke"
        fontSize="19"
      >
        {t >= 146.38 ? "Provider B" : "Provider A"}
      </text>
      <foreignObject x="0" y="0" width="1280" height="720" style={{ pointerEvents: "none" }}>
        <div
          data-physical-screen="projective-monitor"
          style={{
            width: 320,
            height: 220,
            transformOrigin: "0 0",
            transform:
              "matrix3d(0.047782635,-0.272952201,0,-0.000682704,-0.124430703,0.647267667,0,-7.4123e-05,0,0,1,0,847.464114833,221.891604676,0,1)",
          }}
        >
          <svg viewBox="0 0 320 220" width="320" height="220">
            <rect width="320" height="220" fill="#f3e9d0" />
            <text x="20" y="35" fill={ink} fontSize="23">
              Workshop / {approved ? "verified" : "draft"}
            </text>
            <path d="M20 48 H300" stroke="#839e89" />
            <text x="20" y="80" fill={corrected ? "#276e59" : "#a75743"} fontSize="21">
              {saved
                ? "Saved project artifacts"
                : corrected
                  ? "Learn to build a page"
                  : "Amazing workshop!"}
            </text>
            {!saved && (
              <>
                <text x="20" y="117" fill={ink} fontSize="20">
                  Time · place · details
                </text>
                <text x="20" y="164" fill={approved ? "#276e59" : "#715f41"} fontSize="20">
                  {approved ? "Approved → published ✓" : "Publish waits for your say"}
                </text>
              </>
            )}
            {saved && (
              <text x="20" y="201" fill="#276e59" fontSize="18">
                Saved note · editable
              </text>
            )}
          </svg>
        </div>
      </foreignObject>
    </g>
  );
}
export default function EmbodiedStory({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  if (o.kind === "story-node")
    return (
      <g data-harness-component="node">
        <circle
          cx={o.width / 2}
          cy={o.height / 2}
          r={o.width / 2 - 2 + 1.5 * bandPulse(frame, "high", o.id)}
          fill={o.textColor || "#b6efbb"}
          stroke="#46795d"
          strokeWidth="2"
        />
        {o.text && (
          <circle
            cx={o.width / 2}
            cy={o.height / 2}
            r={o.width / 2 + 3}
            fill="none"
            stroke={o.textColor || "#8ad9b9"}
            strokeWidth="1"
            opacity=".65"
          />
        )}
        {o.text && (
          <text
            x={o.width / 2}
            y={o.height / 2 + 5}
            textAnchor="middle"
            fontSize="16"
            fill="#153330"
          >
            {o.text}
          </text>
        )}
      </g>
    );
  if (o.kind === "story-edge")
    return (
      <g data-harness-component="edge" opacity={0.5 + 0.5 * bandPulse(frame, "mid", o.id)}>
        <path
          d={o.text === "up" ? `M0 ${o.height} L${o.width} 0` : `M0 0 L${o.width} ${o.height}`}
          stroke={o.textColor || "#8ad9b9"}
          strokeWidth={1.2 + bandPulse(frame, "mid", o.id)}
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - Math.min(1, (frame - o.enterFrame) / 18)}
          fill="none"
        />
      </g>
    );
  if (o.kind === "story-arc")
    return (
      <g data-harness-component="arc">
        <path
          d={`M0 ${o.height} Q${o.width * 0.15} 0 ${o.width} ${o.height * 0.25}`}
          stroke="#82c7e1"
          strokeWidth="3"
          fill="none"
          strokeDasharray="6 10"
        />
      </g>
    );
  if (o.kind === "story-fragment")
    return (
      <g data-harness-component="instruction">
        <text
          x="10"
          y="28"
          fontSize="20"
          fill="#f3e9d0"
          stroke="#12302d"
          strokeWidth="4"
          paintOrder="stroke"
        >
          {o.text}
        </text>
      </g>
    );
  if (o.kind === "story-headset")
    return (
      <g data-story-headset="physical" fill="none" stroke="#183c42" strokeWidth="8">
        <path d="M10 42 Q3 -10 48 -10 Q93 -10 86 42" />
        <rect x="1" y="31" width="17" height="28" rx="7" fill="#d4c79c" />
        <rect x="78" y="31" width="17" height="28" rx="7" fill="#d4c79c" />
        <path d="M85 58 Q92 84 57 82" strokeWidth="4" />
        <circle cx="55" cy="82" r="5" fill="#82c7e1" strokeWidth="2" />
      </g>
    );
  if (o.kind === "story-file")
    return (
      <g data-story-file={o.text} transform={`scale(${o.width / 76})`}>
        <path d="M0 0 H58 L76 18 V82 H0Z" fill="#dce6cf" stroke="#43686a" strokeWidth="3" />
        <path d="M58 0 V18 H76" fill="none" stroke="#43686a" strokeWidth="3" />
        <text x="38" y="53" textAnchor="middle" fill="#173d3d" fontSize="20" fontWeight="700">
          {o.text}
        </text>
      </g>
    );
  if (o.kind === "story-phone") return <Phone t={frame / 30} />;
  if (o.kind === "story-workshop-embodied" || o.kind === "story-cortex")
    return <Cortex t={frame / 30} workshop={o.kind === "story-workshop-embodied"} />;
  return null;
}
