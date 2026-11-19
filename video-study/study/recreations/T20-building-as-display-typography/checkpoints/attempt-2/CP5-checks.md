# CP5 — Stage E5 (orbit passage) own-check output · T20 attempt 2

Checkpoint source: CP5-source.html — sha256 afa38d8144ce91642c27917fdf2139f74a444d908fd58665fe1b1e228b6dd285 (content copy, filed before E6 began).
Harness stage E5 section — SUMMARY pass=21 fail=0 skip=0 (includes the V1 consumption subset + purity + CSS-parse + self-start legs).
- Shared sinusoid removed (no Math.sin(prog)); orbitPassage/orbitOffsetPx present.
- Sampled mid-layer offsets at 360px: 0.00, −0.29, −0.88, −1.47, −1.92, −2.65, −3.24, −3.83, −4.12 — strictly monotonic, constant velocity sign, through reveal AND hold (selected behaviour, plan-review finding 5: drift continues to loop end, resets WITH the lighting reset at the wrap — offset(14000) = offset(0) = 0 asserted).
- Layer ordering at anchor: hero < far < mid offsets. orbit.referenceWidthPx consumption proven (offset changes when the key changes) — the E4 stage's pending 960 consumption lands here.
- Self-start: load rendered 5656 fillRect calls with no external caller (A-C010-2).
