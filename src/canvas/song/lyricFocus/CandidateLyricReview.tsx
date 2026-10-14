import { useEffect, useRef, useState } from "react";
import {
  addWording,
  approveWording,
  newLyricReview,
  parseLyricReview,
  reviewReady,
  pendingWording,
  reviseWording,
  selectWording,
  selectedWording,
  wordingApproved,
  type LyricReview,
  type SourceUnit,
} from "./candidateReview";
import "./lyric-focus.css";
export default function CandidateLyricReview({
  storageKey,
  hash,
  units,
  practice,
  sourcePacketApproved,
  onReady,
  onDirty,
  onOptions,
  onAudio,
}: {
  storageKey: string;
  hash: string;
  units: SourceUnit[];
  practice: boolean;
  sourcePacketApproved: boolean;
  onReady: () => void;
  onDirty: (v: boolean) => void;
  onOptions: () => void;
  onAudio: () => void;
}) {
  const [loaded] = useState(() => {
    const raw = localStorage.getItem(storageKey);
    try {
      return {
        raw,
        review: raw ? parseLyricReview(raw, hash, units) : newLyricReview(hash, units),
        error: "",
      };
    } catch (e) {
      return { raw, review: newLyricReview(hash, units), error: String(e) };
    }
  });
  const [a, setA] = useState(loaded.review),
    [editing, setEditing] = useState(false),
    [buffer, setBuffer] = useState(""),
    [message, setMessage] = useState(loaded.error),
    [discarded, setDiscarded] = useState<string | null>(null),
    [more, setMore] = useState(false),
    [approvalNext, setApprovalNext] = useState<LyricReview | null>(null);
  const raw = useRef(loaded.raw),
    gesture = useRef<{ x: number; y: number } | null>(null),
    passage = useRef<HTMLDivElement>(null);
  const v = selectedWording(a),
    unit = units[a.active],
    dirty = editing && buffer !== v.text;
  const approved =
    wordingApproved(v) ||
    (sourcePacketApproved &&
      !a.units[a.active].sourceApprovalInvalidated &&
      v.id === "source" &&
      v.revision === 1 &&
      v.text === unit.text);
  const pending = pendingWording(a, sourcePacketApproved);
  function save(next: LyricReview) {
    try {
      if (loaded.error) throw new Error(loaded.error);
      if (localStorage.getItem(storageKey) !== raw.current)
        throw new Error(
          "This lyric changed in another tab. Reload before saving; your edit is still here.",
        );
      const text = JSON.stringify(next);
      localStorage.setItem(storageKey, text);
      raw.current = text;
      setA(next);
      onReady();
      return true;
    } catch (e) {
      setMessage(String(e));
      return false;
    }
  }
  function move(by: number) {
    if (approvalNext) return;
    if (dirty) {
      setMessage("Save or discard this edit before changing passage.");
      return;
    }
    const active = Math.max(0, Math.min(units.length - 1, a.active + by));
    if (save({ ...a, active })) {
      setEditing(false);
      setMore(false);
      setMessage("");
      passage.current?.focus({ preventScroll: true });
    }
  }
  useEffect(() => {
    if (!approvalNext) return;
    const timer = setTimeout(() => {
      save({ ...approvalNext, active: Math.min(units.length - 1, approvalNext.active + 1) });
      setApprovalNext(null);
      setMessage("");
    }, 1400);
    return () => clearTimeout(timer);
  }, [approvalNext]);
  useEffect(() => {
    onDirty(dirty || !!approvalNext);
    return () => onDirty(false);
  }, [dirty, !!approvalNext, onDirty]);
  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        el?.closest('input,textarea,select,[contenteditable="true"]')
      )
        return;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        move(e.key === "ArrowRight" ? 1 : -1);
      }
      if (e.key === "Escape") setMore(false);
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  });
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  return (
    <main className="lyric-focus candidate-lyric-review" aria-label="Song lyric review">
      <section className="lyric-sheet is-open">
        <div className="lyric-sheet-heading">
          <label>
            Passage
            <select
              aria-label="Choose passage"
              value={a.active}
              disabled={dirty || !!approvalNext}
              onChange={(e) => move(Number(e.target.value) - a.active)}
            >
              {units.map((u, i) => (
                <option key={u.id} value={i}>
                  {i + 1} · {u.label}
                </option>
              ))}
            </select>
          </label>
          <span className="lyric-position">
            {a.active + 1} <span>/ {units.length}</span>
          </span>
        </div>
        <div className="lyric-reading-progress" aria-hidden="true">
          <span style={{ width: `${((a.active + 1) / units.length) * 100}%` }} />
        </div>
        {a.units[a.active].variants.length > 1 && (
          <div className="lyric-version-dots" role="toolbar" aria-label="Wording variants">
            {a.units[a.active].variants.map((w) => (
              <button
                key={w.id}
                disabled={dirty || !!approvalNext}
                aria-label={`Select wording ${w.name}`}
                aria-pressed={w.id === v.id}
                onClick={() => {
                  const next = selectWording(a, w.id);
                  if (save(next)) {
                    setEditing(false);
                    setMessage("");
                  }
                }}
              >
                <span aria-hidden="true">●</span>
              </button>
            ))}
          </div>
        )}
        {editing ? (
          <textarea
            autoFocus
            aria-label="Edit passage"
            rows={Math.max(3, buffer.split("\n").length + 1)}
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
          />
        ) : (
          <div
            ref={passage}
            className="lyric-passage"
            role="button"
            tabIndex={0}
            aria-label={`Lyric passage ${a.active + 1} of ${units.length}`}
            onClick={() => setMore(false)}
            onPointerDown={(e) => {
              if (e.pointerType === "touch") {
                gesture.current = { x: e.clientX, y: e.clientY };
                e.currentTarget.setPointerCapture(e.pointerId);
              }
            }}
            onPointerUp={(e) => {
              const g = gesture.current;
              gesture.current = null;
              if (!g) return;
              const dx = e.clientX - g.x,
                dy = e.clientY - g.y;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
            }}
            onPointerCancel={() => {
              gesture.current = null;
            }}
          >
            {v.text || unit.label}
          </div>
        )}
        <div className="lyric-context">
          <div className="lyric-tools" role="toolbar" aria-label="Passage controls">
            <button
              aria-label="Previous passage"
              title="Previous passage"
              disabled={a.active === 0 || dirty || !!approvalNext}
              onClick={() => move(-1)}
            >
              ‹
            </button>
            {editing ? (
              <>
                <button
                  aria-label="Save draft"
                  title="Save draft"
                  onClick={() => {
                    try {
                      if (save(reviseWording(a, buffer))) {
                        setEditing(false);
                        setMessage(
                          buffer === v.text ? "Wording unchanged." : "Saved · approval pending",
                        );
                      }
                    } catch (e) {
                      setMessage(String(e));
                    }
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setDiscarded(buffer);
                    setEditing(false);
                    setMessage("Edit set aside.");
                  }}
                >
                  Discard edit
                </button>
              </>
            ) : (
              <>
                <button
                  aria-label="Edit"
                  title="Edit wording"
                  disabled={!unit.text || !!approvalNext}
                  onClick={() => {
                    setBuffer(v.text);
                    setEditing(true);
                    setMessage("");
                  }}
                >
                  <span aria-hidden="true">✎</span> Edit
                </button>
                <button
                  aria-label={approved ? "Approved · continue" : "Approve & next"}
                  title={approved ? "Approved · continue" : "Approve this wording and continue"}
                  disabled={!unit.text || !!approvalNext}
                  onClick={() => {
                    const next = approveWording(a, practice);
                    if (save(next)) {
                      setApprovalNext(next);
                      setMessage(
                        `✓ ${practice ? "Practice approved" : "Approved"} · ${v.name} r${v.revision}`,
                      );
                    }
                  }}
                >
                  <span aria-hidden="true">✓</span> {approved ? "Approved" : "Approve"}
                </button>
              </>
            )}
            <button
              aria-label="Next passage"
              title="Next without approval"
              disabled={a.active === units.length - 1 || dirty || !!approvalNext}
              onClick={() => move(1)}
            >
              ›
            </button>
          </div>
          <p className={`lyric-state ${approved ? "is-approved" : "is-pending"}`}>
            <span className="lyric-location">
              {unit.label}{" "}
              <span>
                {a.active + 1} / {units.length}
              </span>
            </span>
            <span className="lyric-review-status">
              {v.name} ·{" "}
              {dirty
                ? "Unsaved"
                : !unit.text
                  ? "Instrumental intention"
                  : approved
                    ? `Approved r${v.revision}`
                    : `Pending r${v.revision}`}
            </span>
          </p>
          {message && <p role="status">{message}</p>}
          <button
            className="hide-lyric-tools"
            aria-expanded={more}
            onClick={() => setMore((x) => !x)}
          >
            Options
          </button>
          {more && (
            <div className="lyric-options">
              <button disabled={dirty || !!approvalNext} onClick={onOptions}>
                Recording & phases
              </button>
              <button
                disabled={dirty || !unit.text}
                onClick={() => {
                  if (save(addWording(a))) {
                    setEditing(false);
                    setMessage("Alternative created · approval pending");
                  }
                }}
              >
                Add alternative
              </button>
              {discarded !== null && (
                <button
                  onClick={() => {
                    setBuffer(discarded);
                    setEditing(true);
                  }}
                >
                  Recover discarded edit
                </button>
              )}
              <details>
                <summary>Source & wording history</summary>
                <pre>{unit.text}</pre>
                {v.history.map((h, i) => (
                  <div key={i}>
                    <small>
                      r{h.revision} · {h.at}
                    </small>
                    <pre>{h.text}</pre>
                  </div>
                ))}
                <p>
                  Source text stays retained. Draft alternatives do not change the existing
                  recording or its source-derived word labels. Earlier approved drafts remain in the{" "}
                  <a href="/songs/lyrics?archive=1">earlier workspace</a>.
                </p>
              </details>
            </div>
          )}
          {a.active === units.length - 1 && pending.length > 0 && !dirty && !approvalNext && (
            <button className="lyric-continue" onClick={() => move(pending[0] - a.active)}>
              Review next pending passage · {pending.length} remaining
            </button>
          )}
          {reviewReady(a, sourcePacketApproved) && !dirty && !approvalNext && (
            <button className="lyric-continue" onClick={onAudio}>
              Continue to audio
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
