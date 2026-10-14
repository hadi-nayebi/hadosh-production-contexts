import type { SceneObject } from "./scene.mjs";
import { toolDefinitions } from "./ToolArc";
export default function SelectionToolbar({
  object,
  hasViews,
  active,
  choose,
  dismiss,
}: {
  object: SceneObject;
  hasViews: boolean;
  active: string;
  choose: (id: string) => void;
  dismiss: () => void;
}) {
  const tools = object.spatial ? ["intent", "note"] : [
    "intent",
    ...(object.rhythm ? ["rhythm"] : []),
    ...(object.textStyle ? ["text"] : []),
    "position",
    "timing",
    ...(hasViews ? ["view"] : []),
    "group",
    "note",
    "camera",
  ];
  return (
    <div
      className="selection-toolbar"
      role="toolbar"
      aria-label={`Tools for ${object.label || object.id}`}
    >
      <strong>{object.label || object.id}</strong>
      {tools.map((name) => (
        <button
          key={name}
          aria-label={name}
          aria-pressed={active === name}
          title={toolDefinitions[name]}
          onClick={() => choose(active === name ? "" : name)}
        >
          {name}
        </button>
      ))}
      <button aria-label="Dismiss object tools" onClick={dismiss}>
        Deselect
      </button>
    </div>
  );
}
