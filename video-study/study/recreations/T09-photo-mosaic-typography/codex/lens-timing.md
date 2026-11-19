OpenAI Codex v0.164.0-alpha.9
--------
workdir: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T09-photo-mosaic-typography
model: gpt-6.1-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1db1c-6280-7e60-ae5b-74c04b6bc021
--------
user
CONSUMER + DECISION PRICED: the recreation job (Video Study lane), Cycle 006 Wave 4, §5 Verify — your score is one of five lens scores whose average and floor decide whether technique T09 consolidates in the style library as RECREATED (pass bar: average >=85 AND no lens under 70), and name the cures the next attempt must carry if it fails.
WORKING RECORD: you build from the technique facts + recreation source + build record below; your return is filed verbatim at hidden_files/study/recreations/T09-photo-mosaic-typography/codex/lens-timing.md and quoted into the artifact's scores.md; the working record you write to is the artifact's build-record.md + scores.md.
BODY-WRITE REQUIREMENT: your return must name what it writes into the body — one line beginning "BODY-WRITE:" stating the finding that should change the recreation job's instruction or this build. End your return with exactly one line: SCORE: <integer 0-100>. A return with no SCORE or no BODY-WRITE line is incomplete.

YOUR LENS: TIMING / TEMPO MATCH only. Score 0-100 how faithfully the recreation's phase timings match the original's measured window. Other lenses own motion quality, purity, reuse, readability.
Judge: the original constructs the title in ~3s inside a 0:50-0:53 window (segment cut 49.5-53.5, 4.0s). Does this build's checkpoint table (burstAt 0, riseStart 150, assemblyComplete 3000, holdEnd 4000 = durationMs) price that construction honestly — assembly completing at ~3s with a readable hold after? Is timing decided ONLY by the checkpoint table (computePhase) rather than an assumed cadence, and do per-tile flight (riseDurationMs 2100 + staggerMs 900 from riseStart) and the table agree, or can tiles still be in flight after assemblyComplete claims completion? Does the swap evidence (assemblyComplete 3900 + durationMs 5200 moving the hold boundary) prove the table drives the tempo?

TECHNIQUE FACTS (packet P1, frame-evidenced): T09 Photo-mosaic typography @ 0:50-0:53. The tile wall bursts apart; hundreds of thumbnails stream up through a dusk sky over the city and re-assemble, tile by tile, into giant letterforms. Frame t52 (0:52, i.e. ~2s into the window): 'LOOK' mid-formation — nearly formed, more tiles still rising — so formation spans most of the ~3s window and completes near its end ('LOOK WHAT I CAN DO'). Self-verify on file (build-record §5): node swap test 28/28 PASS — phases burst@100ms / assemble@1500ms / hold@3500ms under default checkpoints; under swap checkpoints (assemblyComplete 3900, durationMs 5200) phase at 3500ms = assemble and at 4500ms = hold; loop wraps at durationMs; purity grep 0 hits; node --check PASS; segment ffprobe 960x540 4.000s.

===== RECREATION SOURCE + BUILD RECORD FOLLOW =====
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>T09 — Photo-mosaic typography · recreation</title>
<style>
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;height:100%;overflow:hidden}
  body{display:flex;align-items:center;justify-content:center}
  #stage{display:block;width:100%;height:100%}
</style>
</head>
<body>
<canvas id="stage"></canvas>
<script>
"use strict";
/* ===== CONFIG — every shaping variable lives here; logic reads only CONFIG =====
   Timing is CHECKPOINT-PRICED: phase boundaries come from CONFIG.checkpoints
   (burstAt / riseStart / assemblyComplete / holdEnd), never from a cadence
   formula inside the animation logic. Letterforms are sampled at runtime
   from CONFIG-rendered text (offscreen canvas) — Amendment A1 precedent. */
const CONFIG = {
  titleText: "LOOK",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontWeight: 900,
  maxWidthRatio: 0.88,
  maxFontPx: 170,
  titleCenterYRatio: 0.34,
  sampleGap: 13,
  tileSize: 11,
  tileGap: 2,
  seed: 20261113,
  durationMs: 4000,
  checkpoints: { burstAt: 0, riseStart: 150, assemblyComplete: 3000, holdEnd: 4000 },
  riseDurationMs: 2100,
  staggerMs: 900,
  holdGlowPulse: 0.18,
  jitterPx: 0.5,
  ambientTileCount: 46,
  ambientAlpha: 0.5,
  skyTop: "#141d3d",
  skyMid: "#3d4d85",
  skyHorizon: "#c98ba0",
  skylineColor: "#0a0f22",
  skylineLitColor: "#ffd98a",
  cloudColor: "#7d89b8",
  cloudAlpha: 0.55,
  glowColor: "#7fe7ff",
  glowAlpha: 0.55,
  tilePalette: ["#e8b04b","#d96c4f","#7fb069","#5aa9e6","#c77fb8","#e6e1d3","#8ecae6","#f4a261"],
  tileInnerColor: "#10131f",
  probeColor: "#ffffff",
  skylineHeightRatio: 0.22,
  cloudCount: 6,
  cloudSpeedPxS: 3.5
};
/* URL overrides (swap test / reuse): ?title=HELLO&durationMs=5000&glow=%23ffd75e&skyTop=%23220000&tileSize=9 */
(function applyOverrides(){
  const q = new URLSearchParams(window.location.search);
  const num = (k) => { const v = parseFloat(q.get(k)); return isFinite(v) ? v : null; };
  if (q.get("title")) CONFIG.titleText = q.get("title");
  if (num("durationMs") !== null) CONFIG.durationMs = Math.max(800, num("durationMs"));
  if (num("tileSize") !== null) CONFIG.tileSize = Math.max(4, num("tileSize"));
  if (num("sampleGap") !== null) CONFIG.sampleGap = Math.max(6, num("sampleGap"));
  if (num("seed") !== null) CONFIG.seed = Math.floor(num("seed"));
  if (num("riseDurationMs") !== null) CONFIG.riseDurationMs = Math.max(200, num("riseDurationMs"));
  if (num("staggerMs") !== null) CONFIG.staggerMs = Math.max(0, num("staggerMs"));
  if (q.get("glow")) CONFIG.glowColor = q.get("glow");
  if (q.get("skyTop")) CONFIG.skyTop = q.get("skyTop");
  if (q.get("skyMid")) CONFIG.skyMid = q.get("skyMid");
  if (q.get("skyHorizon")) CONFIG.skyHorizon = q.get("skyHorizon");
  if (q.get("skyline")) CONFIG.skylineColor = q.get("skyline");
  if (num("assemblyComplete") !== null) {
    CONFIG.checkpoints.assemblyComplete = num("assemblyComplete");
  }
  CONFIG.checkpoints.holdEnd = CONFIG.durationMs;
})();

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }
function hexRgb(h){ const n = parseInt(h.slice(1),16); return [n>>16&255, n>>8&255, n&255]; }

/* Computed fit: font size derived from stage width and text length so the
   title fits and reads at 360px. Start from maxFontPx, shrink until the
   measured width fits maxWidthRatio of the stage. */
function computeFit(text, W, cfg, measure){
  let px = cfg.maxFontPx;
  while (px > 12 && measure(text, px) > W * cfg.maxWidthRatio) px -= 4;
  return px;
}

/* Pure phase from time — decided only by the checkpoint table. */
function computePhase(tMs, cfg){
  const t = ((tMs % cfg.durationMs) + cfg.durationMs) % cfg.durationMs;
  const cp = cfg.checkpoints;
  let phase = "hold";
  if (t < cp.riseStart) phase = "burst";
  else if (t < cp.assemblyComplete) phase = "assemble";
  else phase = "hold";
  const local = phase === "assemble"
    ? Math.min(1, Math.max(0, (t - cp.riseStart) / Math.max(1, cp.assemblyComplete - cp.riseStart)))
    : (phase === "hold" ? 1 : 0);
  return { t: t, phase: phase, local: local };
}

/* Runtime letterform sampling (A1): render CONFIG text offscreen, sample alpha. */
const probe = document.createElement("canvas");
function sampleTargets(text, W, H, cfg){
  const pctx = probe.getContext("2d", { willReadFrequently: true });
  probe.width = W; probe.height = H;
  pctx.clearRect(0, 0, W, H);
  const measure = (s, px) => { pctx.font = cfg.fontWeight + " " + px + "px " + cfg.fontFamily; return pctx.measureText(s).width; };
  const fontPx = computeFit(text, W, cfg, measure);
  pctx.font = cfg.fontWeight + " " + fontPx + "px " + cfg.fontFamily;
  pctx.textAlign = "center"; pctx.textBaseline = "middle"; pctx.fillStyle = cfg.probeColor;
  pctx.fillText(text, W / 2, H * cfg.titleCenterYRatio);
  const img = pctx.getImageData(0, 0, W, H).data;
  const pts = [];
  for (let y = 0; y < H; y += cfg.sampleGap)
    for (let x = 0; x < W; x += cfg.sampleGap)
      if (img[(y * W + x) * 4 + 3] > 128) pts.push({ x: x, y: y });
  return { points: pts, fontPx: fontPx };
}

/* Build deterministic tiles for a target set: each tile starts on the
   skyline (burst origin), flies to its target with a seeded stagger. */
function buildTiles(points, W, H, cfg){
  const rnd = mulberry32(cfg.seed);
  const horizonY = H * (1 - cfg.skylineHeightRatio);
  return points.map(function(p, i){
    const spread = (rnd() - 0.5) * W * 0.22;
    return {
      tx: p.x, ty: p.y,
      sx: Math.max(2, Math.min(W - 2, p.x + spread)),
      sy: horizonY + rnd() * H * cfg.skylineHeightRatio * 0.7,
      delay: rnd(),
      color: cfg.tilePalette[Math.floor(rnd() * cfg.tilePalette.length)],
      inner: rnd(),
      phase: rnd() * Math.PI * 2
    };
  });
}
function tileProgress(tile, state, cfg){
  if (state.phase === "burst") return 0;
  if (state.phase === "hold") return 1;
  const span = Math.max(1, cfg.riseDurationMs);
  const start = tile.delay * cfg.staggerMs;
  const elapsed = state.t - cfg.checkpoints.riseStart - start;
  return easeOutCubic(Math.min(1, Math.max(0, elapsed / span)));
}

const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, tiles = [], ambient = [], buildings = [], clouds = [], fontPxUsed = 0;
function buildScene(){
  W = canvas.width = canvas.clientWidth || 960;
  H = canvas.height = canvas.clientHeight || 540;
  const sampled = sampleTargets(CONFIG.titleText, W, H, CONFIG);
  fontPxUsed = sampled.fontPx;
  tiles = buildTiles(sampled.points, W, H, CONFIG);
  const rnd = mulberry32(CONFIG.seed + 77);
  ambient = [];
  for (let i = 0; i < CONFIG.ambientTileCount; i++)
    ambient.push({ x: rnd() * W, off: rnd(), speed: 0.05 + rnd() * 0.1,
      color: CONFIG.tilePalette[Math.floor(rnd() * CONFIG.tilePalette.length)], size: 0.55 + rnd() * 0.5 });
  buildings = [];
  let bx = 0;
  while (bx < W){
    const bw = 14 + rnd() * 30, bh = H * CONFIG.skylineHeightRatio * (0.45 + rnd() * 0.55);
    const wins = [];
    for (let wy = 0; wy < 6; wy++) for (let wx = 0; wx < 3; wx++) if (rnd() > 0.62) wins.push([wx, wy]);
    buildings.push({ x: bx, w: bw, h: bh, wins: wins }); bx += bw + 1 + rnd() * 3;
  }
  clouds = [];
  for (let i = 0; i < CONFIG.cloudCount; i++)
    clouds.push({ x: rnd() * W, y: H * (0.3 + rnd() * 0.3), s: 0.6 + rnd() * 1.1 });
}
function drawTile(x, y, size, color, inner, alpha){
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.fillRect(x - size / 2, y - size / 2, size, size);
  ctx.fillStyle = CONFIG.tileInnerColor;
  ctx.globalAlpha = alpha * 0.55;
  const inset = size * 0.22;
  ctx.fillRect(x - size / 2 + inset, y - size / 2 + inset, size - inset * 2, size * (0.25 + inner * 0.3));
  ctx.globalAlpha = alpha;
}
function render(tMs){
  const state = computePhase(tMs, CONFIG);
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, CONFIG.skyTop); grad.addColorStop(0.62, CONFIG.skyMid); grad.addColorStop(1, CONFIG.skyHorizon);
  ctx.globalAlpha = 1; ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  /* clouds */
  ctx.fillStyle = CONFIG.cloudColor;
  for (const c of clouds){
    const cx = ((c.x + tMs / 1000 * CONFIG.cloudSpeedPxS) % (W + 120)) - 60;
    ctx.globalAlpha = CONFIG.cloudAlpha;
    ctx.beginPath();
    ctx.ellipse(cx, c.y, 34 * c.s, 11 * c.s, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + 20 * c.s, c.y + 3, 24 * c.s, 9 * c.s, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  /* ambient rising tiles (background stream, dimmer — never at letter intensity) */
  const horizonY = H * (1 - CONFIG.skylineHeightRatio);
  for (const a of ambient){
    const ay = horizonY - ((state.t / 1000 * a.speed + a.off) % 1) * horizonY;
    drawTile(a.x, ay, CONFIG.tileSize * a.size, a.color, a.off, CONFIG.ambientAlpha);
  }
  /* letterform tiles: glow pass once assembled, then tiles */
  const assembled = tiles.filter(function(tl){ return tileProgress(tl, state, CONFIG) >= 1; }).length;
  if (state.phase === "hold" || assembled > tiles.length * 0.6){
    const pulse = 1 + Math.sin(state.t / 300) * CONFIG.holdGlowPulse;
    ctx.save();
    ctx.shadowColor = CONFIG.glowColor;
    ctx.shadowBlur = 14 * pulse;
    ctx.globalAlpha = CONFIG.glowAlpha * 0.5;
    ctx.fillStyle = CONFIG.glowColor;
    for (const tl of tiles){
      const p = tileProgress(tl, state, CONFIG);
      if (p < 1) continue;
      ctx.fillRect(tl.tx - CONFIG.tileSize / 2, tl.ty - CONFIG.tileSize / 2, CONFIG.tileSize, CONFIG.tileSize);
    }
    ctx.restore();
  }
  for (const tl of tiles){
    const p = tileProgress(tl, state, CONFIG);
    const x = tl.sx + (tl.tx - tl.sx) * p;
    let y = tl.sy + (tl.ty - tl.sy) * p;
    if (p >= 1) y += Math.sin(state.t * 0.004 + tl.phase) * CONFIG.jitterPx;
    drawTile(x, y, CONFIG.tileSize, tl.color, tl.inner, 1);
  }
  /* skyline */
  ctx.globalAlpha = 1; ctx.fillStyle = CONFIG.skylineColor;
  ctx.fillRect(0, horizonY, W, H - horizonY);
  for (const b of buildings){
    ctx.fillRect(b.x, H - b.h, b.w, b.h);
    ctx.fillStyle = CONFIG.skylineLitColor;
    for (const wn of b.wins){
      ctx.globalAlpha = 0.75;
      ctx.fillRect(b.x + 3 + wn[0] * (b.w / 3), H - b.h + 4 + wn[1] * 5, 2, 2.4);
    }
    ctx.globalAlpha = 1; ctx.fillStyle = CONFIG.skylineColor;
  }
  ctx.globalAlpha = 1;
  return state;
}

let playing = false, startStamp = 0, pausedAt = 0, rafId = null;
function nowMs(){ return (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now(); }
function tick(){ if (!playing) return; render(nowMs() - startStamp); rafId = requestAnimationFrame(tick); }
function play(){ if (playing) return; playing = true; startStamp = nowMs() - pausedAt; tick(); }
function pause(){ if (!playing) return; pausedAt = nowMs() - startStamp; playing = false; if (rafId) cancelAnimationFrame(rafId); rafId = null; }
function restart(){ pausedAt = 0; if (playing){ startStamp = nowMs(); } else { render(0); } }
window.addEventListener("message", function(e){
  if (!e.data || typeof e.data !== "object") return;
  if (e.data.cmd === "play") play();
  if (e.data.cmd === "pause") pause();
  if (e.data.cmd === "restart") restart();
});
window.addEventListener("resize", buildScene);
buildScene();
render(0);
play();

window.T09_API = { CONFIG: CONFIG, computePhase: computePhase, computeFit: computeFit,
  sampleTargets: sampleTargets, buildTiles: buildTiles, tileProgress: tileProgress,
  mulberry32: mulberry32, getFontPx: function(){ return fontPxUsed; },
  getTileCount: function(){ return tiles.length; } };
</script>
</body>
</html>
# T09 — Photo-mosaic typography · BUILD RECORD

Technique: T09 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 006 Wave 4 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T09-photo-mosaic-typography/`
Consumer: openings — a title built from the piece's own material (the opening container whose letterforms are assembled from the work's own thumbnail tiles).

## §1 Observe (viewed firsthand, this run)

- digest.md T09: "The tile wall bursts apart; hundreds of thumbnails stream up through a dusk sky over the city and re-assemble, tile by tile, into giant letterforms — t52 catches 'LOOK' mid-formation (letters are outlines built from small thumbnail tiles with cyan glow) with more tiles still rising from the rooftops to complete 'LOOK WHAT I CAN DO'." Why it works: form = content — the title is literally made of the projects the song brags about; a ~3 s construction instead of a reveal turns a credit into a set piece.
- Evidence viewed firsthand this run: `ev/t52.jpg` (0:52) — dusk gradient sky (deep navy top → blue-violet → pink horizon), pale code-like clouds mid-sky, dark city skyline along the bottom with lit windows and a dense cluster of thumbnail tiles still pooled over the rooftops at lower-right. In the upper-left sky, the letters L·O·O·K stand as outlines built from small square thumbnail tiles, each tile a tiny varied picture panel, with a cyan glow halo around the formed letters. More tiles are mid-flight below the letters. The letters read as *outlines* (hollow tile borders), not solid fills.
- Source: `source.mp4` 1916×1078, 198.41 s (per charge; segment ffprobe below). Technique window 0:50–0:53; segment cut 49.5–53.5 (±0.5 s handles, 4.0 s).
- Sub-beats: (a) burst — the tile wall/pool over the rooftops breaks apart; (b) rise — hundreds of tiles stream upward through the dusk sky, staggered, over ~3 s; (c) assembly — tiles land one by one on letterform targets, the word becoming readable progressively (t52 is mid-formation: LOOK nearly complete, later words not yet formed); (d) hold — the completed title holds readable with its cyan glow while stragglers finish rising.
- Variables (§1.3): title text · tile size · sampling density (tile count) · tile palette / per-tile variation · sky gradient (top/mid/horizon) · skyline shape + lit-window color · cloud color/alpha · glow color/strength · rise duration · per-tile stagger · burst origin (skyline) · assembly-complete time · hold duration · seed.
- Guards at Observe: jev-observe-exit / jev-plan-exit / jev-prewave / codex-observe / codex-plan-review — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT in this seat per the job's guards record; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `titleText` | string | `LOOK` | the words being formed (t52 state) |
| `fontFamily` / `fontWeight` | string/number | Arial stack / 900 | probe rendering for sampling |
| `maxWidthRatio` / `maxFontPx` | number | 0.88 / 170 | computed fit bounds |
| `titleCenterYRatio` | number | 0.34 | title vertical placement (upper sky, as t52) |
| `sampleGap` | number | 13 | sampling step px → tile count/density |
| `tileSize` / `tileGap` | number | 11 / 2 | tile panel size |
| `seed` | number | 20261113 | seeded RNG (deterministic choreography) |
| `durationMs` | number | 4000 | loop length = segment length |
| `checkpoints` | object | `{burstAt:0, riseStart:150, assemblyComplete:3000, holdEnd:4000}` | CHECKPOINT table: phases decided from this data only |
| `riseDurationMs` / `staggerMs` | number | 2100 / 900 | per-tile flight time + seeded stagger spread |
| `holdGlowPulse` / `jitterPx` | number | 0.18 / 0.5 | hold life: glow pulse + on-target jitter |
| `ambientTileCount` / `ambientAlpha` | number | 46 / 0.5 | background rising stream (dimmer than letters) |
| `skyTop` / `skyMid` / `skyHorizon` | string | `#141d3d` / `#3d4d85` / `#c98ba0` | dusk gradient |
| `skylineColor` / `skylineLitColor` | string | `#0a0f22` / `#ffd98a` | skyline + lit windows |
| `cloudColor` / `cloudAlpha` | string/number | `#7d89b8` / 0.55 | clouds |
| `glowColor` / `glowAlpha` | string/number | `#7fe7ff` / 0.55 | cyan letter glow (t52) |
| `tilePalette` | string[] | 8 warm/varied colors | per-tile thumbnail-panel colors (seeded pick) |
| `tileInnerColor` / `probeColor` | string | `#10131f` / `#ffffff` | tile inner detail / sampling mask |
| `skylineHeightRatio` / `cloudCount` / `cloudSpeedPxS` | number | 0.22 / 6 / 3.5 | scene dressing |

URL overrides (swap test + reuse): `?title=…` · `?durationMs=…&assemblyComplete=…` · `?glow=…&skyTop=…&skyMid=…&skyHorizon=…&skyline=…` · `?tileSize=…&sampleGap=…&seed=…&riseDurationMs=…&staggerMs=…`. Config remains the single source; logic reads only CONFIG.

**Computed fit (phone legibility, declared):** the probe font size starts at `maxFontPx` and shrinks in 4 px steps until the measured title width fits `maxWidthRatio` (0.88) of the stage width — font size is *derived from stage width and text length*, never fixed. At 360 px stage with the specimen title "LOOK" the harness-measured fit resolves to 126 px (vs 170 px at 960 px), and the sampled letter height scales with it, so the formed title spans ~88% of phone width by construction.

### Construction choice

**Canvas tiles + runtime text sampling (chosen, Amendment A1 precedent):** an offscreen canvas renders `CONFIG.titleText` in the fitted font; alpha sampling on a `sampleGap` grid yields letterform targets. One canvas tile per target: a code-generated colored mini-panel (seeded palette pick + inner detail bar suggesting a thumbnail — never an image) that starts pooled on the code-drawn skyline, flies to its target with easeOutCubic over `riseDurationMs` plus a seeded stagger, then holds with sub-pixel jitter and a cyan glow pass (`shadowBlur` in `glowColor`) once assembled. Phases come only from the `checkpoints` table via a pure `computePhase(t, CONFIG)`. Ambient tiles stream upward at `ambientAlpha` 0.5 — background intensity, never letter intensity (Owner Cure 1 separation). Sky = CONFIG gradient; skyline + lit windows + clouds all code-drawn from seeded RNG. Seeded RNG (mulberry32) makes the whole choreography deterministic. Loop = `durationMs`.

Rejected alternatives:
- DOM tiles (one div per target) — REJECTED: hundreds of tiles with per-frame transforms + glow is canvas's home ground; DOM would also make the glow pass and skyline layering heavier for no inspectability gain the swap test needs (the test asserts target sets + phases, which the API exposes).
- Traced letter paths / hand-placed tile coordinates for "LOOK" — REJECTED: refusal-adjacent tracing and fails the swap test by construction; A1 names runtime sampling of config-rendered text as the lawful construction.
- Solid-fill sampling (fill the whole glyph) — REJECTED as default density choice, noted honestly: t52's letters are tile *outlines*. The build samples the full glyph raster at gap 13, which reads as a dense tile mosaic; at the specimen's coarser tile scale the outline character dominates. Priced as a known fidelity gap for the wave (motion/readability lenses) rather than hidden.
- Pre-rendered sprite sheet of thumbnail images — REJECTED: specimen-media risk and purity; tiles must be code-generated panels.
- CSS keyframe rise — REJECTED: per-tile stagger + target geometry is data, not keyframes; a cadence/keyframe model cannot express checkpoint-priced assembly.

### Execute checklist
- [x] Segment cut 49.5–53.5 → `segment.mp4` (scale 960 wide, libx264, yuv420p, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, runtime-sampled letterforms, seeded tiles rising from code-drawn skyline through dusk gradient, checkpoint phases, loops, URL overrides, postMessage play/pause/restart, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly per charge, shared play/pause/restart/swap controls ≥48 px, flex-wrap phone stacking.

### Verify checklist
- [x] Swap test (node harness, stubbed canvas/DOM): title swap changes target count + geometry; timing + palette swaps asserted; phase/tileProgress/config-census assertions.
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits; asset inventory filed.
- [x] Config census: shaping literals outside CONFIG counted (hex scan + review).
- [x] `node --check` on the extracted inline script.
- [x] Comparison check: labels verbatim, controls wired, swap values recorded.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Phone legibility of the formed title (primary):** a fixed font size would overflow or shrink unreadably at 360 px — cured BY CONSTRUCTION: computed fit derives font size from stage width × text length (harness-verified: 126 px at 360 px stage, title spans the 0.88 width ratio). Residual risk: very long override titles shrink toward the 12 px floor and would read poorly — accepted as an override-only edge, defaults are safe.
- **Tile-target sampling density:** too coarse a gap → letters dissolve into dots; too fine → thousands of tiles and muddy fill. `sampleGap` 13 at `tileSize` 11 gives near-continuous mosaic at specimen-like scale (211 targets for LOOK at 960×540 in the harness raster). The outline-vs-fill divergence from t52 is the priced residual (see rejected alternatives).
- **Glow washing the tiles:** the glow pass draws only for tiles at progress 1 and at 0.5 × `glowAlpha` under the tiles themselves, so tile colors stay the foreground read.
- **Ambient competition:** ambient stream capped at alpha 0.5 and smaller tiles, so background never reaches letter intensity (Owner Cure 1).
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 49.5 -i source.mp4 -t 4 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 4.000 s, 1,228,888 bytes. Window 49.5–53.5 covers the 0:50–0:53 technique window with ±0.5 s handles.
- `recreation.html` (11,763 bytes): CONFIG at top (all keys above); runtime sampling; seeded tile build; checkpoint phases; canvas render (gradient sky, clouds, ambient stream, glow pass, tiles, skyline); rAF clock; postMessage play/pause/restart; `window.T09_API` inspection hook.
- `comparison.html` (4,228 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 0:50–0:53" / "RECREATION — T09 Photo-mosaic typography, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.
- Execute fix (same round): config census found the probe mask color `#ffffff` as a hex literal outside CONFIG — moved into CONFIG as `probeColor` and the sampler now reads `cfg.probeColor`. Re-census: 0 hex literals outside CONFIG; swap test re-run 28/28.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 28/28** (node harness, stubbed canvas/DOM with a deterministic per-character raster stub for the probe; real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: title `LOOK`; checkpoints assemblyComplete 3000 / holdEnd 4000 = durationMs; sampling LOOK → 211 targets (>100); tile count = target count; phases burst@100 ms / assemble@1500 ms / hold@3500 ms; loop wraps at 4000 ms to burst; tileProgress 0 in burst, 1 in hold; sampling + tile build deterministic (same seed → identical tiles; seed 99 → different origins).
  Title swap (the core proof): `sampleTargets("DO")` → 118 targets, `sampleTargets("HELLO")` → 250 targets, centroid geometry differs from LOOK — a different title produces a different target set in count and geometry.
  Full URL swap (`?title=DO&durationMs=5200&assemblyComplete=3900&glow=%23ffd75e&skyTop=%23301a4d`): title/duration/checkpoint all follow (holdEnd follows duration to 5200); palette follows (glow `#ffd75e`, skyTop `#301a4d`); built tile count 118 ≠ 211; phase at 3500 ms = assemble under the new checkpoint where the default build already holds, and hold at 4500 ms — timing is checkpoint-priced, not cadence.
  Phone fit asserted: computed fit at 360 px stage = 126 px font, measured width within the 0.88 ratio, smaller than the 960 px fit (170 px).
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — tiles are code-drawn colored panels (seeded palette + inner detail bar), sky/skyline/clouds are code-drawn, letterforms are runtime-sampled from CONFIG text; every asset is code written by this build. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
  Config census: hex literals outside the CONFIG block → **0** after the `probeColor` fix; remaining non-CONFIG numbers are structural (canvas math constants, easing) — 0 non-trivial shaping literals.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values (`?title=DO&durationMs=5200&assemblyComplete=3900&glow=%23ffd75e&skyTop=%23301a4d`); recreation loop (4 s) matches the segment length (4.000 s); phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Code Mode is unavailable because failed to spawn code-mode host /opt/hatch-image/bin/codex-code-mode-host: host executable was not found. Code mode will fail closed; enable `features.code_mode_host` and install `codex-code-mode-host`.
codex
The default broadly matches the measured window: assembly occupies roughly 3 seconds, followed by a 1-second hold. However, the checkpoint table controls phase labels more faithfully than it controls tile timing.

- **Default mismatch:** latest natural arrival approaches `150 + 900 + 2100 = 3150 ms`, exceeding `assemblyComplete: 3000`. Tiles with `delay > 0.8333` remain mathematically in flight immediately before the boundary; entering hold forces their progress to 1. Cubic easing makes the remaining displacement small, but completion is imposed rather than coordinated.
- **Swap proof is partial:** moving assemblyComplete to 3900 correctly changes the reported phase at 3500. Tile flights still finish by approximately 3150, leaving about 750 ms of completed lettering inside the declared assembly phase. This proves the table moves the hold label, not that it stretches construction tempo.
- **Table authority is incomplete:** `computePhase` reads riseStart and assemblyComplete, but ignores burstAt and holdEnd; wrapping uses durationMs.
- **Original comparison:** prolonged formation and a readable hold are supported structurally. Matching the nearly formed state at approximately 2 seconds remains unverified by the cited phase assertions.

Required cure: derive tile delays and flight durations from the checkpoint assembly interval, preserving their relative proportions so the latest arrival coincides with assemblyComplete. Test actual tile progress immediately before and at completion under both configurations, plus the approximately 2-second formation state; phase-label assertions alone cannot verify tempo.

BODY-WRITE: Require checkpoint-derived tile flight timing and progress-boundary tests; the current swap validates phase labels while leaving construction tempo independently timed.
SCORE: 78
tokens used
18,448
The default broadly matches the measured window: assembly occupies roughly 3 seconds, followed by a 1-second hold. However, the checkpoint table controls phase labels more faithfully than it controls tile timing.

- **Default mismatch:** latest natural arrival approaches `150 + 900 + 2100 = 3150 ms`, exceeding `assemblyComplete: 3000`. Tiles with `delay > 0.8333` remain mathematically in flight immediately before the boundary; entering hold forces their progress to 1. Cubic easing makes the remaining displacement small, but completion is imposed rather than coordinated.
- **Swap proof is partial:** moving assemblyComplete to 3900 correctly changes the reported phase at 3500. Tile flights still finish by approximately 3150, leaving about 750 ms of completed lettering inside the declared assembly phase. This proves the table moves the hold label, not that it stretches construction tempo.
- **Table authority is incomplete:** `computePhase` reads riseStart and assemblyComplete, but ignores burstAt and holdEnd; wrapping uses durationMs.
- **Original comparison:** prolonged formation and a readable hold are supported structurally. Matching the nearly formed state at approximately 2 seconds remains unverified by the cited phase assertions.

Required cure: derive tile delays and flight durations from the checkpoint assembly interval, preserving their relative proportions so the latest arrival coincides with assemblyComplete. Test actual tile progress immediately before and at completion under both configurations, plus the approximately 2-second formation state; phase-label assertions alone cannot verify tempo.

BODY-WRITE: Require checkpoint-derived tile flight timing and progress-boundary tests; the current swap validates phase labels while leaving construction tempo independently timed.
SCORE: 78
