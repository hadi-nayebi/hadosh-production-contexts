import { formatTime } from "./format";
import type { ProductionComponent } from "./types";

export function TimelineSection({
  components,
  selected,
  selectedId,
  playheadMs,
  durationMs,
  audioReady,
  onSelect,
  onPlay,
  onSetBoundary,
  onSeek,
  onNudgePlayhead,
}: {
  components: ProductionComponent[];
  selected: ProductionComponent | null;
  selectedId: string | null;
  playheadMs: number;
  durationMs: number;
  audioReady: boolean;
  onSelect: (id: string) => void;
  onPlay: (component: ProductionComponent) => void;
  onSetBoundary: (id: string, target: "start_ms" | "end_ms") => void;
  onSeek: (clientX: number) => void;
  onNudgePlayhead: (deltaMs: number) => void;
}) {
  return (
    <section className="canvas-timeline-section" aria-labelledby="canvas-timeline-title">
      <header>
        <div>
          <p className="eyebrow">Source map</p>
          <h2 id="canvas-timeline-title">Components on the audio timeline</h2>
        </div>
        <div className="canvas-transport-actions">
          <span>{formatTime(playheadMs)}</span>
          <button type="button" disabled={!selected} onClick={() => selected && onPlay(selected)}>
            Play selected
          </button>
          <button
            type="button"
            disabled={!selected}
            onClick={() => selected && onSetBoundary(selected.id, "start_ms")}
          >
            Selected start ← playhead
          </button>
          <button
            type="button"
            disabled={!selected}
            onClick={() => selected && onSetBoundary(selected.id, "end_ms")}
          >
            Selected end ← playhead
          </button>
        </div>
      </header>
      <div
        id="canvas-component-timeline"
        className="canvas-component-timeline"
        role="group"
        tabIndex={audioReady ? 0 : -1}
        aria-label="Audio timeline"
        onClick={(event) => onSeek(event.clientX)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          onNudgePlayhead(event.key === "ArrowLeft" ? -100 : 100);
        }}
      >
        {components.map((component) => {
          const left = (component.start_ms / durationMs) * 100;
          const width = Math.max(
            0.35,
            ((component.end_ms - component.start_ms) / durationMs) * 100,
          );
          return (
            <button
              key={component.id}
              type="button"
              className={component.id === selectedId ? "selected" : ""}
              style={{ left: `${left}%`, width: `${width}%` }}
              title={`${component.order + 1}: ${component.text}`}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(component.id);
              }}
            >
              <span>{component.order + 1}</span>
            </button>
          );
        })}
        <span className="canvas-playhead" style={{ left: `${(playheadMs / durationMs) * 100}%` }} />
        {!components.length && <p>Import or build components to populate the timeline.</p>}
      </div>
    </section>
  );
}
