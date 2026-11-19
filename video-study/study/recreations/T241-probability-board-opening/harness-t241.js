"use strict";
/* T241 harness — loads recreation.html's inline script, evaluates CONFIG-derived assertions. */
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/recreation.html", "utf8");
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log("FAIL no script block"); process.exit(1); }
const src = m[1];
const fn = new Function("window", "document", "location", src + "\nreturn __T241;");
const T = fn({}, undefined, undefined);
const { CONFIG, derive, stateAt, render, validate } = T;
let pass = 0, fail = 0;
function chk(name, cond, detail) {
  if (cond) { pass++; console.log("PASS " + name + (detail ? " :: " + detail : "")); }
  else { fail++; console.log("FAIL " + name + (detail ? " :: " + detail : "")); }
}
const D = derive(CONFIG);
console.log("SCHEDULE " + JSON.stringify({ arrayEndMs: D.arrayEndMs, expandStart: D.expandStart, expandEndMs: D.expandEndMs, slotStartMs: D.slotStartMs, completeAtMs: D.completeAtMs, dissolveStartMs: D.dissolveStartMs, dissolveEndMs: D.dissolveEndMs, durationMs: CONFIG.timing.durationMs, count: D.count }));
console.log("VALIDATE default: " + validate(CONFIG));
const clone = o => JSON.parse(JSON.stringify(o));

/* Count assertion (A9.3): source count 40 (4 rows x 10, counted firsthand) vs built */
chk("COUNT source=40 built=" + D.count, D.count === 40, "source=40 built=" + D.count);

/* A11 checkpoints — every instant a CONFIG expression */
const cp0t = CONFIG.timing.tReticleMs;
const S0 = stateAt(CONFIG, cp0t);
chk("CP0@expr(tReticleMs)=" + cp0t, S0.reticleRaw === 0 && S0.iconsStarted === 0 && S0.formulaRaw === 0, "reticleRaw=" + S0.reticleRaw + " iconsStarted=" + S0.iconsStarted + " formulaRaw=" + S0.formulaRaw);
const cp1t = CONFIG.timing.tMagMs + CONFIG.timing.magDurMs / 2;
const S1 = stateAt(CONFIG, cp1t);
chk("CP1@expr(tMagMs+magDurMs/2)=" + cp1t, S1.magRaw === 0.5 && S1.reticleRaw === 1, "magRaw=" + S1.magRaw + " reticleRaw=" + S1.reticleRaw);
const S2 = stateAt(CONFIG, 1000);
chk("CP2@census1000", S2.iconsComplete === 25 && S2.formulaRaw === 0 && S2.expandChars.every(c => c === 0), "iconsComplete=" + S2.iconsComplete + " formulaRaw=" + S2.formulaRaw + " expandChars=" + JSON.stringify(S2.expandChars));
const cp2bt = CONFIG.timing.tFormulaMs;
const S2b = stateAt(CONFIG, cp2bt);
chk("CP2b@expr(tFormulaMs)=" + cp2bt + " companion", S2b.iconsComplete === 25 && S2b.formulaRaw === 0 && S2b.expandChars.every(c => c === 0), "iconsComplete=" + S2b.iconsComplete + " formulaRaw=" + S2b.formulaRaw + " expandChars=" + JSON.stringify(S2b.expandChars));
const cp3t = D.expandStart[1];
const S3 = stateAt(CONFIG, cp3t);
chk("CP3@expr(expandStart[1])=" + cp3t, S3.expandChars[0] === CONFIG.texts.expansion[0].length && S3.expandChars[1] === 0, "chars=" + JSON.stringify(S3.expandChars));
const S4 = stateAt(CONFIG, 3000);
chk("CP4@census3000", S4.bracketsRaw > 0 && S4.slotRaw === 0 && S4.expandChars[2] > 0 && S4.expandChars[2] < CONFIG.texts.expansion[2].length, "bracketsRaw=" + S4.bracketsRaw + " slotRaw=" + S4.slotRaw + " L3chars=" + S4.expandChars[2] + "/" + CONFIG.texts.expansion[2].length);
const cp4bt = CONFIG.timing.tBracketsMs + CONFIG.timing.bracketsDurMs / 2;
const S4b = stateAt(CONFIG, cp4bt);
chk("CP4b@expr(tBracketsMs+bracketsDurMs/2)=" + cp4bt + " companion", S4b.bracketsRaw === 0.5 && S4b.slotRaw === 0, "bracketsRaw=" + S4b.bracketsRaw + " slotRaw=" + S4b.slotRaw + " L3chars=" + S4b.expandChars[2]);
const cp5t = D.completeAtMs;
const S5 = stateAt(CONFIG, cp5t);
chk("CP5@expr(completeAtMs)=" + cp5t, S5.slotRaw === 1 && S5.boardOpacity === 1 && S5.expandChars[2] === CONFIG.texts.expansion[2].length, "slotRaw=" + S5.slotRaw + " boardOpacity=" + S5.boardOpacity);
const S6 = stateAt(CONFIG, 5000);
chk("CP6@census5000", S6.reticleOpacity === CONFIG.timing.reticleDimOpacity && S6.boardOpacity === 1 && S6.slotRaw === 1, "reticleOpacity=" + S6.reticleOpacity + " boardOpacity=" + S6.boardOpacity + " slotRaw=" + S6.slotRaw);
const cp6bt = CONFIG.timing.tDimMs;
const S6b = stateAt(CONFIG, cp6bt);
chk("CP6b@expr(tDimMs)=" + cp6bt + " companion", S6b.reticleOpacity === CONFIG.timing.reticleDimOpacity && S6b.pulse === CONFIG.timing.pulseScale, "reticleOpacity=" + S6b.reticleOpacity + " pulse=" + S6b.pulse + " (=pulseScale, pulse midpoint)");
const cp5bt = D.slotStartMs + CONFIG.timing.slotDurMs / 2;
const S5b = stateAt(CONFIG, cp5bt);
chk("CP5b@expr(slotStartMs+slotDurMs/2)=" + cp5bt + " companion", S5b.slotRaw === 0.5, "slotRaw=" + S5b.slotRaw);
const cp7t = D.dissolveEndMs;
const S7 = stateAt(CONFIG, cp7t);
chk("CP7@expr(dissolveEndMs)=" + cp7t, S7.boardOpacity === 0 && S7.iconsComplete === D.count && S7.arrayOpacity === 1 && S7.ringRaw === 1, "boardOpacity=" + S7.boardOpacity + " icons=" + S7.iconsComplete + "/" + D.count + " ringRaw=" + S7.ringRaw);
const S8 = stateAt(CONFIG, CONFIG.timing.durationMs);
const strip = s => { const c = Object.assign({}, s); return JSON.stringify(c); };
chk("CP8@expr(durationMs)=" + CONFIG.timing.durationMs + " hold-identity vs CP7", strip(S8) === strip(S7), "full-state JSON equal=" + (strip(S8) === strip(S7)));
const cp8mt = (D.dissolveEndMs + CONFIG.timing.durationMs) / 2;
const S8m = stateAt(CONFIG, cp8mt);
chk("CP8m@expr((dissolveEndMs+durationMs)/2)=" + cp8mt + " mid-hold (mapped interval 7000-12900)", strip(S8m) === strip(S7) && S8m.boardOpacity === 0 && S8m.iconsComplete === D.count, "full-state equal CP7=" + (strip(S8m) === strip(S7)) + " boardOpacity=" + S8m.boardOpacity + " iconsComplete=" + S8m.iconsComplete + "/" + D.count);

/* Geometry: selected center derived from selected index */
chk("GEOM selectedCenter", D.selectedCenter.x === 360 && Math.abs(D.selectedCenter.y - (CONFIG.array.originY + CONFIG.array.iconH / 2)) < 0.001, "center=" + JSON.stringify(D.selectedCenter));

/* Validators */
const bad1 = clone(CONFIG); bad1.timing.expandLineDurMs = -5;
chk("VALIDATOR negative duration rejected", validate(bad1) === "bad duration expandLineDurMs", String(validate(bad1)));
const bad2 = clone(CONFIG); bad2.array.selected = 99;
chk("VALIDATOR selected out of range rejected", validate(bad2) === "selected out of range", String(validate(bad2)));

/* Swap: content */
const sw = clone(CONFIG);
sw.texts.formula = "P(S|R) ≈ 0.87"; sw.texts.slotWord = "luck";
sw.texts.expansion[0] = "P(S|R) = P(R|S)·P(S) / Σᵢ P(R|Aᵢ)·P(Aᵢ) = (0.91 × 0.402) / 0.4205";
sw.texts.expansion[2] = "⇒ P(S | R) = 0.8695 ± 0.006   (p < 0.001)";
sw.array.cols = 8;
const swD = derive(sw), swR = render(sw, swD.completeAtMs);
chk("SWAP content count 40->32", swD.count === 32, "swapped count=" + swD.count);
chk("SWAP content render", swR.includes("P(S|R) ≈ 0.87") && swR.includes("luck") && swR.includes("0.8695"), "formula+slot+result present in swapped render");
chk("SWAP content no default claim", !swR.includes("0.9811") && !swR.includes("P(F|H) ≈ 0.98"), "default claim absent under swap at completeAt");

/* Swap: timing (paired) — fixed census anchor + shifted CONFIG-derived instant */
const tw = clone(CONFIG); tw.timing.expandLineDurMs = 1000;
const twD = derive(tw);
const fixedDef = stateAt(CONFIG, 3000), fixedSw = stateAt(tw, 3000);
console.log("PAIRED-TIMING fixed C@3000 L3chars default=" + fixedDef.expandChars[2] + " swapped=" + fixedSw.expandChars[2] + " expectedSwapped=0 (L3 starts " + twD.expandStart[2] + ")");
chk("SWAP timing paired fixed-anchor", fixedDef.expandChars[2] > 0 && fixedSw.expandChars[2] === 0, "L3 chars move at fixed 3000");
console.log("PAIRED-TIMING shifted CP5 instant expr slotStartMs+slotDurMs default=" + D.completeAtMs + " swapped=" + twD.completeAtMs + " expandEndMs default=" + D.expandEndMs + " swapped=" + twD.expandEndMs);
const shSw = stateAt(tw, twD.completeAtMs);
chk("SWAP timing shifted-instant executes", shSw.slotRaw === 1 && twD.completeAtMs === 5250 && twD.dissolveStartMs === 6650, "slotRaw@shifted=" + shSw.slotRaw + " completeAt 3900->" + twD.completeAtMs + " dissolveStart 5300->" + twD.dissolveStartMs);
const tw5bT = twD.slotStartMs + tw.timing.slotDurMs / 2;
const tw5b = stateAt(tw, tw5bT);
console.log("PAIRED-TIMING companion CP5b instant expr slotStartMs+slotDurMs/2 default=" + cp5bt + " swapped=" + tw5bT);
chk("SWAP timing companion CP5b moves", tw5b.slotRaw === 0.5 && tw5bT === 5050, "slotRaw@swapped-companion=" + tw5b.slotRaw + " instant 3700->" + tw5bT);
const tw8mt = (twD.dissolveEndMs + tw.timing.durationMs) / 2;
const tw7 = stateAt(tw, twD.dissolveEndMs);
const tw8m = stateAt(tw, tw8mt);
console.log("PAIRED-TIMING CP8m instant expr (dissolveEndMs+durationMs)/2 default=" + cp8mt + " swapped=" + tw8mt + " dissolveEndMs default=" + D.dissolveEndMs + " swapped=" + twD.dissolveEndMs);
chk("SWAP timing CP8m moves", tw8mt === 10175 && strip(tw8m) === strip(tw7) && tw8m.boardOpacity === 0 && tw8m.iconsComplete === twD.count, "full-state equal CP7-swapped=" + (strip(tw8m) === strip(tw7)) + " boardOpacity=" + tw8m.boardOpacity + " iconsComplete=" + tw8m.iconsComplete + "/" + twD.count + " instant 9500->" + tw8mt);
chk("SWAP timing phase-order holds", twD.slotStartMs > twD.expandEndMs && twD.dissolveStartMs >= twD.completeAtMs + tw.timing.holdMs && twD.dissolveEndMs <= tw.timing.durationMs, "slot after expansion, dissolve after hold, ends in duration");

/* Swap: palette */
const pw = clone(CONFIG); pw.palette.ink = "#7fd4ff";
const pwR = render(pw, D.completeAtMs);
chk("SWAP palette ink", pwR.includes("#7fd4ff"), "fill #7fd4ff in render=" + pwR.includes("#7fd4ff"));

/* Render smoke on default at CP5 */
const r5 = render(CONFIG, D.completeAtMs);
chk("RENDER smoke", r5.includes(CONFIG.texts.formula) && r5.includes(CONFIG.texts.slotWord) && r5.includes(CONFIG.texts.expansion[2]), "formula+slot+result line in default render");
console.log("SUMMARY pass=" + pass + " fail=" + fail);
process.exit(fail ? 1 : 0);
