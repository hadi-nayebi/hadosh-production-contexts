import { partSectionIds } from "./production";
import ArrangementEditor from "./ArrangementEditor";
import { sunoLyrics } from "./toaster";
import { download } from "./export";
import { isApproved, packet } from "./model";
import type { StageProps } from "./stageTypes";
export default function MusicStage({
  project,
  edit,
  urls,
  attach,
}: Pick<StageProps, "project" | "edit" | "urls" | "attach">) {
  return (
    <>
      <label>
        Musical direction
        <textarea value={project.style} onChange={(e) => edit(2, { style: e.target.value })} />
      </label>
      <ArrangementEditor project={project} edit={edit} />
      <div className="song-provider">
        <h3>Music generation handoff</h3>
        <p>
          Download the lyrics and direction, generate candidates in your chosen music service, then
          attach the resulting audio. No music provider is connected to this dashboard yet.
        </p>
        <div className="song-actions">
          <button
            disabled={!isApproved(project, 1)}
            onClick={() =>
              download("song-production-request.json", JSON.stringify(packet(project), null, 2))
            }
          >
            Prepare generation packet
          </button>
          <label className="song-file">
            Add audio take
            <input
              type="file"
              accept="audio/*"
              disabled={!isApproved(project, 1)}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) attach(f);
                e.target.value = "";
              }}
            />
          </label>
        </div>
      </div>
      <div className="song-card">
        <h3>Copy to Suno Custom mode</h3>
        <label>
          Lyrics for Suno
          <textarea readOnly value={sunoLyrics(project)} rows={14} />
        </label>
        <div className="song-actions">
          <button onClick={() => download("suno-lyrics.txt", sunoLyrics(project))}>
            Download lyrics text
          </button>
          <button onClick={() => download("suno-style.txt", project.style)}>
            Download style text
          </button>
        </div>
        <p>
          Use the musical direction above as the style. Generate on your phone, then attach the
          returned audio here. Section labels guide structure; the generated take may differ.
        </p>
      </div>
      {project.arrangement?.some((s) => s.id === "tailA") && (
        <details className="song-card" open>
          <summary>
            <strong>Generate in parts · preferred first checkpoint</strong>
          </summary>
          <p>
            Part A: intro → first verse → instrumental break → chorus → instrumental turnaround.
            Audition the intro and vocal clarity. Then Extend the selected original in Suno from a
            clean musical boundary with Part B; use Get Whole Song for the combined result. Do not
            start an unrelated second song.
          </p>
          <label>
            Part A lyrics
            <textarea
              readOnly
              rows={12}
              value={sunoLyrics(project, partSectionIds(project, "A"))}
            />
          </label>
          <label>
            Part B extension lyrics
            <textarea
              readOnly
              rows={12}
              value={sunoLyrics(project, partSectionIds(project, "B"))}
            />
          </label>
          <p>
            If the opening keeps singing, first generate an Instrumental-only intro, choose a useful
            boundary, then Extend it with Part A starting at Verse 1. Prefer the original Suno song
            as the continuation source; upload your own exported seed only when needed.
          </p>
          <p>
            Use Replace Section for a local failure if your plan supports it. A same-style prompt is
            not a continuity guarantee; inspect the join, voice, motif and lyric fidelity.
          </p>
        </details>
      )}
      {project.takes.map((t) => (
        <article className="song-card" key={t.id}>
          <div className="song-row">
            <h3>{t.name}</h3>
            <span className="song-tag">
              Lyrics r{t.revision}
              {t.revision !== project.revisions[1] || t.style !== project.style
                ? " · OUTDATED"
                : ""}
            </span>
          </div>
          <label>
            Provider
            <input
              value={t.provider}
              onChange={(e) =>
                edit(2, {
                  takes: project.takes.map((x) =>
                    x.id === t.id ? { ...x, provider: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
          {urls[t.id] ? (
            <audio controls src={urls[t.id]} />
          ) : (
            <label className="song-file">
              Reattach {t.filename}
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) attach(f, t);
                  e.target.value = "";
                }}
              />
            </label>
          )}
          <label>
            Listening notes
            <textarea
              value={t.notes}
              onChange={(e) =>
                edit(2, {
                  takes: project.takes.map((x) =>
                    x.id === t.id ? { ...x, notes: e.target.value } : x,
                  ),
                })
              }
            />
          </label>
          <button
            disabled={t.revision !== project.revisions[1] || t.style !== project.style}
            className={t.id === project.selected ? "song-primary" : ""}
            onClick={() => edit(2, { selected: t.id, cues: [], scenes: [] })}
          >
            {t.id === project.selected ? "Selected take" : "Select this take"}
          </button>
        </article>
      ))}
    </>
  );
}
