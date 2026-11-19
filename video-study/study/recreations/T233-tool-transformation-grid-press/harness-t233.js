"use strict";
// T233 own-checks harness — Cycle 041 completion form (A12.3 cures 1+2 applied).
// Loads recreation.html's script (pre-DOM part) and evaluates stateAt.
// Cure 1: every fixed census probe keeps its census-fixed instant AND gains a paired
//   COMPANION assertion whose evaluation instant is COMPUTED from CONFIG expressions
//   in code below (never a label string); both times + observed predicates print.
// Cure 2: P7 carries its grid-at-rest predicate; P11 requires the post-swap diff EMPTY
//   with all three instants' observed values filed; the C probes for press-mid /
//   press-bottom / reveal execute the FULL P3 / P4 / P7 predicate sets (shared
//   predicate functions — the equality is executed, not labeled).
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "recreation.html"), "utf8");
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log("FAIL no script block"); process.exit(1); }
const cut = m[1].split("const stageEl")[0];
const factory = new Function("window", cut + "\nreturn window.__T233;");
const T = factory({});
const CFG = T.CONFIG;
let pass = 0, fail = 0;
function chk(name, cond, detail){ console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); cond ? pass++ : fail++; }
function eq(a, b){ return JSON.stringify(a) === JSON.stringify(b); }
const sch = T.schedule(CFG);
console.log("SCHEDULE " + JSON.stringify(sch));
console.log("VALIDATE default: " + T.validateConfig(CFG));
const cd = T.cubeData(CFG);
console.log("COUNTS pins=" + CFG.pins.length + " stemStar=" + CFG.stemStar.length + " cubes source=" + (CFG.cubeCols*CFG.cubeRows*CFG.cubeLayers) + " built=" + cd.total + " cubePx=" + cd.cubePx + " slabW=" + (CFG.cubeCols*cd.cubePx + (CFG.cubeCols-1)*CFG.cubeGapPx) + " gridCellSpan3=" + (3*CFG.cellPx));
// CONFIG-derived schedule instants — computed from CONFIG expressions in code (cure 1 machinery).
const stemEnd = CFG.tStemOffMs + CFG.stemOffDurMs;
const pressStart = stemEnd + CFG.settleDurMs;
const pressEnd = pressStart + CFG.pressDurMs;
const holdEnd = pressEnd + CFG.pressHoldMs;
const liftEnd = holdEnd + CFG.liftDurMs;
const gatherStart = liftEnd + CFG.slabHoldMs;
const completeAt = gatherStart + CFG.gatherDurMs;
const swapAt = pressEnd + CFG.pressHoldMs/2;
// FULL predicate sets (shared by the P assertions and the C probes/companions that claim equality).
function revealSum(st){ return st.cubes.reduce((a,c)=>a+c.revealRaw,0); }
function gridRestY(cfg){ return -cfg.pressTravelPx * cfg.liftTravelFraction; }
function predP3(cfg, st){ return st.pressRaw===0.5 && Math.abs(st.pressE-0.5)<1e-9 && Math.abs(st.squash-(1-cfg.pressSquash*0.5))<1e-9; }
function valsP3(st){ return "pressRaw="+st.pressRaw+" pressE="+st.pressE+" squash="+st.squash; }
function predP4(cfg, st){ return st.pressRaw===1 && st.occluderOpacity===cfg.occluderMax && st.cubeVisible===0 && st.inputOpacity===1 && st.coverCoversSubject===true && revealSum(st)===0; }
function valsP4(st){ return "pressRaw="+st.pressRaw+" occluder="+st.occluderOpacity+" cubeVisible="+st.cubeVisible+" inputOpacity="+st.inputOpacity+" covers="+st.coverCoversSubject+" revealRawSum="+revealSum(st); }
function predP7(cfg, st, total){ return st.cubeVisible===total && st.inputOpacity===0 && st.liftRaw===1 && Math.abs(st.gridOffsetY-gridRestY(cfg))<1e-9 && st.cubes.every(c=>Math.abs(c.x-c.sx)<1e-9 && Math.abs(c.y-c.sy)<1e-9); }
function valsP7(cfg, st){ return "cubeVisible="+st.cubeVisible+"/"+st.cubeTotal+" inputOpacity="+st.inputOpacity+" liftRaw="+st.liftRaw+" gridOffsetY="+st.gridOffsetY+" gridRestY(expr -pressTravelPx*liftTravelFraction)="+gridRestY(cfg)+" maxCubeDev="+Math.max.apply(null, st.cubes.map(c=>Math.hypot(c.x-c.sx, c.y-c.sy))); }
function predP9(cfg, st){ return st.gatherRaw===1 && st.bowlOpacity===1 && st.cubes.every(c=>Math.abs(c.x-c.bx)<1e-9 && Math.abs(c.y-c.by)<1e-9); }
function valsP9(st){ return "gatherRaw="+st.gatherRaw+" bowlOpacity="+st.bowlOpacity+" maxBowlDev="+Math.max.apply(null, st.cubes.map(c=>Math.hypot(c.x-c.bx, c.y-c.by))); }
// P0..P11 (assertion set inherited WHOLE from the Wave-37 harness; P7 + P11 strengthened per cure 2)
let s;
s = T.stateAt(CFG, CFG.tStemOffMs); chk("P0@"+CFG.tStemOffMs, s.stemRaw===0 && s.stemOpacity===1 && s.pressRaw===0 && s.cubeVisible===0, "stemRaw="+s.stemRaw+" stemOp="+s.stemOpacity);
s = T.stateAt(CFG, CFG.tStemOffMs + CFG.stemOffDurMs/2); chk("P1", s.stemRaw===0.5 && Math.abs(s.stemOpacity-0.5)<1e-9, "raw="+s.stemRaw+" easedOp="+s.stemOpacity);
s = T.stateAt(CFG, pressStart); chk("P2@expr(stemEnd+settleDurMs)="+pressStart, s.stemOpacity===0 && s.pressRaw===0 && Math.abs(s.gridOffsetY + CFG.pressTravelPx)<1e-9, "gridOff="+s.gridOffsetY);
s = T.stateAt(CFG, pressStart + CFG.pressDurMs/2); chk("P3", predP3(CFG, s), valsP3(s));
s = T.stateAt(CFG, pressStart + CFG.pressDurMs); const p4RevealMax = Math.max.apply(null, s.cubes.map(c=>c.revealRaw));
chk("P4 press-bottom ZERO-anchor", predP4(CFG, s), "occ="+s.occluderOpacity+" observed per-cube revealRaw sum="+revealSum(s)+" max="+p4RevealMax+" observed cubeVisible="+s.cubeVisible+" covers="+s.coverCoversSubject);
s = T.stateAt(CFG, swapAt); chk("P5 swap@"+swapAt, s.inputOpacity===0 && s.cubesArmed===1 && s.cubeVisible===0 && s.occluderOpacity===1, "inOp="+s.inputOpacity+" armed="+s.cubesArmed);
s = T.stateAt(CFG, holdEnd + CFG.liftDurMs/2); chk("P6 lift-mid", Math.abs(s.liftRaw-0.5)<1e-9 && s.cubeVisible>=9, "liftRaw="+s.liftRaw+" visible="+s.cubeVisible);
s = T.stateAt(CFG, holdEnd + CFG.liftDurMs); chk("P7 reveal-complete + grid-at-rest", predP7(CFG, s, cd.total), valsP7(CFG, s));
s = T.stateAt(CFG, gatherStart + CFG.gatherDurMs/2); chk("P8 gather-mid@"+(gatherStart+CFG.gatherDurMs/2), Math.abs(s.gatherRaw-0.5)<1e-9 && Math.abs(s.bowlOpacity-0.5)<0.01 && s.cubes.every(c=>{const d1=Math.hypot(c.x-c.sx,c.y-c.sy), d2=Math.hypot(c.x-c.bx,c.y-c.by); return d1>0.01 && d2>0.01;}), "gatherRaw="+s.gatherRaw+" bowlOp="+s.bowlOpacity);
const sP9 = T.stateAt(CFG, completeAt);
chk("P9 complete@"+completeAt, predP9(CFG, sP9), valsP9(sP9));
const sP10 = T.stateAt(CFG, completeAt + 500);
const stripT = o => { const c = Object.assign({}, o); delete c.t; return c; };
chk("P10 hold-identity full-state (t excluded — the instant is not state)", eq(stripT(sP9), stripT(sP10)), "JSON equal=" + eq(stripT(sP9), stripT(sP10)));
const sBefore = T.stateAt(CFG, swapAt - 1), sAt = T.stateAt(CFG, swapAt), sAfter = T.stateAt(CFG, swapAt + 1);
const diffKeys = Object.keys(sAt).filter(k => k !== "t" && !eq(sBefore[k], sAt[k]));
const diffAfter = Object.keys(sAfter).filter(k => k !== "t" && !eq(sAt[k], sAfter[k]));
const obs3 = st => "{inOp="+st.inputOpacity+" armed="+st.cubesArmed+" occ="+st.occluderOpacity+" squash="+st.squash+" gridOff="+st.gridOffsetY+"}";
chk("P11 boundary-jump + post-swap diff EMPTY (required)", eq(diffKeys.slice().sort(), ["cubesArmed","inputOpacity"]) && diffAfter.length===0 && sBefore.occluderOpacity===1 && sAt.occluderOpacity===1 && sAfter.occluderOpacity===1, "diffKeys(-1->0)="+JSON.stringify(diffKeys)+" diffKeys(0->+1)="+JSON.stringify(diffAfter)+" (empty required: "+(diffAfter.length===0)+") obs@"+(swapAt-1)+"="+obs3(sBefore)+" obs@"+swapAt+"="+obs3(sAt)+" obs@"+(swapAt+1)+"="+obs3(sAfter));
// Fixed census probes (census-fixed instants, kept) — the ==P3/P4/P7 rows execute the FULL predicate sets.
function C(ms, name, expr, fn, vals){ const st = T.stateAt(CFG, ms); chk("C@"+ms+" "+name, fn(st), "expr "+expr+" => "+ms+"ms | raw: "+vals(st)); }
C(0, "CP1 stem-on", "CONFIG.tStemOffMs", st => st.stemOpacity===1 && st.pressRaw===0, st => "stemOpacity="+st.stemOpacity+" pressRaw="+st.pressRaw+" cubeVisible="+st.cubeVisible);
C(1000, "CP2 stem-off", "CONFIG.tStemOffMs + CONFIG.stemOffDurMs", st => st.stemOpacity===0, st => "stemOpacity="+st.stemOpacity+" stemRaw="+st.stemRaw);
C(1500, "F-2500 settled", "stemEnd + CONFIG.settleDurMs/2", st => st.stemOpacity===0 && st.pressRaw===0 && st.squash===1 && st.gridOffsetY===-CFG.pressTravelPx, st => "stemOpacity="+st.stemOpacity+" pressRaw="+st.pressRaw+" squash="+st.squash+" gridOffsetY="+st.gridOffsetY+" (cushion at rest: squash 1, grid fully raised)");
C(2000, "CP3 solo", "stemEnd + CONFIG.settleDurMs (=pressStart)", st => st.pressRaw===0 && st.stemOpacity===0 && st.cubeVisible===0, st => "pressRaw="+st.pressRaw+" stemOpacity="+st.stemOpacity+" cubeVisible="+st.cubeVisible);
C(2500, "F-3500 press-mid==P3 FULL", "pressStart + CONFIG.pressDurMs/2", st => predP3(CFG, st), st => valsP3(st));
C(3000, "CP4 press-bottom==P4 FULL", "pressStart + CONFIG.pressDurMs", st => predP4(CFG, st), st => valsP4(st));
C(3500, "F-4500 reveal==P7 FULL", "holdEnd + CONFIG.liftDurMs", st => predP7(CFG, st, cd.total), st => valsP7(CFG, st));
C(4000, "CP5 slab-hold", "holdEnd + CONFIG.liftDurMs + 500 [census-fixed CP5 instant inside slabHoldMs window]", st => st.cubeVisible===cd.total && st.gatherRaw===0 && st.cubes.every(c=>Math.abs(c.x-c.sx)<1e-9 && Math.abs(c.y-c.sy)<1e-9), st => "cubeVisible="+st.cubeVisible+" gatherRaw="+st.gatherRaw+" maxCubeDev="+Math.max.apply(null, st.cubes.map(c=>Math.hypot(c.x-c.sx, c.y-c.sy))));
C(4500, "F-5500 gather-departed", "gatherStart + 250 [census-fixed]", st => Math.abs(st.gatherRaw - 250/1750) < 1e-9 && st.cubes.some(c=>Math.hypot(c.x-c.sx,c.y-c.sy)>0.01), st => "gatherRaw="+st.gatherRaw+" departedCubes="+st.cubes.filter(c=>Math.hypot(c.x-c.sx,c.y-c.sy)>0.01).length);
C(5000, "CP6 gather-continues", "gatherStart + 750 [census-fixed]", st => Math.abs(st.gatherRaw - 750/1750) < 1e-9 && st.bowlOpacity > 0, st => "gatherRaw="+st.gatherRaw+" bowlOpacity="+st.bowlOpacity);
C(6000, "CP7 bowl==P9", "completeAtMs (=gatherStart + CONFIG.gatherDurMs)", st => eq(stripT(st), stripT(sP9)), st => "gatherRaw="+st.gatherRaw+" bowlOpacity="+st.bowlOpacity+" fullStateEqP9="+eq(stripT(st), stripT(sP9)));
// COMPANIONS (cure 1): each fixed probe paired with an assertion whose instant is COMPUTED
// from CONFIG expressions in code; both evaluated times + observed predicates print.
function COMP(fixedMs, name, exprLabel, computedMs, fn, vals){
  const st = T.stateAt(CFG, computedMs);
  chk("COMP "+name, fn(st) && computedMs===fixedMs, "fixed="+fixedMs+"ms computed="+computedMs+"ms expr "+exprLabel+" | raw: "+vals(st));
}
COMP(0, "CP1 stem-on", "CONFIG.tStemOffMs", CFG.tStemOffMs, st => st.stemOpacity===1 && st.pressRaw===0 && st.cubeVisible===0, st => "stemOpacity="+st.stemOpacity+" pressRaw="+st.pressRaw+" cubeVisible="+st.cubeVisible);
COMP(1000, "CP2 stem-off", "CONFIG.tStemOffMs + CONFIG.stemOffDurMs", CFG.tStemOffMs + CFG.stemOffDurMs, st => st.stemOpacity===0 && st.stemRaw===1, st => "stemOpacity="+st.stemOpacity+" stemRaw="+st.stemRaw);
COMP(1500, "F-2500 settled", "(CONFIG.tStemOffMs + CONFIG.stemOffDurMs) + CONFIG.settleDurMs/2", (CFG.tStemOffMs + CFG.stemOffDurMs) + CFG.settleDurMs/2, st => st.stemOpacity===0 && st.pressRaw===0 && st.squash===1 && st.gridOffsetY===-CFG.pressTravelPx, st => "stemOpacity="+st.stemOpacity+" pressRaw="+st.pressRaw+" squash="+st.squash+" gridOffsetY="+st.gridOffsetY);
COMP(2000, "CP3 solo", "(CONFIG.tStemOffMs + CONFIG.stemOffDurMs) + CONFIG.settleDurMs", (CFG.tStemOffMs + CFG.stemOffDurMs) + CFG.settleDurMs, st => st.pressRaw===0 && st.stemOpacity===0 && st.cubeVisible===0, st => "pressRaw="+st.pressRaw+" stemOpacity="+st.stemOpacity+" cubeVisible="+st.cubeVisible);
COMP(2500, "F-3500 press-mid==P3 FULL", "pressStart + CONFIG.pressDurMs/2 [pressStart derived in code]", pressStart + CFG.pressDurMs/2, st => predP3(CFG, st), st => valsP3(st));
COMP(3000, "CP4 press-bottom==P4 FULL", "pressStart + CONFIG.pressDurMs [pressStart derived in code]", pressStart + CFG.pressDurMs, st => predP4(CFG, st), st => valsP4(st));
COMP(3500, "F-4500 reveal==P7 FULL", "holdEnd + CONFIG.liftDurMs [holdEnd derived in code]", holdEnd + CFG.liftDurMs, st => predP7(CFG, st, cd.total), st => valsP7(CFG, st));
COMP(4000, "CP5 slab-hold", "liftEnd + CONFIG.slabHoldMs*2/3 [liftEnd derived in code]", liftEnd + CFG.slabHoldMs*2/3, st => st.cubeVisible===cd.total && st.gatherRaw===0 && st.cubes.every(c=>Math.abs(c.x-c.sx)<1e-9 && Math.abs(c.y-c.sy)<1e-9), st => "cubeVisible="+st.cubeVisible+" gatherRaw="+st.gatherRaw+" maxCubeDev="+Math.max.apply(null, st.cubes.map(c=>Math.hypot(c.x-c.sx, c.y-c.sy))));
COMP(4500, "F-5500 gather-departed", "gatherStart + CONFIG.gatherDurMs/7 [gatherStart derived in code]", gatherStart + CFG.gatherDurMs/7, st => Math.abs(st.gatherRaw - (CFG.gatherDurMs/7)/CFG.gatherDurMs) < 1e-9 && st.cubes.some(c=>Math.hypot(c.x-c.sx,c.y-c.sy)>0.01), st => "gatherRaw="+st.gatherRaw+" departedCubes="+st.cubes.filter(c=>Math.hypot(c.x-c.sx,c.y-c.sy)>0.01).length);
COMP(5000, "CP6 gather-continues", "gatherStart + CONFIG.gatherDurMs*3/7 [gatherStart derived in code]", gatherStart + CFG.gatherDurMs*3/7, st => Math.abs(st.gatherRaw - (CFG.gatherDurMs*3/7)/CFG.gatherDurMs) < 1e-9 && st.bowlOpacity > 0, st => "gatherRaw="+st.gatherRaw+" bowlOpacity="+st.bowlOpacity);
COMP(6000, "CP7 bowl==P9 FULL", "gatherStart + CONFIG.gatherDurMs [gatherStart derived in code]", gatherStart + CFG.gatherDurMs, st => predP9(CFG, st) && eq(stripT(st), stripT(sP9)), st => valsP9(st)+" fullStateEqP9="+eq(stripT(st), stripT(sP9)));
// geometry: cover covers subject at variant geometry
const CFGv = JSON.parse(JSON.stringify(CFG)); CFGv.subjectR = Math.round(CFG.subjectR * 1.2);
const sv = T.stateAt(CFGv, pressStart + CFG.pressDurMs);
chk("GEOM cover-covers variant subjectR*1.2", sv.coverCoversSubject===true, "covers="+sv.coverCoversSubject);
chk("GEOM slab<=grid", (CFG.cubeCols*cd.cubePx + (CFG.cubeCols-1)*CFG.cubeGapPx) <= CFG.gridCols*CFG.cellPx, "slabW="+(CFG.cubeCols*cd.cubePx+(CFG.cubeCols-1)*CFG.cubeGapPx)+" gridW="+(CFG.gridCols*CFG.cellPx));
// validator negatives
const bad1 = JSON.parse(JSON.stringify(CFG)); bad1.occluderMax = 0.9;
chk("VALIDATOR occluder<1 rejected", T.validateConfig(bad1) !== null, String(T.validateConfig(bad1)));
const bad2 = JSON.parse(JSON.stringify(CFG)); bad2.pressDurMs = -5;
chk("VALIDATOR negative duration rejected", T.validateConfig(bad2) !== null, String(T.validateConfig(bad2)));
// SWAP content
const SW = JSON.parse(JSON.stringify(CFG));
SW.inputLabel = "ONION"; SW.outputLabel = "DICED ONION"; SW.palette.cube = "#f0ead8"; SW.palette.cushion = "#e8e0cc"; SW.pipStyle = "plain";
const swState = T.stateAt(SW, holdEnd + CFG.liftDurMs);
const swPips = swState.cubes.reduce((a,c)=>a+c.pips,0);
const defState = T.stateAt(CFG, holdEnd + CFG.liftDurMs);
const defPips = defState.cubes.reduce((a,c)=>a+c.pips,0);
const swRender = T.render(SW, holdEnd + CFG.liftDurMs);
chk("SWAP content pipStyle plain->0 pips", swPips===0 && defPips>0, "swapPips="+swPips+" defaultPips(top cubes sum)="+defPips);
chk("SWAP content labels render", swRender.includes("ONION") && swRender.includes("DICED ONION") && swRender.includes("#f0ead8"), "labels+cubeFill in render");
// SWAP timing PAIRED receipt (fixed anchor + shifted P4)
const TM = JSON.parse(JSON.stringify(CFG)); TM.pressDurMs = 1600;
const tmSch = T.schedule(TM);
const fixedDefault = T.stateAt(CFG, 3000), fixedSwap = T.stateAt(TM, 3000);
console.log("PAIRED-TIMING fixed C@3000 rawPress default="+fixedDefault.pressRaw+" swapped="+fixedSwap.pressRaw+" expectedSwapped="+(3000-pressStart)/1600);
console.log("PAIRED-TIMING shifted P4 instant expr pressStart+pressDurMs default="+(pressStart+CFG.pressDurMs)+" swapped="+(pressStart+TM.pressDurMs)+" swapAt default="+sch.swapAt+" swapped="+tmSch.swapAt);
chk("SWAP timing paired", fixedDefault.pressRaw===1 && Math.abs(fixedSwap.pressRaw - 0.625)<1e-9 && (pressStart+TM.pressDurMs)===3600 && tmSch.swapAt===3725, "");
const tmP4 = T.stateAt(TM, pressStart + TM.pressDurMs);
chk("SWAP timing P4-at-shifted-instant FULL", predP4(TM, tmP4), "at "+(pressStart+TM.pressDurMs)+" under pressDurMs=1600: "+valsP4(tmP4));
// SWAP timing COMPANIONS move (cure 1's required demonstration, CP4 companion + press-mid companion):
// companion instants recomputed from the SWAPPED CONFIG's own expressions in code.
const tmStemEnd = TM.tStemOffMs + TM.stemOffDurMs;
const tmPressStart = tmStemEnd + TM.settleDurMs;
const tmCompCP4 = tmPressStart + TM.pressDurMs;
const tmCompMid = tmPressStart + TM.pressDurMs/2;
const tmCompCP4State = T.stateAt(TM, tmCompCP4);
const tmCompMidState = T.stateAt(TM, tmCompMid);
console.log("SWAP-TIMING COMPANION CP4 instant expr pressStart+pressDurMs default="+(pressStart+CFG.pressDurMs)+" swapped="+tmCompCP4+" | swapped-state: "+valsP4(tmCompCP4State));
console.log("SWAP-TIMING COMPANION F-3500 instant expr pressStart+pressDurMs/2 default="+(pressStart+CFG.pressDurMs/2)+" swapped="+tmCompMid+" | swapped-state: "+valsP3(tmCompMidState));
chk("SWAP timing COMPANION CP4 moves + FULL P4 at moved instant", tmCompCP4===3600 && tmCompCP4!==(pressStart+CFG.pressDurMs) && predP4(TM, tmCompCP4State), "default 3000 -> swapped 3600");
chk("SWAP timing COMPANION F-3500 moves + FULL P3 at moved instant", tmCompMid===2800 && predP3(TM, tmCompMidState), "default 2500 -> swapped 2800");
// SWAP palette
const PL = JSON.parse(JSON.stringify(CFG)); PL.palette.cube = "#2e7ec8";
const plRender = T.render(PL, holdEnd + CFG.liftDurMs);
chk("SWAP palette cube fill", plRender.includes("#2e7ec8"), "fill #2e7ec8 in render=" + plRender.includes("#2e7ec8"));
// render smoke at key instants
for (const tt of [0, 1000, 2500, 3000, 3125, 3500, 5125, 6000, 7000]){
  const r = T.render(CFG, tt);
  if (!(r.includes("<svg") && r.length > 2000)) chk("RENDER@" + tt, false, "len=" + r.length);
}
console.log("RENDER smoke ok");
console.log("SUMMARY pass=" + pass + " fail=" + fail);
process.exit(fail ? 1 : 0);
