# T102 — Definition card · jev-prewave verdict (attempt 1, Cycle 016 Wave 14)

**Verdict: FIRE-WAVE**
**Classification: none — no HOLD taxonomy applies**
**Advisory: this verdict is advisory, per the call definition.**

## Dimension scores

1. **PARAMETERIZATION — 0.95 / 1.00**
2. **PURITY PRE-CHECK — 1.00 / 1.00**
3. **OWN-CHECKS COMPLETENESS — 0.90 / 1.00**
4. **TECHNIQUE FIDELITY PLAN — 0.90 / 1.00**

No dimension is below the 0.50 floor. No dimension is ASSERTED-CHECKS.

## Priced findings

### 1. PARAMETERIZATION — 0.95 — genuinely CONFIG-driven, not a config costume

The CONFIG block in `recreation.html` carries every subject-shaping value: `card.title` / `card.body`, `gradient.stops` / `gradient.angleDeg`, `palette.field` / `palette.ink`, `footer.motif`, `landMs` 1100 / `holdMs` 12900, `stage.width`, `geom.*` (stage aspect, card fractions, text-back box, title/rule/body placement), `type.*` (font, sizes, weights, letter-spacing), `textBack.color` / `opacity`, `footerGeom.*` (capsule gradient, path color/width/dash, arch and capsule fractions), and `motion.fromScale` / `fromOpacity` / `fromRisePx`. Logic derives the cycle as `landMs + holdMs` with no 14000 ms literal, and `?cfg=` override is supported.

`config-census.md` corroborates this from the final build, not by assertion: its all-literal scan classifies the only literals outside CONFIG — `#11142e` page chrome, `#fff` / `#a00` error-banner chrome, sRGB luminance/gamma constants, interpolation fractions 0.25/0.5/0.75, array indices, and the fit harness's ink/advance ratios — as structural, and resolves every CONFIG key to a named application site, including `footer.motif` as the construction branch in `build()`. **HIT list: EMPTY.** No CSS variables are used, so the setter check is vacuous and stated as such.

The swap test proves the drive is real: changing title to "OPENINGS", body to "A designed first frame that teaches the eye where to look", `gradient.stops[0]` to `#f59e0b`, and `landMs` to 600 re-measures the title at 159.2 px, re-wraps the body to two lines, recomputes worst-case contrast at 7.31:1, and re-times the phase machine to a derived 13500 ms cycle. A hard-coded build in a config costume would not survive that swap. Minor deduction only because `footer.motif` parameterizes by named branch selection rather than by fully parameterized geometry for alternative motifs — lawful for this single-motif technique, and named in the census.

Not HARDCODED-CONFIG.

### 2. PURITY PRE-CHECK — 1.00 — generation from parameters, no tracing/embedding step

The build record describes the construction route as one self-contained file: DOM/SVG construction, JS-clock phase machine (LAND → HOLD, exclusive), card lands as one unit, footer motif inside the card, no external assets, logic reads only CONFIG. The CONFIG inspection confirms it: the footer SVG path, arch, and capsule and the card gradient are generated in-code from `footerGeom.*` and `gradient.*`.

The purity grep is recorded with its exact pattern — `segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img` over `recreation.html` = **0 hits** — and the asset inventory states `recreation.html` loads NO external assets (no src/href loads). The segment and its 28 frames are used in the record for measurement only (ffprobe 14.000 s; frames at segment t=4.5 s settling, t=5.0 s settled), not as an embedded or traced source. `comparison.html` legitimately referencing `segment.mp4` is explicitly excluded from the purity grep per A-2, not hidden.

Not TRACING-STEP.

### 3. OWN-CHECKS COMPLETENESS — 0.90 — recorded with numbers, not merely asserted

All three mechanical guards named in the call are recorded with results:

- **Swap test:** exact amended values, result PASS, with priced outputs — title 159.2 px (fits), body re-wrap lines quoted verbatim, worst-case contrast 7.31:1, phase verified at t=0/300/599/600/5000/13499/13500, derived cycle 13500 ms looping cleanly, card still landing as one unit. The one untouched CONFIG group, `palette`, is named, with its contrast duty re-proven by the swap's worst-case computation.
- **Purity grep:** pattern printed, 0 hits (see §2).
- **Syntax:** `node --check` on both inline scripts — clean.

Supporting legs are likewise measured, not asserted: `fit-table.md` gives title ink 219.1 × 19.33 px in a 281 px card zone, body line 1 at 260.9 × 11.25 px against a 264.1 px bound (1.6 px per side), body line 2 at 207.5 × 11.25 px, hierarchy ratio 1.72:1, and worst-case contrast 6.38:1 default / 7.31:1 swap, both ≥4.5:1, computed over all gradient stops and interpolated midpoints. **HIT list: EMPTY** in both A6 legs.

Deduction is for disclosed limits, not for missing checks: the comparison check is LOGIC level only and printed PIXEL-UNVERIFIED (no browser binary in this seat), and body ink at 11.25 px clears the ~11 px floor by only 0.25 px — printed in `fit-table.md` as a named watch, not buried. Both are honest qualifications the wave should carry, neither converts recorded checks into asserted ones.

Not ASSERTED-CHECKS.

### 4. TECHNIQUE FIDELITY PLAN — 0.90 — implements the packet mechanics; every absence is a named allocation/deferral

Against Digest §3 T04 — a full-screen gradient card lands with the verbatim text "TRANSITIONS — Animated changes between two scenes to provide visual continuity", with a dotted path over a capsule shape as a quiet lower footer — the record states what is implemented: the gradient card lands and holds on a `t=0 allocation` cycle of landMs 1100 + holdMs 12900 = exactly 14000 ms looping; title, rule, and two-line body are children of the single card node and land as ONE unit with no child reveal animations; the footer motif (cyan dotted arch over a yellow→green capsule, bottom-left of the card) is inside the card node and shares its LAND/HOLD lifecycle with no separate phase. The land/settle beat is evidenced from motion, not a still: at segment t=4.5 s the second body line is still soft/low-opacity and the capsule is just rising; by t=5.0 s the card is fully settled.

Every deviation from the specimen is named in the record, none is silently absent:

- Land easing (easeOutCubic settle over landMs) — **ALLOCATION**, printed.
- Gradient micro-structure (specimen's layered band/blob detail) simplified to the Plan's single diagonal gradient — **ALLOCATION**, printed here and in scores.md.
- Stage form: 360×440 portrait canvas centred on the card rather than a 16:9 frame replica — **ALLOCATION**, printed, with its measured reason (at 360×203 body ink fell under the 11 px floor and the title overflowed the 202 px card).
- Text backing wash (`textBack` #0a0e2e at 0.55 opacity over the whole text footprint): the specimen carries no visible backing panel — recorded as a deviation adopted because Cure 1 contrast law outranks pixel-identity of the gradient under the text, yielding 6.38:1 default / 7.31:1 swap.
- Attribution: declared inapplicable by the technique's nature (a definition, not a quotation; the verified card carries none) — named here, not silently absent.

No packet mechanic — landing, verbatim definition text, gradient card, quiet dotted-path-over-capsule footer, hold — is missing without a name and a reason.

Not SILENT-DEFERRAL.

## Disposition

Ready to be scored. The wave should carry two printed watches from the record itself: (1) body-ink margin is thin — 11.25 px against an ~11 px floor, 0.25 px of headroom; (2) the comparison is PIXEL-UNVERIFIED at LOGIC level only. Neither watch is a pre-wave defect visible in the paperwork that blocks firing; both are priced above and belong in the five-lens scoring record.
