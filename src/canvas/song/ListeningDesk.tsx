import { useEffect, useRef, useState } from "react";
import { cachedAudio, rememberAudio } from "./audioCache";
import { download } from "./export";
import {
  mergeNotes,
  noteStages,
  notesJSON,
  parseListeningNotes,
  passageKinds,
  validRange,
  type ListeningNote,
  type ListeningTake,
} from "./listening";
const KEY = "canvas-listening-notes-v1";
export default function ListeningDesk({ take }: { take: ListeningTake }) {
  const [notes, setNotes] = useState<ListeningNote[]>(() => {
    try {
      return parseListeningNotes(localStorage.getItem(KEY) || "");
    } catch {
      return [];
    }
  });
  const [playing, setPlaying] = useState(false);
  const direction = useRef<HTMLTextAreaElement>(null);
  const [src, setSrc] = useState("");
  const [hash, setHash] = useState("");
  const [filename, setFilename] = useState("");
  const [duration, setDuration] = useState(0);
  const [clock, setClock] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(15);
  const [stage, setStage] = useState(noteStages[0]);
  const [kind, setKind] = useState(passageKinds[3]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [loop, setLoop] = useState(false);
  const [filter, setFilter] = useState("All stages");
  const [editing, setEditing] = useState("");
  const [history, setHistory] = useState<ListeningNote[][]>([]);
  const audio = useRef<HTMLAudioElement>(null);
  const segment = useRef(false);
  const upload = useRef(0);
  const valid = validRange(start, end, duration);
  useEffect(
    () => () => {
      upload.current++;
    },
    [],
  );
  useEffect(
    () => () => {
      if (src) URL.revokeObjectURL(src);
    },
    [src],
  );
  useEffect(() => {
    if (!src) return;
    const timer = setTimeout(() => {
      if (!audio.current?.duration) {
        setMessage("Audio did not become ready within 15 seconds. Reattach a playable file.");
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, [src]);
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const a = audio.current;
      if (a && segment.current && !a.paused && a.currentTime >= end) {
        if (loop) a.currentTime = start;
        else {
          a.pause();
          segment.current = false;
          a.currentTime = end;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, loop]);
  function stop() {
    audio.current?.pause();
    segment.current = false;
  }
  function save(next: ListeningNote[]) {
    try {
      localStorage.setItem(KEY, notesJSON(next));
      setHistory((h) => [...h.slice(-19), notes]);
      setNotes(next);
      return true;
    } catch {
      setMessage("Could not save. Export your notes before leaving this page.");
      return false;
    }
  }
  useEffect(() => {
    let alive = true;
    const initialUpload = upload.current;
    void cachedAudio(take.url)
      .then((file) => {
        if (alive && file && upload.current === initialUpload) void attach(file, false);
      })
      .catch(() => {
        if (alive) setMessage("Attach audio to begin. Browser audio storage is unavailable.");
      });
    return () => {
      alive = false;
    };
  }, [take.url]);
  async function attach(file: File, persist = true) {
    const token = ++upload.current;
    setEditing("");
    stop();
    setDuration(0);
    setHash("");
    setSrc("");
    if (!file.type.startsWith("audio/") || file.size > 100 * 1024 * 1024) {
      setMessage("Choose an audio file smaller than 100 MB.");
      return;
    }
    try {
      const digest = await crypto.subtle.digest("SHA-256", await file.arrayBuffer());
      if (token !== upload.current) return;
      setHash(Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join(""));
      setFilename(file.name);
      setSrc(URL.createObjectURL(file));
      setMessage("Audio ready. Notes autosave on this device.");
      if (persist) {
        try {
          await rememberAudio(take.url, file);
        } catch {
          if (token === upload.current)
            setMessage("Audio plays, but could not be remembered. Keep the MP3 to reattach later.");
        }
      }
    } catch {
      setMessage("Could not read this audio file.");
    }
  }
  function captureMoment() {
    stop();
    const now = Math.min(audio.current?.currentTime || 0, Math.max(0, duration - 0.05));
    setStart(Number(now.toFixed(2)));
    setEnd(Math.min(duration, now + 10));
    setEditing("");
    setStage("Visual idea");
    direction.current?.focus();
  }
  function changeRange(which: "start" | "end", value: number) {
    stop();
    if (which === "start") setStart(value);
    else setEnd(value);
  }
  async function play() {
    if (!valid || !audio.current) return;
    audio.current.currentTime = start;
    segment.current = true;
    try {
      await audio.current.play();
    } catch {
      segment.current = false;
      setMessage("Playback failed. Check the attached audio.");
    }
  }
  const visible = notes.filter(
    (n) => n.take.url === take.url && (filter === "All stages" || n.stage === filter),
  );
  return (
    <section className="song-listening" aria-label="Listen and describe">
      <header className="listening-title">
        <div>
          <span className="listening-eyebrow">The listening room</span>
          <h1>{take.title}</h1>
          <p>{take.style} · lyrics awaiting verification</p>
        </div>
        <a href={take.url} target="_blank" rel="noreferrer">
          Open in Suno ↗
        </a>
      </header>
      <div className="song-listening-grid">
        <div className="listening-player">
          {src ? (
            <audio
              ref={audio}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              src={src}
              onLoadedMetadata={(e) => {
                const d = e.currentTarget.duration;
                if (Number.isFinite(d) && d > 0) {
                  setDuration(d);
                  setStart(0);
                  setEnd(Math.min(15, d));
                } else setMessage("Audio has no usable duration.");
              }}
              onTimeUpdate={(e) => setClock(e.currentTarget.currentTime)}
              onError={() => {
                setDuration(0);
                setMessage("Audio could not be loaded. Reattach a playable file.");
              }}
            />
          ) : (
            <p>Attach the matching MP3 to listen here.</p>
          )}
          <div className="listening-clock">
            <strong>{formatTime(clock)}</strong>
            <span>/ {formatTime(duration)}</span>
            <span className="listening-play-state">{playing ? "Playing" : "Paused"}</span>
          </div>
          <div className="listening-timeline">
            <input
              aria-label="Song position"
              type="range"
              min="0"
              max={duration || 1}
              step="0.05"
              value={clock}
              disabled={!duration}
              onChange={(e) => {
                segment.current = false;
                if (audio.current) {
                  audio.current.currentTime = Number(e.target.value);
                  setClock(Number(e.target.value));
                }
              }}
            />
            <div className="listening-markers">
              {visible
                .filter((n) => n.audioHash === hash)
                .map((n) => (
                  <button
                    key={n.id}
                    title={`${formatTime(n.start)} · ${n.text}`}
                    aria-label={`Jump to note at ${formatTime(n.start)}`}
                    style={{ left: `${(100 * n.start) / duration}%` }}
                    onClick={() => {
                      stop();
                      if (audio.current) audio.current.currentTime = n.start;
                      setClock(n.start);
                      setStart(n.start);
                      setEnd(n.end);
                      setText(n.text);
                      setEditing(n.id);
                      setKind(n.kind);
                      setStage(n.stage);
                    }}
                  >
                    ◆
                  </button>
                ))}
            </div>
          </div>
          <div className="listening-transport">
            <button
              aria-label="Back 5 seconds"
              disabled={!duration}
              onClick={() => {
                if (audio.current) audio.current.currentTime = Math.max(0, clock - 5);
              }}
            >
              ↶ 5s
            </button>
            <button
              className="listening-play"
              disabled={!duration}
              aria-label={playing ? "Pause song" : "Play song"}
              onClick={async () => {
                if (!audio.current) return;
                segment.current = false;
                if (playing) captureMoment();
                else {
                  try {
                    await audio.current.play();
                  } catch {
                    setMessage("Playback failed. Reattach the audio.");
                  }
                }
              }}
            >
              {playing ? "Ⅱ" : "▶"}
            </button>
            <button
              aria-label="Forward 5 seconds"
              disabled={!duration}
              onClick={() => {
                if (audio.current) audio.current.currentTime = Math.min(duration, clock + 5);
              }}
            >
              5s ↷
            </button>
          </div>
          <button className="listening-capture" disabled={!duration} onClick={captureMoment}>
            ＋ Pause + describe
          </button>
          <p className="listening-hint">Hear a moment. Pause here. Describe the scene.</p>
          <details className="listening-passage">
            <summary>
              Fine-tune a passage · {formatTime(start)}–{formatTime(end)}
            </summary>
            <div className="song-two">
              {(["start", "end"] as const).map((k) => (
                <label key={k}>
                  {k === "start" ? "Start" : "End"} (seconds)
                  <input
                    type="number"
                    min="0"
                    step="0.05"
                    value={k === "start" ? start : end}
                    onChange={(e) => changeRange(k, Number(e.target.value))}
                  />
                  <button
                    disabled={!duration}
                    onClick={() =>
                      changeRange(k, Number((audio.current?.currentTime || 0).toFixed(2)))
                    }
                  >
                    Mark {k} here
                  </button>
                </label>
              ))}
            </div>
            <div className="song-actions">
              <button disabled={!valid} onClick={() => void play()}>
                Play this passage
              </button>
              <button onClick={stop}>Pause</button>
              <label>
                <input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} />
                Loop passage
              </label>
            </div>
            <label>
              Playback speed
              <select
                defaultValue="1"
                onChange={(e) => {
                  if (audio.current) audio.current.playbackRate = Number(e.target.value);
                }}
              >
                <option value="0.75">0.75×</option>
                <option value="1">1×</option>
                <option value="1.25">1.25×</option>
              </select>
            </label>
            <p className="song-muted">
              {valid
                ? `${(end - start).toFixed(2)} seconds selected`
                : "Choose a start before the end, within this audio."}
            </p>
          </details>
        </div>
        <div className="listening-notepad">
          <span className="listening-note-time">
            {formatTime(start)} → {formatTime(end)} · {editing ? "Editing note" : "New idea"}
          </span>
          <h2>{editing ? "Refine this scene" : "What do you see?"}</h2>
          <label>
            Visual description
            <textarea
              ref={direction}
              rows={5}
              maxLength={10000}
              value={text}
              placeholder="What appears first? What moves or changes? What must be ready when the verse starts?"
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <details className="listening-classify">
            <summary>Scene type & feedback stage</summary>{" "}
            <div className="song-two">
              <label>
                Feedback stage
                <select value={stage} onChange={(e) => setStage(e.target.value)}>
                  {noteStages.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label>
                Passage type
                <select value={kind} onChange={(e) => setKind(e.target.value)}>
                  {passageKinds.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>
          </details>
          <button
            className="listening-save"
            disabled={!valid || !hash || !text.trim()}
            onClick={() => {
              const n: ListeningNote = {
                id: editing || crypto.randomUUID(),
                take: { ...take },
                audioHash: hash,
                filename,
                start,
                end,
                stage,
                kind,
                text: text.trim(),
                created: notes.find((n) => n.id === editing)?.created || new Date().toISOString(),
              };
              if (save(editing ? notes.map((x) => (x.id === editing ? n : x)) : [...notes, n])) {
                setText("");
                setEditing("");
                setMessage(
                  "Note saved at this passage. It is ready for the next production discussion.",
                );
              }
            }}
          >
            {editing ? "Save note changes" : "Save description"}
          </button>
          {editing && (
            <button
              onClick={() => {
                setEditing("");
                setText("");
              }}
            >
              Cancel edit
            </button>
          )}
        </div>
      </div>
      <details className="listening-files">
        <summary>Audio & note files</summary>
        <div className="song-actions">
          <a href={take.url} target="_blank" rel="noreferrer">
            Source song ↗
          </a>
          <label className="song-file">
            Attach local audio
            <input
              aria-label="Attach listening audio"
              type="file"
              accept="audio/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void attach(f);
                e.target.value = "";
              }}
            />
          </label>
          <button onClick={() => download("listening-notes.json", notesJSON(notes))}>
            Export all listening notes
          </button>
          <label className="song-file">
            Import notes
            <input
              aria-label="Import listening notes"
              type="file"
              accept=".json"
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                try {
                  const next = mergeNotes(notes, parseListeningNotes(await f.text()));
                  if (save(next)) setMessage("Notes merged; existing versions preserved.");
                } catch (err) {
                  setMessage(err instanceof Error ? err.message : "Import failed.");
                }
                e.target.value = "";
              }}
            />
          </label>
        </div>
        <p className="song-muted">
          Audio is remembered on this device. Notes stay tied to the exact take and audio file.
          Export notes for backup or to bring them into the project.
        </p>
      </details>
      <p role="status">{message}</p>
      <div className="listening-notes-heading">
        <h2>
          Your scene notes <span>{visible.length}</span>
        </h2>
        <p>Select a marker to return to that moment.</p>
      </div>
      <details className="listening-note-tools">
        <summary>Filter & undo</summary>
        <label>
          Filter notes by stage
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {["All stages", ...noteStages].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <button
          disabled={!history.length}
          onClick={() => {
            const prev = history.at(-1);
            if (!prev) return;
            try {
              localStorage.setItem(KEY, notesJSON(prev));
              setNotes(prev);
              setHistory(history.slice(0, -1));
              setEditing("");
              setText("");
            } catch {
              setMessage("Undo could not be saved.");
            }
          }}
        >
          Undo note change
        </button>
      </details>
      {!visible.length && (
        <p className="listening-empty">
          Your visual story starts here. Pause the song when an image comes to mind.
        </p>
      )}
      {visible
        .slice()
        .sort((a, b) => a.start - b.start)
        .map((n) => (
          <article className="listening-saved-note" key={n.id}>
            <h4>
              {formatTime(n.start)}–{formatTime(n.end)} · {n.stage}
            </h4>
            <p>
              {n.kind} · {n.take.title}
            </p>
            <p style={{ whiteSpace: "pre-wrap" }}>{n.text}</p>
            <p className="song-muted">
              {n.audioHash === hash
                ? "Exact audio file attached"
                : "Reattach matching audio to revisit this passage"}
            </p>
            <button
              disabled={n.audioHash !== hash || n.end > duration}
              onClick={() => {
                stop();
                setStart(n.start);
                setEnd(n.end);
                setStage(n.stage);
                setKind(n.kind);
                setText(n.text);
                setEditing(n.id);
                if (audio.current) audio.current.currentTime = n.start;
              }}
            >
              Revisit passage
            </button>
            <button
              onClick={() => {
                if (save(notes.filter((x) => x.id !== n.id))) {
                  setEditing("");
                  setText("");
                  setMessage("Note removed. Undo restores it.");
                }
              }}
            >
              Remove note
            </button>
          </article>
        ))}
    </section>
  );
}

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")}`;
}
