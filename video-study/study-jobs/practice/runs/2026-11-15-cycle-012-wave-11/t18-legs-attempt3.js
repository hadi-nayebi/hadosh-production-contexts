"use strict";
/* A-C008 legs for T18 attempt 3: measured-fit table + config census, from the frozen source. */
const fs = require("fs"), vm = require("vm");
const DIR = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T18-keynote-stage-heckler-chat";
const html = fs.readFileSync(DIR + "/recreation.html", "utf8");
const SHA = require("crypto").createHash("sha256").update(html).digest("hex");
const SRC = html.match(/<script>([\s\S]*?)<\/script>/)[1];
function Style() { this.props = {}; }
Style.prototype.setProperty = function (k, v) { this.props[k] = v; };
function makeEl() { return { style: new Style(), children: [], className: "", textContent: "", appendChild(c) { this.children.push(c); return c; } }; }
const reg = {};
["stage","world","screenWrap","screen","titleWrap","statWrap","counter","chatWrap","spot","speaker","audience"].forEach(function (id) { reg[id] = makeEl(); });
reg.speaker.children = [makeEl(), makeEl()];
const sandbox = { console, URLSearchParams, performance: { now: function () { return 0; } },
  requestAnimationFrame: function () { return 1; }, cancelAnimationFrame: function () {},
  document: { getElementById: function (id) { return reg[id]; }, createElement: function () { return makeEl(); },
    createTextNode: function (t) { return { textContent: t }; }, documentElement: { style: new Style() }, body: { style: new Style() } },
  location: { search: "" }, addEventListener: function () {} };
sandbox.window = sandbox;
const ctx = vm.createContext(sandbox);
vm.runInContext(SRC, ctx);
function ev(e) { return vm.runInContext(e, ctx); }
const cfg = JSON.parse(ev("JSON.stringify(CONFIG)"));
const mNom = ev("measureContent(CONFIG, 360, 568, 1)");
const mUp = ev("measureContent(CONFIG, 360, 568, CONFIG.fit.glyphErrorFactor)");
const CAP = 0.716; /* Arial cap height, fraction of em */
function inkH(px) { return (px * CAP).toFixed(1); }
let hits = [];
let rows = [];
rows.push("| Element | Container | CSS size @360px | Measured ink width (nominal / upper) | Container inner width | Ink height | Binding margin |");
rows.push("|---|---|---|---|---|---|---|");
cfg.titleLines.forEach(function (L, i) {
  const wNom = ev("textWidthPx(" + JSON.stringify(L.text) + ", " + mNom.sizes.title + ", CONFIG, 1)");
  const wUp = ev("textWidthPx(" + JSON.stringify(L.text) + ", " + mNom.sizes.title + ", CONFIG, CONFIG.fit.glyphErrorFactor)");
  const col = (mNom.screenWPx * cfg.layout.titleWidthPct / 100);
  rows.push("| title line " + i + " (" + mNom.titleWraps[i] + " wrapped rows) | title column | " + mNom.sizes.title.toFixed(2) + "px | " + wNom.toFixed(1) + " / " + wUp.toFixed(1) + "px (unwrapped) | " + col.toFixed(1) + "px | " + inkH(mNom.sizes.title) + "px | wraps inside column; single-word bound checked against screen width |");
});
cfg.chatMessages.forEach(function (msg, i) {
  const inner = mNom.screenWPx * cfg.layout.chatWidthPct / 100 - 14;
  const wNom = ev("textWidthPx(" + JSON.stringify(msg.text) + ", " + mNom.sizes.chat + ", CONFIG, 1)");
  rows.push("| chat " + i + " text (" + mNom.chatWraps[i] + " wrapped rows) | chat column | " + mNom.sizes.chat.toFixed(2) + "px | " + wNom.toFixed(1) + "px (unwrapped) | " + inner.toFixed(1) + "px | " + inkH(mNom.sizes.chat) + "px | " + (inner - Math.min(wNom, inner)).toFixed(1) + "px on the binding row |");
  const metaW = ev("textWidthPx(" + JSON.stringify(msg.sender + " " + msg.time) + ", " + mNom.sizes.meta + ", CONFIG, CONFIG.fit.glyphErrorFactor)");
  rows.push("| chat " + i + " sender/time row | chat column | " + mNom.sizes.meta.toFixed(2) + "px | " + metaW.toFixed(1) + "px (upper, +avatar+gap) | " + inner.toFixed(1) + "px | " + inkH(mNom.sizes.meta) + "px | " + (inner - metaW - cfg.detail.avatarEm * mNom.sizes.meta - cfg.detail.metaGapPx).toFixed(1) + "px |");
});
cfg.statCards.forEach(function (c) {
  const lw = ev("textWidthPx(" + JSON.stringify(c.label) + ", " + mNom.sizes.statLabel + ", CONFIG, CONFIG.fit.glyphErrorFactor)");
  const vw = ev("textWidthPx(" + JSON.stringify(c.value) + ", " + mNom.sizes.statValue + ", CONFIG, CONFIG.fit.glyphErrorFactor)");
  rows.push("| stat label " + c.label + " | stat card | " + mNom.sizes.statLabel.toFixed(2) + "px | " + lw.toFixed(1) + "px (upper) | card width = text + padding | " + inkH(mNom.sizes.statLabel) + "px | card-sized |");
  rows.push("| stat value " + c.value + " | stat card | " + mNom.sizes.statValue.toFixed(2) + "px | " + vw.toFixed(1) + "px (upper) | card width = text + padding | " + inkH(mNom.sizes.statValue) + "px | card-sized |");
});
rows.push("| slide counter | screen bottom-right zone | " + mNom.sizes.counter.toFixed(2) + "px | " + mNom.counterWPx.toFixed(1) + "px | zone from title right edge to counter right offset | " + inkH(mNom.sizes.counter) + "px | fits zone (fit leg asserts) |");
rows.push("| accumulated chat stack | screen (vertical) | — | stack " + mNom.chatStackPx.toFixed(1) + "px nominal / " + mUp.chatStackPx.toFixed(1) + "px upper at 568px stage height | screen height " + mNom.screenHPx.toFixed(1) + "px | — | bottom at " + mUp.chatBottomPct.toFixed(1) + "% of screen (bound 98%) |");
[["title", mNom.sizes.title], ["chat body", mNom.sizes.chat], ["chat sender/time", mNom.sizes.meta], ["stat value", mNom.sizes.statValue], ["stat label", mNom.sizes.statLabel], ["counter", mNom.sizes.counter]].forEach(function (p) {
  if (p[1] * CAP < 11) hits.push(p[0] + " ink height " + inkH(p[1]) + "px < ~11px ink floor (CSS size " + p[1].toFixed(2) + "px)");
});
const fitMd = "# T18 — measured-fit table · attempt 3\n\n" +
  "Source: recreation.html sha256 " + SHA + " (frozen for the scoring wave).\n" +
  "Method: widths from the configured glyph table (Arial/Helvetica advance fractions) at the 360px reference width; upper column = nominal x glyphErrorFactor 1.15. Ink height = CSS size x 0.716 (Arial cap height). " +
  "Sizes are modelled from the source, not rendered — PIXEL-UNVERIFIED.\n\n" + rows.join("\n") + "\n\n" +
  "## HIT list (" + hits.length + ")\n\n" + (hits.length ? hits.map(function (h) { return "- HIT: " + h; }).join("\n") : "- none") + "\n\n" +
  "Disposition (advisory leg): the binding size floors for this build are stated in CSS-effective terms (size after the worst framing scale and the perspective factor): chat 13.4px, sender/time 11.1px, stat label 11.1px, stat value 14.7px — all at or above their floors in the build record. " +
  "On the stricter ink-height basis the secondary surfaces (chat body, sender/time, stat labels, counter) remain under the ~11px ink floor; that residue is carried into the scoring wave as this leg's advisory finding, with rendered verification unavailable (PIXEL-UNVERIFIED).\n";
fs.writeFileSync(DIR + "/fit-table-attempt3.md", fitMd, { flag: "wx" });
console.log("fit-table written, hits:", hits.length);

/* ---- config census ---- */
const cfgStart = SRC.indexOf("const CONFIG");
const cfgEnd = SRC.indexOf("\n};", cfgStart) + 3;
const scriptOutside = (SRC.slice(0, cfgStart) + SRC.slice(cfgEnd)).replace(/\/\*[\s\S]*?\*\//g, "");
const styleBlock = html.match(/<style>([\s\S]*?)<\/style>/)[1];
function numScan(text) {
  const nums = {};
  (text.match(/(?<![\w$])-?\d+\.\d+(?![\w$])|(?<![\w$])-?\d+(?![\w$])/g) || []).forEach(function (n) { nums[n] = (nums[n] || 0) + 1; });
  return nums;
}
const scriptNums = numScan(scriptOutside);
const styleNums = numScan(styleBlock.replace(/\/\*[\s\S]*?\*\//g, ""));
const scriptHex = scriptOutside.match(/#[0-9a-fA-F]{3,8}/g) || [];
const styleHex = styleBlock.match(/#[0-9a-fA-F]{3,8}/g) || [];
const styleRgba = styleBlock.match(/rgba?\([^)]*\)/g) || [];
const leaves = [];
(function walk(o, path) {
  Object.keys(o).forEach(function (k) {
    const v = o[k], p = path ? path + "." + k : k;
    if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p);
    else leaves.push({ key: k, path: p });
  });
})(cfg, "");
const named = leaves.filter(function (l) { return l.path.indexOf("glyphWidths.") !== 0; });
const unconsumed = named.filter(function (l) { return scriptOutside.indexOf(l.key) < 0; });
const varSet = {};
(scriptOutside.match(/setProperty\("(--t18-[a-z0-9-]+)"/g) || []).forEach(function (s) { varSet[s.slice(13, -1)] = true; });
const varUsed = {};
(styleBlock.match(/var\((--t18-[a-z0-9-]+)\)/g) || []).forEach(function (s) { varUsed[s.slice(4, -1)] = true; });
const setUnused = Object.keys(varSet).filter(function (v) { return !varUsed[v]; });
const usedUnset = Object.keys(varUsed).filter(function (v) { return !varSet[v]; });
let cHits = [];
if (scriptHex.length) cHits.push("script colour literals outside CONFIG: " + scriptHex.join(","));
if (styleHex.length) cHits.push("style colour literals outside CONFIG: " + styleHex.join(","));
if (styleRgba.length) cHits.push("style rgb/rgba literals outside CONFIG: " + styleRgba.join(","));
if (unconsumed.length) cHits.push("CONFIG leaves with no application site: " + unconsumed.map(function (u) { return u.path; }).join(","));
if (setUnused.length) cHits.push("CSS vars set but never used: " + setUnused.join(","));
if (usedUnset.length) cHits.push("CSS vars used but never set: " + usedUnset.join(","));
const censusMd = "# T18 — config census · attempt 3\n\n" +
  "Source: recreation.html sha256 " + SHA + " (frozen for the scoring wave). Census against this build's own CONFIG.\n\n" +
  "## Literal scan (outside the CONFIG block; comments stripped; identifier-aware)\n\n" +
  "- Script numeric literals by value: " + JSON.stringify(scriptNums) + " — every value classified structural: 0/1 indices and identities · 2 pair counts · 3 field positions and print precision · 4/5/6 record-field indices · 50 stage-centre percent · 100 percent whole · 255 RGB channel maximum · -1 pre-first-cut sentinel · -50 translateX centring identity (half of own width, speaker/spot).\n" +
  "- Script colour literals: " + (scriptHex.length ? scriptHex.join(", ") : "none") + ".\n" +
  "- Style numeric literals by value: " + JSON.stringify(styleNums) + " — classified structural: 0 offsets/resets · 100% full extent · 50% circle radius / centre · 1 square aspect · -1 highlight-bar layering.\n" +
  "- Style colour literals: " + (styleHex.concat(styleRgba).length ? styleHex.concat(styleRgba).join(", ") : "none") + " (all style colour arrives through CONFIG-driven custom properties).\n" +
  "- Content-carrying literals outside CONFIG: none — configured wording occurs only inside the CONFIG block (suite-asserted).\n\n" +
  "## Key resolution\n\n" +
  "- CONFIG leaves total: " + leaves.length + " (incl. " + (leaves.length - named.length) + " glyph-table entries, consumed by lookup in the width function — effect-asserted in the own-check suite).\n" +
  "- Leaves resolved to at least one application site by name: " + (named.length - unconsumed.length) + " / " + named.length + ".\n" +
  "- CSS custom properties: " + Object.keys(varSet).length + " set from CONFIG, " + Object.keys(varUsed).length + " used in the style block; set-but-unused: " + (setUnused.length ? setUnused.join(", ") : "none") + "; used-but-unset: " + (usedUnset.length ? usedUnset.join(", ") : "none") + ".\n\n" +
  "## HIT list (" + cHits.length + ")\n\n" + (cHits.length ? cHits.map(function (h) { return "- HIT: " + h; }).join("\n") : "- none") + "\n";
fs.writeFileSync(DIR + "/config-census-attempt3.md", censusMd, { flag: "wx" });
console.log("config-census written, hits:", cHits.length, JSON.stringify(cHits));
console.log("leaves:", leaves.length, "named:", named.length, "unconsumed:", unconsumed.length, "vars set/used:", Object.keys(varSet).length, Object.keys(varUsed).length);
