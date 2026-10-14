import { useRef, Fragment, type ReactNode, type RefObject } from "react";
import BoundaryMarker from "./BoundaryMarker";
import type { Annotation } from "./audioAnnotation";
import type { Phrase } from "./audioAnchors";
import type { Anchor } from "./anchorReview";
import { wordTiming } from "./wordTiming";
export function timelineRegions(a: Annotation, phrases: Phrase[], anchors: Anchor[]) {
  const wordAnchors = new Map(
    anchors.filter((x) => x.wordIndex !== undefined).map((x) => [`${x.wordIndex}:${x.edge}`, x]),
  );
  return [
    ...phrases.map((p) => ({
      id: p.id,
      label: p.text,
      kind: "phrase",
      start: anchors.find((a) => a.phraseId === p.id && a.edge === "start"),
      end: anchors.find((a) => a.phraseId === p.id && a.edge === "end"),
    })),
    ...wordTiming(a).intervals.map((w) => {
      const i = a.items.findIndex((x) => x.id === w.id);
      return {
        id: w.id,
        label: a.items[i].text,
        kind: "word",
        start: wordAnchors.get(`${i}:start`),
        end: wordAnchors.get(`${i}:end`),
      };
    }),
  ].filter((r) => r.start && r.end) as {
    id: string;
    label: string;
    kind: string;
    start: Anchor;
    end: Anchor;
  }[];
}
export default function TimelineRegions({
  annotation,
  phrases,
  anchors,
  start,
  end,
  selected,
  editTime,
  onSelect,
  editable,
  moveDelta,
  onMove,
  audio,
  onEdge,
  dirty,
  renderActions,
}: {
  annotation: Annotation;
  phrases: Phrase[];
  anchors: Anchor[];
  start: number;
  end: number;
  selected: string;
  editTime: number | null;
  onSelect: (a: Anchor) => void;
  audio: RefObject<HTMLAudioElement | null>;
  onEdge: (anchor: Anchor, time: number) => void;
  dirty: boolean;
  renderActions?: (kind: string, count: number) => ReactNode;
  editable: boolean;
  moveDelta: number;
  onMove: (r: { start: Anchor; end: Anchor }, delta: number) => void;
}) {
  const span = end - start;
  const drag = useRef<{
      pointer: number;
      id: string;
      x: number;
      width: number;
      delta: number;
      region: { start: Anchor; end: Anchor };
    } | null>(null),
    moved = useRef(false);
  return (
    <>
      {timelineRegions(annotation, phrases, anchors)
        .filter((r) => r.kind === "phrase" || span <= 15)
        .map((r) => {
          const from = r.start.id === selected && editTime !== null ? editTime : r.start.time,
            to = r.end.id === selected && editTime !== null ? editTime : r.end.time;
          if (
            !Number.isFinite(from) ||
            !Number.isFinite(to) ||
            to <= start ||
            from >= end ||
            to <= from
          )
            return null;
          const left = Math.max(start, from),
            right = Math.min(end, to),
            active = r.start.id === selected || r.end.id === selected;
          return (
            <Fragment key={r.id}>
              <button
                className={`timeline-region ${r.kind} ${active ? "selected" : ""}`}
                style={{
                  left: `${((left - start) / span) * 100}%`,
                  width: `${((right - left) / span) * 100}%`,
                }}
                aria-label={`${r.kind}: ${r.label}, ${from.toFixed(3)} to ${to.toFixed(3)} seconds`}
                aria-pressed={active}
                data-unlocked={active && editable}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  moved.current = false;
                  if (!active || !editable) return;
                  e.preventDefault();
                  const width = e.currentTarget.parentElement!.getBoundingClientRect().width;
                  drag.current = {
                    pointer: e.pointerId,
                    id: r.id,
                    x: e.clientX,
                    width,
                    delta: moveDelta,
                    region: r,
                  };
                  e.currentTarget.setPointerCapture(e.pointerId);
                }}
                onPointerMove={(e) => {
                  const d = drag.current;
                  if (!d || d.pointer !== e.pointerId || d.id !== r.id) return;
                  e.stopPropagation();
                  moved.current = true;
                  onMove(d.region, d.delta + ((e.clientX - d.x) / d.width) * span);
                }}
                onPointerUp={(e) => {
                  if (drag.current?.pointer !== e.pointerId) return;
                  drag.current = null;
                  if (e.currentTarget.hasPointerCapture(e.pointerId))
                    e.currentTarget.releasePointerCapture(e.pointerId);
                }}
                onPointerCancel={() => {
                  if (drag.current) onMove(drag.current.region, drag.current.delta);
                  drag.current = null;
                }}
                onLostPointerCapture={() => {
                  if (drag.current) onMove(drag.current.region, drag.current.delta);
                  drag.current = null;
                }}
                onKeyDown={(e) => {
                  if (active && editable && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
                    e.preventDefault();
                    e.stopPropagation();
                    onMove(
                      r,
                      moveDelta + (e.key === "ArrowLeft" ? -1 : 1) * (e.shiftKey ? 0.1 : 0.01),
                    );
                  }
                }}

                onClick={(e) => {
                  e.stopPropagation();
                  if (moved.current) {
                    moved.current = false;
                    return;
                  }
                  const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                  const clicked = start + ((e.clientX - rect.left) / rect.width) * span;
                  onSelect(
                    e.clientX && Math.abs(clicked - to) < Math.abs(clicked - from)
                      ? r.end
                      : r.start,
                  );
                }}
              >
                <span className="region-label">{r.label}</span>
              </button>
              {active && renderActions && (
                <div
                  className={`interval-actions ${r.kind}`}
                  style={{
                    left: `${((left - start) / span) * 100}%`,
                    width: `${((right - left) / span) * 100}%`,
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  {renderActions(
                    r.kind,
                    r.kind === "word"
                      ? 1
                      : annotation.items
                          .slice(r.start.index, r.end.index)
                          .filter((w) => w.kind === "lyric").length,
                  )}
                </div>
              )}
              {active && (
                <div className={`clip-handles ${r.kind}`}>
                  {[r.start, r.end].map((a, i) => (
                    <BoundaryMarker
                      key={a.id}
                      scope={`${r.kind} span`}
                      edge={i === 0 ? "start" : "end"}
                      value={i === 0 ? from : to}
                      selected={a.id === selected}
                      disabled={!editable || (dirty && (moveDelta !== 0 || a.id !== selected))}
                      windowStart={start}
                      windowEnd={end}
                      audio={audio}
                      onChange={(_, time) => onEdge(a, time)}
                    />
                  ))}
                </div>
              )}
            </Fragment>
          );
        })}
    </>
  );
}
