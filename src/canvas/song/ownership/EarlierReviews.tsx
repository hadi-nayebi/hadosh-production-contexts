import { useState } from "react";
import { download } from "../export";
const prefix = "canvas-song-review-v1:";
export function earlierReviewKeys(storage: Storage, currentCommit: string): string[] {
  return Array.from({ length: storage.length }, (_, i) => storage.key(i))
    .filter(
      (key): key is string =>
        !!key &&
        key.startsWith(prefix) &&
        /^[0-9a-f]{40}$/.test(key.slice(prefix.length)) &&
        key !== `${prefix}${currentCommit}`,
    )
    .sort();
}
export default function EarlierReviews({ currentCommit }: { currentCommit: string }) {
  const [keys] = useState(() => {
    try {
      return earlierReviewKeys(localStorage, currentCommit);
    } catch {
      return [];
    }
  });
  const [status, setStatus] = useState("");
  if (!keys.length) return null;
  return (
    <aside className="song-card" aria-label="Earlier local reviews">
      <h3>Earlier local reviews are preserved</h3>
      <p>
        This source revision has a separate working copy. Older edits were not applied or
        overwritten. Export them for reconciliation in Departments; importing them into this
        revision will report a mismatch.
      </p>
      <div className="song-actions">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => {
              try {
                const raw = localStorage.getItem(key);
                if (raw === null)
                  throw Error("That saved review is no longer available in this browser.");
                download(`song-review-${key.slice(prefix.length)}.json`, raw);
                setStatus(
                  "Earlier review exported unchanged, including its original source revision.",
                );
              } catch (error) {
                setStatus(
                  error instanceof Error ? error.message : "Could not read earlier review.",
                );
              }
            }}
          >
            Export review from {key.slice(prefix.length, prefix.length + 12)}
          </button>
        ))}
      </div>
      {status && <p role="status">{status}</p>}
    </aside>
  );
}
