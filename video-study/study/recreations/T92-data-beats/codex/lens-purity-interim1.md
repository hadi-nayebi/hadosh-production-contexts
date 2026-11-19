Construction purity: **90/100**. No refusal-class violation appears in the supplied source.

All substantive visuals are generated with DOM/SVG code. There are no specimen images, video frames, traced paths, embedded media, or external visual assets. Scene blocks and windows use configured geometry; cards, typography, colors, timing, units, and chart dimensions expose substantial CONFIG controls. The hanging bar correctly derives its height from the percentage value.

The parameter surface has three remaining gaps:

- **Fixed chart topology:** `buildChart()` hard-codes three upper bars and their color roles. Expose a bar-series array and derive the step origin from its length.
- **Fixed chart marks:** question marks are literal `"?"` strings. Move their content into CONFIG.
- **Duplicated statistical meaning:** explicit `units` overrides derivation from `value`, so changing `"1 in 5"` alone leaves the original unit count. Derive both displays from one structured statistic, or validate their agreement.

These are parameterization limitations, not evidence of tracing or embedding. The simplified scene and allocation-model unit row remain procedural constructions; their fidelity belongs to other lenses.

Verification limitation: assessment used the supplied full source. The execution tool failed to start, so I could neither verify the on-disk SHA-256 nor persist the requested return. This score is conditional on the supplied source matching the bound artifact.

BODY-WRITE: none (tool unavailable); consumer must persist this return verbatim at `codex/lens-purity.md`.
SCORE: 90