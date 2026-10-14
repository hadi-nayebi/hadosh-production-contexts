import {
  AbsoluteFill,
  Audio,
  Img,
  useCurrentFrame,
  staticFile,
  Composition,
  registerRoot,
} from "remotion";
import MotionStage from "../wordMotion/MotionStage";
import seed from "./seed.json";
import { validateScene, type Scene } from "./scene.mjs";
const defaults = { project: validateScene(seed) };
function WordComposition({ project }: { project: Scene }) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <div
        aria-hidden
        style={{ position: "absolute", opacity: 0, width: 1, height: 1, overflow: "hidden" }}
      >
        {project.assets?.map((a) => (
          <Img key={a.id} src={staticFile(a.path.replace(/^\//, ""))} />
        ))}
      </div>
      <MotionStage project={project} frame={frame} assetBase={staticFile("").replace(/\/$/, "")} />
      <Audio src={staticFile("excerpt.wav")} />
    </AbsoluteFill>
  );
}
registerRoot(() => (
  <Composition
    id="BrowserLiveScene"
    component={WordComposition}
    defaultProps={defaults}
    durationInFrames={720}
    calculateMetadata={({ props }) => ({
      durationInFrames: props.project.composition.durationInFrames,
    })}
    fps={30}
    width={1280}
    height={720}
  />
));
