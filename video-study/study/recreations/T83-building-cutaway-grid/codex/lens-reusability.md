Could not write `codex/lens-reusability.md`: the execution tool failed to start (`codex-code-mode-host` missing). Review text follows.

**Reusability: 80/100 — PIXEL-UNVERIFIED.**

- **Strong CONFIG coverage:** font stack, seeded city geometry, HUD, palette, intensities, grid dimensions, and device geometry are exposed and applied. Nested loops regenerate flats from floor/column counts; filed evidence supports 10 → 6 → 15 flats without per-flat literals.
- **Correct derived arithmetic:** default endHold is 6550 ms. The specified 3-floor/350 ms swap produces 8750 ms while retaining a 14000 ms cycle.
- **Material defect: schedule accounting does not govern animation.** `holdMs` affects derived arithmetic and validity only. Changing it within valid bounds changes no rendered behavior. Pull-back ends at independent `zoomMs`; rings begin at independent `ringStartMs`. Consequently, the calculated phases do not enforce their advertised boundaries.
- **Registry provides extension structure:** `cell.glyph` selects the registered renderer, whose dimensions are CONFIG-driven. However, only one renderer exists; another device requires source editing, and an unknown key throws without a useful validation error.
- **Small completeness gap:** figure corner radius remains a literal `rx="2"`; flat border width relies on SVG’s default. These shaping decisions remain outside CONFIG.

**Next-attempt cures:** make phase boundaries operational or explicitly define independent schedules and remove inert controls; validate timing and registry selections; expose remaining shaping literals. Retain the exact swap tests and add a test proving that changing `holdMs` changes the intended phase behavior.

BODY-WRITE: None; filing `codex/lens-reusability.md` was blocked by the execution-tool startup failure.
SCORE: 80
