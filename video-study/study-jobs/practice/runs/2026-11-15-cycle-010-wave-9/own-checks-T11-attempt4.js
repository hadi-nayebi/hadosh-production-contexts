"use strict";
/* T11 attempt 4 own-check suite — node. Loads the recreation's pure block and asserts
   effect mappings, plan semantics, integral settle, validation, overrides, census, fit. */
const fs = require("fs");
const path = require("path");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T11-code-review-stamp-slam");
const src = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
let pass = 0, fail = 0; const fails = [];
function ok(cond, name){ if (cond){ pass++; } else { fail++; fails.push(name); console.log("FAIL: " + name); } }
function section(n){ console.log("== " + n); }

const pure = src.slice(src.indexOf("/*PURE-BEGIN*/"), src.indexOf("/*PURE-END*/"));
const api = new Function(pure + "\nreturn { CONFIG, validateConfig, computeTimeline, digitsOf, rollPositions, archCell, stateAt, parseOverrides, REJECTED };")();
const C = api.CONFIG, TL = api.computeTimeline(C);
const clone = o => JSON.parse(JSON.stringify(o));

section("timeline + plan semantics (A-C008-2)");
ok(C.cardDurationsMs.reduce((a,b)=>a+b,0) === C.loopMs && C.loopMs === 10000, "loop = sum(durations) = 10000");
ok(JSON.stringify(TL.starts) === JSON.stringify([0,3000,4000,6000,8000]), "card starts [0,3000,4000,6000,8000]");
const s2500 = api.stateAt(C, TL, 2500);
ok(s2500.cardIdx === 0 && s2500.stampState === "held" && s2500.stampScale === 1, "at 2500ms first merged card stamp HELD scale 1");
const s6500 = api.stateAt(C, TL, 6500);
ok(s6500.cardIdx === 3 && s6500.stampState === "idle" && s6500.stampOpacity === 0, "at 6500ms card 3 shows NO stamp");
const s7500 = api.stateAt(C, TL, 7500);
ok(s7500.cardIdx === 3 && s7500.stampState === "held" && s7500.stampScale === 1, "at 7500ms card 3 stamp HELD (not mid-slam)");
const st0 = TL.stamps.find(s=>s.cardIdx===0), st3 = TL.stamps.find(s=>s.cardIdx===3);
ok(st0.at <= 2500 && st0.hideEnd > 2500, "card0 stamped window contains 2500ms");
ok(st3.slamEnd <= 7500, "card3 slam completes <= 7500ms");
TL.stamps.forEach(s=> ok(s.hideEnd <= s.cardStart + C.cardDurationsMs[s.cardIdx] - C.whipMs/2 + 0.001, "stamp hide completes at/before whip window card " + s.cardIdx));
const wB1 = api.stateAt(C, TL, 9900), wB2 = api.stateAt(C, TL, 50), wMid = api.stateAt(C, TL, 0);
ok(wB1.whipping === true && wB1.cardIdx === 4, "loop-boundary whip active at 9900ms showing outgoing card");
ok(wB2.whipping === true && wB2.cardIdx === 0, "loop-boundary whip active at 50ms showing incoming card");
ok(wMid.whipping === true && Math.abs(wMid.blur - C.whipBlurPx) < 1e-9, "boundary whip midpoint blur at peak");
const wInt = api.stateAt(C, TL, 3000);
ok(wInt.whipping === true && Math.abs(wInt.blur - C.whipBlurPx) < 1e-9, "internal whip midpoint at 3000ms");
[0,1500,2500,4321,6500,7500,9999].forEach(p=>{
  const a = api.stateAt(C, TL, p), b = api.stateAt(C, TL, p);
  ok(JSON.stringify(a) === JSON.stringify(b), "deterministic state at " + p);
});
ok(api.stateAt(C, TL, 9999).cardIdx === 4 && api.stateAt(C, TL, 0).whipping === true, "rollover continuity: last card at 9999, boundary whip at 0");

section("integral settle (A-C009-2)");
function integralAt(value, label){
  const r = api.rollPositions(C, value);
  ok(r.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "displayed strip positions integral at " + label + " value " + value + " -> " + r.map(v=>v.toFixed(3)).join(","));
  const d = api.digitsOf(C, value);
  ok(r.every((v,i)=> Math.round(v) % C.digitBase === d[i]), "strip positions match digits at " + label);
}
[260, 380, 520, 800].forEach(v=> integralAt(v, "named target"));
C.prs.forEach((p,i)=>{
  const endPhase = TL.counterEnds[i];
  const st = api.stateAt(C, TL, Math.min(endPhase, TL.starts[i] + C.cardDurationsMs[i] - C.whipMs/2 - 1));
  ok(st.roll.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "settle checkpoint integral card " + i + " target " + p.approvalsTo);
  const hold = api.stateAt(C, TL, TL.starts[i] + C.cardDurationsMs[i] - C.whipMs/2 - 10);
  ok(hold.roll.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "post-settle hold integral card " + i);
});
{ // genuine roll + monotonic rise, ones column continuous
  let prev = -1, mono = true, moved = 0, lastOnes = null, onesMoves = 0;
  for (let ph = 0; ph <= 1400; ph += 25){ const st = api.stateAt(C, TL, ph);
    if (st.approvalsFloat < prev - 1e-9) mono = false; prev = st.approvalsFloat;
    if (lastOnes !== null && Math.abs(st.roll[2] - lastOnes) > 1e-9) onesMoves++; lastOnes = st.roll[2]; }
  ok(mono, "approvals rise monotonic on card 0");
  ok(onesMoves >= 20, "ones column rolls continuously (moves at " + onesMoves + " sampled phases)");
}

section("validation completeness (C3)");
ok(api.validateConfig(clone(C)).length === 0, "default CONFIG validates clean");
["arch","type","figure","stage","stamp","palette","pillTones","checkStates","mergePill","overrideLimits","labels","marks"].forEach(k=>{
  const m = clone(C); delete m[k]; let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0, "missing container rejected without throw: " + k);
});
const badCases = [
  ["digitBase 1", c=>{ c.digitBase = 1; }], ["digitBase 2.5", c=>{ c.digitBase = 2.5; }],
  ["darkMod 0", c=>{ c.arch.darkMod = 0; }], ["arch knee fractional>1", c=>{ c.arch.knee = 1.5; }],
  ["zero duration", c=>{ c.cardDurationsMs[0] = 0; }], ["zero counterMs", c=>{ c.counterMs = 0; }],
  ["whipStreakDivisor 0", c=>{ c.whipStreakDivisor = 0; }], ["stamp fontStack empty", c=>{ c.stamp.fontStack = ""; }],
  ["type fontStack empty", c=>{ c.type.fontStack = ""; }], ["stampText empty", c=>{ c.stampText = ""; }],
  ["stamp leftPct 150", c=>{ c.stamp.leftPct = 150; }], ["stamp bg empty", c=>{ c.stamp.bg = ""; }],
  ["palette member missing", c=>{ delete c.palette.green; }], ["checkStates member missing", c=>{ delete c.checkStates.warn; }],
  ["labels member empty", c=>{ if (c.labels) c.labels.openPill = ""; }], ["marks member empty", c=>{ if (c.marks) c.marks.ok = ""; }],
  ["stampAngleDeg 999", c=>{ c.stampAngleDeg = 999; }], ["rollCarryFrac 0", c=>{ c.rollCarryFrac = 0; }],
  ["durations sum mismatch", c=>{ c.cardDurationsMs[1] = 1500; }], ["arch fontPx 0", c=>{ c.arch.fontPx = 0; }],
  ["figure strokePx -1", c=>{ c.figure.strokePx = -1; }], ["stage checksWidthPct 100", c=>{ c.stage.checksWidthPct = 100; }],
];
badCases.forEach(([name, fn])=>{ const m = clone(C); fn(m); let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0, "scalar/shape rejected: " + name); });

section("override policy (C3 observable + swap, A-C002-1/A-C006-4)");
function mock(map){ return k => (k in map ? map[k] : null); }
const before = JSON.stringify(C);
const swap = api.parseOverrides(C, mock({ titles: ["ship: docs-first.mp4|ship: tiny-fix.mp4"], stamp: ["MERGED"], cardMs: ["900"], accent: ["#ffd75e"], bg: ["#000000"] }));
ok(swap.any && swap.errs.length === 0 && !!swap.candidate, "documented swap accepted");
if (swap.candidate){ const sc = swap.candidate, stl = api.computeTimeline(sc);
  ok(sc.prs[0].title === "ship: docs-first.mp4" && sc.prs[1].title === "ship: tiny-fix.mp4", "swap titles take effect");
  ok(sc.stampText === "MERGED" && sc.stampColor === "#ffd75e" && sc.palette.bg === "#000000", "swap stamp/accent/bg take effect");
  ok(sc.cardDurationsMs.every(d=>d===900) && sc.loopMs === 4500, "swap cardMs -> uniform 900ms durations, loop 4500");
  ok(stl.counterSpans.every(s=>s>0), "swap counter spans positive");
  stl.stamps.forEach(s=> ok(s.hideEnd <= s.cardStart + 900 - sc.whipMs/2 + 0.001, "swap stamp completes before whip card " + s.cardIdx));
  [260,380,520,800].forEach(v=>{ const r = api.rollPositions(sc, v); ok(r.every(x=>Math.abs(x-Math.round(x))<1e-9), "swap-config settle integral at " + v); });
}
ok(JSON.stringify(C) === before, "parseOverrides never mutates the live CONFIG (atomic)");
[["empty value", { stamp: [""] }], ["duplicate parameter", { stamp: ["A","B"] }],
 ["excess titles", { titles: ["a|b|c|d|e|f"] }], ["non-integer cardMs", { cardMs: ["9.5"] }],
 ["invalid accent", { accent: ["#xyz"] }], ["overlong stamp", { stamp: ["ABCDEFGHIJKLM"] }],
].forEach(([name, map])=>{ const r = api.parseOverrides(C, mock(map));
  ok(r.any && r.errs.length > 0 && !r.candidate, "override rejected observably: " + name); });
ok(api.parseOverrides(C, mock({})).any === false, "no params -> no override action");

section("CONFIG consumption census (A-C006-2) + literal census (A-C008-3/A-C009-4)");
const cfgStart = src.indexOf("const CONFIG = {");
const cfgEnd = src.indexOf("const DEFAULT_CONFIG_JSON");
const cfgText = src.slice(cfgStart, cfgEnd), restText = src.slice(0, cfgStart) + src.slice(cfgEnd);
function leaves(o, prefix, out){ if (Array.isArray(o)){ o.forEach((v,i)=> leaves(v, prefix + "[" + i + "]", out)); }
  else if (o && typeof o === "object"){ Object.keys(o).forEach(k=> leaves(o[k], prefix ? prefix + "." + k : k, out)); }
  else out.push(prefix); return out; }
const leafList = leaves(C, "", []);
let unconsumed = [];
leafList.forEach(p=>{ const key = p.replace(/\[\d+\]/g, "").split(".").pop();
  const uses = restText.split(key).length - 1;
  if (uses < 1) unconsumed.push(p); });
ok(unconsumed.length === 0, "every CONFIG leaf resolves to an application site (" + leafList.length + " leaves" + (unconsumed.length ? "; unconsumed: " + unconsumed.join(",") : "") + ")");
function signature(cfg){ const tl = api.computeTimeline(cfg); let s = JSON.stringify(tl.stamps) + "|" + JSON.stringify(tl.counterSpans);
  for (let ph = 0; ph < cfg.loopMs; ph += 137){ const st = api.stateAt(cfg, tl, ph); s += "|" + st.cardIdx + "," + st.approvals + "," + st.roll.map(v=>v.toFixed(2)).join("/") + "," + st.stampState + "," + (1 + st.streak / cfg.whipStreakDivisor).toFixed(4); }
  for (let y = 0; y < cfg.archRows; y += 3) for (let x = 0; x < cfg.archCols; x += 3){ const cell = api.archCell(cfg, x, y); s += cell.glyph; }
  return s; }
const baseSig = signature(C);
[["stampOffsetFrac", c=>{ c.stampOffsetFrac = 0.5; }], ["cardDurationsMs[0]", c=>{ c.cardDurationsMs[0] = 3200; c.loopMs = 10200; }],
 ["rollCarryFrac", c=>{ c.rollCarryFrac = 0.3; }], ["arch.crownExp", c=>{ c.arch.crownExp = 1.0; }],
 ["arch.halfBase", c=>{ c.arch.halfBase = 0.3; }], ["arch.darkMulX", c=>{ c.arch.darkMulX = 8; }],
 ["prs merged flag", c=>{ c.prs[1].merged = true; }], ["whipStreakDivisor", c=>{ c.whipStreakDivisor = 300; }],
 ["digitBase via approvals", c=>{ c.prs[0].approvalsTo = 300; }],
].forEach(([name, fn])=>{ const m = clone(C); fn(m); ok(signature(m) !== baseSig, "mutation effect: " + name); });
const hexes = new Set((restText.match(/#[0-9a-fA-F]{6}/g) || []));
ok([...hexes].every(h=> ["#0b0e11"].includes(h)), "no stray hex colors outside CONFIG (found: " + [...hexes].join(",") + ")");
["✓","✕","◐"].forEach(g=> ok(!restText.includes(g), "content glyph outside CONFIG absent: " + g));
[">Open<", ">Checks<", ">LGTM<"].forEach(t=> ok(!src.includes(t), "hard-coded content text absent: " + t));
const numLits = new Set((restText.replace(/\/\*[\s\S]*?\*\//g, "").match(/(?<![\w.])-?\d+(?:\.\d+)?/g) || []));
console.log("numeric literals outside CONFIG: " + [...numLits].sort().join(","));
const WHITELIST = new Set(["0","1","2","3","4","5","6","7","8","9","10","14","26","46","50","100","300","999","-1","-50","0.5","0.08","180","700","900"]);
const unlisted = [...numLits].filter(n=> !WHITELIST.has(n));
ok(unlisted.length === 0, "literal census: no unlisted literals outside CONFIG" + (unlisted.length ? " (unlisted: " + unlisted.join(",") + ")" : ""));

section("arch recognition (C5) + displayed-state fit (A-C006-3)");
function rowHalfWidth(y){ let max = 0; for (let x = 0; x < C.archCols; x++){ if (api.archCell(C, x, y).filled){ const nx = Math.abs((x - C.archCols/2) / (C.archCols/2)); if (nx > max) max = nx; } } return max; }
const crownHalf = rowHalfWidth(2), peakedness = 1 - crownHalf / C.arch.halfTop;
console.log("crown: row2 halfWidth " + crownHalf.toFixed(3) + " peakedness " + peakedness.toFixed(3));
ok(peakedness <= 0.30, "crown peakedness <= 0.30 (attempt-3 linear profile model: ~0.54)");
ok(rowHalfWidth(0) < rowHalfWidth(2) && rowHalfWidth(2) <= rowHalfWidth(7) + 1e-9, "crown shoulders widen monotonically");
ok(C.arch.legGap >= 0.34, "leg opening fraction not regressed (>= 0.34)");
ok(C.arch.fontPx >= 6.4, "arch glyph size not regressed (>= 6.4px)");
const legRows = C.archRows - Math.floor(C.arch.legStart * C.archRows);
console.log("opening height fraction " + (legRows / C.archRows).toFixed(3));
{ // fit model at 360px / 300px min height, single-line + wrapped check rows
  const archH = C.archRows * C.arch.fontPx * C.arch.lineHeight;
  const panelSingle = 16.3 + 5 + 3 * 18.4 + 14.3 + 5 + 14;
  const panelWrapped = 16.3 + 5 + 2 * 18.4 + 33.2 + 14.3 + 5 + 14;
  const total = s => 8 + 16.3 + 6 + 17 + 6 + Math.max(archH, s) + 6 + 26 + 8;
  console.log("fit totals: single " + total(panelSingle).toFixed(1) + "px wrapped " + total(panelWrapped).toFixed(1) + "px arch block " + archH.toFixed(1) + "px");
  ok(total(panelSingle) <= 300 && total(panelWrapped) <= 300, "displayed totals fit 300px in single-line AND wrapped states");
  ok(C.type.checksPx >= 12 && C.type.pillPx >= 11 && C.stampFontPx >= 34, "modelled type floors hold (checks 12 / pill 11 / stamp 34)");
  const stampW = (C.stampText.length * C.stampFontPx * 0.62) + 2 * C.stamp.padXPx + 2 * C.stamp.borderPx;
  ok(stampW < 344, "stamp displayed width at scale 1 fits stage (" + stampW.toFixed(0) + "px)");
}

section("purity");
const bad = ["http://", "https://", "<img", "<video", "<audio", "url(", "segment"];
const hits = bad.filter(b=> src.includes(b));
[".mp4", ".png", ".jpg"].forEach(b=>{ if (restText.includes(b)) hits.push(b + " (outside CONFIG)"); });
ok(hits.length === 0, "purity grep zero hits" + (hits.length ? ": " + hits.join(",") : ""));
ok(!src.includes("caption") && !src.includes("subtitle"), "no caption/subtitle layer");

console.log("\nRESULT: " + pass + " pass, " + fail + " fail");
if (fails.length) console.log("FAILURES: " + fails.join(" | "));
process.exit(fail ? 1 : 0);
