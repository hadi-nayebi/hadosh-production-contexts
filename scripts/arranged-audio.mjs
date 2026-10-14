import path from "node:path";
import { validateArrangement, sourceFrameAt } from "../src/canvas/song/wordMotion/arrangement.mjs";

// Fixed 30fps project clock -> exact 48kHz sample boundaries (1600 samples/frame).
export function audioExportPlan(project, { source, publicRoot }) {
  validateArrangement(project);
  const clips = project.arrangement || [
    { startFrame: 0, endFrame: project.composition.durationInFrames, sourceStartFrame: 0 },
  ];
  const sources = [];
  const segments = clips.map((clip) => {
    const start = sourceFrameAt(project, clip.startFrame);
    if (start === null)
      return { ...clip, input: null, samples: (clip.endFrame - clip.startFrame) * 1600 };
    const file = clip.media
      ? path.resolve(publicRoot, "." + clip.media.path)
      : path.resolve(source);
    let input = sources.findIndex((s) => s.file === file);
    const sha256 = clip.media?.sha256 || project.source.sha256;
    if (input < 0) {
      input = sources.length;
      sources.push({ file, sha256, requiredSamples: 0 });
    }
    if (sources[input].sha256 !== sha256) throw Error("Conflicting audio hashes: " + file);
    const offsetSamples =
      Math.round((project.arrangement ? 0 : project.source.inMs) * 48) + start * 1600;
    const samples = (clip.endFrame - clip.startFrame) * 1600;
    sources[input].requiredSamples = Math.max(
      sources[input].requiredSamples,
      offsetSamples + samples,
    );
    return { startFrame: clip.startFrame, endFrame: clip.endFrame, input, offsetSamples, samples };
  });
  return { sources, segments, durationSamples: project.composition.durationInFrames * 1600 };
}

// The caller provides read-only file/hash/duration inspection, before creating output.
export function verifyAudioSources(plan, inspect) {
  for (const source of plan.sources) {
    const actual = inspect(source.file);
    if (actual.sha256 !== source.sha256) throw Error("Audio hash mismatch: " + source.file);
    if (
      !Number.isFinite(actual.durationSeconds) ||
      actual.durationSeconds * 48000 + 1 < source.requiredSamples
    )
      throw Error("Audio trim exceeds available recording: " + source.file);
  }
}

export function audioExportArgs(plan, output) {
  const filters = plan.segments.map((s, i) =>
    s.input === null
      ? `anullsrc=r=48000:cl=stereo,atrim=end_sample=${s.samples},asetpts=PTS-STARTPTS[a${i}]`
      : `[${s.input}:a:0]aresample=48000,aformat=channel_layouts=stereo,atrim=start_sample=${s.offsetSamples}:end_sample=${s.offsetSamples + s.samples},asetpts=PTS-STARTPTS[a${i}]`,
  );
  filters.push(
    plan.segments.map((_, i) => `[a${i}]`).join("") +
      `concat=n=${plan.segments.length}:v=0:a=1[out]`,
  );
  return [
    "-v",
    "error",
    "-n",
    ...plan.sources.flatMap((s) => ["-i", s.file]),
    "-filter_complex",
    filters.join(";"),
    "-map",
    "[out]",
    "-ar",
    "48000",
    "-ac",
    "2",
    "-c:a",
    "pcm_s16le",
    output,
  ];
}
