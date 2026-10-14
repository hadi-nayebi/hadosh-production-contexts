import {
  CANVAS_SCHEMA_VERSION,
  type CanvasProject,
  type ProductionComponent,
  type SourceAudio,
} from "./types";

export const MIN_COMPONENT_MS = 20;

export function createProject(title = "Untitled Canvas project"): CanvasProject {
  const now = new Date().toISOString();
  return {
    schema_version: CANVAS_SCHEMA_VERSION,
    id: makeId("project"),
    title,
    created_at: now,
    updated_at: now,
    source: { audio: null, transcript: null },
    components: [],
  };
}

export function makeId(prefix = "item") {
  const random = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}

export function createComponent(
  input: Partial<ProductionComponent> & {
    startMs?: number;
    endMs?: number;
    originalText?: string;
  } = {},
): ProductionComponent {
  const startMs = cleanMs(input.start_ms ?? input.startMs ?? 0);
  const requestedEnd = cleanMs(input.end_ms ?? input.endMs ?? startMs + 2_000);
  const text = String(input.text ?? "").trim();
  return {
    id: input.id || makeId("cmp"),
    order: Number.isFinite(input.order) ? Number(input.order) : 0,
    start_ms: startMs,
    end_ms: Math.max(startMs + MIN_COMPONENT_MS, requestedEnd),
    original_text: String(input.original_text ?? input.originalText ?? text),
    text,
    speaker: input.speaker ? String(input.speaker) : null,
    origin: input.origin ?? "source_transcript",
    kind: input.kind ?? "unclassified",
    reviewed: Boolean(input.reviewed),
    deleted: Boolean(input.deleted),
  };
}

export function normalizeProject(value: unknown): CanvasProject {
  const fallback = createProject();
  if (!isRecord(value)) return fallback;
  const source = isRecord(value.source) ? value.source : {};
  const components = Array.isArray(value.components)
    ? value.components.map((component) => createComponent(isRecord(component) ? component : {}))
    : [];
  return {
    ...fallback,
    id: typeof value.id === "string" && value.id ? value.id : fallback.id,
    title: typeof value.title === "string" && value.title ? value.title : fallback.title,
    created_at:
      typeof value.created_at === "string" && value.created_at
        ? value.created_at
        : fallback.created_at,
    updated_at:
      typeof value.updated_at === "string" && value.updated_at
        ? value.updated_at
        : fallback.updated_at,
    schema_version: CANVAS_SCHEMA_VERSION,
    source: {
      audio: isSourceAudio(source.audio) ? source.audio : null,
      transcript: isSourceTranscript(source.transcript) ? source.transcript : null,
    },
    components: normalizeOrder(components),
  };
}

export function normalizeOrder(components: ProductionComponent[]): ProductionComponent[] {
  return components.map((component, index) => ({ ...component, order: index }));
}

export function updateComponent(
  project: CanvasProject,
  id: string,
  patch: Partial<ProductionComponent>,
): CanvasProject {
  return mutateProject(project, (draft) => {
    const index = draft.components.findIndex((component) => component.id === id);
    if (index < 0) return;
    const current = draft.components[index];
    const next = { ...current, ...patch };
    next.start_ms = cleanMs(next.start_ms);
    next.end_ms = Math.max(next.start_ms + MIN_COMPONENT_MS, cleanMs(next.end_ms));
    next.text = String(next.text ?? "");
    next.original_text = String(next.original_text ?? current.original_text);
    next.speaker = next.speaker ? String(next.speaker) : null;
    draft.components[index] = next;
  });
}

export function updateProjectTitle(project: CanvasProject, title: string): CanvasProject {
  return mutateProject(project, (draft) => {
    draft.title = title.trim() || "Untitled Canvas project";
  });
}

export function attachAudioMetadata(project: CanvasProject, audio: SourceAudio): CanvasProject {
  return mutateProject(project, (draft) => {
    draft.source.audio = audio;
  });
}

export function mutateProject(
  project: CanvasProject,
  mutation: (draft: CanvasProject) => void,
): CanvasProject {
  const draft = structuredClone(project);
  mutation(draft);
  draft.updated_at = new Date().toISOString();
  return draft;
}

export function cleanMs(value: number | undefined) {
  return Math.max(0, Math.round(Number(value) || 0));
}

function isRecord(value: unknown): value is Record<string, any> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isSourceAudio(value: unknown): value is SourceAudio {
  return (
    isRecord(value) &&
    typeof value.filename === "string" &&
    typeof value.media_type === "string" &&
    Number.isFinite(value.size_bytes) &&
    Number.isFinite(value.duration_ms)
  );
}

function isSourceTranscript(value: unknown) {
  return (
    isRecord(value) &&
    typeof value.filename === "string" &&
    typeof value.format === "string" &&
    typeof value.imported_at === "string"
  );
}
