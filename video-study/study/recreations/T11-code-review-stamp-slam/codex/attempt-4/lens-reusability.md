SCORE under this lens: **72/100**.

CONFIG covers and consumes the main timing, content, geometry, typography, and color controls. URL overrides use a candidate copy, reject duplicate/empty recognized parameters, validate before adoption, and expose rejection reasons through `window.__T11_REJECTED__`. This provides a practical basic swap surface.

Remaining deductions from the supplied source:

- **Validation accepts unsafe dimensions.** `archCols` and `archRows` only require `> 0`, accepting numeric strings, fractions, and `Infinity`. Infinite dimensions can make arch construction loop indefinitely.
- **Nested validation is incomplete.** `overrideLimits` members receive no scalar validation. Stamp positions accept coercible strings and `null`; border and padding accept `Infinity`. Sparse arrays escape `forEach` checks and can subsequently break rendering.
- **Edited CONFIG bypasses validation at startup.** Only URL candidates pass through `validateConfig`; direct CONFIG swaps immediately reach timeline computation and DOM construction.
- **Technique styling remains outside CONFIG.** Card and reviewer gaps, panel padding and radii, stamp letter spacing, and other visible layout choices remain CSS literals.
- **Strictness and observability have limits.** Unknown URL parameters are silently ignored. Rejections are observable through a console global, with no visible swap-test feedback or supported configuration replacement API.

The stamp-boundary check also adds `cardStart` twice in its comparison, weakening that validation guard for later cards.

File updates could not be performed: the execution tool failed to start because its host executable was missing. These findings therefore remain in this return for the practice job to file; no build record or `scores.md` was changed.

SCORE: 72
BODY-WRITE: Return records consumed CONFIG coverage and atomic observable URL adoption, with deductions for unsafe dimensions, incomplete nested validation, startup validation bypass, stranded CSS variables, ignored unknown parameters, and the stamp-boundary guard error; filesystem filing remains outstanding.