import { isApproved, uid } from "./model";
import type { StageProps } from "./stageTypes";
export default function ScenesStage({ project, edit }: Pick<StageProps, "project" | "edit">) {
  return (
    <>
      <button
        disabled={!isApproved(project, 3)}
        onClick={() => {
          const existing = new Set(project.scenes.map((s) => s.cue));
          edit(4, {
            scenes: [
              ...project.scenes,
              ...project.cues
                .filter((c) => !existing.has(c.line))
                .map((c) => ({
                  id: uid(),
                  cue: c.line,
                  title: project.lines.find((l) => l.id === c.line)?.section || "Scene",
                  detail: "",
                  color: "#263d44",
                  origin: "human_authored" as const,
                })),
            ],
          });
        }}
      >
        Add missing scene cards
      </button>
      <p className="song-muted">
        These are editable typographic scenes. Character animation and generated artwork remain
        later extensions.
      </p>
      {project.scenes.map((s) => (
        <article className="song-card" key={s.id}>
          <p className="song-tag">{project.lines.find((l) => l.id === s.cue)?.text}</p>
          <label>
            Scene title
            <input
              value={s.title}
              onChange={(e) =>
                edit(4, {
                  scenes: project.scenes.map((x) =>
                    x.id === s.id ? { ...x, title: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
          <label>
            Visual idea / on-screen detail
            <textarea
              value={s.detail}
              onChange={(e) =>
                edit(4, {
                  scenes: project.scenes.map((x) =>
                    x.id === s.id ? { ...x, detail: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
          <label>
            Background color
            <input
              type="color"
              value={s.color}
              onChange={(e) =>
                edit(4, {
                  scenes: project.scenes.map((x) =>
                    x.id === s.id ? { ...x, color: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
        </article>
      ))}
    </>
  );
}
