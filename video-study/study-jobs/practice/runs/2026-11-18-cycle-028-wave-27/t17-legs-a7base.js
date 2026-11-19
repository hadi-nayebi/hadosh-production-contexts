"use strict";
const fs = require("fs"), vm = require("vm");
const html = fs.readFileSync(process.argv[2], "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];
function makeEl(t) { const e = { tagName: (t || "div").toUpperCase(), children: [], style: {}, dataset: {}, className: "", clientWidth: 360 };
  e.style.setProperty = function (k, v) { this[k] = v; }; e.classList = { toggle() {}, add() {} };
  e.appendChild = function (c) { e.children.push(c); return c; }; e.append = function (...cs) { cs.forEach(c => e.appendChild(c)); };
  e.remove = function () {}; e.setAttribute = function (k, v) { (e._a = e._a || {})[k] = v; }; e.getAttribute = function (k) { return e._a && e._a[k]; };
  e.querySelector = () => null; e.querySelectorAll = () => [];
  Object.defineProperty(e, "textContent", { get() { return e._t || ""; }, set(v) { e._t = String(v); } }); return e; }
const byId = {}; const doc = { createElement: t => makeEl(t), createElementNS: (n, t) => makeEl(t), getElementById: id => byId[id] || (byId[id] = makeEl("div")), body: makeEl("body") };
const s = { console, URLSearchParams, performance: { now: () => 0 }, requestAnimationFrame: () => 0, cancelAnimationFrame: () => {}, location: { search: "" }, document: doc };
s.window = s; s.window.top = s; s.addEventListener = () => {}; s.window.addEventListener = () => {};
vm.createContext(s);
vm.runInContext(script + ";globalThis.__api={CONFIG,computeLayout,figureGeom,fitReport,validateConfig,transitionState,waffleState,stackState,orgState,correctionState,counterTextAt,stampMetrics,badgeMetrics,createScene,browserDom};", s);
const A = s.__api; const clone = o => JSON.parse(JSON.stringify(o));
const mode = process.argv[3];
if (mode === "fit") {
  console.log("# T17 — measured fit table, attempt 7 (A-C008 leg 1, on the attempt-7 source)");
  console.log("Source sha256: see payload manifest. Model: source-derived geometry (class G) + emitted-structure rows from the mounted-state harness; browser rows PIXEL-UNVERIFIED.");
  let hits = 0;
  for (const w of [360, 390, 960]) {
    const rep = A.fitReport(w, A.CONFIG.figures, A.CONFIG);
    console.log("\n## width " + w + " — stageH " + rep.stageH + " · headerH " + rep.headerH + " · contentW " + rep.contentW + " · ok " + rep.ok);
    console.log("| figure | required | allocated | fits | widthOk |");
    console.log("|---|---|---|---|---|");
    rep.figures.forEach(r => { console.log("| " + r.id + " | " + r.required + " | " + r.allocated + " | " + r.fits + " | " + r.widthOk + " |"); if (!r.fits || !r.widthOk) hits++; });
    console.log("fonts: " + JSON.stringify(rep.fonts) + " · fontsOk " + rep.fontsOk + " · metaRows " + rep.metaRows + " · clearancePx " + rep.clearancePx);
  }
  console.log("\nHIT list: " + hits + " containment/width rows failing across 360/390/960 (0 = clean). Label-class ink-height advisory from prior attempts is a class-B (browser) row: PIXEL-UNVERIFIED, not counted here.");
} else {
  const leaves = [];
  (function walk(o, path) { Object.keys(o).forEach(k => { const v = o[k]; if (v && typeof v === "object" && !Array.isArray(v)) walk(v, path + "." + k); else if (Array.isArray(v)) { if (path !== "figures") leaves.push([path + "." + k, v]); } else leaves.push([path + "." + k, v]); }); })(A.CONFIG, "CONFIG");
  const sceneDump = cfg => { const L = A.computeLayout(360, cfg); const st = makeEl("div");
    const m = A.createScene({ config: cfg, palette: cfg.palette, timing: cfg.timing, layout: L, dom: A.browserDom(), fonts: cfg.fonts, stageEl: st });
    m.forEach(x => { if (x.draw) { try { x.draw(0.5); x.draw(0.95); } catch (e) {} } });
    return JSON.stringify(st); };
  const probe = cfg => { try { return JSON.stringify([A.fitReport(360, cfg.figures, cfg), A.fitReport(960, cfg.figures, cfg), A.validateConfig(cfg), A.transitionState(3.4, cfg.figures, cfg), A.computeLayout(360, cfg), sceneDump(cfg),
    cfg.figures.map(f => { const out = [A.counterTextAt(0.5, f, cfg)]; try { if (f.type === "waffle") out.push(A.waffleState(f, 0.5, cfg)); if (f.type === "stackBars") out.push(A.stackState(f, 0.5, cfg)); if (f.type === "orgChart") out.push(A.orgState(f, 0.5, cfg)); if (f.type === "correction") out.push(A.correctionState(f, 0.5, cfg)); } catch (e) { out.push("ERR:" + e.message); } return out; })]); } catch (e) { return "THREW:" + e.message; } };
  const base = probe(clone(A.CONFIG));
  let consumed = 0; const unconsumed = [];
  for (const [path, v] of leaves) {
    if (path.startsWith("CONFIG.figures")) continue; // figure data leaves are content, probed via swaps in the harness
    const c = clone(A.CONFIG); const parts = path.split(".").slice(1); let o = c; for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]];
    const k = parts[parts.length - 1];
    if (path.startsWith("CONFIG.bounds.")) o[k] = (k === "cliffMin" ? 0.99 : 0);
    else if (typeof v === "number") o[k] = v === 0 ? 1 : v * 1.37 + 0.01; else if (typeof v === "string") o[k] = v + "X"; else if (typeof v === "boolean") o[k] = !v; else continue;
    if (probe(c) !== base) consumed++; else unconsumed.push(path);
  }
  const total = leaves.filter(([p]) => !p.startsWith("CONFIG.figures")).length;
  console.log("# T17 — config census, attempt 7 (A-C008 leg 2, against attempt 7's own CONFIG)");
  console.log("Method: mutation-based consumed-effect probe over the layout/timing/palette/fonts/formatting/bounds/typeFloors leaves (figure content leaves excluded — consumed via builder swaps asserted in the mounted harness).");
  console.log("Leaves probed: " + total + " · consumed: " + consumed + " · unconsumed: " + unconsumed.length);
  console.log("HIT list (unconsumed): " + (unconsumed.length ? unconsumed.join(", ") : "EMPTY"));
}
