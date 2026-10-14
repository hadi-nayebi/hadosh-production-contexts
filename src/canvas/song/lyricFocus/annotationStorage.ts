import { readLargeCheckpoint, updateLargeCheckpoint } from "../liveStage/largeCheckpoint";
type Store = Pick<Storage, "getItem" | "setItem">;
type Record = {
  schema: "annotation-checkpoint-v1";
  raw: string;
  legacyRaw: string | null;
  token: string;
};
const marker = "canvas-annotation-indexeddb-v1";
const dbKey = (key: string) => `annotation:${key}`;
const durable = (store: Store) =>
  typeof indexedDB !== "undefined" && typeof localStorage !== "undefined" && store === localStorage;
function isMarker(raw: string | null) {
  if (!raw) return false;
  try {
    return JSON.parse(raw)?.schema === marker;
  } catch {
    return false;
  }
}
function parse(raw: string): Record {
  const value = JSON.parse(raw);
  if (
    value?.schema !== "annotation-checkpoint-v1" ||
    typeof value.raw !== "string" ||
    typeof value.token !== "string" ||
    (value.legacyRaw !== null && typeof value.legacyRaw !== "string")
  )
    throw Error("Saved timing storage is invalid. Existing bytes are retained.");
  return value;
}
function checkLegacy(local: string | null, record: Record) {
  if (local !== null && !isMarker(local) && local !== record.legacyRaw)
    throw Error(
      "An older editor changed timing after storage migration. Both copies are retained; export and reconcile before saving.",
    );
}
/** Read-only: opening a recording never migrates or rewrites the user's annotation. */
export async function readSavedAnnotation(store: Store, key: string): Promise<string | null> {
  const local = store.getItem(key);
  if (!durable(store)) return local;
  const saved = await readLargeCheckpoint(dbKey(key));
  if (saved) {
    const record = parse(saved);
    checkLegacy(store.getItem(key), record);
    return record.raw;
  }
  if (isMarker(local))
    throw Error(
      "Timing database is unavailable. Restore your exported backup; no source estimates were substituted.",
    );
  return local;
}
/** CAS and the full history commit atomically in IndexedDB. The local key is just a notification. */
export async function saveAnnotationCheckpoint(
  store: Store,
  key: string,
  expected: string | null,
  next: string,
): Promise<void> {
  if (!durable(store)) {
    if (store.getItem(key) !== expected)
      throw Error("Saved timing changed elsewhere. Reload before saving.");
    store.setItem(key, next);
    return;
  }
  const token = crypto.randomUUID();
  const committed = await updateLargeCheckpoint(dbKey(key), (saved) => {
    const record = saved ? parse(saved) : null;
    const local = store.getItem(key);
    if (record) checkLegacy(local, record);
    if ((record?.raw ?? local) !== expected)
      throw Error("Saved timing changed elsewhere. Reload before saving; your draft is retained.");
    return JSON.stringify({
      schema: "annotation-checkpoint-v1",
      raw: next,
      legacyRaw: record ? record.legacyRaw : local,
      token,
    } satisfies Record);
  });
  // Failure of optional notification storage cannot undo a committed timing transaction.
  // The reader always checks IndexedDB, including when the old local copy remains.
  checkLegacy(store.getItem(key), parse(committed));
  try {
    store.setItem(key, JSON.stringify({ schema: marker, token }));
  } catch {}
}
