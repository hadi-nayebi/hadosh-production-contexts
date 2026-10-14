import { openingMusicReport } from "./openingMusicReport";
import { sceneLifetimes } from "./SceneLifetime";
import "./scene-creation.css";
import SectionProgress from "./SectionProgress";
import LiveScenePlayback from "./LiveScenePlayback";
import AudioAssetsPanel from "./AudioAssetsPanel";
import { stemWordPreview } from "./stemAnalysis";
import VisualPlanGallery from "./VisualPlanGallery";
import SceneEditor from "./SceneEditor";
import { SceneVideoFrame } from "./SceneVideoFrame";
import { newScenePlan, sceneContainers, type ScenePlan } from "./sceneContainers";
import { sceneShots } from "./sceneShots";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import type { Annotation } from "./audioAnnotation";
import {
  buildWordPreview,
  readPreviewHistory,
  savedPreviewSource,
  type PreviewVersion,
} from "./wordPreviewStore";
import { WordVideoFrame } from "./WordVideoFrame";

export default function WordVideoPreview({
  candidate,
  practice,
  sceneMode = false,
  onDirty,
}: {
  candidate: {
    annotation: Annotation;
    audioUrl: string;
    playbackUrl?: string;
    playbackSha256?: string;
    playbackFormat?: string;
    sections?: { id: string; label: string }[];
  };
  practice: boolean;
  sceneMode?: boolean;
  onDirty?: (dirty: boolean) => void;
}) {
  const [exportText, setExportText] = useState("");
  const [annotation, setAnnotation] = useState<Annotation | null>(null),
    [error, setError] = useState(""),
    [time, setTime] = useState(0),
    [verifiedSrc, setVerifiedSrc] = useState(""),
    [mediaError, setMediaError] = useState("");
  const [sceneEditing, setSceneEditing] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [sceneDirty, setSceneDirty] = useState(false);
  const [scenePlan, setScenePlan] = useState<ScenePlan | null>(null);
  const [livePlaying, setLivePlaying] = useState(false);
  const fpsBadge = useRef<HTMLSpanElement>(null);
  const updateFps = useCallback((fps: number) => {
    if (fpsBadge.current) fpsBadge.current.textContent = fps ? `${fps} fps` : "Paused";
  }, []);
  const audio = useRef<HTMLAudioElement>(null);
  const [mediaAttempt, setMediaAttempt] = useState(0),
    [historyAttempt, setHistoryAttempt] = useState(0),
    [historyError, setHistoryError] = useState("");
  const [reviewTime, setReviewTime] = useState("0"),
    [repairPending, setRepairPending] = useState(false);
  const source = candidate.annotation,
    key = `canvas-audio-annotation:${practice ? "practice" : "real"}:${source.lyricStamp}:${source.audioHash}`;
  const historyKey = `${key}:word-previews`;
  const refreshKey = `canvas-live-refresh-time:${practice ? "practice" : "real"}:${source.audioHash}`;
  const [versions, setVersions] = useState<PreviewVersion[]>([]);
  const [selectedId, setSelectedId] = useState(""),
    [saved, setSaved] = useState<Annotation | null>(null),
    [building, setBuilding] = useState(false);
  const stale = !!annotation && (!saved || JSON.stringify(annotation) !== JSON.stringify(saved));
  const visualTiming = versions.find((v) => v.id === selectedId)?.visualTiming;
  const stemPreview = useMemo(
    () => (annotation ? stemWordPreview(annotation) : null),
    [annotation],
  );
  const renderAnnotation = stemPreview?.annotation ?? annotation;
  const shots = useMemo(
    () => (renderAnnotation ? sceneShots(renderAnnotation, scenePlan ?? undefined) : []),
    [renderAnnotation, scenePlan],
  );
  const openingRhythm = useMemo(
    () => (renderAnnotation ? openingMusicReport(renderAnnotation, scenePlan?.opening) : null),
    [renderAnnotation, scenePlan],
  );
  function readSaved() {
    return savedPreviewSource(localStorage, source, key);
  }
  async function refreshSaved() {
    try {
      setRepairPending(!!JSON.parse(localStorage.getItem(`${key}:word-repair`) || "null")?.active);
      setSaved(await readSaved());
      setError("");
    } catch (e) {
      setSaved(null);
      setError(`Saved timing is invalid: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  async function build() {
    setBuilding(true);
    try {
      const result = await buildWordPreview(
        localStorage,
        source,
        practice,
        () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve())),
      );
      setVersions(result.versions);
      setSelectedId(result.version.id);
      setAnnotation(result.version.annotation);
      setSaved(result.current);
      setError("");
      setHistoryError("");
      return true;
    } catch (e) {
      setError(
        `Preview update failed: ${e instanceof Error ? e.message : String(e)}. Previous preview retained.`,
      );
      return false;
    } finally {
      setBuilding(false);
    }
  }
  async function openLatest() {
    setBuilding(true);
    try {
      const current = await readSaved();
      const history = await readPreviewHistory(localStorage, source, historyKey);
      const last = history
        .filter((v) => JSON.stringify(v.annotation) === JSON.stringify(current))
        .at(-1);
      if (last) {
        setVersions(history);
        setSelectedId(last.id);
        setAnnotation(last.annotation);
        setSaved(current);
        setError("");
      } else if (!(await build())) return false;
      return true;
    } catch (e) {
      setError(`Latest preview could not be loaded: ${String(e)}. Current preview retained.`);
      return false;
    } finally {
      setBuilding(false);
    }
  }
  useEffect(() => {
    const controller = new AbortController();
    let disposed = false,
      objectUrl = "";
    const timeout = setTimeout(() => controller.abort(), 15000);
    setVerifiedSrc("");
    setMediaError("");
    (async () => {
      try {
        const response = await fetch(candidate.playbackUrl ?? candidate.audioUrl, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Recording request failed.");
        const bytes = await response.arrayBuffer();
        const digest = Array.from(
          new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)),
          (b) => b.toString(16).padStart(2, "0"),
        ).join("");
        if (digest !== (candidate.playbackSha256 ?? candidate.annotation.audioHash))
          throw new Error("Recording does not match the timing source.");
        if (disposed) return;
        objectUrl = URL.createObjectURL(
          new Blob([bytes], { type: candidate.playbackUrl ? "audio/wav" : "audio/mpeg" }),
        );
        setVerifiedSrc(objectUrl);
      } catch (e) {
        if (!disposed)
          setMediaError(
            `Recording unavailable: ${e instanceof Error ? e.message : "verification failed"}.`,
          );
      } finally {
        clearTimeout(timeout);
      }
    })();
    return () => {
      disposed = true;
      controller.abort();
      clearTimeout(timeout);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [
    candidate.audioUrl,
    candidate.playbackUrl,
    candidate.playbackSha256,
    candidate.annotation.audioHash,
    mediaAttempt,
  ]);
  function exportProps() {
    if (!annotation) return;
    const blob = new Blob(
      [
        JSON.stringify(
          {
            annotation: renderAnnotation,
            originalAnnotation: annotation,
            stemEstimatedWordIds: stemPreview?.changedIds ?? [],
            visualTiming,
            ...(sceneMode
              ? {
                  sceneBuild: "live-scenes-v37",
                  sceneLifetimes: renderAnnotation ? sceneLifetimes(renderAnnotation) : [],
                  scenePlan: scenePlan ?? newScenePlan(annotation),
                  shotSchedule: shots,
                }
              : {}),
            audioUrl: new URL(candidate.playbackUrl ?? candidate.audioUrl, location.origin).href,
            playbackSha256: candidate.playbackSha256 ?? annotation.audioHash,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    void blob.text().then(setExportText);
    const url = URL.createObjectURL(blob),
      link = document.createElement("a");
    link.href = url;
    link.download = `word-preview-${annotation.audioHash.slice(0, 8)}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  useEffect(() => {
    refreshSaved();
    let disposed = false;
    setBuilding(true);
    readPreviewHistory(localStorage, source, historyKey)
      .then((history) => {
        if (disposed) return;
        setHistoryError("");
        setVersions(history);
        const last = history.at(-1);
        if (last) {
          setAnnotation(last.annotation);
          setSelectedId(last.id);
        }
      })
      .catch(() => {
        if (!disposed)
          setHistoryError(
            "Preview history could not be loaded or validated. Existing data retained.",
          );
      })
      .finally(() => {
        if (!disposed) setBuilding(false);
      });
    const changed = (e: StorageEvent) => {
      if (e.key === key || e.key === `${key}:word-repair`) refreshSaved();
    };
    window.addEventListener("storage", changed);
    let frame = 0;
    const tick = () => {
      if (!sceneMode && audio.current) setTime(audio.current.currentTime);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("storage", changed);
    };
  }, [key, historyAttempt, sceneMode]);
  if (sceneMode)
    return (
      <main className="scene-stage-page">
        <div className="scene-version-bar" aria-label="Current live version">
          <span>
            Live HTML · scene v37 ·{" "}
            {annotation
              ? `${stale ? "older timing" : "latest saved timing"} · r${annotation.revision}/w${annotation.wordTiming?.revision}`
              : "loading saved timing"}
          </span>
          <span>
            {candidate.playbackFormat ?? "MP3"} · stems v1 · {stemPreview?.changedIds.length ?? 0}{" "}
            provisional word refinements
          </span>
          <span ref={fpsBadge}>{livePlaying ? "Playing live" : "Paused"}</span>
          {sceneDirty && <span>unsaved scene</span>}
          <button
            disabled={sceneDirty || building || !verifiedSrc || repairPending}
            onClick={() => {
              audio.current?.pause();
              setPlansOpen(false);
              const playhead = audio.current?.currentTime ?? time;
              void openLatest().then((loaded) => {
                if (!loaded) return;
                try {
                  sessionStorage.setItem(refreshKey, String(playhead));
                } catch {
                  /* Reload remains usable when session storage is unavailable. */
                }
                window.location.reload();
              });
            }}
          >
            Open latest
          </button>
        </div>
        <nav className="scene-view-switch" aria-label="Scene workspace views">
          <button aria-pressed={!plansOpen} onClick={() => setPlansOpen(false)}>
            Live scene
          </button>
          <button
            aria-pressed={plansOpen}
            onClick={() => {
              audio.current?.pause();
              setPlansOpen(true);
            }}
          >
            Visual plans
          </button>
        </nav>
        {plansOpen && (
          <VisualPlanGallery
            audioHash={source.audioHash}
            onSeek={(t) => {
              audio.current?.pause();
              if (audio.current) audio.current.currentTime = t;
              setTime(t);
              setPlansOpen(false);
            }}
          />
        )}

        <div className="scene-stage-void" hidden={plansOpen}>
          {annotation && (
            <LiveScenePlayback
              audio={audio}
              onFps={updateFps}
              annotation={renderAnnotation!}
              visualTiming={visualTiming}
              plan={scenePlan ?? newScenePlan(annotation)}
            />
          )}
        </div>
        <div className="scene-stage-bar" hidden={plansOpen}>
          {verifiedSrc && annotation && (
            <audio
              ref={audio}
              controls
              preload="metadata"
              src={verifiedSrc}
              aria-label="Scene recording"
              onPlay={() => setLivePlaying(true)}
              onPause={() => setLivePlaying(false)}
              onLoadedMetadata={() => {
                let t =
                  (sceneContainers(annotation).find((n) => n.id === "invitation")?.start ?? 0) +
                  0.001;
                try {
                  const pending = sessionStorage.getItem(refreshKey),
                    restored = pending === null ? NaN : Number(pending);
                  if (Number.isFinite(restored) && restored >= 0 && restored <= annotation.duration)
                    t = restored;
                  sessionStorage.removeItem(refreshKey);
                } catch {
                  /* Playback still starts safely if storage is unavailable. */
                }
                if (audio.current) audio.current.currentTime = t;
                setTime(t);
              }}
              onError={() => setMediaError("Recording playback failed.")}
            />
          )}
          <button
            disabled={!verifiedSrc || !annotation}
            onClick={() => {
              if (audio.current?.paused)
                void audio.current.play().catch(() => setMediaError("Use the audio play control."));
              else audio.current?.pause();
            }}
          >
            {livePlaying ? "Pause live" : "Play live"}
          </button>
          <button
            disabled={!verifiedSrc || !annotation}
            onClick={() => {
              if (audio.current) {
                audio.current.currentTime = 0;
                setTime(0);
                void audio.current
                  .play()
                  .catch(() => setMediaError("Playback was blocked. Use the audio play control."));
              }
            }}
          >
            Play opening
          </button>
          <button onClick={() => setSceneEditing(!sceneEditing)}>
            {sceneEditing ? "Close editor" : sceneDirty ? "Edit scene · unsaved" : "Edit scene"}
          </button>
          <details>
            <summary>Source</summary>
            <AudioAssetsPanel hash={source.audioHash} />
            <label>
              Review seconds
              <input
                aria-label="Scene review seconds"
                type="number"
                min="0"
                max={annotation?.duration ?? 0}
                step="0.01"
                value={reviewTime}
                onChange={(e) => setReviewTime(e.target.value)}
              />
            </label>
            <button
              onClick={() => {
                const t = Number(reviewTime);
                if (
                  audio.current &&
                  Number.isFinite(t) &&
                  t >= 0 &&
                  t <= (annotation?.duration ?? 0)
                ) {
                  audio.current.pause();
                  audio.current.currentTime = t;
                  setTime(t);
                }
              }}
            >
              Seek scene
            </button>
            <p>
              {practice ? "Practice" : "Production"} · timing r{annotation?.revision} · words r
              {annotation?.wordTiming?.revision}
            </p>
            {sceneMode && (
              <p>
                {shots.length} composition intervals · maximum{" "}
                {Math.max(0, ...shots.map((s) => s.end - s.start)).toFixed(2)}s ·{" "}
                {shots.filter((s) => !s.max8Passed).length} over8s. Cue-derived; running-boundary
                review remains required.
              </p>
            )}
            <p>
              {stale
                ? "Saved timing changed. Update the preview."
                : "Preview matches saved timing."}
            </p>
            <button
              disabled={sceneDirty || repairPending || !verifiedSrc || !saved || building}
              onClick={() => void build()}
            >
              Update word preview
            </button>
            {openingRhythm && (
              <p>
                Opening rhythm: {openingRhythm.score}/100 onset proximity · {openingRhythm.matched}/
                {openingRhythm.eventCount} within50ms · max {openingRhythm.maxErrorMs.toFixed(1)}ms.
                Timing check, not quality.
              </p>
            )}
            <details>
              <summary>Review receipt</summary>
              <pre data-live-review-receipt style={{ whiteSpace: "pre-wrap", fontSize: ".75rem" }}>
                {JSON.stringify(
                  {
                    candidate: annotation?.items[0]?.groupId.split(":section:")[0],
                    sceneBuild: "live-scenes-v37",
                    openingRhythm,
                    sceneLifetimes: renderAnnotation ? sceneLifetimes(renderAnnotation) : [],
                    audioHash: annotation?.audioHash,
                    playbackSha256: candidate.playbackSha256 ?? annotation?.audioHash,
                    annotationRevision: annotation?.revision,
                    wordRevision: annotation?.wordTiming?.revision,
                    sourceMatchesSaved: !stale,
                    sceneDirty,
                    scenePlan: scenePlan ?? (annotation ? newScenePlan(annotation) : null),
                  },
                  null,
                  2,
                )}
              </pre>
            </details>
            <button disabled={!annotation} onClick={exportProps}>
              Save reproducible preview data
            </button>
            {exportText && <textarea aria-label="Reproducible preview JSON" readOnly value={exportText} style={{width:"100%",height:"8rem"}} />}
          </details>
        </div>
        {!plansOpen && annotation && verifiedSrc && (
          <SectionProgress
            annotation={renderAnnotation!}
            audio={audio}
            labels={Object.fromEntries((candidate.sections ?? []).map((s) => [s.id, s.label]))}
            onSeek={(t) => {
              if (audio.current) audio.current.currentTime = t;
              setTime(t);
            }}
          />
        )}
        {(error || historyError || mediaError) && (
          <p role="alert">{error || historyError || mediaError}</p>
        )}
        {!annotation && (
          <p role="status">
            {building ? "Loading saved preview…" : "Create a word preview in phase 3 to begin."}
          </p>
        )}
        {annotation && (
          <div hidden={!sceneEditing || plansOpen}>
            <SceneEditor
              annotation={annotation}
              practice={practice}
              plan={scenePlan ?? newScenePlan(annotation)}
              onPlan={setScenePlan}
              onDirty={(d) => {
                setSceneDirty(d);
                onDirty?.(d);
              }}
              labels={Object.fromEntries((candidate.sections ?? []).map((s) => [s.id, s.label]))}
              onSeek={(anchor) => {
                const t = anchor + 0.001;
                if (audio.current) {
                  audio.current.pause();
                  audio.current.currentTime = t;
                }
                setTime(t);
              }}
            />
          </div>
        )}
      </main>
    );
  return (
    <main style={{ maxWidth: 1000, margin: "2rem auto", padding: "0 16px" }}>
      <p>
        {sceneMode
          ? "Scene experiment · saved timing · " + (practice ? "Practice" : "Production")
          : "Provisional word-only preview · timing estimates remain pending review"}
      </p>
      {error && <p role="alert">{error}</p>}
      {historyError && (
        <div>
          <p role="alert">{historyError}</p>
          <button disabled={building} onClick={() => setHistoryAttempt((n) => n + 1)}>
            Retry preview history
          </button>
        </div>
      )}
      {mediaError && (
        <div>
          <p role="alert">{mediaError}</p>
          <button onClick={() => setMediaAttempt((n) => n + 1)}>Retry recording</button>
        </div>
      )}
      {!verifiedSrc && !mediaError && <p role="status">Verifying recording…</p>}
      {annotation && (
        <div style={{ aspectRatio: "16 / 9", width: "100%" }}>
          {sceneMode ? (
            <SceneVideoFrame
              annotation={annotation}
              time={time}
              visualTiming={visualTiming}
              plan={scenePlan ?? newScenePlan(annotation)}
            />
          ) : (
            <WordVideoFrame
              annotation={renderAnnotation!}
              time={time}
              visualTiming={visualTiming}
            />
          )}
        </div>
      )}
      {verifiedSrc && annotation && (
        <audio
          ref={audio}
          controls
          preload="metadata"
          src={verifiedSrc}
          style={{ width: "100%", marginTop: 20 }}
          onError={() =>
            setMediaError(
              "Recording playback failed. Retry or return to Audio to reattach the source.",
            )
          }
        />
      )}
      {sceneMode && annotation && (
        <SceneEditor
          annotation={annotation}
          practice={practice}
          plan={scenePlan ?? newScenePlan(annotation)}
          onPlan={setScenePlan}
          onDirty={(d) => {
            setSceneDirty(d);
            onDirty?.(d);
          }}
          labels={Object.fromEntries((candidate.sections ?? []).map((s) => [s.id, s.label]))}
          onSeek={(anchor) => {
            const t = anchor + 0.001;
            if (audio.current) {
              audio.current.pause();
              audio.current.currentTime = t;
            }
            setTime(t);
          }}
        />
      )}
      <p role="status">
        {repairPending
          ? "Repair draft pending — previous preview retained."
          : stale
            ? "Preview is stale — saved timing changed."
            : annotation
              ? "Preview matches the saved timing."
              : "Build a preview from saved timing."}
      </p>
      <button
        disabled={sceneDirty || repairPending || !verifiedSrc || !saved || building}
        onClick={() => void build()}
      >
        {building ? "Updating…" : "Update word preview"}
      </button>
      {annotation && (
        <details>
          {visualTiming && (
            <p>
              Visual holds target 140 ms within each phrase. Audio timestamps and approvals are
              unchanged. {visualTiming.intervals.filter((w) => w.constrained).length} words are
              limited by phrase duration.
            </p>
          )}
          <summary>Preview versions & source</summary>
          <p>
            Source {annotation.audioHash.slice(0, 12)} · annotation r{annotation.revision} · words r
            {annotation.wordTiming?.revision ?? 1}
          </p>
          <label>
            Review time (seconds){" "}
            <input
              aria-label="Review time (seconds)"
              type="number"
              min="0"
              max={annotation.duration}
              step="0.001"
              value={reviewTime}
              onChange={(e) => setReviewTime(e.target.value)}
            />
          </label>
          <button
            disabled={
              !verifiedSrc ||
              reviewTime.trim() === "" ||
              !Number.isFinite(Number(reviewTime)) ||
              Number(reviewTime) < 0 ||
              Number(reviewTime) > annotation.duration
            }
            onClick={() => {
              if (audio.current) {
                audio.current.pause();
                audio.current.currentTime = Number(reviewTime);
              }
            }}
          >
            Seek preview
          </button>
          <output aria-label="Preview audio clock">{time.toFixed(3)} s</output>
          <select
            aria-label="Preview version"
            disabled={sceneDirty}
            value={selectedId}
            onChange={(e) => {
              const v = versions.find((v) => v.id === e.target.value);
              if (v) {
                audio.current?.pause();
                setSelectedId(v.id);
                setAnnotation(v.annotation);
              }
            }}
          >
            {versions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.createdAt} · r{v.annotation.revision}
              </option>
            ))}
          </select>
        </details>
      )}
      <button disabled={!annotation} onClick={exportProps}>
        Save reproducible preview data
      </button>
      <p style={{ fontSize: 14 }}>
        Updates use saved timing only. Unsaved adjustments never enter the preview. Earlier previews
        remain available. Blank passages stay empty.
      </p>
    </main>
  );
}
