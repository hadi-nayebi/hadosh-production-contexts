#!/usr/bin/env node
/* own-checks-T23.js — practice Cycle 009 Wave 8, T23 attempt 5.
   Per-cure EFFECT assertions, semantic-fidelity assertions stated as
   the plan states the surface, CONFIG consumption census, literal
   census, wrapped-state enumeration, swap test, purity.
   Run: node own-checks-T23.js */
"use strict";
const fs = require("fs");
const path = require("path");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map");
const html = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];
fs.writeFileSync("/tmp/t23-a5-script.js", script);
const M = require("/tmp/t23-a5-script.js");

let pass = 0, fail = 0; const failures = [];
function ok(cond, block, name) {
  if (cond) { pass++; } else { fail++; failures.push(block + " :: " + name); }
  return cond;
}
function blockSummary(block, before) {
  console.log(block + ": " + (pass - before[0]) + " pass, " + (fail - before[1]) + " fail");
  return [pass, fail];
}
let snap = [0, 0];
const R = (s) => M.resolveConfig(s || "");
const warnHas = (cfg, sub) => cfg._warnings.some((w) => w.indexOf(sub) !== -1);
const approx = (a, b, tol) => Math.abs(a - b) <= tol;

/* ============ REG — regression subset ============ */
{
  const c = R("");
  ok(c._warnings.length === 0, "REG", "default config zero warnings");
  const tl = M.buildTimeline(c);
  ok(tl.totalMs === 5850, "REG", "cycle total 5850ms");
  ok(M.phaseAt(c, 0).step.phase === "dwell" && M.phaseAt(c, 900).step.phase === "dive" &&
     M.phaseAt(c, 1550).step.phase === "hold" && M.phaseAt(c, 1700).step.phase === "pause" &&
     M.phaseAt(c, 1950).step.appearance === 1, "REG", "phase boundaries 900/1550/1700/1950 exact");
  const badBez = R("?cfg:layout.diveEasing=cubic-bezier(1.5,0,0.5,1)");
  ok(badBez.layout.diveEasing === M.CONFIG.layout.diveEasing && warnHas(badBez, "diveEasing"), "REG", "bezier x out of [0,1] resets with warning");
  const hostile = R("?colsNarrow=6&gapPx=40&borderPx=12");
  const layH = M.computeLayout(hostile, 360);
  const innerW = layH.panelW - hostile.borderPx * 2, innerH = layH.panelH - hostile.borderPx * 2;
  ok(innerW > 0 && innerH > 0 && warnHas(hostile, "geometry:"), "REG", "hostile combo clamped to positive inner dims at 360");
  let cov = true;
  [360, 960].forEach((w) => { const l = M.computeLayout(c, w); for (let i = 0; i < 12; i++) { const tr = M.diveTransform(c, l, M.panelRect(c, l, i)); if (!M.coversViewport(tr.bounds, l)) cov = false; } });
  ok(cov, "REG", "dive coverage holds all panels at 360/960");
  const fb = M.panelArtSVG({ art: "nope" }, c.palette, true, c.artRegistry, c.artViewBox, "swarm", null);
  ok(fb.indexOf("<svg") === 0 && fb.length > 50, "REG", "fallback kind renders art");
  const sep = R("?cfg:labels.separator=" + encodeURIComponent(" | "));
  ok(M.splitTwoLines(sep, "01 | THE STANDUP").length === 2, "REG", "configured separator drives the two-line split");
}
snap = blockSummary("REG", snap);

/* ============ SEM — target miniature semantics, as the plan states them ============ */
{
  const c = R("");
  // The displayed surface: for every appearance, the dive target's art
  // is present (non-empty primitive markup) while completed counts
  // stay at the configured values.
  const expected = [[4, 4], [8, 8], [12, 11]];
  let allArt = true, countsOk = true, illustratedOk = true;
  expected.forEach(function (pair, ai) {
    const filled = pair[0], dive = pair[1];
    let completed = 0, illustrated = 0;
    for (let i = 0; i < 12; i++) {
      const st = M.panelState(c, ai, i, dive);
      if (st.completed) completed++;
      const art = M.panelArtSVG(c.panels[i], c.palette, st.filled, c.artRegistry, c.artViewBox, c.fallbackArtKind, null);
      if (st.filled && art.indexOf("<svg") === 0 && art.length > 50) illustrated++;
      if (i === dive && !(art.indexOf("<svg") === 0 && art.length > 50)) allArt = false;
    }
    if (completed !== filled) countsOk = false;
    const wantIllustrated = filled + (dive >= filled ? 1 : 0);
    if (illustrated !== wantIllustrated) illustratedOk = false;
  });
  ok(allArt, "SEM", "target miniature renders in every appearance under the default policy");
  ok(countsOk, "SEM", "completed counts stay 4/8/12 (target never counted completed)");
  ok(illustratedOk, "SEM", "illustrated totals are 5/9/12 under mark (completed + marked target)");
  const t0 = M.panelState(c, 0, 4, 4);
  ok(t0.isTarget === true && t0.completed === false && t0.filled === true && t0.rendered === true && t0.forceFilled === false,
     "SEM", "upcoming target: rendered + target, not completed, not force-filled");
  const ov = M.panelState(c, 2, 11, 11);
  ok(ov.completed === true && ov.isTarget === true && ov.overlap === true && ov.filled === true,
     "SEM", "overlap target: completed + target + rendered");
  const plain = M.panelState(c, 0, 7, 4);
  ok(plain.filled === false && plain.isTarget === false &&
     M.panelArtSVG(c.panels[7], c.palette, plain.filled, c.artRegistry, c.artViewBox, c.fallbackArtKind, null) === "",
     "SEM", "non-target upcoming panel still shows no miniature (ghost state preserved)");
  // Through dive and hold: at dive progress 0 / 0.5 / 1 and in the hold
  // phase, the target's art is the surface the camera carries.
  const lay = M.computeLayout(c, 360);
  const ep = M.diveTransform(c, lay, M.panelRect(c, lay, 4));
  let throughOk = true;
  [0, 0.5, 1].forEach(function (p) {
    const tr = M.transformAt(c, ep, p);
    const st = M.panelState(c, 0, 4, 4);
    const art = M.panelArtSVG(c.panels[4], c.palette, st.filled, c.artRegistry, c.artViewBox, c.fallbackArtKind, null);
    if (!(tr.scale >= 1 && art.length > 50)) throughOk = false;
  });
  const holdPhase = M.phaseAt(c, 1600);
  ok(holdPhase.step.phase === "hold" && throughOk, "SEM", "target art present through dive progress 0/0.5/1 and into hold");
  const cf = R("?cfg:progress.forceFillTarget=fill");
  const tf = M.panelState(cf, 0, 4, 4);
  ok(tf.forceFilled === true && tf.filled === true && tf.completed === false, "SEM", "fill policy: target renders in completed style, completed stays false");
  ok(/dataset\.completed/.test(script) && /dataset\.target/.test(script) && /target-upcoming/.test(script) &&
     script.indexOf('forceFillTarget === "mark"') !== -1, "SEM", "DOM: distinct mark applied only under the mark policy");
}
snap = blockSummary("SEM", snap);

/* ============ CAM — zero-dive hold, shared easing parse, frozen elapsed ============ */
{
  const c = R("");
  ok(M.diveProgress(0, 0) === 1 && M.diveProgress(500, 0) === 1, "CAM", "zero-duration dive progress is 1 at phase start and later");
  const c0 = R("?diveMs=0");
  const lay = M.computeLayout(c0, 360);
  const ep = M.diveTransform(c0, lay, M.panelRect(c0, lay, 4));
  const holdTr = M.transformAt(c0, ep, M.diveProgress(0, c0.diveMs));
  ok(approx(holdTr.scale, ep.scale, 1e-4) && approx(holdTr.tx, ep.tx, 1e-3) && approx(holdTr.ty, ep.ty, 1e-3),
     "CAM", "DISPLAYED hold transform with diveMs=0 equals the endpoint within bezier-solver precision (not identity)");
  const pe = M.parseEasing("ease-in");
  ok(pe && pe.type === "bezier" && pe.x1 === 0.42 && pe.y1 === 0 && pe.x2 === 1 && pe.y2 === 1, "CAM", "ease-in parses to its true CSS coordinates");
  ok(approx(M.easingFraction("ease-in", 0.5), 0.3153, 0.01), "CAM", "ease-in fraction at 0.5 matches the CSS curve (~0.3153)");
  ok(approx(M.easingFraction("ease-out", 0.5), 0.6847, 0.01), "CAM", "ease-out fraction at 0.5 matches the CSS curve (~0.6847)");
  ok(approx(M.easingFraction("ease-in-out", 0.5), 0.5, 0.001), "CAM", "ease-in-out fraction at 0.5 is 0.5");
  ok(approx(M.easingFraction("linear", 0.37), 0.37, 1e-6), "CAM", "linear fraction is identity");
  const ws = R("?cfg:layout.diveEasing=" + encodeURIComponent("cubic-bezier(0.25, 0.1, 0.25, 1 )"));
  ok(!warnHas(ws, "diveEasing") && approx(M.easingFraction(ws.layout.diveEasing, 0.5), M.easingFraction("ease", 0.5), 1e-9),
     "CAM", "whitespace-padded bezier validates AND evaluates as itself (single shared parse)");
  ok(/function currentElapsed\(\)/.test(script), "CAM", "single shared elapsed accessor exists");
  const resizeBlock = script.slice(script.indexOf('addEventListener("resize"'), script.indexOf('addEventListener("message"'));
  ok(resizeBlock.indexOf("currentElapsed()") !== -1 && resizeBlock.indexOf("performance.now()") === -1,
     "CAM", "resize evaluates the camera through the shared (freezable) elapsed, never wall-clock");
  const camBlock = script.slice(script.indexOf("function camTick"), script.indexOf("let activeStep"));
  ok(camBlock.indexOf("currentElapsed()") !== -1, "CAM", "camera tick/start share the same elapsed accessor");
}
snap = blockSummary("CAM", snap);

/* ============ ATTR — attribute safety + consistent optional rendering ============ */
{
  const reg = (kind, prims) => "?registry=" + encodeURIComponent(kind + ":" + JSON.stringify(prims));
  const hostile = R(reg("evil", [{ t: "path", d: 'M0 0" onload="alert(1)', fill: "#ffffff" }]));
  const evilArt = M.panelArtSVG({ art: "evil" }, hostile.palette, true, hostile.artRegistry, hostile.artViewBox, hostile.fallbackArtKind, null);
  ok(evilArt.indexOf("&quot;") !== -1 && evilArt.indexOf('" onload="') === -1, "ATTR", "quote-bearing path data is attribute-escaped on render");
  const miss = R(reg("miss", [{ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "$missing" }]));
  ok(warnHas(miss, "artRegistry.miss") && !Object.prototype.hasOwnProperty.call(miss.artRegistry, "miss"),
     "ATTR", "unresolved palette token fails validation (kind dropped with warning, never reaches SVG)");
  const badFields = R(reg("badf", [
    { t: "text", x: 1, y: 2, size: 10, fill: "#ffffff", anchor: "sideways", content: "X" },
    { t: "rect", x: 0, y: 0, w: 5, h: 5, rx: -2, fill: "#ffffff" },
    { t: "polygon", points: "a,b c,d", fill: "#ffffff" }]));
  ok(!Object.prototype.hasOwnProperty.call(badFields.artRegistry, "badf"), "ATTR", "invalid anchor / rx / points primitives are dropped at validation");
  const opt = R(reg("opttest", [
    { t: "circle", cx: 20, cy: 20, r: 6, fill: "#ffffff", opacity: 0.5, transform: "rotate(10 20 20)" },
    { t: "polygon", points: "10,10 30,10 20,30", fill: "#eeeeee", stroke: "#111111", strokeWidth: 2, opacity: 0.7 },
    { t: "path", d: "M5 5 L20 20", fill: "none", stroke: "#222222", opacity: 0.4, transform: "translate(2 3)" },
    { t: "text", x: 10, y: 40, size: 10, fill: "#ffffff", content: "HI", opacity: 0.6, transform: "rotate(-5 10 40)" },
    { t: "grid", x: 0, y: 50, cols: 2, rows: 1, cellW: 8, cellH: 8, gapX: 2, gapY: 2, fills: ["#ffffff"], opacity: 0.3 }]));
  const optArt = M.panelArtSVG({ art: "opttest" }, opt.palette, true, opt.artRegistry, opt.artViewBox, opt.fallbackArtKind, null);
  ok(optArt.indexOf('opacity="0.5"') !== -1 && optArt.indexOf("rotate(10 20 20)") !== -1, "ATTR", "circle renders its accepted opacity + transform");
  ok(optArt.indexOf('stroke="#111111"') !== -1 && optArt.indexOf('opacity="0.7"') !== -1, "ATTR", "polygon renders its accepted stroke + opacity");
  ok(optArt.indexOf('opacity="0.4"') !== -1 && optArt.indexOf("translate(2 3)") !== -1, "ATTR", "path renders its accepted opacity + transform");
  ok(optArt.indexOf('opacity="0.6"') !== -1 && optArt.indexOf("rotate(-5 10 40)") !== -1, "ATTR", "text renders its accepted opacity + transform");
  ok(optArt.indexOf('<g opacity="0.3"') !== -1, "ATTR", "grouped primitive renders accepted opacity via its group wrapper");
  ok(M.escAttr('a"b&c') === "a&quot;b&amp;c", "ATTR", "attribute escaper neutralizes quote and ampersand");
}
snap = blockSummary("ATTR", snap);

/* ============ CFG — duplicates, normalization, JSON transport, limits ============ */
{
  const dup = R("?cfg:labels.minPx=12&cfg:labels.minPx=14");
  ok(dup.labels.minPx === 12 && warnHas(dup, "cfg:labels.minPx: duplicate"), "CFG", "duplicate nested key warns, first value wins");
  const pad = R("?cfg:progress.forceFillTarget=" + encodeURIComponent(" fill "));
  ok(pad.progress.forceFillTarget === "fill" && !warnHas(pad, "progress.forceFillTarget"), "CFG", "padded enum value normalizes and lands (no reset)");
  const semi = R("?registry=" + encodeURIComponent('semikind:[{"t":"text","x":10,"y":20,"size":12,"fill":"#ffffff","content":"A;B"}]'));
  const semiArt = M.panelArtSVG({ art: "semikind" }, semi.palette, true, semi.artRegistry, semi.artViewBox, semi.fallbackArtKind, null);
  ok(Object.prototype.hasOwnProperty.call(semi.artRegistry, "semikind") && semiArt.indexOf("A;B") !== -1,
     "CFG", "registry transports as ONE JSON structure (semicolon inside a string is data)");
  const badJson = R("?registry=" + encodeURIComponent("badkind:[{not json]"));
  ok(warnHas(badJson, "registry: malformed") && !Object.prototype.hasOwnProperty.call(badJson.artRegistry, "badkind"),
     "CFG", "malformed registry JSON warns and is ignored");
  const limT = R("?cfg:limits.titleMaxChars=5");
  ok(limT.panels[0].title.length <= 5, "CFG", "limits.titleMaxChars is consumed by panel validation (effect, not binding)");
  const limP = R("?panelCount=30");
  ok(limP.panels.length === 12 && warnHas(limP, "panelCount"), "CFG", "limits.maxPanels bounds the panelCount override route");
  const limC = R("?cfg:limits.maxCols=2&colsWide=5");
  ok(limC.colsWide === 2, "CFG", "limits.maxCols bounds the column clamp");
}
snap = blockSummary("CFG", snap);

/* ============ CLAMP — final feasibility rejection ============ */
{
  const inf = R("?cfg:layout.minStagePx=120&cfg:layout.minInnerWPx=200&cfg:layout.minInnerHPx=200");
  ok(warnHas(inf, "infeasible"), "CLAMP", "jointly infeasible combination is rejected with a named warning");
  ok(inf.colsNarrow === M.CONFIG.colsNarrow && inf.colsWide === M.CONFIG.colsWide &&
     inf.gapPx === M.CONFIG.gapPx && inf.borderPx === M.CONFIG.borderPx &&
     inf.layout.minInnerWPx === M.CONFIG.layout.minInnerWPx && inf.layout.minStagePx === M.CONFIG.layout.minStagePx,
     "CLAMP", "rejection restores the geometry defaults as one coherent configuration");
  const lay = M.computeLayout(inf, inf.layout.minStagePx);
  ok(lay.panelW - inf.borderPx * 2 >= inf.layout.minInnerWPx && lay.panelH - inf.borderPx * 2 >= inf.layout.minInnerHPx,
     "CLAMP", "restored configuration satisfies its own inner-dimension contract at its minimum width");
  const feas = R("?colsNarrow=6&gapPx=40&borderPx=12");
  ok(!warnHas(feas, "infeasible"), "CLAMP", "feasible-after-clamp combinations are NOT rejected (no false positive)");
}
snap = blockSummary("CLAMP", snap);

/* ============ OCC — tab-vs-miniature occlusion budget, wrapped states ============ */
{
  const c = R("");
  let budgetOk = true, floorOk = true; const rows = [];
  [240, 360, 520, 960].forEach(function (w) {
    const lay = M.computeLayout(c, w);
    const innerW = lay.panelW - c.borderPx * 2, innerH = lay.panelH - c.borderPx * 2;
    const base = M.labelBasePx(c, innerW);
    c.panels.forEach(function (p, i) {
      const pol = M.labelPolicy(c, p.n + c.labels.separator + p.title, innerW, base, innerH);
      const lines = pol.mode === "two-line" ? 2 : 1;
      const tabH = lines * pol.px * c.typography.tabLineHeight + c.layout.tabPaddingYPx * 2 + c.layout.tabBorderPx;
      const frac = tabH / innerH;
      if (frac > c.labels.maxTabHeightFraction + 1e-9) budgetOk = false;
      if (pol.px < c.labels.minPx) floorOk = false;
      if (w === 360 && i === 6) rows.push("panel07@360 mode=" + pol.mode + " px=" + pol.px.toFixed(2) + " tabH=" + tabH.toFixed(1) + " innerH=" + innerH.toFixed(1) + " fraction=" + frac.toFixed(3));
    });
  });
  ok(budgetOk, "OCC", "every panel x {240,360,520,960}: tab height within the configured fraction of panel inner height");
  ok(floorOk, "OCC", "no policy result below the readable floor in any wrapped state");
  console.log("  " + rows.join(""));
  const lay360 = M.computeLayout(c, 360);
  const pol07 = M.labelPolicy(c, "07" + c.labels.separator + "THE DAILY STANDUP", lay360.panelW - c.borderPx * 2,
    M.labelBasePx(c, lay360.panelW - c.borderPx * 2), lay360.panelH - c.borderPx * 2);
  ok(pol07.mode === "two-line", "OCC", "longest title keeps its title at 360px (two-line within budget, not number-only)");
  ok(script.indexOf("maxTabHeightFraction") !== -1 && (script.match(/maxTabHeightFraction/g) || []).length >= 3,
     "OCC", "budget key consumed by model policy AND DOM refinement (sites >= 3 incl. definition)");
}
snap = blockSummary("OCC", snap);

/* ============ CENSUS — CONFIG consumption (every key -> a consumed effect) ============ */
{
  const after = script.slice(script.indexOf("/* ================= validation"));
  const leaves = [];
  (function walk(obj, prefix) {
    Object.keys(obj).forEach(function (k) {
      const v = obj[k], p = prefix ? prefix + "." + k : k;
      if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p);
      else if (!Array.isArray(v)) leaves.push({ path: p, field: k });
    });
  })(M.CONFIG, "");
  const unconsumed = leaves.filter(function (l) {
    const re = new RegExp("\\b" + l.field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "g");
    return (after.match(re) || []).length < 1;
  });
  console.log("  census leaves: " + leaves.length + ", unconsumed: " + unconsumed.length +
    (unconsumed.length ? " -> " + unconsumed.map((l) => l.path).join(", ") : ""));
  ok(unconsumed.length === 0, "CENSUS", "every scalar CONFIG leaf has a consumption site beyond its definition");
  // mutation probes: changing the key changes a rendered/computed effect
  const base = R("");
  const mut = (q, fn) => fn(R(q)) !== fn(base);
  ok(mut("?dwellMs=100", (x) => M.buildTimeline(x).totalMs), "CENSUS", "mutation: dwellMs moves the cycle total");
  ok(mut("?cfg:progress.forceFillTarget=fill", (x) => M.panelState(x, 0, 4, 4).forceFilled), "CENSUS", "mutation: forceFillTarget flips the target state");
  ok(mut("?cfg:layout.diveEasing=linear", (x) => { const l = M.computeLayout(x, 360); return M.transformAt(x, M.diveTransform(x, l, M.panelRect(x, l, 4)), 0.5).fraction; }),
     "CENSUS", "mutation: diveEasing moves the mid-dive fraction");
  ok(mut("?cfg:labels.maxTabHeightFraction=0.3", (x) => { const l = M.computeLayout(x, 360); return M.labelPolicy(x, "07 · THE DAILY STANDUP", l.panelW - x.borderPx * 2, M.labelBasePx(x, l.panelW - x.borderPx * 2), l.panelH - x.borderPx * 2).mode; }),
     "CENSUS", "mutation: maxTabHeightFraction moves the 360px label mode");
  ok(mut("?cfg:ceilings.maxGridCells=4", (x) => x.artRegistry.tiles.primitives.length), "CENSUS", "mutation: a grid ceiling drops the over-ceiling grid primitive from a default kind");
  ok(mut("?cfg:limits.titleMaxChars=5", (x) => x.panels[0].title), "CENSUS", "mutation: titleMaxChars moves a rendered title");
  // literal census: colors and media references outside CONFIG
  const hexOutside = (after.match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g) || []);
  ok(hexOutside.length === 0, "CENSUS", "literal census: zero hex colors outside CONFIG (found " + hexOutside.length + ")");
}
snap = blockSummary("CENSUS", snap);

/* ============ SWAP + PURITY ============ */
{
  const swap = R("?panels=" + encodeURIComponent("OPENING DAY|FIRST SALE|THE INBOX|RIVALS|THE PIVOT|NIGHT SHIFT|THE DEMO|FEEDBACK|THE LEAK|VERDICT|INTERMISSION|FINALE") + "&filled=7&dwellMs=900&tab=%23ff9f1c");
  ok(swap.panels[0].title === "OPENING DAY" && swap.panels[11].title === "FINALE", "SWAP", "swap titles land on all 12 panels");
  let completed = 0; for (let i = 0; i < 12; i++) if (M.panelState(swap, 0, i, 7).completed) completed++;
  const tgt = M.panelState(swap, 0, 7, 7);
  ok(completed === 7 && tgt.isTarget && tgt.filled, "SWAP", "swap: exactly 7 completed, dive target (panel 8) renders its miniature");
  ok(swap.palette.tab === "#ff9f1c", "SWAP", "swap: tab color override lands");
  const p9 = R("?panelCount=9"), p16 = R("?panelCount=16");
  ok(p9.panels.length === 9 && p9.appearances.every((a) => a.dive <= 8), "SWAP", "panelCount 9 coherent (appearances re-clamped)");
  ok(p16.panels.length === 16 && p16.panels[15].title.indexOf("CHAPTER") === 0, "SWAP", "panelCount 16 generates placeholder panels");
  const purityHits = ["segment.mp4", "source.mp4", "<video", "<img", "http://", "https://", ".png", ".jpg", ".jpeg", "<caption", "subtitle"].filter((s) => html.indexOf(s) !== -1);
  ok(purityHits.length === 0, "PURITY", "no specimen media / external refs / captions (hits: " + purityHits.join(",") + ")");
  const fsCheck = (() => { try { new Function(script); return true; } catch (e) { return false; } })();
  ok(fsCheck, "PURITY", "extracted script parses (node --check equivalent)");
}
snap = blockSummary("SWAP/PURITY", snap);

console.log("\nTOTAL: " + pass + " pass / " + fail + " fail");
if (failures.length) { console.log("FAILURES:"); failures.forEach((f) => console.log("  - " + f)); }
process.exit(fail ? 1 : 0);
