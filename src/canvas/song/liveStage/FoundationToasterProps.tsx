import type { SceneObject } from "./scene.mjs";
import { progress } from "./FoundationOpeningProps";
import blocking from "./foundation-toaster-blocking.json";
export const toasterEvents = Object.fromEntries(blocking.shots.map((s) => [s.id, s.eventFrame]));
export function toasterStateAt(frame: number, powerFrame = toasterEvents["toaster-03"]) {
  return {
    inserted: frame >= toasterEvents["toaster-02"],
    powered: frame >= powerFrame,
    dialTurned: frame >= toasterEvents["toaster-04"],
    model: frame >= toasterEvents["toaster-07"] ? "C" : "B",
    toastReady: frame >= toasterEvents["toaster-08"],
  };
}
export default function FoundationToasterProps({
  object: o,
  frame,
}: {
  object: SceneObject;
  frame: number;
}) {
  const w = o.width,
    h = o.height,
    powerFrame = o.suggestion === "power-cut-v19" ? 5254 : toasterEvents["toaster-03"],
    s = toasterStateAt(frame, powerFrame);
  const t = progress(
    frame,
    o.animation?.startFrame ?? o.enterFrame,
    o.animation?.endFrame ?? o.exitFrame,
  );
  if (o.kind === "story-appliance-body")
    return (
      <svg width={w} height={h} viewBox="0 0 520 330" data-toaster="grounded-body">
        <ellipse cx="263" cy="304" rx="236" ry="23" fill="#142c29" opacity=".4" />
        <path
          d="M38 99Q40 65 76 59L377 22Q428 19 458 66L494 234Q500 268 467 278L123 309Q70 310 60 270Z"
          fill="#83968e"
          stroke="#314b45"
          strokeWidth="5"
        />
        <path d="M38 99Q42 75 75 76L381 45L445 99L112 143Z" fill="#c6cdc0" />
        <path d="M84 96L365 65L390 79L105 114Z" fill="#203834" />
        <path d="M112 143L445 99L478 250L129 287Q96 290 86 257L55 125Z" fill="#b5bfb0" />
        <path d="M112 143L445 99" stroke="#e0e3cd" strokeWidth="5" />
        <path d="M132 286L134 308M427 264L429 286" stroke="#314b45" strokeWidth="14" />
        <circle cx="399" cy="233" r="6" fill={s.powered ? "#d6a35e" : "#4b6456"} />
      </svg>
    );
  if (o.kind === "story-appliance-bread")
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 150 170"
        data-toaster={s.toastReady ? "toasted-slice" : "chosen-slice"}
      >
        <path
          d="M22 162V66Q-8 49 12 23Q29 3 76 7Q131 6 142 33Q155 58 128 68V162Z"
          fill={s.toastReady ? "#b57c42" : "#dfbd7e"}
          stroke="#925f36"
          strokeWidth="9"
        />
        <path
          d="M39 143V63Q12 45 32 30Q80 10 120 36Q131 50 111 60V143Z"
          fill={s.toastReady ? "#d4a160" : "#ecd199"}
        />
      </svg>
    );
  if (o.kind === "story-appliance-dial")
    return (
      <g data-toaster="owner-dial">
        <circle
          cx={w / 2}
          cy={h / 2}
          r={Math.min(w, h) * 0.46}
          fill="#324b44"
          stroke="#e0d3ab"
          strokeWidth="4"
        />
        <path
          d={`M${w / 2} ${h / 2}V${h * 0.16}`}
          stroke="#e4c07b"
          strokeWidth="6"
          transform={`rotate(${t * 85} ${w / 2} ${h / 2})`}
        />
      </g>
    );
  if (o.kind === "story-appliance-outlet")
    return (
      <g data-toaster="wall-outlet">
        <rect width={w} height={h} rx="14" fill="#d5cfb2" stroke="#536458" strokeWidth="5" />
        <rect x={w * 0.125} y={h * 0.48} width={w * 0.19} height={h * 0.1} fill="#314c44" />
        <rect x={w * 0.125} y={h * 0.66} width={w * 0.19} height={h * 0.1} fill="#314c44" />
        <path
          d={`M${w * 0.35} ${h * 0.74}Q${w * 0.45} ${h * 0.55} ${w * 0.55} ${h * 0.74}`}
          fill="#314c44"
        />
      </g>
    );
  if (o.kind === "story-appliance-plug")
    return (
      <g data-toaster="power-plug">
        <path d={`M${w * 0.08} ${h * 0.5}H0`} stroke="#293f37" strokeWidth="10" />
        <rect x={w * 0.07} y={h * 0.18} width={w * 0.63} height={h * 0.64} rx="15" fill="#3d5448" />
        <path
          d={`M${w * 0.7} ${h * 0.3}H${w}M${w * 0.7} ${h * 0.68}H${w}`}
          stroke="#b8bdb0"
          strokeWidth="8"
        />
      </g>
    );
  if (o.kind === "story-appliance-cord")
    return (
      <path
        d={`M0 ${h * 0.7}C${w * 0.25} ${h * 0.05} ${w * 0.58} ${h} ${w - 140 * (1 - progress(frame, o.enterFrame, powerFrame - 1))} ${h * 0.25}`}
        stroke="#273f36"
        strokeWidth="8"
        fill="none"
        data-toaster="continuous-cord"
      />
    );
  return null;
}
