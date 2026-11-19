"use strict";
/* T11 attempt 6 — targeted stage probes (same probe run verbatim before/after each stage). */
const fs = require("fs");
const path = require("path");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T11-code-review-stamp-slam");
const src = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const pure = src.slice(src.indexOf("/*PURE-BEGIN*/"), src.indexOf("/*PURE-END*/"));
const api = new Function(pure + "\nreturn { CONFIG, validateConfig, computeTimeline, digitsOf, rollPositions, archCell, stateAt, parseOverrides, stripLengthsFor: (typeof stripLengthsFor==='function'? stripLengthsFor : null) };")();
const C = api.CONFIG, TL = api.computeTimeline(C);
const clone = o => JSON.parse(JSON.stringify(o));
function mock(map){ return { getAll: k => (k in map ? map[k] : null), keys: () => Object.keys(map) }; }
// wrap probe: tens column position across the 190->200 carry (from 111)
const wBefore = api.rollPositions(C, 199.99, 111), wAfter = api.rollPositions(C, 200.01, 111);
console.log("WRAP tens pos 199.99 -> " + wBefore[1].toFixed(3) + " ; 200.01 -> " + wAfter[1].toFixed(3) + " ; ones 199.99 -> " + wBefore[2].toFixed(2) + " ; 200.01 -> " + wAfter[2].toFixed(2));
// composition probes
const badPal = clone(C); badPal.palette = null;
let comp1 = "no-throw"; try { const r = api.parseOverrides(badPal, mock({accent:["#ffd75e"]}).getAll, mock({accent:["#ffd75e"]}).keys); comp1 = "no-throw errs=" + r.errs.length; } catch(e){ comp1 = "THREW: " + e.message; }
console.log("COMPOSITION palette-null x accent: " + comp1);
const badLim = clone(C); badLim.overrideLimits = null;
let comp2 = "no-throw"; try { const r = api.parseOverrides(badLim, mock({titles:["a|b"]}).getAll, mock({titles:["a|b"]}).keys); comp2 = "no-throw errs=" + r.errs.length; } catch(e){ comp2 = "THREW: " + e.message; }
console.log("COMPOSITION overrideLimits-null x titles: " + comp2);
// capacity probe
const capTo = clone(C); capTo.prs[3].approvalsTo = 1000;
console.log("CAPACITY approvalsTo=1000 validate errs: " + JSON.stringify(api.validateConfig(capTo)));
const capFrom = clone(C); capFrom.prs[0].approvalsFrom = 1000; capFrom.prs[0].approvalsTo = 1000;
console.log("CAPACITY approvalsFrom=1000 validate errs: " + JSON.stringify(api.validateConfig(capFrom)));
// startup order probe (source form)
console.log("STARTUP-ORDER validate-before-overrides: " + (src.indexOf("const STARTUP_ERRS = validateConfig(CONFIG);") >= 0 && src.indexOf("const STARTUP_ERRS = validateConfig(CONFIG);") < src.indexOf("applyOverrides")));
console.log("ONESSTRIPREPS present: " + src.includes("onesStripReps") + " ; stripLengthsFor: " + (typeof api.stripLengthsFor === "function" ? JSON.stringify(api.stripLengthsFor(C)) : "absent"));
// arch probe
function openingHalf(y){ let max = -1; for (let x = 0; x < C.archCols; x++){ const cell = api.archCell(C, x, y); const nx = (x - C.archCols/2) / (C.archCols/2), ny = y / C.archRows; const halfW = ny < C.arch.knee ? (C.arch.halfBase + (C.arch.halfTop - C.arch.halfBase) * Math.pow(ny / C.arch.knee, C.arch.crownExp)) : C.arch.halfTop; if (Math.abs(nx) < halfW && !cell.filled) max = Math.max(max, Math.abs(nx)); } return max; }
const rows = []; for (let y = 0; y < C.archRows; y++){ const h = openingHalf(y); if (h >= 0) rows.push([y, +h.toFixed(3)]); }
console.log("ARCH opening rows: " + JSON.stringify(rows));
console.log("ARCH apexHeightFrac config: " + (C.arch.apexHeightFrac !== undefined ? C.arch.apexHeightFrac : "absent") + " ; first opening row " + (rows.length ? rows[0][0] : "none") + " ; opening height fraction " + (rows.length ? ((C.archRows - rows[0][0]) / C.archRows).toFixed(3) : "n/a"));
// rate probe
console.log("TIMELINE spans: " + JSON.stringify(TL.counterSpans) + " ; stamps: " + JSON.stringify(TL.stamps));
C.prs.forEach((p,i)=>{ const d = p.approvalsTo - p.approvalsFrom; console.log("RATE card " + i + " delta " + d + " span " + TL.counterSpans[i] + " rate " + (d / TL.counterSpans[i] * 1000).toFixed(2) + " digits/s ; margin " + ((TL.starts[i] + C.cardDurationsMs[i]) - TL.counterEnds[i]) + " ; preWhipDwell " + ((TL.starts[i] + C.cardDurationsMs[i] - C.whipMs/2) - TL.counterEnds[i])); });
