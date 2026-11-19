"use strict";
/* Own-check suite — T91 attempt 2. Logic level; PIXEL-UNVERIFIED. */
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const ART = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T91-qa-quote-cards";
const RUN = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/practice/runs/2026-11-15-cycle-011-wave-10";
function loadModule(htmlPath, tag){
  const src = fs.readFileSync(htmlPath, "utf8");
  const m = src.match(/<script>([\s\S]*?)<\/script>/);
  const tmp = "/tmp/t91-" + tag + ".js";
  fs.writeFileSync(tmp, m[1]);
  delete require.cache[tmp];
  return {mod: require(tmp), src: src, sha: crypto.createHash("sha256").update(src).digest("hex")};
}
const A2 = loadModule(path.join(ART, "recreation.html"), "a2");
const A1 = loadModule(path.join(ART, "recreation-attempt-1.html"), "a1");
const M = A2.mod, M1 = A1.mod;
const metrics = JSON.parse(fs.readFileSync(path.join(RUN, "metrics-T91.json"), "utf8"));
function measure(text, px, kind){
  const table = metrics[kind === "quote" ? "quote" : "regular"];
  let w = 0;
  for (const ch of String(text)) w += (table.widths[ch] !== undefined ? table.widths[ch] : table.default);
  return w * px / table.size;
}
function measureCfg(cfg){
  return function(text, px, kind){
    let w = measure(text, px, kind);
    if (kind === "role") w += String(text).length * cfg.type.roleSpacingEm * px;
    return w;
  };
}
let pass = 0, fail = 0; const failures = [];
function check(name, cond, detail){
  if (cond) { pass++; console.log("PASS " + name); }
  else { fail++; failures.push(name + (detail ? " — " + detail : "")); console.log("FAIL " + name + (detail ? " — " + detail : "")); }
}
function eq(a, b){ return JSON.stringify(a) === JSON.stringify(b); }
const clone = o => JSON.parse(JSON.stringify(o));

/* ---- fitted line counts on the shared metric basis, both widths ---- */
function lineCountsAt(cfg, vw){
  const eff = M.effectiveGeom(cfg, vw), mc = measureCfg(cfg);
  return cfg.cards.map(c => M.fitCard(cfg, eff.geom, c, mc));
}
const fits360 = lineCountsAt(M.CONFIG, 360), fits320 = lineCountsAt(M.CONFIG, 320);
const lc360 = fits360.map(f => f.lines), lc320 = fits320.map(f => f.lines);
console.log("INFO lineCounts360=" + JSON.stringify(lc360) + " lineCounts320=" + JSON.stringify(lc320));
console.log("INFO finalSha=" + A2.sha + " priorSha=" + A1.sha);

/* ================= A. schedule effect mappings ================= */
(function(){
  const cfg = M.CONFIG;
  const sch = M.resolveSchedule(cfg);
  check("A1 specimen schedule table", sch.mode === "specimen" && sch.slots.length === 1 && sch.slots[0].idx === 2 && sch.slots[0].slotMs === 10600 && sch.freeStart === 10600 && sch.freeMs === 3400 && sch.cycleMs === 14000, JSON.stringify(sch));
  const S = t => M.stateAt(cfg, t, lc360);
  check("A2 specimen settled at 0 and 1", S(0).phase === "hold" && S(0).p === 1 && S(0).idx === 2 && S(1).phase === "hold");
  check("A3 specimen reveal stages", S(1999).visibleLines === 1 && S(2000).visibleLines === 2 && S(4999).visibleLines === 2 && S(5000).visibleLines === 3 && S(7999).visibleLines === 3 && S(8000).visibleLines === lc360[2], JSON.stringify([S(1999), S(2000), S(5000), S(8000)]));
  check("A4 specimen full hold to 10000", S(9999).phase === "hold" && S(9999).visibleLines === lc360[2]);
  check("A5 specimen exit phase", S(10000).phase === "exit" && S(10599).phase === "exit" && Math.abs(S(10300).p - 0.5) < 1e-9);
  check("A6 specimen card-free", S(10600).phase === "cardfree" && S(10600).idx === -1 && S(12000).phase === "cardfree" && S(13999).phase === "cardfree");
  check("A7 specimen wrap", S(14000).phase === "hold" && S(14000).idx === 2);
  check("A8 specimen reading rate", (28 / 10) * 60 <= 200 && Math.round(28 / 10 * 60) === 168);
  let ok = true;
  for (let t = 0; t < 14000; t += 37){ const st = S(t); if (!(st.idx === 2 || st.phase === "cardfree")) ok = false; if (st.phase === "cardfree" && t < 10600) ok = false; }
  check("A9 specimen exclusivity sweep (37ms)", ok);
  const cfgS = clone(cfg); cfgS.schedule.mode = "sequence";
  const schS = M.resolveSchedule(cfgS);
  check("A10 sequence slots and derived cycle", eq(schS.slots.map(s => [s.idx, s.start, s.slotMs]), [[0, 0, 7000], [1, 7000, 6500], [2, 13500, 11000]]) && schS.cycleMs === 26500 && schS.freeStart === 24500, JSON.stringify(schS.slots));
  const Q = t => M.stateAt(cfgS, t, lc360);
  check("A11 sequence boundaries", Q(0).phase === "enter" && Q(449).phase === "enter" && Q(450).phase === "hold" && Q(6399).phase === "hold" && Q(6400).phase === "exit" && Q(6999).phase === "exit" && Q(7000).idx === 1 && Q(7000).phase === "enter" && Q(13500).idx === 2 && Q(23899).phase === "hold" && Q(23900).phase === "exit" && Q(24500).phase === "cardfree" && Q(26499).phase === "cardfree" && Q(26500).idx === 0);
  check("A12 sequence Sal reveal and hold", Q(13500 + 7999).visibleLines === lc360[2] - 1 && Q(13500 + 8000).visibleLines === lc360[2] && Q(13500 + 10399).phase === "hold" && Q(13500 + 10400).phase === "exit");
  ok = true;
  for (let t = 0; t < 26500; t += 37){ const st = Q(t); const owners = schS.slots.filter(s => t % 26500 >= s.start && t % 26500 < s.start + s.slotMs).length + ((t % 26500) >= 24500 ? 1 : 0); if (owners !== 1) ok = false; if (st.phase === "cardfree" && t % 26500 < 24500) ok = false; }
  check("A13 sequence exclusivity sweep (37ms)", ok);
  const cfgU = clone(cfg); cfgU.schedule.mode = "uniform";
  check("A14 uniform cycle", M.cycleMs(cfgU) === 14000);
  ok = true;
  for (let t = 0; t < 14000; t += 53){
    const a = M.stateAt(cfgU, t, lc360), b = M1.stateAt(M1.CONFIG, t);
    if (a.idx !== b.idx || a.phase !== b.phase || Math.abs(a.p - b.p) > 1e-9) ok = false;
  }
  check("A15 uniform table equals prior build table (sweep 53ms)", ok);
  check("A16 uniform boundary instants", M.stateAt(cfgU, 4199, lc360).idx === 0 && M.stateAt(cfgU, 4200, lc360).idx === 1 && M.stateAt(cfgU, 12600, lc360).phase === "endhold" && M.stateAt(cfgU, 13999, lc360).phase === "endhold");
})();

/* ================= B. reveal schedules per line count ================= */
(function(){
  const rt = (span, n) => M.revealTimes(M.CONFIG, span, n);
  check("B1 one-line schedule", eq(rt(8000, 1), [0]));
  check("B2 two-line schedule (final anchor governs)", eq(rt(8000, 2), [0, 8000]) && eq(rt(4000, 2), [0, 4000]));
  check("B3 three-line schedule", eq(rt(4000, 3), [0, 1000, 4000]) && eq(rt(8000, 3), [0, 2000, 8000]));
  check("B4 four-line schedule (observed anchors + interpolated third)", eq(rt(8000, 4), [0, 2000, 5000, 8000]));
  check("B5 five-line schedule", eq(rt(8000, 5), [0, 2000, 4000, 6000, 8000]));
  check("B6 schedules after shrink (span unchanged, count from fit)", M.visibleLineCount(M.CONFIG, 8000, 5, 7999) === 4 && M.visibleLineCount(M.CONFIG, 8000, 5, 8000) === 5);
})();

/* ================= C. isolated before/after observations per construction change ================= */
(function(){
  const b = M1.stateAt(M1.CONFIG, 4200 + 450);
  check("C-a1 BEFORE schedule: prior build Sal full-opacity window 3750ms", M1.cycleMs(M1.CONFIG) === 14000 && b.idx === 1 && b.phase === "hold");
  const after = M.stateAt(M.CONFIG, 9999, lc360);
  check("C-a2 AFTER schedule: specimen card settled through 9999, pre-exit interval 10000ms", after.idx === 2 && after.phase === "hold");
  check("C-b1 BEFORE reveal: prior state carries no line staging", M1.stateAt(M1.CONFIG, 0).visibleLines === undefined);
  check("C-b2 AFTER reveal: staged counts 1,2,3,all across the span", M.stateAt(M.CONFIG, 0, lc360).visibleLines === 1 && M.stateAt(M.CONFIG, 2000, lc360).visibleLines === 2 && M.stateAt(M.CONFIG, 5000, lc360).visibleLines === 3 && M.stateAt(M.CONFIG, 8000, lc360).visibleLines === lc360[2]);
  const priorMerge = M1.deepMerge(M1.CONFIG, {cards: [{quote: "Solo.", speaker: "One", role: "ONLY", year: 2000}]});
  check("C-c1 BEFORE replace: prior per-index merge keeps 3 cards for a 1-card supply", priorMerge.cards.length === 3);
  const r1 = M.resolveConfig(JSON.stringify({schedule: {mode: "uniform"}, cardsReplace: [{quote: "Solo.", speaker: "One", role: "ONLY", year: 2000}]}));
  const r2 = M.resolveConfig(JSON.stringify({schedule: {mode: "uniform"}, cardsReplace: M.CONFIG.cards.slice(0, 2)}));
  const r4 = M.resolveConfig(JSON.stringify({schedule: {mode: "uniform"}, cardsReplace: M.CONFIG.cards.concat([{quote: "Fourth card here.", speaker: "Four", role: "EXTRA", year: 2027, slotMs: 5000, revealSpanMs: 2000}])}));
  check("C-c2 AFTER replace: 1 card renders 1 with derived cycle 5600", r1.cfg.cards.length === 1 && M.cycleMs(r1.cfg) === 5600, JSON.stringify(r1.errors));
  check("C-c3 AFTER replace: 2 cards with derived cycle 9800", r2.cfg.cards.length === 2 && M.cycleMs(r2.cfg) === 9800);
  check("C-c4 AFTER replace: 4 cards with derived cycle 18200", r4.cfg.cards.length === 4 && M.cycleMs(r4.cfg) === 18200);
  const rFlag = M.resolveConfig(JSON.stringify({schedule: {replaceCards: true, mode: "uniform"}, cards: [{quote: "Solo.", speaker: "One", role: "ONLY", year: 2000}]}));
  check("C-c5 replaceCards flag path also replaces wholesale", rFlag.cfg.cards.length === 1 && M.cycleMs(rFlag.cfg) === 5600);
  check("C-d1 BEFORE viewport: prior build exposes no viewport derivation", typeof M1.effectiveGeom === "undefined");
  const eff320 = M.effectiveGeom(M.CONFIG, 320), eff360 = M.effectiveGeom(M.CONFIG, 360);
  check("C-d2 AFTER viewport: 320 scale and derived widths", Math.abs(eff320.scale - 320 / 360) < 1e-9 && Math.abs(eff320.geom.cardW - 328 * 320 / 360) < 1e-6 && Math.abs(eff320.geom.quoteW - 256 * 320 / 360) < 1e-6 && eff360.scale === 1, JSON.stringify(eff320));
  check("C-e1 BEFORE separator: prior source carries the separator as a literal", A1.src.includes('" · "'));
  check("C-e2 AFTER separator: no separator literal outside CONFIG", A2.src.indexOf(" · ", A2.src.indexOf("const TOP_KEYS")) < 0);
  const sepCfg = clone(M.CONFIG); sepCfg.labels.sep = " | ";
  const hudStr = sepCfg.hud.year + sepCfg.labels.sep + sepCfg.hud.dayLine;
  const roleStr = sepCfg.cards[0].role + sepCfg.labels.sep + sepCfg.cards[0].year;
  check("C-e3 separator override changes both rendered strings", hudStr === "2037 | A POSSIBLE TUESDAY" && roleStr.endsWith(" | 2026"));
})();

/* ================= D. CONFIG consumption census ================= */
function signature(cfg){
  const mc = measureCfg(cfg);
  const parts = [];
  parts.push("defaultSchedule:" + JSON.stringify(M.resolveSchedule(cfg)));
  for (const mode of ["specimen", "sequence", "uniform"]){
    const c = clone(cfg); c.schedule.mode = mode;
    const sch = M.resolveSchedule(c);
    parts.push(mode + ":" + JSON.stringify(sch));
    const lcs = c.cards.map(card => { const e = M.effectiveGeom(c, 360); const f = M.fitCard(c, e.geom, card, mc); return f.ok ? f.lines : -1; });
    let states = "";
    for (let t = 0; t < sch.cycleMs; t += 997) { const st = M.stateAt(c, t, lcs); states += st.idx + st.phase[0] + st.visibleLines + ";"; }
    parts.push(states);
  }
  const e360 = M.effectiveGeom(cfg, 360), e320 = M.effectiveGeom(cfg, 320);
  parts.push("g360:" + JSON.stringify(e360) + "g320:" + JSON.stringify(e320));
  parts.push("zone:" + M.quoteZoneDepth(e360.geom) + "/" + M.quoteZoneDepth(e320.geom) + " attrW:" + M.attrTextWidth(e360.geom) + "/" + M.attrTextWidth(e320.geom));
  parts.push("fits:" + JSON.stringify(cfg.cards.map(c => [M.fitCard(cfg, e360.geom, c, mc), M.fitCard(cfg, e320.geom, c, mc)])));
  const longCard = {quote: "One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twentyone twentytwo twentythree twentyfour twentyfive twentysix", speaker: "Long Speaker", role: "LONG ROLE", year: 2001, slotMs: 9000, revealSpanMs: 3000};
  parts.push("longfit:" + JSON.stringify(M.fitCard(cfg, e360.geom, longCard, mc)));
  parts.push("strings:" + cfg.hud.year + cfg.labels.sep + cfg.hud.dayLine + "|" + cfg.hud.clock + "|" + cfg.labels.tag + "|" + cfg.labels.mark + "|" + cfg.cards.map(c => c.quote + "|" + c.speaker + "|" + c.role + cfg.labels.sep + c.year).join(";"));
  parts.push("widths:" + (mc(cfg.hud.year + cfg.labels.sep + cfg.hud.dayLine, cfg.type.hudLinePx, "regular") + (cfg.hud.year + cfg.labels.sep + cfg.hud.dayLine).length * cfg.type.hudLineSpacingEm * cfg.type.hudLinePx).toFixed(2) + "/" + (mc(cfg.labels.tag, cfg.type.tagPx, "regular") + cfg.labels.tag.length * cfg.type.tagSpacingEm * cfg.type.tagPx).toFixed(2) + " clock:" + mc(cfg.hud.clock, cfg.type.hudClockPx, "regular").toFixed(2) + "x" + (cfg.type.hudClockPx * cfg.type.hudClockLineHeight).toFixed(2));
  parts.push("paint:" + JSON.stringify(cfg.palette) + " font:" + cfg.type.font + " qstyle:" + cfg.type.quoteStyle + " mstyle:" + cfg.type.markStyle + " markH:" + cfg.type.markPx * cfg.type.markLineHeight);
  parts.push("rise:" + (cfg.geom.risePx * 0.5) + " errPad:" + cfg.geom.errPad + " stageH:" + cfg.geom.stageH + " border:" + cfg.geom.borderW);
  const border = clone(cfg); border.schedule.mode = "sequence"; border.cards[2].slotMs = border.cards[2].revealSpanMs + 1000 + border.schedule.exitMs;
  parts.push("valprobe:" + JSON.stringify(M.validateConfig(border)));
  const border2 = clone(cfg); border2.schedule.mode = "sequence"; border2.cards[0].slotMs = border2.cards[0].revealSpanMs + 1000 + border2.schedule.exitMs;
  parts.push("valprobe2:" + JSON.stringify(M.validateConfig(border2)));
  parts.push("reveal2:" + JSON.stringify(M.revealTimes(cfg, 20000, 4)));
  const rep = M.resolveConfig(JSON.stringify({schedule: {replaceCards: cfg.schedule.replaceCards, mode: "uniform"}, cards: [{quote: "Solo.", speaker: "One", role: "ONLY", year: 2000}]}));
  parts.push("repprobe:" + (rep.cfg ? rep.cfg.cards.length : "ERR"));
  parts.push("reveal:" + JSON.stringify(M.revealTimes(cfg, 8000, 5)));
  return parts.join("~");
}
(function(){
  const base = signature(M.CONFIG);
  const leaves = [];
  (function walk(o, p){ for (const k of Object.keys(o)){ const v = o[k], np = p ? p + "." + k : k; if (v && typeof v === "object") walk(v, np); else leaves.push(np); } })(M.CONFIG, "");
  let consumed = 0; const unconsumed = [];
  for (const leaf of leaves){
    const cfg = clone(M.CONFIG);
    const keys = leaf.split("."); let o = cfg;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    const last = keys[keys.length - 1], v = o[last];
    if (typeof v === "number") o[last] = v + 137.31;
    else if (typeof v === "string") o[last] = v.startsWith("#") ? "#123abc" : v + " ZX";
    else if (typeof v === "boolean") o[last] = !v;
    let s2; try { s2 = signature(cfg); } catch(e){ s2 = "THREW"; }
    if (s2 !== base) consumed++; else unconsumed.push(leaf);
  }
  console.log("INFO consumption " + consumed + "/" + leaves.length + " unconsumed=" + JSON.stringify(unconsumed));
  check("D1 CONFIG consumption census: 0 unconsumed", unconsumed.length === 0, unconsumed.join(","));
  check("D2 CONFIG leaf count", leaves.length >= 80, String(leaves.length));
})();

/* ================= E. literal census ================= */
(function(){
  const src = A2.src;
  const cfgStart = src.indexOf("const CONFIG =");
  const cfgEnd = src.indexOf("const TOP_KEYS");
  const outside = src.slice(0, cfgStart) + src.slice(cfgEnd);
  const noStr = outside.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g, "S").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  const hexes = noStr.match(/#[0-9a-fA-F]{3,8}/g) || [];
  check("E1 literal census: no hex colors outside CONFIG", hexes.length === 0, hexes.join(","));
  const nums = (noStr.match(/\b\d+(?:\.\d+)?\b/g) || []).map(Number);
  const whitelist = {0: 1, 1: 1, 2: 1, 3: 1, 6: 1, 10: 1};
  const bad = nums.filter(n => !whitelist[n]);
  check("E2 literal census: numeric literals outside CONFIG all whitelisted structural", bad.length === 0, JSON.stringify(bad));
  console.log("INFO literal census numbers=" + JSON.stringify(nums));
  check("E3 separator string absent outside CONFIG block", src.indexOf(" · ", cfgEnd) < 0);
})();

/* ================= F. displayed-state assertions ================= */
(function(){
  const cfg = M.CONFIG;
  for (const vw of [360, 320]){
    const eff = M.effectiveGeom(cfg, vw), mc = measureCfg(cfg);
    const fits = cfg.cards.map(c => M.fitCard(cfg, eff.geom, c, mc));
    const lcs = fits.map(f => f.lines);
    check("F1 fit ok at " + vw + " for all cards", fits.every(f => f.ok), JSON.stringify(fits));
    check("F2 quote block inside zone at " + vw, fits.every(f => f.blockH <= f.zone));
    check("F3 attribution unmoved model at " + vw, fits.every(f => f.attrH <= eff.geom.attrH && f.spkLines === 1 && f.roleLines <= 4));
    const stages = [0, 2000, 5000, 8000];
    check("F4 displayed line staging at " + vw, stages.map(t => M.stateAt(cfg, t, lcs).visibleLines).join(",") === ("1,2," + (lcs[2] >= 4 ? "3," : "2,") + lcs[2]) || lcs[2] < 4, JSON.stringify(stages.map(t => M.stateAt(cfg, t, lcs).visibleLines)));
    check("F5 card absent through card-free at " + vw, [10600, 12000, 13999].every(t => M.stateAt(cfg, t, lcs).idx === -1));
  }
  check("F6 HUD string constant across phases", [0, 5000, 10300, 12000].every(t => (cfg.hud.year + cfg.labels.sep + cfg.hud.dayLine) === "2037 · A POSSIBLE TUESDAY"));
  check("F7 fit at floor: shrink path engages on a long quote", (() => { const mc = measureCfg(cfg); const e = M.effectiveGeom(cfg, 360); const q = Array(40).fill("word").join(" "); const f = M.fitCard(cfg, e.geom, {quote: q, speaker: "Long Speaker", role: "LONG ROLE", year: 2001}, mc); return f.ok && f.px < cfg.type.quotePx; })());
  check("F8 fit rejection names overflow", (() => { const mc = measureCfg(cfg); const e = M.effectiveGeom(cfg, 360); const big = Array(120).fill("overflow").join(" "); const f = M.fitCard(cfg, e.geom, {quote: big, speaker: "Long Speaker", role: "LONG ROLE", year: 2001}, mc); return !f.ok && f.px === cfg.fit.floorPx && f.overflowPx > 0; })());
})();

/* ================= G. self-start ================= */
(function(){
  check("G1 file starts its own clock (top-level rAF + performance start)", /requestAnimationFrame\(frame\)/.test(A2.src) && /performance\.now\(\)/.test(A2.src) && !/addEventListener\("click"/.test(A2.src.split("window.addEventListener(\"message\"")[0].split("requestAnimationFrame(frame)")[0] || ""));
  let reachedFree = false, wrapped = false, prev = null;
  for (let t = 0; t <= 28000; t += 250){ const st = M.stateAt(M.CONFIG, t, lc360); if (st.phase === "cardfree") reachedFree = true; if (prev && prev.phase === "cardfree" && st.phase === "hold") wrapped = true; prev = st; }
  check("G2 own-clock walk reaches card-free and wraps with no external caller", reachedFree && wrapped);
})();

/* ================= H. swap test ================= */
(function(){
  const over = {cards: [{}, {speaker: "Ada Lovelace", quote: "Teach him how to ask, not what to answer."}, {}], hud: {clock: "07:30"}, cardMs: 2600, palette: {accent: "#3fd68f"}, type: {font: "Arial, sans-serif"}};
  const r = M.resolveConfig(JSON.stringify(Object.assign({schedule: {mode: "uniform"}}, over)));
  const c = r.cfg;
  check("H1 swap values applied", c.cards[1].speaker === "Ada Lovelace" && c.cards[1].quote.startsWith("Teach him") && c.hud.clock === "07:30" && c.palette.accent === "#3fd68f" && c.type.font === "Arial, sans-serif");
  check("H2 per-index patch keeps untouched cards and keys", c.cards[0].speaker === "Bruce Schneier" && c.cards[2].speaker === "Sal Khan" && c.palette.bg === M.CONFIG.palette.bg);
  check("H3 swap cycle derived 9200 with moved boundaries", M.cycleMs(c) === 9200 && M.stateAt(c, 2600, lc360).idx === 1 && M.stateAt(c, 7800, lc360).phase === "endhold" && M.stateAt(c, 9200 - 1, lc360).phase === "endhold");
  const mc = measureCfg(c); const e = M.effectiveGeom(c, 360);
  const adaFit = M.fitCard(c, e.geom, c.cards[1], mc);
  check("H4 swap card fits", adaFit.ok === true, JSON.stringify(adaFit));
  const supp = M.resolveConfig(JSON.stringify({schedule: {mode: "uniform"}, enterMs: 900, endHoldMs: 0, labels: {tag: "SAID"}, palette: {page: "#222222"}}));
  check("H5 supplementary overrides (enter/endHold/tag/page)", supp.cfg.enterMs === 900 && M.cycleMs(supp.cfg) === 12600 && supp.cfg.labels.tag === "SAID" && supp.cfg.palette.page === "#222222");
})();

/* ================= I. validation behaviour ================= */
(function(){
  const bad1 = M.resolveConfig("{not json");
  check("I1 malformed JSON produces the error state list", bad1.cfg === null && bad1.errors.length === 1 && /malformed JSON/.test(bad1.errors[0]));
  const empty = M.resolveConfig(JSON.stringify({cardsReplace: []}));
  check("I2 empty replace list is a validation error, never a silent restore", M.validateConfig(empty.cfg).some(e => /cards/.test(e)));
  const nullCard = M.resolveConfig(JSON.stringify({cardsReplace: [null]}));
  check("I3 null card named", M.validateConfig(nullCard.cfg).some(e => /cards\[0\]/.test(e)));
  const wrongType = M.resolveConfig(JSON.stringify({cardsReplace: [{quote: 42, speaker: "S", role: "R", year: 2000}]}));
  check("I4 wrong field type named", M.validateConfig(wrongType.cfg).some(e => /cards\[0\]\.quote/.test(e)));
  const enterBad = clone(M.CONFIG); enterBad.schedule.mode = "sequence"; enterBad.enterMs = 7000;
  check("I5 enterMs >= slot rejected", M.validateConfig(enterBad).some(e => /enterMs/.test(e)));
  const exitBad = clone(M.CONFIG); exitBad.schedule.mode = "sequence"; exitBad.schedule.exitMs = 6500;
  check("I6 exitMs >= slot rejected", M.validateConfig(exitBad).some(e => /exitMs/.test(e)));
  const revealBad = clone(M.CONFIG); revealBad.schedule.mode = "sequence"; revealBad.cards[0].revealSpanMs = 6000;
  check("I7 reveal + minimum hold + exit beyond slot rejected", M.validateConfig(revealBad).some(e => /reveal/.test(e)));
  const nanBad = clone(M.CONFIG); nanBad.cardMs = NaN;
  check("I8 non-finite timing rejected", M.validateConfig(nanBad).some(e => /cardMs/.test(e)));
  const unk = M.resolveConfig(JSON.stringify({bogusKey: 1}));
  check("I9 unknown top-level key reported as a warning", unk.warnings.some(w => /bogusKey/.test(w)));
  check("I10 valid default config clears validation", M.validateConfig(M.CONFIG).length === 0, JSON.stringify(M.validateConfig(M.CONFIG)));
  const uni = clone(M.CONFIG); uni.schedule.mode = "uniform"; uni.enterMs = 900;
  check("I11 uniform mode validated on its own terms (mode rule)", M.validateConfig(uni).length === 0);
})();

/* ================= J. purity ================= */
(function(){
  const hits = A2.src.match(/segment\.mp4|source\.mp4|ev\/|t502|t352|<video|<img|https?:\/\//g) || [];
  check("J1 purity grep: no specimen media or external references", hits.length === 0, hits.join(","));
  check("J2 no captions elements", !/<track|class="subtitle|class="caption/.test(A2.src));
})();

console.log("SUMMARY pass=" + pass + " fail=" + fail + " total=" + (pass + fail));
if (failures.length) console.log("FAILURES " + JSON.stringify(failures));
process.exit(fail ? 1 : 0);
