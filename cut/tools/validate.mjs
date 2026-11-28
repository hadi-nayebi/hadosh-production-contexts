#!/usr/bin/env node
// Validate a film folder against schema/film.schema.json. Video-agnostic.
//   node tools/validate.mjs [filmFolder]
// Checks: required/unknown fields per node type, palette and font tokens, copy keys,
// asset ids and files (or declared fallbacks), audio files, time windows and track order.
import {readFile, access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] || path.join(here, '..'));
const schema = JSON.parse(await readFile(path.join(here, '..', 'schema', 'film.schema.json'), 'utf8'));
const errors = [], warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const exists = async p => access(p).then(() => true, () => false);
const isHex = v => typeof v === 'string' && /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(v);

const video = JSON.parse(await readFile(path.join(root, 'video.json'), 'utf8'));
function fields(obj, spec, where) {
  for (const k of spec.required) if (!(k in obj)) err(where, `missing required field "${k}"`);
  const allowed = new Set([...spec.required, ...spec.optional]);
  for (const k of Object.keys(obj)) if (!allowed.has(k) && !k.startsWith('_')) err(where, `unknown field "${k}"`);
}
fields(video, schema.video, 'video.json');
for (const [tok, file] of Object.entries(video.fonts)) if (!await exists(path.join(root, file))) err('video.json', `font "${tok}" file missing: ${file}`);
const palette = video.palette;
const color = (v, where) => { if (v == null || v === 'none' || isHex(v)) return; if (typeof v === 'string' && !(v in palette)) err(where, `unknown color token "${v}"`); };

function checkTrack(tr, where) {
  if (tr == null || typeof tr === 'number') return;
  if (Array.isArray(tr)) { let last = -Infinity;
    for (const key of tr) { if (!Array.isArray(key)) continue; const t = key[0]; if (typeof t === 'number') { if (t < last) err(where, `track keys out of order at t=${t}`); last = t; }
      const e = key[2]; if (e && !schema.easings.some(n => e === n || (n === 'steps(n)' && /^steps\(\d+\)$/.test(e)))) err(where, `unknown easing "${e}"`); } }
  else if (tr.loop) { if (!tr.loop.period || !tr.loop.keys) err(where, 'loop track needs period and keys'); }
}

for (const ref of video.units) {
  const unitPath = path.join(root, ref.src), base = path.dirname(unitPath);
  if (!await exists(unitPath)) { err(ref.src, 'unit file missing'); continue; }
  const u = JSON.parse(await readFile(unitPath, 'utf8')), W = ref.src;
  fields(u, schema.unit, W);
  const copy = JSON.parse(await readFile(path.join(base, u.copy), 'utf8'));
  // assets
  for (const [id, a] of Object.entries(u.assets)) {
    fields(a, schema.asset, `${W} asset ${id}`);
    if (!schema.asset.kinds.includes(a.kind)) err(`${W} asset ${id}`, `unknown kind ${a.kind}`);
    const ok = await exists(path.join(base, a.src));
    if (!ok) { if (a.fallback && await exists(path.join(base, a.fallback))) warn(`${W} asset ${id}`, `pending ${a.requestedFrom || ''}: ${a.src}; fallback in place`);
               else err(`${W} asset ${id}`, `file missing: ${a.src}${a.fallback ? ' and fallback missing: ' + a.fallback : ''}`); }
  }
  for (const c of u.audio) { fields(c, schema.audioClip, `${W} audio ${c.id}`); if (!schema.audioClip.buses.includes(c.bus)) err(`${W} audio ${c.id}`, `unknown bus ${c.bus}`);
    if (!await exists(path.join(base, c.asset))) err(`${W} audio ${c.id}`, `audio file missing: ${c.asset} (generate with tools/make_audio.py if synthesized)`); }
  for (const d of u.duck || []) fields(d, schema.duck, `${W} duck`);
  for (const k of ['x', 'y', 'zoom', 'rot']) checkTrack(u.camera[k], `${W} camera.${k}`);
  // nodes
  const ids = new Set();
  const copyRef = (c, where) => { const key = Array.isArray(c) ? c[0] : c; if (!(key in copy)) err(where, `copy key "${key}" not in ${u.copy}`);
    else if (Array.isArray(c) && !Array.isArray(copy[key])) err(where, `copy "${key}" is not a list`); else if (Array.isArray(c) && c[1] >= copy[key].length) err(where, `copy "${key}"[${c[1]}] out of range`); };
  const assetRef = (a, where) => { if (a && !(a in u.assets)) err(where, `asset "${a}" not in unit assets`); };
  function node(n, where, inherited) {
    const w = `${where}/${n.id}`;
    if (!n.id || !n.type) { err(where, 'node without id or type'); return; }
    if (ids.has(n.id)) err(w, 'duplicate id'); ids.add(n.id);
    const spec = schema.types[n.type]; if (!spec) { err(w, `unknown type ${n.type}`); return; }
    fields(n, {required: [...schema.common.required, ...spec.required], optional: [...schema.common.optional, ...spec.optional]}, w);
    const time = n.time || inherited.time, space = n.space || inherited.space;
    if (!time) err(w, 'no time window (own or inherited)'); if (!space) err(w, 'no space (own or inherited)');
    if (time && n.time && inherited.time && (n.time[0] < inherited.time[0] - 1e-6 || n.time[1] > inherited.time[1] + 1e-6)) warn(w, `time ${n.time} extends past parent ${inherited.time}`);
    for (const [k, tr] of Object.entries(n.tracks || {})) { if (!schema.animatable.includes(k)) err(w, `track "${k}" is not animatable`); checkTrack(tr, `${w} track ${k}`); }
    if (n.type === 'text') { copyRef(n.copy, w); if (!(n.font in video.fonts)) err(w, `font token "${n.font}" unknown`); color(n.color, w);
      if (n.reveal && !schema.reveals.includes(n.reveal.mode)) err(w, `unknown reveal ${n.reveal.mode}`); }
    if (['svg', 'image', 'instance'].includes(n.type)) assetRef(n.asset, w);
    if (n.classStyle) for (const [cls, st] of Object.entries(n.classStyle)) for (const k of ['fill', 'stroke']) color(st[k], `${w} .${cls}.${k}`);
    if (n.type === 'shape') { if (!schema.types.shape.shapes.includes(n.shape)) err(w, `unknown shape ${n.shape}`); for (const k of ['stroke']) color(n[k], w);
      if (typeof n.fill === 'string') color(n.fill, w); }
    if (n.type === 'path') { if (n.source) assetRef(n.source.asset, w); else if (!n.points) err(w, 'path needs source or points'); color(n.brush.color, w); }
    if (n.type === 'follow' && n.path.asset) assetRef(n.path.asset, w);
    if (n.type === 'sphere') assetRef(n.mask, w);
    if (n.type === 'flow') assetRef(n.paths.asset, w);
    if (n.type === 'swarm') {
      for (const p of n.populations) { fields(p, schema.swarm.population, `${w} population ${p.id}`); p.colors.forEach(c => color(c, `${w} population ${p.id}`)); }
      for (const s of n.sources) if (!schema.swarm.sourceKinds.includes(s.kind)) err(`${w} source ${s.id}`, `unknown kind ${s.kind}`);
      for (const ph of n.phases) { for (const f of Object.keys(ph.forces)) if (!schema.swarm.forces.includes(f)) err(`${w} phase ${ph.id}`, `unknown force ${f}`);
        const sk = ph.forces.seek; if (sk) { for (const t of Object.keys(sk.targets)) if (!schema.swarm.seekTargets.includes(t)) err(`${w} phase ${ph.id}`, `unknown seek target ${t}`);
          if (sk.targets.text) copyRef(sk.targets.text.copy, `${w} phase ${ph.id}`);
          if (sk.targets.textChar) copyRef(sk.targets.textChar.copy, `${w} phase ${ph.id}`);
          if (sk.assign && !schema.swarm.assign.includes(sk.assign)) err(`${w} phase ${ph.id}`, `unknown assign ${sk.assign}`);
          if (sk.delayBy && !schema.swarm.delayBy.includes(sk.delayBy)) err(`${w} phase ${ph.id}`, `unknown delayBy ${sk.delayBy}`); } }
    }
    for (const c of n.children || []) node(c, w, {time, space});
    if (n.child) node(n.child, w, {time, space});
    for (const l of n.layers || []) if (l.node) node(l.node, w, {time, space});
  }
  for (const s of u.scenes) { fields(s, schema.scene, `${W} scene ${s.id}`); for (const n of s.nodes) node(n, `${W}/${s.id}`, {time: s.time, space: null}); }
  // references between nodes
  const refsOk = r => ids.has(r);
  for (const s of u.scenes) for (const n of s.nodes) if (n.type === 'zoomstack') { if (!refsOk(n.handoff.node)) err(`${W}/${n.id}`, `handoff node ${n.handoff.node} unknown`);
    for (const l of n.layers) if (l.ref && !refsOk(l.ref)) err(`${W}/${n.id}`, `layer ref ${l.ref} unknown`); }
}
for (const w of warnings) console.log('warn ', w);
for (const e of errors) console.log('ERROR', e);
console.log(`${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
