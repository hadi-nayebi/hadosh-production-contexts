"use strict";
/* Own-check suite — T91 attempt 3. Logic level; PIXEL-UNVERIFIED; GEORGIA-UNVERIFIED. */
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const ART = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T91-qa-quote-cards";
const RUN11 = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/practice/runs/2026-11-15-cycle-011-wave-10";
function loadModule(htmlPath, tag){
  const src = fs.readFileSync(htmlPath, "utf8");
  const m = src.match(/<script>([\s\S]*?)<\/script>/);
  const tmp = "/tmp/t91-" + tag + ".js";
  fs.writeFileSync(tmp, m[1]);
  delete require.cache[tmp];
  return {mod: require(tmp), src: src, sha: crypto.createHash("sha256").update(src).digest("hex")};
}
const A3 = loadModule(path.join(ART, "recreation.html"), "a3");
const A2 = loadModule(path.join(ART, "recreation-attempt-2.html"), "a2p");
const M = A3.mod;
const metrics = JSON.parse(fs.readFileSync(path.join(RUN11, "metrics-T91.json"), "utf8"));
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
  else { fail++; failures.push(name); console.log("FAIL " + name + (detail ? " — " + detail : "")); }
}
const clone = o => JSON.parse(JSON.stringify(o));
const cfg = M.CONFIG, m = measureCfg(cfg);
console.log("INFO finalSha=" + A3.sha + " priorSha=" + A2.sha);
check("prior attempt-2 sha is the preserved build", A2.sha === "64c636b00e52fe7ae1819749e8e4f6793315f523618999350d59c2527e12e5a7", A2.sha);

/* ---------- V3 schedule effect mappings ---------- */
(function(){
  const sch = M.resolveSchedule(cfg);
  check("V3 specimen table (reveal 8000, hold 3000, exit 600, free 2400, cycle 14000)",
    sch.mode === "specimen" && sch.slots[0].slotMs === 11600 && sch.freeStart === 11600 && sch.freeMs === 2400 && sch.cycleMs === 14000, JSON.stringify(sch));
  const lc = [3,3,4];
  const S = t => M.stateAt(cfg, t, lc);
  const pts = [[0,"hold",1],[1,"hold",1],[1999,"hold",1],[2000,"hold",2],[4999,"hold",2],[5000,"hold",3],[7999,"hold",3],[8000,"hold",4],[10999,"hold",4],[11000,"exit",4],[11599,"exit",4],[11600,"cardfree",0],[12000,"cardfree",0],[13999,"cardfree",0],[14000,"hold",1]];
  check("V3 specimen boundary instants", pts.every(p => { const s = S(p[0]); return s.phase === p[1] && s.visibleLines === p[2]; }),
    pts.map(p => p[0] + ":" + S(p[0]).phase + "/" + S(p[0]).visibleLines).join(" "));
  let excl = true;
  for (let t = 0; t < 14000; t += 37){ const s = S(t); if (!(s.idx === 2 || s.idx === -1)) excl = false; }
  check("V3 specimen exclusivity sweep (37ms)", excl);
  const seq = clone(cfg); seq.schedule.mode = "sequence";
  const ss = M.resolveSchedule(seq);
  check("V3 sequence table (slots 7000/6500/12400, cycle 27900)", ss.slots.map(s => s.slotMs).join(",") === "7000,6500,12400" && ss.cycleMs === 27900, JSON.stringify(ss));
  let sexcl = true, owners = new Set();
  for (let t = 0; t < 27900; t += 37){ const s = M.stateAt(seq, t, lc); owners.add(s.idx); if (s.idx < -1 || s.idx > 2) sexcl = false; }
  check("V3 sequence exclusivity sweep + all cards own time", sexcl && owners.has(0) && owners.has(1) && owners.has(2) && owners.has(-1));
  const b = [[6999,0],[7000,1],[13499,1],[13500,2],[25899,2],[25900,-1],[27899,-1],[27900,0]];
  check("V3 sequence slot boundaries", b.every(p => M.stateAt(seq, p[0], lc).idx === p[1]), b.map(p => p[0] + ":" + M.stateAt(seq, p[0], lc).idx).join(" "));
  const uni = clone(cfg); uni.schedule.mode = "uniform";
  check("V3 uniform mode absent (retirement error)", M.validateConfig(uni).some(e => e.indexOf("retired") >= 0));
})();

/* ---------- V7 per-line reading table ---------- */
(function(){
  let allOk = true; const rows = [];
  for (const vw of [360, 320]){
    const eff = M.effectiveGeom(cfg, vw), mm = measureCfg(cfg);
    cfg.cards.forEach(function(c, i){
      const f = M.fitCard(cfg, eff.geom, c, mm);
      const lines = M.wrapText(c.quote, eff.geom.quoteW, f.px, mm, "quote");
      const times = M.revealTimes(cfg, c.revealSpanMs, lines.length);
      lines.forEach(function(ln, li){
        const toks = ln.split(/\s+/).filter(Boolean).length;
        const exitAt = i === 2 ? 11000 : c.slotMs - cfg.schedule.exitMs;
        const remain = exitAt - times[li], need = Math.ceil(toks * 60000 / cfg.schedule.readingWpm);
        if (remain < need) allOk = false;
        rows.push("vw" + vw + " card" + i + " line" + li + " toks" + toks + " reveal" + times[li] + " remain" + remain + " need" + need + " " + (remain >= need ? "ok" : "FAIL"));
      });
    });
  }
  rows.forEach(r => console.log("INFO perline " + r));
  check("V7 per-line reading floors, every card, both widths", allOk);
})();

/* ---------- V8 validation completeness (adversarial) ---------- */
(function(){
  function leaves(o, p, out){ for (const k of Object.keys(o)){ const v = o[k], q = p ? p + "." + k : k; if (typeof v === "number") out.push(q); else if (v && typeof v === "object" && !Array.isArray(v)) leaves(v, q, out); else if (Array.isArray(v)) v.forEach((e, i) => { if (e && typeof e === "object") leaves(e, q + "[" + i + "]", out); }); } return out; }
  function setPath(o, pth, val){ const parts = pth.replace(/\[(\d+)\]/g, ".$1").split("."); let cur = o; for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]]; cur[parts[parts.length - 1]] = val; }
  const paths = leaves(cfg, "", []);
  console.log("INFO numeric leaves=" + paths.length);
  let bad = [];
  for (const p of paths) for (const bv of [NaN, Infinity, -Infinity, "123"]){
    const c = clone(cfg); setPath(c, p, bv);
    let errs, threw = false; try { errs = M.validateConfig(c); } catch (e) { threw = true; }
    if (threw || !errs || !errs.length) bad.push(p + "=" + String(bv));
  }
  check("V8 non-finite/string sweep over EVERY numeric leaf -> error, no throw", bad.length === 0, bad.slice(0, 6).join(" | "));
  let gbad = [];
  for (const g of ["hud","palette","labels","schedule","fit","type","stage","geom"]) for (const bv of [null, "absent"]){
    const c = clone(cfg); if (bv === "absent") delete c[g]; else c[g] = null;
    let errs, threw = false; try { errs = M.validateConfig(c); } catch (e) { threw = true; }
    if (threw || !errs || !errs.length) gbad.push(g + "=" + bv);
  }
  check("V8 null/absent every group -> error, no throw", gbad.length === 0, gbad.join(" | "));
  check("V8 malformed JSON + non-object override -> error data", M.resolveConfig("{x").cfg === null && M.resolveConfig("[1]").cfg === null && M.resolveConfig("42").errors.length > 0);
  const w = M.resolveConfig(JSON.stringify({schedule: {bogusNested: 1}, bogusTop: 2}));
  check("V8 warning-only supply: warnings collected (top + nested) and config valid", w.warnings.length >= 2 && M.validateConfig(w.cfg).length === 0, JSON.stringify(w.warnings));
  check("V8 default config: no errors, no warnings on the plain resolve", M.validateConfig(cfg).length === 0 && M.resolveConfig(null).warnings.length === 0);
  const huge = clone(cfg); huge.cards[0].slotMs = 1000000000000;
  const fracS = clone(cfg); fracS.cards[0].slotMs = 7000.5;
  const fracI = clone(cfg); fracI.schedule.specimenCard = 0.5;
  check("V8 huge finite + fractional values -> errors", M.validateConfig(huge).length > 0 && M.validateConfig(fracS).length > 0 && M.validateConfig(fracI).length > 0);
})();

/* ---------- V9 fit contract ---------- */
(function(){
  const g360 = M.effectiveGeom(cfg, 360).geom, g320 = M.effectiveGeom(cfg, 320).geom;
  const longWord = "Antidisestablishmentarianismfloccinaucinihilipilificationextraordinarily";
  const wc = {quote: "Short " + longWord + " tail.", speaker: "Sal Khan", role: "FOUNDER, KHAN ACADEMY", year: 2024};
  check("V9 oversized quote word rejects naming word + overflow px (both widths)",
    [g360, g320].every(g => { const f = M.fitCard(cfg, g, wc, m); return !f.ok && f.hFail && f.hFail.indexOf(longWord) >= 0; }));
  const sc = {quote: "Fine quote.", speaker: longWord, role: "FOUNDER, KHAN ACADEMY", year: 2024};
  const rc = {quote: "Fine quote.", speaker: "Sal Khan", role: longWord, year: 2024};
  check("V9 oversized speaker/role tokens reject naming token + px",
    !M.fitCard(cfg, g360, sc, m).ok && M.fitCard(cfg, g360, sc, m).attrFail.indexOf(longWord) >= 0 &&
    !M.fitCard(cfg, g360, rc, m).ok && M.fitCard(cfg, g360, rc, m).attrFail.indexOf(longWord) >= 0);
  const c2 = clone(cfg); c2.fit.stepPx = 3;
  const longQ = {quote: Array(60).fill("word").join(" "), speaker: "Sal Khan", role: "FOUNDER, KHAN ACADEMY", year: 2024};
  check("V9 shrink clamps AT the floor", M.fitCard(c2, g360, longQ, measureCfg(c2)).px === c2.fit.floorPx);
  const c3 = clone(cfg); c3.fit.stepPx = 0.001;
  const t0 = Date.now(); const f3 = M.fitCard(c3, g360, longQ, measureCfg(c3));
  check("V9 tiny stepPx terminates under the step bound", Date.now() - t0 < 5000 && f3.px >= c3.fit.floorPx);
  check("V9 stepPx/floor validation class", [0, -1, 5].every(v => { const c = clone(cfg); c.fit.stepPx = v; return M.validateConfig(c).length > 0; }));
  const shrinkProbe = {quote: Array(40).fill("word").join(" "), speaker: "Sal Khan", role: "FOUNDER, KHAN ACADEMY", year: 2024};
  const f4 = M.fitCard(cfg, g360, shrinkProbe, m);
  check("V9 shrink path + vertical reject regression", f4.ok && f4.px < 24 && !M.fitCard(cfg, g360, {quote: Array(120).fill("word").join(" "), speaker: "Sal Khan", role: "FOUNDER, KHAN ACADEMY", year: 2024}, m).ok);
  const rm = clone(cfg); rm.fit.roleMaxLines = 2;
  check("V9 roleMaxLines consumed (limit 2 rejects the 3-line role at 360)", !M.fitCard(rm, g360, cfg.cards[0], measureCfg(rm)).ok);
})();

/* ---------- V10 resize / lifecycle ---------- */
(function(){
  const r360 = M.recomputeAt(cfg, 360, m), r320 = M.recomputeAt(cfg, 320, m);
  check("V10 recompute line counts 360 [3,3,4] / 320 [4,3,5]", JSON.stringify(r360.lineCounts) === "[3,3,4]" && JSON.stringify(r320.lineCounts) === "[4,3,5]", JSON.stringify([r360.lineCounts, r320.lineCounts]));
  const stA = M.stateAt(cfg, 5000, r360.lineCounts), stB = M.stateAt(cfg, 5000, r320.lineCounts);
  check("V10 continuity at mid-reveal instant (same idx/phase, no restart)", stA.idx === stB.idx && stA.phase === stB.phase);
  const low = M.recomputeAt(cfg, 300, m), back = M.recomputeAt(cfg, 360, m);
  check("V10 below-minimum error names the minimum; recovery to valid", !low.ok && low.error.indexOf("320") >= 0 && back.ok);
  const badG = clone(cfg); badG.geom.quoteW = 400;
  check("V10 region-inside-card validation", M.validateConfig(badG).some(e => e.indexOf("geometry:") >= 0));
  check("V10 resize listener + relayout wired in the browser path", /addEventListener\("resize", relayout\)/.test(A3.src) && /__t91\.relayout/.test(A3.src));
})();

/* ---------- V11 swap + replacement ---------- */
(function(){
  const swap = M.resolveConfig(JSON.stringify({cards: [{quote: "Teach him how to ask, not what to answer.", speaker: "Ada Lovelace"}], hud: {clock: "20:00"}, palette: {accent: "#7fd4ff"}, type: {font: "Arial, sans-serif"}}));
  check("V11 swap set resolves (speaker/quote/clock/accent/font)", swap.cfg.cards[0].speaker === "Ada Lovelace" && swap.cfg.hud.clock === "20:00" && swap.cfg.palette.accent === "#7fd4ff" && swap.cfg.type.font === "Arial, sans-serif" && M.validateConfig(swap.cfg).length === 0);
  function derivedCycle(n){
    const cards = [];
    for (let i = 0; i < n; i++) cards.push({quote: "Card number " + i + " carries a few words.", speaker: "S " + i, role: "ROLE " + i, year: 2020});
    const r = M.resolveConfig(JSON.stringify({cardsReplace: cards, schedule: {mode: "sequence"}}));
    const expect = r.cfg.cards.reduce((a, c) => a + c.slotMs, 0) + r.cfg.schedule.seqFreeMs;
    return {r: r, expect: expect, actual: M.cycleMs(r.cfg)};
  }
  const d1 = derivedCycle(1), d2 = derivedCycle(2), d4 = derivedCycle(4);
  console.log("INFO derived cycles 1/2/4 = " + d1.actual + "/" + d2.actual + "/" + d4.actual);
  check("V11 replacement 1/2/4 cards: exact counts + cycles match the printed derivation",
    d1.r.cfg.cards.length === 1 && d2.r.cfg.cards.length === 2 && d4.r.cfg.cards.length === 4 &&
    d1.actual === d1.expect && d2.actual === d2.expect && d4.actual === d4.expect &&
    M.validateConfig(d1.r.cfg).length === 0 && M.validateConfig(d4.r.cfg).length === 0);
  check("V11 shorter replacement without specimenCard derives last index + warns",
    d2.r.cfg.schedule.specimenCard === 1 && d2.r.warnings.some(w => w.indexOf("specimenCard derived") >= 0), JSON.stringify(d2.r.warnings));
  const expl = M.resolveConfig(JSON.stringify({cardsReplace: [{quote: "One card quote.", speaker: "A B", role: "R X", year: 2020, slotMs: 6000, revealSpanMs: 3000}], schedule: {specimenCard: 5}}));
  check("V11 explicit out-of-range specimenCard still errors", expl.cfg.schedule.specimenCard === 5 && M.validateConfig(expl.cfg).some(e => e.indexOf("specimenCard") >= 0));
  const empty = M.resolveConfig(JSON.stringify({cardsReplace: []}));
  check("V11 empty replacement list is a validation error", M.validateConfig(empty.cfg).length > 0);
})();

/* ---------- V12 self-start ---------- */
(function(){
  const lc = [3,3,4]; let sawFree = false, sawWrap = false;
  for (let t = 0; t <= 28000; t += 250){ const s = M.stateAt(cfg, t, lc); if (s.phase === "cardfree") sawFree = true; if (t >= 14000 && s.idx === 2 && s.phase === "hold") sawWrap = true; }
  check("V12 own clock reaches card-free and wraps with no external caller", sawFree && sawWrap);
})();

/* ---------- V6 displayed-state model ---------- */
(function(){
  const lc360 = [3,3,4], lc320 = [4,3,5];
  let staging = true;
  for (const [span, lc] of [[8000, lc360], [8000, lc320]]){
    const times = M.revealTimes(cfg, span, lc[2]);
    times.forEach((t, li) => { if (M.visibleLineCount(cfg, span, lc[2], t) !== li + 1) staging = false; });
  }
  check("V6 line k visible and lines > k hidden at each reveal checkpoint (both wraps)", staging);
  check("V6 warning strip bounds disjoint from card and HUD (warn top 516 > card bottom 508; HUD above card)", (cfg.geom.stageH - cfg.geom.warnH) > (cfg.geom.cardY + cfg.geom.cardH) && cfg.geom.hudY < cfg.geom.cardY);
  check("V6 warning surface present in source (rendered strip + error-path append)", /id="warn"/.test(A3.src) && /Configuration warning/.test(A3.src) && /Warning — /.test(A3.src));
  check("V6 card fully absent through the card-free phase", [11600, 12000, 13999].every(t => M.stateAt(cfg, t, lc360).idx === -1));
})();

/* ---------- V4 CONFIG consumption census (mutation) ---------- */
(function(){
  function signature(c){
    const mm = measureCfg(c);
    const parts = [];
    try { parts.push(JSON.stringify(M.resolveSchedule(c))); } catch (e) { parts.push("sched-err"); }
    const cs = clone(c); cs.schedule.mode = "sequence";
    try { parts.push(JSON.stringify(M.resolveSchedule(cs))); } catch (e) { parts.push("seq-err"); }
    try { parts.push(JSON.stringify(M.effectiveGeom(c, 360))); parts.push(JSON.stringify(M.effectiveGeom(c, 320))); } catch (e) { parts.push("geom-err"); }
    try { parts.push(JSON.stringify(c.cards.map(x => M.fitCard(c, M.effectiveGeom(c, 360).geom, x, mm)))); } catch (e) { parts.push("fit-err"); }
    try { parts.push(JSON.stringify(M.validateConfig(c))); } catch (e) { parts.push("val-err"); }
    try { parts.push(JSON.stringify(M.revealTimes(c, 8000, 5))); const cf = clone(c); cf.schedule.secondLineFrac = 1; parts.push(JSON.stringify(M.revealTimes(cf, 8000, 5))); } catch (e) { parts.push("rev-err"); }
    try { const r = M.resolveConfig(JSON.stringify({cardsReplace: [{quote: "Derived slot probe quote here.", speaker: "P Q", role: "ROLE P", year: 2020}]})); parts.push(JSON.stringify(r.cfg.cards) + JSON.stringify(r.warnings)); } catch (e) { parts.push("der-err"); }
    try { const r2 = M.resolveConfig(JSON.stringify({cards: [{quote: "ReplaceCards path probe quote.", speaker: "P Q", role: "ROLE P", year: 2020, slotMs: 6000, revealSpanMs: 3000}]})); parts.push(JSON.stringify(r2.cfg.cards) + "|" + r2.cfg.schedule.specimenCard); } catch (e) { parts.push("der2-err"); }
    try { parts.push(JSON.stringify(c.cards.map(x => M.readingFloorMs(c, x)))); } catch (e) { parts.push("read-err"); }
    try { const rc = M.recomputeAt(c, 319, mm); parts.push(rc.ok ? "rc-ok" : rc.error); } catch (e) { parts.push("rc-err"); }
    try { parts.push(JSON.stringify(c.cards.map(x => M.wrapText(x.quote, M.effectiveGeom(c, 360).geom.quoteW, 24, mm, "quote")))); } catch (e) { parts.push("wrap-err"); }
    try { parts.push(JSON.stringify(c.cards.map(x => x.revealSpanMs + (M.tokenCount(x) === Math.max.apply(null, c.cards.map(M.tokenCount)) ? c.schedule.minHoldFloorMs : c.schedule.minHoldMs) + c.schedule.exitMs))); } catch (e) { parts.push("minslot-err"); }
    try { const pc = clone(c); pc.fit.stepPx = 0.001; parts.push(JSON.stringify(M.fitCard(pc, M.effectiveGeom(pc, 360).geom, {quote: Array(60).fill("word").join(" "), speaker: "Sal Khan", role: "FOUNDER, KHAN ACADEMY", year: 2024}, mm))); } catch (e) { parts.push("steps-err"); }
    try { parts.push(JSON.stringify(M.fitCard(c, M.effectiveGeom(c, 360).geom, {quote: "Short quote.", speaker: "Sal Khan", role: "ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN ELEVEN TWELVE THIRTEEN FOURTEEN FIFTEEN SIXTEEN", year: 2024}, mm))); } catch (e) { parts.push("role-err"); }
    parts.push("tag " + c.type.tagPx + "px ls " + c.type.tagSpacingEm + "em|hudLine " + c.type.hudLinePx + "px ls " + c.type.hudLineSpacingEm + "em|hudClock " + c.type.hudClockPx + "px lh " + c.type.hudClockLineHeight + "|mark lh " + c.type.markLineHeight);
    parts.push(c.hud.year + c.labels.sep + c.hud.dayLine + "|" + c.hud.clock);
    parts.push(c.cards.map(x => x.speaker + "|" + x.role + c.labels.sep + x.year).join(";"));
    parts.push(c.labels.tag + "|" + c.labels.mark);
    parts.push(c.geom.borderW + "px " + c.type.borderStyle + " " + c.palette.edge);
    parts.push([c.palette.bg, c.palette.card, c.palette.ink, c.palette.accent, c.palette.chip, c.palette.page].join(","));
    parts.push(c.type.quoteStyle + " " + c.type.quotePx + "px " + c.type.font + "|" + c.type.markStyle + " " + c.type.markPx + "px " + c.type.font);
    return parts.join("§");
  }
  function leafPaths(o, p, out){ for (const k of Object.keys(o)){ const v = o[k], q = p ? p + "." + k : k; if (v && typeof v === "object" && !Array.isArray(v)) leafPaths(v, q, out); else if (Array.isArray(v)) v.forEach((e, i) => { if (e && typeof e === "object") leafPaths(e, q + "[" + i + "]", out); else out.push(q + "[" + i + "]"); }); else out.push(q); } return out; }
  function setP(o, pth, val){ const parts = pth.replace(/\[(\d+)\]/g, ".$1").split("."); let cur = o; for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]]; cur[parts[parts.length - 1]] = val; }
  function getP(o, pth){ const parts = pth.replace(/\[(\d+)\]/g, ".$1").split("."); let cur = o; for (const p of parts) cur = cur[p]; return cur; }
  const base = signature(cfg);
  const paths = leafPaths(cfg, "", []);
  const unconsumed = [];
  for (const p of paths){
    const v = getP(cfg, p);
    if (typeof v === "number") setP(cfg, p, v + 7);
    else if (typeof v === "string") setP(cfg, p, v + "X");
    else if (typeof v === "boolean") setP(cfg, p, !v);
    const sig = signature(cfg);
    setP(cfg, p, v);
    if (sig === base) unconsumed.push(p);
  }
  check("census restore: CONFIG back to base after mutation walk", signature(cfg) === base);
  console.log("INFO consumption leaves=" + paths.length + " unconsumed=" + JSON.stringify(unconsumed));
  check("V4 consumption census: every CONFIG leaf consumed (" + paths.length + " leaves)", unconsumed.length === 0, unconsumed.join(" | "));
  check("V4 removed keys absent from CONFIG and logic", !("cardMs" in cfg) && !("endHoldMs" in cfg) && !/cardMs|endHoldMs/.test(A3.src.split("const CONFIG")[1] || ""));
})();

/* ---------- V5 literal census ---------- */
(function(){
  const src = A3.src;
  const cfgStart = src.indexOf("const CONFIG = {");
  const cfgEnd = src.indexOf("};", cfgStart) + 2;
  const outside = src.slice(0, cfgStart) + src.slice(cfgEnd);
  const noComments = outside.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  const noStrings = noComments.replace(/"(?:[^"\\]|\\.)*"/g, '""').replace(/'(?:[^'\\]|\\.)*'/g, "''");
  const nums = (noStrings.match(/(?<![A-Za-z_$0-9])\d+(?:\.\d+)?/g) || []).map(Number);
  const counts = {}; nums.forEach(n => counts[n] = (counts[n] || 0) + 1);
  console.log("INFO literals outside CONFIG: " + JSON.stringify(counts));
  const WHITELIST = new Set([0, 0.001, 1, 2, 3, 5, 6, 9, 10, 20, 500, 1000, 10000, 3600000, 60000]);
  const unlisted = Object.keys(counts).map(Number).filter(n => !WHITELIST.has(n));
  check("V5 literal census: no unlisted literals outside CONFIG", unlisted.length === 0, "unlisted=" + JSON.stringify(unlisted));
  check("V5 no shaping literal > 4 class and no solid string outside CONFIG", !/roleLines\.length > 4/.test(src) && !/"solid"/.test(outside.replace(/\/\*[\s\S]*?\*\//g, "")));
  const hexes = (noComments.match(/#[0-9a-fA-F]{6}/g) || []);
  check("V5 no hex colors outside CONFIG", hexes.length === 0, hexes.join(","));
})();

/* ---------- CSS parse (A-C012-3) ---------- */
(function(){
  const css = A3.src.match(/<style>([\s\S]*?)<\/style>/)[1];
  const rules = css.split("}").map(s => s.trim()).filter(Boolean);
  let ok = rules.length >= 5;
  for (const r of rules){
    const idx = r.indexOf("{"); if (idx < 0) { ok = false; break; }
    const decls = r.slice(idx + 1).split(";").map(s => s.trim()).filter(Boolean);
    for (const d of decls){ const kv = d.split(":"); if (kv.length !== 2 || !/^[a-z-]+$/.test(kv[0].trim()) || !kv[1].trim()) { ok = false; } }
  }
  check("CSS parse: every rule/declaration parses (" + rules.length + " rules)", ok);
})();

/* ---------- V14 purity grep ---------- */
(function(){
  const hits = (A3.src.match(/segment\.mp4|source\.mp4|ev\/|t502|t352|<video|<img|http/g) || []);
  check("V14 purity grep: 0 specimen-media / external references", hits.length === 0, hits.join(","));
})();

console.log("RESULT pass=" + pass + " fail=" + fail + (failures.length ? " failures=" + failures.join(" | ") : ""));
process.exit(fail ? 1 : 0);
