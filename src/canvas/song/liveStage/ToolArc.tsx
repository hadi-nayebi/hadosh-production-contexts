import { useEffect, useRef, useState } from "react";
import type { SceneObject } from "./scene.mjs";
export const toolDefinitions: Record<string, string> = {
  intent: "Trace this component to its lyric cue, purpose, intended action and observed evidence.",
  text: "Style recorded lyrics or separate explanatory text without changing the audio transcript.",
  rhythm: "Give this prop its own restrained response to editable audio-derived beat candidates.",
  position:
    "Move this object on the picture. Drag it, or enter its horizontal and vertical position.",
  timing:
    "Choose when this object appears or disappears, or move it earlier or later without moving the song clock.",
  note: "Leave a note on this object at this moment. A word may also have a proposed display correction.",
  group:
    "Select its whole group, or combine chosen siblings so their positions and timing move together.",
  view: "Choose a named image view at this song frame. Other views keep their registered positions.",
  camera: "Move or hold the whole setting, including its words and props, together.",
};
export default function ToolArc({
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
  const tools = [
    ...(object.rhythm ? ["rhythm"] : []),
    ...(object.textStyle ? ["text"] : []),
    "position",
    "timing",
    "note",
    "group",
    ...(hasViews ? ["view"] : []),
    "camera",
  ];
  const [center, setCenter] = useState(0);
  const ref = useRef<HTMLDivElement>(null),
    lastWheel = useRef(0),
    touch = useRef<number | null>(null);
  const rotate = (direction: number) =>
    setCenter((c) => (c + direction + tools.length) % tools.length);
  useEffect(() => {
    const node = ref.current;
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (Math.abs(e.deltaY) < 2 || Date.now() - lastWheel.current < 160) return;
      lastWheel.current = Date.now();
      rotate(e.deltaY > 0 ? 1 : -1);
    };
    node?.addEventListener("wheel", wheel, { passive: false });
    return () => node?.removeEventListener("wheel", wheel);
  }, [tools.length]);
  return (
    <div
      ref={ref}
      className="tool-arc"
      role="toolbar"
      aria-label={`Tools for ${object.label || object.id}`}
      onKeyDown={(e) => {
        if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          rotate(["ArrowDown", "ArrowRight"].includes(e.key) ? 1 : -1);
          requestAnimationFrame(() =>
            ref.current?.querySelector<HTMLButtonElement>(".arc-focus")?.focus(),
          );
        }
      }}
      onTouchStart={(e) => {
        touch.current = e.touches[0].clientY;
      }}
      onTouchEnd={(e) => {
        if (touch.current !== null) {
          const dy = touch.current - e.changedTouches[0].clientY;
          if (Math.abs(dy) > 28) rotate(dy > 0 ? 1 : -1);
        }
        touch.current = null;
      }}
    >
      <button className="arc-close" aria-label="Dismiss object tools" onClick={dismiss}>
        ×
      </button>
      <button className="arc-prev" aria-label="Previous tool" onClick={() => rotate(-1)}>
        ↑
      </button>
      {[-2, -1, 0, 1, 2].map((offset) => {
        const name = tools[(center + offset + tools.length) % tools.length];
        return (
          <button
            key={name}
            className={`arc-item ${offset === 0 ? "arc-focus" : ""}`}
            aria-label={name}
            aria-pressed={active === name}
            style={{
              top: 112 + offset * 40,
              left: 26 + (2 - Math.abs(offset)) * 24,
              opacity: 1 - Math.abs(offset) * 0.2,
            }}
            onClick={() => {
              setCenter(tools.indexOf(name));
              choose(name);
            }}
            aria-describedby={`tool-definition-${name}`}
          >
            <span>{name}</span>
            <span id={`tool-definition-${name}`} role="tooltip">
              {toolDefinitions[name]}
            </span>
          </button>
        );
      })}
      <button className="arc-next" aria-label="Next tool" onClick={() => rotate(1)}>
        ↓
      </button>
    </div>
  );
}
