"use strict";
/* T11 attempt 6 own-check suite — node. Loads the recreation's pure block and asserts
   effect mappings, plan semantics, integral settle for ALL columns, unwrapped wrap
   continuity, startup composition + capacity (S9), overrides, census, arch family
   trace, rate cap, self-start (DOM stub). PIXEL-UNVERIFIED: source-bound only. */
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
const api = new Function(pure + "\nreturn { CONFIG, validateConfig, computeTimeline, digitsOf, rollPositions, archCell, stateAt, parseOverrides, REJECTED, stripLengthsFor: (typeof stripLengthsFor === 'function' ? stripLengthsFor : null) };")();
const C = api.CONFIG, TL = api.computeTimeline(C);
const clone = o => JSON.parse(JSON.stringify(o));
function mock(map){ return { getAll: k => (k in map ? map[k] : null), keys: () => Object.keys(map) }; }

if (want("S1")) {
section("S1 timeline + plan semantics + S4 arithmetic");
ok(C.cardDurationsMs.reduce((a,b)=>a+b,0) === C.loopMs && C.loopMs === 10000, "loop = sum(durations) = 10000");
ok(JSON.stringify(C.cardDurationsMs) === JSON.stringify([2800,1400,1800,2000,2000]), "duration vector [2800,1400,1800,2000,2000] held");
ok(JSON.stringify(TL.starts) === JSON.stringify([0,2800,4200,6000,8000]), "card starts [0,2800,4200,6000,8000]");
ok(JSON.stringify(TL.counterSpans) === JSON.stringify([1400,1100,1400,1270,1400]), "counter spans [1400,1100,1400,1270,1400]");
TL.counterSpans.forEach((s,i)=> ok(s >= 1000, "counter-span floor 1000ms card " + i + " (" + s + ")"));
TL.counterEnds.forEach((e,i)=>{ const margin = (TL.starts[i] + C.cardDurationsMs[i]) - e; const dwell = margin - C.whipMs/2;
  console.log("card " + i + " cardEndMargin " + margin + " preWhipDwell " + dwell);
  ok(margin >= 250, "card-end margin >=250ms card " + i + " (" + margin + ")"); });
ok(api.stateAt(C, TL, 2500).stampState === "held" && api.stateAt(C, TL, 2500).cardIdx === 0, "stamp HELD at 2500ms");
ok(api.stateAt(C, TL, 6500).stampState === "idle" && api.stateAt(C, TL, 6500).cardIdx === 3, "no stamp at 6500ms");
const s7500 = api.stateAt(C, TL, 7500);
ok(s7500.cardIdx === 3 && s7500.stampState === "held" && s7500.stampScale === 1, "stamp HELD at 7500ms");
const st3 = TL.stamps.find(s=>s.cardIdx===3);
ok(TL.counterEnds[3] <= 7270, "card 3 counter settles by the 7270ms deadline (" + TL.counterEnds[3] + ")");
ok(st3.at - TL.counterEnds[3] >= 100, "card 3 settle-to-stamp gap >= 100ms (" + (st3.at - TL.counterEnds[3]) + ")");
TL.stamps.forEach(s=>{ ok(s.at >= TL.counterEnds[s.cardIdx] + C.stampSettleGapMs - 0.001, "stamp onset >= settle + gap card " + s.cardIdx);
  ok(s.hideEnd <= s.cardStart + C.cardDurationsMs[s.cardIdx] - C.whipMs/2 + 0.001, "stamp hide at/before whip card " + s.cardIdx); });
[0,1500,2500,4321,6500,7500,9999].forEach(p=>{ ok(JSON.stringify(api.stateAt(C, TL, p)) === JSON.stringify(api.stateAt(C, TL, p)), "deterministic state at " + p); });
const wB = api.stateAt(C, TL, 9900), wA = api.stateAt(C, TL, 50);
ok(wB.whipping && wB.cardIdx === 4 && wA.whipping && wA.cardIdx === 0, "loop-boundary whip states hold");
}

if (want("S2")) {
section("S2 settle integrality (all columns) + unwrapped wrap continuity + displayed-digit probes");
function integralDigits(value, from, label){
  const r = api.rollPositions(C, value, from), d = api.digitsOf(C, Math.round(value));
  ok(r.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "strip positions integral at " + label + " -> " + r.map(v=>v.toFixed(2)).join(","));
  ok(r.every((v,i)=> ((Math.round(v) % C.digitBase) + C.digitBase) % C.digitBase === d[i]), "displayed digits match value at " + label);
}
C.prs.forEach((p,i)=> integralDigits(p.approvalsTo, p.approvalsFrom, "settle card " + i));
C.prs.forEach((p,i)=>{
  const st = api.stateAt(C, TL, TL.counterEnds[i]);
  ok(st.roll.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "settle checkpoint (stateAt) integral card " + i);
  const hold = api.stateAt(C, TL, TL.starts[i] + C.cardDurationsMs[i] - C.whipMs/2 - 10);
  ok(hold.roll.every(v=> Math.abs(v - Math.round(v)) < 1e-9), "post-settle hold integral card " + i);
  // per-column monotonicity + continuity, sampled at 5ms
  for (let col = 0; col < C.counterDigits; col++){
    let prev = null, mono = true, cont = true, maxStep = 0;
    const place = Math.pow(C.digitBase, C.counterDigits - 1 - col);
    for (let ph = TL.starts[i]; ph <= TL.counterEnds[i]; ph += 5){
      const pos = api.stateAt(C, TL, ph).roll[col];
      if (prev !== null){ if (pos < prev - 1e-9) mono = false; maxStep = Math.max(maxStep, Math.abs(pos - prev)); }
      prev = pos;
    }
    const dq = 5 * ((p.approvalsTo - p.approvalsFrom) / TL.counterSpans[i]) / place;
    if (maxStep > dq * (1 + 1.5 / C.rollCarryFrac) + 0.02) cont = false;
    ok(mono, "column " + col + " monotonic within card " + i);
    ok(cont, "column " + col + " continuous (no wrap snap) within card " + i + " maxStep " + maxStep.toFixed(3));
  }
  // carry-crossing probes: displayed digits before/at/after every crossing of 10 and 100
  [10, 100].forEach(mult=>{
    for (let v = Math.floor(p.approvalsFrom / mult) * mult + mult; v <= p.approvalsTo; v += mult){
      [-0.01, 0, 0.01].forEach(dv=>{
        const val = v + dv, r = api.rollPositions(C, val, p.approvalsFrom);
        const digs = api.digitsOf(C, Math.floor(val));
        ok(r.every((pos,ci)=> Math.floor(pos + 1e-9) % C.digitBase === digs[ci] || Math.abs(pos - Math.round(pos)) < 1e-9), "crossing probe card " + i + " value " + val.toFixed(2) + " col digits floor-match");
      });
      const rB = api.rollPositions(C, v - 0.01, p.approvalsFrom), rA = api.rollPositions(C, v + 0.01, p.approvalsFrom);
      ok(rA.every((pos,ci)=> pos >= rB[ci] - 1e-9), "crossing " + v + " card " + i + " no backward wrap in any column");
    }
  });
});
// whip midpoint + rollover swap classification: every swap is a legitimate value change (ii); no same-digit rebase mechanism exists
for (let i = 1; i <= C.prs.length; i++){
  const at = i < C.prs.length ? TL.starts[i] : C.loopMs;
  const before = api.stateAt(C, TL, (at - C.whipMs/2 + C.loopMs - 1) % C.loopMs), after = api.stateAt(C, TL, (at + C.whipMs/2 + 1) % C.loopMs);
  ok(before.cardIdx !== after.cardIdx || i === C.prs.length, "swap at " + at + " changes card (classified: legitimate value change)");
}
ok(!src.includes("onesStripReps"), "onesStripReps retired: absent from source (CONFIG, validator, builder)");
const lens = api.stripLengthsFor(C);
console.log("derived strip lengths [hundreds,tens,ones]: " + JSON.stringify(lens));
ok(JSON.stringify(lens) === JSON.stringify([10,32,282]), "strip lengths derived = [10,32,282] (max final index + glyph + viewport)");
C.prs.forEach((p,i)=>{ const r = api.rollPositions(C, p.approvalsTo, p.approvalsFrom);
  ok(r.every((pos,ci)=> pos + 1 < lens[ci] + 0.001 && pos < lens[ci]), "final strip position inside derived strip card " + i); });
{ const m = clone(C); m.prs[0].approvalsTo = 990; const l2 = api.stripLengthsFor(m);
  ok(l2[2] > lens[2], "strip derivation grows with travel (mutation effect: approvalsTo 990)"); }
}

if (want("S3")) {
section("S3 validation layer 2 (dimensions / limits / coercion / sparse / unknown)");
ok(api.validateConfig(clone(C)).length === 0, "default CONFIG validates clean");
const badCases = [
  ["archCols fraction", c=>{ c.archCols = 36.5; }], ["archCols string", c=>{ c.archCols = "36"; }],
  ["archRows Infinity", c=>{ c.archRows = Infinity; }],
  ["overrideLimits.maxTitleLen string", c=>{ c.overrideLimits.maxTitleLen = "60"; }],
  ["overrideLimits.maxTitleLen 0", c=>{ c.overrideLimits.maxTitleLen = 0; }],
  ["overrideLimits.maxStampLen fraction", c=>{ c.overrideLimits.maxStampLen = 2.5; }],
  ["stamp.leftPct string", c=>{ c.stamp.leftPct = "50"; }], ["stamp.leftPct null", c=>{ c.stamp.leftPct = null; }],
  ["stamp.borderPx Infinity", c=>{ c.stamp.borderPx = Infinity; }],
  ["digitBase 1", c=>{ c.digitBase = 1; }], ["darkMod 0", c=>{ c.arch.darkMod = 0; }],
  ["zero duration", c=>{ c.cardDurationsMs[0] = 0; }], ["durations sum mismatch", c=>{ c.cardDurationsMs[1] = 1500; }],
  ["stampSettleGapMs negative", c=>{ c.stampSettleGapMs = -1; }],
  ["arch apexHeightFrac 0", c=>{ c.arch.apexHeightFrac = 0; }], ["arch apexHeightFrac 1.2", c=>{ c.arch.apexHeightFrac = 1.2; }],
  ["arch apexHeightFrac string", c=>{ c.arch.apexHeightFrac = "0.78"; }],
  ["counterDigits 0", c=>{ c.counterDigits = 0; }], ["counterDigits 7", c=>{ c.counterDigits = 7; }],
];
badCases.forEach(([name, fn])=>{ const m = clone(C); fn(m); let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0, "layer-2 rejected: " + name); });
[["prs hole", c=>{ delete c.prs[2]; }], ["cardDurationsMs hole", c=>{ delete c.cardDurationsMs[1]; }],
 ["checksCycle row hole", c=>{ delete c.checksCycle[1]; }], ["statusPills hole", c=>{ delete c.statusPills[3]; }],
 ["reviewersPerCard hole", c=>{ delete c.reviewersPerCard[2]; }],
].forEach(([name, fn])=>{ const m = clone(C); fn(m); let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0 && errs.join(" ").includes("sparse"), "sparse rejected by named index: " + name); });
["arch","type","figure","stage","stamp","palette","pillTones","checkStates","mergePill","overrideLimits","labels","marks"].forEach(k=>{
  const m = clone(C); delete m[k]; let threw = false, errs = [];
  try { errs = api.validateConfig(m); } catch(e){ threw = true; }
  ok(!threw && errs.length > 0, "missing container rejected without throw: " + k); });
{ const m = clone(C); m.slamMs = 1900; ok(api.validateConfig(m).length > 0, "later-card stamp crossing rejects observably"); }
}

if (want("S4")) {
section("S4 override policy + documented swap + probes re-run on the duration override");
const before = JSON.stringify(C);
const mm = mock({ titles: ["ship: docs-first.mp4|ship: tiny-fix.mp4"], stamp: ["MERGED"], cardMs: ["900"], accent: ["#ffd75e"], bg: ["#000000"] });
const swap = api.parseOverrides(C, mm.getAll, mm.keys);
ok(swap.any && swap.errs.length === 0 && !!swap.candidate, "documented swap accepted");
if (swap.candidate){ const sc = swap.candidate, stl = api.computeTimeline(sc);
  ok(sc.prs[0].title === "ship: docs-first.mp4" && sc.prs[1].title === "ship: tiny-fix.mp4", "swap titles take effect (effect mapping)");
  ok(sc.stampText === "MERGED" && sc.stampColor === "#ffd75e" && sc.palette.green === "#ffd75e" && sc.palette.bg === "#000000", "swap stamp/accent/bg take effect (effect mapping)");
  ok(sc.cardDurationsMs.every(d=>d===900) && sc.loopMs === 4500, "swap cardMs -> uniform 900ms, loop 4500 (effect mapping)");
  sc.prs.forEach((p,i)=>{ const r = api.rollPositions(sc, p.approvalsTo, p.approvalsFrom);
    ok(r.every(x=>Math.abs(x-Math.round(x))<1e-9), "duration-override settle integral card " + i);
    let mono = true, prev = null;
    for (let ph = stl.starts[i]; ph <= stl.counterEnds[i]; ph += 5){ const pos = api.stateAt(sc, stl, ph).roll[1]; if (prev !== null && pos < prev - 1e-9) mono = false; prev = pos; }
    ok(mono, "duration-override tens monotonic card " + i); });
  stl.stamps.forEach(s=> ok(s.at >= stl.counterEnds[s.cardIdx] + sc.stampSettleGapMs - 0.001, "duration-override stamp after settle card " + s.cardIdx));
}
ok(JSON.stringify(C) === before, "parseOverrides never mutates the live CONFIG (atomic)");
[["empty value", { stamp: [""] }], ["duplicate parameter", { stamp: ["A","B"] }],
 ["excess titles", { titles: ["a|b|c|d|e|f"] }], ["non-integer cardMs", { cardMs: ["9.5"] }],
 ["invalid accent", { accent: ["#xyz"] }], ["overlong stamp", { stamp: ["ABCDEFGHIJKLM"] }],
 ["unknown parameter", { bogus: ["1"] }], ["unknown parameter beside known", { stamp: ["OK"], cache: ["7"] }],
].forEach(([name, map])=>{ const m2 = mock(map); const r = api.parseOverrides(C, m2.getAll, m2.keys);
  ok(r.any && r.errs.length > 0 && !r.candidate, "override rejected observably: " + name); });
ok(api.parseOverrides(C, mock({}).getAll, mock({}).keys).any === false, "no params -> no override action");
}

if (want("S5")) {
section("S5 CONFIG consumption census + literal census");
const cfgStart = src.indexOf("const CONFIG = {");
const cfgEnd = src.indexOf("const DEFAULT_CONFIG_JSON");
const cfgText = src.slice(cfgStart, cfgEnd), restText = src.slice(0, cfgStart) + src.slice(cfgEnd);
function leaves(o, prefix, out){ if (Array.isArray(o)){ o.forEach((v,i)=> leaves(v, prefix + "[" + i + "]", out)); }
  else if (o && typeof o === "object"){ Object.keys(o).forEach(k=> leaves(o[k], prefix ? prefix + "." + k : k, out)); }
  else out.push(prefix); return out; }
const leafList = leaves(C, "", []);
let unconsumed = [];
leafList.forEach(p=>{ const key = p.replace(/\[\d+\]/g, "").split(".").pop();
  if ((restText.split(key).length - 1) < 1) unconsumed.push(p); });
console.log("CONFIG leaves: " + leafList.length);
ok(unconsumed.length === 0, "every CONFIG leaf resolves to an application site (unconsumed: " + unconsumed.join(",") + ")");
ok(!leafList.some(p=> p.includes("onesStripReps")), "onesStripReps absent from CONFIG leaf census (retired, not bound-but-unconsumed)");
ok(!leafList.some(p=> p.includes("innerTopStart") || p.includes("innerTopRatio") || p.includes("innerCurveExp")), "retired inner-profile keys absent from CONFIG leaf census");
ok(leafList.some(p=> p === "arch.apexHeightFrac"), "arch.apexHeightFrac present in CONFIG leaf census");
function signature(cfg){ const tl = api.computeTimeline(cfg); let s = JSON.stringify(tl.stamps) + "|" + JSON.stringify(tl.counterSpans);
  for (let ph = 0; ph < cfg.loopMs; ph += 137){ const st = api.stateAt(cfg, tl, ph); s += "|" + st.cardIdx + "," + st.approvals + "," + st.roll.map(v=>v.toFixed(2)).join("/") + "," + st.stampState + "," + (1 + st.streak / cfg.whipStreakDivisor).toFixed(4); }
  for (let y = 0; y < cfg.archRows; y += 2) for (let x = 0; x < cfg.archCols; x += 2){ s += api.archCell(cfg, x, y).glyph; }
  return s; }
const baseSig = signature(C);
[["stampOffsetFrac", c=>{ c.stampOffsetFrac = 0.5; }], ["cardDurationsMs[0]", c=>{ c.cardDurationsMs[0] = 3200; c.loopMs = 10200; }],
 ["rollCarryFrac", c=>{ c.rollCarryFrac = 0.3; }], ["arch.crownExp", c=>{ c.arch.crownExp = 1.0; }],
 ["arch.halfBase", c=>{ c.arch.halfBase = 0.3; }], ["arch.darkMulX", c=>{ c.arch.darkMulX = 8; }],
 ["arch.apexHeightFrac", c=>{ c.arch.apexHeightFrac = 0.6; }], ["arch.legGap", c=>{ c.arch.legGap = 0.2; }],
 ["prs merged flag", c=>{ c.prs[1].merged = true; }], ["whipStreakDivisor", c=>{ c.whipStreakDivisor = 300; }],
 ["approvals target (strip derivation)", c=>{ c.prs[0].approvalsTo = 300; }], ["stampSettleGapMs", c=>{ c.stampSettleGapMs = 250; }],
].forEach(([name, fn])=>{ const m = clone(C); fn(m); ok(signature(m) !== baseSig, "mutation effect: " + name); });
const hexes = new Set((restText.match(/#[0-9a-fA-F]{6}/g) || []));
ok([...hexes].every(h=> ["#0b0e11"].includes(h)), "no stray hex colors outside CONFIG (found: " + [...hexes].join(",") + ")");
["✓","✕","◐"].forEach(g=> ok(!restText.includes(g), "content glyph outside CONFIG absent: " + g));
const numLits = new Set((restText.replace(/\/\*[\s\S]*?\*\//g, "").match(/(?<![\w.])-?\d+(?:\.\d+)?/g) || []));
console.log("numeric literals outside CONFIG: " + [...numLits].sort().join(","));
const WHITELIST = new Set(["0","1","2","3","4","5","6","7","8","9","10","14","26","46","50","100","300","500","999","-1","-50","0.5","0.95","0.08","180","700","900"]);
const unlisted = [...numLits].filter(n=> !WHITELIST.has(n));
ok(unlisted.length === 0, "literal census: no unlisted literals outside CONFIG" + (unlisted.length ? " (unlisted: " + unlisted.join(",") + ")" : ""));
}

if (want("S9")) {
section("S9 startup composition + counter capacity (composed cases, both routes)");
ok(src.indexOf("const STARTUP_ERRS = validateConfig(CONFIG);") >= 0 && src.indexOf("const STARTUP_ERRS = validateConfig(CONFIG);") < src.indexOf("applyOverrides"), "startup validates the shipped CONFIG before override parsing (source order)");
// capacity — startup/direct-edit route, both endpoints, boundary 999 pass / 1000 reject (bound = 10^3)
{ const m = clone(C); m.prs[3].approvalsTo = 999; ok(api.validateConfig(m).length === 0, "capacity: approvalsTo 999 passes"); }
{ const m = clone(C); m.prs[3].approvalsTo = 1000; const e = api.validateConfig(m); ok(e.some(x=>x.includes("counter capacity")), "capacity: approvalsTo 1000 rejects (" + e.join(";") + ")"); }
{ const m = clone(C); m.prs[0].approvalsFrom = 999; m.prs[0].approvalsTo = 999; ok(api.validateConfig(m).length === 0, "capacity: approvalsFrom 999 passes"); }
{ const m = clone(C); m.prs[0].approvalsFrom = 1000; m.prs[0].approvalsTo = 1000; const e = api.validateConfig(m); ok(e.some(x=>x.includes("counter capacity")), "capacity: approvalsFrom 1000 rejects"); }
{ const m = clone(C); m.digitBase = 8; m.prs.forEach(p=>{ p.approvalsFrom = 0; p.approvalsTo = 100; }); m.prs[0].approvalsTo = 512;
  ok(api.validateConfig(m).some(x=>x.includes("counter capacity")), "capacity bound computed from candidate digitBase/counterDigits (8^3=512 rejects)"); }
// capacity — candidate-validation seam route: inject into a candidate, assert observable rejection + effective config unchanged
{ const mm2 = mock({ stamp: ["MERGED"] }); const r = api.parseOverrides(C, mm2.getAll, mm2.keys);
  ok(!!r.candidate, "seam fixture: valid candidate constructed");
  const effBefore = JSON.stringify(C);
  const cand = r.candidate; cand.prs[1].approvalsTo = 1000;
  ok(api.validateConfig(cand).some(x=>x.includes("counter capacity")), "seam: capacity-invalid candidate (approvalsTo) rejected at candidate validation");
  const cand2 = r.candidate; cand2.prs[1].approvalsFrom = 1000; cand2.prs[1].approvalsTo = 1000;
  ok(api.validateConfig(cand2).some(x=>x.includes("counter capacity")), "seam: capacity-invalid candidate (approvalsFrom) rejected at candidate validation");
  ok(JSON.stringify(C) === effBefore, "seam: effective configuration unchanged after candidate rejections (atomic non-adoption)"); }
// composition — malformed base x override present, both named pairs, parser exercised by DIRECT invocation (never claimed through startup)
{ const bad = clone(C); bad.palette = null; let threw = false, r = null;
  try { const m3 = mock({ accent: ["#ffd75e"] }); r = api.parseOverrides(bad, m3.getAll, m3.keys); } catch(e){ threw = true; }
  ok(!threw && r && r.errs.length > 0 && !r.candidate, "composition direct: palette null x accent -> observable rejection, no throw"); }
{ const bad = clone(C); bad.overrideLimits = null; let threw = false, r = null;
  try { const m3 = mock({ titles: ["a|b"] }); r = api.parseOverrides(bad, m3.getAll, m3.keys); } catch(e){ threw = true; }
  ok(!threw && r && r.errs.length > 0 && !r.candidate, "composition direct: overrideLimits null x titles -> observable rejection, no throw"); }
// generative composition dimension: base-validity x override-presence x field
[["palette", { accent: ["#ffd75e"] }], ["palette", { bg: ["#000000"] }], ["overrideLimits", { stamp: ["X"] }], ["overrideLimits", { cardMs: ["900"] }]].forEach(([field, map])=>{
  const bad = clone(C); bad[field] = null; let threw = false, r = null;
  try { const m3 = mock(map); r = api.parseOverrides(bad, m3.getAll, m3.keys); } catch(e){ threw = true; }
  ok(!threw && r && r.errs.length > 0, "composition generative: " + field + " null x " + Object.keys(map)[0] + " -> rejection, no throw"); });
}

if (want("S6")) {
section("S6 self-start + startup composition at the file's own startup path (DOM stub)");
const scriptText = src.slice(src.indexOf("<script>") + 8, src.indexOf("</script>"));
function makeEl(){ const el = { children: [], style: { setProperty(){} }, className: "", textContent: "", _ih: "",
    appendChild(ch){ el.children.push(ch); return ch; }, querySelectorAll(){ return []; }, querySelector(){ return makeEl(); } };
  Object.defineProperty(el, "innerHTML", { get(){ return el._ih; }, set(v){ el._ih = v; if (v === "") el.children = []; } });
  return el; }
function harness(search){
  const byId = {}; const approvalsEl = makeEl();
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
  ok(Array.isArray(h.windowStub.__T11_REJECTED__) && h.windowStub.__T11_REJECTED__.length === 0, "valid CONFIG: empty rejected record at startup");
  const stripCounts = h.approvalsEl.children.map(d=> d.children[0].children.length);
  console.log("DOM strip glyph counts: " + JSON.stringify(stripCounts));
  ok(JSON.stringify(stripCounts) === JSON.stringify(api.stripLengthsFor ? api.stripLengthsFor(C) : [20,20,290]), "DOM strips built at the stage's strip lengths");
  const r = h.pump(20500);
  ok(r.frames > 500, "self-start: plays under its own startup (" + r.frames + " frames past the loop)");
  ok(r.seen.includes("#1116"), "self-start: final card reached");
  ok(r.seen.lastIndexOf("#1111") > r.seen.indexOf("#1116"), "self-start: loop rollover reached");
}
{ const edited = scriptText.replace("archCols: 36", "archCols: 2.5");
  const h = harness(""); let threw = false; try { h.load(edited); } catch(e){ threw = true; }
  ok(!threw, "directly-edited invalid CONFIG does not throw at startup");
  ok((h.windowStub.__T11_REJECTED__ || []).some(r=> r.at === "startup" && r.errs.length > 0), "invalid CONFIG halts observably via startup record");
  ok(h.queue.length === 0, "halted startup schedules no animation frame");
}
{ const edited = scriptText.replace('palette: { bg:"#0b0e11"', 'palette: null, paletteOff: { bg:"#0b0e11"');
  ok(edited !== scriptText, "composition fixture (palette null) actually edits the source");
  const h = harness("?accent=%23ffd75e"); let threw = false; try { h.load(edited); } catch(e){ threw = true; console.log("composition load threw: " + e.message); }
  ok(!threw, "composition at startup: palette null x ?accent does not throw");
  const rec = h.windowStub.__T11_REJECTED__ || [];
  ok(rec.some(r=> r.at === "startup"), "composition at startup: halt recorded BEFORE parser entry (startup entry, no overrides entry) (" + JSON.stringify(rec).slice(0,140) + ")");
  ok(!rec.some(r=> r.at === "overrides"), "composition at startup: parser never entered on a malformed base");
  ok(h.queue.length === 0, "composition at startup: construction halted, no frames scheduled");
}
{ const edited = scriptText.replace("overrideLimits: { maxTitleLen: 60, maxStampLen: 12 }", "overrideLimits: null");
  ok(edited !== scriptText, "composition fixture (overrideLimits null) actually edits the source");
  const h = harness("?titles=a%7Cb"); let threw = false; try { h.load(edited); } catch(e){ threw = true; }
  ok(!threw, "composition at startup: overrideLimits null x ?titles does not throw");
  ok((h.windowStub.__T11_REJECTED__ || []).some(r=> r.at === "startup"), "composition at startup: overrideLimits-null halt recorded at startup");
  ok(h.queue.length === 0, "composition at startup: halted, no frames");
}
{ const edited = scriptText.replace("approvalsFrom: 520, approvalsTo: 800", "approvalsFrom: 520, approvalsTo: 1000");
  ok(edited !== scriptText, "capacity fixture actually edits the source");
  const h = harness(""); let threw = false; try { h.load(edited); } catch(e){ threw = true; }
  ok(!threw, "capacity at startup: approvalsTo 1000 does not throw");
  const rec = h.windowStub.__T11_REJECTED__ || [];
  ok(rec.some(r=> r.at === "startup" && r.errs.join(" ").includes("counter capacity")), "capacity at startup: observable halt naming counter capacity");
  ok(h.queue.length === 0, "capacity at startup: halted, no frames");
}
{ const h = harness("?bogus=1"); let threw = false; try { h.load(scriptText); } catch(e){ threw = true; }
  ok(!threw, "unknown-parameter load does not throw");
  ok((h.windowStub.__T11_REJECTED__ || []).some(r=> r.at === "overrides" && r.errs.join(" ").includes("unknown parameter")), "unknown parameter rejected observably, default renders");
  ok(h.queue.length > 0, "override rejection leaves the valid default playing");
}
}

if (want("S7")) {
section("S7 arch pointed-apex family trace + crown + fit");
function rowHalfWidth(y){ let max = 0; for (let x = 0; x < C.archCols; x++){ if (api.archCell(C, x, y).filled){ const nx = Math.abs((x - C.archCols/2) / (C.archCols/2)); if (nx > max) max = nx; } } return max; }
const peakedness = 1 - rowHalfWidth(2) / C.arch.halfTop;
console.log("crown peakedness " + peakedness.toFixed(3));
ok(peakedness <= 0.30, "crown peakedness <= 0.30 non-regression bound");
function openingHalf(y){ let max = -1; for (let x = 0; x < C.archCols; x++){ const cell = api.archCell(C, x, y);
    const nx = (x - C.archCols/2) / (C.archCols/2), ny = y / C.archRows;
    const halfW = ny < C.arch.knee ? (C.arch.halfBase + (C.arch.halfTop - C.arch.halfBase) * Math.pow(ny / C.arch.knee, C.arch.crownExp)) : C.arch.halfTop;
    if (Math.abs(nx) < halfW && !cell.filled) max = Math.max(max, Math.abs(nx)); } return max; }
const openRows = []; for (let y = 0; y < C.archRows; y++){ const h = openingHalf(y); if (h >= 0) openRows.push([y, h]); }
console.log("opening rows: " + openRows.map(([y,h])=> y + ":" + h.toFixed(3)).join(" "));
ok(C.arch.apexHeightFrac >= 0.75 && C.arch.apexHeightFrac <= 0.80, "apex height fraction in its CONFIG band [0.75,0.80] (" + C.arch.apexHeightFrac + ")");
const apexFracMeasured = openRows.length ? (C.archRows - openRows[0][0]) / C.archRows : 0;
console.log("measured opening height fraction " + apexFracMeasured.toFixed(3));
ok(apexFracMeasured >= 0.70 && apexFracMeasured <= 0.85, "measured opening reaches high into the crown (first opening row " + (openRows.length ? openRows[0][0] : "none") + ")");
let mono = true; for (let i = 1; i < openRows.length; i++){ if (openRows[i][1] < openRows[i-1][1] - 1e-9) mono = false; }
ok(mono, "opening boundary monotonic (two-arc widening toward the base)");
const baseOpen = openRows[openRows.length - 1];
ok(Math.abs(baseOpen[1] - C.arch.legGap) <= 0.06, "opening base half-width at the configured leg gap (" + baseOpen[1].toFixed(3) + " vs " + C.arch.legGap + ")");
ok(openRows[0][1] < 0.10, "opening begins at a point (apex row half-width < 0.10, not a flat top)");
{ let cells = 0; for (let y = 0; y < C.archRows; y++) for (let x = 0; x < C.archCols; x++){ const nx = (x - C.archCols/2) / (C.archCols/2), ny = y / C.archRows;
    const halfW = ny < C.arch.knee ? (C.arch.halfBase + (C.arch.halfTop - C.arch.halfBase) * Math.pow(ny / C.arch.knee, C.arch.crownExp)) : C.arch.halfTop;
    if (Math.abs(nx) < halfW && !api.archCell(C, x, y).filled) cells++; }
  console.log("opening area: " + cells + " cells");
  ok(cells > 40, "opening area substantial (" + cells + " cells)"); }
{ const archH = C.archRows * C.arch.fontPx * C.arch.lineHeight;
  const panelSingle = 16.3 + 5 + 3 * 18.4 + 14.3 + 5 + 14;
  const panelWrapped = 16.3 + 5 + 2 * 18.4 + 33.2 + 14.3 + 5 + 14;
  const total = s => 8 + 16.3 + 6 + 17 + 6 + Math.max(archH, s) + 6 + 26 + 8;
  ok(total(panelSingle) <= 300 && total(panelWrapped) <= 300, "displayed totals fit 300px in single-line AND wrapped states (" + total(panelSingle).toFixed(1) + "/" + total(panelWrapped).toFixed(1) + ")");
  ok(C.type.checksPx >= 12 && C.type.pillPx >= 11 && C.stampFontPx >= 34, "modelled type floors hold");
}
}

if (want("S10")) {
section("S10 roll-speed rate cap (bound cap from the filed ladder)");
const BOUND = 280 / 1.27;
console.log("bound cap " + BOUND.toFixed(2) + " digits/s");
C.prs.forEach((p,i)=>{ const d = p.approvalsTo - p.approvalsFrom, rate = d / TL.counterSpans[i] * 1000;
  console.log("card " + i + " rate " + rate.toFixed(2));
  ok(rate <= BOUND + 1e-6, "ones rate <= bound cap card " + i + " (" + rate.toFixed(2) + ")"); });
ok(Math.abs((280 / TL.counterSpans[3] * 1000) - BOUND) < 0.01, "card 3 rate at the bound cap");
}

if (want("S8")) {
section("S8 purity");
const cfgStart2 = src.indexOf("const CONFIG = {"); const cfgEnd2 = src.indexOf("const DEFAULT_CONFIG_JSON");
const restText2 = src.slice(0, cfgStart2) + src.slice(cfgEnd2);
const hits = ["http://", "https://", "<img", "<video", "<audio", "url(", "segment"].filter(b=> src.includes(b));
[".mp4", ".png", ".jpg"].forEach(b=>{ if (restText2.includes(b)) hits.push(b + " (outside CONFIG)"); });
ok(hits.length === 0, "purity grep zero hits" + (hits.length ? ": " + hits.join(",") : ""));
ok(!src.includes("caption") && !src.includes("subtitle"), "no caption/subtitle layer");
}

console.log("\nRESULT: " + pass + " pass, " + fail + " fail");
if (fails.length) console.log("FAILURES: " + fails.join(" | "));
process.exit(fail ? 1 : 0);
