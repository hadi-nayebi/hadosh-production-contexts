import ProductionIntervals from "./ProductionIntervals";
import { cameraPreset } from "./camera.mjs";
import Help from "./Help";
import ViewTools from "./ViewTools";
import { splitScene, type Scene, type Setting } from "./scene.mjs";
type Props = {
  setting: Setting;
  setScenesOpen: (v: boolean) => void;
  project: Scene;
  seek: (n: number) => void;
  setBrief: (s: string) => void;
  brief: string;
  frame: number;
  change: (fn: () => Scene) => void;
};
export default function SceneNavigator({
  setting,
  setScenesOpen,
  project,
  seek,
  setBrief,
  brief,
  frame,
  change,
}: Props) {
  return (
    <section className="live-scenes" aria-label="Scene navigation">
      <div className="context-heading">
        <strong>{setting.title}</strong>
        <button onClick={() => setScenesOpen(false)}>×</button>
      </div>
      <p>{setting.description}</p>
      {setting.cutEvidence && (
        <details>
          <summary>
            Cut timing evidence · {setting.cutEvidence.score.toFixed(1)}/100 · estimated
          </summary>
          <p>
            Cut {(setting.start / 30).toFixed(3)}s · observed beat{" "}
            {setting.cutEvidence.beatSeconds.toFixed(3)}s · distance{" "}
            {setting.cutEvidence.beatDistanceMs.toFixed(1)}ms.
          </p>
          <p>
            Low / mid / high spectral flux:{" "}
            {Object.values(setting.cutEvidence.frequencyBands)
              .map((v) => v.toFixed(5))
              .join(" / ")}
            . Bands:45–220 /300–2200 /2500–7000Hz.
          </p>
          <p>
            Lyric cues: {setting.cutEvidence.lyricPhraseIds.join(", ") || "instrumental interval"}.
            Semantic fit and visible action remain unverified. Detail work is locked.
          </p>
        </details>
      )}
      <ProductionIntervals project={project} change={change} />
      {project.documentId.startsWith("full-song-") && (
        <label>
          Transition into this scene
          <select
            aria-label="Transition into this scene"
            value={setting.boundaryTransitionFrames ?? 18}
            onChange={(e) => {
              const frames = Number(e.target.value);
              change(() => ({
                ...project,
                scenes: project.scenes.map((s) =>
                  s.id === setting.id ? { ...s, boundaryTransitionFrames: frames } : s,
                ),
              }));
            }}
          >
            <option value={0}>Clean cut</option>
            <option value={18}>Dissolve · 0.6 seconds</option>
            {setting.boundaryTransitionFrames !== undefined &&
              ![0, 18].includes(setting.boundaryTransitionFrames) && (
                <option value={setting.boundaryTransitionFrames}>
                  Custom · {setting.boundaryTransitionFrames} frames
                </option>
              )}
          </select>
        </label>
      )}
      <label>
        Camera motion{" "}
        <Help text="Camera motion moves the entire illustrated setting, its props and words together. Object dragging moves only the selected item. Hold keeps the scene still." />
        <select
          aria-label="Camera motion"
          value=""
          onChange={(e) => change(() => cameraPreset(project, setting.id, e.target.value))}
        >
          <option value="" disabled>
            Choose motion
          </option>
          <option value="hold">Hold still</option>
          <option value="push">Gentle push in</option>
          <option value="left">Toward the left</option>
          <option value="right">Toward the right</option>
        </select>
      </label>
      <ViewTools owner={setting} project={project} frame={frame} change={change} />
      <div className="scene-neighbors">
        {project.scenes.map((s) => (
          <button
            key={s.id}
            aria-current={s.id === setting.id ? "step" : undefined}
            onClick={() => {
              seek(s.start);
              setBrief("");
            }}
          >
            {s.title}
            <small>
              {(s.start / 30).toFixed(2)}–{(s.end / 30).toFixed(2)}s
            </small>
          </button>
        ))}
      </div>
      <label>
        New setting after this boundary
        <textarea
          placeholder="Describe a setting. No image will be generated."
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          maxLength={2000}
        />
      </label>
      <p>
        Split at {(frame / 30).toFixed(2)}s. Current setting: {(setting.start / 30).toFixed(2)}–
        {(frame / 30).toFixed(2)}s. New brief: {(frame / 30).toFixed(2)}–
        {(setting.end / 30).toFixed(2)}s. Audio and object cues stay fixed; the new setting starts
        empty, awaiting an asset.
      </p>
      <button
        disabled={!brief.trim() || frame <= setting.start || frame >= setting.end}
        onClick={() => {
          change(() => splitScene(project, setting.id, frame, brief));
          setBrief("");
        }}
      >
        Apply interval split
      </button>
    </section>
  );
}
