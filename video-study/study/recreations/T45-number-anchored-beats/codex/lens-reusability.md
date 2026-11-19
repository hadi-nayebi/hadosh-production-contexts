Reusability is substantial but incomplete. **78/100**: this lens clears the 70 floor but does not establish the overall RECREATED tier.

- **−10: Counter cardinality is fixed.** HTML, CSS, `applyVars()`, `init()`, panel fades, and `computeCallout()` assume exactly two counters. A third CONFIG counter reaches a missing `val2` and fails; a single-counter configuration cannot initialize cleanly. URL array merging also retains existing entries when given a shorter array. Cure: generate panels from CONFIG, define the callout’s operands explicitly, and support replacing arrays when changing cardinality.
- **−7: The config-census incorrectly reports zero shaping literals.** The sphere gradient uses `cx-sr/3`, `cy-sr/3`, and `sr/6`. These control highlight position and inner radius; they are visual shaping choices, not structural identities. Cure: expose these ratios in `CONFIG.hero` and correct the census.
- **−5: Timing parameters lack consistency enforcement.** Changing `countDurationMs` leaves checkpoints and reveal times unchanged. `checkpointsOk()` checks ordering and bounds only; it cannot detect a stale count-end checkpoint or a callout appearing before counting finishes. Cure: derive dependent times or validate their relationships, then exercise both shorter and longer count durations.

The required non-unit difference test **passes on source inspection**: ends 750/500 produce `250 LEFTOVER IN 500`. Labels, palette, grouping, easing power, and most hero properties genuinely read CONFIG. However, the reported swap proves one two-counter substitution; it does not substantiate the broader configurability claims.

SCORE: 78
BODY-WRITE: Section 5 Verify reusability finding: computed difference passes; priced cures cover fixed counter cardinality, unconfigured sphere-gradient shaping, and timing consistency gaps.
