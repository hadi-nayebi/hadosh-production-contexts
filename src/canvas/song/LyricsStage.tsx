import { download } from "./export";
import { isApproved, packet, uid } from "./model";
import type { StageProps } from "./stageTypes";
export default function LyricsStage({
  project,
  edit,
  busy,
  requestLyrics,
}: Pick<StageProps, "project" | "edit" | "busy" | "requestLyrics">) {
  return (
    <>
      <div className="song-actions">
        <button disabled={busy || !isApproved(project, 0)} onClick={requestLyrics}>
          {busy ? "Sending…" : "Request lyric draft from CLI agent"}
        </button>
        <button
          onClick={() =>
            download("song-agent-request.json", JSON.stringify(packet(project), null, 2))
          }
        >
          Download context packet
        </button>
        <button
          disabled={!project.claims.length}
          onClick={() =>
            edit(1, {
              lines: [
                ...project.lines,
                {
                  id: uid(),
                  section: "Verse",
                  text: "",
                  claim: project.claims[0].id,
                  origin: "human_authored",
                },
              ],
            })
          }
        >
          Add lyric line
        </button>
      </div>
      <p className="song-muted">
        Agent drafts return through project JSON import. You can write and adjust every line
        directly here.
      </p>
      {project.lines.map((l, i) => (
        <article className="song-card" key={l.id}>
          <div className="song-row">
            <span className="song-tag">
              Line {i + 1} · {l.origin.replaceAll("_", " ")}
            </span>
            <button
              onClick={() =>
                edit(1, {
                  lines: project.lines.filter((x) => x.id !== l.id),
                  cues: project.cues.filter((c) => c.line !== l.id),
                  scenes: project.scenes.filter((s) => s.cue !== l.id),
                  arrangement: project.arrangement?.map((s) => ({
                    ...s,
                    lines: s.lines.filter((id) => id !== l.id),
                  })),
                })
              }
            >
              Remove line
            </button>
          </div>
          <div className="song-two">
            <label>
              Section
              <select
                value={l.section}
                onChange={(e) =>
                  edit(1, {
                    lines: project.lines.map((x) =>
                      x.id === l.id ? { ...x, section: e.target.value } : x,
                    ),
                  })
                }
              >
                {Array.from(
                  new Set([l.section, "Intro", "Verse", "Pre-chorus", "Chorus", "Bridge", "Outro"]),
                ).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Claim behind this line
              <select
                value={l.claim}
                onChange={(e) =>
                  edit(1, {
                    lines: project.lines.map((x) =>
                      x.id === l.id ? { ...x, claim: e.target.value } : x,
                    ),
                  })
                }
              >
                {project.claims.map((c, i) => (
                  <option key={c.id} value={c.id}>
                    Claim {i + 1}: {c.text.slice(0, 70)}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Lyric
            <textarea
              value={l.text}
              onChange={(e) =>
                edit(1, {
                  lines: project.lines.map((x) =>
                    x.id === l.id ? { ...x, text: e.target.value, origin: "human_authored" } : x,
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
