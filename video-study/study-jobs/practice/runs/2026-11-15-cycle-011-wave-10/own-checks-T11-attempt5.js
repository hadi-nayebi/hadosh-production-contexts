"use strict";
/* T11 attempt 5 own-check suite — node. Loads the recreation's pure block and asserts
   effect mappings, plan semantics, integral settle + ones wrap continuity, validation
   layer 2, overrides, census, fit, arch inner curvature, self-start (DOM stub). */
const fs = require("fs");
const path = require("path");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T11-code-review-stamp-slam");
const src = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
let pass = 0, fail = 0; const fails = [];
function ok(cond, name){ if (cond){ pass++; } else { fail++; fails.push(name); console.log("FAIL: " + name); } }
function section(n){ console.log("== " + n); }
const only = (process.argv.find(a=>a.startsWith("--only=")) || "").slice(7).split(",").filter(Boolean);
const want = s => !only.length || only.includes(s);

const pure = src.slice(src.indexOf("/*PURE-BEGIN*/"), src.indexOf("/*PURE-END*/"));
const api = new Function(pure + "\nreturn { CONFIG, validateConfig, computeTimeline, digitsOf, rollPositions, archCell, stateAt, parseOverrides, REJECTED };")();
const C = api.CONFIG, TL = api.computeTimeline(C);
const clone = o => JSON.parse(JSON.stringify(o));

if (want("S1")) {
section("S1 timeline + plan semantics (A-C008-2) + C4 arithmetic");
ok(C.cardDurationsMs.reduce((a,b)=>a+b,0) === C.loopMs && C.loopMs === 10000, "loop = sum(durations) = 10000");
ok(JSON.stringify(C.cardDurationsMs) === JSON.stringify([2800,1400,1800,2000,2000]), "filed duration vector [2800,1400,1800,2000,2000]");
ok(JSON.stringify(TL.starts) === JSON.stringify([0,2800,4200,6000,8000]), "card starts [0,2800,4200,6000,8000]");
ok(JSON.stringify(TL.counterSpans) === JSON.stringify([1400,1100,1400,1160,1400]), "counter spans [1400,1100,1400,1160,1400]");
TL.counterSpans.forEach((s,i)=> ok(s >= 1000, "counter-span floor 1000ms holds card " + i + " (" + s + ")"));
TL.counterEnds.forEach((e,i)=>{ const margin = (TL.starts[i] + C.cardDurationsMs[i]) - e; ok(margin >= 250, "settled-display margin >=250ms card " + i + " (" + margin + ")"); });
const s2500 = api.stateAt(C, TL, 2500);
ok(s2500.cardIdx === 0 && s2500.stampState === "held" && s2500.stampScale === 1, "at 2500ms first merged card stamp HELD scale 1");
const s6500 = api.stateAt(C, TL, 6500);
ok(s6500.cardIdx === 3 && s6500.stampState === "idle" && s6500.stampOpacity === 0, "at 6500ms card 3 shows NO stamp");
const s7500 = api.stateAt(C, TL, 7500);
ok(s7500.cardIdx === 3 && s7500.stampState === "held" && s7500.stampScale === 1, "at 7500ms card 3 stamp HELD (not mid-slam)");
const st0 = TL.stamps.find(s=>s.cardIdx===0), st3 = TL.stamps.find(s=>s.cardIdx===3);
ok(st0.at <= 2500 && st0.hideEnd > 2500, "card0 stamped window contains 2500ms");
ok(st3.slamEnd <= 7500, "card3 slam completes <= 7500ms");
TL.stamps.forEach(s=>{ ok(s.hideEnd <= s.cardStart + C.cardDurationsMs[s.cardIdx] - C.whipMs/2 + 0.001, "stamp hide completes at/before whip window card " + s.cardIdx);
  ok(s.at >= TL.counterEnds[s.cardIdx] + C.stampSettleGapMs - 0.001, "merged stamp onset at/after counter settle + gap, card " + s.cardIdx + " (onset " + s.at + " settle " + TL.counterEnds[s.cardIdx] + ")");
  const st = api.stateAt(C, TL, s.at);
  ok(st.approvals === C.prs[s.cardIdx].approvalsTo, "at stamp onset the displayed counter shows the settled value, card " + s.cardIdx); });
TL.counterSpans.forEach((s,i)=>{ if (i !== 3) ok(s >= [1400,700,1400,1400,1400][i], "no card re-compressed below attempt-4 span except filed card-3 shortening (card " + i + ")"); });
const wB1 = api.stateAt(C, TL, 9900), wB2 = api.stateAt(C, TL, 50);
ok(wB1.whipping === true && wB1.cardIdx === 4, "loop-boundary whip active at 9900ms showing outgoing card");
ok(wB2.whipping === true && wB2.cardIdx === 0, "loop-boundary whip active at 50ms showing incoming card");
ok(api.stateAt(C, TL, 0).whipping === true, "loop boundary is a whip state, not an instantaneous reset");
[0,1500,2500,4321,6500,7500,9999].forEach(p=>{ const a = api.stateAt(C, TL, p), b = api.stateAt(C, TL, p);
  ok(JSON.stringify(a) === JSON.stringify(b), "deterministic state at " + p); });
}

if (want("S2")) {
section("S2 settle integrality (A-C009-2) + C1 ones wrap continuity");
function integralAt(value, from, label){
  const r = api.rollPositions(C, value, from);
  ok(r.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "displayed strip positions integral at " + label + " value " + value + " -> " + r.map(v=>v.toFixed(3)).join(","));
  const d = api.digitsOf(C, value);
  ok(r.every((v,i)=> Math.round(v) % C.digitBase === d[i]), "strip positions match digits at " + label);
}
[[260,111],[380,260],[520,380],[800,520]].forEach(([v,f])=> integralAt(v, f, "named target"));
C.prs.forEach((p,i)=>{
  const st = api.stateAt(C, TL, Math.min(TL.counterEnds[i], TL.starts[i] + C.cardDurationsMs[i] - C.whipMs/2 - 1));
  ok(st.roll.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "settle checkpoint integral card " + i + " target " + p.approvalsTo);
  const hold = api.stateAt(C, TL, TL.starts[i] + C.cardDurationsMs[i] - C.whipMs/2 - 10);
  ok(hold.roll.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "post-settle hold integral card " + i);
  const atSettle = api.stateAt(C, TL, TL.counterEnds[i]);
  ok(atSettle.roll.every((v,j)=> j === 2 || Math.abs(v - Math.round(v)) < 1e-9), "settle checkpoint integral (higher+ones) card " + i);
});
C.prs.forEach((p,i)=>{
  let prevPos = null, prevVal = null, mono = true, cont = true, crossed = 0, lastDigit = null;
  for (let ph = TL.starts[i]; ph <= TL.counterEnds[i]; ph += 5){
    const st = api.stateAt(C, TL, ph);
    const pos = st.roll[2];
    if (prevPos !== null){
      if (pos < prevPos - 1e-9) mono = false;
      if (Math.abs((pos - prevPos) - (st.approvalsFloat - prevVal)) > 1e-6) cont = false;
    }
    const dg = Math.floor(st.approvalsFloat / 10);
    if (lastDigit !== null && dg > lastDigit) crossed++;
    lastDigit = dg;
    prevPos = pos; prevVal = st.approvalsFloat;
  }
  ok(mono, "ones position monotonic non-decreasing within card " + i);
  ok(cont, "ones position continuous (|dPos - dValue| within eps) card " + i);
  if (p.approvalsTo - p.approvalsFrom >= 20) ok(crossed >= 1, "ones wrap crossings sampled card " + i + " (" + crossed + ")");
  // just past a 9->0 crossing the unwrapped position exceeds 9 (duplicate strip), never snaps to ~0 mid-card
  const mid = api.stateAt(C, TL, TL.starts[i] + (TL.counterEnds[i] - TL.starts[i]) / 2);
  ok(mid.roll[2] > 9 || p.approvalsTo - p.approvalsFrom < 10, "mid-card ones position runs through the duplicated strip, card " + i + " (pos " + mid.roll[2].toFixed(2) + ")");
});
const maxTravel = Math.max.apply(null, C.prs.map(p=> p.approvalsTo - C.digitBase * Math.floor(p.approvalsFrom / C.digitBase)));
ok(C.onesStripReps * C.digitBase > maxTravel, "ones strip length covers unwrapped travel (" + (C.onesStripReps * C.digitBase) + " > " + maxTravel + ")");
{ const m = clone(C); m.onesStripReps = 2; ok(api.validateConfig(m).length > 0, "validation rejects a ones strip too short for the unwrapped travel"); }
{ let prev = -1, mono = true;
  for (let ph = 0; ph <= 1400; ph += 25){ const st = api.stateAt(C, TL, ph);
    if (st.approvalsFloat < prev - 1e-9) mono = false; prev = st.approvalsFloat; }
  ok(mono, "approvals rise monotonic on card 0"); }
}

if (want("S3")) {
section("S3 C2 validation layer 2 (guard / dimensions / limits / coercion / sparse / unknown)");
ok(api.validateConfig(clone(C)).length === 0, "default CONFIG validates clean");
// guard fix: source carries the single-cardStart comparison
ok(src.includes("const limit = s.cardStart + c.cardDurationsMs[s.cardIdx] - c.whipMs/2; if (s.hideEnd > limit)"), "stamp-boundary guard compares hideEnd against the single-cardStart limit");
ok(!src.includes("s.hideEnd > s.cardStart + limit"), "double-add comparison absent from source");
// masking demonstration: a hideEnd 1ms past the true boundary on card 3 is under the old double-add threshold, over the fixed one
{ const s = TL.stamps.find(x=>x.cardIdx===3); const trueLimit = s.cardStart + C.cardDurationsMs[3] - C.whipMs/2; const oldLimit = s.cardStart + trueLimit;
  ok(s.hideEnd <= trueLimit + 0.001 && (trueLimit + 1) < oldLimit, "formula masking demonstrated on card 3: old threshold " + oldLimit + " vs fixed " + trueLimit); }
// independent boundary recomputation (the guard's formula is not its own evidence)
TL.stamps.forEach(s=> ok(s.hideEnd - s.cardStart <= C.cardDurationsMs[s.cardIdx] - C.whipMs/2 + 0.001, "independent boundary recomputation card " + s.cardIdx));
// later-card live boundary rejection: a slam budget that fits card 0 but drives a later merged card's stamp offset negative rejects observably
{ const m = clone(C); m.slamMs = 1900; const errs = api.validateConfig(m);
  ok(errs.length > 0, "crafted later-card stamp crossing rejects observably (" + errs.join(";") + ")"); }
const badCases = [
  ["archCols fraction", c=>{ c.archCols = 36.5; }], ["archCols string", c=>{ c.archCols = "36"; }],
  ["archCols Infinity", c=>{ c.archCols = Infinity; }], ["archRows fraction", c=>{ c.archRows = 28.5; }],
  ["archRows string", c=>{ c.archRows = "28"; }], ["archRows Infinity", c=>{ c.archRows = Infinity; }],
  ["overrideLimits.maxTitleLen string", c=>{ c.overrideLimits.maxTitleLen = "60"; }],
  ["overrideLimits.maxTitleLen 0", c=>{ c.overrideLimits.maxTitleLen = 0; }],
  ["overrideLimits.maxTitleLen over cap", c=>{ c.overrideLimits.maxTitleLen = 501; }],
  ["overrideLimits.maxStampLen fraction", c=>{ c.overrideLimits.maxStampLen = 2.5; }],
  ["overrideLimits.maxStampLen Infinity", c=>{ c.overrideLimits.maxStampLen = Infinity; }],
  ["stamp.leftPct string", c=>{ c.stamp.leftPct = "50"; }], ["stamp.leftPct null", c=>{ c.stamp.leftPct = null; }],
  ["stamp.topPct string", c=>{ c.stamp.topPct = "46"; }], ["stamp.borderPx Infinity", c=>{ c.stamp.borderPx = Infinity; }],
  ["stamp.padXPx Infinity", c=>{ c.stamp.padXPx = Infinity; }], ["stamp.padYPx string", c=>{ c.stamp.padYPx = "4"; }],
  ["digitBase 1", c=>{ c.digitBase = 1; }], ["darkMod 0", c=>{ c.arch.darkMod = 0; }],
  ["zero duration", c=>{ c.cardDurationsMs[0] = 0; }], ["durations sum mismatch", c=>{ c.cardDurationsMs[1] = 1500; }],
  ["stampSettleGapMs negative", c=>{ c.stampSettleGapMs = -1; }], ["onesStripReps fraction", c=>{ c.onesStripReps = 2.5; }],
  ["arch innerTopRatio 0", c=>{ c.arch.innerTopRatio = 0; }], ["arch innerCurveExp 0", c=>{ c.arch.innerCurveExp = 0; }],
];
badCases.forEach(([name, fn])=>{ const m = clone(C); fn(m); let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0, "layer-2 rejected: " + name); });
const sparseCases = [
  ["prs hole", c=>{ delete c.prs[2]; }], ["cardDurationsMs hole", c=>{ delete c.cardDurationsMs[1]; }],
  ["checksCycle row hole", c=>{ delete c.checksCycle[1]; }], ["checksCycle nested hole", c=>{ delete c.checksCycle[0][1]; }],
  ["statusPills hole", c=>{ delete c.statusPills[3]; }], ["reviewersPerCard hole", c=>{ delete c.reviewersPerCard[2]; }],
];
sparseCases.forEach(([name, fn])=>{ const m = clone(C); fn(m); let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0 && errs.join(" ").includes("sparse"), "sparse rejected by named index: " + name + " (" + errs.join(";") + ")"); });
["arch","type","figure","stage","stamp","palette","pillTones","checkStates","mergePill","overrideLimits","labels","marks"].forEach(k=>{
  const m = clone(C); delete m[k]; let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0, "missing container rejected without throw: " + k);
});
}

if (want("S4")) {
section("S4 override policy + documented swap (A-C002-1/A-C006-4)");
function mock(map){ return { getAll: k => (k in map ? map[k] : null), keys: () => Object.keys(map) }; }
const before = JSON.stringify(C);
const swap = api.parseOverrides(C, mock({ titles: ["ship: docs-first.mp4|ship: tiny-fix.mp4"], stamp: ["MERGED"], cardMs: ["900"], accent: ["#ffd75e"], bg: ["#000000"] }).getAll, mock({ titles: ["ship: docs-first.mp4|ship: tiny-fix.mp4"], stamp: ["MERGED"], cardMs: ["900"], accent: ["#ffd75e"], bg: ["#000000"] }).keys);
ok(swap.any && swap.errs.length === 0 && !!swap.candidate, "documented swap accepted");
if (swap.candidate){ const sc = swap.candidate, stl = api.computeTimeline(sc);
  ok(sc.prs[0].title === "ship: docs-first.mp4" && sc.prs[1].title === "ship: tiny-fix.mp4", "swap titles take effect");
  ok(sc.stampText === "MERGED" && sc.stampColor === "#ffd75e" && sc.palette.bg === "#000000", "swap stamp/accent/bg take effect");
  ok(sc.cardDurationsMs.every(d=>d===900) && sc.loopMs === 4500, "swap cardMs -> uniform 900ms durations, loop 4500");
  ok(stl.counterSpans.every(s=>s>0), "swap counter spans positive");
  stl.stamps.forEach(s=>{ ok(s.hideEnd <= s.cardStart + 900 - sc.whipMs/2 + 0.001, "swap stamp completes before whip card " + s.cardIdx);
    ok(s.at >= stl.counterEnds[s.cardIdx] + sc.stampSettleGapMs - 0.001, "swap merged stamp onset at/after settle card " + s.cardIdx); });
  [[260,111],[380,260],[520,380],[800,520]].forEach(([v,f])=>{ const r = api.rollPositions(sc, v, f); ok(r.every(x=>Math.abs(x-Math.round(x))<1e-9), "swap-config settle integral at " + v); });
}
ok(JSON.stringify(C) === before, "parseOverrides never mutates the live CONFIG (atomic)");
[["empty value", { stamp: [""] }], ["duplicate parameter", { stamp: ["A","B"] }],
 ["excess titles", { titles: ["a|b|c|d|e|f"] }], ["non-integer cardMs", { cardMs: ["9.5"] }],
 ["invalid accent", { accent: ["#xyz"] }], ["overlong stamp", { stamp: ["ABCDEFGHIJKLM"] }],
 ["unknown parameter", { bogus: ["1"] }], ["unknown parameter beside known", { stamp: ["OK"], cache: ["7"] }],
].forEach(([name, map])=>{ const mm = mock(map); const r = api.parseOverrides(C, mm.getAll, mm.keys);
  ok(r.any && r.errs.length > 0 && !r.candidate, "override rejected observably: " + name + (name.includes("unknown") ? " (" + r.errs.join(";") + ")" : "")); });
{ const mm = mock({}); ok(api.parseOverrides(C, mm.getAll, mm.keys).any === false, "no params -> no override action"); }
}

if (want("S5")) {
section("S5 CONFIG consumption census (A-C006-2) + literal census (A-C008-3/A-C009-4)");
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
 ["stampSettleGapMs", c=>{ c.stampSettleGapMs = 250; }],
 ["arch.innerTopRatio", c=>{ c.arch.innerTopRatio = 0.6; }], ["arch.innerCurveExp", c=>{ c.arch.innerCurveExp = 1; }],
 ["arch.innerTopStart", c=>{ c.arch.innerTopStart = 0.45; }],
].forEach(([name, fn])=>{ const m = clone(C); fn(m); ok(signature(m) !== baseSig, "mutation effect: " + name); });
const hexes = new Set((restText.match(/#[0-9a-fA-F]{6}/g) || []));
ok([...hexes].every(h=> ["#0b0e11"].includes(h)), "no stray hex colors outside CONFIG (found: " + [...hexes].join(",") + ")");
["✓","✕","◐"].forEach(g=> ok(!restText.includes(g), "content glyph outside CONFIG absent: " + g));
[">Open<", ">Checks<", ">LGTM<"].forEach(t=> ok(!src.includes(t), "hard-coded content text absent: " + t));
const numLits = new Set((restText.replace(/\/\*[\s\S]*?\*\//g, "").match(/(?<![\w.])-?\d+(?:\.\d+)?/g) || []));
console.log("numeric literals outside CONFIG: " + [...numLits].sort().join(","));
const WHITELIST = new Set(["0","1","2","3","4","5","6","7","8","9","10","14","26","46","50","100","300","500","999","-1","-50","0.5","0.08","180","700","900"]);
const unlisted = [...numLits].filter(n=> !WHITELIST.has(n));
ok(unlisted.length === 0, "literal census: no unlisted literals outside CONFIG" + (unlisted.length ? " (unlisted: " + unlisted.join(",") + ")" : ""));
}

if (want("S6")) {
section("S6 self-start (A-C010-2) + startup validation of shipped CONFIG (C2)");
const scriptText = src.slice(src.indexOf("<script>") + 8, src.indexOf("</script>"));
function makeEl(){ const el = { children: [], style: { setProperty(){} }, className: "", textContent: "", _ih: "",
    appendChild(ch){ el.children.push(ch); return ch; },
    querySelectorAll(){ return []; }, querySelector(){ return makeEl(); } };
  Object.defineProperty(el, "innerHTML", { get(){ return el._ih; }, set(v){ el._ih = v; if (v === "") el.children = []; } });
  return el; }
function harness(search){
  const byId = {};
  const approvalsEl = makeEl();
  approvalsEl.querySelectorAll = function(){ return approvalsEl.children.map(d=> d.children[0]); };
  const documentStub = { getElementById(id){ if (id === "approvals") return approvalsEl; if (!byId[id]) byId[id] = makeEl(); return byId[id]; },
    createElement(){ return makeEl(); }, createDocumentFragment(){ return makeEl(); },
    createTextNode(t){ return { textContent: t }; }, documentElement: makeEl(),
    querySelector(){ return makeEl(); }, querySelectorAll(){ return []; } };
  const windowStub = { location: { search }, addEventListener(){} };
  let nowVal = 0; const queue = [];
  const perf = { now(){ return nowVal; } };
  const raf = cb => { queue.push(cb); return queue.length; };
  const load = source => new Function("window","document","performance","requestAnimationFrame","cancelAnimationFrame", source)(windowStub, documentStub, perf, raf, ()=>{});
  return { byId, approvalsEl, windowStub, queue, load,
    pump(limit){ let t = 0, frames = 0; const seen = [];
      while (queue.length && t <= limit){ const cb = queue.shift(); t += 16.7; nowVal = t; cb(t); frames++;
        seen.push(byId.prNum ? byId.prNum.textContent : ""); }
      return { frames, seen }; } };
}
{ const h = harness("");
  let threw = false; try { h.load(scriptText); } catch(e){ threw = true; console.log("startup threw: " + e.message); }
  ok(!threw, "valid file loads under its own startup path without throwing");
  ok(Array.isArray(h.windowStub.__T11_REJECTED__) && h.windowStub.__T11_REJECTED__.length === 0, "valid CONFIG produces an empty rejected record at startup");
  const r = h.pump(20500);
  ok(r.frames > 500, "self-start: piece plays under its own startup (" + r.frames + " frames pumped past the 10000ms loop)");
  ok(r.seen.includes("#1116"), "self-start: final card reached under own startup");
  ok(r.seen.lastIndexOf("#1111") > r.seen.indexOf("#1116"), "self-start: loop rollover reached (first card renders again after the final card)");
}
{ const edited = scriptText.replace("archCols: 36", "archCols: 2.5");
  ok(edited !== scriptText, "direct-edit fixture actually edits the shipped CONFIG");
  const h = harness(""); let threw = false;
  try { h.load(edited); } catch(e){ threw = true; }
  ok(!threw, "directly-edited invalid CONFIG does not throw uncaught at startup");
  const rec = h.windowStub.__T11_REJECTED__ || [];
  ok(rec.some(r=> r.at === "startup" && r.errs.length > 0), "directly-edited invalid CONFIG halts observably via the startup rejected record (" + JSON.stringify(rec).slice(0,120) + ")");
  ok(h.queue.length === 0, "halted startup schedules no animation frame (construction halted)");
}
{ const h = harness("?bogus=1"); let threw = false;
  try { h.load(scriptText); } catch(e){ threw = true; }
  ok(!threw, "unknown-parameter page load does not throw");
  const rec = h.windowStub.__T11_REJECTED__ || [];
  ok(rec.some(r=> r.at === "overrides" && r.errs.join(" ").includes("unknown parameter")), "unknown URL parameter rejected observably at startup, default still renders");
  ok(h.queue.length > 0, "override rejection leaves the valid default playing");
}
}

if (want("S7")) {
section("S7 arch inner curvature (C3) + crown + displayed-state fit (A-C006-3)");
function rowHalfWidth(y){ let max = 0; for (let x = 0; x < C.archCols; x++){ if (api.archCell(C, x, y).filled){ const nx = Math.abs((x - C.archCols/2) / (C.archCols/2)); if (nx > max) max = nx; } } return max; }
const crownHalf = rowHalfWidth(2), peakedness = 1 - crownHalf / C.arch.halfTop;
console.log("crown: row2 halfWidth " + crownHalf.toFixed(3) + " peakedness " + peakedness.toFixed(3));
ok(peakedness <= 0.30, "crown peakedness <= 0.30 unregressed");
function openingHalf(y){ let max = -1; for (let x = 0; x < C.archCols; x++){ const cell = api.archCell(C, x, y);
    const nx = (x - C.archCols/2) / (C.archCols/2), ny = y / C.archRows;
    const halfW = ny < C.arch.knee ? (C.arch.halfBase + (C.arch.halfTop - C.arch.halfBase) * Math.pow(ny / C.arch.knee, C.arch.crownExp)) : C.arch.halfTop;
    if (Math.abs(nx) < halfW && !cell.filled) max = Math.max(max, Math.abs(nx)); } return max; }
const openRows = []; for (let y = 0; y < C.archRows; y++){ const h = openingHalf(y); if (h >= 0) openRows.push([y, h]); }
console.log("opening rows: " + openRows.map(([y,h])=> y + ":" + h.toFixed(3)).join(" "));
const topOpen = openRows[0], baseOpen = openRows[openRows.length - 1];
ok(topOpen && baseOpen && topOpen[1] < baseOpen[1], "opening top rows narrower than base rows (semantic surface)");
ok(topOpen[1] / baseOpen[1] <= 0.6, "inner curvature ratio top/base <= 0.60 filed threshold (" + (topOpen[1]/baseOpen[1]).toFixed(3) + ")");
let monoNarrow = true; for (let i = 1; i < openRows.length; i++){ if (openRows[i][1] < openRows[i-1][1] - 1e-9) monoNarrow = false; }
ok(monoNarrow, "opening half-width narrows monotonically toward the top across the curve region");
ok(openRows.length >= 8, "curve spans multiple rows (" + openRows.length + " opening rows)");
{ // opening area: new curved profile vs the attempt-4 rectangle (constant legGap from innerTopStart down)
  let newCells = 0, rectCells = 0;
  for (let y = 0; y < C.archRows; y++) for (let x = 0; x < C.archCols; x++){
    const nx = (x - C.archCols/2) / (C.archCols/2), ny = y / C.archRows;
    const halfW = ny < C.arch.knee ? (C.arch.halfBase + (C.arch.halfTop - C.arch.halfBase) * Math.pow(ny / C.arch.knee, C.arch.crownExp)) : C.arch.halfTop;
    if (Math.abs(nx) < halfW && !api.archCell(C, x, y).filled) newCells++;
    if (ny > C.arch.innerTopStart && Math.abs(nx) < Math.min(C.arch.legGap, halfW)) rectCells++;
  }
  console.log("opening area: curved " + newCells + " cells vs rectangle " + rectCells + " cells (trade " + (rectCells - newCells) + ")");
  ok(newCells > 0 && newCells < rectCells, "inner curve removes opening area vs the rectangle (trade filed with arithmetic above)");
}
ok(C.arch.fontPx >= 6.4, "arch glyph size not regressed (>= 6.4px)");
const legRows = C.archRows - Math.floor(C.arch.innerTopStart * C.archRows);
console.log("opening height fraction " + (legRows / C.archRows).toFixed(3));
ok(Math.abs(legRows / C.archRows - 0.464) < 0.01, "opening height fraction holds (~0.464)");
{ const archH = C.archRows * C.arch.fontPx * C.arch.lineHeight;
  const panelSingle = 16.3 + 5 + 3 * 18.4 + 14.3 + 5 + 14;
  const panelWrapped = 16.3 + 5 + 2 * 18.4 + 33.2 + 14.3 + 5 + 14;
  const total = s => 8 + 16.3 + 6 + 17 + 6 + Math.max(archH, s) + 6 + 26 + 8;
  console.log("fit totals: single " + total(panelSingle).toFixed(1) + "px wrapped " + total(panelWrapped).toFixed(1) + "px arch block " + archH.toFixed(1) + "px");
  ok(total(panelSingle) <= 300 && total(panelWrapped) <= 300, "displayed totals fit 300px in single-line AND wrapped states");
  ok(C.type.checksPx >= 12 && C.type.pillPx >= 11 && C.stampFontPx >= 34, "modelled type floors hold (checks 12 / pill 11 / stamp 34)");
  const stampW = (C.stampText.length * C.stampFontPx * 0.62) + 2 * C.stamp.padXPx + 2 * C.stamp.borderPx;
  ok(stampW < 344, "stamp displayed width at scale 1 fits stage (" + stampW.toFixed(0) + "px)");
}
}

if (want("S8")) {
section("S8 purity");
const bad = ["http://", "https://", "<img", "<video", "<audio", "url(", "segment"];
const cfgStart2 = src.indexOf("const CONFIG = {"); const cfgEnd2 = src.indexOf("const DEFAULT_CONFIG_JSON");
const restText2 = src.slice(0, cfgStart2) + src.slice(cfgEnd2);
const hits = bad.filter(b=> src.includes(b));
[".mp4", ".png", ".jpg"].forEach(b=>{ if (restText2.includes(b)) hits.push(b + " (outside CONFIG)"); });
ok(hits.length === 0, "purity grep zero hits" + (hits.length ? ": " + hits.join(",") : ""));
ok(!src.includes("caption") && !src.includes("subtitle"), "no caption/subtitle layer");
}

console.log("\nRESULT: " + pass + " pass, " + fail + " fail");
if (fails.length) console.log("FAILURES: " + fails.join(" | "));
process.exit(fail ? 1 : 0);
