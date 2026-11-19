"use strict";
/* Own-check suite for T57 attempt 2 — logic-level harness (stubbed DOM/canvas).
   Asserts effect mappings, consumed CONFIG effects, literal census, displayed states. */
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
  ["stage", "card", "quote", "chip", "speaker", "occasion", "glyph"].forEach(id => els[id] = makeEl(id));
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
  const sandbox = {
    document: documentStub, window: windowStub, location: { search: search || "" },
    requestAnimationFrame: () => {}, URLSearchParams, console
  };
  sandbox.window.document = documentStub;
  vm.createContext(sandbox);
  vm.runInContext(scriptText, sandbox);
  return { api: sandbox.window.__T57 || sandbox.__T57, els, listeners, documentStub };
}

/* ---- default instance at phone width 360 ---- */
const A = loadInstance(360, "");
const api = A.api;
ok("api exposed", !!api);
const tl = api.timeline();
ok("timeline has 2 quotes", tl.length === 2, "n=" + tl.length);
ok("starts precomputed [0,11500]", tl[0].startMs === 0 && tl[1].startMs === 11500, JSON.stringify(tl.map(e => e.startMs)));
ok("exit start on first card 8000", tl[0].exitStartMs === 8000);
ok("second attribution resolved in config", api.CONFIG.quotes[1].speaker === "Semafor" && /private commitments/.test(api.CONFIG.quotes[1].occasion));

/* displayed-state: unit entrance simultaneity */
api.renderAt(250);
const cardOp250 = parseFloat(A.els.card.style.opacity);
const lineOps250 = A.els.quote.children.map(c => parseFloat(c.style.opacity));
ok("unit entrance at 250ms: card mid-entrance", cardOp250 > 0 && cardOp250 < 1, "card=" + cardOp250);
ok("unit entrance: all lines share card opacity", lineOps250.every(o => Math.abs(o - cardOp250) < 1e-9), JSON.stringify(lineOps250));
ok("unit entrance: chip shares card opacity", Math.abs(parseFloat(A.els.chip.style.opacity) - cardOp250) < 1e-9);
ok("unit entrance: scale in use, no vertical translation", /scale\(/.test(A.els.card.style.transform) && !/translateY/.test(A.els.card.style.transform), A.els.card.style.transform);
api.renderAt(500);
ok("entrance complete at 500ms", parseFloat(A.els.card.style.opacity) === 1 && A.els.quote.children.every(c => parseFloat(c.style.opacity) === 1));
/* lifecycle states */
api.renderAt(8250);
ok("exit mid-point at 8250ms: opacity 0.5", Math.abs(parseFloat(A.els.card.style.opacity) - 0.5) < 1e-9, A.els.card.style.opacity);
api.renderAt(10000);
ok("gap state at 10000ms: card invisible", parseFloat(A.els.card.style.opacity) === 0);
api.renderAt(12000);
ok("second card complete at 12000ms", parseFloat(A.els.card.style.opacity) === 1 && A.els.speaker.textContent === "\u2014 Semafor", A.els.speaker.textContent);
api.renderAt(14000);
ok("terminal hold at 14000ms", parseFloat(A.els.card.style.opacity) === 1);
/* complete-card fit + attribution at phone width */
const w0 = tl[0].wrapped;
ok("complete card fits height budget at 360px", w0.cardHeightPx <= w0.stageHPx * api.CONFIG.layout.cardMaxHeightFrac + 1e-9, w0.cardHeightPx + " vs " + w0.stageHPx);
const chipPx360 = Math.max(api.CONFIG.type.chipMinPx, 360 * api.CONFIG.type.chipFrac);
ok("attribution size at 360px >= 13px", chipPx360 >= 13, chipPx360.toFixed(2));
ok("attribution fits one line at 360px (default quote)", w0.chipLines === 1, "chipLines=" + w0.chipLines);
/* contrast floors for text */
ok("ink contrast >= 4.5", api.contrast(api.CONFIG.palette.ink, api.CONFIG.palette.card) >= 4.5, api.contrast(api.CONFIG.palette.ink, api.CONFIG.palette.card).toFixed(2));
ok("speaker contrast >= 4.5", api.contrast(api.CONFIG.palette.chipInk, api.CONFIG.palette.card) >= 4.5);
ok("occasion contrast >= 4.5", api.contrast(api.CONFIG.palette.occasion, api.CONFIG.palette.card) >= 4.5, api.contrast(api.CONFIG.palette.occasion, api.CONFIG.palette.card).toFixed(2));
ok("accent contrast >= 2", api.contrast(api.CONFIG.palette.chip, api.CONFIG.palette.card) >= 2);
/* page background at root */
ok("pageBg set on document root", A.documentStub.documentElement.style["--page-bg"] === api.CONFIG.pageBg);
/* duration derivation diagnostics */
ok("no silent extension needed for default sequence", api.diagnostics().extendedDurationMs === 0 && api.effectiveDuration() === 14000, JSON.stringify(api.diagnostics()));

/* ---- seek vs sequential equivalence, mixed lengths, sequence mode ---- */
const seqCfg = encodeURIComponent(JSON.stringify({
  lifecycleMode: "sequence", entranceMode: "staggered",
  quotes: [
    { text: "Short one.", speaker: "A", occasion: "x" },
    { text: "A considerably longer quotation that wraps across several measured lines of card text for testing.", speaker: "B", occasion: "y" },
    { text: "Mid length quote here.", speaker: "C", occasion: "z" }
  ]
}));
const B = loadInstance(360, "?config=" + seqCfg);
const btl = B.api.timeline();
ok("mixed lengths wrap differently", btl[0].wrapped.lines.length !== btl[1].wrapped.lines.length, btl.map(e => e.wrapped.lines.length).join(","));
ok("sequence starts accumulate from spans", btl[1].startMs === btl[0].endMs && btl[2].startMs === btl[1].endMs, JSON.stringify(btl.map(e => e.startMs)));
const probeT = btl[2].startMs + 100;
/* sequential: visit every earlier state first */
for (let t = 0; t <= probeT; t += 250) B.api.renderAt(t);
B.api.renderAt(probeT);
const seqSpeaker = B.els.speaker.textContent, seqCard = B.els.card.style.opacity;
/* direct seek on a fresh instance */
const C = loadInstance(360, "?config=" + seqCfg);
C.api.renderAt(probeT);
ok("seek == sequential: same card selected", C.els.speaker.textContent === seqSpeaker && seqSpeaker === "\u2014 C", seqSpeaker + " vs " + C.els.speaker.textContent);
ok("seek == sequential: same opacity", C.els.card.style.opacity === seqCard);
/* staggered variant effect: lines not simultaneous */
const D = loadInstance(360, "?config=" + seqCfg);
D.api.renderAt(btl[0].startMs + D.api.CONFIG.cardEnterMs + 10);
const dOps = D.els.quote.children.map(c => parseFloat(c.style.opacity));
ok("staggered variant: first line ahead of chip", dOps[0] > 0 && parseFloat(D.els.chip.style.opacity) === 0, JSON.stringify(dOps));

/* ---- duration extension recorded ---- */
const E = loadInstance(360, "?config=" + encodeURIComponent(JSON.stringify({ durationMs: 100 })));
ok("short duration extends with diagnostics", E.api.effectiveDuration() >= E.api.diagnostics().requiredMs && E.api.diagnostics().extendedDurationMs > 0, JSON.stringify(E.api.diagnostics()));
/* ---- contrast fallback policy effect ---- */
const F = loadInstance(360, "?config=" + encodeURIComponent(JSON.stringify({ palette: { occasion: "#2a7f62" } })));
ok("fallback lightens a failing text color to the floor", F.api.contrast(F.api.CONFIG.palette.occasion, F.api.CONFIG.palette.card) >= 4.5, F.api.CONFIG.palette.occasion + " -> " + F.api.contrast(F.api.CONFIG.palette.occasion, F.api.CONFIG.palette.card).toFixed(2));
/* ---- resize re-measures ---- */
const G = loadInstance(360, "");
const beforePx = G.api.timeline()[0].wrapped.fontPx;
G.els.stage.clientWidth = 720;
G.listeners.resize();
ok("resize recomputes the timeline", G.api.timeline()[0].wrapped.fontPx !== beforePx, beforePx + " -> " + G.api.timeline()[0].wrapped.fontPx);
/* ---- empty quotes validation ---- */
let emptyOk = true;
try { const H = loadInstance(360, "?config=" + encodeURIComponent(JSON.stringify({ quotes: [] }))); H.api.renderAt(100); if (H.api.diagnostics().quoteCount !== 0) emptyOk = false; } catch (e) { emptyOk = false; }
ok("empty quote list renders nothing without throwing", emptyOk);

/* ---- consumed-effect census: every CONFIG leaf key is named outside the CONFIG block ---- */
const cfgBlock = scriptText.slice(scriptText.indexOf("const CONFIG"), scriptText.indexOf("/* URL override"));
const rest = scriptText.replace(cfgBlock, "");
function leafKeys(obj, prefix, out) {
  for (const k in obj) {
    const p = prefix ? prefix + "." + k : k;
    if (obj[k] && typeof obj[k] === "object" && !Array.isArray(obj[k])) leafKeys(obj[k], p, out);
    else out.push({ key: k, path: p });
  }
  return out;
}
const leaves = leafKeys(api.CONFIG, "", []);
const arrayMemberKeys = ["text", "speaker", "occasion", "startAtMs", "exitStartMs"];
const unconsumed = leaves.filter(l => !arrayMemberKeys.includes(l.key) && !new RegExp("\\b" + l.key + "\\b").test(rest))
  .concat(arrayMemberKeys.filter(k => !new RegExp("\\." + k + "\\b").test(rest)).map(k => ({ key: k, path: "quotes[]." + k })));
ok("every CONFIG key consumed outside CONFIG (" + (leaves.length + arrayMemberKeys.length) + " keys)", unconsumed.length === 0, JSON.stringify(unconsumed));

/* ---- literal census outside CONFIG ---- */
const whitelist = {
  "0": "zero / index / clamp bound", "1": "one / clamp bound / identity", "2": "pair / hex channel count / radix-2 pad",
  "4": "hex channel offsets", "9": "stage aspect numerator", "16": "stage aspect denominator / hex radix",
  "20": "fallback step cap (named bound)", "255": "channel maximum", "0.12": "fallback lighten step",
  "0.6": "glyph line-box factor (matches the glyph CSS line-height)", "0.03928": "sRGB linearization threshold",
  "12.92": "sRGB linearization divisor", "0.055": "sRGB linearization offset", "1.055": "sRGB linearization scale",
  "2.4": "sRGB gamma exponent", "0.2126": "luminance coefficient R", "0.7152": "luminance coefficient G",
  "0.0722": "luminance coefficient B", "0.05": "contrast ratio offset",
  "8": "document encoding declaration (utf-8)", "50": "centering identity (translate -50% of own size)"
};
const outside = (src.slice(0, src.indexOf("const CONFIG")) + scriptText.replace(cfgBlock, ""));
const nums = new Set();
let m; const re = /(?<![\w#.])\d+(?:\.\d+)?/g;
while ((m = re.exec(outside)) !== null) nums.add(m[0]);
const unlisted = [...nums].filter(n => !(n in whitelist) && n !== "100");
ok("literal census: no unlisted literals outside CONFIG", unlisted.length === 0, "unlisted: " + unlisted.join(",") + " | found: " + [...nums].join(","));

console.log("RESULT " + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
