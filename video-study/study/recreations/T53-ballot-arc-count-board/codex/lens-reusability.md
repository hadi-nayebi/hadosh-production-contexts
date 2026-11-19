Lens: reusability/parameterization  
Artifact binding: `recreation.html` SHA-256 `c6f4a29b3a535b82056f64b5236e28b6b991de8228b490bab244f185a3866166`  
Assessment: source-based; visual claims PIXEL-UNVERIFIED.

**74/100 — above this lens’s 70 floor, with material swap defects.** This lens alone cannot establish RECREATED tier.

The core has useful reuse boundaries: generated ballots and column sectors, configurable geometry and cadence, and pure layout/state functions. The reported 40-unit swap supports re-derived remainder, threshold angle, fill completion, and sweep targeting. Source inspection supports those mechanisms. The 38 passing checks are build-record evidence; I could not independently execute them.

Priced deductions and cures:

- **−10: Segment timing depends on specimen bracket values.** `segmentBracketAt` hides value `19` and delays value `9`. In the recorded swap, `9` becomes “still needs” and receives the against-bracket delay; the actual against value `4` appears at entry. The changed later-state value `16` also appears at entry. **Cure:** configure stable bracket IDs, act membership, and appearance anchors; test swapped segment flags at entry, six seconds, and hold.
- **−6: Bracket annotations require redundant manual maintenance.** Values and arc fractions remain independently supplied. Threshold angle re-derives, but the “to win” bracket does not follow it automatically; column/count changes likewise do not update dependent spans or needs. The swap report checks bracket values without demonstrating corresponding fraction changes. **Cure:** support expressions or semantic anchors derived from threshold and column totals, with explicit overrides where needed.
- **−4: Runtime overrides cannot reduce array cardinality.** `deepMerge` preserves trailing default entries when shorter `columns`, `brackets`, or card-line arrays are supplied. **Cure:** replace arrays wholesale or provide explicit keyed replacement/deletion semantics; verify fewer columns and brackets through `effectiveConfig`.
- **−4: Configuration validity is insufficiently guarded.** Multiple unspecified columns each receive the full remainder; overallocated counts and incompatible row arrays are not rejected before rendering. `checkpointsOk` is exposed but never enforced during initialization. **Cure:** validate counts, remainder ownership, row dimensions, ranges, and timing before computing/rendering.
- **−2: Palette and sizing are incomplete CONFIG surfaces.** Card colors, typography, position, and width remain literals, alongside several board and box offsets. **Cure:** expose those roles and dimensions or derive them from stage and geometry settings.

The next attempt should prioritize semantic bracket scheduling and a swap that changes array lengths while checking both acts. Preserve the existing derived count, threshold, cadence, and sweep machinery.

Filing was blocked: this session has read-only filesystem permissions, and the execution tool failed to start. No return file was written.

SCORE: 74
BODY-WRITE: None; intended destination codex/lens-reusability.md.
