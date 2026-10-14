import { saveTimingBeforeNavigation } from "./timingNavigation";
import WordVideoPreview from "./WordVideoPreview";
import AudioAssetsPanel from "./AudioAssetsPanel";
import { audioAssetsFor } from "./stemAnalysis";
import ThemeChoice from "./ThemeChoice";
import { candidateLyricUnits } from "./candidateLyrics";
import { useEffect, useState, useRef } from "react";
import AudioAnnotationView from "./AudioAnnotationView";
import CandidateLyricReview from "./CandidateLyricReview";
import { newLyricReview, parseLyricReview, reviewReady } from "./candidateReview";
import { initialDraft } from "./model";
import type { Annotation } from "./audioAnnotation";
import sources from "./v0Candidates.json";
import performances from "./v0Performance.json";
import type { Performance } from "./audioAnchors";
import "./audio-annotation.css";
import "./studio-appearance.css";
function requestedPhase(search: string) {
  const raw = new URLSearchParams(search).get("phase");
  return raw !== null && ["0", "1", "2", "3", "4"].includes(raw) ? Number(raw) : 1;
}

export default function CandidateStudio() {
  const practice = new URLSearchParams(location.search).get("practice") === "1",
    key = `canvas-v0-candidate:${practice ? "practice" : "real"}`;
  const [id, setId] = useState(
    () => new URLSearchParams(location.search).get("candidate") || localStorage.getItem(key) || "",
  );
  const [dirty, setDirty] = useState(false),
    [audioFocus, setAudioFocus] = useState(false),
    [context, setContext] = useState(false);
  const [phase, setPhase] = useState(() => requestedPhase(location.search));
  const titleSnapshot = useRef(localStorage.getItem(`${key}:title`));
  const [title, setTitle] = useState(() => titleSnapshot.current || "Who Owns Your Toaster?"),
    [titleEdit, setTitleEdit] = useState(title),
    [message, setMessage] = useState("");
  const [, refresh] = useState(0),
    [draft] = useState(initialDraft);
  const candidate = sources.find((s) => s.id === id),
    legacy = new URLSearchParams(location.search).get("analysis") === "1";
  const performance = legacy
    ? undefined
    : (performances.find((p) => p.id === id) as Performance | undefined);
  const native = candidate ? audioAssetsFor(candidate.sha256) : undefined;
  const source = candidate
    ? {
        ...candidate,
        playbackUrl: native?.master.url,
        playbackSha256: native?.master.sha256,
        playbackFormat: native ? "Native WAV · 48 kHz / 16-bit" : undefined,
        rhythmSource: native ? "Twelve isolated WAV stems" : undefined,
        annotation: performance?.annotation ?? (candidate.annotation as Annotation),
        lanes: native?.lanes ?? performance?.lanes ?? candidate.lanes,
        performance,
      }
    : null;
  const lyricSource = source ?? sources[0],
    units = candidateLyricUnits(lyricSource.sections);
  const hash = (performances.find((p) => p.id === lyricSource.id) as Performance)
    .canonicalLyricsSha256;
  const reviewKey = `${key}:wording:${lyricSource.id}:${hash}`;
  let packetApproved = false,
    ready = false;
  try {
    const packet = JSON.parse(
      localStorage.getItem(`${key}:lyric-approval:${lyricSource.id}`) || "null",
    );
    packetApproved = packet?.candidateId === lyricSource.id && packet?.canonicalHash === hash;
    const saved = localStorage.getItem(reviewKey);
    ready = reviewReady(
      saved ? parseLyricReview(saved, hash, units) : newLyricReview(hash, units),
      packetApproved,
    );
  } catch {}
  const audioAllowed = legacy || ready;
  const effectivePhase = phase === 2 && !audioAllowed ? 1 : phase;
  const route = useRef<string | null>(null),
    fromHistory = useRef(false),
    reverting = useRef(false),
    position = useRef<number>(history.state?.canvasStudio?.position ?? 0);
  useEffect(() => {
    const u = new URL(location.href);
    u.searchParams.set("phase", String(effectivePhase));
    if (id) u.searchParams.set("candidate", id);
    else u.searchParams.delete("candidate");
    const next = `${effectivePhase}:${id}`;
    if (fromHistory.current) {
      fromHistory.current = false;
      position.current = history.state?.canvasStudio?.position ?? position.current;
      history.replaceState(history.state, "", u);
    } else if (route.current !== null && route.current !== next) {
      position.current++;
      history.pushState(
        { ...history.state, canvasTiming: undefined, canvasStudio: { position: position.current } },
        "",
        u,
      );
    } else
      history.replaceState(
        { ...history.state, canvasStudio: { position: position.current } },
        "",
        u,
      );
    route.current = next;
  }, [effectivePhase, id]);
  const titleDirty = effectivePhase === 0 && context && titleEdit !== title;
  useEffect(() => {
    if (!titleDirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [titleDirty]);
  useEffect(() => {
    const pop = async (e: PopStateEvent) => {
      if (reverting.current) {
        reverting.current = false;
        return;
      }
      const q = new URLSearchParams(location.search),
        nextPhase = requestedPhase(location.search),
        nextId = q.get("candidate") ?? "";
      if (nextPhase === effectivePhase && nextId === id) return;
      if (
        titleDirty ||
        (dirty && !(effectivePhase === 2 && (await saveTimingBeforeNavigation())))
      ) {
        reverting.current = true;
        history.go((e.state?.canvasStudio?.position ?? -1) < position.current ? 1 : -1);
        setMessage("Save or discard your current edit before changing phase or recording.");
        return;
      }
      fromHistory.current = true;
      setPhase(nextPhase);
      setId(nextId);
      setContext(false);
      setAudioFocus(false);
      setMessage("");
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, [effectivePhase, id, dirty, titleDirty]);
  const go = async (n: number) => {
    if (titleDirty || (dirty && !(effectivePhase === 2 && (await saveTimingBeforeNavigation()))))
      return;
    if (n === 2 && !audioAllowed) {
      setMessage(
        "Review and approve the current lyric wording before entering audio. You can browse every passage freely.",
      );
      setContext(true);
      setPhase(1);
      return;
    }
    setMessage("");
    setContext(false);
    setPhase(n);
  };
  return (
    <div
      className={`candidate-studio phase-${effectivePhase} ${audioFocus ? "audio-focus" : ""}`}
      onKeyDown={(e) => {
        if (effectivePhase < 2 && e.key === "Escape") {
          if (titleDirty) setMessage("Save or cancel your title edit before closing.");
          else setContext(false);
          e.preventDefault();
        }
      }}
    >
      <ThemeChoice />
      {(effectivePhase === 1 || (effectivePhase === 2 && !audioFocus) || effectivePhase >= 3) && (
        <header className="candidate-header">
          {effectivePhase === 1 && (
            <div className="lyric-workspace-title">
              <h1>{title}</h1>
              <p>Lyrics workspace{practice ? " · Practice" : ""}</p>
            </div>
          )}
          <label>
            Recording{" "}
            <select
              aria-label="Recording candidate"
              disabled={dirty && effectivePhase !== 2}
              value={id}
              onChange={async (e) => {
                if (dirty && !(await saveTimingBeforeNavigation())) return;
                setId(e.target.value);
                localStorage.setItem(key, e.target.value);
                setMessage("");
              }}
            >
              <option value="">Choose a candidate</option>
              {sources.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          <nav className="candidate-source-nav" aria-label="Production phases">
            {["Title", "Lyrics", "Audio", "Word preview", "Scene creation"].map((label, n) => (
              <button
                key={label}
                aria-current={effectivePhase === n ? "step" : undefined}
                disabled={(dirty && effectivePhase !== 2) || (n >= 2 && !source)}
                onClick={() => go(n)}
              >
                {n} · {label}
              </button>
            ))}
          </nav>
          {context && <button onClick={() => setContext(false)}>Back to passage</button>}
          {message && <p role="status">{message}</p>}
        </header>
      )}
      {effectivePhase === 0 && (
        <main className="candidate-focus-page">
          {!context ? (
            <button
              className="focus-title"
              aria-label="Edit song title"
              onClick={() => {
                setTitleEdit(title);
                setMessage("");
                setContext(true);
              }}
            >
              {title}
            </button>
          ) : (
            <div className="title-context">
              <input
                autoFocus
                aria-label="Song title"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
              />
              <div>
                <button
                  disabled={!titleEdit.trim() || titleEdit === title}
                  onClick={() => {
                    try {
                      if (localStorage.getItem(`${key}:title`) !== titleSnapshot.current)
                        throw new Error(
                          "Title changed in another tab. Your edit is still here; copy it before reloading.",
                        );
                      localStorage.setItem(`${key}:title`, titleEdit.trim());
                      titleSnapshot.current = titleEdit.trim();
                      setTitle(titleEdit.trim());
                      setTitleEdit(titleEdit.trim());
                      setMessage("");
                      setContext(false);
                    } catch (error) {
                      setMessage(
                        error instanceof Error
                          ? error.message
                          : "Title could not be saved. Try again.",
                      );
                    }
                  }}
                >
                  Save title
                </button>
                <button
                  onClick={() => {
                    setTitleEdit(title);
                    setMessage("");
                    setContext(false);
                  }}
                >
                  Cancel
                </button>
                <button disabled={titleEdit !== title} onClick={() => go(1)}>
                  Continue to lyrics
                </button>
              </div>
              {message && <p role="status">{message}</p>}
            </div>
          )}
        </main>
      )}
      {effectivePhase === 1 && (
        <CandidateLyricReview
          key={reviewKey}
          storageKey={reviewKey}
          hash={hash}
          units={units}
          practice={practice}
          sourcePacketApproved={packetApproved}
          onReady={() => refresh((n) => n + 1)}
          onDirty={setDirty}
          onOptions={() => setContext(true)}
          onAudio={() => {
            if (!source) {
              setContext(true);
              setMessage("Choose the recording you want to annotate.");
            } else go(2);
          }}
        />
      )}

      {effectivePhase === 2 && source && <AudioAssetsPanel hash={source.annotation.audioHash} />}
      {effectivePhase === 2 && source && (
        <AudioAnnotationView
          key={`${practice}:${id}`}
          draft={draft}
          practice={practice}
          candidate={source}
          onDirtyChange={setDirty}
          onFocusChange={setAudioFocus}
          onBack={() => go(1)}
          onPreview={() => go(3)}
        />
      )}
      {effectivePhase === 4 && source && (
        <WordVideoPreview
          key={`scene:${practice}:${id}`}
          candidate={source}
          practice={practice}
          sceneMode
          onDirty={setDirty}
        />
      )}
      {effectivePhase === 3 && source && (
        <WordVideoPreview key={`${practice}:${id}`} candidate={source} practice={practice} />
      )}
    </div>
  );
}
