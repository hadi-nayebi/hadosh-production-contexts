# fit-table — T178 fade-from-black colonnade reveal · attempt 1 (guard-measured-fit leg, A6)

Technique form: **text-free**. No text is the subject in this technique (RUN §1b/§2: no title, no logo in the specimen; the scene renders NO text elements at all). 

## Text rows
| element | disposition |
|---|---|
| (none — no subject text elements exist in recreation.html) | **N/A** — the measured-fit leg's text rows price text fitting its container; this build contains zero text elements by construction (purity grep + source read confirm no text nodes in the scene). A text row cannot be measured where no text exists; the leg's text class is inapplicable, priced here with its reason, not silently omitted. |

## Geometry rows (measured from the build's own functions / source geometry, 960×540 stage)
| element | measured | container | margin / note |
|---|---|---|---|
| black overlay | inset 0 → covers 960×540 at every t; opacity from `overlayOpacityAt` (harness: 1 @150ms · 0.3149 @500ms · 0 @700ms · 0 @960ms) | full stage | exact cover, no gap |
| scene scale settle | scale 1.045 @t=0 → 1.0225 @475ms → 1.000 @650ms (harness raw) | stage, transform about centre (480,270) | at max scale the scene overfills the stage symmetrically (overflow hidden) — no black gap can appear at the edges during the settle |
| columns (×2, from CONFIG.columnCount) | col centres x=120 and x=740, body width 80, cap width 104 → spans 68–172 and 688–792; height 26–486 | stage 960×540 | fully in-frame at scale 1.000 |
| textile strands (×26, from CONFIG.textileStrands) | x from 560 to 680, y 96 to ~340 (strand length 235 + sway ≤9) | stage | fully in-frame; strand count asserted by harness (count.textileStrands default: 26) |
| tables (×3) | spans x 330–680, y 320–470 | stage | fully in-frame |

## HIT list
**Empty — PASS for this leg** (text class N/A with reason printed above; geometry rows measured, none failing).
