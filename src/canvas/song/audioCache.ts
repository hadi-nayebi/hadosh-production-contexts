// Browser-local audio survives navigation/reload. No media is sent to a server.
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("canvas-listening-audio-v1", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("takes");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error("Audio storage is busy."));
  });
}
export async function cachedAudio(url: string): Promise<File | undefined> {
  const db = await openDB();
  try {
    return await new Promise((resolve, reject) => {
      const req = db.transaction("takes").objectStore("takes").get(url);
      req.onsuccess = () => resolve(req.result instanceof File ? req.result : undefined);
      req.onerror = () => reject(req.error);
    });
  } finally {
    db.close();
  }
}
export async function rememberAudio(url: string, file: File): Promise<void> {
  const db = await openDB();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction("takes", "readwrite");
      tx.objectStore("takes").put(file, url);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}
