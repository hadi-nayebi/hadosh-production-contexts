"use strict";
/* T54 attempt 3 — own-check suite (logic level; PIXEL-UNVERIFIED).
   Covers: effect mappings + per-key consumption census (A-C002-1/A-C006-2),
   literal census (A-C008-3/A-C009-4), displayed-state assertions
   (A-C004-2/A-C006-3), swap test, purity grep + inventory, comparison check. */
const fs = require("fs");
const path = require("path");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T54-map-as-table-roster");
const src = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const js = src.split("<script>")[1].split("</script>")[0];
fs.writeFileSync("/tmp/t54a3-suite.js", js);
const M = require("/tmp/t54a3-suite.js");
const cfg = M.CONFIG;
let pass = 0, fail = 0; const failures = [];
function chk(name, cond, detail){
  if(cond){ pass++; } else { fail++; failures.push(name + (detail ? " — " + detail : "")); }
  console.log((cond ? "PASS" : "FAIL") + "  " + name + (detail ? "  [" + detail + "]" : ""));
}
function clone(o){ return JSON.parse(JSON.stringify(o)); }

/* --- 1. Default construction valid + feasibility gate --- */
const errs = M.validateConfig(cfg);
chk("default validation empty", errs.length === 0, errs.slice(0, 3).join("; "));
const laid = M.layoutChips(cfg);
const keys = M.buildTimeline(cfg, laid);
const feas = M.layoutFeasibility(cfg, laid, keys);
chk("layout feasibility gate ok", feas.ok === true, feas.failures.slice(0, 3).join("; "));
chk("min centre distance >= required separation", feas.minCentreDistance >= 2 * cfg.chipR + cfg.minCentreGap - 1e-6, "minD=" + feas.minCentreDistance.toFixed(2));

/* --- 2. Timeline anchors (resolved frame timeline, build record §0) --- */
chk("placement end + pop settle <= full arrival 2000", M.placeEndMs(cfg) + M.effectivePopMs(cfg) <= M.fullArrivalMs(cfg),
  M.placeEndMs(cfg) + "+" + M.effectivePopMs(cfg).toFixed(1) + " <= " + M.fullArrivalMs(cfg));
chk("regional hold end 1100 / arrival 2000", keys[1].t === 1100 && keys[2].t === 2000, keys[1].t + "/" + keys[2].t);
chk("camera regional at 1000ms, full at 2000ms", M.cameraAt(cfg, keys, 1000).scale === cfg.midwestScale && M.cameraAt(cfg, keys, 2000).scale === 1);
chk("pan-away keys 6000 full / 7000 exit shifted", keys[3].t === 6000 && keys[4].t === 7000 && keys[4].cx === cfg.viewBox.w / 2 + cfg.panExitShiftUnits,
  keys[3].t + "/" + keys[4].t);
chk("first pass entry starts at 7000", M.passSchedule(cfg, laid)[0].start === 7000);
chk("final full hold >= 1100", cfg.finalFullHoldMs >= 1100, String(cfg.finalFullHoldMs));
chk("duration derived", M.durationMs(cfg, laid) === M.returnArrivalMs(cfg, laid) + cfg.finalFullHoldMs, String(M.durationMs(cfg, laid)));

/* --- 3. Camera continuity (incl. pan-away 5900-7100) --- */
let maxScale = 0, maxCentre = 0;
let prev = M.cameraAt(cfg, keys, 0);
for(let t = 25; t <= M.durationMs(cfg, laid); t += 25){
  const c = M.cameraAt(cfg, keys, t);
  maxScale = Math.max(maxScale, Math.abs(c.scale - prev.scale));
  maxCentre = Math.max(maxCentre, Math.hypot(c.cx - prev.cx, c.cy - prev.cy));
  prev = c;
}
chk("camera continuity, no snap (25ms sampling, whole timeline)", maxScale < 0.2 && maxCentre < 30,
  "maxScaleStep=" + maxScale.toFixed(3) + " maxCentreStep=" + maxCentre.toFixed(1));

/* --- 4. Dwell formula + stationary exposure (default + 3-wave fixture) --- */
function exposureSuite(c, label){
  const l = M.layoutChips(c), k = M.buildTimeline(c, l), s = M.passSchedule(c, l);
  let formulaOk = true, contOk = true, dwellFloorOk = true;
  s.forEach(function(e){
    if(e.step !== c.cameraMoveMs + e.dwells[0]) formulaOk = false;
    if(e.dwells[0] !== M.dwellForWave(c, e.members.map(function(m){ return m.label; }))) formulaOk = false;
    if(e.dwells[0] < c.dwellFloorMs) dwellFloorOk = false;
    for(let t = e.start + c.cameraMoveMs; t <= e.start + e.step; t += 100){
      const vis = M.labelVisible(c, l, k, t);
      e.members.forEach(function(m){ if(!vis[m.i]) contOk = false; });
    }
  });
  chk(label + ": step = move + dwell, dwell = formula(name count + longest label)", formulaOk);
  chk(label + ": dwell >= floor for every wave", dwellFloorOk);
  chk(label + ": continuous settled exposure for every wave member", contOk);
  return { l: l, k: k, s: s };
}
exposureSuite(cfg, "default fixture");
const cfg3 = clone(cfg); cfg3.passWaves = 3;
exposureSuite(cfg3, "three-wave fixture");

/* --- 5. Displayed-state assertions at checkpoints (A-C004-2/A-C006-3) --- */
const checkpoints = [cfg.feasibilitySampleMs, M.fullArrivalMs(cfg) + cfg.feasibilitySampleMs];
M.passSchedule(cfg, laid).forEach(function(e){ checkpoints.push(e.start + cfg.cameraMoveMs + Math.floor(e.dwells[0] / 2)); });
const ra = M.returnArrivalMs(cfg, laid);
for(let g = 0; g < Math.ceil(laid.length / cfg.finalIndexGroupSize); g++)
  checkpoints.push(ra + g * cfg.finalIndexStepMs + Math.floor(cfg.finalIndexStepMs / 2));
let dispOk = true, dispDetail = "";
const exposureCount = {};
checkpoints.forEach(function(t){
  const cam = M.cameraAt(cfg, keys, t), win = M.windowAt(cfg, cam);
  const vis = M.labelVisible(cfg, laid, keys, t);
  const visIdx = []; vis.forEach(function(v, i){ if(v) visIdx.push(i); });
  const placedIdx = []; laid.forEach(function(rc){ if(rc.placeAtMs <= t) placedIdx.push(rc.i); });
  const reserve = M.countPlateUp(cfg, laid, keys, t) ? M.fullPlateReserveUnits(cfg) : 0;
  const rects = M.plateRectsFor(cfg, laid, visIdx, win, reserve, placedIdx);
  const disp = visIdx.filter(function(i){ return rects[i] && !rects[i].fallback; });
  disp.forEach(function(i){ exposureCount[i] = (exposureCount[i] || 0) + 1; });
  const rs = disp.map(function(i){ return rects[i]; });
  for(let a = 0; a < rs.length; a++){
    if(rs[a].x < win.x - 1e-6 || rs[a].y < win.y - 1e-6 || rs[a].x + rs[a].w > win.x + win.w + 1e-6 || rs[a].y + rs[a].h > win.y + win.h + 1e-6){ dispOk = false; dispDetail = "plate outside window t=" + t; }
    for(let b = a + 1; b < rs.length; b++) if(M.rectsOverlap(rs[a], rs[b])){ dispOk = false; dispDetail = "plate-plate overlap t=" + t; }
    laid.forEach(function(rc){
      if(rc.placeAtMs > t) return;
      if(M.rectCircleOverlap(rs[a], rc.x, rc.y, cfg.chipR)){ dispOk = false; dispDetail = "plate-disc overlap t=" + t; }
      if(rc.electRect && M.rectsOverlap(rs[a], rc.electRect)){ dispOk = false; dispDetail = "plate-tag overlap t=" + t; }
    });
  }
});
chk("displayed plates: disjoint from plates/discs/tags, inside window, all checkpoints", dispOk, dispDetail);
chk("exposure union covers all 55 identities", laid.every(function(rc){ return exposureCount[rc.i] > 0; }),
  "covered=" + Object.keys(exposureCount).length + "/55");
/* tags: pairwise disjoint + disjoint from other initials bounds */
let tagOk = true;
const elects = laid.filter(function(r){ return r.electRect; });
for(let a = 0; a < elects.length; a++) for(let b = 0; b < laid.length; b++){
  if(laid[b] === elects[a]) continue;
  const ib = { x: laid[b].x - laid[b].initialsWidth / 2, y: laid[b].y - cfg.initialsSize / 2, w: laid[b].initialsWidth, h: cfg.initialsSize };
  if(M.rectsOverlap(elects[a].electRect, ib)) tagOk = false;
  if(laid[b].electRect && laid[b].i > elects[a].i && M.rectsOverlap(elects[a].electRect, laid[b].electRect)) tagOk = false;
}
chk("tags: pairwise disjoint, disjoint from full initials bounds, 0 fallbacks",
  tagOk && laid.every(function(r){ return !r.electFallback; }), "tags=" + elects.length);
/* tag extents inside wave camera windows */
let tagFitOk = true;
M.passSchedule(cfg, laid).forEach(function(e){
  const cam = M.cameraAt(cfg, keys, e.start + cfg.cameraMoveMs);
  const win = M.windowAt(cfg, cam);
  e.members.forEach(function(m){
    if(!m.electRect) return;
    const r = m.electRect;
    if(r.x < win.x - 1e-6 || r.y < win.y - 1e-6 || r.x + r.w > win.x + win.w + 1e-6 || r.y + r.h > win.y + win.h + 1e-6) tagFitOk = false;
  });
});
chk("tag extents inside fitted wave windows", tagFitOk);
/* plate stability within a beat (fixed visible set, repeated computation identical) */
(function(){
  const t = checkpoints[3];
  const cam = M.cameraAt(cfg, keys, t), win = M.windowAt(cfg, cam);
  const vis = M.labelVisible(cfg, laid, keys, t);
  const visIdx = []; vis.forEach(function(v, i){ if(v) visIdx.push(i); });
  const placedIdx = []; laid.forEach(function(rc){ if(rc.placeAtMs <= t) placedIdx.push(rc.i); });
  const r1 = M.plateRectsFor(cfg, laid, visIdx, win, 0, placedIdx);
  const r2 = M.plateRectsFor(cfg, laid, visIdx, win, 0, placedIdx);
  chk("plate positions identical on recomputation within a beat (displacement 0)",
    JSON.stringify(r1) === JSON.stringify(r2));
  const moving = [1500, 6500, M.passSchedule(cfg, laid)[0].start + 450];
  chk("no plates displayed while the camera is moving (hide-relocate-reveal)",
    moving.every(function(mt){ return M.labelVisible(cfg, laid, keys, mt).every(function(v){ return !v; }); }),
    "samples=" + moving.join(","));
})();
/* count plate timing */
chk("count plate down before settle, up at settle, down during pan, up at final hold",
  !M.countPlateUp(cfg, laid, keys, M.placeEndMs(cfg) + M.effectivePopMs(cfg) - 1) &&
  M.countPlateUp(cfg, laid, keys, M.placeEndMs(cfg) + M.effectivePopMs(cfg) + 500) &&
  !M.countPlateUp(cfg, laid, keys, 6500) &&
  M.countPlateUp(cfg, laid, keys, ra + 100));
/* plan-semantics surfaces */
chk("at full arrival the roster is complete (all placed, none popping)",
  M.placedCount(cfg, 2000) === cfg.chips.length && 2000 >= M.placeEndMs(cfg) + M.effectivePopMs(cfg));
chk("at pan-away end the camera has exited the full framing",
  M.cameraAt(cfg, keys, 7000).cx === cfg.viewBox.w / 2 + cfg.panExitShiftUnits);

/* --- 6. Validation rejections (field-specific, atomic) --- */
function expectErr(mut, needle, name){
  const c = clone(cfg); mut(c);
  const e = M.validateConfig(c);
  chk(name, e.some(function(x){ return x.indexOf(needle) >= 0; }), e.slice(0, 2).join("; "));
}
expectErr(function(c){ c.tagGridStep = 0; }, "tagGridStep", "reject zero tagGridStep (hang guard)");
expectErr(function(c){ c.midwestStateIds = ["AK"]; }, "opening region has no roster members", "reject empty opening region");
expectErr(function(c){ c.passRegions.push({ id: "empty", scale: 2, stateIds: ["DE"] }); }, "has no roster members", "reject empty pass region");
expectErr(function(c){ c.placeMs = NaN; }, "placeMs", "reject non-finite placeMs");
expectErr(function(c){ c.viewBox.w = 0; }, "viewBox", "reject invalid viewBox");
expectErr(function(c){ c.fontFamily = "NoSuchFont, sans-serif"; }, "textMetrics.profileFor", "reject font without metrics profile");
expectErr(function(c){ c.dwellFloorMs = 0; c.dwellBaseMs = -1000; c.dwellPerNameMs = 0; c.dwellPerLongestCharMs = 0; }, "derived dwell", "reject nonpositive derived dwell (step/move ordering)");
expectErr(function(c){ c.placeMs = 100; }, "placement end + pop settle", "reject placement overrunning full arrival");

/* --- 7. Grapheme initials + default regression --- */
function oldInitials(name){
  const words = name.match(/\p{L}+/gu);
  if(words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}
chk("all 55 default initials match attempt 2 exactly",
  cfg.chips.every(function(ch){ return M.initials(ch.name, cfg) === oldInitials(ch.name); }));
chk("grapheme-safe initials: supplementary-plane letter stays whole",
  (function(){ const s = M.initials("𐓏. Smith", cfg); return M.graphemes(s, cfg).length === 2 && s.indexOf("𐓏") === 0; })());
chk("grapheme-safe initials: decomposed accent name yields clean initials",
  M.initials("Élodie. Brune", cfg) === "EB", M.initials("Élodie. Brune", cfg));

/* --- 8. Swap test (effect mappings) --- */
(function(){
  const c = clone(cfg);
  c.chips.push({ name: "Z. Test", label: "Test — HI", stateId: "HI", elect: false });
  const e = M.validateConfig(c);
  chk("swap: 56-chip roster validates and fits derived duration", e.length === 0, e.slice(0, 2).join("; "));
  const six = clone(cfg);
  six.chips = ["A. One", "B. Two", "C. Three", "D. Four", "E. Five", "F. Six"].map(function(n){
    return { name: n, label: n + " — TX", stateId: "TX", elect: false };
  });
  const l6 = M.layoutChips(six);
  const posSet = new Set(l6.map(function(r){ return r.x.toFixed(1) + "," + r.y.toFixed(1); }));
  chk("swap: six chips on one state get distinct positions", posSet.size === 6);
  const moved = clone(cfg);
  const before = M.layoutChips(cfg)[0];
  moved.chips[0].stateId = "TX";
  const after = M.layoutChips(moved)[0];
  chk("swap effect mapping: stateId change moves the chip to the new state's anchor area",
    Math.abs(after.anchorX - 150) <= 20 && Math.abs(before.anchorX - 218) <= 20,
    "anchor " + before.anchorX + " -> " + after.anchorX);
  const dwellC = clone(cfg); dwellC.dwellPerNameMs = 200;
  const s0 = M.passSchedule(cfg, laid)[0], s1 = M.passSchedule(dwellC, M.layoutChips(dwellC))[0];
  chk("override effect mapping: dwellPerNameMs change changes the derived dwell", s1.dwells[0] > s0.dwells[0],
    s0.dwells[0] + " -> " + s1.dwells[0]);
})();

/* --- 9. Consumption census (A-C006-2): every CONFIG key -> a consumed effect --- */
(function(){
  const cfgStart = js.indexOf("const CONFIG");
  const cfgEnd = js.indexOf("\n};", cfgStart);
  const outside = js.slice(0, cfgStart) + js.slice(cfgEnd + 3);
  const topKeys = Object.keys(cfg);
  const unconsumed = topKeys.filter(function(k){
    return outside.indexOf("." + k) < 0 && outside.indexOf('"' + k + '"') < 0 && outside.indexOf(k + ":") < 0;
  });
  chk("consumption census: 0 unconsumed top-level CONFIG keys", unconsumed.length === 0, unconsumed.join(","));
  console.log("  consumption census: " + topKeys.length + " top-level keys walked");
})();

/* --- 10. Literal census (A-C008-3/A-C009-4) --- */
(function(){
  const cfgStart = js.indexOf("const CONFIG");
  const cfgEnd = js.indexOf("\n};", cfgStart);
  const outsideJs = js.slice(0, cfgStart) + js.slice(cfgEnd + 3);
  const style = src.split("<style>")[1].split("</style>")[0];
  const nums = new Set([...outsideJs.matchAll(/(?<![\w.])-?\d+(?:\.\d+)?(?:e-\d+)?/g)].map(function(m){ return m[0]; }));
  const styleNums = new Set([...style.matchAll(/(?<![\w.])-?\d+(?:\.\d+)?/g)].map(function(m){ return m[0]; }));
  const whitelist = { "0": "loop bounds/indices", "1": "loop bounds/identity", "2": "pair iteration bound",
    "-1": "not-found sentinel", "1e-6": "float tolerance in feasibility/window assertions",
    "2000": "SVG namespace URI year identifier (string, not a value)",
    "100": "CSS stage width percentage (structural)", "50": "CSS centring percentage (structural)", "-50": "CSS centring translate percentage (structural)" };
  const all = new Set([...nums, ...styleNums]);
  const unlisted = [...all].filter(function(n){ return !(n in whitelist); });
  chk("literal census: 0 unlisted literals outside CONFIG", unlisted.length === 0, unlisted.join(","));
  const cols = [...outsideJs.matchAll(/#[0-9a-fA-F]{3,8}/g)];
  chk("literal census: 0 colour literals outside CONFIG", cols.length === 0);
  console.log("  literal census set: " + [...all].sort().join(", "));
})();

/* --- 11. Purity grep + asset inventory --- */
(function(){
  const urls = [...src.matchAll(/https?:\/\/[^\s"']+/g)].map(function(m){ return m[0]; });
  const nonNs = urls.filter(function(u){ return u.indexOf("www.w3.org/2000/svg") < 0; });
  chk("purity: 0 external URLs besides the SVG namespace", nonNs.length === 0, nonNs.join(","));
  chk("purity: no media embeds / external loads", !/<img|<video|<audio|url\(|@import|<link/.test(src));
  console.log("  asset inventory: inline SVG only; external references = " + urls.length + " (SVG namespace)");
})();

/* --- 12. Comparison check --- */
(function(){
  const comp = fs.readFileSync(path.join(ART, "comparison.html"), "utf8");
  chk("comparison: ORIGINAL side is the segment video, recreation side iframes recreation.html",
    comp.indexOf('src="segment.mp4"') >= 0 && comp.indexOf('src="recreation.html"') >= 0);
})();

/* --- 13. Connector endpoints independent of pop progress --- */
chk("connector endpoints are a pure function of anchor/laid position",
  (function(){ const rc = laid.find(function(r){ return r.displaced > cfg.connectorThreshold; });
    if(!rc) return false;
    const a = M.connectorEndpoints(rc), b = M.connectorEndpoints(rc);
    return a.x1 === rc.anchorX && a.x2 === rc.x && JSON.stringify(a) === JSON.stringify(b); })());
chk("measured text: plate width derives from the glyph table (not a per-char factor)",
  (function(){ const w = M.plateSize(cfg, "Kowalski — MN").w;
    return Math.abs(w - (M.textWidth(cfg, "Kowalski — MN", cfg.labelSize) + 2 * cfg.labelPadX)) < 1e-9; })());
chk("full-plate reserve is derived from plate tokens and >= 34",
  M.fullPlateReserveUnits(cfg) >= 34 && src.indexOf("reserveUnits") < 0, String(M.fullPlateReserveUnits(cfg)));

console.log("\nTOTAL: " + pass + " pass, " + fail + " fail");
if(failures.length) console.log("FAILURES:\n" + failures.join("\n"));
process.exit(fail ? 1 : 0);
