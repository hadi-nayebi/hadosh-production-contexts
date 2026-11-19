Reusability: **83/100** — clears this lens’s 70-point floor. The five-lens average and improvement over 79.2 cannot be determined from this lens alone.

- **Broad CONFIG coverage:** Header/date, palette, building pattern, crowd density, car endpoints/duration, and puff count/timing are consumed by the supplied source. Editing CONFIG and reloading supports useful variants.
- **Conflicting swap behavior:** The opening comment defines reload-only changes, but `window.__T130.tryOverrides()` accepts live changes. Existing DOM nodes are never rebuilt; cached `G` and `W` retain prior geometry. Accepted changes can therefore combine updated animation timing with stale shapes and placement. Remove this API or rebuild the scene after accepted changes.
- **Fixed shaping remains:** The building loop fixes margins (`8`, `16`), window proportions and stroke widths; the crowd loop fixes head/body dimensions and jitter; `carPts` fixes the vehicle profile. These limit production variation through CONFIG. Expose the shaping parameters needed for supported variants.
- **Count semantics and validation remain incomplete:** `crowdCount` specifies candidates before figure-clearance exclusions, rather than the rendered count. `validateConfig()` does not reject empty `buildingHeights`, invalid counts, or invalid window dimensions. Define count semantics and validate supported ranges.

Limits: Source-only assessment of the supplied payload. Own-check results and the referenced fit table were not independently verified; the stated SHA was not recomputed. No files were filed.

SCORE: 83
BODY-WRITE: none (read-only run)