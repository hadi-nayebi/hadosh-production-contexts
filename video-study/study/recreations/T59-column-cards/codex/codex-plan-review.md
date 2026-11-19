**Verdict: REVISE before Execute.** The composition fits the stated scope, but the plan leaves its main failure conditions unenforced.

1. **Disproportion by construction:** Default widths total exactly **360px**: 300 + 8 + 52. This leaves no room for outer padding, borders outside border-box sizing, or margins. The swap totals **296px**: 236 + 8 + 52. Specify `box-sizing`, centering, overflow handling, and a validated relationship between card and count dimensions. CONFIG-driven dimensions alone do not guarantee readable disproportion.

2. **Figure-ground contrast:** The palette separates the two surfaces, but the dark count block may dominate the pale card. Define measurable checks for text contrast, count typography, and relative visual prominence, then inspect both default and swapped compositions at 360px. Color separation alone does not establish the intended hierarchy.

3. **Phase exclusivity:** “After last line” needs an executable definition. Derive every phase from one clock: line starts, line animation completion, count entry, joint hold, and fade. Count entry must follow the final line’s **completed landing**, including its animation duration. Define how `holdMs`, the approximate 11s fade, and `durationMs` interact when line count or cadence changes.

4. **Parameterization reality:** Likely hiding places are CSS width/min-width/max-width, padding, gaps, transforms, font sizes, line heights, and fixed child selectors. Generate lines from `CONFIG.card.lines`; bind geometric sizing to `CONFIG.layout`; explicitly derive typography and spacing from those dimensions. Record measured fit for five lines inside the unchanged 168px card height, including title and padding.

5. **Bar arithmetic and predicted stuck lens:** Reusability is an honest risk given T38’s **76.0 / min 68** and T02’s **75.8 / min 48**, but it is not the only exposed lens: phone readability and timing remain unresolved. Require **average ≥85 and every lens ≥70** on the identical artifact hash. Those family failures support scrutiny, not a predicted pass.

6. **Size discipline:** **Confirmed.** Build only the disproportion card and opposing count block. T54’s map remains outside this item; the opening interval does not authorize rebuilding it.

7. **Exact swap and phone-width failure:** Preserve every specified substitution. The build record must show both width equations, actual rendered bounds, five-line fit, absence of clipping, and sequential phase evidence. Verify that **5 versus 24** still reads immediately with the 236px card. A purity grep cannot establish layout binding or visual success by itself.

**Named cures:** record the layout constraints and fit rules; replace narrative timing with a single derived phase schedule; define typography derivation and figure-ground verification; retain the exact swap as a mandatory gate.

The filesystem tool failed before any files could be read or written. This review uses the supplied excerpts; the consumer must persist it verbatim to `hidden_files/study/recreations/T59-column-cards/codex/codex-plan-review.md`.

BODY-WRITE: none (read-only run); no file was written.
