import SpatialTools from "./SpatialTools";
import ObjectIntent from "./ObjectIntent";
import TextTools from "./TextTools";
import RhythmTools from "./RhythmTools";
import Help from "./Help";
import { toolDefinitions } from "./ToolArc";
import SelectionToolbar from "./SelectionToolbar";
import { cameraPreset } from "./camera.mjs";
import ViewTools from "./ViewTools";
import type { Dispatch, SetStateAction } from "react";
import {
  editObject,
  ungroup,
  groupObjects,
  applySuggestion,
  sceneAt,
  type Scene,
  type SceneObject,
  type Evaluated,
} from "./scene.mjs";
type Props = {
  previewMoment: () => void;
  previousTiming?: { enter: number; exit: number };
  object: SceneObject;
  pose: Evaluated;
  project: Scene;
  frame: number;
  select: (id: string) => void;
  dismiss: () => void;
  tab: string;
  setSelected: (id: string) => void;
  setTab: (tab: string) => void;
  change: (fn: () => Scene) => void;
  partners: string[];
  setPartners: Dispatch<SetStateAction<string[]>>;
  scope: string;
  setScope: (s: string) => void;
};
export default function ObjectTools({
  previewMoment,
  previousTiming,
  object,
  pose,
  project,
  frame,
  select,
  dismiss,
  tab,
  setSelected,
  setTab,
  change,
  partners,
  setPartners,
  scope,
  setScope,
}: Props) {
  const setting = sceneAt(project, frame);
  const viewOwner = object.views ? object : setting;
  return (
    <section className="live-context" aria-label="Object tools">
      <SelectionToolbar
        object={{
          ...object,
          label:
            object.kind === "word"
              ? project.words.find((w) => w.id === object.wordId)?.text || object.id
              : object.label,
        }}
        hasViews={!!viewOwner.views}
        active={tab}
        choose={(tool) => {
          setSelected(object.id);
          setTab(tool);
        }}
        dismiss={dismiss}
      />
      <SpatialTools project={project} object={object} change={change} />
      {object.kind === "character" && (
        <label className="character-visibility">
          <input
            type="checkbox"
            aria-label="Character visible"
            checked={!object.hidden}
            onChange={(e) =>
              change(() => editObject(project, object.id, { hidden: !e.target.checked }))
            }
          />
          Character on
        </label>
      )}
      {tab && (
        <section className="live-tool-dock" aria-label={`${tab} control`}>
          <div className="context-heading">
            <strong>
              {object.kind === "word"
                ? project.words.find((w) => w.id === object.wordId)?.text
                : object.label || object.id}{" "}
              · {tab}
            </strong>
            <button aria-label="Close focused control" onClick={() => setTab("")}>
              ×
            </button>
          </div>
          <Help text={toolDefinitions[tab]} />
          {tab === "intent" && (
            <ObjectIntent documentId={project.documentId} objectId={object.id} />
          )}
          {tab === "text" && <TextTools project={project} object={object} change={change} />}
          {tab === "rhythm" && <RhythmTools project={project} object={object} change={change} />}
          {tab === "view" && (
            <ViewTools owner={viewOwner} project={project} frame={frame} change={change} />
          )}
          {tab === "camera" && (
            <label>
              Camera for {setting.title}
              <Help text="Move this setting, its props and words together. This is different from dragging one object." />
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
          )}
          {tab === "position" && object.screenFor && (
            <>
              <p>
                This browser is registered to the computer screen. Move the complete assembly to
                keep the aperture aligned.
              </p>
              <button onClick={() => select(object.parentId!)}>
                Select whole monitor and browser
              </button>
            </>
          )}
          {tab === "position" && !object.screenFor && (
            <>
              <p>
                {object.textPlane
                  ? "Drag on the monitor. X/Y and arrow steps use the monitor’s own coordinates."
                  : "Drag the object · arrows move 1 px · Shift 10"}
              </p>
              <div className="live-fields">
                <label>
                  X
                  <input
                    aria-label="Object X"
                    type="number"
                    value={object.x}
                    onChange={(e) =>
                      change(() => editObject(project, object.id, { x: Number(e.target.value) }))
                    }
                  />
                </label>
                <label>
                  Y
                  <input
                    aria-label="Object Y"
                    type="number"
                    value={object.y}
                    onChange={(e) =>
                      change(() => editObject(project, object.id, { y: Number(e.target.value) }))
                    }
                  />
                </label>
              </div>
              {object.kind === "character" && (
                <label>
                  Character size
                  <input
                    aria-label="Character size"
                    type="number"
                    min="80"
                    max="400"
                    step="5"
                    value={object.width}
                    onChange={(e) => {
                      const width = Number(e.target.value);
                      const height = (object.height * width) / object.width;
                      change(() =>
                        editObject(project, object.id, {
                          width,
                          height,
                          y: object.y + object.height - height,
                        }),
                      );
                    }}
                  />
                </label>
              )}
              {object.kind === "group" && (
                <label>
                  Group scale
                  <input
                    aria-label="Group scale"
                    type="number"
                    min="0.1"
                    max="4"
                    step="0.05"
                    value={object.scale ?? 1}
                    onChange={(e) =>
                      change(() =>
                        editObject(project, object.id, { scale: Number(e.target.value) }),
                      )
                    }
                  />
                </label>
              )}
            </>
          )}
          {tab === "group" && (
            <>
              {object.parentId && (
                <button onClick={() => select(object.parentId!)}>
                  Select whole{" "}
                  {object.parentId.startsWith("browser") ? "monitor and browser" : "group"}
                </button>
              )}
              {object.kind === "group" && (
                <button
                  onClick={() => {
                    change(() => ungroup(project, object.id));
                    dismiss();
                  }}
                >
                  Ungroup
                </button>
              )}
              <button
                onClick={() => {
                  setSelected(object.id);
                  setPartners((p) => (p.includes(object.id) ? p : p.concat(object.id)));
                }}
              >
                Add to group selection
              </button>
              {partners.length > 0 && (
                <small>{partners.length} chosen · Shift-select a sibling</small>
              )}
              {partners.length >= 2 && (
                <button
                  onClick={() => {
                    change(() => groupObjects(project, partners));
                    setPartners([]);
                    dismiss();
                  }}
                >
                  Group chosen objects
                </button>
              )}
            </>
          )}
          {tab === "timing" && (
            <>
              <Help text="Move object in time shifts the entire selected group earlier or later, keeping its parts together. It does not move the song clock. Appearance/disappearance adjusts one edge. Use Preview this moment, then Play, to hear the result." />
              <p>
                {pose.enter} → {pose.exit} frames
                {object.cue ? ` · cue ${object.cue.wordId}` : ""}
              </p>
              {previousTiming && (
                <small>
                  Before last edit: {(previousTiming.enter / 30).toFixed(2)}–
                  {(previousTiming.exit / 30).toFixed(2)}s · Now: {(pose.enter / 30).toFixed(2)}–
                  {(pose.exit / 30).toFixed(2)}s
                </small>
              )}
              {object.limb && object.animation && (
                <fieldset>
                  <legend>Arm action</legend>
                  {(["startFrame", "endFrame"] as const).map((edge) => (
                    <label key={edge}>
                      {edge === "startFrame" ? "Movement starts" : "Contact frame"}
                      <input
                        type="number"
                        aria-label={edge === "startFrame" ? "Movement starts" : "Contact frame"}
                        value={object.animation![edge]}
                        onChange={(e) =>
                          change(() =>
                            editObject(project, object.id, {
                              animation: { ...object.animation!, [edge]: Number(e.target.value) },
                            }),
                          )
                        }
                      />
                    </label>
                  ))}
                  <p>Keep the saved-result cue after contact when changing this action.</p>
                </fieldset>
              )}
              <button onClick={previewMoment}>Preview this moment</button>
              <label>
                What should the dial change?
                <select
                  aria-label="What should the dial change?"
                  value={scope}
                  onChange={(e) => {
                    setSelected(object.id);
                    setScope(e.target.value);
                  }}
                >
                  <option value="song">Move through song</option>
                  {object.kind !== "group" && (
                    <>
                      <option value="entry">When it appears</option>
                      <option value="exit">When it disappears</option>
                    </>
                  )}
                  <option value="move">Move object in time</option>
                </select>
              </label>
              <p>
                {scope === "song"
                  ? "Dial seeks the recording."
                  : "Dial edits this object; song clock stays fixed."}
              </p>
            </>
          )}
          {tab === "note" && (
            <>
              <label>
                Object note
                <textarea
                  maxLength={2000}
                  value={object.note}
                  onChange={(e) =>
                    change(() =>
                      editObject(project, object.id, {
                        note: e.target.value,
                        noteFrame: frame,
                      }),
                    )
                  }
                />
              </label>
              {object.kind === "word" && (
                <>
                  <label>
                    Replacement suggestion
                    <input
                      maxLength={35}
                      value={object.suggestion}
                      onChange={(e) =>
                        change(() => editObject(project, object.id, { suggestion: e.target.value }))
                      }
                    />
                  </label>
                  <button
                    disabled={!object.suggestion.trim()}
                    onClick={() => change(() => applySuggestion(project, object.id))}
                  >
                    Apply display word
                  </button>
                  <small>Audio and Departments lyrics are unchanged.</small>
                </>
              )}
            </>
          )}
        </section>
      )}
    </section>
  );
}
