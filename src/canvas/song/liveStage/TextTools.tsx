import { editObject, type Scene, type SceneObject } from "./scene.mjs";
export default function TextTools({
  project,
  object,
  change,
}: {
  project: Scene;
  object: SceneObject;
  change: (fn: () => Scene) => void;
}) {
  const style = object.textStyle;
  if (!style) return null;
  const patch = (v: Partial<typeof style>) =>
    change(() => editObject(project, object.id, { textStyle: { ...style, ...v } }));
  return (
    <>
      <p>
        {object.role === "lyric"
          ? "Recorded lyric · audio text unchanged"
          : "Explanatory scene text · separate from lyrics"}
      </p>
      {object.role === "explanatory" && (
        <label>
          Explanation
          <input
            aria-label="Explanatory text"
            value={object.text || ""}
            maxLength={120}
            onChange={(e) => change(() => editObject(project, object.id, { text: e.target.value }))}
          />
        </label>
      )}
      {object.newspaper && (
        <>
          <label>
            Newspaper date
            <input
              aria-label="Newspaper date"
              value={object.newspaper.date}
              maxLength={120}
              onChange={(e) =>
                change(() =>
                  editObject(project, object.id, {
                    newspaper: { ...object.newspaper!, date: e.target.value },
                  }),
                )
              }
            />
          </label>
          <label>
            Newspaper context
            <textarea
              aria-label="Newspaper context"
              value={object.newspaper.context}
              maxLength={120}
              onChange={(e) =>
                change(() =>
                  editObject(project, object.id, {
                    newspaper: { ...object.newspaper!, context: e.target.value },
                  }),
                )
              }
            />
          </label>
        </>
      )}
      <label>
        Typeface
        <select
          aria-label="Text typeface"
          value={style.family}
          onChange={(e) => patch({ family: e.target.value as typeof style.family })}
        >
          <option value="sans">Sans</option>
          <option value="serif">Serif</option>
          <option value="mono">Monospace</option>
        </select>
      </label>
      <label>
        Text size
        <input
          aria-label="Text size"
          type="number"
          min="12"
          max="72"
          value={style.fontSize}
          onChange={(e) => patch({ fontSize: Number(e.target.value) })}
        />
      </label>
      <label>
        Weight
        <select
          aria-label="Text weight"
          value={style.weight}
          onChange={(e) => patch({ weight: Number(e.target.value) })}
        >
          {[400, 600, 700, 800, 900].map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
      </label>
      <label>
        Anchor
        <select
          aria-label="Text anchor"
          value={object.textAnchor?.objectId || ""}
          onChange={(e) => {
            const n = project.objects.find((o) => o.id === e.target.value);
            change(() =>
              editObject(project, object.id, {
                textAnchor: n
                  ? {
                      objectId: n.id,
                      dx: (object.x - n.x) / (n.scale || 1),
                      dy: (object.y - n.y) / (n.scale || 1),
                    }
                  : undefined,
              }),
            );
          }}
        >
          <option value="">Scene position</option>
          {project.objects
            .filter(
              (o) =>
                o.kind === "character" &&
                project.scenes.some(
                  (s) => s.objectIds.includes(object.id) && s.objectIds.includes(o.id),
                ),
            )
            .map((o) => (
              <option key={o.id} value={o.id}>
                {o.label || o.id}
              </option>
            ))}
        </select>
      </label>
    </>
  );
}
