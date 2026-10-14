import FoundationGateReview from "./FoundationGateReview";
import { readLargeCheckpoint, writeLargeCheckpoint } from "./largeCheckpoint";
import { planeDragDelta } from "./textPlane.mjs";
import CreativeReview from "./CreativeReview";
import {
  snapshots,
  snapshotHref,
  latestAudioBacked,
  audioCoverageLabel,
} from "../snapshots/registry";
import { sourceFrameAt, mediaPathAt } from "../wordMotion/arrangement.mjs";
import { editableHistory } from "./editableHistory.mjs";
import { paintedBounds, type HitBox } from "./visibleGeometry";
import { cameraAt, cameraPose } from "./camera.mjs";
import Help from "./Help";
import { imagePose } from "./views.mjs";
import ObjectTools from "./ObjectTools";
import SceneNavigator from "./SceneNavigator";
import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from "react";
import MotionStage from "../wordMotion/MotionStage";
import seed from "./seed.json";
import {
  SCENE_KEY,
  validateScene,
  evaluateObject,
  ancestors,
  editObject,
  shiftTiming,
  sceneAt,
  type Scene,
} from "./scene.mjs";
import "./live-stage.css";
const initial = (
  seed: unknown,
  storageKey: string,
  readOnly = false,
  savedOverride: string | null = null,
) => {
  if (readOnly)
    return {
      project: validateScene(seed),
      checkpoint: validateScene(seed),
      error: "",
      saved: false,
      recovered: false,
    };
  try {
    const recovery = sessionStorage.getItem(`${storageKey}:recovery`);
    const savedRaw = savedOverride ?? localStorage.getItem(storageKey);
    if (savedRaw) validateScene(JSON.parse(savedRaw));
    const raw = recovery || savedRaw;
    return {
      project: editableHistory(validateScene(raw ? JSON.parse(raw) : seed)),
      checkpoint: editableHistory(validateScene(savedRaw ? JSON.parse(savedRaw) : seed)),
      error: "",
      saved: !!savedRaw,
      recovered: !!recovery && recovery !== savedRaw,
    };
  } catch {
    return {
      project: editableHistory(validateScene(seed)),
      checkpoint: editableHistory(validateScene(seed)),
      recovered: false,
      saved: false,
      error:
        "Saved scene could not be read. Export or recover it before saving; the saved bytes are preserved.",
    };
  }
};
const download = (p: Scene) => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }),
  );
  a.download = "canvas-live-scene.json";
  a.click();
  URL.revokeObjectURL(a.href);
};
type LiveStageProps = {
  defaultProject?: unknown;
  storageKey?: string;
  workspaceLabel?: string;
  readOnly?: boolean;
  draftHref?: string;
  initialFrame?: number;
  initialObjectId?: string;
};
export default function LiveStage(props: LiveStageProps) {
  return (
    <CheckpointLoader key={`${props.storageKey || SCENE_KEY}:${!!props.readOnly}`} {...props} />
  );
}
function CheckpointLoader(props: LiveStageProps) {
  const needsLookup = !props.readOnly && typeof indexedDB !== "undefined";
  const [lookup, setLookup] = useState<{ loading: boolean; raw: string | null; error: string }>({
    loading: needsLookup,
    raw: null,
    error: "",
  });
  useEffect(() => {
    if (!needsLookup) return;
    let active = true;
    readLargeCheckpoint(props.storageKey || SCENE_KEY).then(
      (raw) => {
        if (active) setLookup({ loading: false, raw, error: "" });
      },
      (error) => {
        if (active)
          setLookup({
            loading: false,
            raw: null,
            error:
              error instanceof Error ? error.message : "Saved scene storage could not be read.",
          });
      },
    );
    return () => {
      active = false;
    };
  }, [needsLookup, props.storageKey]);
  if (lookup.loading) return <main role="status">Loading saved scene…</main>;
  if (lookup.error)
    return (
      <main role="alert">
        {lookup.error} Reload to retry. Editing is withheld so an unread checkpoint cannot be
        overwritten.
      </main>
    );
  return <LiveStageEditor {...props} savedOverride={lookup.raw} />;
}
function LiveStageEditor({
  defaultProject = seed,
  storageKey = SCENE_KEY,
  workspaceLabel,
  readOnly = false,
  draftHref,
  initialFrame,
  initialObjectId,
  savedOverride,
}: LiveStageProps & { savedOverride: string | null }) {
  const largeStore = useRef(savedOverride !== null);
  const saving = useRef(false);
  const [loaded] = useState(() => initial(defaultProject, storageKey, readOnly, savedOverride)),
    [project, setProject] = useState(loaded.project),
    [frame, setFrame] = useState(
      () => initialFrame ?? (loaded.project.opening || loaded.project.arrangement ? 0 : 30),
    ),
    [playing, setPlaying] = useState(false),
    [selected, setSelected] = useState<string | null>(() =>
      loaded.project.objects.some((o) => o.id === initialObjectId) ? initialObjectId! : null,
    ),
    [hover, setHover] = useState<string | null>(null),
    [scope, setScope] = useState("song"),
    [menu, setMenu] = useState(false),
    [tab, setTab] = useState(initialObjectId ? "intent" : ""),
    [status, setStatus] = useState(loaded.error),
    [checkpoint, setCheckpoint] = useState(loaded.checkpoint),
    [savedLocally, setSavedLocally] = useState(loaded.saved),
    [snapshotChoice, setSnapshotChoice] = useState(false),
    [leaveTo, setLeaveTo] = useState<string | null>(null),
    [history, setHistory] = useState<Scene[]>([]),
    [future, setFuture] = useState<Scene[]>([]),
    [ready, setReady] = useState(false),
    [loop, setLoop] = useState(false),
    [scenesOpen, setScenesOpen] = useState(false),
    [brief, setBrief] = useState(""),
    [pending, setPending] = useState<Scene | null>(null),
    [partners, setPartners] = useState<string[]>([]),
    [layersOpen, setLayersOpen] = useState(false),
    [hitBoxes, setHitBoxes] = useState<HitBox[]>([]);
  const extraAudio = useRef<Record<string, HTMLAudioElement | null>>({});
  const playAnchor = useRef<{ time: number; frame: number } | null>(null);
  const frameRef = useRef(frame);
  frameRef.current = frame;
  const audio = useRef<HTMLAudioElement>(null),
    stage = useRef<HTMLDivElement>(null),
    allowedLeave = useRef(false),
    pauseGesture = useRef(false),
    projectRef = useRef(project),
    gesture = useRef<{
      p: Scene;
      x: number;
      y: number;
      frame: number;
      changed: boolean;
      angle?: number;
      total?: number;
    } | null>(null),
    hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [stageBounds, setStageBounds] = useState({ left: 0, top: 0, width: 1280 });
  useEffect(() => {
    const update = () => {
      if (stage.current) {
        const r = stage.current.getBoundingClientRect();
        setStageBounds({ left: r.left, top: r.top, width: r.width });
      }
    };
    const observer = new ResizeObserver(update);
    if (stage.current) observer.observe(stage.current);
    window.addEventListener("resize", update);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);
  const mounted = useRef(true);
  const continuousOriginal =
    project.arrangement?.length === 1 &&
    project.arrangement[0].startFrame === 0 &&
    project.arrangement[0].endFrame === project.composition.durationInFrames &&
    project.arrangement[0].sourceStartFrame === 0 &&
    !project.arrangement[0].media;
  useEffect(() => {
    mounted.current = true;
    const primary = audio.current;
    const extras = extraAudio.current;
    return () => {
      mounted.current = false;
      primary?.pause();
      for (const element of Object.values(extras)) element?.pause();
    };
  }, []);
  const audioDisclosure = project.arrangement
    ? audioCoverageLabel(
        project.arrangement.map((c) => ({
          timelineStartMs: (c.startFrame / 30) * 1000,
          durationMs: ((c.endFrame - c.startFrame) / 30) * 1000,
          sourceStartMs: c.sourceStartFrame === null ? null : (c.sourceStartFrame / 30) * 1000,
        })),
      )
    : null;
  const dirty = JSON.stringify(project) !== JSON.stringify(checkpoint);
  projectRef.current = project;
  useEffect(() => {
    const protect = (e: BeforeUnloadEvent) => {
      if (dirty && !allowedLeave.current) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", protect);
    return () => window.removeEventListener("beforeunload", protect);
  }, [dirty]);
  useEffect(() => {
    if (readOnly || loaded.error) return;
    try {
      sessionStorage.setItem(`${storageKey}:recovery`, JSON.stringify(project));
    } catch {
      setStatus("Session recovery could not be stored. Export the scene before leaving.");
    }
  }, [project, loaded.error, storageKey, readOnly]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audio.current && audio.current.readyState < 1)
        setStatus("Audio did not become ready within 8 seconds. Silent editing is available.");
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const setting = sceneAt(project, frame),
    focusId = selected,
    object = project.objects.find((o) => o.id === focusId),
    pose = object ? imagePose(project, object.id, frame) : null;
  const fail = (e: unknown) => setStatus(e instanceof Error ? e.message : "Could not apply change");
  const commit = (next: Scene) => {
    if (readOnly) return;
    validateScene(next);
    setHistory((h) => [...h.slice(-59), projectRef.current]);
    setFuture([]);
    setProject(next);
    setStatus("");
  };
  const change = (fn: () => Scene) => {
    try {
      commit(fn());
    } catch (e) {
      fail(e);
    }
  };
  const mediaAt = (n: number) => {
    const path = mediaPathAt(project, n);
    return path ? extraAudio.current[path] : audio.current;
  };
  const pauseMedia = (except?: HTMLAudioElement | null) => {
    for (const element of [audio.current, ...Object.values(extraAudio.current)])
      if (element && element !== except) element.pause();
  };
  const seek = (n: number) => {
    n = Math.max(0, Math.min(project.composition.durationInFrames - 1, Math.round(n)));
    setFrame(n);
    playAnchor.current = null;
    frameRef.current = n;
    const sourceFrame = sourceFrameAt(project, n);
    const active = mediaAt(n);
    pauseMedia();
    if (active && active.readyState >= 1 && sourceFrame !== null)
      active.currentTime = sourceFrame / 30;
  };
  const save = async (): Promise<Scene | null> => {
    if (readOnly || saving.current) return null;
    if (loaded.error) {
      setStatus(loaded.error);
      return null;
    }
    const snapshot = structuredClone(projectRef.current);
    saving.current = true;
    try {
      const raw = JSON.stringify(snapshot);
      if (!largeStore.current) {
        try {
          localStorage.setItem(storageKey, raw);
        } catch (error) {
          if (typeof indexedDB === "undefined") throw error;
          await writeLargeCheckpoint(storageKey, raw);
          largeStore.current = true;
        }
      } else await writeLargeCheckpoint(storageKey, raw);
      setCheckpoint(snapshot);
      setSavedLocally(true);
      setStatus(
        "Local checkpoint saved. Playback and exported scene JSON use this document. Departments remains the creative source.",
      );
      return snapshot;
    } catch (e) {
      fail(e);
      return null;
    } finally {
      saving.current = false;
    }
  };
  const discard = () => {
    commit(structuredClone(checkpoint));
    setSelected(null);
    setStatus("Unsaved changes discarded. Undo restores the working draft.");
  };
  const exportSaved = () => {
    if (loaded.error) {
      setStatus(loaded.error);
      return;
    }
    if (dirty) setSnapshotChoice(true);
    else download(checkpoint);
  };
  const leave = (href: string) => {
    allowedLeave.current = true;
    window.location.assign(href);
  };
  const undo = () => {
    const previous = history.at(-1);
    if (previous) {
      setFuture((f) => [projectRef.current, ...f]);
      setProject(previous);
      setHistory((h) => h.slice(0, -1));
      setSelected(null);
      setScope("song");
    }
  };
  const redo = () => {
    if (future[0]) {
      setHistory((h) => [...h, projectRef.current]);
      setProject(future[0]);
      setFuture((f) => f.slice(1));
      setSelected(null);
      setScope("song");
    }
  };
  const dismiss = () => {
    setTab("");
    setSelected(null);
    setHover(null);
    setMenu(false);
    setScenesOpen(false);
    setPartners([]);
    setScope("song");
  };
  const pauseAtCurrentFrame = () => {
    pauseMedia();
    if (audio.current && (!project.arrangement || continuousOriginal))
      setFrame(
        Math.min(
          project.composition.durationInFrames - 1,
          Math.round(audio.current.currentTime * 30),
        ),
      );
    gesture.current = null;
    setPlaying(false);
  };
  const toggle = async () => {
    if (playing) {
      pauseAtCurrentFrame();
      return;
    }
    if (frameRef.current >= project.composition.durationInFrames - 1) seek(0);
    if (continuousOriginal) {
      if (!ready || !audio.current) {
        setStatus("Audio is not ready. Playback waits for the recording; seek remains available.");
        return;
      }
      dismiss();
      const active = audio.current;
      try {
        await active.play();
        if (!mounted.current) {
          active.pause();
          return;
        }
        setPlaying(true);
        setStatus("");
      } catch (e) {
        if (mounted.current) fail(e);
      }
      return;
    }
    if (project.arrangement) {
      dismiss();
      playAnchor.current = null;
      setPlaying(true);
      setStatus(ready ? "" : "Audio unavailable; playing the visual timing review silently.");
      return;
    }
    if (!ready) {
      setStatus("Audio is unavailable. You can still seek and edit the scene.");
      return;
    }
    dismiss();
    try {
      await audio.current?.play();
      setPlaying(true);
      setStatus("");
    } catch (e) {
      fail(e);
    }
  };
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let requestingAudio = false;
    let cancelled = false;
    const media = [audio.current, ...Object.values(extraAudio.current)];
    const tick = () => {
      if (continuousOriginal && audio.current) {
        // The recording owns time. Never seek it backwards to chase a visual RAF clock.
        const active = audio.current;
        const next = Math.floor(active.currentTime * 30);
        if (active.ended || next >= project.composition.durationInFrames) {
          active.pause();
          if (loop) {
            seek(0);
          } else {
            setFrame(project.composition.durationInFrames - 1);
            setPlaying(false);
            return;
          }
        } else setFrame(next);
        if (active.paused && !requestingAudio) {
          requestingAudio = true;
          void active
            .play()
            .then(() => {
              if (cancelled) active.pause();
            })
            .catch((e) => {
              if (!cancelled) {
                fail(e);
                setPlaying(false);
              }
            })
            .finally(() => {
              requestingAudio = false;
            });
        }
        raf = requestAnimationFrame(tick);
        return;
      }
      if (project.arrangement) {
        const now = performance.now();
        if (!playAnchor.current) playAnchor.current = { time: now, frame: frameRef.current };
        const next =
          playAnchor.current.frame + Math.floor(((now - playAnchor.current.time) * 30) / 1000);
        if (next >= project.composition.durationInFrames) {
          pauseMedia();
          if (loop) {
            seek(0);
            raf = requestAnimationFrame(tick);
          } else {
            setFrame(project.composition.durationInFrames - 1);
            setPlaying(false);
          }
          return;
        }
        setFrame(next);
        const sourceFrame = sourceFrameAt(project, next);
        const active = mediaAt(next);
        pauseMedia(sourceFrame === null ? null : active);
        if (sourceFrame !== null && active) {
          if (active.readyState >= 1) {
            if (Math.abs(active.currentTime - sourceFrame / 30) > 0.2)
              active.currentTime = sourceFrame / 30;
            if (active.paused && !requestingAudio) {
              requestingAudio = true;
              void active
                .play()
                .then(() => {
                  if (cancelled) active.pause();
                })
                .catch((e) => {
                  if (cancelled) return;
                  fail(e);
                  setPlaying(false);
                })
                .finally(() => {
                  requestingAudio = false;
                });
            }
          } else if (mediaPathAt(project, next)) {
            setStatus("Opening audio is not ready. Playback paused; seek remains available.");
            setPlaying(false);
            return;
          }
        }
        raf = requestAnimationFrame(tick);
        return;
      }
      if (audio.current) {
        const next = Math.floor(audio.current.currentTime * 30);
        if (next >= project.composition.durationInFrames) {
          if (loop) {
            seek(0);
          } else {
            audio.current.pause();
            setFrame(project.composition.durationInFrames - 1);
            setPlaying(false);
            return;
          }
        } else setFrame(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      for (const element of media) element?.pause();
    };
  }, [
    playing,
    loop,
    project.composition.durationInFrames,
    project.arrangement,
    ready,
    continuousOriginal,
  ]);
  useEffect(() => {
    const keyboard = (e: KeyboardEvent) => {
      const input =
        e.target instanceof HTMLElement
          ? e.target.closest("input,textarea,select,[contenteditable=true]")
          : null;
      if (e.key === "Escape") {
        dismiss();
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        save();
        return;
      }
      if (input || (e.target instanceof HTMLElement && e.target.closest(".tool-arc"))) return;
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
        return;
      }
      if (e.code === "Space") {
        if (e.target instanceof HTMLElement && e.target.closest("button,a")) return;
        e.preventDefault();
        void toggle();
      }
      if (
        !playing &&
        selected &&
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
      ) {
        e.preventDefault();
        const o = project.objects.find((n) => n.id === selected)!;
        const d = e.shiftKey ? 10 : 1;
        change(() =>
          editObject(project, selected, {
            x: o.x + (e.key === "ArrowRight" ? d : e.key === "ArrowLeft" ? -d : 0),
            y: o.y + (e.key === "ArrowDown" ? d : e.key === "ArrowUp" ? -d : 0),
          }),
        );
      }
    };
    window.addEventListener("keydown", keyboard);
    return () => window.removeEventListener("keydown", keyboard);
  });
  useEffect(
    () => () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    },
    [],
  );
  const select = (id: string) => {
    setSelected(id);
    setHover(null);
    setScope("song");
    setScenesOpen(false);
    setMenu(false);
    // Re-grabbing the current object must not close its tool and resize the artboard mid-drag.
    if (selected !== id) setTab("");
  };
  const begin = (e: PointerEvent<HTMLElement>, id?: string) => {
    if (playing) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    gesture.current = { p: projectRef.current, x: e.clientX, y: e.clientY, frame, changed: false };
    if (id) {
      if (e.shiftKey) {
        setPartners((p) => Array.from(new Set([...(selected ? [selected] : []), ...p, id])));
      }
      select(id);
    } else {
      const r = e.currentTarget.getBoundingClientRect();
      gesture.current.angle = Math.atan2(
        e.clientY - r.y - r.height / 2,
        e.clientX - r.x - r.width / 2,
      );
      gesture.current.total = 0;
    }
  };
  const finish = () => {
    const g = gesture.current;
    if (g?.changed) {
      setHistory((h) => [...h.slice(-59), g.p]);
      setFuture([]);
    }
    gesture.current = null;
  };
  const drag = (e: PointerEvent<HTMLElement>, id: string) => {
    const g = gesture.current;
    if (!g || !stage.current) return;
    const dx = e.clientX - g.x,
      dy = e.clientY - g.y;
    if (Math.hypot(dx, dy) < 4 && !g.changed) return;
    const parentScale = ancestors(g.p, id).reduce(
      (scale, parent) => scale * (parent.scale ?? 1),
      1,
    );
    const o = g.p.objects.find((n) => n.id === id)!;
    const scale =
      1280 /
      stage.current.getBoundingClientRect().width /
      (parentScale || 1) /
      (id === "history-overlay-year" || o.kind === "lyric-anchor" ? 1 : cameraAt(sceneAt(g.p, g.frame), g.frame).zoom);
    try {
      const delta = (o.textPlane || o.contentPlane)
        ? planeDragDelta(
            (o.textPlane || o.contentPlane)!,
            imagePose(g.p, id, g.frame, false),
            dx * scale * parentScale,
            dy * scale * parentScale,
          )
        : { x: dx * scale * parentScale, y: dy * scale * parentScale };
      setProject(
        editObject(g.p, id, {
          x: Math.round(o.x + delta.x / parentScale),
          y: Math.round(o.y + delta.y / parentScale),
        }),
      );
      g.changed = true;
      setStatus("");
    } catch (err) {
      fail(err);
    }
  };
  const jog = (delta: number, p = projectRef.current) => {
    if (scope === "song") seek(frame + delta);
    else if (selected) change(() => shiftTiming(p, selected, scope, delta));
  };
  const turn = (e: PointerEvent<HTMLElement>) => {
    const g = gesture.current;
    if (!g || g.angle === undefined) return;
    const r = e.currentTarget.getBoundingClientRect(),
      angle = Math.atan2(e.clientY - r.y - r.height / 2, e.clientX - r.x - r.width / 2);
    let d = angle - g.angle;
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    g.total = (g.total || 0) + d;
    g.angle = angle;
    const delta = Math.round((g.total * 30) / Math.PI);
    if (scope === "song") seek(g.frame + delta);
    else if (selected) {
      try {
        setProject(shiftTiming(g.p, selected, scope, delta));
        g.changed = delta !== 0;
        setStatus("");
      } catch (err) {
        fail(err);
      }
    }
  };
  const keepHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };
  const releaseHover = () => {
    hoverTimer.current = setTimeout(() => setHover(null), 350);
  };
  useLayoutEffect(() => {
    if (stage.current && !playing) setHitBoxes(paintedBounds(stage.current));
  }, [project, frame, playing, stageBounds.width]);
  const objectName = (id: string) => {
    const o = project.objects.find((o) => o.id === id);
    return o?.kind === "word"
      ? project.words.find((w) => w.id === o.wordId)?.text || id
      : o?.label || id;
  };
  const paintedIds = hitBoxes.map((box) => box.id);
  const orderedObjects = [...project.objects].sort((a, b) => {
    if (paintedIds.length) return paintedIds.indexOf(a.id) - paintedIds.indexOf(b.id);
    return Number(a.kind === "word") - Number(b.kind === "word");
  });
  return (
    <main
      onPointerDownCapture={(e) => {
        pauseGesture.current = playing;
        if (playing) {
          e.preventDefault();
          e.stopPropagation();
          pauseAtCurrentFrame();
        }
      }}
      onPointerUpCapture={(e) => {
        if (pauseGesture.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onClickCapture={(e) => {
        if (playing || pauseGesture.current) {
          e.preventDefault();
          e.stopPropagation();
          pauseGesture.current = false;
          if (playing) pauseAtCurrentFrame();
          return;
        }
        const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
        if (dirty && link && link.target !== "_blank" && !link.download) {
          e.preventDefault();
          setLeaveTo(link.href);
        }
      }}
      className={`live-room ${playing ? "is-playing" : ""} ${selected ? "has-selection" : ""} ${tab ? "has-focused-tool" : ""}`}
      aria-label="Live song stage"
      onPointerDown={(e) => {
        if (
          !(e.target as HTMLElement).closest(
            "button,input,textarea,select,.live-context,.live-scenes,.live-document,.live-transport",
          )
        )
          dismiss();
      }}
    >
      <audio
        ref={audio}
        src={
          project.source.inMs === 0
            ? "/previews/l1-original.mp3"
            : project.source.inMs === 36300
              ? "/previews/browser-dance-extended-audio.wav"
              : "/previews/browser-word-audio.wav"
        }
        preload="metadata"
        onLoadedMetadata={() => {
          setReady(true);
          if (audio.current) audio.current.currentTime = (sourceFrameAt(project, frame) ?? 0) / 30;
        }}
        onError={() => {
          setReady(false);
          setStatus(
            "Local audio is missing. Follow the media preparation instructions; silent editing is available.",
          );
        }}
        onEnded={() => {
          if (project.arrangement) return;
          if (loop) {
            seek(0);
            void audio.current?.play();
          } else setPlaying(false);
        }}
      />
      {[...new Set(project.arrangement?.flatMap((c) => (c.media ? [c.media.path] : [])) ?? [])].map(
        (path) => (
          <audio
            key={path}
            ref={(element) => {
              extraAudio.current[path] = element;
            }}
            src={path}
            preload="auto"
            onError={() => {
              setStatus("Opening audio is unavailable. Reattach the approved local MP3.");
              setPlaying(false);
              pauseMedia();
            }}
          />
        ),
      )}
      {!playing && (
        <header className="live-top">
          <nav aria-label="Other compositions">
            <a className="live-latest-preview" href="/songs/review" target="_blank" rel="noopener noreferrer">Editable versions & chapters ↗</a>
            <a className="live-latest-preview" href={`/songs/live-latest?frame=${frame}`} target="_blank" rel="noopener noreferrer">Open latest editable version ↗</a>
            <a href="/songs/productions">← All production versions</a>
            <a href={snapshotHref(snapshots[0].id)}>
              Pinned snapshot · {snapshots[0].durationSeconds}s
            </a>
            {latestAudioBacked && (
              <a href={snapshotHref(latestAudioBacked.id)}>
                Audio-backed review · {latestAudioBacked.durationSeconds}s
              </a>
            )}
            <a href="/songs/live-opening">Saved opening draft · 72.1s</a>
            <a href="/songs/live-original">Original comparison · 24s</a>
          </nav>
          {!readOnly && (
            <button
              aria-expanded={layersOpen}
              onClick={() => {
                setLayersOpen(!layersOpen);
                setMenu(false);
              }}
            >
              Objects
            </button>
          )}
          <span className="live-current-composition">
            <strong>Viewing: </strong>
            {workspaceLabel ||
              (project.documentId.includes("illustrated")
                ? "Illustrated study"
                : "Browser study")}{" "}
            <small role="status" aria-label="Draft status">
              ·{" "}
              {readOnly
                ? "pinned review snapshot · read only"
                : dirty
                  ? "UNSAVED CHANGES"
                  : savedLocally
                    ? "saved local checkpoint"
                    : "repository candidate · not saved locally"}{" "}
              · saved revision r{checkpoint.revision}
            </small>
            {audioDisclosure && (
              <small style={{ display: "block", color: "#edbc69" }}>{audioDisclosure}</small>
            )}
          </span>
          {readOnly ? (
            <>
              <a href={draftHref}>Open separate editable draft →</a>
              <button onClick={() => download(project)}>Export pinned scene</button>
            </>
          ) : (
            <button
              onClick={() => {
                dismiss();
                setMenu(!menu);
              }}
            >
              Document
            </button>
          )}
        </header>
      )}
      <div
        className="live-viewport"
        onClick={(e) => {
          if (e.target === e.currentTarget) dismiss();
        }}
      >
        <div ref={stage} className="live-artboard">
          <MotionStage project={project} frame={frame} />
          {!readOnly && !playing && (
            <div className="live-targets" aria-label="Scene objects">
              {orderedObjects
                .filter((o) => setting.objectIds.includes(o.id) && o.kind !== "group")
                .map((o) => {
                  const n = o.kind === "lyric-anchor" ? imagePose(project,o.id,frame) : cameraPose(imagePose(project, o.id, frame), cameraAt(setting, frame));
                  if (frame < n.enter || frame >= n.exit || o.hidden) return null;
                  const hit = hitBoxes.find((box) => box.id === o.id);
                  if (hitBoxes.length && !hit) return null;
                  if (o.kind === "image" && n.width >= 1200 && n.height >= 650) return null;
                  return (
                    <button
                      key={o.id}
                      aria-label={`Select ${o.kind === "word" ? project.words.find((w) => w.id === o.wordId)?.text : o.label || o.id}`}
                      aria-pressed={selected === o.id}
                      className={`live-target ${(o.textPlane || o.contentPlane) ? "projected-target" : ""} ${o.kind === "group" ? "group-target" : ""} ${partners.includes(o.id) ? "partner" : ""}`}
                      title={objectName(o.id)}
                      style={
                        hit
                          ? { left: hit.x, top: hit.y, width: hit.width, height: hit.height }
                          : {
                              left: `${n.x / 12.8}%`,
                              top: `${n.y / 7.2}%`,
                              width: `${n.width / 12.8}%`,
                              height: `${n.height / 7.2}%`,
                            }
                      }
                      onPointerDown={(e) => begin(e, o.id)}
                      onPointerMove={(e) => drag(e, o.id)}
                      onPointerUp={finish}
                      onPointerCancel={finish}
                      onClick={() => select(o.id)}
                      onMouseEnter={() => {
                        keepHover();
                        if (!selected && !pauseGesture.current) {
                          setHover(o.id);
                          setTab("");
                        }
                      }}
                      onMouseLeave={releaseHover}
                      onFocus={() => {
                        if (!selected && !pauseGesture.current) {
                          setHover(o.id);
                          setTab("");
                        }
                      }}
                    />
                  );
                })}
            </div>
          )}
          {!playing && hover && !selected && (
            <div className="live-hover-name" aria-live="polite">
              {objectName(hover)}
            </div>
          )}
          {!playing && layersOpen && (
            <section className="live-layer-list" aria-label="Scene object list">
              <strong>Objects in {setting.title}</strong>
              <button onClick={() => setLayersOpen(false)} aria-label="Close object list">
                Close
              </button>
              {[...orderedObjects]
                .reverse()
                .filter((o) => setting.objectIds.includes(o.id))
                .map((o) => (
                  <button
                    key={o.id}
                    aria-pressed={selected === o.id}
                    onClick={() => {
                      select(o.id);
                      setLayersOpen(false);
                    }}
                  >
                    {objectName(o.id)}
                    {o.hidden ? " (hidden)" : ""}
                  </button>
                ))}
            </section>
          )}
          {!playing && object && pose && (
            <ObjectTools
              key={object.id}
              previewMoment={() => seek(Math.max(0, evaluateObject(project, object.id).enter - 10))}
              previousTiming={
                history.at(-1)?.objects.some((o) => o.id === object.id)
                  ? evaluateObject(history.at(-1)!, object.id)
                  : undefined
              }
              object={object}
              pose={pose}
              project={project}
              frame={frame}
              select={select}
              dismiss={dismiss}
              tab={tab}
              setSelected={setSelected}
              setTab={setTab}
              change={change}
              partners={partners}
              setPartners={setPartners}
              scope={scope}
              setScope={setScope}
            />
          )}
          {!playing && scenesOpen && (
            <SceneNavigator
              setting={setting}
              setScenesOpen={setScenesOpen}
              project={project}
              seek={seek}
              setBrief={setBrief}
              brief={brief}
              frame={frame}
              change={change}
            />
          )}
        </div>
      </div>
      {!playing && menu && (
        <section className="live-document" aria-label="Document tools">
          <div className="context-heading">
            <h2>Local scene document</h2>
            <button onClick={() => setMenu(false)} aria-label="Close document tools">
              ×
            </button>
          </div>
          {project.documentId?.startsWith("full-song-foundation-") && <FoundationGateReview project={project} frame={frame} />}
          {project.documentId?.startsWith("full-song") && !project.documentId.startsWith("full-song-foundation-") && (
            <CreativeReview
              seconds={frame / 30}
              study={project.documentId === "full-song-toaster-contact-v1"}
            />
          )}
          <p>
            Revision {project.revision}. A separate editable study; earlier word saves remain
            intact. Departments owns lyrics and decisions.
          </p>
          <a
            href="https://github.com/hadi-nayebi/hadosh-production-contexts"
            target="_blank"
            rel="noreferrer"
          >
            Pinned design proposal ↗
          </a>
          <a href="/songs/live-typography">Typography refinement ↗</a>
          <a href="/songs/live-next">Browser / Inspect revision ↗</a>
          <a href="/songs/live-illustrated">Earlier illustrated baseline ↗</a>
          <a href="/songs/live-vector">Earlier vector study ↗</a>
          <a href="/songs/words">Earlier word workspace ↗</a>
          <div>
            <button onClick={save}>Save locally</button>
            <button onClick={exportSaved}>Export saved scene JSON</button>
            <button onClick={() => download(project)}>Export working draft</button>
            <button disabled={!dirty || !!loaded.error} onClick={discard}>
              Discard unsaved changes
            </button>
            <button disabled={!history.length} onClick={undo}>
              Undo
            </button>
            <button disabled={!future.length} onClick={redo}>
              Redo
            </button>
          </div>
          <p>
            Playback uses your working draft. Save keeps a checkpoint on this device. Export scene
            JSON to keep a portable copy of your edits. Final video rendering is a separate
            production step; this workspace creates no video when you save.
          </p>
          <details>
            <summary>View working draft JSON</summary>
            <p>
              Read-only copy of your current edits, including unsaved changes. Copy this if a
              download is unavailable.
            </p>
            <textarea
              aria-label="Working draft JSON"
              readOnly
              rows={8}
              value={JSON.stringify(project, null, 2)}
            />
          </details>
          <label>
            Import scene JSON
            <input
              type="file"
              accept="application/json,.json"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                  // Full-song JSON exports exceed the original short-study 500 KB cap.
                  // Keep a bounded read; schema limits still validate every imported object.
                  if (file.size > 5_000_000)
                    throw Error("Scene file exceeds the 5 MB import limit");
                  setPending(validateScene(JSON.parse(await file.text())));
                } catch (err) {
                  fail(err);
                }
                e.target.value = "";
              }}
            />
          </label>
          {pending && (
            <div>
              <p>
                Replace working scene with revision {pending.revision}? Current work stays in Undo.
                Local save is explicit.
              </p>
              <button
                onClick={() => {
                  commit(pending);
                  setPending(null);
                  dismiss();
                }}
              >
                Use imported scene
              </button>
              <button onClick={() => setPending(null)}>Cancel import</button>
            </div>
          )}
        </section>
      )}
      {snapshotChoice && (
        <section className="live-document" role="dialog" aria-label="Choose render snapshot">
          <h2>Unsaved changes</h2>
          <p>
            Working revision {project.revision}; saved checkpoint {checkpoint.revision}. Which
            snapshot should the renderer receive?
          </p>
          <button
            onClick={async () => {
              const snapshot = await save();
              if (snapshot) {
                download(snapshot);
                setSnapshotChoice(false);
              }
            }}
          >
            Save and export current revision
          </button>
          <button
            onClick={() => {
              download(checkpoint);
              setSnapshotChoice(false);
            }}
          >
            Export last saved revision
          </button>
          <button onClick={() => setSnapshotChoice(false)}>Cancel export</button>
        </section>
      )}
      {leaveTo && (
        <section
          className="live-document"
          role="dialog"
          aria-label="Unsaved changes before leaving"
        >
          <h2>Keep your draft</h2>
          <p>
            Your working changes are not the saved render snapshot. Session recovery retains the
            draft; Save deliberately updates the local checkpoint.
          </p>
          <button
            onClick={async () => {
              const snapshot = await save();
              if (snapshot && JSON.stringify(projectRef.current) === JSON.stringify(snapshot))
                leave(leaveTo);
              else if (snapshot)
                setStatus("Checkpoint saved, but newer edits remain. Save again before leaving.");
            }}
          >
            Save and leave
          </button>
          <button onClick={() => leave(leaveTo)}>Leave with draft recovery</button>
          <button onClick={() => setLeaveTo(null)}>Keep editing</button>
        </section>
      )}
      <footer className="live-transport">
        <button
          className="live-play"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => void toggle()}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>
        {!playing && (
          <>
            <output aria-label="Song clock">
              {(frame / 30).toFixed(2)}s{" "}
              <small>/ {Number((project.composition.durationInFrames / 30).toFixed(1))}s</small>
            </output>
            <input
              className="live-seek"
              aria-label="Song time"
              type="range"
              min="0"
              max={project.composition.durationInFrames - 1}
              value={frame}
              onChange={(e) => seek(Number(e.target.value))}
            />
            <div className="live-jog">
              <Help text="Drag around the dial or use −/+ for one frame. By default this moves through the recording. Select an object and choose Timing to change when it appears, disappears, or moves in time. Dragging the artwork only changes its position." />
              <button aria-label="Back one frame" onClick={() => jog(-1)}>
                −
              </button>
              <button
                className="jog-wheel"
                aria-label={`Timing dial: ${scope === "song" ? "Move through song" : scope}`}
                onPointerDown={(e) => begin(e)}
                onPointerMove={turn}
                onPointerUp={finish}
                onPointerCancel={finish}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                    e.preventDefault();
                    e.stopPropagation();
                    jog(e.key === "ArrowRight" ? 1 : -1);
                  }
                }}
              >
                <span style={{ transform: `rotate(${frame * 6}deg)` }}>●</span>
              </button>
              <button aria-label="Forward one frame" onClick={() => jog(1)}>
                +
              </button>
              <small>
                {scope === "song"
                  ? "Move through song"
                  : `${scope === "move" ? "Object time" : scope} · ${selected}`}
              </small>
            </div>
            <button aria-pressed={loop} onClick={() => setLoop(!loop)}>
              Loop
            </button>
            {readOnly && (
              <select
                aria-label="Review chapter"
                value={setting.id}
                onChange={(e) => {
                  const chapter = project.scenes.find((s) => s.id === e.target.value);
                  if (chapter) seek(chapter.start);
                }}
              >
                {project.scenes.map((s) => (
                  <option key={s.id} value={s.id}>
                    {(s.start / 30).toFixed(1)}s · {s.title}
                  </option>
                ))}
              </select>
            )}
            {!readOnly && (
              <button
                aria-expanded={scenesOpen}
                onClick={() => {
                  dismiss();
                  setScenesOpen(!scenesOpen);
                }}
              >
                Scenes
              </button>
            )}
          </>
        )}
      </footer>
      {status && (
        <p className="live-status" role="status">
          {status}
          <button aria-label="Dismiss status" onClick={() => setStatus("")}>
            ×
          </button>
        </p>
      )}
    </main>
  );
}
