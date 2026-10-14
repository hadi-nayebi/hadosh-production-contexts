import { useEffect, useRef, useState, type DragEvent, type MouseEvent } from "react";
import { formatTime, humanize } from "./format";
import type { ProductionComponent } from "./types";

export function ComponentCard({
  component,
  selected,
  stepMs,
  playheadMs,
  canMergePrevious,
  canMergeNext,
  onSelect,
  onUpdate,
  onNudge,
  onSplit,
  onMerge,
  onMove,
  onPlay,
  onSetBoundary,
  onDragStart,
  onDrop,
}: {
  component: ProductionComponent;
  selected: boolean;
  stepMs: number;
  playheadMs: number;
  canMergePrevious: boolean;
  canMergeNext: boolean;
  onSelect: () => void;
  onUpdate: (patch: Partial<ProductionComponent>) => void;
  onNudge: (target: "start" | "end" | "clip", deltaMs: number) => void;
  onSplit: (textOffset: number, splitMs: number) => void;
  onMerge: (direction: "previous" | "next") => void;
  onMove: (delta: number) => void;
  onPlay: () => void;
  onSetBoundary: (target: "start_ms" | "end_ms") => void;
  onDragStart: (event: DragEvent<HTMLElement>) => void;
  onDrop: (event: DragEvent<HTMLElement>) => void;
}) {
  const [draftText, setDraftText] = useState(component.text);
  const [draftSpeaker, setDraftSpeaker] = useState(component.speaker ?? "");
  const [draftStart, setDraftStart] = useState((component.start_ms / 1_000).toFixed(3));
  const [draftEnd, setDraftEnd] = useState((component.end_ms / 1_000).toFixed(3));
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => setDraftText(component.text), [component.text]);
  useEffect(() => setDraftSpeaker(component.speaker ?? ""), [component.speaker]);
  useEffect(() => setDraftStart((component.start_ms / 1_000).toFixed(3)), [component.start_ms]);
  useEffect(() => setDraftEnd((component.end_ms / 1_000).toFixed(3)), [component.end_ms]);

  const stop = (event: MouseEvent) => event.stopPropagation();
  const commitBoundary = (target: "start_ms" | "end_ms", value: string) => {
    const milliseconds = Math.max(0, Math.round(Number(value) * 1_000));
    if (!Number.isFinite(milliseconds)) {
      setDraftStart((component.start_ms / 1_000).toFixed(3));
      setDraftEnd((component.end_ms / 1_000).toFixed(3));
      return;
    }
    if (component[target] !== milliseconds) onUpdate({ [target]: milliseconds });
  };

  return (
    <article
      className={`canvas-component-card${selected ? " selected" : ""}${component.deleted ? " deleted" : ""}`}
      draggable={!component.deleted}
      onClick={onSelect}
      onDragStart={onDragStart}
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
      aria-label={`Component ${component.order + 1}: ${component.text || "empty text"}`}
    >
      <header>
        <div className="canvas-component-heading">
          <button
            type="button"
            className="canvas-drag-handle"
            aria-label={`Drag component ${component.order + 1}`}
            title="Drag to reorder"
            onClick={stop}
          >
            ⋮⋮
          </button>
          <span className="canvas-component-number">
            {String(component.order + 1).padStart(3, "0")}
          </span>
          <div>
            <strong>
              {formatTime(component.start_ms)} → {formatTime(component.end_ms)}
            </strong>
            <small>
              {formatTime(component.end_ms - component.start_ms)} · {humanize(component.origin)}
            </small>
          </div>
        </div>
        <button
          type="button"
          className={`canvas-review-toggle${component.reviewed ? " reviewed" : ""}`}
          aria-pressed={component.reviewed}
          onClick={(event) => {
            event.stopPropagation();
            onUpdate({ reviewed: !component.reviewed });
          }}
        >
          {component.reviewed ? "Reviewed" : "Mark reviewed"}
        </button>
      </header>

      <div className="canvas-component-grid">
        <label className="canvas-component-text-label" onClick={stop}>
          Editable transcript
          <textarea
            ref={textRef}
            value={draftText}
            onChange={(event) => setDraftText(event.target.value)}
            onBlur={() => {
              if (draftText !== component.text) onUpdate({ text: draftText });
            }}
          />
        </label>
        <label onClick={stop}>
          Imported speaker
          <input
            value={draftSpeaker}
            placeholder="Unassigned"
            onChange={(event) => setDraftSpeaker(event.target.value)}
            onBlur={() => {
              const speaker = draftSpeaker.trim() || null;
              if (speaker !== component.speaker) onUpdate({ speaker });
            }}
          />
        </label>
      </div>

      <details className="canvas-original-text" onClick={stop}>
        <summary>Original imported text</summary>
        <p>{component.original_text || "No original text was recorded."}</p>
      </details>

      <div className="canvas-boundary-editor" onClick={stop}>
        <div>
          <label>
            Start (seconds)
            <input
              inputMode="decimal"
              value={draftStart}
              onChange={(event) => setDraftStart(event.target.value)}
              onBlur={() => commitBoundary("start_ms", draftStart)}
            />
          </label>
          <div className="canvas-inline-actions">
            <button
              type="button"
              onClick={() => onNudge("start", -stepMs)}
              aria-label="Move start earlier"
            >
              −
            </button>
            <button
              type="button"
              onClick={() => onNudge("start", stepMs)}
              aria-label="Move start later"
            >
              +
            </button>
            <button type="button" onClick={() => onSetBoundary("start_ms")}>
              Use playhead
            </button>
          </div>
        </div>
        <div>
          <label>
            End (seconds)
            <input
              inputMode="decimal"
              value={draftEnd}
              onChange={(event) => setDraftEnd(event.target.value)}
              onBlur={() => commitBoundary("end_ms", draftEnd)}
            />
          </label>
          <div className="canvas-inline-actions">
            <button
              type="button"
              onClick={() => onNudge("end", -stepMs)}
              aria-label="Move end earlier"
            >
              −
            </button>
            <button
              type="button"
              onClick={() => onNudge("end", stepMs)}
              aria-label="Move end later"
            >
              +
            </button>
            <button type="button" onClick={() => onSetBoundary("end_ms")}>
              Use playhead
            </button>
          </div>
        </div>
        <div className="canvas-shift-controls">
          <span>Shift whole clip</span>
          <div className="canvas-inline-actions">
            <button type="button" onClick={() => onNudge("clip", -stepMs)}>
              ← {stepMs} ms
            </button>
            <button type="button" onClick={() => onNudge("clip", stepMs)}>
              {stepMs} ms →
            </button>
          </div>
        </div>
      </div>

      <footer onClick={stop}>
        <div className="canvas-primary-card-actions">
          <button type="button" className="canvas-strong-button" onClick={onPlay}>
            Play clip
          </button>
          <button
            type="button"
            onClick={() => {
              const offset =
                textRef.current?.selectionStart ?? Math.floor(component.text.length / 2);
              onSplit(offset, playheadMs);
            }}
            title="Split the text at the cursor and the audio at the current playhead"
          >
            Split at cursor + playhead
          </button>
        </div>
        <div className="canvas-secondary-card-actions">
          <button type="button" disabled={!canMergePrevious} onClick={() => onMerge("previous")}>
            Merge previous
          </button>
          <button type="button" disabled={!canMergeNext} onClick={() => onMerge("next")}>
            Merge next
          </button>
          <button type="button" onClick={() => onMove(-1)}>
            Move up
          </button>
          <button type="button" onClick={() => onMove(1)}>
            Move down
          </button>
          <button
            type="button"
            className={component.deleted ? "" : "canvas-danger-button"}
            onClick={() => onUpdate({ deleted: !component.deleted })}
          >
            {component.deleted ? "Restore" : "Delete"}
          </button>
        </div>
      </footer>
    </article>
  );
}
