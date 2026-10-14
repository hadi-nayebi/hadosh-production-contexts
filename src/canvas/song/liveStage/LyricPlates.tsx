import { imagePose } from "./views.mjs";
import type { Scene, Setting } from "./scene.mjs";
export default function LyricPlates({
  project,
  setting,
  frame,
}: {
  project: Scene;
  setting: Setting;
  frame: number;
}) {
  const words = project.objects.filter(
    (o) => o.kind === "word" && o.role === "lyric" && setting.objectIds.includes(o.id),
  );
  const key = (o: (typeof words)[number]) =>
    o.textFlow?.group || project.words.find((w) => w.id === o.wordId)!.phraseId;
  const active = new Set(
    words
      .filter((o) => {
        const n = imagePose(project, o.id, frame);
        return n.enter <= frame && frame < n.exit;
      })
      .map(key),
  );
  return (
    <g aria-hidden>
      {[...active].map((id) => {
        const objects = words.filter((o) => key(o) === id),
          flow = objects[0].textFlow,
          poses = objects.map((o) => imagePose(project, o.id, frame));
        const x = Math.min(...poses.map((p) => p.x)) - 14,
          y = Math.min(...poses.map((p) => p.y)) - 10;
        const width = Math.max(...poses.map((p) => p.x + p.width)) - x + 8,
          height = Math.max(...poses.map((p) => p.y + p.height)) - y + 8;
        const anchor = flow?.target?.objectId
          ? imagePose(project, flow.target.objectId, frame)
          : null;
        const target = flow?.target
          ? anchor
            ? {
                x: anchor.x + anchor.width * flow.target.x,
                y: anchor.y + anchor.height * flow.target.y,
              }
            : flow.target
          : null;
        const speaker = flow?.speakerId ? imagePose(project, flow.speakerId, frame) : null;
        const tip = speaker
          ? { x: speaker.x + speaker.width * 0.68, y: speaker.y + speaker.height * 0.34 }
          : null;
        return (
          <g key={id} data-lyric-group={id} data-lyric-treatment={flow?.role || "legacy"}>
            {target && (
              <g stroke="#edbf73" strokeWidth="2.5" fill="none" opacity=".9">
                <path
                  d={`M${target.x < x ? x : x + width * 0.75} ${target.y < y ? y : y + height} L${target.x} ${target.y}`}
                />
                <circle cx={target.x} cy={target.y} r="5" fill="#edbf73" />
              </g>
            )}
            {tip && (
              <path
                d={`M${x + 8} ${y + height * 0.6} L${tip.x} ${tip.y} L${x + 8} ${y + height * 0.85}Z`}
                fill="#12383e"
                fillOpacity=".94"
                stroke="#e7d6ad"
                strokeOpacity=".45"
              />
            )}
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={flow?.role === "action" ? 5 : flow?.role === "speech" ? 25 : 14}
              fill="#12383e"
              fillOpacity={flow?.role === "question" ? 0.85 : 0.94}
              stroke={flow?.role === "action" ? "#edbf73" : "#e7d6ad"}
              strokeOpacity={flow?.role === "action" ? 0.8 : 0.45}
            />
            {flow?.role === "action" && (
              <path d={`M${x + 8} ${y + 8}V${y + height - 8}`} stroke="#edbf73" strokeWidth="3" />
            )}
            {!flow && (
              <path d={`M${x + 38} ${y + height}l-15 23 45-23`} fill="#12383e" fillOpacity=".92" />
            )}
          </g>
        );
      })}
    </g>
  );
}
