#!/usr/bin/env node
// Render the HTML film to MP4, or grab stills.
//
//   node tools/render.mjs out.mp4                 whole film, 1080p, picture + mixed audio
//   node tools/render.mjs out.mp4 --from 0 --to 12  a range (audio trimmed to match)
//   node tools/render.mjs --stills 3,8.5,20 dir/    PNG stills at those film times
//
// Needs Node, the `playwright` package, a Chrome/Chromium (CHROME env or
// /usr/bin/google-chrome) and ffmpeg. The page is served from this folder on a
// loopback port; frames come from window.film.renderAt(t), so playback speed
// never affects the render. Audio is mixed by ffmpeg from the same unit.json
// clip list the browser plays.
import {chromium} from 'playwright';
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2), opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const types = {'.html': 'text/html', '.json': 'application/json', '.wav': 'audio/wav', '.otf': 'font/otf', '.ttf': 'font/ttf', '.png': 'image/png', '.webp': 'image/webp'};
const server = createServer(async (req, res) => {
  try { const p = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (!p.startsWith(root)) throw 0; const body = await readFile(p.endsWith('/') ? p + 'index.html' : p);
    res.writeHead(200, {'content-type': types[path.extname(p)] || 'application/octet-stream'}); res.end(body); }
  catch { res.writeHead(404); res.end(); }
}).listen(0, '127.0.0.1');
await new Promise(r => server.once('listening', r));
const url = `http://127.0.0.1:${server.address().port}/index.html?render`;

const video = JSON.parse(await readFile(path.join(root, 'video.json'), 'utf8'));
const [W, H] = [video.output.width, video.output.height], fps = video.fps;
const browser = await chromium.launch({executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--disable-gpu', '--force-color-profile=srgb']});
const page = await browser.newPage({viewport: {width: W, height: H}, deviceScaleFactor: 1});
page.on('pageerror', e => console.error('page error:', e));
await page.goto(url); await page.waitForFunction(() => window.film?.ready, null, {timeout: 60000});
const duration = await page.evaluate(() => window.film.duration);

async function frameAt(t) { await page.evaluate(t => window.film.renderAt(t), t); return page.screenshot({type: 'png'}); }

if (opt('--stills')) {
  const dir = args[args.length - 1]; mkdirSync(dir, {recursive: true});
  for (const t of opt('--stills').split(',').map(Number)) { const {writeFile} = await import('node:fs/promises');
    await writeFile(path.join(dir, `t${t.toFixed(2).padStart(6, '0')}.png`), await frameAt(t)); }
  await browser.close(); server.close(); process.exit(0);
}

const out = args[0], t0 = +(opt('--from') ?? 0), t1 = +(opt('--to') ?? duration);
// Audio: one input per clip, delayed to its film time, trimmed to the range.
const inputs = [], filters = [];
let start = 0, n = 0;
for (const ref of video.units) {
  const u = JSON.parse(await readFile(path.join(root, ref.src), 'utf8')), base = path.join(root, path.dirname(ref.src));
  for (const c of u.audio) { const file = path.join(base, c.src), from = c.from || 0, abs = start + c.at;
    inputs.push('-i', file); const trim = c.to != null ? `atrim=${from}:${c.to},` : `atrim=${from},`;
    filters.push(`[${n + 1}:a]${trim}asetpts=PTS-STARTPTS,aresample=48000,volume=${c.gain ?? 1},adelay=${Math.round(abs * 1000)}:all=1[a${n}]`); n++; }
  start += u.duration;
}
filters.push(`${Array.from({length: n}, (_, i) => `[a${i}]`).join('')}amix=inputs=${n}:normalize=0:duration=longest,atrim=${t0}:${t1},asetpts=PTS-STARTPTS,alimiter=limit=0.79:level=0[aout]`);
const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-', ...inputs,
  '-filter_complex', filters.join(';'), '-map', '0:v', '-map', '[aout]',
  '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', out], {stdio: ['pipe', 'inherit', 'inherit']});
const frames = Math.round((t1 - t0) * fps);
for (let i = 0; i < frames; i++) {
  const buf = await frameAt(t0 + i / fps);
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  if (i % 150 === 0) console.log(`frame ${i}/${frames}`);
}
ff.stdin.end(); await new Promise(r => ff.on('close', r));
await browser.close(); server.close();
console.log('wrote', out, `${frames} frames @ ${fps} fps, ${W}x${H}`);
