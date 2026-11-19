Production can swap the main content and cadence through CONFIG, but the claim that every shaping variable is configurable is incomplete.

Strengths:
- Complete records drive title lines, highlight targets, chat metadata and timing, stat cards, counter, initial framing, and cuts.
- DOM construction follows table lengths. URL overrides support different line/message/cut counts, including zero messages.
- Capacity limits, ordered timestamps, highlight indices, and event tails have explicit rejection policies. The reported cardinality tests provide useful coverage.

Residual defects:
- Shaping literals remain outside CONFIG: screen perspective/rotation/shadows, stat background/border, word padding, avatar size/color, chat transform origin, speaker proportions, and several typography weights, spacings, and opacities.
- Capacity limits do not establish content fit. Accepted long titles, sender names, chat text, or stat values can overflow or overlap; no measured fit, reflow, or rejection policy handles them. Modelled bounds do not validate actual content geometry.
- Validation can throw instead of returning errors: a null cut is flagged initially, then dereferenced in the framing-distinction loop. This also breaks graceful atomic override rejection for such malformed configurations.
- Numeric URL parsing accepts partial strings such as `popMs=220junk`; nonnumeric values can be silently ignored while other overrides commit. That weakens the documented all-or-nothing policy.
- Required layout/detail fields, typography ranges, color validity, positive pop scales, and nonnegative capacity limits lack comprehensive validation.

The reported passing checks support reusable table construction, but do not close these configuration-contract gaps.

BODY-WRITE: Carry forward a complete shaping-variable inventory, exception-safe schema validation, strict URL numeric parsing, and tested content-fit policies before declaring CONFIG-only production reuse complete.
SCORE: 78
