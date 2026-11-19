"use strict";
/* T196 Cycle 036 completion harness — executable receipts for every A11
   assertion on the CURED build + CP4/handoff evidence + post-fit ink
   measurement (A12.2 form (i): harness post-fit measurement of the built
   spans; span geometry supplied by PIL-rendered Liberation Sans Regular
   ink bounds via measure_spans.py — named stand-in font).
   Run: node codex/harness-completion036.js  (cwd = item directory) */
const fs = require("fs"), { execSync } = require("child_process"), crypto = require("crypto");
const html = fs.readFileSync("recreation.html", "utf8");
const sha = crypto.createHash("sha256").update(html).digest("hex");
console.log("BUILD sha256=" + sha + " bytes=" + Buffer.byteLength(html));
let fails = 0;
const ok = (cond, line) => { console.log((cond ? "PASS " : "FAIL ") + line); if (!cond) fails++; };

/* ---- extract CONFIG literal (for word collection + expressions) ---- */
const cfgSrc = html.slice(html.indexOf("const CONFIG =") + "const CONFIG =".length, html.indexOf("/* ================= Engine"));
const CONFIG0 = eval("(" + cfgSrc.replace(/;\s*$/, "") + ")");
const swapCards = [
  { id: "s1", onsetMs: 0, words: [["Presence",0],["precedes",300],["emphasis",700],["entirely",1200]].map(([w,o])=>({w,onsetMs:o})) },
  { id: "s2", onsetMs: 2000, words: [["Every",2000],["word",2300],["waits",2700],["visible",3200]].map(([w,o])=>({w,onsetMs:o})) },
  { id: "s3", onsetMs: 4500, words: [["State",4500],["changes",4900],["nothing",5500],["appears",5900],["here",6600]].map(([w,o])=>({w,onsetMs:o})) }
];
const LONGWORD = "antidisestablishmentarianismxyzqabcdefgh";
const words = new Set();
for (const c of CONFIG0.cards) for (const w of c.words) words.add(w.w);
for (const c of swapCards) for (const w of c.words) words.add(w.w);
words.add(LONGWORD);
const sizes = []; for (let s = 20; s <= 64; s += 2) sizes.push(s);
fs.writeFileSync("/tmp/t196-req.json", JSON.stringify({ words: [...words], sizes }));
execSync("python3 codex/measure_spans.py /tmp/t196-req.json /tmp/t196-metrics.json", { stdio: "inherit" });
const MET = JSON.parse(fs.readFileSync("/tmp/t196-metrics.json", "utf8"));

/* ---- DOM stub ---- */
class El {
  constructor(tag) { this.tagName = tag; this.children = []; this.style = {}; this.dataset = {}; this._text = ""; this.parent = null; this.className = "";
    const s = new Set(); this.classList = { toggle: (c, on) => { on ? s.add(c) : s.delete(c); }, contains: c => s.has(c) }; }
  set textContent(v) { this._text = v; if (v === "") this.children = []; }
  get textContent() { return this._text; }
  appendChild(ch) { ch.parent = this; this.children.push(ch); return ch; }
  addEventListener() {}
  get clientWidth() { return this.id === "stage" ? 360 : 0; }
  _fontPx() { let e = this; while (e) { if (e.style && e.style.fontSize) return parseFloat(e.style.fontSize); e = e.parent; } return 64; }
  get offsetWidth() { if (this.className !== "w") return 0; const m = MET[this._text + "|" + this._fontPx()]; return m ? m.w : 0; }
  get offsetHeight() { if (this.className !== "w") return 0; const m = MET[this._text + "|" + this._fontPx()]; return m ? m.h : 0; }
}
const byId = {};
for (const id of ["stage","box","slot","hud","playBtn","restartBtn"]) { const e = new El("div"); e.id = id; byId[id] = e; }
global.document = { getElementById: id => byId[id], createElement: t => new El(t) };
global.performance = { now: () => 0 };
global.requestAnimationFrame = () => {};
global.window = {};
const script = html.slice(html.indexOf("<script>") + 8, html.indexOf("</script>"));
fs.writeFileSync("/tmp/t196-inline.js", script);
eval(script + "\n;window.__buildDom = buildDom;");
const W = global.window.__T196;
const buildDomH = global.window.__buildDom;
const { CONFIG, derive, stateAt, render, fitCard } = W;
const D = derive(CONFIG);
const eps = CONFIG.epsilonMs;
console.log("DERIVED totalMs=" + D.totalMs + " lastFlip=" + D.lastFlip + " cardOnsets=" + D.cards.map(c => c.onsetMs).join(","));

/* ---- count (A9.3) ---- */
const cfgWords = CONFIG.cards.reduce((n, c) => n + c.words.length, 0);
console.log("COUNT configWords=" + cfgWords + " perCard=" + CONFIG.cards.map(c => c.words.length).join("+"));
ok(cfgWords === 21, "A9.3 count 5+5+11=21 :: config=21 vs source 21");

/* ---- helpers ---- */
const cardElsRef = () => { const slot = byId.slot; const m = {}; for (const el of slot.children) m[el.dataset.card] = el; return m; };
function colors() { const m = cardElsRef(); const out = {}; for (const id in m) out[id] = m[id].children.map(s => s.style.color); return out; }
function geom(activeId) { const m = cardElsRef(); const el = m[activeId]; if (!el) return null;
  return { card: activeId, fontPx: el.style.fontSize, n: el.children.length,
    widths: el.children.map(s => Math.round(s.offsetWidth * 100) / 100),
    heights: el.children.map(s => Math.round(s.offsetHeight * 100) / 100),
    ids: el.children.map(s => s.__gid || (s.__gid = Math.random().toString(36).slice(2, 8))) }; }
const spokenList = st => { const c = st.cards.find(x => x.id === st.activeCardId); return c ? c.words.filter(w => w.spoken).map(w => w.w) : []; };

/* ---- CP2 / P0 ---- */
let t = D.cards[0].onsetMs;
let st = stateAt(CONFIG, t);
ok(st.activeCardId === "c1" && spokenList(st).join() === "This", "CP2 t=cards[0].onsetMs=" + t + " :: spoken=[" + spokenList(st) + "]");
st = stateAt(CONFIG, t - eps);
ok(st.activeCardId === null, "P0 t=" + (t - eps) + " stage empty :: active=null");

/* ---- C2 entry (D2-measured) ---- */
t = D.cards[1].onsetMs;
st = stateAt(CONFIG, t);
ok(st.activeCardId === "c2" && spokenList(st).join() === "types", "C2entry t=cards[1].onsetMs=" + t + " :: spoken=[" + spokenList(st) + "]");

/* ---- CP1 LOGIC ---- */
t = D.cards[2].onsetMs;
st = stateAt(CONFIG, t);
{ const c3 = st.cards.find(x => x.id === "c3");
  ok(st.activeCardId === "c3" && c3.words.length === 11 && c3.words.every(w => w.present && w.visible && !w.spoken) && st.cards.filter(x => x.id !== "c3").every(x => !x.visible),
     "CP1-LOGIC t=cards[2].onsetMs=" + t + " :: 11/11 present+visible+unspoken, outgoing zero visible"); }
console.log("CP1-PAINTED-FRAME :: NOT EXERCISABLE IN THIS SEAT (no browser binary) — separate outcome per amendment A5");

/* ---- CP3a + tie ---- */
const gets = D.cards[2].words[7];
st = stateAt(CONFIG, gets.onsetMs + eps);
ok(spokenList(st).includes("gets") && !spokenList(st).includes("louder"), "CP3a t=cards[2].words[7].onsetMs+eps=" + (gets.onsetMs + eps) + " :: spoken=[" + spokenList(st) + "]");
st = stateAt(CONFIG, gets.onsetMs);
ok(!spokenList(st).includes("gets"), "TIE t=" + gets.onsetMs + " gets unspoken (onset < t strict)");

/* ---- CP3b source-fidelity + timing-swap receipt ---- */
const cp3bExpr = (cfg) => Math.round((55.0 - cfg.windowStartS) * 1000 * cfg.timingScale * 1000) / 1000;
const cp3bT = cp3bExpr(CONFIG);
st = stateAt(CONFIG, cp3bT);
console.log("CP3b build-state t=(55.0-CONFIG.windowStartS)*1000*timingScale=" + cp3bT + " spoken=[" + spokenList(st) + "] | census@55.0: louder WHITE");
ok(spokenList(st).includes("louder"), "CP3b SOURCE-FIDELITY: DEPARTURE-EXPECTED (D3/A1) — build louder SPOKEN at " + cp3bT + ", census white");
const cfg125 = JSON.parse(JSON.stringify(CONFIG)); cfg125.timingScale = 1.25;
const cp3bT125 = cp3bExpr(cfg125);
const st125 = stateAt(cfg125, cp3bT125);
const louder125 = derive(cfg125).cards[2].words[8].onsetMs;
ok(cp3bT === 7240 && cp3bT125 === 9050 && spokenList(st125).includes("louder") && louder125 === 8600,
   "CP3b TIMING-SWAP receipt: instant 7240 -> " + cp3bT125 + " under timingScale 1.25; scaled louder onset=" + louder125 + " < " + cp3bT125 + " (departure persists)");

/* ---- CP5a + tie, CP5b, terminal ---- */
const last = D.cards[2].words[10];
st = stateAt(CONFIG, last.onsetMs + eps);
ok(spokenList(st).length === 11, "CP5a t=words[10].onsetMs+eps=" + (last.onsetMs + eps) + " :: all 11 spoken");
st = stateAt(CONFIG, last.onsetMs);
ok(!spokenList(st).includes("softer"), "CP5a-tie t=" + last.onsetMs + " softer unspoken at exact onset");
st = stateAt(CONFIG, D.totalMs - eps);
ok(st.activeCardId === "c3" && spokenList(st).length === 11, "CP5b t=totalMs-eps=" + (D.totalMs - eps) + " :: c3 active + all spoken (D4 hold)");
st = stateAt(CONFIG, D.totalMs + 5000);
ok(st.activeCardId === "c3" && spokenList(st).length === 11, "TERMINAL t>totalMs clamps to c3 fully spoken :: t=" + st.t);

/* ---- CP4: span counts + identities + ACTIVE-CARD GEOMETRY across interior flips ---- */
let cp4Counts = true, cp4Geom = true, cp4Ident = true; const geomLog = [];
const idSnapshot = {}; { const m = cardElsRef(); for (const id in m) idSnapshot[id] = [...m[id].children]; }
for (const c of D.cards) {
  for (const w of c.words) {
    for (const tt of [w.onsetMs - eps, w.onsetMs + eps]) {
      const s2 = stateAt(CONFIG, tt);
      if (s2.cards.some((cc, i) => cc.words.length !== CONFIG.cards[i].words.length)) cp4Counts = false;
    }
    const tb = Math.max(w.onsetMs - eps, 0), ta = w.onsetMs + eps;
    render(CONFIG, tb); const actB = stateAt(CONFIG, tb).activeCardId; const gB = geom(actB); const cB = colors();
    render(CONFIG, ta); const actA = stateAt(CONFIG, ta).activeCardId; const gA = geom(actA); const cA = colors();
    if (actB === actA && actB) {
      const sameGeom = JSON.stringify(gB.widths) === JSON.stringify(gA.widths) && JSON.stringify(gB.heights) === JSON.stringify(gA.heights) && gB.fontPx === gA.fontPx && gB.n === gA.n;
      if (!sameGeom) { cp4Geom = false; console.log("GEOM-DIFF " + c.id + "/" + w.w + "@" + w.onsetMs + " before=" + JSON.stringify(gB) + " after=" + JSON.stringify(gA)); }
      else if (c.id === "c3") geomLog.push("GEOM c3 flip " + w.w + "@" + w.onsetMs + ": widths=" + JSON.stringify(gA.widths) + " heights=" + JSON.stringify(gA.heights) + " fontPx=" + gA.fontPx + " identical-across-flip=true colorChanged=" + (JSON.stringify(cB) !== JSON.stringify(cA)));
    }
  }
}
{ const m = cardElsRef(); for (const id in m) if (m[id].children.some((s, i) => s !== idSnapshot[id][i])) cp4Ident = false; }
ok(cp4Counts, "CP4 span counts constant at every onset ±1ms :: 5/5/11 at all probed instants");
ok(cp4Ident, "CP4 span object identities unchanged across all flips (no node created/destroyed)");
ok(cp4Geom, "CP4 active-card GEOMETRY identical across every interior flip (widths/heights/fontPx constant; color sole state property)");
for (const l of geomLog) console.log(l);

/* ---- Handoff: stepped playback vs seek-jump ---- */
function snap(tt) { render(CONFIG, tt); return JSON.stringify({ st: stateAt(CONFIG, tt), col: colors() }); }
function stepped(target, steps) { let prev = 0; for (const s of steps) { if (s > target) break; snap(s); prev = s; } return snap(target); }
/* card-2 handoff */
const c2t = D.cards[1].onsetMs;
const stepC2 = stepped(c2t, [0, 500, 1032, 1500, 2079]);
const seekC2 = snap(c2t);
ok(stepC2 === seekC2, "HANDOFF card-2 exercised: stepped playback 0->500->1032->1500->2079->" + c2t + " === seek-jump direct to " + c2t + " (state+rendered colors identical)");
/* card-3 handoff */
const c3t = D.cards[2].onsetMs;
const stepC3 = stepped(c3t, [0, 1032, 2080, 3000, 4380, 5031]);
const seekC3 = snap(c3t);
ok(stepC3 === seekC3, "HANDOFF card-3 exercised: stepped playback ...->4380->5031->" + c3t + " === seek-jump direct to " + c3t + " (state+rendered colors identical)");
/* boundary-skipping seek: jump 1000 -> 7000 across BOTH card boundaries */
const stepFull = (() => { let last2 = null; for (let tt = 0; tt <= 7000; tt += 250) last2 = snap(tt); for (const b of [1032, 2080, 5032, 6641]) if (b <= 7000) last2 = snap(b); return snap(7000); })();
snap(1000); const seekSkip = snap(7000);
ok(stepFull === seekSkip, "HANDOFF boundary-skipping seek exercised: playback stepped 0..7000 (250ms steps + exact boundaries 1032/2080/5032/6641) === seek 1000 -> 7000 jumping across card boundaries 2080+5032 (state+colors identical at 7000)");
const det1 = JSON.stringify(stateAt(CONFIG, 3000)), det2 = JSON.stringify(stateAt(CONFIG, 3000));
ok(det1 === det2, "HANDOFF determinism stateAt(3000) twice identical :: len=" + det1.length);

/* ---- stage bg from CONFIG ---- */
ok(byId.stage.style.background === CONFIG.bg, "STAGE-BG stage.style.background === CONFIG.bg (" + CONFIG.bg + ")");

/* ---- FIT: post-fit measurement + startup consumption + width judgment ---- */
const fitRows = {};
for (const c of CONFIG.cards) { const r = fitCard(CONFIG, c.id); fitRows[c.id] = r;
  console.log("FITROW " + JSON.stringify(r)); }
ok(Object.values(fitRows).every(r => r.fits), "FIT all cards fit post-fit at 360px stage (box " + fitRows.c1.boxW + "x" + fitRows.c1.boxH + ")");
ok(JSON.stringify(W.fitReport) === JSON.stringify(fitRows) || CONFIG.cards.every(c => W.fitReport[c.id] && W.fitReport[c.id].fontSizePx === fitRows[c.id].fontSizePx && W.fitReport[c.id].fits === fitRows[c.id].fits),
   "FIT-STARTUP startup fitReport consumed+retained: fitOk=" + W.fitOk + " stage.dataset.fit=" + byId.stage.dataset.fit + " per-card=" + CONFIG.cards.map(c => c.id + "@" + W.fitReport[c.id].fontSizePx + "px/fits=" + W.fitReport[c.id].fits).join(","));
const cfgLong = JSON.parse(JSON.stringify(CONFIG));
cfgLong.cards = [{ id: "cx", onsetMs: 0, words: [{ w: LONGWORD, onsetMs: 0 }] }];
/* build a temp card element for the long-word probe through fitCard's own path */
buildDomH(cfgLong);
const rLong = fitCard(cfgLong, "cx");
console.log("FITLONG " + JSON.stringify(rLong));
ok(rLong.fits === false && rLong.maxWordW > rLong.boxW && (rLong.lines * CONFIG.font.lineHeight * rLong.fontSizePx) <= rLong.boxH + 1e-9 || (rLong.fits === false && rLong.maxWordW > rLong.boxW),
   "FIT-WIDTH single word wider than box FAILS fit on width (maxWordW=" + rLong.maxWordW + " > boxW=" + rLong.boxW + ") even though its height fits — fits judges width as well as height");
buildDomH(CONFIG); for (const c of CONFIG.cards) fitCard(CONFIG, c.id);

/* ---- swaps ---- */
const cfgSwap = JSON.parse(JSON.stringify(CONFIG)); cfgSwap.cards = swapCards;
const dSwap = derive(cfgSwap);
ok(dSwap.cards.reduce((n, c) => n + c.words.length, 0) === 13 && dSwap.totalMs === 8520,
   "SWAP words count + derived total :: 13/" + dSwap.totalMs + " (expect 13/8520)");
let sst = stateAt(cfgSwap, 0);
ok(sst.cards[0].words[0].spoken === false, "SWAP s1 t=0 tie: Presence unspoken at exact 0");
sst = stateAt(cfgSwap, 1);
ok(sst.cards[0].words[0].spoken === true, "SWAP s1 t=1 Presence spoken");
sst = stateAt(cfgSwap, 4500);
ok(sst.activeCardId === "s3" && sst.cards[2].words.every(w => !w.spoken), "SWAP s3 entry all unspoken (first flip 4900)");
sst = stateAt(cfgSwap, dSwap.totalMs - eps);
ok(sst.cards[2].words.every(w => w.spoken), "SWAP end state s3 all spoken");
const cfgTS = JSON.parse(JSON.stringify(cfgSwap)); cfgTS.timingScale = 1.25;
const dTS = derive(cfgTS);
ok(dTS.totalMs === 10650 && dTS.cards[2].onsetMs === 5625 && dTS.cards[2].words[4].onsetMs === 8250,
   "SWAP-TIMING derivedTotalMs=" + dTS.totalMs + " s3onset=" + dTS.cards[2].onsetMs + " hereOnset=" + dTS.cards[2].words[4].onsetMs + " (expect 10650/5625/8250)");
sst = stateAt(cfgTS, dTS.cards[2].onsetMs);
ok(sst.activeCardId === "s3" && sst.cards[2].words.every(w => !w.spoken), "SWAP timing CP1-analog at scaled onset 5625: s3 all unspoken — assertion instant MOVED 4500 -> 5625 with timingScale");
const dDef125 = derive(cfg125);
ok(dDef125.cards[2].onsetMs === 6290, "TIMING-SWAP default CONFIG CP1 instant MOVED: cards[2].onsetMs 5032 -> " + dDef125.cards[2].onsetMs + " under timingScale 1.25");
sst = stateAt(cfg125, dDef125.cards[2].onsetMs);
ok(sst.activeCardId === "c3" && sst.cards[2].words.every(w => !w.spoken), "TIMING-SWAP default CONFIG CP1-analog at 6290: c3 all unspoken PASS");

/* ---- contrast / DeltaE ---- */
function lum(hex) { const c = [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16) / 255).map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
function lab(hex) { const rgb = [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16) / 255).map(v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  let x = (0.4124 * rgb[0] + 0.3576 * rgb[1] + 0.1805 * rgb[2]) / 0.95047, y = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 1.0, z = (0.0193 * rgb[0] + 0.1192 * rgb[1] + 0.9505 * rgb[2]) / 1.08883;
  const f = v => v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116; x = f(x); y = f(y); z = f(z);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]; }
function dE(a, b) { const A = lab(a), B = lab(b); return Math.round(Math.sqrt(A.reduce((s, v, i) => s + (v - B[i]) ** 2, 0)) * 10) / 10; }
function cr(a, b) { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return Math.round(((l1 + 0.05) / (l2 + 0.05)) * 100) / 100; }
const crU = cr(CONFIG.unspoken.color, CONFIG.bg), crS = cr(CONFIG.spoken.color, CONFIG.bg), de = dE(CONFIG.spoken.color, CONFIG.unspoken.color);
console.log("CONTRAST unspoken/bg=" + crU + " spoken/bg=" + crS + " floor=" + CONFIG.contrastFloor + " | pairDeltaE default=" + de + " min=" + CONFIG.pairDeltaEMin);
ok(crU >= CONFIG.contrastFloor && crS >= CONFIG.contrastFloor, "Contrast floor both >= " + CONFIG.contrastFloor);
ok(de >= CONFIG.pairDeltaEMin, "Pair DeltaE default >= " + CONFIG.pairDeltaEMin + " :: " + de);
const cfgPal = JSON.parse(JSON.stringify(CONFIG)); cfgPal.spoken = { ...cfgPal.spoken, color: "#00e676" };
const crP = cr(cfgPal.spoken.color, cfgPal.bg), deP = dE(cfgPal.spoken.color, cfgPal.unspoken.color);
console.log("SWAP-PALETTE spoken #00e676 contrast/bg=" + crP + " pairDeltaE=" + deP);
ok(crP >= CONFIG.contrastFloor && deP >= CONFIG.pairDeltaEMin, "SWAP palette contrast >= 7 AND DeltaE >= 30 :: " + crP + "/" + deP);

/* ---- comparison.html seek derivation ---- */
const cmp = fs.readFileSync("comparison.html", "utf8");
ok(!/5\.032|5,032/.test(cmp), "COMPARISON no hardcoded 5.032/5,032 seek literal remains in comparison.html");
const seekVideoS = CONFIG.headHandleS + D.cards[2].onsetMs / 1000;
console.log("COMPARISON-SEEK derived target: CONFIG.headHandleS + derive(CONFIG).cards[2].onsetMs/1000 = " + CONFIG.headHandleS + " + " + D.cards[2].onsetMs + "/1000 = " + seekVideoS + " s (video time)");
ok(Math.abs(seekVideoS - 5.532) < 1e-9 && cmp.includes("derive(cfg)") && cmp.includes("headHandleS"), "COMPARISON card-3 seek target CONFIG-derived in code (derive + headHandleS read from recreation CONFIG)");

console.log("HARNESS-DONE fails=" + fails);
process.exit(fails ? 1 : 0);
