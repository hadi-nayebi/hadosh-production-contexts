import type { SceneObject } from "./scene.mjs";
export default function ToasterContact({ object, frame }: { object: SceneObject; frame: number }) {
  const turn = Math.max(0, Math.min(1, (frame - 5170) / 55));
  const pop = Math.sin(Math.PI * Math.max(0, Math.min(1, (frame - 5480) / 45)));
  const role = object.suggestion;
  const workspace = object.note.includes("provider match") && frame >= 5366;
  if (role === "contact-shadow")
    return <ellipse cx="215" cy="10" rx="215" ry="15" fill="#182323" opacity=".42" />;
  if (role === "contact-appliance")
    return (
      <g>
        <g opacity={workspace ? 0 : 1} transform={`translate(0 ${-44 * pop})`}>
          <path
            d="M75 60V20Q105 -5 135 20V60 M185 60V20Q215 -5 245 20V60"
            fill={frame >= 5480 ? "#b98141" : "#ecd2a0"}
            stroke="#926a41"
            strokeWidth="5"
          />
        </g>
        <path
          d="M15 55Q15 30 45 30H335Q365 30 365 60V165Q365 188 335 188H40Q15 188 15 165Z"
          fill="#abc5b9"
          stroke="#49695e"
          strokeWidth="5"
        />
        {workspace && (
          <g fill="#f0dfb8" stroke="#49695e" strokeWidth="3">
            <path d="M65 65h48v29H65Z M139 65h48v29h-48Z M213 65h48v29h-48Z" />
            <path d="M72 74h34m-34 8h25m56-8h24m-24 8h24m49-8h24m-24 8h24" fill="none" />
          </g>
        )}
        <path d="M40 48H315" stroke="#253c37" strokeWidth="9" strokeLinecap="round" />
        <path d="M35 184V198M330 184V198" stroke="#263b34" strokeWidth="12" />
        <path d="M32 71V150" stroke="#e8f1dc" opacity=".7" strokeWidth="6" />
        <text x="55" y="126" fill="#243d34" fontSize="22" fontFamily="Georgia">
          {workspace ? "MY WORKSPACE" : "MY TOASTER"}
        </text>
      </g>
    );
  if (role === "contact-dial")
    return (
      <g>
        <circle cx="30" cy="30" r="30" fill="#203b36" stroke="#ebc67e" strokeWidth="3" />
        <path
          d="M30 30V9"
          transform={`rotate(${turn * 95} 30 30)`}
          stroke="#e8c47c"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    );
  if (role === "contact-hand")
    return (
      <g transform={`rotate(${turn * 12} 30 30)`}>
        <path
          d="M600 110L100 75Q70 72 54 51L38 30Q32 17 21 24Q12 29 23 43L34 58Q8 56 3 39Q-4 18 13 8Q35 -5 54 15L91 43L600 66Z"
          fill="#cc9c71"
          stroke="#805b42"
          strokeWidth="3"
        />
        <path d="M190 64L600 66V110L181 91Z" fill="#1687af" stroke="#17586c" strokeWidth="4" />
      </g>
    );
  if (role === "contact-cord")
    return (
      <g>
        <rect
          x="150"
          y="0"
          width="52"
          height="68"
          rx="6"
          fill="#d9c9a5"
          stroke="#785f42"
          strokeWidth="3"
        />
        <path d="M167 17V31M184 17V31" stroke="#403e32" strokeWidth="5" />
        <path d="M175 44C245 110 190 230 0 225" fill="none" stroke="#383d30" strokeWidth="8" />
        <path
          d="M175 44C245 110 190 230 0 225"
          fill="none"
          stroke="#e4ba63"
          strokeWidth="3"
          strokeDasharray="8 23"
          strokeDashoffset={-(frame - 4980) / 2}
        />
      </g>
    );
  return null;
}
