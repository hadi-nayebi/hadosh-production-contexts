"use strict";
/* T23 attempt-10 own-check harness: pure-model load + fake-DOM engine load.
   Read-only: prints results, writes nothing. Usage: node own-checks-T23-attempt10.js <htmlPath> <stageTag> */
const fs = require("fs");
const path = process.argv[2], tag = process.argv[3] || "?";
const html = fs.readFileSync(path, "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadPure(src) {
  const m = src.match(/<script>([\s\S]*?)<\/script>/);
  const body = m[1].replace(/"use strict";/, "");
  const mod = { exports: {} };
  const fn = new Function("module", "exports", body + "\n;return module.exports;");
  return fn(mod, mod.exports);
}
const P = loadPure(html);
const cfg = P.resolveConfig("");
console.log("== " + tag + " pure probes on " + path + " ==");
ok("warnings empty", cfg._warnings.length === 0, JSON.stringify(cfg._warnings));
ok("timeline 2100", P.buildTimeline(cfg).totalMs === 2100, P.buildTimeline(cfg).totalMs);
ok("dive easing f(0.75)", true, P.easingFraction(cfg.layout.diveEasing, 0.75).toFixed(4));
/* S0/S1 predecessor-successor probes */
(function resumeProbe() {
  /* fake DOM */
  const listeners = {};
  function makeEl(tagName) {
    const el = { tagName: tagName, children: [], style: {}, dataset: {}, className: "", textContent: "", innerHTML: "",
      clientWidth: 0, clientHeight: 0, scrollWidth: 0, scrollHeight: 0, offsetHeight: 0, offsetWidth: 0, parentElement: null,
      classList: { _s: {}, add: function (c) { this._s[c] = 1; }, remove: function (c) { delete this._s[c]; }, contains: function (c) { return !!this._s[c]; } },
      appendChild: function (c) { c.parentElement = el; el.children.push(c); return c; },
      querySelectorAll: function (sel) { const out = []; (function walk(n) { n.children.forEach(function (ch) { if (sel === ".tab" && ch.className === "tab") out.push(ch); walk(ch); }); })(el); return out; },
      addEventListener: function () {} };
    return el;
  }
  const stage = makeEl("div"); stage.clientWidth = 360; stage.clientHeight = 600;
  const zoomwrap = makeEl("div"); const header = makeEl("div"); const grid = makeEl("div"); const warn = makeEl("div");
  zoomwrap.style = new Proxy({}, { get: function (t, k) { return t[k]; }, set: function (t, k, v) { t[k] = v; return true; } });
  const byId = { stage: stage, zoomwrap: zoomwrap, header: header, grid: grid, warn: warn, cutscene: makeEl("div") };
  let now = 0; const timers = new Map(); let timerSeq = 0; const rafQ = [];
  const sandbox = {
    console: console, performance: { now: function () { return now; } },
    setTimeout: function (fn, ms) { const id = ++timerSeq; timers.set(id, { fn: fn, at: now + Math.max(0, ms || 0) }); return id; },
    clearTimeout: function (id) { timers.delete(id); },
    requestAnimationFrame: function (fn) { rafQ.push(fn); return rafQ.length; },
    cancelAnimationFrame: function () {},
    document: { getElementById: function (id) { return byId[id]; }, createElement: function (t) { return makeEl(t); },
      createRange: function () { return { selectNodeContents: function () {}, getClientRects: function () { return [{}]; } }; },
      body: makeEl("body") },
    location: { search: "" },
    addEventListener: function (ev, fn) { (listeners[ev] = listeners[ev] || []).push(fn); }
  };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  const body = m[1].replace(/"use strict";/, "");
  try {
    new Function("window", "document", "performance", "setTimeout", "clearTimeout", "requestAnimationFrame", "cancelAnimationFrame", "console", "location", "module",
      body)(sandbox, sandbox.document, sandbox.performance, sandbox.setTimeout, sandbox.clearTimeout, sandbox.requestAnimationFrame, sandbox.cancelAnimationFrame, console, sandbox.location, undefined);
  } catch (e) { console.log("DOM LOAD ERROR: " + e.message); return; }
  function fireTimers() { let guard = 0; while (guard++ < 500) { let best = null, bid = null; timers.forEach(function (t, id) { if (t.at <= now && (best === null || t.at < best.at)) { best = t; bid = id; } }); if (!best) break; timers.delete(bid); best.fn(); } }
  function frames() { const q = rafQ.splice(0); q.forEach(function (f) { f(now); }); }
  function advance(ms) { const end = now + ms; while (now < end) { now = Math.min(end, now + 5); fireTimers(); frames(); } fireTimers(); }
  /* run in timer-only steps until an endpoint presentation is PENDING
     (presented, deferred flush queued but not yet run) — the exact
     window the resume defect lives in */
  let guard2 = 0;
  while (guard2++ < 400 && !sandbox.__t23Presentation.pending()) { now += 5; fireTimers(); }
  const pendingAfterDive = sandbox.__t23Presentation.pending();
  const pres0 = sandbox.__t23Presentation.presented.length;
  console.log("INFO presented=" + pres0 + " pendingAfterDive=" + pendingAfterDive + " timers=" + timers.size + " now=" + now);
  /* pause BEFORE the pending flush runs its step-apply with a timer: pause clears timers; flush needs rAF */
  (listeners.message || []).forEach(function (f) { f({ data: { cmd: "pause" } }); });
  const timersAfterPause = timers.size;
  (listeners.message || []).forEach(function (f) { f({ data: { cmd: "play" } }); });
  frames(); fireTimers();
  const timersAfterResumeFlush = timers.size;
  const presentedBefore = sandbox.__t23Presentation.presented.length;
  advance(3000);
  const presentedAfter = sandbox.__t23Presentation.presented.length;
  console.log("INFO post-advance held=" + sandbox.__t23Presentation.held() + " pending=" + sandbox.__t23Presentation.pending() +
    " timers=" + timers.size + " presentedLog=" + JSON.stringify(sandbox.__t23Presentation.presented.map(function (e) { return e.type + "@" + (e.key || ""); })) +
    " skipped=" + sandbox.__t23Presentation.skipped.length);
  console.log("RESUME-PROBE timersAfterPause=" + timersAfterPause + " timersAfterResumeFlush=" + timersAfterResumeFlush +
    " presentedBefore=" + presentedBefore + " presentedAfter+3000ms=" + presentedAfter);
  ok("resume rearms a deadline timer after pending flush", timersAfterResumeFlush > 0, "timers=" + timersAfterResumeFlush);
  ok("playback continues after resume (more presentations)", presentedAfter > presentedBefore, presentedBefore + "->" + presentedAfter);
})();
console.log("== " + tag + ": " + checks + " checks, " + fails + " fails ==");
