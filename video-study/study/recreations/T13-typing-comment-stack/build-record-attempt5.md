# T13 — build record (fifth build)

Source: `recreation-attempt-5-frozen.html`, sha256 `2712dc5ed115a1a34c4817d64d155c89b4b7cb6b4559ff71d611e17dc6f5389d`.
Preservation: the previous build's source and comparison page were verified as content copies (distinct inodes) matching the carried baseline hashes before any edit; the working file started from that verified copy.
PIXEL-UNVERIFIED: no pixel render route exists in this seat (a headless-browser probe was attempted and the browser is blocked by platform policy in this environment). Every geometry and behaviour claim below is bound to the source's own displayed-state model and to frame observations of the specimen segment, never to rendered pixels of this build.

## Unit basis (model basis = render basis)

| Unit as used | Basis box | Rendered consequence at a 360px stage |
|---|---|---|
| descendant `cqw` (all card/post/comments geometry) | stage content box, 339.84px | 1cqw = 3.3984px; supporting text 12.27px; title 14.10px |
| stage's own padding `cqw` | full stage width, 360px (no ancestor query container exists) | padding 10.08px per side |
| `%` position tokens (stamp) | post-card padding box | stamp top 62% of the modelled post height |
| `px` tokens | absolute | unchanged at every width |

The model carries both bases explicitly and derives every descendant size from the content box, which is the box the browser's container units resolve against.

## Displayed-state model

Every displayed state is a pure function of time and configuration: card opacity/transform from the appear instant and entrance duration; typed grapheme count from the type instant and per-card rate; the frontier gradient from the typed count and the landing window; the caret from the typing state and the blink phase; the comments header count from the number of landed cards; the stamp and all chrome from layout tokens. The schedule is derived, never stored: appear/type/end instants follow from counts, rates, holds, the entrance-overlap token and the ending budget.

## What changed in this build, with baseline-vs-after diagnostics

Attribution: **BUNDLED** — the changes below landed as one staged build with a checkpoint per stage; no single change is isolated as the cause of any quality movement.

1. **Unit derivation made explicit and corrected.** Baseline: descendant sizes were modelled against the full stage width while the browser resolves them against the content box, so modelled sizes ran large (supporting text modelled 12.02px at a 360px stage while rendering smaller). After: the model derives the stage's own padding on the full-width basis, subtracts it, and resolves every descendant unit on the content box. Joint-fit diagnostic at 360px: padding 10.08px/side, content 339.84px, supporting text 12.27px (floor 12px, clears), title 14.10px, card inner width 314.4px, stack 159.1 of 182.1 available. One token was re-priced under the corrected basis: the narrow title size 3.89 → 4.15cqw, because at the corrected basis the 49-grapheme title sat at 94.8% of a single line (inside the estimate-uncertainty band); it now takes two lines with its widest line at 278.4 of 314.4px.
2. **Consumption checks typed by key kind.** Baseline: consumption was asserted uniformly, which left stylesheet-only tokens unverifiable in a script environment. After: geometry tokens are tested by dual consumption (model + stylesheet variable), timing and content keys are tested by their displayed effects (a rate change moves a type end; a text change moves the derived count 31 → 30), and two negative controls prove the harness detects a removed stylesheet rule (timestamp weight rule; post-footer line-height rule).
3. **Unsupported units fail loudly; validation covers the used widths.** Baseline: an unsupported unit in a size token silently priced as the raw number, and validation modelled two widths. After: the size resolver throws on any unsupported unit and validation surfaces it as an error; validation models 360px, 390px, 1916px and the live runtime width, and re-runs on resize, freezing the frame loop while any error stands.
4. **Stamp geometry is modelled, not eyeballed.** Baseline: the stamp's position token (44%) placed its rotated rectangle over body text ink in the model, and a solver scan over every top percentage at the original geometry found **no** placement that is both contained and clear of body ink and the footer. After: the post carries a dedicated footer margin that opens a free band under the body text (the specimen's post is visibly airy at the same place), and the stamp sits in that band — top 62% narrow / 70% wide — contained, clear of every body line's ink and of the footer, asserted per width in validation.
5. **One canonical character sequence.** Baseline: whitespace folding also folded nonbreaking spaces, so fitting, counting and playback could disagree with CSS rendering on such text. After: a single canonical sequence (CSS-collapsible runs fold to one space, ends trim, nonbreaking spaces survive) feeds fitting, schedule counts, mark ranges and playback graphemes. Specimen counts unchanged: 31/30/47/49/25/22 graphemes, opening prefix 15.
6. **Ending budget is an input; beat reasons are derived.** Baseline: the ending hold was the residual that made the total fit (1972ms), and stored beat explanations carried a longest-line claim on a 47-grapheme card while a 49-grapheme card exists. After: the ending budget is an independent 2000ms input; the beats are priced so the final card completes typing at exactly 10000ms and the performance ends at exactly 12000ms with residual 0. Every beat explanation is generated at load from measured facts (grapheme counts, rates, holds), so replaced or added cards re-derive their own claims; the longest-line claim sits on the 49-grapheme card, the paired-lines claim on the 47-grapheme card before it.
7. **Frame-evidenced surface corrections (premise amendments).** The specimen segment was re-observed frame by frame, including consecutive-frame sequences around typing and landing events, before this stage was built. The observations contradicted three standing premises, and the build follows the observations:
   - **PA-1 — typing indication.** No card background ever changes colour in the segment; the word currently being typed carries a white-to-blue vertical gradient. The build renders exactly that: the frontier word (the trailing word of the typed portion) is a gradient span while typing and through the landing beat (the landing duration now prices this settle), and the card surface and border are constant. The previous background-tint and landing-interpolation tokens and their interpolation helpers are removed entirely.
   - **PA-2 — caret.** The caret in the frames is a thin vertical bar at the frontier, accent-coloured. Width tokens re-priced (wide 0.5 → 0.14cqw, narrow 0.7 → 0.42cqw, narrow margin 0.4 → 0.18cqw so the modelled caret extent stays under 0.15 of the title size); caret colour now the accent.
   - **PA-3 — entrance overlap.** Cards fade in while their first graphemes already type (one card is at roughly half opacity with two graphemes shown). A new overlap token (80ms) starts typing that long before each entrance fade completes; the intermediate holds were re-priced (720/700/700/752ms) so every derived instant is unchanged in total: appearances 1380/4060/6820/8892, typing starts 1480/4160/6940/9032, final completion 10000, end 12000.
   - **PA-4 — comments count.** The header count in the segment increments by one at each landing, starting at 4 with one card pre-landed: count = landed + 3. The header label is now derived at render time from a base-count token (3) plus the landed count; the fit model prices the worst case (all cards landed).
   - **PA-5 — highlighted phrases.** Frame observation prices the marked phrases per card: card 2 "What's", card 3 "Look" and "Complete", card 5 "Vibes" and "Synergy", card 6 "Artificial" (card 1's "Slopcore" already stood; card 4 none). Highlights are now a string-or-list value; fitting charges mark padding per range and playback renders one mark element per range.
   - **PA-7 — stamp placement** is item 4 above: solved from the model, not from a percentage guess.

## Deferred, with reasons (priced again at filing)

- The specimen's continuous camera pan and the late scene transition to a profile card: a scene-level rebuild, not a token change; not attempted in this build.
- Per-card landed furniture visible in the segment (status pills, a changing timestamp, small bars and chips) and photographic avatars: landed furniture is a per-card content system of its own; photographic avatars would break the build's no-external-media property and are not substituted.

## Checkpoint ledger (staged, create-once, content copies with distinct inodes)

| Stage | Source sha256 | Own-check output |
|---|---|---|
| 1 — unit basis | `72298564a3a720869b9bc35f4d894e7a20cc646ecbc42ffcc63d7d4b6050a600` | feasibility/basis sections 14/14 |
| 2 — consumption typing | `5431ffa7f2ea63a2c8910077cb1c1906c40f0f4ea1af42dc48a35f0ca41b0e9f` | basis + consumption 31/31 |
| 3 — units, widths, stamp | `fa04c2958e02fde286314da1ceedca1391a6fdf364835e40f70582d41804e8df` | 62 + 5 purity, all pass |
| 4 — canonical sequence, budget, derived reasons | `f59f457824f8aa431667547352fd0c594afe19fc34b70f37ea855b58e967c` | 105 pass, 1 fail (highlight ranges, owned by stage 5) |
| 5 — frame-evidenced surface, frozen | `2712dc5ed115a1a34c4817d64d155c89b4b7cb6b4559ff71d611e17dc6f5389d` | full suite 122/122 |

Feasibility was proven before building: the previous build's checking instrument passes 79/79 on the previous source, and the corrected-basis joint fit and the ending-budget schedule were recomputed by hand from the tokens before any edit (filed with the run's feasibility note).

## Own checks bound to this source

Full suite 122 checks, all passing: basis/feasibility 14, displayed states 12, consumption 17, unit completeness 19, widths/runtime/stamp 12, canonical sequence 8, timing 11, frame-evidenced motion surface 12, counts/swap/segmentation 8, comparison compatibility 4, purity/stylesheet 5. Measured-fit leg: 0 hits. Config-census leg: 0 hits. PIXEL-UNVERIFIED stands.
