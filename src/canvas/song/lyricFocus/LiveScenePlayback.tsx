import { useEffect, useState, type RefObject } from "react";
import type { Annotation } from "./audioAnnotation";
import type { ScenePlan } from "./sceneContainers";
import type { VisualWordTiming } from "./visualWordTiming";
import { SceneVideoFrame } from "./SceneVideoFrame";
export default function LiveScenePlayback({
  audio,
  annotation,
  plan,
  visualTiming,
  onFps,
}: {
  audio: RefObject<HTMLAudioElement | null>;
  annotation: Annotation;
  plan: ScenePlan;
  visualTiming?: VisualWordTiming;
  onFps: (fps: number) => void;
}) {
  const [time, setTime] = useState(audio.current?.currentTime ?? 0);
  useEffect(() => {
    let id = 0,
      lastTime = -1,
      lastWall = performance.now(),
      fpsWall = lastWall,
      frames = 0,
      playing = false;
    const tick = (wall: number) => {
      const media = audio.current;
      if (media) {
        const isPlaying = !media.paused;
        if (isPlaying !== playing) {
          fpsWall = wall;
          frames = 0;
          playing = isPlaying;
          if (!playing) onFps(0);
        }
        const elapsed = Math.min(0.1, (wall - lastWall) / 1000);
        let next = media.currentTime;
        if (!media.paused && !media.seeking && lastTime >= 0 && Math.abs(next - lastTime) < 0.25) {
          const predicted = lastTime + elapsed * media.playbackRate;
          next = predicted + (next - predicted) * (1 - Math.exp(-elapsed / 0.08));
          next = Math.max(lastTime, Math.min(media.duration || annotation.duration, next));
        }
        if (next !== lastTime) {
          setTime(next);
          lastTime = next;
        }
        if (!media.paused) frames++;
        if (wall - fpsWall >= 1000) {
          onFps(media.paused ? 0 : Math.round((frames * 1000) / (wall - fpsWall)));
          frames = 0;
          fpsWall = wall;
        }
      }
      lastWall = wall;
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [audio, annotation, onFps]);
  return (
    <SceneVideoFrame annotation={annotation} plan={plan} visualTiming={visualTiming} time={time} />
  );
}
