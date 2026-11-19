Reusability is partial: CONFIG supports vocabulary, colors, existing tag positions, SVG geometry, and entrance timings, but production cannot reliably reshape the split or substitute panel contents through CONFIG alone.

Defects and priced cures:

1. **`split.ratioPct` moves only the divider.** Both panes remain full-stage `.layer` elements; their contents use independent stage-relative coordinates. Changing 50→35 does not resize either pane or reposition its content. Derive pane bounds from the ratio and express each pane’s content in local coordinates.

2. **`split.right.panelYPct` is unused.** The wave/barrier object occupies a full-stage SVG using absolute path coordinates; its configured panel position has no effect. Apply right-panel bounds to an object container and fit its SVG within those bounds. `panelWPct` currently sizes only the provenance pill, making its apparent panel-wide meaning misleading.

3. **`artworkTags[].level` is unused.** Status vocabulary and colors are repeated per tag rather than resolved through a shared status definition. Replacing “speculative” terminology across production containers requires editing individual records. Add a status registry keyed by level, with optional per-instance overrides.

4. **Tag identity is coupled to checkpoint names.** `render()` reads `CONFIG.checkpoints[tag.id]`; a newly configured tag silently receives an undefined start unless another CONFIG branch is updated correctly. Give each tag an explicit entrance time or validated checkpoint reference. Reject missing references before playback.

5. **Shaping literals remain outside CONFIG.** `.pill` fixes `letter-spacing:.02em`; `.smalltag` fixes `.14em`; `#subtitle` declares `.85` opacity; `#divider` fixes dashed styling. The subtitle opacity is subsequently overwritten by `render()`, so it is ineffective even as a default. Expose tracking, target opacity, and divider style through CONFIG and apply them consistently.

6. **Panel content remains structurally asymmetric.** The left side accepts list items; the right side accepts only a wave path, barrier, and provenance pill. Swapping the settled list to the right or using a list on both sides requires construction-code edits. Use a shared pane-content schema with configurable content types.

The supplied swap test demonstrates substitutions within the existing composition. It does not establish split-ratio reuse, status-level propagation, new-tag extensibility, or interchangeable panel content. The census claim of zero unapplied keys is contradicted by `artworkTags[].level` and `split.right.panelYPct`.

PIXEL-UNVERIFIED incurs no separate deduction under this lens. The defects above follow directly from code inspection.

SCORE: 62
BODY-WRITE: This return records the reusability verdict, two unapplied CONFIG fields, split-layout coupling, remaining shaping literals, and six concrete cures for the next attempt.
