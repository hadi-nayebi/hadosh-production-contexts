"use strict";
/* T23 attempt 8 — STAGE 1 suite (C1 presented endpoint). Harness = fake-DOM
   frame-boundary harness driving the ACTUAL production code (attempt-7 form). */
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
function endpointResetGap(env, rec, endT) {
  let ci = -1;
  for (let i = 0; i < env.commits.length; i++) if (env.commits[i].value === rec.transform && env.commits[i].t >= endT - 60) { ci = i; break; }
  if (ci < 0) return null;
  for (let j = ci + 1; j < env.commits.length; j++) if (env.commits[j].value === "none") return { commit: env.commits[ci], reset: env.commits[j] };
  return null;
}
const fin = loadPure("recreation.html"); const M = fin.M, cfg = M.resolveConfig("");
const prev = loadPure("recreation-attempt-7.html"); const P7 = prev.M;
ck("S1 timeline nominal cycle 2190ms", M.buildTimeline(cfg).totalMs === 2190);
/* before-probe on attempt-7 source: camera-first claim does NOT schedule its own reset */
(function () {
  const env = loadDOM("recreation-attempt-7.html", "");
  env.advance(725, "raf-first"); env.now = 735; env.runFrame();
  const pres = presentations(env);
  env.timers = []; const commitsBefore = env.commits.length;
  env.runFrame();
  const resetAfter = env.commits.slice(commitsBefore).some(function (c) { return c.value === "none"; });
  console.log("  A7 before-probe: cam-first pres=" + pres.length + " pending=" + env.window.__t23Presentation.pending() + " reset-by-frame-alone=" + resetAfter);
  ck("S1 BEFORE (attempt 7): camera-first claim leaves the reset to the timer (no frame-only reset)", pres.length >= 1 && !resetAfter);
})();
/* after: camera-first claim schedules the deferred reset itself */
(function () {
  const env = loadDOM("recreation.html", "");
  env.advance(725, "raf-first"); env.now = 735; env.runFrame();
  const pres = presentations(env);
  env.timers = []; const commitsBefore = env.commits.length;
  env.runFrame();
  const resetAfter = env.commits.slice(commitsBefore).some(function (c) { return c.value === "none"; });
  ck("S1 C1 camera-first: claim schedules its own deferred reset (frame alone resets, timers cleared)", pres.length === 1 && resetAfter && env.window.__t23Presentation.pending() === false);
})();
/* tick-first full run, both orders, gap >= 1 frame */
["tick-first", "raf-first"].forEach(function (order) {
  const env = loadDOM("recreation.html", "");
  env.advance(2190 * 3 + 400, order);
  const pres = presentations(env);
  let allGaps = pres.length === 9;
  pres.forEach(function (rec, i) {
    const endT = Math.floor(i / 3) * 2190 + (i % 3 + 1) * 730;
    const g = endpointResetGap(env, rec, endT);
    if (!g || !(g.reset.frame > g.commit.frame)) allGaps = false;
  });
  ck("S1 C1 " + order + ": 9 presentations over 3 cycles, every reset >=1 frame boundary after its commit", allGaps && new Set(pres.map(function (r) { return r.key; })).size === 9);
});
/* pending wins: while a presentation is pending, timers alone never reset */
(function () {
  const env = loadDOM("recreation.html", "");
  env.advance(725, "tick-first"); env.now = 732; env.runTimers();
  const pending = env.window.__t23Presentation.pending();
  const commitsAtPending = env.commits.length;
  env.now = 900; env.runTimers(); env.runTimers();
  const noReset = !env.commits.slice(commitsAtPending).some(function (c) { return c.value === "none"; });
  env.runFrame();
  const resetAfterFrame = env.commits.slice(commitsAtPending).some(function (c) { return c.value === "none"; });
  ck("S1 C1 pending-wins: no reset from timer/reconciliation while pending; reset only at the frame boundary", pending && noReset && resetAfterFrame);
})();
/* nonzero hold/pause variant (A-C020-2): endpoint presented before reset and held through the hold */
(function () {
  const env = loadDOM("recreation.html", "?holdZoomMs=200&loopPauseMs=100");
  env.advance(1000, "tick-first");
  const pres = presentations(env);
  const epCommit = env.commits.filter(function (c) { return pres.length && c.value === pres[0].transform; })[0];
  const resetDuringHold = env.commits.some(function (c) { return c.value === "none" && epCommit && c.t > epCommit.t && c.t < 930; });
  ck("S1 C1 nonzero hold/pause: endpoint committed at dive end, no reset during the 200ms hold, presentation logged",
    pres.length === 1 && !!epCommit && !resetDuringHold);
  console.log("  nonzero-hold: pres=" + pres.length + " epCommitT=" + (epCommit && epCommit.t) + " (claim narrowed: exactly-one-frame holds only at hold/pause 0; with hold>0 the endpoint remains presented through the hold)");
})();
console.log("STAGE1 TOTAL: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILS: " + fails.join(" | "));
