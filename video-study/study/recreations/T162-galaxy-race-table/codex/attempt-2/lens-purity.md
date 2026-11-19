Verdict: PASS for construction purity; score 96/100. Overall wave passage requires the other four lens scores.

Findings:
- The required artwork is generated parametrically: `armPath()` computes spiral coordinates from `CONFIG.disc`; `speckField()` produces seeded points within the configured ellipse; the renderer constructs the disc, core, pins, bubble and reflection from CONFIG values.
- `glyphSpecs()` builds icons from geometric primitives relative to the supplied centre and radius. Its formula-generated arc paths are construction, with no supplied specimen tracing or embedded media evident.
- Minor literal-markup exception: the initial SVG contains `<rect id="bg" x="0" y="0"/>`. Its dimensions and colour are configured later, but it remains a literal drawable element under the instruction’s strict “no literal scene markup anywhere” requirement. Cure: create and append the background rectangle through `el()` alongside the other generated geometry. Empty groups are structural containers.

Limits: Assessed only the supplied source and packets. No execution, pixel inspection or independent SHA-256 verification performed; other lenses are not assessed.

SCORE: 96
BODY-WRITE: none (read-only review); consumer files this return verbatim as codex/attempt-2/lens-purity.md and extracts its SCORE into scores.md.