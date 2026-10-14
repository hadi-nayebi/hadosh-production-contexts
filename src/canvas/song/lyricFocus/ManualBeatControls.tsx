import { useEffect, useState } from "react";
import type { Annotation } from "./audioAnnotation";
import type { Container, Lane } from "./audioAnchors";
import { addManualBeat, setManualBeatRemoved } from "./manualBeat";

export default function ManualBeatControls({
  annotation,
  sections,
  lanes,
  initialTime,
  disabled,
  onSave,
  onAdded,
  onDirty,
}: {
  annotation: Annotation;
  sections: Container[];
  lanes: Lane[];
  initialTime: number;
  disabled: boolean;
  onSave: (a: Annotation) => boolean | Promise<boolean>;
  onAdded: (id: string, time: number) => void;
  onDirty: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false),
    [lane, setLane] = useState(""),
    [time, setTime] = useState(""),
    [error, setError] = useState("");
  useEffect(() => {
    onDirty(open);
    return () => onDirty(false);
  }, [open, onDirty]);
  if (!lanes.length || !sections.length) return null;
  return (
    <div className="manual-beat-controls">
      {!open ? (
        <button
          aria-label="Add beat"
          title="Add beat"
          disabled={disabled}
          onClick={async () => {
            setTime(String(initialTime));
            setLane("");
            setError("");
            setOpen(true);
          }}
        >
          ♩+
        </button>
      ) : (
        <div role="group" aria-label="Add manual beat">
          <p>Manual marker · approval pending. Choose its lane and time.</p>
          <label>
            Lane{" "}
            <select
              aria-label="Manual beat lane"
              value={lane}
              onChange={(e) => setLane(e.target.value)}
            >
              <option value="">Choose lane</option>
              {lanes.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Seconds{" "}
            <input
              aria-label="Manual beat seconds"
              type="number"
              step="0.01"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <button
            disabled={!lane || !time.trim()}
            onClick={async () => {
              try {
                const result = addManualBeat(annotation, sections, lanes, lane, Number(time));
                if (await onSave(result.annotation)) {
                  setOpen(false);
                  onAdded(result.id, Number(time));
                } else setError("Beat could not be saved. Your fields are retained.");
              } catch (e) {
                setError(e instanceof Error ? e.message : String(e));
              }
            }}
          >
            Save manual beat
          </button>
          <button
            onClick={async () => {
              setOpen(false);
              setError("");
            }}
          >
            Cancel beat
          </button>
          {error && <p role="alert">{error}</p>}
        </div>
      )}
      {!open && annotation.review?.rhythm.some((r) => r.origin === "manual" && r.removed) && (
        <details>
          <summary>Removed manual beats</summary>
          {annotation.review.rhythm
            .filter((r) => r.origin === "manual" && r.removed)
            .map((r) => (
              <button
                key={r.id}
                disabled={disabled}
                onClick={async () => {
                  if (await onSave(setManualBeatRemoved(annotation, r.id, false)))
                    onAdded(r.id, r.time);
                }}
              >
                Restore {r.label} · {r.time.toFixed(3)}s
              </button>
            ))}
        </details>
      )}
    </div>
  );
}
