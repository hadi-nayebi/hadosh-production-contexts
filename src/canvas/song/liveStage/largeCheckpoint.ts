// localStorage stays compatible with existing small checkpoints. Larger scene
// versions use IndexedDB without deleting or rewriting other saved versions.
const database = "canvas-scene-checkpoints";
const store = "scenes";
function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(database, 1);
    let settled = false;
    const timer = setTimeout(
      () =>
        fail(
          new Error(
            "Scene storage did not open within 8 seconds. Reload to retry; existing drafts are preserved.",
          ),
        ),
      8000,
    );
    function fail(error: unknown) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(error);
    }
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(store)) request.result.createObjectStore(store);
    };
    request.onerror = () => fail(request.error || new Error("Scene storage could not open."));
    request.onblocked = () =>
      fail(
        new Error(
          "Scene storage is blocked by another tab. Close older Canvas tabs and reload; saved drafts are preserved.",
        ),
      );
    request.onsuccess = () => {
      if (settled) {
        request.result.close();
        return;
      }
      settled = true;
      clearTimeout(timer);
      resolve(request.result);
    };
  });
}
async function access(key: string, raw?: string): Promise<string | null> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, raw === undefined ? "readonly" : "readwrite");
    const request =
      raw === undefined
        ? transaction.objectStore(store).get(key)
        : transaction.objectStore(store).put(raw, key);
    let result: string | null = null;
    request.onsuccess = () => {
      if (raw === undefined) result = request.result ?? null;
    };
    transaction.oncomplete = () => {
      db.close();
      if (result !== null && typeof result !== "string")
        reject(
          new Error("Saved scene has an unreadable storage format; existing bytes are preserved."),
        );
      else resolve(result);
    };
    transaction.onabort = transaction.onerror = () => {
      db.close();
      reject(
        transaction.error ||
          new Error("Scene storage transaction failed. Export your working draft before leaving."),
      );
    };
  });
}
export const readLargeCheckpoint = (key: string) => access(key);
export const writeLargeCheckpoint = (key: string, raw: string) => access(key, raw);

/** Atomic read/modify/write: concurrent callers cannot replace each other's history. */
export async function updateLargeCheckpoint(
  key: string,
  update: (raw: string | null) => string,
): Promise<string> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, "readwrite");
    let result = "",
      failure: unknown;
    const request = tx.objectStore(store).get(key);
    request.onsuccess = () => {
      try {
        const raw = request.result ?? null;
        if (raw !== null && typeof raw !== "string")
          throw Error("Saved history has an unreadable format; existing bytes retained.");
        result = update(raw);
        tx.objectStore(store).put(result, key);
      } catch (error) {
        failure = error;
        tx.abort();
      }
    };
    tx.oncomplete = () => {
      db.close();
      resolve(result);
    };
    tx.onerror = tx.onabort = () => {
      db.close();
      reject(failure ?? tx.error ?? Error("History transaction failed; previous data retained."));
    };
  });
}
