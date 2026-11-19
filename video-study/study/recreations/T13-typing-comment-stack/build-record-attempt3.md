# T13 — Typing Comment Stack · BUILD RECORD (attempt 3)

Artifact: `recreation.html` · Final source binding: sha256 `7c2cc6a52c4d0e7c2a5365a7fbda8a21f4c388c0efff2df47bcdcfc9c63cc9cc` · Frozen content copy: `recreation-attempt-3-frozen.html` (same sha, distinct inode — verified at freeze).
PIXEL-UNVERIFIED: no render route exists in this seat; every geometry/type claim below rests on the source-bound displayed-state model, not on rendered pixels.

## Observed anchors (evidence the build is priced against)

- One evidence frame at the window start: first card complete, second card mid-typing showing the prefix "Chief Executive", pale-blue tint on the active card.
- Catalogue window 12,000 ms; documented opening offset 2,250 ms (pre-window priced beats: first card entrance + typing + landing hold, second card entrance + 15-grapheme prefix typing).
- Entrance translation and any scrolling behaviour are NOT evidenced by the single frame; the entrance displacement in this build is a construction choice and is printed unverified as specimen fidelity.
- Whether the specimen itself settles on landing is NOT evidenced; the landing colour behaviour below is a construction choice, not a specimen claim.

## Construction summary (neutral behavior names)

1. **Opening anchor** — the schedule opens mid-sequence: card 1 pre-landed, card 2 pre-typed to the configured prefix. The anchor applies only when at least two cards exist and the prefix is a grapheme prefix of card 2; a one-card configuration schedules its card normally from t=0.
2. **Measured fitting** — titles and chrome rows are fitted before playback. When a canvas 2d context exists, text is measured with the configured font string (weight/size/family from the same tokens the styles consume); the wrap simulation collapses whitespace as normal flow does, moves whole words to the next line when they fit, breaks over-wide words at grapheme boundaries, charges marked-span padding once per line fragment the span occupies, adds configured letter spacing, rounds widths up, and adds a 1px-per-line epsilon. When no canvas exists, a per-character-class ESTIMATE table is used: it is not a measurement and carries no upper-bound guarantee; on that path an element is accepted only at ≤90% of its bound and is otherwise rejected as uncertain.
3. **Fail-closed validation** — if the effective configuration fails any named check (title unsupported, fit uncertain, chrome overflow, stack overflow, beat invalid, prefix mismatch, card count unsupported), playback never starts: no card is constructed into the playing stack, the banner names the errors, the machine-readable record is exposed, and the clock controls hold the error state as no-ops.
4. **Override handling (single policy)** — a malformed or out-of-range override value is discarded before validation and recorded in a separate machine-readable outcomes list; it never freezes playback by itself. Strict full-string numeric parsing is used (trailing junk and non-finite values are discarded, defaults kept).
5. **Complete geometry tokens** — stamp placement and typography, post-card shadow, marked-span padding and radius, badge geometry, caret dimensions, entrance displacement, card foot spacing, banner geometry, and handle/sort opacities all live in the per-mode token sets and are applied from the ACTIVE mode's set (including the card border width, applied per mode at layout time).
6. **Landing as a priced visual property** — on landing, the card's background and border colours interpolate over the configured landing duration from the typing colours to configured landed colours. The interpolation is computed from performance time, so its midpoint is a determinate state.
7. **Performance-time rendering** — entrance progress, landing interpolation, and caret phase are all pure functions of performance time t computed in the render step. The file contains no CSS transition and no CSS animation. A sampled state at time t fully determines the displayed state, identically after restart and after reverse seeking. The caret is one persistent element per card whose opacity is the t-function; it is never recreated per grapheme.
8. **Active-card tint** — while a card is typing it carries a configured pale-blue-derived background tint, distinct from both the resting and landed backgrounds; title text contrast over both tint backgrounds is modelled in the displayed-state checks.
9. **Window accounting** — an accounting record is computed from the built schedule and exposed on the API: catalogue window, opening offset, derived performance duration, and the residual hold token. The residual is accounting metadata: it does not extend the performance duration and does not affect the comparison page's slaved clock. The specimen identity (offset + performance + residual = catalogue window) is asserted only for the default configuration; under content or rate overrides the record recomputes and reports the residual as non-specimen accounting with the identity flag false.
10. **Added-card beat rule** — when a content override extends the card list, added intermediate cards receive the configured intermediate landing hold; only the true final card carries a zero per-card hold plus the ending beat. The opening prefix is derived from the replacement second card (its first 15 graphemes), never retained from the default content.
11. **Cluster-preserving segmentation fallback** — without Intl.Segmenter, segmentation keeps base + combining marks (Mn/Me/Mc), variation selectors, emoji modifiers, ZWJ-joined sequences, regional-indicator pairs, and keycap sequences in one cluster. Boundary (printed, not silently mis-split): clusters requiring full UAX #29 extended rules beyond those classes, e.g. Indic conjunct stacks beyond Mc/Mn attachment.
12. **Phone caret scale** — the narrow-layout caret height equals the narrow title font token (≈14.0px at 360px wide) and its width scales proportionally (≈2.5px); the wide caret is proportional to the wide title token.

## Feasibility filing (pre-finalization valve)

Named runnable instrument: `t13-verify.js`, section F (feasibility) + full suite — copy preserved with this attempt's working papers; instrument sha256 `4040316f78ec5e3682c2695ac08b8133a8077e3ae1e7b28bc765135fd1a7adf7` (the instrument extracts the built script and runs it under a DOM stub in Node; in that environment the fitting path is the ESTIMATE path, which is the conservative path for this valve).
Valve result at 360px (ESTIMATE path): post height modelled from its wrapped state = 37.17cqw (no fixed allowance); stack 152.53cqw ≤ available 181.71cqw; all six default titles ≤2 lines (widest line 276.4px of 312.9px inner, outside the uncertainty band); all header rows fit; title 14.00px, header/foot 11.02px at 360px. Wide: stack 51.04cqw ≤ 53.73cqw. VALVE: PASS — the build proceeded whole; no split was invoked.
Priced limitation found by the valve's per-count extension: at the current tokens, seven cards already exceed the wide stage height and eight exceed both stages, so counts 7–8 with typical titles end in the named stack-overflow freeze rather than playback. The schedule remains coherent and the total positive at every count 1–8; the freeze is the named, fail-closed outcome for a configuration the stage cannot contain.

## Displayed-state model (source-bound, incl. wrapped states)

| Quantity | 1916px wide | 360px narrow | 390px narrow |
|---|---|---|---|
| Title font | 35.45px | 14.00px | 15.17px |
| Header / foot font | 23.95 / 22.03px | 11.02px | 11.94px |
| Title lines per card (default content) | 1,1,2,2,1,1 (modelled, ESTIMATE path in the instrument environment) | 1,1,2,2,1,1 | 1,1,2,2,1,1 |
| Header row (avatar + gaps + handle + badge incl. padding + timestamp) | fits inner width | fits (182px of 313px) | fits |
| Post body wrapped lines | modelled | 4 lines → post height 37.17cqw (measured from the wrapped model) | modelled |
| Stack vs available | 51.04 ≤ 53.73cqw | 152.53 ≤ 181.71cqw | 152.53 ≤ 181.71cqw (cqw-invariant) |
| Caret beside its title | 0.5cqw × 1.85cqw (title token) | ≈2.5px × 14.0px (title token) | ≈2.7px × 15.2px |
| Tint contrast (title ink over typing / landed background) | 11.10:1 / 13.13:1 (modelled) | same colours | same colours |

Wrapped states are enumerated per title at each reachable line count (1-line and 2-line line-box heights enter the card-height model); the two-line maximum is enforced twice: by validation (a title needing a third line freezes) and by a token-derived CSS max-height backstop on the title element (a backstop, never the fitting mechanism).

## Consumption census (every CONFIG key → its consumed effect)

Rendering keys — each drives the named constructed/computed effect; the own-check suite mutates representatives of every group and asserts the effect (check ids in the evidence section):
- `opening.offsetMs` → schedule pre-window placement + accounting record · `opening.firstCardLanded` → opening-anchor applicability · `opening.secondCardPrefix` → card 2 pre-typed count at t=0
- `finalHoldMs` → derived total duration · `landMs` → landing interpolation progress at fixed t · `caretBlinkMs` → caret opacity phase function · `maxCards` → card-count validation · `maxTitleLines` → title validation + CSS max-height backstop · `narrowBreakpointPx` → mode selection · `narrowStageAspect`/`wideStageAspect` → stage aspect + available-height model
- `intermediateHoldMs` → added intermediate cards' landing holds
- `post.author/handle/closeMark` → post header text nodes · `post.bodyBefore/bodyHighlight/bodyAfter` → post body text + marked span · `post.stampText` → stamp text · `post.actions[]` → post foot spans
- `commentsTitle`/`sortLabel` → comments header text · `cardFooter.mark/label` → card foot spans
- `cards[].text` → typed graphemes + fitting input · `cards[].highlight` → marked range in title · `cards[].handle/badge/when` → header row (fitted jointly) · `cards[].initials/avatarHue` → avatar disc + gradient
- `beats[].appearMs` → entrance progress duration · `beats[].charMs` → typing span · `beats[].holdAfterMs` → next card's start
- `cardTemplate.*` → identity of override-supplied cards (same fields as `cards[]`)
- `layout.{wide,narrow}` geometry strings (postLeft/postTop/postWidth, commentsLeft/Right/Top/Bottom, radii, paddings, fonts, margins, gaps, avatarSize, stamp*, postShadow*, mark*, badge*, caret*, entranceDy, cardFootGap, banner*, postHandleOpacity, sortOpacity) → applied as CSS variables of the same name and consumed by the stylesheet rules for the post card, stamp, marks, badges, caret, cards, banner and headers · `layout.*.cardBorderCqw` (numeric) → card border-left width applied per active mode at layout time · `layout.*.stackGapCqw` (numeric) → card top margins + stack-height model
- `palette.bg` → stage background · `palette.postBg/postInk` → post card colours · `palette.cardBg` → resting card background · `palette.cardBgTyping` → typing background + landing interpolation start · `palette.cardBgLanded/cardBorderLanded` → landing interpolation targets · `palette.cardInk` → card text · `palette.accent` → card border + typing border · `palette.badgeBg/badgeInk` → badge colours · `palette.avatarInk/avatarSat/avatarLightA/avatarLightB/avatarHueSpan` → avatar gradient · `palette.highlightBg/highlightInk` → marked spans · `palette.stampInk` → stamp text + border · `palette.caret` → caret background
- `fontFamily` → stage font + measurement font string

Metadata keys (outside the rendering census, by ruling): `catalogueWindowMs` + `postWindowHoldMs` → consumed only by the window-accounting record described in area 9 (mutating them changes that record and nothing rendered) · `beats[].reason` → human record beside each priced beat, consumed by no code path.

## Own-check evidence (instrument: `t13-verify.js` as above; extracted script also passes `node --check`)

Full suite on the frozen source: **56 PASS, 0 FAIL**, in groups:
- Feasibility F1–F7 (above).
- Default behaviour D1–D20: no validation errors; derived total 8,808 ms; accounting identity holds for the default configuration; opening state exact at t=0 (card 1 landed colours, card 2 tint + prefix, later cards hidden); fixed-time landing states before / midpoint / after the landing instant; identical states after restart and after reverse seeking; caret phase values at sampled times; caret element identity stable across renders; landing-duration and landed-tint mutations change the computed states.
- Counts E1–E2: positive totals and strictly sequential schedules at every card count 1–8 (counts whose stack cannot fit end in the named overflow freeze only); the one-card case schedules from t=0 with no pre-landed state.
- Override policy P1–P5: trailing-junk, non-finite, and junk-suffixed values are discarded and recorded in the outcomes list with defaults intact and no freeze; zero gap is lawful; an accepted rate override recomputes the accounting as non-specimen.
- Freeze Z1–Z4: an overlong effective title freezes — zero cards in the stack, banner shown, clock controls no-op.
- Added cards H1–H3: intermediate added hold >0, true final hold 0, prefix derived from the replacement card.
- Segmentation G1–G7 (fallback forced): combining sequence, ZWJ family, flag pair, skin-tone emoji, keycap each = 1 cluster; marked-range lookup lands on the right grapheme index after combining content.
- Swap S1–S2: replacement titles + rate + accent — all type fully, strictly sequential, totals re-derive with no compression.
- Model M: containment at 1916/360/390, caret = title token at phone widths, tint contrast ≥4.5:1.

## Swap test

Supported set (above, S1–S2): PASS at logic level. Unsupported set: the overlong-title swap asserts the frozen error state instead of clipping (Z1–Z4): PASS.

## Purity + asset inventory

Purity grep on the frozen source for external-media patterns (`segment.mp4|source.mp4|<video|<img|.jpg|http://|https://|url(`): **0 hits**. The string "feet.png not found" appears only as typed title text. Asset inventory: code only — avatars are code-drawn gradient discs with text initials; no specimen media, no traced imagery, no external assets.

## Comparison check

`comparison.html` is unchanged (its ORIGINAL side byte-identical to its preserved snapshot). The shared control set drives this build through the same API names with the same semantics (setTime / play / pause / restart / schedule end / validation record), so no re-pointing was needed and none was made.

## Limitations (printed with every claim from this build)

- PIXEL-UNVERIFIED: no rendered-pixel evidence exists for wrapping as rendered, marked-span padding as rendered, containment as rendered, or entrance behaviour as rendered; the model above is source-bound.
- Fitting in a real browser uses canvas measurement; the instrument environment exercised the ESTIMATE path. Where the configured font has not loaded, measurement is classified uncertain and fails closed.
- Entrance displacement and landing behaviour are construction choices; the single evidence frame cannot settle them as specimen facts.
- Segmentation boundary as printed in area 11.
