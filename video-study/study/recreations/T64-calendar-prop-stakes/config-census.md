# T64 — config-census leg (guard-config-census v3.1) · final build sha256 1a713024…
Re-run on the post-wave-cure build (interim lens cures applied; see build-record §3).

## 1. All-literal scan (outside the CONFIG block)
- Hex/rgba colors outside CONFIG: `rgba(0,0,0,.35)` ×3 (CSS box-shadows) — **structural** (uniform elevation shading, identical on every card/prop; carries no subject identity or palette meaning). No hex colors outside CONFIG.
- Geometry/durations in CSS: border-radius 50% (dot/coin circles — mathematical identity); box-shadow offsets 6px/14px and 4px/8px — **structural**. Page/bill corner radius and bill padding moved INTO CONFIG by the interim reusability cure (style.radiusPx applied via JS setters; bill padding set from style.billPadYPx + layout.billPadPx, and the fit allowance uses the same billPadPx — allowance and actual padding are now the same number).
- JS numerics outside CONFIG: loop indices/bounds, `Math.max(1, …)`, opacity endpoints, seek ×1000 (unit identity), validation bounds (string ≤80 chars, dotCount ≤40, stage.width contract = 360), WCAG luminance coefficients + contrast floors 7/3 (formula identities + validation domains), vertical-fit factors 1.15/1.3 (line-height validation factors), coin inner allowance 4 — **structural** (indices, identities, validation domains).
- Font families (Georgia/Arial stacks in CSS) — **structural** (fleet-standard stacks; no subject-shaping value stands in them).
- **Subject-shaping literals standing outside CONFIG: 0.**

## 2. CONFIG key → application-site resolution (incl. nested/array keys)
- pages[0..1].month/.day/.weekday/.headerColor/.label → page build loop (text, header background, label). ✓
- connector.dotCount/.dotColor/.dotDiameterPx/.dotStaggerMs → dot generation + schedule + render stagger. ✓
- props.enabled → build gate + schedule/checkpoints branches · items[].kind → dispatch · bill .kicker/.title/.bodyLines[] → prop-bill children (body lines in the fill-phase element) · coin .face → prop-coin text. ✓
- palette (9 keys) → stage/page/day/weekday/header/label/bill/coin style setters. ✓ (9/9)
- enterMs/holdMs → render divisors + schedule. ✓ · stage.width → stage + all horizontal derivation + validation contract. ✓
- layout (16 keys) → page/label/prop geometry + fit pads + coin offset. ✓ (16/16)
- schedule (8 keys: firstPageDelayMs, secondPageGapMs, dotsGapMs, propsGapMs, bodyFillGapMs, coinGapMs, fadeMs, durationMs) → phase machine; prop phase completion derived from bodyFillGapMs + coinGapMs + enterMs per the interim reusability cure (the superseded propsMs key was removed, not left unapplied). ✓
- style.radiusPx → page + bill border-radius setters · .enterScaleFrom → entrance transform · .holdScaleTo/.holdRisePx → hold zoom/settle transform · .billPadYPx → bill padding setter. ✓ (5/5)
- type (11 keys incl. billBodyPx) → font sizes via fitPx/direct + inkWidth fractions (both fractions now validated positive ≤1). ✓ (11/11)
- Unapplied keys: **0.**

## 3. CSS-variable setter check
No CSS variables; every CONFIG value is consumed through JS style setters at build/render time. Setter-missing references: **0**.

**HIT list: EMPTY (0 hits).**
