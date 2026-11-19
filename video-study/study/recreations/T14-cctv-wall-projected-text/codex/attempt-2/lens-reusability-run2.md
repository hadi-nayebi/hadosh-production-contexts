Reusability is strong: configuration controls the dialogue, camera identity/date, speeds, checkpoints, palette, room geometry, typography, glow and most overlay construction. URL overrides cover all three texts, timing and palette. Invalid schedules reject the entire override set, with reasons exposed through the API and DOM attributes.

Wall fitting uses measured widths and line-count height against configured geometry. Long words are hard-split; longer answers can use adjusted duration and checkpoints without changing logic.

Remaining deductions:

- Some shaping choices remain outside configuration: scanline angle, wall alignment, border style and TV font weight.
- Schedule validation applies to URL overrides, but direct production edits to CONFIG bypass it.
- Impossible wall fits report a diagnostic, then enforce the minimum font size despite overflow. Production must inspect that diagnostic; containment is not guaranteed.
- Wrapping does not faithfully handle arbitrary whitespace: repeated spaces disappear, and explicit newlines are not modeled as separate lines for height fitting.
- TV exchange fitting is diagnostic only; longer replacement questions can overflow without rejection or automatic fitting.

The supplied checks support substantial reuse, but browser rendering was unavailable, so actual font measurement and layout remain unverified.

BODY-WRITE: Require validation of the final configuration regardless of input route, configurable remaining visual constants, whitespace-aware wall wrapping, and an observable acceptance gate covering wall and TV containment before production reuse.
SCORE: 87