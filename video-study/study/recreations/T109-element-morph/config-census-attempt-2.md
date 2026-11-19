# T109 — guard-config-census output, attempt 2 (practice Cycle 020 Wave 19, pre-scoring leg)

Census against attempt 2's OWN CONFIG (never attempt 1's). Instrument: the final own-check suite's mutation-based consumption census (A-C006-2: effect mappings, not counts) + A-C008-3 literal scan + A-C008-4 source-comment scan, run on the finished build (sha256 29de77e18ca45eac75ecc70fd6ba331ffa42e88f61319f145629271f8a83a87d).

## Consumed-effect mapping (A-C006-2 / A-C002-1)

CONFIG leaves enumerated: **95**. Every leaf carries a consumed effect, mutation-tested where behavioural:

- **Timing/schedule leaves** (holdAMs · countdown.stepMs · countdown.steps · morphMs · settleMs · holdBMs · loopFadeMs · cycleMs): each mutation moves a phase boundary (P0/P1/P2/C0–C5) or the residual; residual at the default config = 2500 ms ≥ 0, and an over-budget mutation (cycleMs 9000) produces a named validation problem and an "invalid" render state — never a silent truncation.
- **correspondence[] (5 entries × a/b/mode/stagger)**: consumed by the behaviour dispatch itself. Centrepiece mapping-change legs: cardMid mode collapse-down → collapse-to-point shrinks its width at mid-morph (170 → ≈58 px at the S2-stage sample); field b fieldBlack → none holds the field at its source colour at morph end; a non-zero field stagger (0 → 400) visibly delays the field's colour interpolation; each entry's stagger feeds its own trajectory.
- **countdown.label / countdown.joiner**: compose the displayed countdown text; a joiner mutation (" in " → " :: ") changes the rendered string exactly.
- **morph.\*** (clusterW/clusterH · centroidX/centroidY · sinkPx · radiusMax · yieldStart · settleAmp · titlePadX · countTopOffset · prepFraction · reveal.clearanceEnd/firstTriangleOnset/clusterOnset): each mutation moves its named rendered quantity (terminal card size, triangle mid-growth positions, centre sink travel, border radius at completion, yield opacity, settle overshoot size, title offset, countdown top, trajectory join value, clearance completion, staged onsets).
- **sceneA/sceneB leaves** (kinds → validation set; title → text node; geometry → element boxes; triangles color/cx/cy/s → rendered triangles; triClip → clip path): each mutation changes the rendered or validated state.
- **palette / outline / stage / type / ease leaves**: each mutation changes its rendered colour, ring, box, typography, or eased progress.

Unconsumed leaves: **0**.

## Literal census (A-C008-3)

Numeric literals in the script outside CONFIG: **{0, 1, 2, 3, 5, 7, 16}** — every one whitelisted as a named structural constant: 0/1 = clamp bounds, loop starts, opacity endpoints · 2 = halving divisor + smoothstep coefficient · 3 = smoothstep coefficient + hex slice offset · 5/7 = hex slice offsets · 16 = hex parse radix. In the stylesheet: margin/padding 0 (reset) and page background #111 (outside the stage; the stage background is CONFIG palette.field). No unlisted literal. The attempt-1 defect class (a cycle constant and a text joiner stranded outside CONFIG) does not recur: both are CONFIG keys now, mutation-tested above.

## Source-comment scan (A-C008-4)

The attempt-2 source carries **no comments at all** — no cure codes, amendment labels, scores, or cure-to-lens commentary can contaminate a payload built from it. Scan result: 0 comments.

## HIT list

**0 HITs.**
