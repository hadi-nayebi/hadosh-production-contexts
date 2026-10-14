import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';

const usage = `Usage: node scripts/render-release.mjs snapshot.json output-directory [sample|full]
Run from this branch's repository root. Export the snapshot from Scene creation → Source.
RELEASE_AUDIO_FILE overrides the snapshot URL with the same hash-verified local audio.
CHROMIUM_EXECUTABLE selects an installed Chrome/Chromium (otherwise Remotion resolves its browser).
TMPDIR controls scratch storage. RELEASE_COPY_ASSETS=1 copies assets instead of POSIX symlinks.
RELEASE_SAMPLE_START_SECONDS sets the start of a two-second sample (default 0).
See EXPORT.md for source, storage, dependency and approval requirements.`;
const args = process.argv.slice(2);
if (args.length === 1 && args[0] === '--help') {
  console.log(usage);
  process.exit(0);
}
const [propsPath, outDir, mode = 'sample'] = args;
if (!propsPath || !outDir || args.length > 3 || !['sample', 'full'].includes(mode)) throw Error(usage);
const sampleStart = Number(process.env.RELEASE_SAMPLE_START_SECONDS ?? 0);
if (!Number.isFinite(sampleStart) || sampleStart < 0) throw Error('Sample start must be a non-negative number');
const propsBytes = fs.readFileSync(propsPath);
const props = JSON.parse(propsBytes);
if (!props.scenePlan) throw Error('Scene plan required; refusing words-only export');
if (!(Number.isFinite(props.annotation?.duration) && props.annotation.duration > 0)) throw Error('Positive annotation duration required');
if (mode === 'sample' && sampleStart >= props.annotation.duration) throw Error('Sample start must be before annotation end');
if (!/^[a-f0-9]{64}$/i.test(props.playbackSha256 ?? '')) throw Error('Snapshot playbackSha256 required');
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
let bytes;
if (process.env.RELEASE_AUDIO_FILE) {
  bytes = fs.readFileSync(process.env.RELEASE_AUDIO_FILE);
} else {
  const url = new URL(props.audioUrl);
  if (!['http:', 'https:'].includes(url.protocol)) throw Error('Audio URL must use HTTP(S), or set RELEASE_AUDIO_FILE');
  const audio = await fetch(url);
  if (!audio.ok) throw Error(`Audio unavailable: HTTP ${audio.status}`);
  bytes = Buffer.from(await audio.arrayBuffer());
}
if (hash(bytes) !== props.playbackSha256) throw Error('Native audio hash mismatch');
const entryPoint = path.resolve('src/canvas/song/lyricFocus/word-video-entry.tsx');
if (!fs.existsSync(entryPoint) || !fs.existsSync('public')) throw Error('Run from the video-production repository root');
const outputLocation = path.join(outDir, mode === 'sample' ? 'timing-sample.mp4' : 'who-owns-your-toaster-1080p60.mp4');
if (fs.existsSync(outputLocation)) throw Error('Output already exists; choose a new output directory');
const {bundle} = await import('@remotion/bundler');
const {selectComposition, renderMedia} = await import('@remotion/renderer');
fs.mkdirSync(outDir, {recursive: true});
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'toaster-release-'));
const empty = path.join(temp, 'empty');
fs.mkdirSync(empty);
try {
  const serveUrl = await bundle({entryPoint, publicDir: empty, outDir: path.join(temp, 'bundle'), enableCaching: false});
  for (const name of fs.readdirSync('public')) {
    const source = path.resolve('public', name), target = path.join(serveUrl, name);
    if (process.env.RELEASE_COPY_ASSETS === '1') fs.cpSync(source, target, {recursive: true});
    else fs.symlinkSync(source, target);
  }
  fs.writeFileSync(path.join(serveUrl, 'release-audio.wav'), bytes);
  props.audioUrl = '/release-audio.wav';
  const opts = {serveUrl, inputProps: props, concurrency: 2, timeoutInMilliseconds: 90000,
    ...(process.env.CHROMIUM_EXECUTABLE ? {browserExecutable: process.env.CHROMIUM_EXECUTABLE} : {})};
  const composition = {...await selectComposition({...opts, id: 'WordPreview'}), width: 1920, height: 1080, fps: 60};
  const start = Date.now();
  const startFrame = Math.floor(sampleStart * 60);
  const frames = mode === 'sample' ? [startFrame, Math.min(startFrame + 119, composition.durationInFrames - 1)] : [0, composition.durationInFrames - 1];
  let lastPct = -1;
  await renderMedia({...opts, composition, frameRange: frames, codec: 'h264', crf: 18,
    audioBitrate: '320k', pixelFormat: 'yuv420p', outputLocation,
    onProgress: ({progress}) => { const p = Math.floor(progress * 100); if (p % 5 === 0 && p !== lastPct) { lastPct = p; console.log(`Render ${p}%`); } }});
  fs.writeFileSync(path.join(outDir, `${mode}-receipt.json`), JSON.stringify({mode, frames,
    seconds: (Date.now() - start) / 1000, propsSha256: hash(propsBytes), audioSha256: props.playbackSha256,
    width: 1920, height: 1080, fps: 60, temporaryDirectory: temp}, null, 2));
  console.log('Completed', mode);
} finally {
  // Retain scratch on failure for diagnosis; never delete a caller-supplied directory.
  console.log(`Render scratch retained at ${temp}; remove it only when no render is using it.`);
}
