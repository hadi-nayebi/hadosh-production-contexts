"use strict";
/* T23 attempt 8 — STAGE 4 suite (C6 restart · C7 skip-log · C8 resize precedence ·
   C10 handoff boundary) with per-cure before/after discriminating probes
   (Codex plan-review amendment 3). Score attribution stays BUNDLED. */
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
/* ---- C6 restart clears presentation state ---- */
(function () {
  const before = loadDOM("recreation-attempt-7.html", "");
  before.advance(2600, "tick-first"); before.msg("restart"); before.advance(2600, "tick-first");
  const bCount = presentations(before).filter(function (r) { return r.key === "0:0:dive"; }).length;
  const env = loadDOM("recreation.html", "");
  env.advance(2600, "tick-first"); env.msg("restart"); env.advance(2600, "tick-first");
  const aCount = presentations(env).filter(function (r) { return r.key === "0:0:dive"; }).length;
  console.log("  C6 before/after: presentations of key 0:0:dive across a restart — attempt7=" + bCount + " attempt8=" + aCount);
  ck("S4 C6 restart re-commits endpoints as a fresh start (attempt 7 retained stale keys: 1; attempt 8: 2)", bCount === 1 && aCount === 2);
})();
(function () {
  const env = loadDOM("recreation.html", "");
  env.advance(725, "tick-first"); env.now = 732; env.runTimers(); /* pending presentation */
  const wasPending = env.window.__t23Presentation.pending();
  env.msg("restart");
  const clearedPending = env.window.__t23Presentation.pending() === false;
  env.advance(2600, "tick-first");
  const keys = presentations(env).map(function (r) { return r.key; });
  ck("S4 C6 restart WHILE a reset is pending: pending cleared, cycle 0 re-presents all three endpoints, progress continues",
    wasPending && clearedPending && ["0:0:dive", "0:1:dive", "0:2:dive"].every(function (k) { return keys.indexOf(k) >= 0; }));
})();
/* ---- C7 skip-log completeness on the flush path (late entry across a pending endpoint) ---- */
(function () {
  const probe = function (file) {
    const env = loadDOM(file, "?holdZoomMs=200");
    env.advance(725, "tick-first"); env.now = 732; env.runTimers(); /* pending at dive-0 end */
    env.now += 1500; env.runFrame(); /* flush applies the then-current phase */
    return env.window.__t23Presentation.skipped;
  };
  const bSk = probe("recreation-attempt-7.html"), aSk = probe("recreation.html");
  const bHas = bSk.some(function (s) { return s.phase === "dive" && s.appearance === 1 && s.endpointPresented === false; });
  const aHas = aSk.some(function (s) { return s.phase === "dive" && s.appearance === 1 && s.endpointPresented === false; });
  console.log("  C7 before/after: flush-path skipped dive-appearance-1 logged — attempt7=" + bHas + " attempt8=" + aHas + " (attempt8 skipped entries: " + aSk.length + ")");
  ck("S4 C7 late entry across a pending endpoint: the deferred-apply path logs wholly-elapsed phases through logSkipped", !bHas && aHas);
})();
/* ---- C8 resize precedence ---- */
(function () {
  const probe = function (file) {
    const env = loadDOM(file, "");
    env.advance(725, "tick-first"); env.now = 732; env.runTimers();
    const pres = presentations(env);
    env.handlers.resize();
    const last = env.commits[env.commits.length - 1];
    return { env: env, pres: pres, lastIsEndpoint: pres.length === 1 && last && last.value === pres[0].transform };
  };
  const b = probe("recreation-attempt-7.html"), a = probe("recreation.html");
  console.log("  C8 before/after: last commit after resize-while-pending is the endpoint — attempt7=" + b.lastIsEndpoint + " attempt8=" + a.lastIsEndpoint);
  ck("S4 C8 resize while pending: render-first, endpoint re-committed from resolved geometry, no partial-dive transform replaces it", !b.lastIsEndpoint && a.lastIsEndpoint &&
    a.env.window.__t23Presentation.presented.some(function (r) { return r.type === "present-endpoint-rederived"; }));
  a.env.runFrame(); a.env.advance(1600, "tick-first");
  const keys = presentations(a.env).map(function (r) { return r.key; });
  ck("S4 C8 resize followed by reconciliation: exactly one presentation per key and subsequent progress continues",
    keys.filter(function (k) { return k === "0:0:dive"; }).length === 1 && keys.indexOf("0:1:dive") >= 0);
})();
/* ---- C10 handoff boundary ---- */
(function () {
  const c = M.resolveConfig("?cfg:handoff.holdOnComplete=true");
  const badB = M.resolveConfig("?cfg:handoff.holdOnComplete=yes");
  ck("S4 C10 boundary is configuration-visible: holdOnComplete route lands; malformed boolean warns and keeps the default",
    c.handoff.holdOnComplete === true && badB.handoff.holdOnComplete === false && badB._warnings.some(function (w) { return w.indexOf("handoff") >= 0; }));
  const off = loadDOM("recreation.html", "");
  off.advance(2190 * 2 + 100, "tick-first");
  ck("S4 C10 boundary disengaged (default): no hold, the loop runs two full cycles (6 presentations)", presentations(off).length === 6 && off.window.__t23Handoff.isHeld() === false);
  const env = loadDOM("recreation.html", "?cfg:handoff.holdOnComplete=true");
  let cbHit = null;
  env.window.__t23Handoff.onComplete(function (info) { cbHit = info; });
  env.advance(2300, "tick-first");
  const held = env.window.__t23Handoff.isHeld();
  const pres = presentations(env);
  const epLast = pres.length === 3 && env.commits[env.commits.length - 1].value === pres[2].transform;
  env.advance(1500, "tick-first");
  const stillHeld = env.window.__t23Handoff.isHeld() && presentations(env).length === 3;
  ck("S4 C10 engaged: final appearance's endpoint is held (no reset, no advance), completion callback fired with the held key",
    held && epLast && stillHeld && cbHit && cbHit.appearance === 2);
  const rel = env.window.__t23Handoff.release();
  env.advance(900, "tick-first");
  const keys = presentations(env).map(function (r) { return r.key; });
  ck("S4 C10 release: schedule resumes at the held dive's end — next cycle's first endpoint is presented, nothing replayed",
    rel === true && env.window.__t23Handoff.isHeld() === false && keys.indexOf("1:0:dive") >= 0 && keys.filter(function (k) { return k === "0:2:dive"; }).length === 1);
})();
console.log("STAGE4 TOTAL: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILS: " + fails.join(" | "));
