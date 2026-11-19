"use strict";
/* T13 attempt-5 own-check instrument. DOM-stub logic suite, source-bound.
   Sections (argv filter, default ALL): F basis/feasibility · K consumption by key type ·
   U unit completeness · R viewport/stamp/resize · W canonical sequence · T timing/reasons ·
   D displayed states · M motion surface (frame-evidenced) · S counts/swap/segmentation ·
   X comparison · P purity + stylesheet parse.
   Checkpoint discipline: a stage runs the sections its cures have landed; the freeze run is ALL. */
const fs = require("fs"), vm = require("vm");
const DIR = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T13-typing-comment-stack";
const html = fs.readFileSync(DIR + "/recreation.html", "utf8");
const compHtml = fs.readFileSync(DIR + "/comparison.html", "utf8");
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.log("FAIL no script"); process.exit(1); }
const WANT = process.argv.slice(2);
const runSec = s => !WANT.length || WANT.includes(s);
class El {
  constructor(tag) {
    this.tagName = tag; this.children = []; this._text = ""; this.className = "";
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
function cssRules(src) {
  const styleM = src.match(/<style>([\s\S]*?)<\/style>/);
  const rules = [];
  if (!styleM) return rules;
  const body = styleM[1].replace(/\/\*[\s\S]*?\*\//g, "");
  body.split("}").forEach(chunk => {
    const i = chunk.indexOf("{");
    if (i < 0) return;
    const sel = chunk.slice(0, i).trim();
    const decls = chunk.slice(i + 1).split(";").map(d => d.trim()).filter(Boolean).map(d => {
      const c = d.indexOf(":"); return { prop: d.slice(0, c).trim(), value: d.slice(c + 1).trim(), raw: d };
    });
    if (sel) rules.push({ selector: sel, decls });
  });
  return rules;
}
function rulesReferencing(src, varName) {
  return cssRules(src).filter(r => r.decls.some(d => d.value.includes("var(--" + varName + ")"))).map(r => r.selector);
}

/* ===== F: feasibility + unit basis (content-box basis for descendant units) ===== */
if (runSec("F")) {
  const { T13 } = load("");
  const counts = T13.config.cards.map(c => T13.graphemes((T13.testing.canonicalText || T13.testing.normalizeWs)(c.text)).length);
  check("F1 grapheme counts 31,30,47,49,25,22", JSON.stringify(counts) === "[31,30,47,49,25,22]", counts.join(","));
  const mn = T13.modelFor("narrow", 360), m390 = T13.modelFor("narrow", 390), mw = T13.modelFor("wide", 1916);
  check("F2 basis: narrow cqw basis is the content box (339.84px at 360)", Math.abs(mn.basis.contentPx - 339.84) < 0.01 && Math.abs(mn.basis.cqwPx - 3.3984) < 0.0001, JSON.stringify(mn.basis));
  check("F3 basis: the stage's own padding token resolves on the full width (10.08px at 360)", Math.abs(mn.basis.padPx - 10.08) < 0.01, String(mn.basis.padPx));
  check("F4 basis: wide mode content box equals full width (padding token is 0px)", Math.abs(mw.basis.contentPx - 1916) < 0.01 && Math.abs(mw.basis.cqwPx - 19.16) < 0.001, JSON.stringify(mw.basis));
  check("F5 basis table consequence: supporting rows at 360 render 12.27px on the corrected basis", Math.abs(mn.supportingPx - 12.268) < 0.01 && mn.supportingPx > 12, mn.supportingPx.toFixed(3));
  check("F6 supporting at 390 clears on the corrected basis", Math.abs(m390.supportingPx - 13.291) < 0.01 && m390.supportingPx > 12, m390.supportingPx.toFixed(3));
  check("F7 title at 360 on the corrected basis is 14.10px (token re-priced at Stage 1: the corrected basis had moved the longest title into the estimate-uncertainty band as a single line)", Math.abs(mn.titleFontPx - 14.103) < 0.01, mn.titleFontPx.toFixed(3));
  check("F8 narrow inner width on the corrected basis is 314.4px", Math.abs(mn.innerPx - 314.39) < 0.6, mn.innerPx.toFixed(1));
  check("F9 narrow stack fits at final tokens", mn.stackCqw <= mn.availCqw, mn.stackCqw.toFixed(2) + "<=" + mn.availCqw.toFixed(2));
  check("F10 wide stack fits at final tokens", mw.stackCqw <= mw.availCqw, mw.stackCqw.toFixed(2) + "<=" + mw.availCqw.toFixed(2));
  check("F11 stack fits at 390 too", m390.stackCqw <= m390.availCqw, m390.stackCqw.toFixed(2) + "<=" + m390.availCqw.toFixed(2));
  check("F12 all chrome surfaces fit at 360/390/1916", [["narrow",360],["narrow",390],["wide",1916]].every(([mode,w]) => {
    const mm = T13.modelFor(mode, w);
    return ["postHead","commentsHead","cardFoot","postFoot","stamp"].every(s => mm.chrome[s].fits) && mm.chrome.avatarInitials.every(a => a.fits);
  }));
  check("F13 every title prefix fits both modes (text-only charge when no caret is displayed is priced in R section)", ["wide","narrow"].every(mode => {
    const mm = T13.modelFor(mode, mode === "wide" ? 1916 : 360);
    return mm.titles.every(t => !t.prefixOverflow && !t.prefixUncertain && t.prefixLines <= 2);
  }));
  // Negative control for the basis: a model on the retired full-width basis would price
  // the supporting rows at 13.03px at 360; the corrected model must NOT report that figure.
  check("F14 negative control: corrected model does not report the retired full-width figure", Math.abs(mn.supportingPx - 13.026) > 0.1, mn.supportingPx.toFixed(3));
}

/* ===== D: displayed states (plan-stated semantics, invariant across stages) ===== */
if (runSec("D")) {
  const { T13 } = load("");
  const T = T13.testing;
  check("D1 no validation errors (default)", T13.validationErrors.length === 0, JSON.stringify(T13.validationErrors));
  check("D2 not frozen", T13.frozen === false);
  check("D3 six cards constructed", T.cardEls().length === 6);
  const s = T.buildScheduleFor(T13.config.cards, T13.config.beats, T13.config.opening, T13.config.finalHoldMs);
  T.render(0);
  const els = T.cardEls();
  check("D4 card2 exact prefix at t=0", els[1].title.textContent.indexOf("Chief Executive") === 0, els[1].title.textContent);
  check("D5 card3 hidden at t=0", els[2].el.style.opacity === "0");
  check("D6 header count at t=0 is base + 1 landed (Comments 4)", load("").ids.commentsTitle.textContent === "Comments 4", load("").ids.commentsTitle.textContent);
  const s3 = s.cards[2];
  const tMid = s3.typeStart + 10 * T13.config.beats[2].charMs;
  T.render(tMid);
  check("D7 intermediate: card3 shows exactly 10 graphemes", T13.graphemes(T.canonicalText(els[2].title.textContent)).length === 10, els[2].title.textContent);
  T.render(12000);
  check("D8 final: full titles displayed", els.every((e, i) => e.title.textContent === T.canonicalText(T13.config.cards[i].text)));
  T13.restart(); T.render(tMid);
  check("D10 restart reproduces intermediate state", T13.graphemes(T.canonicalText(els[2].title.textContent)).length === 10);
  T.render(0); const atZero = els[1].title.textContent;
  check("D11 reverse seek reproduces opening state", atZero.indexOf("Chief Executive") === 0, atZero);
  check("D12 self-start: playing at load on a fresh instance", load("").T13.isPlaying() === true);
  const fresh = load("");
  check("D13 self-start: load render shows card2 prefix without external call", fresh.T13.testing.cardEls()[1].title.textContent.indexOf("Chief Executive") === 0);
}

/* ===== K: consumption census BY KEY TYPE (displayed-effect criterion) =====
   Key types: (a) stylesheet-consumed layout tokens — consumed iff a stylesheet rule for the
   named element references the variable AND the geometry model prices the same token;
   (b) timing keys — consumed iff mutating changes a schedule instant or a phase function;
   (c) content keys — consumed iff mutating changes a rendered text node or the schedule;
   (d) metadata (beat reasons) — derived at load, asserted in the T section.
   Simulated evidence (DOM stub + stylesheet text) is distinguished from browser-computed
   evidence throughout: no check here claims a browser computation. */
if (runSec("K")) {
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
  check("K1 every CONFIG leaf key is referenced outside the CONFIG block", unconsumed.length === 0, JSON.stringify(unconsumed.map(u => u.path)));
  // (a) the four re-priced typography tokens: stylesheet consumer on the named elements
  const hh = rulesReferencing(html, "headLineHeight");
  check("K2 headLineHeight consumed by post/comments/card header rules", hh.some(s => s.includes("#postHead")) && hh.some(s => s.includes("#commentsHead")) && hh.some(s => s.includes(".cardHead")), JSON.stringify(hh));
  const tw = rulesReferencing(html, "timeWeight");
  check("K3 timeWeight consumed by the timestamp rule", tw.some(s => s.includes(".when")), JSON.stringify(tw));
  const fw = rulesReferencing(html, "footWeight");
  check("K4 footWeight consumed by post-footer and card-footer span rules", fw.some(s => s.includes("#postFoot")) && fw.some(s => s.includes(".cardFoot")), JSON.stringify(fw));
  const fl = rulesReferencing(html, "footLineHeight");
  check("K5 footLineHeight consumed by post footer and card footer rules", fl.some(s => s.includes("#postFoot")) && fl.some(s => s.includes(".cardFoot")), JSON.stringify(fl));
  // (a) model leg: mutating the token moves the model's priced quantity for its element
  const mB = T13.modelFor("narrow", 360);
  const keepHL = C.layout.narrow.headLineHeight; C.layout.narrow.headLineHeight = 2;
  const mA = T13.modelFor("narrow", 360);
  check("K6 headLineHeight mutation moves modelled post height + comments-head height", mA.postHeightPx > mB.postHeightPx && mA.headCqw > mB.headCqw, mB.postHeightPx.toFixed(1) + "->" + mA.postHeightPx.toFixed(1));
  C.layout.narrow.headLineHeight = keepHL;
  const keepFL = C.layout.narrow.footLineHeight; C.layout.narrow.footLineHeight = 2;
  const mA2 = T13.modelFor("narrow", 360);
  check("K7 footLineHeight mutation moves modelled stack height", mA2.stackCqw > mB.stackCqw, mB.stackCqw.toFixed(2) + "->" + mA2.stackCqw.toFixed(2));
  C.layout.narrow.footLineHeight = keepFL;
  // (a) variable-assignment leg: applyLayout assigns the tokens as CSS variables (stub-recorded)
  T.applyLayout();
  check("K8 layout tokens assigned as CSS variables at layout", ids.stage.style["--headLineHeight"] !== undefined && ids.stage.style["--footLineHeight"] !== undefined && ids.stage.style["--timeWeight"] !== undefined && ids.stage.style["--footWeight"] !== undefined);
  // Negative controls: the detector must FAIL on a source whose consumer rule was removed
  const doctored = html.replace(/\.when\{[^}]*\}/, ".when{}");
  check("K9 negative control: removing the timestamp rule is detected", !rulesReferencing(doctored, "timeWeight").some(s => s.includes(".when")));
  const doctored2 = html.replace(/#postFoot\{[^}]*line-height[^;]*;?/, "#postFoot{");
  check("K10 negative control: removing the post-footer line-height is detected", !rulesReferencing(doctored2, "footLineHeight").some(s => s.includes("#postFoot")));
  // (b) timing keys: mutation changes schedule/phase (not a computed style — by key type)
  const sBefore = T.buildScheduleFor(C.cards, C.beats, C.opening, C.finalHoldMs);
  const keepChar = C.beats[2].charMs; C.beats[2].charMs = 99;
  const sAfter = T.buildScheduleFor(C.cards, C.beats, C.opening, C.finalHoldMs);
  check("K11 timing key (charMs) mutation moves its card's type end", sAfter.cards[2].typeEnd !== sBefore.cards[2].typeEnd);
  C.beats[2].charMs = keepChar;
  // (c) content keys: mutation changes the schedule count + fitted title for that card
  const f2 = load(""); const cntBefore = f2.T13.testing.buildScheduleFor(f2.T13.config.cards, f2.T13.config.beats, f2.T13.config.opening, f2.T13.config.finalHoldMs).cards[0].count;
  f2.T13.config.cards[0].text = "A Different First Title Indeed";
  const cntAfter = f2.T13.testing.buildScheduleFor(f2.T13.config.cards, f2.T13.config.beats, f2.T13.config.opening, f2.T13.config.finalHoldMs).cards[0].count;
  check("K12 content key mutation changes the derived schedule count", cntBefore === 31 && cntAfter === 30, cntBefore + "->" + cntAfter);
  check("K13 stage max width applied from CONFIG", ids.stage.style.maxWidth === "1916px", ids.stage.style.maxWidth);
  check("K14 banner colours are palette-driven vars", ids.stage.style["--bannerBg"] === C.palette.bannerBg && ids.stage.style["--bannerInk"] === C.palette.bannerInk);
  check("K15 stylesheet carries no stage max-width literal", !/#stage\{[^}]*max-width/.test(html));
  check("K16 box model: stage border-box in source (both rules)", /#stage\.narrow\{[^}]*box-sizing:border-box/.test(html) && /#stage\{[^}]*box-sizing:border-box/.test(html));
  check("K17 retired accounting token has no binding anywhere", !html.includes("postWindowHoldMs"));
}

/* ===== U: unit completeness + adversarial validation ===== */
if (runSec("U")) {
  const { T13 } = load("");
  const T = T13.testing, C = T13.config;
  check("U1 parse px token", T.parseUnitToken("20px").value === 20 && T.parseUnitToken("20px").unit === "px");
  check("U2 parse composite token per component", !!T.parseUnitToken("8px 12px").components && T.parseUnitToken("8px 12px").components.length === 2);
  const keepF = C.layout.narrow.titleFont;
  C.layout.narrow.titleFont = "20px";
  check("U3 font token 20px models as 20px (not cqw)", T13.modelFor("narrow", 360).titleFontPx === 20, String(T13.modelFor("narrow", 360).titleFontPx));
  C.layout.narrow.titleFont = "5%";
  check("U4 font token 5% models against its named reference", Math.abs(T13.modelFor("narrow", 360).titleFontPx - 18) < 0.01, String(T13.modelFor("narrow", 360).titleFontPx));
  C.layout.narrow.titleFont = keepF;
  check("U5 scaled token keeps its unit", T.scaledToken("2.8cqw", 0.5) === "1.4cqw" && T.scaledToken("10px", 0.5) === "5px", T.scaledToken("10px", 0.5));
  // title max-height backstop denominated in the title token's own unit
  const inst = load(""); inst.T13.config.layout.wide.titleFont = "20px"; inst.T13.testing.applyLayout();
  check("U6 title backstop for a 20px title font is denominated in px", inst.ids.stage.style["--titleMaxH"] === "50px", String(inst.ids.stage.style["--titleMaxH"]));
  const inst2 = load(""); inst2.T13.testing.applyLayout();
  check("U7 title backstop for the cqw title font is denominated in cqw", /cqw$/.test(inst2.ids.stage.style["--titleMaxH"] || ""), String(inst2.ids.stage.style["--titleMaxH"]));
  // unsupported units fail named in validation, never silently
  ["3em", "2rem", "4vw", "12"].forEach((tok, i) => {
    const f = load(""); f.T13.config.layout.narrow.cardHeadFont = tok;
    const errs = f.T13.testing.validateConfig();
    check("U8." + i + " unsupported/empty unit " + JSON.stringify(tok) + " fails named", errs.some(e => e.indexOf("T13_UNIT_UNSUPPORTED") === 0), JSON.stringify(errs.slice(0, 3)));
  });
  check("U9 restored config validates clean after unit mutations", T.validateConfig().length === 0, JSON.stringify(T.validateConfig()));
  // adversarial set carried from the standing validation guards
  const keep = { hold: C.beats[2].holdAfterMs, land: C.landMs, fin: C.finalHoldMs, blink: C.caretBlinkMs, char: C.beats[0].charMs };
  C.beats[2].holdAfterMs = 50;
  check("U10 hold below landing freezes named", T.validateConfig().includes("T13_HOLD_LT_LAND:2"), JSON.stringify(T.validateConfig()));
  C.beats[2].holdAfterMs = keep.hold; C.landMs = 0;
  check("U11 landMs=0 invalid named", T.validateConfig().includes("T13_DURATION_INVALID:landMs"));
  C.landMs = keep.land; C.finalHoldMs = Infinity;
  check("U12 finalHoldMs non-finite invalid named", T.validateConfig().includes("T13_DURATION_INVALID:finalHoldMs"));
  C.finalHoldMs = keep.fin; C.caretBlinkMs = 99999;
  check("U13 caretBlinkMs above window invalid named", T.validateConfig().includes("T13_DURATION_INVALID:caretBlinkMs"));
  C.caretBlinkMs = keep.blink; C.beats[0].charMs = NaN;
  check("U14 NaN beat rate invalid", T.validateConfig().includes("T13_BEAT_INVALID"));
  C.beats[0].charMs = keep.char;
  const cardsKeep = C.cards; C.cards = null;
  let threw = false, errs = null;
  try { errs = T.validateConfig(); } catch (e) { threw = true; }
  check("U15 null card group: named error, no throw", !threw && errs && errs.includes("T13_CONFIG_INVALID"), threw ? "threw" : JSON.stringify(errs));
  C.cards = cardsKeep;
  const huge = load("?titles=" + encodeURIComponent(["Ok One", "SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilistic", "Ok Three"].join("|")));
  check("U16 single oversized word: named freeze, never silent clip", huge.T13.frozen === true && huge.T13.validationErrors.length > 0, JSON.stringify(huge.T13.validationErrors));
}

/* ===== R: actual-viewport fitting, tallest header, stamp rect, resize ===== */
if (runSec("R")) {
  const { T13 } = load("");
  const T = T13.testing, C = T13.config;
  check("R1 validation covers the supported-width set (360/390/1916 model without error)", T.validateConfig().length === 0, JSON.stringify(T.validateConfig()));
  const f500 = load("", { width: 500 });
  check("R2 runtime width 500 is modelled at load (narrow, no error)", f500.T13.validationErrors.length === 0, JSON.stringify(f500.T13.validationErrors));
  const f800 = load("", { width: 800 });
  check("R3 runtime width 800 is modelled at load (wide, no error)", f800.T13.validationErrors.length === 0, JSON.stringify(f800.T13.validationErrors));
  // tallest-header sizing: badge term can dominate the avatar term
  const mDef = T13.modelFor("narrow", 360);
  const fBadge = load(""); fBadge.T13.config.layout.narrow.badgePadY = "3cqw";
  const mBadge = fBadge.T13.modelFor("narrow", 360);
  check("R4 tallest-header: enlarged badge padding raises the modelled header height", mBadge.headerHeightPx > mDef.headerHeightPx, mDef.headerHeightPx.toFixed(2) + "->" + mBadge.headerHeightPx.toFixed(2));
  check("R5 header height equals the tallest component (avatar at default tokens)", Math.abs(mDef.headerHeightPx - Math.max(6.67 * mDef.basis.cqwPx, 3.61 * mDef.basis.cqwPx * 1.2, 3.61 * mDef.basis.cqwPx * 1.2 + 2 * 0.2 * mDef.basis.cqwPx)) < 0.05, mDef.headerHeightPx.toFixed(2));
  // stamp rect at hold state, both modes + 390
  [["narrow", 360], ["narrow", 390], ["wide", 1916]].forEach(([mode, w], i) => {
    const mm = T13.modelFor(mode, w), st = mm.chrome.stamp;
    check("R6." + i + " stamp contained + no body-ink/footer overlap at " + mode + "@" + w, st.contained && !st.overlapsBodyInk && !st.overlapsFoot, JSON.stringify(st.rect));
  });
  // mutation: dragging the stamp onto the second body line must fail named
  const fMut = load(""); const mm0 = fMut.T13.modelFor("narrow", 360);
  const targetTopPct = ((mm0.postBodyTopPx + mm0.bodyLineHPx) - mm0.stampHPx / 2) / mm0.postHeightPx * 100;
  fMut.T13.config.layout.narrow.stampTop = targetTopPct.toFixed(1) + "%";
  const mutErrs = fMut.T13.testing.validateConfig();
  check("R7 stamp dragged onto body ink fails named (overlap)", mutErrs.some(e => e.indexOf("T13_STAMP_OVERLAP") === 0), JSON.stringify(mutErrs.slice(0, 4)));
  const fMut2 = load(""); fMut2.T13.config.layout.narrow.stampTop = "130%";
  const mut2Errs = fMut2.T13.testing.validateConfig();
  check("R8 stamp pushed out of the card fails named (containment)", mut2Errs.some(e => e.indexOf("T13_STAMP_CONTAINMENT") === 0), JSON.stringify(mut2Errs.slice(0, 4)));
  // resize recompute: a lawful load, then a resize into a width whose fit fails surfaces the named state
  const rz = load("", { width: 1916 });
  check("R9 resize path: revalidation at load width is clean", rz.T13.testing.revalidateRuntime().length === 0);
  rz.ids.stage.clientWidth = 360; rz.T13.config.layout.narrow.titleFont = "9cqw";
  const rzErrs = rz.T13.testing.revalidateRuntime();
  check("R10 resize into an unsupported fit surfaces named errors + banner", rzErrs.length > 0 && rz.ids.validationBanner.style.display === "block", JSON.stringify(rzErrs.slice(0, 3)));
}

/* ===== W: one canonical whitespace sequence for fitting + playback ===== */
if (runSec("W")) {
  const { T13 } = load("");
  const T = T13.testing;
  const raw = "Head  of  Vibes   and Synergy";
  const canon = T.canonicalText(raw);
  check("W1 canonical sequence collapses CSS whitespace runs to one space", canon === "Head of  Vibes and Synergy", JSON.stringify(canon));
  check("W2 canonical sequence preserves nonbreaking spaces (CSS does not collapse them)", canon.includes("  ") || canon.includes(" "), JSON.stringify(canon));
  check("W3 canonical sequence trims leading/trailing collapsible space", T.canonicalText("  Alpha   Beta ") === "Alpha Beta");
  const ranges = T.markRangesFor(raw, "of  Vibes");
  check("W4 marked range computed on the canonical sequence", ranges.length === 1 && T13.graphemes(canon).slice(ranges[0].start, ranges[0].end).join("") === "of  Vibes", JSON.stringify(ranges));
  const fl = T.fitLines(raw, 314, 700, 13.22, ranges, 2);
  check("W5 fitting consumes the same canonical sequence", fl.lines >= 1 && fl.maxWidthPx <= 315, JSON.stringify({ lines: fl.lines, max: fl.maxWidthPx }));
  const rs = load("?titles=" + encodeURIComponent(["A  B", "Two  Words", "Three"].join("|")));
  const els = rs.T13.testing.cardEls();
  check("W6 playback graphemes equal the canonical sequence (sequence-equal, not count-equal)", els[0].graphemes.join("") === rs.T13.testing.canonicalText("A  B") && els[1].graphemes.join("") === "Two Words", JSON.stringify(els.map(e => e.graphemes.join(""))));
  const sW = rs.T13.testing.buildScheduleFor(rs.T13.config.cards, rs.T13.config.beats, rs.T13.config.opening, rs.T13.config.finalHoldMs);
  check("W7 schedule counts derive from the canonical sequence", sW.cards[1].count === rs.T13.graphemes("Two Words").length, String(sW.cards[1].count));
  const hl = load(""); const elsH = hl.T13.testing.cardEls();
  check("W8 default cards carry the frame-evidenced marked ranges", elsH[1].hlRanges.length === 1 && elsH[2].hlRanges.length === 2 && elsH[4].hlRanges.length === 2 && elsH[5].hlRanges.length === 1,
    JSON.stringify(elsH.map(e => e.hlRanges.length)));
}

/* ===== T: timing — derived reasons, ending budget as input ===== */
if (runSec("T")) {
  const { T13 } = load("");
  const T = T13.testing, C = T13.config;
  check("T1 ending budget is an independent input (finalHoldMs === 2000)", C.finalHoldMs === 2000, String(C.finalHoldMs));
  check("T2 schedule end is exactly 12000 (independent equality)", T13.scheduleEndMs === 12000, String(T13.scheduleEndMs));
  check("T3 accounting exposes the budget as an input, residual 0", T13.windowAccounting.endingBudgetMs === 2000 && T13.windowAccounting.residualMs === 0 && T13.windowAccounting.identityHolds === true, JSON.stringify(T13.windowAccounting));
  const s = T.buildScheduleFor(C.cards, C.beats, C.opening, C.finalHoldMs);
  check("T4 final card completes typing at 10000 (budget follows from beats, not the reverse)", s.cards[5].typeEnd === 10000, String(s.cards[5].typeEnd));
  check("T5 derived instants match the token derivation", (() => {
    const ov = C.entranceOverlapMs || 0;
    let t = 0, ok = true;
    const counts = C.cards.map(c => T13.graphemes(T.canonicalText(c.text)).length);
    for (let i = 2; i < 6; i++) {
      const prev = s.cards[i - 1];
      const expectAppear = (i === 2 ? prev.typeEnd + C.beats[1].holdAfterMs : prev.typeEnd + C.beats[i - 1].holdAfterMs);
      if (s.cards[i].appearStart !== expectAppear) ok = false;
      if (s.cards[i].typeStart !== s.cards[i].appearStart + Math.max(0, C.beats[i].appearMs - ov)) ok = false;
      if (s.cards[i].typeEnd !== s.cards[i].typeStart + counts[i] * C.beats[i].charMs) ok = false;
    }
    return ok;
  })(), JSON.stringify(s.cards.map(c => [c.appearStart, c.typeStart, c.typeEnd])));
  check("T6 longest-line claim sits only on the true longest card (49 graphemes)", /longest line/.test(C.beats[3].reason) && !/longest line/.test(C.beats[2].reason), C.beats[2].reason + " || " + C.beats[3].reason);
  check("T7 card3 reason names it the first of the paired long lines", /first of the paired long lines/.test(C.beats[2].reason), C.beats[2].reason);
  check("T8 slowest-per-grapheme claim sits on the slowest card", /slowest/.test(C.beats[4].reason) && C.beats.every((b, i) => i === 4 || b.charMs < C.beats[4].charMs), C.beats[4].reason);
  check("T9 largest intermediate hold claim sits on card5", /longest intermediate hold/.test(C.beats[4].reason) && C.beats.slice(0, 5).every((b, i) => i === 4 || b.holdAfterMs <= C.beats[4].holdAfterMs), C.beats[4].reason);
  const titles = ["Short One", "A Much Longer Replacement Title Here", "Tiny", "Mid Length Title", "Small", "Last One"];
  const rs = load("?titles=" + encodeURIComponent(titles.join("|")));
  check("T10 replacement reasons re-derive: longest claim moves to the replacement argmax", /longest line/.test(rs.T13.config.beats[1].reason) && !/longest line/.test(rs.T13.config.beats[3].reason), rs.T13.config.beats.map(b => b.reason).join(" || "));
  check("T11 replacement schedule still ends at its derived total with the same budget input", rs.T13.config.finalHoldMs === 2000 && rs.T13.scheduleEndMs > 0, String(rs.T13.scheduleEndMs));
}

/* ===== M: motion surface as evidenced by consecutive frames ===== */
if (runSec("M")) {
  const { T13 } = load("");
  const T = T13.testing, C = T13.config;
  const s = T.buildScheduleFor(C.cards, C.beats, C.opening, C.finalHoldMs);
  T.render(0);
  const els = T.cardEls();
  function spansOf(el, cls) { const out = []; (function walk(n) { (n.children || []).forEach(ch => { if (ch.className === cls) out.push(ch); walk(ch); }); })(el.title); return out; }
  check("M1 at t=0 the active card's trailing word carries the fresh gradient span", spansOf(els[1], "fresh").map(x => x.textContent).join("") === "Executive", JSON.stringify(spansOf(els[1], "fresh").map(x => x.textContent)));
  check("M2 at t=0 no card background changes for typing (constant card background)", els[1].el.style.background === C.palette.cardBg && els[0].el.style.background === C.palette.cardBg, els[1].el.style.background);
  const tMid3 = s.cards[2].typeStart + 2 * C.beats[2].charMs;
  T.render(tMid3);
  check("M3 mid-typing: only the current word is fresh (card3, 2 graphemes)", spansOf(els[2], "fresh").map(x => x.textContent).join("") === "VP", JSON.stringify(spansOf(els[2], "fresh").map(x => x.textContent)));
  const te3 = s.cards[2].typeEnd;
  T.render(te3 + Math.floor(C.landMs / 2));
  check("M4 settle: the final word stays fresh inside the landing duration", spansOf(els[2], "fresh").length > 0, JSON.stringify(spansOf(els[2], "fresh").map(x => x.textContent)));
  T.render(te3 + C.landMs + 40);
  check("M5 settle complete: no fresh span after the landing duration", spansOf(els[2], "fresh").length === 0);
  check("M6 caret is a thin bar: narrow caret width below 0.15 of the title size", T13.modelFor("narrow", 360).titles[0].caretPx < 0.15 * T13.modelFor("narrow", 360).titleFontPx, String(T13.modelFor("narrow", 360).titles[0].caretPx));
  check("M7 caret displayed while typing (frame-evidenced thin bar)", (() => { const f = load(""); f.T13.testing.render(0); return f.T13.testing.cardEls()[1].caret.style.display === "inline-block"; })());
  check("M8 header count is base + landed at the final state (Comments 9)", (() => { const f = load(""); f.T13.testing.render(12000); return f.ids.commentsTitle.textContent === "Comments 9"; })());
  check("M9 header count increments at a landing (Comments 5 after card2)", (() => { const f = load(""); f.T13.testing.render(700); return f.ids.commentsTitle.textContent === "Comments 5"; })());
  check("M10 typing begins before the entrance fade completes (overlap token consumed)", C.entranceOverlapMs > 0 && s.cards[2].typeStart < s.cards[2].appearStart + C.beats[2].appearMs, JSON.stringify([s.cards[2].appearStart, s.cards[2].typeStart]));
  check("M11 entrance fade is a t-function: mid-entrance opacity strictly between 0 and 1", (() => { const f = load(""); const ss = f.T13.testing.buildScheduleFor(f.T13.config.cards, f.T13.config.beats, f.T13.config.opening, f.T13.config.finalHoldMs); f.T13.testing.render(ss.cards[2].appearStart + Math.floor(f.T13.config.beats[2].appearMs / 2)); const o = parseFloat(f.T13.testing.cardEls()[2].el.style.opacity); return o > 0 && o < 1; })());
  check("M12 retired tint/landing colour tokens have no binding anywhere", !html.includes("cardBgTyping") && !html.includes("cardBgLanded") && !html.includes("cardBorderLanded"));
}

/* ===== S: counts, swap, segmentation (carried machinery) ===== */
if (runSec("S")) {
  const { T13 } = load("");
  let allOk = true; const detail = [];
  for (let n = 1; n <= 8; n++) {
    const titles = ["Alpha One","Bravo Two","Charlie Three","Delta Four","Echo Five","Foxtrot Six","Golf Seven","Hotel Eight"].slice(0, n);
    const r = load("?titles=" + encodeURIComponent(titles.join("|")));
    if (!(r.T13.scheduleEndMs > 0)) { allOk = false; detail.push(n + "end"); }
    const ss = r.T13.testing.buildScheduleFor(r.T13.config.cards, r.T13.config.beats, r.T13.config.opening, r.T13.config.finalHoldMs);
    for (let i = 1; i < ss.cards.length; i++) if (ss.cards[i].appearStart < ss.cards[i - 1].typeEnd) { allOk = false; detail.push(n + "seq"); }
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
  const bad1 = load("?accent=" + encodeURIComponent("#fff"));
  check("S5 shorthand accent rejected + recorded, default kept", bad1.T13.overrideOutcomes.some(o => o.key === "accent" && o.outcome === "rejected-discarded") && bad1.T13.config.palette.accent === "#5b8def", JSON.stringify(bad1.T13.overrideOutcomes));
  const seven = ["One A","Two B","Three C","Four D","Five E","Six F","Seven G"];
  const r7 = load("?titles=" + encodeURIComponent(seven.join("|")) + "&charMs=25");
  check("S6 rate override reaches added beats (7 titles)", r7.T13.config.beats.length === 7 && r7.T13.config.beats.every(b => b.charMs === 25), JSON.stringify(r7.T13.config.beats.map(b => b.charMs)));
  const zero = load("?gapCqw=0");
  check("S7 gap 0 lawful", zero.T13.overrideOutcomes.length === 0 && zero.T13.config.layout.wide.stackGapCqw === 0);
  const bad = load("?charMs=33abc");
  check("S8 trailing-junk rate discarded + recorded", bad.T13.overrideOutcomes.length === 1 && bad.T13.config.beats[0].charMs === 33 && bad.T13.frozen === false);
}

/* ===== X: comparison clock compatibility ===== */
if (runSec("X")) {
  const { T13 } = load("");
  check("X1 comparison handle is 500ms", /HANDLE_MS = 500/.test(compHtml));
  check("X2 comparison slaves recreation to video minus handle", compHtml.includes("api.setTime(video.currentTime * 1000 - HANDLE_MS)"));
  check("X3 recreation end maps inside the segment (500 + 12000 <= 13000)", 500 + T13.scheduleEndMs <= 13000 && T13.scheduleEndMs === 12000);
  check("X4 interface names unchanged", ["setTime","play","pause","restart"].every(k => typeof T13[k] === "function"));
}

/* ===== P: purity + stylesheet parse ===== */
if (runSec("P")) {
  const media = html.match(/segment\.mp4|source\.mp4|<video|<img|\.jpg|http:\/\/|https:\/\/|url\(/g) || [];
  check("P1 purity grep 0 hits (feet.png is subject text only)", media.length === 0, JSON.stringify(media));
  check("P2 no CSS transition/animation properties", !/transition\s*:|animation\s*:/.test(html));
  check("P3 source comments carry no scoring labels", !/cure|amendment|lens|attempt-\d|score/i.test((html.match(/\/\*[\s\S]*?\*\//g) || []).join(" ")));
  const rules = cssRules(html);
  const badDecls = [];
  rules.forEach(r => r.decls.forEach(d => {
    if (!/^[a-z-]+$/.test(d.prop) || d.value === "" || /[{}]/.test(d.value)) badDecls.push(r.selector + " :: " + d.raw);
    if ((d.prop === "font-size" || d.prop === "line-height" || d.prop === "font-weight") && !/var\(--[a-zA-Z]+\)|^[\d.]+(px|cqw|%)?$/.test(d.value)) badDecls.push(r.selector + " :: priced :: " + d.raw);
  }));
  check("P4 stylesheet parse: every declaration parses with sane property/value", rules.length >= 15 && badDecls.length === 0, JSON.stringify(badDecls));
  check("P5 stylesheet parse prices the four re-priced consumer rules", rulesReferencing(html, "headLineHeight").length >= 3 && rulesReferencing(html, "footLineHeight").length >= 2 && rulesReferencing(html, "timeWeight").length >= 1 && rulesReferencing(html, "footWeight").length >= 2);
}

console.log("=== TOTAL: " + pass + " PASS, " + fail + " FAIL ===");
if (failures.length) { console.log("FAILURES:"); failures.forEach(f => console.log(" - " + f)); }
process.exit(fail ? 1 : 0);
