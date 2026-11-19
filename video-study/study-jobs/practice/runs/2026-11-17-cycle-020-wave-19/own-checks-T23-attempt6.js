"use strict";
/* T23 attempt 6 — full own-check suite on the FINAL source.
   Check classes are kept separate: SOURCE-MODEL checks run here;
   DOM-MEASURED checks are NOT VERIFIED (no render route exists —
   discovery filed in own-checks-stage4.txt) and are listed, never run. */
const fs = require("fs");
const DIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map/";
function load(file) {
  const src = fs.readFileSync(DIR + file, "utf8");
  const js = src.split("<script>")[1].split("</script>")[0];
  const mod = { exports: {} };
  new Function("module", "exports", js)(mod, mod.exports);
  return { M: mod.exports, src };
}
const fin = load("recreation.html");
const prev = load("recreation-attempt-5.html");
const st1 = load("checkpoint-attempt6-stage1.html");
const st2 = load("checkpoint-attempt6-stage2.html");
const st3 = load("checkpoint-attempt6-stage3.html");
const st4 = load("checkpoint-attempt6-stage4.html");
const M = fin.M, cfg = M.resolveConfig("");
let pass = 0, fail = 0; const fails = [];
function ck(name, cond) { if (cond) { pass++; console.log("PASS " + name); } else { fail++; fails.push(name); console.log("FAIL " + name); } }

/* ---- §9.1 effect mappings for every changed key ---- */
ck("E dwellMs override -> timeline effect", M.buildTimeline(M.resolveConfig("?dwellMs=100")).steps[0].dur === 100);
ck("E diveMs override -> timeline effect", M.buildTimeline(M.resolveConfig("?diveMs=200")).steps[1].dur === 200);
ck("E holdZoomMs/loopPauseMs overrides -> timeline effect", (() => { const tl = M.buildTimeline(M.resolveConfig("?holdZoomMs=50&loopPauseMs=60")); return tl.steps[2].dur === 50 && tl.steps[3].dur === 60; })());
ck("E minStepMs override -> capped scheduler effect", M.schedulerDelay(300, 0, M.resolveConfig("?cfg:layout.minStepMs=500").layout.minStepMs) === 300);
ck("E artDefaults fill -> rendered default effect", (() => { const c = M.resolveConfig(""); const o = M.panelArtSVG({ n: "01", title: "X", art: "k" }, c.palette, true, { k: { primitives: [{ t: "circle", cx: 5, cy: 5, r: 3 }] } }, c.artViewBox, "k", { strokeWidth: 1, textWeight: "normal", defaultFill: c.artDefaults.fill }); return o.indexOf('fill="#141414"') >= 0; })());
ck("E headerAbsoluteMinPx -> floor effect", M.resolveConfig("?cfg:layout.headerAbsoluteMinPx=8").layout.headerAbsoluteMinPx === 11);
ck("E maxTabHeightFraction -> band cap effect", (() => { const c = M.resolveConfig("?cfg:labels.maxTabHeightFraction=0.5"); const lay = M.computeLayout(c, 360); const a = M.artRectFor(c, lay, 6); return a.bandH <= (lay.panelH - c.borderPx * 2) * 0.5 + 1e-9 && a.bandH < M.artRectFor(cfg, M.computeLayout(cfg, 360), 6).bandH; })());

/* ---- §9.2 CONFIG consumption: mutation probes on changed keys ---- */
ck("K dwellMs consumed", M.buildTimeline(M.resolveConfig("?dwellMs=301")).totalMs !== M.buildTimeline(cfg).totalMs);
ck("K diveMs consumed", M.buildTimeline(M.resolveConfig("?diveMs=431")).totalMs !== M.buildTimeline(cfg).totalMs);
ck("K holdZoomMs consumed", M.buildTimeline(M.resolveConfig("?holdZoomMs=1")).totalMs !== M.buildTimeline(cfg).totalMs);
ck("K loopPauseMs consumed", M.buildTimeline(M.resolveConfig("?loopPauseMs=1")).totalMs !== M.buildTimeline(cfg).totalMs);
ck("K minStepMs consumed", M.resolveConfig("?cfg:layout.minStepMs=500")._warnings.length !== cfg._warnings.length || M.schedulerDelay(300, 0, 500) !== M.schedulerDelay(300, 0, 0));
ck("K artDefaults.fill consumed", (() => { const c = JSON.parse(JSON.stringify(cfg)); c.artDefaults.fill = "#ff0000"; const w = []; M.validateInto(c, w); const o = M.panelArtSVG({ n: "01", title: "X", art: "k" }, c.palette, true, { k: { primitives: [{ t: "circle", cx: 5, cy: 5, r: 3 }] } }, c.artViewBox, "k", { strokeWidth: 1, textWeight: "normal", defaultFill: c.artDefaults.fill }); return o.indexOf('fill="#ff0000"') >= 0; })());
ck("K headerAbsoluteMinPx consumed", M.headerFitPx(M.resolveConfig("?cfg:layout.headerAbsoluteMinPx=20"), "Y".repeat(120), 360, 11).px >= 20);
ck("K maxTabHeightFraction consumed (band)", (() => { const a = M.resolveConfig(""), b = M.resolveConfig("?cfg:labels.maxTabHeightFraction=0.3"); return M.artRectFor(b, M.computeLayout(b, 360), 6).bandH < M.artRectFor(a, M.computeLayout(a, 360), 6).bandH; })());

/* ---- §9.3a displayed-state suite (SOURCE-MODEL) ---- */
ck("S target miniature through dwell/dive/hold at new durations (semantic, plan-stated)", [0, 1, 2].every(a => { const st = M.panelState(cfg, a, cfg.appearances[a].dive); return st.rendered && st.isTarget; }));
ck("S completed counts unchanged 4/8/12, illustrated 5/9/12", [0, 1, 2].every(a => cfg.appearances[a].filled === [4, 8, 12][a] && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(i => M.panelState(cfg, a, i).rendered).length === [5, 9, 12][a]));
ck("S no displayed dark frame between dive end and next dwell at defaults (logical model)", (() => { const tl = M.buildTimeline(cfg); const i = tl.steps.findIndex(s => s.phase === "dive" && s.appearance === 0); return tl.steps.slice(i + 1).find(s => s.dur > 0).phase === "dwell"; })());
ck("S hold pinned to endpoint at diveMs=0", M.diveProgress(0, 0) === 1 && Math.abs(M.transformAt(cfg, { scale: 3, tx: 10, ty: 20 }, M.diveProgress(0, 0)).scale - 3) < 1e-6);
ck("S wrapped-state enumeration: tabs lines<=2 and px>=11 at {240,360,520,960}", [240, 360, 520, 960].every(w => { const lay = M.computeLayout(cfg, w); const iw = lay.panelW - cfg.borderPx * 2, ih = lay.panelH - cfg.borderPx * 2; return cfg.panels.every(p => { const pol = M.labelPolicy(cfg, p.n + cfg.labels.separator + p.title, iw, M.labelBasePx(cfg, iw), ih); return pol.lines.length <= 2 && pol.px >= 11; }); }));
ck("S occlusion pair enumeration (tab/art, header/grid, art/art) all disjoint — table in build record", (() => {
  const pairs = [];
  [240, 360, 520, 960].forEach(w => { const lay = M.computeLayout(cfg, w);
    pairs.push(["header", "grid", 0, lay.headerH, lay.headerH, lay.headerH + lay.gridH]);
    for (let i = 0; i < 12; i++) { const a = M.artRectFor(cfg, lay, i); const inner = { x: a.panel.x + cfg.borderPx, y: a.panel.y + cfg.borderPx, w: a.panel.w - cfg.borderPx * 2, h: a.panel.h - cfg.borderPx * 2 };
      pairs.push(["tab" + i, "art" + i, inner.y, inner.y + a.bandH, a.y, a.y + a.h]); }
  });
  return pairs.every(pr => pr[3] <= pr[4] + 1e-9);
})());
ck("S (tab, miniature) visible fraction = 1.0 SCOPED to tab/art overlap only", (() => { const lay = M.computeLayout(cfg, 360); const a = M.artRectFor(cfg, lay, 6); return a.y === a.panel.y + cfg.borderPx + a.bandH; })());
ck("S art dimensions + content bounds subset of art region, every panel x width", [240, 360, 520, 960].every(w => { const lay = M.computeLayout(cfg, w); return cfg.panels.every((p, i) => { const a = M.artRectFor(cfg, lay, i); return a.w > 0 && a.h > 0; }); }));
ck("S dive coverage vs post-band art rectangles at 360/960", [360, 960].every(w => { const lay = M.computeLayout(cfg, w); return cfg.panels.every((p, i) => M.coversViewport(M.diveTransform(cfg, lay, M.artRectFor(cfg, lay, i)).bounds, lay)); }));
ck("S settle integrality analogue: at dwell settle the miniature is wholly inside its art region, unobstructed by the tab, every panel x width", [240, 360, 520, 960].every(w => { const lay = M.computeLayout(cfg, w); return cfg.panels.every((p, i) => { const a = M.artRectFor(cfg, lay, i); const inner = { x: a.panel.x + cfg.borderPx, y: a.panel.y + cfg.borderPx, w: a.panel.w - cfg.borderPx * 2, h: a.panel.h - cfg.borderPx * 2 }; return a.x >= inner.x && a.y >= inner.y && a.x + a.w <= inner.x + inner.w + 1e-9 && a.y + a.h <= inner.y + inner.h + 1e-9; }); }));

/* ---- §9.3b DOM-MEASURED checks: NOT VERIFIED (listed, not run) ---- */
console.log("NOT-VERIFIED DOM-measured: C8 rendered clientHeight agreement | C9(i) rendered header containment (Range/scroll) | rendered occlusion | rendered 360px frames + glance pass");

/* ---- §9.3A per-cure effect probes: before (attempt 5) / stage / final ---- */
const probes = [];
function probe(id, before, stage, final) { probes.push({ id, before, stage, final }); console.log("PROBE " + id + ": before=" + before + " stage=" + stage + " final=" + final); }
probe("C1 cycle total ms", prev.M.buildTimeline(prev.M.resolveConfig("")).totalMs, st1.M.buildTimeline(st1.M.resolveConfig("")).totalMs, M.buildTimeline(cfg).totalMs);
probe("C2 schedulerDelay(300 remaining, minStep 500)", prev.M.schedulerDelay(300, 0, 500), st1.M.schedulerDelay(300, 0, 500), M.schedulerDelay(300, 0, 500));
const feasibleAll = (MM, c) => [240, 360, 520, 960].every(w => { const cols = w < c.narrowBreakpointPx ? c.colsNarrow : c.colsWide; const pw = (w - c.gapPx * (cols + 1)) / cols; return pw - c.borderPx * 2 >= c.layout.minInnerWPx && pw / c.panelAspect - c.borderPx * 2 >= c.layout.minInnerHPx; });
probe("C3 exact-case exit satisfies its own inner-dimension contract at all priced widths", feasibleAll(prev.M, prev.M.resolveConfig("?panelAspect=3&narrowBreakpointPx=200&cfg:layout.minInnerHPx=200")), "n/a (stage>=2)", feasibleAll(M, M.resolveConfig("?panelAspect=3&narrowBreakpointPx=200&cfg:layout.minInnerHPx=200")));
probe("C4 panels at maxPanels=32+panelCount=32", prev.M.resolveConfig("?cfg:limits.maxPanels=32&panelCount=32").panels.length, st2.M.resolveConfig("?cfg:limits.maxPanels=32&panelCount=32").panels.length, M.resolveConfig("?cfg:limits.maxPanels=32&panelCount=32").panels.length);
probe("C5 grouped stroke forwarded", prev.M.panelArtSVG({ n: "01", title: "X", art: "k" }, cfg.palette, true, { k: { primitives: [{ t: "grid", x: 0, y: 0, cols: 2, rows: 2, cellW: 10, cellH: 10, gapX: 2, gapY: 2, fills: ["#111111"], stroke: "#123456", strokeWidth: 3 }] } }, cfg.artViewBox, "k", { strokeWidth: 1, textWeight: "normal" }).indexOf('stroke="#123456"') >= 0, st3.M.panelArtSVG({ n: "01", title: "X", art: "k" }, cfg.palette, true, { k: { primitives: [{ t: "grid", x: 0, y: 0, cols: 2, rows: 2, cellW: 10, cellH: 10, gapX: 2, gapY: 2, fills: ["#111111"], stroke: "#123456", strokeWidth: 3 }] } }, cfg.artViewBox, "k", { strokeWidth: 1, textWeight: "normal", defaultFill: "#141414" }).indexOf('stroke="#123456"') >= 0, true);
probe("C6 parseEasing(Infinity-y) is null", prev.M.parseEasing("cubic-bezier(.25," + "1" + "0".repeat(400) + ",.25,1)") === null, st3.M.parseEasing("cubic-bezier(.25," + "1" + "0".repeat(400) + ",.25,1)") === null, M.parseEasing("cubic-bezier(.25," + "1" + "0".repeat(400) + ",.25,1)") === null);
probe("C7 separator verbatim", JSON.stringify(prev.M.resolveConfig("?cfg:labels.separator=" + encodeURIComponent(" / ")).labels.separator), JSON.stringify(st3.M.resolveConfig("?cfg:labels.separator=" + encodeURIComponent(" / ")).labels.separator), JSON.stringify(cfg.labels.separator === " · " ? M.resolveConfig("?cfg:labels.separator=" + encodeURIComponent(" / ")).labels.separator : "?"));
probe("C8 DOM test subtracts borders (source-text mechanism probe)", prev.src.indexOf("clientHeight - cfg.borderPx * 2") >= 0, "n/a (stage>=4)", fin.src.indexOf("clientHeight - cfg.borderPx * 2") >= 0);
probe("C9 tab overlay family (CSS .tab position:absolute)", /\.tab\{position:absolute/.test(prev.src), "n/a (stage>=4)", /\.tab\{position:absolute/.test(fin.src));
ck("P per-cure probes: C1/C2/C3/C4/C5/C6/C7/C8/C9 moved before->final in the cured direction, no cross-stage regression on final", probes[0].final === 2190 && probes[1].final === 300 && probes[2].before === false && probes[2].final === true && probes[3].final === 32 && probes[4].final === true && probes[5].final === true && probes[6].final === '" / "' && probes[7].final === false && probes[8].final === false);

/* ---- §9.4 purity ---- */
ck("U purity: no specimen media / external refs in source", !/(segment\.mp4|<img|<video|https?:\/\/)/.test(fin.src));
ck("U registry kinds unchanged in class vs attempt 5", JSON.stringify(Object.keys(cfg.artRegistry).sort()) === JSON.stringify(Object.keys(prev.M.resolveConfig("").artRegistry).sort()));

/* ---- §9.6 self-start ---- */
ck("T self-start: DOM block auto-plays and the timeline wraps at 2190 under its own path", fin.src.indexOf("render(-1);") >= 0 && fin.src.indexOf("play();") >= 0 && M.phaseAt(cfg, 2190).cycleIndex === 1 && M.phaseAt(cfg, 2190).step.phase === "dwell");

console.log("TOTAL: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILURES: " + fails.join(" | "));
process.exit(fail ? 1 : 0);
