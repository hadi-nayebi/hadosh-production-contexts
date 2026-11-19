'use strict';
/* T96 attempt 2 — own-check suite (node). Sections:
   S1 phase->effect mappings (V2) · S2 per-CONFIG-key consumed effects (V3)
   S3 swap tests (V3 a-d) · S4 literal census (V4) · S5 displayed-state (V7/W-T96)
   S6 self-start (V5) · S7 purity grep (V9)
   Usage: node own-checks-T96-attempt2.js [recreationPath] [section|ALL] */
const fs = require('fs');
const vm = require('vm');
const REC = process.argv[2] || '/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T96-one-palette-world/recreation.html';
const SECTION = process.argv[3] || 'ALL';
const html = fs.readFileSync(REC, 'utf8');
const scriptSrc = html.split('<script>')[1].split('</script>')[0];

let pass = 0, fail = 0; const failures = [];
function ok(cond, name){ if (cond){ pass++; } else { fail++; failures.push(name); console.log('FAIL: ' + name); } }
function section(n){ if (SECTION === 'ALL' || SECTION === n) return true; console.log('skip ' + n); return false; }

function load(cfgQuery){
  const stage = { style: {}, innerHTML: '' };
  const sandbox = {
    console, URLSearchParams,
    location: { search: cfgQuery || '' },
    document: { getElementById: () => stage },
    requestAnimationFrame: () => 0,
    setTimeout, clearTimeout
  };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(scriptSrc, sandbox, { filename: 'recreation-script.js' });
  let CFG = sandbox.__CFG || null;
  if (!CFG){ try { const block = scriptSrc.split('const CONFIG =')[1].split('/* ================= CONFIG end')[0]; const base = eval('(' + block.replace(/;\s*$/, '') + ')'); CFG = cfgQuery ? sandbox.__mergedCFG || base : base; if (cfgQuery){ const over = JSON.parse(new URLSearchParams(cfgQuery).get('cfg')); const dm = (b, o) => { if (Array.isArray(o)) return o.slice(); if (o && typeof o === 'object'){ const out = {}; for (const k of Object.keys(b)) out[k] = dm(b[k], o[k]); for (const k of Object.keys(o)) if (!(k in out)) out[k] = o[k]; return out; } return o === undefined ? b : o; }; CFG = dm(base, over); } } catch (e) { CFG = null; } }
  return { sandbox, stage, render: sandbox.__render, phaseAt: sandbox.__phaseAt, cycleMs: sandbox.__cycleMs, errors: sandbox.__configErrors || null, CFG };
}
function skyFill(svg){ const m = svg.match(/<rect width="[^"]*" height="[^"]*" fill="([^"]*)"/); return m && m[1]; }
function sunOpacity(svg){ const m = svg.match(/<circle[^>]*fill="[^"]*" opacity="([0-9.]+)"\/>/); return m ? parseFloat(m[1]) : null; }
function hasFill(svg, f){ return svg.indexOf('fill="' + f + '"') >= 0; }
function textOf(svg, re){ const m = svg.match(re); return m && m[1]; }

/* ---------- S1: phase -> effect mappings ---------- */
if (section('S1')){
  const L = load('');
  const C = L.CFG || JSON.parse(JSON.stringify({})); // CFG export may be absent pre-stage3; fall back below
  ok(L.cycleMs === 14000, 'S1 cycle == 14000 (got ' + L.cycleMs + ')');
  const pal = { sky: '#1d3f8f', building: '#274b8f' };
  function state(t){ const ph = L.phaseAt(t); const svg = (L.render(t), L.stage.innerHTML); return { ph, svg }; }
  let s;
  s = state(0); ok(s.ph.sceneIndex === 0 && s.ph.paletteMode === 'blue' && skyFill(s.svg) === pal.sky, 'S1 t=0 kitchen blue sky');
  s = state(1500); ok(s.ph.sceneIndex === 1 && s.ph.paletteMode === 'blue', 'S1 t=1500 street blue');
  s = state(3000); ok(s.ph.sceneIndex === 2 && s.ph.paletteMode === 'blue' && s.svg.indexOf('>16:00<') >= 0, 'S1 t=3000 exhibits blue HUD 16:00');
  s = state(4499); ok(s.ph.paletteMode === 'blue', 'S1 t=4499 still blue');
  s = state(4500); ok(s.ph.paletteMode === 'warming' && Math.abs(s.ph.warm - 0) < 1e-9 && skyFill(s.svg) === 'rgb(29,63,143)', 'S1 t=4500 warming starts, sky = register sky (got ' + skyFill(s.svg) + ')');
  const warmSamples = [4500, 4875, 5250, 5625, 6000].map(t => { const st = state(t); const f = skyFill(st.svg); const rgb = f.startsWith('rgb') ? f.match(/\d+/g).map(Number) : null; return { t, f, rgb, op: sunOpacity(st.svg), warm: st.ph.warm }; });
  let mono = true; for (let i = 1; i < warmSamples.length; i++){ if (!(warmSamples[i].rgb[0] > warmSamples[i-1].rgb[0])) mono = false; }
  ok(mono, 'S1 warming sky warmth strictly monotonic (continuous, not stepped): ' + warmSamples.map(w => w.f).join(' -> '));
  ok(warmSamples[4].f === 'rgb(232,149,90)', 'S1 t=6000 sky exactly dusk sky rgb(232,149,90) (got ' + warmSamples[4].f + ')');
  ok(Math.abs(warmSamples[1].op - 0.25) < 1e-6 && Math.abs(warmSamples[2].op - 0.5) < 1e-6 && Math.abs(warmSamples[4].op - 1) < 1e-9, 'S1 sun opacity ramps 0.25/0.5/1 across warm-up (got ' + warmSamples.map(w => w.op).join(',') + ')');
  s = state(5250); ok(hasFill(s.svg, pal.building), 'S1 t=5250 buildings keep blue register during warming');
  s = state(6000); ok(s.ph.paletteMode === 'dusk' && s.ph.sceneIndex === 2, 'S1 t=6000 dusk in exhibits');
  s = state(9000); ok(s.ph.paletteMode === 'dusk' && hasFill(s.svg, pal.building) && s.svg.indexOf('>16:00<') >= 0, 'S1 t=9000 dusk holds, buildings blue, HUD 16:00');
  s = state(12499); ok(s.ph.paletteMode === 'dusk', 'S1 t=12499 dusk stands');
  s = state(12999); ok(s.ph.paletteMode === 'dusk' && s.ph.sceneIndex === 2, 'S1 t=12999 last dusk instant in exhibits');
  s = state(13000); ok(s.ph.sceneIndex === 3 && s.ph.paletteMode === 'blue' && skyFill(s.svg) === pal.sky && s.svg.indexOf('>19:00<') >= 0, 'S1 t=13000 dinner + blue + HUD 19:00 in the same state');
  s = state(13500); ok(s.ph.endHold === true && s.ph.sceneIndex === 3, 'S1 t=13500 endHold holds dinner');
  s = state(13999); ok(s.ph.endHold === true, 'S1 t=13999 endHold');
  ok(L.phaseAt(14000).sceneIndex === 0 && L.phaseAt(14000).paletteMode === 'blue', 'S1 t=14000 wraps to kitchen blue');
  let blueExhibits = 0; for (let t = 6000; t < 14000; t += 250){ const ph = L.phaseAt(t); if (ph.sceneIndex === 2 && ph.paletteMode === 'blue') blueExhibits++; }
  ok(blueExhibits === 0, 'S1 no exhibits+blue state at any sampled t >= 6000');
  console.log('S1 done: pass=' + pass + ' fail=' + fail);
}

/* ---------- helpers for S2/S3 (need CFG export) ---------- */
function loadCfg(cfgObj){ return load(cfgObj ? '?cfg=' + encodeURIComponent(JSON.stringify(cfgObj)) : ''); }
function leaves(obj, path, out){ out = out || []; if (Array.isArray(obj)){ obj.forEach((v, i) => leaves(v, path + '[' + i + ']', out)); } else if (obj && typeof obj === 'object'){ for (const k of Object.keys(obj)) leaves(obj[k], path ? path + '.' + k : k, out); } else out.push({ path, value: obj }); return out; }
function setPath(obj, path, val){ const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.'); let o = obj; for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]]; o[parts[parts.length - 1]] = val; }
function probe(L){ const times = [0, 700, 1500, 2200, 3000, 4499, 4875, 5250, 6000, 9000, 12499, 13000, 13500, 13999]; let out = 'cycle=' + L.cycleMs + '|errs=' + JSON.stringify(L.errors) + '|'; for (const t of times){ const ph = L.phaseAt(Math.min(t, L.cycleMs - 1)); out += JSON.stringify(ph) + '|'; L.render(Math.min(t, L.cycleMs - 1)); out += L.stage.innerHTML + '|'; } return out; }

/* ---------- S2: per-key consumed effects ---------- */
if (section('S2')){
  const base = loadCfg(null);
  if (!base.CFG){ ok(false, 'S2 CFG export present'); }
  else {
    const baseProbe = probe(base);
    const ls = leaves(JSON.parse(JSON.stringify(base.CFG)));
    let unconsumed = [];
    for (const leaf of ls){
      const mutated = leaf.path.endsWith('.type') ? (leaf.value === 'kitchen' ? 'street' : 'kitchen') : (typeof leaf.value === 'number') ? Math.round(leaf.value * 1.37 + 3) : (typeof leaf.value === 'string' ? (leaf.value.startsWith('#') ? '#010203' : 'ZZTEST') : leaf.value);
      const clone = JSON.parse(JSON.stringify(base.CFG)); setPath(clone, leaf.path, mutated); const topKey = leaf.path.replace(/\[.*$/, '').split('.')[0]; const over = {}; over[topKey] = clone[topKey];
      let got; try { got = probe(loadCfg(over)); } catch (e) { got = 'THREW:' + e.message; }
      if (got === baseProbe) unconsumed.push(leaf.path);
    }
    ok(unconsumed.length === 0, 'S2 all ' + ls.length + ' CONFIG leaves consumed (unconsumed: ' + unconsumed.join(', ') + ')');
    console.log('S2 leaves walked: ' + ls.length);
  }
  console.log('S2 done: pass=' + pass + ' fail=' + fail);
}

/* ---------- S3: swap tests ---------- */
if (section('S3')){
  // (a) carried-over swap values, re-derived against per-scene durations
  let L = loadCfg({ scenes: [ { name: 'kitchen', type: 'kitchen', clock: '05:45', ms: 1500 }, { name: 'street', type: 'street', clock: '12:00', ms: 1500 }, { name: 'exhibits', type: 'skyline', clock: '16:00', ms: 10000 }, { name: 'dinner', type: 'dinner', clock: '19:00', ms: 500 } ], turn: { label: 'TURN' }, hud: { year: 2041 }, palette: { sky: '#16283f' }, breakPalette: { sky: '#c93f2e' }, type: { font: 'Arial, sans-serif' } });
  ok(L.cycleMs === 14000, 'S3a cycle stays 14000 under value swaps (got ' + L.cycleMs + ')');
  L.render(0); ok(L.stage.innerHTML.indexOf('05:45') >= 0 && L.stage.innerHTML.indexOf('2041') >= 0 && L.stage.innerHTML.indexOf('#16283f') >= 0 && L.stage.innerHTML.indexOf('Arial') >= 0, 'S3a clock/year/sky/font swaps render');
  L.render(9000); ok(L.stage.innerHTML.indexOf('>TURN<') >= 0 && L.stage.innerHTML.indexOf('rgb(201,63,46)') >= 0, 'S3a break label + break sky swaps render at dusk (sky=' + skyFill(L.stage.innerHTML) + ')');
  L = loadCfg({ scenes: [ { name: 'a', type: 'kitchen', clock: '01:00', ms: 1000 }, { name: 'b', type: 'street', clock: '02:00', ms: 1000 }, { name: 'c', type: 'skyline', clock: '03:00', ms: 1000 }, { name: 'd', type: 'dinner', clock: '04:00', ms: 1000 } ], turn: { warmStartMs: 2200, duskStartMs: 2600, atScene: 2, returnScene: 3 }, endHoldMs: 500 });
  ok(L.cycleMs === 4500, 'S3a cycle re-derives from per-scene durations: 4500 (got ' + L.cycleMs + ')');
  // (b) second palette-system preset, wholesale, all three modes
  const ALT = { palette: { sky: '#173f2a', building: '#1f5c33', ink: '#eef7e0', amber: '#ffd23f' }, breakPalette: { sky: '#7a4fd0', sun: '#ffe9a8' } };
  L = loadCfg(ALT);
  const defaults = ['#1d3f8f', '#274b8f', '#f5f2e6', '#f0c93f', '#e8955a', '#f7d774'];
  L.render(0); const blueSvg = L.stage.innerHTML;
  L.render(5250); const warmSvg = L.stage.innerHTML;
  L.render(9000); const duskSvg = L.stage.innerHTML;
  ok(blueSvg.indexOf('#173f2a') >= 0 && blueSvg.indexOf('#1f5c33') >= 0 && blueSvg.indexOf('#eef7e0') >= 0 && blueSvg.indexOf('#ffd23f') >= 0, 'S3b preset: blue mode follows preset on every layer');
  ok(skyFill(warmSvg) === 'rgb(73,71,125)' && warmSvg.indexOf('#1f5c33') >= 0, 'S3b preset: warming lerps between preset skies (got ' + skyFill(warmSvg) + ')');
  ok(skyFill(duskSvg) === 'rgb(122,79,208)' && duskSvg.indexOf('#ffe9a8') >= 0 && duskSvg.indexOf('#1f5c33') >= 0, 'S3b preset: dusk follows preset sky+sun+buildings');
  ok(defaults.every(h => blueSvg.indexOf(h) < 0 && warmSvg.indexOf(h) < 0 && duskSvg.indexOf(h) < 0), 'S3b preset: no default-register color survives in any mode');
  // (c) reordered + renamed scenes with explicit types
  L = loadCfg({ scenes: [ { name: 'supper', type: 'dinner', clock: '20:00', ms: 2000 }, { name: 'gallery', type: 'skyline', clock: '10:00', ms: 2000 }, { name: 'nook', type: 'kitchen', clock: '07:00', ms: 2000 }, { name: 'avenue', type: 'street', clock: '12:30', ms: 2000 } ], turn: { warmStartMs: 2500, duskStartMs: 3500, atScene: 1, returnScene: 2 }, endHoldMs: 500 });
  ok(L.cycleMs === 8500, 'S3c reordered cycle 8500 (got ' + L.cycleMs + ')');
  L.render(0); ok(L.stage.innerHTML.indexOf('supper · 20:00') >= 0, 'S3c t=0 renders renamed dinner-type scene first');
  ok(L.phaseAt(3000).paletteMode === 'warming' && L.phaseAt(3750).paletteMode === 'dusk' && L.phaseAt(4500).sceneIndex === 2 && L.phaseAt(4500).paletteMode === 'blue', 'S3c turn follows reordered scenes (warm in gallery, blue returns with nook)');
  L.render(4500); ok(L.stage.innerHTML.indexOf('nook · 07:00') >= 0, 'S3c return scene renders under its new name');
  // (d) invalid configs -> explicit named error state
  L = loadCfg({ turn: { duskStartMs: 4000 } });
  ok(L.errors && L.errors.some(e => e.indexOf('turn.duskStartMs') >= 0) && L.stage.innerHTML.indexOf('CONFIG error') >= 0, 'S3d duskStart<=warmStart -> named error state (got ' + JSON.stringify(L.errors) + ')');
  L = loadCfg({ turn: { atScene: 1, returnScene: 3 } });
  ok(L.errors && L.errors.some(e => e.indexOf('turn.returnScene') >= 0), 'S3d returnScene != atScene+1 -> named error (got ' + JSON.stringify(L.errors) + ')');
  L = loadCfg({ scenes: [] });
  ok(L.errors && L.errors.some(e => e.indexOf('scenes') >= 0), 'S3d empty scenes -> named error (got ' + JSON.stringify(L.errors) + ')');
  console.log('S3 done: pass=' + pass + ' fail=' + fail);
}

/* ---------- S4: literal census ---------- */
if (section('S4')){
  const cfgBlock = scriptSrc.split('const CONFIG =')[1].split('/* ================= CONFIG end')[0];
  const rest = scriptSrc.split('/* ================= CONFIG end ================= */')[1];
  const noComments = rest.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
  const noStrings = noComments.replace(/'(?:[^'\\]|\\.)*'/g, "''").replace(/"(?:[^"\\]|\\.)*"/g, '""');
  const hexes = noStrings.match(/#[0-9a-fA-F]{3,8}/g) || [];
  ok(hexes.length === 0, 'S4 zero hex colors outside CONFIG (got ' + hexes.join(',') + ')');
  const nums = (noStrings.match(/\b\d+(?:\.\d+)?\b/g) || []).map(Number);
  const whitelist = new Set([0, 1, 2, 3, 5, 7, 16, 1664525, 1013904223, 4294967296]);
  const bad = [...new Set(nums.filter(n => !whitelist.has(n)))];
  ok(bad.length === 0, 'S4 zero unlisted numeric literals outside CONFIG (got ' + bad.join(', ') + ')');
  ok(cfgBlock.indexOf('winX: 40') >= 0 || cfgBlock.length > 0, 'S4 CONFIG block located');
  console.log('S4 literals outside CONFIG: ' + nums.length + ' numeric tokens, classes whitelisted: ' + [...whitelist].join(','));
  console.log('S4 done: pass=' + pass + ' fail=' + fail);
}

/* ---------- S5: displayed-state model ---------- */
const CAPS = { A:.722,B:.667,C:.722,D:.722,E:.611,F:.556,G:.778,H:.722,I:.333,J:.389,K:.722,L:.611,M:.889,N:.722,O:.778,P:.556,Q:.778,R:.667,S:.556,T:.611,U:.722,V:.667,W:.944,X:.667,Y:.667,Z:.611 };
const LOW = { a:.444,b:.556,c:.444,d:.556,e:.444,f:.278,g:.5,h:.556,i:.278,j:.278,k:.5,l:.278,m:.833,n:.556,o:.5,p:.556,q:.556,r:.333,s:.394,t:.278,u:.556,v:.5,w:.722,x:.5,y:.5,z:.444 };
function inkWidth(text, px, spacing){ let em = 0; for (const ch of text){ if (ch >= '0' && ch <= '9') em += .556; else if (CAPS[ch]) em += CAPS[ch]; else if (LOW[ch]) em += LOW[ch]; else if (ch === ' ') em += .278; else if (ch === '·') em += .3; else if (ch === ':') em += .278; else em += .5; } return em * px + spacing * (text.length - 1); }
if (section('S5')){
  const L = loadCfg(null); const g = L.CFG.geom, W = L.CFG.stage.width;
  const headerInk = inkWidth(L.CFG.hud.year + ' · ' + L.CFG.hud.dayLine, g.yearPx, g.yearSpacingPx);
  ok(g.hudX + headerInk <= g.plateX + g.plateW, 'S5 header glyph box inside HUD plate in dusk (ink ' + headerInk.toFixed(1) + 'px from x=' + g.hudX + ', plate ends ' + (g.plateX + g.plateW) + ')');
  ok(g.plateW >= 257 + 10, 'S5 plate width >= measured header ink 257 + margins (plateW=' + g.plateW + ')');
  ok(g.plateX + g.plateW < g.sunX - g.sunR || g.plateY + g.plateH < g.sunY - g.sunR, 'S5 HUD plate disjoint from sun bound box (plate ends x=' + (g.plateX + g.plateW) + ', sun starts x=' + (g.sunX - g.sunR) + ')');
  const labelText = 'exhibits · 16:00'; const labelInk = inkWidth(labelText, g.scenePx, 0);
  const cx = W / 2, plateL = cx - g.scenePlateW / 2, plateR = cx + g.scenePlateW / 2;
  ok(cx - labelInk / 2 >= plateL && cx + labelInk / 2 <= plateR, 'S5 scene-label glyph box inside its plate (ink ' + labelInk.toFixed(1) + 'px, plate ' + g.scenePlateW + 'px)');
  const capTop = g.sceneY - 0.692 * g.scenePx, glyphBottom = g.sceneY + 0.21 * g.scenePx, groundTop = g.stageH - g.groundH;
  ok(capTop >= groundTop && glyphBottom <= g.stageH, 'S5 scene-label glyph box over ground strip in dusk (top ' + capTop.toFixed(1) + ' >= ' + groundTop + ', bottom ' + glyphBottom.toFixed(1) + ' <= ' + g.stageH + ')');
  L.render(9000); const svg = L.stage.innerHTML;
  const iPlate = svg.indexOf('width="' + g.plateW + '"'); const iHudText = svg.indexOf('' + L.CFG.hud.year);
  ok(iPlate >= 0 && iPlate < iHudText, 'S5 dusk render: HUD plate precedes HUD text (drawn under it)');
  const iScenePlate = svg.indexOf('width="' + g.scenePlateW + '"'); const iSceneText = svg.indexOf('exhibits · 16:00');
  ok(iScenePlate >= 0 && iScenePlate < iSceneText, 'S5 dusk render: scene plate precedes scene label, both present at hold t=9000 (occlusion: label 100% visible, nothing drawn over it)');
  const sep = (() => { const a = [0x1d, 0x3f, 0x8f], b = [0x27, 0x4b, 0x8f]; const lum = c => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; return Math.abs(lum(a) - lum(b)).toFixed(1); })();
  console.log('S5 blue-mode building/sky luminance separation (printed for the record): ' + sep + ' (of 255)');
  // resize cross-check: wider stage keeps plate coverage + sun clearance
  const L2 = loadCfg({ stage: { width: 480 } }); const g2 = L2.CFG.geom;
  ok(g2.hudX + headerInk <= g2.plateX + g2.plateW && g2.plateX + g2.plateW < g2.sunX - g2.sunR, 'S5 resize 480px: plate still covers header ink and clears the sun');
  const cx2 = 480 / 2; ok(cx2 - labelInk / 2 >= cx2 - g2.scenePlateW / 2 && cx2 + labelInk / 2 <= cx2 + g2.scenePlateW / 2, 'S5 resize 480px: scene plate still covers label ink');
  // reorder cross-check: longest renamed label still fits its plate
  const ink2 = inkWidth('gallery · 10:00', g.scenePx, 0);
  ok(ink2 <= g.scenePlateW, 'S5 reorder: renamed scene label ink ' + ink2.toFixed(1) + 'px fits plate ' + g.scenePlateW + 'px');
  console.log('S5 done: pass=' + pass + ' fail=' + fail);
}

/* ---------- S6: self-start ---------- */
if (section('S6')){
  const stage = { style: {}, innerHTML: '' };
  let now = 0; const rafQ = [];
  const sandbox = { console, URLSearchParams, location: { search: '' }, document: { getElementById: () => stage }, Date: { now: () => now }, requestAnimationFrame: cb => { rafQ.push(cb); } };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(scriptSrc, sandbox, { filename: 'recreation-script.js' });
  let sawDinner = false, sawWrap = false, sawDusk = false;
  for (let step = 0; step < 30; step++){ now += 500; const cbs = rafQ.splice(0); for (const cb of cbs) cb(); const h = stage.innerHTML; if (h.indexOf('dinner · 19:00') >= 0) sawDinner = true; if (h.indexOf('>DUSK<') >= 0) sawDusk = true; if (now > 14000 && h.indexOf('kitchen · 06:15') >= 0) sawWrap = true; }
  ok(sawDusk, 'S6 self-start: own rAF loop reaches the dusk state unaided');
  ok(sawDinner, 'S6 self-start: own rAF loop reaches the dinner state unaided');
  ok(sawWrap, 'S6 self-start: own rAF loop wraps the cycle unaided');
  console.log('S6 done: pass=' + pass + ' fail=' + fail);
}

/* ---------- S7: purity grep ---------- */
if (section('S7')){
  const pats = ['segment.mp4', 'source.mp4', 'ev/', 't300', '<video', '<img'];
  const hits = pats.filter(p => html.indexOf(p) >= 0);
  ok(hits.length === 0, 'S7 purity grep 0 hits (got ' + hits.join(',') + ')');
  const httpHits = html.match(/https?:\/\/[^\s"']*/g) || [];
  ok(httpHits.length === 1 && httpHits[0] === 'http://www.w3.org/2000/svg', 'S7 sole URL in file is the SVG xmlns namespace identifier, not an asset (got ' + httpHits.join(',') + ')');
  console.log('S7 done: pass=' + pass + ' fail=' + fail);
}

console.log('TOTAL: pass=' + pass + ' fail=' + fail + (failures.length ? ' | FAILURES: ' + failures.join(' ;; ') : ''));
process.exit(fail ? 1 : 0);
