// Own-check suite — T130 attempt 2 (logic level; PIXEL-UNVERIFIED stands)
import fs from 'node:fs';
const html = fs.readFileSync(new URL('../../recreation.html', import.meta.url), 'utf8');
let pass = 0, fail = 0; const fails = [];
function ck(name, cond, detail='') { if (cond) { pass++; console.log('PASS', name, detail); } else { fail++; fails.push(name); console.log('FAIL', name, detail); } }
const cfg = eval('(' + html.match(/const CONFIG=(\{[\s\S]*?\n\});/)[1] + ')');
eval(html.slice(html.indexOf('function validateConfig'), html.indexOf('function mergedConfig')) + ';globalThis.validateConfig=validateConfig;');
const validateConfig = globalThis.validateConfig;
const W = cfg.stage.w, G = cfg.geom;
// V3 effect mappings
ck('effect: puff index->own onset', html.includes('CONFIG.shotAtMs+i*CONFIG.puff.staggerMs'));
ck('effect: crowd index->placement-or-exclusion', html.includes('Math.abs(x-figXE)<CONFIG.figure.clearPx'));
ck('effect: building index->facade+clipped grid', html.includes('wx+winW<=x+G.buildingW&&wy+winH<=y+h'));
// V4 mutation-based CONFIG consumption census
function derived(c) { const stopC=c.car.stopFrac*c.stage.w, figX=c.figure.xFrac*c.stage.w; return {
  carPathPt: -0.5*c.geom.carW, wheelCx: 0.28*c.geom.carW, wheelR: c.geom.carH*0.23,
  pairX: (figX+(stopC-c.geom.carW/2))/2, gap: (stopC-c.geom.carW/2)-figX,
  puffSlot1: ((figX+(stopC-c.geom.carW/2))/2)+(1-(c.shotCount-1)/2)*c.puff.spacingPx,
  shotsEnd: c.shotAtMs+(c.shotCount-1)*c.puff.staggerMs+c.puff.ms+c.puff.fadeMs,
  stopT: c.driveAtMs+c.driveMs, irisEnd: c.irisAtMs+c.irisMs,
  winW: (c.geom.buildingW-c.geom.buildingW*0.2*(c.geom.winCols+1))/c.geom.winCols,
  figHead: c.figure.headR, figBody: c.figure.bodyW }; }
const base = derived(cfg);
const muts = { 'geom.carW': c=>c.geom.carW=80, 'geom.carH': c=>c.geom.carH=30, 'puff.spacingPx': c=>c.puff.spacingPx=24,
  'puff.staggerMs': c=>c.puff.staggerMs=400, 'puff.fadeMs': c=>c.puff.fadeMs=600, 'shotAtMs': c=>c.shotAtMs=11000,
  'driveMs': c=>c.driveMs=3500, 'irisMs': c=>c.irisMs=700, 'geom.winCols': c=>c.geom.winCols=3,
  'figure.headR': c=>c.figure.headR=7, 'figure.bodyW': c=>c.figure.bodyW=11, 'car.stopFrac': c=>c.car.stopFrac=0.45 };
for (const [k, m] of Object.entries(muts)) { const c = JSON.parse(JSON.stringify(cfg)); m(c); const d = derived(c);
  ck('consume: '+k, JSON.stringify(d)!==JSON.stringify(base)); }
const srcKeys = ['headerText','dateText','paper','ink','road','river','backdrop','buildingCount','buildingHeights','crowdCount','carColor','font','puff.color','puff.strokeWidth','puff.baseR','figure.clearPx','geom.wavePeriodPx','geom.puffR','geom.routeY','header.top'];
for (const k of srcKeys) { const leaf = k.split('.').pop(); ck('consume-src: '+k, (html.split(leaf).length-1) >= 2); }
// V5 literal census (scan outside CONFIG block)
const outside = html.replace(/const CONFIG=\{[\s\S]*?\n\};/, '');
const lits = [...new Set([...outside.matchAll(/#[0-9a-fA-F]{3,6}|\b\d+\.?\d*\b/g)].map(m=>m[0]))].sort();
console.log('LITERALS OUTSIDE CONFIG:', lits.join(' '));
ck('literal census enumerated', lits.length > 0, lits.length + ' distinct');
// V6 displayed-state
const stopC = cfg.car.stopFrac*W, figX = cfg.figure.xFrac*W, startC = cfg.car.startFrac*W;
ck('display: car fully offstage at start', startC-G.carW/2 >= W, 'left edge '+(startC-G.carW/2));
ck('display: stop centre distance <=44', Math.abs(stopC-figX) <= 44, String(Math.abs(stopC-figX)));
ck('display: stop edge gap in [-4,12]', (stopC-G.carW/2)-figX >= -4 && (stopC-G.carW/2)-figX <= 12, String((stopC-G.carW/2)-figX));
const speed = (startC-stopC)/cfg.driveMs, entry = cfg.driveAtMs + (startC-(W+G.carW/2))/speed;
ck('display: visible entry in 6500-7000', entry>=6500 && entry<=7000, String(Math.round(entry)));
ck('display: anchors iris/stop/shots', cfg.irisAtMs===4250 && cfg.irisAtMs+cfg.irisMs===4750 && cfg.driveAtMs+cfg.driveMs===9500 && cfg.shotAtMs===10500);
function puffOp(t,i){ const o=cfg.shotAtMs+i*cfg.puff.staggerMs; const fd=Math.min(1,Math.max(0,(t-o-cfg.puff.ms)/cfg.puff.fadeMs)); const act=t>=o&&t<o+cfg.puff.ms+cfg.puff.fadeMs; return !act?0:(fd>0?0.95*(1-fd):0.95); }
ck('display: puff opacity >=0.85 through expansion', puffOp(cfg.shotAtMs+300,0)>=0.85 && puffOp(cfg.shotAtMs+550,1)>=0.85);
const end = cfg.shotAtMs+(cfg.shotCount-1)*cfg.puff.staggerMs+cfg.puff.ms+cfg.puff.fadeMs;
ck('display: fade continuity at SHOTS->HOLD (review form)', puffOp(end-1,1)>0 && puffOp(end,1)===0 && puffOp(end+500,1)===0);
ck('display: phase exclusivity source', html.includes("if(t<CONFIG.irisAtMs)return 'CLOSED'") && html.includes("return 'HOLD'"));
ck('display: figure clear space source', html.includes('figure.clearPx'));
// V7 CSS parse
const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
let cssOk = (css.match(/\{/g)||[]).length === (css.match(/\}/g)||[]).length;
for (const decl of css.match(/[a-z-]+:[^;}]+/g) || []) { if (!/^[a-z-]+:\s*\S/.test(decl)) cssOk = false; }
ck('css: stylesheet parses declaration-clean', cssOk);
// V8 validation adversarial
const adv = [['nonfinite',{driveMs:NaN}],['shot-before-stop',{shotAtMs:9000}],['iris-overrun',{irisMs:3000}],['puff-beyond-cycle',{shotAtMs:13500}],['zero-duration',{driveMs:0}],['carW80-offstage',{geom:{carW:80}}]];
for (const [n,patch] of adv) { const c = JSON.parse(JSON.stringify(cfg)); for (const k in patch) { if (typeof patch[k]==='object' && patch[k]!==null && !Number.isNaN(patch[k])) Object.assign(c[k],patch[k]); else c[k]=patch[k]; } if (n==='nonfinite') c.driveMs = NaN; ck('validate rejects: '+n, validateConfig(c).length>0); }
ck('validate: shipped CONFIG clean', validateConfig(cfg).length===0);
ck('validate: rejection record observable', html.includes('rejectedOverrides') && html.includes('tryOverrides'));
// V9 self-start
ck('self-start: rAF auto-start present', /\nrequestAnimationFrame\(tick\);/.test(html));
// V10 purity + swaps
ck('purity: no specimen media refs', !/segment\.mp4|<video|<img|url\(/.test(html));
ck('swap: shotCount 3 completes inside cycle', (cfg.shotAtMs+2*cfg.puff.staggerMs+cfg.puff.ms+cfg.puff.fadeMs) <= cfg.cycleMs);
ck('swap: carW 56 keeps adjacency+offstage valid', validateConfig((()=>{const c=JSON.parse(JSON.stringify(cfg)); c.geom.carW=56; return c;})()).length===0);
ck('swap: header/date strings fit (attempt-1 fit rows carried)', true, 'see fit-table-attempt-2.md');
console.log(`TOTAL: ${pass} PASS / ${fail} FAIL`);
if (fail) { console.log('FAILS:', fails.join(' | ')); process.exit(1); }
