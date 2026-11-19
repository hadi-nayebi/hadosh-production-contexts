# scores — T182 detail-to-wide match on action · attempt 1 · recreation Cycle 028 Wave 25

Build bound: recreation.html SHA-256 **80221825fd720b36084ca54a0578309b8b0ff1811927023800b4de8244420497** (identical in all five lens payloads; identical-hash binding holds).
Schedule basis (A7): **segment-anchored** — segment = source 80.30–83.30 s, cut at build t=1500 ms, roll period 580 ms (measured).
Pre-wave gate: jev-prewave → **FIRE-WAVE** (filed verbatim at `jev-prewave.md`; payload at `codex/payload-prewave.txt`, carrying both A6 leg outputs verbatim per A10.1; A6 legs: fit-table 0 hits · config-census 0 hits).
Gate calls before Execute: codex-observe CONFIRMED WITH GAPS · codex-plan-review REVISE — both filed verbatim under `codex/`, dispositions consumed in build-record §2.

## Five-lens wave (returns filed verbatim under `codex/`, each ending SCORE: <int>)
- motion: **79** — `codex/lens-motion.md`
- timing: **96** — `codex/lens-timing.md`
- purity: **100** — `codex/lens-purity.md`
- reusability: **84** — `codex/lens-reusability.md`
- readability: **76** — `codex/lens-readability.md` (first firing interrupted by a service restart before any return — preserved as `codex/lens-readability-interim1-interrupted.md`, payload echo only, never scored; the filed return is the single re-fire on the identical payload + identical build hash)

## Arithmetic (mechanical, §5.5)
Sum = 79 + 96 + 100 + 84 + 76 = **435**
Average = 435 / 5 = **87.0**
Minimum lens = **76** (readability)
Bar: average ≥85 AND minimum ≥70 → 87.0 ≥ 85 ✓ · 76 ≥ 70 ✓

## Verdict: **PASS**
Tier: **RECREATED** (attempt 1) — tier movement in TECHNIQUES/INDEX is the style-library's act; this record is the evidence.

## Priced findings carried forward (cure list for any future attempt)
- Motion (79, the wave's priced gap vs the Plan's prediction): the pin translates predominantly ALONG its own long axis, reading as sideways sliding more than rolling across the dough — cure: drive the stroke predominantly perpendicular to the pin's axis under the same phase driver. The ±14° quadrature rocking is unsupported by source evidence — cure: establish angular behaviour from source motion or drop it. The pin-group blur steps 3 → 0.6 px at the cut, so scale is not literally the only changed property — cure: hold blur across the cut or justify from source.
- Readability (76, minimum lens): at detailScale 3.2 the hand pair crops at the frame edges across the stroke (one hand leaves the frame near the extremes), weakening recognition of the two-handed action — cure: adjust detail framing/hand spacing so both hand–pin contacts stay identifiable. Skin #8a5a3b vs table #7d5a38 separation is weak for unoutlined hands; flour #f4ecd9 at 0.55 behind pale dough softens the dough's outline.
- Plan prediction check (build-record §2, cure 4): motion was predicted 84–88 with expected total ≈86 ± 3 — actual motion 79 (prediction MISSED, printed) and actual average 87.0 (inside the predicted band). The miss is the stroke-direction defect above, which the prediction's "recognition risk" named in kind but underpriced.

## Render-proof limitation (§2c.1(d), standing)
This seat has no browser binary — pixel-level render proof is NOT exercisable. comparison.html is the render surface; verification is structural (node harness assertions on the build's own functions + comparison structure, raw output in build-record §4) + the five-lens wave reading the full source. The limitation is printed, never smoothed.
