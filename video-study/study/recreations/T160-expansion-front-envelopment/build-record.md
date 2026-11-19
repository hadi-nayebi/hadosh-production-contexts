# build-record — T160 Expansion-front envelopment · Cycle 025 Wave 22 · attempt 1
Artifact: hidden_files/study/recreations/T160-expansion-front-envelopment/
Technique: Packet #8 P8 T16 — Expansion-front envelopment. Window: 446.00–456.00 s (segment cut 445.5–456.5 with ±0.5 s handles; segment.mp4 11.000 s, h264/aac 1920×1080 re-encoded from the AV1 source, ffprobe-verified). Schedule basis: segment-anchored (seat census: 447/449 no territory · 452 yellow front entering right · 455 both fronts ~70% closed).
Mechanics implemented: a still starfield plate (200 seeded stars, reserveIntensity 0.5, twinkle in place — no pan, A9.1) on void #1a0b38; the lone marked planet at centre (magenta disc r26, green dashed ring r44 rotating slowly over 24000 ms, purple pin glyph h56 above it); two territory fronts growing continuously across the field — purple from the left (startMs 2500, growMs 6000) and yellow from the right (startMs 3500, growMs 5500). Each front is a blobby polygon whose FRONTIER advances per point from its origin edge: every frontier point's coordinate = origin + (endPoint − origin) × growthProgress, where endPoint = halt centre ± seeded wobble (mean-normalized so the measured mean frontier is exact) — radial per-point growth, NOT a scale transform and NOT a sliding shape (the named motion defect, RUN §2). Fronts halt at trappedGapPx 110: left mean frontier x = 305, right = 415 at the end state (MEASURED in the harness state function below, never asserted); growth complete 9000 ms, hold 9000–10000.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (stage, palette, stars, planet, pin, fronts table, trappedGapPx); canvas construction below (starfield, front polygons computed FROM CONFIG, planet + ring + pin); ONE JS clock (requestAnimationFrame against elapsed time); window.__seek(ms) + window.__config + window.__state(ms) exposed for the comparison page and harness; module.exports carries the same state function (T154 pattern). No external assets; no captions/subtitles; no text elements at all in the recreation.
Count assertion (A9.3): RUN §2b/§2c T160 table carries 2 fronts. Built CONFIG: 2 fronts (harness counts below). ASSERTION: source-count 2 vs built-count 2 — MATCH.
Catalogue-fidelity note (RUN §1b): ev/445-expansion-front-before.jpg is MISLABELLED — it shows a timeline/birth chart (the T08-family chart), NOT this technique's before state. The build binds to the §1c seat census (447 s: the lone marked planet in an empty starfield, no territory), never to that frame. The packet's motion clip clips/446-expansion-front-growth.mp4 is evidence for this record only, never an asset in the build.
Fidelity plan — deferred/named: none of the mechanic is deferred: still plate, marked planet + pin, two-sided continuous frontier growth, trapped-gap halt and hold are all built. The specimen's hand-drawn territory texture is represented as parameterized seeded-wobble frontier polygons (points 26, wobbleAmp 14 per front in CONFIG). Expected cost: the motion lens prices the frontier-growth form (it is the predicted stuck lens, RUN §2 plateau pricing; family baseline T154 a1 PASS 86.0).
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: canvas starfield/fronts/planet/ring/pin computed in JS from CONFIG; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the final build, A9.4, verbatim below):
- Swap test (logic level, node harness over stateAt/frontState with the build's own inline script): EXACT per RUN §2b/§2c — fronts replaced by a single front {side top, colour #57d977, startMs 2000, growMs 6000, points 26, wobbleAmp 14, seed 11} · planet x 360→300: no exception, swapped frontier side set = ["top"], planet x = 300 in effect at probe times (1000/5000/9000 ms), swapped front progress 0.5 at 5000 ms with frontierY advancing 73.5 → 147 at completion: swapPass true.
- Frontier measurement: left frontier x differs between 6000 ms (177.92) and 9000 ms (305); right frontier x differs (581.36 → 415); end-state gap MEASURED = right 415 − left 305 = 110 = trappedGapPx; per-point frontier points differ across the frontier (point 0 end x 305.4 vs point 13 end x 309.84 — the wobble shape grows with progress, not a rigid slide): frontierAdvances true, endGapMeasured110 true.
- Census states vs schedule: at 0/2000 ms both progresses 0 (no territory, the 447/449 census state); at 9000 ms both progresses 1, holding true through 9500 ms.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK). Determinism census: no Math.random, no Date.now in the file; all randomness is the seeded mulberry32 RNG from CONFIG seeds; schedule is a pure function of CONFIG.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handle mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt aliens essay @ 7:26–7:36' / 'RECREATION — T160 Expansion-front envelopment, parameterized' as charged; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe duration 11.000 s (cut 445.5 + 11.0 from the archived source), h264/aac.
A6 legs (pre-wave, final build): fit-table.md HITs 0 (no text elements — empty row set, filed) · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 94c3e4672c174d8347616dd08cf9b66dee527a7873e3e7dcba29a88c3cb8b791

## Raw harness output (final build, verbatim)
```
{
 "counts": {
  "fronts": 2,
  "stars": 200
 },
 "assertCounts": true,
 "states": {
  "at0": {
   "frontierSides": [
    "left",
    "right"
   ],
   "progresses": [
    0,
    0
   ],
   "gapPx": 720
  },
  "at2000": {
   "progresses": [
    0,
    0
   ]
  },
  "at6000": {
   "leftFrontierX": 177.92,
   "rightFrontierX": 581.36,
   "gapPx": 403.45
  },
  "at9000": {
   "leftFrontierX": 305,
   "rightFrontierX": 415,
   "gapPx": 110,
   "progresses": [
    1,
    1
   ],
   "holding": true
  },
  "at9500": {
   "gapPx": 110,
   "holding": true
  }
 },
 "frontierAdvances": true,
 "endGapMeasured110": true,
 "planet": {
  "x": 360,
  "y": 202
 },
 "perPoint": {
  "midFirst": 178.15,
  "endFirst": 305.4,
  "midMid": 180.74,
  "endMid": 309.84,
  "pointsDiffer": true
 },
 "swap": {
  "sides": [
   "top"
  ],
  "planetX": 300,
  "progressAt5000": 0.5,
  "frontierYAt5000": 73.5,
  "frontierYAt9000": 147,
  "colour": "#57d977"
 },
 "swapPass": true,
 "fitRows": [],
 "fitHits": 0,
 "textElements": 0,
 "starCount": 200
}
```
(The fit leg's empty row set is tabulated in fit-table.md; the census key→site resolution is filed in config-census.md — zero-site keys: [].)
