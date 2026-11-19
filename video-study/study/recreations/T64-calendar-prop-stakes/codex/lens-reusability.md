CONFIG covers the main dates, words, palette, geometry, and timings. The supplied swap receipt supports reuse, but accepted configurations can still overflow or diverge from the derived schedule. **PIXEL-UNVERIFIED; source review only.**

Deductions from 100:

- **−9 — Fit validation and rendering disagree.** `allTextFits()` checks fitted sizes for bill kicker, body lines, and coin face, but DOM construction renders those at their original sizes. A 45-character body line passes the estimated width check after shrinking to 9px, then renders at 11px and exceeds the bill’s 252px inner width. Apply the checked sizes to the actual elements.
- **−7 — Vertical text containment is incomplete.** Bill body-line count is unlimited; no check sums bill text height and padding. Header, label, and coin text also lack vertical containment checks. Valid overrides can therefore clip. Validate every text stack against its actual container.
- **−5 — Prop scheduling assumes an unenforced item arrangement.** Validation accepts arbitrary bill/coin order, duplicates, and counts. Rendering staggers by item index, while `propsEnd` budgets only one bill/coin sequence and every bill body uses the same global fill start. Enforce the supported arrangement or derive all phases and completion from the configured items.
- **−4 — Palette validation leaves rendered roles unchecked.** `weekdayInk`, `billInk`, `coinInk`, and connector visibility have no contrast gate. Accepted palette changes can hide these elements. Validate each rendered foreground against its background.
- **−2 — Bounds validation leaves connector geometry unchecked.** `dotDiameterPx` has no upper bound or containment check. A valid oversized value can cover the pages or extend beyond the stage. Validate generated dot bounds and spacing.

No clearly dead declared key was found. The main cure is to make the accepted CONFIG domain match what the renderer actually supports.

BODY-WRITE: none (read-only run)
SCORE: 73
