Verdict: **Reusability 78/100 — clears the 70 lens floor, below 85.** Overall average and improvement over 81.0 require the other four lens scores. Source SHA-256 matches the supplied hash.

Findings:

- **Core refactor earns substantial credit.** Stable IDs, whole-array layout/render, per-exhibit entrances, and ID-resolved connector anchors replace the prior index assumptions (`recreation.html:141–185, 198–199, 335–377, 410–418`). Independent Node probes confirmed reordered exhibits and removal of stamp text both pass checkpoints.
- **Optional elements remain incompletely supported.** Removing the stamp text works, but `note:null` is rejected; `noteRoute:null` throws during validation. Unresolved endpoints produce checkpoint errors, yet startup continues into `build()`, which dereferences the null connector (`104–124, 319–323, 441–449`). Cure: explicit optional-element handling throughout layout/build/render, and stop construction on invalid references.
- **Connector geometry does not follow displayed rotation.** Anchors use unrotated card rectangles, while exhibit wrappers rotate during rendering (`127–132, 177–185, 418`). Cure: transform anchors using the same rotation origin and angle as the displayed exhibit.
- **CONFIG consumption overstates effective control.** `palette.ink` participates in contrast checking but never colors rendered content (`262, 298–390`). `holdMs` checks an independently supplied `cycleMs`; changing it alone does not change playback duration (`192, 229`). Cure: wire the palette key to visible content and derive cycle duration from typing completion plus hold.
- **Exhibit content remains shared by kind.** All portraits share one glyph definition; all other kinds render the same car glyph, without kind validation (`142–155, 343–368`). Cure: per-exhibit content references or glyph overrides, with supported kinds validated.

Limits: Logic/source assessment only; rendered pixels unverified. Supplied own-check totals were not independently reproduced. No other lenses assessed.

Body-write: none (read-only run)

SCORE: 78