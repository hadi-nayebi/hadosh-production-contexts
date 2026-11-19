**86/100 — strong CONFIG-driven reuse, with incomplete validation and a contradicted literal census.**

- **Coverage is broad.** Content, durations, stage size, typography, scene colours, geometry, counts, and four structural builders are configurable. No unapplied CONFIG key is apparent. The reported label, 2000 ms dissolve, palette, and structural swaps provide useful reuse evidence.
- **Timing adapts correctly.** Phase boundaries derive from CONFIG; remaining cycle time becomes the residual A hold. The 2000 ms dissolve fits the cycle and preserves the midpoint. Forward and return durations are independently configurable.
- **Palette coverage has one literal escape.** CSS hardcodes `background:#111` outside CONFIG. It affects the surrounding page, so the “no colour literals outside CONFIG” census claim is false.
- **Invalid configurations do not fully stop execution.** Validation gates builder calls, but stage styling, both layer constructions, initial rendering, and the animation loop still execute. The record overstates refusal behaviour.
- **Validation leaves production gaps.** Infinite stage/type sizes pass; most geometry is unchecked; unknown easing silently becomes linear. Transparent `fieldB` values are accepted even though the rendered-weight guarantee depends on an opaque incoming field.
- **Structural reuse is demonstrated within a bounded vocabulary.** CONFIG can select and reshape the supplied scene templates. Entirely new scene structures require builder code. Swap evidence is logic-level and explicitly pixel-unverified; the separate census file was summarized rather than supplied.

**Next cure:** configure the page background; gate all construction and playback on validation; validate finite geometry, supported easing, and opaque incoming fields; correct and rerun the census.

BODY-WRITE: none (read-only run)
SCORE: 86