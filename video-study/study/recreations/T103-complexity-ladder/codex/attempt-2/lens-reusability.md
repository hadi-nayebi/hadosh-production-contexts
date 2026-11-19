Reusability/parameterization: **88/100 — clears this lens’s ≥70 floor.**

- **Both acts are configuration-driven.** Act 1 derives its phase boundaries and marked row from `seg` and `marker.startRow`. Act 2 derives traversal, cycle length, return gaps and terminal hold from row count, start row and allocated durations. Neither assumes three rows.
- **Content and appearance transfer cleanly.** Row names, items, marker shape/colour, palette, typography, bullets and geometry come from configuration. `rowHeight()`, `rowTops()` and `stageHeight()` adapt vertical layout to different item counts.
- **−8: override validation is incomplete.** `validateConfig()` omits `stage`, `type`, `geom`, `palette`, marker shape, act selection and item element types. Accepted overrides such as `stage: null` can crash construction; an unknown act silently uses segment behaviour. The reported rejection tests establish only partial protection.
- **−4: longer replacement content needs manual fitting.** Fixed width, `white-space: nowrap` and stage clipping can truncate different names or items. Configuration exposes the adjustment knobs, but provides no overflow rejection or automatic fitting.

A next attempt should validate every configuration group and enum, reject malformed overrides atomically, and add an explicit text-fitting policy. Keep the existing separation between the measured segment act and allocated stepping act.

Filing was blocked because the execution tool failed to start; no local files were changed.

BODY-WRITE: None; assessment returned in chat, with no attempt record or scores.md update filed.
SCORE: 88