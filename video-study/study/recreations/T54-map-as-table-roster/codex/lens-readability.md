# T54 — Readability lens

Bound artifact: `recreation.html`  
SHA256: `00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704`

**Verdict: below the 70-point lens floor; this attempt cannot qualify as RECREATED.** Evidence is source and arithmetic only. All visual findings are **PIXEL-UNVERIFIED**.

The palette provides a credible separation system: light discs with white rings against colored land, dark initials on discs, and white names on dark plates. Regional zooms enlarge label text to approximately 16–19 px at a 360 px stage width. These are useful foundations, but they do not establish a readable completed roster.

Deductions from 100:

- **−16 — Most completed-roster identities are unavailable.** At `t=14000`, active-region labels disappear and only the latest chip retains its name plate: 54 of 55 names are hidden. Selective featured labels agree with the build record’s specimen observations; showing every label simultaneously is unnecessary. However, initials alone cannot support reading or identifying the completed roster. **Cure:** provide a readable regional sequence or keyed roster that exposes every identity without requiring simultaneous labels.

- **−12 — Disc overlap threatens identity marks.** There are 46 overlapping pairs. The minimum 9.4-unit center separation is only 36% of the 26-unit diameter. Later chip groups paint over earlier groups, allowing discs, tags, or plates to obscure earlier initials. The small fraction of overlapping pairs does not measure how many people become unreadable. **Cure:** resolve collisions with displaced anchors and connectors, or use regional layouts that preserve every identity mark; verify per-chip visibility.

- **−7 — Full-view typography is too small for dependable phone reading.** Initials are 9 px, labels 8.5 px, and “Elect” 7 px at 360 px stage width. Zoom improves selected regions, but unfeatured chips retain the small-text limitation. **Cure:** establish phone-readable identity and status sizes, then accommodate them through layout and regional presentation.

- **−6 — Plate fit is checked against the wrong boundary.** Clamping plates inside the original 360-unit viewBox does not keep them inside a zoomed camera viewport or prevent plate collisions. The final HI label extends from `y=248` to `261`, beyond the stage’s bottom boundary; the bottom-centered full-roster plate also occupies its vicinity. **Cure:** position labels against the current camera window, reserve space for the full-roster plate, and check label/tag intersections and clipping.

- **−4 — The completed roster has no authored reading interval.** `fullAtMs` and `durationMs` both equal 14,000. The full state remains displayed after playback stops, but receives no positive-duration hold within the timeline. “55 ON THE MAP” is readable count information, not an identity roster. **Cure:** add an explicit full-state dwell after completion and verify the final layout throughout it.

Next attempt should prioritize identity access, collision-safe marks, camera-aware labels, and a deliberate completion hold. Pixel inspection at 360 px remains necessary before claiming visual readability.

Filing limitation: the execution tool failed to start, so this return is supplied for the named consumer to file verbatim; no filesystem write was completed.

SCORE: 55
BODY-WRITE: This return supplies codex/lens-readability.md for consumer filing: bound-hash readability verdict, priced deductions, and next-attempt cures.
