import { roomDefaults, roomBounds, roomEvents, snap, type RoomDirection } from "./roomDirection";
import type { Annotation } from "./audioAnnotation";
import {useState} from "react";
export default function RoomControls({
  annotation,
  direction = roomDefaults,
  onChange,
  onSeek,
}: {
  annotation: Annotation;
  direction?: RoomDirection;
  onChange: (d: RoomDirection) => void;
  onSeek: (t: number) => void;
}) {
  const b = roomBounds(annotation);
  const [reviewTime,setReviewTime]=useState(32);
  if (!b) return null;
  return (
    <details className="opening-controls">
      <summary>Polish the room</summary>
      <label>Review time <input aria-label="Room review time" type="number" min="0" max={annotation.duration} step=".05" value={reviewTime} onChange={e=>setReviewTime(Number(e.target.value))}/></label>
      <button onClick={()=>onSeek(reviewTime)}>Review this moment</button>
      <div className="opening-review-jumps">
        {[
          ["Earth → room", snap(b.start)],
          ["Room", b.start + 0.6],
          ["Browsers", 45],
          ["Buttons", 52],
          ["Door", 61.8],
        ].map(([l, t]) => (
          <button key={l} onClick={() => onSeek(Number(t))}>
            {l}
          </button>
        ))}
      </div>
      <div className="opening-control-grid">
        {(
          [
            ["zoom", "Camera zoom", 1, 1.5],
            ["pan", "Camera pan", -8, 8],
            ["turnStart", "Turn begins", 55, 61],
            ["turnEnd", "Turn ends", 61, 63.68],
            ["fade", "Image dissolve", 0.1, 2],
            ["bounce", "Rhythm motion", 0, 2],
            ["wordScale", "Word size", 0.3, 2],
          ] as const
        ).map(([k, l, min, max]) => (
          <label key={k}>
            {l}
            <input
              type="range"
              aria-label={l}
              min={min}
              max={max}
              step=".01"
              value={direction[k]}
              onChange={(e) => onChange({ ...direction, [k]: Number(e.target.value) })}
            />
            <output>{direction[k].toFixed(2)}</output>
          </label>
        ))}
        {(["x", "y", "scale"] as const).map((k) => (
          <label key={k}>
            Device {k}
            <input
              aria-label={"Room device " + k}
              type="range"
              min={k === "scale" ? 0.5 : 0}
              max={k === "scale" ? 1.5 : 100}
              step=".01"
              value={direction.placements.device[k]}
              onChange={(e) =>
                onChange({
                  ...direction,
                  placements: {
                    ...direction.placements,
                    device: { ...direction.placements.device, [k]: Number(e.target.value) },
                  },
                })
              }
            />
          </label>
        ))}
      </div>
      <details>
        <summary>Tempo entrances</summary>
        {roomEvents(annotation, direction).map((e) => (
          <label key={e.id}>
            {e.id}
            <input
              aria-label={e.id + " entrance"}
              type="number"
              min={b.start}
              max={b.end}
              step=".01"
              value={e.time.toFixed(3)}
              onChange={(v) => {
                const time = Number(v.target.value);
                if (time >= b.start && time < b.end)
                  onChange({ ...direction, events: { ...direction.events, [e.id]: time } });
              }}
            />
          </label>
        ))}
      </details>
      <p>Character, chair and keyboard share one pose to preserve physical contact.</p>
    </details>
  );
}
