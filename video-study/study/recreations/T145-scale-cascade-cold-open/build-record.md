# build-record — T145 Scale-cascade cold open · Cycle 024 Wave 21 · attempt 1
Artifact: hidden_files/study/recreations/T145-scale-cascade-cold-open/
Technique: Packet #8 P8 T01 — Scale-cascade cold open (Kurzgesagt "Why Aliens Might Already Be On Their Way To Us", GDSf2h9_39I). Window: 0.00–20.00 s (segment cut −0.5..20.5 clamped to 0..20.5 from the archived source; segment.mp4 20.500 s, h264/aac re-encoded from AV1, ffprobe-verified below). Schedule basis: segment-anchored. Cycle 20000 ms = cascade 15000 + hold 5000.
Mechanics implemented (RUN §1c census + §2b amendment, binding): ONE continuous move, no cuts, three census-bound stages. Stage A web 0–5000 — a glowing network web (seeded nodes, links between nodes under CONFIG linkDistPx; magenta links, yellow nodes per census). Stage B planet system 4000–11000 — cross-dissolve overlapping A by 1000 ms (web fades out 4000–5000 as planets fade in), planets from the 5-entry CONFIG table; a continuous scale 1.0→1.35 runs across A+B (scale is a single function of t across both stages — the dissolve is inside the move, not a phase replacement). Stage C observer 10000–20000 — planets dissolve out 10000–11000; the lone observer (code-drawn figure + telescope + rock silhouette + small bird, per the §1c census frame at 19 s) fades in 10000–14000 at {x 0.60, y 0.68}; 40 dim end stars fade in with the observer; the cascade scale settles 1.35→1.45 with decelerate (easeOutCubic) intent across 11000–15000; hold 15000–20000 at scale 1.45. Low-amplitude life: star twinkle is CONTINUOUS — per-star phase from the seeded RNG, amplitude CONFIG twinkleAmp 0.25 — applied to web nodes and end stars; the state function is a pure function of (CONFIG, t), so a frozen frame is mechanically detectable (harness twinkle probe below: all 40 end stars differ between t=12000 and t=13000). A5 §4 flow-field priced NOT-APPLICABLE in §2b (no particle stream, no borrowing) — not built.
Construction: one self-contained HTML file, canvas; CONFIG object at the top carries every subject-shaping value (A9.6): stage boundaries, dissolve length, scale keyframes, web geometry/palette, the planets table, observer position/geometry/palette, end-star count/palette, twinkle coefficients, void colour, seed. Seeded LCG (seed in CONFIG) generates node/star geometry — deterministic (harness determinism check below). window.__seek(ms) + window.__stateAt(ms) exposed for the comparison page and harness; module.exports = {CONFIG, buildField, stateAt, scaleAt, rng} for the node harness (T139 pattern). No external assets; no captions/subtitles; no text elements at all in this build.

## Parameter table (as built)
| key | value |
|---|---|
| cycleMs / cascadeMs / holdMs | 20000 / 15000 / 5000 |
| void | #0d0630 |
| seed | 14521 |
| twinkleAmp / twinkleRate | 0.25 / 0.004 |
| stageAEndMs / stageBEndMs / dissolveMs | 5000 / 11000 / 1000 |
| scaleABFrom → scaleABTo → scaleEndTo | 1.0 → 1.35 → 1.45 (decelerate settle) |
| web.nodeCount / linkDistPx | 90 / 130 |
| web.linkColor / nodeColor / nodeR | #d6336c / #ffd75e / 3–7 seeded |
| planets table | 5 entries {x,y,r,hue}: (0.62,0.44,120,#3fd95e) (0.36,0.30,26,#e0332b) (0.50,0.16,20,#39c2d7) (0.16,0.52,30,#7a4fd0) (0.42,0.86,34,#2b6ae0) |
| observer | {x 0.60, y 0.68, scale 1.0, startMs 10000, fadeEndMs 14000} + geometry/palette keys (robeW 34, robeH 52, headR 9, scopeLen 46, scopeAng −0.5, rockW 120, rockH 26, birdScale 0.5; robe #2e8b57, skin #e8b98a, scope #cfd8ff, rock #191040, bird #ffd75e) |
| endStars | count 40, colour #cfd8ff, r 1–2.2, baseAlpha 0.55 |

Count assertion (A9.3, table-driven): RUN §2b's planets table, enumerated entry by entry, carries 5 entries; built CONFIG planets = 5 (harness counts.planets = 5) — MATCH. Web nodeCount 90 and endStars 40 likewise match §2b exactly (harness counts below).

Fidelity plan — named deferrals: the specimen's planet system is a detailed illustrated scene (ringed station, ships, textured planets); the recreation's planets are flat CONFIG-table discs with a highlight — the cascade's mechanics (density → system → emptiness in one continuous scaled move, dissolve overlaps, settle, twinkle) are the fidelity claim, not illustration detail. Expected cost: the motion lens prices the gap (it is the predicted stuck lens, RUN §2 plateau pricing; family baseline T108 a1 avg 84.2). The observer is a code-drawn silhouette figure at a telescope on a rock (census form), not the specimen's rendered character.
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated from CONFIG (seeded canvas geometry); NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the first draft, A9.4, verbatim below; one cure cycle applied before the wave: census found holdMs + observer.darkColor unapplied — holdMs wired into stateAt, darkColor removed, census re-run prints unapplied [] — the harness output below is from the FINAL build):
- Swap test (logic level, node harness over buildField/stateAt with the build's own inline script), EXACT swaps from RUN §2b: nodeCount 90→50 · stage boundaries 5000/11000→3500/8000 · void #0d0630→#30160d: web still links (164 links at 50 nodes), at swapped t=4000 the web is fully dissolved and planets fully in, scale at the swapped stage-B end (8000) = 1.35 exactly, void passthrough = #30160d, observer still lands (alpha 0.5 at 12000), planets still table-driven (sliced table of 3 → planetCount 3): swap PASS (harness below).
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0). Determinism census: no Math.random, no Date.now in the file (grep exit 1); buildField twice → identical field; stateAt twice → identical state.
- Syntax: node --check on the extracted inline script: SYNTAX_OK.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek to the video's currentTime (segment cut starts at source 0 after clamping, so recreationMs = videoMs, no handle offset); labels 'ORIGINAL — Kurzgesagt GDSf2h9_39I @ 0:00–0:20' / 'RECREATION — T145 scale-cascade cold open, parameterized' as filed; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe — codec_name=h264, width=1920, height=1080, codec_name=aac, duration=20.500000 (cut 0 + 20.5 from the archived source, re-encoded libx264/aac with faststart).
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 6ad314daf40b85671d0ad60c50356e88cd00d8579eb1e2b3df6a67557f05051d

## Raw harness output (final build, verbatim)
```
SYNTAX_OK
{
 "counts": {
  "nodes": 90,
  "links": 556,
  "planets": 5,
  "endStars": 40
 },
 "determinism": {
  "fieldEqual": true,
  "stateEqual": true
 },
 "spots": {
  "0": {"t": 0, "scale": 1, "webAlpha": 1, "planetsAlpha": 0, "observerAlpha": 0, "endStarAlpha": 0},
  "2500": {"t": 2500, "scale": 1.0795, "webAlpha": 1, "planetsAlpha": 0, "observerAlpha": 0, "endStarAlpha": 0},
  "4500": {"t": 4500, "scale": 1.1432, "webAlpha": 0.5, "planetsAlpha": 0.5, "observerAlpha": 0, "endStarAlpha": 0},
  "7000": {"t": 7000, "scale": 1.2227, "webAlpha": 0, "planetsAlpha": 1, "observerAlpha": 0, "endStarAlpha": 0},
  "10500": {"t": 10500, "scale": 1.3341, "webAlpha": 0, "planetsAlpha": 0.5, "observerAlpha": 0.125, "endStarAlpha": 0.125},
  "12000": {"t": 12000, "scale": 1.4078, "webAlpha": 0, "planetsAlpha": 0, "observerAlpha": 0.5, "endStarAlpha": 0.5},
  "16000": {"t": 16000, "scale": 1.45, "webAlpha": 0, "planetsAlpha": 0, "observerAlpha": 1, "endStarAlpha": 1},
  "19999": {"t": 19999, "scale": 1.45, "webAlpha": 0, "planetsAlpha": 0, "observerAlpha": 1, "endStarAlpha": 1}
 },
 "twinkle": {
  "starsDifferingBetween12000and13000": 40,
  "of": 40,
  "sample12000": 0.7851,
  "sample13000": 1.2371
 },
 "scaleMonotonic0to15000": true,
 "swap": {
  "nodeCount": 50,
  "linkCount": 164,
  "webStillLinks": true,
  "at4000": {"webAlpha": 0, "planetsAlpha": 1},
  "scaleAtSwappedStageBEnd8000": 1.35,
  "void": "#30160d",
  "observerAt12000": 0.5,
  "planetsTableDriven": 3,
  "pass": true
 },
 "pass": true
}
```
(The census run's per-key site counts are filed in config-census.md — unapplied keys on the final build: []. The label-free fit census is filed in fit-table.md.)

## Prewave disposition (jev-prewave, filed at artifact root as jev-prewave.md)
Verdict: FIRE-WAVE (parameterization 0.90 · purity pre-check 0.90 · own-checks completeness 0.90 · fidelity-plan honesty 0.80). Applied — the wave fires on this build. The return's limit (packet section + guards command list not fed, priced NOT ASSESSED) is recorded as a feed-completeness note for the seat's Condense, not a defect of the build.
