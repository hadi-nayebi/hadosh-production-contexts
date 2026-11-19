# T13 — Typing Comment Stack · BUILD RECORD (attempt 2)

Technique: T13 · Packet P1 "Look What I Can Do" @ 1:08–1:20 · practice Cycle 004 Wave 3
Artifact dir: `hidden_files/study/recreations/T13-typing-comment-stack/`
Consumer: word-animation family (typing machinery kin to T03/T01).
Preservation: baseline recreation.html sha256 `92871de2d63a6d4bbd4b58c7f405ef181d6851a687ba00b23e5cdd73904f9e83`; preserved copy `recreation-attempt-1.html` hash-matches it. Baseline comparison.html sha256 `f0334795b08dfb3671b437b32e93ac48091ba48ed8cf64e2fc146e7aa8608b49`; snapshot `comparison-preserved-attempt-1.html` hash-matches it. Target attempt directory did not exist before this run.

## Pre-build filing 1 — E1 full-return read: constraints beyond the seat's priced inventory

All five prior lens returns, the prior build record, and the TECHNIQUES.md T13 entry were read firsthand before any code change. Four constraints appear in the returns that the seat's priced inventory does not name explicitly:

1. Avatar gradient saturation/lightness values and the white avatar/badge text colour are fixed values outside the configuration.
2. Long handles or badges have no fitting policy.
3. When a replacement title list has a different count, identity and timing are inherited by modulo reuse, which can repeat unintended metadata.
4. Reduced opacity on the timestamp weakens that small text in addition to the badge contrast item.

Disposition (filed before building, per the stop rule): none of these changes the scope of the planned construction. Items 1 and 4 are subsumed by the planned move of palette values into configuration and the phone type/contrast work; item 2 is subsumed by the bounded-wrapping + validation construction (handle/badge text participates in the same fitting model); item 3 is subsumed by the override handling (a replacement list replaces the card list with its own per-card beat pricing derived from position in the new list, and the fitting validation bounds the count). They are built and asserted as part of the construction below and reported to the seat in the run return. No scope change; building proceeds.

Deferred, explicitly: the entrance translation and the absence of stack scrolling remain unverified assumptions from a single evidence frame. Evidence needed to settle them = consecutive specimen frames. They are not claimed as settled by this build.

## Pre-build filing 2 — Feasibility budget: six cards at 360px under bounded wrapping (hard valve)

Decided policy: titles wrap, bounded at **2 lines maximum**, highlight-safe (the title is one inline text flow; any marked segment is an inline element inside that flow, so a wrap can split it across lines without breaking the highlight). A title needing more than the supported wrapped length fails configuration validation at load with the named error `T13_TITLE_UNSUPPORTED` (asserted in the own-check suite); there is no silent clipping path.

Chosen type floors (modelled size at a 360px-wide stage; sizes scale with stage width above that):
- Card title: **14px** floor (font token 3.89cqw of stage width)
- Card header row (handle / badge / timestamp): **11px** floor (3.06cqw)
- Card foot row: **11px** floor (3.06cqw)

Geometry model at 360px (all values are the same formulas the source and the suite use):
- Comments column width: 94% of stage = 338.4px. Card horizontal padding 12px each side + left edge rule ≈ 3px → title inner width ≈ 311px.
- Conservative characters per line: inner width / (title font × 0.58 worst-case glyph factor) = 311 / (14 × 0.58) = 38 graphemes per line. Supported title length = 2 lines × 38 = **76 graphemes**. Longest specimen title = 49 graphemes → supported, wraps to 2 lines under the conservative model.
- Card height, worst case (2-line title): vertical padding 14 + header row 24 (avatar) + title margin 3 + title 2 × 17.5 (14px × 1.25 line-height) + foot margin 3 + foot row 13.2 (11px × 1.2) = **92.2px**.
- Six worst-case cards: 6 × 92.2 = 553.2 + 5 gaps × 8 = 40 → stack 593.2px. Comments header 20 + 8 margin = 28 → comments column 621.2px.
- Phone stage: the narrow layout stacks the post card above the comments column and gives the stage a taller aspect (height = width × 820/360 = 820px at 360 wide). Post card modelled height ≈ 145px + top margin 10 + gap 12 + comments 621.2 + bottom margin 10 = **798.2px ≤ 820px** — the budget closes at the floors with ≈22px slack in the all-worst-case bound, and ≈90px slack for the specimen titles (four 1-line, two 2-line under the conservative model).
- At 390px every token scales by 390/360, so modelled sizes rise (title ≈15.2px) and the same proportional fit holds.

Budget outcome: **CLOSES** at the chosen floors under bounded wrapping. No §8 split is filed; building proceeds at these floors. If a later diagnostic contradicts this model, that is recorded in the ledger below, not silently absorbed.

## Construction summary (neutral behavior names)

- The performance opens in an already-progressed state: the first card is complete and the second card shows an initial typed prefix of exactly the grapheme sequence "Chief Executive" at time zero; a documented opening offset in the configuration records the pre-window progress this represents. Remaining beats are scheduled from that anchor.
- Each card carries its own beat pricing in a configuration table: its entrance duration, its per-grapheme typing duration (so its typing span is its own priced beat), and its landing hold, each with a stated reason. The closing hold is a priced ending beat (time to read the completed stack), not a balancing remainder. Total duration is the derived sum of the priced beats plus the documented offset; it is never preserved by compressing later beats — a longer replacement title extends the total at that card's priced rate, and an over-long title fails validation instead.
- All card chrome text (footer mark and label), the post card's action symbols and close mark, the comments header texts, avatar gradient parameters, and text colours are configuration values. Visual transition durations are set from the configuration at build time, so the configured entrance duration is the rendered transition duration; the caret blink period is likewise configuration-driven.
- Layout geometry (column positions, widths, paddings, avatar size, radii, edge rule, font tokens for both the wide and narrow layouts) is parameterized in configuration and applied through style variables. A fitting validation models the stack height in both layouts and fails with the named error `T13_STACK_OVERFLOW` when the configured cards cannot fit; the narrow-layout model asserts both containment and the type floors above.
- The gap override key names its unit (`gapCqw`) and accepts 0 as a lawful value; malformed override values fall back with a named validation warning rather than silent coercion.
- Highlight reveal is computed in grapheme space end to end: the marked segment is located as a grapheme range and the reveal boundary is a grapheme count, so the marked segment appears exactly when typing reaches its grapheme range, for any Unicode content.
- Restart explicitly removes the visible and landed classes from every card and resets all per-card render state before replaying; the suite verifies a second playback reproduces the first playback's state sequence.
- Deferred (printed, not claimed): entrance translation and no-scroll behaviour remain single-frame assumptions.

(Rest of this record — per-cure diagnostic ledger, integrated regression, final source hash — is completed after the diagnostics run, before any scoring payload is assembled.)

## Per-cure diagnostic ledger (CA-1)

Diagnostics ran per construction area during the build, against the in-progress source, before integration; every row was then re-run as an integrated regression on the frozen final source. Lens movement, if any, is a joint outcome of the whole construction — no per-area score attribution is claimed.

| # | Construction area | Changed variables | Fixed controls | Expected effect | Measured result | Evidence |
|---|---|---|---|---|---|---|
| 1 | Opening anchor | `opening.offsetMs` (2250), `opening.secondCardPrefix`, schedule derivation for the first two cards | Remaining beat table, all texts | At t=0 the first card is complete and landed; the second shows exactly the configured prefix (15 graphemes); cards 3–6 hidden | PASS — t=0 snapshot matches exactly; second card lands at 540ms with its full text; not landed at 539ms | Suite checks "t0 …", "card2 …" (node DOM-stub suite, 31 checks) |
| 2 | Bounded wrapping + named validation | Title wrapping (2-line bound), `maxTitleLines`, geometry model glyph factor | Type floors from the feasibility filing | Specimen titles model at ≤2 lines in both layouts; a 90-grapheme replacement title produces the named error `T13_TITLE_UNSUPPORTED` instead of clipping | PASS — error raised for the overlong case; default configuration validates clean | Suite checks "overlong title …", "validation default clean" |
| 3 | Per-card beat pricing | `beats[]` table (entrance / per-grapheme rate / landing hold + reason per card), `finalHoldMs` 1400 as the ending beat | Texts, opening anchor | Total duration is the derived sum of the priced beats (8808ms in-window; last typing ends 7408ms, ending beat = 1400ms); a uniform-rate replacement recomputes the total (6850ms) at the priced rates with no compression of later beats | PASS — both totals match hand-derived sums | Suite checks "endMs derived 8808 …", "final hold …", "charMs swap …" |
| 4 | Narrow-layout type + containment | Narrow layout tokens (title 3.89cqw, header/foot 3.06cqw, avatar 6.67cqw), taller narrow stage aspect, badge background `#2456a6` | Wide layout tokens | At 360px: title ≥13px, header/foot ≥10.5px, six-card stack contained; badge contrast ≥4.5:1; at 390px sizes rise proportionally | PASS — title 14.00px, header/foot 11.02px at 360px; stack 152.5 ≤ 185.8 (narrow), 51.0 ≤ 53.7 (wide); badge contrast modelled 7.10:1; title 15.17px at 390px | Suite checks "narrow 360 …", "wide containment …", "badge contrast …" |
| 5 | Configuration completeness + effect mappings | Footer mark/label, post action symbols, close mark, avatar gradient parameters and text colours moved into configuration; card transition strings built from the beat table; caret blink period from configuration; gap override renamed to its unit (`gapCqw`) | Schedule derivation, texts | The configured entrance duration is the rendered transition duration; `gapCqw=0` is accepted as a lawful value; a malformed gap value produces the named warning `T13_OVERRIDE_INVALID:gapCqw` | PASS — a mid-sequence card's transition string carries its priced 150ms entrance; both gap cases behave as expected | Suite checks "transition maps appearMs …", "gapCqw …" |
| 6 | Grapheme-consistent marked-segment reveal | Marked segment located and revealed in grapheme indices end to end | Typing schedule | A combining-accent sequence counts as one grapheme; a ZWJ emoji counts as one grapheme; a marked segment after such content is located at its grapheme index, not its UTF-16 offset | PASS — counts and ranges match hand counts (11 graphemes; range 5–6; post-emoji segment at grapheme 4); the first card's marked segment renders exactly | Suite checks "grapheme …", "highlight …", "card1 highlight mark …" |
| 7 | Restart determinism | Restart explicitly removes the visible and landed classes from every card, clears title content, restores entrance transitions, and resets per-card render state; the hidden-state transition also clears title content | Schedule, beat table | A second playback reproduces the first playback's state sequence at nine sampled times | Initial diagnostic run: FAIL — title content from a completed playback remained on hidden cards after restart, and a landed card kept its landed styling when time was scrubbed backwards. Construction amended (content cleared on the hidden transition and on restart; landed styling restored to the entrance transition when a card is not landed). Re-run: PASS — second playback identical at all nine samples | Suite checks "restart clears …", "second playback identical …", "transition maps appearMs …" (the last sampled after a backwards scrub) |

## Integrated regression (on the frozen final source)

- Full suite: **31 PASS, 0 FAIL** (node, logic level, DOM stub; the extracted script also passes a syntax parse).
- Purity grep on the final source (`segment.mp4|source.mp4|<video|<img|.jpg|http://|https://|url(`): **0 hits**. The string "feet.png not found" remains title text only.
- Fitting validation on the default configuration: clean (no named errors) in both layouts.
- **PIXEL-UNVERIFIED**: no Chrome/Chromium binary exists in this session (a `which` probe for chromium/chrome returned nothing), so no headless render was possible. All geometry and type evidence above is modelled from the source's own tokens; rendered-pixel behaviour is unverified and is carried as a limitation, not cleared by the modelled checks.
- Comparison face: unchanged. The comparison page consumes only the recreation's clock API (setTime / play / pause / restart), whose names and semantics are unchanged, and it never referenced the renamed override key; its ORIGINAL side is byte-identical to its preserved snapshot.

## Final source binding

- `recreation.html` sha256: `7ef9422ea8c95052b7116962d2652db694eea32ff4d0d6b6e31fdc51752c55b8` (25,272 bytes). All scoring runs for this attempt must judge exactly this source; any later source change requires a fresh complete scoring wave against the new hash.

## Post-wave preservation note (filed after the scoring wave, before run close)

Deviation, disclosed: the preserved prior-attempt copy was initially created as a hardlink to the working file. When the working file was later overwritten through the file tool, the overwrite landed on the shared inode and the preserved copy briefly carried the new source. This was caught by the post-wave preservation census (hash comparison against the run baseline). Recovery: the prior source was reconstructed from the Execute agent's firsthand read of it at the start of this run; the reconstruction is 13,927 bytes (matching the prior build record's stated size) and its sha256 is `92871de2d63a6d4bbd4b58c7f405ef181d6851a687ba00b23e5cdd73904f9e83`, exactly the baseline hash — byte-identical, proven, not approximate. It was restored as an independent file (distinct inode). The comparison snapshot received the same independent-inode treatment with its bytes unchanged. Final census at close: preserved prior source = baseline hash ✓ · comparison snapshot = baseline hash ✓ · comparison.html = baseline hash ✓ · segment.mp4 = baseline hash ✓ · prior build record = baseline hash ✓ · scores.md prior content is an exact prefix of the filed file (prefix hash = baseline) ✓ · final source unchanged since freeze (`7ef9422e…c55b8`) ✓. Lesson for the fleet: a preservation copy must never share an inode with a working file — copy content, never link.
