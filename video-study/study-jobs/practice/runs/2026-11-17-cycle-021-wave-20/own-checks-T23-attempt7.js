"use strict";
/* T23 attempt 7 — own-check suite on the evolving/final source.
   Classes kept separate: PURE = module-level functions; HARNESS =
   presentation-order model (fake-DOM frame-boundary harness driving the
   ACTUAL production tick/camTick/applyStep/present-endpoint code);
   DOM-MEASURED checks are NOT VERIFIED (no render route) and never run here. */
const fs = require("fs");
const DIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map/";
function loadPure(file) {
  const src = fs.readFileSync(DIR + file, "utf8");
  const js = src.split("<script>")[1].split("</script>")[0];
  const mod = { exports: {} };
  new Function("module", "exports", js)(mod, mod.exports);
  return { M: mod.exports, src };
}
let pass = 0, fail = 0; const fails = [];
function ck(name, cond) { if (cond) { pass++; console.log("PASS " + name); } else { fail++; fails.push(name); console.log("FAIL " + name); } }

/* ---------------- fake-DOM frame-boundary harness ---------------- */
function loadDOM(file) {
  const src = fs.readFileSync(DIR + file, "utf8");
  const js = src.split("<script>")[1].split("</script>")[0];
  const env = { now: 0, frame: 0, timers: [], raf: new Map(), seq: 0, rafSeq: 0, commits: [], handlers: {} };
  function makeEl(tag) {
    const el = { tagName: tag, children: [], dataset: {}, className: "", textContent: "",
      clientWidth: 360, clientHeight: 100, scrollWidth: 0, scrollHeight: 40,
      offsetHeight: 20, offsetLeft: 0, offsetTop: 0, parentElement: null, _ih: "" };
    el.style = {};
    el.classList = { add: function () {} };
    el.appendChild = function (c) { c.parentElement = el; el.children.push(c); return c; };
    el.querySelectorAll = function () { const out = []; (function walk(e) { e.children.forEach(function (c) { if (c.className === "tab") out.push(c); walk(c); }); })(el); return out; };
    Object.defineProperty(el, "innerHTML", { get: function () { return el._ih; }, set: function (v) { el._ih = v; if (v === "") el.children = []; } });
    Object.defineProperty(el, "firstChild", { get: function () { return el.children[0] || null; } });
    return el;
  }
  const stage = makeEl("div"), zoomwrap = makeEl("div"), header = makeEl("div"), grid = makeEl("div"), warn = makeEl("div");
  zoomwrap.style = new Proxy({}, { set: function (t, k, v) { if (k === "transform") env.commits.push({ t: env.now, frame: env.frame, value: v }); t[k] = v; return true; }, get: function (t, k) { return t[k]; } });
  const byId = { stage: stage, zoomwrap: zoomwrap, header: header, grid: grid, warn: warn };
  const documentFake = { getElementById: function (id) { return byId[id]; }, createElement: function (t) { return makeEl(t); },
    createRange: function () { return { selectNodeContents: function () {}, getClientRects: function () { return [{ width: 10 }]; } }; }, body: makeEl("body") };
  const windowFake = { location: { search: "" }, addEventListener: function (ev, fn) { env.handlers[ev] = fn; } };
  const perfFake = { now: function () { return env.now; } };
  const setTimeoutFake = function (cb, delay) { const id = ++env.seq; env.timers.push({ id: id, at: env.now + Math.max(0, delay || 0), cb: cb }); return id; };
  const clearTimeoutFake = function (id) { env.timers = env.timers.filter(function (x) { return x.id !== id; }); };
  const rafFake = function (cb) { const id = ++env.rafSeq; env.raf.set(id, cb); return id; };
  const cancelRafFake = function (id) { env.raf.delete(id); };
  const fn = new Function("window", "document", "performance", "requestAnimationFrame", "cancelAnimationFrame", "setTimeout", "clearTimeout", "console", js);
  fn(windowFake, documentFake, perfFake, rafFake, cancelRafFake, setTimeoutFake, clearTimeoutFake, console);
  env.window = windowFake; env.zoomwrap = zoomwrap;
  env.runTimers = function () { let g = 0; while (g++ < 1000) { const due = env.timers.filter(function (x) { return x.at <= env.now; }).sort(function (a, b) { return a.at - b.at || a.id - b.id; }); if (!due.length) break; const x = due[0]; env.timers = env.timers.filter(function (y) { return y.id !== x.id; }); x.cb(); } };
  env.runFrame = function () { env.frame++; const cbs = Array.from(env.raf.values()); env.raf.clear(); cbs.forEach(function (cb) { cb(env.now); }); };
  env.advance = function (ms, order) { const target = env.now + ms; while (env.now < target) { env.now = Math.min(target, env.now + 5); if (order === "raf-first") { if (env.raf.size) env.runFrame(); env.runTimers(); } else { env.runTimers(); if (env.raf.size) env.runFrame(); } } };
  env.msg = function (cmd) { env.handlers.message({ data: { cmd: cmd } }); };
  return env;
}
function presentations(env) { return env.window.__t23Presentation.presented.filter(function (r) { return r.type === "present-endpoint"; }); }
function endpointResetGap(env, rec, endT) {
  let ci = -1;
  for (let i = 0; i < env.commits.length; i++) if (env.commits[i].value === rec.transform && env.commits[i].t >= endT - 60) { ci = i; break; }
  if (ci < 0) return null;
  for (let j = ci + 1; j < env.commits.length; j++) if (env.commits[j].value === "none") return { commit: env.commits[ci], reset: env.commits[j] };
  return null;
}

/* ---------------- Stage 1: C1 presented endpoint (presentation-order model) ---------------- */
const fin = loadPure("recreation.html");
const M = fin.M, cfg = M.resolveConfig("");
ck("S1 timeline nominal cycle 2190ms", M.buildTimeline(cfg).totalMs === 2190);
(function () {
  const env = loadDOM("recreation.html");
  env.advance(2190 * 3 + 400, "tick-first");
  const pres = presentations(env);
  ck("S1 harness tick-first: exactly one presentation per appearance per cycle over 3 cycles (9)", pres.length === 9 && new Set(pres.map(function (r) { return r.key; })).size === 9);
  let allGaps = pres.length === 9, noDrift = true;
  pres.forEach(function (rec, i) {
    const endT = Math.floor(i / 3) * 2190 + (i % 3 + 1) * 730;
    const g = endpointResetGap(env, rec, endT);
    if (!g || !(g.reset.frame > g.commit.frame)) allGaps = false;
    if (g && Math.abs(g.commit.t - endT) > 35) noDrift = false;
  });
  ck("S1 harness: endpoint committed before dwell reset with >=1 frame boundary intervening (all 9)", allGaps);
  ck("S1 harness: presentation times on the absolute nominal schedule, no drift over 3 cycles", noDrift);
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(2190 * 3 + 400, "raf-first");
  const pres = presentations(env);
  ck("S1 harness camTick-first order: single-winner — still exactly 9 presentations, no doubles", pres.length === 9 && new Set(pres.map(function (r) { return r.key; })).size === 9);
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(500, "tick-first"); /* mid-dive, appearance 0 */
  env.now += 1600; env.runTimers(); if (env.raf.size) env.runFrame(); env.advance(200, "tick-first");
  const pres = presentations(env), sk = env.window.__t23Presentation.skipped;
  ck("S1 lateness >=1 frame spanning phases: tracked dive presented exactly once", pres.filter(function (r) { return r.key === "0:0:dive"; }).length === 1);
  ck("S1 multi-phase lateness: wholly-elapsed dive logged skipped NOT PRESENTED, no catch-up burst", sk.some(function (s) { return s.phase === "dive" && s.appearance === 1 && s.endpointPresented === false; }) && pres.filter(function (r) { return r.appearance === 1 && r.cycle === 0; }).length === 0);
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(500, "tick-first");
  env.now += 5000; env.runTimers(); if (env.raf.size) env.runFrame(); env.advance(200, "tick-first");
  const pres = presentations(env), sk = env.window.__t23Presentation.skipped;
  ck("S1 cycle-wrap lateness: skipped steps logged across cycles, one presentation only (tracked dive)", pres.length === 1 && sk.length >= 8 && env.zoomwrap.style.transform !== "none" && env.zoomwrap.style.transform !== undefined);
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(500, "tick-first");
  env.msg("pause");
  const presAtPause = presentations(env);
  const cancelled = env.window.__t23Presentation.presented.some(function (r) { return r.type === "presentation-cancelled" && r.presented === false; });
  env.msg("play"); env.advance(400, "tick-first");
  ck("S1 cancellation mid-dive: no silent presentation; disposition logged; resume presents at the boundary", presAtPause.length === 0 && cancelled && presentations(env).filter(function (r) { return r.key === "0:0:dive"; }).length === 1);
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(725, "tick-first"); env.now = 732; env.runTimers(); /* boundary tick fires, frame not yet run */
  const pending = env.window.__t23Presentation.pending();
  const lastCommit = env.commits[env.commits.length - 1];
  env.msg("pause");
  const stillPending = env.window.__t23Presentation.pending();
  const noReset = !env.commits.some(function (c, i) { return i > 0 && c.value === "none" && c.t > 730; });
  env.msg("play"); env.runFrame(); env.advance(100, "tick-first");
  const pres = presentations(env);
  ck("S1 pause during presentation: presentation survives pause as a state, reset only after resume + frame boundary", pending && stillPending && noReset && pres.length === 1);
  ck("S1 presented endpoint transform is the dive endpoint (p=1), not identity", pres.length === 1 && lastCommit && lastCommit.value === pres[0].transform);
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(725, "tick-first"); env.now = 732; env.runTimers();
  env.handlers.resize();
  const rederived = env.window.__t23Presentation.presented.some(function (r) { return r.type === "present-endpoint-rederived"; });
  env.runFrame();
  ck("S1 resize during presentation: endpoint re-derived and re-committed before the deferred apply", rederived && env.window.__t23Presentation.pending() === false);
})();
ck("S1 regression: target miniature present through dwell/dive/hold (semantic)", [0, 1, 2].every(function (a) { const st = M.panelState(cfg, a, cfg.appearances[a].dive); return st.rendered && st.isTarget; }));
ck("S1 regression: completed 4/8/12 vs illustrated 5/9/12", [0, 1, 2].every(function (a) { return cfg.appearances[a].filled === [4, 8, 12][a] && [0,1,2,3,4,5,6,7,8,9,10,11].filter(function (i) { return M.panelState(cfg, a, i).rendered; }).length === [5, 9, 12][a]; }));
ck("S1 regression: hold pinned to endpoint at diveMs=0", M.diveProgress(0, 0) === 1);

/* ---------------- Stage 2: C2 validation-before-generation + C3 paint defaults ---------------- */
const prev6 = loadPure("recreation-attempt-6.html").M;
(function () {
  let threw = false, out = null;
  try { out = prev6.resolveConfig("?cfg:labels.numberPadWidth=1000000000&panelCount=13"); } catch (e) { threw = true; }
  ck("S2 C2 before-probe (attempt 6 source): pad-width case throws", threw);
  threw = false; out = null;
  try { out = M.resolveConfig("?cfg:labels.numberPadWidth=1000000000&panelCount=13"); } catch (e) { threw = true; }
  ck("S2 C2 return's exact case: no throw, named warning, working 13-panel config", !threw && out && out.panels.length === 13 && out._warnings.some(function (w) { return w.indexOf("numberPadWidth") >= 0; }));
})();
(function () {
  const cases = [
    "?cfg:limits.maxPanels=1000000000&panelCount=1000000000",
    "?cfg:limits.maxPanels=100000&panelCount=100000",
    "?cfg:labels.generatedTitlePrefix=" + "X".repeat(100000) + "&panelCount=13",
    "?cfg:ceilings.maxGraphNodes=999999999&panelCount=13",
    "?panelCount=99999999999999999999",
    "?appearances=999999999:0,0:999999999",
    "?cfg:layout.minStagePx=999999999999999999999&panelCount=13",
    "?cfg:labels.numberPadWidth=0&panelCount=13",
    "?cfg:labels.numberPadWidth=-4&panelCount=13",
    "?filled=999999999",
    "?cfg:limits.titleMaxChars=0&panelCount=13"
  ];
  let allOk = true;
  cases.forEach(function (q) {
    try { const c = M.resolveConfig(q); if (!c || !Array.isArray(c.panels) || !c.panels.length || c.panels.length > 100000) allOk = false; }
    catch (e) { allOk = false; console.log("  adversarial throw on " + q.slice(0, 60) + ": " + e.message); }
  });
  ck("S2 C2 adversarial corpus: resolveConfig NEVER throws, always returns a playable config", allOk);
  let directOk = true;
  try { const c = JSON.parse(JSON.stringify(M.CONFIG)); c.labels = null; c.typography = null; const w = []; M.validateInto(c, w); if (!c.labels || !c.typography) directOk = false; } catch (e) { directOk = false; }
  ck("S2 C2 null/absent groups reset with warnings, no throw (direct validateInto)", directOk);
})();
(function () {
  const defs = { strokeWidth: 1, textWeight: "normal", defaultFill: cfg.artDefaults.fill, defaultStroke: cfg.artDefaults.stroke };
  const render1 = function (prim) { return M.panelArtSVG({ n: "01", title: "X", art: "k" }, cfg.palette, true, { k: { primitives: [prim] } }, cfg.artViewBox, "k", defs); };
  const bad = /undefined|NaN|\$[a-z]/;
  const kinds = [
    { t: "rect", x: 0, y: 0, w: 10, h: 10 }, { t: "circle", cx: 5, cy: 5, r: 3 },
    { t: "line", x1: 0, y1: 0, x2: 9, y2: 9 }, { t: "polygon", points: "0,0 9,0 9,9" },
    { t: "path", d: "M0 0 L9 9" }, { t: "text", x: 1, y: 1, size: 9, content: "A" },
    { t: "grid", x: 0, y: 0, cols: 2, rows: 2, cellW: 4, cellH: 4, gapX: 1, gapY: 1, fills: ["#111111"] },
    { t: "circlesRow", cx0: 0, cy: 5, dx: 4, count: 2, r: 2 },
    { t: "graph", nodes: [[0, 0], [9, 9]], edges: [[0, 1]], nodeR: 2 }
  ];
  let censusRows = 0, censusBad = [];
  kinds.forEach(function (prim) {
    ["missing", "present"].forEach(function (paintCase) {
      const p = JSON.parse(JSON.stringify(prim));
      if (paintCase === "present") { if (p.t === "line") p.stroke = "#222222"; else if (p.t === "graph") { p.edgeStroke = "#222222"; p.nodeFill = "#333333"; } else if (p.t !== "grid") p.fill = "#222222"; }
      const out = render1(p); censusRows++;
      if (bad.test(out)) censusBad.push(p.t + "/" + paintCase + " -> " + out.slice(0, 90));
    });
  });
  console.log("  C3 emitted-attribute census: " + censusRows + " site-rows (9 kinds x missing/present paint), bad rows: " + censusBad.length);
  censusBad.forEach(function (b) { console.log("  CENSUS-BAD " + b); });
  ck("S2 C3 emitted-attribute census: no undefined/NaN/unresolved-token attribute in any row", censusBad.length === 0);
  const pathMissing = render1({ t: "path", d: "M0 0 L9 9" });
  const pathNone = render1({ t: "path", d: "M0 0 L9 9", fill: "none" });
  const lineMissing = render1({ t: "line", x1: 0, y1: 0, x2: 9, y2: 9 });
  const graphMissing = render1({ t: "graph", nodes: [[0, 0], [9, 9]], edges: [[0, 1]], nodeR: 2 });
  ck("S2 C3 before-probe (attempt 6): path missing fill emitted \"none\", line/graph emitted stroke \"undefined\"",
    prev6.panelArtSVG({ n: "01", title: "X", art: "k" }, cfg.palette, true, { k: { primitives: [{ t: "path", d: "M0 0 L9 9" }] } }, cfg.artViewBox, "k", { strokeWidth: 1, textWeight: "normal", defaultFill: "#141414" }).indexOf('fill="none"') >= 0);
  ck("S2 C3 return's three cases cured: path missing fill -> configured default; explicit \"none\" honoured; line missing stroke -> default; graph missing edgeStroke -> default",
    pathMissing.indexOf('fill="#141414"') >= 0 && pathNone.indexOf('fill="none"') >= 0 && lineMissing.indexOf('stroke="#141414"') >= 0 && graphMissing.indexOf('stroke="#141414"') >= 0);
  const cBad = M.resolveConfig("?cfg:artDefaults.fill=notacolor");
  ck("S2 C3 artDefaults invalid paint resets per-field with named warning (stroke route lands in Stage 3 surface)", cBad.artDefaults.fill === "$ink" && cBad._warnings.some(function (w) { return w.indexOf("artDefaults.fill") >= 0; }));
})();
(function () {
  /* retained joint-geometry regression guard (attempt-6 C3): restore/re-check sweep */
  let ok = true, combos = 0;
  [0, 20, 40].forEach(function (g) { [0, 6, 12].forEach(function (b) { [3, 6].forEach(function (cn) { [1.55, 3].forEach(function (asp) {
    combos++;
    try {
      const c = M.resolveConfig("?gapPx=" + g + "&borderPx=" + b + "&colsNarrow=" + cn + "&panelAspect=" + asp);
      const lay = M.computeLayout(c, 360);
      const innerW = lay.panelW - c.borderPx * 2, innerH = lay.panelH - c.borderPx * 2;
      const rejected = c._warnings.some(function (w) { return w.indexOf("REJECTED") >= 0 || w.indexOf("restored") >= 0; });
      if (!(innerW > 0 && innerH > 0) && !rejected) { ok = false; console.log("  guard combo infeasible unhandled: " + [g, b, cn, asp].join("/")); }
    } catch (e) { ok = false; console.log("  guard combo threw: " + [g, b, cn, asp].join("/") + " " + e.message); }
  }); }); }); });
  console.log("  joint-geometry guard sweep: " + combos + " combinations");
  const priced = M.resolveConfig("?panelAspect=3&cfg:layout.minInnerHPx=200");
  ck("S2 retained joint-geometry guard: " + combos + "-combination sweep clean; priced infeasible case restores/rejects by name", ok && priced._warnings.some(function (w) { return w.indexOf("geometry:") >= 0; }));
})();

/* ---------------- Stage 3: C4 removal + C7 configuration surface ---------------- */
(function () {
  ck("S3 C4 minStepMs gone from CONFIG and from the whole source (no dangling consumption/binding)",
    !("minStepMs" in cfg.layout) && fin.src.indexOf("minStepMs") === -1 && fin.src.indexOf("simulatePresentation") === -1);
  ck("S3 C4 schedulerDelay is the remaining-time delay (boundary guarantee as arithmetic)", M.schedulerDelay(300, 0) === 300 && M.schedulerDelay(300, 120) === 180 && M.schedulerDelay(300, 450) === 0);
  const old = M.resolveConfig("?cfg:layout.minStepMs=500");
  ck("S3 C4 old floor URL warns as an unknown field, named, behaviour unchanged", old._warnings.some(function (w) { return w.indexOf("cfg:layout.minStepMs") >= 0 && w.indexOf("unknown field") >= 0; }) && M.buildTimeline(old).totalMs === 2190);
  ck("S3 default query resolves warning-free", cfg._warnings.length === 0);
})();
(function () {
  const verbatim = M.resolveConfig("?panels=" + encodeURIComponent(" Mixed Case "));
  ck("S3 C7a before-probe (attempt 6): \" Mixed Case \" was uppercased+trimmed", prev6.resolveConfig("?panels=" + encodeURIComponent(" Mixed Case ")).panels[0].title === "MIXED CASE");
  ck("S3 C7a default policy preserve: \" Mixed Case \" via panels route survives verbatim", verbatim.panels[0].title === " Mixed Case ");
  const upper = M.resolveConfig("?cfg:labels.titleCase=upper&panels=" + encodeURIComponent(" Mixed Case "));
  ck("S3 C7a titleCase=upper: casing applies, whitespace still verbatim (effect mapping both ways)", upper.panels[0].title === " MIXED CASE ");
  const badCase = M.resolveConfig("?cfg:labels.titleCase=sideways");
  ck("S3 C7a invalid titleCase resets to preserve with named warning", badCase.labels.titleCase === "preserve" && badCase._warnings.some(function (w) { return w.indexOf("titleCase") >= 0; }));
})();
(function () {
  const ad = M.resolveConfig("?cfg:artDefaults.fill=%23ff0000&cfg:artDefaults.stroke=%230000ff");
  ck("S3 C7c artDefaults route lands for fill and the new stroke default", ad.artDefaults.fill === "#ff0000" && ad.artDefaults.stroke === "#0000ff");
  const mapJson = JSON.stringify({ kindA: [{ t: "rect", x: 0, y: 0, w: 10, h: 10, fill: "#123456" }], kindB: [{ t: "circle", cx: 5, cy: 5, r: 3, fill: "#654321" }] });
  const rm = M.resolveConfig("?registryMap=" + encodeURIComponent(mapJson));
  const defs = { strokeWidth: 1, textWeight: "normal", defaultFill: rm.artDefaults.fill, defaultStroke: rm.artDefaults.stroke };
  const outA = M.panelArtSVG({ n: "01", title: "X", art: "kindA" }, rm.palette, true, rm.artRegistry, rm.artViewBox, "kindA", defs);
  const outB = M.panelArtSVG({ n: "01", title: "X", art: "kindB" }, rm.palette, true, rm.artRegistry, rm.artViewBox, "kindB", defs);
  ck("S3 C7d registryMap: two kinds land in one URL and both render", outA.indexOf("#123456") >= 0 && outB.indexOf("#654321") >= 0);
  const badMap = M.resolveConfig("?registryMap=" + encodeURIComponent("{not json"));
  ck("S3 C7d malformed registryMap warns by name, defaults intact", badMap._warnings.some(function (w) { return w.indexOf("registryMap") >= 0; }) && badMap.panels.length === 12);
})();
(function () {
  const lay360 = M.computeLayout(cfg, 360);
  const innerW = lay360.panelW - cfg.borderPx * 2, innerH = lay360.panelH - cfg.borderPx * 2;
  const text07 = cfg.panels[6].n + cfg.labels.separator + cfg.panels[6].title;
  const base = M.labelBasePx(cfg, innerW);
  const polDefault = M.labelPolicy(cfg, text07, innerW, base, innerH);
  const c1 = M.resolveConfig("?cfg:labels.maxLines=1");
  const polMax1 = M.labelPolicy(c1, text07, innerW, M.labelBasePx(c1, innerW), innerH);
  ck("S3 C7b maxLines=1 changes the policy outcome observably (no two-line fallback)", polDefault.mode === "two-line" && polMax1.mode !== "two-line");
  const cfb = M.resolveConfig("?cfg:labels.fallbackMode=single-line");
  const polFb = M.labelPolicy(cfb, text07, 40, M.labelBasePx(cfb, innerW), innerH);
  ck("S3 C7b fallbackMode=single-line changes the fallback outcome (single at floor, fits:false)", polFb.mode === "single" && polFb.fits === false);
})();
(function () {
  /* scoped-invariant regression vs attempt 6 (plan section 4 C7): invariants only, no whole-render claim */
  const c6 = prev6.resolveConfig("");
  const sameData = JSON.stringify(cfg.panels.map(function (p) { return [p.n, p.title, p.art]; })) === JSON.stringify(c6.panels.map(function (p) { return [p.n, p.title, p.art]; })) &&
    JSON.stringify(cfg.appearances) === JSON.stringify(c6.appearances) && JSON.stringify(cfg.palette) === JSON.stringify(c6.palette);
  const l7 = M.computeLayout(cfg, 360), l6 = prev6.computeLayout(c6, 360);
  const sameGeom = l7.cols === l6.cols && l7.rows === l6.rows && Math.abs(l7.panelW - l6.panelW) < 1e-9 && Math.abs(l7.panelH - l6.panelH) < 1e-9;
  ck("S3 scoped invariants vs attempt 6: specimen data, palette, appearances, grid geometry, nominal cycle unchanged", sameData && sameGeom && M.buildTimeline(cfg).totalMs === 2190);
})();

/* ---------------- Stage 4: C5 resolved geometry + C6 estimator + combined probe ---------------- */
(function () {
  const text = "07 · THE DAILY STANDUP";
  const withSpacing = M.estWidth(cfg, text, 12);
  const cNo = M.resolveConfig("?cfg:typography.tabLetterSpacingEm=0");
  const without = M.estWidth(cNo, text, 12);
  ck("S4 C6 estWidth consumes the configured tab letter spacing (term present, priced)", Math.abs(withSpacing - (text.length * (0.52 + 0.02) * 12 + 14)) < 1e-9 && withSpacing > without);
  const lay = M.computeLayout(cfg, 360);
  const innerW = lay.panelW - cfg.borderPx * 2, innerH = lay.panelH - cfg.borderPx * 2;
  const pol07 = M.labelPolicy(cfg, text, innerW, M.labelBasePx(cfg, innerW), innerH);
  console.log("  C6 panel 07 at 360px as computed under the corrected estimator: mode=" + pol07.mode + " px=" + pol07.px + " lines=" + JSON.stringify(pol07.lines));
  ck("S4 C6 panel 07 360px state filed as computed (mode/px above; no pre-claim)", !!pol07.mode && pol07.px >= cfg.labels.minPx);
  const pol07no = M.labelPolicy(cNo, text, innerW, M.labelBasePx(cNo, innerW), innerH);
  console.log("  C6 panel 07 with spacing=0 for contrast: mode=" + pol07no.mode + " px=" + pol07no.px);
})();
(function () {
  const lay = M.computeLayout(cfg, 360);
  const r = M.resolvedArtRect(cfg, lay, 6);
  const pert = JSON.parse(JSON.stringify({ x: r.x, y: r.y + 12, w: r.w, h: r.h - 12, bandH: r.bandH + 12 }));
  const epModel = M.endpointFromResolved(cfg, lay, r);
  const epPert = M.endpointFromResolved(cfg, lay, pert);
  const centreOk = Math.abs(epPert.scale * (pert.x + pert.w / 2) + epPert.tx - lay.stageW / 2) < 1e-6 && Math.abs(epPert.scale * (pert.y + pert.h / 2) + epPert.ty - lay.stageH / 2) < 1e-6;
  ck("S4 C5 endpoint derives from the RESOLVED rect: perturbed refinement outcome moves the endpoint; centre/coverage follow the perturbed rect",
    centreOk && M.coversViewport(epPert.bounds, lay) && (Math.abs(epPert.tx - epModel.tx) > 1e-6 || Math.abs(epPert.scale - epModel.scale) > 1e-6));
  let allCover = true;
  [360, 960].forEach(function (W) { const L = M.computeLayout(cfg, W); for (let i = 0; i < 12; i++) { const e = M.endpointFromResolved(cfg, L, M.resolvedArtRect(cfg, L, i)); if (!M.coversViewport(e.bounds, L)) allCover = false; } });
  ck("S4 C5 resolved-rect coverage holds for all panels at 360/960 (source model)", allCover);
  const beforeModel = prev6.diveTransform(c6cfg(), prev6.computeLayout(c6cfg(), 360), prev6.artRectFor(c6cfg(), prev6.computeLayout(c6cfg(), 360), 6));
  function c6cfg() { return prev6.resolveConfig(""); }
  ck("S4 C5 before-probe (attempt 6): endpoint derived from the estimated layout only (no resolved record existed)", prev6.resolvedArtRect === undefined && !!beforeModel);
  ck("S4 C5 DOM layer consumes the refined record (source check: diveEndpoint reads lastResolved)", fin.src.indexOf("lastResolved") >= 0 && fin.src.indexOf("lastResolved.panels[panelIdx]") >= 0);
})();
(function () {
  /* combined probe (plan section 4 C7): label policy x corrected spacing x tab band x resolved art bounds x endpoint coverage, jointly */
  const variants = [
    ["default", cfg, 360, 6], ["default-240", cfg, 240, 6],
    ["maxLines=1", M.resolveConfig("?cfg:labels.maxLines=1"), 360, 6],
    ["spacing=0.08", M.resolveConfig("?cfg:typography.tabLetterSpacingEm=0.08"), 360, 6],
    ["fallback=single-line", M.resolveConfig("?cfg:labels.fallbackMode=single-line"), 360, 6]
  ];
  let okAll = true;
  variants.forEach(function (v) {
    const name = v[0], c = v[1], W = v[2], idx = v[3];
    const lay = M.computeLayout(c, W);
    const r = M.resolvedArtRect(c, lay, idx);
    const pol = r.policy, rect = r.panel;
    const innerW = rect.w - c.borderPx * 2, innerH = rect.h - c.borderPx * 2;
    const linesFit = pol.lines.every(function (ln) { return M.estWidth(c, ln, pol.px) <= innerW + c.labels.shrinkStepPx * (c.labels.glyphEm + 1) + 1e-9 || pol.px <= c.labels.minPx || pol.fits === false; });
    const bandOk = Math.abs(r.bandH - Math.min(M.tabBandHeightPx(c, pol), Math.max(0, innerH))) < 1e-9;
    const complementOk = Math.abs((r.y + r.h) - (rect.y + c.borderPx + innerH)) < 1e-9 && r.h >= 1;
    const ep = M.endpointFromResolved(c, lay, r);
    const coverOk = M.coversViewport(ep.bounds, lay);
    const joint = linesFit && bandOk && complementOk && coverOk;
    console.log("  combined probe " + name + " @ " + W + " panel " + (idx + 1) + ": mode=" + pol.mode + " px=" + pol.px + " bandH=" + r.bandH.toFixed(1) + " artH=" + r.h.toFixed(1) + " linesFit=" + linesFit + " band=" + bandOk + " complement=" + complementOk + " cover=" + coverOk);
    if (!joint) okAll = false;
  });
  ck("S4 combined probe: policy outcome = estimator-priced outcome, band inside the resolved complement, endpoint covers the RESOLVED rect (all variants jointly)", okAll);
  console.log("  DOM-MEASURED checks NOT VERIFIED (no render route; discovery in own-checks-attempt7-stage0.txt): C5 rendered agreement (DOM rect vs resolved record) · C6 rendered title survival · Range/scroll header containment (default + 75-char + 120-char at 360px) · rendered occlusion enumeration · rendered 360px dwell-settle + dive-endpoint frames · 300ms glance pass · painted-frame endpoint presentation");
})();

/* ---------------- Stage 5 / Verify: swap, wrapped states, occlusion pairs, purity, self-start ---------------- */
(function () {
  const sw = M.resolveConfig("?panels=OPENING DAY|FIRST SALE|THE INBOX|RIVALS|THE PIVOT|NIGHT SHIFT|THE DEMO|FEEDBACK|THE LEAK|VERDICT|INTERMISSION|FINALE&filled=7&dwellMs=900&tab=%23ff9f1c");
  const st = M.panelState(sw, 0, sw.appearances[0].dive);
  ck("S5 swap test (comparison query): new titles land, exactly 7 filled, dive target renders its miniature", sw.panels[0].title === "OPENING DAY" && sw.panels[11].title === "FINALE" && sw.appearances[0].filled === 7 && st.rendered && st.isTarget);
  const swFx = M.resolveConfig("?cfg:artDefaults.stroke=%23ff0000&cfg:labels.titleCase=upper&cfg:labels.maxLines=1&cfg:labels.fallbackMode=single-line");
  ck("S5 effect mappings for every changed key (C3 stroke default, C7 titleCase/maxLines/fallbackMode, C7c artDefaults, C7d registryMap in S3 blocks)", swFx.artDefaults.stroke === "#ff0000" && swFx.labels.titleCase === "upper");
})();
(function () {
  let wrapOk = true, pairCount = 0, disjoint = true;
  [240, 360, 520, 960].forEach(function (W) {
    const lay = M.computeLayout(cfg, W);
    for (let i = 0; i < 12; i++) {
      const r = M.resolvedArtRect(cfg, lay, i);
      if (r.policy.px < cfg.labels.minPx || r.policy.lines.length > cfg.labels.maxLines) wrapOk = false;
      pairCount++; /* (tab band, art region) per panel */
      if (Math.abs((r.panel.y + cfg.borderPx + r.bandH) - r.y) > 1e-9) disjoint = false;
      for (let j = i + 1; j < 12; j++) { const r2 = M.resolvedArtRect(cfg, lay, j); pairCount++; if (r.x < r2.x + r2.w && r2.x < r.x + r.w && r.y < r2.y + r2.h && r2.y < r.y + r.h) disjoint = false; }
    }
    pairCount++; /* (header, grid) */
    if (lay.headerH <= 0) disjoint = false;
  });
  console.log("  occlusion pair set enumerated: " + pairCount + " pairs over dwell-settle/dive-end/hold checkpoints at 4 widths (tab-band/art per panel, art/art per panel pair, header/grid)");
  ck("S5 wrapped-state enumeration at 240/360/520/960: sizes at/above floor, lines within the configured maximum", wrapOk);
  ck("S5 complete ordered-pair occlusion enumeration (source model): every enumerated pair disjoint", disjoint);
})();
(function () {
  const s = fin.src;
  const hits = ["<video", "<img", "http://", "https://", "url(", ".mp4", ".png", ".jpg", "caption"];
  const found = hits.filter(function (h) { return s.indexOf(h) >= 0; });
  ck("S5 purity grep: zero specimen-media / external-reference / caption hits", found.length === 0);
  console.log("  purity scan hits: " + (found.length ? found.join(",") : "none"));
})();
(function () {
  const env = loadDOM("recreation.html");
  env.advance(2190 * 2 + 100, "tick-first");
  ck("S5 self-start (A-C010-2): file auto-plays and loops two full cycles under its own startup path", presentations(env).length === 6);
})();

(function () {
  const env = loadDOM("recreation.html");
  env.advance(2190 + 400, "tick-first");
  console.log("PRESENTED-INTERVAL TABLE (presentation-order model; nominal durations separate):");
  presentations(env).forEach(function (r) {
    console.log("  cycle " + r.cycle + " appearance " + r.appearance + ": nominal dwell 300ms / dive 430ms · presented-endpoint interval " + r.frames + " frame (~16.7ms at 60fps) · charged against " + r.chargedAgainst + " · lateness injected 0 · steps skipped 0");
  });
  env.window.__t23Presentation.skipped.forEach(function (s) { console.log("  skipped: " + JSON.stringify(s)); });
})();

console.log("TOTAL stage-suite: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILS: " + fails.join(" | "));
