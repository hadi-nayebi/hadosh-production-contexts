import { useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import { cortexModules } from "./InstructionCortex";
import { percussionPulses } from "./stemAnalysis";

export function FileSymbol({ json = false }: { json?: boolean }) {
  return (
    <g>
      <path
        d="M-.65 -1H.3L.7 -.6V1H-.65Z"
        fill={json ? "#9acfd1" : "#f0dfbb"}
        stroke="#fff4dc"
        strokeWidth=".07"
      />
      <path
        d="M.3 -1V-.6H.7M-.4 -.35H.4M-.4 0H.4M-.4 .35H.2"
        fill="none"
        stroke="#526571"
        strokeWidth=".1"
      />
    </g>
  );
}

/** Reprojects the original instruction IDs; no second context or reset at scene changes. */
export default function RetainedHarness({
  annotation,
  time,
  x,
  y,
  width = 12,
  height = 9,
  taskTarget,
  owner = "main",
  color = "#ffe5a7",
}: {
  annotation: Annotation;
  time: number;
  x: number;
  y: number;
  width?: number;
  height?: number;
  taskTarget?: [number, number];
  owner?: string;
  color?: string;
}) {
  const modules = useMemo(() => cortexModules(annotation), [annotation]);
  const formed = modules
    .filter((m) => m.at <= time)
    .filter((_, i) => owner === "main" || i % 3 === 0)
    .map((m) =>
      owner === "main"
        ? m
        : {
            ...m,
            id: `${owner}:personal:${(m.id ?? m.words[0].id).split(":").slice(-2).join(":")}`,
          },
    );
  const rhythm = useMemo(
    () => percussionPulses(annotation.audioHash).filter((e) => e.strength >= 0.4),
    [annotation.audioHash],
  );
  const latest = rhythm.filter((e) => e.time <= time).at(-1);
  const age = latest ? time - latest.time : Infinity;
  const pulse = latest ? latest.strength * Math.exp(-age * 7) : 0;
  const taskEvents = useMemo(
    () =>
      rhythm.reduce<typeof rhythm>((events, e) => {
        if (!events.length || e.time - events.at(-1)!.time >= 1.5) events.push(e);
        return events;
      }, []),
    [rhythm],
  );
  const task = taskEvents.filter((e) => e.time <= time).at(-1);
  const taskAge = task ? time - task.time : Infinity;
  const workFiles = ["memory.md", "draft.md", "date-check.json", "links.json", "publish-rule.json"];
  const availableWork = workFiles
    .map((name) => formed.findIndex((m) => m.name === name))
    .filter((i) => i >= 0);
  const active =
    task && availableWork.length
      ? availableWork[Number(task.id.split("-").at(-1)) % availableWork.length]
      : -1;
  const nodes = formed.map((m, i) => ({
    ...m,
    x: x + width * (((i * 0.618034) % 1) * 2 - 1) + 0.3 * Math.sin(time * 0.7 + i),
    y: y + height * (((i * 0.414214) % 1) * 2 - 1) + 0.35 * Math.sin(time * 0.9 + i * 2),
  }));
  const selected = nodes[active];
  const progress = Math.min(1, taskAge / 1.2);
  return (
    <g
      data-retained-harness
      data-harness-context={owner === "main" ? annotation.audioHash : owner}
      data-rhythm-lane="stem-drums"
      data-rhythm-event={latest?.id}
    >
      {nodes.map((m, i) => {
        const prior =
          nodes
            .filter((n) => n.id !== m.id)
            .sort(
              (a, b) => Math.hypot(a.x - m.x, a.y - m.y) - Math.hypot(b.x - m.x, b.y - m.y),
            )[0] ?? m;
        return (
          <g key={m.id} data-retained-node={m.id}>
            <path
              d={`M${m.x} ${m.y}L${prior.x} ${prior.y}`}
              fill="none"
              stroke={color}
              strokeWidth={0.07 + 0.06 * pulse}
              opacity={0.18 + 0.16 * pulse}
            />
            <circle
              cx={m.x}
              cy={m.y}
              r={i === active ? 0.28 + 0.18 * pulse : 0.16}
              fill={color}
              opacity={0.45 + 0.5 * pulse}
            />
            {i % 2 === 0 && (
              <g
                transform={`translate(${m.x},${m.y}) scale(${0.85 + 0.2 * pulse})`}
                data-retained-file={m.id}
              >
                <FileSymbol json={m.name.endsWith(".json")} />
              </g>
            )}
          </g>
        );
      })}
      {taskTarget && selected && (
        <g data-background-task={selected.id} data-task-event={task?.id}>
          <rect
            x={taskTarget[0] - 3.5}
            y={taskTarget[1] - 2.6}
            width="7"
            height="4.8"
            rx=".35"
            fill="#142d38"
          />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path
                d={`M${taskTarget[0] - 2.8} ${taskTarget[1] - 1.5 + i * 1.2}h3.2`}
                stroke={i === active % 3 ? "#f0dfbb" : "#587980"}
                strokeWidth=".2"
              />
              <path
                d={`M${taskTarget[0] + 1.4} ${taskTarget[1] - 1.5 + i * 1.2}l.3 .3 .6-.6`}
                fill="none"
                stroke="#a6e3df"
                strokeWidth=".17"
                opacity={i === active % 3 ? progress : 0.5}
              />
            </g>
          ))}
          <path
            d={`M${selected.x} ${selected.y}L${taskTarget[0]} ${taskTarget[1]}`}
            fill="none"
            stroke="#a6e3df"
            strokeWidth=".12"
            opacity=".5"
          />
          <g
            transform={`translate(${selected.x + (taskTarget[0] - selected.x) * progress},${selected.y + (taskTarget[1] - selected.y) * progress}) scale(.65)`}
            opacity={Math.sin(Math.PI * progress)}
          >
            <FileSymbol json={selected.name.endsWith(".json")} />
          </g>
          <path
            d={`M${taskTarget[0] - 0.5} ${taskTarget[1]}l.4 .5 .9-1`}
            fill="none"
            stroke="#a6e3df"
            strokeWidth=".18"
            opacity={Math.max(0, (progress - 0.5) * 2)}
          />
        </g>
      )}
    </g>
  );
}
