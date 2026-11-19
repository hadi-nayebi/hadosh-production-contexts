**Not ready to lift as-is.** The registry and count-derived layout support substantial reuse, but the claim that every variable is configurable overstates the surface.

1. **Incomplete URL surface — high cost.** `resolveConfig()` cannot supply registry entries or complete panel objects. `panels=` only changes titles and existing art references; adding custom art requires editing CONFIG in the HTML. A new art kind composed of supported primitives works through registry data, but a new primitive requires modifying both `validPrim()` and `primSVG()`. Production needs a documented extension boundary and a structured configuration input.

2. **Geometry safety depends on assumed widths — high cost.** The relational clamp checks `fallbackStagePx` and the wide breakpoint, not the actual minimum stage width. For example, a narrow stage can still produce negative panel dimensions with accepted columns and gaps. `layout()` only warns; the camera’s 1 px floor masks the invalid geometry. Production embedding needs validation against actual dimensions or a guaranteed minimum width.

3. **Filled count does not equal visible filled panels — medium cost.** `render()` unconditionally fills the dive target through `forceFilledIdx`. The default first appearance therefore displays **five** illustrated panels despite `filled: 4`. This hidden policy changes progress-tracker meaning. Expose it as configuration or explicitly distinguish completed panels from the upcoming target.

4. **Production presentation constants still leak — medium cost.** Header wrap line-height `"1.15"`, warning z-index `"9"` and padding `"4px 8px"`, SVG `preserveAspectRatio="none"`, primitive default stroke width `1`, and default text weight `"normal"` remain outside CONFIG. Geometry thresholds `24`/`12` and gap-reduction step `5` are also hard-coded policy. Palette overrides cover page chrome and selected art tokens, while most miniature colors remain separate registry literals; there is no complete thematic recoloring route.

5. **Malformed input can still change behavior silently — medium cost.** `panels=TITLE@   ` ignores the blank art slot without warning. Long panel numbers are silently truncated to eight characters. Duplicate scalar query parameters silently use the first value. Unknown keys such as `toString` evade the warning because `knownKeys` inherits object properties. These violate the stated visible-warning contract.

6. **Registry validation is incomplete — medium cost.** Optional stroke widths, opacity, transforms, paint values, graph edge width, and text styling are not fully validated. Grid dimensions and repeated-circle counts have no resource ceiling. An entirely rejected registry remains empty, leaving an undefined fallback and blank art. Malformed registry data therefore lacks a reliable, visible recovery path.

7. **Timing and label policies remain coupled — lower cost.** All appearances share the same four durations; individual chapters cannot vary timing through data. Title uppercasing, space-based word splitting, number-only fallback, and nonnegative tab offsets are fixed policies. The latter prevents configuring tabs to protrude beyond the panel corner.

**What passes:** panel count and appearance count are derived rather than fixed at twelve and three. Nine or sixteen panels require no layout surgery; targets are range-checked. Most typography, dimensions, timings, and palette controls are centralized, with substantial warning coverage. These strengths justify reuse after targeted hardening, but source assertions and the supplied 78-check suite do not establish complete override safety.

SCORE: 72
BODY-WRITE: This verdict supplies the consumer’s build-record entry: withhold as-is reuse; next attempt must close configuration gaps, actual-width geometry safety, filled-count semantics, silent override handling, and registry recovery.
