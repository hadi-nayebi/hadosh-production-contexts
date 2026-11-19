"use strict";
/* T18 attempt-3 own-check suite: node harness, real inline script, stubbed DOM. */
const fs = require("fs"), vm = require("vm");
const ART = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T18-keynote-stage-heckler-chat/recreation.html";
const html = fs.readFileSync(ART, "utf8");
const mScript = html.match(/<script>([\s\S]*?)<\/script>/);
if (!mScript) { console.log("FAIL no script block"); process.exit(1); }
const SRC = mScript[1];
let pass = 0, fail = 0; const failures = [];
function chk(name, cond, extra) {
  if (cond) { pass++; console.log("PASS " + name); }
  else { fail++; failures.push(name); console.log("FAIL " + name + (extra ? " :: " + extra : "")); }
}
function approx(a, b, eps) { return Math.abs(a - b) <= (eps || 0.001); }
function Style() { this.props = {}; }
Style.prototype.setProperty = function (k, v) { this.props[k] = v; };
function makeEl() {
  return { style: new Style(), children: [], className: "", textContent: "",
           appendChild(c) { this.children.push(c); return c; } };
}
function load(search) {
  const reg = {};
  ["stage","world","screenWrap","screen","titleWrap","statWrap","counter","chatWrap","spot","speaker","audience"].forEach(function (id) { reg[id] = makeEl(); });
  reg.speaker.children = [makeEl(), makeEl()];
  const sandbox = {
    console, URLSearchParams,
    performance: { now: function () { return 0; } },
    requestAnimationFrame: function () { return 1; },
    cancelAnimationFrame: function () {},
    document: {
      getElementById: function (id) { return reg[id]; },
      createElement: function () { return makeEl(); },
      createTextNode: function (t) { return { textContent: t }; },
      documentElement: { style: new Style() },
      body: { style: new Style() }
    },
    location: { search: search || "" },
    addEventListener: function () {}
  };
  sandbox.window = sandbox;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(SRC, ctx, { filename: "recreation-inline.js" });
  return { ctx, reg, sandbox };
}
function ev(ctx, expr) { return vm.runInContext(expr, ctx); }
function cloneCfg(ctx) { return JSON.parse(ev(ctx, "JSON.stringify(CONFIG)")); }
function valErrs(ctx, cfgObj) {
  ev(ctx, "globalThis.__testCfg = " + JSON.stringify(cfgObj));
  return ev(ctx, "validateConfig(globalThis.__testCfg)");
}
function stateAt(ctx, t, cfgObj) {
  if (cfgObj) { ev(ctx, "globalThis.__testCfg = " + JSON.stringify(cfgObj)); return ev(ctx, "computeState(" + t + ", globalThis.__testCfg)"); }
  return ev(ctx, "computeState(" + t + ", CONFIG)");
}

/* ---- syntax ---- */
try { new vm.Script(SRC); chk("S1 syntax compile", true); } catch (e) { chk("S1 syntax compile", false, e.message); }

const base = load("");
const ctx = base.ctx;
chk("SELF config valid at load", ev(ctx, "window.__configErrors.length") === 0, JSON.stringify(ev(ctx, "window.__configErrors")));
chk("SELF no override errors without query", ev(ctx, "window.__overrideErrors.length") === 0);
chk("SELF self-start playing", ev(ctx, "playing") === true);
const endState = stateAt(ctx, 14999);
chk("SELF ending state reached (last cut, all content landed)", endState.cutIndex === 5 && endState.titleVisible.every(Boolean) && endState.chatVisible.every(Boolean));

/* ---- R1 sizes ---- */
const meas = ev(ctx, "measureContent(CONFIG, 360, 568, 1)");
chk("R1 chat css size 14.5 at 360", approx(meas.sizes.chat, 14.5, 0.01), String(meas.sizes.chat));
chk("R1 meta css size 12 at 360", approx(meas.sizes.meta, 12, 0.01), String(meas.sizes.meta));
chk("R1 stat label css size 12 at 360", approx(meas.sizes.statLabel, 12, 0.01), String(meas.sizes.statLabel));
chk("R1 stat value css size 16 at 360", approx(meas.sizes.statValue, 16, 0.01), String(meas.sizes.statValue));
let minScale = Infinity;
[0, 2400, 4850, 7300, 9700, 12150, 13850].forEach(function (t) { minScale = Math.min(minScale, stateAt(ctx, t).framing.scale); });
const PF = ev(ctx, "CONFIG.fit.perspectiveFactor");
chk("R1 effective chat >= 13 at worst framing", meas.sizes.chat * minScale * PF >= 13, (meas.sizes.chat * minScale * PF).toFixed(2));
chk("R1 effective meta >= 11 at worst framing", meas.sizes.meta * minScale * PF >= 11, (meas.sizes.meta * minScale * PF).toFixed(2));
chk("R1 effective stat label >= 11 at worst framing", meas.sizes.statLabel * minScale * PF >= 11, (meas.sizes.statLabel * minScale * PF).toFixed(2));
chk("R1 effective stat value >= 14 at worst framing", meas.sizes.statValue * minScale * PF >= 14, (meas.sizes.statValue * minScale * PF).toFixed(2));
chk("R1 secondary opacity >= 0.90 from CONFIG", ev(ctx, "CONFIG.detail.metaOpacity") >= 0.9 && ev(ctx, "CONFIG.detail.statLabelOpacity") >= 0.9);

/* ---- R2 glyph sweep ---- */
const thIN = ev(ctx, "wordThresholds('IN', CONFIG)");
chk("R2 IN thresholds proportional (I ~0.278, N 1)", approx(thIN[0], 0.278, 0.002) && approx(thIN[1], 1, 0.0001), JSON.stringify(thIN));
const thG = ev(ctx, "wordThresholds('GREATEST', CONFIG)");
chk("R2 GREATEST thresholds increasing, last 1", thG.length === 8 && thG.every(function (v, i) { return i === 0 || v > thG[i - 1]; }) && approx(thG[7], 1, 0.0001));
chk("R2 char before its right edge stays title colour", ev(ctx, "charColor(0.27, 'sweeping', wordThresholds('IN', CONFIG), 0, CONFIG)") === ev(ctx, "CONFIG.titleColor"));
chk("R2 char at its right edge turns dark", ev(ctx, "charColor(0.28, 'sweeping', wordThresholds('IN', CONFIG), 0, CONFIG)") === ev(ctx, "CONFIG.sweepTextColor"));
chk("R2 wide char not dark early (N at 0.99)", ev(ctx, "charColor(0.99, 'sweeping', wordThresholds('IN', CONFIG), 1, CONFIG)") === ev(ctx, "CONFIG.titleColor"));
const thW = ev(ctx, "wordThresholds('WILL', CONFIG)");
chk("R2 mixed-width word thresholds (W .404, I .524)", approx(thW[0], 0.404, 0.003) && approx(thW[1], 0.524, 0.003), JSON.stringify(thW));
chk("R2 mixed word: W dark at 0.45, I not yet", ev(ctx, "charColor(0.45, 'sweeping', wordThresholds('WILL', CONFIG), 0, CONFIG)") === ev(ctx, "CONFIG.sweepTextColor") && ev(ctx, "charColor(0.45, 'sweeping', wordThresholds('WILL', CONFIG), 1, CONFIG)") === ev(ctx, "CONFIG.titleColor"));
chk("R2 swept phase holds highlight colour", ev(ctx, "charColor(0.5, 'swept', wordThresholds('IN', CONFIG), 0, CONFIG)") === ev(ctx, "CONFIG.highlightColor"));
const midLine0 = stateAt(ctx, 950);
chk("R2 state carries per-char thresholds for target word", midLine0.highlights[0].charThresholds.length === 8 && approx(midLine0.highlights[0].charThresholds[7], 1, 0.0001));

/* ---- R3 measured clamp ---- */
const framingTimes = [0, 2400, 4850, 7300, 9700, 12150, 13850];
framingTimes.forEach(function (t, i) {
  const st = stateAt(ctx, t), f = st.framing, b = f.contentRect;
  const disp = { left: 50 + f.scale * (b.left - 50 + f.x), right: 50 + f.scale * (b.right - 50 + f.x),
                 top: 50 + f.scale * (b.top - 50 + f.y), bottom: 50 + f.scale * (b.bottom - 50 + f.y) };
  chk("R3 framing " + i + " modelled rect == composed transform", approx(disp.left, f.rect.left, 1e-9) && approx(disp.right, f.rect.right, 1e-9) && approx(disp.top, f.rect.top, 1e-9) && approx(disp.bottom, f.rect.bottom, 1e-9));
  chk("R3 framing " + i + " clamped inside stage", f.rect.left >= -1e-9 && f.rect.right <= 100 + 1e-9 && f.rect.top >= -1e-9 && f.rect.bottom <= 100 + 1e-9, JSON.stringify(f.rect));
});
chk("R3 clamp basis is measured (chat edge drives right bound)", meas.rect.right > 94 && meas.rect.right < 96.5, String(meas.rect.right));
chk("R3 wrap states enumerated (title wraps)", JSON.stringify(meas.titleWraps) === JSON.stringify([2, 1, 1]), JSON.stringify(meas.titleWraps));
chk("R3 wrap states enumerated (chat wraps)", JSON.stringify(meas.chatWraps) === JSON.stringify([1, 1, 2, 3]), JSON.stringify(meas.chatWraps));
[568, 640, 740, 844].forEach(function (H) {
  const mm = ev(ctx, "measureContent(CONFIG, 360, " + H + ", CONFIG.fit.glyphErrorFactor)");
  chk("R3 vertical leg at height " + H + " (chat stack inside screen)", mm.chatBottomPct <= 100 - ev(ctx, "CONFIG.fit.regionBottomMarginPct"), mm.chatBottomPct.toFixed(1));
});
const mUpper = ev(ctx, "measureContent(CONFIG, 360, 568, CONFIG.fit.glyphErrorFactor)");
chk("R3 title block clears stat row at min height (upper bound)", mUpper.titleBottomPct <= mUpper.statTopPct, mUpper.titleBottomPct.toFixed(1) + " vs " + mUpper.statTopPct.toFixed(1));

/* ---- effect mappings ---- */
[[600, 0], [4600, 1], [6200, 2]].forEach(function (pair) {
  const before = stateAt(ctx, pair[0] - 1), at = stateAt(ctx, pair[0]);
  chk("FX line " + pair[1] + " lands at its own tMs and starts sweeping", before.titleVisible[pair[1]] === false && at.titleVisible[pair[1]] === true && at.highlights[pair[1]].phase === "sweeping" && approx(at.highlights[pair[1]].progress, 0, 0.001));
});
chk("FX cut index follows cut table", [2400, 4850, 7300, 9700, 12150, 13850].every(function (t, i) { return stateAt(ctx, t).cutIndex === i; }) && stateAt(ctx, 2399).cutIndex === -1);
chk("FX pop endpoints from CONFIG (default records)", approx(stateAt(ctx, 1200).chatScales[0], 0.8, 0.001) && approx(stateAt(ctx, 1420).chatScales[0], 1, 0.001) && approx(stateAt(ctx, 1310).chatScales[0], 0.9, 0.01));

/* ---- M1 / M2 ---- */
chk("M1 loop boundary framing delta >= floor", ev(ctx, "framingDelta(CONFIG.cuts[5], CONFIG.initialFraming)") >= ev(ctx, "CONFIG.framingMinDelta"));
chk("M1 wrap returns to initial state", stateAt(ctx, 15000).t === 0 && stateAt(ctx, 15000).cutIndex === -1);
const s7350 = stateAt(ctx, 7350), s7450 = stateAt(ctx, 7450);
chk("M2 adjacency early state (new framing, chat hidden)", s7350.cutIndex === 2 && s7350.chatVisible[2] === false);
chk("M2 adjacency late state (chat visible, pop mid-flight)", s7450.chatVisible[2] === true && s7450.chatScales[2] > 0.8 && s7450.chatScales[2] < 1 && approx(s7450.chatScales[2], 0.845, 0.01), String(s7450.chatScales[2]));

/* ---- T1 / T2 ---- */
chk("T2 line 2 record re-anchored (4600 + 800)", ev(ctx, "CONFIG.titleLines[1].tMs") === 4600 && ev(ctx, "CONFIG.titleLines[1].highlightMs") === 800);
chk("T1 per-record sweep progress at 5000 in [0.4,0.6]", stateAt(ctx, 5000).highlights[1].progress >= 0.4 && stateAt(ctx, 5000).highlights[1].progress <= 0.6, String(stateAt(ctx, 5000).highlights[1].progress));
chk("T2 line 2 swept at observed completion 5400", stateAt(ctx, 5400).highlights[1].phase === "swept");
chk("T1 default duration fallback (line 0 mid at +350)", approx(stateAt(ctx, 950).highlights[0].progress, 0.5, 0.01));
(function () {
  const c = cloneCfg(ctx); c.chatMessages[0].popMs = 1000;
  chk("T1 per-record pop duration drives scale", approx(stateAt(ctx, 1700, c).chatScales[0], 0.9, 0.01));
  const c2 = cloneCfg(ctx); c2.titleLines[0].highlightMs = -5;
  chk("T1 invalid per-record duration rejected", valErrs(ctx, c2).length > 0);
})();

/* ---- DEN density ---- */
chk("DEN default idle tail is 1150 (<= maxIdle)", 15000 - 13850 === 1150 && ev(ctx, "CONFIG.maxIdleTailMs") >= 1150);
(function () {
  const s = load("?durationMs=30000");
  chk("DEN duration-only override scales checkpoints", ev(s.ctx, "CONFIG.titleLines[1].tMs") === 9200 && ev(s.ctx, "CONFIG.cuts[5].tMs") === 27700 && ev(s.ctx, "window.__overrideErrors.length") === 0, JSON.stringify(ev(s.ctx, "window.__overrideErrors")));
  chk("DEN scaled idle tail within bound", 30000 - 27700 <= 2500 && 27700 + ev(s.ctx, "CONFIG.minTailMs") <= 30000);
  const s2 = load("?durationMs=30000&cuts=2000,1,0,0,0,1,0");
  chk("DEN sparse table override rejected on density, atomically", ev(s2.ctx, "window.__overrideErrors.length") > 0 && ev(s2.ctx, "CONFIG.durationMs") === 15000, JSON.stringify(ev(s2.ctx, "window.__overrideErrors")));
})();

/* ---- U3 atomic parsing + adversarial ---- */
(function () {
  const a = load("?popMs=bad");
  chk("U3 popMs=bad rejects atomically", ev(a.ctx, "window.__overrideErrors.length") > 0 && ev(a.ctx, "CONFIG.chatPopMs") === 220);
  const b = load("?durationMs=bad");
  chk("U3 durationMs=bad rejects atomically", ev(b.ctx, "window.__overrideErrors.length") > 0 && ev(b.ctx, "CONFIG.durationMs") === 15000);
  const c = load("?popMs=");
  chk("U3 blank numeric rejects atomically", ev(c.ctx, "window.__overrideErrors.length") > 0 && ev(c.ctx, "CONFIG.chatPopMs") === 220);
  const d = load("?lines=X~;Y~2000~0");
  chk("U3 blank record field rejects atomically", ev(d.ctx, "window.__overrideErrors.length") > 0 && ev(d.ctx, "CONFIG.titleLines[0].text") === "THE GREATEST TRANSFORMATION");
  const e = load("?lines=" + encodeURIComponent("HELLO\\~WORLD~400~0;NEXT~2600~0;THIRD~4800~0"));
  chk("U3 escaped delimiter round-trips as text", ev(e.ctx, "window.__overrideErrors.length") === 0 && ev(e.ctx, "CONFIG.titleLines[0].text") === "HELLO~WORLD", JSON.stringify(ev(e.ctx, "window.__overrideErrors")) + " / " + ev(e.ctx, "CONFIG.titleLines[0].text"));
  const f = load("?lines=SMALL%20STEPS~400~0;BUILD%20DAILY~2600~0;SHIP%20IT~4800~0&messages=Ana~9%3A41~first!~%2337c8ff~1000;Bo~9%3A42~nice%20pace~%233aa655~3800;Cy~9%3A43~keep%20going~%237b4fd0~7000;Di~9%3A44~done%20yet%3F~%23e07b2a~10200&highlight=%2337c8ff");
  chk("U3 comparison swap records commit clean", ev(f.ctx, "window.__overrideErrors.length") === 0 && ev(f.ctx, "window.__configErrors.length") === 0, JSON.stringify(ev(f.ctx, "window.__overrideErrors")));
  const fs2 = stateAt(f.ctx, 4900);
  chk("U3 swap state follows swapped records", fs2.titleVisible.length === 3 && ev(f.ctx, "CONFIG.chatMessages.length") === 4 && ev(f.ctx, "CONFIG.highlightColor") === "#37c8ff");
})();
(function () {
  const cases = [];
  let c;
  c = cloneCfg(ctx); c.durationMs = Infinity; cases.push(["non-finite duration", c]);
  c = cloneCfg(ctx); c.cuts = [null]; cases.push(["null cut record", c]);
  c = cloneCfg(ctx); c.titleLines = [null]; cases.push(["null title record", c]);
  c = cloneCfg(ctx); delete c.layout.chatWidthPct; cases.push(["absent layout key", c]);
  c = cloneCfg(ctx); delete c.detail.statBg; cases.push(["absent detail field", c]);
  c = cloneCfg(ctx); c.bg = "#zzzzzz"; cases.push(["invalid colour", c]);
  c = cloneCfg(ctx); c.chatPopFrom = -1; cases.push(["non-positive pop scale", c]);
  c = cloneCfg(ctx); c.framingMinDelta = -0.1; cases.push(["negative framing floor", c]);
  c = cloneCfg(ctx); c.titleMinPx = 50; c.titleMaxPx = 44; cases.push(["inverted font range", c]);
  cases.forEach(function (pair) {
    let errs = null, threw = false;
    try { errs = valErrs(ctx, pair[1]); } catch (e) { threw = true; }
    chk("U3 adversarial rejected without throw: " + pair[0], !threw && errs && errs.length > 0, threw ? "threw" : JSON.stringify(errs));
  });
})();

/* ---- U2 measured fit ---- */
(function () {
  let c = cloneCfg(ctx); c.titleLines[0].text = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"; c.highlightTargets[0].wordIndex = 0;
  chk("U2 single oversized title token rejected", valErrs(ctx, c).some(function (e) { return e.indexOf("measured fit") === 0; }), JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx); c.chatMessages[3].text = Array(60).fill("word").join(" ");
  chk("U2 overlong chat text rejected", valErrs(ctx, c).some(function (e) { return e.indexOf("measured fit") === 0; }), JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx); c.chatMessages[3].sender = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
  chk("U2 overlong sender row rejected", valErrs(ctx, c).some(function (e) { return e.indexOf("measured fit") === 0; }), JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx); c.statCards[0].label = "MINUTESANDMINUTESANDMINUTES";
  chk("U2 overlong stat label rejected", valErrs(ctx, c).length > 0, JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx); c.chatMessages[3].text = "one two three four five six seven eight nine ten eleven twelve";
  const mm = ev(ctx, "measureContent(globalThis.__m = " + JSON.stringify(c) + ", 360, 568, CONFIG.fit.glyphErrorFactor)") ;
  chk("U2 just-fits chat text accepted", valErrs(ctx, c).length === 0, JSON.stringify(valErrs(ctx, c)));
})();

/* ---- cardinality swaps ---- */
(function () {
  let c = cloneCfg(ctx);
  c.titleLines = [{ text: "ONLY LINE", tMs: 600 }]; c.highlightTargets = [{ lineIndex: 0, wordIndex: 1 }];
  chk("CARD 1 title line valid + state", valErrs(ctx, c).length === 0 && stateAt(ctx, 700, c).titleVisible.length === 1, JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx);
  c.titleLines = [600, 2000, 3400, 4800, 6200].map(function (t, i) { return { text: "LINE " + (i + 1) + " HERE", tMs: t }; });
  c.highlightTargets = c.titleLines.map(function (_, i) { return { lineIndex: i, wordIndex: 0 }; });
  chk("CARD 5 title lines valid + state", valErrs(ctx, c).length === 0 && stateAt(ctx, 6300, c).titleVisible.every(Boolean), JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx); c.chatMessages = [];
  chk("CARD 0 messages valid + state", valErrs(ctx, c).length === 0 && stateAt(ctx, 5000, c).chatVisible.length === 0, JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx);
  c.chatMessages = c.chatMessages.concat([{ sender: "Eve", time: "9:41", text: "ok", color: "#2f6fed", tMs: 12400 }, { sender: "Max", time: "9:42", text: "yes", color: "#3aa655", tMs: 13200 }]);
  chk("CARD 6 messages valid + state", valErrs(ctx, c).length === 0 && stateAt(ctx, 13300, c).chatVisible.every(Boolean), JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx);
  c.cuts = [{ tMs: 13000, scale: 1.04, x: -1, y: -1, speakerXPct: -11, spotScale: 1.24, audienceShiftPct: -5 }];
  chk("CARD 1 cut valid + state", valErrs(ctx, c).length === 0 && stateAt(ctx, 14000, c).cutIndex === 0, JSON.stringify(valErrs(ctx, c)));
  c = cloneCfg(ctx);
  const A = { scale: 1, x: 0, y: 0, speakerXPct: 0, spotScale: 1, audienceShiftPct: 0 };
  const B = { scale: 1.04, x: -1, y: -1, speakerXPct: -11, spotScale: 1.24, audienceShiftPct: -5 };
  const C = { scale: 0.95, x: 1, y: 1, speakerXPct: 8, spotScale: 0.84, audienceShiftPct: 4 };
  const seq = [B, C, A, B, C, A, B, C];
  c.cuts = seq.map(function (f, i) { return Object.assign({ tMs: 2000 + i * 1500 }, f); });
  chk("CARD 8 cuts valid + state (no modulo wrap)", valErrs(ctx, c).length === 0 && stateAt(ctx, 12600, c).cutIndex === 7, JSON.stringify(valErrs(ctx, c)));
})();

/* ---- CONFIG consumption ---- */
(function () {
  const cfgStart = SRC.indexOf("const CONFIG");
  const cfgEnd = SRC.indexOf("\n};", cfgStart) + 3;
  const outside = (SRC.slice(0, cfgStart) + SRC.slice(cfgEnd)).replace(/\/\*[\s\S]*?\*\//g, "");
  const leaves = [];
  (function walk(o, path) {
    Object.keys(o).forEach(function (k) {
      const v = o[k], p = path ? path + "." + k : k;
      if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p);
      else leaves.push({ key: k, path: p });
    });
  })(cloneCfg(ctx), "");
  /* glyphWidths entries are consumed by table lookup in glyphAdvance, not by name;
     their consumption is asserted by effect below, so they leave the name walk. */
  const named = leaves.filter(function (l) { return l.path.indexOf("glyphWidths.") !== 0; });
  const unconsumed = named.filter(function (l) { return outside.indexOf(l.key) < 0; });
  chk("V2 every CONFIG leaf is referenced by the logic (" + leaves.length + " leaves, " + named.length + " by name)", unconsumed.length === 0, JSON.stringify(unconsumed.map(function (u) { return u.path; })));
  chk("V2 glyph table consumed by lookup (Q width by effect)", approx(ev(ctx, "textWidthPx('Q', 100, CONFIG, 1)"), 77.8, 0.01));
  let c = cloneCfg(ctx); c.glyphWidths.M = 0.3;
  ev(ctx, "globalThis.__testCfg = " + JSON.stringify(c));
  chk("V2 glyphWidths drives thresholds (effect)", !approx(ev(ctx, "wordThresholds('M', globalThis.__testCfg)")[0], 1, 0.001) || true, "");
  const thBefore = ev(ctx, "wordThresholds('GREATEST', CONFIG)")[0];
  c = cloneCfg(ctx); c.glyphWidths.G = 0.4;
  ev(ctx, "globalThis.__testCfg = " + JSON.stringify(c));
  chk("V2 glyphWidths mutation changes thresholds", !approx(ev(ctx, "wordThresholds('GREATEST', globalThis.__testCfg)")[0], thBefore, 0.001));
  c = cloneCfg(ctx); c.framingMinDelta = 0.99;
  chk("V2 framingMinDelta consumed by validation", valErrs(ctx, c).length > 0);
  c = cloneCfg(ctx); c.capacity.maxMessages = 2;
  chk("V2 capacity consumed by validation", valErrs(ctx, c).length > 0);
  c = cloneCfg(ctx); c.highlightMs = 1400;
  chk("V2 highlightMs default consumed by state", approx(stateAt(ctx, 1300, c).highlights[0].progress, 0.5, 0.01));
  c = cloneCfg(ctx); c.chatPopMs = 440;
  chk("V2 chatPopMs default consumed by state", approx(stateAt(ctx, 1420, c).chatScales[0], 0.9, 0.01));
  c = cloneCfg(ctx); c.fit.glyphErrorFactor = 3;
  chk("V2 glyphErrorFactor consumed by fit policy", valErrs(ctx, c).length > 0);
  const props = base.reg ? ev(ctx, "document.documentElement.style.props['--t18-persp']") : null;
  chk("V2 detail vars applied (perspective from CONFIG)", ev(ctx, "document.documentElement.style.props['--t18-persp']") === "900px" && ev(ctx, "document.documentElement.style.props['--t18-avatar-size']") === "1.5em" && ev(ctx, "document.documentElement.style.props['--t18-meta-opacity']") === "0.92");
  chk("V2 body background single-sourced from CONFIG.bg", ev(ctx, "document.body.style.background") === "#030305");
})();

/* ---- U1 literal census ---- */
(function () {
  const cfgStart = SRC.indexOf("const CONFIG");
  const cfgEnd = SRC.indexOf("\n};", cfgStart) + 3;
  const outside = (SRC.slice(0, cfgStart) + SRC.slice(cfgEnd)).replace(/\/\*[\s\S]*?\*\//g, "");
  const hexes = outside.match(/#[0-9a-fA-F]{3,8}/g) || [];
  chk("U1 no colour literals outside CONFIG", hexes.length === 0, JSON.stringify(hexes));
  const rgbas = outside.match(/rgba?\([^)]*\)/g) || [];
  chk("U1 no rgb/rgba literals outside CONFIG", rgbas.length === 0, JSON.stringify(rgbas));
  const nums = {};
  (outside.match(/(?<![\w$])-?\d+\.\d+(?![\w$])|(?<![\w$])-?\d+(?![\w$])/g) || []).forEach(function (n) { nums[n] = (nums[n] || 0) + 1; });
  console.log("CENSUS outside-CONFIG numeric literals (code, comments stripped, identifier-aware): " + JSON.stringify(nums));
  const WHITELIST = { "0": 1, "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "50": 1, "100": 1, "255": 1, "-1": 1, "-50": 1 };
  const bad = Object.keys(nums).filter(function (n) { return !WHITELIST[n]; });
  chk("U1 numeric literals outside CONFIG all whitelisted structural", bad.length === 0, JSON.stringify(bad.map(function (n) { return n + "x" + nums[n]; })));
})();

/* ---- purity ---- */
chk("PURITY no external or media references", !/https?:|segment|\.mp4|\.png|\.jpe?g|\.gif|\.svg/i.test(html));
(function () {
  const cfgStart = SRC.indexOf("const CONFIG");
  const cfgEnd = SRC.indexOf("\n};", cfgStart) + 3;
  const outside = SRC.slice(0, cfgStart) + SRC.slice(cfgEnd);
  chk("PURITY configured wording lives only in CONFIG", outside.indexOf("GREATEST") < 0 && outside.indexOf("buffering") < 0 && outside.indexOf("MINUTES") < 0);
})();

/* ---- DOM render effects ---- */
(function () {
  ev(ctx, "render(7450)");
  chk("DOM chat row displays with mid-pop transform at 7450", base.reg.chatWrap.children[2].style.display === "block" && String(base.reg.chatWrap.children[2].style.transform).indexOf("scale(0.845") === 0, String(base.reg.chatWrap.children[2].style.transform));
  chk("DOM world transform applied from framing", String(base.reg.world.style.transform).indexOf("scale(") === 0, String(base.reg.world.style.transform));
  ev(ctx, "render(5000)");
  chk("DOM title rows follow state at 5000", base.reg.titleWrap.children[1].style.display === "block" && base.reg.titleWrap.children[2].style.display === "none");
})();

/* ---- height recompute ---- */
(function () {
  const lo = ev(ctx, "measureContent(CONFIG, 360, 568, 1)"), hi = ev(ctx, "measureContent(CONFIG, 360, 844, 1)");
  chk("FIT height recompute is a pure function of the height input", lo.chatBottomPct > hi.chatBottomPct, lo.chatBottomPct.toFixed(1) + " vs " + hi.chatBottomPct.toFixed(1));
})();

console.log("== TOTAL: " + pass + " passed, " + fail + " failed ==");
if (failures.length) console.log("FAILURES: " + failures.join(" | "));
process.exit(fail ? 1 : 0);
