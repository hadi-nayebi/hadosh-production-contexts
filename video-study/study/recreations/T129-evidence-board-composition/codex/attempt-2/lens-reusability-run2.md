Verdict: reusability falls below the 70-point lens floor. Overall build pass is not assessed from this lens alone.

- **Substantial CONFIG coverage:** labels, map paths, palette, geometry, exhibit positions, entrance times, stamp text, and note content are configurable. Independent probes confirmed reordered exhibits and omitted stamp text pass validation (recreation.html:20–60, 141–168, 199).
- **Optional elements are incomplete:** `note:null` returns “note absent,” but startup still calls `build`; `noteRoute:null` throws during validation. Layout and rendering assume both exist (recreation.html:108, 123–124, 170–185, 320, 388, 449). Cure: explicit enabled/absent handling throughout validation, layout, build, and render.
- **Connector anchors ignore exhibit rotation:** endpoints use unrotated card rectangles while cards render with configured tilt; connector visibility always follows note timing, regardless of its endpoints (recreation.html:177–185, 203, 418, 425). Cure: transform anchors into displayed coordinates and configure connector timing independently.
- **Timing validation misses actual exhibit timing:** setting the stamped exhibit’s `enterAtMs` to 18000 passes checkpoints although the cycle is 16950 ms; the stamp appears before its target ever enters. Phase checks use synthetic beat positions instead (recreation.html:90–98, 199, 227–231). Cure: validate actual entrance completion, stamp dependencies, and final hold.
- **Consumption does not always mean visible control:** `palette.ink` affects contrast validation but has no rendering consumer (recreation.html:262; render layer:286–426). Exhibit glyphs and dimensions are shared by kind, preventing independently shaped exhibits through per-item CONFIG.

Limits: source hash matched the supplied SHA-256. Node probes verified the cases above; browser rendering and the supplied own-check totals were not independently verified.

Body-write: none (read-only run)

SCORE: 68