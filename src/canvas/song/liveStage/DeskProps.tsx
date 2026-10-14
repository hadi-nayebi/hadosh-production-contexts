import type { SceneObject } from "./scene.mjs";

// Code-native overhead artwork. All text and action timing live in editable scene objects.
export default function DeskProps({ object: o }: { object: SceneObject }) {
  const w = o.width,
    h = o.height;
  if (o.kind === "desk-surface")
    return (
      <g>
        <rect width={w} height={h} fill="#8b593b" />
        {Array.from({ length: 9 }, (_, i) => (
          <g key={i}>
            <path d={`M0 ${(i * h) / 9} H${w}`} stroke="#3e2924" strokeWidth="3" opacity=".35" />
            <path
              d={`M0 ${(i * h) / 9 + 12} Q${w / 3} ${(i * h) / 9 + 32} ${w} ${(i * h) / 9 + 9}`}
              stroke="#c18b56"
              strokeWidth="2"
              fill="none"
              opacity=".28"
            />
          </g>
        ))}
        <rect y={h - 154} width={w} height="154" fill="#173c3b" />
        <path d={`M0 ${h - 154} H${w}`} stroke="#d3b57e" strokeWidth="4" />
      </g>
    );
  if (o.kind === "desk-memory")
    return (
      <g>
        <path
          d={`M0 0 H${w - 30} L${w} 30 V${h} H0 Z`}
          fill="#163c3d"
          stroke="#b6efbb"
          strokeWidth="4"
        />
        <path
          d={`M${w - 30} 0 V30 H${w} M20 70 H${w - 20}`}
          fill="none"
          stroke="#8ad9b9"
          strokeWidth="2"
        />
      </g>
    );
  if (o.kind === "desk-paper")
    return (
      <g>
        <rect x="8" y="12" width={w} height={h} rx="5" fill="#39261f" opacity=".35" />
        <path
          d={`M0 0 H${w - 28} L${w} 28 V${h} H0 Z`}
          fill="#f3e5bd"
          stroke="#ccaf7e"
          strokeWidth="3"
        />
        <path d={`M${w - 28} 0 V28 H${w}`} fill="#d8c592" />
        <path
          d={`M24 90 H${w - 24} M24 210 H${w - 24} M24 248 H${w - 24}`}
          stroke="#c4b991"
          strokeWidth="2"
        />
      </g>
    );
  if (o.kind === "desk-tablet")
    return (
      <g>
        <rect x="10" y="14" width={w} height={h} rx="28" fill="#39261f" opacity=".4" />
        <rect width={w} height={h} rx="28" fill="#163532" stroke="#8e9b86" strokeWidth="5" />
        <rect x="20" y="20" width={w - 40} height={h - 40} rx="12" fill="#f5ebd3" />
        <path d={`M20 80 H${w - 20}`} stroke="#b1beaa" strokeWidth="2" />
        <circle cx={w / 2} cy="10" r="3" fill="#92ad98" />
      </g>
    );
  if (o.kind === "desk-ring")
    return (
      <rect
        width={w}
        height={h}
        rx="12"
        fill="#b9deba"
        fillOpacity=".12"
        stroke="#438869"
        strokeWidth="5"
      />
    );
  if (o.kind === "desk-pointer")
    return (
      <svg width={w} height={h} viewBox="0 0 40 48" overflow="visible">
        <path
          d="M3 2 L34 26 L21 28 L29 43 L20 47 L12 31 L3 39 Z"
          fill="#edbc69"
          stroke="#173c3b"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    );
  return null;
}
