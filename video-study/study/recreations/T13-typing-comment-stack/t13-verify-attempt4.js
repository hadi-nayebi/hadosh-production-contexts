"use strict";
const fs = require("fs"), vm = require("vm");
const DIR = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T13-typing-comment-stack";
const html = fs.readFileSync(DIR + "/recreation.html", "utf8");
const compHtml = fs.readFileSync(DIR + "/comparison.html", "utf8");
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.log("FAIL no script"); process.exit(1); }
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
  const documentStub = { getElementById: id => ids[id], createElement: tag => new El(tag), createTextNode: t => ({ textContent: t, children: [] }) };
  const sandbox = { document: documentStub, location: { search: search || "" }, performance: { now: () => 0 },
    requestAnimationFrame: () => {}, console: console, URLSearchParams: URLSearchParams,
    Intl: opts.noSegmenter ? {} : Intl, setTimeout: setTimeout };
  sandbox.window = sandbox; sandbox.window.addEventListener = () => {};
  vm.createContext(sandbox);
  vm.runInContext(m[1], sandbox, { filename: "recreation-script.js" });
  return { T13: sandbox.window.T13, ids, sandbox };
}
let pass = 0, fail = 0; const failures = [];
function check(name, cond, extra) {
  if (cond) { pass++; } else { fail++; failures.push(name + (extra ? " :: " + extra : "")); }
  console.log((cond ? "PASS " : "FAIL ") + name + (extra ? " :: " + extra : ""));
}

/* ===== F: feasibility valve (recomputed from source counts) ===== */
{
  const { T13 } = load("");
  const counts = T13.config.cards.map(c => T13.graphemes(c.text).length);
  check("F1 grapheme counts 31,30,47,49,25,22", JSON.stringify(counts) === "[31,30,47,49,25,22]", counts.join(","));
  const mn = T13.modelFor("narrow", 360), mw = T13.modelFor("wide", 1916);
  check("F2 narrow stack fits at final tokens", mn.stackCqw <= mn.availCqw, mn.stackCqw.toFixed(2) + "<=" + mn.availCqw.toFixed(2));
  check("F3 wide stack fits at final tokens", mw.stackCqw <= mw.availCqw, mw.stackCqw.toFixed(2) + "<=" + mw.availCqw.toFixed(2));
  check("F4 supporting floor clears 12px strictly at 360", mn.supportingPx > 12, mn.supportingPx.toFixed(3));
  check("F5 supporting at 390 also clears", T13.modelFor("narrow", 390).supportingPx > 12, T13.modelFor("narrow", 390).supportingPx.toFixed(2));
  check("F6 all chrome surfaces fit both modes", ["wide","narrow"].every(mode => {
    const mm = T13.modelFor(mode, mode === "wide" ? 1916 : 360);
    return ["postHead","commentsHead","cardFoot","postFoot","stamp"].every(s => mm.chrome[s].fits) && mm.chrome.avatarInitials.every(a => a.fits);
  }));
  check("F7 every title prefix caret-inclusive fits both modes", ["wide","narrow"].every(mode => {
    const mm = T13.modelFor(mode, mode === "wide" ? 1916 : 360);
    return mm.titles.every(t => !t.prefixOverflow && !t.prefixUncertain && t.prefixLines <= 2);
  }));
}

/* ===== D: default behaviour + timing allocation ===== */
{
  const { T13, ids } = load("");
  const T = T13.testing;
  check("D1 no validation errors (default)", T13.validationErrors.length === 0, JSON.stringify(T13.validationErrors));
  check("D2 not frozen", T13.frozen === false);
  check("D3 endMs exactly 12000", T13.scheduleEndMs === 12000, String(T13.scheduleEndMs));
  check("D4 accounting: performance 12000, residual 0, identity holds", T13.windowAccounting.performanceMs === 12000 && T13.windowAccounting.residualMs === 0 && T13.windowAccounting.identityHolds === true, JSON.stringify(T13.windowAccounting));
  check("D5 retired accounting token absent from source", !html.includes("postWindowHoldMs"));
  const s = T.buildScheduleFor(T13.config.cards, T13.config.beats, T13.config.opening, T13.config.finalHoldMs);
  check("D6 beat instants: card2 ends 660, card3 starts 1300", s.cards[1].typeEnd === 660 && s.cards[2].appearStart === 1300, JSON.stringify(s.cards.map(c => [c.appearStart, c.typeEnd])));
  check("D7 beat instants: card4 3980, card5 6740, card6 8840->10028", s.cards[3].appearStart === 3980 && s.cards[4].appearStart === 6740 && s.cards[5].appearStart === 8840 && s.cards[5].typeEnd === 10028);
  check("D8 six cards constructed", T.cardEls().length === 6);
  T.render(0);
  const els = T.cardEls();
  check("D9 card1 landed colours at t=0", els[0].el.style.background === "rgb(30,42,36)", els[0].el.style.background);
  check("D10 card2 typing tint + exact prefix at t=0", els[1].el.style.background === "#22344e" && els[1].title.textContent.indexOf("Chief Executive") === 0, els[1].title.textContent);
  check("D11 card2 caret displayed at t=0", els[1].caret.style.display === "inline-block", els[1].caret.style.display);
  check("D12 card3 hidden at t=0", els[2].el.style.opacity === "0");
  // intermediate displayed state: card3 (index2) mid-typing
  const s3 = s.cards[2];
  const tMid = s3.typeStart + 10 * T13.config.beats[2].charMs;
  T.render(tMid);
  check("D13 intermediate: card3 shows 10 graphemes", T13.graphemes(els[2].title.textContent).length === 10, els[2].title.textContent);
  check("D14 intermediate: card3 caret visible + typing tint", els[2].caret.style.display === "inline-block" && els[2].el.style.background === "#22344e");
  // landing states card3
  const te = s3.typeEnd;
  T.render(te + 60); const mid = els[2].el.style.background;
  T.render(te + 120); const after = els[2].el.style.background;
  check("D15 landing midpoint interpolated", mid !== "#22344e" && mid !== "rgb(30,42,36)", mid);
  check("D16 landing complete colour", after === "rgb(30,42,36)", after);
  // final state at 12000
  T.render(12000);
  check("D17 final: all cards landed colour, carets hidden", els.every(e => e.el.style.background === "rgb(30,42,36)") && els.every(e => e.caret.style.display === "none"));
  check("D18 final: full titles displayed", els.every((e, i) => e.title.textContent === T13.config.cards[i].text));
  // restart / reverse seek determinism
  T13.restart(); T.render(tMid);
  check("D19 restart reproduces intermediate state", T13.graphemes(els[2].title.textContent).length === 10 && els[2].el.style.background === "#22344e");
  T.render(te + 60); const mid2 = els[2].el.style.background;
  T.render(0); T.render(te + 60); const mid3 = els[2].el.style.background;
  check("D20 seek reproduces landing midpoint", mid2 === mid && mid3 === mid, mid + "/" + mid2 + "/" + mid3);
  check("D21 caret duty token consumed", T.caretOpacityAt(0) === 1 && T.caretOpacityAt(600) === 0 && T.caretOpacityAt(1000) === 1);
  T13.config.caretDuty = 0.3;
  check("D22 caretDuty mutation changes phase", T.caretOpacityAt(400) === 0, String(T.caretOpacityAt(400)));
  T13.config.caretDuty = 0.55;
  check("D23 self-start: playing at load on a fresh instance", load("").T13.isPlaying() === true);
  const fresh = load("");
  check("D24 self-start: load render shows card2 prefix without external call", fresh.T13.testing.cardEls()[1].title.textContent.indexOf("Chief Executive") === 0, fresh.T13.testing.cardEls()[1].title.textContent);
}

/* ===== C1: hold/duration validation + adversarial set ===== */
{
  const { T13 } = load("");
  const T = T13.testing, C = T13.config;
  const keep = { hold: C.beats[2].holdAfterMs, land: C.landMs, fin: C.finalHoldMs, blink: C.caretBlinkMs, char: C.beats[0].charMs };
  C.beats[2].holdAfterMs = 50;
  check("A1 hold below landing freezes named", T.validateConfig().includes("T13_HOLD_LT_LAND:2"), JSON.stringify(T.validateConfig()));
  C.beats[2].holdAfterMs = keep.hold;
  C.landMs = 0;
  check("A2 landMs=0 invalid named", T.validateConfig().includes("T13_DURATION_INVALID:landMs"));
  C.landMs = keep.land; C.finalHoldMs = Infinity;
  check("A3 finalHoldMs non-finite invalid named", T.validateConfig().includes("T13_DURATION_INVALID:finalHoldMs"));
  C.finalHoldMs = keep.fin; C.caretBlinkMs = 99999;
  check("A4 caretBlinkMs above window invalid named", T.validateConfig().includes("T13_DURATION_INVALID:caretBlinkMs"));
  C.caretBlinkMs = keep.blink; C.beats[0].charMs = NaN;
  check("A5 NaN beat rate invalid", T.validateConfig().includes("T13_BEAT_INVALID"));
  C.beats[0].charMs = keep.char;
  const cardsKeep = C.cards; C.cards = null;
  let threw = false, errs = null;
  try { errs = T.validateConfig(); } catch (e) { threw = true; }
  check("A6 null card group: named error, no throw", !threw && errs && errs.includes("T13_CONFIG_INVALID"), threw ? "threw" : JSON.stringify(errs));
  C.cards = cardsKeep;
  check("A7 restored config validates clean", T.validateConfig().length === 0, JSON.stringify(T.validateConfig()));
  const huge = load("?titles=" + encodeURIComponent(["Ok One", "SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilistic", "Ok Three"].join("|")));
  check("A8 single oversized word: named freeze, never silent clip", huge.T13.frozen === true && huge.T13.validationErrors.length > 0, JSON.stringify(huge.T13.validationErrors));
}

/* ===== C4: unit-faithful modelling ===== */
{
  const { T13 } = load("");
  const T = T13.testing, C = T13.config;
  check("U1 parse px token", T.parseUnitToken("20px").value === 20 && T.parseUnitToken("20px").unit === "px");
  check("U2 parse composite token per component", !!T.parseUnitToken("8px 12px").components && T.parseUnitToken("8px 12px").components.length === 2);
  const keepF = C.layout.narrow.titleFont;
  C.layout.narrow.titleFont = "20px";
  check("U3 font token 20px models as 20px (not cqw)", T13.modelFor("narrow", 360).titleFontPx === 20, String(T13.modelFor("narrow", 360).titleFontPx));
  C.layout.narrow.titleFont = "5%";
  check("U4 font token 5% models against stage width", Math.abs(T13.modelFor("narrow", 360).titleFontPx - 18) < 0.01, String(T13.modelFor("narrow", 360).titleFontPx));
  C.layout.narrow.titleFont = keepF;
  check("U5 scaled token keeps its unit", T.scaledToken("2.8cqw", 0.5) === "1.4cqw" && T.scaledToken("10px", 0.5) === "5px", T.scaledToken("10px", 0.5));
  const keepDy = C.layout.wide.entranceDy;
  C.layout.wide.entranceDy = "10px";
  T.render(0);
  const tr = T.cardEls()[3].el.style.transform;
  check("U6 entrance displacement rendered in its configured unit", tr === "translateY(10px)", tr);
  C.layout.wide.entranceDy = keepDy;
}

/* ===== C6b: whitespace mark remap ===== */
{
  const { T13 } = load("");
  const T = T13.testing;
  const r = T.markRangeFor("  Alpha   Slopcore  Beta ", "Slopcore");
  check("W1 mark range computed on normalized sequence", !!r && r.start === 6 && r.end === 14, JSON.stringify(r));
  const norm = T.normalizeWs("  Alpha   Slopcore  Beta ");
  check("W2 normalized graphemes at range spell the highlight", T13.graphemes(norm).slice(r.start, r.end).join("") === "Slopcore");
  const fl = T.fitLines("  Alpha   Slopcore  Beta ", 313, 700, 14, r, 2.16);
  check("W3 fitting consumes the normalized range without error", fl.lines >= 1 && fl.maxWidthPx <= 314, JSON.stringify(fl));
}

/* ===== C7/C8 + override policy ===== */
{
  const bad1 = load("?accent=" + encodeURIComponent("#fff"));
  check("O1 shorthand accent rejected + recorded, default kept", bad1.T13.overrideOutcomes.some(o => o.key === "accent" && o.outcome === "rejected-discarded") && bad1.T13.config.palette.accent === "#5b8def", JSON.stringify(bad1.T13.overrideOutcomes));
  const bad2 = load("?accent=red&cardBg=" + encodeURIComponent("junk"));
  check("O2 named colour + junk cardBg rejected + recorded", bad2.T13.overrideOutcomes.filter(o => o.outcome === "rejected-discarded").length === 2 && bad2.T13.config.palette.cardBg === "#161a21");
  const cols = bad2.T13.testing.cardColorsAt(0, 0);
  check("O3 landing interpolation never NaN after rejections", !/NaN/.test(cols.bg) && !/NaN/.test(cols.border), cols.bg);
  const good = load("?accent=" + encodeURIComponent("#ff2fb3") + "&charMs=20");
  check("O4 valid hex accent accepted", good.T13.config.palette.accent === "#ff2fb3" && good.T13.overrideOutcomes.length === 0);
  const seven = ["One A","Two B","Three C","Four D","Five E","Six F","Seven G"];
  const r7 = load("?titles=" + encodeURIComponent(seven.join("|")) + "&charMs=25");
  check("O5 rate override reaches added beats (7 titles)", r7.T13.config.beats.length === 7 && r7.T13.config.beats.every(b => b.charMs === 25), JSON.stringify(r7.T13.config.beats.map(b => b.charMs)));
  check("O6 7-title layout outcome is the named overflow freeze (separate from rate)", r7.T13.validationErrors.some(e => e.indexOf("T13_STACK_OVERFLOW") === 0), JSON.stringify(r7.T13.validationErrors));
  const eight = seven.concat(["Eight H"]);
  const r8 = load("?titles=" + encodeURIComponent(eight.join("|")) + "&charMs=25");
  check("O7 rate override reaches added beats (8 titles)", r8.T13.config.beats.length === 8 && r8.T13.config.beats.every(b => b.charMs === 25));
  const r8b = load("?titles=" + encodeURIComponent(eight.join("|")));
  check("O8 added beats default from the added-card tokens", r8b.T13.config.beats[6].appearMs === r8b.T13.config.addedCardBeat.appearMs && r8b.T13.config.beats[6].charMs === r8b.T13.config.addedCardBeat.charMs && r8b.T13.config.beats[7].charMs === r8b.T13.config.addedCardBeat.charMs, JSON.stringify(r8b.T13.config.beats.map(b => [b.appearMs, b.charMs])));
  check("O9 prefix length from its token", r8b.T13.config.opening.secondCardPrefix === r8b.T13.graphemes("Two B").slice(0, r8b.T13.config.opening.prefixGraphemes).join(""));
  const bad = load("?charMs=33abc");
  check("O10 trailing-junk rate discarded + recorded", bad.T13.overrideOutcomes.length === 1 && bad.T13.config.beats[0].charMs === 33 && bad.T13.frozen === false);
  const zero = load("?gapCqw=0");
  check("O11 gap 0 lawful", zero.T13.overrideOutcomes.length === 0 && zero.T13.config.layout.wide.stackGapCqw === 0);
}

/* ===== C9: consumption census + dual consumers ===== */
{
  const { T13, ids } = load("");
  const T = T13.testing, C = T13.config;
  const cfgStart = html.indexOf("const CONFIG =");
  const cfgEnd = html.indexOf("const OVERRIDE_OUTCOMES");
  const outside = html.slice(0, cfgStart) + html.slice(cfgEnd);
  const leaves = [];
  (function walk(o, path) {
    Object.keys(o).forEach(k => {
      const v = o[k], p = path ? path + "." + k : k;
      if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p);
      else leaves.push({ key: k, path: p });
    });
  })(C, "");
  const metaOnly = { "reason": 1 };
  const unconsumed = leaves.filter(l => !metaOnly[l.key] && !outside.includes(l.key) && !outside.includes('"' + l.key + '"'));
  check("K1 every CONFIG leaf key is consumed outside the CONFIG block", unconsumed.length === 0, JSON.stringify(unconsumed.map(u => u.path)));
  check("K2 retired token has no binding anywhere", !html.includes("postWindowHoldMs"));
  // dual consumption: line-height token drives CSS var + model height
  ids.stage.clientWidth = 360;
  T13.testing.render(0);
  const narrow = T.applyLayout ? null : null;
  const mBefore = T13.modelFor("narrow", 360);
  const keepLH = C.layout.narrow.titleLineHeight;
  C.layout.narrow.titleLineHeight = 2;
  const mAfter = T13.modelFor("narrow", 360);
  check("K3 line-height token changes modelled stack height", mAfter.stackCqw > mBefore.stackCqw, mBefore.stackCqw.toFixed(2) + "->" + mAfter.stackCqw.toFixed(2));
  C.layout.narrow.titleLineHeight = keepLH;
  check("K4 stage max width applied from CONFIG", ids.stage.style.maxWidth === "1916px", ids.stage.style.maxWidth);
  const keepMW = C.stageMaxWidthPx; C.stageMaxWidthPx = 1200;
  const { T13: T13b, ids: idsB } = load("");
  check("K5 banner colours are palette-driven vars", idsB.stage.style["--bannerBg"] === T13b.config.palette.bannerBg && idsB.stage.style["--bannerInk"] === T13b.config.palette.bannerInk, idsB.stage.style["--bannerBg"]);
  C.stageMaxWidthPx = keepMW;
  check("K6 stylesheet carries no stage max-width literal", !/#stage\{[^}]*max-width/.test(html));
  check("K7 stylesheet carries no banner colour literals", !/#validationBanner\{[^}]*(#7a1020|#fff\b)/.test(html));
  check("K8 box model: narrow stage border-box in source", /#stage\.narrow\{[^}]*box-sizing:border-box/.test(html) && /#stage\{[^}]*box-sizing:border-box/.test(html));
  check("K9 narrow inner width priced under border-box arithmetic", Math.abs(T13.modelFor("narrow", 360).innerPx - (360 - 2 * (2.8 * 3.6) - 2 * (3.33 * 3.6) - 0.83 * 3.6)) < 0.6, T13.modelFor("narrow", 360).innerPx.toFixed(1));
}

/* ===== counts, freeze, swap, segmentation (carried machinery) ===== */
{
  const { T13 } = load("");
  let allOk = true; const detail = [];
  for (let n = 1; n <= 8; n++) {
    const titles = ["Alpha One","Bravo Two","Charlie Three","Delta Four","Echo Five","Foxtrot Six","Golf Seven","Hotel Eight"].slice(0, n);
    const r = load("?titles=" + encodeURIComponent(titles.join("|")));
    if (!(r.T13.scheduleEndMs > 0)) { allOk = false; detail.push(n + "end"); }
    const s = r.T13.testing.buildScheduleFor(r.T13.config.cards, r.T13.config.beats, r.T13.config.opening, r.T13.config.finalHoldMs);
    for (let i = 1; i < s.cards.length; i++) if (s.cards[i].appearStart < s.cards[i - 1].typeEnd) { allOk = false; detail.push(n + "seq"); }
  }
  check("S1 counts 1-8: positive totals, strictly sequential", allOk, detail.join(" "));
  const long = "This Is An Extremely Long Replacement Title That Cannot Possibly Fit Within Two Lines At Phone Width Ever";
  const rz = load("?titles=" + encodeURIComponent(["Ok One", long, "Ok Three"].join("|")));
  check("S2 overlong title freezes with zero cards + banner", rz.T13.frozen === true && rz.T13.testing.cardEls().length === 0 && rz.ids.validationBanner.style.display === "block");
  const titles = ["Directrice des Choses", "Capitaine du Rien", "Ministre des Pauses"];
  const rs = load("?titles=" + encodeURIComponent(titles.join("|")) + "&charMs=20&accent=" + encodeURIComponent("#ff2fb3"));
  const ss = rs.T13.testing.buildScheduleFor(rs.T13.config.cards, rs.T13.config.beats, rs.T13.config.opening, rs.T13.config.finalHoldMs);
  let seq = true;
  for (let i = 1; i < ss.cards.length; i++) if (ss.cards[i].appearStart < ss.cards[i - 1].typeEnd) seq = false;
  rs.T13.testing.render(rs.T13.scheduleEndMs);
  check("S3 swap: valid, sequential, all type fully", rs.T13.validationErrors.length === 0 && seq && rs.T13.testing.cardEls().every((e, i) => e.title.textContent === titles[i]));
  const rg = load("", { noSegmenter: true });
  const g = rg.T13.graphemes;
  check("S4 fallback clusters preserved", g("é").length === 1 && g("👨‍👩‍👧").length === 1 && g("🇺🇸").length === 1 && g("👍🏽").length === 1 && g("1️⃣").length === 1 && g("abc").length === 3);
}

/* ===== comparison clock compatibility ===== */
{
  const { T13 } = load("");
  check("X1 comparison handle is 500ms", /HANDLE_MS = 500/.test(compHtml));
  check("X2 comparison slaves recreation to video minus handle", compHtml.includes("api.setTime(video.currentTime * 1000 - HANDLE_MS)"));
  check("X3 recreation end maps inside the segment (500 + 12000 <= 13000)", 500 + T13.scheduleEndMs <= 13000 && T13.scheduleEndMs === 12000);
  check("X4 interface names unchanged", ["setTime","play","pause","restart"].every(k => typeof T13[k] === "function"));
}

/* ===== purity ===== */
{
  const media = html.match(/segment\.mp4|source\.mp4|<video|<img|\.jpg|http:\/\/|https:\/\/|url\(/g) || [];
  check("P1 purity grep 0 hits (feet.png is subject text only)", media.length === 0, JSON.stringify(media));
  check("P2 no CSS transition/animation properties", !/transition\s*:|animation\s*:/.test(html));
  check("P3 source comments carry no scoring or cure labels", !/cure|amendment|lens|attempt-\d|score/i.test((html.match(/\/\*[\s\S]*?\*\//g) || []).join(" ")));
}

console.log("=== TOTAL: " + pass + " PASS, " + fail + " FAIL ===");
if (failures.length) { console.log("FAILURES:"); failures.forEach(f => console.log(" - " + f)); }
process.exit(fail ? 1 : 0);
