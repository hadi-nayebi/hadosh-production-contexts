import { useRef } from "react";
export function boundaryAtPointer(
  x: number,
  left: number,
  width: number,
  min: number,
  max: number,
) {
  return min + Math.max(0, Math.min(1, (x - left - 12) / Math.max(1, width - 24))) * (max - min);
}
export default function BoundarySlider({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  const pointer = useRef<number | null>(null);
  const initial = useRef(value);
  const clamped = Math.max(min, Math.min(max, value));
  const fraction = (clamped - min) / Math.max(Number.EPSILON, max - min);
  return (
    <div
      className="boundary-slider"
      role="slider"
      tabIndex={0}
      aria-label="Drag shared boundary"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={clamped}
      aria-valuetext={`${clamped.toFixed(3)} seconds`}
      onPointerDown={(e) => {
        if (e.button !== 0 || pointer.current !== null) return;
        e.preventDefault();
        e.currentTarget.focus();
        initial.current = value;
        pointer.current = e.pointerId;
        e.currentTarget.setPointerCapture(e.pointerId);
        const r = e.currentTarget.getBoundingClientRect();
        onChange(boundaryAtPointer(e.clientX, r.left, r.width, min, max));
      }}
      onPointerMove={(e) => {
        if (pointer.current !== e.pointerId) return;
        const r = e.currentTarget.getBoundingClientRect();
        onChange(boundaryAtPointer(e.clientX, r.left, r.width, min, max));
      }}
      onPointerUp={(e) => {
        if (pointer.current !== e.pointerId) return;
        pointer.current = null;
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={(e) => {
        if (pointer.current === e.pointerId) {
          pointer.current = null;
          onChange(initial.current);
        }
      }}
      onLostPointerCapture={() => {
        pointer.current = null;
      }}
      onKeyDown={(e) => {
        let next = value;
        const step = e.shiftKey ? 0.1 : 0.01;
        if (e.key === "ArrowRight" || e.key === "ArrowUp") next += step;
        else if (e.key === "ArrowLeft" || e.key === "ArrowDown") next -= step;
        else if (e.key === "Home") next = min;
        else if (e.key === "End") next = max;
        else return;
        e.preventDefault();
        onChange(Math.max(min, Math.min(max, next)));
      }}
    >
      <span className="boundary-slider-track" />
      <span
        className="boundary-slider-thumb"
        style={{ left: `calc(12px + (100% - 24px) * ${fraction})` }}
      />
    </div>
  );
}
