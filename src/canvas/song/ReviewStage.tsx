import { download } from "./export";
import { isApproved } from "./model";
import type { StageProps } from "./stageTypes";
export default function ReviewStage({
  project,
  files,
  commit,
  edit,
  urls,
  clock,
  setClock,
  currentScene,
  currentCue,
  exportHTML,
}: Pick<
  StageProps,
  | "project"
  | "files"
  | "commit"
  | "edit"
  | "urls"
  | "clock"
  | "setClock"
  | "currentScene"
  | "currentCue"
  | "exportHTML"
>) {
  return (
    <>
      <div className="song-preview" style={{ background: currentScene?.color || "#263d44" }}>
        <small>HTML PERFORMANCE / {clock.toFixed(2)}s</small>
        <h3>{currentScene?.title || project.title}</h3>
        <p>
          {currentScene?.detail ||
            "Attach the selected audio and press Play to review the timed scenes."}
        </p>
        <strong>{project.lines.find((l) => l.id === currentCue?.line)?.text}</strong>
      </div>
      {urls[project.selected] ? (
        <audio
          controls
          src={urls[project.selected]}
          onTimeUpdate={(e) => setClock(e.currentTarget.currentTime)}
          onSeeked={(e) => setClock(e.currentTarget.currentTime)}
        />
      ) : (
        <p>Reattach the selected take in Music before reviewing playback.</p>
      )}
      <fieldset>
        <legend>Final review</legend>
        {[
          "The lyrics preserve the source claims and their qualifications.",
          "The selected audio is clear and its lyric timings match.",
          "The scenes clarify the concept and the playback has been inspected.",
        ].map((c, i) => (
          <label className="song-check" key={c}>
            <input
              type="checkbox"
              checked={project.checks[i]}
              onChange={(e) =>
                commit({
                  ...project,
                  checks: project.checks.map((v, j) => (j === i ? e.target.checked : v)),
                  approved: project.approved.map((v, j) => (j === 5 ? null : v)),
                })
              }
            />
            {c}
          </label>
        ))}
      </fieldset>
      <label>
        Review notes
        <textarea value={project.notes} onChange={(e) => edit(5, { notes: e.target.value })} />
      </label>
      <div className="song-actions">
        <button disabled={!isApproved(project, 5)} onClick={() => exportHTML(false)}>
          Export HTML · attach audio later
        </button>
        <button
          disabled={!isApproved(project, 5) || !files[project.selected]}
          onClick={() => exportHTML(true)}
        >
          Export HTML with audio
        </button>
        <button onClick={() => download("canvas-song.json", JSON.stringify(project, null, 2))}>
          Export production context
        </button>
      </div>
    </>
  );
}
