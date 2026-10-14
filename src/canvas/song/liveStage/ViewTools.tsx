import type { Scene } from "./scene.mjs";
import { setDancePattern, setViewCue, viewAt, type ViewOwner } from "./views.mjs";
export default function ViewTools({
  owner,
  project,
  frame,
  change,
}: {
  owner: ViewOwner & { id: string };
  project: Scene;
  frame: number;
  change: (fn: () => Scene) => void;
}) {
  if (!owner.views) return null;
  const active = viewAt(owner, frame);
  return (
    <fieldset className="live-view-tools">
      <legend>Image view</legend>
      <label>
        View at current song frame
        <select
          aria-label="Image view"
          value={active?.id || ""}
          onChange={(e) => change(() => setViewCue(project, owner.id, frame, e.target.value))}
        >
          {owner.views.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>
      </label>
      <small>
        Changing the view adds a cue at frame {frame}; position and group anchors stay fixed.
      </small>
      {[2, 3].includes(owner.views.length) && owner.views.every((v) => v.rig?.floorAnchor) && (
        <button onClick={() => change(() => setDancePattern(project, owner.id))}>
          Apply phrase dance sequence
        </button>
      )}
      <details>
        <summary>{owner.viewCues?.length || 0} timed view changes</summary>
        {owner.viewCues?.map((c) => (
          <p key={c.frame}>
            {(c.frame / 30).toFixed(2)}s · {owner.views?.find((v) => v.id === c.viewId)?.name}
          </p>
        ))}
      </details>
    </fieldset>
  );
}
