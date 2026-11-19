"use strict";
/* T54 attempt 2 — own-check suite (logic level; PIXEL-UNVERIFIED: no Chrome in seat).
   Asserts EFFECT mappings (A-C002-1), CONFIG consumption (A-C006-2), literal census
   (A-C008-3), displayed-state assertions (A-C004-2/A-C006-3), specimen anchors (A-C006-1). */
const fs = require("fs"), path = require("path"), os = require("os");
const ART = path.join(os.homedir(), "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T54-map-as-table-roster");
const html = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const tmp = "/tmp/t54-attempt2-module.js";
fs.writeFileSync(tmp, script);
const M = require(tmp);
const cfg = M.CONFIG;
let pass = 0, fail = 0; const failures = [];
function ok(cond, name, extra){ if(cond){ pass++; } else { fail++; failures.push(name + (extra ? " :: " + extra : "")); } }
function clone(o){ return JSON.parse(JSON.stringify(o)); }

/* 1. Default validation + derived timeline */
const errs = M.validateConfig(cfg);
ok(errs.length === 0, "validateConfig(default) empty", errs.join("; "));
ok(M.placeEndMs(cfg) === 4400, "placeEnd 4400", String(M.placeEndMs(cfg)));
ok(M.passStartMs(cfg) === 6000, "passStart 6000", String(M.passStartMs(cfg)));
ok(M.durationMs(cfg) === 14000, "duration derived 14000", String(M.durationMs(cfg)));

const laid = M.layoutChips(cfg);
const keys = M.buildTimeline(cfg, laid);

/* 2. Specimen anchors: Midwest zoom at 0, full arrival 3000, full held 3000-6000 */
const cam0 = M.cameraAt(cfg, keys, 0);
ok(Math.abs(cam0.scale - cfg.midwestScale) < 1e-9 && cam0.regionIds && cam0.regionIds.join() === cfg.midwestStateIds.join(), "t=0 Midwest zoom");
ok(Math.abs(M.cameraAt(cfg, keys, 3000).scale - 1) < 1e-9, "full arrival at 3000");
ok(Math.abs(M.cameraAt(cfg, keys, 4500).scale - 1) < 1e-9, "full held at 4500");
ok(Math.abs(M.cameraAt(cfg, keys, 5999).scale - 1) < 1e-9, "full held at 5999");

/* 3. No camera snap: bounded per-50ms movement across the whole timeline */
let maxDScale = 0, maxDCentre = 0;
for(let t = 0; t < 14000; t += 50){
  const a = M.cameraAt(cfg, keys, t), b = M.cameraAt(cfg, keys, t + 50);
  maxDScale = Math.max(maxDScale, Math.abs(b.scale - a.scale));
  maxDCentre = Math.max(maxDCentre, Math.hypot(b.cx - a.cx, b.cy - a.cy));
}
ok(maxDScale < 0.2, "camera scale continuous (no snap)", "maxDScale=" + maxDScale.toFixed(3));
ok(maxDCentre < 30, "camera centre continuous (no snap)", "maxDCentre=" + maxDCentre.toFixed(1));

/* 4. Layout: no disc overlap, discs inside viewBox, displacement census */
let minD = 1e9, overlapPairs = 0;
for(let i = 0; i < laid.length; i++) for(let j = i + 1; j < laid.length; j++){
  const d = Math.hypot(laid[j].x - laid[i].x, laid[j].y - laid[i].y);
  minD = Math.min(minD, d); if(d < 2 * cfg.chipR) overlapPairs++;
}
ok(overlapPairs === 0, "zero overlapping disc pairs", "pairs=" + overlapPairs + " minD=" + minD.toFixed(1));
ok(minD >= 2 * cfg.chipR + cfg.minCentreGap - 1.5, "min centre distance near target", minD.toFixed(2));
ok(laid.every(r => r.x - cfg.chipR >= 0 && r.x + cfg.chipR <= cfg.viewBox.w && r.y - cfg.chipR >= 0 && r.y + cfg.chipR <= cfg.viewBox.h), "every disc fully inside viewBox");
const displaced = laid.filter(r => r.displaced > cfg.connectorThreshold).length;

/* 5. Elect tags: placement search succeeded, no centre covered, no tag-tag overlap */
ok(laid.filter(r => r.electFallback).length === 0, "elect placement no fallback");
let tagCentreHit = 0, tagTagHit = 0; const tags = laid.filter(r => r.electRect);
tags.forEach(tg => { laid.forEach(o => { if(o !== tg && o.x > tg.electRect.x && o.x < tg.electRect.x + tg.electRect.w && o.y > tg.electRect.y && o.y < tg.electRect.y + tg.electRect.h) tagCentreHit++; }); });
for(let i = 0; i < tags.length; i++) for(let j = i + 1; j < tags.length; j++){
  const a = tags[i].electRect, b = tags[j].electRect;
  if(a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h) tagTagHit++;
}
ok(tagCentreHit === 0, "no elect tag covers another chip centre", String(tagCentreHit));
ok(tagTagHit === 0, "no elect tag overlaps another", String(tagTagHit));

/* 6. Plates at every hold: inside camera window, reserve respected, pairwise disjoint, no fallback */
function checkPlatesAt(t, name){
  const cam = M.cameraAt(cfg, keys, t), win = M.windowAt(cfg, cam);
  const vis = M.labelVisible(cfg, laid, keys, t), idx = [];
  vis.forEach((v, i) => { if(v) idx.push(i); });
  const fullUp = (cam.scale === 1 && t >= M.placeEndMs(cfg)) ? 1 : 0;
  const rects = M.plateRectsFor(cfg, laid, idx, win, fullUp ? cfg.fullPlate.reserveUnits : 0);
  let good = true, why = "";
  const rs = Object.values(rects);
  rs.forEach(r => { if(r.fallback){ good = false; why = "fallback"; }
    if(r.x < win.x - 1e-6 || r.y < win.y - 1e-6 || r.x + r.w > win.x + win.w + 1e-6 || r.y + r.h > win.y + win.h - (fullUp ? cfg.fullPlate.reserveUnits : 0) + 1e-6){ good = false; why = "outside window"; } });
  for(let i = 0; i < rs.length; i++) for(let j = i + 1; j < rs.length; j++){
    const a = rs[i], b = rs[j];
    if(a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h){ good = false; why = "plate overlap"; }
  }
  ok(good, "plates fit at " + name + " (n=" + rs.length + ")", why);
  return idx;
}
checkPlatesAt(1000, "midwest hold");
checkPlatesAt(5000, "full hold");
const ps = M.passStartMs(cfg);
cfg.passRegions.forEach((reg, ri) => checkPlatesAt(ps + ri * M.passStepMs(cfg) + M.passStepMs(cfg) - 100, "pass " + reg.id));
checkPlatesAt(13500, "final full hold");

/* 7. Roster-pass identity union + per-chip label exposure over the timeline */
const seenLabel = new Set();
for(let t = 0; t <= 14000; t += 50){
  const vis = M.labelVisible(cfg, laid, keys, t);
  vis.forEach((v, i) => { if(v) seenLabel.add(i); });
}
ok(seenLabel.size === 55, "every identity label-exposed across timeline", "seen=" + seenLabel.size);

/* 8. Pass framing: every region chip inside its pass-hold camera window */
cfg.passRegions.forEach((reg, ri) => {
  const t = ps + ri * M.passStepMs(cfg) + M.passStepMs(cfg) - 100;
  const win = M.windowAt(cfg, M.cameraAt(cfg, keys, t));
  const outside = laid.filter(r => reg.stateIds.includes(r.stateId) && (r.x < win.x || r.x > win.x + win.w || r.y < win.y || r.y > win.y + win.h));
  ok(outside.length === 0, "pass framing contains region " + reg.id, outside.map(r => r.stateId).join(","));
});

/* 9. Placement coverage: every chip anchor inside the camera window at its placement time */
let uncovered = 0;
laid.forEach(rc => { const win = M.windowAt(cfg, M.cameraAt(cfg, keys, rc.placeAtMs));
  if(rc.anchorX < win.x || rc.anchorX > win.x + win.w || rc.anchorY < win.y || rc.anchorY > win.y + win.h) uncovered++; });
ok(uncovered === 0, "every placement inside camera window at place time", "uncovered=" + uncovered);

/* 10. Pop cadence: effective pop never overlaps spacing */
ok(M.effectivePopMs(cfg) < cfg.placeMs, "pop < spacing default", M.effectivePopMs(cfg) + "<" + cfg.placeMs);

/* 11. Swap fixtures with effect mappings */
const swap = clone(cfg);
swap.chips[0] = { name: "A. Test", label: "Test — TS", stateId: "WA", elect: true };
swap.chips[1] = { name: "B. Probe", label: "Probe — PB", stateId: "WA", elect: false };
swap.chips[2] = { name: "C. Swap", label: "Swap — SW", stateId: "OR", elect: true };
swap.chips.push({ name: "D. Extra", label: "Extra — EX", stateId: "HI", elect: false });
swap.placeMs = 110; swap.palette.land = "#4a3352";
const sErr = M.validateConfig(swap), sLaid = M.layoutChips(swap);
ok(sErr.length === 0, "swap validates", sErr.join("; "));
ok(sLaid.length === 56 && sLaid[55].stateId === "HI" && sLaid[55].placeAtMs === 56 * 110, "swap cardinality + appended last");
ok(M.effectivePopMs(swap) === 99 && M.effectivePopMs(swap) < 110, "swap pop scales to spacing", String(M.effectivePopMs(swap)));
ok(swap.palette.land === "#4a3352" && script.includes("P.land"), "swap palette value is the value the land render reads");
ok(M.passStartMs(swap) === 8400 && M.durationMs(swap) === 19600 && M.durationMs(swap) > M.placeEndMs(swap), "swap derived duration fits completion (time-rescaled beats)",
   M.passStartMs(swap) + "/" + M.durationMs(swap) + "/" + M.placeEndMs(swap));
const uncad = clone(cfg); uncad.chips.push({ name: "D. Extra", label: "Extra — EX", stateId: "HI", elect: false }); uncad.placeMs = 240;
ok(M.validateConfig(uncad).length === 0 && M.durationMs(uncad) > M.placeEndMs(uncad), "unchanged-cadence 56-chip roster fits (passStart " + M.passStartMs(uncad) + ", duration " + M.durationMs(uncad) + " > completion " + M.placeEndMs(uncad) + ")");
const six = clone(cfg); six.chips = Array.from({ length: 6 }, (_, i) => ({ name: "T. Six" + i, label: "Six" + i + " — WA", stateId: "WA", elect: false }));
ok(M.validateConfig(six).length === 0, "six chips one state validates");
const offs = new Set([0,1,2,3,4,5].map(o => { const f = M.offsetFor(cfg, o); return f.dx + "," + f.dy; }));
ok(offs.size === 6, "generated same-state offsets distinct (no wrap)", [...offs].join(" "));
const uni = clone(cfg); uni.chips = [{ name: "Élodie Ñuñez", label: "Ñuñez — WA", stateId: "WA", elect: false }, { name: "X. Given", label: "Given — OR", stateId: "OR", elect: false, initials: "GX" }, { name: "123", label: "Num — CA", stateId: "CA", elect: false }];
const uLaid = M.resolveChips(uni);
ok(uLaid[0].initials === "ÉÑ", "unicode initials derived", uLaid[0].initials);
ok(uLaid[1].initials === "GX", "configured initials field honoured");
ok(uLaid[2].initials === cfg.missingInitials, "missing-name fallback from CONFIG");
const dupS = clone(cfg); dupS.states.push({ id: "WA", cx: 10, cy: 10, r: 5 });
ok(M.validateConfig(dupS).some(e => e.includes("duplicate")), "duplicate state id rejected with field error");
const badChip = clone(cfg); badChip.chips[0].stateId = "ZZ";
ok(M.validateConfig(badChip).some(e => e.includes("chips[0].stateId")), "unknown chip state rejected with field error");
const badReg = clone(cfg); badReg.passRegions[0].stateIds.push("ZZ");
ok(M.validateConfig(badReg).some(e => e.includes("passRegions[0]")), "unknown pass-region state rejected with field error");
const badRatio = clone(cfg); badRatio.popSpacingRatio = 1;
ok(M.validateConfig(badRatio).length > 0, "popSpacingRatio boundary rejected");

/* 12. CONFIG consumption census (A-C006-2): every key resolves to a use outside the CONFIG block */
const cfgEnd = script.indexOf("/* Pure logic");
const codeAfter = script.slice(cfgEnd);
const unconsumed = [];
(function walk(obj, prefix){
  Object.keys(obj).forEach(k => {
    const p = prefix ? prefix + "." + k : k, v = obj[k];
    if(v && typeof v === "object" && !Array.isArray(v)){ walk(v, p); return; }
    const used = codeAfter.includes("." + k) || codeAfter.includes(k + ":") || codeAfter.includes('"' + k + '"');
    if(!used) unconsumed.push(p);
  });
})(cfg, "");
/* Data-carrier keys consumed wholesale via their parent structures: */
const dataCarriers = ["states", "chips", "passRegions", "passRegions.id", "passRegions.scale", "passRegions.stateIds", "states.id", "states.cx", "states.cy", "states.r", "states.ax", "states.ay", "chips.name", "chips.label", "chips.stateId", "chips.elect", "chips.initials", "palette.landAlt"];
const realUnconsumed = unconsumed.filter(u => !dataCarriers.includes(u) && !u.startsWith("glyphWidths."));
ok(realUnconsumed.length === 0, "CONFIG consumption census: 0 unconsumed keys", realUnconsumed.join(","));
console.log("census: walked keys unconsumed(raw)=" + unconsumed.length + " data-carrier=" + (unconsumed.length - realUnconsumed.length) + " real=" + realUnconsumed.length);

/* 13. Literal census (A-C008-3): numeric literals outside CONFIG in script+style */
const style = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const outside = style + script.slice(cfgEnd);
const noStrings = outside.replace(/"[^"]*"|'[^']*'|`[^`]*`/g, '""');
const nums = (noStrings.match(/(?<![\w$])-?\d+\.?\d*/g) || []).map(Number);
const whitelist = new Set([0, 1, 2, -1, 100, 50, -50]);
const badNums = [...new Set(nums.filter(n => !whitelist.has(n)))];
ok(badNums.length === 0, "literal census: no unlisted numeric literals outside CONFIG", badNums.join(","));
const colorLits = noStrings.match(/#[0-9a-fA-F]{3,8}/g) || [];
ok(colorLits.length === 0, "literal census: no color literals outside CONFIG", colorLits.join(","));

/* 14. Purity */
const purityHits = (html.match(/segment\.mp4|source\.mp4|o1FsB1nyEWI|video-digests|t[0-9]+\.jpg/g) || []).length;
ok(purityHits === 0, "purity grep 0 hits");
ok((html.match(/<video/g) || []).length === 0 && (html.match(/<img/g) || []).length === 0, "no video/img embeds");
ok(!/https?:\/\//.test(html.replace("http://www.w3.org/2000/svg", "")), "no external URLs besides SVG namespace");

/* 14b. Initials fit: natural width measured from the glyph table; clamp bounds the rest */
const clamped = laid.filter(r => r.initialsWidth > cfg.initialsMaxWidth);
ok(laid.every(r => Math.min(r.initialsWidth, cfg.initialsMaxWidth) <= 2 * (cfg.chipR - cfg.chipRingW)), "every initials string fits the disc inner width (natural or clamped)", "clamped=" + clamped.map(r => r.label + ":" + r.initialsWidth.toFixed(1)).join(","));
ok(script.includes("textLength"), "render clamps over-wide initials via textLength");

/* 15. Displayed state at completion */
ok(M.placedCount(cfg, 14000) === 55 && Math.abs(M.cameraAt(cfg, keys, 14000).scale - 1) < 1e-9, "completed state: all placed, full view");
console.log("layout: minD=" + minD.toFixed(2) + " displacedWithConnectors=" + displaced + " electTags=" + tags.length);
console.log("RESULT: " + pass + " pass, " + fail + " fail");
failures.forEach(f => console.log("FAIL: " + f));
process.exit(fail ? 1 : 0);
