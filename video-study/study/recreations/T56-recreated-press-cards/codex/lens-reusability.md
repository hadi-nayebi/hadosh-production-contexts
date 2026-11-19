Could not file the return: the execution tool failed to start (`codex-code-mode-host` missing). Intended file: `hidden_files/study/recreations/T56-recreated-press-cards/codex/lens-reusability.md`.

**Reusability/parameterization: 86/100**

Production can drive the principal content, layout, timing, and motion through CONFIG. This judgment covers supplied source and records only; swap-test results are recorded evidence, not independently rerun here. Rendered appearance remains unverified.

Priced deductions:

- **−6 — Livery escapes CONFIG.** `bandInkFor()` hardcodes `"#ffffff"` and `"#141414"` as foreground candidates. With `bandInkAutoContrast: true`, `cards[].livery.bandInk` is bypassed. **Cure:** place candidate inks inside each card’s livery and select exclusively from those values.
- **−3 — Presentation choices remain literal.** `renderCard()` embeds `"  ·  "`; CSS fixes `#kind` to `text-transform:uppercase`. **Cure:** expose the band separator and kind casing through CONFIG and bind both consumers.
- **−3 — Duration binding is mode-dependent.** Segment mode clamps and stops at `durationMs`; cycle mode wraps indefinitely, and `tick()` enforces duration only for segment mode. **Cure:** expose finite/loop playback policy explicitly and apply the configured duration consistently.
- **−2 — Configuration validation permits invalid schedules.** `segment.specimenIndex` accepts fractional indices; `segment.recedeMs` lacks an explicit positive-duration check. **Cure:** require an integer specimen index and positive recession duration before playback.

Evidence credited:

- The cured record explicitly reports the required swap: card 0 outlet/livery/headline/date/kind, rise→slide, enter/hold 240/1300 ms, and card 1 band change, tested in cycle mode.
- `slotMs()` derives 1540 ms from that swap; `cycleMs()` derives total cycle length from card count. Segment timing derives from `CONFIG.segment`, with hold intervals determined by configured boundaries.
- Content and principal geometry/type/style values have identifiable consumers. `replaceCards` supports shortening the array.
- Interpolation constants, luminance coefficients, and normalized progress endpoints are mechanism constants rather than missing production parameters.

This lens clears the **70 minimum**. No other lens or aggregate tier judgment is made.

BODY-WRITE: None; filing `codex/lens-reusability.md` was blocked by execution-tool startup failure. Return supplied above for filing.
SCORE: 86
