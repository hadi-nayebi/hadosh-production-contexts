import TimingStatusBar from "./TimingStatusBar";
import { changePhrase } from "./phraseTiming";
import { useTimingNavigationSave } from "./timingNavigation";
import ManualBeatControls from "./ManualBeatControls";
import { setManualBeatRemoved } from "./manualBeat";
import { saveFullView, timingDraftBase, matchesTimingDraft } from "./fullViewStore";
import { translateRegion, clampRegionDelta } from "./translateRegion";
import TimelineRegions from "./TimelineRegions";
import type { Phrase, Container, Lane } from "./audioAnchors";
import { useEffect, useRef, useState, type RefObject } from "react";
import SourceSpectrogram from "./SourceSpectrogram";
import { sourceTimeAtPointer } from "./SpectrogramTimingPlot";
import { adjustBoundary, undoAnnotation, type Annotation } from "./audioAnnotation";
import { adjustWord, undoWordTiming, wordTiming, wordTimingProblem } from "./wordTiming";
import { approveAnchor, emptyReview, type Anchor } from "./anchorReview";

export function previewAnchor(anchor: Anchor, time: number): Anchor {
  if (time === anchor.time) return anchor;
  return {
    ...anchor,
    time,
    manual: true,
    status: anchor.status === "approved" || anchor.status === "stale" ? "stale" : "manual pending",
  };
}

function AnchorLine({
  anchor,
  time,
  start,
  end,
  editable,
  selected,
  onSelect,
  onChange,
}: {
  anchor: Anchor;
  time: number;
  start: number;
  end: number;
  editable: boolean;
  selected: boolean;
  onSelect: () => void;
  onChange: (time: number) => void;
}) {
  const drag = useRef<{ id: number; original: number } | null>(null);
  const kind = anchor.types.some((t) => t.includes("section"))
    ? "section"
    : anchor.wordIndex !== undefined
      ? "word"
      : anchor.index !== undefined
        ? "phrase"
        : "rhythm";
  const endEdge = anchor.edge === "end" || anchor.types.some((t) => t.endsWith("end"));
  const description = `${anchor.label} · ${anchor.types.join(", ")} · ${time.toFixed(3)} seconds · ${anchor.status}`;
  const point = (el: HTMLButtonElement, x: number) => {
    const r = el.parentElement!.getBoundingClientRect();
    onChange(sourceTimeAtPointer(x, r.left, r.width, start, end, 0, end));
  };
  return (
    <button
      className={`full-audio-anchor kind-${kind} ${endEdge ? "end" : "start"} ${selected ? "selected" : ""}`}
      style={{
        left: `${(100 * (time - start)) / (end - start)}%`,
        borderLeftColor: "currentColor",
        color: anchor.status === "approved" ? "#b9e4cb" : endEdge ? "#ff8c98" : "#f9d55b",
      }}
      aria-label={description}
      title={description}
      aria-pressed={selected}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        if (!editable) return;
        onSelect();
        e.preventDefault();
        drag.current = { id: e.pointerId, original: time };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
        if (drag.current?.id === e.pointerId) point(e.currentTarget, e.clientX);
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
        if (drag.current?.id !== e.pointerId) return;
        point(e.currentTarget, e.clientX);
        drag.current = null;
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={(e) => {
        e.stopPropagation();
        if (drag.current) onChange(drag.current.original);
        drag.current = null;
      }}
      onLostPointerCapture={() => {
        if (drag.current) onChange(drag.current.original);
        drag.current = null;
      }}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (editable && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
          e.preventDefault();
          onChange(time + (e.key === "ArrowLeft" ? -1 : 1) * (e.shiftKey ? 0.1 : 0.01));
        }
      }}
    >
      <span aria-hidden="true">{selected ? "●" : endEdge ? "└" : "┌"}</span>
    </button>
  );
}

export default function FullAudioView({
  practice = false,
  saving = false,
  saveError,
  phrases = [],
  sections = [],
  lanes = [],
  viewKey,
  annotation,
  anchors,
  audio,
  url,
  onSave,
  onOpen,
  onBack,
  repairActive,
  onDirty,
}: {
  practice?: boolean;
  saving?: boolean;
  saveError?: string;
  phrases?: Phrase[];
  sections?: Container[];
  lanes?: Lane[];
  viewKey: string;
  annotation: Annotation;
  anchors: Anchor[];
  audio: RefObject<HTMLAudioElement | null>;
  url: string;
  onSave: (a: Annotation) => boolean | Promise<boolean>;
  onOpen: (anchor: Anchor, draftTime?: string) => void;
  onBack: () => void;
  repairActive: boolean;
  onDirty: (dirty: boolean) => void;
}) {
  const viewRaw = useRef(localStorage.getItem(viewKey));
  const [draftStorageError, setDraftStorageError] = useState("");
  const [persistRetry, setPersistRetry] = useState(0);
  const [retained] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem(viewKey) || "null");
      if (
        !v ||
        !Number.isFinite(v.span) ||
        v.span < 0.25 ||
        v.span > annotation.duration ||
        !Number.isFinite(v.center) ||
        v.center < 0 ||
        v.center > annotation.duration
      )
        return null;
      return v;
    } catch {
      return null;
    }
  });
  const [recovery] = useState(() => {
    const current =
      anchors.some((a) => a.id === retained?.id) &&
      !(
        retained?.id?.startsWith("boundary:") &&
        phrases.some(
          (p) => retained.id === `boundary:${p.first}` || retained.id === `boundary:${p.last + 1}`,
        )
      ) &&
      (!retained?.draft?.move ||
        [retained.draft.move.start, retained.draft.move.end].every(
          (id: string) => id.startsWith("phrase:") || id.startsWith("word:"),
        )) &&
      matchesTimingDraft(retained?.draft?.base, annotation) &&
      typeof retained?.draft?.edit === "string"
        ? retained.draft
        : null;
    return {
      current,
      older: retained?.draft && !current ? retained.draft : retained?.retainedDraft,
    };
  });
  const recoveredDraft = recovery.current,
    olderDraft = recovery.older;
  const [viewport, setViewport] = useState({
    span: retained?.span ?? annotation.duration,
    center: retained?.center ?? annotation.duration / 2,
  });
  const [id, setId] = useState<string>(
      anchors.some((a) => a.id === retained?.id) ? retained.id : "",
    ),
    [edit, setEdit] = useState<string | null>(recoveredDraft?.edit ?? null),
    [filter, setFilter] = useState<string>(
      ["auto", "word", "phrase", "section", "rhythm"].includes(retained?.filter)
        ? retained.filter
        : "auto",
    ),
    [error, setError] = useState(""),
    [ready, setReady] = useState(false);
  const [regionMove, setRegionMove] = useState<{
    start: Anchor;
    end: Anchor;
    delta: number;
  } | null>(() => {
    const move = recoveredDraft?.move,
      start = anchors.find((a) => a.id === move?.start),
      end = anchors.find((a) => a.id === move?.end);
    return start && end && Number.isFinite(move?.delta) ? { start, end, delta: move.delta } : null;
  });
  const [beatDirty, setBeatDirty] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [seekTarget, setSeekTarget] = useState<number | undefined>(undefined);
  const [playTime, setPlayTime] = useState(audio.current?.currentTime ?? 0);
  const seekPlayback = (delta: number) => {
    const el = audio.current;
    if (!el) return;
    const time = Math.max(0, Math.min(annotation.duration, el.currentTime + delta));
    el.currentTime = time;
    setPlayTime(time);
    setSeekTarget(time);
    setViewport((v) => ({ ...v, center: time }));
  };
  const [context, setContext] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const viewSnapshot = {
    ...viewport,
    id,
    filter,
    retainedDraft: olderDraft,
    draft:
      edit === null
        ? null
        : {
            base: timingDraftBase(annotation),
            edit,
            move: regionMove
              ? { start: regionMove.start.id, end: regionMove.end.id, delta: regionMove.delta }
              : null,
          },
  };
  useEffect(() => {
    try {
      viewRaw.current = saveFullView(localStorage, viewKey, viewRaw.current, viewSnapshot);
      setDraftStorageError("");
    } catch (e) {
      setDraftStorageError(
        e instanceof Error
          ? e.message
          : "Draft could not be saved; current fields are retained here.",
      );
    }
  }, [viewKey, viewport, id, filter, edit, regionMove, annotation, persistRetry]);
  useEffect(() => {
    const el = audio.current;
    if (!el) return;
    const sync = () => {
      setPlaying(!el.paused && !el.ended);
      setPlayTime(el.currentTime);
    };
    for (const e of ["play", "pause", "ended", "timeupdate", "seeked"])
      el.addEventListener(e, sync);
    return () => {
      for (const e of ["play", "pause", "ended", "timeupdate", "seeked"])
        el.removeEventListener(e, sync);
    };
  }, [audio]);
  const anchor = anchors.find((a) => a.id === id),
    selectedPhrase = phrases.find((p) => p.id === anchor?.phraseId),
    anchorDirty =
      edit !== null &&
      !!anchor &&
      (!edit.trim() || !Number.isFinite(Number(edit)) || Number(edit) !== anchor.time),
    dirty = anchorDirty || beatDirty;
  useEffect(() => {
    onDirty(dirty);
  }, [dirty, onDirty]);
  const choose = (a: Anchor) => {
    if (dirty && a.id !== id) {
      setError("Save or discard this adjustment first.");
      return;
    }
    if (a.id !== id) {
      setEdit(null);
      setRegionMove(null);
      onDirty(false);
    }
    setId(a.id);
    setError("");
  };
  const change = (n: number) => {
    setRegionMove(null);
    setEdit(String(n));
    onDirty(!!anchor && n !== anchor.time);
  };
  const candidate = () => {
    if (regionMove)
      return translateRegion(annotation, regionMove.start, regionMove.end, regionMove.delta);
    if (!anchor || edit === null) return annotation;
    const time = Number(edit);
    if (!edit.trim() || !Number.isFinite(time) || time < 0 || time > annotation.duration)
      throw Error("Keep time inside the recording.");
    if (anchor.wordIndex !== undefined)
      return adjustWord(annotation, annotation.items[anchor.wordIndex].id, anchor.edge!, time);
    if (anchor.phraseId) return changePhrase(annotation, anchor.phraseId, anchor.edge!, time);
    if (anchor.index !== undefined) return adjustBoundary(annotation, anchor.index, time);
    const review = structuredClone(annotation.review ?? emptyReview()),
      r = review.rhythm.find((r) => r.id === anchor.id);
    if (!r) throw Error("Unknown rhythm anchor.");
    r.history = [...(r.history ?? []), r.time];
    r.time = time;
    r.revision++;
    return { ...annotation, review };
  };
  let invalid = "";
  let draftAnnotation = annotation;
  try {
    draftAnnotation = candidate();
  } catch (e) {
    invalid = e instanceof Error ? e.message : String(e);
  }
  const timingConflict = wordTimingProblem(draftAnnotation, wordTiming(draftAnnotation).intervals);
  const reset = () => {
    setEdit(null);
    setRegionMove(null);
    onDirty(false);
    setError("");
  };
  const shownAnchors = anchors.map((a) => {
    if (anchor?.phraseId && !regionMove && edit !== null && a.wordIndex !== undefined) {
      const word = wordTiming(draftAnnotation).intervals.find(
        (w) => w.id === annotation.items[a.wordIndex!].id,
      );
      if (word) return previewAnchor(a, word[a.edge!]);
    }
    if (regionMove) {
      const { start, end, delta } = regionMove;
      const moved =
        start.wordIndex !== undefined
          ? a.wordIndex === start.wordIndex
          : (start.phraseId
              ? a.phraseId === start.phraseId
              : a.index !== undefined &&
                !a.phraseId &&
                a.index >= start.index! &&
                a.index <= end.index!) ||
            (a.wordIndex !== undefined && a.wordIndex >= start.index! && a.wordIndex < end.index!);
      if (moved) return previewAnchor(a, a.time + delta);
    }
    return a.id === id && edit !== null && edit.trim() && Number.isFinite(Number(edit))
      ? previewAnchor(a, Number(edit))
      : a;
  });
  const commitForNavigation = async () => {
    if (!dirty) return true;
    if (beatDirty || repairActive || draftStorageError || invalid) {
      setError(
        invalid || draftStorageError || "Finish or discard the current repair before leaving.",
      );
      return false;
    }
    try {
      if (!(await onSave(candidate()))) return false;
      // Navigation can unmount before the draft effect runs. Clear its checkpoint synchronously.
      viewRaw.current = saveFullView(localStorage, viewKey, viewRaw.current, {
        ...viewSnapshot,
        draft: null,
      });
      reset();
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      return false;
    }
  };
  useTimingNavigationSave(true, commitForNavigation);
  const intervalActions = (kind: string, count: number) => (
    <>
      {!dirty && (
        <button
          aria-label={
            edit === null
              ? kind === "phrase"
                ? `Unlock phrase and all ${count} words`
                : "Unlock word"
              : "Lock interval"
          }
          disabled={dirty}
          title={
            edit === null
              ? kind === "phrase"
                ? `Unlock phrase and all ${count} words`
                : "Unlock word"
              : "Lock interval"
          }
          onClick={() => (edit === null ? setEdit(String(anchor!.time)) : reset())}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="5" y="10" width="14" height="11" rx="2" />
            <path d={edit === null ? "M8 10V6a4 4 0 0 1 8 0v4" : "M8 10V6a4 4 0 0 1 8 0"} />
          </svg>
        </button>
      )}
      {edit === null && (
        <button
          aria-label="Approve selected timing"
          title="Approve selected timing"
          disabled={!ready || repairActive || !!timingConflict || anchor?.status === "approved"}
          onClick={() => anchor && onSave(approveAnchor(annotation, anchor))}
        >
          ✓
        </button>
      )}
      {dirty && (
        <>
          <button
            aria-label={regionMove ? "Save interval" : "Save anchor"}
            title={regionMove ? "Save interval" : "Save anchor"}
            aria-disabled={!!invalid || repairActive || !!draftStorageError}
            onClick={async () => {
              if (invalid || repairActive || draftStorageError) {
                setError(invalid || draftStorageError || "Finish the repair before saving.");
                return;
              }
              try {
                if (await onSave(candidate())) reset();
                else
                  setError(
                    "Timing was not saved. Your adjustment is retained; check the save error and try again.",
                  );
              } catch (e) {
                setError(String(e));
              }
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 3h12l4 4v14H3V3h2Z" />
              <path d="M7 3v6h10V3M7 21v-8h10v8" />
            </svg>
          </button>
          <button aria-label="Discard adjustment" title="Discard adjustment" onClick={reset}>
            ×
          </button>
        </>
      )}
    </>
  );
  return (
    <section
      className={`full-audio-view ${context || id ? "is-active" : ""} ${dismissed ? "is-dismissed" : ""}`}
      aria-label="Full audio editor"
      tabIndex={0}
      onPointerDown={() => {
        setDismissed(false);
        setContext(true);
      }}
      onPointerLeave={() => setDismissed(false)}
      onFocusCapture={() => setDismissed(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          if (dirty) {
            setError("Save or discard this adjustment first.");
            return;
          }
          reset();
          setId("");
          setContext(false);
          setDismissed(true);
          (e.target as HTMLElement).blur();
        }
      }}
    >
      <div className="full-audio-tools">
        <button
          aria-label="← All sections"
          title="All sections"
          onClick={async () => {
            if (await commitForNavigation()) onBack();
          }}
        >
          ←
        </button>
        <button
          aria-label="Seek backward 5 seconds"
          title="Back 5 seconds"
          onClick={() => seekPlayback(-5)}
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 5v14L1 12zM23 5v14L13 12z" />
          </svg>
        </button>
        <button
          aria-label={playing ? "Pause" : "Play"}
          title={playing ? "Pause" : "Play"}
          onClick={async () => {
            const el = audio.current;
            if (!el) return;
            if (!el.paused) {
              el.pause();
              return;
            }
            let timer: ReturnType<typeof setTimeout> | undefined;
            try {
              await Promise.race([
                el.play(),
                new Promise<never>((_, reject) => {
                  timer = setTimeout(
                    () => reject(Error("Playback did not start. Try again.")),
                    5000,
                  );
                }),
              ]);
            } catch (e) {
              el.pause();
              setError(String(e));
            } finally {
              clearTimeout(timer);
            }
          }}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>
        <button
          aria-label="Seek forward 5 seconds"
          title="Forward 5 seconds"
          onClick={() => seekPlayback(5)}
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 5v14l10-7zM13 5v14l10-7z" />
          </svg>
        </button>
        <label title="Visible anchor kinds">
          <select
            aria-label="Visible anchor kinds"
            value={filter}
            disabled={dirty}
            onChange={(e) => {
              if (dirty) return;
              reset();
              setId("");
              setFilter(e.target.value);
            }}
          >
            {["auto", "word", "phrase", "section", "rhythm"].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <button
          aria-label="Dismiss tools"
          title="Dismiss tools"
          disabled={dirty}
          onClick={async () => {
            if (dirty) return;
            reset();
            setId("");
            setContext(false);
            setDismissed(true);
          }}
        >
          ×
        </button>
        <ManualBeatControls
          annotation={annotation}
          sections={sections}
          lanes={lanes}
          initialTime={audio.current?.currentTime ?? 0}
          disabled={anchorDirty || edit !== null || !ready || repairActive || !!draftStorageError}
          onSave={onSave}
          onDirty={setBeatDirty}
          onAdded={(newId, time) => {
            setId(newId);
            setFilter("rhythm");
            setEdit(null);
            setViewport((v) => ({ ...v, center: time }));
          }}
        />
      </div>
      <SourceSpectrogram
        audio={audio}
        url={url}
        hash={annotation.audioHash}
        duration={annotation.duration}
        value={anchor?.time ?? 0}
        savedValue={anchor?.time ?? 0}
        now={audio.current?.currentTime ?? 0}
        min={0}
        max={annotation.duration}
        disabled={false}
        onChange={() => {}}
        onReady={setReady}
        full={{
          view: viewport,
          seekTarget,
          onViewportChange: (span, center) =>
            setViewport((old) =>
              old.span === span && old.center === center ? old : { span, center },
            ),
          overlay: (start, end) => {
            const span = end - start;
            return (
              <>
                <TimelineRegions
                  annotation={annotation}
                  phrases={phrases}
                  anchors={shownAnchors}
                  start={start}
                  end={end}
                  selected={id}
                  editTime={
                    edit !== null && edit.trim() && Number.isFinite(Number(edit))
                      ? Number(edit)
                      : null
                  }
                  audio={audio}
                  dirty={dirty}
                  onEdge={(a, time) => {
                    setRegionMove(null);
                    setId(a.id);
                    setEdit(String(time));
                    onDirty(time !== anchors.find((x) => x.id === a.id)!.time);
                  }}
                  renderActions={intervalActions}
                  editable={edit !== null}
                  moveDelta={regionMove?.delta ?? 0}
                  onMove={(region, delta) => {
                    const originalStart = anchors.find((a) => a.id === region.start.id)!,
                      originalEnd = anchors.find((a) => a.id === region.end.id)!;
                    delta = clampRegionDelta(annotation, originalStart, originalEnd, delta);
                    setRegionMove({ start: originalStart, end: originalEnd, delta });
                    setEdit(String(anchor!.time + delta));
                    onDirty(delta !== 0);
                  }}
                  onSelect={choose}
                />
                {anchor && !selectedPhrase && !(anchor.wordIndex !== undefined && span <= 15) && (
                  <div
                    className="interval-actions"
                    style={{
                      left: `clamp(0px, ${(100 * (anchor.time - start)) / span}%, max(0px, calc(100% - 320px)))`,
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {intervalActions(anchor.wordIndex === undefined ? "anchor" : "word", 1)}
                  </div>
                )}
                {shownAnchors
                  .filter(
                    (a) =>
                      !(
                        span <= 15 &&
                        anchor?.wordIndex !== undefined &&
                        a.wordIndex === anchor.wordIndex
                      ) &&
                      a.time >= start &&
                      a.time <= end &&
                      (a.id === id ||
                        (filter === "auto"
                          ? span <= 6 ||
                            a.types.some((t) => t.includes("section")) ||
                            (span <= 30 && a.wordIndex === undefined)
                          : filter === "rhythm"
                            ? a.index === undefined && a.wordIndex === undefined
                            : a.types.some((t) => t.includes(filter)))),
                  )
                  .map((a) => (
                    <AnchorLine
                      key={a.id}
                      anchor={a}
                      time={a.time}
                      start={start}
                      end={end}
                      editable={a.id === id && edit !== null && !(regionMove && dirty)}
                      selected={a.id === id}
                      onSelect={() => choose(anchors.find((original) => original.id === a.id)!)}
                      onChange={change}
                    />
                  ))}
              </>
            );
          },
        }}
      />
      <TimingStatusBar
        annotation={annotation}
        anchors={anchors}
        time={playTime}
        practice={practice}
        saving={saving}
        dirty={dirty || repairActive}
        error={saveError || draftStorageError || error || undefined}
      />
      {beatDirty
        ? null
        : anchor && (
            <div className="full-audio-selection">
              <h3>
                {selectedPhrase?.text ?? anchor.label} · {anchor.types.join(" / ")}
              </h3>
              <p>
                {(edit !== null && edit.trim() && Number.isFinite(Number(edit))
                  ? Number(edit)
                  : anchor.time
                ).toFixed(3)}{" "}
                s ·{" "}
                {edit !== null
                  ? "Editing"
                  : anchor.status === "approved"
                    ? "✓ Approved"
                    : anchor.status}
              </p>
              {edit !== null && (
                <label>
                  Seconds{" "}
                  <input
                    aria-label="Selected full-audio anchor seconds"
                    readOnly={!!regionMove && dirty}
                    value={edit}
                    onChange={(e) => {
                      setRegionMove(null);
                      setEdit(e.target.value);
                      onDirty(e.target.value !== String(anchor.time));
                    }}
                  />
                </label>
              )}

              {regionMove && (
                <p>
                  Moving the whole{" "}
                  {regionMove.start.wordIndex !== undefined ? "word" : "phrase and its words"};
                  duration preserved.
                  {regionMove.start.wordIndex === undefined
                    ? " Relative word spacing is preserved."
                    : ""}
                </p>
              )}
              <button
                aria-label="Undo timing adjustment"
                title="Undo timing adjustment"
                hidden={edit !== null}
                disabled={
                  dirty ||
                  repairActive ||
                  (anchor.wordIndex !== undefined
                    ? !annotation.wordTiming?.undo.length
                    : anchor.index !== undefined
                      ? !annotation.undoStack.length
                      : !annotation.review?.rhythm.find((r) => r.id === anchor.id)?.history?.length)
                }
                onClick={async () => {
                  try {
                    let next: Annotation;
                    if (anchor.wordIndex !== undefined) next = undoWordTiming(annotation);
                    else if (anchor.index !== undefined) next = undoAnnotation(annotation);
                    else {
                      const review = structuredClone(annotation.review ?? emptyReview()),
                        r = review.rhythm.find((r) => r.id === anchor.id)!;
                      r.time = r.history!.pop()!;
                      r.revision++;
                      next = { ...annotation, review };
                    }
                    if (await onSave(next)) reset();
                  } catch (e) {
                    setError(e instanceof Error ? e.message : String(e));
                  }
                }}
              >
                ↶
              </button>
              {annotation.review?.rhythm.some(
                (r) => r.id === anchor.id && r.origin === "manual",
              ) && (
                <button
                  aria-label="Remove manual beat"
                  title="Remove manual beat"
                  disabled={dirty || repairActive}
                  onClick={async () => {
                    if (await onSave(setManualBeatRemoved(annotation, anchor.id, true))) setId("");
                  }}
                >
                  −♩
                </button>
              )}
              <button
                aria-label="Approve selected timing"
                title="Approve selected timing"
                hidden={
                  edit !== null ||
                  anchor.status === "approved" ||
                  anchor.wordIndex !== undefined ||
                  !!selectedPhrase
                }
                disabled={
                  dirty ||
                  !ready ||
                  repairActive ||
                  !!timingConflict ||
                  anchor.status === "approved"
                }
                onClick={() => onSave(approveAnchor(annotation, anchor))}
              >
                ✓
              </button>
              <button
                aria-label="Open focused editor"
                title="Open focused editor"
                disabled={!!invalid || !!draftStorageError}
                onClick={async () => {
                  if (!(await commitForNavigation())) return;
                  const nextTime =
                    edit !== null && Number.isFinite(Number(edit)) ? Number(edit) : anchor.time;
                  onOpen({ ...anchor, time: nextTime }, String(nextTime));
                }}
              >
                ⌕
              </button>
            </div>
          )}
      {draftStorageError && (
        <div role="alert">
          <p>{draftStorageError}</p>
          <button
            onClick={async () => {
              const link = document.createElement("a"),
                url = URL.createObjectURL(
                  new Blob([JSON.stringify(viewSnapshot)], { type: "application/json" }),
                );
              link.href = url;
              link.download = "unsaved-timeline-draft.json";
              link.click();
              setTimeout(() => URL.revokeObjectURL(url), 1000);
            }}
          >
            Save current draft copy
          </button>
          <button onClick={() => setPersistRetry((n) => n + 1)}>Retry draft storage</button>
        </div>
      )}
      {olderDraft && (
        <details>
          <summary>Retained adjustment from earlier saved timing</summary>
          <p>Earlier draft retained; current timing has changed. It has not been applied.</p>
          <button
            onClick={async () => {
              const link = document.createElement("a"),
                url = URL.createObjectURL(
                  new Blob([JSON.stringify(olderDraft)], { type: "application/json" }),
                );
              link.href = url;
              link.download = "retained-timing-draft.json";
              link.click();
              setTimeout(() => URL.revokeObjectURL(url), 1000);
            }}
          >
            Save retained adjustment
          </button>
        </details>
      )}
      {timingConflict && !invalid && (
        <p role="status">
          Timing conflict: {timingConflict} Save is available; resize or adjust the conflicting word
          before approval or preview.
        </p>
      )}
      {(error || invalid) && (
        <p role="status">
          ⚠ {error || invalid}
          {invalid
            ? regionMove
              ? " — interval draft retained locally; adjust or discard before saving."
              : " — adjust or discard this draft before leaving."
            : ""}
        </p>
      )}
    </section>
  );
}
