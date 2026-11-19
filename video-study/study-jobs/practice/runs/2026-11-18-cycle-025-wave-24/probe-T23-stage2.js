"use strict";
/* Stage-2 probes: separate-parts label construction + span-structure line counting.
   Read-only. Usage: node probe-T23-stage2.js <htmlPath> */
const fs = require("fs");
const html = fs.readFileSync(process.argv[2], "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadPure(src) {
  const m = src.match(/<script>([\s\S]*?)<\/script>/);
  const mod = { exports: {} };
  new Function("module", "exports", m[1].replace(/"use strict";/, "") + "\n;return module.exports;")(mod, mod.exports);
  return mod.exports;
}
const P = loadPure(html);
const cfg = P.resolveConfig("");
/* separator-inside-title: parts travel separately */
if (typeof P.splitTwoLinesNT === "function") {
  const lines = P.splitTwoLinesNT(cfg, "07", "THE DAILY · STANDUP");
  ok("NT split exists and yields 2 lines", lines.length === 2, JSON.stringify(lines));
  ok("NT line1 carries number + first title words", lines[0].indexOf("07") === 0, lines[0]);
  ok("NT title separator preserved as content", (lines.join(" ").match(/·/g) || []).length >= 2, lines.join(" | "));
  const pol = P.labelPolicy(cfg, "07", "THE DAILY · STANDUP", 110, 13.31, 60);
  ok("labelPolicy two-line from parts", pol.mode === "two-line" && pol.lines.length === 2, pol.mode + " " + JSON.stringify(pol.lines));
} else { ok("NT split exists", false, "splitTwoLinesNT not exported"); }
/* DOM fixture: Range reports 4 rects for any tab content (the predecessor
   counting defect's condition); span structure says 2 lines. */
function makeEl(tagName) {
  const el = { tagName: tagName, children: [], style: {}, dataset: {}, className: "", clientWidth: 0, clientHeight: 100,
    scrollWidth: 0, scrollHeight: 0, offsetHeight: 20, offsetWidth: 0, parentElement: null, _text: "",
    classList: { _s: {}, add: function (c) { this._s[c] = 1; }, remove: function (c) { delete this._s[c]; }, contains: function (c) { return !!this._s[c]; } },
    appendChild: function (c) { c.parentElement = el; el.children.push(c); return c; },
    querySelectorAll: function (sel) { const out = []; (function walk(n) { n.children.forEach(function (ch) { if (sel === ".tab" && ch.className === "tab") out.push(ch); walk(ch); }); })(el); return out; },
    addEventListener: function () {} };
  Object.defineProperty(el, "textContent", { get: function () { return el._text; }, set: function (v) { el._text = String(v); el.children.length = 0; } });
  Object.defineProperty(el, "innerHTML", { get: function () { return ""; }, set: function () { el.children.length = 0; } });
  Object.defineProperty(el, "firstChild", { get: function () { return el.children[0] || (el._text ? {} : null); } });
  return el;
}
const stage = makeEl("div"); stage.clientWidth = 360;
const byId = { stage: stage, zoomwrap: makeEl("div"), header: makeEl("div"), grid: makeEl("div"), warn: makeEl("div"), cutscene: makeEl("div") };
byId.zoomwrap.style = new Proxy({}, { get: function (t, k) { return t[k]; }, set: function (t, k, v) { t[k] = v; return true; } });
let now = 0; const timers = new Map(); let seq = 0; const rafQ = [];
const sandbox = { console: console, performance: { now: function () { return now; } },
  setTimeout: function (fn, ms) { const id = ++seq; timers.set(id, { fn: fn, at: now + Math.max(0, ms || 0) }); return id; },
  clearTimeout: function (id) { timers.delete(id); },
  requestAnimationFrame: function (fn) { rafQ.push(fn); return rafQ.length; }, cancelAnimationFrame: function () {},
  document: { getElementById: function (id) { return byId[id]; }, createElement: function (t) { return makeEl(t.toUpperCase()); },
    createRange: function () { return { selectNodeContents: function () {}, getClientRects: function () { return [{}, {}, {}, {}]; } }; }, body: makeEl("BODY") },
  location: { search: "" }, addEventListener: function () {} };
sandbox.window = sandbox;
const m2 = html.match(/<script>([\s\S]*?)<\/script>/);
new Function("window", "document", "performance", "setTimeout", "clearTimeout", "requestAnimationFrame", "cancelAnimationFrame", "console", "location", "module",
  m2[1].replace(/"use strict";/, ""))(sandbox, sandbox.document, sandbox.performance, sandbox.setTimeout, sandbox.clearTimeout, sandbox.requestAnimationFrame, sandbox.cancelAnimationFrame, console, sandbox.location, undefined);
const tabs = byId.grid.querySelectorAll(".tab");
console.log("INFO tabs=" + tabs.length);
const modes = tabs.map(function (t) { return t.dataset.mode + "/" + t.dataset.lines; });
console.log("INFO modes@Range4: " + modes.join(" "));
ok("12 tabs rendered", tabs.length === 12, tabs.length);
ok("no tab counted above 2 lines under Range-4 fixture", tabs.every(function (t) { return Number(t.dataset.lines) <= 2; }), modes.join(" "));
ok("two-line tabs survive counting (not forced number-only)", tabs.some(function (t) { return t.dataset.mode === "two-line" && t.dataset.lines === "2"; }), modes.join(" "));
console.log("== stage2 probes: " + checks + " checks, " + fails + " fails ==");
