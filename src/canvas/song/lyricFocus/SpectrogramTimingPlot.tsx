import { useEffect, useRef, type ReactNode } from "react";
export function sourceTimeAtPointer(
  clientX: number,
  left: number,
  width: number,
  start: number,
  end: number,
  min: number,
  max: number,
) {
  if (
    ![clientX, left, width, start, end, min, max].every(Number.isFinite) ||
    width <= 0 ||
    end <= start ||
    max < min
  )
    throw new Error("Invalid frequency timeline geometry.");
  return Math.max(
    min,
    Math.min(max, start + Math.max(0, Math.min(1, (clientX - left) / width)) * (end - start)),
  );
}
export default function SpectrogramTimingPlot({
  children,
  start,
  end,
  min,
  max,
  value,
  disabled,
  onChange,
  grouped = false,
  pan,
}: {
  children: ReactNode;
  grouped?: boolean;
  pan?: {
    center: number;
    onChange: (center: number) => void;
    onZoom?: (factor: number, fraction: number, targetFraction?: number) => void;
    onResize?: (ratio: number) => void;
  };
  start: number;
  end: number;
  min: number;
  max: number;
  value: number;
  disabled: boolean;
  onChange: (value: number) => void;
}) {
  const plot = useRef<HTMLDivElement>(null),
    latest = useRef({ pan, start, end, max, disabled });
  latest.current = { pan, start, end, max, disabled };
  const touches = useRef(new Map<number, number>()),
    pinch = useRef<{ distance: number; middle: number } | null>(null);
  useEffect(() => {
    const el = plot.current;
    if (!el || !pan) return;
    const wheel = (e: WheelEvent) => {
      const v = latest.current;
      if (v.disabled || !v.pan) return;
      e.preventDefault();
      const r = el.getBoundingClientRect();
      if (e.ctrlKey || e.metaKey || Math.abs(e.deltaY) >= Math.abs(e.deltaX))
        v.pan.onZoom?.(
          Math.exp(-Math.max(-100, Math.min(100, e.deltaY)) * 0.01),
          (e.clientX - r.left) / r.width,
        );
      else {
        const delta =
          (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) *
          (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? r.width : 1);
        v.pan.onChange(
          Math.max(
            (v.end - v.start) / 2,
            Math.min(
              v.max - (v.end - v.start) / 2,
              v.pan.center + (delta / r.width) * (v.end - v.start),
            ),
          ),
        );
      }
    };
    let oldWidth = el.getBoundingClientRect().width;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if (oldWidth > 0 && width > 0 && width !== oldWidth)
        latest.current.pan?.onResize?.(width / oldWidth);
      if (width > 0) oldWidth = width;
    });
    observer.observe(el);
    el.addEventListener("wheel", wheel, { passive: false });
    return () => {
      observer.disconnect();
      el.removeEventListener("wheel", wheel);
    };
  }, [!!pan]);
  const drag = useRef<{ id: number; original: number; x: number } | null>(null);
  const point = (el: HTMLDivElement, x: number) => {
    const r = el.getBoundingClientRect();
    if (pan && drag.current) {
      pan.onChange(
        Math.max(
          (end - start) / 2,
          Math.min(
            max - (end - start) / 2,
            drag.current.original - ((x - drag.current.x) / r.width) * (end - start),
          ),
        ),
      );
      return;
    }
    onChange(sourceTimeAtPointer(x, r.left, r.width, start, end, min, max));
  };
  return (
    <div
      ref={plot}
      className="spectrogram-plot"
      style={pan?{touchAction:"none"}:undefined}
      role={grouped ? "group" : "slider"}
      tabIndex={disabled || (grouped && !pan) ? -1 : 0}
      aria-label={
        pan
          ? "Full source frequency timeline"
          : grouped
            ? "Word boundary timeline"
            : "Anchor time in source audio"
      }
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={`${value.toFixed(3)} seconds`}
      aria-disabled={disabled}
      data-start={start}
      data-end={end}
      onPointerDown={(e) => {
        if (disabled || e.button !== 0) return;
        if (pan && e.pointerType === "touch") {
          touches.current.set(e.pointerId, e.clientX);
          e.currentTarget.setPointerCapture(e.pointerId);
          if (touches.current.size === 2) {
            const [a, b] = [...touches.current.values()];
            pinch.current = { distance: Math.abs(a - b), middle: (a + b) / 2 };
            drag.current = null;
            e.preventDefault();
            return;
          }
        }
        if (drag.current) return;
        e.preventDefault();
        e.currentTarget.focus({ preventScroll: true });
        drag.current = { id: e.pointerId, original: pan?.center ?? value, x: e.clientX };
        e.currentTarget.setPointerCapture(e.pointerId);
        point(e.currentTarget, e.clientX);
      }}
      onPointerMove={(e) => {
        if (pan && touches.current.has(e.pointerId)) {
          touches.current.set(e.pointerId, e.clientX);
          if (pinch.current && touches.current.size === 2) {
            const [a, b] = [...touches.current.values()],
              distance = Math.abs(a - b),
              middle = (a + b) / 2,
              r = e.currentTarget.getBoundingClientRect();
            if (distance > 1 && pinch.current.distance > 1)
              pan.onZoom?.(
                distance / pinch.current.distance,
                (pinch.current.middle - r.left) / r.width,
                (middle - r.left) / r.width,
              );
            pinch.current = { distance, middle };
            e.preventDefault();
            return;
          }
        }
        if (!disabled && drag.current?.id === e.pointerId) {
          e.preventDefault();
          point(e.currentTarget, e.clientX);
        }
      }}
      onPointerUp={(e) => {
        touches.current.delete(e.pointerId);
        if (pinch.current) {
          pinch.current = null;
          drag.current = null;
          touches.current.clear();
          return;
        }
        if (drag.current?.id !== e.pointerId) return;
        if (!disabled) point(e.currentTarget, e.clientX);
        drag.current = null;
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={(e) => {
        touches.current.clear();
        pinch.current = null;
        if (drag.current?.id !== e.pointerId) return;
        (pan?.onChange ?? onChange)(drag.current.original);
        drag.current = null;
      }}
      onLostPointerCapture={() => {
        if (drag.current) {
          (pan?.onChange ?? onChange)(drag.current.original);
          drag.current = null;
        }
      }}
      onKeyDown={(e) => {
        if (disabled) return;
        if (pan) {
          const width = end - start;
          if (e.key === "+" || e.key === "=" || e.key === "-") {
            e.preventDefault();
            pan.onZoom?.(e.key === "-" ? 0.5 : 2, 0.5);
            return;
          }
          const next =
            e.key === "ArrowLeft"
              ? pan.center - width * 0.1
              : e.key === "ArrowRight"
                ? pan.center + width * 0.1
                : e.key === "Home"
                  ? width / 2
                  : e.key === "End"
                    ? max - width / 2
                    : null;
          if (next !== null) {
            e.preventDefault();
            pan.onChange(Math.max(width / 2, Math.min(max - width / 2, next)));
          }
          return;
        }
        const step = e.shiftKey ? 0.1 : 0.01;
        const next =
          e.key === "ArrowLeft"
            ? value - step
            : e.key === "ArrowRight"
              ? value + step
              : e.key === "Home"
                ? min
                : e.key === "End"
                  ? max
                  : null;
        if (next !== null) {
          e.preventDefault();
          onChange(Math.max(min, Math.min(max, next)));
        }
      }}
    >
      {children}
    </div>
  );
}
