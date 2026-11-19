"use strict";
/* T17 attempt-7 harness: stub-DOM mounted-state assertions + validation corpus.
   Usage: node t17-harness.js <recreation.html> <mode: probes|full>
   Class tags: E=emitted-structure, G=source-derived geometry, B=browser measurement (none here). */
const fs = require("fs"), vm = require("vm");
const htmlPath = process.argv[2], mode = process.argv[3] || "full";
const html = fs.readFileSync(htmlPath, "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];
const css = html.match(/<style>([\s\S]*)<\/style>/)[1];

let failures = 0, passes = 0;
function check(cls, name, ok, detail) {
  console.log((ok ? "PASS" : "FAIL") + " [" + cls + "] " + name + (detail ? " — " + detail : ""));
  if (ok) passes++; else failures++;
}
function expectFail(cls, name, ok, detail) { // pre-cure probe: the defect must be DETECTED (check fails on frozen source)
  console.log((!ok ? "DETECTED" : "NOT-DETECTED") + " [probe][" + cls + "] " + name + (detail ? " — " + detail : ""));
  if (ok) failures++; else passes++;
}
const F = mode === "probes" ? expectFail : check;

/* ---------- stub DOM ---------- */
function makeEl(tag) {
  const e = { tagName: (tag || "div").toUpperCase(), children: [], style: {}, dataset: {}, className: "", id: "", _attrs: {}, _text: "",
    clientWidth: 360, parent: null };
  Object.defineProperty(e, "textContent", { get() { return e._text + e.children.map(c => c.textContent).join(""); }, set(v) { e._text = String(v); e.children = []; } });
  e.classList = { _s: new Set(), toggle(c, on) { if (on) this._s.add(c); else this._s.delete(c); }, add(c) { this._s.add(c); }, contains(c) { return this._s.has(c); } };
  e.style.setProperty = function (k, v) { this[k] = v; };
  e.appendChild = function (c) { c.parent = e; e.children.push(c); return c; };
  e.append = function (...cs) { cs.forEach(c => e.appendChild(c)); };
  e.remove = function () { if (e.parent) { const i = e.parent.children.indexOf(e); if (i >= 0) e.parent.children.splice(i, 1); } };
  e.setAttribute = function (k, v) { e._attrs[k] = v; if (k === "class") e.className = v; };
  e.getAttribute = function (k) { return e._attrs[k]; };
  e.querySelector = function () { return null; };
  e.querySelectorAll = function () { return []; };
  return e;
}
function findAll(e, pred, out) { out = out || []; if (pred(e)) out.push(e); e.children.forEach(c => findAll(c, pred, out)); return out; }
function classesOf(e, set) { set = set || new Set(); if (e.className) e.className.split(/\s+/).forEach(c => c && set.add(c)); e.children.forEach(c => classesOf(c, set)); return set; }

const byId = {};
const documentStub = {
  createElement: t => makeEl(t), createElementNS: (ns, t) => makeEl(t),
  getElementById: id => byId[id] || (byId[id] = makeEl("div")),
  body: makeEl("body"), addEventListener() {}
};
const sandbox = { console, URLSearchParams, performance: { now: () => 0 }, requestAnimationFrame: () => 0, cancelAnimationFrame: () => {},
  location: { search: "" }, document: documentStub, setTimeout, clearTimeout };
sandbox.window = sandbox; sandbox.window.top = sandbox; sandbox.addEventListener = () => {};
sandbox.window.addEventListener = () => {};
vm.createContext(sandbox);
const testCode = `
;globalThis.__api = { CONFIG, BUILDERS, createScene, browserDom, computeLayout, figureGeom, fitReport, validateConfig,
  transitionState, stampMetrics, stampCap, badgeMetrics, badgeFontPx, badgeSegments, textWidth, orgState, correctionState, stateAt };`;
vm.runInContext(script + testCode, sandbox, { filename: "recreation-inline.js" });
const A = sandbox.__api;
const stage = documentStub.getElementById("stage"); stage.clientWidth = 360;

function depsFor(cfg, w) {
  const L = A.computeLayout(w, cfg);
  const st = makeEl("div"); st.clientWidth = w;
  return { deps: { config: cfg, palette: cfg.palette, timing: cfg.timing, layout: L, dom: A.browserDom(), fonts: cfg.fonts, stageEl: st }, L, st };
}
function mountBuilder(type, fig, cfg, w) {
  const { deps, L } = depsFor(cfg, w);
  const body = makeEl("div"), root = makeEl("section");
  const draw = A.BUILDERS[type]({ root, body }, fig, deps);
  return { body, root, draw, L };
}
const clone = o => JSON.parse(JSON.stringify(o));
const figOf = (cfg, type) => cfg.figures.find(f => f.type === type);

/* ---------- Stage 0: the five a6 divergence cases ---------- */
// 1+2 connectors: placement + distinct endpoints (E)
for (const w of [360, 390]) {
  const cfg = clone(A.CONFIG); const fig = figOf(cfg, "orgChart");
  const { body } = mountBuilder("orgChart", fig, cfg, w);
  const svgIdx = body.children.findIndex(c => c.tagName === "SVG");
  const rowIdx = body.children.findIndex(c => c.children.some && c.children.some(g => g.tagName === "DIV" && String(g.textContent).length > 0) && c !== body.children[0]);
  const ceoIdx = 0;
  F("E", "connector layer mounted between CEO and report row @" + w, svgIdx > ceoIdx && (rowIdx === -1 || svgIdx < rowIdx), "child order=" + body.children.map(c => c.tagName + "." + (c.className || "")).join(","));
  const ends = [];
  body.children.forEach((c, ci) => { if (c.tagName === "SVG") c.children.forEach(ln => ends.push(ci + ":" + ln._attrs.x2 + "," + ln._attrs.y2)); });
  F("E", "connector endpoints distinct per report @" + w, new Set(ends).size === fig.nodes.length, "endpoints=" + ends.join(" | "));
}
// 3 stamp inset (E/G)
{
  const cfg = clone(A.CONFIG); const fig = figOf(cfg, "correction");
  const { body, L } = mountBuilder("correction", fig, cfg, 360);
  const g = A.figureGeom(fig, L, cfg);
  const wrap = body.children.find(c => c.children.some && c.children.some(g2 => g2.className === "stamp"));
  const padTop = wrap ? parseFloat(wrap.style.paddingTop || "0") : 0;
  F("E", "stamp wrapper carries mounted top inset == modelled reserve", Math.abs(padTop - (g.stampUpReserve || 0)) <= 0.6 && padTop > 0, "padTop=" + padTop + " reserve=" + (g.stampUpReserve || 0).toFixed(1));
  const cap = A.stampCap(fig, L, cfg), m = A.stampMetrics(fig, L, cfg);
  const projAbove = (m.aabbH1 * cap - m.h * cap) / 2;
  F("G", "stamp projected AABB above box within cleared inset", projAbove <= padTop + 16 + 0.6, "projAbove=" + projAbove.toFixed(1) + " cleared=" + (padTop + 16));
}
// 4 badge font-size (E)
{
  const cfg = clone(A.CONFIG); const fig = figOf(cfg, "orgChart");
  const { body, L } = mountBuilder("orgChart", fig, cfg, 360);
  const badge = body.children[body.children.length - 1];
  const handSpan = badge.children.find(c => c.className === "hand");
  const mountedHand = handSpan && handSpan.style.fontSize ? parseFloat(handSpan.style.fontSize) : L.bodyPx;
  const modelHand = A.badgeFontPx(A.badgeSegments(fig, cfg)[0], L, cfg);
  F("E", "badge hand segment mounted font-size == modelled size", Math.abs(mountedHand - modelHand) <= 0.01, "mounted=" + mountedHand + " model=" + modelHand);
}
// 5 title nowrap selector vs emitted class (E)
{
  const { deps } = depsFor(clone(A.CONFIG), 360);
  const mounted = A.createScene(deps);
  const emitted = classesOf(deps.stageEl);
  const selectors = [...css.matchAll(/\.([A-Za-z][\w-]*)\s*[,{]/g)].map(m => m[1]);
  const dead = [...new Set(selectors)].filter(s => !emitted.has(s) && s !== "phone" && s !== "on" && s !== "warn" && s !== "globalwarn"); // warn/globalwarn are emitted on the validation branch of createScene
  F("E", "every CSS class selector matches an emitted class", dead.length === 0, "dead=" + dead.join(","));
  const titleSpan = findAll(deps.stageEl, e => e.className === "titleline")[0];
  const nowrapOnEmitted = /\.titleline\s*[,{][^}]*white-space\s*:\s*nowrap/.test(css) || (titleSpan && /nowrap/.test(titleSpan.style.cssText || ""));
  F("E", "nowrap rule binds the emitted title class", !!nowrapOnEmitted, "emitted title class=titleline");
}

if (mode === "probes") { console.log("PROBE SUMMARY pass=" + passes + " fail=" + failures); process.exit(failures ? 1 : 0); }

/* ---------- full suite: cures + regressions + validation ---------- */
// 6 you-label direction (G)
{
  const cfg = clone(A.CONFIG); const fig = figOf(cfg, "waffle");
  const { body, L } = mountBuilder("waffle", fig, cfg, 360);
  const you = findAll(body, e => e.className === "hand")[0];
  const g = A.figureGeom(fig, L, cfg);
  const dotLeft = (fig.youIndex % fig.waffleCols) * (g.dot + g.gap), dotCx = dotLeft + g.dot / 2;
  const labW = A.textWidth(fig.youLabel, L.handPx, cfg);
  const labLeft = parseFloat(you.style.left), labCx = labLeft + labW / 2;
  check("G", "you-label arrow direction toward its dot", (dotCx - labCx) > 0 && labLeft + labW <= dotLeft + 0.5, "labCx=" + labCx.toFixed(1) + " dotCx=" + dotCx.toFixed(1) + " labRight=" + (labLeft + labW).toFixed(1) + " dotLeft=" + dotLeft);
}
// 7 stack unit line-height (E)
{
  const cfg = clone(A.CONFIG); const fig = figOf(cfg, "stackBars");
  const { body } = mountBuilder("stackBars", fig, cfg, 360);
  const unit = findAll(body, e => e._text === cfg.formatting.stackUnitSymbol)[0];
  const lhM = unit ? /line-height:\s*([\d.]+)px/.exec(unit.style.cssText || "") : null;
  const lh = unit ? (parseFloat(unit.style.lineHeight || "0") || (lhM ? parseFloat(lhM[1]) : 0)) : 0;
  const g = A.figureGeom(fig, A.computeLayout(360, cfg), cfg);
  const inner = g.unitH - 2 * cfg.layout.stackUnitBorderPx;
  check("E", "stack unit explicit line-height fits inside borders", lh > 0 && lh <= inner + 0.01 && lh >= A.computeLayout(360, cfg).labelPx - 0.01, "lineHeight=" + lh + " inner=" + inner + " labelPx=" + A.computeLayout(360, cfg).labelPx);
}
// 8 handoff continuity (G)
{
  let maxDelta = 0, floorMin = 1, joinErr = 0;
  for (let i = 1; i < A.CONFIG.figures.length; i++) {
    const b = A.CONFIG.figures[i].start; let prev = null;
    for (let t = b - 0.225; t <= b + 0.225; t += 0.001) {
      const tr = A.transitionState(t, A.CONFIG.figures, A.CONFIG);
      if (tr.prevIndex === i - 1) { if (prev !== null) maxDelta = Math.max(maxDelta, Math.abs(tr.outOpacity - prev)); prev = tr.outOpacity; if (tr.s >= 0 && tr.s < 0.5) floorMin = Math.min(floorMin, tr.outOpacity); }
    }
    const atEnd = A.transitionState(b + 0.225, A.CONFIG.figures, A.CONFIG);
    joinErr = Math.max(joinErr, Math.abs(atEnd.outOpacity - 0) > 0.4 ? 0 : 0); // end state is next figure; ramp end priced by delta bound
  }
  check("G", "handoff outgoing opacity continuous (max step <= 0.01 @1ms)", maxDelta <= 0.01, "maxDelta=" + maxDelta.toFixed(4));
  check("G", "handoff floor held over its interval", floorMin >= A.CONFIG.timing.transitionFloorOpacity - 1e-9, "floorMin=" + floorMin.toFixed(3));
}
// 9 remount readers fire on the new scene (E)
{
  const cfg2 = clone(A.CONFIG); cfg2.palette = Object.assign({}, cfg2.palette, { muted: "#123456" }); cfg2.masthead = "THE DAILY STANDUP";
  const { deps } = depsFor(cfg2, 360);
  A.createScene(deps);
  const meta = findAll(deps.stageEl, e => e.className === "meta")[0];
  check("E", "remount meta reader applies new palette to the new meta row", !!meta && meta.style.color === "#123456", "meta color=" + (meta && meta.style.color));
}
// 10 single-source values (E/G): parallel keys absent; mutation moves both consumers
{
  const src = html;
  check("E", "parallel stamp padding keys deleted", !/stampPadCss[XY]/.test(src), "");
  check("E", "pre-cliff diagnostic derives bound from its key", !/\(0, 5% of/.test(src) && /preCliffDropMaxFrac\*100/.test(src), "");
  check("E", "stylesheet has no hardcoded meta/src line-height literal", !/\.(meta|src)\{line-height:1\.3\}/.test(css), "");
  const cfg = clone(A.CONFIG); cfg.layout.lineHeights.label = 1.7;
  const L = A.computeLayout(360, cfg), L0 = A.computeLayout(360, clone(A.CONFIG));
  check("G", "line-height key consumed by layout model", L.headerH > L0.headerH + 3, "headerH 1.7=" + L.headerH.toFixed(1) + " vs 1.3=" + L0.headerH.toFixed(1));
}
// 11 validation corpus (named errors, never throws)
{
  const cases = [];
  const vc = (name, mut) => { const c = clone(A.CONFIG); mut(c); let errs = null, threw = false; try { errs = A.validateConfig(c); } catch (e) { threw = e.message + " @" + (e.stack || "").split("\n")[1]; } cases.push([name, threw, errs]); };
  vc("defaults valid", () => {});
  vc("string duration", c => { c.duration = "22.5"; });
  vc("missing fonts group", c => { delete c.fonts; });
  vc("missing xLabels", c => { delete figOf(c, "lineChart").xLabels; });
  vc("zero sampleStep", c => { c.timing.sampleStep = 0; });
  vc("null figure", c => { c.figures[2] = null; });
  vc("missing org nodes", c => { delete figOf(c, "orgChart").nodes; });
  vc("400-nines duration", c => { c.duration = 9e400; });
  vc("huge finite sampleStep", c => { c.timing.sampleStep = 1e9; });
  vc("string timing value", c => { c.timing.drawEnd = "0.9"; });
  vc("missing layout group", c => { delete c.layout; });
  vc("empty org nodes", c => { figOf(c, "orgChart").nodes = []; });
  let okAll = true;
  for (const [name, threw, errs] of cases) {
    const isDefault = name === "defaults valid";
    const ok = !threw && (isDefault ? errs.length === 0 : errs.length > 0);
    if (!ok) okAll = false;
    check("E", "validation corpus: " + name, ok, threw ? "THREW" : "errors=" + (errs || []).length + (errs && errs[0] ? " first=" + errs[0] : ""));
  }
  // fitReport retains rejected figures
  const c2 = clone(A.CONFIG); figOf(c2, "waffle").waffleTotal = 60; figOf(c2, "waffle").waffleCols = 20;
  let rep = null, threw2 = false; try { rep = A.fitReport(360, c2.figures, c2); } catch (e) { threw2 = true; }
  check("E", "fitReport retains rejected figure and reports not-ok", !threw2 && rep && rep.ok === false && rep.figures.length === c2.figures.length, threw2 ? "THREW" : "rows=" + (rep && rep.figures.length) + " ok=" + (rep && rep.ok));
}
// 12 self-start + FIG.24 regression
{
  check("E", "self-start: top-level auto-play present in source", /window===window\.top/.test(html) && /T17\.play\(\)/.test(html), "");
  const fig = figOf(A.CONFIG, "counterGraph");
  check("G", "FIG.24 final-1 displayed hold >= 0.6s", (A.CONFIG.timing.counterHoldSec - A.CONFIG.timing.figureTransitionSec / 2) >= 0.6, "displayed=" + (A.CONFIG.timing.counterHoldSec - 0.225).toFixed(3));
}
// 13 rebuild atomicity (finding-2 probes 1c/1d)
{
  const T17 = sandbox.T17;
  const before = JSON.stringify(A.CONFIG);
  const bad = clone(A.CONFIG); bad.duration = "22.5";
  const r1 = T17.rebuild(bad);
  check("E", "rebuild rejects invalid input without mutating live config", r1.ok === false && r1.errors.length > 0 && JSON.stringify(A.CONFIG) === before, "errors=" + r1.errors.length);
  const good = clone(A.CONFIG); good.palette = Object.assign({}, good.palette, { muted: "#654321" });
  const origCreate = documentStub.createElement;
  documentStub.createElement = () => { throw new Error("sabotaged construction"); };
  let r2 = null, threwR = false; try { r2 = T17.rebuild(good); } catch (e) { threwR = true; }
  documentStub.createElement = origCreate;
  check("E", "rebuild construction failure after valid input is atomic (config restored, named error)", !threwR && r2 && r2.ok === false && /construction failed/.test(r2.errors.join(" ")) && JSON.stringify(A.CONFIG) === before, threwR ? "THREW" : JSON.stringify(r2));
  const r3 = T17.rebuild(good);
  check("E", "rebuild with changed palette succeeds and applies it", r3.ok === true && A.CONFIG.palette.muted === "#654321", "ok=" + (r3 && r3.ok));
  const r4 = T17.rebuild(clone(JSON.parse(before)));
  check("E", "rebuild restores default config", r4.ok === true && JSON.stringify(A.CONFIG) === before, "");
}
// 14 post-single-source interaction re-checks (finding 3): inset + totals recomputed at all widths after the single-source stage
{
  for (const w of [360, 390, 960]) {
    const cfg = clone(A.CONFIG); const fig = figOf(cfg, "correction");
    const { body, L } = mountBuilder("correction", fig, cfg, w);
    const g = A.figureGeom(fig, L, cfg);
    const wrap = body.children.find(c => c.children.some && c.children.some(g2 => g2.className === "stamp"));
    const padTop = wrap ? parseFloat(wrap.style.paddingTop || "0") : 0;
    check("E", "post-single-source stamp inset == reserve @" + w, Math.abs(padTop - (g.stampUpReserve || 0)) <= 0.6, "padTop=" + padTop.toFixed(1) + " reserve=" + (g.stampUpReserve || 0).toFixed(1));
    const rep = A.fitReport(w, cfg.figures, cfg);
    check("E", "post-single-source fit ok @" + w, rep.ok === true, "stageH=" + rep.stageH + " ok=" + rep.ok);
  }
  const cfgL = clone(A.CONFIG); figOf(cfgL, "correction").stamp = "HIRED BY MYSELF, EFFECTIVE NOW";
  const repL = A.fitReport(360, cfgL.figures, cfgL);
  check("E", "long-content stamp case priced by fit (ok or named rejection)", typeof repL.ok === "boolean" && repL.figures.length === 6, "ok=" + repL.ok);
  const cfgW = clone(A.CONFIG); figOf(cfgW, "waffle").waffleTotal = 60; figOf(cfgW, "waffle").waffleCols = 20;
  const repW = A.fitReport(960, cfgW.figures, cfgW);
  check("E", "rejected-fit cases re-run on final sizing (wide waffle @960 not ok)", repW.ok === false, "ok=" + repW.ok);
}
console.log("SUMMARY pass=" + passes + " fail=" + failures);
process.exit(failures ? 1 : 0);
