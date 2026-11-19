NEUTRAL OWN-CHECK PACKET (check names and results only):
- Swap test (banner text variant, badge position variant, banner colour variant, probed at the final hold state): PASS - variant values in effect; banner at final position.
- Galaxy opacity checks (rendered opacity read from the built document at both galaxy sites): configured reserve 0.45 -> 0.45; reserve variant 0.3 -> 0.3; reserve variant 0.9 -> 0.5. PASS, no site above 0.5 in any case.
- Badge placement checks (applied document attributes at the original position and at a swapped position): text anchor x and y equal the configured badge position at both positions; glyph centre offset equals the dy term only; glyph inside the disc at pop, pulse-mid, and hold probes. PASS.
- Mask structure checks (generated mask element parsed independently): mask units, bounds, background rect, reveal stroke colour/form/width, and attachment of the mask to the region ellipse all as constructed. PASS. Geometric coverage from the mask's applied offset: 0.000 / 0.500 / 1.000 at draw start / midpoint / completion (PIXEL-UNVERIFIED).
- Twinkle period check (effect-level): speck opacity at time t equals opacity at t plus one configured period for every speck; opposite phase at half period. PASS.
- Banner entrance checks: positional offset at entrance start equals the full configured travel distance; offset overshoots past the final position mid-window; offset is 0 at entrance end and at the final hold probe; banner width, height, and font size constant at every probe. PASS.
- Stage aspect check: a configured stage-height variant changes the computed stage height string proportionally. PASS.
- Galaxy arm-count variant check: arm cardinality follows the configured count; default geometry unchanged. PASS. Grid stroke-width variant check: both grid loops follow the configured width. PASS.
- Config consumption census (mutation-based: every CONFIG key perturbed, consumed effect asserted): 103 keys, 103 consumed, 0 unconsumed. PASS.
- Literal census: no content literals outside CONFIG; remaining literals classified as structural (list in the census record). PASS.
- Displayed-state checks: region fully revealed (geometric) with badge standing at the first census probe; banner at final position at full dimensions at the second census probe; banner and badge vertical spans disjoint at hold. PASS.
- Self-start check: the file reaches its scheduled ending under its own startup path with no external caller; the seek helper is a comparison aid only. PASS. Stylesheet parse: all declarations parse. PASS. Syntax check: PASS.
- Purity grep: no specimen media, no external asset loads; the single internal fragment reference is the mask attachment to the generated mask element. Asset inventory: one self-contained file, no external loads.
- Comparison check: one control set drives both sides; mapping recreationMs = videoMs - 500 intact; original side unchanged. PASS.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic/document-structure level.
