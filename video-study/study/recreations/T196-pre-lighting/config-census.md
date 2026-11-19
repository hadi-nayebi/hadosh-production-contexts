# T196 — Config-census leg (A6, guard-config-census v3.1) · attempt 1 · REFILED Cycle 036 on the completion-cured build

File: recreation.html (9,210 B, SHA-256 80f16c832df567465c8a51ceed85794a76df46d34cc0eecfa47f95a286873d18). REFILED at the Cycle-036 A12.3 completion cure: fitCard's `fits` now judges width as well as height (maxWordW + per-line widths against boxW), and the startup fit loop's results are consumed into `fitReport` (retained, exposed on `window.__T196`, branched on via `stage.dataset.fit`). The stage background application from `CONFIG.bg` stands as cured in Cycle 035.

## 1. All-literal scan (outside the CONFIG block)
Hex colors outside CONFIG: `#111` (page background chrome), `#181818` (control-bar chrome), `#888` (HUD chrome gray), `#000` (stage fallback, restates CONFIG bg). All four are page chrome, not subject-shaping: the subject's colors (bg #000000, unspoken #f5f5f5, spoken #ffe600) live only in CONFIG. Classification: structural/chrome — exempt, printed per guard §1.
Numeric literals outside CONFIG: CSS chrome sizes (8px/6px paddings, 12px HUD font, 14–16px button font, 50%/100% layout identities, 16/9 aspect identity), the word margin `0.18em` in the `.w` CSS rule, the fit loop step `2`, and the comparison-free constants `9/16` in fitCard's stage-height derivation. The Cycle-036 cure added NO new numeric literals (width judgment compares measured widths against the already-derived boxW/boxH; the fit-status strings "ok"/"fail" are status labels, not shaping values). Classifications:
- `0.18em` word margin — geometry of the subject line BUT identical for every word/state and already reflected in the fit measurement; it does not shape state, timing, or content. Classified structural-fixed — CARRIED as a noted borderline (a future re-attempt may promote it to CONFIG as `wordMarginEm`); not a HIT under this leg's class (it promises no CONFIG control it fails to exert, and no lens can price it against the subject's state behavior).
- Fit step `2`, `9/16`, indices/loop bounds — structural (mathematical/layout identities), exempt.
- No durations, no palette values, no geometry coefficients for any background layer (there is no background layer — still black stage) exist outside CONFIG.

## 2. CONFIG key → application-site resolution (value-flow checked)
| Key | Application site (value flows into) |
|---|---|
| windowStartS | record/label binding (segment trim documentation) + the CP3b census-anchor expression in the verification harness; not read by the animation logic — see note below |
| headHandleS | comparison contract: comparison.html now READS this key from the recreation's CONFIG when deriving its card-3 seek target (Cycle-036 cure) + record documentation |
| timingScale | derive(): every card/word onset + finalHold scaling |
| finalHoldMs | derive(): totalMs = lastFlip + finalHoldMs × timingScale |
| epsilonMs | assertion instants in the verification harness (build-record) |
| bg | stage background applied to the stage element from CONFIG in the script (`stage.style.background = CONFIG.bg`; CSS #000 is the pre-script fallback) + contrast computations consume CONFIG bg |
| unspoken{color,opacity,weight,scale} | render(): span style for unspoken words (all four fields applied) |
| spoken{color,opacity,weight,scale} | render(): span style for spoken words (all four fields applied) |
| contrastFloor | harness contrast assertions (own-checks) |
| pairDeltaEMin | harness ΔE assertions (own-checks) |
| stageBox{widthPct,heightPct} | box element sizing at load + fitCard() box derivation |
| font{family,lineHeight} | card element style at buildDom() |
| font{minSizePx,maxSizePx} | fitCard() shrink loop bounds |
| font{wrap,overflow} | policy labels consumed by the fit leg's contract (fit-table.md) — declarative policy keys |
| cards[].onsetMs | derive() + activeCardAt() phase machine + comparison.html's CONFIG-derived card-3 seek |
| cards[].words[].w / onsetMs | buildDom() span text + stateAt() spoken derivation |

Notes (printed, not hidden): `windowStartS` is a binding/documentation key whose value flows into the segment binding and the CP3b census-anchor expression rather than into the animation; it is not promised animation control. `font.wrap`/`font.overflow` are declarative policy keys whose enforcement is the fit leg + fitCard loop. None of these is an unapplied animation key of the T130 class (no geometry/timing/color key lacks a value-flow site into its named subject).

## 3. CSS-variable setter check
No CSS variables are used anywhere in the file (no `var(--…)` references, no setters). Check: PASS vacuously — the false-negative class cannot occur.

**HIT list: EMPTY — PASS for this leg (0 hits).** One borderline classification carried in print (0.18em word margin, §1 above).
