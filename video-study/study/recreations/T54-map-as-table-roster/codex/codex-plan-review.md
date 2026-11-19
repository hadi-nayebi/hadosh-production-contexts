1. **Convergent defect analogue — REVISE.** `placeMs` separates arrivals, not persistent chip positions. Slower placement cannot prevent the final 55-chip roster from colliding. With radius 13, chip centers need at least 26 viewBox units of separation; labels need a separate bounding-box test. Multiple chips sharing a `stateId` would coincide unless placement includes a deterministic offset rule. Record that rule and collision checks for both 55 and 56 chips, including labels and viewport edges at 360 px. Packing is plausible; the current cure does not establish it.

2. **Owner’s catches — REVISE.**
   - **Figure-ground:** named palette fields do not establish readable separation. Check label contrast against its actual background, chip separation from land, and the swapped land color `#4a3352`. State the label visibility policy explicitly.
   - **Phase exclusivity:** `{stateIds, atMs, scale}` supplies zoom starts but no ownership or completion rule. Define one active camera transform, deterministic handoffs, and precedence when placement, zooms, and the full-roster transition meet. At `fullAtMs`, the full-roster state must own the stage without a lingering zoom.

3. **Parameterization reality — REVISE.** The amended schema governs: chips resolve through `stateId`; no chip-level `x/y`, `anchor`, obsolete `region`, or index-specific placement may remain. The swap fixtures must name valid state IDs, including the appended chip’s “spare” location. Validate missing IDs, empty zoom targets, and repeated state IDs.

   Derived timing is clear:

   | Configuration | `fullAtMs` |
   |---|---:|
   | 55 × 240 + 800 | 14,000 ms |
   | 56 × 110 + 800 | 6,960 ms |

   The compressed schedule exposes another hardcoded accident: unchanged zoom `atMs` values may now fall after the full-roster transition. Define whether they rescale, are bounded, or are rejected by validation. The binding swap must exercise that policy. Verify changed labels, appended-chip placement, palette propagation, and final state from CONFIG alone.

4. **Bar arithmetic — prediction honest; passing unproven.** Readability is a credible minimum lens given unresolved density and T17’s precedent. Five lenses require a total of at least **425**, with every lens at least **70**. A readability score of 70 requires the other four to average **88.75**. Neither T17 attempt passes; T45 establishes no map-density guarantee. Logic checks can establish timing and collision arithmetic, but cannot establish visual readability. Keep visual conclusions **PIXEL-UNVERIFIED**.

5. **Size discipline — retain scope.** The cures belong within placement, camera sequencing, and full-roster layout. Abstract blobs remain appropriate; traced boundaries and a whole-scene rebuild are unnecessary.

**VERDICT: REVISE — specify persistent collision-free placement and label behavior; define exclusive camera ownership and compressed-timing policy; make swap fixtures schema-valid; record geometry and contrast checks before Execute.**

Review uses the supplied Plan text; filesystem inspection was unavailable.

Body-write: none (read-only run)
