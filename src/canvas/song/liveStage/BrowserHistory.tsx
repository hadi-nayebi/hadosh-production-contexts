import type { Scene } from "./scene.mjs";
// A visual sidebar, not additional sung words. Dates describe browser milestones, not hardware inventions.
export default function BrowserHistory({
  project,
  frame,
  layer,
}: {
  project: Scene;
  frame: number;
  layer: "badge" | "year";
}) {
  const history = project.browserHistory;
  if (!history) return null;
  const item = [...history].reverse().find((m) => m.frame <= frame) || history[0];
  if (layer === "year")
    return (
      <g data-history-year={item.year} data-text-role="explanatory">
        <rect x="36" y="644" width="408" height="58" rx="8" fill="#102f35" opacity=".96" />
        <text x="51" y="680" fontSize="30" fontFamily="Georgia,serif" fill="#f0c375">
          {item.year}
        </text>
        <text x="129" y="678" fontSize="18" fontFamily="Arial" fill="#f3e5c9">
          {item.title}
        </text>
        <title>
          {item.note} Sources: {item.sources.join(" ")}
        </title>
      </g>
    );
  if (frame >= 286 && frame < 538) return null;
  const age = frame - item.frame,
    t = Math.min(1, Math.max(0, age / 12)),
    lift = (1 - (1 - t) ** 3) * 170;
  return (
    <g transform={`translate(1150 ${215 - lift})`} data-history-symbol={item.symbol}>
      <title>{item.note}</title>
      <circle r="41" fill="#f8eacb" stroke="#123e43" strokeWidth="3" />
      <BrowserSymbol symbol={item.symbol} />
      <rect x="-175" y="49" width="280" height="31" rx="5" fill="#fff0d2" />
      <text x="-35" y="71" textAnchor="middle" fontSize="17" fontFamily="Arial" fill="#183c40">
        {item.label}
      </text>
    </g>
  );
}

export function BrowserSymbol({ symbol }: { symbol: string }) {
  return (
    <>
      {symbol === "chrome" ? (
        <g>
          <path d="M0 0L-33-19A38 38 0 0 1 36-12H0" fill="#df654f" />
          <path d="M0 0L36-12A38 38 0 0 1-3 38L14 6" fill="#e9bc50" />
          <path d="M0 0L-3 38A38 38 0 0 1-33-19L-15 7" fill="#6aaf78" />
          <circle r="15" fill="#72adcf" stroke="#fff4dd" strokeWidth="3" />
        </g>
      ) : symbol === "safari" ? (
        <g>
          <circle r="31" fill="#75b7c9" stroke="#24556b" strokeWidth="2" />
          <path d="M18-24L5 8-18 24-5-8Z" fill="#f3edda" />
          <path d="M18-24L5 8-5-8Z" fill="#df644c" />
        </g>
      ) : symbol === "firefox" ? (
        <g>
          <circle r="25" fill="#756da0" />
          <path
            d="M-24-26L-14-12Q-3-28 14-18L31-31 27-6Q40 30 0 34Q-36 28-31 0L-18 13Q-5 29 15 12Q-16 20-24-26"
            fill="#e8934b"
          />
        </g>
      ) : (
        <text
          textAnchor="middle"
          y="14"
          fontSize="48"
          fontFamily="Georgia"
          fontWeight="700"
          fill="#315b58"
        >
          M
        </text>
      )}
    </>
  );
}
