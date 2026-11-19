# T14 — fit table · Attempt 2 (A-C008 measured-fit leg, fired on the NEW source before the wave)

Source: `recreation.html` sha256 `b530b7372e768f291053dfa5ab1523cc633597fa117cec4702121fce04ee1525` (final, after the in-cycle cures recorded in build-record-attempt2.md; the run-1 source 2c5a897e… was superseded before filing)
Measurement basis — READ FIRST: this environment has **no executable DOM/canvas measurement route** (node harness: `document.createElement("canvas").getContext("2d")` returns null; headless Chrome blocked, A-C002-2). Every row below is therefore **model-estimated** (monospace advance = configured `wallCharWidthFactor` 0.60 × font size), NOT DOM-measured and NOT canvas-measured. The recreation source itself measures with canvas `measureText` against the configured font stack when a canvas exists in the viewing runtime and falls back to the same model otherwise; the build record files this limitation and the readability target is priced against these model rows only. Canvas advances alone are never claimed here as wrapping or glyph containment. PIXEL-UNVERIFIED.

## Wall text (two-dimensional fit: font = min(width fit, height fit, max))

Stage 360×202.5 (phone): box 208.8 × 58.7 px (58% width fraction × 29% height fraction, top at 15% — below the two-row chrome block, whose modelled bottom is 27.7 px against the wall top at 30.4 px; box bottom at 44% of stage height, above the TV top edge at 47%). Fit margin fraction 0.04 → usable width 200.4 px. Width fit 25.7 px · height fit 22.6 px · chosen font **22.6 px** · diagnostic: none.

| Element | Container | Basis | Line | Chars | Width at chosen font (px) | Container width (px) | Margin on binding side (px) | Ink height (px) |
|---|---|---|---|---|---|---|---|---|
| wallText line 1 | wall box | model-estimated | `I HAVE A` | 8 | 108.5 | 208.8 | 100.3 | 22.6 |
| wallText line 2 | wall box | model-estimated | `SUBSCRIPTION.` | 13 | 176.3 | 208.8 | 32.5 | 22.6 |

Height budget: 2 lines × 22.6 × 1.3 line-height = 58.7 px = 58.7 px box height (the height fit is the binding constraint). ✓
Stage 720×405: font 45.2 px (width fit 51.4 · height fit 45.2). ✓
Displayed-text preservation (added after the run-1 wave priced a reveal defect): the full reveal displays every raw character exactly for the default, hard-split and many-line answers — asserted in the suite (`wallReveal`).

Wrapped / adversarial states (all on accepted, coherent configurations; own-checks-T14-attempt2.js):
| State | Lines | Font (px) | Result |
|---|---|---|---|
| Unbroken 30-char word | 3 (hard-split at 13) | 15.1 | fits 2D budget, no diagnostic; full reveal preserves all 30 characters |
| Many-line answer (10 words, coherent 12 s schedule) | 4 | 14.0 (floor) | 2D fit 11.3 px is below the floor → floor used + explicit diagnostic emitted (reject-vs-display policy: display at the floor, diagnostic observable) |
| Impossible fit (180×101.25 stage, 12 words) | — | 14.0 (floor) | diagnostic emitted; never silently shrunk below the floor |

## TV text (vertical fit of the complete exchange)

Stage 360×202.5: TV box 144 × 72.9 px; border 6 px ×2; padding (3% / 6% of TV width) → inner 114.7 × 52.3 px. Font 9.0 px (the configured floor; clamp 9 / 2.4vw / 19), line height 13.05 px, 21 chars per line.

| Element | Basis | Lines | Needed height (px) | Inner height (px) | Fits |
|---|---|---|---|---|---|
| TV question `* What are your qualifications?` | model-estimated | 2 | 26.1 | 52.3 | ✓ |
| TV follow-up `To what?` (single `\n`, blank line dropped) | model-estimated | 1 | 13.1 | 52.3 | ✓ |
| Full exchange (question + follow-up) | model-estimated | 3 | 39.1 | 52.3 | ✓ (13.1 px spare) |

Wrapped state priced: a long question (4 lines) + wrapped follow-up (2 lines) needs 78.3 px > 52.3 px inner — the model reports `fits=false` for that state rather than claiming containment; the specimen exchange fits.

## Chrome text
Cam/REC/PTZ labels: clamp floor 9 px at phone width (configured 9 / 2.2vw / 17), letter-spacing 0.04em — at/above the legibility floor the attempt-1 returns priced. Model-estimated.

## HIT list
- HIT-1 (filed, priced against model rows only): no DOM-measured or canvas-measured row exists in this environment — the measurement route limitation above. The source's browser-runtime canvas path is code-inspected, not executed here.
- No containment or legibility-floor HIT on the specimen states: wall font 25.7 px ≥ 14 px floor; TV full exchange fits with 13.1 px spare; chrome at its 9 px floor.

Leg verdict (advisory): fired on the new source before the wave; 1 hit (measurement-route limitation), specimen-state rows PASS on the model basis.
