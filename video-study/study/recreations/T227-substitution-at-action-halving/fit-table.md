# T227 — fit table (A6 measured-fit leg) · final build sha256 63d7fab9446eaa17bb9d237bfaca5afd7beb37dfa1598e1b16afa30af3fa7ad4

- **Subject text in recreation.html: NONE.** Verified by instrument: grep `<text` over recreation.html → 0 hits (no SVG text element); manual inventory — the only text nodes in the build are the Play/Pause/Restart control labels and the clock readout, all page chrome, not subject content. The technique is a silent object action; the specimen carries no text. Subject-text rows: **0**, by verified absence, not by omission.
- **Only subject-bearing text in the deliverable: comparison.html's two labels.** Instrument: PIL rendered measurement (guard-measured-fit lawful form ii) — PROXY, stand-in font **DejaVu Sans** (`/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf`) at the labels' CSS size 15 px, ink bounds from `ImageFont.getbbox`.

| Row | Element | Measured ink @15 px | Container @360 px stage | Margin / behaviour |
|---|---|---|---|---|
| 1 | Label "ORIGINAL — PES Fresh Guacamole @ 0:09–0:14" | 359 × 13 px | figcaption block, ~336 px wide in stacked phone layout | wraps to 2 lines (block flow, no fixed height, no clipping); ink height 13 px ≥ ~11 px floor |
| 2 | Label "RECREATION — T227 substitution-at-action halving, parameterized" | 503 × 14 px | figcaption block, ~336 px wide in stacked phone layout | wraps to 2 lines (block flow, no fixed height, no clipping); ink height 14 px ≥ ~11 px floor |

- **Hierarchy check:** the two labels are one class (uniform 15 px by design); no hierarchy claim, no HIT.
- **HIT list: EMPTY (0 HITs)** on the final build.

## Refile — Cycle 040 Wave 37 completion (A12.3)
Re-run on the final build (sha256 63d7fab9… UNCHANGED): `<text` grep 0 hits (subject text still absent); PIL re-measurement of the two comparison labels reproduces the filed ink bounds exactly (359 × 13 px · 503 × 14 px, DejaVu Sans stand-in @15 px). **HIT list: EMPTY (0 HITs)** — refiled.
