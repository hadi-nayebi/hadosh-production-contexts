# T196 — Measured-fit leg (A6, guard-measured-fit) · attempt 1 · REFILED Cycle 036 (A12.3 completion, A12.2 form (i))

**Instrument:** harness POST-FIT ink measurement of the built spans — `node codex/harness-completion036.js` (raw output filed at `codex/harness-completion036-output.txt`) loads the cured recreation.html (SHA-256 `80f16c832df567465c8a51ceed85794a76df46d34cc0eecfa47f95a286873d18`, 9,210 B), runs the build's own `fitCard()` on the built spans, and records the POST-FIT bounds below from the fitted result. Span geometry in the harness is supplied by PIL-rendered ink bounds in **Liberation Sans Regular** (named stand-in font, metric-compatible with the Arial/Helvetica members of the CONFIG font stack; `codex/measure_spans.py`, ×4 supersample, rendered textbbox ink). Fitted element + stage geometry: each card element inside the CONFIG stage box (stage 360 px wide, 16:9 → 202.5 px high; box = 88% × 62% = 316.8 × 125.55 px). Every value below is a RECORDED post-fit bound from the harness run — no character-width × factor model is used anywhere in this table (the Cycle-035 model rows are superseded by this filing).

| Element | Container (box) | Fitted size | Measured ink width, unwrapped total (incl. 0.36 em/word margins) | Wrapped line widths (recorded) | Widest single word ink | Measured ink height (max span ink) | Total height (lines × size × 1.25) | Margin — horizontal (box 316.8 − widest line) | Margin — vertical (box 125.55 − total height) |
|---|---|---|---|---|---|---|---|---|---|
| Card c1 "This system brings in varying" (5 spans) | stage box 316.8 × 125.55 | 40 px | 544 px | [231, 312] px, 2 lines | 143 px | 37 px | 100.0 px | 4.8 px | 25.55 px |
| Card c2 "types sizes, weights and animation," (5 spans) | stage box 316.8 × 125.55 | 32 px | 526 px | [302, 224] px, 2 lines | 159 px | 30 px | 80.0 px | 14.8 px | 45.55 px |
| Card c3 "so you can feel when my voice gets louder or softer" (11 spans) | stage box 316.8 × 125.55 | 32 px | 767 px | [234, 301, 232] px, 3 lines | 101 px | 28 px | 120.0 px | 15.8 px | 5.55 px |
| HUD readout (non-subject, chrome) | stage bottom-left | 12 px monospace | — | 1 line | — | ~8.6 px | n/a | n/a (not subject text) | n/a |

Width judgment (Cycle-036 cure, executable): `fitCard`'s `fits` now judges width as well as height (a wrapped line or a single word wider than the box fails). Proof from the same harness run: a probe card holding one 40-character word records `{"fontSizePx":20,"inkW":387,"maxWordW":387,"lineWidths":[387],"boxW":317,"fits":false}` — at minimum size its height (1 line × 25 px) fits, and fit still FAILS on width (387 > 316.8). Startup consumption (cure): the startup loop's results are retained in `fitReport`, exposed on `window.__T196`, and branched on (`stage.dataset.fit = "ok"`, harness-verified identical to fresh `fitCard` calls: c1@40/fits=true, c2@32/fits=true, c3@32/fits=true).

Legibility floor (~11 px ink at 360 px stage): all subject rows' measured ink heights 28–37 px — above floor ✓.
Hierarchy: no size hierarchy is claimed between subject elements (D5 holds size constant across states; cards fit independently); state separation is color-only by construction, discharged by the computed contrast floor + ΔE pair check in build-record.md (19.26 / 16.57 vs bg; ΔE 90.5 ≥ 30).

**HIT list: EMPTY — PASS for this leg (0 hits).**
