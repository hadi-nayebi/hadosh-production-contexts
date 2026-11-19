**Verdict: REVISE before scoring.** The supplied construction has a deterministic failure in the advertised two-to-three-band swap. Readability remains the likely minimum lens, but reusability currently carries the stronger failure.

1. **Convergent defect / T57 cure:** The particle reserve defect does not apply to this DOM construction. The card shell, title, and rule share their parent’s entrance progress, making their entrance one unit. Bands deliberately reveal afterward. This addresses the stated T57 entrance cure; measured readability still requires rendered evidence.

2. **Owner catches:** Foreground/background separation is configurable color styling, with no contrast constraint. A valid override can make text disappear against its surface. Phrase exclusivity is inapplicable to this cumulative ladder: earlier bands intentionally remain visible. If discrete reveal intervals are required, the validator does not enforce `bandMs >= bandAnimMs`.

3. **Parameterization — concrete blocker:** With three bands and unchanged timing:

   | Event | Time |
   |---|---:|
   | Third band starts | 8,100 ms |
   | Third band settles | 8,450 ms |
   | Hold ends | 13,450 ms |
   | Fade ends | **14,050 ms** |

   That exceeds `durationMs: 14000`, so `configOk()` rejects it. Recovery then executes `CONFIG = …` despite `CONFIG` being declared `const`, throwing a `TypeError` before construction completes. The claimed swap proof therefore needs its exact override recorded: a bands-only swap fails.

   **Required cure:** correct the configuration recovery path and explicitly choose whether duration expands with band count or insufficient timing is rejected. Verify both a bands-only three-band swap and an invalid override.

4. **Readability / fit:** The fit model does not guarantee DOM fit. It measures the entire band at weight 700 while rendering ranges at 800; its word wrapper does not model CSS breaking of oversized words. Title fitting stops at its minimum even if the title still overflows, then `overflow: hidden` clips it. `bandMinPx` is unused. Vertical bounds and calendar text fit are not validated. Thus the reported zero-HIT census cannot establish fit across accepted configurations.

   **Required cure:** measure final DOM bounds and clipping for the default, the actual third-band text, a long title, and long range/meaning strings. Reject unsupported content or provide a verified fitting behavior.

5. **Bar arithmetic:** Readability is an honest predicted minimum given T57’s filed minimum of 58. T59/T38 averages of 86.8 offer limited margin above 85; they do not establish this item’s floor. The present configuration crash also prevents a defensible reusability prediction of ≥70. No numeric score is justified by this source inspection.

6. **Size discipline:** The ladder plus a small, disableable calendar remains appropriately scoped. No additional ornament is needed.

**Evidence limit:** This attack used the supplied source and family summary. The referenced RUN sections, Observe record, cure files, amendments, and rendered artifact were unavailable; filesystem access failed. This is a construction review, not visual clearance.

BODY-WRITE: none (read-only run). Consumer: Cycle 013 Wave 11 T68 RUN.md §2 Plan record must persist this return verbatim.
