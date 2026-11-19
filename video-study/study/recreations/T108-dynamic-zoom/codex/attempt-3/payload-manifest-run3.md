# T108 attempt 3 — re-score wave 3 (post-cure round 2) payload manifest

Filed after the Stage 5 checkpoint (attempt3-checkpoints/stage5-recreation.html, byte-identical to the live source) and after the legs were re-run on the revised source. Wave 1 returns (lens-<lens>.md) and the wave 2 reusability return (lens-reusability-run2.md) are preserved as prefix returns; the wave 2 firings for the other four lenses were not made — the cure decision superseded that source before they fired, and firing them would have produced stale returns. Wave 3 governs: all five lenses on the identical revised source.

## Source under judgment
recreation.html sha256 c032e79ede9f8c11ef587749e722c54d78d2c66185c5c387c5740be25cf8f4bf (Stage 5 checkpoint copy identical, distinct inode).

## Allowlist per lens payload (concatenation order, identical form to waves 1–2)
1. instr-part-a.txt — sha256 2f5e1626f019b612a3db19248aebbc2f15dc7161aa04c776405845d5f06759fb (unchanged across waves)
2. instr-lens-<lens>.txt — unchanged across waves (shas in payload-manifest.md)
3. instr-part-b-run3.txt — sha256 3f5f62712e5306b37f98225695095b21c3e8a0d893bb71a677208fdfdb181ae1 (neutral facts + revised own-check packet, 59 checks)
4. fit-table-attempt3.md (second revision) — sha256 183f872aafe84fee41a42b9213d59a66fd1e70b5ab47cdbdc5c09a4055e3eb6c
5. marker: "\n\nCONFIG-CENSUS LEG OUTPUT\n"
6. config-census-attempt3.md (second revision) — sha256 ba489abca3bed1c875d50be3329ec994f32513d648939d906e37e2f01b540893
7. marker: "\n\nRECREATION SOURCE\n"
8. recreation.html (sha above)

## Assembled payload sha256
motion ddaadd1cadfb0923f61378fcea40b9d84a55e549c13df8722fd084524c603b9a · timing e8f5fd9d80ea053c02cdaa9640448915e8e2337d65273f74696937d375c2fda3 · purity 223a911db71f5e4ebd8926387f5a89ee49f51483d99902d4a85df564984904ca · reusability a0db08d1895bbbf89adf977bbb1be8bd424af450be8e84c16f83392ef7aa0cb7 · readability 69105b176537442f73da0f96a0ef3964af14dadf1b23bbe83606141019d302a8

## Anchor scan (over the actual fed parts, this wave)
- Numeric anchors: "83.4" and "84.2" — grep count 0 across part-a, part-b-run3, both legs, and the source.
- Qualitative anchors: "attempt 1/2/3", "previous attempt", "scaffold", "plateau", "cure", "verdict" — none in any fed part (the legs' revision notes say "revised build / same build round", carrying no scores, no verdicts, no lens outcomes). Cure codes (K1–K11) appear in no part. The word "delta" appears once, in part-a's standing consumer line (names the seat's downstream act, no value) — same as waves 1–2.
- Source comments scanned: comments state construction intent only — no wave, score, or defect-history language.

## Firing form (per lens)
Session scope: fed stream only; cwd = fresh empty per-lens scratch under /tmp/t108a3/w3-<lens> (verified empty); binary ~/workspace/codex-local/node_modules/.bin/codex; form: cat <parts in allowlist order> | codex exec -s read-only --skip-git-repo-check - (ONE stream, no stdin field, no -o). All parts read from the artifact directory (stable storage). Returns persist verbatim at lens-<lens>-run3.md; char count + SCORE line verified per return.
