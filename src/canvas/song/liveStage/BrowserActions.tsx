// Explicit causal actions, separate from the sung transcript. Frames are excerpt-local.
export default function BrowserActions({
  frame,
  cues = { add: 7, block: 31, inspect: 101, change: 139 },
  final = false,
}: {
  frame: number;
  cues?: { add: number; block: number; inspect: number; change: number };
  final?: boolean;
}) {
  const added = frame >= cues.add,
    blocked = frame >= cues.block,
    inspecting = final || frame >= cues.inspect,
    changed = final || frame >= cues.change;
  const menu = !final && frame >= cues.inspect - 15 && frame < cues.inspect;
  const bounce = Math.max(0, 1 - (frame - cues.add) / 8);
  return (
    <g
      data-browser-action={
        changed
          ? "style-changed"
          : inspecting
            ? "inspect"
            : blocked
              ? "tracking-stopped"
              : added
                ? "button-added"
                : "ready"
      }
    >
      {added && (
        <g transform={`translate(975 ${8 - 50 * bounce})`}>
          <rect width="65" height="43" rx="8" fill="#f28b61" stroke="#fff6df" strokeWidth="4" />
          <path d="M20 22H45M32 10V34" stroke="#173e43" strokeWidth="5" />
        </g>
      )}
      {!final && frame < cues.inspect - 15 && (
        <g transform="translate(825 150)">
          <rect x="-15" y="-40" width="330" height="120" rx="12" fill="#fff3d7" opacity=".96" />
          <text y="-10" fontSize="23" fill="#173e43" fontFamily="Arial">
            TRACKING SIGNAL
          </text>
          <path d="M0 20H270" stroke="#e78563" strokeWidth="4" strokeDasharray="9 9" />
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={blocked ? 60 + i * 22 : (frame * 10 + i * 60) % 255}
              cy="20"
              r="8"
              fill="#e46d4e"
            />
          ))}
          {blocked && (
            <>
              <path d="M160 -2V43" stroke="#12654f" strokeWidth="12" />
              <text x="180" y="60" fontSize="24" fill="#12654f" fontWeight="700">
                STOPPED
              </text>
            </>
          )}
        </g>
      )}
      {menu && (
        <g transform="translate(460 170)">
          <rect width="365" height="190" rx="10" fill="#fff4dc" stroke="#1a4648" strokeWidth="3" />
          <text x="18" y="35" fontSize="24" fill="#244b4b">
            Right-click
          </text>
          <text x="18" y="79" fontSize="24" fill="#61726a">
            Reload
          </text>
          <rect x="8" y="106" width="349" height="55" rx="5" fill="#ecbd68" />
          <text x="18" y="142" fontSize="30" fontWeight="700" fill="#173e43">
            Inspect
          </text>
          <path
            d="M320 134l0 42 11-12 14 19 10-8-14-17 16-2z"
            fill="#153c42"
            stroke="white"
            strokeWidth="2"
          />
        </g>
      )}
      {inspecting && !menu && (
        <g>
          <rect x="705" y="110" width="475" height="430" rx="8" fill="#142f35" opacity=".96" />
          <text x="725" y="152" fill="#aee4c6" fontSize="28" fontFamily="monospace">
            ELEMENTS · STYLES
          </text>
          <text x="725" y="205" fill="#f3dec1" fontSize="25" fontFamily="monospace">
            &lt;button&gt;My button&lt;/button&gt;
          </text>
          <text x="725" y="262" fill="#aee4c6" fontSize="25" fontFamily="monospace">
            background: {changed ? "mint" : "coral"};
          </text>
          <text x="725" y="305" fill="#aee4c6" fontSize="25" fontFamily="monospace">
            width: {changed ? "wide" : "auto"};
          </text>
          <rect
            x="230"
            y="320"
            width={changed ? 340 : 245}
            height="72"
            rx={changed ? 24 : 7}
            fill={changed ? "#83d5ab" : "#f28b61"}
            stroke="#fff6df"
            strokeWidth="5"
          />
          <text x="252" y="367" fontSize="36" fontFamily="Arial" fontWeight="700" fill="#173e43">
            My button{changed ? " ✓" : ""}
          </text>
          <path d="M710 350H600l15-10m-15 10 15 10" stroke="#edbd6a" fill="none" strokeWidth="5" />
          {changed && (
            <text x="726" y="380" fontSize="27" fill="#f3dec1">
              Change here → see it here
            </text>
          )}
        </g>
      )}
    </g>
  );
}
