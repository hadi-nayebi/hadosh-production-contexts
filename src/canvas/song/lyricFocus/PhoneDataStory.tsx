export function attentionDepartures(at: number, beats: { time: number }[]) {
  const candidates = beats.filter((b) => b.time >= at && b.time < at + 0.9).slice(0, 3);
  return candidates.length
    ? candidates.map((b) => ({ time: b.time, lane: "isolated-drums-percussion" }))
    : [{ time: at, lane: "vocal-anchor-fallback" }];
}
/** Anonymous attention signals collect behind the phone, then bias its visible feed.
 * This is authored visual storytelling, not a claim about a particular person's data. */
export default function PhoneDataStory({
  time,
  cues,
  beats,
  artScale = 1,
}: {
  time: number;
  artScale?: number;
  beats: { time: number; strength: number }[];
  cues: { pause: number; save: number; clue: number; feed: number; choose: number };
}) {
  const clamp = (x: number) => Math.min(1, Math.max(0, x));
  const traces = [cues.pause, cues.save, cues.clue].filter((t) => t < 900);
  const departures = traces.map((t) => attentionDepartures(t, beats));
  const count = departures.filter((events) => time >= events[0].time + 1.1).length;
  const revealing = time >= cues.feed;
  const opacity = clamp((time - traces[0]) / 0.3);
  if (!traces.length || time < traces[0] || time >= cues.choose + 0.8) return null;
  const feedBeats = beats.filter((b) => b.time >= cues.feed && b.time <= time);
  const copies = revealing ? Math.min(3, feedBeats.length || 1) : 1;
  // The same plant motif is watched, retained, then repeated in the next feed.
  const plant = (x: number, y: number, scale: number, selected: boolean) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-5" y="-4" width="10" height="8" rx=".6" fill={selected ? "#e6ead7" : "#ccd3d4"} />
      <path d="M-1.6 1H1.6L1 3H-1Z" fill="#bb7957" />
      <path
        d="M0 1V-2M0 0Q-3-3-2-3Q0-3 0-1M0-1Q3-4 2-1Q1 0 0 0"
        fill="#428866"
        stroke="#346b51"
        strokeWidth=".18"
      />
      {selected && (
        <rect
          x="-5"
          y="-4"
          width="10"
          height="8"
          rx=".6"
          fill="none"
          stroke="#e8b96d"
          strokeWidth=".25"
        />
      )}
    </g>
  );
  return (
    <svg
      data-private-data-trace="attention-network"
      data-collected-signals={count}
      data-feed-shaped={revealing}
      data-attention-rhythm="isolated-drums-percussion"
      viewBox="0 0 100 56.25"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        transform: `scale(${artScale})`,
        transformOrigin: "49.2% 47.2%",
        opacity,
      }}
    >
      <defs>
        <clipPath id="attention-phone-screen">
          <polygon points="42,7.31 61,9.84 56.2,44.72 36.8,41.91" />
        </clipPath>
      </defs>
      <g clipPath="url(#attention-phone-screen)">
        <path d="M42 7L62 9 56 45 36 42Z" fill="#132531" opacity="1" />
        <g transform="rotate(8 49 26)">
          {plant(49, revealing ? 15 : 25, 1.45, true)}
          {!revealing && (
            <>
              <rect x="42" y="35" width="14" height=".45" rx=".2" fill="#526069" />
              <rect
                x="42"
                y="35"
                width={14 * clamp((time - cues.pause) / 1.4)}
                height=".45"
                rx=".2"
                fill="#edc17d"
              />
              <path d="M53 18h2v4l-1-1-1 1Z" fill="#edc17d" opacity={time >= cues.save ? 1 : 0} />
            </>
          )}
          {revealing &&
            [0, 1, 2].map((i) => {
              const onset =
                beats.filter((b) => b.time >= cues.feed)[i]?.time ?? cues.feed + i * 0.75;
              const p = clamp((time - onset) / 0.3),
                y = 25 + i * 10 + (1 - p) * 5;
              return (
                i < copies && (
                  <g key={i} data-personalized-feed-card={i} opacity={p}>
                    {plant(49, y, 1.25, i === 0)}
                  </g>
                )
              );
            })}
        </g>
      </g>
    </svg>
  );
}
