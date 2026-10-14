import type { RefObject } from "react";
import { formatBytes, formatTime } from "./format";
import type { CanvasProject } from "./types";

export function SourceSetup({
  project,
  audioRef,
  audioUrl,
  pendingAudioName,
  playheadMs,
  pastedText,
  splitMode,
  onAudio,
  onAudioMetadata,
  onTimeUpdate,
  onTranscript,
  onPaste,
  onSplitMode,
  onBuild,
  onDemo,
}: {
  project: CanvasProject;
  audioRef: RefObject<HTMLAudioElement | null>;
  audioUrl: string | null;
  pendingAudioName: string | null;
  playheadMs: number;
  pastedText: string;
  splitMode: "sentence" | "paragraph" | "line";
  onAudio: (file: File | undefined) => void;
  onAudioMetadata: () => void;
  onTimeUpdate: () => void;
  onTranscript: (file: File | undefined) => void;
  onPaste: (value: string) => void;
  onSplitMode: (value: "sentence" | "paragraph" | "line") => void;
  onBuild: () => void;
  onDemo: () => void;
}) {
  return (
    <div className="canvas-source-grid">
      <section className="canvas-source-card">
        <p className="eyebrow">A · Source audio</p>
        <h2>Attach the performance clock.</h2>
        <p>
          Audio remains on this device. Canvas stores metadata and millisecond boundaries; splitting
          does not create or re-encode media files.
        </p>
        <label className="canvas-drop-label">
          Choose audio
          <input
            type="file"
            accept="audio/*,.mp3,.m4a,.wav,.ogg,.webm"
            onChange={(event) => onAudio(event.target.files?.[0])}
          />
        </label>
        <audio
          ref={audioRef}
          className="canvas-audio-player"
          src={audioUrl ?? undefined}
          controls
          preload="metadata"
          onLoadedMetadata={onAudioMetadata}
          onTimeUpdate={onTimeUpdate}
          onSeeked={onTimeUpdate}
          onPause={onTimeUpdate}
        />
        <dl className="canvas-source-metadata">
          <div>
            <dt>Attached now</dt>
            <dd>{audioUrl ? pendingAudioName : "No local file attached"}</dd>
          </div>
          <div>
            <dt>Saved metadata</dt>
            <dd>
              {project.source.audio
                ? `${project.source.audio.filename} · ${formatBytes(project.source.audio.size_bytes)} · ${formatTime(project.source.audio.duration_ms)}`
                : "None"}
            </dd>
          </div>
          <div>
            <dt>Playhead</dt>
            <dd>{formatTime(playheadMs)}</dd>
          </div>
        </dl>
        {project.source.audio && !audioUrl && (
          <p className="canvas-inline-warning">
            Reattach <strong>{project.source.audio.filename}</strong> to play clips. Browsers do not
            retain access to local source files.
          </p>
        )}
      </section>

      <section className="canvas-source-card">
        <p className="eyebrow">B · Transcript</p>
        <h2>Build the first component set.</h2>
        <p>
          Import Whisper-style JSON, SRT, VTT, plain text or a prior Canvas project. Plain text gets
          provisional timing weighted by word count.
        </p>
        <div className="canvas-import-actions">
          <label className="canvas-file-button canvas-file-button-strong">
            Import transcript
            <input
              type="file"
              accept=".json,.srt,.vtt,.txt,text/plain,application/json"
              onChange={(event) => onTranscript(event.target.files?.[0])}
            />
          </label>
          <button type="button" onClick={onDemo}>
            Load demo components
          </button>
        </div>
        <label className="canvas-paste-label">
          Or paste transcript text
          <textarea
            value={pastedText}
            onChange={(event) => onPaste(event.target.value)}
            placeholder="Paste the transcript here…"
          />
        </label>
        <div className="canvas-paste-actions">
          <label>
            Initial split
            <select
              value={splitMode}
              onChange={(event) => onSplitMode(event.target.value as typeof splitMode)}
            >
              <option value="sentence">Sentence</option>
              <option value="paragraph">Paragraph</option>
              <option value="line">Line</option>
            </select>
          </label>
          <button type="button" className="canvas-strong-button" onClick={onBuild}>
            Build components
          </button>
        </div>
      </section>
    </div>
  );
}
