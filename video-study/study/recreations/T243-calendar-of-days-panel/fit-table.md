# T243 — measured-fit leg (guard-measured-fit) · final build sha256 c79885d2… · Cycle 042 completion re-filed 2026-11-19 (build byte-identical — sha re-verified c79885d23815c052dba1893089317af573a5668c4981a087c671e65483df18fb, 18,170 B; the completion cures touched the harness/record layer only, so every measurement below stands on this build; harness LABELS receipts re-executed in the completion run: default ax=301.4 bx=178.6 boxSep=5.7 · swap ax 301.4→327.9 bx 178.6→152.1 boxSep=0.000 — HITs 0 stand)

Method: PIL rendered measurement — each subject string drawn with **DejaVu Sans** (named stand-in font, PROXY rows) at the CONFIG font size scaled to the 360 px stage (stage 480 wide → scale 0.75, font px = round(CONFIG px × 0.75)); ink bounds are the drawn image's true `getbbox()` ink, never a width model. Floor: ~11 px ink height at the 360 px stage. Two pre-measurement cures are recorded in build-record.md (restage 640×440 → 480×520 with numeral/label fonts 15/13 → 21; titleFontPx 13 → 21 after the first measurement round showed title ink at 8 px).

| # | Element | Container (at 360 px stage) | Measured ink (w × h) | Margin (binding side) | Verdict |
|---|---|---|---|---|---|
| 1 | day numeral 1-digit "7" @21 px | cell 23.0 × 30.0 | 8 × 12 | 15.0 (width) | fit |
| 2 | day numeral 2-digit "35" @21 px | cell 23.0 × 30.0 | 18 × 12 | 5.0 (width) | fit |
| 3 | day numeral swap 2-digit "44" @21 px | cell 23.0 × 30.0 | 20 × 12 | 3.0 (width, tightest numeral row) | fit |
| 4 | panel title "DAYS" @21 px | title tab 60.0 × 19.5 | 41 × 12 | 19.0 (width) | fit |
| 5 | panel title swap "WEEKS" @21 px | title tab 60.0 × 19.5 | 57 × 12 | 3.0 (width) | fit |
| 6 | tasks title "TASKS" @21 px | title tab 60.0 × 19.5 | 51 × 12 | 9.0 (width) | fit |
| 7 | timeline label A "THAT DATE" @21 px | label strip 180.0 × 22.5 (half-stage allotment) | 89 × 12 | 91.0 (width) | fit |
| 8 | timeline label B "THIS TIME" @21 px | label strip 180.0 × 22.5 | 81 × 12 | 99.0 (width) | fit |
| 9 | timeline label A swap "AFTER THE DEADLINE" @21 px | label strip 180.0 × 22.5 | 174 × 12 | 6.0 (width) | fit |

**In-position label rows (prewave cure 3 — both labels measured at their actual rendered centres, final state, calendar shifted; layout from the build's `labelLayout`, node-verified):** the two drop feet stand 92.1 px apart at the 360 px stage (4 columns × 30.7 px × 0.75). Default pair needs no shift; the swapped pair's boxes overlap, so the layout shifts them apart (two-pass, stage-clamped) — ink separation is then positive for both pairs:

| # | Pair (in position, 360 px stage) | Ink A (centre → span) | Ink B (centre → span) | Ink gap | Verdict |
|---|---|---|---|---|---|
| 10 | default: A "THAT DATE" · B "THIS TIME" | 89 px (151.1 → 106.6–195.6) | 81 px (58.9 → 18.4–99.4) | 7.1 | fit, no overlap |
| 11 | swap: A "AFTER THE DEADLINE" · B "NEXT TIME" | 174 px (178.8 → 91.8–265.8) | 85 px (47.0 → 4.5–89.5) | 2.3 | fit, overlap resolved by layout shift (stage ax 201.4→238.4 · bx 78.6→62.6) |

Hierarchy (measured): numerals 12 px ink = titles 12 px = labels 12 px ink height at the 360 px stage — the design claims NO size hierarchy between subject texts (the specimen is one-weight linework); the operative hierarchy is intensity: struck numerals render palette.faint against palette.strike marks (harness hierarchy assertion, both configs). No hue-only hierarchy is claimed, so check 4 has nothing to price.
Floor check: smallest measured subject ink height = 12 px ≥ ~11 px floor. ✓

**HIT list: EMPTY (0 hits — the swapped-label overlap found at prewave firing 1 is cured by the labelLayout construction and re-measured here in position).**
