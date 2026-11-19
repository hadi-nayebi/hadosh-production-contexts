# CP2 — Stage E2 (intensity hierarchy) own-check output · T20 attempt 2

Checkpoint source: CP2-source.html — sha256 220539e806bc72a5faeb76427df1914ebbea024971d4f2793eff45b414ac75b9 (content copy, filed before E3 began).
Harness stage E2 — SUMMARY pass=6 fail=0 skip=0.
Effective luminance (BT.709, as rendered at CONFIG scales): facade cellLit 0.936 (scale 1.0, reference) · marquee text 0.520 (scale 0.62) · neighbor lit window 0.390 (scale 0.45) · hero edge 0.437 (alpha 0.55, blur 6px — below attempt 1's flat 12px).
Ordering asserted: facade > marquee > neighbor; facade > edge; facade:marquee ratio 1.80 ≥ 1.3 threshold (plan-review finding 3); marquee scale 0.62 ≥ 0.5 absolute floor.
Baseline-to-stage difference: attempt-1 source had NO intensity keys — hierarchy was hue-only; this stage adds the intensity block + scaled render paths.
