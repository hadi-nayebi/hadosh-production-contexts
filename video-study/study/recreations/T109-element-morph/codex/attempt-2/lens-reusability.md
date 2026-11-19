VERDICT: PASS on reusability/parameterization — 88/100. The requested title, duration, and palette swaps are supported by CONFIG alone.

Findings:
- Strong parameter coverage: `CONFIG.sceneA`, `sceneB`, `countdown`, `palette`, `morph`, `stage`, and `type` control the visible content, geometry, timing, and shaping. `render()` dispatches each correspondence entry through `BEHAVIOURS[entry.mode]`; those handlers consume its stagger and relevant destination. The build record’s “Swap test” reports successful title, morph-duration, and field-colour changes; the supplied code supports those paths.
- Correspondence reuse has boundaries. In `BEHAVIOURS`, collapse handlers ignore `entry.b`; `color-interpolate` always modifies `field`, regardless of `entry.a`; and `deform-to-cluster` always interpolates from `P.cardA`, even if reassigned to another source. Triangle reveal remains separately driven by `triGrowth()`. For broader mapping reuse, resolve source colours and destination properties through explicit registries, and validate compatible source/mode/destination combinations.
- Validation protects the cycle budget and collapse stagger constraints, but unknown modes silently skip execution in `render()`. Unsupported source names can fail when handlers access `GEOS`. Reveal ordering and denominator bounds are also unchecked. A next attempt should reject these configurations with named validation problems.
- The literal census needs qualification: outside CONFIG, CSS fixes the page background to `#111`, while layout and behaviour retain structural choices such as centred countdown text and first-triangle-versus-rest reveal. These do not block the requested swaps, but “all values in CONFIG” overstates the scope.

Limits: Assessed only the supplied stream, as this run explicitly requires, overriding the general disk-reading instruction. No browser rendering or harness execution performed; the reported 95-leaf census and mutation-test results remain UNVERIFIED.

BODY-WRITE: none (read-only run); consuming seat files this return verbatim under `hidden_files/study/recreations/T109-element-morph/codex/attempt-2/` at this lens’s return path; filename was not supplied.
SCORE: 88