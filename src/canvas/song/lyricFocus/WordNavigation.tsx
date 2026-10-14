import { useEffect, useRef, type ReactNode } from "react";
export type WordNavigationProps = {
  children: ReactNode;
  previous: boolean;
  next: boolean;
  move: (by: -1 | 1) => void;
};
export default function WordNavigation({ children, previous, next, move }: WordNavigationProps) {
  const gesture = useRef<{ x: number; y: number } | null>(null),
    swiped = useRef(false);
  const go = (by: -1 | 1) => {
    if (by === -1 ? previous : next) move(by);
  };
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        el?.closest?.('input,textarea,select,[contenteditable="true"],[role="slider"]')
      )
        return;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        go(e.key === "ArrowLeft" ? -1 : 1);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [previous, next, move]);
  return (
    <div className="word-navigation">
      <button
        className="word-caret"
        aria-label="Previous word"
        disabled={!previous}
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <div
        className="word-swipe"
        onPointerDown={(e) => {
          if (e.pointerType === "touch") {
            gesture.current = { x: e.clientX, y: e.clientY };
            swiped.current = false;
            e.currentTarget.setPointerCapture(e.pointerId);
          }
        }}
        onPointerUp={(e) => {
          const g = gesture.current;
          gesture.current = null;
          if (!g) return;
          const dx = e.clientX - g.x,
            dy = e.clientY - g.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) {
            swiped.current = true;
            go(dx < 0 ? 1 : -1);
          }
        }}
        onPointerCancel={() => {
          gesture.current = null;
        }}
        onClickCapture={(e) => {
          if (swiped.current) {
            e.preventDefault();
            e.stopPropagation();
            swiped.current = false;
          }
        }}
      >
        {children}
      </div>
      <button className="word-caret" aria-label="Next word" disabled={!next} onClick={() => go(1)}>
        ›
      </button>
    </div>
  );
}
