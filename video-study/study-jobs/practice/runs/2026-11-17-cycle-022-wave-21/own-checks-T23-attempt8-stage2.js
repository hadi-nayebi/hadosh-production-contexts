"use strict";
/* T23 attempt 8 — STAGE 2 suite (C2 magnitude sweep · C3 path grammar · C9 literals).
   Field domains (Codex plan-review amendment 1): DISCRETE fields reject
   non-safe-integers; CONTINUOUS fields accept finite bounded numbers —
   every malformed probe is paired with a valid non-default probe. */
const fs = require("fs");
const DIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map/";
function loadPure(file) {
  const src = fs.readFileSync(DIR + file, "utf8");
  const js = src.split("<script>")[1].split("</script>")[0];
  const mod = { exports: {} };
  new Function("module", "exports", js)(mod, mod.exports);
  return { M: mod.exports, src };
}
let pass = 0, fail = 0; const fails = [];
function ck(name, cond) { if (cond) { pass++; console.log("PASS " + name); } else { fail++; fails.push(name); console.log("FAIL " + name); } }
const fin = loadPure("recreation.html"); const M = fin.M, cfg = M.resolveConfig("");
const NINES = "9".repeat(400);
function walkNums(obj, path, out) {
  Object.keys(obj).forEach(function (k) {
    const v = obj[k], p = path ? path + "." + k : k;
    if (typeof v === "number") out.push(p);
    else if (v && typeof v === "object" && !Array.isArray(v)) walkNums(v, p, out);
  });
  return out;
}
function getPath(obj, p) { return p.split(".").reduce(function (o, k) { return o[k]; }, obj); }
function allFinite(obj) {
  let ok = true;
  (function rec(o) { Object.keys(o).forEach(function (k) { const v = o[k]; if (typeof v === "number" && !isFinite(v)) ok = false; else if (v && typeof v === "object") rec(v); }); })(obj);
  return ok;
}
/* ---- C2: the return's exact case, warning truth ---- */
(function () {
  const c = M.resolveConfig("?dwellMs=" + NINES);
  ck("S2 C2 return case: dwellMs=400-nines resolves to the DEFAULT (300), not Infinity, not clamped-while-claiming-discard",
    c.dwellMs === M.CONFIG.dwellMs && isFinite(c.dwellMs));
  ck("S2 C2 warning is TRUE: names dwellMs and the installed value is the default it claims",
    c._warnings.some(function (w) { return w.indexOf("dwellMs") >= 0; }) && M.buildTimeline(c).totalMs === 2190);
})();
/* ---- C2: magnitude sweep over EVERY numeric field enumerated from CONFIG ---- */
(function () {
  const leaves = walkNums(M.CONFIG, "", []);
  console.log("  C2 magnitude-sweep field enumeration (" + leaves.length + " numeric leaves): " + leaves.join(", "));
  const topDirect = { dwellMs: 1, diveMs: 1, holdZoomMs: 1, loopPauseMs: 1, colsWide: 1, colsNarrow: 1, narrowBreakpointPx: 1, gapPx: 1, borderPx: 1, diveScale: 1, panelAspect: 1 };
  let bad = [];
  leaves.forEach(function (p) {
    let q;
    if (topDirect[p]) q = "?" + p + "=" + NINES;
    else if (p.indexOf(".") > 0) q = "?cfg:" + p + "=" + NINES;
    else { bad.push(p + " (no route)"); return; }
    let c = null;
    try { c = M.resolveConfig(q); } catch (e) { bad.push(p + " THREW " + e.message); return; }
    const def = getPath(M.CONFIG, p), got = getPath(c, p);
    if (!allFinite(c)) bad.push(p + " left a non-finite value somewhere");
    else if (!isFinite(M.buildTimeline(c).totalMs)) bad.push(p + " totalMs non-finite");
    else if (got !== def) bad.push(p + " resolved " + got + " != default " + def);
    else if (!c._warnings.length) bad.push(p + " produced no warning");
  });
  bad.forEach(function (b) { console.log("  SWEEP-BAD " + b); });
  ck("S2 C2 magnitude sweep: EVERY numeric field (400-nines) -> default installed, all values finite, totalMs finite, warning filed", bad.length === 0);
  /* array-member numeric fields: appearances filled/dive */
  let arrOk = true;
  try {
    const c = M.resolveConfig("?appearances=" + NINES + ":0,0:" + NINES);
    if (!allFinite(c) || !isFinite(M.buildTimeline(c).totalMs)) arrOk = false;
  } catch (e) { arrOk = false; }
  const pc = M.resolveConfig("?panelCount=" + NINES);
  ck("S2 C2 array/count magnitudes: appearances + panelCount 400-nines stay finite and playable", arrOk && pc.panels.length >= 1 && pc.panels.length <= pc.limits.maxPanels);
})();
/* ---- C2 amendment 1: valid non-default values, incl fractions, land with consumed effects ---- */
(function () {
  const hf = M.resolveConfig("?cfg:layout.headerHeightFactor=0.05");
  const layDef = M.computeLayout(cfg, 960), layHf = M.computeLayout(hf, 960);
  ck("S2 C2 valid fraction: headerHeightFactor 0.05 (continuous) lands and changes the computed header height",
    hf.layout.headerHeightFactor === 0.05 && Math.abs(layHf.headerH - layDef.headerH) > 0.5);
  const ds = M.resolveConfig("?diveScale=4.5");
  const lay = M.computeLayout(cfg, 360); const r = M.resolvedArtRect(cfg, lay, 0);
  const sDef = M.diveTransform(cfg, lay, r).scale, sDs = M.diveTransform(ds, lay, r).scale;
  ck("S2 C2 valid fraction: diveScale 4.5 lands (discrete clamp does not apply to continuous fields)", ds.diveScale === 4.5);
  const go = M.resolveConfig("?cfg:layout.ghostOpacity=0.25");
  const ss = M.resolveConfig("?cfg:labels.shrinkStepPx=0.25");
  const pa = M.resolveConfig("?panelAspect=2");
  ck("S2 C2 valid fractions land: ghostOpacity 0.25 · shrinkStepPx 0.25 · panelAspect 2 (panel height re-derives)",
    go.layout.ghostOpacity === 0.25 && ss.labels.shrinkStepPx === 0.25 && pa.panelAspect === 2 &&
    Math.abs(M.computeLayout(pa, 360).panelH - M.computeLayout(cfg, 360).panelH) > 1);
  const dw = M.resolveConfig("?dwellMs=450");
  ck("S2 C2 valid discrete non-default: dwellMs=450 lands and totalMs follows (450+430)*3=2640", dw.dwellMs === 450 && M.buildTimeline(dw).totalMs === 2640);
})();
/* ---- C3: path grammar ---- */
(function () {
  const bad = M.resolveConfig("?registry=" + encodeURIComponent('custom:[{"t":"path","d":"THIS IS NOT SVG PATH","fill":"$ink"}]') + "&panels=" + encodeURIComponent("Fresh@custom"));
  const defs = { strokeWidth: 1, textWeight: "normal", defaultFill: bad.artDefaults.fill, defaultStroke: bad.artDefaults.stroke };
  const out = M.panelArtSVG(bad.panels[0], bad.palette, true, bad.artRegistry, bad.artViewBox, bad.fallbackArtKind, defs);
  ck("S2 C3 malformed path: named warning, primitive dropped, invalid data never emitted, fallback art renders",
    bad._warnings.some(function (w) { return w.indexOf("artRegistry.custom") >= 0 || w.indexOf("fallback") >= 0; }) &&
    out.indexOf("THIS IS NOT") === -1 && out.indexOf("<svg") === 0 && out.length > 40);
  const good = M.resolveConfig("?registry=" + encodeURIComponent('custom:[{"t":"path","d":"M45 88 L45 45 A35 30 0 0 1 115 45 L115 88 Z","fill":"$ink"}]') + "&panels=" + encodeURIComponent("Fresh@custom"));
  const outG = M.panelArtSVG(good.panels[0], good.palette, true, good.artRegistry, good.artViewBox, good.fallbackArtKind, defs);
  ck("S2 C3 valid path (incl arc flags): accepted verbatim, no warning on the kind",
    outG.indexOf("M45 88") >= 0 && !good._warnings.some(function (w) { return w.indexOf("artRegistry.custom") >= 0; }));
  const arc = M.resolveConfig("?registry=" + encodeURIComponent('custom:[{"t":"path","d":"M0 0 A10 10 0 0 2 20 20","fill":"$ink"}]'));
  ck("S2 C3 arc with a non-flag argument in a flag slot is rejected", arc._warnings.some(function (w) { return w.indexOf("artRegistry.custom") >= 0; }));
  ck("S2 C3 default registry paths all pass the grammar (defaults resolve warning-free)", cfg._warnings.length === 0);
})();
/* ---- C9: literals ---- */
(function () {
  ck("S2 C9 no #000000 literal anywhere in the source", fin.src.indexOf("#000000") === -1);
  const uses = fin.src.split("headerRefineMaxIterations").length - 1;
  const c = M.resolveConfig("?cfg:limits.headerRefineMaxIterations=7");
  ck("S2 C9 header-refinement ceiling is a named limits leaf (definition + validation + consumption site) and its route lands",
    uses >= 3 && c.limits.headerRefineMaxIterations === 7);
  const bad = M.resolveConfig("?cfg:limits.headerRefineMaxIterations=" + NINES);
  ck("S2 C9 new leaf under magnitude sweep resets to default 200", bad.limits.headerRefineMaxIterations === 200);
})();
console.log("STAGE2 TOTAL: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILS: " + fails.join(" | "));
