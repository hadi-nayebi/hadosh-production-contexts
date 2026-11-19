The default gag is likely readable at 360 px, but the evidence does not establish effortless reading. The 14 px option floor, bold title hierarchy, numbered choices, reserved selection marker, and contrasting green/orange selections support following the escalating requests. No rendered phone-size proof confirms those strengths.

The fit model has material gaps:

- It measures bold text, but approximates the fixed-width marker box and omits option-row horizontal padding from available text width. This is not an exact measurement of the displayed row.
- `ceil(textWidth / innerWidth)` does not model browser word wrapping or the inline marker’s effect on line breaks. Its two-line claims remain estimates.
- Rejected text is still displayed with `nowrap`; rejection records a warning without preventing overflow. The explicit long-text policy therefore bounds the claim more clearly than it bounds actual rendering.
- `fitsHeight` compares modal height with the whole stage, ignoring its 28% top offset. A nominally passing modal can extend below the stage.
- The title size cap can override the promised title/option hierarchy on short stages.

For this lens to pass confidently, the next attempt should carry rendered 360 px evidence for all three requests, selected and unselected rows, and a wrapped fixture, with actual row bounds and bottom-edge clearance checked.

BODY-WRITE: Replace approximate row/wrap fit claims with browser-measured bounds, enforce rejected-content handling, and verify phone readability within the space remaining below the modal’s top offset.
SCORE: 78