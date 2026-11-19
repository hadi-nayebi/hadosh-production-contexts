# jev-prewave verdict — T100 Pencil-check task sting (attempt 1, Cycle 016 Wave 14)

**Verdict: FIRE-WAVE**

**Dimension scores (0–1):**
- parameterization: **0.86**
- purity pre-check: **0.95**
- own-checks completeness: **0.92**
- fidelity-plan honesty: **0.88**

**Defect classification:** None — no primary defect from the taxonomy (HARDCODED-CONFIG · TRACING-STEP · ASSERTED-CHECKS · SILENT-DEFERRAL) is sustained. All four dimensions are above the 0.5 floor, and ASSERTED-CHECKS does not apply.

**Priced reasons per dimension:**

- **Parameterization — 0.86:** The piece is genuinely CONFIG-driven, not a config costume. The HTML construction reads CONFIG for field color, checkbox size/stroke/color and position, tick path/color/stroke/`drawMs`, pencil path/color, burst count/color, `enterMs`/`burstMs`/`cycleMs`, stage size, and the `geom` block (burst radius/size, ease power, fade gain — the record notes the census cure binding `easePow` + `enterFadeGain` into CONFIG). The swap harness proves live re-drive: field `#4148c0`→`#173f35`, burst count 8→12, `tick.drawMs` 900→1600 with the cycle held at exactly 14000 ms via the residual hold (10900→10200). Deduction: `pencil.enterFrom` is declared in CONFIG but never read by the construction — entry direction is derived solely from `geom.pencilEnterDx/Dy` (−150, −150) — and `endHoldMs` is a documented residual check rather than a consumed driver. One inert label field and one documentary field against an otherwise proven parameter set; not HARDCODED-CONFIG.

- **Purity pre-check — 0.95:** The construction route is generation from parameters only: DOM/SVG field, checkbox, tick and pencil paths are set from CONFIG in code, and burst marks are JS-generated per cycle by `buildBurst()` with lifetime confined to the burst phase. The record's asset inventory states recreation.html loads no external assets, and the purity grep (patterns `segment.mp4|source.mp4|video-digests|ev/|.jpg|.png|<video|<img`) is recorded at 0 hits; `segment.mp4` appears only in comparison.html as the labeled ORIGINAL. No tracing, embedding, or source-asset step hides in the prose or the code. No TRACING-STEP.

- **Own-checks completeness — 0.92:** The mechanical guards are recorded with evidence, not asserted. Swap test: exact substituted values plus harness numbers — field fill re-driven to `#173f35`, 12 burst marks visible mid-burst at opacity 1, tick dashoffset 71.875 remaining at the draw midpoint under the swap vs 50.0 by default, hold state clean in both runs (tick full, burst opacity 0), cycle invariant 14000 ms. Purity grep: patterns named, 0 hits. Syntax: inline scripts of both recreation.html and comparison.html extracted and `node --check` → OK. Phase-exclusivity intervals and the A6 legs (`fit-table.md`, `config-census.md`) are also on record. Deduction: the comparison check is logic-level only and honestly flagged PIXEL-UNVERIFIED (no browser binary on the seat), and the A6 leg results are referenced by file rather than reproduced in the record. The checks that exist are recorded — no ASSERTED-CHECKS.

- **Fidelity-plan honesty — 0.88:** The record states what it implements against packet T02 (indigo field · pencil entering diagonally and ticking a white checkbox · burst punctuation after the check · held checked state) and names its deviations instead of hiding them: the ALLOCATION section labels top-left entry and dark pencil `#2b2b2b` against the measured top-right yellow pencil, the green straight tick against the measured cyan curved tick, the persistent checkbox against its measured ~3.5 s-only presence, the radial burst against the measured scattered confetti + curved-arrow beats, and all phase durations as `t=0 allocation` inside the 14 s cycle; arrows, cursor and timeline are excluded by name, the tick/burst contrast cure (`#3df063` at 4.75:1) and the known pencil contrast gap (1.96:1) are measured and printed, and the forecast prices its own minimum honestly (motion ~76, timing labeled allocation, not measured). Deductions: the pencil rests at the tick end during DRAW rather than travelling the tick path as the measured pencil does — the preserved list's "drawing a check" does not name that rest-state simplification — and the packet's arrow form is abstracted into radial burst marks rather than implemented. Both are visible enough for the wave to price; neither is a silent absence. No SILENT-DEFERRAL.

**Disposition note:** The build's own paperwork does not condemn it — its defects (inert `enterFrom`, pencil rest during draw, allocation-based timing, unmeasured pixel comparison) are named, priced, and exactly the kind the scoring wave exists to measure. The wave is earned.

---
Builder disposition (recorded in build-record.md): FIRE-WAVE accepted. The two priced deductions were cured before the wave fired (enterFrom now read by the construction; pencil travels the tick path during DRAW), self-verify + A6 legs re-ran, and all five lens payloads were regenerated against the cured final build before any lens fired — no interim lens firing exists.
