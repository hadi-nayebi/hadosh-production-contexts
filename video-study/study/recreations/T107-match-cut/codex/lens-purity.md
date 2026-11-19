Construction purity largely passes: no specimen media, embedded frames, external assets, or traced paths appear in the supplied source. Both scenes use the same `makeMark()` primitive, and every declared CONFIG key is consumed, including nested keys and the previously problematic `pushFrom.scale`.

Priced deductions:

- **−5 — Triangle geometry remains outside CONFIG.** `clipPath = "polygon(50% 0, 100% 100%, 0 100%)"` fixes the subject’s apex and base vertices. CONFIG controls triangle size, spacing, and color, but cannot change this geometry. This is a simple procedural primitive, with no evidence of tracing, but it misses the packet’s strict requirement that subject geometry come from CONFIG.
- **−3 — A visible palette decision remains outside CONFIG.** The stylesheet fixes the page background at `#111`. Because the stage fades to transparency at the loop seam, this color affects the presented artifact and should be a CONFIG palette key.

The schedule, scene content, layout dimensions, typography, and shared mark construction otherwise derive from CONFIG. The record’s “0 HITs” census therefore overstates full parameterization. Move the backdrop color and triangle vertices into CONFIG to cure the remaining exceptions.

No refusal-class embedding or tracing violation found. This lens clears 85; the overall tier requires the other four lenses.

BODY-WRITE: none (read-only run)
SCORE: 92
