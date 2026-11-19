# jev-prewave — COMPLETION re-fire (Amendment A12.3, Cycle 036 Wave 33) — return verbatim

Fired once on the post-HOLD cured build: recreation.html 14,989 B · sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23`. Payload: `codex/payload-prewave-completion.txt` (88,646 chars, size+tail verified before firing). Raw stream: `codex/jev-prewave-completion-return.raw` (94,995 B, sha256 `abdc9a67bd6fda4e67f8de6fe730d6524deefa0248e921139fe94d24f27e94e3`). The two prior HOLD returns are untouched and bind the pre-cure builds only.

---

**HOLD · ASSERTED-CHECKS** — T190 attempt 1, Cycle 036 Wave 33, cured build `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23`.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 0.95 |

**Findings**

1. **The determinism check has no recorded result.** `guards.md` command 3 requires a seeded-RNG presence census alongside syntax. `build-record.md` Receipt R6 records `node --check` results for both recreation scripts. Neither R6 nor the earlier syntax section gives a seeded-RNG census result. This is an independent ASSERTED-CHECKS ground. The cure is a receipt for that census on the cured hash, with the command or run and its raw result, including an explicit zero-hit result if applicable.
2. **The CONFIG census does not reconcile with the supplied CONFIG.** All five scene objects in `recreation.html` carry an `id`, including `"globe"` and `"ear"`. `config-census.md` §2 has no `scenes[].id` application-site row, and `build-record.md` R8 omits the key while claiming a key-for-key match. The cure is to record the extracted nested key and trace its application site, or record it as a HIT if unused, then reconcile R8 with the corrected census.
3. **The binding checkpoint and fit evidence supports the recorded cures.** `build-record.md` R0/R1/R4 give the harness run, CONFIG expressions, and base and swapped results for all nine checkpoints listed in the binding mapping. For example, CP1 applies the offset after rounding (`1999→1599`), CP5 preserves the projected crop (`9500→7600`), and CP5b separately preserves the mid-turn state (`9000→7200`). R2 records the fitted-font assignment and content-box stack arithmetic, yielding `64 − 61.6 = 2.4 px` of stack margin. R7 supplies post-layout PIL ink measurements, including `628 − 624 = 4 px` for the tightest fresh swap line. The fit rows have measurement provenance.
4. **The construction route and fidelity departures are explicit.** `build-record.md` R5 records zero hits for both purity patterns, and the construction inventory identifies code-authored CONFIG maps. The fidelity section names the flat-map `rotateY` approximation and the deferred per-pixel redraw. `plan-amendment-cycle035.md` §3 and the binding mapping agree on 9,500 ms as the first sampled crop and chosen build anchor. The source peak remains UNVERIFIED.

**Limits** — Stream-only review. The supplied receipts support paperwork judgments. Browser playback, actual browser-font fit, and frame-level clearance between the 100 ms sweep samples were not independently verified.

**BODY-WRITE: none (read-only run)**
