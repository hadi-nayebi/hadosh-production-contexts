import StructureMap from "./StructureMap";
import { songStructure } from "./structure";
import "./lyric-focus.css";
import { useEffect, useRef, useState } from "react";
import type { Draft } from "./model";
import {
  createArrangement,
  parseArrangement,
  setDuration,
  timedBlocks,
  layoutBlocks,
  audioTimingCurrent,
  type Arrangement,
} from "./arrangement";
import "./arrangement.css";
export default function ArrangementView({
  draft,
  practice,
  onBack,
}: {
  draft: Draft;
  practice: boolean;
  onBack: () => void;
}) {
  const key = `canvas-arrangement-${practice ? "practice" : "human"}:${createArrangement(draft, practice).lyricStamp}`;
  const [loaded] = useState(() => {
    const raw = localStorage.getItem(key);
    try {
      return {
        a: raw
          ? parseArrangement(raw, draft, practice)
          : createArrangement(draft, practice),
        raw,
        error: "",
      };
    } catch (e) {
      return { a: createArrangement(draft, practice), raw, error: String(e) };
    }
  });
  const [a, setA] = useState(loaded.a),
    [selected, setSelected] = useState<string | null>(null),
    [seconds, setSeconds] = useState(""),
    [error, setError] = useState(loaded.error),
    [message, setMessage] = useState(""),
    [width, setWidth] = useState(1000);
  const root = useRef<HTMLDivElement>(null),
    lastRaw = useRef(loaded.raw);
  useEffect(() => {
    window.scrollTo(0, 0);
    const el = root.current!;
    const obs = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const layout = layoutBlocks(a, width, selected),
    timed = timedBlocks(a),
    total = timed.at(-1)?.end ?? 0;
  const save = (next: Arrangement) => {
    try {
      if (loaded.error) throw new Error(loaded.error);
      if (localStorage.getItem(key) !== lastRaw.current)
        throw new Error(
          "Arrangement changed in another tab. Reload to review it before saving.",
        );
      const raw = JSON.stringify(next);
      localStorage.setItem(key, raw);
      lastRaw.current = raw;
      setA(next);
      setError("");
      setMessage("Timing saved. Intended arrangement only.");
    } catch (e) {
      setError(String(e));
    }
  };
  const clock = (n: number) =>
    `${Math.floor(n / 60)}:${(n % 60).toFixed(1).padStart(4, "0")}`;
  return (
    <main className="arrangement-space">
      <StructureMap
        draft={draft}
        activeId={
          selected
            ? selected.includes(":gap") &&
              songStructure(draft).some(
                (m) => m.id === selected.split(":")[0] + ":instrumental",
              )
              ? selected.split(":")[0] + ":instrumental"
              : selected.split(":")[0]
            : ""
        }
        onNavigate={(id) => {
          const b = [...a.blocks]
            .filter(
              (b) =>
                b.lyricId === id.replace(":instrumental", "") &&
                b.kind ===
                  (id.endsWith(":instrumental") ? "instrumental" : "vocal"),
            )
            .at(id.endsWith(":instrumental") ? -1 : 0);
          if (b) {
            setSelected(b.id);
            setSeconds(String(b.seconds));
            requestAnimationFrame(() =>
              document
                .getElementById(b.id)
                ?.scrollIntoView({ block: "center", behavior: "smooth" }),
            );
          }
        }}
      />
      <div className="arrangement-intro">
        <button onClick={onBack}>Back to lyrics</button>
        <p>
          {practice ? "Practice arrangement. " : ""}Intended arrangement ·{" "}
          {clock(total)} · no audio generated
        </p>
        <small>
          Vocal blue · instrumental peach · {layout.scale.toFixed(1)} px/second,
          with a 100 px minimum for readable short blocks.
        </small>
      </div>
      <div
        className="arrangement-chain"
        ref={root}
        style={{ height: layout.height }}
      >
        <svg aria-hidden="true" width="100%" height={layout.height}>
          <defs>
            <marker
              id="chain-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0 0 L7 4 L0 8" fill="none" stroke="#899ba9" />
            </marker>
          </defs>
          {layout.placed.slice(1).map((p, i) => {
            const before = layout.placed[i],
              x1 = before.x + before.width / 2,
              y1 = before.y + 46,
              x2 = p.x + p.width / 2,
              y2 = p.y + 46;
            return (
              <path
                key={p.block.id}
                d={`M${x1} ${y1} C${x1} ${y1 + (y2 - y1) / 2} ${x2} ${y2 - (y2 - y1) / 2} ${x2} ${y2}`}
                fill="none"
                stroke="#bdcbd3"
                strokeWidth="2"
                markerEnd="url(#chain-arrow)"
              />
            );
          })}
        </svg>
        {layout.placed.map((p, i) => (
          <div key={p.block.id}>
            <button
              id={p.block.id}
              className={`arrangement-block ${p.block.kind}`}
              style={{ left: p.x, top: p.y, width: p.width }}
              aria-label={`${i + 1}. ${p.block.kind}, ${p.block.seconds} seconds: ${p.block.text}`}
              aria-pressed={selected === p.block.id}
              onClick={() => {
                setSelected(selected === p.block.id ? null : p.block.id);
                setSeconds(String(p.block.seconds));
                setMessage("");
              }}
            >
              <span>
                {i + 1} · {clock(timed[i].start)}
              </span>
              <strong>
                {p.block.kind === "vocal"
                  ? p.block.text
                  : p.block.text.replaceAll("[", "").replaceAll("]", "")}
              </strong>
              <span>
                {p.block.seconds}s{" "}
                {p.block.kind === "instrumental" && p.block.seconds === 0
                  ? "· continuous"
                  : ""}
              </span>
            </button>
            {selected === p.block.id && (
              <section
                className="block-inspector"
                style={{
                  left: Math.max(0, Math.min(p.x, width - 310)),
                  top: p.y + 110,
                }}
                aria-label="Selected block timing"
              >
                <p>{p.block.text}</p>
                <label>
                  Duration (seconds)
                  <input
                    aria-label="Duration (seconds)"
                    type="number"
                    min={p.block.kind === "vocal" ? 0.1 : 0}
                    max="120"
                    step="0.1"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                  />
                </label>
                <button
                  onClick={() => {
                    try {
                      if (!seconds.trim()) throw new Error("Enter a duration.");
                      save(setDuration(a, p.block.id, Number(seconds)));
                    } catch (e) {
                      setError(String(e));
                    }
                  }}
                >
                  Save duration
                </button>
                <button onClick={() => setSelected(null)}>Close</button>
                <small>
                  {p.block.basis}. Lyric revision {p.block.lyricRevision}.
                </small>
                {message && <p role="status">{message}</p>}
                {error && <p role="alert">{error}</p>}
              </section>
            )}
          </div>
        ))}
      </div>
      <details>
        <summary>Arrangement history & source</summary>
        <p>
          Revision {a.revision}.{" "}
          {a.audioTiming
            ? audioTimingCurrent(a)
              ? "Audio timing matches this arrangement revision."
              : "Dependent audio timing is stale; re-alignment is required."
            : "No audio timing has been attached."}
        </p>
        <p>
          Changing a lyric revision locks its dependent arrangement. Prior
          versions stay stored. All durations are proposals.
        </p>
        {a.history.map((h) => (
          <button
            key={h.revision}
            onClick={() =>
              save({
                ...a,
                revision: a.revision + 1,
                blocks: h.blocks,
                history: [
                  ...a.history,
                  { revision: a.revision, blocks: a.blocks },
                ],
              })
            }
          >
            Restore timing r{h.revision}
          </button>
        ))}
        <button
          onClick={() => {
            const url = URL.createObjectURL(
              new Blob([JSON.stringify(a, null, 2)], {
                type: "application/json",
              }),
            );
            const link = document.createElement("a");
            link.href = url;
            link.download = "intended-arrangement.json";
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          }}
        >
          Export arrangement
        </button>
      </details>
      {error && <p role="alert">{error}</p>}
    </main>
  );
}
