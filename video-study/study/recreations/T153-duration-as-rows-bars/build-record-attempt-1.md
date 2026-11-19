# build-record — T153 Duration-as-rows comparison bars · Cycle 024 Wave 21 · attempt 1
Artifact: hidden_files/study/recreations/T153-duration-as-rows-bars/
Technique: Packet #8 P8 T09 — Duration-as-rows comparison bars. Window: 240.00–255.00 s (segment cut 239.5–255.5 with ±0.5 s handles; segment.mp4 16.000 s, h264/aac, ffprobe-verified below). Schedule basis: segment-anchored.
ALLOCATION NOTE (binding, RUN §2b T153): row onsets are a named ALLOCATION — the seat census binds states at 250 s (dwarf begun) and 252 s (row 1 full + row 2 begun), not a full onset schedule. The CONFIG onsets below are that allocation, stated here, in scores.md, and in the timing-lens payload.
Mechanics implemented: stellar lifespans compared as stacked horizontal bars — Sun gets ONE short bar (fraction 0.42, onset 800 ms, sweep 2200 ms); the Red Dwarf gets ONE bar in overflow form: 8 successive row segments, each fraction 1.0 of the row width, row i onset = 3400 + i×1100, sweepMs 1100, so row i+1 begins exactly as row i completes — continuous overflow. The progression is implemented FROM the row derivation in buildRows (onset = dwarf.startMs + i×dwarf.rowIntervalMs), so an independent-sweep substitution is impossible by construction: there is no per-row onset literal to edit independently. Header: header.sun "Lifespan of" 0–3000 ms; header.dwarf "Lifespan of a Red Dwarf" from header.swapMs 3000. Row geometry CONFIG row {heightPx 14, gapPx 10, labelW 92}; labels "Sun" / "Red Dwarf" (Red Dwarf label on its first row only). Void #0d0630, starfield specks dim background (CONFIG stars, opacity 0.35). Rows ACCUMULATE and stay. Cycle 15000 ms; rows complete 12200 ms; hold to 15000.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (header pair + swap, sun row, dwarf overflow derivation, row geometry, palette, starfield); DOM construction below; text is DOM from CONFIG; window.__seek + window.__state + module.exports state functions (buildRows/rowFill/headerAt/stateAt) exposed for the comparison page and harness. No external assets; no captions/subtitles (labels/header are the technique's subject text, lawful).
Row count assertion: rows built vs CONFIG (1 + 8) — harness counts built 9, expected 9 — MATCH (raw output below).
Family baseline (A2): no filed sibling (comparison-bars family, RUN §2) — no prior average to beat; predicted stuck lens: TIMING (RUN §2 plateau pricing).
Asset inventory: segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: DOM rows built in JS from CONFIG, starfield specks generated in JS from CONFIG seed/LCG · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output, A9.4, verbatim below):
- Swap test (logic level, node harness over buildRows/rowFill/stateAt with the build's own inline script): dwarf.rows 8→5 · header.dwarf → "Life of a Red Dwarf" · dwarf colour #e0332b→#2b6ae0 · row interval 1100→700 — all PASS, rows still accumulate as overflow (fills non-increasing across dwarf rows at every sampled time; raw output below). No wave fired on a failed swap — swaps passed before the wave.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0 — raw: grep -Ec printed 0).
- Syntax: node --check on the extracted inline script: SYNTAX_OK.
- Segment ffprobe (final file): duration 16.000000 · video h264 1920x1080 · audio aac (cut 239.5 + 16.00 from the archived source, re-encoded libx264/aac).
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handles mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt GDSf2h9_39I @ 4:00–4:15' / 'RECREATION — T153 duration-as-rows bars, parameterized'; phone-width: column stack, max-width 360 px, 44 px-min-height buttons.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0. (First census run found stageW/stageH unapplied + starfield LCG coefficients outside CONFIG; cured pre-wave — stage aspect-ratio setter + stars.lcgA/lcgC/lcgM — and re-run clean on the final build; the cure is recorded in config-census.md.)
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: e6726920fd4f3914d47221f06a2baa394a1791d6e313c3b139d5dbc2b7fbff4a (final build, after the prewave cure + the interim readability cure below; earlier builds: 2435221c9ea857287a43ea4e00bf55f9eedd69107ba27e7bbdc40c3cfbd6c383 · 5c47f749ca65482fe217cb2a5a762523b4618bcb4525b19d07ac9993779c168c)
INTERIM CURE (wave 1 → wave 2): the first five-lens wave's readability return (68, filed as codex/lens-readability-interim1.md) priced a real defect — at 360 px stage width the stage height (56.25vw = 202.5 px) clipped the final four dwarf rows (row tops 84 + i×24 reach 276 px, overflow hidden). Cure, in source: the CSS 56.25vw height literal is removed (stage height now derives from the CONFIG stageW/stageH aspect-ratio setter) and a CONFIG-derived minimum stage height is set in JS — firstRowYPx + (1 + dwarf.rows)×(heightPx + gapPx) = 84 + 9×24 = 300 px — so all nine rows hold inside the stage at phone width while the binding row geometry (14/10/92) is unchanged. Own checks re-run on the cured build: SYNTAX_OK · counts 9/9 match · completeMs 12200 · overflowContinuity true · swaps all PASS · purity grep 0 · census unapplied [] · fit HITs 0. All five lenses re-fired on the cured build; wave-1 returns preserved as codex/lens-<lens>-interim1.md and never enter the final average.

## Raw harness output (verbatim)
```
{
 "counts": {
  "built": 9,
  "expected": 9,
  "match": true
 },
 "completeMs": 12200,
 "spots": {
  "0": {"header": "Lifespan of", "fills": [0,0,0,0,0,0,0,0,0]},
  "1000": {"header": "Lifespan of", "fills": [0.038,0,0,0,0,0,0,0,0]},
  "2999": {"header": "Lifespan of", "fills": [0.42,0,0,0,0,0,0,0,0]},
  "3000": {"header": "Lifespan of a Red Dwarf", "fills": [0.42,0,0,0,0,0,0,0,0]},
  "3400": {"header": "Lifespan of a Red Dwarf", "fills": [0.42,0,0,0,0,0,0,0,0]},
  "4500": {"header": "Lifespan of a Red Dwarf", "fills": [0.42,1,0,0,0,0,0,0,0]},
  "10000": {"header": "Lifespan of a Red Dwarf", "fills": [0.42,1,1,1,1,1,1,0,0]},
  "12200": {"header": "Lifespan of a Red Dwarf", "fills": [0.42,1,1,1,1,1,1,1,1]},
  "14999": {"header": "Lifespan of a Red Dwarf", "fills": [0.42,1,1,1,1,1,1,1,1]}
 },
 "overflowContinuity": true,
 "accumulateAt12200": [0.42,1,1,1,1,1,1,1,1],
 "swap_rows8to5": {"built": 6, "expected": 6, "pass": true, "fillsAtEnd": [0.42,1,1,1,1,1]},
 "swap_header": {"at3000": "Life of a Red Dwarf", "pass": true},
 "swap_colour": {"colours": ["#2b6ae0"], "pass": true},
 "swap_interval": {"onsets": [3400,4100,4800,5500,6200,6900,7600,8300], "pass": true, "fillsAt8000": [0.42,1,1,1,1,1,1,0.571,0], "accumulate": true},
 "swap_all_accumulateOverflow": true,
 "fit": [
  {"element": "header (sun)", "text": "Lifespan of", "inkW": 120.8, "inkH": 14.4, "containerW": 336, "margin": 215.2, "flag": ""},
  {"element": "header (dwarf)", "text": "Lifespan of a Red Dwarf", "inkW": 244.8, "inkH": 14.4, "containerW": 336, "margin": 91.2, "flag": ""},
  {"element": "Sun label", "text": "Sun", "inkW": 29.4, "inkH": 11.5, "containerW": 92, "margin": 62.6, "flag": ""},
  {"element": "Red Dwarf label", "text": "Red Dwarf", "inkW": 81.3, "inkH": 11.5, "containerW": 92, "margin": 10.7, "flag": ""}
 ],
 "fitHits": 0
}
```
(Full spot arrays in the harness run are condensed here only in whitespace; every value above is the harness's own output. Census run on the final build: unapplied keys [] · hex outside CONFIG ['#000'] · numbers outside CONFIG in script-after: 0,1,100 — filed in config-census.md.)

## Seeded-RNG presence census (guards command 3 — recorded on the final build)
CONFIG stars.seed 15324 present, 1 application site (LCG state initialisation in the starfield builder); stars.lcgA 1 site (rnd multiplier) · stars.lcgC 1 site (rnd increment) · stars.lcgM 2 sites (rnd modulus + normaliser) · stars.count 1 site (speck loop bound). No Math.random anywhere in recreation.html (determinism: the starfield is a pure function of CONFIG stars.*). Census instrument: the config-census node run filed in config-census.md.

## Prewave disposition (jev-prewave, filed at artifact root as jev-prewave.md)
Firing 1: HOLD — payload lacked the packet section + guards.md command list (review-contract gap, not a build defect); return preserved verbatim at codex/jev-prewave-interim1.md. Cure: both supplied; re-fired once.
Firing 2: HOLD (parameterization 0.85 · purity 0.90 · own-checks completeness 0.45 · fidelity-plan honesty 0.90) — two curable charges, both APPLIED before the wave: (1) independent dwarf rowIntervalMs/sweepMs permitted overlapping sweeps under the interval swap — CURED IN SOURCE: the dwarf sweep is now DERIVED from rowIntervalMs in buildRows (sweepMs := rowIntervalMs; the independent dwarf.sweepMs key is removed), so row i+1 begins exactly as row i completes for ANY interval value, by construction; the harness overflowContinuity predicate (onset_i == onset_{i-1} + sweep_{i-1} for every dwarf pair) passes on the default AND the 700 ms swap (raw output above is the post-cure run). (2) seeded-RNG presence census not recorded — cured by the census section above. Return preserved verbatim at codex/jev-prewave-interim2.md.
Firing 3 (on the cured build + cured record): filed verbatim at the artifact root as jev-prewave.md; its verdict is cited in scores.md.
