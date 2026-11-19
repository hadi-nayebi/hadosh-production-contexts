Reusability does **not pass** this attempt: **66/100**.

Content, palette, font, shelf icons, and beat arrivals are configurable. Branch geometry, node positions, text offsets, sizing, opacity, and context placement also have CONFIG ownership.

Production cannot yet re-drive the full composition cleanly:

- **Override coverage is incomplete.** `?cfg=` ignores `timing`, `stage`, `typeSize`, and `geom`. Production cannot change completion timing, branch geometry, node positions, text placement, or intensity through that surface.
- **Accepted beat counts exceed layout capacity.** Overrides accept six beats, but only three node positions and offset pairs exist. Beats four through six reuse the third position and overlap.
- **Timing validation lacks relationships.** Accepted arrivals can fall beyond the loop and never appear. Completion can precede a lamp-counter’s arrival. `timing.totalMs` is unused; the loop actually uses `settleMs + endHoldMs`.
- **Completion behavior is subject-specific.** Every `lamp-counter` receives its counter at one global `settleMs`. Individual beats cannot declare their own completion time or component sequence.
- **Some shaping literals lack declared ownership.** Projection insets and figure proportions remain embedded in rendering code. Glyph geometry can reasonably belong to a fixed icon library, but that ownership and customization boundary need documenting.

Next attempt: expose and validate the missing override groups; require a position and text offset per accepted beat; validate timing relationships against one authoritative duration; and make component completion a per-beat configuration.

Assessment is source-only and limited to reusability.

BODY-WRITE: Filing `codex/lens-reusability.md` was blocked because the execution tool could not start (`codex-code-mode-host` missing). No file was written; this response contains the intended review.
SCORE: 66
