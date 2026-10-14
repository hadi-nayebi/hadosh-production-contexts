import { beforeEach, afterEach, it, expect, vi } from "vitest";
import { readLargeCheckpoint, updateLargeCheckpoint } from "../liveStage/largeCheckpoint";
import { buildWordPreview, readPreviewHistory, previewKeys } from "./wordPreviewStore";
import packages from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
vi.mock("../liveStage/largeCheckpoint", () => ({
  readLargeCheckpoint: vi.fn(),
  updateLargeCheckpoint: vi.fn(),
}));
const source = packages[0].annotation as Annotation,
  keys = previewKeys(source, true);
let db: string | null = null;
const prior = { id: "retained", createdAt: "2026-10-12T00:00:00Z", annotation: source };
beforeEach(() => {
  localStorage.clear();
  db = null;
  vi.stubGlobal("indexedDB", {});
  vi.mocked(readLargeCheckpoint).mockImplementation(async (key) =>
    key.startsWith("annotation:") ? null : db,
  );
  vi.mocked(updateLargeCheckpoint).mockImplementation(async (_key, update) => {
    db = update(db);
    return db;
  });
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
  localStorage.clear();
});
it("migrates all previous previews and updates even when localStorage writes hit quota", async () => {
  localStorage.setItem(keys.history, JSON.stringify([prior]));
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new DOMException("full", "QuotaExceededError");
  });
  const result = await buildWordPreview(localStorage, source, true, async () => {});
  expect(result.versions.map((v) => v.id)).toContain("retained");
  expect(result.versions).toHaveLength(2);
  expect(localStorage.getItem(keys.history)).toBeNull();
  expect(await readPreviewHistory(localStorage, source, keys.history)).toEqual(result.versions);
});
it("retains old bytes when the database fails and never clears a concurrent newer local copy", async () => {
  const raw = JSON.stringify([prior]);
  localStorage.setItem(keys.history, raw);
  vi.mocked(updateLargeCheckpoint).mockRejectedValueOnce(Error("database unavailable"));
  await expect(readPreviewHistory(localStorage, source, keys.history)).rejects.toThrow(
    "unavailable",
  );
  expect(localStorage.getItem(keys.history)).toBe(raw);
  const newer = JSON.stringify([prior, { ...prior, id: "newer" }]);
  vi.mocked(updateLargeCheckpoint).mockImplementationOnce(async (_key, update) => {
    db = update(db);
    localStorage.setItem(keys.history, newer);
    return db;
  });
  await readPreviewHistory(localStorage, source, keys.history);
  expect(localStorage.getItem(keys.history)).toBe(newer);
  expect(await readPreviewHistory(localStorage, source, keys.history)).toHaveLength(2);
  expect(localStorage.getItem(keys.history)).toBeNull();
});
it("atomic appends merge existing database versions without replacing them", async () => {
  db = JSON.stringify([prior]);
  await Promise.all([
    buildWordPreview(localStorage, source, true, async () => {}),
    buildWordPreview(localStorage, source, true, async () => {}),
  ]);
  expect(await readPreviewHistory(localStorage, source, keys.history)).toHaveLength(3);
});
