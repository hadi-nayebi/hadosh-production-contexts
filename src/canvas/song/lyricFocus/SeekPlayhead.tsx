import { useEffect, useRef, useState, type RefObject } from "react";

/** Playback-only handle. It never receives or writes annotation state. */
export default function SeekPlayhead({
  audio,
  start,
  end,
  duration,
}: {
  audio: RefObject<HTMLAudioElement | null>;
  start: number;
  end: number;
  duration: number;
}) {
  const pointer = useRef<number | null>(null);
  const [time, setTime] = useState(audio.current?.currentTime ?? 0);
  useEffect(() => {
    const el = audio.current;
    if (!el) return;
    const update = () => setTime(el.currentTime);
    el.addEventListener("timeupdate", update);
    el.addEventListener("seeked", update);
    return () => {
      el.removeEventListener("timeupdate", update);
      el.removeEventListener("seeked", update);
    };
  }, [audio]);
  const seek = (value: number) => {
    if (!audio.current || !Number.isFinite(value)) return;
    const next = Math.max(0, Math.min(duration, value));
    audio.current.currentTime = next;
    setTime(next);
  };
  const at = (el: HTMLButtonElement, x: number) => {
    const rect = el.parentElement!.parentElement!.getBoundingClientRect();
    seek(start + Math.max(0, Math.min(1, (x - rect.left) / rect.width)) * (end - start));
  };
  return (
    <button
      className="seek-playhead-handle"
      role="slider"
      aria-label="Playback position"
      title="Drag to seek; arrows seek one second"
      aria-valuemin={0}
      aria-valuemax={duration}
      aria-valuenow={time}
      aria-valuetext={`${time.toFixed(2)} seconds`}
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
        pointer.current = e.pointerId;
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
        if (pointer.current === e.pointerId) at(e.currentTarget, e.clientX);
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
        if (pointer.current !== e.pointerId) return;
        at(e.currentTarget, e.clientX);
        pointer.current = null;
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        pointer.current = null;
      }}
      onLostPointerCapture={() => {
        pointer.current = null;
      }}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
          e.preventDefault();
          seek(
            e.key === "Home"
              ? 0
              : e.key === "End"
                ? duration
                : (audio.current?.currentTime ?? 0) +
                  (e.key === "ArrowLeft" ? -1 : 1) * (e.shiftKey ? 5 : 1),
          );
        }
      }}
    >
      <span aria-hidden="true">◆</span>
    </button>
  );
}
