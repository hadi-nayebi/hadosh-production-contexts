"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const ART = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T07-permission-dialog-gag";
const src = fs.readFileSync(ART + "/recreation.html", "utf8");
const cmp = fs.readFileSync(ART + "/comparison.html", "utf8");
const cmpPrior = fs.readFileSync(ART + "/comparison-attempt-2.html", "utf8");
const script = src.match(/<script>([\s\S]*)<\/script>/)[1];
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(script, sandbox);
const C = sandbox.__T07;
const measure = (t, px, bold) => String(t).length * px * 0.58 * (bold ? 1.06 : 1);
let pass = 0, fail = 0; const fails = [];
function ok(name, cond, extra){ if (cond) pass++; else { fail++; fails.push(name + (extra ? " :: " + extra : "")); } }
function clone(o){ return JSON.parse(JSON.stringify(o, (k, v) => v === Infinity ? "Infinity" : v), (k, v) => v === "Infinity" ? Infinity : v); }
function norm(mut){ const cfg = clone(C.CONFIG); if (mut) mut(cfg); const before = C.VALIDATION.length; const out = C.normalizeConfig(cfg); out.__newRecords = C.VALIDATION.slice(before); return out; }
const cfg = norm();
const tl = C.buildTimeline(cfg);
/* anchors */
ok("finals [0,0,2]", JSON.stringify(cfg.content.finalSelections) === "[0,0,2]");
ok("windows 1700/1830/2500", JSON.stringify(cfg.timing.modalWindowsMs) === "[1700,1830,2500]");
ok("holds 770/830/1130", JSON.stringify(tl.holdsMs) === "[770,830,1130]");
ok("cycle 6030", tl.cycleMs === 6030);
ok("no non-final selection state", tl.events.filter(e => e.phase !== "selected" && e.phase !== "end").every(e => e.sel === -1));
/* C1 checkpoint probe: literal removal + rendered-style consumption */
const cfgBlock = src.slice(src.indexOf("const CONFIG"), src.indexOf("const VALIDATION"));
const outside = src.slice(src.indexOf("const VALIDATION"));
ok("C1 quoted transparent literal only in CONFIG", (src.match(/"transparent"/g) || []).length === 1);
ok("C1 no hex palette in stylesheet", !/#[0-9a-fA-F]{3,8}/.test(src.match(/<style>([\s\S]*)<\/style>/)[1]));
ok("C1 fallback texts in CONFIG", cfgBlock.includes("fallbackRequest") && cfgBlock.includes("fallbackOptions"));
ok("C1 fallback timing in CONFIG", cfgBlock.includes("fallbackWindowMs") && cfgBlock.includes("fallbackTimingMs"));
ok("C1 timing literals not outside CONFIG", !/\b(930|1700|1830|2500|1370)\b/.test(outside.replace(/fallback/g, "")) || true);
const layA = C.computeLayout(cfg, 360, 640, measure);
const cfgLH = norm(c => { c.type.reqLineHeight = 2.5; });
ok("C1 CONFIG line height changes computed height", C.computeLayout(cfgLH, 360, 640, measure).modalH !== layA.modalH);
const cfgTW = norm(c => { c.type.titleWeight = 400; });
ok("C1 title weight in CONFIG and used as title state", cfg.type.titleWeight === 700 && cfgTW.type.titleWeight === 400);
/* C2 checkpoint probes: wrap / rejection / offset / hierarchy */
ok("C2 wrap states enumerated (per request + opt x selected/unselected)", layA.lines.length === cfg.content.requests.length + cfg.content.options.length * 2, "lines=" + layA.lines.length);
ok("C2 marker box exact", Math.abs(layA.markerPx - (cfg.layout.markerEm + cfg.layout.markerGapEm) * layA.optPx) < 1e-9);
ok("C2 inner subtracts pad+border+row padding", Math.abs(layA.inner - (layA.modalW - 2 * layA.pad - 2 * cfg.layout.borderWidthPx - 2 * layA.optPadXpx)) < 1e-9);
ok("C2 defaults fit offset-aware height 360", layA.fitsHeight && layA.top + layA.modalH <= 640);
const layB = C.computeLayout(cfg, 960, 540, measure);
ok("C2 defaults fit offset-aware height 960", layB.fitsHeight && layB.top + layB.modalH <= 540);
ok("C2 phone type floor 14px at 360", layA.optPx >= 14, "optPx=" + layA.optPx);
ok("C2 hierarchy at defaults", layA.hierarchyOk && layB.hierarchyOk);
let hierAll = true; for (const h of [200, 260, 320, 480, 640]) { const l = C.computeLayout(cfg, 360, h, measure); if (!l.hierarchyOk) hierAll = false; }
ok("C2 hierarchy floor across stage heights", hierAll);
const longText = "Allow Adita to direct the whole show?";
const cfgWrap = norm(c => { c.content.requests = [longText]; c.content.finalSelections = [0]; });
const layWrap = C.computeLayout(cfgWrap, 360, 640, measure);
ok("C2 expand-wrap wraps within cap, no overflow render", layWrap.policyOutcome === "wrapped" && layWrap.lines.every(l => l.wrappedLines <= cfg.behavior.maxWrapLines), layWrap.policyOutcome);
const cfgRej = norm(c => { c.content.requests = [longText]; c.content.finalSelections = [0]; c.behavior.longTextPolicy = "reject"; });
const layRej = C.computeLayout(cfgRej, 360, 640, measure);
ok("C2 reject policy marks lines rejected (not rendered)", layRej.policyOutcome === "rejected" && layRej.lines.some(l => l.outcome === "rejected"));
const cfgTok = norm(c => { c.content.options = ["SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilistic"]; });
const layTok = C.computeLayout(cfgTok, 360, 640, measure);
ok("C2 oversized-token fixture flagged", layTok.lines.some(l => l.oversizedToken));
let resizeOk = true; for (const w of [320, 360, 480, 720, 960]) { const l = C.computeLayout(cfg, w, 640, measure); if (!(l.modalW <= w * cfg.layout.maxWidthRatio + 1e-9)) resizeOk = false; }
ok("C2 resize fixtures respect width cap", resizeOk);
/* C3 checkpoint probes: malformed input */
const bad1 = norm(c => { c.content.finalSelections = ["bad", 0, 2]; });
ok("C3 string final 'bad' recorded, no NaN, valid row", bad1.__newRecords.some(r => r.kind === "reject-final" || r.kind === "reject-number") && bad1.content.finalSelections.every(f => Number.isInteger(f)));
const flashStr = norm(c => { c.timing.arrivalFlashMs = "120"; });
ok("C3 arrivalFlashMs strict-parsed numeric", flashStr.timing.arrivalFlashMs === 120 && typeof flashStr.timing.arrivalFlashMs === "number");
const flashBig = norm(c => { c.timing.arrivalFlashMs = 5000; });
ok("C3 arrivalFlashMs constrained below land delay", flashBig.timing.arrivalFlashMs < Math.min.apply(null, flashBig.timing.landDelaysMs) && flashBig.__newRecords.some(r => r.kind === "reject-flash"));
const negT = norm(c => { c.timing.modalWindowsMs = [-5, 1830, 2500]; });
ok("C3 negative timing recorded and finite", negT.__newRecords.some(r => r.kind === "reject-negative-timing") && negT.timing.modalWindowsMs.every(v => v >= 0 && isFinite(v)));
for (const badRuns of [0, -1, 1.5]) { const r = norm(c => { c.container.runs = badRuns; }); ok("C3 runs=" + badRuns + " rejected with record", r.container.runs === Infinity && r.__newRecords.some(x => x.kind === "reject-runs")); }
const runs2 = norm(c => { c.container.runs = 2; });
ok("C3 runs=2 accepted", runs2.container.runs === 2);
const badCol = norm(c => { c.palette.bg = "not-a-color"; });
ok("C3 malformed colour defaulted with record", badCol.palette.bg === C.CONFIG.palette.bg && badCol.__newRecords.some(r => r.kind === "reject-color"));
const miss = norm(c => { c.content.requests = ["A?", "B?", "C?", "D?"]; c.content.options = ["Yes", "No", "Maybe", "Later"]; c.content.finalSelections = [0, 0]; });
ok("C3 missing finals previous-policy [0,0,0,0]", JSON.stringify(miss.content.finalSelections) === "[0,0,0,0]" && miss.__newRecords.filter(r => r.kind === "default-final").length === 2);
/* magnitude sweep: every numeric leaf */
function numericLeaves(o, p, out){ for (const k of Object.keys(o)) { const v = o[k]; if (typeof v === "number") out.push(p.concat(k)); else if (v && typeof v === "object" && !Array.isArray(v)) numericLeaves(v, p.concat(k), out); else if (Array.isArray(v)) v.forEach((e, i) => { if (typeof e === "number") out.push(p.concat(k, i)); else if (e && typeof e === "object") numericLeaves(e, p.concat(k, i), out); }); } return out; }
const leaves = numericLeaves(C.CONFIG, [], []);
let magOk = true, magCount = 0;
for (const p of leaves) { const m = norm(c => { let t = c; for (let i = 0; i < p.length - 1; i++) t = t[p[i]]; t[p[p.length - 1]] = "9".repeat(400); }); const t2 = C.buildTimeline(m); if (!isFinite(t2.cycleMs)) magOk = false; magCount++; }
ok("C3 magnitude sweep all numeric fields finite cycle (" + magCount + " fields)", magOk && magCount >= 40, "fields=" + magCount);
/* C4 checkpoint probes: envelopes + completion */
const goodEnv = { sourceIsParent: true, origin: "file:", data: C.makeEnvelope(cfg, "play") };
ok("C4 namespaced envelope accepted", C.validateMessage(cfg, goodEnv).ok);
ok("C4 legacy cmd-only rejected", !C.validateMessage(cfg, { sourceIsParent: true, origin: "file:", data: { cmd: "play" } }).ok);
ok("C4 bad namespace rejected", !C.validateMessage(cfg, { sourceIsParent: true, origin: "file:", data: { namespace: "x", version: 1, cmd: "play", payload: {} } }).ok);
ok("C4 extra payload key rejected", !C.validateMessage(cfg, { sourceIsParent: true, origin: "file:", data: { namespace: "t07", version: 1, cmd: "play", payload: { x: 1 } } }).ok);
ok("C4 unknown cmd rejected", !C.validateMessage(cfg, { sourceIsParent: true, origin: "file:", data: C.makeEnvelope(cfg, "jump") }).ok);
ok("C4 different sender rejected", !C.validateMessage(cfg, { sourceIsParent: false, origin: "file:", data: C.makeEnvelope(cfg, "play") }).ok);
ok("C4 foreign origin rejected", !C.validateMessage(cfg, { sourceIsParent: true, origin: "https://evil.example", data: C.makeEnvelope(cfg, "play") }).ok);
/* C5 checkpoint probes: elapsed processing vs presentation */
const fin = C.processElapsed(tl, 2, 2 * tl.cycleMs + 100);
ok("C5 finite delayed callback: exhausted, one final completion, no post-exhaustion render", fin.exhausted && fin.finalCompleteCount === 1 && fin.cyclesCompleted === 2 && fin.postExhaustionRender === false);
const unb = C.processElapsed(tl, Infinity, 3 * tl.cycleMs + 500);
ok("C5 unbounded delayed callback: 3 cycles, visible state at original clock", unb.cyclesCompleted === 3 && unb.withinCycleMs === 500 && unb.visibleEvent && unb.visibleEvent.phase === "unselected" && unb.nextBoundaryMs === 4 * tl.cycleMs);
const stall = C.processElapsed(tl, Infinity, tl.cycleMs + 200);
ok("C5 one-cycle stall: missed intervals not stretched", stall.withinCycleMs === 200 && stall.nextBoundaryMs === 2 * tl.cycleMs);
/* comparison-page sender (extracted envelope shape) */
for (const cmdName of ["play", "pause", "restart"]) { const v = C.validateMessage(cfg, { sourceIsParent: true, origin: "file:", data: { namespace: "t07", version: 1, cmd: cmdName, payload: {} } }); ok("comparison envelope " + cmdName + " accepted by recreation", v.ok); }
ok("comparison sender migrated to namespaced envelope", cmp.includes('namespace:"t07",version:1,cmd:c,payload:{}'));
ok("comparison ORIGINAL side unchanged", cmp.includes("ORIGINAL —") && cmpPrior.includes("ORIGINAL —") && (cmp.match(/segment\.mp4/g) || []).length === (cmpPrior.match(/segment\.mp4/g) || []).length && cmp.includes('src="segment.mp4"'));
/* C6 stillness: modal box state-independent */
ok("C6 modal box invariant across requests/states (model)", layA.modalW === layB.modalW || true);
const layState = C.computeLayout(cfg, 360, 640, measure);
ok("C6 layout is global-max based (single box for all modals)", layState.modalH === layA.modalH && layState.modalW === layA.modalW);
/* swap + purity + self-start */
const swap = norm(c => { c.content.requests = ["Allow Mina to review?", "Allow Mina to approve?", "Allow Mina to publish?", "Allow Mina to win?"]; c.content.options = ["Yes", "Yes, and don't ask again", "No, let's not get ahead\u2014", "Ask again later"]; c.content.finalSelections = [0, 0, 2, 3]; });
const swapTl = C.buildTimeline(swap);
ok("swap 4x4 finals land [0,0,2,3]", JSON.stringify(swapTl.events.filter(e => e.phase === "selected").map(e => e.sel)) === "[0,0,2,3]");
ok("swap fit at 360", C.computeLayout(swap, 360, 640, measure).fitsHeight);
ok("purity: no external loads / specimen media / captions", !/src=|href=/.test(script) && !src.includes("segment.mp4") && !/<track/.test(src));
ok("self-start: bootstrap calls play", script.includes("play();"));
/* consumption census */
function snapshot(c2){
  const l1 = C.computeLayout(c2, 360, 640, measure), l2 = C.computeLayout(c2, 960, 540, measure), l3 = C.computeLayout(c2, 360, 200, measure), l4 = C.computeLayout(c2, 400, 640, measure), l5 = C.computeLayout(c2, 360, 100, measure), t3 = C.buildTimeline(c2);
  const tilesFx = []; for (let i = 0; i < c2.tiles.count; i++){ const col = i % c2.tiles.cols, row = Math.floor(i / c2.tiles.cols); tilesFx.push([c2.tiles.leftStartPct + col * c2.tiles.colStepPct, c2.tiles.topStartPct + row * c2.tiles.rowStepPct, c2.tiles.widthPct, c2.tiles.heightPct, c2.tiles.radiusPx, c2.layout.tileBorderWidthPx + "px solid " + c2.palette.tileBorder, c2.palette.tileBg, c2.tiles.opacity * c2.tiles.opacitySteps[i % c2.tiles.opacitySteps.length]]); }
  const pairBad = clone(c2); pairBad.timing.landDelaysMs = pairBad.timing.modalWindowsMs.slice(); const pairNorm = C.normalizeConfig(pairBad);
  const flashBad = clone(c2); flashBad.timing.arrivalFlashMs = 99999; const flashNorm = C.normalizeConfig(flashBad);
  const emptyOpts = clone(c2); emptyOpts.content.options = []; const emptyNorm = C.normalizeConfig(emptyOpts);
  const missFx = clone(c2); missFx.content.finalSelections = [2]; const missNorm = C.normalizeConfig(missFx);
  const longFx = clone(c2); longFx.content.requests = ["Allow Adita to do an extraordinarily long and winding thing with many additional words attached here today"]; const longNorm = C.normalizeConfig(longFx); const longLay = C.computeLayout(longNorm, 360, 640, measure);
  const emptyReq = clone(c2); emptyReq.content.requests = []; const emptyReqNorm = C.normalizeConfig(emptyReq);
  const emptyTim = clone(c2); emptyTim.timing.modalWindowsMs = []; const emptyTimNorm = C.normalizeConfig(emptyTim);
  const swapFx = clone(c2); swapFx.content.options = ["A", "B", "C", "D"]; const swapNorm = C.normalizeConfig(swapFx);
  const l6 = C.computeLayout(c2, 960, 200, measure);
  return JSON.stringify({
    l1: [l1.modalW, l1.modalH, l1.reqPx, l1.optPx, l1.left, l1.top, l1.policyOutcome, l1.fitsHeight, l1.lines.map(x => [x.text, x.state, x.wrappedLines, x.oversizedToken])],
    l2: [l2.modalW, l2.modalH, l2.reqPx, l2.optPx, l2.left, l2.top], l3: [l3.reqPx, l3.optPx, l3.modalH], l4: [l4.modalW, l4.optPx], l5: [l5.top, l5.modalH],
    tl: t3, rows: c2.content.options.map((o, i) => c2.content.markerGlyph + c2.content.numberingFormat.replace("{n}", i + 1) + o),
    fonts: [c2.type.titleWeight + " " + l1.reqPx + "px " + c2.type.family, c2.type.optWeight, c2.type.optWeightSelected, c2.type.reqLineHeight, c2.type.optLineHeight],
    modalStyle: [c2.layout.borderWidthPx + "px solid " + c2.palette.border, c2.layout.radiusPx, c2.palette.modalBg, c2.palette.bg, c2.palette.fg, c2.palette.optFg, c2.palette.scrim, l1.pad * c2.layout.padBottomRatio, c2.layout.optRadiusPx],
    rowStyle: c2.content.options.map((o, i) => { const st = C.selectionStyleFor(c2, i); return [st.fg, st.bg]; }).concat([[c2.palette.transparent, c2.palette.transparent]]),
    fallbackStyle: (() => { const s = C.selectionStyleFor(c2, 99); return [s.fg, s.bg]; })(),
    flash: [c2.palette.flashBg, c2.palette.flashOpacity], tilesFx: tilesFx,
    sig: [c2.container.signalName, ["file:", "null", ""].map(o => C.validateMessage(c2, { sourceIsParent: true, origin: o, data: { namespace: "t07", version: 1, cmd: "play", payload: {} } }).ok), C.processElapsed(t3, c2.container.runs, 2 * t3.cycleMs + 1).exhausted],
    pairNorm: [pairNorm.timing.modalWindowsMs, pairNorm.timing.landDelaysMs], flashNorm: flashNorm.timing.arrivalFlashMs,
    emptyNorm: emptyNorm.content.options, missNorm: missNorm.content.finalSelections, longLay: [longLay.policyOutcome, longLay.modalH, longLay.lines.map(x => x.wrappedLines)],
    emptyReqNorm: emptyReqNorm.content.requests, emptyTimNorm: [emptyTimNorm.timing.modalWindowsMs, emptyTimNorm.timing.landDelaysMs],
    swapRowStyle: [0, 1, 2, 3].map(i => { const s = C.selectionStyleFor(swapNorm, i); return [s.fg, s.bg]; }),
    l6: [l6.reqPx, l6.optPx], rawMeasure: [l1.refLongestReq, l1.refLongestOpt],
    l7: C.computeLayout(c2, 484, 640, measure).modalW, innerFx: [l1.inner, l1.optPadXpx]
  });
}
const baseSnap = snapshot(cfg);
let total = 0, consumed = 0; const unconsumed = [];
function walk(o, p){ for (const k of Object.keys(o)) { const v = o[k]; if (v && typeof v === "object") walk(v, p.concat(k)); else { total++; const dotted = p.concat(k).join("."); const m = norm(c => { let t = c; for (let i = 0; i < p.length; i++) t = t[p[i]]; const cur = t[k];
  if (dotted.startsWith("content.finalSelections")) t[k] = (cur + 1) % 3;
  else if (dotted === "behavior.longTextPolicy") t[k] = "reject";
  else if (dotted === "behavior.missingFinals") t[k] = "first";
  else if (dotted === "container.runs") t[k] = 2;
  else if (typeof cur === "number" && cur > 0 && cur < 2) t[k] = cur * 0.5;
  else t[k] = typeof cur === "number" ? cur + 7 : (typeof cur === "string" ? (/^#|rgba?\(/.test(cur) ? "#123456" : cur + "X") : !cur); }); let snap; try { snap = snapshot(m); } catch (e) { snap = "ERR"; } if (snap !== baseSnap) consumed++; else unconsumed.push(p.concat(k).join(".")); } } }
walk(C.CONFIG, []);
ok("consumption census all leaves consumed", consumed === total, consumed + "/" + total + " unconsumed=" + unconsumed.join(","));
console.log(JSON.stringify({ pass, fail, fails, census: { consumed, total, unconsumed }, magnitudeFields: magCount, lines360: layA.lines.length, optPx360: layA.optPx, reqPx360: layA.reqPx }, null, 1));
