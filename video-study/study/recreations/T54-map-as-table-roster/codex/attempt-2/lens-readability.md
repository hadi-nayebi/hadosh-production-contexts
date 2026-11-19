READABILITY: **64/100 — PIXEL-UNVERIFIED.** Names are available across the regional pass, but source-level exposure does not establish readable access to all 55 identities.

At 360 px stage width, full-view names are 15 px, initials and Elect text 16 px, and discs 26 px across. Opening names reach 28.5 px at 1.9×. Regional names are `15 × fitted scale` px; the configured zooms are ceilings, so actual sizes can be smaller. These sizes are generally workable.

Deductions from 100:

- **−14: Name access is too brief.** Each regional wave lasts about 600 ms, including camera movement. The settled regional interval is only 300 ms, split into approximately 150 ms per wave. Several names must be read in each wave. Cure: give each wave a stationary reading interval scaled to its name count and longest label.
- **−8: Plates can conceal identity marks, and later chips can conceal plates.** Plate search excludes other plates and selected Elect rectangles, but excludes no disc or initials bounds. Each chip’s label is also rendered inside that chip’s group, before subsequent chip groups. Zero disc overlap therefore does not guarantee surviving identity marks or readable labels. Cure: reserve identity bounds and render labels in a dedicated foreground layer with explicit chip-to-label association.
- **−5: Elect safeguards are incomplete.** Tag search protects other chip centres, not their full initials bounds, and does not protect its own initials. Later chip groups can overpaint tags. Regional cameras fit discs rather than tag extents, allowing tag clipping. Cure: include complete identity and tag rectangles in collision checks and camera fitting; render tags above chips.
- **−5: Plate-fit checks use estimated geometry.** Width is `character count × 15 × 0.56 + 10`, rather than actual rendered text width. This cannot guarantee fit for proportional bold lettering. The full-count overlay also reserves only 24 units, although its 16 px text plus 10 px vertical padding and 8 px bottom offset needs at least 34 px before normal line-height expansion. Cure: measure rendered text and reserve the overlay’s actual bounds.
- **−4: The completed overview offers little name access.** Completion precedes the pass by 1.6 seconds; the final overview holds 1.1 seconds. Both show only the last member’s name alongside the count, leaving the other identities dependent on the brief pass. Cure: provide a readable completed-roster index or a longer, repeatable regional reading sequence.

Credit retained: all 55 names have an exposure path; disc centres are separated by 28 units against 26-unit diameters; label placement explicitly considers camera boundaries and plate collisions. These are meaningful improvements, subject to the occlusion and geometry limits above.

SCORE: 64
BODY-WRITE: This return files the attempt 2 readability lens record, deductions, and cures for the practice job’s Verify step and permanent score record.