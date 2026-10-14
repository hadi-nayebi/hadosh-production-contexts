import Help from "./Help";
import { editObject, validateScene, type Scene, type SceneObject } from "./scene.mjs";
export default function RhythmTools({
  project,
  object,
  change,
}: {
  project: Scene;
  object: SceneObject;
  change: (fn: () => Scene) => void;
}) {
  const r = object.rhythm;
  if (!r || !project.rhythm) return null;
  const patch = (v: Partial<typeof r>) =>
    change(() => editObject(project, object.id, { rhythm: { ...r, ...v } }));
  return (
    <>
      <Help text="These pulses come from audio analysis, not final musical approval. Only detected transients near the estimated grid drive default accents; offbeats use nearby detected onsets. Hit strengths control amplitude. Change this prop's response independently of the camera. You can correct the shared beat frames below." />
      <label>
        <input
          type="checkbox"
          checked={r.enabled}
          onChange={(e) => patch({ enabled: e.target.checked })}
        />
        Respond to rhythm
      </label>
      <label>
        Pulse pattern
        <select
          aria-label="Pulse pattern"
          value={r.pattern === "offbeat" ? "offbeat" : String(r.every)}
          onChange={(e) =>
            patch(
              e.target.value === "offbeat"
                ? { pattern: "offbeat" }
                : { pattern: "beat", every: Number(e.target.value), phase: 0 },
            )
          }
        >
          <option value="1">Each estimated beat</option>
          <option value="2">Every second beat</option>
          <option value="4">Every fourth beat</option>
          <option value="offbeat">Between estimated beats</option>
        </select>
      </label>
      <label>
        Movement in pixels
        <input
          aria-label="Rhythm amplitude"
          type="number"
          min="0"
          max="20"
          value={r.amplitude}
          onChange={(e) => patch({ amplitude: Number(e.target.value) })}
        />
      </label>
      <label>
        Earlier / later in frames
        <input
          aria-label="Rhythm offset"
          type="number"
          min="-30"
          max="30"
          value={r.offsetFrames}
          onChange={(e) => patch({ offsetFrames: Number(e.target.value) })}
        />
      </label>
      <label>
        Hit intensity
        <input
          aria-label="Hit intensity"
          type="number"
          min="0"
          max="3"
          step="0.1"
          value={r.intensity ?? 1}
          onChange={(e) => patch({ intensity: Number(e.target.value) })}
        />
      </label>
      <label>
        Movement direction
        <select
          aria-label="Movement direction"
          value={r.axis}
          onChange={(e) => patch({ axis: e.target.value as "x" | "y" })}
        >
          <option value="y">Up / settle</option>
          <option value="x">Right / settle</option>
        </select>
      </label>
      <p>
        {project.rhythm.estimatedBpm} BPM estimate · {project.rhythm.status}
      </p>
      <details>
        <summary>Correct shared beat frames</summary>
        <p>
          Comma-separated frames in this 720-frame excerpt. Editing these affects all rhythm-enabled
          props, not lyrics or audio.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            change(() =>
              validateScene({
                ...project,
                revision: project.revision + 1,
                rhythm: {
                  ...project.rhythm!,
                  status: "manually adjusted; listening review required",
                  beatFrames: String(data.get("frames"))
                    .split(",")
                    .map((v) => Number(v.trim())),
                },
              }),
            );
          }}
        >
          <textarea
            name="frames"
            aria-label="Beat frames"
            defaultValue={project.rhythm.beatFrames.join(", ")}
            key={project.rhythm.beatFrames.join(",")}
          />
          <button>Apply beat correction</button>
        </form>
      </details>
    </>
  );
}
