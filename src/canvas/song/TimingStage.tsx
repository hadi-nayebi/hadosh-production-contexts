import { isApproved } from "./model";
import type { StageProps } from "./stageTypes";
export default function TimingStage({
  project,
  edit,
  urls,
  audio,
  clock,
  setClock,
  seedTiming,
}: Pick<StageProps, "project" | "edit" | "urls" | "audio" | "clock" | "setClock" | "seedTiming">) {
  return (
    <>
      <div className="song-player">
        {urls[project.selected] ? (
          <audio
            ref={audio}
            controls
            src={urls[project.selected]}
            onTimeUpdate={(e) => setClock(e.currentTarget.currentTime)}
          />
        ) : (
          <p>Select and reattach a take in Music to listen and align lyrics.</p>
        )}
        <p>Playhead: {clock.toFixed(2)} seconds</p>
      </div>
      <button disabled={!isApproved(project, 2) || !project.lines.length} onClick={seedTiming}>
        Create provisional timing
      </button>
      {project.lines.map((l) => {
        const c = project.cues.find((c) => c.line === l.id);
        return (
          <article className="song-card" key={l.id}>
            <p>{l.text}</p>
            {c ? (
              <div className="song-two">
                {(["start", "end"] as const).map((k) => (
                  <label key={k}>
                    {k === "start" ? "Start" : "End"} (seconds)
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={c[k]}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        if (Number.isFinite(value) && value >= 0)
                          edit(3, {
                            cues: project.cues.map((x) =>
                              x.line === l.id ? { ...x, [k]: value } : x,
                            ),
                          });
                      }}
                    />
                    <button
                      disabled={!urls[project.selected]}
                      onClick={() =>
                        edit(3, {
                          cues: project.cues.map((x) =>
                            x.line === l.id ? { ...x, [k]: Number(clock.toFixed(2)) } : x,
                          ),
                        })
                      }
                    >
                      Set {k} from playhead
                    </button>
                  </label>
                ))}
              </div>
            ) : (
              <small>Create provisional timing first.</small>
            )}
          </article>
        );
      })}
    </>
  );
}
