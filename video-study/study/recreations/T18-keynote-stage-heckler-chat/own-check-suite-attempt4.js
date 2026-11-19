"use strict";
/* T18 attempt-4 own-check suite: node harness, real inline script, stubbed DOM.
   Usage: node own-check-suite-attempt4.js [V|C|S|U|FULL]  (stage partitions are cumulative) */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ART = path.join(__dirname, "recreation.html");
const html = fs.readFileSync(ART, "utf8");
const mScript = html.match(/<script>([\s\S]*?)<\/script>/);
if (!mScript) { console.log("FAIL no script block"); process.exit(1); }
const SRC = mScript[1];
const STAGE = process.argv[2] || "FULL";
const ORDER = ["BASE", "V", "C", "S", "U"];
const upto = STAGE === "FULL" ? 4 : ORDER.indexOf(STAGE);
let pass = 0, fail = 0; const failures = [];
let group = "BASE";
function chk(name, cond, extra) {
  if (ORDER.indexOf(group) > upto) return;
  if (cond) { pass++; console.log("PASS [" + group + "] " + name); }
  else { fail++; failures.push(name); console.log("FAIL [" + group + "] " + name + (extra ? " :: " + extra : "")); }
}
function approx(a, b, eps) { return Math.abs(a - b) <= (eps || 0.001); }
function Style() { this.props = {}; }
Style.prototype.setProperty = function (k, v) { this.props[k] = v; };
function makeEl() {
  return { style: new Style(), children: [], className: "", textContent: "",
           appendChild(c) { this.children.push(c); return c; } };
}
function load(search) {
  const reg = {};
  ["stage","world","screenWrap","screen","titleWrap","statWrap","counter","chatWrap","spot","speaker","audience"].forEach(function (id) { reg[id] = makeEl(); });
  reg.speaker.children = [makeEl(), makeEl()];
  const docEl = { style: new Style() };
  const sandbox = {
    console, URLSearchParams,
    performance: { now: function () { return 0; } },
    requestAnimationFrame: function () { return 1; },
    cancelAnimationFrame: function () {},
    document: {
      getElementById: function (id) { return reg[id]; },
      createElement: function () { return makeEl(); },
      createTextNode: function (t) { return { textContent: t }; },
      documentElement: docEl,
      body: { style: new Style() }
    },
    location: { search: search || "" },
    addEventListener: function () {}
  };
  sandbox.window = sandbox;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(SRC, ctx, { filename: "recreation-inline.js" });
  return { ctx, reg, sandbox, docEl };
}
function ev(ctx, expr) { return vm.runInContext(expr, ctx); }
function cloneCfg(ctx) { return JSON.parse(ev(ctx, "JSON.stringify(CONFIG)")); }
function valErrs(ctx, cfgObj) {
  ev(ctx, "globalThis.__testCfg = " + JSON.stringify(cfgObj));
  return ev(ctx, "validateConfig(globalThis.__testCfg)");
}
function stateAt(ctx, t, cfgObj) {
  if (cfgObj) { ev(ctx, "globalThis.__testCfg = " + JSON.stringify(cfgObj)); return ev(ctx, "computeState(" + t + ", globalThis.__testCfg)"); }
  return ev(ctx, "computeState(" + t + ", CONFIG)");
}
function charColorsAt(ctx, t, cfgObj) {
  const s = stateAt(ctx, t, cfgObj);
  const cfg = cfgObj || cloneCfg(ctx);
  const out = [];
  s.titleLines.forEach(function (L, li) {
    const hl = s.highlights.filter(function (h) { return h.lineIndex === li; })[0];
    const cols = [];
    L.words.forEach(function (w, wi) {
      for (let ci = 0; ci < w.text.length; ci++) {
        cols.push((hl && wi === hl.wordIndex)
          ? ev(ctx, "charColor(" + hl.progress + ", " + JSON.stringify(hl.phase) + ", " + JSON.stringify(hl.charThresholds) + ", " + ci + ", CONFIG, " + JSON.stringify(L.retainColor) + ")")
          : L.retainColor);
      }
    });
    out.push(cols);
  });
  return out;
}

/* ================= BASE ================= */
group = "BASE";
try { new vm.Script(SRC); chk("syntax compile", true); } catch (e) { chk("syntax compile", false, e.message); }
const base = load("");
const ctx = base.ctx;
chk("config valid at load", ev(ctx, "window.__configErrors.length") === 0, JSON.stringify(ev(ctx, "window.__configErrors")));
chk("no override errors without query", ev(ctx, "window.__overrideErrors.length") === 0);
chk("self-start playing under own startup path", ev(ctx, "playing") === true);
const endState = stateAt(ctx, 14999);
chk("ending state reached (last cut, all titles complete, all chats visible)",
  endState.cutIndex === 5 && endState.titleLines.every(function (L) { return L.complete; }) && endState.chatVisible.every(Boolean));
const s7350 = stateAt(ctx, 7350), s7450 = stateAt(ctx, 7450);
chk("adjacency 7350: framing is the 7300 cut, chat[2] not yet visible", s7350.cutIndex === 2 && s7350.chatVisible[2] === false);
chk("adjacency 7450: chat[2] visible with pop strictly between endpoints",
  s7450.chatVisible[2] === true && s7450.chatScales[2] > 0.8 && s7450.chatScales[2] < 1, String(s7450.chatScales[2]));
const s0 = stateAt(ctx, 0), sWrap = stateAt(ctx, 15000);
chk("loop boundary: wrap state equals initial state", sWrap.t === 0 && sWrap.cutIndex === -1 && JSON.stringify(sWrap.framing.rect) === JSON.stringify(s0.framing.rect));
const fDelta = ev(ctx, "framingDelta(computeState(14999, CONFIG).framing, CONFIG.initialFraming)");
chk("loop boundary: final-to-initial framing delta at or above the floor", typeof fDelta === "number" && fDelta >= 0, String(fDelta));
chk("purity grep: no external URLs, media files or specimen filenames in source",
  !/https?:\/\//.test(html) && !/\.mp4|\.png|\.jpg|segment/.test(html));
const meas = ev(ctx, "measureContent(CONFIG, 360, 568, 1)");
chk("sizes at 360px: chat 14.5 / meta 12 / stat value 16", approx(meas.sizes.chat, 14.5, 0.01) && approx(meas.sizes.meta, 12, 0.01) && approx(meas.sizes.statValue, 16, 0.01));
chk("displayed-state: clamped framing rect inside stage for all 7 framings", (function () {
  const framings = [cloneCfg(ctx).initialFraming].concat(cloneCfg(ctx).cuts);
  return framings.every(function (f) {
    ev(ctx, "globalThis.__f = " + JSON.stringify(f));
    const c = ev(ctx, "clampFraming(globalThis.__f, CONFIG)");
    return c.rect.left >= -0.001 && c.rect.right <= 100.001 && c.rect.top >= -0.001 && c.rect.bottom <= 100.001;
  });
})());
chk("displayed-state: chat stack inside screen at all four supported heights", [568, 640, 740, 844].every(function (h) {
  const m = ev(ctx, "measureContent(CONFIG, 360, " + h + ", 1)");
  return m.chatBottomPct <= 98 && m.titleBottomPct <= m.statTopPct;
}));

/* ================= V — reveal family ================= */
group = "V";
function prefixAt(t, li) { return stateAt(ctx, t).titleLines[li].prefix; }
chk("V1 L1 not started at 3399", prefixAt(3399, 0) === "" && stateAt(ctx, 3399).titleVisible[0] === false);
chk("V1/V4 L1 strict partial at 4000 (derived 20 of 27 chars)", prefixAt(4000, 0) === "THE GREATEST TRANSFO", prefixAt(4000, 0));
chk("V1 L1 complete at 4550, white line", prefixAt(4550, 0) === "THE GREATEST TRANSFORMATION");
chk("V1/V4 L2 'IN' alone at 4750, 4900 and 5100", prefixAt(4750, 1).trimEnd() === "IN" && prefixAt(4900, 1).trimEnd() === "IN" && prefixAt(5100, 1).trimEnd() === "IN",
  prefixAt(4750, 1) + "|" + prefixAt(4900, 1) + "|" + prefixAt(5100, 1));
chk("V1 L2 partial word at 5200 ('IN HU')", prefixAt(5200, 1) === "IN HU", prefixAt(5200, 1));
chk("V1 L2 complete at 5400", prefixAt(5400, 1) === "IN HUMAN");
chk("V1 L3 partial at 5450 ('HI')", prefixAt(5450, 2) === "HI", prefixAt(5450, 2));
chk("V1 full title at 5650", stateAt(ctx, 5650).titleLines.every(function (L) { return L.complete; }));
chk("V4 plan surface at 4825: L1 complete; L2 words are 'IN' + '' (HUMAN absent)",
  (function () { const L = stateAt(ctx, 4825).titleLines; return L[0].complete && L[1].words[0].visibleText === "IN" && L[1].words[1].visibleText === ""; })());
chk("V1 per-word onsets: L2 second word onset 5060 / complete 5360 (hold consumed)",
  (function () { const w = ev(ctx, "wordOnsets(CONFIG.titleLines[1], CONFIG)"); return approx(w[1].onsetMs, 5060, 0.5) && approx(w[1].completeMs, 5360, 0.5); })());
chk("V1 effect mapping: revealStart change moves the prefix (index->effect)",
  (function () { const c = cloneCfg(ctx); c.titleLines[0].revealStartMs += 200; c.titleLines[0].tMs += 200; c.titleLines[0].sweepStartMs += 200;
    return stateAt(ctx, 4000, c).titleLines[0].prefix.length < prefixAt(4000, 0).length; })());
chk("V3 wrap sides: completed-block wraps [2,1,1]; partial prefix wraps no more than the block",
  JSON.stringify(meas.titleWraps) === "[2,1,1]" &&
  ev(ctx, "wrapCount('THE GREATEST TRANSFO', measureContent(CONFIG,360,568,1).sizes.title, measureContent(CONFIG,360,568,1).titleColPx || 179.7, CONFIG, 1)").lines <= 2);
chk("V6 cardinality: 1 title line valid + state", (function () {
  const c = cloneCfg(ctx); c.titleLines = [c.titleLines[0]]; c.highlightTargets = [{ lineIndex: 0, wordIndex: 1 }];
  return valErrs(ctx, c).length === 0 && stateAt(ctx, 4550, c).titleLines[0].complete;
})());
chk("V6 cardinality: 5 title lines valid", (function () {
  const c = cloneCfg(ctx);
  c.titleLines = [
    { text: "ONE", tMs: 3400, revealStartMs: 3400, revealMs: 90, wordHoldMs: 0, retainColor: "#ffffff" },
    { text: "TWO WORDS", tMs: 3600, revealStartMs: 3600, revealMs: 270, wordHoldMs: 50, retainColor: "#f5c518" },
    { text: "THREE", tMs: 4100, revealStartMs: 4100, revealMs: 150, wordHoldMs: 0, retainColor: "#f5c518" },
    { text: "FOUR MORE", tMs: 4400, revealStartMs: 4400, revealMs: 270, wordHoldMs: 50, highlightMs: 500, sweepStartMs: 5000, retainColor: "#ffffff" },
    { text: "FIVE", tMs: 4800, revealStartMs: 4800, revealMs: 120, wordHoldMs: 0, sweepStartMs: 5600, retainColor: "#f5c518" }];
  c.highlightTargets = c.titleLines.map(function (_, i) { return { lineIndex: i, wordIndex: 0 }; });
  const e = valErrs(ctx, c); if (e.length) return false; return true;
})());
chk("V6 cardinality: 0 and 6 messages valid", (function () {
  const c0 = cloneCfg(ctx); c0.chatMessages = [];
  const c6 = cloneCfg(ctx);
  for (let i = 0; i < 2; i++) c6.chatMessages.push({ sender: "Ex" + i, time: "9:50", text: "extra note " + i, color: "#2f6fed", tMs: 12400 + i * 800 });
  return valErrs(ctx, c0).length === 0 && valErrs(ctx, c6).length === 0;
})());
chk("V6 cardinality: 1 and 8 cuts valid", (function () {
  const c1 = cloneCfg(ctx); c1.cuts = [c1.cuts[0]]; c1.maxIdleTailMs = 9999;
  const c8 = cloneCfg(ctx);
  c8.cuts = c8.cuts.concat([{ tMs: 14200, scale: 1.01, x: 0, y: 0, speakerXPct: -3, spotScale: 1.05, audienceShiftPct: -1 },
                            { tMs: 14600, scale: 1.0, x: 0, y: 0, speakerXPct: -1, spotScale: 0.97, audienceShiftPct: 0 }]);
  return valErrs(ctx, c1).length === 0 && valErrs(ctx, c8).length === 0;
})());
chk("V6 malformed reveal: overlap into next line rejected", (function () {
  const c = cloneCfg(ctx); c.titleLines[1].revealStartMs = 4000; c.titleLines[1].tMs = 4000;
  return valErrs(ctx, c).some(function (e) { return /reveal/.test(e); });
})());
chk("V6 malformed reveal: non-positive revealMs rejected", (function () {
  const c = cloneCfg(ctx); c.titleLines[0].revealMs = -5;
  return valErrs(ctx, c).some(function (e) { return /revealMs/.test(e); });
})());
chk("V6 malformed reveal: negative wordHoldMs rejected", (function () {
  const c = cloneCfg(ctx); c.titleLines[1].wordHoldMs = -1;
  return valErrs(ctx, c).some(function (e) { return /wordHoldMs/.test(e); });
})());
chk("V6 malformed reveal: invalid retainColor rejected", (function () {
  const c = cloneCfg(ctx); c.titleLines[0].retainColor = "banana";
  return valErrs(ctx, c).some(function (e) { return /retainColor/.test(e); });
})());

/* ================= C — retained colour + sweep windows ================= */
group = "C";
if (typeof ev(ctx, "CONFIG.titleLines[0].sweepStartMs") === "number") {
  chk("C3 sweep windows are explicit records (4250 / 5700 / 5750)",
    ev(ctx, "CONFIG.titleLines.map(function(L){return L.sweepStartMs}).join(',')") === "4250,5700,5750");
  chk("C3 bar presence at checkpoints: L1 sweeping at 4600; no bar on L2 at 4825; no bar anywhere at 5650",
    (function () { const a = stateAt(ctx, 4600).highlights, b = stateAt(ctx, 4825).highlights, c = stateAt(ctx, 5650).highlights;
      return a[0].phase === "sweeping" && b[1].phase === "pending" && b[1].barWidthPct === 0 &&
             c.every(function (h) { return h.barWidthPct === 0; }); })());
  chk("C3 sweep state carries its window (startMs field per highlight)",
    stateAt(ctx, 4600).highlights.every(function (h) { return typeof h.startMs === "number"; }));
  chk("C2/V4 'IN' yellow at 4825 (bar absent, retained colour shown)",
    (function () { const cols = charColorsAt(ctx, 4825); return cols[1].slice(0, 2).every(function (x) { return x === "#f5c518"; }); })());
  chk("C2 retained colours at 5650: L1 all white, L2+L3 all yellow",
    (function () { const cols = charColorsAt(ctx, 5650);
      return cols[0].every(function (x) { return x === "#ffffff"; }) &&
             cols[1].every(function (x) { return x === "#f5c518"; }) &&
             cols[2].every(function (x) { return x === "#f5c518"; }); })());
  chk("C2 retained colours at final hold: GREATEST white (no per-word yellow hold), HUMAN yellow",
    (function () { const cols = charColorsAt(ctx, 14999);
      return cols[0].every(function (x) { return x === "#ffffff"; }) && cols[1].every(function (x) { return x === "#f5c518"; }); })());
  chk("C2 effect mapping: retainColor change recolours the hold state",
    (function () { const c = cloneCfg(ctx); c.titleLines[0].retainColor = "#37c8ff";
      const s = stateAt(ctx, 14999, c); return s.titleLines[0].retainColor === "#37c8ff"; })());
  chk("C3 dependent re-derivation: sweep starting inside its own reveal rejected",
    (function () { const c = cloneCfg(ctx); c.titleLines[0].sweepStartMs = 3500;
      return valErrs(ctx, c).some(function (e) { return /sweep/.test(e); }); })());
  chk("C3 dependent re-derivation: idle tail priced from sweep ends (inflated duration rejected)",
    (function () { const c = cloneCfg(ctx); c.durationMs = 30000;
      return valErrs(ctx, c).some(function (e) { return /idle tail/.test(e); }); })());
  chk("C3 dependent re-derivation: sweep end + min tail past duration rejected",
    (function () { const c = cloneCfg(ctx); c.titleLines[2].sweepStartMs = 14900;
      return valErrs(ctx, c).some(function (e) { return /sweep|durationMs too short/.test(e); }); })());
} else {
  chk("C3 sweep windows are explicit records", false, "sweepStartMs not yet in CONFIG (stage C pending)");
}

/* ================= S — sweep readability basis ================= */
group = "S";
if (ev(ctx, "typeof wordThresholdsPadded") === "function") {
  chk("S padded thresholds: first threshold carries the padding share (> plain 0.278, < 0.36); last = char right edge before trailing pad (0.90-0.97)",
    (function () { const th = ev(ctx, "wordThresholdsPadded('IN', CONFIG)"); return th[0] > 0.278 && th[0] < 0.36 && th[th.length - 1] > 0.9 && th[th.length - 1] < 0.97; })());
  chk("S padded thresholds strictly increasing on a mixed-width word",
    (function () { const th = ev(ctx, "wordThresholdsPadded('GREATEST', CONFIG)");
      return th.every(function (v, i) { return i === 0 || v > th[i - 1]; }); })());
  chk("S bar covers the glyph cap region (bar top <= cap top, bar bottom >= cap bottom)",
    (function () { const d = cloneCfg(ctx).detail; const lh = d.titleLineHeight, cap = 0.716;
      const capTop = (lh - cap) / 2 / lh * 100, capBot = (lh + cap) / 2 / lh * 100;
      return d.hlTopPct <= capTop && d.hlTopPct + d.hlHeightPct >= capBot; })());
  chk("S render uses the unrounded progress fraction for bar width",
    /bar\.style\.width = \(hl\.barWidthPct\)\.toFixed\(3\) \+ "%"/.test(SRC) && !/Math\.round\(hl\.barWidthPct\)/.test(SRC));
} else {
  chk("S padded thresholds exist", false, "wordThresholdsPadded not yet defined (stage S pending)");
}

/* ================= U — contract residuals ================= */
group = "U";
/* consumption census (binding != consumption): every non-glyph CONFIG leaf resolves to a site */
(function () {
  const cfg = cloneCfg(ctx);
  const outside = SRC.slice(SRC.indexOf("/* ===== Text measurement"));
  let leaves = 0, resolved = 0; const unresolved = [];
  (function walk(o, prefix) {
    Object.keys(o).forEach(function (k) {
      const v = o[k], p = prefix ? prefix + "." + k : k;
      if (v && typeof v === "object") { walk(v, p); return; }
      if (prefix.indexOf("glyphWidths") === 0) return;
      leaves++;
      if (outside.indexOf(k) >= 0) resolved++; else unresolved.push(p);
    });
  })(cfg, "");
  chk("U census: every non-glyph CONFIG leaf resolves to an application site (" + resolved + "/" + leaves + ")",
    unresolved.length === 0, unresolved.join(","));
  chk("U census: glyph table consumed by lookup (width of 'W' > width of 'I')",
    ev(ctx, "glyphAdvance('W', CONFIG)") > ev(ctx, "glyphAdvance('I', CONFIG)"));
})();
/* literal census */
(function () {
  const stripped = SRC.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "")
    .replace(/"([^"\\]|\\.)*"/g, '""').replace(/'([^'\\]|\\.)*'/g, "''").replace(/\/[^/\n*][^/\n]*\/[a-z]*/g, "/re/");
  const cfgStart = stripped.indexOf("const CONFIG =");
  const cfgEnd = stripped.indexOf("};", cfgStart);
  const body = stripped.slice(0, cfgStart) + stripped.slice(cfgEnd + 2);
  const nums = {};
  (body.match(/-?\d+(\.\d+)?/g) || []).forEach(function (n) { nums[n] = (nums[n] || 0) + 1; });
  const white = ["0", "1", "2", "3", "4", "5", "6", "50", "100", "255", "-1", "-50"];
  const bad = Object.keys(nums).filter(function (n) { return white.indexOf(n) < 0; });
  chk("U literal census: no unlisted numeric literal outside CONFIG", bad.length === 0, bad.join(","));
  chk("U literal census: no colour literal outside CONFIG in script body",
    !/#[0-9a-fA-F]{6}/.test(body) && !/rgba?\(/.test(body));
})();
/* CSS parse leg */
(function () {
  const css = html.match(/<style>([\s\S]*?)<\/style>/)[1].replace(/\/\*[\s\S]*?\*\//g, "");
  let depth = 0, paren = 0, ok = true, decls = 0;
  css.split("").forEach(function (ch) { if (ch === "{") depth++; if (ch === "}") depth--; if (ch === "(") paren++; if (ch === ")") paren--; if (depth < 0 || paren < 0) ok = false; });
  css.replace(/([^{}]+)\{([^{}]*)\}/g, function (_, sel, bodyCss) {
    bodyCss.split(";").map(function (x) { return x.trim(); }).filter(Boolean).forEach(function (d) {
      decls++;
      const i = d.indexOf(":");
      if (i < 1 || !/^[a-z-]+$/.test(d.slice(0, i).trim()) || !d.slice(i + 1).trim()) ok = false;
    });
    return "";
  });
  chk("U CSS parse: balanced braces/parens and every declaration well-formed (" + decls + " declarations)",
    ok && depth === 0 && paren === 0 && decls >= 40, "depth=" + depth + " paren=" + paren + " decls=" + decls);
})();
chk("U lineHeightNormal consumed by the CSS layer (custom property set at load)",
  base.docEl.style.props["--t18-normal-lh"] === "1.2", JSON.stringify(base.docEl.style.props["--t18-normal-lh"]));
chk("U title-column bound: a word wider than the column (but inside the screen) is rejected",
  (function () { const c = cloneCfg(ctx); c.titleLines[0].text = "THE TRANSFORMATIONS";
    return valErrs(ctx, c).some(function (e) { return /title word exceeds the title column/.test(e); }); })());
chk("U padding grammar: non-px-pair chat padding rejected", (function () {
  const c = cloneCfg(ctx); c.detail.chatPadding = "5em";
  return valErrs(ctx, c).some(function (e) { return /chatPadding/.test(e); });
})());
chk("U padding grammar: two-value px stat padding accepted", (function () {
  const c = cloneCfg(ctx); c.detail.statPadding = "4px 8px"; return valErrs(ctx, c).length === 0;
})());
chk("U schema: deleting speakerBodyMarginPx is a named presence error", (function () {
  const c = cloneCfg(ctx); delete c.detail.speakerBodyMarginPx;
  return valErrs(ctx, c).some(function (e) { return /speakerBodyMarginPx/.test(e); });
})());
chk("U schema: deleting statValueWeight / avatarWeight / counterWeight are named presence errors", (function () {
  return ["statValueWeight", "avatarWeight", "counterWeight"].every(function (k) {
    const c = cloneCfg(ctx); delete c.detail[k];
    return valErrs(ctx, c).some(function (e) { return e.indexOf(k) >= 0; });
  });
})());
chk("U schema: rotateXDeg with a non-numeric value is a named type error", (function () {
  const c = cloneCfg(ctx); c.detail.rotateXDeg = "tilted";
  return valErrs(ctx, c).some(function (e) { return /rotateXDeg/.test(e); });
})());
chk("U schema: opacity field with a non-numeric value is a named error", (function () {
  const c = cloneCfg(ctx); c.detail.metaOpacity = "high";
  return valErrs(ctx, c).some(function (e) { return /metaOpacity/.test(e); });
})());
chk("U schema: negative dimension (audSizePx) rejected", (function () {
  const c = cloneCfg(ctx); c.detail.audSizePx = -3;
  return valErrs(ctx, c).some(function (e) { return /audSizePx/.test(e); });
})());
chk("U adversarial: null layout group rejected without throwing", (function () {
  const c = cloneCfg(ctx); c.layout = null;
  try { return valErrs(ctx, c).length > 0; } catch (e) { return false; }
})());
chk("U adversarial: non-finite sweep of every numeric detail field rejected", (function () {
  const keys = ["titleWeight","titleLineHeight","hlTopPct","hlHeightPct","chatRadiusPx","chatLineHeight","statRadiusPx","audSizePx","audGapPx","audOpacity","perspectivePx","rotateXDeg","statBorderWidthPx","wordPaddingEm","metaGapPx","metaMarginPx","metaOpacity","statLabelOpacity","statLetterSpacingEm","avatarEm","speakerHeadWidthPct","speakerBodyHeightPx","speakerBodyRadiusPx","speakerBodyMarginPx","stageMinHeightPx","lineHeightNormal","statValueWeight","avatarWeight","counterWeight","counterOpacity"];
  return keys.every(function (k) {
    const c = cloneCfg(ctx); c.detail[k] = null;
    return valErrs(ctx, c).length > 0;
  });
})());
chk("U adversarial: single oversized token in a title line rejected by fit", (function () {
  const c = cloneCfg(ctx); c.titleLines[0].text = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
  return valErrs(ctx, c).length > 0;
})());
chk("U blank optional numeric (lines highlightMs) rejects the whole override atomically", (function () {
  const L = load("?lines=AAA BBB~400~0~;CCC~2600~0");
  return ev(L.ctx, "window.__overrideErrors.length") > 0 && ev(L.ctx, "CONFIG.titleLines[0].text") === "THE GREATEST TRANSFORMATION";
})());
chk("U blank optional numeric (messages popMs) rejects the whole override atomically", (function () {
  const L = load("?messages=Ana~9:41~hi~%2337c8ff~1000~");
  return ev(L.ctx, "window.__overrideErrors.length") > 0 && ev(L.ctx, "CONFIG.chatMessages.length") === 4;
})());
chk("U scaling: counter-only text override + duration x2 still scales every checkpoint", (function () {
  const L = load("?counter=3%20%2F%2040&durationMs=30000");
  return ev(L.ctx, "window.__overrideErrors.length") === 0 &&
         ev(L.ctx, "CONFIG.titleLines[0].revealStartMs") === 6800 &&
         ev(L.ctx, "CONFIG.maxIdleTailMs") === 5000 &&
         ev(L.ctx, "CONFIG.slideCounter") === "3 / 40";
})());
chk("U scaling: stats-only text override + duration x2 still scales", (function () {
  const L = load("?stats=MINUTES~18;SLIDES~0&durationMs=30000");
  return ev(L.ctx, "window.__overrideErrors.length") === 0 && ev(L.ctx, "CONFIG.cuts[5].tMs") === 27700;
})());
chk("U scaling: duration x3 alone accepted (idle bound scaled with the timeline)", (function () {
  const L = load("?durationMs=45000");
  return ev(L.ctx, "window.__overrideErrors.length") === 0 && ev(L.ctx, "CONFIG.maxIdleTailMs") === 7500 &&
         ev(L.ctx, "CONFIG.titleLines[1].revealStartMs") === 13800;
})());
chk("U scaling: a timing-table replacement keeps absolute times (no scaling)", (function () {
  const L = load("?lines=AAA~400~0;BBB~2600~0&durationMs=16000");
  return ev(L.ctx, "window.__overrideErrors.length") === 0 && ev(L.ctx, "CONFIG.titleLines[0].revealStartMs") === 400 && ev(L.ctx, "CONFIG.titleLines.length") === 2;
})());
chk("U swap: comparison-page swap records load clean and drive the state", (function () {
  const L = load("?lines=SMALL%20STEPS~400~0;BUILD%20DAILY~2600~0;SHIP%20IT~4800~0&messages=Ana~9%3A41~first!~%2337c8ff~1000;Bo~9%3A42~nice%20pace~%233aa655~3800;Cy~9%3A43~keep%20going~%237b4fd0~7000;Di~9%3A44~done%20yet%3F~%23e07b2a~10200&highlight=%2337c8ff");
  if (ev(L.ctx, "window.__overrideErrors.length") !== 0) return false;
  const s = stateAt(L.ctx, 500);
  return s.titleLines[0].started !== false && s.titleLines[0].prefix.length > 0 && s.titleLines[0].prefix.length < 10 &&
         ev(L.ctx, "CONFIG.highlightColor") === "#37c8ff";
})());
chk("U swap: escaped-delimiter text round-trips intact", (function () {
  const L = load("?messages=Ana~9%3A41~a%5C~b~%2337c8ff~1000");
  return ev(L.ctx, "window.__overrideErrors.length") === 0 && ev(L.ctx, "CONFIG.chatMessages[0].text") === "a~b";
})());

console.log("----");
console.log("SUITE RESULT stage<=" + STAGE + ": " + pass + " PASS, " + fail + " FAIL");
if (failures.length) console.log("FAILURES: " + failures.join(" | "));
process.exit(fail ? 1 : 0);
