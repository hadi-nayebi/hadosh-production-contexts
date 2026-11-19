**HOLD · ASSERTED-CHECKS** — T192 attempt 1, Cycle 035 Wave 32. The timing swap records CP-23.5’s new evaluation instant, but the filed output omits the assertion result at that instant.

| Dimension | Score |
|---|---:|
| Parameterization | 1.0 |
| Purity pre-check | 1.0 |
| Own-checks completeness | 0.5 |
| Fidelity-plan honesty | 1.0 |

## Findings

- **A11 swap evidence is incomplete.** The default log records results for all six binding checkpoints. The amendment makes three checkpoints move under the duration swap. The log prints all three new instants, but only CP-24.0 and CP-24.5 have corresponding result lines. CP-23.5’s default pass at 1,500 ms and its swapped anchor at 1,800 ms leave above-front occupancy and below-front rain unevidenced at 1,800 ms. CP-26.0’s fixed 4,000 ms anchor also appears without a swapped occupancy result, despite the summary claiming all six passed. The cure is a final-build swap log that prints all six evaluated assertions, including CP-23.5’s occupancy and rain count at 1,800 ms and CP-26.0’s occupancy at 4,000 ms. The three fixed checkpoints follow the binding amendment. [Plan amendment §2](plan-amendment-cycle035.md#L23) · [Build record, default and swap output](build-record.md#L38) · [Swap summary](build-record.md#L64)
- **The comparison control check is contradicted by the code.** The build record describes synchronized playback. The Play/Pause handler controls only the original video, while the recreation advances on its own animation clock. Restart seeks the video and reloads the iframe, whose clock starts on its first animation frame. The cure is to drive the recreation from the video’s clock using the filed mapping, then record play, pause, and restart results for both sides. [Build record, comparison check](build-record.md#L80) · [Comparison controls](comparison.html#L25) · [Recreation clock](recreation.html#L225)
- **Parameterization and purity clear the paperwork check.** CONFIG drives runtime glyph sampling, line text, palette, and particle timing. The census records the application sites, and the swapped glyph counts support regeneration. I verified that the on-disk HTML hash matches the build record, both inline scripts pass `node --check`, and the recreation contains zero matches for the specimen and external-reference patterns checked. [CONFIG census](config-census.md#L17) · [Runtime sampling](recreation.html#L57) · [Recorded purity check](build-record.md#L69)
- **The fidelity departures and fit hit are disclosed.** The plan identifies the signer tail, allocated release, and line fade. The Cycle 034 Observe disposition resolves the digest’s particle-line wording in favor of the frame census, so the fade is a named departure. The fit table carries one hit. Its estimated line ink height is 10.9 × 0.375 ≈ 4.1 px at a 360 px stage, below the stated ~11 px floor. [Build record, fidelity plan](build-record.md#L87) · [Fit table and disposition](fit-table.md#L4)

**Limits** — This was a paperwork review with static checks. I did not rerun the builder’s harness or verify browser pixels, phone legibility, or live playback. The fit table’s stub-rasterizer bounds leave browser glyph fit unverified.

**Body-write: none (read-only run)**
tokens used
48,183
