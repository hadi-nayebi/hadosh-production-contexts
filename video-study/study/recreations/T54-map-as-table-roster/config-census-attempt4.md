# T54 attempt 4 — config census (guard-config-census leg v3.1, pre-scoring, on the NEW source)
Scope: recreation.html sha256 `88d9298ff848d8799f96c4e68457d487a84f945f51ba89daf8178321c2a23561` (the attempt's own CONFIG, 81 top-level keys, 674 leaf values walked).

## 1. All-literal scan (outside the CONFIG block; script + style, strings stripped except as noted)
Numeric literals found: {0, 1, 2, −1, 100, 50, −50, 1e-6, 1e-9, 2000} — every one classified **structural**, per-literal:
- 0, 1, 2 — loop indices/bounds and pair-iteration bounds.
- −1 — not-found sentinel in index searches.
- 100, 50, −50 — CSS structural percentages (stage width, centring, centring translate) in the style block.
- 1e-6, 1e-9 — floating-point tolerances in the feasibility/window/displacement assertions (comparison epsilons, not shaping values).
- 2000 — the year inside the SVG namespace URI string (an identifier, not a numeric value).
No duration, geometry, colour, or formula-coefficient literal stands outside CONFIG. Colour literals outside CONFIG: **0** (all colours resolve through CONFIG.palette / fullPlate tokens). Subject-shaping literals outside CONFIG: **0**. Content literals outside CONFIG: **0** (all labels, status text, the accessibility label and the error prefix are CONFIG values consumed by code).

## 2. Application-site resolution (key → at least one consuming site)
81 top-level CONFIG keys; 674 leaf values walked (own-checks suite consumption census, including nested and array-member keys):
- Data carriers consumed wholesale: `states[]` (48 entries: id/cx/cy/r/ax/ay read by stateMap, layout, timeline, render), `chips[]` (55: name/label/stateId/elect read by resolveChips), `passRegions[]` (id/scale/stateIds read by the pass schedule + timeline), `palette.landAlt[]` (indexed in the land render), `textMetrics.widths` (glyph table read by the single measured-text path for plates, tags and initials), `plateXShifts[]` (iterated in plate candidate generation).
- New keys this attempt, each with its consuming site: `autoplayOnLoad` → the browser init startup branch; `maxConcurrentPops` → the Phase C concurrency assertion; `readPerNameMs` → the wave dwell formula and the final-index step derivation; `plateMaxDisplacementUnits` → the plate candidate filter; `plateLeaderWidth`/`plateLeaderOpacity`/`palette.plateLeader` → the leader line's render attributes; `finalIndexBaseMs` → the final-index step derivation; `stageReferenceWidthPx` → the reserve's px→unit conversion default; `textMetrics.profileForWeight` → the Phase B weight-binding check.
- Deleted keys (absence asserted by the suite): `popSpacingRatio`, `finalFullHoldMs`, `finalIndexStepMs`, `dwellFloorMs`, `dwellPerNameMs` — no code path reads a removed key.
- Scalar/token keys: every remaining key resolves to a named site — timing primitives to the timeline derivation, type sizes to text construction, layout/search parameters to their algorithms, fullPlate tokens to the overlay styling (including the CSS line-height assignment) and the derived reserve, viewBox to stage/SVG geometry, policy/localization strings to validation and render. Walk result: **0 unconsumed keys**.

## 3. CSS-variable setter check
The build uses no CSS variables: stage and overlay styles are assigned directly from CONFIG in script, so the false-negative class (a variable referenced but never set) cannot occur. **0 hits.**

## HIT list
**Empty — PASS for this leg** (0 subject-shaping literals outside CONFIG · 0 unapplied keys · 0 unset CSS variables).
