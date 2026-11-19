**64/100 — Requires another parameterization pass before production can lift it as-is.** The registry and count-derived layout provide a useful foundation, but the build record overstates configuration completeness and override safety.

1. **URL overrides expose only part of CONFIG.** `resolveConfig()` cannot override panel numbers, registry definitions, font family, layout constants, typography, label sizing, or individual appearance timings. **Cost:** production still requires source edits for common branding, lettering, and pacing changes.

2. **Behavioral constants leak into logic.** Examples: SVG `viewBox="0 0 160 100"`, fallback viewport width `360`, label/header shrink increment `0.5`, overflow allowance `34`, label separator `" · "`, number padding width `2`, and generated `"CHAPTER "` / `"tiles"` defaults. CSS also fixes tab placement and stacking (`top:0; left:0; z-index:3`). **Cost:** changing art coordinates, label format, fit policy, or tab placement requires editing machinery outside CONFIG. Structural zeros are reasonable; these authored policies need configuration.

3. **Warnings are console-only.** `_warnings` is logged through `console.warn`; the production surface displays nothing. **Cost:** an operator can unknowingly preview or capture a fallback configuration. This fails the requested visible-warning contract.

4. **Several URL changes are silently normalized or discarded.** `filled=-3` clamps to zero before validation, so no warning survives; values above panel count behave similarly. Empty `panels`/`appearances`, excess panel entries, blank title slots, extra `@` components, and extra appearance fields such as `4:2:99` are silently ignored or partially accepted. Long headers/titles truncate without warnings. **Cost:** accepted output can differ from the requested configuration without an actionable explanation.

5. **Registry lookup can crash from a URL.** `panels=X@constructor` passes `cfg.artRegistry[p.art]` because inherited properties count as registered kinds. Rendering then calls `entry.primitives.map` on an undefined property. `toString` has the same issue. **Cost:** malformed input can stop the entire surface rather than fall back. Require own-property lookup and entry-schema validation.

6. **Art extensibility is partial.** A new named miniature composed of supported primitives needs only registry data—good. A new primitive type requires changing `primSVG()`; unsupported types silently disappear. Only `$ink` and `$accent` resolve as palette tokens. Stroke defaults use `|| 1`, preventing a configured zero width. **Cost:** richer art or broader theme tokens require renderer changes; unsupported data can produce incomplete artwork without warning.

7. **Panel count and appearance count are dynamic, but progress semantics remain implicit.** Nine or sixteen panels and arbitrary appearance counts flow through the layout/timeline without a fixed twelve-panel loop. However, growing the panel list retains the original appearance schedule, so additional chapters never become targets automatically. The dive target is always force-filled, making visible progress exceed `filled` when the target lies outside it. **Cost:** consumers must re-author appearances and understand an undocumented configuration policy to get accurate progress.

8. **Nested configuration lacks validation and geometry guards.** Layout, typography, labels, easing, and registry primitives are unchecked. Even accepted URL settings can yield negative panel widths on sufficiently narrow stages with large gaps and column counts. **Cost:** legitimate reuse combinations can break layout instead of producing a warned fallback.

The next attempt should expose the missing controls, centralize authored constants, validate registry entries and nested settings, and provide an on-surface warning channel. Regression coverage should include the concrete silent-normalization and prototype-key cases above.

SCORE: 64
BODY-WRITE: This verdict records the as-is reuse blockers for practice §5 Verify and prescribes the next attempt’s configuration, registry-validation, visible-warning, and geometry-guard work.
