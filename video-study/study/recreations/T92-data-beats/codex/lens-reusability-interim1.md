Reusability score: **78/100**. The CONFIG surface supports substantial reuse, but several overrides produce inconsistent data or visuals. This assessment uses the supplied source; filesystem access failed, so I could not verify the bound hash, run browser tests, or file the return.

What works:

- The card/chart union supports reordered and appended beats with independent claims, sources, values, and lead times.
- Typography, palette, scene, and most geometry are configurable.
- Deep merging preserves unspecified nested fields and supports partial per-index array overrides.
- Hanging-bar height derives from the percentage magnitude: −17% → 37.4 px; −25% → 55 px.

Required cures for the next attempt:

1. **Repair the HUD year transition.** `showBeat()` sets `evidenceYear`, but the lead phase overwrites it with `sceneYear`. Enter and hold never restore it. The first evidence card therefore retains 2037 after its lead. Set the year from the current phase every frame, and define whether evidence uses `beat.year` or the global year.

2. **Provide array replacement semantics.** Per-index merging cannot shorten `beats` or `geom.blocks`; `beats: []` preserves every default beat. Add an explicit replacement mechanism while retaining partial index updates.

3. **Make chart semantics configurable.** `Math.abs()` renders positive percentages as losses below the beam. Non-percentage values silently become zero-height bars. Define supported signed values and units, derive direction accordingly, and reject unsupported input. The three upper bars and literal question marks also require configurable data if production must change the comparison.

4. **Prevent stale unit counts.** Changing the default card’s `value` to `"2 in 7"` preserves its inherited `{total:5, marked:1}`, which takes precedence over parsing. Establish one authoritative representation and validate agreement between displayed value and units.

5. **Validate timing and schema.** Reject empty beat lists, unknown kinds, nonpositive durations, invalid unit counts, and lead-plus-enter durations exceeding a slot. Currently unknown kinds silently become cards, and invalid timing can prevent a beat from settling.

6. **Define layout limits and overflow handling.** Longer claims, more units, or larger percentages can collide or clip. At −25%, the numeral baseline reaches approximately 169.8 px inside a 170 px SVG, leaving essentially no descender margin. Supply content limits or derive sufficient layout space.

Production can change ordinary content and styling through CONFIG today. Reliable changes to beat count, chart meaning, and content scale still need machinery changes.

BODY-WRITE: none (read-only run); `codex/lens-reusability.md` was not written because filesystem tooling failed. Consumer must persist this return verbatim.
SCORE: 78