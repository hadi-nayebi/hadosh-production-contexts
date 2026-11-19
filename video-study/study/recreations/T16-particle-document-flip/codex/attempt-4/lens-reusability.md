CONFIG covers most requested controls, and the source supports URL swaps for content, phase timing, density, reserve fraction, and palette. Pool sizing correctly uses the larger of maximum page demand and combined title-plus-ring demand. Reseeding and resetting run state support deterministic restart with identical timesteps. These are reusable foundations, but validation and timing edges prevent a clean lift.

Priced findings, ordered by cost:

- **Validation leaves consequential controls unchecked.** `validateConfig()` omits text types, `fontFamily`, `fontWeight`, title box dimensions/position, header fit ratios, line geometry, DOM geometry, and minimum stage dimensions. For example, `maxWidthRatio = -1` produces a negative condensation scale; `minStageW = NaN` corrupts sizing. **Cost:** runtime mutation through the advertised `revalidate()` entry can produce invalid targets or erase content without a warning.

- **Formation enforcement can leave an accepted configuration infeasible.** With `haloTravelMultiplier = 3`, default title travel requires `950 × 3 × 1.45 = 4132.5ms` for the ring, exceeding the default `formMs + holdMs = 2600ms`. `enforceFormation()` clamps the delay to zero but does not reduce ring travel or extend the available time; it only records `formationFeasible = false`. **Cost:** a valid parameter setting releases the ring before settlement.

- **Ring scheduling does not honor delays extending into hold.** The hold branch borrows any outstanding ring immediately, without checking `haloDelayMs`. A short title travel can make a delay longer than `formMs` budget-feasible, yet the ring starts at hold entry. **Cost:** changing an exposed timing control does not reliably produce its specified timing.

- **Derived checkpoints lack joint validation.** Mid-time and end-time fractions are individually range-checked, but their ordering is unrestricted. If the midpoint time exceeds the endpoint time, `deriveCheckpoints()` filters out the final-page anchor. `pageAtTime()` subsequently jumps to the final page after the surviving anchor. Strict validation of supplied lists is substantially stronger. **Cost:** apparently valid anchor controls can skip pages and invalidate intended pacing.

- **Some technique choices remain buried literals.** Formation enforcement uses a hardcoded `50ms` travel floor instead of `minTravelMs`. Sampling clamps use fixed `2–12` limits; text fitting embeds fallback height proportions and an iteration cap; wrapping embeds a one-pixel adjustment. **Cost:** a consumer must edit implementation code to change these policies, and the two travel floors can disagree.

- **Text fitting is promising but not a rendered-bounds proof.** Width uses `measureText().width`, rather than actual left/right ink bounds; vertical placement uses canvas baselines without accounting for measured ascent/descent offsets. Long strings receive width-and-height condensation, but empty strings are accepted and there is no equivalent exposed header-fit diagnostic. **Cost:** production consumers still need browser pixel checks for long headers, unusual glyphs, and empty content.

- **Extreme counts have no resource guard.** One-page derivation produces a usable singleton; 40 pages retain the pool-capacity construction and receive budget adjustment. However, page and stack counts have no upper bounds, and `buildPool()` rasterizes every page before allocating particles. **Cost:** large accepted inputs can stall initialization or exhaust resources.

The supplied stub-harness results support default assignment completeness, dense joint demand, malformed checkpoint rejection, and controlled-step restart determinism. They do not establish browser text bounds or the additional configurations above.

Carry-forward cure list: complete field and relationship validation; enforce both formation budgets to feasibility; honor ring delays across phase boundaries; validate derived schedules; expose remaining technique policies; verify actual text bounds; bound initialization resources.

**Body-write status:** filesystem tools failed to start (`codex-code-mode-host` missing), so I could not read `build-record-attempt4.md` or write `lens-reusability.md` and `scores.md`. The score and cure list above remain unfiled.

SCORE: 73
