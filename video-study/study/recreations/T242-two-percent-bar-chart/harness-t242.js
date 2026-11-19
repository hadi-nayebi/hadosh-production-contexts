// harness-t242.js — own checks for T242 (node, no browser)
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/recreation.html", "utf8");
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log("FAIL no script"); process.exit(1); }
const fn = new Function("window", "document", m[1] + "\nreturn window.__T242;");
const api = fn({}, undefined);
if (!api) { console.log("FAIL no __T242"); process.exit(1); }
const CONFIG = api.CONFIG, stateAt = api.stateAt, render = api.render; const scheduleFn = api.schedule;
let pass = 0, fail = 0;
function ok(name, cond, detail){ if (cond) { pass++; console.log("PASS " + name + (detail ? " :: " + detail : "")); } else { fail++; console.log("FAIL " + name + (detail ? " :: " + detail : "")); } }
const S = scheduleFn(CONFIG);
console.log("SCHEDULE " + JSON.stringify(S));
ok("VALIDATE default", api && (function(){ const v = api.validate; return v(CONFIG) === null; })(), "validate(CONFIG)=null");
// P0 zero state
let st = stateAt(CONFIG, 0);
ok("P0@0 zero", st.drawP.every(p => p === 0) && st.stubP.every(p => p === 0) && st.fullP === 0, "drawP=" + st.drawP.join(",") + " stubP=" + st.stubP.join(",") + " fullP=" + st.fullP);
// CP1 zero-state probe at 500 ms (guards cmd 8 — census CP1: bars not yet present)
st = stateAt(CONFIG, 500);
ok("CP1@500 zero-state", st.drawP.every(p => p === 0) && st.stubP.every(p => p === 0) && st.fullP === 0 && st.figureP === 0, "drawP=" + st.drawP.join(",") + " stubP=" + st.stubP.join(",") + " fullP=" + st.fullP + " figureP=" + st.figureP);
// P1 bar4 drawing at fixed census 1500 — evaluate drawP[3] at 1500
st = stateAt(CONFIG, 1500);
ok("P1 C@1500 bar4-drawing", st.drawP[3] > 0 && st.drawP[3] < 1, "drawP3=" + st.drawP[3].toFixed(3));
// CP2 CONFIG-derived companion: same bar4-drawing predicate at the CONFIG-expression instant
const cp2Expr = CONFIG.riseStartMs + (CONFIG.barCount - 1) * CONFIG.riseStaggerMs + CONFIG.riseDurMs / 9;
st = stateAt(CONFIG, cp2Expr);
ok("CP2@expr(riseStart+(barCount-1)*stagger+riseDur/9)=" + cp2Expr + " bar4-drawing", st.drawP[3] > 0 && st.drawP[3] < 1, "drawP3=" + st.drawP[3].toFixed(3) + " drawP=" + st.drawP.join(","));
// P2 rise complete at CONFIG-derived instant riseEnd
const riseEndExpr = CONFIG.riseStartMs + (CONFIG.barCount - 1) * CONFIG.riseStaggerMs + CONFIG.riseDurMs;
st = stateAt(CONFIG, riseEndExpr);
ok("P2@expr(riseStart+(n-1)*stagger+riseDur)=" + riseEndExpr, st.drawP.every(p => p === 1), "drawP=" + st.drawP.join(","));
// P3 stub1 complete
const stub1Complete = S.stubStarts[0] + CONFIG.stubDurMs;
st = stateAt(CONFIG, stub1Complete);
ok("P3@expr(stubStarts[0]+stubDurMs)=" + stub1Complete, st.stubP[0] === 1 && Math.abs(st.stubHeightsPx[0] - CONFIG.stubPercent / 100 * CONFIG.axisHeightPx) < 1e-9, "stubP0=" + st.stubP[0] + " stubH=" + st.stubHeightsPx[0] + " expectedH=" + (CONFIG.stubPercent / 100 * CONFIG.axisHeightPx));
// P4 stub2 complete, stub3 not started
const stub2Complete = S.stubStarts[1] + CONFIG.stubDurMs;
st = stateAt(CONFIG, stub2Complete);
ok("P4@expr(stubStarts[1]+stubDurMs)=" + stub2Complete, st.stubP[1] === 1 && st.stubP[2] === 0, "stubP=" + st.stubP.join(","));
// P5 stub3 complete, full not started
const stub3Complete = S.stubStarts[2] + CONFIG.stubDurMs;
st = stateAt(CONFIG, stub3Complete);
ok("P5@expr(stubStarts[2]+stubDurMs)=" + stub3Complete, st.stubP[2] === 1 && st.fullP === 0, "fullP=" + st.fullP);
// P6 full complete: height ratio is the claim
st = stateAt(CONFIG, S.fullComplete);
ok("P6@expr(fullStart+fullDurMs)=" + S.fullComplete, st.fullP === 1 && Math.abs(st.fullHeightPx - CONFIG.axisHeightPx) < 1e-9 && Math.abs(st.stubHeightsPx[0] / st.fullHeightPx - CONFIG.stubPercent / 100) < 1e-9, "fullH=" + st.fullHeightPx + " ratio=" + (st.stubHeightsPx[0] / st.fullHeightPx));
// Fixed census probes (source-time predicates)
st = stateAt(CONFIG, 2500); ok("C@2500 rise-complete-no-stub", st.drawP.every(p => p === 1) && st.stubP.every(p => p === 0), "stubP=" + st.stubP.join(","));
st = stateAt(CONFIG, 4500); ok("C@4500 stub1-only", st.stubP[0] === 1 && st.stubP[1] === 0 && st.stubP[2] === 0, "stubP=" + st.stubP.join(","));
st = stateAt(CONFIG, 3500); ok("C@3500 stub1-only", st.stubP[0] === 1 && st.stubP[1] === 0, "stubP=" + st.stubP.join(","));
st = stateAt(CONFIG, 5500); ok("C@5500 stub2", st.stubP[1] === 1 && st.stubP[2] === 0, "stubP=" + st.stubP.join(",") + " fullP=" + st.fullP);
st = stateAt(CONFIG, 8500); ok("C@8500 settled", st.fullP === 1 && st.stubP.every(p => p === 1) && st.fillOpacity === 1, "fullP=" + st.fullP + " stubP=" + st.stubP.join(",") + " fillOp=" + st.fillOpacity + " fullH=" + st.fullHeightPx);
st = stateAt(CONFIG, 10000); ok("C@10000 fill-cleared-outlines-remain", st.fillOpacity === 0 && st.chartOpacity === 1, "fillOp=" + st.fillOpacity + " chartOp=" + st.chartOpacity);
st = stateAt(CONFIG, S.exitEnd); ok("CP9 C@expr(schedule(CONFIG).exitEnd)=" + S.exitEnd + " chart-absent", st.chartOpacity === 0, "chartOp=" + st.chartOpacity + " exitP=" + st.exitP);
// Phase exclusivity sampled
let maxActive = 0; for (let t = 0; t <= 11000; t += 50) { maxActive = Math.max(maxActive, stateAt(CONFIG, t).activeGrowth); }
ok("P7 phase-exclusivity sampled", maxActive <= 1, "maxActiveGrowth=" + maxActive);
// Group label 2 reveal bound to stub3 start (CP7)
st = stateAt(CONFIG, S.stubStarts[2]);
ok("P8 group-label2 reveal@stub3Start=" + S.stubStarts[2], st.groupP[1] === 0 && stateAt(CONFIG, S.stubStarts[2] + CONFIG.groupLabelDurMs).groupP[1] === 1, "groupP1@start=" + st.groupP[1] + " groupP1@end=" + stateAt(CONFIG, S.stubStarts[2] + CONFIG.groupLabelDurMs).groupP[1] + " groupP=" + st.groupP.join(","));
st = stateAt(CONFIG, 6500); ok("C@6500 combined stub3-drawing+label2", st.stubP[0] === 1 && st.stubP[1] === 1 && st.stubP[2] > 0 && st.groupP[1] > 0, "stubP=" + st.stubP.join(",") + " groupP1=" + st.groupP[1].toFixed(2));
// SWAP content: percent + labels
const swapCfg = JSON.parse(JSON.stringify(CONFIG)); swapCfg.stubPercent = 7; swapCfg.stubLabel = "7%"; swapCfg.groupLabels = ["US", "THEM"]; swapCfg.barLabels = ["Odds", "Wait", "Odds", "Wait"];
const sS = scheduleFn(swapCfg); const sSt = stateAt(swapCfg, sS.stubStarts[0] + swapCfg.stubDurMs);
ok("SWAP content percent 2->7", Math.abs(sSt.stubHeightsPx[0] - 7 / 100 * swapCfg.axisHeightPx) < 1e-9, "stubH=" + sSt.stubHeightsPx[0] + " (default 6.8)");
const rSwap = render(swapCfg, sS.fullComplete);
ok("SWAP content labels render", rSwap.includes("7%") && rSwap.includes("US") && rSwap.includes("THEM") && rSwap.includes("Odds"), "has7%=" + rSwap.includes("7%") + " hasUS=" + rSwap.includes("US") + " hasTHEM=" + rSwap.includes("THEM") + " hasOdds=" + rSwap.includes("Odds"));
// SWAP timing PAIRED: riseDurMs 900->1500 moves riseEnd + stub1 instant
const tCfg = JSON.parse(JSON.stringify(CONFIG)); tCfg.riseDurMs = 1500;
const tS = scheduleFn(tCfg);
const fixedProbe = stateAt(tCfg, riseEndExpr); // fixed instant: rise no longer complete under swap
ok("SWAP timing paired", tS.riseEnd === riseEndExpr + 600 && tS.stubStarts[0] === S.stubStarts[0] + 600 && fixedProbe.drawP[3] < 1 && stateAt(tCfg, tS.riseEnd).drawP.every(p => p === 1),
   "riseEnd default=" + S.riseEnd + " swapped=" + tS.riseEnd + " stub1Start default=" + S.stubStarts[0] + " swapped=" + tS.stubStarts[0] + " fixedProbe@" + riseEndExpr + " drawP3 swapped=" + fixedProbe.drawP[3].toFixed(3));
// SWAP palette
const pCfg = JSON.parse(JSON.stringify(CONFIG)); pCfg.palette = Object.assign({}, CONFIG.palette, { fill: "#ffb02e", line: "#7fd4ff" });
const rPal = render(pCfg, scheduleFn(pCfg).fullComplete);
ok("SWAP palette fill/line", rPal.includes("#ffb02e") && rPal.includes("#7fd4ff"), "hasFill#ffb02e=" + rPal.includes("#ffb02e") + " hasLine#7fd4ff=" + rPal.includes("#7fd4ff"));
// P7 under swapped timing config + P3 predicate executed under swap
let maxActiveSwap = 0; for (let t = 0; t <= 11000; t += 50) { maxActiveSwap = Math.max(maxActiveSwap, stateAt(tCfg, t).activeGrowth); }
ok("P7-SWAP phase-exclusivity under timing swap", maxActiveSwap <= 1, "maxActiveGrowth swapped=" + maxActiveSwap);
const tStubComplete = tS.stubStarts[0] + tCfg.stubDurMs;
const tStubSt = stateAt(tCfg, tStubComplete);
ok("P3-SWAP stub1 completion predicate@expr(swapped stubStarts[0]+stubDurMs)=" + tStubComplete, tStubSt.stubP[0] === 1 && Math.abs(tStubSt.stubHeightsPx[0] - tCfg.stubPercent / 100 * tCfg.axisHeightPx) < 1e-9, "stubP0=" + tStubSt.stubP[0] + " stubH=" + tStubSt.stubHeightsPx[0] + " expectedH=" + (tCfg.stubPercent / 100 * tCfg.axisHeightPx));
// Validator
const badCfg = JSON.parse(JSON.stringify(CONFIG)); badCfg.stubBarIndices = [9];
ok("VALIDATOR stub-index rejected", api.validate(badCfg) !== null, api.validate(badCfg));
// Render smoke default
const rDef = render(CONFIG, S.fullComplete);
ok("RENDER smoke", rDef.includes(CONFIG.stubLabel) && rDef.includes(CONFIG.fullLabel) && rDef.includes("ME") && rDef.includes("YOU"), "labels present");
console.log("SUMMARY pass=" + pass + " fail=" + fail);
process.exit(fail ? 1 : 0);
