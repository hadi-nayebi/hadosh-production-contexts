# config-census — T178 fade-from-black colonnade reveal · attempt 1 (guard-config-census leg, A6, v3.1)

Build: recreation.html · SHA-256 `1549786b7b989e52096c96e287f1b996171c90f6d10af74d58f1a636db67ff21`
Plan constraint (binding): CONFIG carries **EXACTLY** the §2 T178 keys as amended by §2c.2 — no additional keys are lawful in this build. Scene-layout geometry therefore lives in the construction code by Plan design; it is classified below in the open.

## CONFIG key → application-site resolution (every key applied)
| key | value | application site(s) |
|---|---|---|
| blackHoldMs | 300 | `overlayOpacityAt`, `scaleAt`, `phaseAt` (hold boundary) |
| fadeMs | 350 | `overlayOpacityAt`, `scaleAt`, `phaseAt` (ramp duration) |
| durationMs | 3040 | clock clamp in `tick` + `__rec.seek` clamp |
| settleScaleFrom | 1.045 | `scaleAt` (settle start value) |
| fadeEasing | "easeInOutCubic" | `easingFor` resolver → used by `overlayOpacityAt` + `scaleAt` |
| columnCount | 2 | `buildScene` column loop (count + spacing) |
| textileColor | #b3402a | `buildScene` strand stroke |
| textileStrands | 26 | `buildScene` strand loop count + spacing |
| interiorColor | #17130f | `buildScene` interior rect fill |
| columnColor | #ddd3bd | `buildScene` column fills |
| tableColor | #cfc8b4 | `buildScene` table fills |
| accentLabel | "colonnade" | data-only: `stateAtWith` return (swap-harness identifier; never rendered — §2) |

Unapplied keys: **none**. CSS-variable setter check: no CSS variables are used — **no unset-variable references possible**.

## All-literal scan (literals outside the CONFIG block)
| literal class | instances | classification |
|---|---|---|
| stage geometry | viewBox 960×540, centre 480/270 | structural — fixed stage of the stand-in place; identical for any content driven through this technique |
| scene-layout geometry | table rects (3 positions/sizes), trunk x=646 w=9 h=330 + branch endpoints, textile rail x=560 w=120 top=96 len=235, column cap/body widths 104/80, offsets 120 + c×620 | scene-construction constants of the stylized stand-in place — they fix THIS place's layout, not the technique. The technique's shaping variables (hold, ramp, easing, settle, palette, counts) are ALL in CONFIG (§2 exact-keys table). Disposition: classified in the open; the reusability lens is free to price them — the swap test proves the technique re-drives from CONFIG alone. |
| shading opacities | 0.35 (back band), 0.14 (column shade), 0.92/0.6 (tables), 0.95 (strands) | scene-construction shading constants, same disposition as above |
| stroke widths | 3.4 (strands), 6 (branches) | scene-construction constants, same disposition |
| easing mathematics | cubic coefficients (4, −2, 3, /2), quad (1−x)² | mathematical identities of the named curves — structural (the curve CHOICE is CONFIG.fadeEasing) |
| loop bounds / indices | 0, 1, 2 in loops and clamps | structural |

## HIT list
**Empty — PASS for this leg**: every CONFIG key resolves to a value-flow application site; no key promises control it does not exert; no specimen literal appears anywhere in the file (purity grep 0 hits). The scene-layout constants above are printed with their classification and disposition, not hidden.
