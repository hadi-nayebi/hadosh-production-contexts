"use strict";
/* Stage-5 probes: header refinement wrap, approach transform target, completion channels. Read-only. */
const fs = require("fs");
const html = fs.readFileSync(process.argv[2], "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadDOM(search, headerMetrics) {
  function makeEl(tagName) {
    const el = { tagName: tagName, children: [], style: {}, dataset: {}, className: "", clientWidth: 0, clientHeight: 100,
      scrollWidth: 0, scrollHeight: 0, offsetHeight: 20, offsetWidth: 0, parentElement: null, _text: "",
      classList: { _s: {}, add: function (c) { this._s[c] = 1; }, remove: function (c) { delete this._s[c]; }, contains: function (c) { return !!this._s[c]; } },
      appendChild: function (c) { c.parentElement = el; el.children.push(c); return c; },
      querySelectorAll: function (sel) { const out = []; (function walk(n) { n.children.forEach(function (ch) { if (ch.className === sel.slice(1)) out.push(ch); walk(ch); }); })(el); return out; },
      addEventListener: function () {} };
    Object.defineProperty(el, "textContent", { get: function () { return el._text; }, set: function (v) { el._text = String(v); el.children.length = 0; } });
    Object.defineProperty(el, "innerHTML", { get: function () { return ""; }, set: function () { el.children.length = 0; } });
    Object.defineProperty(el, "firstChild", { get: function () { return el.children[0] || (el._text ? {} : null); } });
    return el;
  }
  const stage = makeEl("div"); stage.clientWidth = 360;
  const header = makeEl("div"); if (headerMetrics) { header.scrollWidth = headerMetrics.sw; header.clientWidth = 360; header.scrollHeight = headerMetrics.sh; }
  const byId = { stage: stage, zoomwrap: makeEl("div"), header: header, grid: makeEl("div"), warn: makeEl("div"), cutscene: makeEl("div") };
  byId.zoomwrap.style = new Proxy({}, { get: function (t, k) { return t[k]; }, set: function (t, k, v) { t[k] = v; return true; } });
  let now = 0; const timers = new Map(); let seq = 0; const rafQ = []; const listeners = {};
  const sandbox = { console: console, performance: { now: function () { return now; } },
    setTimeout: function (fn, ms) { const id = ++seq; timers.set(id, { fn: fn, at: now + Math.max(0, ms || 0) }); return id; },
    clearTimeout: function (id) { timers.delete(id); },
    requestAnimationFrame: function (fn) { rafQ.push(fn); return rafQ.length; }, cancelAnimationFrame: function () {},
    document: { getElementById: function (id) { return byId[id]; }, createElement: function (t) { return makeEl(t.toUpperCase()); },
      createRange: function () { return { selectNodeContents: function () {}, getClientRects: function () { return [{}]; } }; }, body: makeEl("BODY") },
    location: { search: search || "" }, addEventListener: function (ev, fn) { (listeners[ev] = listeners[ev] || []).push(fn); } };
  sandbox.window = sandbox;
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  new Function("window", "document", "performance", "setTimeout", "clearTimeout", "requestAnimationFrame", "cancelAnimationFrame", "console", "location", "module",
    m[1].replace(/"use strict";/, ""))(sandbox, sandbox.document, sandbox.performance, sandbox.setTimeout, sandbox.clearTimeout, sandbox.requestAnimationFrame, sandbox.cancelAnimationFrame, console, sandbox.location, undefined);
  function advance(ms) { const end = now + ms; while (now < end) { now = Math.min(end, now + 5);
    let best = null, bid = null; timers.forEach(function (t, id) { if (t.at <= now && (best === null || t.at < best.at)) { best = t; bid = id; } });
    if (best) { timers.delete(bid); best.fn(); }
    const q = rafQ.splice(0); q.forEach(function (f) { f(now); }); } }
  return { byId: byId, sandbox: sandbox, advance: advance };
}
/* approach transform target: during approach the GRID carries the transform */
(function () {
  const env = loadDOM("");
  env.advance(100); /* mid-approach (0..365) */
  const gridT = env.byId.grid.style.transform || "";
  const zoomT = env.byId.zoomwrap.style.transform || "";
  ok("approach transform lands on grid element", gridT.indexOf("scale") !== -1, "grid=" + gridT);
  ok("zoomwrap carries no approach transform", zoomT === "" || zoomT === "none", "zoom=" + zoomT);
  env.advance(300); /* t=400: mid-dive of appearance 0 — grid transform cleared at dive entry */
  ok("grid transform cleared on dive entry", (env.byId.grid.style.transform || "") === "", JSON.stringify(env.byId.grid.style.transform));
})();
/* completion channels incl. the occlusion pair (completed + illustrated target) */
(function () {
  const env = loadDOM("?filled=12");
  const panels = env.byId.grid.children;
  ok("12 panels rendered", panels.length === 12, panels.length);
  const bars = env.byId.grid.querySelectorAll(".donebar");
  ok("every completed panel carries the completion bar", bars.length === 12, bars.length);
  const p12 = panels[11];
  const channels = [];
  if (p12.dataset.completedFace === "tint") channels.push("face-tint");
  if (p12.children.some(function (c) { return c.className === "donebar"; })) channels.push("completion-bar");
  const tab = p12.children.filter(function (c) { return c.className === "tab"; })[0];
  if (tab && tab.dataset.state === "completed") channels.push("tab-state");
  ok("occlusion pair (completed+target panel 12) has >=2 art-independent channels", channels.length >= 2, channels.join("+"));
  ok("bar is outside the art element (sibling, in flow)", p12.children.indexOf(p12.children.filter(function (c) { return c.className === "donebar"; })[0]) > p12.children.indexOf(p12.children.filter(function (c) { return c.className === "art"; })[0]), "");
})();
/* header refinement wrap: measured overflow forces wrap -> wrap line-height + refreshed lines */
(function () {
  const env = loadDOM("", { sw: 9999, sh: 40 });
  const h = env.byId.header;
  ok("refinement wrap engages", h.dataset.headerMode === "wrap", h.dataset.headerMode);
  ok("refinement wrap applies wrap line-height", h.style.lineHeight === "1.15", h.style.lineHeight);
  ok("refinement wrap refreshes grown line metadata", Number(h.dataset.headerLines) >= 2, h.dataset.headerLines);
})();
console.log("== stage5 probes: " + checks + " checks, " + fails + " fails ==");
