import { uid } from "./model";
import type { StageProps } from "./stageTypes";
export default function ContextStage({
  project,
  edit,
  setStatus,
}: Pick<StageProps, "project" | "edit" | "setStatus">) {
  return (
    <>
      <div className="song-two">
        <label>
          Audience
          <textarea
            value={project.audience}
            onChange={(e) => edit(0, { audience: e.target.value })}
          />
        </label>
        <label>
          One central message
          <textarea
            value={project.message}
            onChange={(e) => edit(0, { message: e.target.value })}
          />
        </label>
      </div>
      <div className="song-row">
        <h3>Source context</h3>
        <button
          onClick={() =>
            edit(0, {
              claims: [
                ...project.claims,
                { id: uid(), text: "", source: "", origin: "human_authored" },
              ],
            })
          }
        >
          Add claim
        </button>
      </div>
      {project.claims.map((c, i) => (
        <article className="song-card" key={c.id}>
          <div className="song-row">
            <span className="song-tag">
              Claim {i + 1} · {c.origin.replaceAll("_", " ")}
            </span>
            <button
              onClick={() => {
                if (project.lines.some((l) => l.claim === c.id)) {
                  setStatus("Reassign linked lyrics before removing this claim.");
                  return;
                }
                edit(0, { claims: project.claims.filter((x) => x.id !== c.id) });
              }}
            >
              Remove claim
            </button>
          </div>
          <label>
            Claim
            <textarea
              value={c.text}
              onChange={(e) =>
                edit(0, {
                  claims: project.claims.map((x) =>
                    x.id === c.id ? { ...x, text: e.target.value, origin: "human_authored" } : x,
                  ),
                })
              }
            />
          </label>
          <label>
            Source / evidence / qualification
            <textarea
              value={c.source}
              onChange={(e) =>
                edit(0, {
                  claims: project.claims.map((x) =>
                    x.id === c.id ? { ...x, source: e.target.value } : x,
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
