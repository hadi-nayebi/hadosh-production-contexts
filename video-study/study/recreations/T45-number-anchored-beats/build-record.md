# T45 — Number-anchored beats (counters as arguments) · build record
Cycle 008 · Wave 6 · Item #26 · Packet 2 (Infinite Physics, YouTube Rkb3IG46sQo)
Artifact dir: `hidden_files/study/recreations/T45-number-anchored-beats/`
Governing: recreation INSTRUCTION.md §3/§5/§6; wave charge in runs/2026-11-14-cycle-008-wave-6/RUN.md (T45 Observe/Plan).

## §1 Observe
- Digest T20 mechanics: every major beat carries one concrete, checkable quantity, usually drawn as the section's hero object; a visualized count (the two counters) can carry an entire section's argument in one frame. Specimen instance 17:24–17:30: counters MATTER 1,000,000,001 vs ANTIMATTER 1,000,000,000 → callout "ONE LEFTOVER IN A BILLION".
- Evidence frames viewed firsthand by the builder:
  - ev/t1052.jpg (17:32): two outlined counter panels across the top — cyan MATTER 1,000,000,001 (left), magenta ANTIMATTER 1,000,000,000 (right), small white label above big grouped digits; centre hero = purple particle swirl ring around a glowing cyan sphere; yellow pill "ONE LEFTOVER IN A BILLION"; white subline "Every galaxy, planet and atom in your body"; deep violet gradient field.
  - ev/t662.jpg (11:02): the same system in single-number form — headline "Stretched light", yellow pill "SPACE STRETCHED ≈ 1,100×", waveform hero, small-print honesty note. Confirms the pill/callout + hero-object grammar is the reusable system, not a one-off.
- Segment: source.mp4 cut 1042–1056 s (17:22–17:36, catalogue window ±handles) → segment.mp4, re-encoded h264/aac, 1920×1080. ffprobe: duration 14.000 s, size 954,658 bytes.
- Variables extracted: counter labels · start/end values · count duration/easing · difference callout (must be a function of the two end values) · subline · hero object (particle swirl + sphere) · palette · number formatting (grouping/separator).
- Consumer: DLC diagram slot — counters-as-argument container.

## §2 Plan
### CONFIG parameter table (all values in recreation.html CONFIG; specimen defaults)
| Key | Specimen value | Role |
|---|---|---|
| durationMs | 14000 | stage duration = segment duration |
| palette.bgTop / bgBottom | #0d0621 / #2b1154 | violet field gradient |
| palette.text / panelBg | #ffffff / rgba(10,6,32,0.55) | label + panel fill |
| palette.pillBg / pillText | #f7dc0a / #141414 | callout pill |
| counters[0] | MATTER, 0 → 1,000,000,001, #63e6e6 / border #3f9db4 | left counter |
| counters[1] | ANTIMATTER, 0 → 1,000,000,000, #ec4fec / border #a83fb0 | right counter |
| number | grouping on, groupSize 3, separator "," | digit formatting |
| words / scales | ZERO…TWENTY; 10^9="A BILLION", 10^6, 10^3 | callout wording for computed diff/base |
| callout.pattern | "{diff} LEFTOVER IN {base}" | callout is COMPUTED from counters' end values, never hardcoded |
| subline | "Every galaxy, planet and atom in your body" | reveal line |
| timeline.panelFadeMs | 900 | panels fade in |
| timeline.countStartMs / countDurationMs / easingPower | 1500 / 6500 / 3 (power ease-out) | count-up |
| timeline.calloutAtMs / sublineAtMs / sublineFadeMs | 8400 / 9400 / 800 | reveals after count completes |
| timeline.checkpoints | 0 · 1500 · 8000 · 8400 · 9400 · 14000 | postcondition-tested (see timing model) |
| type.*Frac / weights / fitGuard | counter 0.042 · label 0.032 · callout 0.034 · subline 0.032 of stage width; weights 800/600/800/600; fitGuard 0.96 | typography + auto-fit |
| layout.*Frac | panel width 0.40, lefts 0.055/0.545, top 0.10, callout top 0.735, subline top 0.845, pill padding/radius | geometry |
| hero | seed 20261114, 850 particles, ring Rx 0.185 / Ry 0.115, jitter 0.035, particle #c99bf2 1–2.4 px, baseAlpha 0.55, twinkle 0.35 @ rate 2, rotation 0.05 rad/s, sphere r 0.032 (#9be8f2→#1f7f96), glow r 0.085 | code-drawn hero |

### Timing model — LABELED ALLOCATION MODEL (uncertainty stated)
Only anchor frames are timed: the digest window 17:24–17:30 carries the counters + callout, and ev/t1052.jpg (17:32, t=10 s in the segment) shows the FINAL state complete (counters at end values, callout + subline present). Intermediate checkpoints (panels-in 0, count 1.5–8.0 s, callout 8.4 s, subline 9.4 s) are an ALLOCATION MODEL fitted to those anchors, NOT measured sub-beat timings. Uncertainty: count start/end ±~1.5 s; the model guarantees only that the final state is reached before the 17:32 anchor and held to 14 s.

### Construction choice
DOM panels + canvas hero in ONE self-contained HTML file; CONFIG at top drives all content/timing/palette via CSS variables + JS. Counters count with the CONFIG power ease; on completion the callout pill pops and the subline fades. The difference callout is computed (diff = |end0−end1| worded via CONFIG words/scales; base = min end via CONFIG scales) so any CONFIG swap changes the callout truthfully. Seeded (mulberry) particle swirl + radial-gradient sphere, code only.
Rejected alternatives: (a) SVG counters/hero — DOM text gives free grouping/auto-fit measurement; canvas is cheaper for 850 particles. (b) CSS keyframe counting — cannot compute values or a derived callout. (c) Hardcoded callout string — fails the parameterization law; rejected on sight.

### Execute checklist
[x] segment cut + ffprobe · [x] recreation.html (CONFIG-driven, no external assets, no captions) · [x] comparison.html (matched size, one synced control set, phone stacking) · [x] self-verify legs before Codex.

### Verify checklist
Swap test (labels+values with diff ≠ 1, +1 timing, +1 palette) · purity grep + asset inventory · config-census (hex/rgba/durations/geometry/numerics outside CONFIG; unapplied keys) · checkpoint postconditions · measured-fit at 360 px · node --check · five-lens Codex wave binding to one sha256.

### Failure points priced
(1) 10-digit grouped numbers overflow panels at phone width → CONFIG font fraction + canvas-measure auto-fit + measured-fit leg. (2) Callout hardcoded → computed-callout construction + diff≠1 swap. (3) Allocation-model timing mistaken for measured → labeled model above. (4) Config leaks (CSS weights/alphas) → census leg. (5) Render proof: no Chrome binary exercisable in this seat → PIXEL-UNVERIFIED limitation (printed, §5).

## §3 Execute record
- segment.mp4: ffmpeg -ss 1042 -t 14, libx264/aac, faststart. ffprobe: h264 1920×1080 + aac, duration 14.000 s, 954,658 B.
- recreation.html: built per Plan; two defects found and cured during Execute/Verify — (i) URL-override merge replaced counter objects wholesale (start lost → NaN on partial overrides): merge now deep-merges array elements; (ii) CSS font-weights (600/800) and JS particle alpha/twinkle/glow-fade literals outside CONFIG: all moved into CONFIG.
- comparison.html: segment video + recreation iframe side by side at matched 16:9, labels "ORIGINAL — Infinite Physics @ 17:22–17:36" / "RECREATION — T45 number-anchored beats, parameterized"; Play/Pause/Restart drive both (recreation clock slaved to video currentTime via __T45.seek in a rAF sync loop); stacks vertically ≤640 px with 48 px control buttons.
- recreation.html sha256 (final, binding for the whole Codex wave): 89e2f061e8ec597e07abd53d4195acf1b2eae8ac614363478afdbe9591f79c09

## §5 Self-verify (legs 1–3, BEFORE Codex) — all PASS unless printed
(a) SWAP TEST (node harness, stubbed DOM/canvas, real inline script): override labels SALES/REFUNDS, ends 750/500 (difference 250 ≠ 1), countDurationMs 6500→3000, palette bgTop #0d0621→#123456. Result: labels render SALES/REFUNDS; at swapped count end (4500 ms) values read "750"/"500"; callout recomputes to "250 LEFTOVER IN 500" (truthful — no hardcoded ONE/BILLION); bgTop applied #123456. Default run: values "1,000,000,001"/"1,000,000,000", callout "ONE LEFTOVER IN A BILLION". PASS.
(b) PURITY: grep of recreation.html for segment.mp4, source.mp4, Rkb3IG46sQo, t1052, t662, <video, <img, .jpg, .png, .mp4 → 0 hits on every pattern. Asset inventory: recreation.html loads ZERO external assets (no link/img/video/iframe/url()); hero + sphere are canvas code; comparison.html references segment.mp4 + recreation.html only (its lawful role). PASS.
(c) CONFIG-CENSUS: hex colors outside CONFIG = 0; rgba() outside CONFIG = 0; unapplied CONFIG keys = 0 (85 keys checked). Numeric literals outside CONFIG are structural only, enumerated: 0/1/2/3 (indices, gradient stops, identity), 100 (CSS %), 16/9 (stage aspect), 50 (translateX(-50%) centering), 1000 (ms→s), RNG algorithm constants (mulberry shifts 15/7/61/14/6, 2^32, 0x6D2B79F5), charset utf-8. Shaping literals outside CONFIG = 0. PASS.
(d) CHECKPOINT POSTCONDITIONS: checkpoints [0, 1500, 8000, 8400, 9400, 14000] — ordered, strictly increasing, all within [0, durationMs 14000], spans finite (1500/6500/400/1000/4600); harness checkpointsOk() = true; count-end checkpoint = countStartMs + countDurationMs exactly. PASS.
(e) MEASURED-FIT at 360 px stage (PIL glyph measurement, DejaVu Sans Bold metrics as the Arial-family stand-in — real font-metric measurement, not a formula claim): counter font 15.1 px; "1,000,000,001" ink 122.4 px vs panel inner width 131.0 px → FITS at configured size (also within fitGuard 0.96 → 125.8 px), with canvas-measure auto-fit as the in-browser backstop. Legibility floor ~11 px: label 11.5, counter 15.1, callout 12.2, subline 11.5 — all ≥ floor. Callout ink 195 px, subline ink 283 px, both < 360 stage. PASS (metric-level; see limitation).
(f) SYNTAX: node --check on both inline scripts (recreation + comparison) → clean. PASS.
LIMITATION — PIXEL-UNVERIFIED: no Chrome/Chromium binary is exercisable in this seat (checked PATH + playwright cache, none), so pixel-level rendering was not exercised; fit evidence is font-metric measurement + the in-code canvas auto-fit. The comparison page is the render surface for the seat's firsthand check.

## §5 Codex wave outcome (filed at close; the packet fed to the lenses was this record WITHOUT this section)
Five separate lens runs, score-blind packet, all binding to recreation.html sha256 89e2f061e8ec597e07abd53d4195acf1b2eae8ac614363478afdbe9591f79c09 (unchanged after the wave): motion 88 · timing 84 · purity 97 · reusability 78 · readability 94 → average 441/5 = 88.2, minimum 78 → PASS, tier RECREATED. Returns verbatim in codex/lens-*.md; full consolidation + priced cures (convergent first) in scores.md. Notable honesty correction from the wave: two lenses priced the sphere-gradient ratios (sr/3, sr/6) as shaping literals outside CONFIG — the §5(c) census above classified them structural; scores.md cure 1 carries the correction.
