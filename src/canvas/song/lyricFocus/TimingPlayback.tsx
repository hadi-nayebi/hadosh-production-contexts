import { useEffect, useState, type RefObject } from "react";
import WordNavigation from "./WordNavigation";
export default function TimingPlayback({
  audio,
  label,
  start,
  end,
  showTools,
  onToggleTools,
  wordNavigation,
}: {
  audio: RefObject<HTMLAudioElement | null>;
  label: string;
  start: number;
  end: number;
  showTools: boolean;
  onToggleTools: () => void;
  wordNavigation?: { previous: boolean; next: boolean; move: (by: -1 | 1) => void };
}) {
  const [playing, setPlaying] = useState(false),
    [error, setError] = useState("");
  useEffect(() => {
    const media = audio.current;
    if (!media) return;
    const sync = () => setPlaying(!media.paused && !media.ended);
    media.addEventListener("play", sync);
    media.addEventListener("pause", sync);
    media.addEventListener("ended", sync);
    sync();
    return () => {
      media.removeEventListener("play", sync);
      media.removeEventListener("pause", sync);
      media.removeEventListener("ended", sync);
    };
  }, [audio]);
  const heading = (
    <h2 className="stamp-target">
      <button aria-label={`Options for ${label}`} aria-expanded={showTools} onClick={onToggleTools}>
        {label}
      </button>
    </h2>
  );
  return (
    <div className="timing-playback">
      {wordNavigation ? <WordNavigation {...wordNavigation}>{heading}</WordNavigation> : heading}
      {!showTools && (
        <button
          className="timing-play"
          onClick={async () => {
            const media = audio.current;
            if (!media) return;
            if (!media.paused) {
              media.pause();
              return;
            }
            try {
              setError("");
              if (media.currentTime < Math.max(0, start - 0.6) || media.currentTime >= end + 0.6)
                media.currentTime = Math.max(0, start - 0.6);
              let timer: ReturnType<typeof setTimeout> | undefined;
              try {
                await Promise.race([
                  media.play(),
                  new Promise<never>((_, reject) => {
                    timer = setTimeout(() => {
                      media.pause();
                      reject(new Error("Playback timeout"));
                    }, 5000);
                  }),
                ]);
              } finally {
                clearTimeout(timer);
              }
            } catch {
              setError("Audio could not play. Try again after the recording loads.");
            }
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      )}
      {error && <p role="status">{error}</p>}
    </div>
  );
}
