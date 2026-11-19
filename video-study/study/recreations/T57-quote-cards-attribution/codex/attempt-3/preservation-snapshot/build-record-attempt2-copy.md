# T57 — Quote cards with named attribution · build record (attempt 2)
Practice Cycle 009 · Wave 8 · Packet #3 (Epochs in Ink, "Van Hollen vs Schumer: Who Has the Votes?", YouTube o1FsB1nyEWI)
Artifact dir: `hidden_files/study/recreations/T57-quote-cards-attribution/`

## Neutral technique facts
- Load-bearing quotes get their own full cards, verbatim, with speaker + occasion attribution; the citation layer is designed cards, never screenshots. Instances in the source: a wire-service line on a senator ("Made a career of doing favors for his colleagues."), a news-outlet line on a leader's private commitments ("Range far beyond his public ones.").
- A card is one designed unit: dark slate panel, gold open-quote glyph, gold left rule, quote in white lines, attribution line with the speaker in bold white and the occasion in gold italic.
- The card sits inside a larger scene; the scene furniture (portraits, ballot stacks, calendar prop, tally boards) is not part of this technique.

## Segment re-observation (this build, firsthand)
The filed segment (14.000 s) was extracted at 2 fps and the frames viewed directly:
| seg t | state |
|---|---|
| 0.0 | scene stands; no quote card |
| 0.5 | first card present, mid-fade — quote lines and attribution together as one unit |
| 1.0 | first card fully opaque and complete |
| 8.0 | first card still fully present |
| 8.5 | scene zoom-out transition; the card exits with the scene |
| 9.0–11.0 | a different board fills the scene; no quote card |
| 11.5 | second card faint, entering at the lower left |
| 12.5 | second card fully present: "Range far beyond his public ones." with attribution to Semafor, on Schumer's private commitments |
| 13.5 | second card holds |
Event sequence: unit entrance → static hold → exit with the scene → gap → second unit entrance → hold to the window end. No per-line reveal event is resolvable at this sampling.

## Construction
- One mounted DOM card (panel, glyph, quote-line divs, attribution line with speaker + occasion spans), driven entirely by a CONFIG block at the top of the file: quote list (text, speaker, occasion, optional scheduled start and exit times), palette (panel, ink, accent, speaker ink, occasion, field), entrance mode, lifecycle mode, entrance/exit/hold durations, contrast floors and fallback policy, layout fractions (card width, padding, rule, height budget, shadow geometry), and type settings (sizes, weights, line height, gaps, fit guard, size floors).
- Entrance modes: "unit" (the default — panel, glyph, every quote line and the attribution share one fade + scale progress over the entrance duration) and "staggered" (an optional variant that reveals lines one by one after the panel lands). Lifecycle modes: "specimen" (the default — quotes render on their scheduled starts and exits) and "sequence" (starts accumulate from entrance + hold spans).
- Timeline: every quote is wrapped and every start time is computed into a fixed table before playback begins; the render function is a pure function of time over that table, so a direct seek and sequential playback select the same card with the same opacities. The duration the sequence requires is derived from the table; a shorter configured duration extends to the requirement and the extension is reported in a diagnostics object.
- Text formation: greedy word wrap against canvas-measured text at the configured font; available width is the card width minus actual padding minus the rule. Vertical fit prices the complete card — padding, glyph, gaps, quote lines, and the attribution at its wrapped line count — and shrinks the quote font toward its floor until the whole card fits the configured height budget. Measurements rebuild on resize and when fonts finish loading.
- Contrast: text colors (quote ink, speaker ink, occasion) must clear a 4.5:1 floor against the panel and the accent a 2:1 floor; under the configured "lighten" fallback policy a shortfall color is lightened toward white in fixed steps until it clears, and the adjusted value is what renders. The page background is applied at the document root.
- No external assets; no specimen media; the quote text is the technique's subject, rendered as DOM text.

## Own-check results (logic level; suite filed in the run directory)
34 checks, all passing:
- Precomputed timeline: two scheduled quotes at their observed starts; first card's exit at its observed window; second card's attribution carried in full.
- Displayed states: at half-entrance every line and the attribution share the card's opacity (unit mode) and the transform is a scale with no vertical translation; entrance complete at the entrance duration; exit half-faded at its midpoint; no card visible in the inter-card gap; second card complete after its entrance and held at the window end.
- Fit at a 360 px stage: the complete card fits the height budget; attribution renders at 14.0 px and the first card's attribution fits one line.
- Contrast: quote ink, speaker ink and occasion all clear 4.5:1 against the panel; the accent clears 2:1.
- Seek equivalence: with three quotes of mixed lengths in sequence mode, a direct seek and a sequential sweep select the same card at the same opacity; sequence starts accumulate from spans.
- Duration: a too-short configured duration extends to the derived requirement with the extension recorded in diagnostics.
- Fallback policy: a swapped occasion color that fails the floor is lightened until it clears.
- Resize recomputes the timeline; an empty quote list renders nothing without throwing.
- Consumption census: every CONFIG key (50 keys, including per-quote fields) is consumed by an effect outside the CONFIG block. Literal census: no unlisted numeric or color literals outside CONFIG (whitelist of named structural constants in the suite).
- Purity: searches for specimen-media references in the recreation source return zero hits; no video, image, or external URL appears in the file. Both inline scripts parse cleanly.
- Comparison page: the recreation's control interface (seek / play / pause) is unchanged in shape, so the comparison page stands as filed; its original side is untouched.

LIMITATION — PIXEL-UNVERIFIED: no browser render route is exercisable in this seat; verification is logic-level (stubbed-DOM harness) plus font-metric measurement with a stand-in serif. All visual claims carry this limitation.
