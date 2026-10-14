import {
  optionContext,
  isRejectedAddition,
  finalSelectionCurrent,
  visibleStoryVersions,
  isEarlierStoryOption,
} from "./additionOptions";
import { lyricHandoff } from "./lyricExport";
import StructureMap from "./StructureMap";
import {
  migrateStructure,
  structureConflicts,
  selectRequestedB,
  harnessSelectionConflict,
} from "./structureMigration";
import {
  selectVariant,
  addVariant,
  migrateVariants,
  refrainConflict,
} from "./variants";
import AudioAnnotationView from "./AudioAnnotationView";
import { arrangementReady } from "./arrangement";
import { useEffect, useRef, useState } from "react";
import {
  initialDraft,
  parseDraft,
  restoreDraft,
  passages,
  revise,
  approve,
  approved,
  complete,
  type Draft,
} from "./model";
import "./lyric-focus.css";
export default function LyricFocus() {
  const [mapGap, setMapGap] = useState<string | null>(null);
  const [optionHint, setOptionHint] = useState<string | null>(null);
  const [showArrangement, setShowArrangement] = useState(false);
  const practice = new URLSearchParams(location.search).get("practice") === "1";
  const key = practice
    ? "canvas-lyric-focus-practice-v1"
    : "canvas-lyric-focus-v1";
  const [loaded] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return { draft: raw ? parseDraft(raw) : initialDraft(), raw, error: "" };
    } catch (e) {
      return { draft: initialDraft(), raw: null, error: String(e) };
    }
  });
  const [draft, setDraft] = useState(loaded.draft),
    [error, setError] = useState(loaded.error),
    [message, setMessage] = useState(""),
    [open, setOpen] = useState(false),
    [editing, setEditing] = useState(false),
    [buffer, setBuffer] = useState(""),
    [discarded, setDiscarded] = useState<string | null>(null);
  const [restoreText, setRestoreText] = useState(""),
    [restorePreview, setRestorePreview] = useState<Draft | null>(null),
    [beforeRestore, setBeforeRestore] = useState<Draft | null>(null);
  const [recoveryKeys, setRecoveryKeys] = useState(() => {
    try {
      return Object.keys(localStorage).filter((k) =>
        k.startsWith(`${key}:recovery:`),
      );
    } catch {
      return [];
    }
  });
  const [approvalNext, setApprovalNext] = useState<Draft | null>(null);
  const lastRaw = useRef(loaded.raw),
    focus = useRef<HTMLDivElement>(null);
  const all = passages(draft),
    index = all.findIndex((u) => u.id === draft.activeId),
    unit = all[index],
    dirty = editing && buffer !== unit.text;
  useEffect(() => {
    if (editing) return; // Never remap an in-progress editor to a different unit.
    const next = selectRequestedB(
      migrateStructure(migrateVariants(structuredClone(draft))),
    );
    if (JSON.stringify(next) !== lastRaw.current) {
      setApprovalNext(null);
      persist(next); // Uses the existing cross-tab comparison; stale tabs cannot overwrite.
    }
  }, [editing, migrateVariants]);
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
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key !== key || !event.newValue) return;
      setShowArrangement(false);
      setApprovalNext(null);
      if (dirty) {
        setError(
          "This draft changed in another tab. Export unsaved wording before reloading.",
        );
        return;
      }
      try {
        setDraft(parseDraft(event.newValue));
        lastRaw.current = event.newValue;
        setMessage("Loaded the newer saved draft.");
      } catch (e) {
        setError(String(e));
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [key, dirty]);
  function persist(next: Draft) {
    try {
      next = selectRequestedB(migrateStructure(migrateVariants(structuredClone(next))));
      if (loaded.error) throw new Error(loaded.error);
      if (localStorage.getItem(key) !== lastRaw.current)
        throw new Error(
          "This draft changed in another tab. Export your text, then reload to review that version.",
        );
      const raw = JSON.stringify(next);
      localStorage.setItem(key, raw);
      lastRaw.current = raw;
      setDraft(next);
      setError("");
      return true;
    } catch (e) {
      setError(String(e));
      return false;
    }
  }
  function save() {
    try {
      if (persist(revise(draft, unit.id, buffer))) {
        setEditing(false);
        setMessage(
          buffer === unit.text && approved(unit)
            ? "Wording unchanged; approval retained."
            : "Draft saved. Approval is pending.",
        );
      }
    } catch (e) {
      setError(String(e));
    }
  }
  function move(delta: number) {
    if (dirty) return;
    const target = all[index + delta];
    if (target && persist({ ...draft, activeId: target.id })) {
      setMapGap(null);
      setEditing(false);
      setMessage("");
      setDiscarded(null);
      focus.current?.focus();
    }
  }
  useEffect(() => {
    if (!approvalNext) return;
    const timer = setTimeout(() => {
      persist(approvalNext);
      setApprovalNext(null);
      setMessage("");
    }, 1400);
    return () => clearTimeout(timer);
  }, [approvalNext]);
  function confirm() {
    if (dirty || editing || approvalNext) return;
    if (isRejectedAddition(unit)) {
      setError(
        "This added draft was rejected. Choose an alternative or edit it before approval.",
      );
      return;
    }
    if (
      unit.id === "r7-section-12-passage-01" &&
      harnessSelectionConflict(draft)
    ) {
      setError(
        "Saved B contains edited wording. Reconcile it with your requested B before approving.",
      );
      return;
    }
    if (structureConflicts(draft).some((c) => c.id === unit.id)) {
      setError(
        "Your edited closing is preserved. Review the Requested closing version before approving.",
      );
      return;
    }
    if (refrainConflict(unit)) {
      setError("Keep the original refrain in lines 3 and 4 before approving.");
      return;
    }
    const next = approve(draft, unit.id, practice ? "test" : "human-ui");
    if (persist({ ...next, activeId: unit.id })) {
      setApprovalNext(next);
      setMessage(
        practice
          ? "Practice approval saved separately."
          : "Exact wording approved.",
      );
      setDiscarded(null);
      focus.current?.focus();
    }
  }
  function reviewRestore() {
    try {
      setRestorePreview(restoreDraft(restoreText));
      setError("");
    } catch (e) {
      setRestorePreview(null);
      setError(String(e));
    }
  }
  function applyRestore() {
    if (!restorePreview || dirty) return;
    try {
      // Retain every replaced draft under a unique recovery key before replacement.
      const recoveryKey = `${key}:recovery:${new Date().toISOString()}:${crypto.randomUUID()}`;
      localStorage.setItem(recoveryKey, JSON.stringify(draft));
      setRecoveryKeys((keys) => [...keys, recoveryKey]);
      if (persist(restorePreview)) {
        setBeforeRestore(draft);
        setRestorePreview(null);
        setRestoreText("");
        setEditing(false);
        setDiscarded(null);
        setMessage(
          "Backup restored. Every passage is pending approval. Previous draft retained.",
        );
      }
    } catch (e) {
      setError(`Restore failed. Your current draft is unchanged. ${String(e)}`);
    }
  }
  function download() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            ...draft,
            unsavedText: dirty ? { id: unit.id, text: buffer } : null,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = practice ? "lyric-practice.json" : "toaster-lyric-draft.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  if (showArrangement && arrangementReady(draft, practice))
    return (
      <AudioAnnotationView
        draft={draft}
        practice={practice}
        onBack={() => setShowArrangement(false)}
      />
    );
  return (
    <main className="lyric-focus" aria-label="Song lyric review">
      {unit.id !== "song-title" && (
        <StructureMap
          draft={draft}
          activeId={mapGap?.startsWith(unit.id) ? mapGap : unit.id}
          disabled={dirty || !!approvalNext}
          onNavigate={(id) => {
            const lyricId = id.replace(":instrumental", "");
            if (persist({ ...draft, activeId: lyricId })) {
              setMapGap(id.endsWith(":instrumental") ? id : null);
              setEditing(false);
              setMessage(
                id.endsWith(":instrumental")
                  ? "Intended instrumental break after this passage; no lyric approval required."
                  : "",
              );
            }
          }}
        />
      )}
      <section
        className={`lyric-sheet ${open ? "is-open" : ""}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          if (!editing && !focus.current?.contains(document.activeElement))
            setOpen(false);
        }}
        ref={focus}
      >
        {structureConflicts(draft).some((c) => c.id === unit.id) && (
          <p role="alert">
            Closing conflict: your wording is preserved. Review “Requested
            closing” in the version dots.
          </p>
        )}
        {unit.id !== "song-title" && (
          <div
            className="lyric-version-dots"
            role="toolbar"
            aria-label="Lyric versions"
          >
            {visibleStoryVersions(unit)?.map((v, i) => (
              <button
                key={v.id}
                aria-label={`Select version ${v.name}`}
                title={`Version ${i + 1}: ${v.name}, revision ${v.revision}. ${optionContext(unit.id, v.id) || ""}`}
                onFocus={() =>
                  setOptionHint(optionContext(unit.id, v.id) || null)
                }
                onMouseEnter={() =>
                  setOptionHint(optionContext(unit.id, v.id) || null)
                }
                onMouseLeave={() => setOptionHint(null)}
                onBlur={() => setOptionHint(null)}
                aria-pressed={unit.selectedVariantId === v.id}
                disabled={dirty || !!approvalNext}
                onClick={() => {
                  if (persist(selectVariant(draft, unit.id, v.id))) {
                    setEditing(false);
                    setDiscarded(null);
                    setMessage(
                      `Version ${v.name} selected. ${v.id === unit.selectedVariantId ? "" : "Approval is pending."}`,
                    );
                    setOpen(true);
                  }
                }}
              >
                <span aria-hidden="true">●</span>
              </button>
            ))}
          </div>
        )}
        {optionHint && (
          <p className="lyric-option-hint" role="status">
            {optionHint}
          </p>
        )}
        {isRejectedAddition(unit) && (
          <p className="lyric-option-hint">
            Earlier draft · rejected · choose a version above or edit.
          </p>
        )}
        {editing ? (
          <textarea
            autoFocus
            aria-label={
              unit.id === "song-title" ? "Edit song name" : "Edit passage"
            }
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
            rows={Math.max(3, buffer.split("\n").length + 1)}
          />
        ) : (
          <div
            className={`lyric-passage ${unit.id === "song-title" ? "song-name" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`${unit.id === "song-title" ? "Song name" : "Lyric passage"}. Tap or press Enter for controls.`}
            onClick={() => setOpen((x) => !x)}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          >
            {unit.text}
          </div>
        )}
        {unit.id === "song-title" && !editing && (
          <button
            className="lyric-continue"
            disabled={!!approvalNext}
            onClick={confirm}
          >
            Continue
          </button>
        )}
        {approved(unit) && !dirty && (
          <p className="lyric-approved" role="status">
            ✓ {practice ? "Practice approved" : "Approved"} ·{" "}
            {unit.variants?.find((v) => v.id === unit.selectedVariantId)?.name}{" "}
            r{unit.revision}
            {approvalNext ? " — continuing…" : ""}
          </p>
        )}
        {arrangementReady(draft, practice) &&
          !approvalNext &&
          !editing &&
          !dirty && (
            <button
              className="lyric-continue"
              onClick={() => setShowArrangement(true)}
            >
              Annotate audio
            </button>
          )}
        <div className="lyric-context" onFocus={() => setOpen(true)}>
          <div
            className="lyric-tools"
            role="toolbar"
            aria-label="Passage controls"
          >
            <button
              disabled={index === 0 || dirty || !!approvalNext}
              aria-label="Previous"
              title="Previous passage"
              onClick={() => move(-1)}
            >
              ‹
            </button>
            {editing ? (
              <>
                <button
                  aria-label="Save draft"
                  title="Save draft"
                  onClick={save}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setDiscarded(buffer);
                    setEditing(false);
                    setMessage("Edit set aside. You can recover it below.");
                  }}
                >
                  Discard edit
                </button>
              </>
            ) : (
              <>
                <button
                  disabled={!!approvalNext}
                  aria-label="Edit"
                  title="Edit wording"
                  onClick={() => {
                    setBuffer(unit.text);
                    setEditing(true);
                    setMessage("");
                  }}
                >
                  ✎
                </button>
                {unit.id !== "song-title" && (
                  <button
                    disabled={!!approvalNext}
                    aria-label={
                      approved(unit) ? "Approved · continue" : "Approve & next"
                    }
                    title={
                      approved(unit)
                        ? "Approved · continue"
                        : "Approve this wording and continue"
                    }
                    onClick={confirm}
                  >
                    ✓
                  </button>
                )}
              </>
            )}
            <button
              disabled={index === all.length - 1 || dirty || !!approvalNext}
              aria-label="Next"
              title="Next without approval"
              onClick={() => move(1)}
            >
              ›
            </button>
          </div>
          <p
            className={`lyric-state ${approved(unit) && !dirty ? "is-approved" : "is-pending"}`}
          >
            {practice ? "Practice only · " : ""}
            {unit.section} ·{" "}
            {unit.variants?.find((v) => v.id === unit.selectedVariantId)?.name}{" "}
            ·{" "}
            {unit.id === "song-title"
              ? "Name"
              : `Passage ${index} of ${draft.units.length}`}{" "}
            ·{" "}
            {dirty
              ? "Pending unsaved wording"
              : approved(unit)
                ? `Approved r${unit.revision}`
                : `Pending review r${unit.revision}`}
          </p>
          {unit.refrainConstraint?.conflicts.length ? (
            <p role="alert">
              A user-edited alternative needs refrain review. Open Context &
              history.
            </p>
          ) : null}
          {message && <p role="status">{message}</p>}
          {error && <p role="alert">{error}</p>}
          {discarded !== null && (
            <button
              onClick={() => {
                setBuffer(discarded);
                setEditing(true);
                setDiscarded(null);
              }}
            >
              Recover discarded edit
            </button>
          )}
          <details>
            <summary>Context & history</summary>
            {unit.refrainConstraint && (
              <div>
                <p>
                  Only lines 1 and 2 vary. Keep these original refrain lines
                  exactly:
                </p>
                <pre>{unit.refrainConstraint.lines.join("\n")}</pre>
                {unit.refrainConstraint.conflicts.length > 0 && (
                  <p role="alert">
                    Edited versions{" "}
                    {unit.refrainConstraint.conflicts.join(", ")} conflict with
                    the refrain. Their wording was preserved for your
                    reconciliation.
                  </p>
                )}
              </div>
            )}
            {unit.id !== "song-title" && (
              <button
                disabled={dirty || !!approvalNext}
                onClick={() => {
                  if (persist(addVariant(draft, unit.id))) {
                    setEditing(false);
                    setMessage("New alternative created. Approval is pending.");
                  }
                }}
              >
                Add alternative
              </button>
            )}
            <p>
              {optionContext(unit.id, unit.selectedVariantId || "") ||
                unit.purpose}
            </p>
            <p>Source ID: {unit.id}</p>
            {unit.id === "draft-section-06-passage-04" && draft.socialSelection?.conflict && <p role="alert">Your edited Lost intention differs from the exact requested selection. It was preserved; reconcile the wording before final handoff.</p>}
            {unit.variants?.some((v) => isEarlierStoryOption(v.id)) && (
              <details>
                <summary>Earlier story alternatives · retained</summary>
                {unit.variants
                  .filter((v) => isEarlierStoryOption(v.id))
                  .map((v) => (
                    <section key={v.id}>
                      <p>
                        {v.name} · earlier proposal · r{v.revision}
                      </p>
                      <pre>{v.text}</pre>
                      <button
                        disabled={dirty || !!approvalNext}
                        onClick={() =>
                          persist(selectVariant(draft, unit.id, v.id))
                        }
                      >
                        Revisit earlier {v.name}
                      </button>
                    </section>
                  ))}
              </details>
            )}
            {optionContext(unit.id, unit.selectedVariantId || "") && (
              <p>{optionContext(unit.id, unit.selectedVariantId!)}</p>
            )}
            <p>
              {finalSelectionCurrent(draft) ? "Final selections recorded. Four verse groups retained; closing is one verse part plus one chorus." : "Current wording differs from the final selection snapshot; review before generation."}
            </p>
            {unit.id === "r7-section-12-passage-01" &&
              harnessSelectionConflict(draft) && (
                <p role="alert">
                  Saved B was edited. Your wording is preserved; the explicit B
                  selection needs reconciliation.
                </p>
              )}
            {structureConflicts(draft)
              .filter((c) => c.id === unit.id)
              .map((c) => (
                <button
                  key={c.id}
                  onClick={() =>
                    persist(
                      revise(
                        draft,
                        unit.id,
                        c.expected,
                        "Applied exact requested closing as pending draft; prior wording retained",
                      ),
                    )
                  }
                >
                  Use requested closing as pending draft
                </button>
              ))}
            <details>
              <summary>Full lyric handoff</summary>
              <pre aria-label="Full lyric handoff text">
                {lyricHandoff(draft)}
              </pre>
            </details>
            {structureConflicts(draft).some((c) => c.id === unit.id) && (
              <p role="alert">
                Your edited closing conflicts with the requested two-unit
                ending. It is preserved. Select “Requested closing” above to
                review the exact requested wording; selecting does not approve.
              </p>
            )}
            {unit.id.startsWith("draft-") && (
              <p>
                New fourth part · agent-authored draft · pending your wording
                review.
              </p>
            )}
            {draft.archivedUnits && (
              <details>
                <summary>Retained closing history</summary>
                {draft.archivedUnits.map((u) => (
                  <section key={u.id}>
                    <p>{u.id} · retained, outside the active lyric</p>
                    {u.history.map((h) => (
                      <div key={h.revision}>
                        <p>
                          r{h.revision}: {h.reason}
                        </p>
                        <pre>{h.text}</pre>
                      </div>
                    ))}
                    {u.variants
                      ?.filter((v) => v.id !== u.selectedVariantId)
                      .map((v) => (
                        <div key={v.id}>
                          <p>Retained alternative: {v.name}</p>
                          <pre>{v.text}</pre>
                        </div>
                      ))}
                  </section>
                ))}
              </details>
            )}
            <p>Source: {draft.source.label}. Import does not imply approval.</p>
            <p>
              {complete(draft)
                ? "Every current passage and the name are approved."
                : "The whole lyric remains pending until the name and every current passage are approved."}
            </p>
            <label>
              Revisit a passage
              <select
                aria-label="Revisit a passage"
                value={unit.id}
                disabled={dirty || !!approvalNext}
                onChange={(e) => {
                  if (persist({ ...draft, activeId: e.target.value })) {
                    setEditing(false);
                    setMessage("");
                  }
                }}
              >
                {all.map((u, i) => (
                  <option key={u.id} value={u.id}>
                    {i === 0 ? "Song name" : `${i}. ${u.section}`} —{" "}
                    {approved(u) ? "approved" : "pending"}
                  </option>
                ))}
              </select>
            </label>
            <ol>
              {unit.history.map((r) => (
                <li key={r.revision}>
                  <p>
                    r{r.revision}: {r.reason}
                  </p>
                  <pre>{r.text}</pre>
                  {r.revision !== unit.revision && (
                    <button
                      disabled={dirty || !!approvalNext}
                      onClick={() => {
                        if (
                          persist(
                            revise(
                              draft,
                              unit.id,
                              r.text,
                              `Restored wording from r${r.revision}; approval reset`,
                            ),
                          )
                        )
                          setMessage("Restored as a new pending revision.");
                      }}
                    >
                      Restore r{r.revision} as draft
                    </button>
                  )}
                </li>
              ))}
            </ol>
            <button onClick={download}>Export full draft & history</button>
            <details>
              <summary>Restore an exported draft</summary>
              {recoveryKeys.length > 0 && (
                <label>
                  Earlier drafts saved before restoration
                  <select
                    aria-label="Earlier recovery draft"
                    defaultValue=""
                    onChange={(e) => {
                      if (!e.target.value) return;
                      try {
                        const raw = localStorage.getItem(e.target.value);
                        if (!raw) throw new Error("Backup unavailable.");
                        setRestoreText(raw);
                        setRestorePreview(restoreDraft(raw));
                      } catch (e) {
                        setError(String(e));
                      }
                    }}
                  >
                    <option value="">Choose a retained draft</option>
                    {recoveryKeys.map((k, i) => (
                      <option key={k} value={k}>
                        Recovery {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <p>
                Paste your exported JSON. Restoration brings back wording and
                history, with every approval reset. Your current draft is backed
                up before replacement.
              </p>
              <textarea
                aria-label="Exported draft JSON"
                value={restoreText}
                onChange={(e) => {
                  setRestoreText(e.target.value);
                  setRestorePreview(null);
                }}
                rows={5}
              />
              <button
                disabled={dirty || !restoreText.trim()}
                onClick={reviewRestore}
              >
                Review backup
              </button>
              {restorePreview && (
                <div>
                  <p>
                    Ready to restore {restorePreview.units.length} passages and
                    the song name. All will be pending.
                  </p>
                  <button
                    disabled={dirty || !!approvalNext}
                    onClick={applyRestore}
                  >
                    Restore as pending draft
                  </button>
                </div>
              )}
              {beforeRestore && (
                <button
                  disabled={dirty || !!approvalNext}
                  onClick={() => {
                    if (persist(restoreDraft(JSON.stringify(beforeRestore)))) {
                      setBeforeRestore(null);
                      setMessage(
                        "Previous draft recovered. Approvals remain pending.",
                      );
                    }
                  }}
                >
                  Undo last restore
                </button>
              )}
            </details>
            <p>
              <a href="http://127.0.0.1:5186/songs/live-latest">
                Previous editable video
              </a>{" "}
              ·{" "}
              <a href="https://github.com/hadi-nayebi/hadosh-production-contexts">
                Production record
              </a>
            </p>
          </details>
          <button
            className="hide-lyric-tools"
            onClick={() => {
              setOpen(false);
              (document.activeElement as HTMLElement)?.blur();
            }}
          >
            Hide controls
          </button>
        </div>
      </section>
    </main>
  );
}
