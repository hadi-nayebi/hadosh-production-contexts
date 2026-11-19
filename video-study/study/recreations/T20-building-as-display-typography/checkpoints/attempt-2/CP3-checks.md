# CP3 — Stage E3 (checkpoint postconditions + completion semantics) own-check output · T20 attempt 2

Checkpoint source: CP3-source.html — sha256 5d8fe7f5bdd0ad55604ec141bba36ba3faf804679dab044155228a2fa3d03762 (content copy, filed before E4 began).
Harness stage E3 — SUMMARY pass=21 fail=0 skip=0.
- Spacing 750ms (span/(n−1)); anchor both sides: 8 lit @6499, 9 @6500; incomplete-just-before 14 @10999; complete-exactly-at 15 @11000; hold exactly 3000ms.
- Adversarial tables: {20000,11000}→{11000,14000} (clamp+reorder reported) · {500,−100}→{0,500} (clamp+reorder) · {14000,14000}→{13750,14000} (span extended, start pulled back) · {NaN,∞}→{0,14000} (non-finite replaced, reported) · duration 0/negative → "duration-invalid" diagnostic, state finite, phase idle, no NaN.
- n=1: single glyph at lightStart, spacing 0 · n=0: no letters, never hold, finite.
- Expectation correction recorded: the swap case's intermediate count at 6500 is 6 under first/last-onset semantics (spacing 7500/7≈1071.4 → floor(6000/1071.4)+1=6); attempt 1's harness expected 7 under span/n semantics. The specimen anchor is unaffected (9 @6500 exact under both the plan's §1 derivation and the build).
- C3/C4 built as ONE stage per plan §2 (dependency: the n−1 derivation is safe only under the normalization postconditions) — attribution for this stage prints BUNDLED between the two (plan-review finding 4).
