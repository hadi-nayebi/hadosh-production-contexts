// Conceptual ingredients for today's networks; deliberately not an invention timeline.
export default function InternetChecklist({ age }: { age: number }) {
  const stages = ["Electricity", "Transistors", "Computers"];
  const thresholds = [60, 150, 240];
  const connection = Math.max(0, Math.min(1, (age - 270) / 90));
  return (
    <g data-internet-checklist="conceptual" fontFamily="Arial,sans-serif">
      <rect width="1140" height="150" rx="14" fill="#163137" stroke="#567d79" />
      {stages.map((label, i) => (
        <g
          key={label}
          transform={`translate(${25 + i * 245} 28)`}
          data-ingredient={label}
          data-checked={age >= thresholds[i]}
        >
          <rect width="24" height="24" rx="4" stroke="#afc9c2" fill="none" />
          {age >= thresholds[i] && (
            <path d="M5 12 L10 18 L20 5" stroke="#b9e8c3" strokeWidth="3" fill="none" />
          )}
          <text x="36" y="21" fill="#f0e9d5" fontSize="25">
            {label}
          </text>
          <g transform="translate(36 38)" stroke="#edbc69" fill="none" strokeWidth="2">
            {i === 0 ? (
              <path d="M18 0 L3 18 H15 L9 32 L28 12 H16 Z" />
            ) : i === 1 ? (
              <>
                <rect x="4" y="5" width="25" height="22" rx="3" />
                <path d="M0 11 H4 M0 21 H4 M29 11 H34 M29 21 H34 M11 0 V5 M23 0 V5 M11 27 V32 M23 27 V32" />
              </>
            ) : (
              <>
                <rect width="34" height="23" rx="2" />
                <path d="M17 23 V30 M7 30 H27" />
              </>
            )}
          </g>
        </g>
      ))}
      <g
        transform="translate(780 25)"
        data-connected-computers="network"
        opacity={connection}
        stroke="#edbc69"
        fill="none"
        strokeWidth="2"
      >
        <rect x="0" y="5" width="34" height="24" rx="2" />
        <rect x="80" y="5" width="34" height="24" rx="2" />
        <path d="M17 29 V38 H97 V29 M57 38 V55" />
        <rect x="40" y="55" width="34" height="24" rx="2" />
      </g>
      <text
        data-internet-emerges="true"
        x="920"
        y="78"
        fill="#b9e8c3"
        fontSize="29"
        opacity={Math.max(0, Math.min(1, (age - 360) / 30))}
      >
        Internet
      </text>
      <text x="25" y="130" fill="#afc9c2" fontSize="18">
        Ideas behind today's network · not an invention timeline
      </text>
    </g>
  );
}
