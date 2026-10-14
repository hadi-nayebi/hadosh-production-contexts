// Transparent overlay on earth-base-v1: anchors follow the painted California coast.
// This is an illustrated regional approximation, not a georeferenced projection.
export default function EarthLocalLink({
  age,
  width,
  height,
}: {
  age: number;
  width: number;
  height: number;
}) {
  const ucla = [width * 0.176, height * 0.324],
    sri = [width * 0.17, height * 0.3];
  const t = Math.max(0, Math.min(1, (age - 15) / 45));
  return (
    <g data-earth-local-link="painted-coast-overlay">
      <path
        data-earth-message-link="UCLA-SRI"
        d={`M${ucla.join(" ")} L${sri.join(" ")}`}
        fill="none"
        stroke="#ffdc85"
        strokeWidth="3"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={1 - t}
      />
      {[
        { name: "UCLA", p: ucla, dy: 33 },
        { name: "SRI", p: sri, dy: -22 },
      ].map(({ name, p, dy }) => (
        <g key={name} data-earth-site={name}>
          <circle cx={p[0]} cy={p[1]} r="3" fill="#fff0b5" />
          <path
            d={`M${p.join(" ")} L${p[0] - 32} ${p[1] + dy} H${p[0] - 80}`}
            fill="none"
            stroke="#ffdc85"
            strokeWidth="1"
          />
          <text
            x={p[0] - 82}
            y={p[1] + dy - 5}
            fill="#fff2d0"
            stroke="#122a2d"
            strokeWidth="3"
            paintOrder="stroke"
            fontSize="17"
          >
            {name}
          </text>
        </g>
      ))}
      {age >= 15 && (
        <g data-earth-message="LO">
          <circle
            cx={ucla[0] + (sri[0] - ucla[0]) * t}
            cy={ucla[1] + (sri[1] - ucla[1]) * t}
            r="8"
            fill="#fff1b8"
            opacity=".3"
          />
          <circle
            cx={ucla[0] + (sri[0] - ucla[0]) * t}
            cy={ucla[1] + (sri[1] - ucla[1]) * t}
            r="4"
            fill="#fff1b8"
          />
        </g>
      )}
    </g>
  );
}
