import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { bundle } from "@remotion/bundler";
import { selectComposition, renderMedia, renderStill } from "@remotion/renderer";
import { validateProject, AUDIO_HASH } from "../src/canvas/song/wordMotion/project.mjs";
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
const args = process.argv.slice(2);
const flag = args.indexOf("--project");
if (flag >= 0 && !args[flag + 1]) throw Error("--project needs a JSON file path");
const projectPath = path.resolve(
  flag >= 0 ? args[flag + 1] : "src/canvas/song/wordMotion/seed.json",
);
const project = validateProject(JSON.parse(fs.readFileSync(projectPath, "utf8")));
const projectBytes = JSON.stringify(project);
const source = path.resolve(
  process.env.CANVAS_SONG_AUDIO || ".origin/song-media/r7/L1-combined.mp3",
);
if (hash(fs.readFileSync(source)) !== AUDIO_HASH) throw Error("Wrong recording: expected R7 L1");
const output = path.resolve("public/previews");
fs.mkdirSync(output, { recursive: true });
const temp = path.resolve(process.env.CANVAS_RENDER_TEMP || ".origin/browser-words-render");
const input = path.join(temp, "input");
fs.mkdirSync(input, { recursive: true });
// Trim the full source exactly once. Composition audio starts at excerpt time zero.
execFileSync("ffmpeg", [
  "-v",
  "error",
  "-y",
  "-ss",
  String(project.source.inMs / 1000),
  "-i",
  source,
  "-t",
  String((project.source.outMs - project.source.inMs) / 1000),
  "-ar",
  "24000",
  path.join(input, "excerpt.wav"),
]);
fs.copyFileSync(path.join(input, "excerpt.wav"), path.join(output, "browser-word-audio.wav"));
const serveUrl = await bundle({
  entryPoint: path.resolve("src/canvas/song/wordMotion/Composition.tsx"),
  publicDir: input,
  outDir: path.join(temp, "bundle"),
  enableCaching: false,
});
const common = {
  serveUrl,
  browserExecutable: process.env.CHROMIUM_EXECUTABLE || "/usr/bin/google-chrome",
  inputProps: { project },
};
const composition = await selectComposition({ ...common, id: "BrowserWords" });
const video = path.join(output, "browser-words-v2.mp4");
let last = -1;
await renderMedia({
  ...common,
  composition,
  codec: "h264",
  crf: 18,
  concurrency: 2,
  outputLocation: video,
  onProgress: ({ progress }) => {
    const n = Math.floor(progress * 10);
    if (n !== last) {
      console.log(`Render ${n * 10}%`);
      last = n;
    }
  },
});
const frames = [
  0,
  project.words[0].enterFrame - 1,
  project.words[0].enterFrame,
  project.words[0].enterFrame + 4,
  31,
  105,
  315,
  390,
  620,
  719,
].filter((f) => f >= 0);
for (const frame of frames)
  await renderStill({
    ...common,
    composition,
    frame,
    output: path.join(output, `browser-words-frame-${frame}.png`),
  });
const receipt = {
  schema: "canvas-word-render-receipt-v1",
  projectPath,
  projectRevision: project.revision,
  sourceFiles: Object.fromEntries(
    [
      "src/canvas/song/wordMotion/MotionStage.tsx",
      "src/canvas/song/wordMotion/Composition.tsx",
      "src/canvas/song/wordMotion/project.mjs",
    ].map((file) => [file, hash(fs.readFileSync(file))]),
  ),
  projectSha256: hash(projectBytes),
  sourceSha256: AUDIO_HASH,
  excerptAudioSha256: hash(fs.readFileSync(path.join(input, "excerpt.wav"))),
  sourceInMs: 48100,
  sourceOutMs: 72100,
  durationInFrames: 720,
  fps: 30,
  width: 1280,
  height: 720,
  codeCommit: execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
  workingTreeDirty: !!execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" }).trim(),
  videoSha256: hash(fs.readFileSync(video)),
  frames,
};
fs.writeFileSync(
  path.join(output, "browser-words-project.json"),
  JSON.stringify(project, null, 2) + "\n",
);
fs.writeFileSync(
  path.join(output, "browser-words-receipt.json"),
  JSON.stringify(receipt, null, 2) + "\n",
);
console.log(JSON.stringify(receipt, null, 2));
