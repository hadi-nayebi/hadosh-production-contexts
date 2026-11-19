# T54 attempt 2 — config census (guard-config-census leg v3.1, pre-scoring)
Scope: the NEW attempt's recreation.html only (sha256 02f31dd34dd13fccd3041233578adfb55dddb95fc674a7cfa7644a9f51a36ed4).

## 1. All-literal scan (outside the CONFIG block; script + style, strings stripped)
Numeric literals found: {0, 1, 2, −1, 100, 50, −50} — every one classified **structural**: loop indices/bounds (0, 1, 2, −1), CSS structural percentages (100, 50, −50 in width/height/translate rules). No duration, geometry, colour, or formula-coefficient literal stands outside CONFIG.
Colour literals outside CONFIG: **0** (all colours resolve through CONFIG.palette / fullPlate tokens; the one hex-free exception is none — the SVG namespace URI is an identifier string, not a colour or an asset).
Subject-shaping literals outside CONFIG: **0**.

## 2. Application-site resolution (key → at least one consuming site)
69 top-level CONFIG keys; 115 leaf values walked by the census walk (own-checks suite §12), including nested and array-member keys:
- Data carriers consumed wholesale: `states[]` (48 entries: id/cx/cy/r/ax/ay read by stateMap, layout, timeline, render), `chips[]` (55: name/label/stateId/elect/initials read by resolveChips), `passRegions[]` (id/scale/stateIds read by buildTimeline + labelVisible), `palette.landAlt[]` (indexed in the land render), `glyphWidths` (26 letters + default, read by the initials-width measurement), `plateXShifts[]` (iterated in the plate candidate generation).
- Scalar/token keys: every remaining key resolves to a named site — timing primitives to the timeline derivation, type sizes to text construction, layout/search parameters to their algorithms, fullPlate tokens to the overlay styling, viewBox to stage/SVG geometry. Walk result: **0 unconsumed keys** (raw walk flagged 23 data-carrier members, each verified consumed via its parent structure as listed above).

## 3. CSS-variable setter check
The build uses no CSS variables: stage and overlay styles are assigned directly from CONFIG in script, so the false-negative class (a variable referenced but never set) cannot occur. **0 hits.**

## HIT list
**Empty — PASS for this leg** (0 subject-shaping literals outside CONFIG · 0 unapplied keys · 0 unset CSS variables).
