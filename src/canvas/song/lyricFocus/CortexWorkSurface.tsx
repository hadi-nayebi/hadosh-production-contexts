import type { cortexModules } from "./InstructionCortex";
type Modules = ReturnType<typeof cortexModules>;
const clamp = (v: number) => Math.max(0, Math.min(1, v));
/** Lyric-bound choreography: illustration only, never a real publish operation. */
export function workSurfaceState(modules: Modules, time: number) {
  const cue = (index: number) => modules[index]?.words[0]?.start ?? Infinity;
  const progress = (index: number) => clamp((time - cue(index)) / 0.7);
  return {
    draft: progress(0),
    notes: progress(2),
    space: progress(3),
    correction: progress(6),
    date: progress(8),
    link: progress(9),
    waiting: time >= cue(10) && time < cue(11),
    published: progress(11),
    saved: progress(12),
    recall: progress(14),
    edit: progress(15),
    sourceId: modules[5]?.id,
    memoryId: modules[12]?.id,
    // The saved plain-language correction becomes input to the next brief.
    nextBrief: time >= cue(14),
    modelUnchanged: time < cue(22),
    correctionOutsideModel: true,
  };
}
const registrations = [
  { x: 66, y: 34, w: 18, h: 25, skew: -2 },
  { x: 71, y: 36, w: 16, h: 29, skew: -3 },
  { x: 48, y: 26, w: 32, h: 39, skew: -5 },
];
export function cortexPaperBounds(view: number) {
  const r = registrations[view];
  return {
    x: r.x + r.w * 0.17,
    y: r.y + r.h * 0.09 + r.skew * 0.5,
    width: r.w * 0.65,
    height: r.h * 0.81,
  };
}
export default function CortexWorkSurface({
  modules,
  time,
  view,
  opacity = 1,
}: {
  modules: Modules;
  time: number;
  view: number;
  opacity?: number;
}) {
  const s = workSurfaceState(modules, time),
    r = registrations[view];
  return (
    <svg
      data-cortex-work-surface
      data-work-view={view}
      data-work-state={JSON.stringify(s)}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
      }}
    >
      <g transform={`matrix(${r.w / 100} ${r.skew / 100} 0 ${r.h / 100} ${r.x} ${r.y})`}>
        <rect x="0" y="0" width="100" height="100" rx="3" fill="#152432" />
        <g opacity={s.draft}>
          <rect x="17" y="9" width="65" height="81" rx="2" fill="#f3e8cf" />
          <path d="M23 18H66M23 23H51" stroke="#274b61" strokeWidth="3" />
          <rect
            x="23"
            y="30"
            width="52"
            height={15 - 4 * s.space}
            rx="1"
            fill={s.nextBrief ? "#7792a8" : "#749f9d"}
          />
          <path
            d={
              s.nextBrief
                ? "M29 33q10-4 20 1q10-5 20-1v9q-10-4-20-1q-10-4-20-1Z M49 34v8"
                : "M28 39l8-6 9 6 9-8 15 9"
            }
            fill="none"
            stroke="#ebdfbc"
            strokeWidth="2"
          />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M23 ${51 + i * (7 + 3 * s.space)}h${[49, 44, 34][i]}`}
              stroke={s.nextBrief ? "#3e7371" : "#758580"}
              strokeWidth="2"
            />
          ))}
          <g opacity={s.notes} data-selected-context={modules[2]?.id}>
            <path d="M4 24h9l4 4v15H4Z" fill="#cfb97e" stroke="#fff2d6" strokeWidth="1" />
            <path d="M7 30h7M7 34h7M7 38h5M13 44L23 50" stroke="#597f80" strokeWidth="1.5" />
          </g>
          <g opacity={s.correction}>
            <path
              d="M25 53h44"
              stroke="#cb805f"
              strokeWidth={s.nextBrief ? 0 : 2}
              opacity={s.nextBrief ? 0 : 1}
            />
            <path d="M24 56h33M24 61h38" stroke="#477c73" strokeWidth="2" />
          </g>
          <g opacity={s.date * (1 - s.recall)} data-work-check="date">
            <rect x="25" y="76" width="11" height="10" rx="1" fill="#759a96" />
            <path
              d="M25 79h11M28 74v4M33 74v4M29 82l2 2 4-5"
              fill="none"
              stroke="#fff4d5"
              strokeWidth="1.2"
            />
          </g>
          <g opacity={s.link * (1 - s.recall)} data-work-check="link">
            <path
              d="M46 79l-4 4a3 3 0 0 1-4-4l4-4M45 81l4-4a3 3 0 0 1 4 4l-4 4"
              fill="none"
              stroke="#477c73"
              strokeWidth="1.5"
            />
            <path d="M55 81l2 2 4-5" fill="none" stroke="#477c73" strokeWidth="1.5" />
          </g>
          <g data-human-approval-gate opacity={s.nextBrief ? 1 : s.waiting ? 1 : 1 - s.published}>
            <rect x="68" y="75" width="9" height="10" rx="1.5" fill="#a9724e" />
            <path
              d="M70 75v-3a2.5 2.5 0 0 1 5 0v3"
              stroke="#f7e5c4"
              strokeWidth="1.5"
              fill="none"
            />
          </g>
          <g opacity={s.published * (1 - s.recall)} data-illustrated-publish="true">
            <circle cx="72" cy="80" r="5" fill="#477c73" />
            <path d="M69 80l2 2 4-5" stroke="#fff4d5" fill="none" strokeWidth="1.4" />
          </g>
        </g>
        {s.waiting && (
          <path
            data-human-permission-pointer
            d="M73 69V63q0-2 2-2t2 2v4l4 2v7h-5l-4-5Z"
            fill="#edccaa"
            stroke="#876952"
            strokeWidth=".8"
          />
        )}
        <g opacity={s.saved} data-persistent-correction={s.memoryId}>
          <path d="M84 15h10l4 4v18H84Z" fill="#9acfd1" stroke="#fff4dc" />
          <path d="M87 23h8M87 27h8M87 31h5" stroke="#345864" strokeWidth="1.3" />
          <path
            d="M85 36Q72 41 72 55"
            stroke="#a0cec3"
            fill="none"
            strokeWidth="1.3"
            opacity={s.recall}
          />
        </g>
        <g opacity={s.nextBrief ? s.recall : 0}>
          <rect x="4" y="68" width="10" height="12" rx="1" fill="#87aaa5" />
          <path d="M6 72h6M6 75h5M14 73l8-7" stroke="#f5e9cf" strokeWidth="1.3" fill="none" />
        </g>
      </g>
    </svg>
  );
}
