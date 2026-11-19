"use strict";
const fs = require("fs"), vm = require("vm");
const SRC_PATH = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T13-typing-comment-stack/recreation.html";
const html = fs.readFileSync(SRC_PATH, "utf8");
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.log("FAIL no script"); process.exit(1); }
fs.writeFileSync("/tmp/t13-script.js", m[1]);

class El {
  constructor(tag) {
    this.tagName = tag; this.children = []; this._text = "";
    const s = {}; s.setProperty = (k, v) => { s[k] = v; };
    this.style = s;
    const set = new Set();
    this.classList = { add: (...c) => c.forEach(x => set.add(x)), remove: (...c) => c.forEach(x => set.delete(x)),
      toggle: (c, f) => { if (f === undefined) f = !set.has(c); f ? set.add(c) : set.delete(c); }, contains: c => set.has(c), _set: set };
    this.clientWidth = 0;
  }
  set textContent(v) { this._text = v; if (v === "") this.children = []; }
  get textContent() { if (this.children.length) return this.children.map(c => c.textContent).join(""); return this._text; }
  appendChild(ch) { this.children.push(ch); return ch; }
}
function load(search, opts) {
  opts = opts || {};
  const ids = {};
  ["stage","validationBanner","postCard","postAuthor","postHandle","postClose","postBody","stamp","postFoot","commentsTitle","sortLabel","stack"].forEach(id => { ids[id] = new El("div"); });
  ids.stage.clientWidth = opts.width || 1916;
  const documentStub = {
    getElementById: id => ids[id],
    createElement: tag => new El(tag),
    createTextNode: t => ({ textContent: t, children: [] })
  };
  if (opts.noSegmenter) { /* Intl without Segmenter */ }
  const sandbox = {
    document: documentStub,
    location: { search: search || "" },
    performance: { now: () => 0 },
    requestAnimationFrame: () => {},
    console: console,
    URLSearchParams: URLSearchParams,
    Intl: opts.noSegmenter ? {} : Intl,
    setTimeout: setTimeout
  };
  sandbox.window = sandbox;
  sandbox.window.addEventListener = () => {};
  vm.createContext(sandbox);
  vm.runInContext(m[1], sandbox, { filename: "recreation-script.js" });
  return { T13: sandbox.window.T13, ids, sandbox };
}

let pass = 0, fail = 0; const failures = [];
function check(name, cond, extra) {
  if (cond) { pass++; } else { fail++; failures.push(name + (extra ? " :: " + extra : "")); }
  console.log((cond ? "PASS " : "FAIL ") + name + (extra ? " :: " + extra : ""));
}

/* ---------- Feasibility instrument (360px budget, specimen config) ---------- */
console.log("=== FEASIBILITY (named instrument: t13-feasibility-instrument = this file, section F) ===");
{
  const { T13 } = load("");
  const mn = T13.modelFor("narrow", 360);
  console.log("fitPath=" + mn.fitPath + " postHeightCqw=" + mn.postHeightCqw.toFixed(2) + " stackCqw=" + mn.stackCqw.toFixed(2) + " availCqw=" + mn.availCqw.toFixed(2));
  mn.titles.forEach((t, i) => console.log("F title" + i + " lines=" + t.lines + " maxW=" + t.maxWidthPx.toFixed(1) + " inner=" + mn.innerPx.toFixed(1) + " uncertain=" + t.uncertain));
  check("F1 narrow stack fits (360px)", mn.stackCqw <= mn.availCqw, mn.stackCqw.toFixed(2) + "<=" + mn.availCqw.toFixed(2));
  check("F2 title floor 14px at 360", Math.abs(mn.titleFontPx - 14.0) < 0.1, String(mn.titleFontPx));
  check("F3 head/foot floor 11px at 360", mn.headFontPx >= 10.9 && mn.footFontPx >= 10.9, mn.headFontPx.toFixed(2));
  check("F4 all specimen titles <=2 lines narrow", mn.titles.every(t => t.lines <= 2));
  check("F5 all headers fit narrow", mn.headers.every(h => h.fits), JSON.stringify(mn.headers.map(h => Math.round(h.widthPx))));
  const mw = T13.modelFor("wide", 1916);
  check("F6 wide stack fits", mw.stackCqw <= mw.availCqw, mw.stackCqw.toFixed(2) + "<=" + mw.availCqw.toFixed(2));
  check("F7 narrow post height measured (not 42 constant)", mn.postHeightCqw > 20 && mn.postHeightCqw < 60 && Math.abs(mn.postHeightCqw - 42) > 0.5, mn.postHeightCqw.toFixed(2));
}

/* ---------- Default scenario ---------- */
{
  const { T13, ids } = load("");
  const T = T13.testing;
  check("D1 no validation errors (default)", T13.validationErrors.length === 0, JSON.stringify(T13.validationErrors));
  check("D2 not frozen", T13.frozen === false);
  check("D3 endMs 8808", T13.scheduleEndMs === 8808, String(T13.scheduleEndMs));
  check("D4 accounting identity 2250+8808+942=12000", T13.windowAccounting.identityHolds === true && T13.windowAccounting.residualMs === 942, JSON.stringify(T13.windowAccounting));
  check("D5 six cards constructed", T.cardEls().length === 6);
  // opening state at t=0
  T.render(0);
  const els = T.cardEls();
  check("D6 card1 landed colours at t=0 (q=1)", els[0].el.style.background === "rgb(30,42,36)", els[0].el.style.background);
  check("D7 card1 opacity 1 at t=0 (no entrance in progress)", els[0].el.style.opacity === "1");
  check("D8 card2 typing tint at t=0", els[1].el.style.background === "#22344e", els[1].el.style.background);
  check("D9 card2 prefix at t=0", els[1].title.textContent.indexOf("Chief Executive") === 0, els[1].title.textContent);
  check("D10 card3 hidden at t=0", els[2].el.style.opacity === "0");
  // fixed-time landing checks on card 3 (index 2): typeEnd from schedule
  const sched = T.buildScheduleFor(T13.config.cards, T13.config.beats, T13.config.opening, T13.config.finalHoldMs);
  const te = sched.cards[2].typeEnd;
  T.render(te - 1);
  const before = els[2].el.style.background;
  T.render(te + 60);
  const mid = els[2].el.style.background;
  T.render(te + 120);
  const after = els[2].el.style.background;
  check("D11 landing before: typing tint", before === "#22344e", before);
  check("D12 landing mid: interpolated (not endpoints)", mid !== "#22344e" && mid !== "rgb(30,42,36)", mid);
  check("D13 landing after: landed tint", after === "rgb(30,42,36)", after);
  // restart + reverse seek reproduce
  T13.restart();
  const r0 = T.cardEls()[1].el.style.background;
  T.render(te + 60);
  const mid2 = T.cardEls()[2].el.style.background;
  T.render(te - 500); T.render(te + 60);
  const mid3 = T.cardEls()[2].el.style.background;
  check("D14 restart reproduces t=0 card2 tint", r0 === "#22344e", r0);
  check("D15 restart reproduces landing midpoint", mid2 === mid, mid2 + " vs " + mid);
  check("D16 reverse seek reproduces landing midpoint", mid3 === mid, mid3);
  // caret phase
  check("D17 caret opacity is t-function", T.caretOpacityAt(0) === 1 && T.caretOpacityAt(600) === 0 && T.caretOpacityAt(1000) === 1 && T.caretOpacityAt(2600) === 0);
  // caret persistent element: same node across renders
  T.render(1000); const c1 = T.cardEls()[2].caret;
  T.render(1100); const c2 = T.cardEls()[2].caret;
  check("D18 caret element persistent per card", c1 === c2);
  // landMs effect: mutate and recompute
  const q1 = T.landingProgressAt(te + 60, te);
  T13.config.landMs = 240;
  const q2 = T.landingProgressAt(te + 60, te);
  T13.config.landMs = 120;
  check("D19 landMs mutation changes landing progress", q1 === 0.5 && q2 === 0.25, q1 + "/" + q2);
  // tint token effect
  const colA = T.cardColorsAt(2, te + 120).bg;
  T13.config.palette.cardBgLanded = "#000000";
  const colB = T.cardColorsAt(2, te + 120).bg;
  T13.config.palette.cardBgLanded = "#1e2a24";
  check("D20 landed tint token changes computed bg", colA !== colB && colB === "rgb(0,0,0)", colA + "/" + colB);
}

/* ---------- Per-card-count opening validity 1..8 ---------- */
{
  const { T13 } = load("");
  const T = T13.testing;
  let allOk = true, detail = [];
  for (let n = 1; n <= 8; n++) {
    const titles = ["Alpha One","Bravo Two","Charlie Three","Delta Four","Echo Five","Foxtrot Six","Golf Seven","Hotel Eight"].slice(0, n);
    const search = "?titles=" + encodeURIComponent(titles.join("|"));
    const r = load(search);
    if (!(r.T13.scheduleEndMs > 0)) { allOk = false; detail.push(n + ":" + r.T13.scheduleEndMs); }
    const s = r.T13.testing.buildScheduleFor(r.T13.config.cards, r.T13.config.beats, r.T13.config.opening, r.T13.config.finalHoldMs);
    for (let i = 1; i < s.cards.length; i++) if (s.cards[i].appearStart < s.cards[i - 1].typeEnd) { allOk = false; detail.push(n + "seq"); }
    const nonOverflow = r.T13.validationErrors.filter(e => e.indexOf("T13_STACK_OVERFLOW") !== 0);
    if (nonOverflow.length) { allOk = false; detail.push(n + "err:" + nonOverflow.join(",")); }
    if (r.T13.validationErrors.length) detail.push(n + "named-freeze:" + r.T13.validationErrors.join(","));
  }
  check("E1 endMs>0 + schedule coherent for counts 1..8 (overflow-only named freeze allowed)", allOk, detail.join(" "));
  const one = load("?titles=" + encodeURIComponent("Solo Card Title"));
  const s1 = one.T13.testing.buildScheduleFor(one.T13.config.cards, one.T13.config.beats, one.T13.config.opening, one.T13.config.finalHoldMs);
  check("E2 one-card schedules normally from t=0 (no pre-landed)", s1.cards[0].appearStart === 0 && !s1.cards[0].preLanded, JSON.stringify(s1.cards[0]));
}

/* ---------- Override policy ---------- */
{
  const bad = load("?charMs=33abc");
  check("P1 charMs=33abc discarded, recorded, not frozen", bad.T13.overrideOutcomes.length === 1 && bad.T13.overrideOutcomes[0].key === "charMs" && bad.T13.frozen === false && bad.T13.config.beats[0].charMs === 33, JSON.stringify(bad.T13.overrideOutcomes));
  const inf = load("?charMs=Infinity");
  check("P2 charMs=Infinity discarded", inf.T13.overrideOutcomes.length === 1 && inf.T13.config.beats[0].charMs === 33);
  const junk = load("?gapCqw=1x");
  check("P3 gapCqw=1x discarded", junk.T13.overrideOutcomes.length === 1 && junk.T13.config.layout.wide.stackGapCqw === 0.8);
  const zero = load("?gapCqw=0");
  check("P4 gapCqw=0 lawful (accepted)", zero.T13.overrideOutcomes.length === 0 && zero.T13.config.layout.wide.stackGapCqw === 0);
  const good = load("?charMs=20");
  check("P5 charMs=20 accepted + accounting non-specimen", good.T13.overrideOutcomes.length === 0 && good.T13.config.beats[0].charMs === 20 && good.T13.windowAccounting.identityHolds === false && good.T13.windowAccounting.specimenIdentity === false);
}

/* ---------- Fail-closed freeze ---------- */
{
  const long = "This Is An Extremely Long Replacement Title That Cannot Possibly Fit Within Two Lines At Phone Width Ever";
  const r = load("?titles=" + encodeURIComponent(["Ok One", long, "Ok Three"].join("|")));
  check("Z1 overlong effective title freezes", r.T13.frozen === true && r.T13.validationErrors.length > 0, JSON.stringify(r.T13.validationErrors));
  check("Z2 frozen: zero cards in stack", r.T13.testing.cardEls().length === 0 && r.ids.stack.children.length === 0);
  check("Z3 frozen: banner shown", r.ids.validationBanner.style.display === "block");
  const before = r.T13.isPlaying();
  r.T13.play(); r.T13.setTime(500); r.T13.restart();
  check("Z4 frozen: clock APIs are no-ops holding error state", r.T13.isPlaying() === before && r.T13.frozen === true);
}

/* ---------- Added-card holds ---------- */
{
  const titles = ["One A","Two B","Three C","Four D","Five E","Six F","Seven G","Eight H"];
  const r = load("?titles=" + encodeURIComponent(titles.join("|")));
  const beats = r.T13.config.beats;
  check("H1 added intermediate cards hold >0", beats[6].holdAfterMs > 0, "beat7=" + beats[6].holdAfterMs);
  check("H2 true final card hold 0", beats[7].holdAfterMs === 0, "beat8=" + beats[7].holdAfterMs);
  check("H3 derived prefix matches replacement card2", r.T13.config.opening.secondCardPrefix === r.T13.graphemes("Two B").slice(0, 15).join(""));
}

/* ---------- Grapheme fallback (no Segmenter) ---------- */
{
  const r = load("", { noSegmenter: true });
  const g = r.T13.graphemes;
  check("G1 combining sequence = 1 cluster", g("é").length === 1, JSON.stringify(g("é")));
  check("G2 ZWJ family = 1 cluster", g("👨‍👩‍👧").length === 1, String(g("👨‍👩‍👧").length));
  check("G3 regional-indicator pair = 1 cluster", g("🇺🇸").length === 1, String(g("🇺🇸").length));
  check("G4 skin-tone emoji = 1 cluster", g("👍🏽").length === 1, String(g("👍🏽").length));
  check("G5 keycap = 1 cluster", g("1️⃣").length === 1, String(g("1️⃣").length));
  check("G6 plain text splits per grapheme", g("abc").length === 3);
  const rng = r.T13.graphemeRangeOf("Café Life", "fé");
  check("G7 highlight range at grapheme index with combining content", !!rng && rng.start === 2, JSON.stringify(rng));
}

/* ---------- Swap test (supported set) ---------- */
{
  const titles = ["Directrice des Choses", "Capitaine du Rien", "Ministre des Pauses"];
  const r = load("?titles=" + encodeURIComponent(titles.join("|")) + "&charMs=20&accent=" + encodeURIComponent("#ff2fb3"));
  const s = r.T13.testing.buildScheduleFor(r.T13.config.cards, r.T13.config.beats, r.T13.config.opening, r.T13.config.finalHoldMs);
  let seq = true;
  for (let i = 1; i < s.cards.length; i++) if (s.cards[i].appearStart < s.cards[i - 1].typeEnd) seq = false;
  check("S1 swap: valid, sequential, no compression", r.T13.validationErrors.length === 0 && seq && r.T13.scheduleEndMs > 0, "end=" + r.T13.scheduleEndMs);
  check("S2 swap: accent consumed", r.T13.config.palette.accent === "#ff2fb3");
}

/* ---------- Displayed-state model: wrapped states + caret ---------- */
{
  const { T13 } = load("");
  [360, 390].forEach(w => {
    const mn = T13.modelFor("narrow", w);
    check("M" + w + " narrow containment", mn.stackCqw <= mn.availCqw, mn.stackCqw.toFixed(1) + "<=" + mn.availCqw.toFixed(1));
  });
  const m1916 = T13.modelFor("wide", 1916);
  check("M1916 wide containment + title px", m1916.stackCqw <= m1916.availCqw && Math.abs(m1916.titleFontPx - 35.45) < 0.2, m1916.titleFontPx.toFixed(2));
  const L = T13.config.layout.narrow;
  const caretHpx = parseFloat(L.caretHeight) / 100 * 360;
  check("M-caret narrow caret height = title token (~14px at 360)", Math.abs(caretHpx - 14.0) < 0.1, caretHpx.toFixed(2));
  // tint contrast: typing/landed bg vs card ink (relative luminance ratio, source-modelled)
  function lum(hex) { const n = parseInt(hex.slice(1), 16); const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(n >> 16 & 255) + 0.7152 * f(n >> 8 & 255) + 0.0722 * f(n & 255); }
  function ratio(a, b) { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  check("M-contrast typing tint vs ink >= 4.5", ratio(T13.config.palette.cardBgTyping, T13.config.palette.cardInk) >= 4.5, ratio(T13.config.palette.cardBgTyping, T13.config.palette.cardInk).toFixed(2));
  check("M-contrast landed tint vs ink >= 4.5", ratio(T13.config.palette.cardBgLanded, T13.config.palette.cardInk) >= 4.5, ratio(T13.config.palette.cardBgLanded, T13.config.palette.cardInk).toFixed(2));
}

console.log("=== TOTAL: " + pass + " PASS, " + fail + " FAIL ===");
if (failures.length) { console.log("FAILURES:"); failures.forEach(f => console.log(" - " + f)); }
process.exit(fail ? 1 : 0);
