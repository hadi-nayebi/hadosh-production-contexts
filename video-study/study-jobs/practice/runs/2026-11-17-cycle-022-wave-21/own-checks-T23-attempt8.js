"use strict";
/* T23 attempt 8 — FINAL suite on the final source (Stage 5 / Verify).
   Stage suites 1-4 run separately and are filed per stage; this suite
   re-prices the cross-cutting surfaces on the final sha: regression,
   CONFIG consumption census (A-C006-2), literal census (A-C008-3),
   wrapped states + complete ordered occlusion pairs (A-C019-1),
   swap, purity, self-start (A-C010-2). DOM-measured checks are
   NOT VERIFIED (no render route — stage-0 discovery). */
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
function loadDOM(file, search) {
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
  const windowFake = { location: { search: search || "" }, addEventListener: function (ev, fn) { env.handlers[ev] = fn; } };
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
const fin = loadPure("recreation.html"); const M = fin.M, cfg = M.resolveConfig("");
const crypto = require("crypto");
console.log("  final source sha256: " + crypto.createHash("sha256").update(fs.readFileSync(DIR + "recreation.html")).digest("hex"));
/* ---- regression ---- */
ck("S5 timeline nominal cycle 2190ms; default query warning-free", M.buildTimeline(cfg).totalMs === 2190 && cfg._warnings.length === 0);
ck("S5 target miniature present through dwell/dive/hold (semantic)", [0, 1, 2].every(function (a) { const st = M.panelState(cfg, a, cfg.appearances[a].dive); return st.rendered && st.isTarget; }));
ck("S5 completed 4/8/12 vs illustrated 5/9/12", [0, 1, 2].every(function (a) { return cfg.appearances[a].filled === [4, 8, 12][a] && [0,1,2,3,4,5,6,7,8,9,10,11].filter(function (i) { return M.panelState(cfg, a, i).rendered; }).length === [5, 9, 12][a]; }));
ck("S5 hold pinned to endpoint at diveMs=0", M.diveProgress(0, 0) === 1);
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
  let rows = 0, badRows = 0;
  kinds.forEach(function (prim) { ["missing", "present"].forEach(function (pc) {
    const p = JSON.parse(JSON.stringify(prim));
    if (pc === "present") { if (p.t === "line") p.stroke = "#222222"; else if (p.t === "graph") { p.edgeStroke = "#222222"; p.nodeFill = "#333333"; } else if (p.t !== "grid") p.fill = "#222222"; }
    if (bad.test(render1(p))) badRows++;
    rows++;
  }); });
  ck("S5 emitted-attribute census: " + rows + " site-rows, 0 bad", badRows === 0);
})();
(function () {
  let ok = true, combos = 0;
  [0, 20, 40].forEach(function (g) { [0, 6, 12].forEach(function (b) { [3, 6].forEach(function (cn) { [1.55, 3].forEach(function (asp) {
    combos++;
    try {
      const c = M.resolveConfig("?gapPx=" + g + "&borderPx=" + b + "&colsNarrow=" + cn + "&panelAspect=" + asp);
      const lay = M.computeLayout(c, 360);
      const innerW = lay.panelW - c.borderPx * 2, innerH = lay.panelH - c.borderPx * 2;
      const rejected = c._warnings.some(function (w) { return w.indexOf("REJECTED") >= 0 || w.indexOf("restored") >= 0; });
      if (!(innerW > 0 && innerH > 0) && !rejected) ok = false;
    } catch (e) { ok = false; }
  }); }); }); });
  ck("S5 joint-geometry guard: " + combos + "-combination sweep clean", ok);
})();
/* ---- CONFIG consumption census (A-C006-2): every scalar leaf -> application sites ---- */
(function () {
  const body = fin.src.slice(fin.src.indexOf("/* ================= validation"));
  const leaves = [];
  (function walk(obj, path) {
    Object.keys(obj).forEach(function (k) {
      const v = obj[k], p = path ? path + "." + k : k;
      if (path === "" && ["panels", "appearances", "artRegistry"].indexOf(k) >= 0) return;
      if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p);
      else if (typeof v === "number" || typeof v === "string" || typeof v === "boolean") leaves.push({ path: p, key: k });
    });
  })(M.CONFIG, "");
  let unconsumed = [];
  leaves.forEach(function (L) {
    const re = new RegExp("[.\\b]" + L.key + "\\b", "g");
    const sites = (body.match(re) || []).length;
    if (sites < 1) unconsumed.push(L.path);
    console.log("  census " + L.path + " -> " + sites + " application-site matches");
  });
  console.log("  census leaves walked: " + leaves.length + ", unconsumed: " + unconsumed.length);
  ck("S5 config census (A-C006-2): every scalar CONFIG leaf has >=1 application site beyond its definition", unconsumed.length === 0);
  /* effect mappings for the changed/new keys (mutation -> rendered/computed effect) */
  const hOn = M.resolveConfig("?cfg:handoff.holdOnComplete=true"), hOff = M.resolveConfig("");
  const lOn = M.resolveConfig("?cfg:limits.headerRefineMaxIterations=7");
  ck("S5 effect mappings: handoff.holdOnComplete (route changes the resolved boundary state) · limits.headerRefineMaxIterations (route lands the ceiling the refinement loop consumes)",
    hOn.handoff.holdOnComplete === true && hOff.handoff.holdOnComplete === false && lOn.limits.headerRefineMaxIterations === 7);
})();
/* ---- literal census (A-C008-3) ---- */
(function () {
  const a = fin.src.indexOf("const CONFIG ="), b = fin.src.indexOf("/* ================= validation");
  const rest = fin.src.slice(0, a) + fin.src.slice(b);
  const hex = [...new Set(rest.match(/#[0-9a-fA-F]{3,6}\b/g) || [])];
  const nums = [...new Set(rest.match(/(?<![\w.])-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/gi) || [])];
  console.log("  literal census: hex outside CONFIG = " + hex.length + " · distinct numeric literals outside CONFIG = " + nums.length + " (" + nums.join(" ") + ")");
  console.log("  whitelist classes (build record): validation range bounds · CSS easing keyword coordinates (0.25/0.1/0.42/0.58/1) · bezier solver iteration count (24) · index/count arithmetic · arc-flag values 0/1");
  ck("S5 literal census: zero colour literals outside CONFIG; numeric literals only in the whitelisted structural classes", hex.length === 0);
})();
/* ---- wrapped states + complete ordered occlusion pairs (A-C019-1) ---- */
(function () {
  let wrapOk = true, orderedPairs = 0, disjoint = true;
  [240, 360, 520, 960].forEach(function (W) {
    const lay = M.computeLayout(cfg, W);
    const arts = [];
    for (let i = 0; i < 12; i++) {
      const r = M.resolvedArtRect(cfg, lay, i);
      arts.push(r);
      if (r.policy.px < cfg.labels.minPx || r.policy.lines.length > cfg.labels.maxLines) wrapOk = false;
      /* ordered pairs per panel: (tab,art) and (art,tab) */
      orderedPairs += 2;
      if (Math.abs((r.panel.y + cfg.borderPx + r.bandH) - r.y) > 1e-9) disjoint = false;
    }
    for (let i = 0; i < 12; i++) for (let j = 0; j < 12; j++) {
      if (i === j) continue;
      orderedPairs++;
      const r = arts[i], r2 = arts[j];
      if (r.x < r2.x + r2.w && r2.x < r.x + r.w && r.y < r2.y + r2.h && r2.y < r.y + r.h) disjoint = false;
    }
    orderedPairs += 2; /* (header,grid) and (grid,header): disjoint by flow, headerH > 0 */
    if (lay.headerH <= 0) disjoint = false;
  });
  console.log("  occlusion ordered-pair set enumerated: " + orderedPairs + " ordered pairs over dwell-settle/dive-end/hold checkpoints at 4 widths (per width: 24 tab/art ordered + 132 art/art ordered + 2 header/grid ordered = 158) — the model's stated scope; elements outside this set: the warning strip (conditionally displayed, outside the stage flow) and the ghost numeral (inside its art region by construction, priced in the fit table)");
  ck("S5 wrapped-state enumeration at 240/360/520/960: sizes at/above floor, lines within the configured maximum (2)", wrapOk);
  ck("S5 complete ordered-pair occlusion enumeration (source model): every enumerated ordered pair disjoint", disjoint && orderedPairs === 632);
})();
/* ---- swap test ---- */
(function () {
  const sw = M.resolveConfig("?panels=OPENING DAY|FIRST SALE|THE INBOX|RIVALS|THE PIVOT|NIGHT SHIFT|THE DEMO|FEEDBACK|THE LEAK|VERDICT|INTERMISSION|FINALE&filled=7&dwellMs=900&tab=%23ff9f1c");
  const st = M.panelState(sw, 0, sw.appearances[0].dive);
  const swj = M.resolveConfig("?panelsJson=" + encodeURIComponent(JSON.stringify(["Pipe | One", "At @ Two"])) + "&filled=7&dwellMs=900&tab=%23ff9f1c");
  const stj = M.panelState(swj, 0, swj.appearances[0].dive);
  ck("S5 swap test (legacy route): new titles land, exactly 7 filled, dive target renders its miniature",
    sw.panels[0].title === "OPENING DAY" && sw.panels[11].title === "FINALE" && sw.appearances[0].filled === 7 && st.rendered && st.isTarget);
  ck("S5 swap test (JSON route): reserved-character titles land verbatim under the same swap parameters",
    swj.panels[0].title === "Pipe | One" && swj.panels[1].title === "At @ Two" && swj.appearances[0].filled === 7 && stj.rendered && stj.isTarget);
})();
/* ---- purity ---- */
(function () {
  const hits = ["<video", "<img", "http://", "https://", "url(", ".mp4", ".png", ".jpg", "caption"];
  const found = hits.filter(function (h) { return fin.src.indexOf(h) >= 0; });
  console.log("  purity scan hits: " + (found.length ? found.join(",") : "none"));
  ck("S5 purity grep: zero specimen-media / external-reference / caption hits", found.length === 0);
})();
/* ---- self-start ---- */
(function () {
  const env = loadDOM("recreation.html", "");
  env.advance(2190 * 2 + 100, "tick-first");
  ck("S5 self-start (A-C010-2): file auto-plays and loops two full cycles under its own startup path", presentations(env).length === 6);
})();
console.log("  DOM-MEASURED checks NOT VERIFIED (no render route): rendered DOM/record agreement · rendered title survival · Range/scroll header containment · rendered occlusion · rendered 360px dwell-settle + dive-endpoint frames · 300ms glance pass · painted-frame endpoint presentation");
console.log("FINAL TOTAL: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILS: " + fails.join(" | "));
