import { wordTiming, wordTimingProblem } from "./wordTiming";
import { readSavedAnnotation } from "./annotationStorage";
import { readLargeCheckpoint, updateLargeCheckpoint } from "../liveStage/largeCheckpoint";
import { parseAnnotation, type Annotation } from "./audioAnnotation";
import { initialDraft } from "./model";
import {
  buildVisualWordTiming,
  validateVisualWordTiming,
  type VisualWordTiming,
} from "./visualWordTiming";
export type PreviewVersion = {
  id: string;
  createdAt: string;
  annotation: Annotation;
  visualTiming?: VisualWordTiming;
};
type Store = Pick<Storage, "getItem" | "setItem"> & Partial<Pick<Storage, "removeItem">>;
export function previewKeys(source: Annotation, practice: boolean) {
  const saved = `canvas-audio-annotation:${practice ? "practice" : "real"}:${source.lyricStamp}:${source.audioHash}`;
  return { saved, history: `${saved}:word-previews` };
}
export async function savedPreviewSource(store: Store, source: Annotation, key: string) {
  const raw = await readSavedAnnotation(store, key);
  return parseAnnotation(
    raw ?? JSON.stringify(source),
    initialDraft(),
    source.audioHash,
    source.duration,
    source,
  );
}
export function previewHistory(store: Store, source: Annotation, key: string): PreviewVersion[] {
  return parsePreviewHistory(store.getItem(key), source);
}
function parsePreviewHistory(raw: string | null, source: Annotation): PreviewVersion[] {
  const history = JSON.parse(raw || "[]");
  if (!Array.isArray(history)) throw Error("Invalid preview history; data retained.");
  const ids = new Set<string>();
  for (const v of history) {
    if (
      !v ||
      typeof v.id !== "string" ||
      ids.has(v.id) ||
      typeof v.createdAt !== "string" ||
      !Number.isFinite(Date.parse(v.createdAt))
    )
      throw Error("Invalid preview version; data retained.");
    ids.add(v.id);
    if (v.visualTiming) validateVisualWordTiming(v.annotation, v.visualTiming);
    parseAnnotation(
      JSON.stringify(v.annotation),
      initialDraft(),
      source.audioHash,
      source.duration,
      source,
    );
  }
  return history;
}
function durable(store: Store) {
  return (
    typeof indexedDB !== "undefined" &&
    typeof localStorage !== "undefined" &&
    store === localStorage
  );
}
function mergeVersions(source: Annotation, ...histories: PreviewVersion[][]) {
  const byId = new Map<string, PreviewVersion>();
  for (const version of histories.flat()) {
    const prior = byId.get(version.id);
    if (prior && JSON.stringify(prior) !== JSON.stringify(version))
      throw Error("Conflicting preview versions; all saved copies retained.");
    byId.set(version.id, version);
  }
  return parsePreviewHistory(
    JSON.stringify(
      [...byId.values()].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)),
    ),
    source,
  );
}
async function persistHistory(
  store: Store,
  source: Annotation,
  key: string,
  added: PreviewVersion[],
  beforeWrite: () => void = () => {},
) {
  const legacyRaw = store.getItem(key);
  const legacy = parsePreviewHistory(legacyRaw, source);
  const raw = await updateLargeCheckpoint(`word-preview:${key}`, (current) => {
    const versions = mergeVersions(source, parsePreviewHistory(current, source), legacy, added);
    beforeWrite();
    return JSON.stringify(versions);
  });
  // The IndexedDB transaction has committed. Never remove a newer concurrent local copy.
  if (legacyRaw !== null && store.getItem(key) === legacyRaw) {
    try {
      store.removeItem?.(key);
    } catch {
      /* Safe duplicate; merge it on the next read. */
    }
  }
  return parsePreviewHistory(raw, source);
}
export async function readPreviewHistory(store: Store, source: Annotation, key: string) {
  if (!durable(store)) return previewHistory(store, source, key);
  if (store.getItem(key) !== null) return persistHistory(store, source, key, []);
  return parsePreviewHistory(await readLargeCheckpoint(`word-preview:${key}`), source);
}
export function previewStale(preview: Annotation, current: Annotation) {
  return JSON.stringify(preview) !== JSON.stringify(current);
}
export async function buildWordPreview(
  store: Store,
  source: Annotation,
  practice: boolean,
  yieldBuild: () => Promise<void>,
) {
  const keys = previewKeys(source, practice);
  const repair = JSON.parse(store.getItem(`${keys.saved}:word-repair`) || "null");
  if (repair?.active)
    throw Error("Resolve or set aside the saved word repair draft before updating the preview.");
  const annotation = structuredClone(await savedPreviewSource(store, source, keys.saved));
  const conflict = wordTimingProblem(annotation, wordTiming(annotation).intervals);
  if (conflict)
    throw Error(`Timing saved; resolve overlaps before updating the preview. ${conflict}`);
  const version: PreviewVersion = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    annotation,
    visualTiming: buildVisualWordTiming(annotation),
  };
  await yieldBuild();
  let current: Annotation = await savedPreviewSource(store, source, keys.saved);
  const validateLatest = () => {
    if (JSON.parse(store.getItem(`${keys.saved}:word-repair`) || "null")?.active)
      throw Error("A repair draft appeared during the update. Previous preview retained.");
  };
  let versions: PreviewVersion[];
  if (durable(store))
    versions = await persistHistory(store, source, keys.history, [version], validateLatest);
  else {
    versions = [...previewHistory(store, source, keys.history), version];
    validateLatest();
    store.setItem(keys.history, JSON.stringify(versions));
  }
  current = await savedPreviewSource(store, source, keys.saved);
  return { version, versions, current, stale: previewStale(annotation, current) };
}
