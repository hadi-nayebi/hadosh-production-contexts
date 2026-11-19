"use strict";
// T243 harness — node harness-t243.js (artifact dir). Extracts recreation.html's script, evals with a window stub.
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/recreation.html", "utf8");
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log("FAIL no script block"); process.exit(1); }
const cut = m[1].split("if (typeof document")[0];
const windowStub = {};
const f = new Function("window", cut + "; return window.__T243;");
const T = f(windowStub);
const cfg = T.CONFIG, S = T.schedule(cfg);
let pass = 0, fail = 0;
function ok(name, cond, detail){ if (cond){ pass++; console.log("PASS " + name + (detail ? " :: " + detail : "")); } else { fail++; console.log("FAIL " + name + (detail ? " :: " + detail : "")); } }
function approx(a, b){ return Math.abs(a - b) < 1e-9; }
console.log("SCHEDULE " + JSON.stringify(S));
console.log("VALIDATE default: " + T.validateConfig(cfg));
const dayCount = cfg.cols * cfg.rows;
ok("COUNTS source=35 built=" + dayCount, dayCount === 35, "cols*rows=" + cfg.cols + "*" + cfg.rows);
// P0 grid start
let st = T.stateAt(cfg, 0);
ok("P0@0", st.gridP === 0 && st.strikesFull === 0 && st.tasksP === 0 && st.drop2P === 0, "gridP=" + st.gridP + " tasksP=" + st.tasksP + " drop2P=" + st.drop2P);
// P1 grid complete + zero-state anchor (guards cmd 8): strike sum from CONFIG expression
st = T.stateAt(cfg, cfg.gridDurMs);
const strikeSum = st.cells.reduce((a, c) => a + c.strikeP, 0);
ok("P1 grid-complete ZERO-anchor", st.gridP === 1 && st.cells.length === 35 && strikeSum === 0 && st.ringEarlyO === 1,
  "expr stateAt(CONFIG, CONFIG.gridDurMs)=" + cfg.gridDurMs + "ms per-cell strikeSum=" + strikeSum + " ringEarlyO=" + st.ringEarlyO);
// P2 strikes1 mid
const p2i = S.strikes1Start + cfg.strikes1DurMs / 2;
st = T.stateAt(cfg, p2i);
ok("P2 strikes1-mid@" + p2i, approx(st.strikeFloat, 10) && st.strikesFull === 10, "strikeFloat=" + st.strikeFloat + " full=" + st.strikesFull);
// P3 strikes1 complete
const p3i = S.strikes1Start + cfg.strikes1DurMs;
st = T.stateAt(cfg, p3i);
ok("P3 strikes1-complete@" + p3i, approx(st.strikeFloat, cfg.strikes1Target) && st.strikesFull === cfg.strikes1Target && approx(st.ringEarlyCrossP, 1) && approx(st.ringLateO, 1) && st.ringLateCrossP === 0,
  "float=" + st.strikeFloat + " earlyCross=" + st.ringEarlyCrossP + " lateO=" + st.ringLateO + " lateCross=" + st.ringLateCrossP);
// order exclusivity pre-conditions
st = T.stateAt(cfg, S.dropStart - 1);
ok("ORD drop2 zero before dropStart", st.drop2P === 0, "drop2P=" + st.drop2P + " @" + (S.dropStart - 1));
st = T.stateAt(cfg, S.labelsStart - 1);
ok("ORD labels zero before labelsStart", st.labelAStrikeP === 0 && st.labelBO === 0, "expr labelsStart-1=" + (S.labelsStart - 1) + "ms labelAStrikeP=" + st.labelAStrikeP + " labelBO=" + st.labelBO);
// P4 drop2 complete
const p4i = S.dropStart + cfg.dropDurMs;
st = T.stateAt(cfg, p4i);
ok("P4 drop2-complete@" + p4i, st.drop2P === 1 && st.drop1P === 1, "drop2P=" + st.drop2P);
// P5 labels complete — FULL CP6000 predicate
function p5Predicate(c, t){
  const s = T.stateAt(c, t);
  return s.labelAStrikeP === 1 && s.labelBO === 1 && s.labelBStrikeP === 0 && s.tasksP === 0 &&
    approx(s.strikeFloat, c.strikes1Target) && s.strikesFull === c.strikes1Target &&
    approx(s.ringEarlyCrossP, 1) && approx(s.ringLateO, 1) && s.ringLateCrossP === 0 &&
    s.drop1P === 1 && s.drop2P === 1 && approx(s.arcOpacity, 1) && s.calShiftPxNow === 0;
}
const p5i = S.labelsStart + cfg.labelsDurMs;
ok("P5 labels-complete FULL@" + p5i, p5Predicate(cfg, p5i), "expr labelsStart+labelsDurMs=" + p5i);
// P6 hold identity (full-state, instant excluded — state carries no t field)
const p6i = S.hold1End + cfg.hold1DurMs / 2;
const a5 = T.stateAt(cfg, p5i), a6 = T.stateAt(cfg, p6i);
ok("P6 hold-identity@" + p6i, JSON.stringify(a5) === JSON.stringify(a6), "expr hold1End+hold1DurMs/2=" + p6i + "ms JSON equal=" + (JSON.stringify(a5) === JSON.stringify(a6)));
// P7 tasks joined
const p7i = S.tasksStart + cfg.tasksDurMs;
st = T.stateAt(cfg, p7i);
ok("P7 tasks-joined@" + p7i, st.tasksP === 1 && st.tasksRowsVisible === cfg.tasksRowsJoin && approx(st.strikeFloat, cfg.strikes2Target) && approx(st.calShiftPxNow, cfg.calShiftPx),
  "rows=" + st.tasksRowsVisible + " float=" + st.strikeFloat + " shift=" + st.calShiftPxNow);
// P8 sweep3 complete
const p8i = S.sweep3Start + cfg.sweep3DurMs;
st = T.stateAt(cfg, p8i);
ok("P8 sweep3-complete@" + p8i, approx(st.strikeFloat, cfg.strikes3Target) && st.tasksRowsVisible === cfg.tasksRowsTotal, "float=" + st.strikeFloat + " rows=" + st.tasksRowsVisible);
// P9 final complete + count rule 33 slashes + 2 crosses
const p9i = S.finalStart + cfg.finalDurMs;
st = T.stateAt(cfg, p9i);
const ringSet = new Set([cfg.ringEarlyIdx, cfg.ringLateIdx]);
const renderedSlashes = st.cells.filter(c => c.strikeP >= 1 && !ringSet.has(c.i)).length;
const renderedCrosses = st.cells.filter(c => c.strikeP >= 1 && ringSet.has(c.i)).length;
ok("P9 final-complete@" + p9i, approx(st.strikeFloat, cfg.strikesFinalTarget) && st.strikesFull === 35 && approx(st.cells[34].strikeP, 1) && approx(st.ringLateCrossP, 1) && st.labelBStrikeP === 1 && st.arcOpacity === 0,
  "full=" + st.strikesFull + " slashes=" + renderedSlashes + " crosses=" + renderedCrosses + " day35 strikeP=" + st.cells[34].strikeP);
ok("P9 count rule 33+2=35", renderedSlashes === 33 && renderedCrosses === 2 && renderedSlashes + renderedCrosses === st.strikesFull, renderedSlashes + "+" + renderedCrosses);
// P10 hold identity — CONFIG-derived hold position (completion cure 1: completeAtMs + holdMs/4, never a fixed offset)
const p10i = S.completeAtMs + cfg.holdMs / 4;
const a9 = T.stateAt(cfg, p9i), a10 = T.stateAt(cfg, p10i);
ok("P10 hold-identity@" + p10i, JSON.stringify(a9) === JSON.stringify(a10) && S.durationMs === 12400, "expr completeAtMs+holdMs/4=" + p10i + "ms JSON equal=" + (JSON.stringify(a9) === JSON.stringify(a10)) + " durationMs=" + S.durationMs);
// Fixed census probes C* with CONFIG-derived companions — SAME full predicate executed on BOTH legs (prewave cure 1)
function predCP8000(c, t){ const s = T.stateAt(c, t); return s.tasksP === 1 && s.tasksRowsVisible === c.tasksRowsJoin && approx(s.strikeFloat, c.strikes2Target) && approx(s.calShiftPxNow, c.calShiftPx) && s.drop1P === 1 && s.drop2P === 1 && s.labelBStrikeP === 0 && approx(s.arcOpacity, 1); }
function predCP10000(c, t){ const s = T.stateAt(c, t); return approx(s.strikeFloat, c.strikes3Target) && s.tasksRowsVisible === c.tasksRowsTotal && s.tasksP === 1 && approx(s.calShiftPxNow, c.calShiftPx) && s.ringLateCrossP === 0 && s.labelBStrikeP === 0; }
function predCP12000(c, t){ const s = T.stateAt(c, t); return s.strikesFull === c.cols * c.rows && approx(s.ringLateCrossP, 1) && approx(s.ringEarlyCrossP, 1) && s.labelBStrikeP === 1 && s.arcOpacity === 0 && s.tasksRowsVisible === c.tasksRowsTotal && approx(s.calShiftPxNow, c.calShiftPx); }
const probes = [
  ["C@4400 CP6000", 4400, p5i, "labelsStart+labelsDurMs", (c, t) => p5Predicate(c, t)],
  ["C@5400 CP7000-hold", 5400, S.hold1End + cfg.hold1DurMs, "hold1End+hold1DurMs", (c, t) => p5Predicate(c, t) && JSON.stringify(T.stateAt(c, t)) === JSON.stringify(T.stateAt(c, p5i))],
  ["C@6400 CP8000", 6400, p7i, "tasksStart+tasksDurMs", predCP8000],
  ["C@8400 CP10000", 8400, p8i, "sweep3Start+sweep3DurMs", predCP10000],
  ["C@10400 CP12000", 10400, p9i, "finalStart+finalDurMs", predCP12000],
  // CP13000 (completion cure 2): fixed leg is the LITERAL filed reference 11400 ms; the companion is the separately derived expression completeAtMs+holdMs/2.
  ["C@11400 CP13000-hold", 11400, S.completeAtMs + cfg.holdMs / 2, "completeAtMs+holdMs/2", (c, t) => predCP12000(c, t) && JSON.stringify(T.stateAt(c, t)) === JSON.stringify(T.stateAt(c, p9i))]
];
for (const [name, fixed, comp, expr, pred] of probes){
  const sf = T.stateAt(cfg, fixed), sc = T.stateAt(cfg, comp);
  ok(name, pred(cfg, fixed) && pred(cfg, comp), "fixed@" + fixed + (name.includes("CP13000") ? " (LITERAL filed reference)" : "") + " fullPred=" + pred(cfg, fixed) + " float=" + sf.strikeFloat + " | companion expr " + expr + "=" + comp + "ms fullPred=" + pred(cfg, comp) + " float=" + sc.strikeFloat);
}
// Label layout (prewave cure 3): default pair unshifted + separated; swapped long pair shifted + separated (renderer box model)
{
  const cE0 = T.cellCenter(cfg, cfg.ringEarlyIdx, 0), cL0 = T.cellCenter(cfg, cfg.ringLateIdx, 0);
  const layD = T.labelLayout(cfg, cE0.x, cL0.x);
  const sepD = (layD.ax - layD.wA / 2) - (layD.bx + layD.wB / 2);
  ok("LABELS default layout", layD.ax === cE0.x && layD.bx === cL0.x && sepD >= 0, "ax=" + layD.ax.toFixed(1) + " bx=" + layD.bx.toFixed(1) + " boxSep=" + sepD.toFixed(1));
  const swapL = JSON.parse(JSON.stringify(cfg)); swapL.timelineLabelA = "AFTER THE DEADLINE"; swapL.timelineLabelB = "NEXT TIME";
  const layS = T.labelLayout(swapL, cE0.x, cL0.x);
  const sepS = (layS.ax - layS.wA / 2) - (layS.bx + layS.wB / 2);
  ok("LABELS swap layout resolved", sepS >= -1e-9 && layS.ax !== cE0.x, "ax " + cE0.x.toFixed(1) + "->" + layS.ax.toFixed(1) + " bx " + cL0.x.toFixed(1) + "->" + layS.bx.toFixed(1) + " boxSep=" + sepS.toFixed(3));
}
// SWAP content
const swapC = JSON.parse(JSON.stringify(cfg)); swapC.firstDay = 10; swapC.daysTitle = "WEEKS"; swapC.timelineLabelA = "AFTER THE DEADLINE"; swapC.timelineLabelB = "NEXT TIME";
const rC = T.renderSVG(swapC, p9i);
ok("SWAP content labels", rC.includes(">44<") && rC.includes(">10<") && rC.includes("WEEKS") && rC.includes("AFTER THE DEADLINE"), "firstDay 1->10 labels 10..44");
// SWAP grid
const swapG = JSON.parse(JSON.stringify(cfg)); swapG.cols = 6; swapG.rows = 4; swapG.strikes1Target = 14; swapG.strikes2Target = 18; swapG.strikes3Target = 22; swapG.strikesFinalTarget = 24; swapG.ringEarlyIdx = 9; swapG.ringLateIdx = 22;
const SG = T.schedule(swapG);
const sgEnd = T.stateAt(swapG, SG.finalStart + swapG.finalDurMs);
ok("SWAP grid 6x4", T.validateConfig(swapG) === null && sgEnd.cells.length === 24 && sgEnd.strikesFull === 24, "validate=" + T.validateConfig(swapG) + " cells=" + sgEnd.cells.length + " full=" + sgEnd.strikesFull);
// SWAP timing PAIRED: fixed probe drop2P + companion instant move + companion FULL predicate under swap
const swapT = JSON.parse(JSON.stringify(cfg)); swapT.strikes1DurMs = 3000;
const ST = T.schedule(swapT);
const dropFixedDef = T.stateAt(cfg, 4400).drop2P, dropFixedSwap = T.stateAt(swapT, 4400).drop2P;
const compDef = S.labelsStart + cfg.labelsDurMs, compSwap = ST.labelsStart + swapT.labelsDurMs;
ok("SWAP timing paired", approx(dropFixedDef, 1) && approx(dropFixedSwap, 1/3) && compDef === 4400 && compSwap === 5400,
  "fixed@4400 drop2P default=" + dropFixedDef + " swapped=" + dropFixedSwap + " | companion expr labelsStart+labelsDurMs default=" + compDef + " swapped=" + compSwap);
ok("SWAP timing companion CP6000 FULL predicate at moved instant", p5Predicate(swapT, compSwap), "expr labelsStart+labelsDurMs default=" + compDef + " swapped=" + compSwap + " fullPred=" + p5Predicate(swapT, compSwap) + " evaluated @" + compSwap + " under strikes1DurMs=3000");
// SWAP timing companions for EVERY remaining census pair (completion cure 2): evaluated instant + full-predicate result under the same swap
const p5iSwap = ST.labelsStart + swapT.labelsDurMs, p9iSwap = ST.finalStart + swapT.finalDurMs;
const swapCompanions = [
  ["CP7000-hold", S.hold1End + cfg.hold1DurMs, ST.hold1End + swapT.hold1DurMs, "hold1End+hold1DurMs", (c, t) => p5Predicate(c, t) && JSON.stringify(T.stateAt(c, t)) === JSON.stringify(T.stateAt(c, p5iSwap))],
  ["CP8000", p7i, ST.tasksStart + swapT.tasksDurMs, "tasksStart+tasksDurMs", predCP8000],
  ["CP10000", p8i, ST.sweep3Start + swapT.sweep3DurMs, "sweep3Start+sweep3DurMs", predCP10000],
  ["CP12000", p9i, p9iSwap, "finalStart+finalDurMs", predCP12000],
  ["CP13000-hold", S.completeAtMs + cfg.holdMs / 2, ST.completeAtMs + swapT.holdMs / 2, "completeAtMs+holdMs/2", (c, t) => predCP12000(c, t) && JSON.stringify(T.stateAt(c, t)) === JSON.stringify(T.stateAt(c, p9iSwap))]
];
for (const [nm, dflt, swpd, exprS, predS] of swapCompanions){
  ok("SWAP timing companion " + nm, predS(swapT, swpd), "expr " + exprS + " default=" + dflt + " swapped=" + swpd + " fullPred=" + predS(swapT, swpd) + " float=" + T.stateAt(swapT, swpd).strikeFloat + " under strikes1DurMs=3000");
}
// SWAP palette + hierarchy
const swapP = JSON.parse(JSON.stringify(cfg)); swapP.palette.strike = "#e8b13a";
const rP = T.renderSVG(swapP, p9i);
const hier = (c) => c.palette.faint !== c.palette.ink && c.palette.faint !== c.palette.strike;
ok("SWAP palette strike + hierarchy", rP.includes('stroke="#e8b13a"') && hier(cfg) && hier(swapP), "strike #f4f4f4->#e8b13a in render; faint (struck numerals) distinct from ink and strike in both configs (default ink==strike: specimen monochrome)");
// Validators
const badA = JSON.parse(JSON.stringify(cfg)); badA.ringLateIdx = 10;
ok("VALIDATOR ringLate outside band rejected", T.validateConfig(badA) !== null, String(T.validateConfig(badA)));
const badB = JSON.parse(JSON.stringify(cfg)); badB.panelW = 400;
ok("VALIDATOR panel overflow rejected", T.validateConfig(badB) !== null, String(T.validateConfig(badB)));
// Render smoke + struck numeral dimming role
const r9 = T.renderSVG(cfg, p9i);
ok("RENDER smoke + faint role", r9.includes("<svg") && r9.includes('fill="' + cfg.palette.faint + '"') && r9.includes(cfg.timelineLabelA), "faint struck numerals present");
// Comparison checks (Node, per Plan §2.4)
const cmp = fs.readFileSync(__dirname + "/comparison.html", "utf8");
const count = (hay, needle) => hay.split(needle).length - 1;
ok("CMP labels verbatim x1", count(cmp, "ORIGINAL — ensan.besham Hope = Failure (?) @ 13–27 s") === 1 && count(cmp, "RECREATION — T243 Calendar-of-days panel, parameterized") === 1, "");
ok("CMP segment ref x1 + stacking", count(cmp, "segment.mp4") === 1 && cmp.includes("@media (max-width:560px)"), "segment refs=" + count(cmp, "segment.mp4"));
const knotsOk = ["4.5","6.5","8.5","10.5","12.5"].every(k => cmp.includes("[" + k + ","));
const K = [[0,0],[4.5,S.gridStart + cfg.gridDurMs],[6.5,S.labelsStart + cfg.labelsDurMs],[8.5,S.tasksStart + cfg.tasksDurMs],[10.5,S.sweep3Start + cfg.sweep3DurMs],[12.5,S.finalStart + cfg.finalDurMs],[15,S.durationMs]];
const mapAt = (sec) => { for (let k = 0; k < K.length - 1; k++){ const a = K[k], b = K[k+1]; if (sec <= b[0]) return a[1] + (b[1]-a[1]) * ((sec-a[0])/(b[0]-a[0])); } return K[K.length-1][1]; };
ok("CMP anchor map", knotsOk && mapAt(6.5) === 4400 && mapAt(8.5) === 6400 && mapAt(12.5) === 10400 && mapAt(15) === 12400 && mapAt(0) === 0,
  "map(6.5)=" + mapAt(6.5) + " map(12.5)=" + mapAt(12.5) + " knots from CONFIG schedule");
console.log("SUMMARY pass=" + pass + " fail=" + fail);
process.exit(fail ? 1 : 0);
