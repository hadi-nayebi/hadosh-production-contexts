#!/usr/bin/env node
// Render the HTML film (video-agnostic). Frames come from window.film.frameJPEG(t):
// motion-blurred, post-processed output frames at video.json output size and fps.
//
//   node tools/render.mjs video out.mp4 [--from s] [--to s]      picture only (H.264)
//   node tools/render.mjs stills dir t1,t2,...                    JPEG stills
//   node tools/render.mjs sheet out.jpg --from s --to s --every s [--cols n]   contact sheet
//   node tools/render.mjs mux picture.mp4 mix.wav out.mp4         add audio (loudness-normalized)
//
// Needs Node, the `playwright` package, Chrome/Chromium (CHROME env or /usr/bin/google-chrome), ffmpeg.
import {chromium} from 'playwright';
import {createServer} from 'node:http';
import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [mode, ...rest] = process.argv.slice(2), opt = (k, d) => { const i = rest.indexOf(k); return i >= 0 ? rest[i + 1] : d; };
const run = (cmd, args) => new Promise((ok, bad) => { const p = spawn(cmd, args, {stdio: ['ignore', 'inherit', 'inherit']}); p.on('close', c => c ? bad(Error(cmd + ' exited ' + c)) : ok()); });

if (mode === 'mux') {
  const [pic, mix, out] = rest; const video = JSON.parse(await readFile(path.join(root, 'video.json'), 'utf8')), M = video.audioBus.master;
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', pic, '-i', mix, '-map', '0:v', '-map', '1:a', '-c:v', 'copy',
    '-af', `loudnorm=I=${M.target_LUFS}:TP=${M.limit_dBTP}:LRA=11,aresample=48000`, '-c:a', 'aac', '-b:a', '256k', '-movflags', '+faststart', '-shortest', out]);
  console.log('wrote', out); process.exit(0);
}

const types = {'.html': 'text/html', '.json': 'application/json', '.wav': 'audio/wav', '.otf': 'font/otf', '.ttf': 'font/ttf', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp'};
const server = createServer(async (req, res) => {
  try { const p = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname)); if (!p.startsWith(root)) throw 0; const body = await readFile(p);
    res.writeHead(200, {'content-type': types[path.extname(p)] || 'application/octet-stream'}); res.end(req.method === 'HEAD' ? undefined : body); }
  catch { res.writeHead(404); res.end(); }
}).listen(0, '127.0.0.1');
await new Promise(r => server.once('listening', r));
const browser = await chromium.launch({executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--force-color-profile=srgb', '--js-flags=--max-old-space-size=8192']});
const page = await browser.newPage({viewport: {width: 640, height: 360}});
page.on('pageerror', e => console.error('page error:', e.message)); page.on('console', m => { if (m.type() === 'error') console.error('console:', m.text()); });
const t0 = Date.now();
await page.goto(`http://127.0.0.1:${server.address().port}/index.html?render`);
await page.waitForFunction(() => window.film?.ready || window.filmError, null, {timeout: 600000});
const err = await page.evaluate(() => window.filmError); if (err) { console.error(err); process.exit(1); }
const {duration, fps} = await page.evaluate(() => ({duration: window.film.duration, fps: window.film.fps}));
console.log(`loaded in ${((Date.now() - t0) / 1000).toFixed(1)} s; film ${duration.toFixed(2)} s @ ${fps} fps`);
const frame = async t => Buffer.from(await page.evaluate(t => window.film.frameJPEG(t), t), 'base64');

if (mode === 'stills') { const [dir, list] = rest; await mkdir(dir, {recursive: true});
  for (const t of list.split(',').map(Number)) await writeFile(path.join(dir, `t${t.toFixed(2).padStart(7, '0')}.jpg`), await frame(t)); }
else if (mode === 'sheet') { const out = rest[0], a = +opt('--from', 0), b = +opt('--to', duration), ev = +opt('--every', 1), cols = +opt('--cols', 6), dir = out + '.d'; await mkdir(dir, {recursive: true});
  const files = []; for (let t = a; t <= b + 1e-6; t += ev) { const f = path.join(dir, `${files.length}.jpg`); await writeFile(f, await frame(Math.min(t, duration - 1e-3))); files.push(f); }
  const rows = Math.ceil(files.length / cols); await run('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '1', '-i', path.join(dir, '%d.jpg'), '-vf', `scale=480:-1,tile=${cols}x${rows}`, '-frames:v', '1', out]); }
else if (mode === 'video') { const out = rest[0], a = +opt('--from', 0), b = Math.min(+opt('--to', duration), duration), video = JSON.parse(await readFile(path.join(root, 'video.json'), 'utf8'));
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(fps), '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', String(video.output.crf), '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], {stdio: ['pipe', 'inherit', 'inherit']});
  const n = Math.round((b - a) * fps), t1 = Date.now();
  for (let i = 0; i < n; i++) { const buf = await frame(a + i / fps); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 60 === 0) console.log(`frame ${i}/${n}  ${((Date.now() - t1) / 1000 / (i + 1)).toFixed(2)} s/frame`); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); console.log('wrote', out, n, 'frames'); }
else { console.error('unknown mode', mode); process.exitCode = 2; }
await browser.close(); server.close();
