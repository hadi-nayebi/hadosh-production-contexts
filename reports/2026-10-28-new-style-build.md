# JOB NEW-STYLE BUILD — soa-01 harness film, scenes + words style (v4)

**Date:** 2026-10-28 · **Deliverable:** `soa01-scenes/full-film-v4.mp4` (81.05 s, 1080×1920@30)
**Companion artifacts:** `soa01-scenes/full-film-v4-filmstrip.png` (3 s spacing) · `soa01-scenes/scene-contact-sheet.png` (all 33 final scenes)
**Governing context:** `soa01-scenes/scene-plan.md` + `scene-plan.json` (audit UNDECIDED = 0) + `soa01-scenes/transcript-v4.md`. Drift gate verified before any generation: drift LOG latest entry ALIGNED, STEERING carries no ACTIVE directive (none names soa-01).

## Headline — planned vs realized

| Layer | Planned | Realized | Verdict |
|---|---|---|---|
| Scene switches | 32 switches onto measured word anchors | 32/32 on-anchor; worst measured offset **0.043 s** (gate ±0.15 s) | PASS |
| Dwells (Rule C-1) | 33 scenes, mean ≈2.45 s planned | mean **2.46 s**; max 3.67 s — **ceiling 5.0 s never approached**; 4 above-band (S9 3.63, S14 3.54, S21 3.51, S25 3.67 — all under ceiling, all scored exceptions/holds in the plan); 4 sub-floor anchor-to-anchor intervals (S6 1.16, S8 0.60, S23 0.90, S32 0.93 — the same consecutive-word splits the plan itself scores: L4 inventory items, L14 same-line split, L19/L20 mantra strikes) | PASS with the plan's own exceptions |
| Word events | 22 events / 34 lettered entries | **34/34 rendered** — text, seat, direction, anchor, exit, gold stress as scored in scene-plan §7; mantra verified frame-wise (below) | PASS |
| Type scale classes | HERO 120 / STANDARD 72 / SMALL 48 cap px | Held for 23/34 entries; **11 entries scaled down under the frame-fit completion** (see Flag 1) | PASS with flagged completion |
| Image motion | none — switches + words only | Frame-difference inside stable scene windows: mean \|Δ\| 0.002–0.022 (codec noise floor) — no pan/zoom/drift anywhere | PASS |
| Audio / master | ≈ −14 LUFS, TP ≤ −1 dBTP, continuous bed | **−14.53 LUFS / −1.23 dBTP** on the final MP4; bed continuous through the splice and the tail | PASS |
| Sound-off read | arc: scale → accumulation → inventory → verdict → definition → two-homes → growth → open book → mantra | Filmstrip reads in that order with words carrying the argument; checked frame by frame | PASS |
| Phone size (390 px) | definition scene, one verdict joint, mantra tail legible | All three legible (stills in `soa01-scenes/work/stills/phone-*.png`) | PASS |

## L8 calibration run — the markup standard's first measurement

- Take synthesized from the **marked** v4 text only (default voice `avocado_v2:MAI_03`), exactly one new take; all other lines are the verified A7 takes, spliced from the shipped Academy master with the Academy assembly's own method (10 ms splice crossfades; bed patch looped from the programme's own gap material, the adopted A7 treatment; take RMS-matched to the shipped L8 v3 take, +12.48 dB).
- **ASR fit: 1.000** against the clean v4 line (faster-whisper small; gate was ≥0.85).
- **Em-dash joint ("…around it — the HARNESS:…"): measured silence 0.53 s** — the standard's dash/comma breath band is 0.15–0.45 s, so the joint lands **0.08 s above the band**. Per the standard's own rule (measurement outranks the standard; a mark is re-decided only after failing twice), this is recorded as calibration data point #1, not a take failure: the pause is the scored naming pivot of the definition line and reads as deliberate. One data point does not yet re-decide the band.
- L8 delta: block 9.441 s vs 4.837 s shipped → film grows 76.47 s → **81.05 s**; every L9+ anchor re-measured on the assembled master by Whisper and locked (table in `soa01-scenes/work/anchors-v4.json`; full word stream in `work/words-v4.json`).

## Scenes — generation and acceptance

- 33/33 generated with the plan's STYLE BLOCK verbatim + the scored subject sentence; prompt-manifest in `work/prompt-manifest.json`. The media pipeline exposes **no seed parameter** — the plan's seed rule (4100 + scene #) could not be applied literally; prompts carried style block + subject verbatim instead. Recorded as a tooling gap, not a silent deviation.
- Measured acceptance (per plan): ink/navy share ≥0.55 on **all 33** (range 0.55–0.98, table in `work/scene-qa.json`); one dominant subject each; no legible text anywhere (S06/S13 carry handwriting *texture* — the scored subjects themselves; no words); no close-up faces.
- **Regenerations: exactly 1** — S03 v1 failed acceptance (front-facing mascot figure, wrong mood) and was regenerated once, per the plan's one-regen allowance; v2 passes and is the shipped frame.
- S33 accepted with a recorded note: its warm desk pool sits low (bottom-third luminance 0.177 > middle 0.151) — the plan's numbered check passes; S33 carries no word events.
- S14's glowing structure reads as stacked paper sheets — the build's visual read of the scored "distilled layer" subject; flagged for Hadi's eye in the section pass.

## Gates (all measured on the final MP4)

- **(a) Switch audit:** blend fraction recovered at every fade midpoint; implied timing offset ≤ **0.043 s** on all 32 (gate ±0.15 s). Crossfades are centred on their anchors (fade completes at the anchor, the convention the Academy builds used; ±0.20 s worst edge, inside the gate).
- **(b) Word-event audit:** 34/34 present at their seats with scored directions; entries easeOutCubic 0.35 s (E5 slow-grow 0.60 s); exits per row. **Mantra verified frame-wise:** KEEP lands Z-TL @78.38 → AN EYE Z-C @78.62 → ON IT Z-LR @78.92, all HOLD through the tail and leave only in the final 1.00 s fade (stills `work/stills/mantra-sequence.png`).
- **(c) No unintended motion:** see headline.
- **(d) Loudness/format:** −14.53 LUFS / −1.23 dBTP; 1080×1920@30; 81.05 s.
- **(e) Sound-off read:** PASS (filmstrip).
- **(f) Phone frames:** definition (the HARNESS over the note-built harness), verdict joint (NOTHING. HERO over the emptied room), mantra tail (full diagonal, gold, legible) — all PASS.

## Flags for the parent (decisions/gaps, none silently absorbed)

1. **PLAN GAP — no frame-fit rule (completed uniformly, needs ratification in the section pass).** Eleven events' scored scale class is wider than their seat's in-frame span (worst: E13b "TWO DIFFERENT HOMES." at Z-MR — 965 px at cap 52 around x=780 would clip 172 px off-frame). The plan decides text/seat/scale/direction but no fit behaviour, and shipping clipped glyphs would fail the brief's own legibility gate. Uniform completion applied: type scaled down only until the box fits inside a 40 px frame margin; seat centre, direction, anchor, exit and text never moved. Affected: E3 (72→43), E4a (72→34), E4c (72→61), E7 (72→65), E10 (48→33), E11 (72→61), E13a (60→32\*), E13b (52→28\*), E16c (48→37), E21a (120→110), E21b (74→33\*). (\*E13a/E13b/E21b shrink mostly from the plan catalogue's own 1000 px single-line cap before the frame fit.) Two-line wraps were tested and rejected: they do not rescue long single words and break the scored one-line phrase shape. If Hadi prefers full scale classes with boxes shifted inward instead, that is a one-line renderer change + re-render.
2. **Scrim probe operationalized.** The plan's scrim rule ("a soft black plate α 0.35 where the zone's luminance is high") has no numeric threshold; the build applies the scrim where the glyph band's bright fraction (luminance ≥0.42) ≥0.10 or its brightest quartile ≥0.55, measured on the displayed scene. Scrims landed on 15/34 entries (E3, E4a, E4c, E6a, E7, E11, E12, E15, E16c, E19a, E19b, E19d, E21b, E22b, E22c; full table in `work/render-log.txt`). The plates are visible as soft dark fields on close inspection — the plan's decided treatment, named here so the section pass can judge it.
3. **Clock reconciliation.** The plan's printed anchors (e.g. "accumulating 9.416") sit on a pre-assembly clock and do not reconcile with any single on-disk master (they run ~0.46 s late). The build followed the plan's own "anchors govern" rule in its measured form: every anchor was Whisper-measured on the assembled v4 master. The L8 plan windows were computed from the take construction and confirmed by the same pass (harness word 27.22, distilled 30.12).
4. **Dwell convention.** Reported dwells are anchor-to-anchor. The plan's dwell column measures anchor → next fade *start*, which is why plan numbers and realized intervals differ by exactly one fade on the split lines (S6/S8/S23/S32); neither convention produces a ceiling breach or an unplanned sub-floor scene.
5. **E8 stress colour.** "the HARNESS": only HARNESS is gold (the plan's stress-colour rule); the defined term renders "the" in cream. E20a UNDERSTAND renders at cap 95, not 120 — the plan catalogue's 1000 px line cap binds before the frame does.

## Build record

- Audio: `work/assemble_v4.py` (splice), `work/master_v4.py` (shipped deterministic chain: fixed gain + lookahead limiter, ceiling 0.805; final record `work/master-record.json`), `work/measure_v4.py` (anchor pass).
- Render: `work/render_v4.py` (PIL + ffmpeg pipe, x264 CRF 17); render log `work/render-log.txt`. One re-render was needed: v1 shipped E3 clipped at its seat ("ACCUMULATIN…") — found by viewing the filmstrip, fixed by Flag 1's rule, re-rendered, re-gated.
- Gates: `work/gates_v4.py`. Evidence stills: `work/stills/` (filmstrip frames, phone frames, mantra sequence, event checks).
- No pushes made. Nothing delivered to Hadi — this report and the artifacts are for the parent.
