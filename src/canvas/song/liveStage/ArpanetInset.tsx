// Localized schematic: relative West Coast positions, not a photoreal/geodetic globe projection.
const point = (longitude: number, latitude: number) => ({
  x: 60 + ((longitude + 123.5) / 6.5) * 420,
  y: 150 + ((39 - latitude) / 6) * 300,
});
const sri = point(-122.18, 37.45),
  ucla = point(-118.45, 34.07);
export default function ArpanetInset({ age }: { age: number }) {
  const t = Math.max(0, Math.min(1, (age - 60) / 60));
  const coast = [
    [-123.3, 38.5],
    [-122.5, 37.8],
    [-122.4, 37.0],
    [-121.9, 36.6],
    [-121, 35.6],
    [-120.6, 34.6],
    [-119.2, 34.1],
    [-118.5, 33.9],
    [-117.8, 33.5],
  ];
  const points = coast.map(([lon, lat]) => point(lon, lat));
  return (
    <g data-arpanet="localized" fontFamily="Arial,sans-serif">
      <rect width="570" height="545" rx="18" fill="#163137" stroke="#91b7a6" />
      <text x="28" y="42" fill="#edbc69" fontSize="28">
        29 OCT 1969
      </text>
      <text x="28" y="80" fill="#f0e9d5" fontSize="25">
        First ARPANET message
      </text>
      <text x="28" y="112" fill="#afc9c2" fontSize="18">
        Two sites on the US West Coast
      </text>
      <path
        d={points.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ")}
        stroke="#567d79"
        strokeWidth="6"
        fill="none"
      />
      <path
        data-arpanet-link="UCLA-SRI"
        d={`M${ucla.x} ${ucla.y} L${sri.x} ${sri.y}`}
        stroke="#edbc69"
        strokeWidth="3"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={1 - t}
      />
      {[
        { id: "SRI", ...sri, label: "SRI · Menlo Park", dx: 16, dy: -10 },
        { id: "UCLA", ...ucla, label: "UCLA · Los Angeles", dx: -195, dy: 38 },
      ].map((p) => (
        <g key={p.id} data-arpanet-site={p.id}>
          <circle cx={p.x} cy={p.y} r="7" fill="#b9e8c3" />
          <text x={p.x + p.dx} y={p.y + p.dy} fill="#f0e9d5" fontSize="22">
            {p.label}
          </text>
        </g>
      ))}
      {age >= 60 && (
        <g
          data-arpanet-signal="LO"
          transform={`translate(${ucla.x + (sri.x - ucla.x) * t} ${ucla.y + (sri.y - ucla.y) * t})`}
        >
          <circle r="13" fill="#edbc69" fillOpacity=".35" />
          <circle r="5" fill="#fff4cf" />
          <text x="-24" y="-24" fill="#fff4cf" fontSize="24">
            LO
          </text>
        </g>
      )}
      <text x="28" y="512" fill="#afc9c2" fontSize="17">
        Approximate locations · schematic view
      </text>
    </g>
  );
}
