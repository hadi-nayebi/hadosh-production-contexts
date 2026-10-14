import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import {
  previewOptions,
  phoneFrameRanges,
  phoneStoragePlan,
  verifyPhoneStorage,
} from "./phone-preview.mjs";
import { bundle } from "@remotion/bundler";
import { selectComposition, renderMedia, renderStill } from "@remotion/renderer";
import { audioExportPlan, verifyAudioSources, audioExportArgs } from "./arranged-audio.mjs";
import { AUDIO_HASH } from "../src/canvas/song/wordMotion/project.mjs";
import { validateScene } from "../src/canvas/song/liveStage/scene.mjs";
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
const args = process.argv.slice(2);
const preview = previewOptions(args);
const flag = args.indexOf("--project");
if (flag >= 0 && !args[flag + 1]) throw Error("--project needs a JSON file path");
const projectPath = path.resolve(
  flag >= 0 ? args[flag + 1] : "src/canvas/song/liveStage/illustrated-seed.json",
);
const project = validateScene(JSON.parse(fs.readFileSync(projectPath, "utf8")));
// Explicit review exports let the owner listen before approving the recording.
// Hash/duration/asset verification below remains mandatory.
const reviewDraft = args.includes("--review-draft") && preview.phone;
if (args.includes("--review-draft") && !preview.phone)
  throw Error("Review draft requires --phone-preview.");
const fullFirstLayer =
  args.includes("--full-first-layer") &&
  preview.phone &&
  [
    "full-song-first-layer-v1",
    "full-song-first-layer-v2",
    "full-song-first-layer-v3",
    "full-song-first-layer-v4",
    "full-song-first-layer-v5",
    "full-song-first-layer-v6",
  ].includes(project.documentId) &&
  project.source.outMs === 226824 &&
  project.composition.durationInFrames === 6804 &&
  project.arrangement?.length === 1 &&
  project.arrangement[0].sourceStartFrame === 0 &&
  !project.arrangement[0].media;
if (args.includes("--full-first-layer") && !fullFirstLayer)
  throw Error(
    "Full first layer requires the complete uninterrupted R7 L1 original song in phone mode.",
  );
const originalFirstFit =
  args.includes("--original-first-fit") &&
  preview.phone &&
  project.arrangement?.length === 1 &&
  project.arrangement[0].sourceStartFrame === 0 &&
  !project.arrangement[0].media &&
  project.composition.durationInFrames <= 1089;
if (args.includes("--original-first-fit") && !originalFirstFit)
  throw Error(
    "Original first-fit preview must be phone mode with one uninterrupted original clip, at most 36.3 seconds.",
  );
if (
  project.arrangement &&
  !args.includes("--audio-reviewed") &&
  !reviewDraft &&
  !originalFirstFit &&
  !fullFirstLayer
)
  throw Error(
    "Arranged export requires --audio-reviewed after recording alignment and human listening pass. Missing opening audio must not be exported as a silent preview.",
  );
const projectBytes = JSON.stringify(project);
const source = path.resolve(
  process.env.CANVAS_SONG_AUDIO || ".origin/song-media/r7/L1-combined.mp3",
);
const audioPlan = audioExportPlan(project, { source, publicRoot: path.resolve("public") });
verifyAudioSources(audioPlan, (file) => {
  if (!fs.existsSync(file)) throw Error("Required audio file missing: " + file);
  return {
    sha256: hash(fs.readFileSync(file)),
    durationSeconds: Number(
      execFileSync(
        "ffprobe",
        [
          "-v",
          "error",
          "-show_entries",
          "format=duration",
          "-of",
          "default=noprint_wrappers=1:nokey=1",
          file,
        ],
        { encoding: "utf8" },
      ).trim(),
    ),
  };
});
for (const asset of project.assets || []) {
  const file = path.resolve("public" + asset.path);
  if (!fs.existsSync(file) || hash(fs.readFileSync(file)) !== asset.sha256)
    throw Error("Missing or changed scene asset: " + asset.id);
}
const output = path.resolve(process.env.CANVAS_RENDER_OUTPUT || "public/previews");
const temp = path.resolve(process.env.CANVAS_RENDER_TEMP || ".origin/live-scene-render");
const input = path.join(temp, "input");
let storagePlan;
if (preview.phone) {
  if (fs.existsSync(temp) || fs.existsSync(output))
    throw Error(
      "Phone preview requires fresh CANVAS_RENDER_TEMP and CANVAS_RENDER_OUTPUT directories; existing files are preserved.",
    );
  storagePlan = phoneStoragePlan(
    project,
    (project.assets || []).reduce(
      (n, a) => n + fs.statSync(path.resolve("public" + a.path)).size,
      0,
    ),
    { temp, output, scratch: os.tmpdir() },
  );
  verifyPhoneStorage(storagePlan);
}
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(input, { recursive: true });
// One export-only PCM file; explicit silence and joins use the dashboard frame clock.
execFileSync("ffmpeg", audioExportArgs(audioPlan, path.join(input, "excerpt.wav")));
if (!preview.phone)
  fs.copyFileSync(
    path.join(input, "excerpt.wav"),
    path.join(
      output,
      project.source.inMs === 36300 ? "browser-dance-extended-audio.wav" : "browser-word-audio.wav",
    ),
  );
if (args.includes("--audio-only")) {
  console.log(
    `Prepared ${project.source.inMs === 36300 ? "browser-dance-extended-audio.wav" : "browser-word-audio.wav"} from the verified retained recording.`,
  );
  process.exit(0);
}
for (const asset of project.assets || []) {
  const file = path.resolve("public" + asset.path);
  if (hash(fs.readFileSync(file)) !== asset.sha256)
    throw Error("Scene asset hash mismatch: " + asset.id);
  fs.mkdirSync(path.join(input, "scene-assets"), { recursive: true });
  fs.copyFileSync(file, path.join(input, "scene-assets", path.basename(file)));
}
const serveUrl = await bundle({
  entryPoint: path.resolve("src/canvas/song/liveStage/Composition.tsx"),
  publicDir: input,
  outDir: path.join(temp, "bundle"),
  enableCaching: false,
});
const common = {
  serveUrl,
  browserExecutable: process.env.CHROMIUM_EXECUTABLE || "/usr/bin/google-chrome",
  inputProps: { project },
};
const selected = await selectComposition({ ...common, id: "BrowserLiveScene" });
const composition = preview.phone
  ? { ...selected, width: preview.width, height: preview.height, fps: preview.fps }
  : selected;
const stem = preview.phone
  ? "phone-preview-480p"
  : project.documentId.includes("v7-review")
    ? "browser-dance-review-v7"
    : project.documentId.includes("dance-extended")
      ? "browser-dance-extended-v6"
      : project.documentId.includes("scene-props")
        ? "browser-scene-props-v5"
        : project.documentId.includes("typography")
          ? "browser-typography-v4"
          : project.documentId.includes("inspect")
            ? "browser-inspect-v3"
            : project.documentId.includes("illustrated")
              ? "browser-illustrated"
              : "browser-live-scene";
const video = path.join(output, `${stem}.mp4`);
let last = -1;
const renderOptions = {
  ...common,
  composition,
  codec: "h264",
  ...(preview.phone
    ? {
        audioCodec: preview.audioCodec,
        videoBitrate: preview.videoBitrate,
        audioBitrate: preview.audioBitrate,
        encodingMaxRate: preview.encodingMaxRate,
        encodingBufferSize: preview.encodingBufferSize,
        concurrency: 1,
        overwrite: false,
      }
    : { crf: 18, concurrency: Number(process.env.CANVAS_RENDER_CONCURRENCY || 2) }),
  outputLocation: video,
  onProgress: ({ progress }) => {
    const n = Math.floor(progress * 10);
    if (n !== last) {
      console.log(`Render ${n * 10}%`);
      last = n;
    }
  },
};
if (!args.includes("--stills-only")) {
  if (preview.phone) {
    const chunks = [];
    for (const [start, end] of phoneFrameRanges(project.composition.durationInFrames)) {
      const chunk = path.join(output, `segment-${start}.mp4`);
      console.log(`Rendering full-song frames ${start}–${end}`);
      await renderMedia({
        ...renderOptions,
        frameRange: [start, end],
        muted: true,
        outputLocation: chunk,
      });
      chunks.push(chunk);
    }
    const list = path.join(output, "segments.txt");
    fs.writeFileSync(list, chunks.map((f) => `file '${path.basename(f)}'`).join("\n"));
    // Mux one continuous PCM source once; no AAC joins or silence at scene boundaries.
    execFileSync("ffmpeg", [
      "-v",
      "error",
      "-f",
      "concat",
      "-safe",
      "1",
      "-i",
      list,
      "-i",
      path.join(input, "excerpt.wav"),
      "-map",
      "0:v:0",
      "-map",
      "1:a:0",
      "-c:v",
      "copy",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
      "-movflags",
      "+faststart",
      "-t",
      String(project.composition.durationInFrames / 30),
      video,
    ]);
  } else await renderMedia(renderOptions);
}
const frames = !preview.renderStills
  ? []
  : (args.includes("--frames")
      ? args[args.indexOf("--frames") + 1].split(",").map(Number)
      : [
          0,
          project.words[0].enterFrame - 1,
          project.words[0].enterFrame,
          project.words[0].enterFrame + 4,
          31,
          100,
          101,
          105,
          96,
          125,
          177,
          267,
          420,
          510,
          600,
          161,
          315,
          390,
          435,
          436,
          538,
          620,
          449,
          450,
          451,
          452,
          453,
          552,
          558,
          568,
          project.composition.durationInFrames - 1,
        ]
    ).filter((f) => Number.isInteger(f) && f >= 0 && f < project.composition.durationInFrames);
for (const frame of frames)
  await renderStill({
    ...common,
    composition,
    frame,
    output: path.join(output, `${stem}-frame-${frame}.png`),
  });
const receipt = {
  schema: "canvas-live-scene-render-receipt-v1",
  projectPath,
  projectRevision: project.revision,
  assets: project.assets || [],
  sourceFiles: Object.fromEntries(
    [
      "scripts/render-live-scene.mjs",
      "scripts/arranged-audio.mjs",
      "scripts/phone-preview.mjs",
      "src/canvas/song/wordMotion/arrangement.mjs",
      "src/canvas/song/wordMotion/MotionStage.tsx",
      "src/canvas/song/liveStage/Composition.tsx",
      "src/canvas/song/wordMotion/project.mjs",
      "src/canvas/song/liveStage/scene.mjs",
      "src/canvas/song/liveStage/SceneArtwork.tsx",
      "src/canvas/song/liveStage/SpatialToasterWorld.tsx",
      "src/canvas/song/liveStage/spatialToasterState.ts",
      "package-lock.json",
      "src/canvas/song/liveStage/DeskProps.tsx",
      "src/canvas/song/liveStage/ProjectedText.tsx",
      "src/canvas/song/liveStage/OpeningProps.tsx",
      "src/canvas/song/liveStage/FoundationOpeningProps.tsx",
      "src/canvas/song/liveStage/FoundationBrowserProps.tsx",
      "src/canvas/song/liveStage/FoundationFeedProps.tsx",
      "src/canvas/song/liveStage/FoundationHarnessProps.tsx",
    "src/canvas/song/liveStage/FoundationPlanReview.tsx",
      "src/canvas/song/liveStage/FoundationToasterProps.tsx",
      "src/canvas/song/liveStage/foundationHarnessState.ts",
      "src/canvas/song/liveStage/foundation-harness-blocking.json",
      "src/canvas/song/liveStage/foundation-toaster-blocking.json",
      "src/canvas/song/liveStage/ImageLayer.tsx",
      "src/canvas/song/liveStage/views.mjs",
      "src/canvas/song/liveStage/camera.mjs",
      "src/canvas/song/liveStage/BrowserActions.tsx",
      "src/canvas/song/liveStage/BrowserHistory.tsx",
      "src/canvas/song/liveStage/SceneProps.tsx",
      "src/canvas/song/liveStage/CharacterLayer.tsx",
      "src/canvas/song/liveStage/LyricPlates.tsx",
      "src/canvas/song/liveStage/FullSongProps.tsx",
      "src/canvas/song/liveStage/EmbodiedStory.tsx",
      "src/canvas/song/liveStage/rhythm.mjs",
    ].map((file) => [file, hash(fs.readFileSync(file))]),
  ),
  projectSha256: hash(projectBytes),
  sourceSha256: AUDIO_HASH,
  audioPlan,
  excerptAudioSha256: hash(fs.readFileSync(path.join(input, "excerpt.wav"))),
  sourceInMs: project.source.inMs,
  sourceOutMs: project.source.outMs,
  durationInFrames: project.composition.durationInFrames,
  fps: 30,
  width: composition.width,
  height: composition.height,
  preview,
  originalFirstFit,
  fullFirstLayer,
  reviewDraft,
  listeningStatus: reviewDraft
    ? "User-requested review draft; audio and visual acceptance pending"
    : originalFirstFit || fullFirstLayer
      ? "Provisional original recording; subjective musical alignment not verified"
      : "Operator audio-reviewed attestation",
  storagePlan,
  videoFrameRanges: preview.phone ? phoneFrameRanges(project.composition.durationInFrames) : null,
  codeCommit: execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
  workingTreeDirty: !!execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" }).trim(),
  videoSha256: fs.existsSync(video) ? hash(fs.readFileSync(video)) : null,
  frames,
};
fs.writeFileSync(
  path.join(output, `${stem}-project.json`),
  JSON.stringify(project, null, 2) + "\n",
);
fs.writeFileSync(
  path.join(output, `${stem}-receipt.json`),
  JSON.stringify(receipt, null, 2) + "\n",
);
console.log(JSON.stringify(receipt, null, 2));
