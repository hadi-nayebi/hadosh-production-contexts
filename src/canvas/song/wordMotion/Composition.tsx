import {
  AbsoluteFill,
  Audio,
  useCurrentFrame,
  staticFile,
  Composition,
  registerRoot,
} from "remotion";
import MotionStage from "./MotionStage";
import seed from "./seed.json";
import { validateProject, type Project } from "./project.mjs";
const defaults = { project: validateProject(seed) };
function WordComposition({ project }: { project: Project }) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <MotionStage project={project} frame={frame} />
      <Audio src={staticFile("excerpt.wav")} />
    </AbsoluteFill>
  );
}
registerRoot(() => (
  <Composition
    id="BrowserWords"
    component={WordComposition}
    defaultProps={defaults}
    durationInFrames={720}
    fps={30}
    width={1280}
    height={720}
  />
));
