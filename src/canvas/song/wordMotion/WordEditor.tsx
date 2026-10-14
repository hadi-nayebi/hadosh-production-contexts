import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import seed from "./seed.json";
import wave from "./waveform.json";
import {
  validateProject,
  reviseWord,
  clampWord,
  phraseRange,
  visibleAt,
  type Project,
  type Word,
} from "./project.mjs";
import MotionStage from "./MotionStage";
import "./word-editor.css";
const KEY = "canvas-word-motion-l1-v1";
const initial = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw
      ? { project: validateProject(JSON.parse(raw)), error: "" }
      : { project: validateProject(seed), error: "" };
  } catch (e) {
    return {
      project: validateProject(seed),
      error: `Saved data could not load: ${String(e)}. It remains intact. Export its backup before replacing it.`,
    };
  }
};
function download(text: string, name: string) {
  const u = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = u;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}
export default function WordEditor() {
  const [boot] = useState(initial),
    [project, setProject] = useState(boot.project),
    [selected, setSelected] = useState("w001"),
    [frame, setFrame] = useState(0),
    [playing, setPlaying] = useState(false),
    [loop, setLoop] = useState(false),
    [zoom, setZoom] = useState(1),
    [snap, setSnap] = useState(false),
    [status, setStatus] = useState(
      boot.error || "ASR word onsets loaded. Exits and positions are editable design choices.",
    ),
    [saved, setSaved] = useState(JSON.stringify(boot.project)),
    [blocked, setBlocked] = useState(!!boot.error),
    [past, setPast] = useState<Project[]>([]),
    [future, setFuture] = useState<Project[]>([]),
    [audioReady, setAudioReady] = useState(false);
  const [renderState, setRenderState] = useState("No matching render checked yet.");
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const response = await fetch("/previews/browser-words-receipt.json", { cache: "no-store" });
        if (!response.ok) throw Error("missing");
        const receipt = await response.json();
        const digest = await crypto.subtle.digest(
          "SHA-256",
          new TextEncoder().encode(JSON.stringify(project)),
        );
        const current = Array.from(new Uint8Array(digest))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        if (!cancelled)
          setRenderState(
            current === receipt.projectSha256
              ? "Rendered MP4 matches this exact saved project."
              : "Rendered MP4 is stale for these edits. Export JSON and render again.",
          );
      } catch {
        if (!cancelled)
          setRenderState("No render receipt available yet. Export JSON to render this project.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [project]);
  const audio = useRef<HTMLAudioElement>(null),
    stage = useRef<HTMLDivElement>(null),
    pRef = useRef(project),
    gesture = useRef<null | {
      before: Project;
      word: Word;
      kind: string;
      x: number;
      y: number;
      scale: number;
    }>(null),
    loopRange = useRef<[number, number] | null>(null);
  pRef.current = project;
  const word = project.words.find((w) => w.id === selected) || project.words[0];
  const dirty = JSON.stringify(project) !== saved;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!audio.current || audio.current.readyState < 1)
        setStatus(
          "Audio did not become ready within 8 seconds. Prepare the retained excerpt with the render command; editing and JSON export remain available.",
        );
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
  function commit(next: Project) {
    setPast((p) => [...p.slice(-99), project]);
    setFuture([]);
    setProject(next);
  }
  function patch(patch: Partial<Word>) {
    try {
      commit(reviseWord(project, word.id, patch));
      setStatus("Working revision changed. Previously rendered MP4 is stale.");
    } catch (e) {
      setStatus(String(e));
    }
  }
  function undo() {
    if (!past.length) return;
    setFuture((f) => [project, ...f]);
    setProject(past[past.length - 1]);
    setPast((p) => p.slice(0, -1));
  }
  function redo() {
    if (!future.length) return;
    setPast((p) => [...p, project]);
    setProject(future[0]);
    setFuture((f) => f.slice(1));
  }
  function seek(f: number) {
    const n = Math.max(0, Math.min(719, Math.round(f)));
    if (audio.current) audio.current.currentTime = n / 30;
    setFrame(n);
  }
  async function playPhrase() {
    const r = phraseRange(project, word.phraseId);
    loopRange.current = r;
    seek(r[0]);
    try {
      await audio.current?.play();
    } catch (e) {
      setStatus(`Audio unavailable: ${String(e)}`);
    }
  }
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const a = audio.current;
      if (a && !a.paused) {
        const f = Math.floor(a.currentTime * 30);
        const r = loopRange.current;
        if (r && f >= r[1]) {
          if (loop) {
            a.currentTime = r[0] / 30;
            setFrame(r[0]);
          } else {
            a.pause();
            setFrame(Math.min(719, r[1]));
          }
        } else setFrame(Math.min(719, f));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [loop]);
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);
  function begin(e: ReactPointerEvent, kind: string, w: Word, scale: number) {
    e.preventDefault();
    e.stopPropagation();
    audio.current?.pause();
    setSelected(w.id);
    gesture.current = { before: project, word: w, kind, x: e.clientX, y: e.clientY, scale };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: ReactPointerEvent) {
    const g = gesture.current;
    if (!g) return;
    let delta = Math.round((e.clientX - g.x) / g.scale);
    if (snap && g.kind !== "position") delta = Math.round(delta / 3) * 3;
    let changes: Partial<Word> = {};
    if (g.kind === "position")
      changes = {
        x: g.word.x + (e.clientX - g.x) / g.scale,
        y: g.word.y + (e.clientY - g.y) / g.scale,
      };
    else if (g.kind === "enter")
      changes = { enterFrame: Math.min(g.word.exitFrame - 1, g.word.enterFrame + delta) };
    else if (g.kind === "exit")
      changes = { exitFrame: Math.max(g.word.enterFrame + 1, g.word.exitFrame + delta) };
    else {
      delta = Math.max(-g.word.enterFrame, Math.min(720 - g.word.exitFrame, delta));
      changes = { enterFrame: g.word.enterFrame + delta, exitFrame: g.word.exitFrame + delta };
    }
    setProject(reviseWord(g.before, g.word.id, clampWord(g.word, changes)));
  }
  function finish() {
    const g = gesture.current;
    if (!g) return;
    if (JSON.stringify(g.before) !== JSON.stringify(pRef.current)) {
      setPast((p) => [...p.slice(-99), g.before]);
      setFuture([]);
      setStatus("Drag saved as one undo step. Render is stale.");
    }
    gesture.current = null;
  }
  function cancel() {
    if (gesture.current) setProject(gesture.current.before);
    gesture.current = null;
  }
  function save() {
    try {
      if (blocked) {
        setStatus("Export the preserved saved-data backup before replacing it.");
        return;
      }
      localStorage.setItem(KEY, JSON.stringify(project));
      setSaved(JSON.stringify(project));
      setStatus(
        `Saved working revision ${project.revision} on this browser. Export JSON to render or move laptops.`,
      );
    } catch (e) {
      setStatus(`Save failed; export JSON to keep edits: ${String(e)}`);
    }
  }
  async function importFile(file: File | undefined) {
    if (!file) return;
    try {
      const next = validateProject(JSON.parse(await file.text()));
      if (
        dirty &&
        !confirm(
          "Import will replace the working view. Current edits remain available with Undo. Continue?",
        )
      )
        return;
      commit(next);
      setStatus("Imported validated project. Use Save to retain it here.");
    } catch (e) {
      setStatus(`Import rejected; current edits preserved. ${String(e)}`);
    }
  }
  const px = 1.3 * zoom,
    timelineWidth = 720 * px;
  return (
    <section className="word-editor">
      <header>
        <div>
          <a href="/songs">← Listening room</a>
          <h1>Words in motion</h1>
          <p>
            R7 L1 · 48.10–72.10s · 24 seconds · 30 fps{" "}
            <span className="we-badge">Working revision {project.revision}</span>
          </p>
        </div>
        <div className="we-actions">
          <button onClick={undo} disabled={!past.length}>
            Undo
          </button>
          <button onClick={redo} disabled={!future.length}>
            Redo
          </button>
          <button onClick={save}>Save locally{dirty ? " *" : ""}</button>
          <button
            onClick={() => download(JSON.stringify(project, null, 2), "browser-words-project.json")}
          >
            Export render JSON
          </button>
          <label>
            Import JSON
            <input
              type="file"
              accept=".json"
              onChange={(e) => {
                void importFile(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
          </label>
        </div>
      </header>
      <p className="we-render-status">{renderState}</p>
      <p role="status" className="we-status">
        {status}
      </p>
      {blocked && (
        <button
          onClick={() => {
            download(localStorage.getItem(KEY) || "", "preserved-word-project.json");
            setBlocked(false);
          }}
        >
          Export preserved saved-data backup
        </button>
      )}
      <div className="we-workspace">
        <div>
          <div className="we-stage" ref={stage}>
            <MotionStage project={project} frame={frame} />
            {project.words
              .filter((w) => visibleAt(w, frame) || w.id === selected)
              .map((w) => (
                <button
                  key={w.id}
                  aria-label={`Position ${w.id} ${w.text}`}
                  className={`we-word-target ${w.id === selected ? "selected" : ""} ${!visibleAt(w, frame) ? "ghost" : ""}`}
                  style={{
                    left: `${w.x / 12.8}%`,
                    top: `${(w.y - w.fontSize) / 7.2}%`,
                    width: `${w.width / 12.8}%`,
                    height: `${(w.fontSize + 10) / 7.2}%`,
                  }}
                  onPointerDown={(e) =>
                    begin(e, "position", w, (stage.current?.clientWidth || 1280) / 1280)
                  }
                  onPointerMove={move}
                  onPointerUp={finish}
                  onPointerCancel={cancel}
                  onClick={() => setSelected(w.id)}
                  onKeyDown={(e) => {
                    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
                      e.preventDefault();
                      const n = e.shiftKey ? 10 : 1;
                      setSelected(w.id);
                      commit(
                        reviseWord(
                          project,
                          w.id,
                          clampWord(w, {
                            x: w.x + (e.key === "ArrowRight" ? n : e.key === "ArrowLeft" ? -n : 0),
                            y: w.y + (e.key === "ArrowDown" ? n : e.key === "ArrowUp" ? -n : 0),
                          }),
                        ),
                      );
                    }
                  }}
                >
                  {!visibleAt(w, frame) ? w.text : ""}
                </button>
              ))}
          </div>
          <div className="we-transport">
            <audio
              ref={audio}
              controls
              src="/previews/browser-word-audio.wav"
              onLoadedMetadata={() => {
                const ok = Math.abs((audio.current?.duration || 0) - 24) < 0.1;
                setAudioReady(ok);
                if (!ok)
                  setStatus(
                    "Unexpected audio duration; prepare the hash-verified 24-second excerpt with the render command.",
                  );
              }}
              onError={() => {
                setAudioReady(false);
                setStatus(
                  "Audio missing: run npm run render:browser-words with the retained L1 source; it prepares the local excerpt.",
                );
              }}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onSeeked={() =>
                setFrame(Math.min(719, Math.round((audio.current?.currentTime || 0) * 30)))
              }
              onTimeUpdate={() => {
                const a = audio.current;
                const r = loopRange.current;
                if (a && !a.paused && r && a.currentTime * 30 >= r[1]) {
                  if (loop) {
                    a.currentTime = r[0] / 30;
                    setFrame(r[0]);
                  } else {
                    a.pause();
                    setFrame(Math.min(719, r[1]));
                  }
                }
              }}
              onEnded={() => {
                if (loop && loopRange.current && audio.current) {
                  audio.current.currentTime = loopRange.current[0] / 30;
                  void audio.current.play().catch((e) => setStatus(String(e)));
                } else {
                  setPlaying(false);
                  setFrame(719);
                }
              }}
            />
            <output>
              {(frame / 30).toFixed(2)}s / 24.00 · frame {frame} · source{" "}
              {(48.1 + frame / 30).toFixed(2)}s
            </output>
            <button
              disabled={!audioReady}
              onClick={() => {
                loopRange.current = null;
                if (playing) audio.current?.pause();
                else void audio.current?.play().catch((e) => setStatus(String(e)));
              }}
            >
              {playing ? "Pause" : "Play all"}
            </button>
            <button disabled={!audioReady} onClick={() => void playPhrase()}>
              Play selected phrase
            </button>
            <label>
              <input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} />
              Loop phrase
            </label>
          </div>
          <label className="we-scrub">
            Playhead
            <input
              aria-label="Playhead"
              type="range"
              min="0"
              max="719"
              value={frame}
              onChange={(e) => {
                loopRange.current = null;
                seek(+e.target.value);
              }}
            />
          </label>
        </div>
        <aside>
          <h2>Selected word</h2>
          <select
            aria-label="Selected word"
            value={word.id}
            onChange={(e) => setSelected(e.target.value)}
          >
            {project.words.map((w) => (
              <option key={w.id} value={w.id}>
                {w.id} · {w.text} · {(w.enterFrame / 30).toFixed(2)}s
              </option>
            ))}
          </select>
          <p>
            ASR source: {word.sourceStart.toFixed(2)}–{word.sourceEnd.toFixed(2)}s<br />
            Text: {word.textStatus} · Timing: {word.timingStatus}
            <br />
            ASR confidence {(word.confidence * 100).toFixed(0)}% — not approval
          </p>
          <label>
            Displayed word
            <input
              aria-label="Displayed word"
              value={word.text}
              maxLength={35}
              onChange={(e) => {
                if (e.target.value.trim()) patch({ text: e.target.value });
              }}
            />
          </label>
          <div className="we-fields">
            {(
              [
                ["Enter frame", "enterFrame"],
                ["Exit frame (exclusive)", "exitFrame"],
                ["X position", "x"],
                ["Y position", "y"],
              ] as const
            ).map(([label, key]) => (
              <label key={key}>
                {label}
                <input
                  aria-label={label}
                  type="number"
                  value={word[key]}
                  step="1"
                  onChange={(e) => {
                    if (e.target.value !== "") patch({ [key]: +e.target.value });
                  }}
                />
              </label>
            ))}
          </div>
          <div className="we-actions">
            <button onClick={() => patch(clampWord(word, { enterFrame: word.enterFrame - 1 }))}>
              Enter −1f
            </button>
            <button
              onClick={() =>
                patch(
                  clampWord(word, {
                    enterFrame: Math.min(word.exitFrame - 1, word.enterFrame + 1),
                  }),
                )
              }
            >
              Enter +1f
            </button>
            <button onClick={() => seek(word.enterFrame)}>Seek word</button>
          </div>
          <p>
            Drag a word on stage. Arrow keys move 1px; Shift moves 10px. Invisible selection remains
            as a ghost handle.
          </p>
          <label>
            Phrase
            <select
              aria-label="Phrase"
              value={word.phraseId}
              onChange={(e) =>
                setSelected(project.phrases.find((p) => p.id === e.target.value)!.wordIds[0])
              }
            >
              {project.phrases.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
        </aside>
      </div>
      <div className="we-timeline-head">
        <h2>Word timeline</h2>
        <label>
          Zoom
          <input
            aria-label="Timeline zoom"
            type="range"
            min="1"
            max="5"
            step=".5"
            value={zoom}
            onChange={(e) => setZoom(+e.target.value)}
          />
          {zoom}×
        </label>
        <label>
          <input type="checkbox" checked={snap} onChange={(e) => setSnap(e.target.checked)} />
          Snap drags to 3-frame increments
        </label>
      </div>
      <p>
        Top waveform comes from the recording. It is navigation, not proof of vocal alignment. Clip
        body moves both edges; side handles trim independently. Overlaps are allowed.
      </p>
      <div className="we-timeline" tabIndex={0} aria-label="Scrollable word timeline">
        <div style={{ width: timelineWidth, position: "relative" }}>
          <div
            className="we-wave"
            role="slider"
            aria-label="Waveform seek"
            aria-valuemin={0}
            aria-valuemax={719}
            aria-valuenow={frame}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                seek(frame + (e.key === "ArrowRight" ? 1 : -1));
              }
            }}
            onPointerDown={(e) =>
              seek((e.clientX - e.currentTarget.getBoundingClientRect().left) / px)
            }
          >
            <svg viewBox={`0 0 ${wave.peaks.length} 64`} preserveAspectRatio="none">
              {wave.peaks.map((v, i) => (
                <line
                  key={i}
                  x1={i}
                  x2={i}
                  y1={32 - v * 30}
                  y2={32 + v * 30}
                  stroke="#8ad9b9"
                  strokeWidth=".8"
                />
              ))}
            </svg>
          </div>
          <div className="we-ruler">
            {Array.from({ length: 25 }, (_, i) => (
              <span key={i} style={{ left: i * 30 * px }}>
                {i}s
              </span>
            ))}
          </div>
          {project.phrases.map((phrase) => (
            <div className="we-lane" key={phrase.id}>
              {project.words
                .filter((w) => w.phraseId === phrase.id)
                .map((w, i) => (
                  <div
                    key={w.id}
                    className={`we-clip ${w.id === selected ? "selected" : ""}`}
                    style={{
                      left: w.enterFrame * px,
                      width: (w.exitFrame - w.enterFrame) * px,
                      top: i * 27,
                    }}
                    onPointerDown={(e) => begin(e, "shift", w, px)}
                    onPointerMove={move}
                    onPointerUp={finish}
                    onPointerCancel={cancel}
                  >
                    <button
                      aria-label={`Trim start ${w.id}`}
                      className="we-edge start"
                      onPointerDown={(e) => begin(e, "enter", w, px)}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                          e.preventDefault();
                          commit(
                            reviseWord(
                              project,
                              w.id,
                              clampWord(w, {
                                enterFrame: Math.min(
                                  w.exitFrame - 1,
                                  w.enterFrame + (e.key === "ArrowRight" ? 1 : -1),
                                ),
                              }),
                            ),
                          );
                        }
                      }}
                    />
                    <button
                      className="we-clip-label"
                      aria-label={`Select ${w.id} ${w.text}`}
                      onClick={() => setSelected(w.id)}
                    >
                      {w.text}
                    </button>
                    <button
                      aria-label={`Trim exit ${w.id}`}
                      className="we-edge end"
                      onPointerDown={(e) => begin(e, "exit", w, px)}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                          e.preventDefault();
                          commit(
                            reviseWord(
                              project,
                              w.id,
                              clampWord(w, {
                                exitFrame: w.exitFrame + (e.key === "ArrowRight" ? 1 : -1),
                              }),
                            ),
                          );
                        }
                      }}
                    />
                  </div>
                ))}
              <div style={{ height: phrase.wordIds.length * 27 + 8 }} />
            </div>
          ))}
          <div className="we-playhead" style={{ left: frame * px }} />
        </div>
      </div>
      <details>
        <summary>Save, render, and provenance</summary>
        <p>
          These are Canvas motion edits, not canonical lyric revisions. Departments owns the song
          content. Save keeps this browser’s working copy; Export render JSON makes it portable.
          Import rejects a different take or invalid timing without replacing edits. Reset is
          undoable.
        </p>
        <p>
          To render exactly your edits: export JSON, then run{" "}
          <code>
            npm run render:browser-words -- --project /absolute/path/browser-words-project.json
          </code>
          . The renderer validates the recording hash and writes a receipt with the exact project
          SHA-256. This is a local command, not a one-click render.
        </p>
        <p>{project.source.timing}</p>
        <a href="https://github.com/hadi-nayebi/hadosh-production-contexts">
          Departments owner
        </a>{" "}
        · <a href="/previews/browser-words-v2.mp4">Last rendered v2 MP4 (may be stale)</a>
        <p>
          <button
            onClick={() => {
              if (
                confirm(
                  "Reset the working view to ASR seed? Your current edits remain in Undo; saved data is unchanged until Save.",
                )
              ) {
                commit(validateProject(seed));
                setStatus("Reset working view. Undo restores previous edits.");
              }
            }}
          >
            Reset working view
          </button>
        </p>
      </details>
    </section>
  );
}
