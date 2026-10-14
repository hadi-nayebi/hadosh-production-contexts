import { useMemo, useState, type DragEvent } from "react";
import { ComponentCard } from "./ComponentCard";
import { formatTime } from "./format";
import {
  mergeComponent,
  moveComponent,
  nudgeComponent,
  projectStats,
  reorderComponent,
  splitComponent,
  updateComponent,
} from "./model";
import type { CanvasProject, ProductionComponent, ProjectCommit } from "./types";

export function ComponentWorkbench({
  project,
  commit,
  selectedId,
  setSelectedId,
  playheadMs,
  playRange,
  setBoundary,
  onClear,
  notify,
}: {
  project: CanvasProject;
  commit: ProjectCommit;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  playheadMs: number;
  playRange: (component: ProductionComponent) => void;
  setBoundary: (id: string, target: "start_ms" | "end_ms") => void;
  onClear: () => void;
  notify: (message: string) => void;
}) {
  const [stepMs, setStepMs] = useState(100);
  const [showDeleted, setShowDeleted] = useState(false);
  const [search, setSearch] = useState("");
  const [reviewedOnly, setReviewedOnly] = useState(false);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const stats = projectStats(project);
  const active = project.components.filter((component) => !component.deleted);
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return project.components.filter((component) => {
      if (component.deleted && !showDeleted) return false;
      if (reviewedOnly && !component.reviewed) return false;
      return !query || `${component.text} ${component.speaker ?? ""}`.toLowerCase().includes(query);
    });
  }, [project.components, reviewedOnly, search, showDeleted]);

  const split = (component: ProductionComponent, offset: number, atMs: number) => {
    const index = project.components.findIndex((item) => item.id === component.id);
    const next = splitComponent(project, component.id, offset, atMs);
    if (next.components.length === project.components.length) {
      notify("Place the text cursor between words and make sure the clip is long enough to split.");
      return;
    }
    commit(next);
    setSelectedId(next.components[index]?.id ?? null);
  };

  const merge = (component: ProductionComponent, direction: "previous" | "next") => {
    const next = mergeComponent(project, component.id, direction);
    if (next.components.length === project.components.length) return;
    commit(next);
    const target = next.components.find(
      (item) =>
        !item.deleted && item.start_ms <= component.start_ms && item.end_ms >= component.end_ms,
    );
    setSelectedId(target?.id ?? next.components.find((item) => !item.deleted)?.id ?? null);
  };

  return (
    <section className="canvas-component-workbench" aria-labelledby="canvas-components-title">
      <header>
        <div>
          <p className="eyebrow">Component workbench</p>
          <h2 id="canvas-components-title">Repair the building blocks.</h2>
        </div>
        <div className="canvas-stats" aria-label="Project statistics">
          <span>
            <strong>{stats.components}</strong> active
          </span>
          <span>
            <strong>{stats.reviewed}</strong> reviewed
          </span>
          <span>
            <strong>{stats.deleted}</strong> deleted
          </span>
          <span>
            <strong>{formatTime(stats.duration_ms)}</strong> clip time
          </span>
        </div>
      </header>
      <div className="canvas-component-toolbar">
        <label>
          Search
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Text or speaker"
          />
        </label>
        <label className="canvas-checkbox-label">
          <input
            type="checkbox"
            checked={reviewedOnly}
            onChange={(event) => setReviewedOnly(event.target.checked)}
          />
          Reviewed only
        </label>
        <label>
          Boundary step
          <select value={stepMs} onChange={(event) => setStepMs(Number(event.target.value))}>
            <option value={10}>10 ms</option>
            <option value={100}>100 ms</option>
            <option value={250}>250 ms</option>
            <option value={1000}>1 second</option>
          </select>
        </label>
        <button type="button" disabled={!stats.deleted} onClick={() => setShowDeleted((v) => !v)}>
          {showDeleted ? "Hide deleted" : "Show deleted"}
        </button>
        <button type="button" className="canvas-danger-button" onClick={onClear}>
          Clear local project
        </button>
      </div>
      <p className="canvas-workbench-help">
        Listen, repair text and timing, then mark each component reviewed. Drag to reorder.
        Splitting uses the text cursor and current audio playhead.
      </p>
      <div className="canvas-components-list">
        {filtered.map((component) => {
          const visibleIndex = active.findIndex((item) => item.id === component.id);
          return (
            <ComponentCard
              key={component.id}
              component={component}
              selected={component.id === selectedId}
              stepMs={stepMs}
              playheadMs={playheadMs}
              canMergePrevious={!component.deleted && visibleIndex > 0}
              canMergeNext={
                !component.deleted && visibleIndex >= 0 && visibleIndex < active.length - 1
              }
              onSelect={() => setSelectedId(component.id)}
              onUpdate={(patch) => {
                commit(updateComponent(project, component.id, patch));
                if (patch.deleted) setSelectedId(null);
              }}
              onNudge={(target, delta) =>
                commit(nudgeComponent(project, component.id, target, delta))
              }
              onSplit={(offset, atMs) => split(component, offset, atMs)}
              onMerge={(direction) => merge(component, direction)}
              onMove={(delta) => commit(moveComponent(project, component.id, delta))}
              onPlay={() => playRange(component)}
              onSetBoundary={(target) => setBoundary(component.id, target)}
              onDragStart={(event: DragEvent<HTMLElement>) => {
                setDraggedId(component.id);
                event.dataTransfer.effectAllowed = "move";
                event.dataTransfer.setData("text/plain", component.id);
              }}
              onDrop={(event: DragEvent<HTMLElement>) => {
                event.preventDefault();
                const sourceId = draggedId || event.dataTransfer.getData("text/plain");
                if (sourceId && sourceId !== component.id) {
                  commit(reorderComponent(project, sourceId, component.id));
                }
                setDraggedId(null);
              }}
            />
          );
        })}
        {!filtered.length && (
          <div className="canvas-empty-components">
            <strong>No components match this view.</strong>
            <span>Import a transcript, paste text, load the demo, or change the filters.</span>
          </div>
        )}
      </div>
    </section>
  );
}
