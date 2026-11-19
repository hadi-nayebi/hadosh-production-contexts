Timing/tempo lens: **76/100**. Source-based assessment; PIXEL-UNVERIFIED.

Bound artifact: `5513a091c048b30a54f3e3c3893c3992db6a8ffd9585f1272a5373a6ed1a7d67`.

Derived timeline:

| Phase | Recreation | Measured reference |
|---|---:|---|
| First stack fully popped / tag complete | 1.02 / 1.60 s | Both complete at 0 s |
| Second stack starts | 2.00 s | Enters around 2–3 s |
| Second stack fully popped / tag complete | 3.02 / 3.60 s | Both complete around 3 s |
| Complete-state hold | 3.60–14.00 s | Both hold around 3–10 s; comparison extension to 14 s |
| Playback endpoint | 14.00 s | 14 s comparison segment |

Priced deductions and cures:

- **−18: Opening state mismatches the measured window.** At `render(0)`, even the first row has zero opacity; the first complete stack and readable tag arrive only after 1.60 s. **Cure:** initialize the first stack and tag fully complete at zero, retaining any allocation demonstration as an explicitly separate mode.
- **−4: Second entry finishes late.** Its 2 s onset fits the entry zone, but its tag continues appearing until 3.60 s, consuming approximately 0.60 s of the reference’s complete-state hold. **Cure:** finish the second stack and tag by approximately 3 s while preserving its entry within 2–3 s.
- **−2: Allocation cadence is plausible but incompletely justified.** Five bottom-to-top rows at 220 ms intervals, with 140 ms pops, form a coherent model. Geometry supports the row order and count; it does not derive the chosen intervals or 500 ms tag entrance. **Cure:** document those durations as design allocations constrained by the measured entry window, rather than measured source timings.

The 10.40 s complete-state hold dominates playback, both stacks finish well inside the window, and the configured endpoint is exactly 14 s. Holding beyond the reference’s cut at approximately 10 s is the declared comparison convention and receives no deduction. `holdMs: 4000` checks a minimum hold; the actual hold derives from the endpoint minus build completion.

This lens clears the 70 floor but is below 85; it cannot establish the five-lens tier verdict.

Body-write: none (read-only run). Consumer to persist this return verbatim at `hidden_files/study/recreations/T66-money-stacks-sourced-totals/codex/lens-timing.md`.

SCORE: 76
