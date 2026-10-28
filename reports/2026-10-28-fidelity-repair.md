# JOB SUBJECT-FIDELITY REPAIR — soa-01 scenes film (2026-10-28)

*Drift gate read first: drift-check/LOG.md + STEERING.md — no ACTIVE
directive names soa-01 (the S13 freeze is CLEARED, 15:14 ET entry).
Authority: gap-hunt report (`2026-10-28-gap-hunt-soa01-scenes.md`,
findings A2/A3) + scene-plan appendix rules 1 (SUBJECT FIDELITY) and
10 (PRESENCE BY PROBE). Base film preserved before any work:
`soa01-scenes/work/full-film-v4-pre-fidelity-repair.mp4`
(sha256 85dd100a… == the enriched render it copies).*

## The two defects — confirmed with this job's own eyes

- **S12 (L8 setup):** hands at a keyboard with **sheet music and
  musical notes** flying off the keys — the generator read the scored
  "notes" as music. Subject-fidelity failure, as A2 recorded.
- **S28 (L17):** a laptop showing a **botanical sketchbook inside a
  graphics editor** (watercolour leaves, layer panel with eye
  icons) — no part of L17's story. As A3 recorded.
- Defective originals preserved: `work/s12-defective-sheet-music.png`,
  `work/s28-defective-botanical.png`.

## Regeneration — one attempt each, both accepted

Each prompt = the plan §2 STYLE BLOCK **verbatim** + the scored
subject made unambiguous + an explicit bar:

- **S12:** "…Hands at a keyboard in warm lamplight; handwritten note
  cards and written pages materializing above the keys and drifting
  toward a forming, glowing layer of stacked pages… only faint
  handwriting texture and red correction check marks, never legible
  words. **Absolutely no musical notation, no staff lines, no
  musical note symbols, no treble clefs, no instruments.**"
- **S28:** "…laptop screen filled edge to edge with the layer's own
  document pages and file cards spread open — paragraph-shaped
  layout blocks, small diagrams, red check marks… documents by
  layout only, never legible sentences. **Absolutely no botanical or
  plant artwork, no sketchbook drawings, no image-editor interface,
  no layer panels, no eye icons.**"

**Acceptance (appendix subject-fidelity gate — eyes first, then
measures), attempt 1 of the permitted 1 regeneration each:**

| Scene | Own-eyes verdict at full size | Ink proxy (lum<0.30; plan ≥0.55 class) | Negative space (lum top/bot) | Legible text | Faces |
|---|---|---|---|---|---|
| S12 new | SHOWS the scored subject: hands typing, note cards with red check marks drifting from the keys toward a forming stack/layer of pages; zero musical content | 0.801 | 0.046 / 0.148 | none (handwriting texture only) | none (hands only) |
| S28 new | SHOWS the scored subject: the owner's screen filled with the layer's own document pages/file cards (layout blocks, diagrams, red checks), everything open, no locks | 0.843 | 0.027 / 0.077 | none (layout only) | none |

Installed at 1080×1920 into `scenes/S12.png` / `scenes/S28.png`;
`work/scene-qa.json` S12/S28 entries gained `fidelity_repair_2026-10-28`
fields recording the defect, the regeneration, and these measures
(prior entries preserved).

## Splice

Re-rendered with the build's own pipeline, `work/render_v5.py`
(render-log: `work/render-log-fidelity.txt`, exit 0) — only the two
scene images changed; every other scene, all word events, all switch
anchors/fades, and the audio master are the renderer's unchanged
inputs. Output replaced `soa01-scenes/full-film-v4.mp4`.

## Re-verification on the final MP4

1. **In-film subject check:** frames at the scenes' midpoints —
   S12 at t=25.5 s (`work/fidelity-check-s12-infilm.png`): note cards
   drifting to the forming page layer, no music. S28 at t=69.1 s
   (`work/fidelity-check-s28-infilm.png`): screen of open document
   pages under E18 "NOTHING HIDDEN", exactly L17's beat. **PASS.**
2. **Presence probes for all word events** — method and table below.
   **34/34 events PRESENT** (35 renderer entries probed; E22's three
   strikes probed individually).
3. **Switch audit:** per-scene 50%-mix point projected onto the
   prev→new scene axis vs the scored `anchor − fade/2`; **worst
   offset 0.058 s** (S14), gate ±0.15 s. **PASS.**
4. **Loudness/format:** −14.53 LUFS / −1.23 dBTP (loudnorm;
   ebur128 reads −14.4 / −1.2), 1080×1920@30, **duration 81.050 s**,
   full decode clean (no errors). **PASS.**

### Presence-probe method (appendix rule 10)

For each event: sample the film inside its residence window; build
the **scene-only composite** for that instant (the renderer's own
SCENES anchors/fades/blend math, no word layer); inside the event's
seat box (1020×380 px at its scored centre) measure the fraction of
pixels whose max-channel |diff| vs the film frame exceeds 25. A
control probe at anchor − 0.45 s gives the same box's noise floor.
Auto-PASS = fraction ≥ 0.001 **and** ≥ 3× the control. Events failing
only the ratio test were settled by **direct viewing of their probe
crops** (contact strips: `work/fidelity-probe-strip-1.png`,
`work/fidelity-probe-strip-2.png`; raw numbers:
`work/fidelity-probe-results.json`; script: `work/probe_fidelity.py`;
event probe frames kept in `work/probe-frames/p-*.png`).

The six ratio-test failures are instrument artefacts, each explained:
the 1020 px-wide boxes admit co-resident or still-fading neighbours,
inflating the control (E4c ← E4b in its box at control time; E16a ←
E15's exit fade; E19c/E19d ← each other; E22b ← E21a/E21b), and E13b
sits on the film's brightest scene (cream glyphs on a lit house
façade → lower diff fraction, still 1.9% of pixels). **All six are
plainly visible in their probe crops**, named per event below.

| Event | Text | Seat | Probe t (s) | Diff frac | Control frac | Verdict |
|---|---|---|---|---|---|---|
| E1 | 1.2 BILLION | Z-TC | 3.62 | 0.093 | 0.000 | PRESENT (probe) |
| E2 | ONE OF THEM | Z-LC | 5.81 | 0.046 | 0.000 | PRESENT (probe) |
| E3 | ACCUMULATING | Z-MR | 9.90 | 0.124 | 0.000 | PRESENT (probe) |
| E4a | Your INSTRUCTIONS. | Z-LL | 12.84 | 0.141 | 0.000 | PRESENT (probe) |
| E4b | Your MEMORY. | Z-C | 13.43 | 0.054 | 0.000 | PRESENT (probe) |
| E4c | Your FILES. | Z-LR | 14.09 | 0.257 | 0.109 | PRESENT (viewed in crop) |
| E5 | YOURS? | Z-LC | 18.15 | 0.028 | 0.000 | PRESENT (probe) |
| E6a | NOTHING. | Z-C | 20.12 | 0.335 | 0.000 | PRESENT (probe) |
| E6b | IT WAS ALL RENTED | Z-LC | 20.87 | 0.030 | 0.000 | PRESENT (probe) |
| E7 | DISTILLED | Z-MR | 31.40 | 0.191 | 0.000 | PRESENT (probe) |
| E8 | the HARNESS | Z-TC | 29.95 | 0.106 | 0.000 | PRESENT (probe) |
| E9 | TWO PLACES | Z-TC | 34.95 | 0.069 | 0.000 | PRESENT (probe) |
| E10 | YOUR OWN SESSIONS | Z-ML | 39.25 | 0.023 | 0.000 | PRESENT (probe) |
| E11 | THEIR SIDE | Z-LR | 41.69 | 0.070 | 0.000 | PRESENT (probe) |
| E12 | YOUR OWN COMPUTER | Z-LC | 44.94 | 0.189 | 0.000 | PRESENT (probe) |
| E13a | SAME INTELLIGENCE. | Z-ML | 48.64 | 0.020 | 0.000 | PRESENT (probe) |
| E13b | TWO DIFFERENT HOMES. | Z-MR | 50.19 | 0.019 | 0.011 | PRESENT (viewed in crop) |
| E14 | RENTED | Z-TC | 53.05 | 0.030 | 0.000 | PRESENT (probe) |
| E15 | STAYS | Z-LC | 57.92 | 0.138 | 0.000 | PRESENT (probe) |
| E16a | ADDS | Z-LL | 61.28 | 0.013 | 0.101 | PRESENT (viewed in crop) |
| E16b | SHARPER | Z-C | 62.30 | 0.019 | 0.000 | PRESENT (probe) |
| E16c | GROWS · MATURES | Z-LR | 62.95 | 0.114 | 0.009 | PRESENT (probe) |
| E17 | YOURS (image asset) | Z-C | 66.95 | 0.101 | 0.000 | PRESENT (probe) |
| E18 | NOTHING HIDDEN | Z-TC | 69.56 | 0.065 | 0.000 | PRESENT (probe) |
| E19a | OPEN IT | Z-LL | 72.52 | 0.087 | 0.000 | PRESENT (probe) |
| E19b | READ IT | Z-C | 72.85 | 0.071 | 0.000 | PRESENT (probe) |
| E19c | CHANGE IT | Z-LR | 73.39 | 0.114 | 0.051 | PRESENT (viewed; also visible entering E19a's crop) |
| E19d | WITHOUT ASKING ANYONE | Z-LC | 73.75 | 0.138 | 0.051 | PRESENT (viewed in crop) |
| E20a | UNDERSTAND | Z-TC | 75.97 | 0.141 | 0.000 | PRESENT (probe) |
| E20b | the harness | (540,600) | 76.04 | 0.141 | 0.000 | PRESENT (probe) |
| E21a | BUILD | Z-ML | 77.78 | 0.148 | 0.038 | PRESENT (probe) |
| E21b | your own harness | (830,800) | 77.85 | 0.180 | 0.033 | PRESENT (probe) |
| E22a | KEEP | Z-TL | 79.13 | 0.081 | 0.000 | PRESENT (probe) |
| E22b | AN EYE | Z-C | 79.37 | 0.188 | 0.151 | PRESENT (viewed in crop) |
| E22c | ON IT | Z-LR | 79.67 | 0.267 | 0.000 | PRESENT (probe) |

## Flags / incidents

- **Probe-run incident (recovered, no data lost):** the first probe
  run cached frames in /tmp, a 512 MB tmpfs, and filled it at switch
  S24 (~500 MB of PNGs). The cache was moved to
  `work/probe-frames/`, one truncated frame was detected and
  re-extracted automatically, and the audit completed from the
  cache. Switch-window frames were deleted after their results were
  recorded in the JSON; event probe frames and both contact strips
  are kept as the presence evidence.
- No other flags. Both delivery-blocking defects (gap-hunt A2/A3)
  are resolved and re-verified; A1 (E7) was already corrected by the
  enrichment and E7 probes PRESENT here (frac 0.191).

*No pushes made. Not delivered to Hadi.*
