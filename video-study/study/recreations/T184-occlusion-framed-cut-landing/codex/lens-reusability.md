OpenAI Codex v0.169.0
--------
workdir: /home/hatch
model: gpt-6.1-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1e95b-1b93-7413-9fc4-2d9d803634e2
--------
user
FED REVIEW — judge ONLY the text supplied in this single stream. Do NOT use tools, do NOT attempt to read any file from disk; everything you need is in this stream. If a check needs material not in this stream, name it as a gap instead of fetching it.

STANDING HEADER
1. Consumer: recreation job's §5 Verify (five-lens Codex scoring wave) for T184 — Occlusion-framed cut landing, attempt 1, Cycle 028 Wave 25. Decision priced: whether this attempt is RECREATED-tier (bar: five-lens average ≥85 AND no lens <70), and exactly what a next attempt must cure.
2. Working record: the artifact directory hidden_files/study/recreations/T184-occlusion-framed-cut-landing/ (its codex/ directory + scores.md) — this run builds from the payload below and its return files verbatim at codex/lens-reusability.md.
3. Body-write: your return must end with a line "SCORE: <integer 0-100>" for THIS lens only, followed by a "BODY-WRITE:" line naming what it filed; a read-only run closes with "BODY-WRITE: none (read-only run)".
Score ONLY your lens. Give priced findings (what in the source earns or costs points), then the SCORE line, then the BODY-WRITE line.
Recreation.html SHA-256 (identical in all five lens payloads): 4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8

LENS: REUSABILITY / PARAMETERIZATION. Judge only whether production could drive this machinery from CONFIG alone for a different piece: every subject-shaping value in CONFIG with a real application site, the deterministic solver re-solving placement for a swapped coverage target, the reveal start as a formula (never a literal), the retired coverageAt1900 key absent, and the swap evidence (cutMs 1500→1900, landingCoverage 0.62→0.45, palette + label swaps) recorded in the build record.

NEUTRAL TECHNIQUE FACTS (catalogue + measured record; no scores):
- Before: panning minaret townscape (bright rooftops/sky, YAVG 107–137 measured); cut at source 102.40 s measured (signalstats step DOWN to a dark band 54–65 sustained ≥0.5 s).
- Landing: dark interior, a seated guitarist (tan guitar, centre-left) seen BETWEEN passing foreground silhouettes; the frame's majority is near-black foreground; the foreground masses shift slightly across 102.50→102.80 (alive, not a static matte); the guitarist stays only partly legible.
- NO reveal is observed in the specimen — the landing shot ends between 102.80 and 103.10 s; the build's clearing after the 1900 ms checkpoint is a PRINTED ALLOCATION (the build holds the landing scene to 3500 ms so the reveal can be studied), disclosed in the Plan, the build record, and this payload.
- Schedule basis: segment-anchored. Segment: source 100.90–104.40 s (3.50 s); cut at 102.40 = build t=1500 ms.
- Census-anchor mapping: offset −100.90 s · 600 ms townscape pan · 1100 ms townscape (f102.00) · 1900 ms guitarist OCCLUDED, majority-dark foreground (f102.80) · 2900 ms (f103.80) specimen has CUT AWAY — DEPARTURE (allocation): build holds landing 1900→3500 with occluders completing their pass.
- Construction: one self-contained HTML file; CONFIG at top (cutMs 1500 · durationMs 3500 · panPxPerSec 26 · occluderCount 2 · occluderWidths [0.38, 0.34] · occluderColor #0a0908 · occluderDriftPx 18 · landingCoverage 0.62 · revealMs 1600 · guitarColor #c98d4e · skyColor #a8c8cc · accentLabel "guitarist"; NO coverageAt1900 key — retired by Plan §2d.2). revealStartMs = max(cutMs, 1900) as a formula. Occluder placement SOLVED deterministically (anchors 0.06W/0.97W, 0.005W steps, 100×56 grid evaluator): default 0 steps → coverage 0.6257; drift left +18 px / right −9 px linear to 1900; clearing outward easeOutQuad over [revealStartMs, revealStartMs+revealMs] from the drifted positions.

SCORE-BLIND BUILD-RECORD SUMMARY (no scores):
- Own checks (raw output filed in build-record.md): swap test EXACT — guitarColor #c98d4e→#7a4fc9 · cutMs 1500→1900 · landingCoverage 0.62→0.45 · accentLabel "guitarist"→"harbour": scene A@1899 / B@1901 under the swapped cut; solver re-solves in 44 steps to coverage 0.4582 (within ±0.07 of 0.45); revealStartMs formula yields 1900; swapped cleared fraction at duration end 1.0000 ≥ floor 0.9000 — PASS. Default checkpoints: scene A@1499 / B@1501 · coverage(cutMs+1) 0.6257 (≥0.55, within ±0.01 of 0.62) · coverage(1900) 0.6261 post-drift (≥0.51) · guitar visibility 0.5833 @1501, 0.4167 @1900, 1.0000 @3500 — ALL PASS. Purity grep (specimen patterns): 0 hits. Asset inventory: 0 external references (one in-file url(#soften) filter fragment). Syntax node --check PASS. Determinism census: 0 RNG hits; stateAt double-evaluation identical.
- A6 legs on the final build: fit-table HITs 0 (text-free priced N/A + geometry measured) · config-census HITs 0 (all-literal scan classified; coverageAt1900 ABSENT verified; every key resolved to an application site).
- jev-prewave: FIRE-WAVE (parameterization 0.90 · purity 0.95 · own-checks 0.90 · fidelity-plan 0.95) after two cured firings (determinism census recorded; feed-completeness cured). Its nonblocking qualification: the geometric evaluator tests unblurred primitives while the render blurs the occluder edges — recorded coverage is geometric, not pixel, coverage.
- PIXEL-UNVERIFIED: no browser binary in this seat; verification is LOGIC level (node harness) and the comparison page is the render surface.

=== FIT-TABLE (A6 leg, verbatim) ===
# fit-table — T184 Occlusion-framed cut landing (guard-measured-fit, A6 pre-wave leg)

Method: priced per guard-measured-fit.md on the final recreation.html (SHA-256 `4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8`).

## Subject text elements
**NONE.** This build renders NO text at all: no titles, labels, captions, counters, or in-scene words. The technique's subject is a cut landing (scene geometry + occlusion coverage), not typography — RUN §2: "no text is the subject in any item, so no text elements at all in the scenes"; §2c.1(e) prices visible-word fitting INAPPLICABLE for all four Wave-25 items (text-free by construction). `accentLabel` "guitarist" is a data-only CONFIG identifier consumed by the swap harness; it is never rendered (verified: the string occurs only in the CONFIG block and harness assertions — the scene builders never read it).

Text-free leg priced **N/A — no measurement rows are owed**, because there is no subject text element to measure. This is a priced N/A, not an omitted leg: the guard owns fit of subject text; the class is absent by construction.

## Geometry measured instead (the leg's spirit: measured, not asserted)
The fit-analogue quantities for this text-free build were MEASURED by the node harness (§2c.4 evaluator, 100×56 grid, cell covered if an occluder covers its centre, alpha≥0.5 edge rule) on the final build — raw output in build-record.md:

| quantity | measured | bound | result |
|---|---|---|---|
| coverage(cutMs+1), default | 0.6257 | ≥0.55 AND within ±0.01 of landingCoverage 0.62 | PASS |
| coverage(1900), default (post-drift) | 0.6261 | ≥0.51 | PASS |
| coverage(cutMs+1), swapped (landingCoverage 0.45) | 0.4582 | within ±0.07 of 0.45 | PASS |
| guitar visibility @ cutMs+1, default | 0.5833 | ≥0.10 (partly legible inside occlusion) | PASS |
| guitar visibility @ 1900, default | 0.4167 | ≥0.10 | PASS |
| guitar visibility @ 1900+revealMs, default | 1.0000 | ≥0.80 (subject legible) | PASS |

**HIT list: EMPTY — leg PASS (advisory); text-fit class N/A priced above.**


=== FULL recreation.html (SHA-256 4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8) ===
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>T184 — Occlusion-framed cut landing, parameterized recreation</title>
<style>
  html, body { margin:0; padding:0; background:#000; height:100%; }
  #stage { position:relative; width:100%; max-width:177.78vh; margin:0 auto; aspect-ratio:16/9; }
  #stage svg { display:block; width:100%; height:100%; }
</style>
</head>
<body>
<div id="stage"></div>
<script>
"use strict";
/* ===== CONFIG — every subject-shaping value lives here (A9.6) ===== */
const CONFIG = {
  cutMs: 1500,
  durationMs: 3500,
  panPxPerSec: 26,
  occluderCount: 2,
  occluderWidths: [0.38, 0.34],
  occluderColor: "#0a0908",
  occluderDriftPx: 18,
  landingCoverage: 0.62,
  revealMs: 1600,
  guitarColor: "#c98d4e",
  skyColor: "#a8c8cc",
  accentLabel: "guitarist",
  stage: { w: 960, h: 540 },
  occluderHeadR: 44,
  occluderHeadCy: 52,
  occluderTorsoTop: 88,
  occluderBlurPx: 5,
  town: {
    hillColor: "#7d9aa0",
    wallColor: "#d8c9a8",
    roofColor: "#9a5f43",
    minaretColor: "#e6dcc2",
    minaretCapColor: "#5d7a72",
    hills: [[0,330,340,210],[300,300,420,240],[680,320,340,220]],
    houses: [
      {x:20,y:330,w:150,h:110},{x:150,y:355,w:120,h:85},{x:255,y:320,w:170,h:120},
      {x:410,y:360,w:130,h:80},{x:530,y:335,w:160,h:105},{x:880,y:345,w:140,h:95},
      {x:1000,y:325,w:170,h:115},{x:1150,y:355,w:130,h:85}
    ],
    roofOverhang: 8,
    roofRise: 30,
    balconyOver: 9,
    balconyH: 12,
    capOver: 6,
    minaret: { x: 742, baseY: 345, w: 34, h: 235, balconyY: 185, capH: 52 }
  },
  interior: {
    bgColor: "#241a12",
    figureColor: "#4a3220",
    skinColor: "#a97c50",
    musicianCx: 432,
    headCy: 208,
    headR: 30,
    torsoTop: 238,
    torsoW: 96,
    torsoH: 130,
    legY: 392,
    legW: 150,
    legH: 34,
    guitar: { cx: 432, cy: 330, rx: 62, ry: 48, neckX: 485, neckY: 268, neckW: 74, neckH: 13, neckAngleDeg: -32 }
  }
};
/* ===== Derived schedule (formulae, never literals) ===== */
function revealStartMs(cfg) { return Math.max(cfg.cutMs, 1900); }
function clamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }
function easeOutQuad(p) { return 1 - (1 - p) * (1 - p); }

/* ===== Occluder geometry + deterministic solver (§2d.2) ===== */
/* Each occluder: head circle + full-height torso rect. A point is covered if
   it lies in either primitive (the alpha>=0.5 contour of the soft edge). */
function occluderCovers(occ, x, y) {
  if (x >= occ.x && x <= occ.x + occ.w && y >= occ.torsoTop) return true;
  const dx = x - occ.headCx, dy = y - occ.headCy;
  return (dx * dx + dy * dy) <= occ.headR * occ.headR;
}
function coverageOf(occs, cfg) {
  const W = cfg.stage.w, H = cfg.stage.h, COLS = 100, ROWS = 56;
  let covered = 0;
  for (let r = 0; r < ROWS; r++) {
    const y = (r + 0.5) * H / ROWS;
    for (let c = 0; c < COLS; c++) {
      const x = (c + 0.5) * W / COLS;
      for (let i = 0; i < occs.length; i++) {
        if (occluderCovers(occs[i], x, y)) { covered++; break; }
      }
    }
  }
  return covered / (COLS * ROWS);
}
function makeOccluder(cfg, x, w) {
  return { x: x, w: w, headCx: x + w / 2, headCy: cfg.occluderHeadCy, headR: cfg.occluderHeadR, torsoTop: cfg.occluderTorsoTop };
}
/* Solver: anchors per §2d.2; steps the right figure in 0.005W increments
   (leftward while coverage is short, rightward while it overshoots) until
   coverage = landingCoverage ±0.01. Bounded: halts with an error after
   240 steps rather than tuning by hand. Returns {occs, steps}. */
function solveOccluders(cfg) {
  const W = cfg.stage.w;
  if (cfg.occluderCount !== 1 && cfg.occluderCount !== 2) {
    throw new Error("CONFIG error: occluderCount must be 1 or 2, got " + cfg.occluderCount);
  }
  let occs;
  if (cfg.occluderCount === 2) {
    const lw = cfg.occluderWidths[0] * W, rw = cfg.occluderWidths[1] * W;
    occs = [makeOccluder(cfg, 0.06 * W, lw), makeOccluder(cfg, 0.97 * W - rw, rw)];
  } else {
    const w = (cfg.landingCoverage + 0.06) * W;
    occs = [makeOccluder(cfg, 0.06 * W, w)];
  }
  const step = 0.005 * W;
  let steps = 0, cov = coverageOf(occs, cfg);
  const mover = occs[occs.length - 1];
  while (Math.abs(cov - cfg.landingCoverage) > 0.01) {
    if (steps >= 240) throw new Error("solver: coverage target unreachable within 240 steps (last coverage " + cov + ")");
    const dir = cov < cfg.landingCoverage ? -1 : 1;
    mover.x += dir * step; mover.headCx += dir * step;
    steps++;
    cov = coverageOf(occs, cfg);
  }
  return { occs: occs, steps: steps, coverage: cov };
}

/* ===== Occluder positions at time t (drift, then clearing from the
   drifted positions — position continuity across the boundary) ===== */
function occluderOffsetsAt(t, cfg, solved) {
  const rs = revealStartMs(cfg);
  return solved.map(function (occ, i) {
    let drift = 0;
    if (t >= cfg.cutMs) {
      const span = 1900 - cfg.cutMs;
      const p = span > 0 ? clamp01((t - cfg.cutMs) / span) : 0;
      const full = (i === 0) ? cfg.occluderDriftPx : -cfg.occluderDriftPx / 2;
      drift = full * p;
    }
    let clear = 0;
    if (t > rs) {
      const q = easeOutQuad(clamp01((t - rs) / cfg.revealMs));
      const driftedX = occ.x + drift;
      if (i === 0 || solved.length === 1) {
        clear = -q * (driftedX + occ.w);
      } else {
        clear = q * (cfg.stage.w - driftedX);
      }
    }
    return drift + clear;
  });
}
function occludersAt(t, cfg, solved) {
  const offs = occluderOffsetsAt(t, cfg, solved);
  return solved.map(function (occ, i) {
    return { x: occ.x + offs[i], w: occ.w, headCx: occ.headCx + offs[i], headCy: occ.headCy, headR: occ.headR, torsoTop: occ.torsoTop };
  });
}
function coverageAt(t, cfg, solved) {
  if (t < cfg.cutMs) return 0;
  return coverageOf(occludersAt(t, cfg, solved), cfg);
}
/* Subject visibility: fraction of sample points over the guitar body's
   bounding box NOT covered by any occluder at time t. */
function guitarVisibilityAt(t, cfg, solved) {
  if (t < cfg.cutMs) return 0;
  const g = cfg.interior.guitar;
  const occs = occludersAt(t, cfg, solved);
  const NX = 24, NY = 18;
  let vis = 0, total = 0;
  for (let r = 0; r < NY; r++) {
    const y = g.cy - g.ry + (r + 0.5) * (2 * g.ry) / NY;
    for (let c = 0; c < NX; c++) {
      const x = g.cx - g.rx + (c + 0.5) * (2 * g.rx) / NX;
      total++;
      let covered = false;
      for (let i = 0; i < occs.length; i++) if (occluderCovers(occs[i], x, y)) { covered = true; break; }
      if (!covered) vis++;
    }
  }
  return vis / total;
}
function stateAt(t, cfg, solved) {
  cfg = cfg || CONFIG; solved = solved || solveOccluders(cfg).occs;
  const scene = t < cfg.cutMs ? "A" : "B";
  return {
    scene: scene,
    t: t,
    panPx: cfg.panPxPerSec * t / 1000,
    coverage: scene === "B" ? coverageAt(t, cfg, solved) : 0,
    guitarVisibility: scene === "B" ? guitarVisibilityAt(t, cfg, solved) : 0,
    revealStartMs: revealStartMs(cfg)
  };
}

/* ===== Rendering (browser only) ===== */
function buildScene() {
  const cfg = CONFIG, W = cfg.stage.w, H = cfg.stage.h;
  const solvedRec = solveOccluders(cfg);
  const solved = solvedRec.occs;
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  function el(name, attrs, parent) {
    const e = document.createElementNS(NS, name);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e); return e;
  }
  /* Scene A — townscape */
  const gA = el("g", {}, svg);
  el("rect", { x: 0, y: 0, width: W, height: H, fill: cfg.skyColor }, gA);
  const town = el("g", {}, gA);
  cfg.town.hills.forEach(function (h) { el("rect", { x: h[0], y: h[1], width: h[2], height: h[3], fill: cfg.town.hillColor }, town); });
  cfg.town.houses.forEach(function (hs) {
    el("rect", { x: hs.x, y: hs.y, width: hs.w, height: hs.h, fill: cfg.town.wallColor }, town);
    el("polygon", { points: (hs.x - cfg.town.roofOverhang) + "," + hs.y + " " + (hs.x + hs.w + cfg.town.roofOverhang) + "," + hs.y + " " + (hs.x + hs.w / 2) + "," + (hs.y - cfg.town.roofRise), fill: cfg.town.roofColor }, town);
  });
  const mn = cfg.town.minaret;
  el("rect", { x: mn.x, y: mn.baseY - mn.h, width: mn.w, height: mn.h, fill: cfg.town.minaretColor }, town);
  el("rect", { x: mn.x - cfg.town.balconyOver, y: mn.baseY - mn.h + mn.balconyY, width: mn.w + 2 * cfg.town.balconyOver, height: cfg.town.balconyH, fill: cfg.town.minaretColor }, town);
  el("polygon", { points: (mn.x - cfg.town.capOver) + "," + (mn.baseY - mn.h) + " " + (mn.x + mn.w + cfg.town.capOver) + "," + (mn.baseY - mn.h) + " " + (mn.x + mn.w / 2) + "," + (mn.baseY - mn.h - mn.capH), fill: cfg.town.minaretCapColor }, town);
  /* Scene B — interior + musician + guitar */
  const gB = el("g", { style: "display:none" }, svg);
  el("rect", { x: 0, y: 0, width: W, height: H, fill: cfg.interior.bgColor }, gB);
  const ic = cfg.interior;
  el("circle", { cx: ic.musicianCx, cy: ic.headCy, r: ic.headR, fill: ic.skinColor }, gB);
  el("rect", { x: ic.musicianCx - ic.torsoW / 2, y: ic.torsoTop, width: ic.torsoW, height: ic.torsoH, fill: ic.figureColor }, gB);
  el("rect", { x: ic.musicianCx - ic.legW / 2, y: ic.legY, width: ic.legW, height: ic.legH, fill: ic.figureColor }, gB);
  const gt = ic.guitar;
  el("rect", { x: gt.neckX, y: gt.neckY, width: gt.neckW, height: gt.neckH, fill: cfg.guitarColor, transform: "rotate(" + gt.neckAngleDeg + " " + gt.neckX + " " + gt.neckY + ")" }, gB);
  el("ellipse", { cx: gt.cx, cy: gt.cy, rx: gt.rx, ry: gt.ry, fill: cfg.guitarColor }, gB);
  /* Occluders (soft-edged dark figures) */
  const defs = el("defs", {}, svg);
  const filt = el("filter", { id: "soften", x: "-5%", y: "-5%", width: "110%", height: "110%" }, defs);
  el("feGaussianBlur", { stdDeviation: cfg.occluderBlurPx }, filt);
  const gOcc = el("g", { filter: "url(#soften)", style: "display:none" }, svg);
  const occEls = solved.map(function (occ) {
    const g = el("g", {}, gOcc);
    el("circle", { cx: occ.headCx, cy: occ.headCy, r: occ.headR, fill: cfg.occluderColor }, g);
    el("rect", { x: occ.x, y: occ.torsoTop, width: occ.w, height: H - occ.torsoTop, fill: cfg.occluderColor }, g);
    return g;
  });
  document.getElementById("stage").appendChild(svg);
  /* Clock + __rec API */
  let playing = false, baseMs = 0, startStamp = 0;
  function nowMs() { return playing ? baseMs + (performance.now() - startStamp) : baseMs; }
  function render() {
    const t = Math.min(nowMs(), cfg.durationMs);
    const isB = t >= cfg.cutMs;
    gA.setAttribute("style", isB ? "display:none" : "");
    gB.setAttribute("style", isB ? "" : "display:none");
    gOcc.setAttribute("style", isB ? "" : "display:none");
    town.setAttribute("transform", "translate(" + (-cfg.panPxPerSec * t / 1000) + " 0)");
    if (isB) {
      const offs = occluderOffsetsAt(t, cfg, solved);
      occEls.forEach(function (g, i) { g.setAttribute("transform", "translate(" + offs[i] + " 0)"); });
    }
    if (playing && t < cfg.durationMs) requestAnimationFrame(render);
  }
  window.__rec = {
    play: function () { if (!playing) { playing = true; startStamp = performance.now(); requestAnimationFrame(render); } },
    pause: function () { if (playing) { baseMs = nowMs(); playing = false; render(); } },
    seek: function (ms) { baseMs = Math.max(0, Math.min(ms, cfg.durationMs)); if (playing) startStamp = performance.now(); render(); },
    time: function () { return nowMs(); }
  };
  window.__config = CONFIG;
  window.__stateAt = function (ms) { return stateAt(ms, CONFIG, solved); };
  window.__solve = function () { return solveOccluders(CONFIG); };
  render();
}
if (typeof document !== "undefined" && document.getElementById) {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildScene);
  else buildScene();
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CONFIG: CONFIG, revealStartMs: revealStartMs, solveOccluders: solveOccluders, coverageOf: coverageOf, coverageAt: coverageAt, guitarVisibilityAt: guitarVisibilityAt, occludersAt: occludersAt, stateAt: stateAt };
}
</script>
</body>
</html>


warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 98136 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
Reusability is strong for the demonstrated swap, but subject-shaping placement remains partly outside CONFIG.

- **Earns points — broad, real parameterization.** CONFIG geometry and colors feed `buildScene()`; timing and motion feed `render()` and `occluderOffsetsAt()`. Townscape, musician, guitar, and occluder geometry can change without editing their builders.
- **Earns points — coverage is solved again.** `solveOccluders(cfg)` evaluates `cfg.landingCoverage` and moves the final occluder deterministically until error is ≤0.01. The supplied build-record summary records the requested cut, coverage, guitar-color, and label swaps, with 44 solver steps and resulting coverage 0.4582 for target 0.45. These are reported checks, not independently rerun measurements.
- **Earns points — schedule and retirement requirements pass.** `revealStartMs(cfg)` is explicitly `Math.max(cfg.cutMs, 1900)`, and `coverageAt1900` is absent from the supplied CONFIG and implementation.
- **Costs points — subject-shaping constants remain embedded.** `solveOccluders()` hardcodes placement anchors `0.06W` and `0.97W`; `occluderOffsetsAt()` hardcodes the second occluder’s drift multiplier as `−1/2`. Next attempt: expose these placement and motion choices in CONFIG and use them at those application sites. Solver resolution and iteration limits can remain algorithm constants.
- **Costs points — one supported branch bypasses a shaping control.** For `occluderCount === 1`, `solveOccluders()` ignores `occluderWidths` and derives width from `(landingCoverage + 0.06)W`. Next attempt: consume a configured width in that branch and demonstrate that placement still solves the coverage target.
- **Qualification — the label swap proves metadata only.** The fit-table explicitly says `accentLabel` is read only by harness assertions, never scene builders. This is consistent with text-free rendering, but does not demonstrate changing the depicted subject to a harbour.

Limits: supplied source and build-record summary only; raw harness output and browser behavior were not independently checked. This lens alone cannot establish the five-lens tier verdict.

SCORE: 83
BODY-WRITE: none (read-only run)
tokens used
18,328
Reusability is strong for the demonstrated swap, but subject-shaping placement remains partly outside CONFIG.

- **Earns points — broad, real parameterization.** CONFIG geometry and colors feed `buildScene()`; timing and motion feed `render()` and `occluderOffsetsAt()`. Townscape, musician, guitar, and occluder geometry can change without editing their builders.
- **Earns points — coverage is solved again.** `solveOccluders(cfg)` evaluates `cfg.landingCoverage` and moves the final occluder deterministically until error is ≤0.01. The supplied build-record summary records the requested cut, coverage, guitar-color, and label swaps, with 44 solver steps and resulting coverage 0.4582 for target 0.45. These are reported checks, not independently rerun measurements.
- **Earns points — schedule and retirement requirements pass.** `revealStartMs(cfg)` is explicitly `Math.max(cfg.cutMs, 1900)`, and `coverageAt1900` is absent from the supplied CONFIG and implementation.
- **Costs points — subject-shaping constants remain embedded.** `solveOccluders()` hardcodes placement anchors `0.06W` and `0.97W`; `occluderOffsetsAt()` hardcodes the second occluder’s drift multiplier as `−1/2`. Next attempt: expose these placement and motion choices in CONFIG and use them at those application sites. Solver resolution and iteration limits can remain algorithm constants.
- **Costs points — one supported branch bypasses a shaping control.** For `occluderCount === 1`, `solveOccluders()` ignores `occluderWidths` and derives width from `(landingCoverage + 0.06)W`. Next attempt: consume a configured width in that branch and demonstrate that placement still solves the coverage target.
- **Qualification — the label swap proves metadata only.** The fit-table explicitly says `accentLabel` is read only by harness assertions, never scene builders. This is consistent with text-free rendering, but does not demonstrate changing the depicted subject to a harbour.

Limits: supplied source and build-record summary only; raw harness output and browser behavior were not independently checked. This lens alone cannot establish the five-lens tier verdict.

SCORE: 83
BODY-WRITE: none (read-only run)
