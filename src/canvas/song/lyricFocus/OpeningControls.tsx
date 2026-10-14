import { useState } from "react";
import {
  openingDefaults,
  openingAssets,
  openingEvents,
  wordArt,
  wordPlaces,
  type OpeningDirection,
} from "./openingDirection";
import rhythm from "./earthBuildRhythm.json";
export default function OpeningControls({
  direction = openingDefaults,
  onChange,
  onSeek,
}: {
  direction?: OpeningDirection;
  onChange: (d: OpeningDirection) => void;
  onSeek: (t: number) => void;
}) {
  const [asset, setAsset] = useState("book"),
    [selectedWord, setSelectedWord] = useState("view");
  const art = wordArt(selectedWord, direction);
  const setWord = (patch: Partial<typeof art>) =>
    onChange({ ...direction, words: { ...direction.words, [selectedWord]: { ...art, ...patch } } });
  const p = direction.placements[asset] ?? openingDefaults.placements[asset];
  function field(
    label: string,
    key: "zoom" | "zoomStart" | "zoomEnd" | "wordHold" | "wordScale" | "wordX" | "wordY",
    min: number,
    max: number,
    step: number,
  ) {
    return (
      <label>
        {label}
        <input
          aria-label={label}
          type="range"
          min={min}
          max={max}
          step={step}
          value={direction[key]}
          onChange={(e) => onChange({ ...direction, [key]: Number(e.target.value) })}
        />
        <output>{direction[key].toFixed(2)}</output>
      </label>
    );
  }
  return (
    <details open className="opening-controls">
      <summary>Polish the opening</summary>
      <div className="opening-review-jumps">
        {[
          ["Start", 0],
          ["Come closer", 2.95],
          ["Book", 4.7],
          ["Window", 6.6],
          ["View", 9.1],
          ["Electricity", 11],
          ["Transistors", 14.5],
          ["Computers", 18.4],
          ["Web", 21.8],
        ].map(([label, t]) => (
          <button key={label} type="button" onClick={() => onSeek(Number(t))}>
            {label}
          </button>
        ))}
      </div>
      <label>
        Place asset
        <select aria-label="Opening asset" value={asset} onChange={(e) => setAsset(e.target.value)}>
          {["book", "stool", "logo", "window", "earth"].map((id) => (
            <option key={id} value={id}>
              {id === "window" ? "Zoom target" : id}
            </option>
          ))}
        </select>
      </label>
      <div className="opening-control-grid">
        {(["x", "y", "scale"] as const)
          .filter((k) => asset !== "window" || k !== "scale")
          .map((key) => (
            <label key={key}>
              {key === "x" ? "Horizontal" : key === "y" ? "Vertical" : "Size"}
              <input
                aria-label={`Asset ${key}`}
                type="range"
                min={key === "scale" ? 0.1 : 0}
                max={key === "scale" ? 3 : 100}
                step={key === "scale" ? 0.01 : 0.5}
                value={p[key]}
                onChange={(e) =>
                  onChange({
                    ...direction,
                    placements: {
                      ...direction.placements,
                      [asset]: { ...p, [key]: Number(e.target.value) },
                    },
                  })
                }
              />
              <output>{p[key].toFixed(2)}</output>
            </label>
          ))}
        {field("Zoom amount", "zoom", 1, 8, 0.05)}
        {field("Slow approach", "zoomStart", 2.8, direction.zoomEnd - 0.05, 0.01)}
        {field("Zoom ends", "zoomEnd", direction.zoomStart + 0.05, 9.5, 0.01)}
        {field("Word linger", "wordHold", 0, 1, 0.01)}
        {field("Word size", "wordScale", 0.3, 3, 0.01)}
        {field("Word horizontal", "wordX", 5, 95, 0.5)}
        {field("Word vertical", "wordY", 10, 90, 0.5)}
      </div>
      <details>
        <summary>Place and animate each word</summary>
        <label>
          Story passage word
          <select
            aria-label="Story passage word"
            value={selectedWord}
            onChange={(e) => setSelectedWord(e.target.value)}
          >
            {Object.keys(wordPlaces).map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </label>
        <div className="opening-control-grid">
          {(["x", "y", "scale", "hold"] as const).map((k) => (
            <label key={k}>
              {k}
              <input
                aria-label={`Word ${k}`}
                type="range"
                min={k === "scale" ? 0.3 : 0}
                max={k === "scale" ? 3 : k === "hold" ? 6 : 100}
                step={k === "x" || k === "y" ? 0.5 : 0.01}
                value={art[k]}
                onChange={(e) => setWord({ [k]: Number(e.target.value) })}
              />
              <output>{art[k].toFixed(2)}</output>
            </label>
          ))}
          <label>
            Keep with following words
            <select
              aria-label="Word persistence"
              value={art.keep ?? "phrase"}
              onChange={(e) =>
                setWord({ keep: e.target.value as "word" | "phrase" | "next-phrase" })
              }
            >
              <option value="phrase">Until phrase ends</option>
              <option value="next-phrase">Until next phrase starts</option>
              <option value="word">Only its own hold</option>
            </select>
          </label>
          <label>
            Motion
            <select
              aria-label="Word motion"
              value={art.motion}
              onChange={(e) => setWord({ motion: e.target.value as typeof art.motion })}
            >
              {["grow", "shrink", "stretch", "still", "fonts"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>
      </details>
      <details>
        <summary>Assets</summary>
        <div className="opening-asset-grid">
          {openingAssets.map((a) => (
            <figure key={a.id}>
              <img src={a.src} alt={a.label} />
              <figcaption>{a.label}</figcaption>
            </figure>
          ))}
        </div>
      </details>
      <details>
        <summary>Rhythm entrances · {rhythm.events.length} items</summary>
        <p>
          Measured three-band musical onset candidates. Listening review pending. Times are
          visual-only; audio anchors stay fixed. Each question appears alone.
        </p>
        <div className="opening-event-list">
          {openingEvents(direction).map((e) => (
            <label key={e.id}>
              <button
                type="button"
                onClick={() => onSeek((direction.events[e.id] ?? e.time) + 0.01)}
              >
                {e.text ?? e.assetId ?? e.stage}
              </button>
              <input
                aria-label={`Entrance ${e.id}`}
                type="number"
                min="9.5"
                max="26.31"
                step="0.01"
                value={direction.events[e.id] ?? e.time}
                onChange={(event) => {
                  const t = Number(event.target.value);
                  if (Number.isFinite(t) && t >= 9.5 && t < 26.32)
                    onChange({ ...direction, events: { ...direction.events, [e.id]: t } });
                }}
              />
              <span>{e.pulseId}</span>
            </label>
          ))}
        </div>
        <p>
          Web date:{" "}
          <a href={rhythm.date.source} target="_blank" rel="noreferrer">
            1989, first proposal (CERN)
          </a>
          . Scene ends at the existing next-verse boundary.
        </p>
      </details>
    </details>
  );
}
