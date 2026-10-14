// An illustrative personalization sequence, not an Instagram API or a real user profile.
export default function FeedProfile({ age }: { age: number }) {
  const progress = (start: number, end: number) =>
    Math.max(0, Math.min(1, (age - start) / (end - start)));
  const move = progress(210, 270);
  const items = [
    { name: "Travel", color: "#d89974", rank: 2 },
    { name: "Tools", color: "#80b6ac", rank: 1 },
    { name: "Gardens", color: "#acd184", rank: 0 },
  ];
  const card = (item: (typeof items)[number], index: number, ranked: boolean) => (
    <g
      key={item.name}
      data-feed-card={`${ranked ? "ranked" : "input"}:${item.name}`}
      transform={`translate(${ranked ? 800 : 0} ${70 + (ranked ? index + (item.rank - index) * move : index) * 88})`}
    >
      <rect width="290" height="72" rx="10" fill="#f0e9d5" />
      <rect x="10" y="10" width="52" height="52" rx="6" fill={item.color} />
      <text x="78" y="42" fill="#173d3d" fontSize="24">
        {item.name}
      </text>
      {!ranked && index === 2 && age >= 25 && (
        <text x="245" y="44" fill="#b94b63" fontSize="28">
          ♥
        </text>
      )}
      {!ranked && index === 1 && age >= 70 && (
        <text x="235" y="45" fill="#326b63" fontSize="17">
          2s
        </text>
      )}
    </g>
  );
  return (
    <g data-feed-profile="illustrative" fontFamily="Arial,sans-serif">
      <text x="0" y="24" fill="#f0e9d5" fontSize="26">
        Your taps and pauses
      </text>
      {items.map((item, i) => card(item, i, false))}
      <path
        d="M315 196 H390 M378 185 L391 196 L378 207"
        fill="none"
        stroke="#edbc69"
        strokeWidth="4"
        opacity={progress(50, 100)}
      />
      <g opacity={progress(85, 120)}>
        <rect x="420" y="48" width="320" height="302" rx="14" fill="#214448" stroke="#8ad9b9" />
        <text x="443" y="86" fill="#f0e9d5" fontSize="24">
          Inferred interests
        </text>
        <text x="443" y="113" fill="#b5d5cc" fontSize="15">
          A model of what you may like
        </text>
        {items
          .slice()
          .reverse()
          .map((item, i) => (
            <g key={item.name} transform={`translate(443 ${145 + i * 54})`}>
              <text fill="#f0e9d5" fontSize="18">
                {item.name}
              </text>
              <rect
                y="12"
                width={255 * progress(110 + i * 20, 165 + i * 20) * (1 - i * 0.28)}
                height="10"
                rx="4"
                fill={item.color}
              />
            </g>
          ))}
        <text x="443" y="324" fill="#edbc69" fontSize="17">
          Signals held by the platform
        </text>
      </g>
      <path
        d="M752 196 H788 M776 185 L789 196 L776 207"
        fill="none"
        stroke="#edbc69"
        strokeWidth="4"
        opacity={progress(180, 210)}
      />
      <g opacity={progress(185, 215)}>
        <text x="800" y="24" fill="#f0e9d5" fontSize="26">
          Ranked for you
        </text>
        {items.map((item, i) => card(item, i, true))}
      </g>
    </g>
  );
}
