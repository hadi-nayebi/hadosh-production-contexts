# T13 attempt 5 — measured-fit leg (guard-measured-fit form)

Source bound: `recreation-attempt-5-frozen.html` sha256 `2712dc5ed115a1a34c4817d64d155c89b4b7cb6b4559ff71d611e17dc6f5389d`.
Method: source-bound displayed-state model (the build's own geometry model, run at Execute in the instrument environment, ESTIMATE path). PIXEL-UNVERIFIED: no render route exists in this seat; rows are modelled measurements from the source's tokens, not rendered pixels — printed as the leg's scope limit, not as rendered evidence.

## Unit basis (model basis = render basis)

| Unit as used | Basis box | Rendered consequence |
|---|---|---|
| descendant `cqw` (all card/post/comments geometry) | stage content box | 1cqw = 3.3984px at 360px stage width; 3.6816px at 390px; 19.16px at 1916px |
| stage's own padding `cqw` | full stage width (no ancestor query container) | pad 10.08px/side at 360px; 10.92px at 390px; wide stage padding token is 0 |
| `%` position tokens (stamp top/right) | post-card padding box | stamp top 62% narrow / 70% wide of the modelled post height |
| `px` tokens | absolute | unchanged at every width |

## Rows — narrow @360px (card inner 314.4px, post inner 317.4px)

| Element | Container bound | Modelled width / state | Margin | Verdict |
|---|---|---|---|---|
| Title card 1 (31 gr) | 314.4 | 219.5 max line, 1 line; worst caret-right 220.6 | 93.8 | fits |
| Title card 2 (30 gr) | 314.4 | 203.7, 1 line; caret-right 204.7 | 109.7 | fits |
| Title card 3 (47 gr) | 314.4 | 276.9, 2 lines; caret-right worst 318.5 is a lawful wrap state (caret wraps within the 2-line bound); no overflow prefix | — | fits |
| Title card 4 (49 gr) | 314.4 | 278.4, 2 lines; caret-right worst 311.2 | 3.2 | fits |
| Title card 5 (25 gr) | 314.4 | 180.9, 1 line; caret-right 181.9 | 132.5 | fits |
| Title card 6 (22 gr) | 314.4 | 140.7, 1 line; caret-right 141.7 | 172.7 | fits |
| Every grapheme prefix, all cards | 314.4 | prefix lines ≤2, no prefix overflow, no prefix uncertainty | — | fits |
| Card header rows ×6 | 314.4 | 192.6 max | 121.8 | fits |
| Post header row | 317.4 | 199.2 | 118.2 | fits |
| Comments header row (worst-case count label) | 339.8 (column) | 154.4 | 185.4 | fits |
| Card footer | 314.4 | 48.5 | 265.9 | fits |
| Post footer (all actions jointly) | 317.4 | 145.8 | 171.6 | fits |
| Stamp (rotated bounds) | post card 317.4 wide, 169.9 high | 98.5 wide; contained; no body-ink overlap; no footer overlap | — | fits |
| Avatar initials ×6 | disc allowance | 15.2 each, all fit | — | fits |
| Post body | 317.4 | 4 lines, max line 309.1 | 8.3 | fits |
| Stack height | 182.1 cqw available | 159.1 cqw | 23.0 cqw | fits |
| Supporting type floor | 12px floor (configured) | smallest supporting row 12.27px | +0.27 | clears strictly |

## Rows — narrow @390px (card inner 340.6px, post inner 343.9px)

| Element | Modelled | Verdict |
|---|---|---|
| Titles ×6 | max lines 237.7 / 220.6 / 299.9 / 301.5 / 195.8 / 152.3; lines 1/1/2/2/1/1; caret-right worst 345.0 is a lawful wrap state on card 3; no overflow prefix | fits |
| Card header rows ×6 | 208.7 max | fits |
| Post header / comments header / card foot / post foot | 215.8 / 167.2 / 52.5 / 158.0 | fits |
| Stamp (rotated bounds) | 106.7 wide; contained; no body-ink or footer overlap | fits |
| Post body | 4 lines, max line 334.7 of 343.9 | fits |
| Stack height | 159.1 ≤ 182.1 cqw | fits |
| Supporting type | smallest 13.29px | clears |

## Rows — wide @1916px (card inner 1064.3px, post inner 639.9px)

| Element | Modelled | Verdict |
|---|---|---|
| Titles ×6 | 1 line each; max lines 549.4 / 509.7 / 855.7 / 797.2 / 452.3 / 351.3; caret-right worst ≤860.3 | fits |
| Card header rows ×6 | 366.0 max | fits |
| Post header / comments header / card foot / post foot / stamp | 477.5 / 373.5 / 110.9 / 375.5 / 240.9 (rotated, contained, no body-ink or footer overlap) | fits |
| Post body | 5 lines, max line 636.8 of 639.9 | fits |
| Stack height | 51.0 ≤ 53.7 cqw | fits |
| Supporting type | smallest 18.20px | clears |

## HIT list

**HITS: 0** — every modelled row fits its bound on the corrected unit basis at 360px, 390px and 1916px, on the frozen attempt-5 source. PIXEL-UNVERIFIED stands: these are modelled measurements, not rendered pixels.
