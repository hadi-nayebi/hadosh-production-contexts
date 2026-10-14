import { beforeEach, afterEach, it, expect, vi } from "vitest";
import { readLargeCheckpoint, updateLargeCheckpoint } from "../liveStage/largeCheckpoint";
import { readSavedAnnotation, saveAnnotationCheckpoint } from "./annotationStorage";
import { parseAnnotation, type Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import { initialDraft } from "./model";
import packages from "./v0Performance.json";
vi.mock("../liveStage/largeCheckpoint", () => ({
  readLargeCheckpoint: vi.fn(),
  updateLargeCheckpoint: vi.fn(),
}));
let db: Map<string, string>;
beforeEach(() => {
  db = new Map();
  localStorage.clear();
  vi.stubGlobal("indexedDB", {});
  vi.mocked(readLargeCheckpoint).mockImplementation(async (key) => db.get(key) ?? null);
  vi.mocked(updateLargeCheckpoint).mockImplementation(async (key, update) => {
    const next = update(db.get(key) ?? null);
    db.set(key, next);
    return next;
  });
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
  localStorage.clear();
});
it("opening legacy timing never rewrites data; first save retains exact legacy bytes", async () => {
  localStorage.setItem("a", "original");
  expect(await readSavedAnnotation(localStorage, "a")).toBe("original");
  expect(db.size).toBe(0);
  await saveAnnotationCheckpoint(localStorage, "a", "original", "changed");
  expect(await readSavedAnnotation(localStorage, "a")).toBe("changed");
  expect(JSON.parse(db.get("annotation:a")!).legacyRaw).toBe("original");
  expect(JSON.parse(localStorage.getItem("a")!).schema).toBe("canvas-annotation-indexeddb-v1");
});
it("database commit survives exhausted localStorage notification quota", async () => {
  localStorage.setItem("a", "original");
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new DOMException("full", "QuotaExceededError");
  });
  await saveAnnotationCheckpoint(localStorage, "a", "original", "changed");
  expect(await readSavedAnnotation(localStorage, "a")).toBe("changed");
  expect(localStorage.getItem("a")).toBe("original");
  await saveAnnotationCheckpoint(localStorage, "a", "changed", "next");
  expect(await readSavedAnnotation(localStorage, "a")).toBe("next");
});
it("CAS rejects a stale second editor and retains the winning save", async () => {
  localStorage.setItem("a", "original");
  await saveAnnotationCheckpoint(localStorage, "a", "original", "first");
  await expect(saveAnnotationCheckpoint(localStorage, "a", "original", "second")).rejects.toThrow(
    "changed elsewhere",
  );
  expect(await readSavedAnnotation(localStorage, "a")).toBe("first");
});
it("legacy-editor writes are retained rather than overwritten after migration", async () => {
  localStorage.setItem("a", "original");
  await saveAnnotationCheckpoint(localStorage, "a", "original", "new editor");
  localStorage.setItem("a", "old editor change");
  await expect(readSavedAnnotation(localStorage, "a")).rejects.toThrow("Both copies");
  await expect(
    saveAnnotationCheckpoint(localStorage, "a", "new editor", "overwrite"),
  ).rejects.toThrow("Both copies");
  expect(localStorage.getItem("a")).toBe("old editor change");
  expect(JSON.parse(db.get("annotation:a")!).raw).toBe("new editor");
});
it("failed database writes preserve local data and do not report a saved checkpoint", async () => {
  localStorage.setItem("a", "original");
  vi.mocked(updateLargeCheckpoint).mockRejectedValueOnce(Error("disk full"));
  await expect(saveAnnotationCheckpoint(localStorage, "a", "original", "changed")).rejects.toThrow(
    "disk full",
  );
  expect(localStorage.getItem("a")).toBe("original");
  expect(db.size).toBe(0);
});
it("histories exceeding the old 5MB local limit survive save and validated reload", async () => {
  const a = structuredClone(packages[0].annotation) as Annotation;
  const t = wordTiming(a);
  t.history = Array.from({ length: 120 }, () => t.intervals);
  t.revision = 121;
  a.wordTiming = t;
  const raw = JSON.stringify(a);
  expect(raw.length).toBeGreaterThan(5000000);
  await saveAnnotationCheckpoint(localStorage, "large", null, raw);
  const restored = parseAnnotation(
    (await readSavedAnnotation(localStorage, "large"))!,
    initialDraft(),
    a.audioHash,
    a.duration,
    packages[0].annotation as Annotation,
  );
  expect(restored.wordTiming?.history).toHaveLength(120);
  expect(restored.wordTiming?.intervals).toEqual(t.intervals);
});
