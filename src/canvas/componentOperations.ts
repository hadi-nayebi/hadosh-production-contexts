import type { CanvasProject, ProductionComponent, ProjectStats, SourceTranscript } from "./types";
import {
  MIN_COMPONENT_MS,
  cleanMs,
  createComponent,
  makeId,
  mutateProject,
  normalizeOrder,
  updateComponent,
} from "./projectCore";

export function nudgeComponent(
  project: CanvasProject,
  id: string,
  target: "start" | "end" | "clip",
  deltaMs: number,
): CanvasProject {
  const component = project.components.find((item) => item.id === id);
  if (!component) return project;
  const delta = Number(deltaMs) || 0;
  if (target === "clip") {
    const duration = component.end_ms - component.start_ms;
    const start = Math.max(0, component.start_ms + delta);
    return updateComponent(project, id, {
      start_ms: start,
      end_ms: start + duration,
    });
  }
  if (target === "start") {
    return updateComponent(project, id, {
      start_ms: Math.max(
        0,
        Math.min(component.end_ms - MIN_COMPONENT_MS, component.start_ms + delta),
      ),
    });
  }
  return updateComponent(project, id, {
    end_ms: Math.max(component.start_ms + MIN_COMPONENT_MS, component.end_ms + delta),
  });
}

export function splitComponent(
  project: CanvasProject,
  id: string,
  textOffset: number,
  splitMs: number,
): CanvasProject {
  const index = project.components.findIndex((component) => component.id === id);
  if (index < 0) return project;
  const component = project.components[index];
  if (component.end_ms - component.start_ms < MIN_COMPONENT_MS * 2) return project;
  const offset = Math.max(0, Math.min(component.text.length, Number(textOffset) || 0));
  const leftText = component.text.slice(0, offset).trim();
  const rightText = component.text.slice(offset).trim();
  if (!leftText || !rightText) return project;
  const boundary = Math.max(
    component.start_ms + MIN_COMPONENT_MS,
    Math.min(component.end_ms - MIN_COMPONENT_MS, cleanMs(splitMs)),
  );
  const originalOffset = component.text.length
    ? Math.round((offset / component.text.length) * component.original_text.length)
    : 0;
  const leftOriginal = component.original_text.slice(0, originalOffset).trim();
  const rightOriginal = component.original_text.slice(originalOffset).trim();
  const left = createComponent({
    ...component,
    id: makeId("cmp"),
    text: leftText,
    original_text: leftOriginal || component.original_text,
    end_ms: boundary,
    reviewed: false,
  });
  const right = createComponent({
    ...component,
    id: makeId("cmp"),
    text: rightText,
    original_text: rightOriginal || component.original_text,
    start_ms: boundary,
    reviewed: false,
  });
  return mutateProject(project, (draft) => {
    draft.components.splice(index, 1, left, right);
    draft.components = normalizeOrder(draft.components);
  });
}

export function mergeComponent(
  project: CanvasProject,
  id: string,
  direction: "previous" | "next" = "previous",
): CanvasProject {
  const visible = project.components.filter((component) => !component.deleted);
  const visibleIndex = visible.findIndex((component) => component.id === id);
  const current = visible[visibleIndex];
  const neighbor = direction === "next" ? visible[visibleIndex + 1] : visible[visibleIndex - 1];
  if (!current || !neighbor) return project;
  const first = direction === "next" ? current : neighbor;
  const second = direction === "next" ? neighbor : current;
  const merged = createComponent({
    ...first,
    id: makeId("cmp"),
    start_ms: Math.min(first.start_ms, second.start_ms),
    end_ms: Math.max(first.end_ms, second.end_ms),
    original_text: [first.original_text, second.original_text].filter(Boolean).join(" "),
    text: [first.text, second.text].filter(Boolean).join(" "),
    speaker: first.speaker === second.speaker ? first.speaker : null,
    reviewed: false,
  });
  return mutateProject(project, (draft) => {
    const firstIndex = draft.components.findIndex((component) => component.id === first.id);
    const secondIndex = draft.components.findIndex((component) => component.id === second.id);
    const insertAt = Math.min(firstIndex, secondIndex);
    draft.components = draft.components.filter(
      (component) => component.id !== first.id && component.id !== second.id,
    );
    draft.components.splice(insertAt, 0, merged);
    draft.components = normalizeOrder(draft.components);
  });
}

export function moveComponent(project: CanvasProject, id: string, delta: number): CanvasProject {
  return mutateProject(project, (draft) => {
    const index = draft.components.findIndex((component) => component.id === id);
    if (index < 0) return;
    const destination = Math.max(
      0,
      Math.min(draft.components.length - 1, index + Number(delta || 0)),
    );
    if (destination === index) return;
    const [component] = draft.components.splice(index, 1);
    draft.components.splice(destination, 0, component);
    draft.components = normalizeOrder(draft.components);
  });
}

export function reorderComponent(
  project: CanvasProject,
  sourceId: string,
  targetId: string,
): CanvasProject {
  return mutateProject(project, (draft) => {
    const sourceIndex = draft.components.findIndex((component) => component.id === sourceId);
    const targetIndex = draft.components.findIndex((component) => component.id === targetId);
    if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) return;
    const [component] = draft.components.splice(sourceIndex, 1);
    const adjustedTarget = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
    draft.components.splice(adjustedTarget, 0, component);
    draft.components = normalizeOrder(draft.components);
  });
}

export function replaceComponents(
  project: CanvasProject,
  components: ProductionComponent[],
  transcript: SourceTranscript | null = null,
): CanvasProject {
  return mutateProject(project, (draft) => {
    draft.components = normalizeOrder(components.map((component) => createComponent(component)));
    draft.source.transcript = transcript;
  });
}

export function projectStats(project: CanvasProject): ProjectStats {
  const active = project.components.filter((component) => !component.deleted);
  return {
    components: active.length,
    reviewed: active.filter((component) => component.reviewed).length,
    deleted: project.components.length - active.length,
    duration_ms: active.reduce(
      (sum, component) => sum + Math.max(0, component.end_ms - component.start_ms),
      0,
    ),
  };
}
