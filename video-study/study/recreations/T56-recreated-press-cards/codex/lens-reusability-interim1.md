Could not file `codex/lens-reusability.md`: the execution tool failed to start. The assessment below uses the supplied source and build record only; I did not inspect rendered pixels or independently rerun the harness.

**Reusability/parameterization: 76/100.**

Production can swap the demonstrated content and timing through CONFIG, but the claim that every value lives there is incomplete.

- **−8 — Unapplied duration:** `CONFIG.durationMs` is never read. `stateAt()` loops by `cycleMs()` indefinitely; the standalone clock does not enforce the configured 14-second stage. **Cure:** define the end behavior and bind rendering/playback to `durationMs`; test a changed duration independently of the comparison video.
- **−6 — Livery escapes `cards[].livery`:** `CONFIG.type.bandInk` controls both band text and initials across all outlets. The prescribed gold swap exposes the limitation: white-on-gold contrast is recorded as 2.39. **Cure:** move foreground colors into each card’s livery and test contrasting per-card foreground overrides.
- **−8 — Appearance and geometry literals remain outside CONFIG:** `#card` shadow uses `10px 28px rgba(0,0,0,0.35)`; `#mast` gap is `4px 10px`; date/rule/subline/byline/kind opacities are `0.85/0.55/0.88/0.8/0.65`; entry opacity uses `0.15 + 0.85 * progress`. Stage ratio `16/9`, media-height factor `9/16`, gradient angle `180deg`, and rule minimum `Math.max(1, …)` also prescribe appearance outside CONFIG. **Cure:** expose these design values and verify their consumers. Structural centering constants need not become artistic controls.
- **−2 — Card-list override cannot shorten the list:** `deepMerge()` copies the base array and overwrites supplied indices, retaining trailing cards. **Cure:** provide explicit array replacement or a documented truncation mechanism; test one-card and two-card configurations.

The recorded exact swap covers card 0 outlet/livery/headline/date/kind, rise→slide, both timing controls, and card 1’s band. The source supports those bindings. `slotMs()`, `cycleMs()`, and `stateAt()` correctly derive slot timing, boundaries, and wraparound from CONFIG. However, `checkpointsOk()`’s `enterMs + holdMs > slotMs()` condition is tautological, not independent timing evidence.

This lens clears the **70 minimum**. It cannot establish RECREATED-tier eligibility or the five-lens average.

BODY-WRITE: None; intended filing `hidden_files/study/recreations/T56-recreated-press-cards/codex/lens-reusability.md` was blocked by execution-tool startup failure.
SCORE: 76
