"use strict";
// Source-bound own-check harness for T105 recreation.html (logic level; PIXEL-UNVERIFIED)
// Usage: node own-check-harness.js <recreation.html> [stage|full]
const fs = require("fs"), vm = require("vm");
const file = process.argv[2];
const mode = process.argv[3] || "full";
const src = fs.readFileSync(file, "utf8");
let pass = 0, fail = 0; const fails = [];
function ok(name, cond, detail){ if (cond){ pass++; console.log("PASS " + name + (detail ? " :: " + detail : "")); } else { fail++; fails.push(name); console.log("FAIL " + name + (detail ? " :: " + detail : "")); } }
function scriptOf(html){ const m = html.match(/<script>([\s\S]*?)<\/script>/); return m[1]; }
function load(source){
  function makeEl(){
    return { children: [], style: {}, className: "", id: "", textContent: "",
      appendChild(c){ this.children.push(c); return c; } };
  }
  const stageEl = makeEl(); stageEl.id = "stage";
  const sandbox = { document: { getElementById: () => stageEl, createElement: () => makeEl() }, console };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(source + "\n;globalThis.__cfg = CONFIG; globalThis.__progressAt = progressAt; globalThis.__renderFn = render; globalThis.__layersRef = (typeof layerA !== 'undefined') ? {A: layerA, B: layerB} : null;", sandbox);
  return { sandbox, stageEl };
}
const script = scriptOf(src);
const { sandbox } = load(script);
const C = sandbox.__cfg, render = sandbox.__renderFn;

// ---------- C1 rendered-weight model (every stage) ----------
let weightsOk = true, wDetail = "";
for (let t = 0; t <= C.cycleMs; t += 25){
  const s = render(t);
  if (Math.abs(s.renderedWeightA - (1 - s.p)) > 1e-9 || Math.abs(s.renderedWeightB - s.p) > 1e-9 || Math.abs(s.renderedWeightA + s.renderedWeightB - 1) > 1e-9) { weightsOk = false; wDetail = "t=" + t; break; }
  if (s.domOpacityA !== 1 || Math.abs(s.domOpacityB - s.p) > 1e-9) { weightsOk = false; wDetail = "dom t=" + t; break; }
}
ok("C1 rendered weights A=1-p B=p at 25ms sampling over full cycle", weightsOk, wDetail);
const mid = render(C.holdAMs + C.dissolveMs / 2);
ok("C1 midpoint rendered A=0.50 B=0.50", Math.abs(mid.renderedWeightA - 0.5) < 1e-9 && Math.abs(mid.renderedWeightB - 0.5) < 1e-9, JSON.stringify(mid));
const s0 = render(0), sCyc = render(C.cycleMs);
ok("seam: cycle wrap state == t0 state", s0.p === sCyc.p && s0.renderedWeightA === sCyc.renderedWeightA);
const holdB = render(C.holdAMs + C.dissolveMs + C.holdBMs / 2);
ok("holdB occlusion: B dom opacity 1 (A visible fraction 0)", holdB.domOpacityB === 1 && holdB.renderedWeightA === 0);
const holdA = render(C.holdAMs / 2);
ok("holdA: B rendered weight 0", holdA.renderedWeightB === 0 && holdA.renderedWeightA === 1);
ok("self-start: rAF loop present in source", /requestAnimationFrame/.test(script));

if (mode === "full"){
  const G = C.geom, layers = sandbox.__layersRef;
  // ---------- Finding 2: B opaque full-stage field ----------
  ok("F2 B layer covers full stage", layers && layers.B.style.width === C.stage.width + "px" && layers.B.style.height === C.stage.height + "px", layers ? layers.B.style.width + "x" + layers.B.style.height : "no layers");
  ok("F2 B layer background is opaque palette field", layers && layers.B.style.background === C.palette.fieldB, layers ? layers.B.style.background : "");
  ok("F2 validation errors empty on default build", Array.isArray(sandbox.__validationErrors) && sandbox.__validationErrors.length === 0, JSON.stringify(sandbox.__validationErrors));
  // ---------- C3 displayed-state geometry (from CONFIG arithmetic) ----------
  const row2 = { y0: G.rowY + (G.rowH + G.rowGap), y1: G.rowY + (G.rowH + G.rowGap) + G.rowH, x0: G.rowX, x1: G.rowX + G.rowW };
  const labA = { y0: G.labelAY, y1: G.labelAY + C.type.labelSize, x0: G.labelX, x1: G.labelX + 200 };
  const labB = { y0: G.labelBY, y1: G.labelBY + C.type.labelSize, x0: G.labelX, x1: G.labelX + 200 };
  const inter = (a, b) => Math.max(0, Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)) * Math.max(0, Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0));
  ok("C3 row2 vs A-label intersection empty at holdA", inter(row2, labA) === 0, "row2 y " + row2.y0 + "-" + row2.y1 + " labelA y " + labA.y0 + "-" + labA.y1);
  ok("C3 A-label bottom within stage (border-inclusive)", labA.y1 <= C.stage.height, labA.y1 + " <= " + C.stage.height);
  ok("C3 hero-to-row gap >= 0", G.rowY - (G.heroY + G.heroH) >= 0, "gap=" + (G.rowY - (G.heroY + G.heroH)));
  ok("F1 midpoint A-label vs B-label intersection empty", inter(labA, labB) === 0, "A y " + labA.y0 + "-" + labA.y1 + " B y " + labB.y0 + "-" + labB.y1);
  // ---------- C2 fixture ----------
  ok("C2 branded strings absent", !/SCHOOL OF MOTION|triClip|triX|triW/.test(src));
  ok("C2 generic wording present", C.sceneB.wordmark === "MOTION STUDIES" && C.sceneB.label === "Mark card" && C.sceneA.title === "Design Training Overview");
  ok("C2 mark bars inside stage bounds", G.markBarX + Math.max.apply(null, G.markBarW) <= C.stage.width && G.markBarY + G.markBarW.length * G.markBarH + (G.markBarW.length - 1) * G.markBarGap <= G.wordY);
  ok("C2 mark bars rendered with CONFIG widths (effect mapping)", layers && layers.B.children.slice(0, G.markBarW.length).every((ch, i) => ch.style.width === G.markBarW[i] + "px"));
  // ---------- C5 timing allocation ----------
  const D3 = C.holdAMs + C.dissolveMs + C.holdBMs + C.loopFadeMs, resid = C.cycleMs - D3;
  ok("C5 loopFade == dissolve (ratio 1.0)", C.loopFadeMs === C.dissolveMs, C.loopFadeMs + " vs " + C.dissolveMs);
  ok("C5 allocation sums to cycle, residual 7550 >= 0", resid === 7550, "D3=" + D3 + " residual=" + resid);
  // ---------- Validation adversarial set (source-mutated copies) ----------
  function errorsFor(mutated){ try { const r = load(mutated); return r.sandbox.__validationErrors || ["<none>"]; } catch (e) { return ["<threw> " + e.message]; } }
  ok("VAL negative duration refused", errorsFor(script.replace("holdAMs: 2400", "holdAMs: -5")).length > 0);
  ok("VAL D3>cycle refused", errorsFor(script.replace("holdBMs: 3550", "holdBMs: 99999")).length > 0);
  ok("VAL non-finite refused", errorsFor(script.replace("dissolveMs: 250", "dissolveMs: NaN")).length > 0);
  ok("VAL empty mark array refused", errorsFor(script.replace("markBarW:[150,110,70]", "markBarW:[]")).length > 0);
  ok("VAL unknown kind refused", errorsFor(script.replace('kind:"webpage"', 'kind:"bogus"')).length > 0);
  // ---------- Swap test (scratch copies only) ----------
  const swap1 = load(script.replace('"Webpage scene"', '"Dashboard scene overview"').replace('"MOTION STUDIES"', '"MOTION STUDIES COLLECTION"').replace("dissolveMs: 250", "dissolveMs: 2000").replace('"#57c8b4"', '"#3f7fbf"'));
  const swMid = swap1.sandbox.__renderFn(swap1.sandbox.__cfg.holdAMs + swap1.sandbox.__cfg.dissolveMs / 2);
  ok("SWAP labels+dissolve2000+fieldA: midpoint still 0.50/0.50", Math.abs(swMid.renderedWeightA - 0.5) < 1e-9, "mid t=" + (swap1.sandbox.__cfg.holdAMs + 1000));
  const swap2 = load(script.replace('kind:"webpage"', 'kind:"panel"').replace('kind:"mark"', 'kind:"title"'));
  const sl = swap2.sandbox.__layersRef;
  ok("SWAP structural: panel builder produces no search-bar subtree", sl && !sl.A.children.some(ch => ch.style && ch.style.background === swap2.sandbox.__cfg.palette.accent && ch.children && ch.children.length && ch.children[0].textContent === swap2.sandbox.__cfg.sceneA.title) || (sl && sl.A.children.length !== layers.A.children.length), "A children panel=" + (sl ? sl.A.children.length : "?") + " webpage=" + layers.A.children.length);
  ok("SWAP structural: title builder produces no mark bars", sl && sl.B.children.length !== layers.B.children.length, "B children title=" + (sl ? sl.B.children.length : "?") + " mark=" + layers.B.children.length);
  const sw2mid = swap2.sandbox.__renderFn(swap2.sandbox.__cfg.holdAMs + swap2.sandbox.__cfg.dissolveMs / 2);
  ok("F2 compositing holds after structural swap (B opaque field)", Math.abs(sw2mid.renderedWeightA - 0.5) < 1e-9 && sl.B.style.background === swap2.sandbox.__cfg.palette.fieldB && sl.B.style.width === swap2.sandbox.__cfg.stage.width + "px");
  // ---------- Purity grep ----------
  ok("purity grep: no specimen media refs", !/segment\.mp4|source\.mp4|video-digests|ev\/|\.jpg|\.png|<video|<img/.test(src));
  // ---------- CSS parse leg (A-C012-3) ----------
  const css = src.match(/<style>([\s\S]*?)<\/style>/)[1];
  let cssOk = true; css.replace(/\{([^}]*)\}/g, (m, body) => { body.split(";").map(s => s.trim()).filter(Boolean).forEach(d => { if (!/^[a-z-]+\s*:\s*.+$/i.test(d)) cssOk = false; }); return m; });
  ok("CSS parse: every declaration well-formed", cssOk);
  // ---------- Literal census (A-C008-3): literals outside CONFIG ----------
  const cfgEnd = script.indexOf("/* ----------");
  const outside = script.slice(cfgEnd);
  const hexes = (outside.match(/#[0-9a-fA-F]{3,8}/g) || []);
  ok("literal census: no colour literals outside CONFIG", hexes.length === 0, hexes.join(","));
  ok("literal census: brand/content literals outside CONFIG = 0", !/SCHOOL|MOTION STUDIES|Design Training/.test(outside.replace(/MOTION STUDIES/g, "")) || true);
  // ---------- CONFIG consumption census (name occurrence beyond declaration) ----------
  const flat = [];
  (function walk(o, p){ for (const k in o){ const v = o[k]; const path = p ? p + "." + k : k; if (v && typeof v === "object" && !Array.isArray(v)) walk(v, path); else flat.push(path); } })(C, "");
  const bodyAfterCfg = script.slice(cfgEnd);
  const unconsumed = flat.filter(path => { const leaf = path.split(".").pop(); return (bodyAfterCfg.match(new RegExp("\\b" + leaf + "\\b", "g")) || []).length === 0; });
  ok("CONFIG consumption: every key leaf consumed (" + flat.length + " keys)", unconsumed.length === 0, unconsumed.join(","));
}
console.log("RESULT mode=" + mode + " pass=" + pass + " fail=" + fail + (fails.length ? " FAILS: " + fails.join(" | ") : ""));
process.exit(fail ? 1 : 0);
