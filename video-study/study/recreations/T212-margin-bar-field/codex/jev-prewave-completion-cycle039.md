**HOLD — ASSERTED-CHECKS.** The Cycle 039 receipts establish the P4 and full-predicate cures, but the timing swap leaves two census checkpoints unproven.

## Findings

1. **Parameterization — 0.93.** The CONFIG block exposes the state data, geometry, palette, and phase timing. `config-census.md` §2 maps those fields to their application sites. `build-record.md` §7.2 records a content swap yielding `Gamma dotFull=22`, a dot probe moving from 12,150 to 13,050 ms, and a stub-DOM palette swap producing `#2e9e6b` on rectangles and dots.

2. **Purity pre-check — 0.95.** `build-record.md` construction summary and §§2, 7.1 describe an SVG generated from CONFIG and report zero hits for the source-media grep. The record gives no evidence of a tracing or embedding step.

3. **Own-checks completeness — 0.40. Primary defect is ASSERTED-CHECKS.**
   - **CP0 and CP2000 lack timing-swap receipts.** The binding census lists eight checkpoints. `build-record.md` §7.2 prints six movement rows, for CP4000 through CP14000, each moving by 900 ms. CP0 has a default receipt using `CONFIG.tGrowMs`, but the swap leaves that key untouched and prints no CP0 result. CP2000 is described as equivalent to CP4000 in the census mapping, but has no indexed executable receipt or governing exception. The claim that “every census instant moves +900” exceeds the six printed rows. The cure is to index a separate CONFIG-derived CP2000 probe and file its default and moved instants with observed states. CP0 needs a valid swap that changes `tGrowMs` and records the zero-state assertion at the moved instant, or an explicit governing exception.
   - **P4 and the full-predicate receipts clear the filed cures.** `build-record.md` §7.2 separately identifies California’s raw phase `0.478667`, eased result `0.458244`, and observed `flattenP` `0.458244`. P1, P2, and P8 each print one result for every index from 0 through 49. Those rows show unit share sums, zero per-bar differences from P1, and observed dot counts matching the printed rounding formula, respectively.
   - **The measured-fit minima need reconciliation.** `fit-table.md` states a PIL proxy and scale of `360/640 = 0.5625`, so the measurement method has provenance. Row 6 gives a minimum of 21 px at build size and 11.2 px at phone size, but `21 × 0.5625 = 11.8125` px. Row 5 also needs the source measurement for the lower overall minimum of 11.2 px. The cure is to identify the labels setting both minima and file their raw PIL bounds with the scaled values.

4. **Fidelity-plan honesty — 0.95.** `build-record.md` §4 accounts for the stacked hold, annotation arcs, flattening, equal solid strip, dotted growth, and completed hold. It names the T213 overlay and neighboring techniques as deferrals and identifies the losing-side volumes as visual estimates. The binding census mapping separately names the growth-at-cut allocation. No SILENT-DEFERRAL finding.

**Limits** — CANNOT READ the requested artifact files at the specified path under `/home/hatch` (`No such file or directory`). The verdict uses the supplied paperwork. The disk build hash, inherited plan and harness, and browser playback remain NOT ASSESSED.

**Body-write: none (read-only run)**
