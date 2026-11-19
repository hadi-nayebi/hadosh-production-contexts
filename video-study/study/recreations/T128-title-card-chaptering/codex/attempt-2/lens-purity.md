Verdict: 92/100 — construction purity passes the 70-point lens floor. The supplied source contains no specimen media; a few shaping values remain outside CONFIG.

Findings:

- **No media impurity found.** In `recreation.html`, DOM construction creates exhibit text through `textContent`; the map uses inline SVG paths from `CONFIG.map.contours`; eyebrow and main glyphs are DOM spans. There are no external asset references, sampled letterforms, caption tracks, or subtitle elements. The four configured contour paths are abstract curves, with no recognizable traced geography.
- **Map stroke thickness is not configurable.** The `mapEl.innerHTML` path template sets stroke colour and opacity but omits `stroke-width`, leaving thickness to SVG’s default. To clear this finding, add a CONFIG stroke-width value and apply it to every contour.
- **Some typography depends on browser defaults.** The `.maplabel` construction sets size and tracking but leaves line-height and weight implicit; the exhibit `sub` leaves weight implicit. These affect the rendered result. To clear this finding, expose and apply those values through CONFIG.
- **One advertised parameter is inert.** `CONFIG.exhibit.atMs` is validated in `validateOverride()` but never consumed by `stateAt()` or rendering. The exhibit appears from cycle start regardless of its value. To clear this finding, implement its onset effect or remove the parameter and correct the “every CONFIG key” consumption claim.

Limits: Assessment covers the complete source supplied in the payload, which this run explicitly designates as its input. The bound disk file, SHA-256, reported test results, rendered output, and contour provenance were not independently verified. The record’s mention of a sampled specimen colour describes a numeric palette choice, not embedded specimen media.

SCORE: 92
Body-write: none (read-only run)