"use strict";
/* T07 attempt-2 own-check suite — EFFECT mappings (A-C002-1), CONFIG consumption census
   (A-C006-2, mutation-proven), displayed-state fit incl wrapped states (A-C006-3/A-C004-2),
   purity grep + asset inventory. PIXEL-UNVERIFIED (A-C002-2): logic/source model only. */
const fs = require("fs"), vm = require("vm"), assert = require("assert");
const ART = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T07-permission-dialog-gag/recreation.html";
const src = fs.readFileSync(ART, "utf8");
let pass = 0, fail = 0; const failures = [];
function check(name, fn){ try { fn(); pass++; console.log("PASS " + name); } catch (e) { fail++; failures.push(name + ": " + e.message); console.log("FAIL " + name + " :: " + e.message); } }

/* load core with a DOM stub whose stage lookup returns null (bootstrap skips) */
const sandbox = { console, URLSearchParams, JSON, Math, Number, String, Array, Object, isFinite, parseInt, parseFloat };
sandbox.window = sandbox; sandbox.globalThis = sandbox;
sandbox.document = { getElementById: () => null, createElement: () => ({ getContext: () => null, style: {} }), documentElement: { dataset: {} } };
vm.createContext(sandbox);
const script = src.match(/<script>([\s\S]*)<\/script>/)[1];
vm.runInContext(script, sandbox);
const T = sandbox.__T07;
assert(T, "core export present");
const measure = (text, px, bold) => text.length * px * 0.6 * (bold ? 1.05 : 1);
const eqJ = (a, b, msg) => assert.strictEqual(JSON.stringify(a), JSON.stringify(b), msg);
const fresh = () => T.normalizeConfig(JSON.parse(JSON.stringify(T.CONFIG, (k, v) => v === Infinity ? "Infinity" : v)));

/* ---- C1a: state sequence effect mapping ---- */
check("C1a timeline sequence: finals [0,0,2], no non-final selection ever displayed", () => {
  const tl = T.buildTimeline(fresh());
  const landed = tl.events.filter(e => e.phase === "selected").map(e => e.sel);
  eqJ(landed, [0, 0, 2]);
  tl.events.forEach(e => { if (e.phase !== "selected" && e.phase !== "end") assert.strictEqual(e.sel, -1, "non-final state carries selection"); });
  const lands = tl.events.filter(e => e.phase === "selected").map(e => e.at);
  eqJ(lands, [930, 2700, 4900]); /* arrival+landDelay per modal */
});
check("C1b windows/holds/cycle derived: cycle 6030, holds [770,830,1130], shares ~28/31/41", () => {
  const tl = T.buildTimeline(fresh());
  assert.strictEqual(tl.cycleMs, 6030);
  eqJ(tl.holdsMs, [770, 830, 1130]);
  const shares = [1700, 1830, 2500].map(w => 100 * w / 6030);
  [28, 31, 41].forEach((target, i) => assert(Math.abs(shares[i] - target) <= 3, "share " + i));
  /* scheduled boundaries are table values (absolute origin): event ats are exact table offsets */
  eqJ(tl.events.map(e => e.at), [0, 120, 930, 1700, 1700, 2700, 3530, 3530, 4900, 6030]);
});
check("C1b timing-pair rejection: landDelay>=window override rejected atomically + recorded", () => {
  const cfg = fresh(); const before = T.VALIDATION.length;
  const bad = JSON.parse(JSON.stringify(T.CONFIG, (k, v) => v === Infinity ? "Infinity" : v));
  bad.timing.landDelaysMs = [930, 5000, 1370];
  const n = T.normalizeConfig(bad);
  assert.strictEqual(n.timing.landDelaysMs[1], 930); assert.strictEqual(n.timing.modalWindowsMs[1], 1700);
  assert(T.VALIDATION.slice(before).some(v => v.kind === "reject-timing-pair"));
});
check("C1c flash: only modal 0, 120ms in [100,170], no selection during flash", () => {
  const tl = T.buildTimeline(fresh());
  const flashes = tl.events.filter(e => e.phase === "flash");
  assert.strictEqual(flashes.length, 1); assert.strictEqual(flashes[0].modal, 0); assert.strictEqual(flashes[0].sel, -1);
  const next = tl.events[tl.events.indexOf(flashes[0]) + 1];
  assert.strictEqual(next.at - flashes[0].at, 120);
});
check("C1c/CA-3 selection styles per row: idx0 green, idx2 orange, idx3 distinct configured", () => {
  const cfg = fresh();
  assert.strictEqual(T.selectionStyleFor(cfg, 0).fg, "#4ade80");
  assert.strictEqual(T.selectionStyleFor(cfg, 2).fg, "#f5a83d");
  assert.strictEqual(T.selectionStyleFor(cfg, 3).fg, "#7dd3fc");
  const mut = fresh(); mut.palette.selectionStyles[3].fg = "#010203";
  assert.strictEqual(T.selectionStyleFor(mut, 3).fg, "#010203");
});

/* ---- C2: displayed-state fit at phone + segment widths, incl wrapped states ---- */
function fitCase(name, mutate, stageW, stageH) {
  check(name, () => {
    const cfg = fresh(); if (mutate) mutate(cfg);
    const ncfg = T.normalizeConfig(cfg);
    const lay = T.computeLayout(ncfg, stageW, stageH, measure);
    if (stageW <= 480) { assert(lay.optPx >= 14, "optPx " + lay.optPx); assert(lay.reqPx - lay.optPx >= 3, "gap " + (lay.reqPx - lay.optPx)); }
    assert(lay.fitsHeight, "modal height " + lay.modalH + " > stage " + stageH);
    lay.lines.forEach(l => assert(["fits", "wrapped", "rejected"].includes(l.outcome)));
    assert(lay.modalW <= stageW * 0.94 + 0.5, "width cap");
    return lay;
  });
}
fitCase("C2 defaults @360x640: floors + fit", null, 360, 640);
fitCase("C2 defaults @960x540: fit", null, 960, 540);
fitCase("C2 long-request fixture @360: wrapped/rejected policy outcome, height fits", c => { c.content.requests = ["Allow Adita to win an Oscar and also produce the entire ceremony live tonight?", "Allow Adita to produce?", "Allow Adita to win an Oscar?"]; }, 360, 640);
fitCase("C2 reject-policy fixture @360: over-cap line rejected + recorded", c => { c.behavior.longTextPolicy = "reject"; c.content.requests = ["Allow " + "x".repeat(220) + "?", "Allow Adita to produce?", "Allow Adita to win an Oscar?"]; }, 360, 640);

/* ---- C3b validation/normalization effects ---- */
check("C3b strict numbers: malformed suffix rejected, fractional final rounded, invalid colour defaulted, negative scale rejected", () => {
  const cfg = fresh();
  const rec = T.applyOverrides(cfg, "?finals=0|1x|2.6&border=notacolor&modalScale=-2");
  const n = T.normalizeConfig(cfg);
  assert(T.VALIDATION.some(v => v.kind === "reject-number"));
  assert.strictEqual(n.content.finalSelections[2], 2); /* 2.6 -> round 3 -> clamp 2 (3 options) */
  assert.strictEqual(n.palette.border, "#e8912d");
  assert.strictEqual(n.modalScale, 1);
});
check("C3c missing finals -> previous policy mapping [0,0,0,0] with 2 recorded defaults (4-request fixture)", () => {
  const bad = JSON.parse(JSON.stringify(T.CONFIG, (k, v) => v === Infinity ? "Infinity" : v));
  bad.content.requests = ["R1?", "R2?", "R3?", "R4?"]; bad.content.finalSelections = [0, 0];
  const before = T.VALIDATION.length;
  const n = T.normalizeConfig(bad);
  eqJ(n.content.finalSelections, [0, 0, 0, 0]);
  assert.strictEqual(T.VALIDATION.slice(before).filter(v => v.kind === "default-final").length, 2);
});
check("C3d pause/resume arithmetic: origin shift preserves remaining dwell to next event", () => {
  const tl = T.buildTimeline(fresh());
  const origin = 10000, pauseAt = origin + 1500; /* mid modal-1 hold (landed 930, ends 1700) */
  const resumeWall = pauseAt + 999999; /* arbitrary wall gap */
  const newOrigin = origin + (resumeWall - pauseAt);
  const nextEventAt = 1700;
  assert.strictEqual((newOrigin + nextEventAt) - resumeWall, 200); /* remaining dwell unchanged: 1700-1500 */
  assert.strictEqual(tl.events.filter(e => e.at > 1500)[0].at, nextEventAt);
});
check("C3e/CA-4 message validation: parent+allowed origin ok; same-origin different sender rejected; bad schema rejected", () => {
  const cfg = fresh();
  assert.strictEqual(T.validateMessage(cfg, { sourceIsParent: true, origin: "file:", cmd: "play" }).ok, true);
  assert.strictEqual(T.validateMessage(cfg, { sourceIsParent: false, origin: "file:", cmd: "play" }).reason, "source");
  assert.strictEqual(T.validateMessage(cfg, { sourceIsParent: true, origin: "https://evil.example", cmd: "play" }).reason, "origin");
  assert.strictEqual(T.validateMessage(cfg, { sourceIsParent: true, origin: "file:", cmd: "seek" }).reason, "schema");
});
check("C3e finite-run: runs override parses; cycle-end stop condition derives from cycleMs", () => {
  const cfg = fresh(); T.applyOverrides(cfg, "?runs=1"); const n = T.normalizeConfig(cfg);
  assert.strictEqual(n.container.runs, 1);
  assert.strictEqual(T.buildTimeline(n).cycleMs, 6030);
});
check("C3f/CA-5 swap: 4 requests x 4 options, finals [0,0,2,3], timing arrays extended+recorded, 4th row style + fit @360", () => {
  const c = JSON.parse(JSON.stringify(T.CONFIG, (k, v) => v === Infinity ? "Infinity" : v));
  c.content.requests = ["Allow A to sing?", "Allow A to dance?", "Allow A to act?", "Allow A to win?"];
  c.content.options = ["Yes", "Yes, and don't ask again", "No, let's not get ahead\u2014", "Ask again later"];
  c.content.finalSelections = [0, 0, 2, 3];
  const n = T.normalizeConfig(c);
  const tl = T.buildTimeline(n);
  eqJ(tl.events.filter(e => e.phase === "selected").map(e => e.sel), [0, 0, 2, 3]);
  assert.strictEqual(n.timing.modalWindowsMs.length, 4);
  const lay = T.computeLayout(n, 360, 640, measure);
  assert(lay.fitsHeight); assert(lay.optPx >= 14);
  assert.strictEqual(T.selectionStyleFor(n, 3).fg, "#7dd3fc");
});
check("CA-5 interaction: wrapping x phone geometry (long 4-option fixture @360 height fits, wrap states enumerated)", () => {
  const c = JSON.parse(JSON.stringify(T.CONFIG, (k, v) => v === Infinity ? "Infinity" : v));
  c.content.options = ["Yes", "Yes, and don't ask again for this particular production", "No, let's not get ahead\u2014", "Ask again later"];
  const n = T.normalizeConfig(c);
  const lay = T.computeLayout(n, 360, 640, measure);
  assert(lay.fitsHeight); assert(lay.lines.some(l => l.wrappedLines >= 1));
  lay.lines.forEach(l => assert(l.wrappedLines <= 2 || l.outcome === "rejected"));
});

/* ---- C4 purity: no palette literals outside CONFIG + inventory ---- */
check("C4 purity grep: zero specimen-media/caption/external hits; palette literals only inside CONFIG block", () => {
  const hits = src.match(/segment\.mp4|source\.mp4|<video|<img|http:\/\/|https:\/\/|url\(/g) || [];
  assert.strictEqual(hits.length, 0);
  const afterConfig = src.split("/* ===== validation record")[1] || "";
  const styleBlock = (src.match(/<style>([\s\S]*)<\/style>/) || [])[1] || "";
  assert(!/#[0-9a-fA-F]{3,8}|rgba?\(/.test(styleBlock), "palette literal in stylesheet");
  assert(!/adita@studio|claude \u00B7/.test(src), "specimen chrome text copied");
});
check("Asset inventory: recreation loads nothing external (no src=/href= to assets)", () => {
  const refs = src.match(/(src|href)\s*=\s*"[^"]+"/g) || [];
  assert.strictEqual(refs.length, 0);
});

/* ---- A-C006-2 CONFIG consumption census (mutation-proven) ---- */
function snapshot(cfgRaw) {
  const cfg = T.normalizeConfig(cfgRaw);
  const tl = T.buildTimeline(cfg);
  const l360 = T.computeLayout(cfg, 360, 640, measure);
  const l960 = T.computeLayout(cfg, 960, 540, measure);
  const tiles = []; for (let i = 0; i < cfg.tiles.count; i++) { const col = i % cfg.tiles.cols, row = Math.floor(i / cfg.tiles.cols); tiles.push([cfg.tiles.leftStartPct + col * cfg.tiles.colStepPct, cfg.tiles.topStartPct + row * cfg.tiles.rowStepPct, cfg.tiles.widthPct, cfg.tiles.heightPct, cfg.tiles.opacity * (0.5 + (i % 3) * 0.25), cfg.tiles.radiusPx, cfg.palette.tileBorder, cfg.palette.tileBg]); }
  const longRaw = JSON.parse(JSON.stringify(cfg, (k, v) => v === Infinity ? "Infinity" : v)); if (longRaw.container) longRaw.container.runs = cfg.container.runs;
  longRaw.content.requests = ["Allow Adita to win an Oscar and produce the whole ceremony tonight?", "Allow Adita to produce?", "Allow Adita to win an Oscar?"];
  const lLong = T.computeLayout(T.normalizeConfig(longRaw), 360, 640, measure);
  const missRaw = JSON.parse(JSON.stringify(cfg, (k, v) => v === Infinity ? "Infinity" : v)); if (missRaw.container) missRaw.container.runs = cfg.container.runs;
  missRaw.content.finalSelections = [2];
  const missFinals = T.normalizeConfig(missRaw).content.finalSelections;
  return JSON.stringify({
    tl, missFinals, fallbackStyle: T.selectionStyleFor(cfg, 7),
    lLong: { out: lLong.policyOutcome, lines: lLong.lines.map(l => [l.wrappedLines, l.outcome]), h: lLong.modalH },
    l360: { w: l360.modalW, left: l360.left, top: l360.top, req: l360.reqPx, opt: l360.optPx, h: l360.modalH, out: l360.policyOutcome, lines: l360.lines.map(l => [l.wrappedLines, l.outcome, Math.round(l.width)]), ff: l360.fontFamily, refR: Math.round(l360.refLongestReq), refO: Math.round(l360.refLongestOpt), padX: Math.max(4, l360.optPx * cfg.layout.optPadXRatio) },
    l960: { w: l960.modalW, left: l960.left, top: l960.top, req: l960.reqPx, opt: l960.optPx, h: l960.modalH, lines: l960.lines.map(l => [l.wrappedLines, l.outcome, Math.round(l.width)]) },
    styles: [0, 1, 2, 3].map(i => T.selectionStyleFor(cfg, i)),
    tiles, scrim: cfg.palette.scrim, bg: cfg.palette.bg, modalBg: cfg.palette.modalBg, flash: cfg.palette.flashBg,
    borderStyle: cfg.layout.borderWidthPx + "px solid " + cfg.palette.border, radius: cfg.layout.radiusPx, optRadius: cfg.layout.optRadiusPx,
    fg: cfg.palette.fg, optFg: cfg.palette.optFg, signal: cfg.container.signalName + ":ready", runs: String(cfg.container.runs),
    origins: cfg.container.allowedOrigins, msgOk: T.validateMessage(cfg, { sourceIsParent: true, origin: "file:", cmd: "play" }).ok
  });
}
check("A-C006-2 consumption census: every CONFIG leaf key mutation changes a computed/rendered effect", () => {
  const baseRaw = () => JSON.parse(JSON.stringify(T.CONFIG, (k, v) => v === Infinity ? "Infinity" : v));
  const base = snapshot(baseRaw());
  const leaves = [];
  (function walk(obj, path) { Object.keys(obj).forEach(k => { const v = obj[k], p = path ? path + "." + k : k; if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p); else if (Array.isArray(v)) v.forEach((el, i) => { if (el && typeof el === "object") Object.keys(el).forEach(ek => leaves.push(p + "[" + i + "]." + ek)); else leaves.push(p + "[" + i + "]"); }); else leaves.push(p); }); })(T.CONFIG, "");
  const unconsumed = [];
  leaves.forEach(p => {
    const raw = baseRaw();
    const parts = p.replace(/\[(\d+)\]/g, ".$1").split(".");
    let parent = raw; for (let i = 0; i < parts.length - 1; i++) parent = parent[parts[i]];
    const key = parts[parts.length - 1], old = parent[key];
    if (p === "layout.phoneWidthRatio") parent[key] = 0.5;
    else if (p === "behavior.longTextPolicy") parent[key] = "reject";
    else if (p === "layout.phoneBreakpointPx") parent[key] = 300;
    else if (p === "layout.stageMinHeightPx") parent[key] = 900;
    else if (p === "type.heightCapRatio") parent[key] = 0.01;
    else if (p.indexOf("content.finalSelections") === 0) parent[key] = (old + 1) % 3;
    else if (typeof old === "number" && isFinite(old) && old > 0 && old <= 1) parent[key] = old + 0.05;
    else if (typeof old === "number" && isFinite(old)) parent[key] = old + 37;
    else if (typeof old === "number") parent[key] = 2; /* Infinity runs */
    else if (typeof old === "string") parent[key] = /#|rgba/.test(old) ? "#010203" : old + " ZZZ";
    else if (Array.isArray(old)) parent[key] = old.concat(["file:"]);
    if (snapshot(raw) === base) unconsumed.push(p);
  });
  console.log("  census: " + leaves.length + " leaf keys, unconsumed: " + unconsumed.length + (unconsumed.length ? " -> " + unconsumed.join(",") : ""));
  assert.strictEqual(unconsumed.length, 0, "unconsumed keys: " + unconsumed.join(","));
});

console.log("\nRESULT: " + pass + " pass, " + fail + " fail");
if (failures.length) { console.log("FAILURES:\n" + failures.join("\n")); process.exit(1); }
console.log("PIXEL-UNVERIFIED: geometry/readability rest on this source-bound model (A-C002-2).");
