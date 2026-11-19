**Reusability: 83/100.** Production can make substantial variants through CONFIG and URL overrides, but geometry changes still require manual synchronization. This assessment uses the supplied source and logic-check packet; rendered pixels remain unverified.

- **Broad CONFIG coverage:** component placement and shaping, palette, label sizing, medallion, counts, ornament, and flicker have named controls. One recursive renderer propagates changes through every level. Candle and button spacing derives from counts, reducing manual layout work.
- **Geometry dependencies remain manual (−7):** `levelScale` duplicates frame-width × interior-width geometry; zoom anchors duplicate the frame centre. Comments and default-value assertions document these relationships but do not enforce them for new configurations. Derive these values from geometry at initialization.
- **Typography and layout coverage is incomplete (−3):** the font family remains hardcoded in CSS. The sizing models assume 16:9 while the stage fills its container without enforcing that ratio. Expose the font and stage ratio, and make the models consume the same dimensions as construction.
- **Checkpoint repair is strong, with an input-contract gap (−3):** role-preserving repair, duration-aware fallback, effective tables, and surfaced diagnostics support reuse well. However, direct CONFIG edits to duration or minimum separation lack finite/positive validation; zero or negative separation can defeat the promised strict ordering. Validate policy inputs before repair.
- **Override validation is useful but permissive (−4):** invalid colors and non-finite numbers are reported, but `parseFloat` accepts values such as `4junk`; depth/count truncation and clamping happen silently. Repeated parsing can also duplicate rejection messages. Parse each parameter once, require a complete numeric value, and report requested versus effective values.

The supplied 47 passing logic checks support the existing configuration and tested swaps. They do not establish that arbitrary CONFIG changes preserve these dependencies. The next attempt should prioritize derived geometry and a single validated configuration-resolution step.

SCORE: 83
BODY-WRITE: This return supplies the verbatim codex/attempt-2/lens-reusability.md filing and the scores.md reusability entry: 83/100, with findings and next-attempt cures.
