# T108 attempt 3 — re-score wave 2 (post-cure) payload manifest

Filed after the Stage 4 checkpoint (attempt3-checkpoints/stage4-recreation.html, byte-identical to the live source) and after the legs were re-run on the revised source. Wave 1 returns are preserved at lens-<lens>.md as prefix returns; wave 2 governs (all five lenses re-fired on the identical revised source, per the in-cycle cure rule: a stale return never files).

## Source under judgment
recreation.html sha256 993cb724778e7b40f0c871fb7ca491b772271ab11f0aed8565ce79576ea331c5 (Stage 4 checkpoint copy identical, distinct inode).

## Allowlist per lens payload (concatenation order, identical to wave 1)
1. instr-part-a.txt — sha256 2f5e1626f019b612a3db19248aebbc2f15dc7161aa04c776405845d5f06759fb (unchanged from wave 1: standing header + framing + scoring law + neutral technique facts incl. both timing bases + "Scores are integers from 0 to 100")
2. instr-lens-<lens>.txt — unchanged from wave 1 (shas in payload-manifest.md)
3. instr-part-b-run2.txt — sha256 081b82ed54a7cb83a2ccfa84508a0ceb44a7014f5e16ce3284e76e3593da4a83 (neutral facts + revised own-check packet, 50 checks)
4. fit-table-attempt3.md (revised) — sha256 8a4ad5ff0780591371f7db49a913b54ded9942cc3c8411665721a41759722100
5. marker: "\n\nCONFIG-CENSUS LEG OUTPUT\n"
6. config-census-attempt3.md (revised) — sha256 f015f2dd041f679a589c052814bf1f92df6e4d42746b6f20eae68e28714f304d
7. marker: "\n\nRECREATION SOURCE\n"
8. recreation.html (sha above)

## Assembled payload sha256
motion 901a95706d3190d4f5df626d86db7a87d6062c8603e52409b56f8b6eb4938ca5 · timing f3d0154fda86bd9657c2aaa012e533f65d8d6d331034ec4f8121689ae7a03da7 · purity 850d0187b1b37527183a5fb77937a394b67723e6fb406bd4dc9cc19afb8657a9 · reusability f96c962257e804ab5e5ca981a233acf13bdc11780b4d55f1b2824d5cd1146dec · readability ffd5c91897b1e19e8b819102f3e0da2718c0a025541c7a148727a3d29d50baa6

## Anchor scan (over the actual fed parts, this wave)
- Numeric anchors: "83.4" and "84.2" — grep count 0 across part-a, part-b-run2, both legs, and the source.
- Qualitative anchors: "attempt 1/2/3", "previous attempt", "scaffold", "plateau", "cure", "verdict" — none in any fed part (the legs' revision notes say "revised build / same build round", carrying no scores, no verdicts, no lens outcomes). Cure codes (K1–K11) appear in no part. The word "delta" appears once, in part-a's standing consumer line (names the seat's downstream act, no value) — same as wave 1.
- Source comments scanned: comments state construction intent only (final-waypoint centre rule, wrapped-width basis, envelope shape, target blend) — no wave, score, or defect-history language.

## Firing form (per lens)
Session scope: fed stream only; cwd = fresh empty per-lens scratch under /tmp/t108a3/w2-<lens> (created in its own exec call, verified empty); binary ~/workspace/codex-local/node_modules/.bin/codex; form: cat <parts in allowlist order> | codex exec -s read-only --skip-git-repo-check - (ONE stream, no stdin field on the exec call, no -o). Parts are read from the artifact directory (stable storage), not from /tmp — the wave-1 readability firing lost its /tmp-held parts to a scratch wipe mid-wave; that failure mode is designed out here. Returns persist verbatim at lens-<lens>-run2.md; char count + SCORE line verified per return.
