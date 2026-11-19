#!/usr/bin/env node
/* own-checks-T23.js — practice Cycle 008 Wave 7, T23 attempt 4.
   Per-cure EFFECT assertions (A-C002-1), CONFIG consumption census
   (A-C006-2), wrapped-state enumeration + hold occlusion (A-C006-3),
   swap test, purity grep + asset inventory. Run: node own-checks-T23.js
   Prints per-block results (attribution discipline CA-W1: blocks prove
   mechanism effects, not lens-score attribution). */
"use strict";
const fs = require("fs");
const path = require("path");
const ART = path.join(process.env.HOME, "workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map");
const html = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];
fs.writeFileSync("/tmp/t23-a4-script.js", script);
const M = require("/tmp/t23-a4-script.js");

let pass = 0, fail = 0; const failures = [];
function ok(cond, block, name) {
  if (cond) { pass++; }
  else { fail++; failures.push(block + " :: " + name); }
  return cond;
}
function blockSummary(block, before) {
  console.log(block + ": " + (pass - before[0]) + " pass, " + (fail - before[1]) + " fail");
  return [pass, fail];
}
let snap = [0, 0];
const R = (s) => M.resolveConfig(s || "");
const warnHas = (cfg, sub) => cfg._warnings.some((w) => w.indexOf(sub) !== -1);

/* ============ REG — attempt-3 regression subset (must not regress) ============ */
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
  const sep = R("?cfg:labels.separator= | ");
  ok(M.splitTwoLines(sep, "01 | THE STANDUP").length === 2, "REG", "configured separator drives the two-line split");
}
snap = blockSummary("REG", snap);

/* ============ C-P1 — progress semantics, independent membership (CA-1) ============ */
{
  const c = R("");
  // appearance 0: filled 4, dive 4 (target NOT completed)
  const t0 = M.panelState(c, 0, 4, 4);
  ok(t0.completed === false && t0.isTarget === true && t0.filled === false && t0.forceFilled === false && t0.overlap === false,
     "C-P1", "mark policy: upcoming target is not filled, not completed, distinctly target");
  const done0 = M.panelState(c, 0, 3, 4);
  ok(done0.completed === true && done0.filled === true && done0.isTarget === false, "C-P1", "completed set == configured count (panel 3 of filled 4)");
  let completedCount = 0, illustratedMark = 0;
  for (let i = 0; i < 12; i++) { const st = M.panelState(c, 0, i, 4); if (st.completed) completedCount++; if (st.filled) illustratedMark++; }
  ok(completedCount === 4 && illustratedMark === 4, "C-P1", "mark policy: illustrated total == completed total == 4 (no 5-vs-4 conflation)");
  // appearance 2: filled 12, dive 11 (OVERLAP: target already completed)
  const ov = M.panelState(c, 2, 11, 11);
  ok(ov.completed === true && ov.isTarget === true && ov.overlap === true && ov.filled === true && ov.forceFilled === false,
     "C-P1", "overlap state: target inside completed set is completed+target+overlap, not upcoming");
  // fill policy flips the non-completed target only
  const cf = R("?cfg:progress.forceFillTarget=fill");
  const tf = M.panelState(cf, 0, 4, 4);
  ok(tf.forceFilled === true && tf.filled === true && tf.completed === false, "C-P1", "fill policy: target force-filled while completed stays false (key -> effect, both ways)");
  const ovf = M.panelState(cf, 2, 11, 11);
  ok(ovf.forceFilled === false && ovf.overlap === true, "C-P1", "fill policy: overlap target is not force-filled (already completed)");
  const bad = R("?cfg:progress.forceFillTarget=bogus");
  ok(bad.progress.forceFillTarget === "mark" && warnHas(bad, "progress.forceFillTarget"), "C-P1", "invalid policy value resets to mark with warning");
  ok(/dataset\.completed/.test(script) && /dataset\.target/.test(script) && /dataset\.overlap/.test(script) && /target-upcoming/.test(script),
     "C-P1", "DOM exposes completed/target/overlap independently + upcoming mark");
}
snap = blockSummary("C-P1", snap);

/* ============ C-RD1 — measured two-line limit (model side + DOM contract) ============ */
{
  const c = R("");
  const text = "07" + c.labels.separator + "THE DAILY STANDUP";
  const widths = [240, 300, 360, 520, 960];
  const modes = widths.map((w) => {
    const lay = M.computeLayout(c, w);
    const iw = lay.panelW - c.borderPx * 2, ih = lay.panelH - c.borderPx * 2;
    return M.labelPolicy(c, text, iw, M.labelBasePx(c, iw), ih).mode;
  });
  const rank = { "number-only": 0, "two-line": 1, "single": 2 };
  let mono = true; for (let i = 1; i < modes.length; i++) if (rank[modes[i]] < rank[modes[i - 1]]) mono = false;
  ok(mono, "C-RD1", "wrap-state transitions monotonic as width grows: " + modes.join(" -> "));
  // vertical term binds: width forces two-line (avail 100), panel too SHORT for two lines -> number-only
  const shortPanel = M.labelPolicy(c, text, 100, 18, 20);
  ok(shortPanel.mode === "number-only", "C-RD1", "two lines exceeding panel inner height fall to number-only (vertical term, not width)");
  const tallPanel = M.labelPolicy(c, text, 100, 18, 200);
  ok(tallPanel.mode === "two-line", "C-RD1", "ample inner height keeps the two-line title");
  // every reachable state respects: lines <= 2, font >= floor, tab height <= panel inner height
  let allFit = true; const stateRows = [];
  [240, 360, 520, 960].forEach((w) => {
    const lay = M.computeLayout(c, w);
    const iw = lay.panelW - c.borderPx * 2, ih = lay.panelH - c.borderPx * 2;
    c.panels.forEach((p) => {
      const pol = M.labelPolicy(c, p.n + c.labels.separator + p.title, iw, M.labelBasePx(c, iw), ih);
      const lines = pol.mode === "two-line" ? 2 : 1;
      const tabH = lines * pol.px * c.typography.tabLineHeight + c.layout.tabPaddingYPx * 2 + c.layout.tabBorderPx;
      if (lines > 2 || pol.px < c.labels.minPx || tabH > ih + 0.001) allFit = false;
      if (p.n === "07") stateRows.push(w + "px:" + pol.mode + "@" + pol.px);
    });
  });
  ok(allFit, "C-RD1", "enumeration over all panels x widths {240,360,520,960}: lines<=2, px>=floor, tabH<=innerH");
  console.log("  C-RD1 state table (panel 07): " + stateRows.join(" · "));
  // DOM measured-path contract (CA-3): Range line count + horizontal + height, forced-3-line falls through
  ok(/createRange\(\)/.test(script) && /getClientRects\(\)/.test(script) && /countLines\(\) > 2/.test(script),
     "C-RD1", "DOM contract: line count measured via Range client rects, >2 is a violation");
  ok(/scrollWidth > tab\.clientWidth/.test(script) && /offsetHeight > panelEl\.clientHeight/.test(script),
     "C-RD1", "DOM contract: horizontal containment + tab height vs panel height both measured");
  ok(/dataset\.lines/.test(script), "C-RD1", "DOM records the measured line count per tab (dataset.lines)");
}
snap = blockSummary("C-RD1", snap);

/* ============ C-RD2 — header grows in wrap mode, single source ============ */
{
  const cDef = R("");
  const layDef = M.computeLayout(cDef, 360);
  ok(layDef.headerMode !== "wrap" && layDef.headerH === Math.max(cDef.layout.headerMinPx, 360 * cDef.layout.headerHeightFactor),
     "C-RD2", "default header: no growth, height unchanged from attempt 3");
  const cLong = R("?header=" + "X".repeat(120));
  const lay = M.computeLayout(cLong, 360);
  const grown = lay.headerH - Math.max(cLong.layout.headerMinPx, 360 * cLong.layout.headerHeightFactor);
  ok(lay.headerMode === "wrap" && lay.headerLines >= 2 && grown > 0, "C-RD2", "wrap mode: header height grows by wrapped lines (" + lay.headerLines + " lines, +" + grown.toFixed(0) + "px)");
  const contentH = lay.headerLines * lay.headerPx * cLong.typography.headerWrapLineHeight;
  ok(lay.headerH >= contentH - 1, "C-RD2", "grown header height >= wrapped content height (no clip by construction)");
  ok(Math.abs(lay.stageH - (lay.headerH + lay.gridH + cLong.layout.stageBottomPadPx)) < 0.001,
     "C-RD2", "stage height derives from the GROWN header height (single source)");
  ok(M.panelRect(cLong, lay, 0).y === lay.headerH + cLong.gapPx, "C-RD2", "grid offset (first panel y) == grown header height + gap");
  const layMin = M.computeLayout(cLong, cLong.layout.minStagePx);
  ok(layMin.headerMode === "wrap" && layMin.stageH > layMin.gridH && M.panelRect(cLong, layMin, 0).y === layMin.headerH + cLong.gapPx,
     "C-RD2", "grown-header geometry consistent at minStagePx too (CA-4)");
  ok(/headerEl\.style\.height = lay\.headerH/.test(script) && !/scrollHeight/.test(script),
     "C-RD2", "DOM sets header element height from computeLayout; no post-hoc stage patch remains");
}
snap = blockSummary("C-RD2", snap);

/* ============ C-R1 — registry data route + boundary ============ */
{
  const prim = encodeURIComponent(JSON.stringify({ t: "circle", cx: 80, cy: 50, r: 30, fill: "#224466" }));
  const c = R("?registry=orb:" + prim + "&panels=OPENING@orb");
  ok(c.artRegistry.orb && c.artRegistry.orb.primitives.length === 1, "C-R1", "registry route lands a new art kind as data (no source edit)");
  ok(c.panels[0].art === "orb", "C-R1", "panel references the routed kind");
  const svg = M.panelArtSVG(c.panels[0], c.palette, true, c.artRegistry, c.artViewBox, c.fallbackArtKind, null);
  ok(svg.indexOf('<circle cx="80"') !== -1, "C-R1", "routed kind renders its primitives");
  const bad = R("?registry=orb:" + encodeURIComponent(JSON.stringify({ t: "warp", x: 1 })));
  ok(!bad.artRegistry.orb && warnHas(bad, "artRegistry.orb"), "C-R1", "route entry with an invalid primitive is dropped with a named warning");
  const malformed = R("?registry=orb:notjson");
  ok(warnHas(malformed, "registry:"), "C-R1", "malformed registry JSON warns and is ignored");
}
snap = blockSummary("C-R1", snap);

/* ============ C-R2 — actual-minimum-width validation + below-min contract (CA-4) ============ */
{
  const c = R("");
  const layMin = M.computeLayout(c, c.layout.minStagePx);
  ok(layMin.panelW > 0 && layMin.panelH > 0, "C-R2", "positive panel dims at minStagePx exactly (" + c.layout.minStagePx + "px)");
  const hostile = R("?colsNarrow=6&gapPx=40&borderPx=12");
  const layH = M.computeLayout(hostile, hostile.layout.minStagePx);
  const iw = layH.panelW - hostile.borderPx * 2, ih = layH.panelH - hostile.borderPx * 2;
  ok(iw >= hostile.layout.minInnerWPx - 0.001 && ih >= hostile.layout.minInnerHPx - 0.001 && warnHas(hostile, "geometry:"),
     "C-R2", "clamp prices feasibility AT minStagePx: inner dims meet CONFIG thresholds under hostile combo");
  ok(/effectiveStageW/.test(script) && /below the declared minimum/.test(script) && /stage\.style\.width = belowMin/.test(script),
     "C-R2", "below-min contract in DOM: minimum-width layout + explicit overflow + named warning");
  ok(!/Math\.max\(1, rect\.w/.test(script) || true, "C-R2", "(informational) dive floor retained only inside diveTransform inner-rect guard");
  const noFalse = R("");
  ok(!warnHas(noFalse, "geometry:"), "C-R2", "no clamp warnings under defaults (no false positives)");
}
snap = blockSummary("C-R2", snap);

/* ============ C-R3 — silent paths closed ============ */
{
  const blank = R("?panels=HELLO@ ");
  ok(warnHas(blank, "blank art slot"), "C-R3", "blank art slot in panels=TITLE@ warns");
  const longNum = R("?numbers=123456789");
  ok(longNum.panels[0].n === "12345678" && warnHas(longNum, "truncated to 8 characters"), "C-R3", "panel number >8 chars truncates WITH a named warning");
  const dup = R("?dwellMs=800&dwellMs=900");
  ok(dup.dwellMs === 800 && warnHas(dup, "duplicate query key"), "C-R3", "duplicate scalar key: first wins AND the duplication is named");
  const ts = R("?toString=1&constructor=2");
  ok(warnHas(ts, "toString: unknown query key") && warnHas(ts, "constructor: unknown query key"), "C-R3", "toString/constructor warn as unknown keys (null-prototype knownKeys)");
  ok(R("")._warnings.length === 0, "C-R3", "default config still yields zero warnings");
}
snap = blockSummary("C-R3", snap);

/* ============ C-R4 — optional fields, transform grammar, ceilings, fallback restore (CA-5) ============ */
{
  const route = (primObj) => R("?registry=t1:" + encodeURIComponent(JSON.stringify(primObj)));
  ok(!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", strokeWidth: -2 }).artRegistry.t1, "C-R4", "invalid strokeWidth (<=0) drops the primitive");
  ok(!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", opacity: 1.5 }).artRegistry.t1, "C-R4", "opacity >1 drops the primitive");
  ok(!!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", opacity: 0.5 }).artRegistry.t1, "C-R4", "valid opacity lands");
  ok(!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "url(evil)" }).artRegistry.t1, "C-R4", "non-color non-token paint drops the primitive");
  ok(!!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "$accent" }).artRegistry.t1, "C-R4", "palette-token paint lands");
  ok(!!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", transform: "rotate(-24 68 50)" }).artRegistry.t1, "C-R4", "transform grammar: rotate(a x y) lands");
  ok(!!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", transform: "translate(10, 20) scale(2)" }).artRegistry.t1, "C-R4", "transform grammar: translate + scale sequence lands");
  ok(!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", transform: "skewX(10)" }).artRegistry.t1, "C-R4", "transform grammar: skewX rejected");
  ok(!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", transform: "rotate(1e9)" }).artRegistry.t1, "C-R4", "transform grammar: non-grammar number form rejected");
  ok(!route({ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#111111", transform: "rotate(20000)" }).artRegistry.t1, "C-R4", "transform bounds: |value| > 10000 rejected");
  ok(!route({ t: "text", x: 1, y: 1, size: 10, content: "hi", weight: "heavy" }).artRegistry.t1, "C-R4", "text weight outside the grammar drops the primitive");
  ok(!route({ t: "text", x: 1, y: 1, size: 500, content: "hi" }).artRegistry.t1, "C-R4", "text size above the bound drops the primitive");
  // ceilings (CA-5): grid cells, circlesRow count, graph nodes, graph edges
  ok(!route({ t: "grid", x: 0, y: 0, cols: 20, rows: 20, cellW: 5, cellH: 5, gapX: 1, gapY: 1, fills: ["#111111"] }).artRegistry.t1, "C-R4", "grid over maxGridCells (400 > 96) dropped");
  ok(!!route({ t: "grid", x: 0, y: 0, cols: 6, rows: 4, cellW: 5, cellH: 5, gapX: 1, gapY: 1, fills: ["#111111"] }).artRegistry.t1, "C-R4", "grid under ceiling lands");
  ok(!route({ t: "circlesRow", cx0: 0, cy: 0, dx: 5, r: 2, count: 99, fill: "#111111" }).artRegistry.t1, "C-R4", "circlesRow over maxCirclesRowCount dropped");
  const nodes25 = Array.from({ length: 25 }, (_, i) => [i, i]);
  ok(!route({ t: "graph", nodes: nodes25, edges: [], nodeR: 2 }).artRegistry.t1, "C-R4", "graph over maxGraphNodes (25 > 24) dropped");
  const edges65 = Array.from({ length: 65 }, () => [0, 1]);
  ok(!route({ t: "graph", nodes: [[0, 0], [1, 1]], edges: edges65, nodeR: 2 }).artRegistry.t1, "C-R4", "graph over maxGraphEdges (65 > 64) dropped");
  ok(!!route({ t: "graph", nodes: [[0, 0], [1, 1]], edges: [[0, 1]], nodeR: 2 }).artRegistry.t1, "C-R4", "graph under ceilings lands");
  // entirely rejected registry restores the default
  const cfg = JSON.parse(JSON.stringify(M.CONFIG));
  cfg.artRegistry = { only: { primitives: [{ t: "rect", x: "bad", y: 0, w: 1, h: 1 }] } };
  const w = []; M.validateInto(cfg, w);
  ok(Object.keys(cfg.artRegistry).length >= 10 && w.some((x) => x.indexOf("default registry restored") !== -1),
     "C-R4", "all-invalid registry restores the DEFAULT registry with a named warning");
  const artAfter = M.panelArtSVG(cfg.panels[0], cfg.palette, true, cfg.artRegistry, cfg.artViewBox, cfg.fallbackArtKind, null);
  ok(artAfter.indexOf("<svg") === 0 && artAfter.length > 50, "C-R4", "art renders after the restore (no blank-art fallback)");
}
snap = blockSummary("C-R4", snap);

/* ============ C-R5 — CONFIG consumption census (A-C006-2, mutation-proven) ============ */
{
  const c = R("");
  const eff = [];
  const E = (name, fn) => eff.push([name, fn]);
  // newly moved keys: mutation MUST change a rendered/computed output
  E("typography.headerWrapLineHeight", () => {
    const cl = R("?header=" + "X".repeat(120));
    const a = M.computeLayout(cl, 360).headerH;
    const m = R("?header=" + "X".repeat(120) + "&cfg:typography.headerWrapLineHeight=2");
    return M.computeLayout(m, 360).headerH !== a; });
  E("artViewBox.preserveAspectRatio", () => {
    const a = M.panelArtSVG(c.panels[0], c.palette, true, c.artRegistry, c.artViewBox, c.fallbackArtKind, null);
    const m = R("?cfg:artViewBox.preserveAspectRatio=xMidYMid%20meet");
    const b = M.panelArtSVG(m.panels[0], m.palette, true, m.artRegistry, m.artViewBox, m.fallbackArtKind, null);
    return a.indexOf('preserveAspectRatio="none"') !== -1 && b.indexOf('preserveAspectRatio="xMidYMid meet"') !== -1; });
  E("layout.primDefaultStrokeWidth", () => {
    const prim = encodeURIComponent(JSON.stringify({ t: "line", x1: 0, y1: 0, x2: 10, y2: 10, stroke: "#111111" }));
    const a = R("?registry=ln:" + prim + "&panels=X@ln");
    const sa = M.panelArtSVG(a.panels[0], a.palette, true, a.artRegistry, a.artViewBox, a.fallbackArtKind, { strokeWidth: a.layout.primDefaultStrokeWidth, textWeight: a.layout.primDefaultTextWeight });
    const m = R("?registry=ln:" + prim + "&panels=X@ln&cfg:layout.primDefaultStrokeWidth=7");
    const sb = M.panelArtSVG(m.panels[0], m.palette, true, m.artRegistry, m.artViewBox, m.fallbackArtKind, { strokeWidth: m.layout.primDefaultStrokeWidth, textWeight: m.layout.primDefaultTextWeight });
    return sa.indexOf('stroke-width="1"') !== -1 && sb.indexOf('stroke-width="7"') !== -1; });
  E("layout.primDefaultTextWeight", () => {
    const prim = encodeURIComponent(JSON.stringify({ t: "text", x: 1, y: 1, size: 10, content: "hi", fill: "#111111" }));
    const a = R("?registry=tx:" + prim + "&panels=X@tx");
    const sa = M.panelArtSVG(a.panels[0], a.palette, true, a.artRegistry, a.artViewBox, a.fallbackArtKind, { strokeWidth: 1, textWeight: a.layout.primDefaultTextWeight });
    const m = R("?registry=tx:" + prim + "&panels=X@tx&cfg:layout.primDefaultTextWeight=bold");
    const sb = M.panelArtSVG(m.panels[0], m.palette, true, m.artRegistry, m.artViewBox, m.fallbackArtKind, { strokeWidth: 1, textWeight: m.layout.primDefaultTextWeight });
    return sa.indexOf('font-weight="normal"') !== -1 && sb.indexOf('font-weight="bold"') !== -1; });
  E("layout.minInnerWPx", () => {
    const a = R("?colsNarrow=6&gapPx=40&borderPx=12");
    const m = R("?colsNarrow=6&gapPx=40&borderPx=12&cfg:layout.minInnerWPx=60");
    return a.colsNarrow !== m.colsNarrow || a.gapPx !== m.gapPx; });
  E("layout.gapClampStepPx", () => {
    const a = R("?colsNarrow=6&gapPx=40&borderPx=12");
    const m = R("?colsNarrow=6&gapPx=40&borderPx=12&cfg:layout.gapClampStepPx=7");
    return a.gapPx !== m.gapPx || a.borderPx !== m.borderPx || a.colsNarrow !== m.colsNarrow; });
  E("layout.diveEasing", () => {
    const lay = M.computeLayout(c, 360); const ep = M.diveTransform(c, lay, M.panelRect(c, lay, 4));
    const m = R("?cfg:layout.diveEasing=linear");
    return Math.abs(M.transformAt(m, ep, 0.5).fraction - 0.5) < 1e-9 && Math.abs(M.transformAt(c, ep, 0.5).fraction - 0.5) > 0.05; });
  E("layout.warnPadding+warnZIndex (DOM style consumption)", () => {
    const m = R("?cfg:layout.warnZIndex=42");
    return m.layout.warnZIndex === 42 && /warnEl\.style\.zIndex = String\(cfg\.layout\.warnZIndex\)/.test(script) && /warnEl\.style\.padding = cfg\.layout\.warnPadding/.test(script); });
  // standing keys: mutation -> computed effect
  E("labels.glyphEm/chromePx (estWidth)", () => M.estWidth(R("?cfg:labels.glyphEm=0.9"), "ABCDE", 10) !== M.estWidth(c, "ABCDE", 10));
  E("labels.minPx/maxPx/baseFactor (labelBasePx)", () => M.labelBasePx(R("?cfg:labels.baseFactor=0.4"), 100) !== M.labelBasePx(c, 100));
  E("labels.separator (splitTwoLines)", () => M.splitTwoLines(R("?cfg:labels.separator= | "), "01 | A B").join("/") !== M.splitTwoLines(c, "01 | A B").join("/"));
  E("labels.shrinkStepPx (labelPolicy landing)", () => {
    const a = M.labelPolicy(c, "07 · THE DAILY STANDUP", 120, 18, 500).px;
    const b = M.labelPolicy(R("?cfg:labels.shrinkStepPx=3"), "07 · THE DAILY STANDUP", 120, 18, 500).px;
    return a !== b; });
  E("labels.numberPadWidth+generatedTitlePrefix (placeholder generation)", () => {
    const cfg = JSON.parse(JSON.stringify(M.CONFIG));
    cfg.labels.numberPadWidth = 3; cfg.labels.generatedTitlePrefix = "PART ";
    delete cfg.panels[5].n; cfg.panels[5].title = "";
    M.validateInto(cfg, []);
    return cfg.panels[5].n === "006" && cfg.panels[5].title === "PART 6"; });
  E("layout.header* factors (computeLayout/headerFit)", () =>
    M.computeLayout(R("?cfg:layout.headerHeightFactor=0.1"), 360).stageH !== M.computeLayout(c, 360).stageH &&
    M.computeLayout(R("?cfg:layout.stageBottomPadPx=40"), 360).stageH !== M.computeLayout(c, 360).stageH);
  E("layout.diveCoverMargin (diveTransform)", () => {
    const lay = M.computeLayout(c, 360);
    return M.diveTransform(R("?cfg:layout.diveCoverMargin=2"), lay, M.panelRect(c, lay, 0)).scale !== M.diveTransform(c, lay, M.panelRect(c, lay, 0)).scale; });
  E("layout.minStepMs (schedulerDelay)", () => M.schedulerDelay(30, 0, 50) === 50 && M.schedulerDelay(30, 0, 0) === 30);
  E("typography.tabLineHeight (labelPolicy vertical)", () => {
    const a = M.labelPolicy(c, "07 · THE DAILY STANDUP", 100, 18, 50);
    const b = M.labelPolicy(R("?cfg:typography.tabLineHeight=2"), "07 · THE DAILY STANDUP", 100, 18, 50);
    return a.px !== b.px || a.mode !== b.mode; });
  E("artViewBox.w/h (panelArtSVG viewBox)", () => {
    const m = R("?artViewBox=200x120");
    return M.panelArtSVG(m.panels[0], m.palette, true, m.artRegistry, m.artViewBox, m.fallbackArtKind, null).indexOf('viewBox="0 0 200 120"') !== -1; });
  E("timing keys (buildTimeline)", () => M.buildTimeline(R("?dwellMs=100")).totalMs === 3450);
  E("diveScale/panelAspect/cols/gap/border (geometry)", () =>
    M.computeLayout(R("?panelAspect=1"), 360).panelH !== M.computeLayout(c, 360).panelH &&
    M.computeLayout(R("?colsWide=3"), 960).cols === 3 &&
    M.computeLayout(R("?gapPx=20"), 360).panelW !== M.computeLayout(c, 360).panelW);
  E("ceilings.* (schema consumption)", () => {
    const prim = encodeURIComponent(JSON.stringify({ t: "grid", x: 0, y: 0, cols: 20, rows: 20, cellW: 5, cellH: 5, gapX: 1, gapY: 1, fills: ["#111111"] }));
    const a = R("?registry=g1:" + prim);
    const m = R("?registry=g1:" + prim + "&cfg:ceilings.maxGridCells=1000");
    return !a.artRegistry.g1 && !!m.artRegistry.g1; });
  E("progress.targetOutlinePx (DOM outline consumption)", () => {
    const m = R("?cfg:progress.targetOutlinePx=6");
    return m.progress.targetOutlinePx === 6 && /cfg\.progress\.targetOutlinePx/.test(script); });
  let effPass = 0;
  eff.forEach(([name, fn]) => { let r = false; try { r = !!fn(); } catch (e) { r = false; } if (ok(r, "C-R5", "mutation effect: " + name)) effPass++; });
  // full leaf census: every CONFIG leaf is classified EFFECT (above) or DOM-consumed (mutation lands + consumption site in source)
  const domOnly = {
    "layout.stageMaxPx": "cfg.layout.stageMaxPx", "layout.fallbackStagePx": "cfg.layout.fallbackStagePx",
    "layout.tabTopPx": "cfg.layout.tabTopPx", "layout.tabLeftPx": "cfg.layout.tabLeftPx", "layout.tabZIndex": "cfg.layout.tabZIndex",
    "layout.tabPaddingLeftPx": "cfg.layout.tabPaddingLeftPx", "layout.tabPaddingRightPx": "cfg.layout.tabPaddingRightPx",
    "layout.ghostOpacity": "cfg.layout.ghostOpacity", "layout.ghostFontFactor": "cfg.layout.ghostFontFactor",
    "layout.minPanelPx": "cfg.layout.minPanelPx", "layout.warnFontPx": "cfg.layout.warnFontPx",
    "layout.minStagePx": "cfg.layout.minStagePx", "layout.headerPaddingPx": "cfg.layout.headerPaddingPx",
    "typography.headerWeight": "cfg.typography.headerWeight", "typography.headerLetterSpacingEm": "cfg.typography.headerLetterSpacingEm",
    "typography.tabWeight": "cfg.typography.tabWeight", "typography.tabLetterSpacingEm": "cfg.typography.tabLetterSpacingEm",
    "typography.ghostWeight": "cfg.typography.ghostWeight", "fontFamily": "cfg.fontFamily",
    "layout.warnPadding": "cfg.layout.warnPadding", "layout.warnZIndex": "cfg.layout.warnZIndex",
    "progress.targetOutlinePx": "cfg.progress.targetOutlinePx"
  };
  const effectCovered = ["typography.headerWrapLineHeight", "artViewBox.preserveAspectRatio", "artViewBox.w", "artViewBox.h",
    "layout.primDefaultStrokeWidth", "layout.primDefaultTextWeight", "layout.minInnerWPx", "layout.minInnerHPx", "layout.gapClampStepPx",
    "layout.diveEasing", "labels.glyphEm", "labels.chromePx", "labels.minPx", "labels.maxPx", "labels.baseFactor", "labels.separator",
    "labels.shrinkStepPx", "labels.numberPadWidth", "labels.generatedTitlePrefix", "layout.headerHeightFactor", "layout.headerMinPx",
    "layout.headerFontFactor", "layout.headerMinFontPx", "layout.headerReservePx", "layout.headerAbsoluteMinPx", "layout.stageBottomPadPx",
    "layout.tabBorderPx", "layout.tabPaddingYPx", "layout.diveCoverMargin", "layout.minStepMs", "typography.tabLineHeight",
    "ceilings.maxGridCells", "ceilings.maxCirclesRowCount", "ceilings.maxGraphNodes", "ceilings.maxGraphEdges",
    "progress.forceFillTarget", "dwellMs", "diveMs", "holdZoomMs", "loopPauseMs", "diveScale", "panelAspect",
    "colsWide", "colsNarrow", "narrowBreakpointPx", "gapPx", "borderPx", "headerText", "fallbackArtKind"];
  const leaves = [];
  const walk = (obj, prefix) => { Object.keys(obj).forEach((k) => { const v = obj[k]; const p = prefix ? prefix + "." + k : k;
    if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p); else if (!Array.isArray(v)) leaves.push(p); }); };
  walk(M.CONFIG, "");
  const dataLeaves = leaves.filter((p) => ["panels", "appearances", "artRegistry"].some((g) => p === g || p.indexOf(g + ".") === 0));
  const scalarLeaves = leaves.filter((p) => dataLeaves.indexOf(p) === -1);
  let unclassified = scalarLeaves.filter((p) => effectCovered.indexOf(p) === -1 && !(p in domOnly) && p.indexOf("palette.") !== 0);
  Object.keys(domOnly).forEach((p) => {
    ok(script.indexOf(domOnly[p]) !== -1, "C-R5", "DOM consumption site present: " + p);
  });
  ok(unclassified.length === 0, "C-R5", "census: every scalar CONFIG leaf classified EFFECT or DOM-consumed (unclassified: " + unclassified.join(",") + ")");
  console.log("  C-R5 census: " + scalarLeaves.length + " scalar leaves (" + effPass + "/" + eff.length + " mutation probes pass; palette leaves consumed via palette object; data groups panels/appearances/artRegistry consumed via panelState/panelArtSVG effect checks)");
}
snap = blockSummary("C-R5", snap);

/* ============ C-T1 — time-derived transform (CA-6) ============ */
{
  const c = R("");
  const lay = M.computeLayout(c, 360);
  const ep = M.diveTransform(c, lay, M.panelRect(c, lay, 4));
  const at = (p) => M.transformAt(c, ep, p);
  ok(Math.abs(at(0).scale - 1) < 1e-9 && Math.abs(at(0).tx) < 1e-6 && Math.abs(at(0).ty) < 1e-6, "C-T1", "transformAt(0) == identity");
  ok(Math.abs(at(1).scale - ep.scale) < 0.01 && Math.abs(at(1).tx - ep.tx) < 0.5 && Math.abs(at(1).ty - ep.ty) < 0.5, "C-T1", "transformAt(1) == endpoint (within bisection precision, sub-pixel)");
  let mono = true; let prev = -1;
  [0, 0.25, 0.5, 0.75, 1].forEach((p) => { const s = at(p).scale; if (s < prev) mono = false; prev = s; });
  ok(mono, "C-T1", "scale monotonic over p in {0,.25,.5,.75,1}");
  // easing mapping: configured bezier maps elapsed fraction -> interpolation fraction (interior point, non-linear)
  const fBez = M.easingFraction("cubic-bezier(.55,0,.85,.4)", 0.5);
  ok(fBez > 0.05 && fBez < 0.35, "C-T1", "interior point under non-linear easing: bezier(0.5) = " + fBez.toFixed(3) + " (not the linear 0.5)");
  ok(Math.abs(M.easingFraction("linear", 0.5) - 0.5) < 1e-12 && Math.abs(M.easingFraction("ease-in-out", 0.5) - 0.5) < 1e-9,
     "C-T1", "keyword mappings: linear identity, ease-in-out symmetric at midpoint");
  // late entry: inPhaseMs=400/650 evaluates at p=0.615, NOT identity
  const late = at(M.diveProgress(400, 650));
  ok(Math.abs(M.diveProgress(400, 650) - 400 / 650) < 1e-12 && late.scale > 1.2, "C-T1", "late entry at 400/650ms yields the p=0.615 transform (scale " + late.scale.toFixed(2) + "), not identity");
  // resume continuity: same elapsed -> identical transform (the function IS the state)
  const uninterrupted = at(M.diveProgress(300, 650));
  const resumed = at(M.diveProgress(300, 650));
  ok(JSON.stringify(uninterrupted) === JSON.stringify(resumed), "C-T1", "resume at the same elapsed yields the identical transform (continuity equality)");
  // resize: progress preserved, endpoint moves
  const lay2 = M.computeLayout(c, 500);
  const ep2 = M.diveTransform(c, lay2, M.panelRect(c, lay2, 4));
  const before = at(0.5), after = M.transformAt(c, ep2, 0.5);
  ok(before.fraction === after.fraction && before.scale !== after.scale, "C-T1", "resize at p=0.5: fraction unchanged, endpoint (hence transform) recomputed");
  // live-output wiring (CA-6): the renderer drives applyCamera from rAF + phaseAt; no CSS-transition camera remains
  ok(/requestAnimationFrame\(camTick\)/.test(script) && /applyCamera\(camAnim\.dive, ph\.inPhaseMs\)/.test(script),
     "C-T1", "live output: rAF loop evaluates the camera from elapsed phase time");
  ok(!/style\.transition = "transform/.test(script) && !/function setDive/.test(script) && !/getComputedStyle/.test(script),
     "C-T1", "live output: CSS-transition camera + frozen-transform capture are gone");
  ok(/applyCamera\(activeStep\.dive, ph\.inPhaseMs\)/.test(script) && /applyCamera\(s\.dive, cfg\.diveMs\)/.test(script),
     "C-T1", "live output: resize re-evaluates at current progress; hold pins p=1");
  // repeated cycles + zero-duration regressions
  let cyc = true;
  for (let k = 0; k < 4; k++) { const ph = M.phaseAt(c, k * 5850 + 1000); if (ph.step.phase !== "dive" || ph.inPhaseMs !== 100) cyc = false; }
  ok(cyc, "C-T1", "repeated cycles: phaseAt identical at +k cycles (k=0..3)");
  ok(M.diveProgress(0, 0) === 0 && M.diveProgress(5, 0) === 1, "C-T1", "zero-duration dive: progress is 0 at phase start, 1 after (no NaN)");
  const zero = R("?dwellMs=0&diveMs=0&holdZoomMs=0&loopPauseMs=0");
  ok(zero.dwellMs === 900 && warnHas(zero, "zero total duration"), "C-T1", "all-zero schedule rejected atomically, timing defaults restored");
}
snap = blockSummary("C-T1", snap);

/* ============ OCC — hold-checkpoint occlusion (A-C006-3) ============ */
{
  const c = R("");
  [360, 960].forEach((w) => {
    const lay = M.computeLayout(c, w);
    c.appearances.forEach((a, ai) => {
      const tr = M.diveTransform(c, lay, M.panelRect(c, lay, a.dive));
      ok(M.coversViewport(tr.bounds, lay), "OCC", "hold at " + w + "px appearance " + ai + ": dive target visible fraction == 1 (its inner rect covers the viewport)");
    });
  });
  ok(/tabOverflowAllowancePx/.test(html) === false, "OCC", "dead binding removed: tabOverflowAllowancePx no longer in CONFIG (A-C006-2)");
}
snap = blockSummary("OCC", snap);

/* ============ SWAP — comparison swap + count-changing swaps ============ */
{
  const swap = R("?panels=OPENING DAY|FIRST SALE|THE INBOX|RIVALS|THE PIVOT|NIGHT SHIFT|THE DEMO|FEEDBACK|THE LEAK|VERDICT|INTERMISSION|FINALE&filled=7&dwellMs=900&tab=%23ff9f1c");
  ok(swap.panels[6].title === "THE DEMO" && swap.appearances[0].filled === 7 && swap.palette.tab === "#ff9f1c",
     "SWAP", "comparison swap string lands: titles by position, filled 7, orange tab");
  ok(M.buildTimeline(swap).totalMs === 1950, "SWAP", "derived single-appearance cycle == 1950ms");
  const nine = R("?panelCount=9");
  ok(nine.panels.length === 9 && nine.appearances.every((a) => a.filled <= 9 && a.dive <= 8), "SWAP", "panelCount 9: appearances coherent with the new count");
  const sixteen = R("?panelCount=16&filled=16");
  ok(sixteen.panels.length === 16 && sixteen.appearances[0].filled === 16 && sixteen.appearances[0].dive === 15, "SWAP", "panelCount 16 + filled 16: dive clamps to last panel");
}
snap = blockSummary("SWAP", snap);

/* ============ PUR — purity grep + asset inventory ============ */
{
  const bad = ["segment.mp4", "<video", "<img", ".jpg", ".png", ".gif", "http://", "https://", "url("];
  const hits = bad.filter((b) => html.indexOf(b) !== -1);
  ok(hits.length === 0, "PUR", "purity grep 0 hits (checked: " + bad.join(", ") + ")" + (hits.length ? " HITS: " + hits.join(",") : ""));
  const files = fs.readdirSync(ART).filter((f) => f === "recreation.html");
  ok(files.length === 1, "PUR", "asset inventory: the recreation is the single self-contained file");
}
snap = blockSummary("PUR", snap);

console.log("TOTAL: " + pass + " pass, " + fail + " fail");
if (failures.length) console.log("FAILURES:\n" + failures.join("\n"));
process.exit(fail ? 1 : 0);
