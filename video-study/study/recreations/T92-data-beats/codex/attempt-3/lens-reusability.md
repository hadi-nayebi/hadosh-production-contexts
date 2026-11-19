Verdict: **86/100 for reusability.** Different pieces can use the existing card/chart vocabulary through CONFIG alone. The remaining weaknesses are incomplete override validation and layout protection.

Findings:

1. **The beat schema supports useful production swaps.** `recreation.html`, `CONFIG.beats`, `stateAt()`, and `showBeat()` support reordered or replaced card/chart beats, each carrying content, year, slot, clear/restoration durations, and dialogue cues. Entrance begins at `graphicEntrance`; settlement begins at `followUp`. `numberSpoken` and `challenge` constrain ordering but do not drive visible or audible dialogue. Production must supply that dialogue separately; new graphic kinds require code.

2. **Displayed values drive the principal numerical graphic correctly.** `hangHeight()` derives signed height from `beat.value`; `buildChart()` places negative values below the beam and positive values above it. `deriveUnits()` gives a displayed “N in D” fraction precedence over fallback units, and `validate()` checks the derived result. Chart comparison bars remain explicitly authored heights in `beats[].bars`, rather than raw observations with a shared numerical scale. This is configurable, though production must calculate those heights.

3. **Array replacement, stagger counts, and HUD years are reusable.** `deepMerge()` supports indexed array merging and explicit `{$replace:[...]}` replacement, allowing shorter series and beat lists. `chartStagesFor()` divides reveal windows by the current beat’s bar count and configured step count; `drawChart()` uses that same beat. `hudYearAt()` selects scene or current-beat year by phase. These paths contain no default-series-count or default-year dependency.

4. **Validation usually stops construction, but malformed-root handling is incomplete.** `PROBLEMS` gates scene/card/chart construction. However, an override of JSON `null` reaches the diagnostic branch and then throws at `CFG.stage`. The later `window.__t92` assignment also accesses `CFG.beats` unguarded. With `beats: {$replace:[null]}`, validation reports the malformed beat, but the export still calls `cycleMs(CFG)`, whose reducer dereferences `b.slotMs`.  
   **Next-attempt cure:** guard root access throughout diagnostics and exports; expose runtime helpers only for valid configurations, or make their invalid-state behavior explicit and safe.

5. **The schema does not validate all production content or geometry semantics.** In `validate()`, `status`, `place`, `claim`, `source`, and card `value` lack string checks. `bars[].fillKey` need only be a string; `buildChart()` silently substitutes `pal.bar` for unknown keys. Most geometry fields need only be finite, permitting negative widths, heights, padding, and gaps.  
   **Next-attempt cure:** validate required/optional content types, palette-key membership, and appropriate positive or nonnegative geometry ranges before construction.

6. **Layout validation protects selected bounds, not arbitrary replacement copy.** `validate()` checks series/steps extents, signed hang space, numeral baseline, unit-row width, and selected stage edges. It does not measure replacement claim/source wrapping, card height, card-to-chart overlap, numeral width, or HUD overflow. The supplied fit measurements concern the default copy only.  
   **Next-attempt cure:** add rendered text/layout checks or define explicit supported content limits with diagnostics. Until then, longer claims, sources, and numerals may require manual CONFIG typography/geometry adjustment.

Limits: Assessed only the supplied source and record, using function/section locations as citations. The binding hash and reported harness passes were not independently verified. No browser rendering or replacement-copy fit was checked.

SCORE: 86
BODY-WRITE: none (read-only run)