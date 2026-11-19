# T03 — config-census leg · attempt 3 · 2026-11-17

Leg: config completeness of the new attempt's recreation.html (final
sha256 1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96),
run against this attempt's own CONFIG before the re-scoring wave.
Method: full literal scan of the style + script outside the CONFIG
data block, a key→application-site resolution for every CONFIG key
(including value-flow: the key's value must reach the construction it
names), and a consumption assertion per key in the own-check suite
(135 checks, all passing; the census rows below cite the effect each
key was asserted to drive).

## CONFIG keys (23) → application sites + asserted effect
| Key | Application site(s) | Asserted effect |
|---|---|---|
| lines | schedule derivation; line/span construction | clusters and spans follow the configured lines |
| windowMs | schedule derivation (validation + totals) | totalMs follows the window |
| startDelayMs | schedule derivation | first line start follows it |
| linePauseMs | schedule derivation | inter-line gap follows it |
| finalHoldMs | schedule derivation | last end = window − hold |
| specimenSchedule | schedule derivation (specimen mode) | specimen timings come from the table |
| maxVisibleLines | visible-window model; stage reservation | displayed count and reserved height follow it |
| charMs | schedule derivation (rescaling step) | durations rescale around the interval |
| lineSchedule | schedule derivation (authored mode) | authored timings used exactly |
| prompt | line construction; measurement pass | prompt glyph rendered from the key |
| bg | body background setter | stage backdrop color |
| ink | stage color setter | text color |
| accent | prompt color setter | prompt color |
| cursorColor | cursor background setter | cursor color |
| fontFamily | stage font setter; measurement pass | typeface of stage + measurement |
| fontSizePx | font clamp (build + invalidation handler) | base font size |
| fontMinPx | font clamp (both sites) | clamp floor follows the key |
| fontVwFactor | font clamp (both sites) | viewport factor follows the key |
| lineHeight | line style setter; measurement pass | row height follows the key |
| promptGapCh | prompt margin (line + measurement pass) | prompt gap follows the key |
| cursorWidthCh | cursor width setter | cursor width follows the key |
| cursorBlinkMs | cursor animation setter | blink period follows the key |
| stagePadding | body padding setter | stage padding follows the key |

Every key resolves to at least one application site where its value
flows into the construction it names; no key is declaration-only.
SPECIMEN_LINES is classified in print as CONFIG *data* (it feeds
CONFIG.lines), not as a logic literal.

## Literal scan (style + script, outside CONFIG data)
Hex colors outside CONFIG data: 0. Numeric literals outside CONFIG
data, each classified per literal:
- 0 ×66, 1 ×32, 2 ×2 — structural (indices, zero bounds, step count, unit values)
- 55 ×1, 56 ×1, 100 ×3 — blink keyframe percentages (animation shape; the blink period itself is the cursorBlinkMs key)
- 10 ×4 — validation bound (interval-override clamp lower bound) and parse radix
- 1000 ×3 — validation bound (interval-override clamp upper bound: twice in code — the override parser and the schedule derivation — and once in the comment that states the clamp range)
- 14000 ×1, 300 ×1, 900 ×1, 470 ×1 — validation default mirrors: the fallback values used only when the corresponding CONFIG value is invalid; each mirrors that key's CONFIG default exactly
- 0.25 ×1 — overflow policy constant (the pause share cap of the window-containment policy)
- 10000 ×1 — measurement-stage off-screen offset (structural placement)
- 03 ×1 — technique identifier in the header comment (a label, not a logic literal)
- 29 ×1 — specification reference in a comment (UAX #29 segmentation rules)
- 3 ×1, 4 ×1 — step numbers in a comment enumeration of the validation order
- Unicode code-point ranges in the segmentation fallback (0x1F3FB–0x1F3FF, 0x200D, 0x20E3, 0x1F1E6–0x1F1FF, \uFE00–\uFE0F) — segmentation data constants implementing the grapheme rules, classified as data

## CSS-variable setter check
The construction uses no CSS variables: every CONFIG value is applied
through an inline style setter at build time (sites in the table
above). There is no var() reference whose setter could be missing.
Result: 0 unassigned-variable findings.

## HIT list
Empty — PASS for this leg. No subject-shaping literal stands outside
CONFIG unclassified; no CONFIG key is unapplied; no CSS-variable
setter is missing. The validation default mirrors and the overflow
policy constant are printed above with their classifications so a
reader who prices them differently can see exactly what was decided.
