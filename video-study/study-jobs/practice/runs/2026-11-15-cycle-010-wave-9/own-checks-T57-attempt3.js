"use strict";
/* Own-check suite — T57 attempt 3. Logic-level harness (stubbed DOM/canvas).
   Check names are neutral outcome statements. Asserts displayed-state effect
   mappings, per-key consumed effects, wrap states, validation diagnostics. */
const fs = require("fs");
const vm = require("vm");
const SRC_PATH = process.argv[2];
const src = fs.readFileSync(SRC_PATH, "utf8");
const scriptMatch = src.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) { console.log("FAIL no inline script"); process.exit(1); }
const scriptText = scriptMatch[1];
let pass = 0, fail = 0;
function ok(name, cond, extra) {
  if (cond) { pass++; console.log("PASS " + name); }
  else { fail++; console.log("FAIL " + name + (extra ? " :: " + extra : "")); }
}
function makeEl(id) {
  const el = { id, children: [], style: {}, textContent: "", className: "", clientWidth: 0 };
  el.style.setProperty = function (k, v) { this[k] = v; };
  el.appendChild = function (c) { this.children.push(c); return c; };
  Object.defineProperty(el, "innerHTML", { get() { return ""; }, set() { this.children = []; } });
  return el;
}
function loadInstance(width, search) {
  const els = {};
  ["stage","scene","card","quote","chip","speaker","occasion","glyph"].forEach(id => els[id] = makeEl(id));
  els.stage.clientWidth = width;
  const listeners = {};
  const meas = { measureText(t) { return { width: String(t).length * this._px * 0.5 }; }, _px: 12 };
  const documentStub = {
    documentElement: makeEl("html"),
    getElementById: id => els[id],
    createElement: tag => tag === "canvas"
      ? { getContext: () => ({ set font(f) { const m = /(\d+(?:\.\d+)?)px/.exec(f); if (m) meas._px = parseFloat(m[1]); }, measureText: t => meas.measureText(t) }) }
      : makeEl(tag),
    fonts: null
  };
  const windowStub = { addEventListener: (ev, fn) => { listeners[ev] = fn; } };
  const sandbox = { document: documentStub, window: windowStub, location: { search: search || "" },
    requestAnimationFrame: () => {}, URLSearchParams, console };
  sandbox.window.document = documentStub;
  vm.createContext(sandbox);
  vm.runInContext(scriptText, sandbox);
  return { api: sandbox.window.__T57 || sandbox.__T57, els, listeners, documentStub };
}
const cfg = o => "?config=" + encodeURIComponent(JSON.stringify(o));
const approx = (a, b) => Math.abs(a - b) < 1e-9;

/* ---------- default instance, phone width ---------- */
const A = loadInstance(360, "");
const api = A.api, els = A.els;
ok("api exposed", !!api);
const tl = api.timeline();
ok("timeline has 2 quotes", tl.length === 2, "n=" + tl.length);
ok("scheduled starts are the configured entrance times", tl[0].startMs === 0 && tl[1].startMs === 11000,
  JSON.stringify(tl.map(e => e.startMs)));
ok("second attribution resolved in config", api.CONFIG.quotes[1].speaker === "Semafor" && /private commitments/.test(api.CONFIG.quotes[1].occasion));

/* ---------- displayed states at the ten sampled instants ---------- */
const states = [
  [0, 0], [500, 0.5], [1000, 1], [8000, 1], [8500, 0.5],
  [9000, 0], [11000, 0], [11500, 1 / 3], [12500, 1], [14000, 1]
];
let statesOk = true, statesDetail = "";
for (const [t, want] of states) {
  api.renderAt(t);
  const got = parseFloat(els.card.style.opacity);
  if (!approx(got, want)) { statesOk = false; statesDetail += t + "ms:" + got + "!=" + want + " "; }
}
ok("displayed opacity matches the sampled-state table at ten instants", statesOk, statesDetail);
api.renderAt(500);
ok("first card partial at 500ms (strictly between 0 and 1)", parseFloat(els.card.style.opacity) > 0 && parseFloat(els.card.style.opacity) < 1);
api.renderAt(11500);
ok("second card faint at 11500ms (partial, below one half)", parseFloat(els.card.style.opacity) > 0 && parseFloat(els.card.style.opacity) < 0.5,
  els.card.style.opacity);

/* ---------- unit entrance: effective opacity equals progress ---------- */
let effOk = true;
for (const t of [0, 250, 500, 750, 1000]) {
  api.renderAt(t);
  const parent = parseFloat(els.card.style.opacity);
  const line = els.quote.children.length ? parseFloat(els.quote.children[0].style.opacity) : 1;
  const chip = parseFloat(els.chip.style.opacity), glyph = parseFloat(els.glyph.style.opacity);
  const progress = t / 1000;
  if (!approx(parent * line, progress) || !approx(parent * chip, progress) || !approx(parent * glyph, progress)) effOk = false;
  if (!approx(line, 1) || !approx(chip, 1) || !approx(glyph, 1)) effOk = false;
}
ok("unit entrance: displayed effective opacity of line, attribution and glyph equals entrance progress", effOk);

/* ---------- exit: shared scene transform + anchor ---------- */
api.renderAt(8500);
ok("exit midpoint: scene layer scale is midway to its configured end value",
  approx(parseFloat(/scale\(([^)]+)\)/.exec(els.scene.style.transform)[1]), 1 + (api.CONFIG.exitScaleTo - 1) * 0.5),
  els.scene.style.transform);
ok("exit midpoint: card opacity is one half", approx(parseFloat(els.card.style.opacity), 0.5));
api.renderAt(9000);
ok("exit complete: scene layer scale reaches its configured end value",
  approx(parseFloat(/scale\(([^)]+)\)/.exec(els.scene.style.transform)[1]), api.CONFIG.exitScaleTo));
api.renderAt(12500);
ok("second card anchor positions its center at the configured fractions",
  els.card.style.left === "37%" && els.card.style.top === "66%", els.card.style.left + "," + els.card.style.top);
ok("scene layer scale resets for the second card", els.scene.style.transform === "scale(1)", els.scene.style.transform);

/* ---------- containment model at both anchors (entrance / hold / exit) ---------- */
function bounds(entry, W) {
  const cardW = W * api.CONFIG.layout.cardWidthFrac;
  const cx = (typeof entry.quote.anchorXFrac === "number" ? entry.quote.anchorXFrac : api.CONFIG.layout.cardAnchorXFrac) * W;
  const cy = (typeof entry.quote.anchorYFrac === "number" ? entry.quote.anchorYFrac : api.CONFIG.layout.cardAnchorYFrac) * entry.wrapped.stageHPx;
  return { x0: cx - cardW / 2, x1: cx + cardW / 2, y0: cy - entry.wrapped.cardHeightPx / 2, y1: cy + entry.wrapped.cardHeightPx / 2,
           stageH: entry.wrapped.stageHPx };
}
let containOk = true, containDetail = "";
tl.forEach((e, i) => {
  const b = bounds(e, 360);
  // hold: scale 1; entrance: scale < 1 contracts about the center; exit: scene scale <= 1 contracts toward stage center
  if (!(b.x0 >= 0 && b.y0 >= 0 && b.x1 <= 360 && b.y1 <= b.stageH)) { containOk = false; containDetail += "q" + i + " " + JSON.stringify(b); }
});
ok("both cards fully inside the stage at hold (contracting transforms keep entrance and exit inside)", containOk, containDetail);

/* ---------- fit + attribution wrap states ---------- */
const w0 = tl[0].wrapped, w1 = tl[1].wrapped;
ok("complete card fits height budget at 360px (first card)", w0.cardHeightPx <= w0.stageHPx * api.CONFIG.layout.cardMaxHeightFrac + 1e-9,
  w0.cardHeightPx + " vs " + w0.stageHPx);
ok("complete card fits height budget at 360px (second card)", w1.cardHeightPx <= w1.stageHPx * api.CONFIG.layout.cardMaxHeightFrac + 1e-9);
const chipPx360 = Math.max(api.CONFIG.type.chipMinPx, 360 * api.CONFIG.type.chipFrac);
ok("attribution size at 360px >= 13px", chipPx360 >= 13, chipPx360.toFixed(2));
ok("attribution wrap simulation: first card one line", w0.chipLines === 1, "chipLines=" + w0.chipLines);
ok("attribution wrap simulation: second card two lines", w1.chipLines === 2, "chipLines=" + w1.chipLines);
const longChip = api.chip("A Very Long Named News Organisation With Several Words",
  "on an exceptionally long and detailed occasion description that keeps going well past two lines of card text");
ok("attribution wrap simulation is unbounded: a long attribution reaches three or more lines", longChip.lines >= 3, "lines=" + longChip.lines);
ok("attribution line height is set from its own configured value",
  els.stage.style["--chip-line-height"] === String(api.CONFIG.type.chipLineHeight) ||
  els.stage.style["--chip-line-height"] === api.CONFIG.type.chipLineHeight,
  String(els.stage.style["--chip-line-height"]));
const chipLH2 = loadInstance(360, cfg({ type: { chipLineHeight: 2 } }));
ok("attribution line height value changes the modelled card height",
  chipLH2.api.timeline()[0].wrapped.cardHeightPx !== w0.cardHeightPx,
  chipLH2.api.timeline()[0].wrapped.cardHeightPx + " vs " + w0.cardHeightPx);

/* ---------- contrast floors ---------- */
ok("ink contrast >= 4.5", api.contrast(api.CONFIG.palette.ink, api.CONFIG.palette.card) >= 4.5);
ok("speaker contrast >= 4.5", api.contrast(api.CONFIG.palette.chipInk, api.CONFIG.palette.card) >= 4.5);
ok("occasion contrast >= 4.5", api.contrast(api.CONFIG.palette.occasion, api.CONFIG.palette.card) >= 4.5);
ok("accent contrast >= 2", api.contrast(api.CONFIG.palette.chip, api.CONFIG.palette.card) >= 2);
ok("page background set on document root", A.documentStub.documentElement.style["--page-bg"] === api.CONFIG.pageBg);
ok("no duration extension needed for the default schedule", api.diagnostics().extendedDurationMs === 0 && api.effectiveDuration() === 14000,
  JSON.stringify(api.diagnostics()));

/* ---------- staggered variant: parent carries exit only ---------- */
const stag = loadInstance(360, cfg({ entranceMode: "staggered" }));
stag.api.renderAt(500);
ok("staggered entrance: parent opacity is 1 during the entrance (children carry it)",
  approx(parseFloat(stag.els.card.style.opacity), 1), stag.els.card.style.opacity);
stag.api.renderAt(8500);
const stagParent = parseFloat(stag.els.card.style.opacity);
const stagLine = stag.els.quote.children.length ? parseFloat(stag.els.quote.children[0].style.opacity) : 0;
ok("staggered exit midpoint: parent carries the exit fade and the line carries its entrance only",
  approx(stagParent, 0.5) && approx(stagLine, 1), stagParent + "/" + stagLine);

/* ---------- validation diagnostics ---------- */
const unsorted = loadInstance(360, cfg({ quotes: [
  { text: "Later first.", speaker: "A", occasion: "x", enterAtMs: 5000, enterDurMs: 500, exitStartMs: null },
  { text: "Earlier second.", speaker: "B", occasion: "y", enterAtMs: 1000, enterDurMs: 500, exitStartMs: null }
] }));
ok("out-of-order schedule is rejected and reported, previous timeline unchanged",
  unsorted.api.diagnostics().scheduleValid === false && unsorted.api.diagnostics().validationErrors.length >= 1 &&
  unsorted.api.timeline().length === 0, JSON.stringify(unsorted.api.diagnostics()));
const overlap = loadInstance(360, cfg({ quotes: [
  { text: "One.", speaker: "A", occasion: "x", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 8000, exitDurMs: 1000 },
  { text: "Two.", speaker: "B", occasion: "y", enterAtMs: 8500, enterDurMs: 500, exitStartMs: null }
] }));
ok("overlapping schedule is flagged in diagnostics",
  overlap.api.diagnostics().overlapWarnings.some(w => w.type === "overlap"), JSON.stringify(overlap.api.diagnostics().overlapWarnings));
const earlyExit = loadInstance(360, cfg({ quotes: [
  { text: "One.", speaker: "A", occasion: "x", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 500, exitDurMs: 500 }
] }));
ok("an exit beginning before its entrance completes is flagged in diagnostics",
  earlyExit.api.diagnostics().overlapWarnings.some(w => w.type === "exit-before-entrance-complete"),
  JSON.stringify(earlyExit.api.diagnostics().overlapWarnings));
const stagSeq = loadInstance(360, cfg({ lifecycleMode: "sequence", entranceMode: "staggered",
  quotes: [ { text: "Short one.", speaker: "A", occasion: "x" }, { text: "Next one.", speaker: "B", occasion: "y" } ] }));
const sst = stagSeq.api.timeline();
const wantSpan = sst[0].enterDurMs + sst[0].wrapped.lines.length * stagSeq.api.CONFIG.lineMs +
  stagSeq.api.CONFIG.chipFadeMs + stagSeq.api.CONFIG.holdMs;
ok("staggered sequence span runs to attribution completion plus hold",
  sst.length === 2 && sst[1].startMs === sst[0].startMs + wantSpan,
  JSON.stringify(sst.map(e => e.startMs)) + " want span " + wantSpan);
const overflowInst = loadInstance(360, cfg({ layout: { cardMaxHeightFrac: 0.2 },
  quotes: [ { text: "A considerably longer quotation that wraps across several measured lines of card text and keeps going with more and more words to fill the card.", speaker: "A Long Speaker Name", occasion: "on a long occasion", enterAtMs: 0, enterDurMs: 500, exitStartMs: null } ] }));
ok("fit overflow at the size floor is reported in diagnostics",
  overflowInst.api.diagnostics().fitOverflow.length >= 1 && overflowInst.api.diagnostics().fitOverflowMaxPx > 0,
  JSON.stringify(overflowInst.api.diagnostics().fitOverflow));
const lightPanel = loadInstance(360, cfg({ palette: { card: "#eeeeee" } }));
ok("unrepairable contrast on a light panel is reported in diagnostics",
  lightPanel.api.diagnostics().contrastFailures.length >= 1, JSON.stringify(lightPanel.api.diagnostics().contrastFailures));
const badHex = loadInstance(360, cfg({ palette: { occasion: "gold" } }));
ok("a non-hex color value is validated and reported without throwing",
  badHex.api.diagnostics().invalidColors.some(c => c.key === "occasion"), JSON.stringify(badHex.api.diagnostics().invalidColors));

/* ---------- seek vs sequential equivalence, mixed lengths ---------- */
const seqCfg = { lifecycleMode: "sequence", entranceMode: "staggered",
  quotes: [
    { text: "Short one.", speaker: "A", occasion: "x" },
    { text: "A considerably longer quotation that wraps across several measured lines of card text for testing.", speaker: "B", occasion: "y" },
    { text: "Mid length quote here.", speaker: "C", occasion: "z" }
  ] };
const B = loadInstance(360, cfg(seqCfg));
const btl = B.api.timeline();
ok("mixed lengths wrap differently", btl[0].wrapped.lines.length !== btl[1].wrapped.lines.length,
  btl.map(e => e.wrapped.lines.length).join(","));
ok("sequence starts accumulate from spans", btl[1].startMs === btl[0].endMs && btl[2].startMs === btl[1].endMs,
  JSON.stringify(btl.map(e => e.startMs)));
const probeT = btl[2].startMs + 100;
for (let t = 0; t <= probeT; t += 250) B.api.renderAt(t);
B.api.renderAt(probeT);
const seqSpeaker = B.els.speaker.textContent, seqCard = B.els.card.style.opacity;
const C = loadInstance(360, cfg(seqCfg));
C.api.renderAt(probeT);
ok("seek == sequential: same card selected", C.els.speaker.textContent === seqSpeaker && seqSpeaker === "\u2014 C",
  seqSpeaker + " vs " + C.els.speaker.textContent);
ok("seek == sequential: same opacity", C.els.card.style.opacity === seqCard);

/* ---------- duration extension + fallback policy + resize + empty ---------- */
const E = loadInstance(360, cfg({ durationMs: 100 }));
ok("short duration extends with diagnostics", E.api.effectiveDuration() >= E.api.diagnostics().requiredMs && E.api.diagnostics().extendedDurationMs > 0);
const F = loadInstance(360, cfg({ palette: { occasion: "#2a7f62" } }));
ok("fallback lightens a failing text color to the floor", F.api.contrast(F.api.CONFIG.palette.occasion, F.api.CONFIG.palette.card) >= 4.5);
const G = loadInstance(360, "");
const beforePx = G.api.timeline()[0].wrapped.fontPx;
G.els.stage.clientWidth = 720;
G.listeners.resize();
ok("resize recomputes the timeline", G.api.timeline()[0].wrapped.fontPx !== beforePx, beforePx + " -> " + G.api.timeline()[0].wrapped.fontPx);
let emptyOk = true;
try { const H = loadInstance(360, cfg({ quotes: [] })); H.api.renderAt(100); if (H.api.diagnostics().quoteCount !== 0) emptyOk = false; } catch (e) { emptyOk = false; }
ok("empty quote list renders nothing without throwing", emptyOk);

/* ---------- per-key consumed-effect census (mutation probes) ---------- */
const base = loadInstance(360, "");
const stageVar = (inst, k) => inst.els.stage.style[k];
const rootVar = (inst, k) => inst.documentStub.documentElement.style[k];
const probes = [
  ["durationMs", { durationMs: 100 }, i => i.api.diagnostics().extendedDurationMs],
  ["pageBg", { pageBg: "#111111" }, i => rootVar(i, "--page-bg")],
  ["fontFamily", { fontFamily: "Arial, sans-serif" }, i => stageVar(i, "--font-family")],
  ["quotes[].text", { quotes: [{ text: "Entirely different words here.", speaker: "Associated Press", occasion: "on Byrd", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 8000, exitDurMs: 1000 }] }, i => { i.api.renderAt(1500); return i.els.quote.children.map(c => c.textContent).join("|"); }],
  ["quotes[].speaker", { quotes: [{ text: "Made a career of doing favors for his colleagues.", speaker: "Other Outlet", occasion: "on Byrd", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 8000, exitDurMs: 1000 }] }, i => { i.api.renderAt(1500); return i.els.speaker.textContent; }],
  ["quotes[].occasion", { quotes: [{ text: "Made a career of doing favors for his colleagues.", speaker: "Associated Press", occasion: "on Someone Else", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 8000, exitDurMs: 1000 }] }, i => { i.api.renderAt(1500); return i.els.occasion.textContent; }],
  ["quotes[].enterAtMs", { quotes: [{ text: "Made a career of doing favors for his colleagues.", speaker: "Associated Press", occasion: "on Byrd", enterAtMs: 2000, enterDurMs: 1000, exitStartMs: 8000, exitDurMs: 1000 }] }, i => i.api.timeline()[0].startMs],
  ["quotes[].enterDurMs", { quotes: [{ text: "Made a career of doing favors for his colleagues.", speaker: "Associated Press", occasion: "on Byrd", enterAtMs: 0, enterDurMs: 2000, exitStartMs: 8000, exitDurMs: 1000 }] }, i => { i.api.renderAt(1000); return i.els.card.style.opacity; }],
  ["quotes[].exitStartMs", { quotes: [{ text: "Made a career of doing favors for his colleagues.", speaker: "Associated Press", occasion: "on Byrd", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 6000, exitDurMs: 1000 }] }, i => i.api.timeline()[0].exitStartMs],
  ["quotes[].exitDurMs", { quotes: [{ text: "Made a career of doing favors for his colleagues.", speaker: "Associated Press", occasion: "on Byrd", enterAtMs: 0, enterDurMs: 1000, exitStartMs: 8000, exitDurMs: 2000 }] }, i => { i.api.renderAt(8500); return i.els.card.style.opacity; }],
  ["quotes[].anchorXFrac", { quotes: [api.CONFIG.quotes[0], Object.assign({}, api.CONFIG.quotes[1], { anchorXFrac: 0.4 })] }, i => { i.api.renderAt(12500); return i.els.card.style.left; }],
  ["quotes[].anchorYFrac", { quotes: [api.CONFIG.quotes[0], Object.assign({}, api.CONFIG.quotes[1], { anchorYFrac: 0.6 })] }, i => { i.api.renderAt(12500); return i.els.card.style.top; }],
  ["palette.card", { palette: { card: "#101418" } }, i => stageVar(i, "--card")],
  ["palette.ink", { palette: { ink: "#eeeeee" } }, i => stageVar(i, "--ink")],
  ["palette.chip", { palette: { chip: "#cc9900" } }, i => stageVar(i, "--chip")],
  ["palette.chipInk", { palette: { chipInk: "#dddddd" } }, i => stageVar(i, "--chip-ink")],
  ["palette.occasion", { palette: { occasion: "#e0aa30" } }, i => stageVar(i, "--occasion")],
  ["palette.field", { palette: { field: "#205060" } }, i => stageVar(i, "--field")],
  ["entranceMode", { entranceMode: "staggered" }, i => { i.api.renderAt(1100); return i.els.quote.children.map(c => c.style.opacity).join(","); }],
  ["lifecycleMode", { lifecycleMode: "sequence" }, i => i.api.timeline().map(e => e.startMs).join(",")],
  ["cardEnterMs (default entrance span)", { quotes: [{ text: "Short one.", speaker: "A", occasion: "x", enterAtMs: 0, exitStartMs: null }] , cardEnterMs: 900 }, i => i.api.timeline()[0].enterDurMs],
  ["exitDurMs (default exit span)", { quotes: [{ text: "Short one.", speaker: "A", occasion: "x", enterAtMs: 0, exitStartMs: 5000 }], exitDurMs: 900 }, i => i.api.timeline()[0].exitDurMs],
  ["exitScaleTo", { exitScaleTo: 0.8 }, i => { i.api.renderAt(9000); return i.els.scene.style.transform; }],
  ["lineMs", { entranceMode: "staggered", lifecycleMode: "sequence", lineMs: 100 }, i => i.api.timeline()[1].startMs],
  ["lineFadeMs", { entranceMode: "staggered", lineFadeMs: 900 }, i => { i.api.renderAt(1000 + 100); return i.els.quote.children[0].style.opacity; }],
  ["chipFadeMs", { entranceMode: "staggered", lifecycleMode: "sequence", chipFadeMs: 900 }, i => i.api.timeline()[1].startMs],
  ["holdMs", { lifecycleMode: "sequence", holdMs: 5000 }, i => i.api.timeline()[1].startMs],
  ["entranceScaleFrom", { entranceScaleFrom: 0.5 }, i => { i.api.renderAt(0); return i.els.card.style.transform; }],
  ["contrastTextMin", { contrastTextMin: 21 }, i => i.api.diagnostics().contrastFailures.length],
  ["contrastAccentMin", { contrastAccentMin: 21 }, i => i.api.diagnostics().contrastFailures.length],
  ["contrastFallback", { contrastFallback: "none", palette: { occasion: "#2a7f62" } }, i => i.api.CONFIG.palette.occasion],
  ["layout.stageMaxPx", { layout: { stageMaxPx: 800 } }, i => stageVar(i, "--stage-max")],
  ["layout.stageAspectW", { layout: { stageAspectW: 4 } }, i => i.api.timeline()[0].wrapped.stageHPx],
  ["layout.stageAspectH", { layout: { stageAspectH: 16 } }, i => i.api.timeline()[0].wrapped.stageHPx],
  ["layout.cardAnchorXFrac", { layout: { cardAnchorXFrac: 0.4 } }, i => { i.api.renderAt(1500); return i.els.card.style.left; }],
  ["layout.cardAnchorYFrac", { layout: { cardAnchorYFrac: 0.4 } }, i => { i.api.renderAt(1500); return i.els.card.style.top; }],
  ["layout.cardWidthFrac", { layout: { cardWidthFrac: 0.5 } }, i => stageVar(i, "--card-w")],
  ["layout.cardPadXFrac", { layout: { cardPadXFrac: 0.09 } }, i => stageVar(i, "--card-pad-x")],
  ["layout.cardPadYFrac", { layout: { cardPadYFrac: 0.09 } }, i => stageVar(i, "--card-pad-y")],
  ["layout.cardRadiusFrac", { layout: { cardRadiusFrac: 0.05 } }, i => stageVar(i, "--card-radius")],
  ["layout.rulePx", { layout: { rulePx: 9 } }, i => stageVar(i, "--rule-w")],
  ["layout.cardMaxHeightFrac", { layout: { cardMaxHeightFrac: 0.3 } }, i => i.api.timeline()[0].wrapped.fontPx],
  ["layout.shadowOffsetYFrac", { layout: { shadowOffsetYFrac: 0.05 } }, i => stageVar(i, "--card-shadow")],
  ["layout.shadowBlurFrac", { layout: { shadowBlurFrac: 0.09 } }, i => stageVar(i, "--card-shadow")],
  ["layout.shadowAlpha", { layout: { shadowAlpha: 0.9 } }, i => stageVar(i, "--card-shadow")],
  ["type.quoteFrac", { type: { quoteFrac: 0.08 } }, i => stageVar(i, "--quote-size")],
  ["type.glyphFrac", { type: { glyphFrac: 0.12 } }, i => stageVar(i, "--glyph-size")],
  ["type.chipFrac", { type: { chipFrac: 0.06 } }, i => stageVar(i, "--chip-size")],
  ["type.quoteWeight", { type: { quoteWeight: 400 } }, i => stageVar(i, "--quote-weight")],
  ["type.chipWeight", { type: { chipWeight: 400 } }, i => stageVar(i, "--chip-weight")],
  ["type.occasionWeight", { type: { occasionWeight: 700 } }, i => stageVar(i, "--occasion-weight")],
  ["type.lineHeight", { type: { lineHeight: 1.6 } }, i => stageVar(i, "--line-height")],
  ["type.glyphLineHeight", { type: { glyphLineHeight: 1 } }, i => i.api.timeline()[0].wrapped.cardHeightPx],
  ["type.chipLineHeight", { type: { chipLineHeight: 2 } }, i => stageVar(i, "--chip-line-height")],
  ["type.quoteGapFrac", { type: { quoteGapFrac: 0.05 } }, i => stageVar(i, "--quote-gap")],
  ["type.chipGapFrac", { type: { chipGapFrac: 0.05 } }, i => stageVar(i, "--chip-gap")],
  ["type.fitGuard", { type: { fitGuard: 0.5 } }, i => i.api.timeline()[1].wrapped.lines.length],
  ["type.minQuotePx", { type: { minQuotePx: 30 } }, i => stageVar(i, "--quote-size")],
  ["type.chipMinPx", { type: { chipMinPx: 30 } }, i => stageVar(i, "--chip-size")],
  ["type.occasionGapEm", { type: { occasionGapEm: 1.2 } }, i => stageVar(i, "--occasion-gap")]
];
let censusFail = [];
for (const [key, override, probe] of probes) {
  let baseVal, mutVal, err = "";
  try { baseVal = probe(base); } catch (e) { err = "base:" + e.message; }
  try { const inst = loadInstance(360, cfg(override)); mutVal = probe(inst); } catch (e) { err += " mut:" + e.message; }
  const changed = String(baseVal) !== String(mutVal);
  if (!changed) censusFail.push(key + " (" + baseVal + " -> " + mutVal + ") " + err);
  ok("consumed effect: " + key, changed, err);
}
console.log("CENSUS keys probed: " + probes.length + ", unconsumed: " + censusFail.length + (censusFail.length ? " :: " + censusFail.join("; ") : ""));

/* ---------- literal census (per-literal classification printed in the build record) ---------- */
const outsideCfg = src.replace(/const CONFIG = \{[\s\S]*?\n\};/, "")
  .replace(/\\u[0-9a-fA-F]{4}/g, "ESCAPE") /* character escapes are characters, not numeric literals */
  .replace(/T57/g, "TECHID") /* the technique identifier is a name, not a numeric literal */
  .replace(/clamp01/g, "clampUnit"); /* the clamp helper's name is an identifier, not a numeric literal */
const hexes = outsideCfg.match(/#[0-9a-fA-F]{3,8}/g) || [];
ok("no hex colors outside the configuration block", hexes.length === 0, hexes.join(","));
const nums = {};
(outsideCfg.match(/\d+(?:\.\d+)?/g) || []).forEach(n => { nums[n] = (nums[n] || 0) + 1; });
const WHITELIST = new Set(["0","1","2","4","6","8","9","12.92","16","20","50","100","255","0.05","0.12","0.055","0.03928","0.2126","0.7152","0.0722","1.055","2.4"]);
const unlisted = Object.keys(nums).filter(n => !WHITELIST.has(n));
ok("every numeric literal outside the configuration block is on the printed structural whitelist",
  unlisted.length === 0, "unlisted: " + unlisted.join(","));
console.log("LITERALS outside CONFIG: " + JSON.stringify(nums));

/* ---------- purity ---------- */
const mediaHits = (src.match(/segment|\.mp4|\.png|\.jpg|<video|<img|https?:\/\//gi) || []);
ok("no specimen media or external references in the source", mediaHits.length === 0, mediaHits.join(","));

console.log("RESULT: " + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
