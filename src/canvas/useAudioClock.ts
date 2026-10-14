import { useEffect, useRef, useState } from "react";
import { attachAudioMetadata } from "./model";
import type { CanvasProject, ProductionComponent, ProjectCommit } from "./types";

export function useAudioClock(
  project: CanvasProject,
  commit: ProjectCommit,
  notify: (message: string) => void,
) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [playheadMs, setPlayheadMs] = useState(0);
  const pendingAudio = useRef<File | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const rangeEndMs = useRef<number | null>(null);
  const durationMs = Math.max(
    project.source.audio?.duration_ms ?? 0,
    ...project.components.map((component) => component.end_ms),
    1,
  );

  useEffect(
    () => () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    },
    [audioUrl],
  );

  const importAudio = (file: File | undefined) => {
    if (!file) return;
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    pendingAudio.current = file;
    setAudioUrl(URL.createObjectURL(file));
    setPlayheadMs(0);
  };

  const finishAudioMetadata = () => {
    const file = pendingAudio.current;
    const audio = audioRef.current;
    if (!file || !audio || !Number.isFinite(audio.duration)) return;
    commit((current) =>
      attachAudioMetadata(current, {
        filename: file.name,
        media_type: file.type || "application/octet-stream",
        size_bytes: file.size,
        duration_ms: Math.round(audio.duration * 1_000),
        last_modified: Number.isFinite(file.lastModified) ? file.lastModified : null,
      }),
    );
    notify("Audio attached locally. The source file is not committed to Git.");
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Math.round(audio.currentTime * 1_000);
    setPlayheadMs(next);
    if (rangeEndMs.current !== null && next >= rangeEndMs.current) {
      audio.pause();
      audio.currentTime = rangeEndMs.current / 1_000;
      setPlayheadMs(rangeEndMs.current);
      rangeEndMs.current = null;
    }
  };

  const playRange = async (component: ProductionComponent) => {
    const audio = audioRef.current;
    if (!audioUrl || !audio) {
      notify("Attach the local source audio before playing a component.");
      return;
    }
    rangeEndMs.current = component.end_ms;
    audio.currentTime = component.start_ms / 1_000;
    setPlayheadMs(component.start_ms);
    try {
      await audio.play();
    } catch {
      notify("The browser did not start playback. Use the audio control and try again.");
    }
  };

  const seekTimeline = (clientX: number) => {
    const timeline = document.getElementById("canvas-component-timeline");
    const audio = audioRef.current;
    if (!timeline || !audioUrl || !audio) return;
    const bounds = timeline.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
    rangeEndMs.current = null;
    audio.currentTime = (durationMs * ratio) / 1_000;
    setPlayheadMs(Math.round(durationMs * ratio));
  };

  const nudgePlayhead = (deltaMs: number) => {
    const audio = audioRef.current;
    if (!audioUrl || !audio) return;
    const next = Math.max(0, Math.min(durationMs, playheadMs + deltaMs));
    rangeEndMs.current = null;
    audio.currentTime = next / 1_000;
    setPlayheadMs(next);
  };

  const clearAttachedAudio = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    pendingAudio.current = null;
    setPlayheadMs(0);
  };

  return {
    audioRef,
    audioUrl,
    pendingAudioName: pendingAudio.current?.name ?? null,
    playheadMs,
    durationMs,
    importAudio,
    finishAudioMetadata,
    handleTimeUpdate,
    playRange,
    seekTimeline,
    nudgePlayhead,
    clearAttachedAudio,
  };
}
