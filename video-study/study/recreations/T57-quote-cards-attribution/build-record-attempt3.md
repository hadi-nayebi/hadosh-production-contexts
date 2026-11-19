# T57 — Quote cards with named attribution · build record (attempt 3)
Practice Cycle 010 · Wave 9 · Packet #3 (Epochs in Ink, "Van Hollen vs Schumer: Who Has the Votes?", YouTube o1FsB1nyEWI)
Artifact dir: `hidden_files/study/recreations/T57-quote-cards-attribution/`
Bound build: recreation.html sha256 f8b0735ca57335f6fca2486b8936c3e785ca8dcaf34950c2bedc05b24c8f19e3

## Neutral technique facts
- Load-bearing quotes get their own full cards, verbatim, with speaker + occasion attribution; the citation layer is designed cards, never screenshots. Instances in the source: a wire-service line on a senator ("Made a career of doing favors for his colleagues."), a news-outlet line on a leader's private commitments ("Range far beyond his public ones.").
- A card is one designed unit: dark slate panel, gold open-quote glyph, gold left rule, quote in white lines, attribution line with the speaker in bold white and the occasion in gold italic.
- The card sits inside a larger scene; the scene furniture (portraits, ballot stacks, calendar prop, tally boards) is not part of this technique.

## Segment states (filed segment, 14.000 s, frames viewed at 2 fps)
| seg t | state |
|---|---|
| 0.0 | scene stands; no quote card |
| 0.5 | first card present, mid-fade — quote lines and attribution together as one unit |
| 1.0 | first card fully opaque and complete |
| 8.0 | first card still fully present |
| 8.5 | scene zoom-out transition; the card exits with the scene |
| 9.0–11.0 | a different board fills the scene; no quote card |
| 11.5 | second card faint, entering at the lower left |
| 12.5 | second card fully present with its attribution in full |
| 13.5 | second card holds |
The sampled states constrain the animation intervals (a state partial at one sample and complete at the next constrains completion to the interval between them). The exact interval endpoints in the configuration are construction values chosen inside those constraints: first card entrance 0→1000 ms, first card exit 8000→9000 ms, second card entrance 11000→12500 ms.

## Construction
- One mounted DOM card (panel, glyph, quote-line divs, attribution line with speaker + occasion spans) inside a scene layer inside the stage, driven entirely by a CONFIG block: quote list (text, speaker, occasion, per-quote entrance start/duration, exit start/duration, optional per-quote anchor), palette, entrance mode, lifecycle mode, default entrance/exit spans, exit scale end value, hold duration, contrast floors and fallback policy, layout (stage size and aspect, anchor fractions, card width, padding, rule, height budget, shadow geometry), and type settings (sizes, weights, quote/glyph/attribution line heights, gaps, fit guard, size floors).
- Opacity ownership: in unit mode the card element alone carries the entrance/exit opacity and its children render at full opacity inside it, so every part of the card displays at the same effective opacity. In the staggered variant the parent carries the exit fade only and each child carries its own entrance progress, so no progress value is applied twice to the same content.
- Exit transform: one exit progress drives the scene layer's scale from 1 toward the configured end value (0.92 in the default configuration); the card is a child of the scene layer, so the same transform carries the card while the parent opacity fades it. The scene layer's scale returns to 1 for the second card.
- Anchors: a card's anchor fractions position the card's CENTER (left/top set from the fractions; the transform translates by half the card's own size). The global default is centered (0.5, 0.5). The second card's configured anchor is (0.37, 0.66) — the lowest-left center that keeps the full card inside the stage at the default card size (card width fraction 0.72 puts the left-edge limit at a center fraction of ≈0.36; the modelled card height caps the vertical center at ≈0.66). Transformed bounds were modelled at entrance (entrance scale 0.96 contracts about the center), hold, and exit (scene scale ≤ 1 contracts toward the stage center) for both cards: all inside the stage (model level).
- Timeline: every quote is wrapped and every start time is computed into a fixed table before playback begins; the render function is a pure function of time over that table, so a direct seek and sequential playback select the same card with the same opacities. In sequence mode, starts accumulate from spans; a staggered span runs from the entrance interval through the line reveals to the attribution's completion, plus the hold.
- Schedule validation, reported in the diagnostics object (`window.__T57.diagnostics()`): scheduled entrances must be in chronological order — an out-of-order schedule is rejected, reported in `validationErrors`, and the previous timeline is left unchanged; overlapping entries and exits that begin before their entrance completes are flagged in `overlapWarnings`; when the quote font reaches its floor and the complete card still exceeds the height budget, the excess is recorded in `fitOverflow`/`fitOverflowMaxPx`; a color that still falls short of its contrast floor after the fallback's step cap is recorded in `contrastFailures`; a color value that is not a six-digit hex string is recorded in `invalidColors`. A shorter configured duration extends to the derived requirement, recorded as `extendedDurationMs`.
- Text formation: greedy word wrap against canvas-measured text at the configured font; available width is the card width minus actual padding minus the rule. The attribution block is measured by a wrap simulation over the same available width: the attribution string is split on whitespace runs (each run collapses to one space, as the rendered inline spans do), every token is measured in its own role font (speaker weight; occasion italic at its weight), the speaker–occasion gap (configured, in em) is counted once and only when the occasion's first token lands on the same line as preceding content, a token wider than the available width is hard-split at character level, and the resulting line count is unbounded. The attribution renders with its own configured line height, and the vertical fit prices the attribution as simulated lines × attribution size × that line height. Vertical fit prices the complete card — padding, glyph (at its configured line height), gaps, quote lines, attribution — and shrinks the quote font toward its floor until the whole card fits the configured height budget. Measurements rebuild on resize and when fonts finish loading.
- Contrast: text colors (quote ink, speaker ink, occasion) must clear a 4.5:1 floor against the panel and the accent a 2:1 floor; under the configured "lighten" fallback policy a shortfall color is lightened toward white in fixed steps until it clears, and the adjusted value is what renders. The page background is applied at the document root.
- No external assets; no specimen media; the quote text is the technique's subject, rendered as DOM text.

## Own-check results (logic level; suite filed in the run directory)
108 checks, all passing. Coverage, in neutral terms:
- Displayed states at ten sampled instants (0 / 500 / 1000 / 8000 / 8500 / 9000 / 11000 / 11500 / 12500 / 14000 ms) match the segment-state constraints, including partial states at 500, 8500, and 11500 ms.
- Unit entrance: the displayed effective opacity (parent × child) of a quote line, the attribution, and the glyph equals the entrance progress at five points across the entrance.
- Exit: the scene layer's scale is midway to its configured end value at the exit midpoint and reaches it at completion; the second card's anchor positions its center at its configured fractions; the scene scale resets for the second card.
- Containment: both cards fully inside the stage at hold in the bounds model; the entrance and exit transforms contract bounds, so the hold result carries to those states.
- Fit at a 360 px stage: both complete cards fit the height budget; attribution at 14.0 px; attribution wrap simulation gives 1 line for the first card, 2 for the second, and 6 for a long-attribution swap (unbounded); changing the attribution line-height value changes the modelled card height.
- Contrast: quote ink, speaker ink, and occasion all clear 4.5:1 against the panel; the accent clears 2:1; the page background is set at the document root.
- Variants: staggered entrance keeps the parent at full opacity during the entrance and carries the exit fade at the parent during the exit; sequence starts accumulate from spans including attribution completion in staggered mode; a direct seek and a sequential sweep select the same card at the same opacity with mixed-length quotes.
- Validation: an out-of-order schedule is rejected and reported with the previous timeline unchanged; an overlap and an early exit are flagged; fit overflow at the size floor is reported with its amount; unrepairable contrast on a light panel is reported; a non-hex color value is reported without throwing; a too-short configured duration extends with the extension recorded; a failing text color is lightened to its floor under the fallback policy; resize recomputes the timeline; an empty quote list renders nothing without throwing.
- Consumption census: every CONFIG key (60 keys, including per-quote fields) was probed by mutation — changing the key changes an observable rendered or computed effect; unconsumed keys: 0. Literal census: no hex colors outside CONFIG; every numeric literal outside CONFIG is on a printed structural whitelist (indices, clamp bounds, parser constants, centering/percentage identities, WCAG formula constants — the full per-literal classification is filed in the config census leg).
- Purity: searches for specimen-media references in the recreation source return zero hits; no video, image, or external URL appears in the file.

## Pre-scoring legs (filed in the artifact directory)
- Measured fit: fit-table-attempt3.md — 0 HITs (model level; the estimator's token, whitespace, and width handling is stated in the table).
- Config census: config-census-attempt3.md — 0 HITs (per-literal classification printed there).

LIMITATION — PIXEL-UNVERIFIED: no browser render route is exercisable in this seat; verification is logic-level (stubbed-DOM harness) plus font-metric measurement with a stand-in serif. All visual claims carry this limitation.
