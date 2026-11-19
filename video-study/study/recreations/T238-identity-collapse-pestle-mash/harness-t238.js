"use strict";
// Harness for T238 — extracts CONFIG + logic + render from recreation.html and evaluates stateAt.
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "recreation.html"), "utf8");
const parts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
global.window = {};
const code = parts.join("\n").split("const stageEl")[0];
eval(code);
const T = global.window.__T238;
const C = T.CONFIG;
let pass = 0, fail = 0;
function chk(name, cond, detail){
  if (cond){ pass++; console.log("PASS " + name + " :: " + detail); }
  else { fail++; console.log("FAIL " + name + " :: " + detail); }
}
function approx(a, b, eps){ return Math.abs(a - b) <= (eps || 0.0001); }
const sch = T.schedule(C);
const v = T.validateConfig(C);
chk("VALIDATE-DEFAULT", v.ok, "ok=" + v.ok + " errors=" + JSON.stringify(v.errors));
chk("DERIVE", sch.completeAtMs === 6000 && sch.durationMs === 6000 && sch.stepsPerStroke === 9 &&
  JSON.stringify(sch.pressPeaks) === "[1900,2800,3700,4600,5500]",
  "completeAtMs=" + sch.completeAtMs + " durationMs=" + sch.durationMs + " steps=" + sch.stepsPerStroke + " peaks=" + sch.pressPeaks.join(","));
const s0 = T.stateAt(C, C.tSetupMs);
const cohortSum = Object.values(s0.cohortCounts).reduce((a, b) => a + b, 0);
chk("COUNT-SOURCE", C.objects.length === 24 && cohortSum === 24 &&
  s0.kindCounts.die === 8 && s0.kindCounts.house === 6 && s0.kindCounts.minidie === 6 && s0.kindCounts.cube === 4 &&
  [0, 1, 2, 3, 4].map(k => s0.cohortCounts[k]).join(",") === "5,5,5,5,4",
  "objects=" + C.objects.length + " kinds=" + JSON.stringify(s0.kindCounts) + " cohorts=" + [0,1,2,3,4].map(k => s0.cohortCounts[k]).join(",") + " builtSum=" + cohortSum);
chk("P0@expr(tSetupMs)=0", s0.readableCount === 24 && s0.fleckCount === 0 && approx(s0.pasteP, 0.34) && s0.inputO === 1 && s0.outputO === 0 &&
  approx(s0.pestle.x, C.bowlCx + C.pestleRestDx) && approx(s0.pestle.y, C.bowlCy + C.pestleRestDy),
  "readable=" + s0.readableCount + " flecks=" + s0.fleckCount + " pasteP=" + s0.pasteP + " inputO=" + s0.inputO +
  " pestleRest=(" + s0.pestle.x + "," + s0.pestle.y + ")=(" + (C.bowlCx + C.pestleRestDx) + "," + (C.bowlCy + C.pestleRestDy) + ")");
const s750 = T.stateAt(C, C.tSetupMs + C.setupDurMs / 2);
chk("P1@expr(tSetupMs+setupDurMs/2)=750", s750.readableCount === 24 && s750.strokeIdx === -1,
  "readable=" + s750.readableCount + " strokeIdx=" + s750.strokeIdx);
const s1000 = T.stateAt(C, 1000);
chk("C1000@1000", s1000.strokeIdx === -1 && s1000.readableCount === 24 && approx(s1000.liftP, 1 / 3, 0.001),
  "strokeIdx=" + s1000.strokeIdx + " readable=" + s1000.readableCount + " liftP=" + s1000.liftP.toFixed(4));
const s1250 = T.stateAt(C, 1250);
chk("C1250@1250", s1250.strokeIdx === -1 && s1250.readableCount === 24 && approx(s1250.liftP, 2 / 3, 0.001),
  "strokeIdx=" + s1250.strokeIdx + " readable=" + s1250.readableCount + " liftP=" + s1250.liftP.toFixed(4));
const s1500 = T.stateAt(C, sch.setupEnd);
chk("P2@expr(setupEnd)=1500", s1500.q === 1500 && s1500.readableCount === 24 && s1500.strokeIdx === 0 && s1500.step === 0 && s1500.liftP === 1,
  "q=" + s1500.q + " readable=" + s1500.readableCount + " strokeIdx=" + s1500.strokeIdx + " step=" + s1500.step + " liftP=" + s1500.liftP);
const s1700 = T.stateAt(C, sch.setupEnd + 2 * C.stepMs);
const cs0at1700 = s1700.objects.filter(o => o.cs === 0);
chk("P3@expr(setupEnd+2*stepMs)=1700", s1700.step === 2 && cs0at1700.every(o => approx(o.integrity, 0.65)) && approx(cs0at1700[0].marksO, 0.4615, 0.001) && s1700.readableCount === 24,
  "step=" + s1700.step + " cs0integrity=" + cs0at1700[0].integrity + " marksO=" + cs0at1700[0].marksO.toFixed(4) + " readable=" + s1700.readableCount);
const s1750 = T.stateAt(C, 1750);
chk("C1750@1750", s1750.strokeIdx === 0 && s1750.step === 2 && approx(s1750.pressRaw, 0.5),
  "strokeIdx=" + s1750.strokeIdx + " step=" + s1750.step + " pressRaw=" + s1750.pressRaw);
const s1900 = T.stateAt(C, sch.setupEnd + C.pressSteps * C.stepMs);
chk("P4@expr(setupEnd+pressSteps*stepMs)=1900", s1900.step === 4 && approx(s1900.pressRaw, 1) && approx(s1900.pressE, 1) &&
  s1900.objects.filter(o => o.cs === 0).every(o => approx(o.integrity, 0.3)) && s1900.readableCount === 19,
  "step=" + s1900.step + " pressRaw=" + s1900.pressRaw + " pressE=" + s1900.pressE + " cs0integrity=" + s1900.objects[0].integrity + " readable=" + s1900.readableCount);
const s2000 = T.stateAt(C, 2000);
chk("C2000@2000", s2000.strokeIdx === 0 && s2000.step === 5 && approx(s2000.objects[0].integrity, 0.24) && s2000.readableCount === 19,
  "strokeIdx=" + s2000.strokeIdx + " step=" + s2000.step + " cs0integrity=" + s2000.objects[0].integrity + " readable=" + s2000.readableCount);
const s2750 = T.stateAt(C, 2750);
chk("C2750@2750", s2750.strokeIdx === 1 && s2750.step === 3 && approx(s2750.pressRaw, 0.75),
  "strokeIdx=" + s2750.strokeIdx + " step=" + s2750.step + " pressRaw=" + s2750.pressRaw);
const s3000 = T.stateAt(C, 3000);
chk("C3000@3000", s3000.strokeIdx === 1 && s3000.step === 6 &&
  s3000.objects.filter(o => o.cs === 1).every(o => approx(o.integrity, 0.18)) && s3000.readableCount === 14,
  "strokeIdx=" + s3000.strokeIdx + " step=" + s3000.step + " cs1integrity=" + s3000.objects[5].integrity + " readable=" + s3000.readableCount);
const s3750 = T.stateAt(C, 3750);
chk("C3750@3750", s3750.strokeIdx === 2 && s3750.step === 4 && approx(s3750.pressRaw, 1),
  "strokeIdx=" + s3750.strokeIdx + " step=" + s3750.step + " pressRaw=" + s3750.pressRaw);
const s4000 = T.stateAt(C, 4000);
chk("C4000@4000", s4000.strokeIdx === 2 && s4000.step === 7 &&
  s4000.objects.filter(o => o.cs === 2).every(o => approx(o.integrity, 0.12)) && s4000.readableCount === 9,
  "strokeIdx=" + s4000.strokeIdx + " step=" + s4000.step + " cs2integrity=" + s4000.objects[10].integrity + " readable=" + s4000.readableCount);
const s4750 = T.stateAt(C, 4750);
chk("C4750@4750", s4750.strokeIdx === 3 && s4750.step === 5 && approx(s4750.pressRaw, 0.8),
  "strokeIdx=" + s4750.strokeIdx + " step=" + s4750.step + " pressRaw=" + s4750.pressRaw);
const s5000 = T.stateAt(C, 5000);
chk("C5000@5000", s5000.strokeIdx === 3 && s5000.step === 8 &&
  s5000.objects.filter(o => o.cs === 3).every(o => approx(o.integrity, 0.06)) && s5000.readableCount === 4,
  "strokeIdx=" + s5000.strokeIdx + " step=" + s5000.step + " cs3integrity=" + s5000.objects[15].integrity + " readable=" + s5000.readableCount);
const s5500 = T.stateAt(C, 5500);
chk("C5500@5500", s5500.strokeIdx === 4 && s5500.step === 4 && approx(s5500.pressRaw, 1) && s5500.readableCount === 0 && s5500.fleckCount === 20,
  "strokeIdx=" + s5500.strokeIdx + " step=" + s5500.step + " pressRaw=" + s5500.pressRaw + " readable=" + s5500.readableCount + " flecks=" + s5500.fleckCount);
const s5750 = T.stateAt(C, 5750);
chk("C5750@5750", s5750.strokeIdx === 4 && s5750.step === 6 && approx(s5750.pressRaw, 0.6) && s5750.readableCount === 0,
  "strokeIdx=" + s5750.strokeIdx + " step=" + s5750.step + " pressRaw=" + s5750.pressRaw + " readable=" + s5750.readableCount);
const s6000 = T.stateAt(C, sch.completeAtMs);
chk("P5@expr(completeAtMs)=6000", s6000.readableCount === 0 && s6000.fleckCount === 24 && approx(s6000.pasteP, 1) &&
  approx(s6000.unionOpacity, 1) && approx(s6000.slabBoundary, 0) && s6000.outputO === 1 && s6000.inputO === 0,
  "readable=" + s6000.readableCount + " flecks=" + s6000.fleckCount + " pasteP=" + s6000.pasteP + " union=" + s6000.unionOpacity + " boundary=" + s6000.slabBoundary + " outputO=" + s6000.outputO);
const s6150 = T.stateAt(C, sch.completeAtMs + 150);
chk("P6@expr(completeAtMs+150)=6150", JSON.stringify(s6150) === JSON.stringify(s6000),
  "full-state equality P5 vs +150ms: " + (JSON.stringify(s6150) === JSON.stringify(s6000)));
const s2001 = T.stateAt(C, 2001), s2100 = T.stateAt(C, 2100);
const mashSig = st => JSON.stringify([st.strokeIdx, st.step, st.pressRaw, st.readableCount, st.objects.map(o => o.integrity)]);
chk("P7-QUANT", mashSig(s2001) === mashSig(s2000) && s2100.step === 6 && s2100.step !== s2000.step,
  "sig(2001)==sig(2000): " + (mashSig(s2001) === mashSig(s2000)) + " step(2100)=" + s2100.step + " step(2000)=" + s2000.step);
const probes = [s0, s2000, s3000, s4000, s5000, s6000];
chk("P8-LABEL-EXCL", probes.every(p => p.inputO * p.outputO === 0 && p.inputO + p.outputO === 1),
  "input/output opacity pairs=" + probes.map(p => p.inputO + "/" + p.outputO).join(","));
// ---- Completion cures (Cycle 042 Wave 39): P7/P8 CONFIG-derived runs + moved samples under the timing swap ----
const fullSig = st => { const c = Object.assign({}, st); delete c.t; return JSON.stringify(c); };
const p7Base = sch.setupEnd + C.pressSteps * C.stepMs + C.stepMs;
const p7a = T.stateAt(C, p7Base), p7b = T.stateAt(C, p7Base + 1), p7c = T.stateAt(C, p7Base + C.stepMs);
chk("P7-DERIVED@expr(setupEnd+pressSteps*stepMs+stepMs)=" + p7Base, fullSig(p7a) === fullSig(p7b) && p7a.step === 5 && p7c.step === 6 && p7c.step !== p7a.step,
  "expr=setupEnd+pressSteps*stepMs+stepMs=" + sch.setupEnd + "+" + (C.pressSteps * C.stepMs) + "+" + C.stepMs + "=" + p7Base +
  " full-field equality (every field except the raw t echo) stateAt(expr) vs stateAt(expr+1): " + (fullSig(p7a) === fullSig(p7b)) +
  " q(expr+1)=" + p7b.q + " step transition step(expr)=" + p7a.step + " -> step(expr+stepMs)=" + p7c.step);
const Wp = structuredClone(C); Wp.strokeDurMs = 1200;
const SEp = Wp.tSetupMs + Wp.setupDurMs;
const p7wBase = SEp + 2 * Wp.strokeDurMs + 7 * Wp.stepMs;
const p7wDef = sch.setupEnd + 2 * C.strokeDurMs + 7 * C.stepMs;
const p7wa = T.stateAt(Wp, p7wBase), p7wb = T.stateAt(Wp, p7wBase + 1), p7wc = T.stateAt(Wp, p7wBase + Wp.stepMs);
chk("P7-SWAPPED@expr(setupEnd+2*strokeDurMs+7*stepMs)=" + p7wBase + " (moved " + p7wDef + "->" + p7wBase + ")", p7wBase === 4600 && p7wDef === 4000 && fullSig(p7wa) === fullSig(p7wb) && p7wa.step === 7 && p7wc.step === 8 && p7wc.step !== p7wa.step,
  "same CONFIG expression under the timing swap (strokeDurMs 900->1200): default instant " + p7wDef + " -> moved instant " + p7wBase +
  " full-field equality stateAt(moved) vs stateAt(moved+1): " + (fullSig(p7wa) === fullSig(p7wb)) + " q(moved+1)=" + p7wb.q +
  " step transition step(moved)=" + p7wa.step + " -> step(moved+stepMs)=" + p7wc.step + " cs2integrity=" + p7wa.objects[10].integrity + " readable=" + p7wa.readableCount);
const p8Defs = [
  ["setupEnd+strokeDurMs+stepMs", sch.setupEnd + C.strokeDurMs + C.stepMs],
  ["setupEnd+strokeDurMs+6*stepMs", sch.setupEnd + C.strokeDurMs + 6 * C.stepMs],
  ["setupEnd+2*strokeDurMs+2*stepMs", sch.setupEnd + 2 * C.strokeDurMs + 2 * C.stepMs],
  ["setupEnd+2*strokeDurMs+7*stepMs", sch.setupEnd + 2 * C.strokeDurMs + 7 * C.stepMs]
];
const p8States = p8Defs.map(d => T.stateAt(C, d[1]));
chk("P8-DERIVED@exprs=" + p8Defs.map(d => d[1]).join(","), p8States.every(p => p.inputO * p.outputO === 0 && p.inputO + p.outputO === 1) && p8States[0].inputO === 1 && p8States[3].outputO === 1,
  "expressions->evaluated instants: " + p8Defs.map(d => d[0] + "=" + d[1]).join(" · ") +
  " opacity predicates (product 0, sum 1) at derived interior samples: pairs=" + p8States.map(p => p.inputO + "/" + p.outputO).join(",") +
  " collapsedFractions=" + p8States.map(p => p.collapsedFraction.toFixed(4)).join(","));
const p8wDefs = [
  ["setupEnd+strokeDurMs+stepMs", SEp + Wp.strokeDurMs + Wp.stepMs],
  ["setupEnd+strokeDurMs+6*stepMs", SEp + Wp.strokeDurMs + 6 * Wp.stepMs],
  ["setupEnd+2*strokeDurMs+2*stepMs", SEp + 2 * Wp.strokeDurMs + 2 * Wp.stepMs],
  ["setupEnd+2*strokeDurMs+7*stepMs", SEp + 2 * Wp.strokeDurMs + 7 * Wp.stepMs]
];
const p8wStates = p8wDefs.map(d => T.stateAt(Wp, d[1]));
chk("P8-SWAPPED@exprs=" + p8wDefs.map(d => d[1]).join(",") + " (moved " + p8Defs.map(d => d[1]).join(",") + "->" + p8wDefs.map(d => d[1]).join(",") + ")",
  p8wStates.every(p => p.inputO * p.outputO === 0 && p.inputO + p.outputO === 1) && p8wStates[0].inputO === 1 && p8wStates[3].outputO === 1 &&
  p8wDefs.map(d => d[1]).join(",") !== p8Defs.map(d => d[1]).join(","),
  "same CONFIG expressions under the timing swap (strokeDurMs 900->1200): moved instants " + p8Defs.map((d, i) => d[1] + "->" + p8wDefs[i][1]).join(", ") +
  " opacity predicates at moved interior samples: pairs=" + p8wStates.map(p => p.inputO + "/" + p.outputO).join(",") +
  " collapsedFractions=" + p8wStates.map(p => p.collapsedFraction.toFixed(4)).join(","));
// SWAP — content
const cSwap = JSON.parse(JSON.stringify(C));
cSwap.inputLabel = "BUTTONS · BEADS · COINS"; cSwap.outputLabel = "PÂTÉ"; cSwap.objects[0].kind = "house";
const scSwap = T.stateAt(cSwap, 0);
const renderSwap = T.render(cSwap, 0);
chk("SWAP-CONTENT", scSwap.kindCounts.die === 7 && scSwap.kindCounts.house === 7 &&
  renderSwap.includes("BUTTONS · BEADS · COINS") && renderSwap.includes("PÂTÉ"),
  "die=" + scSwap.kindCounts.die + " house=" + scSwap.kindCounts.house + " labels in render=" + renderSwap.includes("BUTTONS · BEADS · COINS") + "/" + renderSwap.includes("PÂTÉ"));
// SWAP — timing (paired receipt)
const tSwap = JSON.parse(JSON.stringify(C)); tSwap.strokeDurMs = 1200;
const tSch = T.schedule(tSwap);
const s4000w = T.stateAt(tSwap, 4000);
const s7500w = T.stateAt(tSwap, tSch.completeAtMs);
chk("SWAP-TIMING", tSch.stepsPerStroke === 12 && tSch.strokeStarts[2] === 3900 && tSch.pressPeaks[2] === 4300 && tSch.completeAtMs === 7500 &&
  s4000w.strokeIdx === 2 && s4000w.step === 1 && approx(s4000w.objects[10].integrity, 0.825) && s4000w.readableCount === 14 &&
  s7500w.readableCount === 0 && s7500w.fleckCount === 24,
  "steps=" + tSch.stepsPerStroke + " stroke2start 3300->" + tSch.strokeStarts[2] + " peak 3700->" + tSch.pressPeaks[2] +
  " completeAt 6000->" + tSch.completeAtMs + " @4000 step=" + s4000w.step + " cs2integrity=" + s4000w.objects[10].integrity +
  " readable 9->" + s4000w.readableCount + " (cohorts 0-1 collapsed, cs2 at 0.825, cs3-4 intact) @7500 readable=" + s7500w.readableCount + " flecks=" + s7500w.fleckCount);
// SWAP — palette
const pSwap = JSON.parse(JSON.stringify(C)); pSwap.palette.paste = "#c8b13a";
const renderPal = T.render(pSwap, 6000);
chk("SWAP-PALETTE", renderPal.includes("#c8b13a"),
  "paste fill #79c142->#c8b13a in render@6000: " + renderPal.includes("#c8b13a"));
// Negative tests
const nSwap1 = JSON.parse(JSON.stringify(C)); nSwap1.strokeDurMs = 950;
const nv1 = T.validateConfig(nSwap1);
chk("SWAP-NEGATIVE-DIV", !nv1.ok && nv1.errors.some(e => e.includes("divisible")), "errors=" + JSON.stringify(nv1.errors));
const nSwap2 = JSON.parse(JSON.stringify(C)); nSwap2.objects[3].cs = 7;
const nv2 = T.validateConfig(nSwap2);
chk("SWAP-NEGATIVE-CS", !nv2.ok && nv2.errors.some(e => e.includes("cs out of range")), "errors=" + JSON.stringify(nv2.errors));
// Comparison clamp receipt
const cmp = fs.readFileSync(path.join(__dirname, "comparison.html"), "utf8");
chk("COMPARISON-CLAMP", cmp.includes("HANDLE_OFFSET_S = 0.5") && cmp.includes("T238.schedule(T238.CONFIG).durationMs") &&
  sch.durationMs === 6000 && tSch.durationMs === 7500,
  "comparison derives durationMs live (default 6000, timing-swapped 7500); HANDLE_OFFSET_S=0.5 present=" + cmp.includes("HANDLE_OFFSET_S = 0.5"));
// ---- Prewave-cure additions: CONFIG-derived companions for every fixed probe + missing census rows ----
const SE = C.tSetupMs + C.setupDurMs;
const comp = (name, exprVal, fixedVal, st, ok, detail) =>
  chk(name + "@expr=" + exprVal + " (fixed " + fixedVal + ")", exprVal === fixedVal && ok, detail);
let x;
x = T.stateAt(C, C.tSetupMs + C.setupDurMs / 3);
comp("COMP-C500", C.tSetupMs + C.setupDurMs / 3, 500, x, x.readableCount === 24 && x.liftP === 0 && approx(x.pestle.x, C.bowlCx + C.pestleRestDx),
  "readable=" + x.readableCount + " liftP=" + x.liftP + " pestleAtRest=" + approx(x.pestle.x, C.bowlCx + C.pestleRestDx));
x = T.stateAt(C, C.tSetupMs + (C.setupDurMs * 2) / 3);
comp("COMP-C1000", C.tSetupMs + (C.setupDurMs * 2) / 3, 1000, x, x.strokeIdx === -1 && x.readableCount === 24 && approx(x.liftP, 1 / 3), "readable=" + x.readableCount + " readableCount===24:" + (x.readableCount === 24) + " liftP=" + x.liftP.toFixed(4));
x = T.stateAt(C, C.tSetupMs + (C.setupDurMs * 5) / 6);
comp("COMP-C1250", C.tSetupMs + (C.setupDurMs * 5) / 6, 1250, x, x.strokeIdx === -1 && x.readableCount === 24 && approx(x.liftP, 2 / 3), "readable=" + x.readableCount + " readableCount===24:" + (x.readableCount === 24) + " liftP=" + x.liftP.toFixed(4));
x = T.stateAt(C, SE + 2 * C.stepMs + C.stepMs / 2);
comp("COMP-C1750", SE + 2 * C.stepMs + C.stepMs / 2, 1750, x, x.step === 2 && approx(x.pressRaw, 0.5), "step=" + x.step + " pressRaw=" + x.pressRaw);
x = T.stateAt(C, SE + C.pressSteps * C.stepMs + C.stepMs);
comp("COMP-C2000", SE + C.pressSteps * C.stepMs + C.stepMs, 2000, x, x.step === 5 && approx(x.objects[0].integrity, 0.24) && x.readableCount === 19,
  "step=" + x.step + " cs0=" + x.objects[0].integrity + " readable=" + x.readableCount);
const e2500 = SE + C.strokeDurMs + C.stepMs;
const d2500 = T.stateAt(C, e2500);
chk("C2500-DERIVED@expr(setupEnd+strokeDurMs+stepMs)=" + e2500 + " (fixed 2500, expr==fixed:" + (e2500 === 2500) + ")", e2500 === 2500 && d2500.strokeIdx === 1 && d2500.step === 1 && approx(d2500.objects[5].integrity, 0.825) && d2500.readableCount === 19,
  "expr=setupEnd+strokeDurMs+stepMs=" + SE + "+" + C.strokeDurMs + "+" + C.stepMs + "=" + e2500 + " equality expr==2500:" + (e2500 === 2500) + " step=" + d2500.step + " cs1integrity=" + d2500.objects[5].integrity + " readable=" + d2500.readableCount);
const f2500 = T.stateAt(C, 2500);
chk("C2500-FIXED@2500", f2500.strokeIdx === 1 && f2500.step === 1 && approx(f2500.objects[5].integrity, 0.825) && f2500.readableCount === 19,
  "fixed side executed separately at literal 2500: step=" + f2500.step + " cs1integrity=" + f2500.objects[5].integrity + " readable=" + f2500.readableCount);
x = T.stateAt(C, SE + C.strokeDurMs + 3 * C.stepMs + C.stepMs / 2);
comp("COMP-C2750", SE + C.strokeDurMs + 3 * C.stepMs + C.stepMs / 2, 2750, x, x.step === 3 && approx(x.pressRaw, 0.75), "step=" + x.step + " pressRaw=" + x.pressRaw);
x = T.stateAt(C, SE + C.strokeDurMs + 6 * C.stepMs);
comp("COMP-C3000", SE + C.strokeDurMs + 6 * C.stepMs, 3000, x, x.step === 6 && approx(x.objects[5].integrity, 0.18) && x.readableCount === 14,
  "step=" + x.step + " cs1=" + x.objects[5].integrity + " readable=" + x.readableCount);
const e3500 = SE + 2 * C.strokeDurMs + 2 * C.stepMs;
const d3500 = T.stateAt(C, e3500);
chk("C3500-DERIVED@expr(setupEnd+2*strokeDurMs+2*stepMs)=" + e3500 + " (fixed 3500, expr==fixed:" + (e3500 === 3500) + ")", e3500 === 3500 && d3500.strokeIdx === 2 && d3500.step === 2 && approx(d3500.objects[10].integrity, 0.65) && d3500.readableCount === 14,
  "expr=setupEnd+2*strokeDurMs+2*stepMs=" + SE + "+" + (2 * C.strokeDurMs) + "+" + (2 * C.stepMs) + "=" + e3500 + " equality expr==3500:" + (e3500 === 3500) + " step=" + d3500.step + " cs2integrity=" + d3500.objects[10].integrity + " readable=" + d3500.readableCount);
const f3500 = T.stateAt(C, 3500);
chk("C3500-FIXED@3500", f3500.strokeIdx === 2 && f3500.step === 2 && approx(f3500.objects[10].integrity, 0.65) && f3500.readableCount === 14,
  "fixed side executed separately at literal 3500: step=" + f3500.step + " cs2integrity=" + f3500.objects[10].integrity + " readable=" + f3500.readableCount);
x = T.stateAt(C, SE + 2 * C.strokeDurMs + 4 * C.stepMs + C.stepMs / 2);
comp("COMP-C3750", SE + 2 * C.strokeDurMs + 4 * C.stepMs + C.stepMs / 2, 3750, x, x.step === 4 && x.pressRaw === 1, "step=" + x.step + " pressRaw=" + x.pressRaw);
x = T.stateAt(C, SE + 2 * C.strokeDurMs + 7 * C.stepMs);
comp("COMP-C4000", SE + 2 * C.strokeDurMs + 7 * C.stepMs, 4000, x, x.step === 7 && approx(x.objects[10].integrity, 0.12) && x.readableCount === 9,
  "step=" + x.step + " cs2=" + x.objects[10].integrity + " readable=" + x.readableCount);
const e4500 = SE + 3 * C.strokeDurMs + 3 * C.stepMs;
const d4500 = T.stateAt(C, e4500);
chk("C4500-DERIVED@expr(setupEnd+3*strokeDurMs+3*stepMs)=" + e4500 + " (fixed 4500, expr==fixed:" + (e4500 === 4500) + ")", e4500 === 4500 && d4500.strokeIdx === 3 && d4500.step === 3 && approx(d4500.objects[15].integrity, 0.475) && d4500.readableCount === 4,
  "expr=setupEnd+3*strokeDurMs+3*stepMs=" + SE + "+" + (3 * C.strokeDurMs) + "+" + (3 * C.stepMs) + "=" + e4500 + " equality expr==4500:" + (e4500 === 4500) + " step=" + d4500.step + " cs3integrity=" + d4500.objects[15].integrity + " readable=" + d4500.readableCount);
const f4500 = T.stateAt(C, 4500);
chk("C4500-FIXED@4500", f4500.strokeIdx === 3 && f4500.step === 3 && approx(f4500.objects[15].integrity, 0.475) && f4500.readableCount === 4,
  "fixed side executed separately at literal 4500: step=" + f4500.step + " cs3integrity=" + f4500.objects[15].integrity + " readable=" + f4500.readableCount);
x = T.stateAt(C, SE + 3 * C.strokeDurMs + 5 * C.stepMs + C.stepMs / 2);
comp("COMP-C4750", SE + 3 * C.strokeDurMs + 5 * C.stepMs + C.stepMs / 2, 4750, x, x.step === 5 && approx(x.pressRaw, 0.8), "step=" + x.step + " pressRaw=" + x.pressRaw);
x = T.stateAt(C, SE + 3 * C.strokeDurMs + 8 * C.stepMs);
comp("COMP-C5000", SE + 3 * C.strokeDurMs + 8 * C.stepMs, 5000, x, x.step === 8 && approx(x.objects[15].integrity, 0.06) && x.readableCount === 4,
  "step=" + x.step + " cs3=" + x.objects[15].integrity + " readable=" + x.readableCount);
x = T.stateAt(C, SE + 4 * C.strokeDurMs + 4 * C.stepMs);
comp("COMP-C5500", SE + 4 * C.strokeDurMs + 4 * C.stepMs, 5500, x, x.step === 4 && x.pressRaw === 1 && x.readableCount === 0 && x.fleckCount === 20,
  "step=" + x.step + " readable=" + x.readableCount + " flecks=" + x.fleckCount);
x = T.stateAt(C, SE + 4 * C.strokeDurMs + 6 * C.stepMs + C.stepMs / 2);
comp("COMP-C5750", SE + 4 * C.strokeDurMs + 6 * C.stepMs + C.stepMs / 2, 5750, x, x.step === 6 && approx(x.pressRaw, 0.6) && x.readableCount === 0,
  "step=" + x.step + " pressRaw=" + x.pressRaw);
// Moved companions under the timing swap: the same CONFIG expressions evaluate at moved instants with the checkpoint predicates intact.
const W2 = structuredClone(C); W2.strokeDurMs = 1200;
const SEw = W2.tSetupMs + W2.setupDurMs;
const cw4000 = T.stateAt(W2, SEw + 2 * W2.strokeDurMs + 7 * W2.stepMs);
chk("COMP-C4000-SWAPPED@expr=4600", (SEw + 2 * W2.strokeDurMs + 7 * W2.stepMs) === 4600 && cw4000.step === 7 &&
  approx(cw4000.objects[10].integrity, 0.1875) && cw4000.readableCount === 9,
  "companion instant moved 4000->4600; step=" + cw4000.step + " cs2=" + cw4000.objects[10].integrity + " readable=" + cw4000.readableCount +
  " (same step bucket at the moved instant; integrity 0.1875 not 0.12 because the post-press tail denominator stepsPerStroke-pressSteps widens 5->8 under the swap — the step/quantization predicate is what the companion carries)");
const cwEnd = T.stateAt(W2, T.schedule(W2).completeAtMs);
chk("COMP-C6000-SWAPPED@expr(completeAtMs)=7500", T.schedule(W2).completeAtMs === 7500 && cwEnd.readableCount === 0 && cwEnd.fleckCount === 24 && approx(cwEnd.pasteP, 1),
  "completion companion moved 6000->7500; readable=" + cwEnd.readableCount + " flecks=" + cwEnd.fleckCount + " pasteP=" + cwEnd.pasteP);

console.log("SUMMARY pass=" + pass + " fail=" + fail);
process.exit(fail ? 1 : 0);
