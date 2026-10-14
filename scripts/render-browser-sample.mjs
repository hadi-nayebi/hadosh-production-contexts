import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { bundle } from "@remotion/bundler";
import { selectComposition, renderMedia, renderStill } from "@remotion/renderer";
const root = process.cwd();
const temp = path.resolve(process.env.CANVAS_RENDER_TEMP || ".origin/browser-sample-render");
const input = path.join(temp, "input");
const output = path.join(root, "public/previews");
fs.mkdirSync(input, { recursive: true });
fs.mkdirSync(output, { recursive: true });
// Retained real recording only: never synthesize a replacement backing track.
const source = path.resolve(
  process.env.CANVAS_SONG_AUDIO || ".origin/song-media/r7/L1-combined.mp3",
);
if (!fs.existsSync(source)) throw new Error(`Attach the retained R7 L1 recording at ${source}`);
const digest = createHash("sha256").update(fs.readFileSync(source)).digest("hex");
if (digest !== "f47512d5ec38dd1030630e1f7ac343b4734516ee84f3e184191529014f52bf67")
  throw new Error("This timing belongs to the exact R7 L1 recording; audio hash mismatch.");
execFileSync("ffmpeg", [
  "-v",
  "error",
  "-y",
  "-ss",
  "48.1",
  "-i",
  source,
  "-t",
  "24",
  "-af",
  "afade=t=in:d=0.08,afade=t=out:st=23.8:d=0.2",
  path.join(input, "excerpt.wav"),
]);
const serveUrl = await bundle({
  enableCaching: false,
  entryPoint: path.join(root, "src/canvas/song/browserSample/index.tsx"),
  publicDir: input,
  outDir: path.join(temp, "bundle"),
  webpackOverride: (c) => ({ ...c, cache: false }),
});
const common = {
  serveUrl,
  browserExecutable: process.env.CHROMIUM_EXECUTABLE || "/usr/bin/google-chrome",
};
const composition = await selectComposition({ ...common, id: "BrowserDoorway" });
let last = -1;
await renderMedia({
  ...common,
  composition,
  codec: "h264",
  crf: 18,
  concurrency: 2,
  imageFormat: "jpeg",
  jpegQuality: 92,
  outputLocation: path.join(output, "browser-doorway-draft-v1.mp4"),
  onProgress: ({ progress }) => {
    const p = Math.floor(progress * 10);
    if (p !== last) {
      console.log(`Render ${p * 10}%`);
      last = p;
    }
  },
});
for (const [name, frame] of [
  ["button", 15],
  ["tracking", 40],
  ["customization", 200],
  ["poster", 620],
])
  await renderStill({
    ...common,
    composition,
    frame,
    output: path.join(output, `browser-doorway-${name}.png`),
  });
console.log(
  JSON.stringify({
    video: "public/previews/browser-doorway-draft-v1.mp4",
    poster: "public/previews/browser-doorway-poster.png",
    duration: 24,
    fps: 30,
    width: 1280,
    height: 720,
  }),
);
