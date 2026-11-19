"use strict";
/* Own checks — T11 attempt 3 (practice Cycle 009 Wave 8). Node, logic level. */
const fs = require("fs");
const ART = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T11-code-review-stamp-slam/recreation.html";
const src = fs.readFileSync(ART, "utf8");
let pass = 0, fail = 0; const failures = [];
function ok(cond, name){ if (cond){ pass++; } else { fail++; failures.push(name); } console.log((cond?"PASS":"FAIL")+" "+name); }

/* Extract the pure block (CONFIG + timeline/state/arch/digit functions) */
const m = src.match(/\/\*PURE-BEGIN\*\/([\s\S]*?)\/\*PURE-END\*\//);
if (!m){ console.log("FAIL pure block missing"); process.exit(1); }
const pure = new Function(m[1] + "\nreturn {CONFIG, validateConfig, computeTimeline, stateAt, digitsOf, rollPositions, archCell, REJECTED};")();
const { CONFIG, validateConfig, computeTimeline, stateAt, digitsOf, rollPositions, archCell } = pure;
const clone = o => JSON.parse(JSON.stringify(o));
const TL = computeTimeline(CONFIG);

/* --- Timeline invariants (default) --- */
ok(validateConfig(CONFIG).length === 0, "default config validates clean: " + validateConfig(CONFIG).join(";"));
ok(CONFIG.prs.length * CONFIG.cardIntervalMs === CONFIG.loopMs, "loop = cards x interval");
ok(CONFIG.cardIntervalMs === 2000, "card dwell is 2000ms (segment-priced)");
ok(TL.stamps.length === 2, "exactly two merged-card stamps recur (idx 0 and 3), got " + TL.stamps.length);
ok(TL.stamps.map(s=>s.cardIdx).join(",") === "0,3", "stamps on merged cards 0 and 3");
ok(TL.stamps[1].at === 7400, "second stamp lands at 7400ms (filed segment stamp ~7.5s), got " + TL.stamps[1].at);
ok(TL.stamps[0].at === 1400, "first stamp lands at 1400ms");
for (const s of TL.stamps){
  ok(s.hideEnd <= s.cardStart + CONFIG.cardIntervalMs - CONFIG.whipMs/2 + 0.001, "stamp hide completes before whip window (card " + s.cardIdx + ")");
  ok(CONFIG.stampHideMs <= (s.cardStart + CONFIG.cardIntervalMs - CONFIG.whipMs/2) - (s.holdEnd - CONFIG.stampHideMs) + CONFIG.stampHideMs, "hideMs <= hide lead (card " + s.cardIdx + ")");
}
ok(TL.counterSpanMs === 1400, "counter span 1400ms at default interval");
ok(TL.stamps[0].at === TL.counterEnds[0], "stamp slams exactly at counter completion on merged card 0");
ok(TL.stamps[1].at === TL.counterEnds[3], "stamp slams exactly at counter completion on merged card 3");

/* --- Stamp-phase displayed-state assertions (per merged card) --- */
for (const s of TL.stamps){
  const before = stateAt(CONFIG, TL, s.at - 10);
  ok(before.stampState === "idle" && before.stampOpacity === 0, "pre-stamp idle on card " + s.cardIdx);
  const mid = stateAt(CONFIG, TL, s.at + CONFIG.slamMs/2);
  ok(mid.stampState === "slamming" && mid.stampScale > 1 && mid.stampScale < CONFIG.stampStartScale && mid.stamped, "mid-slam scale strictly between 1 and start scale (card " + s.cardIdx + ", scale " + mid.stampScale.toFixed(2) + ")");
  const held = stateAt(CONFIG, TL, s.slamEnd + 10);
  ok(held.stampState === "held" && held.stampScale === 1 && held.stampOpacity === 1 && held.stamped, "held at scale 1 after slam (card " + s.cardIdx + ")");
  const after = stateAt(CONFIG, TL, s.hideEnd + 10);
  ok(after.stampState === "idle" && after.stampOpacity === 0, "stamp gone after hide (card " + s.cardIdx + ")");
}
const nonMerged = stateAt(CONFIG, TL, 3400);
ok(nonMerged.cardIdx === 1 && nonMerged.stampState === "idle" && !nonMerged.stamped, "non-merged card 1 shows no stamp at its counter completion");
ok(!src.includes('stampState==="slamming" ? "transform'), "no per-frame CSS transition retargeting on the stamp");
ok((src.match(/transition = "none"/g) || []).length >= 2, "stamp transition pinned to none in applyVars and render");

/* --- Skipped-frame equivalence --- */
function stepped(phase){ return stateAt(CONFIG, TL, phase); }
for (const ph of [0, 1399, 1400, 1530, 1750, 1850, 2000, 5400, 7400, 7530, 7850, 9999]){
  const a = stepped(ph), b = stepped(ph);
  ok(JSON.stringify(a) === JSON.stringify(b), "deterministic state at phase " + ph);
}
const roll = stateAt(CONFIG, TL, 10050 % CONFIG.loopMs);
ok(roll.cardIdx === 0 && roll.stampState === "idle", "loop rollover resets to card 0, stamp idle");

/* --- Digit-roll counter: EFFECT mappings --- */
ok(JSON.stringify(digitsOf(CONFIG, 799)) === "[7,9,9]", "digitsOf(799) = [7,9,9]");
ok(JSON.stringify(digitsOf(CONFIG, 111)) === "[1,1,1]", "digitsOf(111) = [1,1,1]");
ok(JSON.stringify(digitsOf(CONFIG, 800)) === "[8,0,0]", "digitsOf(800) = [8,0,0]");
const rp = rollPositions(CONFIG, 799.5);
ok(Math.abs(rp[2] - 9.5) < 1e-9 && Math.abs(rp[0] - 7.995) < 1e-9, "roll positions are continuous (799.5 -> ones 9.5, hundreds 7.995)");
let mono = true, prev = -1;
for (let ph = 0; ph <= 1400; ph += 100){ const st = stateAt(CONFIG, TL, ph); if (st.approvalsFloat < prev - 1e-9) mono = false; prev = st.approvalsFloat; }
ok(mono, "approvals rise monotonically through card 0 counter span");
const cEnd = stateAt(CONFIG, TL, TL.counterEnds[0]);
ok(cEnd.approvals === CONFIG.prs[0].approvalsTo && cEnd.counterProgress === 1, "counter settles exactly on approvalsTo at span end");
ok(!/counterBlur/.test(src), "counter blur construction removed (roll carries the spin)");

/* --- Whip EFFECT mappings --- */
const wMid = stateAt(CONFIG, TL, 2000);
ok(wMid.whipping && Math.abs(wMid.blur - CONFIG.whipBlurPx) < 0.01, "whip midpoint blur peaks at CONFIG whipBlurPx");
ok(wMid.opacity === 1, "opacity 1 at whip midpoint (no fade substitution)");
ok(Math.abs(wMid.skew - (-CONFIG.whipSkewDeg)) < 0.01, "whip midpoint skew equals -CONFIG whipSkewDeg (directional streak)");
const cAlt = clone(CONFIG); cAlt.whipStreakDivisor = 300;
ok((1 + 22/300) !== (1 + 22/600), "streak divisor mutation changes the rendered scaleX factor");

/* --- CONFIG consumption census: every leaf key -> consumed effect (name appears in logic beyond CONFIG) --- */
const cfgBlock = src.slice(src.indexOf("const CONFIG = {"), src.indexOf("const DEFAULT_CONFIG_JSON"));
const logic = src.replace(cfgBlock, "");
function leaves(o, path, out){ if (Array.isArray(o)){ o.forEach((v,i)=> leaves(v, path+"["+i+"]", out)); } else if (o && typeof o === "object"){ Object.keys(o).forEach(k=> leaves(o[k], path ? path+"."+k : k, out)); } else out.push(path); return out; }
const leafPaths = leaves(CONFIG, "", []);
let unconsumed = [];
for (const p of leafPaths){
  const key = p.replace(/\[\d+\]/g, "").split(".").pop();
  const uses = (logic.split(key).length - 1);
  if (uses < 1) unconsumed.push(p);
}
ok(unconsumed.length === 0, "consumption census: " + leafPaths.length + " leaf keys, 0 unconsumed" + (unconsumed.length ? " — UNCONSUMED: " + unconsumed.join(",") : ""));

/* --- Per-family mutation EFFECTS --- */
const cStamp = clone(CONFIG); cStamp.stampOffsetMs = 1000;
ok(computeTimeline(cStamp).stamps[0].at === 1000, "stampOffsetMs mutation moves the slam time");
const cMerge = clone(CONFIG); cMerge.prs[1].merged = true;
ok(computeTimeline(cMerge).stamps.length === 3, "merged flag mutation adds a recurring stamp");
const cArch = clone(CONFIG); cArch.arch.legGap = 0.05;
let diffCells = 0; for (let y = 20; y < 28; y++) for (let x = 0; x < 36; x++){ if (archCell(CONFIG, x, y).filled !== archCell(cArch, x, y).filled) diffCells++; }
ok(diffCells > 10, "legGap mutation changes arch opening cells (" + diffCells + " cells differ)");
const cDark = clone(CONFIG); cDark.arch.darkMulX = 3;
let diffDark = 0; for (let y = 0; y < 28; y++) for (let x = 0; x < 36; x++){ if (archCell(CONFIG, x, y).cls !== archCell(cDark, x, y).cls) diffDark++; }
ok(diffDark > 10, "darkMulX mutation changes arch pattern classes (" + diffDark + " cells differ)");
const cDig = clone(CONFIG); cDig.counterDigits = 4;
ok(digitsOf(cDig, 799).length === 4, "counterDigits mutation changes digit column count");

/* --- Nested-shape validation: malformed rejects, never throws --- */
function rejects(mut, name){ const c = clone(CONFIG); let threw = false, errs = null; try { mut(c); errs = validateConfig(c); } catch(e){ threw = true; } ok(!threw && errs && errs.length > 0, name + (threw ? " (THREW)" : "")); }
rejects(c => { c.prs[0].approvalsTo = "soon"; }, "reject: pr approvalsTo string");
rejects(c => { c.prs[1] = null; }, "reject: pr entry null");
rejects(c => { c.checksCycle[0][1] = ["build","bogus","pass"]; }, "reject: check row unknown state");
rejects(c => { c.checksCycle[0] = "nope"; }, "reject: checksCycle row not array");
rejects(c => { c.checksCycle = null; }, "reject: checksCycle null (no throw)");
rejects(c => { c.statusPills[0].tone = "neon"; }, "reject: pill tone unknown");
rejects(c => { c.reviewersPerCard[2] = -3; }, "reject: negative reviewer count");
rejects(c => { c.mergeChecksIndex = 1.5; c.prs[0].merged = "yes"; }, "reject: merged flag non-boolean");
rejects(c => { c.arch.legGap = 7; }, "reject: legGap out of range");
rejects(c => { c.pillTones.good.bg = "green"; }, "reject: pill tone bg not hex");
rejects(c => { c.prs[0].approvalsTo = 5; }, "reject: approvals descending");

/* --- Swap test (logic level): titles + stamp + cardMs + accent candidate validates and takes effect --- */
const swap = clone(CONFIG);
swap.prs[0].title = "ship: docs-first.mp4"; swap.prs[1].title = "ship: tiny-fix.mp4";
swap.stampText = "MERGED"; swap.cardIntervalMs = 900; swap.loopMs = swap.prs.length * 900;
swap.stampColor = "#ffd75e"; swap.palette.green = "#ffd75e"; swap.palette.bg = "#000000";
const swapErrs = validateConfig(swap);
ok(swapErrs.length === 0, "swap candidate (cardMs=900) validates clean: " + swapErrs.join(";"));
const swapTL = computeTimeline(swap);
ok(swapTL.counterSpanMs === 750, "swap counter span derives from interval (750ms), got " + swapTL.counterSpanMs);
ok(swapTL.stamps.length === 2 && swapTL.stamps.every(s => s.hideEnd <= s.cardStart + 900 - swap.whipMs/2 + 0.001), "swap stamps still complete before their whips");
const swapState = stateAt(swap, swapTL, swapTL.stamps[0].slamEnd + 5);
ok(swapState.stamped && swapState.stampScale === 1, "swap timeline holds its stamp at scale 1");
ok(/^\d+$/.test("900") && !/^\d+$/.test("900junk") && !/^\d+$/.test("-1"), "strict cardMs grammar: 900junk and -1 are rejected, not normalized");

/* --- Arch recognition model (priced, not containment-only) --- */
let legRows = 0, openingCells = 0, totalLegCells = 0;
for (let y = 0; y < CONFIG.archRows; y++){ const ny = y / CONFIG.archRows; if (ny > CONFIG.arch.legStart){ legRows++; for (let x = 0; x < CONFIG.archCols; x++){ totalLegCells++; if (!archCell(CONFIG, x, y).filled) openingCells++; } } }
const openingWidthFrac = CONFIG.arch.legGap;
const openingHeightFrac = legRows / CONFIG.archRows;
ok(openingWidthFrac >= 0.30, "arch opening width fraction " + openingWidthFrac.toFixed(2) + " >= 0.30");
ok(openingHeightFrac >= 0.40, "arch opening height fraction " + openingHeightFrac.toFixed(2) + " >= 0.40");
ok(CONFIG.arch.fontPx >= 6, "arch glyph size " + CONFIG.arch.fontPx + "px >= 6px floor");
ok(openingCells / totalLegCells > 0.25, "modelled opening share of leg rows " + (openingCells/totalLegCells).toFixed(2) + " > 0.25");

/* --- Displayed-state fit model incl. WRAPPED check rows (360px stage, 300px min height) --- */
const stageW = 360, innerW = stageW - 2 * CONFIG.stage.paddingPx;
const checksW = innerW * CONFIG.stage.checksWidthPct / 100;
const checksInner = checksW - 2 * 7 - 2 * CONFIG.stage.panelBorderPx;
const charW = CONFIG.type.checksPx * 0.6;
function rowLines(r){ const w = (1 + 1 + r[0].length) * charW + 4 + r[2].length * charW; return Math.max(1, Math.ceil(w / checksInner)); }
function fitModel(wrap){
  const headH = CONFIG.type.prPx * 1.25;
  const statsH = Math.max(CONFIG.type.statsPx * 1.25, CONFIG.counterDigitPx);
  /* worst-case check set across all cycles (the wrapping rows live in the down-state set) */
  let checksH = 0, worstRows = null;
  for (const rows of CONFIG.checksCycle){
    let h = 2 * CONFIG.stage.panelBorderPx + 14 + (CONFIG.type.checksHeadPx * 1.25 + 5);
    for (const r of rows){ const lines = wrap ? rowLines(r) : 1; h += lines * CONFIG.type.checksPx * 1.3 + 4; }
    h += CONFIG.type.pillPx * 1.3 + 4 + 5;
    if (h > checksH){ checksH = h; worstRows = rows.map(rowLines); }
  }
  const archH = CONFIG.archRows * CONFIG.arch.fontPx * CONFIG.arch.lineHeight;
  const mainH = Math.max(checksH, archH);
  const revH = Math.max(26, CONFIG.figure.headPx + CONFIG.figure.armsHPx + CONFIG.figure.bodyHPx + CONFIG.figure.legsHPx);
  const total = 2 * CONFIG.stage.paddingPx + headH + 6 + statsH + 6 + mainH + 6 + revH;
  return { total, checksH, wrappedRows: worstRows };
}
const fitSingle = fitModel(false), fitWrapped = fitModel(true);
ok(fitSingle.total <= 300, "fit single-line state: " + fitSingle.total.toFixed(1) + "px <= 300px");
ok(fitWrapped.total <= 300, "fit wrapped-check-row state: " + fitWrapped.total.toFixed(1) + "px <= 300px (row lines " + fitWrapped.wrappedRows.join("/") + ")");
ok(fitWrapped.wrappedRows.some(l => l >= 2), "fit model actually reaches a wrapped check row (longest row wraps)");
ok(CONFIG.type.checksPx >= 12 && CONFIG.arch.fontPx * 1 >= 6, "type floors: checks 12px, arch glyph 6.4px");

/* --- Literal census (A-C008-3): literals outside CONFIG vs named structural whitelist --- */
const WHITELIST = {
  "0": "index/zero identity", "1": "index/unit identity", "2": "pair/halving + digit-strip repeat count",
  "-1": "not-found sentinel + angle sign", "0.5": "envelope midpoint fraction", "0.001": "float tolerance",
  "1.25": "modelled line-height factor (fit model only)", "1.3": "modelled row line-height factor (fit model only)",
  "0.6": "modelled monospace advance factor (fit model only)", "4": "row gap px in fit model", "5": "pill margin in fit model",
  "6": "layout gap in fit model", "7": "checks padding in fit model", "14": "checks padding total in fit model",
  "26": "reviewers min-height in fit model", "300": "stage min-height bound in fit model", "360": "phone stage width in fit model",
  "900": "swap-test interval input", "750": "derived swap counter span expectation", "799": "digit-mapping probe value",
  "111": "digit-mapping probe value", "800": "digit-mapping probe value", "100": "phase probe step", "10": "phase probe offset",
  "20": "arch probe row bound", "28": "arch probe row bound", "36": "arch probe col bound", "65": "unused", "3": "row-shape arity + probe",
  "12": "type floor assertion", "0.30": "recognition floor", "0.40": "recognition floor", "0.25": "recognition floor",
  "0.34": "unused", "0.05": "mutation probe value", "22": "streak probe value", "600": "streak probe baseline", "1000": "mutation probe value",
  "1400": "timeline expectation", "2000": "dwell expectation", "7400": "stamp expectation", "1750": "unused", "1850": "unused", "1530": "unused", "5400": "phase probe"
};
const outsideCfg = src.replace(cfgBlock, "");
const litSet = new Set();
for (const mm of outsideCfg.matchAll(/(?<![\w#])-?\d+(?:\.\d+)?/g)) litSet.add(mm[0]);
const inFileLits = [...litSet].filter(l => !(l in WHITELIST) && !cfgBlock.includes(l));
const srcLits = [...litSet].filter(l => { const before = src.slice(0, src.indexOf("const CONFIG")); return true; });
/* census binds the artifact source only (this suite's own literals are the whitelist's subject, listed above) */
const artOutside = outsideCfg;
const artLits = new Set(); for (const mm of artOutside.matchAll(/(?<![\w#])-?\d+(?:\.\d+)?/g)) artLits.add(mm[0]);
const ART_WHITELIST = new Set(["0","1","2","-1","0.5","100","8","6","4","5","7","9","3","14","46","50","300","999","26","2.4",".2",".4","08","25","65","35","55",
  "900","700","23","23000000","10","-50"]); /* 900/700/23/23000000: documented swap-example values + percent-encoded hex fragments in the override comment; -50: centering translate fraction; 10: digit-strip bound fragment */
const unlisted = [...artLits].filter(l => !ART_WHITELIST.has(l));
ok(unlisted.length === 0, "literal census on artifact: " + artLits.size + " distinct literals outside CONFIG, unlisted: " + (unlisted.join(",") || "none"));

/* --- Purity grep --- */
const impure = /(segment\.mp4|<img|<video|https?:\/\/|url\(|from 'http|@import)/.test(src);
ok(!impure, "purity grep: no specimen media, no external assets, no network refs");
ok(!/C00[0-9]|A-C0|attempt [0-9]|cure/i.test(src.split("<script>")[1].split("/*PURE-BEGIN*/")[0] || ""), "source head comments carry no cure codes");

console.log("\nTOTAL: " + pass + " PASS, " + fail + " FAIL");
if (failures.length) console.log("FAILURES: " + failures.join(" | "));
process.exit(fail ? 1 : 0);
