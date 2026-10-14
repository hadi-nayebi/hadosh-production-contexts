import WordNavigation from "./WordNavigation";
import { useEffect, useRef, useState, type RefObject } from "react";
import { StampPractice as Session, type PracticeState, type TapReceipt } from "./stampPractice";
export default function StampPractice({
  audio,
  label,
  value,
  limits,
  onStamp,
  onBusy,
  showTools,
  onToggleTools,
  wordNavigation,
}: {
  audio: RefObject<HTMLAudioElement | null>;
  label: string;
  value: number;
  limits: { min: number; max: number; fixed: boolean };
  onStamp: (r: TapReceipt) => void;
  onBusy: (busy: boolean) => void;
  showTools: boolean;
  onToggleTools: () => void;
  wordNavigation?: { previous: boolean; next: boolean; move: (by: -1 | 1) => void };
}) {
  const [state, setState] = useState<PracticeState>({
    phase: "idle",
    count: 0,
    flash: false,
    message: "",
    captured: null,
    cueDelayMs: null,
    context: null,
  });
  const session = useRef<Session | null>(null);
  const callbacks = useRef({ onStamp, onBusy });
  callbacks.current = { onStamp, onBusy };
  const stampButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!audio.current) return;
    const s = new Session(
      audio.current,
      limits,
      (v) => {
        setState(v);
        callbacks.current.onBusy(
          ["countdown", "preparing", "practice", "stamped", "replay"].includes(v.phase),
        );
      },
      (r) => callbacks.current.onStamp(r),
    );
    session.current = s;
    return () => {
      s.dispose();
      callbacks.current.onBusy(false);
    };
  }, [audio]);
  useEffect(() => {
    if (state.phase === "practice") stampButton.current?.focus({ preventScroll: true });
  }, [state.phase]);
  const running = ["countdown", "preparing", "practice", "stamped", "replay"].includes(state.phase);
  return (
    <div className="stamp-practice">
      {wordNavigation ? (
        <WordNavigation {...wordNavigation}>
          {" "}
          <h2
            className={`stamp-target ${state.flash ? "is-cued" : ""}`}
            data-cue-active={state.flash ? "true" : "false"}
          >
            <button
              aria-label={`Options for ${label}`}
              aria-expanded={showTools}
              onClick={onToggleTools}
            >
              {label}
            </button>
          </h2>
        </WordNavigation>
      ) : (
        <h2
          className={`stamp-target ${state.flash ? "is-cued" : ""}`}
          data-cue-active={state.flash ? "true" : "false"}
        >
          <button
            aria-label={`Options for ${label}`}
            aria-expanded={showTools}
            onClick={onToggleTools}
          >
            {label}
          </button>
        </h2>
      )}
      <div
        hidden={showTools || (!running && !state.message)}
        className="practice-countdown"
        role="status"
        aria-label="Practice status"
      >
        {state.phase === "countdown"
          ? state.count
          : state.phase === "preparing"
            ? "Ready…"
            : state.phase === "replay"
              ? "Listen & watch"
              : state.phase === "practice"
                ? "Tap at the moment"
                : state.message || " "}
      </div>
      <div className="practice-actions" hidden={showTools}>
        <button className="practice-play" onClick={() => session.current?.start(value)}>
          {state.captured !== null ? "Retap" : "Play practice"}
        </button>
        <button
          ref={stampButton}
          className="practice-stamp"
          disabled={state.phase !== "practice" || limits.fixed}
          onPointerDown={(e) => {
            if (e.button !== 0) return;
            e.preventDefault();
            session.current?.stamp(e.pointerType);
          }}
          onKeyDown={(e) => {
            if ((e.code === "Space" || e.key === "Enter") && !e.repeat) {
              e.preventDefault();
              session.current?.stamp("keyboard");
            }
          }}
          onClick={() => session.current?.stamp("accessible-click")}
        >
          Stamp
        </button>
        <button
          onClick={() => session.current?.replay(value)}
          disabled={state.phase === "countdown" || state.phase === "preparing"}
        >
          Replay cue
        </button>
        {running && <button onClick={() => session.current?.stop()}>Stop</button>}
      </div>
      <details className="practice-help" hidden={!showTools}>
        <summary>Help</summary>
        <p>
          Play practice counts3–2–1, then plays about three seconds of this recording. Tap Stamp or
          press Space at the selected start or end. Playback pauses, then replays the same context
          with a green cue. Retap to try again; Save keeps the result.
        </p>
        <p>
          Stamp reads the recording’s playback clock when the input arrives. Your reaction time,
          device output latency, browser clock precision and screen refresh can affect alignment; no
          compensation or human accuracy is claimed.
        </p>
        {limits.fixed && (
          <p>This is a fixed recording edge. Replay is available; its time cannot move.</p>
        )}
        <output aria-label="Practice timing evidence">
          {state.captured === null
            ? "No tap captured."
            : `Captured audio time ${state.captured.toFixed(6)}s.`}
          {state.cueDelayMs !== null
            ? ` Replay cue observed ${state.cueDelayMs.toFixed(1)}ms after that media timestamp.`
            : ""}
        </output>
      </details>
    </div>
  );
}
