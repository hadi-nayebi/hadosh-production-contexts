Reusability is partial: CONFIG controls the split geometry and artwork tags, but pane substitution and status vocabulary still depend on construction details.

- **Split reshaping:** Both pane widths, the right pane’s offset, and the divider derive from `ratioPct`. Pane-local content moves with them. Validation constrains ratios based on pill fit.
- **Panel substitution:** Both panes share a content builder, but construction unconditionally dereferences a left list, right object, and right provenance pill with `.find(...).el`. Removing or swapping those types can crash initialization. A left-side object also needs `left.panelYPct`, which is absent; additional lists receive no configured list font size.
- **Status propagation:** Level colors propagate through `statusLevels`, except where artwork tags override them. Vocabulary does not: “HYPOTHETICAL” and “SPECULATION” are independent text fields despite sharing the speculative level. Changing that level’s vocabulary requires editing each occurrence.
- **New artwork tags:** Supported directly through data. The loop constructs, positions, colors, sizes, and animates additional tags using their explicit entrance times.

The packet supports configuration edits, but provides no runtime evidence of arbitrary pane substitutions. The source itself exposes the dependencies above.

BODY-WRITE: Make every pane entry independently constructible, styled, and timed from its data; remove mandatory type lookups and centralize status vocabulary alongside level colors.
SCORE: 64
