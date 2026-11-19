# T13 attempt 5 — feasibility valve record (separate from the build record)

Filed at Execute E2, before any source mutation, on the attempt-4 source
(sha256 `05cfe65526fb4d80a5a72b4264fca99a183a17fe1f06482c3655178e46af4fc5`).

## E1 preservation re-verification (before this valve)

- `recreation-attempt-4.html`: sha256 `05cfe65526fb4d80a5a72b4264fca99a183a17fe1f06482c3655178e46af4fc5`
  = cycle-014 carried baseline = working file; inode 4992669 ≠ working-file inode 4298206 (content copy). PASS.
- `comparison-attempt-4.html`: sha256 `f0334795b08dfb3671b437b32e93ac48091ba48ed8cf64e2fc146e7aa8608b49`
  = baseline = working file; inode 4992670 ≠ working-file inode 4298308. PASS.
- `recreation-attempt-4-frozen.html` stands at the same sha. `scores.md` at baseline sha
  `abc3795697f3b7f2daed92cfa4e36d0b11e1f0b76ebc23b515c4fc0d64c2ceeb` before the scaffold append.

## Valve runs

1. Attempt-4 instrument form against the current source (`node t13-verify-attempt4.js`):
   **79 PASS, 0 FAIL** — the starting source is the frozen attempt-4 build, green on its own suite.
2. Anchor recomputation from source: grapheme counts **31/30/47/49/25/22** (exact match);
   card-2 prefix **15 graphemes** ("Chief Executive"). PASS.
3. Ending-budget schedule recomputation (ending budget 2,000 ms as an independent input;
   card-5 intermediate hold 700 → 672 ms): card 6 appears 8,812, types to exactly 10,000,
   schedule end exactly **12,000 ms**. PASS.
4. Corrected-basis joint fit (content-box descendant basis; the stage's own padding token resolved
   on the full width, as the container's own unit context): at 360px — pad 10.08px/side, content
   339.84px, 1cqw = 3.3984px, supporting rows at the raised 3.61cqw token = **12.268px** (floor
   12px cleared with margin), title 13.22px, inner width 314.4px, tallest-header term 22.67px,
   stack 515.3px ≤ 659.8px available. At 390px — content 368.16px, 1cqw = 3.6816px, supporting
   **13.291px**, stack 558.2px ≤ 714.8px available. **VALVE: PASS** — the build proceeds whole;
   no token drop, no basis reversion, no split invoked.

## E3 render re-probe

`/opt/meta-chromium/chrome` (Muse Browser 157.0.8103.77) headless load of the current
`recreation.html` (fresh private port 9417, throwaway profile): **FAILED before page load**,
exit 13, empty DOM, error "Hatch WebGL domain policy is required for browser startup" — the
standing environmental block. Consequence: rendered checks stay conditional, the filing prints
PIXEL-UNVERIFIED, and the fitting-basis escalation is discharged by the construction-family
change (corrected basis), not by pixel evidence.
