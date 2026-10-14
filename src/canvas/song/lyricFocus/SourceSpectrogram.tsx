import SeekPlayhead from "./SeekPlayhead";
import { zoomViewport } from "./timelineViewport";
import BoundaryMarker, { type BoundaryEdge } from "./BoundaryMarker";
import SpectrogramTimingPlot from "./SpectrogramTimingPlot";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
type Meta = {
  sourceHash: string;
  dataHash: string;
  frames: number;
  bins: number;
  hopSeconds: number;
  sampleRate: number;
  fftSize: number;
  minDb: number;
  maxDb: number;
  duration: number;
};
const verifiedSources = new Map<string, { meta: Meta; bytes: Uint8Array }>();
export default function SourceSpectrogram({
  audio,
  url,
  hash,
  value,
  savedValue,
  now,
  duration,
  disabled,
  disabledReason,
  min,
  max,
  onChange,
  onReady,
  word,
  full,
}: {
  full?: {
    seekTarget?: number;
    overlay: (start: number, end: number) => ReactNode;
    view?: { span: number; center: number };
    onViewportChange?: (span: number, center: number) => void;
  };
  audio: RefObject<HTMLAudioElement | null>;
  url: string;
  hash: string;
  value: number;
  savedValue: number;
  now: number;
  duration: number;
  disabled: boolean;
  disabledReason?: string;
  min: number;
  max: number;
  onChange: (n: number) => void;
  onReady?: (ready: boolean) => void;
  word?: {
    start: number;
    end: number;
    selected: BoundaryEdge;
    fixedStart?: boolean;
    fixedEnd?: boolean;
    dirty: boolean;
    onChange: (edge: BoundaryEdge, time: number) => void;
  };
}) {
  const [data, setData] = useState<{ meta: Meta; bytes: Uint8Array } | null>(null),
    [error, setError] = useState(""),
    [span, setSpan] = useState(full ? (full.view?.span ?? duration) : max - min < 0.5 ? 0.75 : 3),
    [center, setCenter] = useState(
      full ? (full.view?.center ?? duration / 2) : word ? (word.start + word.end) / 2 : value,
    );
  useEffect(() => {
    full?.onViewportChange?.(span, center);
  }, [span, center]);
  useEffect(() => {
    if (full?.seekTarget !== undefined) setCenter(full.seekTarget);
  }, [full?.seekTarget]);
  const zoom = (factor: number, fraction = 0.5, targetFraction = fraction) => {
    const next = zoomViewport(start, length, duration, factor, fraction, targetFraction);
    setSpan(next.span);
    setCenter(next.start + next.span / 2);
  };
  const [retry, setRetry] = useState(0);
  const [wordWindow] = useState(() => (word ? word.end - word.start + 0.12 : 0));
  const canvas = useRef<HTMLCanvasElement>(null),
    playhead = useRef<HTMLSpanElement>(null);
  const length = Math.min(word ? Math.max(span, wordWindow) : span, duration),
    start = Math.max(0, Math.min(duration - length, center - length / 2)),
    end = start + length;
  useEffect(() => {
    let live = true;
    const cacheKey = `${url}:${hash}:${duration}`;
    setData(null);
    setError("");
    onReady?.(false);
    const cached = verifiedSources.get(cacheKey);
    if (cached) {
      setData(cached);
      onReady?.(true);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    (async () => {
      try {
        const base = url.replace(/\.mp3$/, ".spectrogram");
        const [m, b] = await Promise.all([
          fetch(base + ".json", { signal: controller.signal }),
          fetch(base + ".bin", { signal: controller.signal }),
        ]);
        if (!m.ok || !b.ok) throw new Error("Frequency view unavailable for this source.");
        const meta = (await m.json()) as Meta;
        const bytes = new Uint8Array(await b.arrayBuffer());
        const digest = Array.from(
          new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)),
          (n) => n.toString(16).padStart(2, "0"),
        ).join("");
        if (
          meta.sourceHash !== hash ||
          !Number.isFinite(meta.duration) ||
          meta.frames * 0.01 < duration ||
          meta.frames * 0.01 > duration + 0.02 ||
          !Number.isInteger(meta.frames) ||
          meta.frames < 1 ||
          Math.abs(meta.duration - duration) > 0.002 ||
          meta.fftSize !== 512 ||
          meta.minDb !== -90 ||
          meta.maxDb !== 0 ||
          digest !== meta.dataHash ||
          bytes.length !== meta.frames * meta.bins ||
          meta.bins !== 257 ||
          meta.hopSeconds !== 0.01 ||
          meta.sampleRate !== 16000
        )
          throw new Error("Frequency data does not match this recording.");
        if (live) {
          const source = { meta, bytes };
          if (verifiedSources.size >= 2)
            verifiedSources.delete(verifiedSources.keys().next().value!);
          verifiedSources.set(cacheKey, source);
          setData(source);
          onReady?.(true);
        }
      } catch (e) {
        if (live) setError(e instanceof Error ? e.message : "Frequency view unavailable.");
      } finally {
        clearTimeout(timeout);
      }
    })();
    return () => {
      live = false;
      controller.abort();
      clearTimeout(timeout);
    };
  }, [url, hash, duration, retry, onReady]);
  useEffect(() => {
    if (!canvas.current || !data) return;
    const ctx = canvas.current.getContext("2d");
    if (!ctx) return;
    const w = 800,
      h = 257;
    canvas.current.width = w;
    canvas.current.height = h;
    const image = ctx.createImageData(w, h);
    for (let x = 0; x < w; x++) {
      const frame = Math.min(
        data.meta.frames - 1,
        Math.max(0, Math.round((start + (x / (w - 1)) * length) / data.meta.hopSeconds)),
      );
      for (let y = 0; y < h; y++) {
        const strength = data.bytes[frame * 257 + (256 - y)] / 255;
        const i = (y * w + x) * 4;
        image.data[i] = Math.round(14 + 241 * Math.pow(strength, 1.1));
        image.data[i + 1] = Math.round(27 + 192 * Math.pow(strength, 1.7));
        image.data[i + 2] = Math.round(48 + 93 * Math.sin(strength * Math.PI));
        image.data[i + 3] = 255;
      }
    }
    ctx.putImageData(image, 0, 0);
  }, [data, start, length]);
  useEffect(() => {
    const tick = () => {
      const t = audio.current?.currentTime ?? now;
      const el = playhead.current;
      if (el) {
        el.hidden = t < start || t > end;
        el.style.left = `${((t - start) / length) * 100}%`;
        el.dataset.time = String(t);
      }
    };
    tick();
    const timer = setInterval(tick, 16);
    return () => clearInterval(timer);
  }, [audio, start, end, length, !!data]);
  const percent = (t: number) => ((t - start) / length) * 100;
  return (
    <div className="source-spectrogram">
      <div className="spectrogram-toolbar">
        {!full && <span>Frequency view</span>}
        {full ? (
          <div className="timeline-zoom" aria-label="Timeline zoom">
            <button aria-label="Zoom out" title="Zoom out" onClick={() => zoom(0.5)}>
              −
            </button>
            <button aria-label="Zoom in" title="Zoom in" onClick={() => zoom(2)}>
              +
            </button>
            <button
              aria-label="Fit recording"
              title="Fit recording"
              onClick={() => {
                setSpan(duration);
                setCenter(duration / 2);
              }}
            >
              ⤢
            </button>
          </div>
        ) : (
          <label>
            {"Window"}{" "}
            <select
              aria-label="Frequency window"
              value={span}
              disabled={disabled}
              onChange={(e) => {
                if (!full) setCenter(word ? (word.start + word.end) / 2 : value);
                setSpan(Number(e.target.value));
              }}
            >
              {(full ? [0.25, 0.75, 1.5, 3, 6, 15, 30, 60, duration] : [0.25, 0.75, 1.5, 3, 6]).map(
                (n) => (
                  <option value={n} key={n}>
                    {n}s
                  </option>
                ),
              )}
            </select>
          </label>
        )}
      </div>
      <div className="spectrogram-value" hidden={!!full}>
        <output aria-label="Selected anchor timestamp">
          {Number.isFinite(value) ? value.toFixed(3) : "—"}s
        </output>
        <span>
          {value !== savedValue
            ? "Unsaved timing"
            : min === max
              ? "Fixed recording edge"
              : disabled
                ? (disabledReason ?? "Playback running")
                : "Click or drag to place anchor"}
        </span>
      </div>
      {data ? (
        <>
          <div className="spectrogram-frame">
            <div className="spectrogram-frequency">
              <span>8 kHz</span>
              <span>4 kHz</span>
              <span>0</span>
            </div>
            <SpectrogramTimingPlot
              grouped={!!word || !!full}
              pan={
                full
                  ? {
                      center: start + length / 2,
                      onChange: setCenter,
                      onZoom: zoom,
                      onResize: (ratio) => {
                        const nextLength = Math.min(duration, Math.max(0.25, length * ratio));
                        setSpan(nextLength);
                        setCenter(start + nextLength / 2);
                      },
                    }
                  : undefined
              }
              start={start}
              end={end}
              min={min}
              max={max}
              value={value}
              disabled={disabled}
              onChange={onChange}
            >
              <span
                className="spectrogram-limit before"
                style={{ width: `${Math.max(0, Math.min(100, percent(min)))}%` }}
              />
              <span
                className="spectrogram-limit after"
                style={{ width: `${Math.max(0, Math.min(100, 100 - percent(max)))}%` }}
              />
              <canvas
                ref={canvas}
                role="img"
                aria-label={`Source spectrogram from ${start.toFixed(3)} to ${end.toFixed(3)} seconds, frequency 0 to 8 kilohertz. Brighter means stronger energy.`}
              />
              {!full && !word && value >= start && value <= end && (
                <span
                  className="spectrogram-anchor"
                  style={{ left: `${percent(value)}%` }}
                  data-time={value}
                >
                  <b>Anchor</b>
                </span>
              )}
              {word &&
                (["start", "end"] as const).map((edge) => (
                  <BoundaryMarker
                    key={edge}
                    edge={edge}
                    value={word[edge]}
                    selected={word.selected === edge}
                    disabled={
                      disabled ||
                      (edge === "start" ? word.fixedStart : word.fixedEnd) ||
                      (word.dirty && word.selected !== edge)
                    }
                    windowStart={start}
                    windowEnd={end}
                    audio={audio}
                    onChange={word.onChange}
                  />
                ))}
              {full?.overlay(start, end)}
              <span
                ref={playhead}
                className="spectrogram-playhead"
                style={{ left: `${percent(now)}%` }}
                data-time={now}
              >
                {full && <SeekPlayhead audio={audio} start={start} end={end} duration={duration} />}
              </span>
            </SpectrogramTimingPlot>
          </div>
          <div className="spectrogram-time">
            <span>{start.toFixed(2)}s</span>
            <span>{end.toFixed(2)}s</span>
          </div>
        </>
      ) : (
        <div>
          <p role="status">
            {error
              ? "Frequency data could not load. Your timing is preserved."
              : "Loading source frequencies…"}
          </p>
          {error && <button onClick={() => setRetry((n) => n + 1)}>Retry frequency view</button>}
        </div>
      )}
    </div>
  );
}
