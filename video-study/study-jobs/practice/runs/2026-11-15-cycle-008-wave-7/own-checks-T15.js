"use strict";
/* own-checks-T15.js — practice Cycle 008 Wave 7, T15 attempt 3.
   Logic-level suite (PIXEL-UNVERIFIED: stubbed measure model, no render).
   Every check asserts an EFFECT (key -> measured effect, cure -> measured
   behaviour), not a count alone. Thresholds are stated per check. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ART = path.join(__dirname, "..", "..", "..", "..", "study", "recreations", "T15-particle-typography");
const html = fs.readFileSync(path.join(ART, "recreation.html"), "utf8");
const SRC = html.match(/<script>([\s\S]*)<\/script>/)[1];

let PASS = 0, FAIL = 0; const failures = [];
function check(name, cond, detail){
  if (cond){ PASS++; console.log("PASS  " + name + (detail ? "  [" + detail + "]" : "")); }
  else { FAIL++; failures.push(name); console.log("FAIL  " + name + (detail ? "  [" + detail + "]" : "")); }
}
function load(search, W, H, srcOverride){
  const handlers = { message: [], resize: [] };
  let rafCb = null;
  const mainCtx = { globalAlpha: 1, fillStyle: "", draws: [],
    fillRect(x, y, w, h){ this.draws.push({ x, y, w, h, alpha: this.globalAlpha, style: this.fillStyle }); } };
  const mainCanvas = { clientWidth: W || 960, clientHeight: H || 540, width: 0, height: 0, getContext: () => mainCtx };
  const rects = [];
  const probeCtx = { font: "", textAlign: "", textBaseline: "", fillStyle: "",
    _px(){ const m = /([\d.]+)px/.exec(this.font); return m ? parseFloat(m[1]) : 0; },
    measureText(t){ return { width: 0.55 * this._px() * String(t).length }; },
    fillText(t, x, y){ rects.push({ cx: x, cy: y, w: this.measureText(t).width, h: this._px() }); },
    clearRect(){ rects.length = 0; },
    getImageData(x0, y0, w, h){ const d = new Uint8ClampedArray(w * h * 4);
      for (const r of rects) for (let y = Math.max(0, Math.floor(r.cy - r.h / 2)); y < Math.min(h, r.cy + r.h / 2); y++)
        for (let x = Math.max(0, Math.floor(r.cx - r.w / 2)); x < Math.min(w, r.cx + r.w / 2); x++) d[(y * w + x) * 4 + 3] = 255;
      return { data: d }; } };
  const probeCanvas = { width: 0, height: 0, getContext: () => probeCtx };
  const sandbox = { console, URLSearchParams, Math, JSON,
    location: { search: search || "" }, window: {},
    document: { getElementById: () => mainCanvas, createElement: () => probeCanvas },
    addEventListener: (ev, fn) => { if (handlers[ev]) handlers[ev].push(fn); },
    requestAnimationFrame: (cb) => { rafCb = cb; } };
  vm.createContext(sandbox);
  new vm.Script(srcOverride || SRC).runInContext(sandbox);
  let ts = 0;
  const inst = { api: sandbox.window.T15_API, sandbox, mainCtx, mainCanvas, probeCtx, handlers,
    step(dt){ mainCtx.draws.length = 0; ts += dt; const cb = rafCb; rafCb = null; cb(ts); },
    drive(frames, dt){ for (let i = 0; i < frames; i++) this.step(dt || 50); },
    driveUntil(pred, max, dt){ let n = 0; while (!pred() && n < (max || 2000)){ this.step(dt || 50); n++; } return n; },
    send(data){ for (const fn of handlers.message) fn({ data }); },
    resize(){ for (const fn of handlers.resize) fn(); } };
  return inst;
}
const mean = a => a.reduce((s, v) => s + v, 0) / (a.length || 1);

/* ---------- scheduler exclusivity (regression guard) ---------- */
{
  const inst = load(""); inst.drive(340, 50);
  const tr = inst.api.getTrace();
  const fe = tr.filter(e => e.event === "formStart"), de = tr.filter(e => e.event === "dissolveEnd");
  check("exclusivity: formStart(1) strictly after dissolveEnd(0)", fe.length >= 2 && de.length >= 1 && fe[1].t > de[0].t,
    "formStart1@" + (fe[1] && fe[1].t) + " dissolveEnd0@" + (de[0] && de[0].t));
  check("tempo: default cycle = form3000+hold2500+dissolve2000+gap250 (trace deltas)",
    tr.some(e => e.event === "holdStart" && e.t === 3250) && tr.some(e => e.event === "dissolveStart" && e.t === 5750),
    JSON.stringify(tr.slice(0, 5)));
}

/* ---------- OC2: delay streaming + advected convergence + continuity ---------- */
{
  const inst = load("");
  inst.driveUntil(() => inst.api.getPhase() === "form", 100, 50);
  const borrowed = inst.api.getParticles().filter(p => p.borrowed);
  const startAnchor = new Map(borrowed.map(p => [p, { x: p.sx, y: p.sy }]));
  const before = new Map(borrowed.map(p => [p, { x: p.x, y: p.y }]));
  inst.step(50);
  const delayed = borrowed.filter(p => p.delay > 0.06 && p.x > 60 && p.x < 860 && p.y > 60 && p.y < 440);
  const okDelay = delayed.filter(p => Math.abs((p.x - before.get(p).x) - p.svx * 0.05) < 0.01 && Math.abs((p.y - before.get(p).y) - p.svy * 0.05) < 0.01);
  check("OC2 delay: delayed borrowed particles displace at exactly stream velocity x dt (>=10 sampled, all match)",
    delayed.length >= 10 && okDelay.length === delayed.length, okDelay.length + "/" + delayed.length);
  /* mid-form curvature */
  inst.driveUntil(() => inst.api.getPhase() === "form" && inst.api.getTrace().length >= 0 && borrowed[0] && (function(){ return true; })(), 0, 50);
  let guard = 0; // advance to mid-form: ~1450ms of form elapsed
  while (guard++ < 28) inst.step(50);
  const devs = [];
  for (const p of borrowed){
    const s0 = startAnchor.get(p); const dx = p.tx - s0.x, dy = p.ty - s0.y; const len = Math.hypot(dx, dy);
    if (len < 120) continue;
    const cross = (dx * (p.y - s0.y) - dy * (p.x - s0.x)) / len;
    const scross = (dx * p.svy - dy * p.svx) / len;
    if (Math.abs(scross) > 5) devs.push({ dev: cross, s: Math.sign(scross) });
  }
  const med = devs.map(d => Math.abs(d.dev)).sort((a, b) => a - b)[Math.floor(devs.length / 2)] || 0;
  const agree = devs.filter(d => Math.sign(d.dev) === d.s && Math.abs(d.dev) > 0.5).length / (devs.length || 1);
  check("OC2 curvature: median mid-form deviation from straight segment >= 2.5px, >=70% in stream-perpendicular direction",
    med >= 2.5 && agree >= 0.7, "median=" + med.toFixed(2) + "px agree=" + agree.toFixed(2) + " n=" + devs.length);
}
{
  /* FORM->HOLD continuity, dt=16 finite differences */
  const inst = load("");
  inst.driveUntil(() => inst.api.getPhase() === "form", 100, 16);
  const sample = inst.api.getParticles().filter(p => p.borrowed).slice(0, 200);
  let prev = new Map(sample.map(p => [p, { x: p.x, y: p.y }])), lastForm = null, firstHold = null, prevVel = new Map();
  let frames = 0;
  while (frames++ < 400){
    const phBefore = inst.api.getPhase();
    inst.step(16);
    const ph = inst.api.getPhase();
    if (phBefore === "form"){ lastForm = new Map(sample.map(p => [p, { x: p.x, y: p.y, v: prevVel.get(p) }]));
      for (const p of sample){ const b = prev.get(p); prevVel.set(p, { x: (p.x - b.x) / 0.016, y: (p.y - b.y) / 0.016 }); } }
    if (phBefore === "form" && ph === "hold"){ firstHold = new Map(sample.map(p => [p, { x: p.x, y: p.y }])); break; }
    prev = new Map(sample.map(p => [p, { x: p.x, y: p.y }]));
  }
  let maxJump = 0; for (const p of sample){ const a = lastForm.get(p), b = firstHold.get(p); maxJump = Math.max(maxJump, Math.hypot(b.x - a.x, b.y - a.y)); }
  inst.step(16);
  let maxDv = 0; for (const p of sample){ const a = lastForm.get(p), b = firstHold.get(p); const vh = { x: (p.x - b.x) / 0.016, y: (p.y - b.y) / 0.016 }; if (a.v) maxDv = Math.max(maxDv, Math.hypot(vh.x - a.v.x, vh.y - a.v.y)); }
  check("CA-1 continuity: max position jump across FORM->HOLD <= 0.6px", maxJump <= 0.6, "maxJump=" + maxJump.toFixed(3));
  check("CA-1 continuity: max velocity change across FORM->HOLD <= 10 px/s", maxDv <= 10, "maxDv=" + maxDv.toFixed(2));
  /* HOLD bounded + moving */
  let maxDev = 0, sumDev = 0, n = 0;
  for (let i = 0; i < 40; i++){ inst.step(50); for (const p of sample){ const d = Math.hypot(p.x - p.tx, p.y - p.ty); maxDev = Math.max(maxDev, d); sumDev += d; n++; } }
  check("CA-1 HOLD bounded: max deviation <= jitter*sqrt2+0.02 (0.515px) and mean > 0.1px (never still)",
    maxDev <= 0.515 && sumDev / n > 0.1, "max=" + maxDev.toFixed(3) + " mean=" + (sumDev / n).toFixed(3));
}

/* ---------- OC1/M3: dissolve alpha ramp + ordering ---------- */
{
  const inst = load("");
  inst.driveUntil(() => inst.api.getPhase() === "hold", 200, 50);
  const holdB = inst.api.getParticles().filter(p => p.borrowed), holdR = inst.api.getParticles().filter(p => p.isReserve);
  check("OC1 HOLD separation: borrowed alpha set {1.0}, reserve set {0.28}, disjoint",
    holdB.every(p => p.renderAlpha === 1.0) && holdR.every(p => p.renderAlpha === 0.28), "n=" + holdB.length + "/" + holdR.length);
  inst.driveUntil(() => inst.api.getPhase() === "dissolve", 200, 50);
  const released = inst.api.getParticles().filter(p => p.released);
  const spread = Math.max(...released.map(p => p.releaseAt)) - Math.min(...released.map(p => p.releaseAt));
  check("M3 release spread: releaseAt spread > 100ms (staggered, not simultaneous)", spread > 100, "spread=" + spread.toFixed(0) + "ms n=" + released.length);
  const alphaSeq = new Map(released.map(p => [p, []]));
  const dispAtHalf = new Map(); let midSnap = null;
  let elapsed = 0;
  while (inst.api.getPhase() === "dissolve" && elapsed < 2200){
    inst.step(50); elapsed += 50;
    for (const p of released){ if (p.released || p.q > 0) alphaSeq.get(p).push(p.renderAlpha);
      if (!dispAtHalf.has(p) && p.renderAlpha < 0.5) dispAtHalf.set(p, Math.hypot(p.x - p.tx, p.y - p.ty)); }
    if (!midSnap && elapsed >= 1000) midSnap = released.map(p => ({ d: Math.hypot(p.x - p.tx, p.y - p.ty), a: p.renderAlpha }));
  }
  const mono = [...alphaSeq.values()].filter(s => s.length > 3).every(s => s.every((v, i) => i === 0 || v <= s[i - 1] + 1e-9));
  check("OC1 ramp: per-particle alpha monotonically non-increasing through dissolve", mono, "seqs=" + alphaSeq.size);
  const halfArr = [...dispAtHalf.values()];
  const fracOk = halfArr.filter(d => d >= 12).length / (halfArr.length || 1);
  check("OC1 ordering: alpha reaches 0.5 only after >=12px displacement (>=90% of released)",
    halfArr.length > released.length * 0.8 && fracOk >= 0.9, "frac=" + fracOk.toFixed(2) + " n=" + halfArr.length);
  check("M3 midpoint: at dissolve midpoint mean displacement > 20px while mean alpha > 0.58",
    midSnap && mean(midSnap.map(s => s.d)) > 20 && mean(midSnap.map(s => s.a)) > 0.58,
    midSnap ? "disp=" + mean(midSnap.map(s => s.d)).toFixed(1) + " alpha=" + mean(midSnap.map(s => s.a)).toFixed(2) : "no snap");
  inst.driveUntil(() => inst.api.getPhase() === "gap", 100, 50); inst.step(50);
  const former = released.filter(p => !p.borrowed && !p.isReserve);
  check("OC1 end state: after dissolve, formerly borrowed particles render at surplusAlpha (0.16) under drift-fade",
    former.length > 0 && former.every(p => p.renderAlpha === 0.16), "n=" + former.length);
}
/* trail / composited contrast model (modelled, not rendered) */
{
  const inst = load(""); inst.driveUntil(() => inst.api.getPhase() === "hold", 200, 50);
  const C = inst.api.CONFIG, parts = inst.api.getParticles();
  const reserve = parts.filter(p => p.isReserve).length;
  const hitP = reserve * (C.particleRadius * C.particleRadius) / (960 * 540);
  let rngState = 7; const rnd = () => { rngState = (rngState * 16807) % 2147483647; return rngState / 2147483647; };
  let bg = 0, sum = 0; for (let f = 0; f < 3000; f++){ bg *= (1 - C.trailFade); if (rnd() < hitP) bg = bg * (1 - C.reserveAlpha) + C.reserveAlpha; if (f > 2500) sum += bg; }
  const bgAvg = sum / 500;
  let word = 0; for (let f = 0; f < 300; f++){ word *= (1 - C.trailFade); word = word * (1 - C.foregroundAlpha) + C.foregroundAlpha; }
  check("OC1 composited model: word-pixel steady intensity > 0.95, background steady intensity < 0.10 at reserve hit-rate",
    word > 0.95 && bgAvg < 0.10, "word=" + word.toFixed(2) + " bg=" + bgAvg.toFixed(4) + " hitP=" + hitP.toFixed(5));
}

/* ---------- M2: ambient band ---------- */
{
  const inst = load(""); inst.driveUntil(() => inst.api.getPhase() === "hold", 200, 50);
  const C = inst.api.CONFIG, parts = inst.api.getParticles();
  const svx = parts.map(p => p.svx);
  check("M2 band: svx within [windX-driftX/2, windX+driftX/2] = [38,54], mean within 3 of windX, band minimum above 34",
    Math.min(...svx) >= 38 - 0.01 && Math.max(...svx) <= 54 + 0.01 && Math.abs(mean(svx) - C.windX) <= 3,
    "min=" + Math.min(...svx).toFixed(1) + " max=" + Math.max(...svx).toFixed(1) + " mean=" + mean(svx).toFixed(1));
  const res = parts.find(p => p.isReserve && p.x < 400 && p.y > 100 && p.y < 400);
  const x0 = res.x; for (let i = 0; i < 20; i++) inst.step(50);
  check("M2 effect: reserve particle hold-phase displacement over 1s >= 38px", Math.abs(res.x - x0) >= 38, "disp=" + (res.x - x0).toFixed(1));
}

/* ---------- R1: fit / wrap / shortfall ---------- */
{
  const d = load(""); const lay = (t => { d.api.samplePhrase(t); return d.api.getLayout(); });
  const l1 = lay("WHAT"); const pts = d.api.samplePhrase("LOOK WHAT I CAN DO!");
  check("R1 default fit: longest phrase fits at 960x540, all targets in bounds",
    l1.fits && pts.every(p => p.x >= 0 && p.x < 960 && p.y >= 0 && p.y < 540), "fontPx=" + d.api.getLayout().fontPx + " pts=" + pts.length);
  const ph = load("", 390, 693); ph.api.samplePhrase("LOOK WHAT I CAN DO!"); const pl = ph.api.getLayout();
  const ppts = ph.api.samplePhrase("LOOK WHAT I CAN DO!");
  check("R1 phone fit: fits at 390x693, targets in bounds", pl.fits && ppts.every(p => p.x >= 0 && p.x < 390 && p.y >= 0 && p.y < 693),
    "fontPx=" + pl.fontPx);
  const ml = load("?wrap=multiline", 390, 693); ml.api.samplePhrase("LOOK WHAT I CAN DO WITH MANY MORE WORDS HERE"); const mll = ml.api.getLayout();
  const mpts = ml.api.samplePhrase("LOOK WHAT I CAN DO WITH MANY MORE WORDS HERE");
  check("R1 multiline: >1 line, fits width AND height bounds, targets in bounds",
    mll.lines.length > 1 && mll.fits && mll.blockHeight <= mll.heightBound && mpts.every(p => p.x >= 0 && p.x < 390 && p.y >= 0 && p.y < 693),
    "lines=" + mll.lines.length + " fontPx=" + mll.fontPx + " blockH=" + mll.blockHeight.toFixed(0) + "<=" + mll.heightBound.toFixed(0));
  const LONG = "ANTIDISESTABLISHMENTARIANISMEXTRAORDINARILYLONGWORDWITHOUTANYSPACESATALL"; // 70 chars, stub width at floor 12px = 462 > 359 bound
  const oc = load("", 390, 693); oc.api.samplePhrase(LONG); const ocl = oc.api.getLayout();
  check("R1 over-capacity fixture (70-char word, single mode): shortfall reported at font floor",
    ocl.shortfall === true && ocl.fontPx === oc.api.CONFIG.fontFloorPx, "fontPx=" + ocl.fontPx + " width=" + ocl.maxLineWidth.toFixed(0) + " bound=" + ocl.widthBound.toFixed(0));
  const feas = load("", 390, 693); feas.api.samplePhrase("HELLO");
  check("R1 feasible fixture: short phrase fits with no shortfall", feas.api.getLayout().fits === true, "");
}

/* ---------- R2: validation / clamps / guards ---------- */
{
  const t = (name, search, fn) => { const i = load(search); let ok = false, det = ""; try { const r = fn(i); ok = r.ok; det = r.det || ""; } catch (e) { det = "threw " + e.message; } check("R2 " + name, ok, det); };
  t("reserveFraction=1 clamps to 0.9 and coverage holds", "?reserveFraction=1", i => { i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    const ps = i.api.getParticles(), tg = i.api.samplePhrase(i.api.CONFIG.phrases[0]).length;
    return { ok: i.api.CONFIG.reserveFraction === 0.9 && ps.filter(p => p.borrowed).length >= Math.min(tg, ps.filter(p => !p.isReserve).length), det: "eff=" + i.api.CONFIG.reserveFraction }; });
  t("sampleGap=0 -> 1, sampleGap=2.5 -> 2", "?sampleGap=0", i => ({ ok: i.api.CONFIG.sampleGap === 1, det: "" }));
  t("sampleGap=2.5 -> 2", "?sampleGap=2.5", i => ({ ok: i.api.CONFIG.sampleGap === 2, det: "" }));
  t("holdMs=NaN falls back to preset 2500", "?holdMs=NaN", i => ({ ok: i.api.CONFIG.holdMs === 2500, det: "eff=" + i.api.CONFIG.holdMs }));
  t("phrases empty -> defaults restored", "?phrases=", i => ({ ok: JSON.stringify(i.api.CONFIG.phrases) === JSON.stringify(["WHAT", "LOOK WHAT I CAN DO!"]), det: JSON.stringify(i.api.getNormalization()) }));
  t("phrases '|' only -> defaults restored", "?phrases=%7C", i => ({ ok: i.api.CONFIG.phrases.length === 2, det: "" }));
  t("invalid enums resolve (wrap, surplusPolicy, preset)", "?wrap=bogus&surplusPolicy=bogus&preset=bogus", i =>
    ({ ok: i.api.CONFIG.wrap === "single" && i.api.CONFIG.surplusPolicy === "drift-fade" && i.api.CONFIG.preset === "original", det: "" }));
  t("all-zero lifecycle: gap restored to 250, scheduler still progresses", "?formMs=0&holdMs=0&dissolveMs=0&gapMs=0", i => { i.drive(300, 50);
    return { ok: i.api.CONFIG.gapMs === 250 && i.api.getTrace().length > 3, det: "notes=" + JSON.stringify(i.api.getNormalization()) }; });
  t("seed=abc -> default 1337; trailFade=7 -> 1; foregroundAlpha=-1 -> 0", "?seed=abc&trailFade=7&foregroundAlpha=-1", i =>
    ({ ok: i.api.CONFIG.seed === 1337 && i.api.CONFIG.trailFade === 1 && i.api.CONFIG.foregroundAlpha === 0, det: "" }));
  t("staggerFraction=2 clamps to 0.95; ambientCap=-3 -> 0; reserveFraction=0 -> >0", "?staggerFraction=2&ambientCap=-3&reserveFraction=0", i =>
    ({ ok: i.api.CONFIG.staggerFraction === 0.95 && i.api.CONFIG.ambientCap === 0 && i.api.CONFIG.reserveFraction > 0, det: "" }));
}

/* ---------- R4: duration precedence (URL > CONFIG.durations > preset) ---------- */
{
  const a = load(""); check("R4 preset-only: effective = original entry 3000/2500/2000",
    a.api.CONFIG.formMs === 3000 && a.api.CONFIG.holdMs === 2500 && a.api.CONFIG.dissolveMs === 2000, "");
  const srcDur = SRC.replace("durations: {},", "durations: { holdMs: 4321 },");
  const b = load("", 960, 540, srcDur);
  check("R4 direct edit: CONFIG.durations.holdMs=4321 honored over preset", b.api.CONFIG.holdMs === 4321 && b.api.CONFIG.formMs === 3000, "eff hold=" + b.api.CONFIG.holdMs);
  const c = load("?holdMs=2222", 960, 540, srcDur);
  check("R4 URL over direct: ?holdMs=2222 wins over CONFIG.durations", c.api.CONFIG.holdMs === 2222, "eff hold=" + c.api.CONFIG.holdMs);
  const d = load("?formMs=1111"); d.drive(40, 50); const tr = d.api.getTrace();
  const fs0 = tr.find(e => e.event === "formStart"), hs = tr.find(e => e.event === "holdStart");
  check("R4 effect: URL formMs=1111 moves holdStart to gap+1111 (+-50ms)", hs && Math.abs(hs.t - (fs0.t + 1111)) <= 50, "delta=" + (hs ? hs.t - fs0.t : "none"));
}

/* ---------- R3: restart determinism (incl. after normalization) ---------- */
{
  const snap = i => JSON.stringify(i.api.getParticles().map(p => [Math.round(p.x * 1000), Math.round(p.y * 1000)])) + JSON.stringify(i.api.getTrace());
  const a = load(""); a.drive(400, 50); const s1 = snap(a);
  a.send("recreation:restart"); a.drive(400, 50); const s2 = snap(a);
  const b = load(""); b.drive(400, 50); const s3 = snap(b);
  check("R3 restart reproduces fresh-load state exactly (positions + trace)", s1 === s2 && s1 === s3, "len=" + s1.length);
  const c = load("?reserveFraction=1&trailFade=9"); c.drive(400, 50); const c1 = snap(c);
  c.send("recreation:restart"); c.drive(400, 50);
  check("R3 restart after config normalization is deterministic", c1 === snap(c), "");
}

/* ---------- CA-6 guards: frame-rate independence, resize, reassignment ---------- */
{
  const a = load(""), b = load("");
  a.drive(100, 20); b.drive(40, 50); // both 2000 logical ms
  const pa = a.api.getParticles().filter(p => p.isReserve), pb = b.api.getParticles().filter(p => p.isReserve);
  const tor = (d, span) => Math.min(Math.abs(d), span - Math.abs(d)); // wrap-aware (toroidal) distance
  const spanX = 960 + 2 * a.api.CONFIG.wrapMargin, spanY = 540 + 2 * a.api.CONFIG.wrapMargin;
  let maxDiff = 0; for (let i = 0; i < Math.min(pa.length, pb.length); i++) maxDiff = Math.max(maxDiff, tor(pa[i].x - pb[i].x, spanX), tor(pa[i].y - pb[i].y, spanY));
  check("CA-6 frame-rate: reserve positions at 2000ms agree dt=20 vs dt=50 within 2.5px (toroidal)", maxDiff <= 2.5, "maxDiff=" + maxDiff.toFixed(3));
}
{
  const inst = load(""); inst.driveUntil(() => inst.api.getPhase() === "hold", 200, 50);
  inst.mainCanvas.clientWidth = 390; inst.mainCanvas.clientHeight = 693; inst.resize();
  const sz = inst.api.getSize(); const lay = inst.api.getLayout();
  const borrowed = inst.api.getParticles().filter(p => p.borrowed);
  check("CA-6 resize: size rebuilds to 390x693, borrowed targets in new bounds, layout state reported",
    sz.W === 390 && sz.H === 693 && borrowed.every(p => p.tx >= 0 && p.tx < 390 && p.ty >= 0 && p.ty < 693) && !!lay,
    "targets=" + borrowed.length + " fits=" + (lay && lay.fits));
}
{
  const inst = load(""); inst.driveUntil(() => inst.api.getPhase() === "hold", 400, 50);
  inst.driveUntil(() => inst.api.getCurrent() === 1 && inst.api.getPhase() === "hold", 800, 50);
  const targets = new Set(inst.api.samplePhrase(inst.api.CONFIG.phrases[1]).map(p => p.x + "," + p.y));
  const borrowed = inst.api.getParticles().filter(p => p.borrowed);
  check("CA-6 reassignment: phrase swap reassigns all borrowed targets to the new phrase's set (no stale targets)",
    borrowed.length === targets.size && borrowed.every(p => targets.has(p.tx + "," + p.ty)), "borrowed=" + borrowed.length + " targets=" + targets.size);
}

/* ---------- swap test ---------- */
{
  const inst = load("?phrases=HELLO|WORLD&preset=brisk&colorA=%23ffd75e&colorB=%23c9962e");
  inst.driveUntil(() => inst.api.getPhase() === "hold", 300, 50);
  const tg = inst.api.samplePhrase("HELLO").length;
  const borrowed = inst.api.getParticles().filter(p => p.borrowed).length;
  const cs = inst.api.getParticles().map(p => p.c);
  check("swap: HELLO forms fully under brisk + gold palette by config alone",
    borrowed === tg && inst.api.CONFIG.formMs === 1500 && cs.every(c => /^rgb\(/.test(c)), "borrowed=" + borrowed + "/" + tg);
}

/* ---------- CONFIG consumption census: per-key effect assertions ---------- */
{
  const E = [];
  const add = (key, fn) => E.push([key, fn]);
  add("phrases", () => { const i = load("?phrases=HELLO|WORLD"); i.driveUntil(() => i.api.getPhase() === "hold", 300, 50);
    return i.api.getParticles().filter(p => p.borrowed).length === i.api.samplePhrase("HELLO").length; });
  add("fontFamily", () => { const i = load("?fontFamily=Georgia"); i.api.samplePhrase("WHAT"); return i.probeCtx.font.includes("Georgia"); });
  add("fontWeight", () => { const i = load("", 960, 540, SRC.replace("fontWeight: 900", "fontWeight: 400")); i.api.samplePhrase("WHAT"); return i.probeCtx.font.startsWith("400"); });
  add("maxFontPx", () => { const i = load("?maxFontPx=40"); i.api.samplePhrase("WHAT"); return i.api.getLayout().fontPx === 40; });
  add("fontFloorPx", () => { const i = load("?fontFloorPx=20", 390, 693); i.api.samplePhrase("ANTIDISESTABLISHMENTARIANISMEXTRAORDINARILYLONGWORDWITHOUTANYSPACESATALL"); return i.api.getLayout().fontPx === 20; });
  add("maxWidthRatio", () => { const i = load("?maxWidthRatio=0.3"); i.api.samplePhrase("WHAT"); const l = i.api.getLayout(); return l.maxLineWidth <= l.widthBound + 0.01 && l.fontPx < 150; });
  add("maxHeightRatio", () => { const i = load("?maxHeightRatio=0.1"); i.api.samplePhrase("WHAT"); const l = i.api.getLayout(); return l.blockHeight <= l.heightBound + 0.01; });
  add("wrap", () => { const i = load("?wrap=multiline", 390, 693); i.api.samplePhrase("LOOK WHAT I CAN DO WITH MANY MORE WORDS HERE"); return i.api.getLayout().lines.length > 1; });
  add("maxLines", () => { const i = load("?wrap=multiline&maxLines=1", 390, 693); i.api.samplePhrase("LOOK WHAT I CAN DO WITH MANY MORE WORDS HERE"); return i.api.getLayout().lines.length === 1; });
  add("lineHeightRatio", () => { const i = load("?wrap=multiline&lineHeightRatio=2", 390, 693); i.api.samplePhrase("LOOK WHAT I CAN DO WITH MANY MORE WORDS HERE"); const l = i.api.getLayout(); return Math.abs(l.blockHeight - l.lines.length * l.fontPx * 2) < 0.01; });
  add("sampleGap", () => { const a = load(""); const b = load("?sampleGap=8"); return b.api.samplePhrase("WHAT").length < a.api.samplePhrase("WHAT").length * 0.5; });
  add("particleRadius", () => { const i = load("?particleRadius=2.5"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50); i.step(50); return i.mainCtx.draws.some(d => d.w === 2.5); });
  add("colorA/colorB", () => { const i = load("?colorA=%23ffd75e&colorB=%23c9962e"); i.driveUntil(() => i.api.getPhase() === "hold", 300, 50);
    return i.api.getParticles().every(p => { const m = /rgb\((\d+),(\d+),(\d+)\)/.exec(p.c); return m && +m[1] >= 201 && +m[1] <= 255 && +m[3] >= 46 && +m[3] <= 94; }); });
  add("background", () => { const i = load("?background=%23111111"); i.step(50); return i.mainCtx.draws[0] && i.mainCtx.draws[0].style === "#111111"; });
  add("preset", () => { const i = load("?preset=brisk"); return i.api.CONFIG.formMs === 1500 && i.api.CONFIG.dissolveMs === 1300; });
  add("presets.original.*", () => { const i = load(""); const C = i.api.CONFIG; return C.formMs === C.presets.original.formMs && C.holdMs === C.presets.original.holdMs && C.dissolveMs === C.presets.original.dissolveMs; });
  add("presets.brisk.*", () => { const i = load("?preset=brisk"); const C = i.api.CONFIG; return C.formMs === C.presets.brisk.formMs && C.holdMs === C.presets.brisk.holdMs; });
  add("durations.*", () => { const i = load("", 960, 540, SRC.replace("durations: {},", "durations: { formMs: 1234 },")); return i.api.CONFIG.formMs === 1234; });
  add("formMs/holdMs/dissolveMs (effective, URL layer)", () => { const i = load("?formMs=1111&holdMs=1222&dissolveMs=1333"); const C = i.api.CONFIG; return C.formMs === 1111 && C.holdMs === 1222 && C.dissolveMs === 1333; });
  add("gapMs", () => { const i = load("?gapMs=999"); i.drive(30, 50); const f = i.api.getTrace().find(e => e.event === "formStart"); return f && Math.abs(f.t - 999) <= 50; });
  add("windX", () => { const i = load("?windX=100"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50); const s = i.api.getParticles().map(p => p.svx); return Math.min(...s) >= 92 && Math.max(...s) <= 108; });
  add("windY", () => { const i = load("?windY=20"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50); const s = i.api.getParticles().map(p => p.svy); return Math.min(...s) >= 15 && Math.max(...s) <= 25; });
  add("driftXRange", () => { const i = load("?driftXRange=0"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50); return i.api.getParticles().every(p => p.svx === i.api.CONFIG.windX); });
  add("driftYRange", () => { const i = load("?driftYRange=0"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50); return i.api.getParticles().every(p => p.svy === i.api.CONFIG.windY); });
  add("staggerFraction", () => { const a = load("?staggerFraction=0"); a.driveUntil(() => a.api.getPhase() === "hold", 300, 50);
    const b = load(""); b.driveUntil(() => b.api.getPhase() === "hold", 200, 50);
    return a.api.getParticles().every(p => p.delay === 0) && Math.max(...b.api.getParticles().map(p => p.delay)) > 0.3; });
  add("jitter", () => { const a = load("?jitter=0"); a.driveUntil(() => a.api.getPhase() === "hold", 200, 50);
    const p0 = a.api.getParticles().find(p => p.borrowed); return p0.x === p0.tx && p0.y === p0.ty; });
  add("jitterFreqX", () => { const i = load("?jitterFreqX=0"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    const p = i.api.getParticles().find(q => q.borrowed); const xs = new Set(), ys = new Set();
    for (let k = 0; k < 20; k++){ i.step(50); xs.add(Math.round(p.x * 1000)); ys.add(Math.round(p.y * 1000)); }
    return xs.size === 1 && ys.size > 1; });
  add("jitterFreqY", () => { const i = load("?jitterFreqY=0"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    const p = i.api.getParticles().find(q => q.borrowed); const xs = new Set(), ys = new Set();
    for (let k = 0; k < 20; k++){ i.step(50); xs.add(Math.round(p.x * 1000)); ys.add(Math.round(p.y * 1000)); }
    return ys.size === 1 && xs.size > 1; });
  add("releaseRangeX", () => { const i = load("?releaseRangeX=0"); i.driveUntil(() => i.api.getPhase() === "dissolve", 400, 50);
    return i.api.getParticles().filter(p => p.released).every(p => p.rvx === 0); });
  add("releaseRangeY", () => { const i = load("?releaseRangeY=0"); i.driveUntil(() => i.api.getPhase() === "dissolve", 400, 50);
    return i.api.getParticles().filter(p => p.released).every(p => p.rvy === 0); });
  add("releaseBiasY", () => { const a = load(""); a.driveUntil(() => a.api.getPhase() === "dissolve", 400, 50);
    const b = load("?releaseBiasY=0&releaseRangeY=40"); b.driveUntil(() => b.api.getPhase() === "dissolve", 400, 50);
    const ma = mean(a.api.getParticles().filter(p => p.released).map(p => p.rvy));
    const mb = mean(b.api.getParticles().filter(p => p.released).map(p => p.rvy));
    return ma > -9 && ma < 0 && mb > 14 && mb < 26; });
  add("releaseStaggerFraction", () => { const i = load("?releaseStaggerFraction=0"); i.driveUntil(() => i.api.getPhase() === "dissolve", 400, 50);
    return i.api.getParticles().filter(p => p.released).every(p => p.releaseAt === 0); });
  add("releaseDecayMs", () => { const thru = i => { i.driveUntil(() => i.api.getPhase() === "dissolve", 600, 50); i.driveUntil(() => i.api.getPhase() === "gap", 600, 50); i.drive(3, 50); };
    const a = load("?releaseDecayMs=100"); thru(a);
    const b = load(""); thru(b);
    return a.api.getParticles().length > 0 && a.api.getParticles().every(p => p.rvx === 0 && p.rvy === 0) && b.api.getParticles().some(p => p.rvx !== 0); });
  add("trailFade", () => { const i = load("?trailFade=0.5"); i.step(50); return i.mainCtx.draws[0] && i.mainCtx.draws[0].alpha === 0.5; });
  add("wrapMargin", () => { const i = load("?wrapMargin=50"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    const p = i.api.getParticles().find(q => q.isReserve); p.x = 960 + 60; i.step(50); return p.x === -50; });
  add("reserveFraction", () => { const i = load("?reserveFraction=0.5"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    const ps = i.api.getParticles(); return ps.filter(p => p.isReserve).length / ps.length >= 0.499; });
  add("foregroundAlpha", () => { const i = load("?foregroundAlpha=0.7"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    return i.api.getParticles().filter(p => p.borrowed).every(p => p.renderAlpha === 0.7); });
  add("reserveAlpha", () => { const i = load("?reserveAlpha=0.11"); i.driveUntil(() => i.api.getPhase() === "hold", 200, 50);
    return i.api.getParticles().filter(p => p.isReserve).every(p => p.renderAlpha === 0.11); });
  add("surplusPolicy", () => { const i = load("?phrases=LOOK WHAT I CAN DO!|WHAT&surplusPolicy=capped-ambient&ambientCap=5");
    i.driveUntil(() => i.api.getCurrent() === 1 && i.api.getPhase() === "hold", 900, 50); i.step(50);
    const particleDraws = i.mainCtx.draws.filter(d => d.w === i.api.CONFIG.particleRadius).length;
    const ps = i.api.getParticles(); const expect = ps.filter(p => p.borrowed).length + ps.filter(p => p.isReserve).length + 5;
    return particleDraws === expect; });
  add("surplusAlpha", () => { const i = load("?phrases=LOOK WHAT I CAN DO!|WHAT&surplusAlpha=0.33");
    i.driveUntil(() => i.api.getCurrent() === 1 && i.api.getPhase() === "hold", 900, 50);
    return i.api.getParticles().filter(p => !p.borrowed && !p.isReserve).every(p => p.renderAlpha === 0.33); });
  add("ambientCap", () => { const i = load("?phrases=LOOK WHAT I CAN DO!|WHAT&surplusPolicy=capped-ambient&ambientCap=0");
    i.driveUntil(() => i.api.getCurrent() === 1 && i.api.getPhase() === "hold", 900, 50); i.step(50);
    const particleDraws = i.mainCtx.draws.filter(d => d.w === i.api.CONFIG.particleRadius).length;
    const ps = i.api.getParticles(); return particleDraws === ps.filter(p => p.borrowed).length + ps.filter(p => p.isReserve).length; });
  add("seed", () => { const a = load("?seed=42"); a.drive(300, 50); const b = load("?seed=1337"); b.drive(300, 50);
    return JSON.stringify(a.api.getParticles().map(p => p.x)) !== JSON.stringify(b.api.getParticles().map(p => p.x)); });
  let censusPass = 0;
  for (const [key, fn] of E){ let ok = false, det = ""; try { ok = !!fn(); } catch (e) { det = "threw " + e.message; }
    if (ok) censusPass++; check("census " + key, ok, det); }
  check("CONFIG census complete: every key has a passing effect assertion", censusPass === E.length, censusPass + "/" + E.length + " keys");
}

/* ---------- purity ---------- */
{
  const pats = [/https?:\/\//, /<img/i, /<video/i, /\.mp4/, /\.jpe?g/, /\.png/, /\.gif/, /base64/, /segment\.mp4/, /url\(/];
  const hits = pats.filter(p => p.test(html)).map(p => String(p));
  check("purity grep: zero specimen/media/external hits in recreation.html", hits.length === 0, hits.join(" "));
}

console.log("\nTOTAL: " + PASS + " pass, " + FAIL + " fail");
if (failures.length) console.log("FAILURES: " + failures.join(" | "));
process.exit(FAIL ? 1 : 0);
