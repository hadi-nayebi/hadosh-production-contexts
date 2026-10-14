import { describe, expect, test } from "vitest";
import {
  attachAudioMetadata,
  createComponent,
  createProject,
  mergeComponent,
  moveComponent,
  nudgeComponent,
  normalizeProject,
  projectStats,
  reorderComponent,
  replaceComponents,
  splitComponent,
  updateComponent,
} from "./model";
import {
  componentsFromPlainText,
  parseJsonTranscript,
  parseTimedText,
  parseTimestamp,
} from "./importers";

describe("Canvas source component model", () => {
  test("creates and normalizes a project", () => {
    const project = normalizeProject({
      title: "Test",
      components: [
        { id: "b", order: 9, start_ms: 1_000, end_ms: 2_000, text: "Second" },
        { id: "a", order: 3, start_ms: 0, end_ms: 1_000, text: "First" },
      ],
    });
    expect(project.title).toBe("Test");
    expect(project.components.map((component) => component.order)).toEqual([0, 1]);
    expect(project.components[0].original_text).toBe("Second");
  });

  test("stores source audio metadata without embedding the file", () => {
    const next = attachAudioMetadata(createProject(), {
      filename: "episode.mp3",
      media_type: "audio/mpeg",
      size_bytes: 100,
      duration_ms: 54_000,
      last_modified: null,
    });
    expect(next.source.audio?.filename).toBe("episode.mp3");
    expect(next.source.audio).not.toHaveProperty("bytes");
  });

  test("updates and nudges boundaries without invalid durations", () => {
    const base = replaceComponents(createProject(), [
      createComponent({
        id: "one",
        start_ms: 1_000,
        end_ms: 2_000,
        text: "Hello",
      }),
    ]);
    const moved = nudgeComponent(base, "one", "clip", -1_500);
    expect(moved.components[0].start_ms).toBe(0);
    expect(moved.components[0].end_ms).toBe(1_000);
    const clamped = updateComponent(moved, "one", { end_ms: -1 });
    expect(clamped.components[0].end_ms).toBe(20);
  });

  test("splits one component at independent text and audio boundaries", () => {
    const base = replaceComponents(createProject(), [
      createComponent({
        id: "one",
        start_ms: 0,
        end_ms: 4_000,
        text: "First half second half",
      }),
    ]);
    const next = splitComponent(base, "one", 10, 1_800);
    expect(next.components).toHaveLength(2);
    expect(next.components[0].text).toBe("First half");
    expect(next.components[1].text).toBe("second half");
    expect(next.components[0].end_ms).toBe(1_800);
    expect(next.components[1].start_ms).toBe(1_800);
  });

  test("preserves source text provenance when splitting edited text", () => {
    const base = replaceComponents(createProject(), [
      createComponent({
        id: "one",
        start_ms: 0,
        end_ms: 4_000,
        original_text: "Original first Original second",
        text: "Edited first Edited second",
      }),
    ]);
    const next = splitComponent(base, "one", 12, 2_000);
    expect(next.components.map((component) => component.original_text)).toEqual([
      "Original first",
      "Original second",
    ]);
  });

  test("does not split an audio range too short for two valid components", () => {
    const base = replaceComponents(createProject(), [
      createComponent({
        id: "one",
        start_ms: 0,
        end_ms: 20,
        text: "Left right",
      }),
    ]);
    expect(splitComponent(base, "one", 4, 10)).toBe(base);
  });

  test("merges adjacent visible components without deleting hidden records between them", () => {
    const base = replaceComponents(createProject(), [
      createComponent({
        id: "a",
        start_ms: 0,
        end_ms: 1_000,
        text: "One",
        speaker: "A",
      }),
      createComponent({
        id: "hidden",
        start_ms: 900,
        end_ms: 950,
        text: "Hidden",
        deleted: true,
      }),
      createComponent({
        id: "b",
        start_ms: 1_000,
        end_ms: 2_000,
        text: "Two",
        speaker: "A",
      }),
    ]);
    const next = mergeComponent(base, "b", "previous");
    expect(next.components).toHaveLength(2);
    expect(next.components.some((component) => component.id === "hidden")).toBe(true);
    const merged = next.components.find((component) => !component.deleted)!;
    expect(merged.text).toBe("One Two");
    expect(merged.speaker).toBe("A");
  });

  test("moves and drag-reorders components", () => {
    const base = replaceComponents(createProject(), [
      createComponent({ id: "a", text: "A" }),
      createComponent({ id: "b", text: "B" }),
      createComponent({ id: "c", text: "C" }),
    ]);
    const moved = moveComponent(base, "a", 2);
    expect(moved.components.map((component) => component.id)).toEqual(["b", "c", "a"]);
    const reordered = reorderComponent(moved, "a", "b");
    expect(reordered.components.map((component) => component.id)).toEqual(["a", "b", "c"]);
  });

  test("calculates statistics from active components only", () => {
    const project = replaceComponents(createProject(), [
      createComponent({
        id: "a",
        start_ms: 0,
        end_ms: 1_000,
        text: "A",
        reviewed: true,
      }),
      createComponent({
        id: "b",
        start_ms: 1_000,
        end_ms: 2_500,
        text: "B",
        deleted: true,
      }),
    ]);
    expect(projectStats(project)).toEqual({
      components: 1,
      reviewed: 1,
      deleted: 1,
      duration_ms: 1_000,
    });
  });

  test("parses SRT and VTT timestamps", () => {
    expect(parseTimestamp("00:01:02,345")).toBe(62_345);
    const components = parseTimedText(
      "1\n00:00:01,000 --> 00:00:03,250\nHello there.\n\n2\n00:00:03.250 --> 00:00:04.500\nGeneral Kenobi.",
    );
    expect(components).toHaveLength(2);
    expect(components[0].start_ms).toBe(1_000);
    expect(components[1].text).toBe("General Kenobi.");
  });

  test("reads both millisecond and second JSON timestamp conventions", () => {
    const result = parseJsonTranscript(
      JSON.stringify({
        segments: [
          { start_ms: 125, end_ms: 950, text: "Milliseconds" },
          { start: 1.25, end: 2.5, text: "Seconds", speaker: "Speaker 2" },
        ],
      }),
    );
    expect(result.type).toBe("transcript");
    if (result.type !== "transcript") throw new Error("Expected transcript result");
    expect(result.components[0].start_ms).toBe(125);
    expect(result.components[1].start_ms).toBe(1_250);
    expect(result.components[1].speaker).toBe("Speaker 2");
  });

  test("builds provisional plain-text timing weighted by word count", () => {
    const components = componentsFromPlainText(
      "One. This sentence has four words.",
      "sentence",
      6_000,
    );
    expect(components).toHaveLength(2);
    expect(components[0].start_ms).toBe(0);
    expect(components[1].end_ms).toBe(6_000);
    expect(components[0].end_ms).toBeLessThan(3_000);
  });
});
