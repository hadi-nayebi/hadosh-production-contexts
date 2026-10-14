import { createComponent, normalizeProject } from "./model";
import type {
  CanvasProject,
  ProductionComponent,
  TranscriptParseResult,
  TranscriptFormat,
} from "./types";

export function parseTranscriptText(
  filename: string,
  text: string,
  audioDurationMs: number | null = null,
): TranscriptParseResult {
  const extension = filename.split(".").pop()?.toLowerCase();
  if (extension === "json") return parseJsonTranscript(text);
  if (extension === "srt" || extension === "vtt") {
    return {
      type: "transcript",
      format: extension,
      components: parseTimedText(text),
    };
  }
  return {
    type: "transcript",
    format: "plain_text",
    components: componentsFromPlainText(text, "sentence", audioDurationMs),
  };
}

export function parseJsonTranscript(text: string): TranscriptParseResult {
  const parsed: unknown = JSON.parse(text);
  if (isRecord(parsed) && Array.isArray(parsed.components)) {
    return { type: "project", project: normalizeProject(parsed) };
  }
  const segments = Array.isArray(parsed)
    ? parsed
    : isRecord(parsed) && Array.isArray(parsed.segments)
      ? parsed.segments
      : null;
  if (!segments) throw new Error("JSON must contain a segments array or a Canvas project.");
  const components = segments.map((value, index) => segmentToComponent(value, index));
  return { type: "transcript", format: "json", components };
}

export function parseTimedText(text: string): ProductionComponent[] {
  const cleaned = text
    .replace(/^WEBVTT[^\n]*\n+/i, "")
    .replace(/\r/g, "")
    .trim();
  const blocks = cleaned.split(/\n{2,}/);
  const components: ProductionComponent[] = [];
  for (const block of blocks) {
    const lines = block.split("\n").filter(Boolean);
    const timeIndex = lines.findIndex((line) => line.includes("-->"));
    if (timeIndex < 0) continue;
    const [start, endWithSettings = ""] = lines[timeIndex].split("-->").map((part) => part.trim());
    const end = endWithSettings.split(/\s+/)[0];
    const body = lines
      .slice(timeIndex + 1)
      .join(" ")
      .replace(/<[^>]+>/g, "")
      .trim();
    if (!body) continue;
    components.push(
      createComponent({
        order: components.length,
        start_ms: parseTimestamp(start),
        end_ms: parseTimestamp(end),
        text: body,
      }),
    );
  }
  if (!components.length) throw new Error("No timestamped transcript blocks were found.");
  return components;
}

export function componentsFromPlainText(
  text: string,
  mode: "sentence" | "paragraph" | "line" = "sentence",
  durationMs: number | null = null,
): ProductionComponent[] {
  const normalized = String(text || "")
    .replace(/\r/g, "")
    .trim();
  if (!normalized) return [];
  let parts: string[];
  if (mode === "line") parts = normalized.split(/\n+/);
  else if (mode === "paragraph") parts = normalized.split(/\n{2,}/);
  else parts = normalized.match(/[^.!?\n]+(?:[.!?]+|$)/g) ?? [normalized];
  parts = parts.map((part) => part.trim()).filter(Boolean);
  const weights = parts.map((part) => Math.max(1, part.split(/\s+/).length));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const totalDuration =
    Number.isFinite(durationMs) && Number(durationMs) > 0
      ? Number(durationMs)
      : Math.max(1, parts.length) * 3_000;
  let cursor = 0;
  return parts.map((part, index) => {
    const start = cursor;
    cursor =
      index === parts.length - 1
        ? totalDuration
        : cursor + Math.round((weights[index] / totalWeight) * totalDuration);
    return createComponent({
      order: index,
      start_ms: start,
      end_ms: cursor,
      text: part,
      origin: "human_import",
    });
  });
}

export function parseTimestamp(value: string) {
  const clean = String(value || "")
    .trim()
    .replace(",", ".");
  const pieces = clean.split(":").map(Number);
  if (!pieces.length || pieces.some((piece) => Number.isNaN(piece))) return 0;
  let seconds = 0;
  for (const piece of pieces) seconds = seconds * 60 + piece;
  return Math.max(0, Math.round(seconds * 1_000));
}

export function transcriptMetadata(filename: string, format: TranscriptFormat) {
  return { filename, format, imported_at: new Date().toISOString() } as const;
}

function segmentToComponent(value: unknown, index: number): ProductionComponent {
  const segment = isRecord(value) ? value : {};
  return createComponent({
    order: index,
    start_ms: numericMilliseconds(segment, "start_ms", "start", "start_time"),
    end_ms: numericMilliseconds(segment, "end_ms", "end", "end_time"),
    text: stringValue(segment.text ?? segment.transcript),
    speaker: nullableString(segment.speaker ?? segment.speaker_label),
  });
}

function numericMilliseconds(
  segment: Record<string, unknown>,
  millisecondKey: string,
  ...secondKeys: string[]
) {
  const millisecondValue = Number(segment[millisecondKey]);
  if (Number.isFinite(millisecondValue)) return Math.max(0, Math.round(millisecondValue));
  for (const key of secondKeys) {
    const seconds = Number(segment[key]);
    if (Number.isFinite(seconds)) return Math.max(0, Math.round(seconds * 1_000));
  }
  return 0;
}

function nullableString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function projectFromJson(text: string): CanvasProject {
  return normalizeProject(JSON.parse(text));
}
