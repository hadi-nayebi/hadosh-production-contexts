import { useEffect, useRef, type RefObject } from "react";
import { sourceTimeAtPointer } from "./SpectrogramTimingPlot";
export type BoundaryEdge = "start" | "end";
export default function BoundaryMarker({
  scope = "word",
  edge,
  value,
  selected,
  disabled,
  windowStart,
  windowEnd,
  audio,
  onChange,
}: {
  scope?: string;
  edge: BoundaryEdge;
  value: number;
  selected: boolean;
  disabled: boolean;
  windowStart: number;
  windowEnd: number;
  audio: RefObject<HTMLAudioElement | null>;
  onChange: (edge: BoundaryEdge, value: number) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null),
    drag = useRef<{ id: number; original: number } | null>(null);
  useEffect(() => {
    let previous = audio.current?.currentTime ?? 0,
      pulseUntil = 0;
    const tick = () => {
      const media = audio.current,
        t = media?.currentTime ?? 0;
      if (
        media &&
        !media.paused &&
        !media.seeking &&
        t >= previous &&
        t - previous <= 0.25 &&
        previous < value &&
        t >= value
      )
        pulseUntil = performance.now() + 240;
      ref.current?.setAttribute("data-pulse", performance.now() < pulseUntil ? "true" : "false");
      previous = t;
    };
    const timer = setInterval(tick, 16);
    return () => clearInterval(timer);
  }, [audio, value]);
  const point = (el: HTMLButtonElement, x: number) => {
    const r = el.parentElement!.getBoundingClientRect();
    onChange(
      edge,
      sourceTimeAtPointer(x, r.left, r.width, windowStart, windowEnd, windowStart, windowEnd),
    );
  };
  return (
    <button
      ref={ref}
      className={`word-boundary-marker ${edge} ${selected ? "selected" : ""}`}
      style={{ left: `${((value - windowStart) / (windowEnd - windowStart)) * 100}%` }}
      role="slider"
      aria-label={`${edge === "start" ? "Start" : "End"} ${scope} boundary`}
      aria-valuenow={value}
      aria-valuemin={windowStart}
      aria-valuemax={windowEnd}
      aria-valuetext={`${value.toFixed(3)} seconds${selected ? ", selected" : ""}`}
      disabled={disabled}
      data-time={value}
      onPointerDown={(e) => {
        e.stopPropagation();
        if (disabled || e.button !== 0) return;
        e.preventDefault();
        drag.current = { id: e.pointerId, original: value };
        e.currentTarget.setPointerCapture(e.pointerId);
        onChange(edge, value);
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
        if (drag.current?.id === e.pointerId && !disabled) point(e.currentTarget, e.clientX);
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
        if (drag.current) {
          onChange(edge, drag.current.original);
          drag.current = null;
        }
      }}
      onLostPointerCapture={() => {
        if (drag.current) {
          onChange(edge, drag.current.original);
          drag.current = null;
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
        onChange(edge, value);
      }}
      onKeyDown={(e) => {
        e.stopPropagation();
        const next =
          e.key === "ArrowLeft"
            ? value - (e.shiftKey ? 0.1 : 0.01)
            : e.key === "ArrowRight"
              ? value + (e.shiftKey ? 0.1 : 0.01)
              : null;
        if (next !== null) {
          e.preventDefault();
          onChange(edge, next);
        }
      }}
    >
      <span>{edge === "start" ? "Start" : "End"}</span>
    </button>
  );
}
