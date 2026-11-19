Reusability is strong within the supported content schema, with two gaps in status propagation and tag defaults.

- **Split geometry:** `ratioPct` drives both pane widths, the right pane’s origin, and the divider. Pane-local contents move with their panes. Narrower splits can require typography or vocabulary changes; validation explicitly rejects configurations whose heading pills cannot fit.
- **Panel substitution:** Both sides use the same builder and generic entry arrays. Lists, objects, and provenance pills can be added, removed, reordered, or moved between sides through CONFIG, with independent entrance timing. Object positioning uses the destination pane’s `panelYPct`.
- **Status propagation:** Level colors propagate to elements without color overrides, and canonical terms propagate to pane headings. However, both existing artwork tags have explicit text overrides, so changing the speculative vocabulary leaves “HYPOTHETICAL” unchanged. This limits the requested propagation to every element of a level.
- **New artwork tags:** Construction, sizing, and animation iterate `artworkTags`, supporting additions through data. However, a pill tag relying on its level’s default term fails validation: `pillW(t.text, ...)` accesses `text.length` before construction can apply the fallback. Explicit-text additions work.

These findings follow from the supplied source; the reported checks provide supporting logic observations, not runtime proof.

BODY-WRITE: Resolve artwork-tag text consistently in validation and construction, and represent artwork wording as level-owned vocabulary when status-wide terminology changes must propagate.
SCORE: 84