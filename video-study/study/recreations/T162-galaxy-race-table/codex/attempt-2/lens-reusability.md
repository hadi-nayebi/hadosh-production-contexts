Verdict: PASS for reusability. CONFIG supports a different crowd-arrival board within the supplied glyph vocabulary. Overall wave passage is not assessed.

Findings:
- **Marker and glyph reuse passes.** The renderer iterates `cfg.markers`, consuming each entry’s position, onset, icon and colour. `glyphSpecs(m0.icon, …, cfg.pin.headR, …)` selects shared glyph geometry by icon key; its dimensions and strokes derive from radius `r`. No marker has a dedicated literal drawing branch.
- **Board components are configurable.** `armPath` consumes disc geometry and arm coefficients; `speckField` consumes count, seed, radius range and disc bounds. Rendering consumes bubble text, attachment, geometry and timing, plus reflection gap, depth and opacity.
- **Filed swap evidence supports reuse.** The supplied swap report records four markers, replacement bubble text “Anyone else?”, core colour `#57c7e8`, and all four entrances complete at 8000 ms without exception. This establishes the requested state-level swap; it does not establish rendered pixel correctness.
- **Minor robustness gaps remain.** Bubble construction dereferences `host.x` without validating `attachIndex`; unknown icon keys silently produce empty glyphs. Cure: validate CONFIG before construction and provide explicit errors or documented fallbacks. CSS also fixes stage proportions at `56.25vw` despite configurable stage dimensions; derive that ratio from `stageW` and `stageH` for reliable dimension swaps.

Limits: Supplied text only; no tools used. Swap execution and visual output were not independently verified. No blocking cure for the specified valid four-marker swap.

SCORE: 93
BODY-WRITE: none (read-only run); return designated for codex/attempt-2/lens-reusability.md and SCORE extraction into scores.md.