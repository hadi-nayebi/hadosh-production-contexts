# T108 — guard-measured-fit output, ATTEMPT 2 (A-C008 leg 1, pre-scoring)

Filed as `fit-table-attempt2.md` because the plain `fit-table.md` is attempt 1's preserved leg output (create-once; never overwritten).
Method: PIL ink-bbox measurement (Liberation Sans, metric-compatible with the CONFIG Arial stack; text rendered at 200 px, ink bounding box scaled to local size) at the 360 px stage. States: DISTANT (world scale = startScale 0.65) and HOLD (end pose, endScale = 360/177 = 2.034, fitScale = 1). Font-size px and ink height are printed separately (A-C012-1): font-size at hold = local size × endScale × fitScale; ink height is the measured glyph bbox height under the same factors.
Basis (A-C012-1): all inner text units are screen-local px; model basis box = render basis box (text inside the screen div inside the single world transform). Row padding/wrapping boxes: rows carry rowPad left padding inside effRowW; the content transform origin is 0 0 with left/top recomputed per effective scale (fit × settle) in render; the screen div clips its content (overflow hidden); the cursor clip-path percentages resolve against the cursor element's own box (w × h from CONFIG).

| Element | Container | Ink width (local) | Visible width at hold | Ink height: distant / hold (stage px) | Font-size at hold |
|---|---|---|---|---|---|
| inner.title "Webpage" @9 px bold | screen 177×113 | 39.6 px | 177 px | 5.5 / **17.1** | 18.3 px |
| pill text "Motion Design Training" @7.5 px | pill 118×13 | 75.6 px | 118 px | 4.6 / **14.3** | 15.3 px |
| row "Result one" @7.5 px | row 130×11 (124 usable) | 35.0 px | 124 px | 3.6 / **11.2** | 15.3 px |
| row "Result two" @7.5 px | row 130×11 | 34.1 px | 124 px | 3.6 / **11.2** | 15.3 px |
| swap title (long copy) @9 px bold | screen | 265.0 px (wraps: 2 lines modelled) | 177 px | — / wraps inside window (modelled height 73.4 ≤ visibleH 99.8) | 18.3 px |

Hierarchy: title/pill ink-height ratio = 8.42/7.01 = 1.20 (local), identical at hold — measured size hierarchy, not hue-only. ✓
Clawback (ONE test, pre/post displayed ink at 360 px, PIL ink-bbox method both sides): pill 12.4 → 14.3 (+1.9) · rows 9.7 → 11.2 (+1.5) · fitScale 1 → 1 (naturalW unchanged at 130; naturalH 61.7) — minimum gain positive, no clawback. ✓
Legibility floor (~11 px ink height): every inner-scene element clears it in its reading state (hold: 17.1 / 14.3 / 11.2 / 11.2).

HIT list: **1 HIT carried, 1 HIT closed** —
- HIT-1 (carried, re-priced): inner-scene text in the DISTANT state measures 3.6–5.5 px ink height (ALL inner text measured at the distant checkpoint: title 5.5 · pill 4.6 · rows 3.6/3.6), below the floor. Disposition re-stated from attempt 1: the distant state is approach framing; the reading state is the hold, where every element clears. In the specimen the screen at the equivalent framing is blank teal — the build's inner content is present-but-unread there, the nested-DOM price of the no-swap mechanism. Residual price carried knowingly; this measurement is fed to the readability lens packet.
- HIT-2 (CLOSED by removal): the outer "Laptop" label element no longer exists — DOM census of the attempt-2 build lists texts ["Webpage","Motion Design Training","Result one","Result two"] only; the `outer.label` and `laptop.labelSize` CONFIG keys are retired.
