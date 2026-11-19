CONFIG covers the principal production swaps: title records and targets, complete chat records, stat cards, counter, framing and cuts, palette, layout, typography, audience count, and animation durations/endpoints. Replacement tables drive variable-length DOM construction; URL overrides support cardinality changes and atomic rejection. The reported 111 checks provide useful logic-level evidence.

Residual defects prevent a full pass on this lens:

- Validation is incomplete. `rotateXDeg` accepts non-finite values; opacity fields accept nonnumeric values; several dimensions accept negatives. Required-field checks omit `speakerBodyMarginPx`, `statValueWeight`, `avatarWeight`, and `counterWeight`, allowing missing values to reach CSS.
- Fit validation is not coherent with every configurable style. `lineHeightNormal` changes the measurement model without setting browser line-height. Padding accepts arbitrary CSS strings while `padPair()` treats them as simple pixel numbers. Changing font family does not ensure matching glyph metrics.
- Title-word overflow uses the remaining screen width instead of the configured title-column width. An indivisible word can therefore pass validation while extending into the chat column.
- Duration rescaling depends on unrelated table parameters: adding only `counter` or `stats` disables checkpoint scaling. `maxIdleTailMs` also stays unscaled, so sufficiently lengthened duration-only overrides reject despite the stated density-preservation policy.
- Optional numeric table fields explicitly supplied blank are silently treated as absent, contradicting the stated whole-override rejection policy for blank numeric fields.

These are parameter-contract defects, independent of motion or visual fidelity. Production can swap ordinary content through CONFIG, but adversarial and style-changing configurations need stronger guarantees.

BODY-WRITE: Carry forward schema-complete validation, browser-consistent fit metrics and title-column bounds, explicit blank-field rejection, and duration-scaling tests covering counter/stat-only overrides and longer durations before clearing the parameterization contract.
SCORE: 83