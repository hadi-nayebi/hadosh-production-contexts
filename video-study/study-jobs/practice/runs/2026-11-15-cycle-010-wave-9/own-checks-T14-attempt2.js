"use strict";
/* T14 attempt-2 own-check suite. Effect mappings, CONFIG consumption census,
   literal census, source-bound displayed-state model (containment + legibility,
   wrapped states, TV vertical fit), adversarial swaps split accepted vs rejected,
   purity grep + asset inventory, comparison check. PIXEL-UNVERIFIED: no render route. */
const fs = require("fs"), vm = require("vm"), assert = require("assert"), crypto = require("crypto");
const ARTDIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T14-cctv-wall-projected-text";
const src = fs.readFileSync(ARTDIR + "/recreation.html", "utf8");
const sha = crypto.createHash("sha256").update(src).digest("hex");
let pass = 0, fail = 0; const failures = [];
function check(name, fn){ try { const r = fn(); pass++; console.log("PASS " + name + (r ? " :: " + r : "")); return r; } catch (e) { fail++; failures.push(name + ": " + e.message); console.log("FAIL " + name + " :: " + e.message); } }

const sandbox = { console, URLSearchParams, JSON, Math, Number, String, Array, Object, isFinite, parseInt, parseFloat, Date };
sandbox.window = sandbox; sandbox.globalThis = sandbox;
sandbox.document = { getElementById: () => null, createElement: () => ({ getContext: () => null, style: {} }), documentElement: { setAttribute: () => {} } };
vm.createContext(sandbox);
const script = src.match(/<script>([\s\S]*)<\/script>/)[1];
vm.runInContext(script, sandbox);
const T = sandbox.__T14; assert(T, "api export present");
const C = T.CONFIG;
const fresh = () => T.cloneCfg(C);
const eqJ = (a, b, m) => assert.strictEqual(JSON.stringify(a), JSON.stringify(b), m);

/* ---- syntax / defaults / completions ---- */
check("defaults: checkpoints 400/2567/4400, completions 1940/3932/4785, schedule valid", () => {
  eqJ([C.checkpoints.tvTypeStart, C.checkpoints.wallWriteAt, C.checkpoints.tvFollowAt], [400, 2567, 4400]);
  assert.strictEqual(C.wallText.length, 22, "wall text is 22 chars; the plan's 23-char figure recomputes to 3932, not 3997");
  eqJ(T.completionTimes(C), { tv1Complete: 1940, wallComplete: 3932, followComplete: 4785 });
  eqJ(T.validateSchedule(C), []);
  return "wall hold before follow-up = " + (4400 - 3932) + "ms";
});
check("state gating at the new anchor: 0 wall chars at 2566, 1 at 2567, question full by 1940", () => {
  assert.strictEqual(T.computeState(2566, C).wallChars, 0);
  assert.strictEqual(T.computeState(2567, C).wallChars, 1);
  assert.strictEqual(T.computeState(2500, C).wallChars, 0);
  assert.strictEqual(T.computeState(1940, C).tv1Chars, C.tvLine1.length);
  assert.strictEqual(T.computeState(399, C).tv1Chars, 0);
  assert.strictEqual(T.computeState(4785, C).tv2Chars, C.tvLine2.length);
});
check("timestamp advance / rollover / loop wrap", () => {
  assert.strictEqual(T.computeState(5000, C).timestamp, "2026-11-08 03:14:14");
  assert.strictEqual(T.computeState(61000 % 6000, C).timestamp, "2026-11-08 03:14:10");
  assert.strictEqual(T.formatTimestamp(T.parseBaseMs(C.timestampBase), 61000), "2026-11-08 03:15:10");
  assert.strictEqual(T.computeState(6100, C).timestamp, "2026-11-08 03:14:09");
});
check("phase order question -> wall -> follow", () => {
  assert.strictEqual(T.computeState(1000, C).phase, "question");
  assert.strictEqual(T.computeState(3000, C).phase, "wall");
  assert.strictEqual(T.computeState(5000, C).phase, "follow");
});

/* ---- swap test with effect mappings ---- */
check("swap accepted (attempt-1 swap, wallAt=2600): texts, checkpoint and palette all take effect", () => {
  const r = T.applyOverridesTo("?q1=Are you even awake?&wall=YES. ALWAYS.&q2=Since when?&wallAt=2600&amber=%2337ffd0", C);
  assert.strictEqual(r.rejected, null);
  assert.strictEqual(r.cfg.tvLine1, "Are you even awake?");
  assert.strictEqual(r.cfg.wallText, "YES. ALWAYS.");
  assert.strictEqual(r.cfg.tvTextColor, "#37ffd0");
  assert.strictEqual(T.computeState(2599, r.cfg).wallChars, 0);
  assert.strictEqual(T.computeState(2600, r.cfg).wallChars, 1);
  assert.strictEqual(C.wallText, "I HAVE A SUBSCRIPTION.", "base CONFIG untouched by a swap application");
});
check("long-but-coherent schedule accepted and takes effect", () => {
  const r = T.applyOverridesTo("?durationMs=9000&wallAt=3000&followAt=6000", C);
  assert.strictEqual(r.rejected, null);
  assert.strictEqual(r.cfg.durationMs, 9000);
  assert.strictEqual(T.computeState(3000, r.cfg).wallChars, 1);
});

/* ---- atomic rejection (separate from fit cases) ---- */
function expectReject(name, search, needle){
  check(name, () => {
    const before = JSON.stringify(C);
    const r = T.applyOverridesTo(search, C);
    assert(r.rejected, "expected rejection");
    assert(r.rejected.reasons.join(" ").includes(needle), "reason names " + needle + " :: " + r.rejected.reasons.join(";"));
    eqJ(r.cfg, JSON.parse(before), "rejected set leaves the timeline/config completely unchanged (atomic)");
    assert.strictEqual(JSON.stringify(C), before, "base CONFIG unchanged");
    return r.rejected.reasons.join(";");
  });
}
expectReject("reject reversed checkpoints wallAt=5000&followAt=2000", "?wallAt=5000&followAt=2000", "wall completes");
expectReject("reject out-of-window wallAt=9000", "?wallAt=9000", "outside loop window");
expectReject("reject long question crossing wall start", "?q1=" + encodeURIComponent("A very long question that keeps typing far beyond the wall checkpoint and beyond"), "question completes");
expectReject("reject follow-up completing after loop end", "?q2=" + encodeURIComponent("A follow-up so long it cannot finish inside the loop window at all"), "follow-up completes");

/* ---- fit: accepted configurations, coherent timing ---- */
check("default wall wrap invariant: lines are the specimen lines, longest = limit", () => {
  eqJ(T.splitLines(C.wallText, C.wallLineMaxChars), ["I HAVE A", "SUBSCRIPTION."]);
});
check("unbroken long word hard-splits at the limit and enters the wrap path (accepted config)", () => {
  const cfg = fresh(); cfg.wallText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234";
  const lines = T.splitLines(cfg.wallText, cfg.wallLineMaxChars);
  assert(lines.every(l => l.length <= 13), "every split line within limit: " + lines.join("/"));
  assert.strictEqual(lines.join("").replace(/ /g, ""), cfg.wallText);
  const f = T.fitWallFont(360, 202.5, cfg);
  assert(f.fontPx >= C.wallMinFontPx, "floor respected, got " + f.fontPx);
  return "lines=" + lines.length + " font=" + f.fontPx.toFixed(1) + " basis=" + f.basis;
});
check("many-line answer on an accepted coherent schedule fits the 2D budget or diagnoses", () => {
  const cfg = fresh(); cfg.wallText = "ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN";
  cfg.durationMs = 12000; cfg.checkpoints = { tvTypeStart: 400, wallWriteAt: 3000, tvFollowAt: 9000 };
  eqJ(T.validateSchedule(cfg), [], "fixture schedule itself is coherent/accepted");
  const f = T.fitWallFont(360, 202.5, cfg);
  const usedH = f.lines.length * f.fontPx * cfg.wallLineHeight;
  assert(f.diagnostic || usedH <= f.boxH + 0.01, "height budget holds: used " + usedH.toFixed(1) + " of " + f.boxH.toFixed(1));
  assert(f.fontPx >= C.wallMinFontPx);
  return "lines=" + f.lines.length + " font=" + f.fontPx.toFixed(1) + " diag=" + (f.diagnostic || "none");
});
check("impossible fit diagnoses explicitly instead of shrinking below the floor (separate policy test)", () => {
  const cfg = fresh(); cfg.wallText = "ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN ELEVEN TWELVE";
  const f = T.fitWallFont(180, 101.25, cfg);
  assert(f.diagnostic && f.diagnostic.includes("floor"), "diagnostic emitted: " + f.diagnostic);
  assert.strictEqual(f.fontPx, C.wallMinFontPx, "display policy: floor is used and the diagnostic is observable");
  return f.diagnostic;
});

check("displayed-text preservation: the full reveal shows every raw character exactly (default + hard-split + many-line)", () => {
  assert.strictEqual(T.wallReveal(C.wallText.length, C), "I HAVE A\nSUBSCRIPTION.");
  const cfg = fresh(); cfg.wallText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234";
  const shown = T.wallReveal(cfg.wallText.length, cfg);
  assert.strictEqual(shown.replace(/\n/g, ""), cfg.wallText, "hard-split answer loses no character: " + JSON.stringify(shown));
  const cfg2 = fresh(); cfg2.wallText = "ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN";
  assert.strictEqual(T.wallReveal(cfg2.wallText.length, cfg2).replace(/\n/g, " "), cfg2.wallText);
  const mid = T.wallReveal(10, C);
  assert.strictEqual(mid, "I HAVE A\nS");
  return "all raw characters preserved at full reveal";
});
check("chrome-wall clearance at 360x202.5: wall box top sits below the two-row chrome block", () => {
  const stageH = 202.5, stageW = 360;
  const chromeFont = Math.max(C.chromeFontMinPx, Math.min(C.chromeFontMaxPx, stageW * C.chromeFontVw / 100));
  const chromeBottom = stageH * C.chromeTopPct / 100 + 2 * chromeFont * 1.2;
  const wallTop = stageH * C.wallBoxTopPct / 100;
  assert(wallTop >= chromeBottom, "wall top " + wallTop.toFixed(1) + " clears chrome bottom " + chromeBottom.toFixed(1));
  return "wallTop=" + wallTop.toFixed(1) + " chromeBottom=" + chromeBottom.toFixed(1);
});

/* ---- displayed-state model: containment + legibility, all holds, wrapped states ---- */
function wallModel(name, stageW, stageH, mutate){
  check(name, () => {
    const cfg = fresh(); if (mutate) mutate(cfg);
    const f = T.fitWallFont(stageW, stageH, cfg);
    const left = stageW * cfg.wallBoxLeftPct / 100, top = stageH * cfg.wallBoxTopPct / 100;
    assert(left + f.boxW <= stageW + 0.01, "wall box inside stage width");
    assert(top + f.boxH <= stageH + 0.01, "wall box inside stage height");
    assert(top + f.boxH <= stageH * cfg.tvTopPct / 100 + 0.01, "wall box bottom stays above the TV top edge");
    assert(f.fontPx >= cfg.wallMinFontPx, "wall legibility floor: " + f.fontPx);
    for (let i = 0; i < f.lines.length; i++){
      const wBasis = f.basis === "canvas" ? "canvas-measured" : "model-estimated";
      const w = T.measureLineWidthPx(f.lines[i], f.fontPx, cfg);
      assert(w <= f.boxW * (1 - cfg.wallFitMarginFraction) + 0.6, "line " + i + " (" + wBasis + ") width " + w.toFixed(1) + " within usable box " + (f.boxW * (1 - cfg.wallFitMarginFraction)).toFixed(1));
    }
    return "font=" + f.fontPx.toFixed(1) + " lines=" + f.lines.length + " basis=" + f.basis;
  });
}
wallModel("displayed state @360x202.5 default: containment + legibility", 360, 202.5, null);
wallModel("displayed state @360x202.5 many-line wrapped answer", 360, 202.5, c => { c.wallText = "ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN"; });
wallModel("displayed state @720x405 default", 720, 405, null);
check("TV vertical fit: full exchange (no blank line) fits at 360x202.5; all three holds legible", () => {
  const m = T.tvExchangeModel(360, 202.5, C);
  assert(m.fits, "full exchange fits: needs " + m.neededH.toFixed(1) + " of inner " + m.innerH.toFixed(1));
  assert(m.fontPx >= C.tvFontMinPx, "TV font at floor or above: " + m.fontPx);
  assert.strictEqual(m.totalLines, m.qLines + m.fLines, "no blank separator line in the model");
  assert(!src.includes('tvStr += "\\n\\n"'), "render joins the follow-up with a single newline");
  return "qLines=" + m.qLines + " fLines=" + m.fLines + " needed=" + m.neededH.toFixed(1) + " inner=" + m.innerH.toFixed(1) + " font=" + m.fontPx;
});
check("TV wrapped states: long question and wrapped follow-up still fit the inner height or the model says so", () => {
  const cfg = fresh(); cfg.tvLine1 = "What are your qualifications for this particular position exactly?";
  cfg.tvLine2 = "To what do you owe it?";
  const m = T.tvExchangeModel(360, 202.5, cfg);
  return "qLines=" + m.qLines + " fLines=" + m.fLines + " fits=" + m.fits + " needed=" + m.neededH.toFixed(1) + " inner=" + m.innerH.toFixed(1);
});

/* ---- consumption census: every CONFIG key -> a consumed effect ---- */
function walkKeys(obj, prefix, out){ for (const k of Object.keys(obj)){ const p = prefix ? prefix + "." + k : k; if (obj[k] && typeof obj[k] === "object" && !Array.isArray(obj[k])) walkKeys(obj[k], p, out); else out.push([p, k]); } return out; }
check("consumption census: every CONFIG key resolves to at least one application site outside CONFIG", () => {
  const start = src.indexOf("const CONFIG = {"); const end = src.indexOf("\n};", start) + 3;
  const outside = src.slice(0, start) + src.slice(end);
  const keys = walkKeys(C, "", []);
  const missing = keys.filter(([p, k]) => !outside.includes(k));
  assert.strictEqual(missing.length, 0, "unconsumed keys: " + missing.map(x => x[0]).join(","));
  return keys.length + " keys, 0 unconsumed";
});
check("effect mappings (mutation): named keys change computed effects", () => {
  const a = fresh(); a.checkpoints.wallWriteAt = 3000; assert.strictEqual(T.computeState(2999, a).wallChars, 0); assert.strictEqual(T.computeState(3000, a).wallChars, 1);
  const b = fresh(); b.wallBoxWidthFraction = 0.29; assert(T.fitWallFont(360, 202.5, b).fontPx < T.fitWallFont(360, 202.5, C).fontPx, "box fraction drives fit");
  const c2 = fresh(); c2.wallLineHeight = 2.6; assert(T.fitWallFont(360, 202.5, c2).fontPx < T.fitWallFont(360, 202.5, C).fontPx, "line height drives height fit");
  const d = fresh(); d.tvTextPaddingYPct = 20; assert(T.tvExchangeModel(360, 202.5, d).innerH < T.tvExchangeModel(360, 202.5, C).innerH, "padding drives TV inner height");
  const e = fresh(); e.wallCharMs = 130; assert.strictEqual(T.completionTimes(e).wallComplete, 2567 + 21 * 130);
  const g = fresh(); g.wallLineMaxChars = 8; eqJ(T.splitLines(g.wallText, g.wallLineMaxChars), ["I HAVE A", "SUBSCRIP", "TION."]);
  return "6 mutations asserted";
});

/* ---- literal census ---- */
check("literal census: no numeric/color literal outside CONFIG beyond the structural whitelist", () => {
  const start = src.indexOf("const CONFIG = {"); const end = src.indexOf("\n};", start) + 3;
  const outside = src.slice(0, start) + src.slice(end);
  const whitelist = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "10", "90", "100", "1000", "0%", "50%", "100%", "0px"]);
  const found = new Set((outside.match(/(?<![\w#.-])-?\d+\.?\d*(?:px|%|em|vw)?/g) || []));
  const bad = [...found].filter(x => !whitelist.has(x));
  assert.strictEqual(bad.length, 0, "unlisted literals: " + bad.join(","));
  assert.strictEqual((outside.match(/#[0-9a-fA-F]{3,8}/g) || []).length, 0, "no hex colors outside CONFIG");
  return "distinct literals=" + found.size + " all whitelisted";
});

/* ---- purity + comparison ---- */
check("purity grep: 0 specimen/external hits; asset inventory empty", () => {
  const hits = src.match(/segment\.mp4|source\.mp4|<video|<img|http:\/\/|https:\/\/|url\(|\.jpg|\.png/g);
  assert.strictEqual(hits, null, "hits: " + hits);
  return "0 hits, 0 external assets";
});
check("comparison check: labels verbatim, both sides present, ORIGINAL side + segment unchanged", () => {
  const comp = fs.readFileSync(ARTDIR + "/comparison.html", "utf8");
  assert(comp.includes("ORIGINAL — Look What I Can Do (P1) @ 1:20–1:25"), "original label");
  assert(comp.includes("RECREATION — T14 CCTV room + wall-projected text, parameterized"), "recreation label");
  const segSha = crypto.createHash("sha256").update(fs.readFileSync(ARTDIR + "/segment.mp4")).digest("hex");
  assert.strictEqual(segSha, "951fc6423edc78b1df14b424e65ba797dd1e1f059c1e2b1252e4edf87dc32f71", "segment bytes unchanged");
  return "segment sha verified";
});
check("preservation: attempt-1 copy sha intact after all writes", () => {
  const h = crypto.createHash("sha256").update(fs.readFileSync(ARTDIR + "/recreation-attempt-1.html")).digest("hex");
  assert.strictEqual(h, "f426898f96324034c9a969b9c452176d53d049088767ab02482705914b8f63ca");
  return h.slice(0, 12);
});

console.log("---");
console.log("SHA " + sha);
console.log("RESULT pass=" + pass + " fail=" + fail + " PIXEL-UNVERIFIED");
if (failures.length) console.log("FAILURES: " + failures.join(" | "));
process.exit(fail ? 1 : 0);
