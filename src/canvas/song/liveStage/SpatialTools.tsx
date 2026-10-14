import { editObject, type Scene, type SceneObject } from "./scene.mjs";
export default function SpatialTools({
  project,
  object,
  change,
}: {
  project: Scene;
  object: SceneObject;
  change: (fn: () => Scene) => void;
}) {
  if (!object.spatial) return null;
  return (
    <fieldset>
      <legend>World position · metres</legend>
      <p>
        Offsets apply to this shared object across all spatial shots. A camera cut keeps its
        position.
      </p>
      {["X", "Y", "Z"].map((axis, i) => (
        <label key={axis}>
          {axis}
          <input
            aria-label={`World ${axis}`}
            type="number"
            min={-5}
            max={5}
            step={0.02}
            value={object.spatial!.position[i]}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!Number.isFinite(value) || Math.abs(value) > 5) return;
              const position = [...object.spatial!.position] as [number, number, number];
              position[i] = value;
              change(() =>
                editObject(project, object.id, { spatial: { ...object.spatial!, position } }),
              );
            }}
          />
        </label>
      ))}
    </fieldset>
  );
}
