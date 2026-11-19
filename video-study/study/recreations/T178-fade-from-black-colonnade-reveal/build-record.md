# build-record — T178 Fade-from-black colonnade reveal · attempt 1 · Cycle 028 Wave 25 (queue #85)

- **Item:** T178 — Fade-from-black colonnade reveal (Packet #10, Watchtower of Turkey, Vimeo 108018156) · P10 T01 · window 0.00–3.04 s.
- **Schedule basis: `segment-anchored fade + t=0 allocation hold`** (RUN §2 T178 as amended by §2c.2/§2d — binding). Measured: black hold ≈300 ms · fade ramp 350 ms · legible by ≈650 ms · specimen cuts away ≈1280 ms. **Departure (allocation, printed):** the build holds the revealed place from 1280 ms to 3040 ms so the reveal can be studied — never presented as measured.
- **Final build SHA-256:** `1549786b7b989e52096c96e287f1b996171c90f6d10af74d58f1a636db67ff21` (recreation.html; identical in all five lens payloads).
- **PIXEL-UNVERIFIED** — no browser binary in this seat; verification is LOGIC level (node harness over the build's own phase functions) + structural comparison assertions; comparison.html is the render surface. This limitation is printed in scores.md (§2c.1d).

## Segment facts
- Source: `hidden_files/study/video-digests/2026-11-16-vimeo-watchtower/source.mp4` — ffprobe: h264 · 1920×1080 · duration 212.68 s.
- Cut: `ffmpeg -ss 0 -t 3.04`, re-encoded libx264/yuv420p + aac → `segment.mp4`. ffprobe (raw): `codec_name=h264 · width=1920 · height=1080 · r_frame_rate=25/1 · codec_name=aac · duration=3.040000`. Evidence only: appears solely as the labeled ORIGINAL side of comparison.html.

## §2 — Gate dispositions (codex-observe + codex-plan-review, fired as this builder's first acts, A9.2)
- **codex-observe → CONFIRMED-WITH-GAPS** (filed verbatim: `codex/codex-observe.md`). Disposition: APPLIED as confirmation — every gap it names was already closed firsthand in the wave record it audited: (1) the 0.00–3.04 s span is the opening *section*, the colonnade shot itself ends ≈1.28 s (RUN §1c/§1e — the Plan's census-anchor mapping and the printed allocation departure carry exactly this distinction); (2) spatial behaviour: §1f's "centre-out in feel" is a perceptual note only — the build implements the §2c.2-prescribed *uniform* black-overlay opacity function and claims no centre-out parameter; (3) family arithmetic recomputed by the return itself and agreed (85.2 / 80.0 / 88.4 / mean 83.7); T107–T109 aggregates unbound in-stream — noted, they carry no weight in this item's Plan beyond the family mean the seat bound to filed verdict-history lines.
- **codex-plan-review → REVISE** (filed verbatim: `codex/codex-plan-review.md`). Dispositions:
  1. *Swap-sensitive assertions* — **APPLIED (buildable within the Plan):** the harness runs the §2 default-config checkpoints (150/500/700/960) AND CONFIG-relative assertions under the swapped config (hold point 150 · mid-ramp at blackHoldMs+fadeMs/2=370 · completion at blackHoldMs+fadeMs=440), per §2c.6 (assertions follow CONFIG). Raw output below — all pass.
  2. *Easing binding* — **APPLIED:** the curve is resolved through `CONFIG.fadeEasing` via an easing resolver (`easingFor`); no curve is hardcoded in the phase functions.
  3. *Settle justification* — **SET ASIDE with reason:** `settleScaleFrom` 1.045 is prescribed by the binding Plan as amended (§2c.2 names the scale function and the key); removing it would deviate from the gate-approved Plan. It stands printed as SUPPLIED (specimen settle UNMEASURED) in the Plan, this record, and scores.md.
  4. *Timing-hold pricing / predicted lens budget* — **APPLIED as printing:** the 1760 ms allocated hold (57.9% of the build) is printed as a departure here, in §2, and in every timing-lens payload; the wave prices it with full knowledge. Predicted stuck lens (Plan §2c.8): TIMING.
  5. *T105 purity cure* — the §2c.1(a) grep (0 hits, raw below) + the construction route (independently code-drawn SVG geometry; no specimen imagery, no tracing step anywhere in the build) are the filed evidence; the purity lens prices the source directly.

## Construction
One self-contained recreation.html. CONFIG at top with EXACTLY the §2 keys as amended by §2c.2 (blackHoldMs 300 · fadeMs 350 · durationMs 3040 · settleScaleFrom 1.045 · fadeEasing "easeInOutCubic" · columnCount 2 · textileColor #b3402a · textileStrands 26 · interiorColor #17130f · columnColor #ddd3bd · tableColor #cfc8b4 · accentLabel "colonnade").
- Scene (SVG, code-drawn from CONFIG): dark interior rect · three white table shapes · thin trunk with branches · hanging textile = `textileStrands` strand lines in `textileColor` · `columnCount` pale columns. NO text rendered anywhere in the scene.
- Phase functions (§2c.2): overlay opacity = 1 for t<blackHoldMs · 1 − ease((t−blackHoldMs)/fadeMs) during ramp · 0 after; scene scale = settleScaleFrom → 1.000 across the same window, same easing (resolved via CONFIG.fadeEasing).
- Clock: requestAnimationFrame; `window.__rec` API (play/pause/seek/time) + `window.__config` / `stateAt` / `stateAtWith` harness surface. No external assets; no specimen media references.
- comparison.html: segment video + recreation iframe side by side, ONE shared control set (Play/Pause/Restart drives both; recreation slaved to the video's currentTime), labels "ORIGINAL — Watchtower of Turkey @ 0.00–3.04" / "RECREATION — T178 fade-from-black colonnade reveal, parameterized", @media (max-width:640px) stacking.

## Count assertion (A9.3)
CONFIG.textileStrands = **26** vs RUN §2 table 26 — **MATCH** (harness raw: `count.textileStrands default: 26`) · CONFIG.columnCount = **2** vs §2 table 2 — **MATCH** (`columns: 2`).

## Fidelity plan
Implemented: black hold → eased fade-from-black → legible colonnade place (columns/interior/tables/red textile/trunk) → hold. Deliberate deferrals: the specimen's later shots (pavement/sand/bokeh from 1.60 s) are OTHER techniques, not this one — excluded by the census, printed in §2; the post-1280 ms hold is the printed allocation above. The textile's slight sway seen at 0.50→0.96 s (§1f) is not separately animated — the strands carry a static sway offset; named here as a simplification, not silently absent.

## Own checks — RAW output (A9.4, from the final build)
Harness: node, inline script extracted from recreation.html, evaluated in a vm context (window/document stubs); swap applied via `stateAtWith` on a deep copy of CONFIG.

```
CONFIG: {"blackHoldMs":300,"fadeMs":350,"durationMs":3040,"settleScaleFrom":1.045,"fadeEasing":"easeInOutCubic","columnCount":2,"textileColor":"#b3402a","textileStrands":26,"interiorColor":"#17130f","columnColor":"#ddd3bd","tableColor":"#cfc8b4","accentLabel":"colonnade"}
checkpoint.opacity@150: 1
checkpoint.opacity@500: 0.3148688046647231
checkpoint.opacity@700: 0
checkpoint.opacity@960: 0
assert.opacity150==1: true
assert.opacity500 strictly between 0 and 1: true
assert.opacity700==0: true
assert.opacity960==0: true
scale@0: 1.045 scale@475: 1.0225 scale@650: 1
swap.CONFIG: {"blackHoldMs":300,"fadeMs":140,"durationMs":3040,"settleScaleFrom":1.045,"fadeEasing":"easeInOutCubic","columnCount":2,"textileColor":"#2a6db3","textileStrands":10,"interiorColor":"#17130f","columnColor":"#ddd3bd","tableColor":"#cfc8b4","accentLabel":"harbour"}
swap.state@370: {"t":370,"phase":"fade","overlayOpacity":0.5,"scale":1.0225,"accentLabel":"harbour","textileStrands":10,"textileColor":"#2a6db3"}
swap.opacity@150: 1
swap.opacity@mid-ramp(370): 0.5
swap.opacity@440(blackHold+fadeMs): 0
assert.swap opacity150==1: true
assert.swap mid-ramp strictly between: true
assert.swap opacity440==0: true
assert.swap strands==10: true
assert.swap label==harbour: true
assert.swap color==#2a6db3: true
count.textileStrands default: 26 columns: 2
```

1. **Swap test (EXACT §2c-amended values):** textileColor #b3402a→#2a6db3 · fadeMs 350→140 · textileStrands 26→10 · accentLabel "colonnade"→"harbour". Result: swapped fade completes at 440 ms (300+140), mid-ramp opacity exactly 0.5 at 370 ms, strand count and label follow CONFIG — the technique (black → place revealed, faster) still reads. **PASS.**
2. **Checkpoint assertions (default CONFIG):** opacity =1 @150 · 0.3149 (strictly between) @500 · =0 @700 · =0 @960 — **PASS** (raw above).
3. **Purity grep (§2c.1a exact patterns):** `grep -nEi 'segment\.mp4|source\.mp4|<video|<img|108018156|watchtower|vimeo' recreation.html` → **0 hits** (grep exit 1).
4. **Asset inventory (§2c.1b):** `grep -oE '(src|href)="[^"]+"|url\(|@import|fetch\(' recreation.html` → **0 external references** (grep exit 1). Every asset is inline code in the one file.
5. **Syntax:** `node --check` on the extracted inline script: **PASS**.
6. **Comparison check (structural, §2c.1c):** node harness over comparison.html — has video tag: true · recreation iframe: true · control buttons: 3 (ONE shared set) · both labels verbatim: true · clock slaved (`video.currentTime * 1000`): true · @media (max-width:640px) stacking: true — **PASS**.

## A6 legs (final build)
- fit-table.md — HITs **0** (text class N/A with reason: text-free technique; geometry rows measured).
- config-census.md — HITs **0** (every CONFIG key resolved to a value-flow site; scene-layout constants classified in the open under the §2 exact-keys constraint).

## Pre-wave (jev-prewave)
**FIRE-WAVE** — parameterization 0.85 · purity pre-check 0.90 · own-checks completeness 0.90 · fidelity-plan honesty 0.95; no rejection findings (return filed verbatim at artifact root: `jev-prewave.md`; payload: `codex/payload-prewave.txt`, carrying both A6 leg outputs verbatim per A10.1). Disposition: applied — the wave fired on this build.

## Wave (five-lens Codex scoring, attempt 1)
All five payloads bind recreation.html SHA-256 `1549786b7b989e52096c96e287f1b996171c90f6d10af74d58f1a636db67ff21`; every return ends with its SCORE line (no re-fires needed).

| lens | score | return |
|---|---|---|
| motion | 82 | codex/lens-motion.md |
| timing | 92 | codex/lens-timing.md |
| purity | 96 | codex/lens-purity.md |
| reusability | 76 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic: (82+92+96+76+86) = 432 · avg **86.4** · min **76** → **PASS → RECREATED** (scores.md). Predicted stuck lens TIMING did not stick (92); actual minimum reusability 76 (scene-layout constants, classified in the open in config-census.md).

## Faithfulness trace (item level)
- **Trace:** §1 Observe — RUN §1b/§1c/§1e/§1f + codex-observe CONFIRMED-WITH-GAPS consumed above · §2 Plan — RUN §2 + §2c.2 + §2d, codex-plan-review REVISE consumed above · §3 Execute — segment + recreation + comparison on disk, own checks raw above · §5 Verify — A6 legs + jev-prewave + five-lens wave (below at filing) · §9 Condense — the seat's act.
- **Choice log (≥2 alternatives):** (1) DOM/SVG scene under a clock-driven black overlay — CHOSEN; canvas particle fade rejected (no particle mechanic in the specimen); CSS-only animation rejected (clock must slave to the comparison's shared control). (2) Uniform overlay opacity per §2c.2 — CHOSEN; a centre-out spatial reveal rejected (priced only as a perceptual "feel" in §1f, never measured; the uniform function is the gate-approved form).
- **Deviations:** settleScaleFrom set-aside vs codex-plan-review cure 4 (reason recorded in §2 dispositions above — the value is Plan-prescribed). No other deviations.
- **Evidence binding:** recreation.html SHA-256 `1549786b7b989e52096c96e287f1b996171c90f6d10af74d58f1a636db67ff21` · segment.mp4 ffprobe facts above · census/measurement basis: RUN §1c/§1e/§1f (seat's record).
