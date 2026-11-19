"use strict";
/* Stage-6 probes: cut-held scene, dive curve, approach easing key. Read-only. */
const fs = require("fs");
const html = fs.readFileSync(process.argv[2], "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadPure(s) { const m = s.match(/<script>([\s\S]*?)<\/script>/); const mod = { exports: {} };
  new Function("module", "exports", m[1].replace(/"use strict";/, "") + "\n;return module.exports;")(mod, mod.exports); return mod.exports; }
const P = loadPure(html);
const cfg = P.resolveConfig("");
ok("default resolve clean", cfg._warnings.length === 0, JSON.stringify(cfg._warnings));
ok("dive easing f(0.75) >= 0.55", P.easingFraction(cfg.layout.diveEasing, 0.75) >= 0.55, P.easingFraction(cfg.layout.diveEasing, 0.75).toFixed(4));
ok("dive duration unchanged", cfg.diveMs === 335 && P.buildTimeline(cfg).totalMs === 2100, cfg.diveMs);
(function () {
  const cA = P.resolveConfig("?cfg:layout.approachEasing=linear");
  const aChanged = P.approachTransformAt(cA, 0.5).fraction !== P.approachTransformAt(cfg, 0.5).fraction;
  const cD = P.resolveConfig("?cfg:layout.diveEasing=linear");
  const aUnchangedByDive = P.approachTransformAt(cD, 0.5).fraction === P.approachTransformAt(cfg, 0.5).fraction;
  ok("approach consumes approachEasing (not diveEasing)", aChanged && aUnchangedByDive, "approachFrac default=" + P.approachTransformAt(cfg, 0.5).fraction.toFixed(3) + " linear=" + P.approachTransformAt(cA, 0.5).fraction.toFixed(3));
})();
/* DOM: cut-held scene lifecycle + pause/resume inside the held window */
function makeEl(tagName) {
  const el = { tagName: tagName, children: [], style: {}, dataset: {}, className: "", clientWidth: 0, clientHeight: 100,
    scrollWidth: 0, scrollHeight: 0, offsetHeight: 20, offsetWidth: 0, parentElement: null, _text: "",
    classList: { _s: {}, add: function (c) { this._s[c] = 1; }, remove: function (c) { delete this._s[c]; }, contains: function (c) { return !!this._s[c]; } },
    appendChild: function (c) { c.parentElement = el; el.children.push(c); return c; },
    querySelectorAll: function (sel) { const out = []; (function walk(n) { n.children.forEach(function (ch) { if (ch.className === sel.slice(1)) out.push(ch); walk(ch); }); })(el); return out; },
    addEventListener: function () {} };
  Object.defineProperty(el, "textContent", { get: function () { return el._text; }, set: function (v) { el._text = String(v); el.children.length = 0; } });
  Object.defineProperty(el, "innerHTML", { get: function () { return el._html || ""; }, set: function (v) { el._html = String(v); el.children.length = 0; } });
  Object.defineProperty(el, "firstChild", { get: function () { return el.children[0] || (el._text ? {} : null); } });
  return el;
}
const stage = makeEl("div"); stage.clientWidth = 360;
const cutscene = makeEl("div"); cutscene.style.display = "none";
const byId = { stage: stage, zoomwrap: makeEl("div"), header: makeEl("div"), grid: makeEl("div"), warn: makeEl("div"), cutscene: cutscene };
byId.zoomwrap.style = new Proxy({}, { get: function (t, k) { return t[k]; }, set: function (t, k, v) { t[k] = v; return true; } });
let now = 0; const timers = new Map(); let seq = 0; const rafQ = []; const listeners = {};
const sandbox = { console: console, performance: { now: function () { return now; } },
  setTimeout: function (fn, ms) { const id = ++seq; timers.set(id, { fn: fn, at: now + Math.max(0, ms || 0) }); return id; },
  clearTimeout: function (id) { timers.delete(id); },
  requestAnimationFrame: function (fn) { rafQ.push(fn); return rafQ.length; }, cancelAnimationFrame: function () {},
  document: { getElementById: function (id) { return byId[id]; }, createElement: function (t) { return makeEl(t.toUpperCase()); },
    createRange: function () { return { selectNodeContents: function () {}, getClientRects: function () { return [{}]; } }; }, body: makeEl("BODY") },
  location: { search: "" }, addEventListener: function (ev, fn) { (listeners[ev] = listeners[ev] || []).push(fn); } };
sandbox.window = sandbox;
const m2 = html.match(/<script>([\s\S]*?)<\/script>/);
new Function("window", "document", "performance", "setTimeout", "clearTimeout", "requestAnimationFrame", "cancelAnimationFrame", "console", "location", "module",
  m2[1].replace(/"use strict";/, ""))(sandbox, sandbox.document, sandbox.performance, sandbox.setTimeout, sandbox.clearTimeout, sandbox.requestAnimationFrame, sandbox.cancelAnimationFrame, console, sandbox.location, undefined);
function fireTimers() { let g = 0; while (g++ < 500) { let best = null, bid = null; timers.forEach(function (t, id) { if (t.at <= now && (best === null || t.at < best.at)) { best = t; bid = id; } }); if (!best) break; timers.delete(bid); best.fn(); } }
function frames() { const q = rafQ.splice(0); q.forEach(function (f) { f(now); }); }
let guard = 0;
while (guard++ < 400 && !sandbox.__t23Presentation.pending()) { now += 5; fireTimers(); }
ok("pending window reached", sandbox.__t23Presentation.pending() === true, "now=" + now);
const scene = sandbox.__t23Cut.state().scene;
ok("cut scene held during the pending window", scene.visible === true && scene.target === 4, JSON.stringify(scene));
ok("cut scene carries the target panel art", (cutscene._html || "").indexOf("<svg") !== -1, (cutscene._html || "").length + "B");
/* pause inside the held window, resume: scene stays held until the flush applies */
(listeners.message || []).forEach(function (f) { f({ data: { cmd: "pause" } }); });
ok("scene still held while paused", sandbox.__t23Cut.state().scene.visible === true, "");
(listeners.message || []).forEach(function (f) { f({ data: { cmd: "play" } }); });
frames(); fireTimers();
ok("scene released after the resumed flush applies", sandbox.__t23Cut.state().scene.visible === false, "");
const types = sandbox.__t23Presentation.presented.map(function (e) { return e.type; });
ok("held precedes released in the presented log", types.indexOf("cut-scene-held") !== -1 && types.indexOf("cut-scene-released") > types.indexOf("cut-scene-held"), types.join(","));
console.log("== stage6 probes: " + checks + " checks, " + fails + " fails ==");
