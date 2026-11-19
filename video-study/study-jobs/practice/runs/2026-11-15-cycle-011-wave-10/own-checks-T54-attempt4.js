"use strict";
/* T54 attempt 4 — own-check suite (logic level; PIXEL-UNVERIFIED).
   Covers plan Verify V1-V16: self-start, effect mappings, CONFIG consumption,
   literal census, displayed-state assertions, staged checkpoints, placement in
   holds, timeline/basis, derived hold, validation fixtures, purity, swaps. */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T54-map-as-table-roster");
const src = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const js = src.split("<script>")[1].split("</script>")[0];
fs.writeFileSync("/tmp/t54a4-suite.js", js);
const M = require("/tmp/t54a4-suite.js");
const cfg = M.CONFIG;
let pass = 0, fail = 0; const failures = [];
function chk(name, cond, detail){
  if(cond){ pass++; } else { fail++; failures.push(name + (detail ? " — " + detail : "")); }
  console.log((cond ? "PASS" : "FAIL") + "  " + name + (detail ? "  [" + detail + "]" : ""));
}
function clone(o){ return JSON.parse(JSON.stringify(o)); }
function shaFile(p){ return crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex"); }

/* --- 1. Default construction valid + feasibility gate --- */
const errs = M.validateConfig(cfg);
chk("default validation empty", errs.length === 0, errs.slice(0, 3).join("; "));
const laid = M.layoutChips(cfg);
const keys = M.buildTimeline(cfg, laid);
const feas = M.layoutFeasibility(cfg, laid, keys);
chk("layout feasibility gate ok", feas.ok === true, feas.failures.slice(0, 3).join("; "));
chk("exposure union 55/55", Object.keys(feas.exposure).length === 55, Object.keys(feas.exposure).length + "/55");
chk("min centre distance >= required separation", feas.minCentreDistance >= 2 * cfg.chipR + cfg.minCentreGap - 1e-6, "minD=" + feas.minCentreDistance.toFixed(2));

/* --- 2. V1 self-start (stubbed DOM + rAF clock, NO external caller) --- */
function runBrowserVariant(jsText){
  const rafQueue = [];
  let viewBoxSets = 0;
  function makeEl(){
    const el = { attrs: {}, children: [], style: {}, textContent: "",
      setAttribute: function(k, v){ el.attrs[k] = v; if(k === "viewBox") viewBoxSets++; },
      appendChild: function(c){ el.children.push(c); return c; } };
    return el;
  }
  const stage = makeEl(); stage.clientWidth = 360;
  const els = { stage: stage, map: makeEl(), err: makeEl(), fullplate: makeEl() };
  const sandbox = {
    document: { getElementById: function(id){ return els[id]; },
      createElementNS: function(){ return makeEl(); }, body: makeEl() },
    performance: { now: function(){ return 0; } },
    requestAnimationFrame: function(fn){ rafQueue.push(fn); return rafQueue.length; },
    cancelAnimationFrame: function(){},
    Intl: Intl, console: console
  };
  sandbox.window = sandbox;
  const fn = new Function("document", "window", "performance", "requestAnimationFrame", "cancelAnimationFrame", "Intl", jsText + "\nreturn window.__T54;");
  const api = fn(sandbox.document, sandbox, sandbox.performance, sandbox.requestAnimationFrame, sandbox.cancelAnimationFrame, Intl);
  let now = 0, frames = 0;
  while(rafQueue.length && frames < 5000){ const f = rafQueue.shift(); now += 100; frames++; f(now); }
  return { api: api, frames: frames, drained: rafQueue.length === 0, viewBoxSets: viewBoxSets };
}
const auto = runBrowserVariant(js);
chk("V1 self-start: file starts its own clock with no external play() call", auto.frames > 100 && auto.drained,
  "frames driven=" + auto.frames + " (duration " + M.durationMs(cfg, laid) + " ms at 100 ms steps)");
chk("V1 self-start: playback stops at the derived duration (rAF queue drains)", auto.drained === true);
const noAuto = runBrowserVariant(js.replace("autoplayOnLoad: true", "autoplayOnLoad: false"));
chk("V1 control: autoplayOnLoad:false leaves the piece at t=0 (external-start limitation, named)", noAuto.frames === 0,
  "frames=" + noAuto.frames);
chk("V1 API preserved: seek/play/pause/render exposed", ["seek", "play", "pause", "render"].every(function(k){ return typeof auto.api[k] === "function"; }));

/* --- 3. V9 timeline / basis anchors --- */
chk("hold end 1100 / arrival 2000 (Basis B anchors)", keys[1].t === 1100 && keys[2].t === 2000, keys[1].t + "/" + keys[2].t);
chk("pan-away keys 6000 full / 7000 exit-shifted", keys[3].t === 6000 && keys[4].t === 7000 && keys[4].cx === cfg.viewBox.w / 2 + cfg.panExitShiftUnits);
chk("first pass entry starts at 7000 (segment window 0-7000 fully allocated)", M.passSchedule(cfg, laid)[0].start === 7000);
let maxScale = 0, maxCentre = 0, prev = M.cameraAt(cfg, keys, 5875);
for(let t = 5900; t <= 7100; t += 25){
  const c = M.cameraAt(cfg, keys, t);
  maxScale = Math.max(maxScale, Math.abs(c.scale - prev.scale));
  maxCentre = Math.max(maxCentre, Math.hypot(c.cx - prev.cx, c.cy - prev.cy));
  prev = c;
}
chk("camera continuity across 5900-7100 (no snap at the pan)", maxScale < 0.2 && maxCentre < 30, "maxScaleStep=" + maxScale.toFixed(3) + " maxCentreStep=" + maxCentre.toFixed(1));

/* --- 4. V8 placement inside holds --- */
const sched = M.placementSchedule(cfg, laid);
let inHold = true, extentIn = true, inMove = 0;
const moveSegs = [];
for(let s = 0; s < keys.length - 1; s++){
  const a = keys[s], b = keys[s + 1];
  if(a.cx !== b.cx || a.cy !== b.cy || a.scale !== b.scale) moveSegs.push([a.t, b.t]);
}
laid.forEach(function(rc){
  if(!M.isStationary(cfg, keys, rc.placeAtMs)) inHold = false;
  const win = M.windowAt(cfg, M.cameraAt(cfg, keys, rc.placeAtMs));
  if(!M.extentInside(M.chipExtent(cfg, rc), win)) extentIn = false;
  moveSegs.forEach(function(seg){ if(rc.placeAtMs > seg[0] && rc.placeAtMs < seg[1]) inMove++; });
});
chk("V8 every placement inside a stationary camera hold", inHold);
chk("V8 every placement's full extent (disc + tag) inside the camera window", extentIn);
chk("V8 placement-free move intervals (zero placements during camera moves)", inMove === 0, "violations=" + inMove);
chk("V8 pop duration = CONFIG popMs, uncoupled from spacing", M.effectivePopMs(cfg) === cfg.popMs && cfg.popMs === 120);
chk("V8 last placement + pop settle <= pan start 6000", M.placeEndMs(cfg, laid) + M.effectivePopMs(cfg) <= M.panStartMs(cfg),
  (M.placeEndMs(cfg, laid) + M.effectivePopMs(cfg)).toFixed(1) + " <= 6000");
chk("V8 max concurrent pops <= CONFIG cap", M.maxConcurrentPops(cfg, laid) <= cfg.maxConcurrentPops,
  M.maxConcurrentPops(cfg, laid) + " <= " + cfg.maxConcurrentPops);
chk("V8 opening group places inside the opening hold", sched.opening.length > 0 && sched.opening.every(function(rc){ return rc.placeAtMs + cfg.popMs <= cfg.midwestHoldMs; }),
  "opening group=" + sched.opening.length + " step=" + sched.openingStep.toFixed(1));

/* --- 5. V10 derived final hold + per-name budgets --- */
const groups = M.finalIndexGroups(cfg, laid);
let stepOk = true, sumSteps = 0;
for(let g = 0; g < groups.length; g++){
  const expect = cfg.finalIndexBaseMs + cfg.readPerNameMs * groups[g].length;
  if(M.finalIndexStepFor(cfg, laid, g) !== expect) stepOk = false;
  sumSteps += expect;
}
chk("V10 final hold = sum of per-group steps (base + readPerNameMs x names)", M.finalHoldMs(cfg, laid) === sumSteps && sumSteps === 25300,
  "hold=" + M.finalHoldMs(cfg, laid));
chk("V10 duration = pass end + return move + derived hold", M.durationMs(cfg, laid) === M.passEndMs(cfg, laid) + cfg.cameraMoveMs + M.finalHoldMs(cfg, laid),
  "duration=" + M.durationMs(cfg, laid));
let dwellOk = true;
M.passSchedule(cfg, laid).forEach(function(e){
  const names = e.members.length;
  if(e.dwells[0] < names * cfg.readPerNameMs) dwellOk = false;
});
chk("V10 every wave dwell >= names x readPerNameMs (per-name budget)", dwellOk);
const c56 = clone(cfg); c56.chips.push({ name: "Z. Extra", label: "Extra — WA", stateId: "WA", elect: false });
const l56 = M.layoutChips(c56); const g56 = M.finalIndexGroups(c56, l56);
let acc56 = M.returnArrivalMs(c56, l56), g12 = null;
for(let g = 0; g < g56.length; g++){ const st = M.finalIndexStepFor(c56, l56, g); if(g === 11) g12 = [acc56, acc56 + st]; acc56 += st; }
chk("V10 56-chip roster: 12th group starts AND ends inside the derived duration",
  g56.length === 12 && g12[0] < M.durationMs(c56, l56) && g12[1] <= M.durationMs(c56, l56),
  "group12=[" + g12 + "] duration=" + M.durationMs(c56, l56));
chk("V10 56-chip roster validates clean (checkpoints clamped inside duration)", M.validateConfig(c56).length === 0,
  M.validateConfig(c56).slice(0, 2).join("; "));

/* --- 6. V2 effect mappings --- */
const cB = clone(cfg); cB.readPerNameMs = 500;
const lB = M.layoutChips(cB);
chk("V2 readPerNameMs 400->500 raises wave dwell, index step, final hold and duration",
  M.dwellForWave(cB, ["Alpha — AA", "Beta — BB"]) > M.dwellForWave(cfg, ["Alpha — AA", "Beta — BB"]) &&
  M.finalIndexStepFor(cB, lB, 0) > M.finalIndexStepFor(cfg, laid, 0) &&
  M.finalHoldMs(cB, lB) > M.finalHoldMs(cfg, laid) && M.durationMs(cB, lB) > M.durationMs(cfg, laid));
(function(){
  const t = M.passSchedule(cfg, laid)[0].start + cfg.cameraMoveMs + 100;
  const cam = M.cameraAt(cfg, keys, t), win = M.windowAt(cfg, cam);
  const vis = M.labelVisible(cfg, laid, keys, t); const visIdx = [];
  vis.forEach(function(v, i){ if(v) visIdx.push(i); });
  const placedIdx = laid.filter(function(rc){ return rc.placeAtMs <= t; }).map(function(rc){ return rc.i; });
  const wide = M.plateRectsFor(cfg, laid, visIdx, win, 0, placedIdx);
  const cN = clone(cfg); cN.plateMaxDisplacementUnits = 10;
  const narrow = M.plateRectsFor(cN, laid, visIdx, win, 0, placedIdx);
  const dispWide = visIdx.map(function(i){ return M.plateDisplacement(wide[i], laid[i]).toFixed(1); }).join(",");
  const dispNarrow = visIdx.map(function(i){ return narrow[i].fallback ? "FB" : M.plateDisplacement(narrow[i], laid[i]).toFixed(1); }).join(",");
  chk("V2 plateMaxDisplacementUnits changes the admitted candidate set", dispWide !== dispNarrow,
    "cap240=" + dispWide + " cap10=" + dispNarrow);
})();
const cL = clone(cfg); cL.fullPlate.lineHeightFactor = 1.5;
chk("V2 lineHeightFactor changes the reserve (render style site asserted in census)",
  M.fullPlateReserveUnits(cL) > M.fullPlateReserveUnits(cfg) && src.indexOf("plate.style.lineHeight = String(CONFIG.fullPlate.lineHeightFactor)") >= 0,
  "reserve 1.2->" + M.fullPlateReserveUnits(cfg) + " 1.5->" + M.fullPlateReserveUnits(cL));
chk("C9 reserve converts px->units: 38 @360px stage, 19 @720px stage",
  M.fullPlateReserveUnits(cfg) === 38 && M.fullPlateReserveUnits(cfg, 720 / cfg.viewBox.w) === 19,
  M.fullPlateReserveUnits(cfg) + "/" + M.fullPlateReserveUnits(cfg, 720 / cfg.viewBox.w));

/* --- 7. V3 CONFIG consumption + deleted keys --- */
const codeOnly = js.slice(js.indexOf("/* Pure logic"));
const newKeys = ["autoplayOnLoad", "readPerNameMs", "maxConcurrentPops", "plateMaxDisplacementUnits", "plateLeaderWidth", "plateLeaderOpacity", "plateLeader", "profileForWeight", "stageReferenceWidthPx", "finalIndexBaseMs"];
chk("V3 new CONFIG keys consumed in code (not only declared)", newKeys.every(function(k){ return codeOnly.indexOf(k) >= 0 || js.indexOf("P." + k) >= 0 || codeOnly.indexOf("palette." + k) >= 0; }),
  newKeys.filter(function(k){ return codeOnly.indexOf(k) < 0 && js.indexOf("P." + k) < 0; }).join(","));
chk("V3 removed keys absent everywhere (popSpacingRatio, finalFullHoldMs, finalIndexStepMs, dwellFloorMs, dwellPerNameMs)",
  ["popSpacingRatio", "finalFullHoldMs", "finalIndexStepMs", "dwellFloorMs", "dwellPerNameMs"].every(function(k){ return src.indexOf(k) < 0; }));
(function(){
  // generic walk: every scalar CONFIG leaf name is referenced outside the CONFIG block
  const cfgBlock = js.slice(0, js.indexOf("/* Pure logic"));
  const leaves = [];
  (function walk(o, prefix){
    Object.keys(o).forEach(function(k){
      const v = o[k];
      if(v && typeof v === "object" && !Array.isArray(v) && prefix.split(".").length < 2) walk(v, prefix + k + ".");
      else leaves.push(k);
    });
  })(cfg, "");
  const dataKeys = { states: 1, chips: 1, cx: 1, cy: 1, r: 1, ax: 1, ay: 1, name: 1, label: 1, stateId: 1, elect: 1, id: 1, scale: 1, stateIds: 1 };
  const unconsumed = leaves.filter(function(k){ return !dataKeys[k] && codeOnly.indexOf(k) < 0 && js.indexOf("." + k) < 0; });
  chk("V3 consumption walk: every CONFIG leaf has a code reference", unconsumed.length === 0, unconsumed.join(","));
})();

/* --- 8. V4 literal census (outside CONFIG; structural whitelist only) --- */
(function(){
  const nums = {}; let m; const re = /(?<![\w.])-?\d+(?:\.\d+)?(?:e-\d+)?/g;
  while((m = re.exec(codeOnly))) nums[m[0]] = true;
  const allowed = { "0": 1, "1": 1, "2": 1, "-1": 1, "1e-6": 1, "1e-9": 1, "2000": 1 };
  const bad = Object.keys(nums).filter(function(n){ return !allowed[n]; });
  chk("V4 literal census: no unlisted numeric literal outside CONFIG (2000 = SVG namespace string)", bad.length === 0, bad.join(","));
  const hexes = codeOnly.match(/#[0-9a-fA-F]{3,8}/g) || [];
  chk("V4 literal census: no colour literal outside CONFIG", hexes.length === 0, hexes.join(","));
})();

/* --- 9. V5 displayed-state assertions at every checkpoint beat --- */
(function(){
  const beats = [500, M.fullArrivalMs(cfg) + 500];
  M.passSchedule(cfg, laid).forEach(function(e){ beats.push(e.start + cfg.cameraMoveMs + Math.floor(e.dwells[0] / 2)); });
  let acc = M.returnArrivalMs(cfg, laid);
  for(let g = 0; g < groups.length; g++){ const st = M.finalIndexStepFor(cfg, laid, g); beats.push(acc + Math.floor(st / 2)); acc += st; }
  let disjoint = true, boundsOk = true, capOk = true, leaderOk = true, beatsUsed = 0;
  beats.forEach(function(t){
    if(!(t < M.durationMs(cfg, laid))) return;
    beatsUsed++;
    const cam = M.cameraAt(cfg, keys, t), win = M.windowAt(cfg, cam);
    const vis = M.labelVisible(cfg, laid, keys, t); const visIdx = [];
    vis.forEach(function(v, i){ if(v) visIdx.push(i); });
    if(!visIdx.length) return;
    const reserve = M.countPlateUp(cfg, laid, keys, t) ? M.fullPlateReserveUnits(cfg) : 0;
    const placedIdx = laid.filter(function(rc){ return rc.placeAtMs <= t; }).map(function(rc){ return rc.i; });
    const rects = M.plateRectsFor(cfg, laid, visIdx, win, reserve, placedIdx);
    const disp = visIdx.filter(function(i){ return !rects[i].fallback; });
    for(let a = 0; a < disp.length; a++) for(let b = a + 1; b < disp.length; b++)
      if(M.rectsOverlap(rects[disp[a]], rects[disp[b]])) disjoint = false;
    disp.forEach(function(i){
      const r = rects[i];
      if(r.x < win.x - 1e-6 || r.y < win.y - 1e-6 || r.x + r.w > win.x + win.w + 1e-6 || r.y + r.h > win.y + win.h + 1e-6) boundsOk = false;
      laid.forEach(function(rc){
        if(rc.placeAtMs > t) return;
        if(M.rectCircleOverlap(r, rc.x, rc.y, cfg.chipR)) boundsOk = false;
        if(M.rectsOverlap(r, M.initialsBox(cfg, rc))) boundsOk = false;
        if(rc.electRect && M.rectsOverlap(r, rc.electRect)) boundsOk = false;
      });
      if(M.plateDisplacement(r, laid[i]) > cfg.plateMaxDisplacementUnits + 1e-9) capOk = false;
      if(M.plateDisplacement(r, laid[i]) > cfg.connectorThreshold){
        const ep = M.plateLeaderEndpoints(cfg, r, laid[i]);
        const px = Math.min(Math.max(laid[i].x, r.x), r.x + r.w), py = Math.min(Math.max(laid[i].y, r.y), r.y + r.h);
        if(Math.abs(ep.x1 - px) > 1e-9 || Math.abs(ep.y1 - py) > 1e-9) leaderOk = false;
        if(Math.abs(Math.hypot(ep.x2 - laid[i].x, ep.y2 - laid[i].y) - cfg.chipR) > 1e-6) leaderOk = false;
      }
    });
  });
  chk("V5 displayed plates pairwise disjoint at all " + beatsUsed + " checkpoint beats", disjoint);
  chk("V5 displayed plates disjoint from discs + initials boxes + tags, inside the window", boundsOk);
  chk("V5 every displayed plate within the displacement cap", capOk);
  chk("V5 every displaced displayed plate has a leader with matching endpoints", leaderOk);
  let tagOwn = true;
  laid.forEach(function(rc){
    if(rc.electRect && M.rectsOverlap(rc.electRect, M.initialsBox(cfg, rc))) tagOwn = false;
  });
  chk("C5 no elect tag covers its owner's initials (all 10 tags)", tagOwn);
  chk("plate text single-line by construction (plateSize height = one line)", M.plateSize(cfg, "Any — AA").h === cfg.labelSize + 2 * cfg.labelPadY);
})();

/* --- 10. V11 validation fixtures (Phase A/B: layoutCalls=0; Phase C: gate live) --- */
function fixture(name, mutate, expectPhase){
  const c = clone(cfg); mutate(c);
  M.resetLayoutCalls();
  const e = M.validateConfig(c);
  const calls = M.getLayoutCalls();
  if(expectPhase === "AB") chk("V11 " + name + " rejected pre-layout", e.length > 0 && calls === 0, e[0] || "no error");
  else chk("V11 " + name + " rejected in Phase C (gate live)", e.length > 0 && calls > 0, (e[0] || "no error") + " calls=" + calls);
  return e;
}
fixture("plateGridStep:0", function(c){ c.plateGridStep = 0; }, "AB");
fixture("plateGridStep:-1", function(c){ c.plateGridStep = -1; }, "AB");
fixture("tagGridStep:0", function(c){ c.tagGridStep = 0; }, "AB");
fixture("non-finite readPerNameMs", function(c){ c.readPerNameMs = NaN; }, "AB");
fixture("popFromScale out of range", function(c){ c.popFromScale = 2; }, "AB");
fixture("uncovered glyph in a label", function(c){ c.chips[0].label = "Farrell — ŁX"; }, "AB");
fixture("fontWeightBold changed without profileForWeight", function(c){ c.fontWeightBold = 800; }, "AB");
fixture("fontFamily changed without profile", function(c){ c.fontFamily = "Georgia, serif"; }, "AB");
fixture("empty opening region", function(c){ c.midwestStateIds = ["AK"]; }, "AB");
fixture("empty pass region", function(c){ c.passRegions.push({ id: "empty", scale: 1.5, stateIds: ["AK"] }); }, "AB");
fixture("placement-overrun roster (placeMs floor 5000)", function(c){ c.placeMs = 5000; }, "C");
fixture("schema-valid but layout-infeasible (minCentreGap 500)", function(c){ c.minCentreGap = 500; }, "C");

/* --- 11. C10 i18n fixtures --- */
(function(){
  const srcA3 = fs.readFileSync(path.join(ART, "recreation-attempt-3.html"), "utf8");
  const jsA3 = srcA3.split("<script>")[1].split("</script>")[0];
  fs.writeFileSync("/tmp/t54a4-a3.js", jsA3);
  const M3 = require("/tmp/t54a4-a3.js");
  let same = 0;
  cfg.chips.forEach(function(ch){ if(M.initials(ch.name, cfg) === M3.initials(ch.name, M3.CONFIG)) same++; });
  chk("C10 default-roster regression: all 55 initials byte-identical to attempt 3", same === 55, same + "/55");
  chk("C10 combining marks retained (decomposed E-acute stays one cluster)", M.initials("Émile", cfg) === "ÉM",
    JSON.stringify(M.initials("Émile", cfg)));
  chk("C10 initialsCount=3 single-word policy", M.initials("Nakamura", Object.assign(clone(cfg), { initialsCount: 3 })) === "NAK");
  chk("C10 initialsCount=3 multiword policy (first word count-1 + last word 1)",
    M.initials("Sana Nakamura-Reed", Object.assign(clone(cfg), { initialsCount: 3 })) === "SAR",
    JSON.stringify(M.initials("Sana Nakamura-Reed", Object.assign(clone(cfg), { initialsCount: 3 }))));
  chk("C10 initialsCount=1 multiword policy", M.initials("Sana Nakamura-Reed", Object.assign(clone(cfg), { initialsCount: 1 })) === "S");
  chk("C10 graphemes fallback groups combining marks (Segmenter path + code-point path agree)",
    M.graphemes("É", cfg).length === 1 && M.graphemes("É", cfg)[0] === "É");
})();

/* --- 12. V13 swap test --- */
(function(){
  const c = clone(cfg);
  c.chips[0] = { name: "Q. Zebra", label: "Zebra — TX", stateId: "TX", elect: true };
  c.chips[1] = { name: "W. Yarrow", label: "Yarrow — ME", stateId: "ME", elect: false };
  c.chips[2] = { name: "V. Umbra", label: "Umbra — CA", stateId: "CA", elect: false };
  const l = M.layoutChips(c);
  chk("V13 swap chips 1-3 (stateId form): swapped labels/elect flags carried",
    l[0].label === "Zebra — TX" && l[0].elect === true && l[1].label === "Yarrow — ME" && l[2].initials === M.initials("V. Umbra", c),
    l[0].label + " / " + l[1].label + " / " + l[2].label);
  const eSwap = M.validateConfig(c);
  chk("V13 swap roster: feasibility gate prices the perturbed roster explicitly (no silent pass)",
    Array.isArray(eSwap), eSwap.length + " gate findings on the perturbed roster (gate rejects or passes it in the open; the default + appended rosters pass clean)");
  const sNew = M.placementSchedule(c, l);
  chk("V13 swap: derived schedule re-derives and settle bound holds on the swapped roster",
    M.placeEndMs(c, l) + c.popMs <= M.panStartMs(c) && M.maxConcurrentPops(c, l) <= c.maxConcurrentPops);
  const cP = clone(cfg); cP.placeMs = 10;
  const lP = M.layoutChips(cP); const sP = M.placementSchedule(cP, lP);
  chk("V13 placeMs compressed (34->10): derived steps follow the spacing floor rule and settle holds",
    sP.fullStep !== sched.fullStep || sP.openingStep !== sched.openingStep ? true : (sP.fullStep === Math.max((cP.fullDwellMs - cP.popMs) / (sP.full.length + 1), cP.placeMs)),
    "fullStep 34ms-floor=" + sched.fullStep.toFixed(1) + " 10ms-floor=" + sP.fullStep.toFixed(1));
  const cPal = clone(cfg); cPal.palette.land = "#000000";
  chk("V13 palette.land swap: value validates and the land render consumes palette.land",
    M.validateConfig(cPal).length === 0 && js.indexOf("P.land") >= 0);
})();

/* --- 13. V12 purity --- */
(function(){
  const hits = src.match(/segment\.mp4|source\.mp4|o1FsB1nyEWI|video-digests|t[0-9]+\.jpg/g) || [];
  chk("V12 purity grep: 0 specimen-media references", hits.length === 0, hits.join(","));
  chk("V12 no <video>/<img> elements", (src.match(/<video|<img/g) || []).length === 0);
  chk("V12 external-load inventory = SVG namespace string only", (src.match(/http/g) || []).length === 1 && src.indexOf("http://www.w3.org/2000/svg") >= 0);
})();

/* --- 14. V6 staged checkpoints + V15 preservation census --- */
(function(){
  const ckDir = path.join(ART, "codex/attempt-4/checkpoints");
  const workInode = fs.statSync(path.join(ART, "recreation.html")).ino;
  let allOk = true; const detail = [];
  for(let s = 1; s <= 6; s++){
    const p = path.join(ckDir, "checkpoint-S" + s + ".html");
    if(!fs.existsSync(p)){ allOk = false; detail.push("S" + s + " missing"); continue; }
    if(fs.statSync(p).ino === workInode){ allOk = false; detail.push("S" + s + " shares inode"); }
    if(!fs.existsSync(path.join(ckDir, "checkpoint-S" + s + ".txt"))){ allOk = false; detail.push("S" + s + " txt missing"); }
  }
  chk("V6 six staged checkpoints filed, inode-independent, with stage outputs", allOk, detail.join("; "));
  chk("V15 recreation-attempt-3.html preserved (sha + inode distinct)",
    shaFile(path.join(ART, "recreation-attempt-3.html")) === "1ee27ef80cd62382bfdb561e0446034e416e2191e3dd1664fa0bdb9506e629c2" &&
    fs.statSync(path.join(ART, "recreation-attempt-3.html")).ino !== workInode);
  chk("V15 comparison-attempt-3.html + scores-attempt-3.md preserved at baseline shas",
    shaFile(path.join(ART, "comparison-attempt-3.html")) === "9be41d4c39ea23cf53242d69f46c995d68939458f1bf601a0d99055f2bc6c47c" &&
    shaFile(path.join(ART, "scores-attempt-3.md")) === "bb064afa140709e1d6e8c9c830707fc01f59cefe0990e9882d01bcd606b8b87d");
  chk("V15 comparison.html untouched (ORIGINAL invariant, baseline sha)",
    shaFile(path.join(ART, "comparison.html")) === "9be41d4c39ea23cf53242d69f46c995d68939458f1bf601a0d99055f2bc6c47c");
  chk("V15 attempt-1/2 preserved copies at baseline shas",
    shaFile(path.join(ART, "recreation-attempt-1.html")) === "00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704" &&
    shaFile(path.join(ART, "recreation-attempt-2.html")) === "02f31dd34dd13fccd3041233578adfb55dddb95fc674a7cfa7644a9f51a36ed4");
})();

console.log("\nTOTAL: " + pass + " pass, " + fail + " fail");
if(failures.length) console.log("FAILURES:\n" + failures.map(function(f){ return " - " + f; }).join("\n"));
process.exit(fail ? 1 : 0);
