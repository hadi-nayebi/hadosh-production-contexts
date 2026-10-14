import { SceneVideoFrame } from "./SceneVideoFrame";
import type { ScenePlan } from "./sceneContainers";
import { AbsoluteFill, Audio, useCurrentFrame, useVideoConfig } from "remotion";
import type { VisualWordTiming } from "./visualWordTiming";
import type { Annotation } from "./audioAnnotation";
import { WordVideoFrame } from "./WordVideoFrame";

/** Render uses the same deterministic word frame as the live audio-clock preview. */
export function WordVideoRemotion({
  annotation,
  audioUrl,
  visualTiming,
  scenePlan,
}: {
  annotation: Annotation;
  audioUrl: string;
  visualTiming?: VisualWordTiming;
  scenePlan?: ScenePlan;
}) {
  const frame = useCurrentFrame(),
    { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Audio src={audioUrl} />
      {scenePlan ? (
        <SceneVideoFrame
          annotation={annotation}
          time={frame / fps}
          visualTiming={visualTiming}
          plan={scenePlan}
        />
      ) : (
        <WordVideoFrame annotation={annotation} time={frame / fps} visualTiming={visualTiming} />
      )}
    </AbsoluteFill>
  );
}
