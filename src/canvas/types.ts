export const CANVAS_SCHEMA_VERSION = 1;

export type ComponentOrigin =
  "source_transcript" | "human_import" | "source_derived" | "agent_expansion" | "human_authored";

export type ComponentKind =
  | "unclassified"
  | "dialogue"
  | "scene_description"
  | "character_description"
  | "narration"
  | "sound"
  | "production_note"
  | "discard";

export type TranscriptFormat = "json" | "srt" | "vtt" | "plain_text" | "canvas_project";

export type SourceAudio = {
  filename: string;
  media_type: string;
  size_bytes: number;
  duration_ms: number;
  last_modified: number | null;
};

export type SourceTranscript = {
  filename: string;
  format: TranscriptFormat;
  imported_at: string;
};

export type ProductionComponent = {
  id: string;
  order: number;
  start_ms: number;
  end_ms: number;
  original_text: string;
  text: string;
  speaker: string | null;
  origin: ComponentOrigin;
  kind: ComponentKind;
  reviewed: boolean;
  deleted: boolean;
};

export type CanvasProject = {
  schema_version: number;
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  source: {
    audio: SourceAudio | null;
    transcript: SourceTranscript | null;
  };
  components: ProductionComponent[];
};

export type ProjectStats = {
  components: number;
  reviewed: number;
  deleted: number;
  duration_ms: number;
};

export type TranscriptParseResult =
  | { type: "project"; project: CanvasProject }
  | {
      type: "transcript";
      format: Exclude<TranscriptFormat, "canvas_project">;
      components: ProductionComponent[];
    };

export type ProjectCommit = (
  project: CanvasProject | ((current: CanvasProject) => CanvasProject),
) => void;
