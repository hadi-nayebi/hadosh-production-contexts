import type { SceneObject } from "./scene.mjs";
export default function EarthUpgrades({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const age = frame - o.enterFrame;
  const symbol = o.kind.split("-").at(-1);
  const icon =
    symbol === "power" ? (
      <path d="M22 2 L6 24 H20 L12 43 L35 17 H22 Z" />
    ) : symbol === "switch" ? (
      <>
        <rect x="7" y="10" width="27" height="25" rx="4" />
        <path d="M1 16 H7 M1 28 H7 M34 16 H40 M34 28 H40 M15 3 V10 M27 3 V10 M15 35 V42 M27 35 V42" />
      </>
    ) : (
      <>
        <rect x="3" y="6" width="36" height="26" rx="3" />
        <path d="M21 32 V41 M9 41 H33" />
      </>
    );
  if (o.kind.startsWith("upgrade-token-"))
    return (
      <g data-upgrade-token={symbol}>
        <rect
          width={o.width}
          height={o.height}
          rx={o.height / 2}
          fill="#173e45"
          stroke="#edbc69"
          strokeWidth="2"
        />
        <g transform="translate(15 8)" stroke="#edbc69" fill="none" strokeWidth="2.5">
          {icon}
        </g>
        <text x="68" y="38" fontSize="26" fill="#f0e9d5">
          {o.text}
        </text>
      </g>
    );
  if (o.kind.startsWith("upgrade-badge-"))
    return (
      <g data-upgrade-badge={symbol}>
        <circle cx="24" cy="24" r="28" fill="#163137" stroke="#b9e8c3" />
        <g transform="translate(3 2)" stroke="#edbc69" fill="none" strokeWidth="2">
          {icon}
        </g>
      </g>
    );
  const pulse = 0.65 + 0.25 * Math.sin(age / 9);
  return (
    <g data-earth-capability={symbol} stroke="#edbc69" fill="none" strokeWidth="2">
      {symbol === "power" && (
        <>
          {[
            [0.32, 0.31],
            [0.46, 0.2],
            [0.61, 0.29],
            [0.65, 0.49],
            [0.48, 0.62],
            [0.32, 0.51],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle
                cx={x * o.width}
                cy={y * o.height}
                r="12"
                fill="#ffd98c"
                opacity={pulse * 0.45}
              />
              <circle cx={x * o.width} cy={y * o.height} r="3" fill="#fff2c9" opacity={pulse} />
            </g>
          ))}
        </>
      )}
      {symbol === "switch" && (
        <g opacity={0.65}>
          <path
            d={`M${o.width * 0.32} ${o.height * 0.31} H${o.width * 0.46} V${o.height * 0.2} M${o.width * 0.61} ${o.height * 0.29} V${o.height * 0.49} H${o.width * 0.65} M${o.width * 0.32} ${o.height * 0.51} H${o.width * 0.48} V${o.height * 0.62}`}
          />
          {[0.32, 0.61].map((x, i) => (
            <rect
              key={x}
              x={x * o.width - 6}
              y={(i ? 0.49 : 0.31) * o.height - 6}
              width="12"
              height="12"
              fill={Math.floor(age / 12) % 2 ? "#edbc69" : "#173e45"}
            />
          ))}
        </g>
      )}
      {symbol === "computer" &&
        [
          [0.32, 0.31],
          [0.61, 0.49],
          [0.48, 0.62],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x * o.width - 18} ${y * o.height - 13})`}>
            <rect width="36" height="25" rx="3" fill="#173e45" />
            <path d="M18 25 V32 M8 32 H28" />
            <path d="M7 8 H17 M7 14 H27" stroke="#b9e8c3" />
          </g>
        ))}
    </g>
  );
}
