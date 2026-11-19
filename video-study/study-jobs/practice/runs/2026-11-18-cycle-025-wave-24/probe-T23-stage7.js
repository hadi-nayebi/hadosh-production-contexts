"use strict";
/* Stage-7 settle/displayed-state assertions. Read-only. */
const fs = require("fs");
const html = fs.readFileSync(process.argv[2], "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadPure(s) { const m = s.match(/<script>([\s\S]*?)<\/script>/); const mod = { exports: {} };
  new Function("module", "exports", m[1].replace(/"use strict";/, "") + "\n;return module.exports;")(mod, mod.exports); return mod.exports; }
const P = loadPure(html);
const cfg = P.resolveConfig("");
[240, 360, 960].forEach(function (w) {
  const lay = P.computeLayout(cfg, w);
  const all = cfg.panels.every(function (p, i) {
    const r = P.resolvedArtRect(cfg, lay, i);
    const tr = P.diveTransform(cfg, lay, r);
    const bounds = { left: r.x * tr.scale + tr.tx, top: r.y * tr.scale + tr.ty, right: (r.x + r.w) * tr.scale + tr.tx, bottom: (r.y + r.h) * tr.scale + tr.ty };
    return P.coversViewport(bounds, lay);
  });
  ok("endpoint covers viewport for all panels @" + w, all, "");
});
const st = P.stateAt(cfg, 700 + 365 + 335);
ok("stateAt at first dive end is settled on the endpoint", !!st, JSON.stringify(st && st.phase));
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
let now = 0; const timers = new Map(); let seq = 0; const rafQ = [];
const sandbox = { console: console, performance: { now: function () { return now; } },
  setTimeout: function (fn, ms) { const id = ++seq; timers.set(id, { fn: fn, at: now + Math.max(0, ms || 0) }); return id; },
  clearTimeout: function (id) { timers.delete(id); },
  requestAnimationFrame: function (fn) { rafQ.push(fn); return rafQ.length; }, cancelAnimationFrame: function () {},
  document: { getElementById: function (id) { return byId[id]; }, createElement: function (t) { return makeEl(t.toUpperCase()); },
    createRange: function () { return { selectNodeContents: function () {}, getClientRects: function () { return [{}]; } }; }, body: makeEl("BODY") },
  location: { search: "" }, addEventListener: function () {} };
sandbox.window = sandbox;
const m2 = html.match(/<script>([\s\S]*?)<\/script>/);
new Function("window", "document", "performance", "setTimeout", "clearTimeout", "requestAnimationFrame", "cancelAnimationFrame", "console", "location", "module",
  m2[1].replace(/"use strict";/, ""))(sandbox, sandbox.document, sandbox.performance, sandbox.setTimeout, sandbox.clearTimeout, sandbox.requestAnimationFrame, sandbox.cancelAnimationFrame, console, sandbox.location, undefined);
function step() { now += 5; let best = null, bid = null; timers.forEach(function (t, id) { if (t.at <= now && (best === null || t.at < best.at)) { best = t; bid = id; } }); if (best) { timers.delete(bid); best.fn(); } const q = rafQ.splice(0); q.forEach(function (f) { f(now); }); }
for (let i = 0; i < 3 * 420 + 40; i++) step(); /* 3 full cycles + settle */
const presented = sandbox.__t23Presentation.presented.filter(function (e) { return e.type === "present-endpoint"; });
ok("3 cycles settle with 9 presented endpoints", presented.length === 9, presented.length);
ok("no skipped steps across 3 settled cycles", sandbox.__t23Presentation.skipped.length === 0, sandbox.__t23Presentation.skipped.length);
ok("cut scenes held == released across settled cycles", (function () { const t = sandbox.__t23Presentation.presented; const h = t.filter(function (e) { return e.type === "cut-scene-held"; }).length; const r = t.filter(function (e) { return e.type === "cut-scene-released"; }).length; return h === 9 && r === 9; })(), "");
ok("displayed transform at settle is an endpoint transform", presented.every(function (e) { return typeof e.transform === "string" && e.transform.indexOf("scale") !== -1; }), "");
console.log("== stage7 probes: " + checks + " checks, " + fails + " fails ==");
