# T108 — guard-measured-fit output (pre-scoring leg, on the new build)

Method: PIL ink-bbox measurement (Liberation Sans, metric-compatible with the CONFIG Arial stack; text rendered at 200 px, ink bounding box scaled to local size) at the 360 px stage. Font-size px and ink height are printed separately: font-size at hold = local size × endScale × fitScale; ink height is the measured glyph bbox height under the same factors.
Basis: all inner text units are screen-local px; model basis box = render basis box (text inside the screen div inside the single world transform). The content transform origin is 0 0 with left/top recomputed per effective scale (fit × settle) in render; the screen div clips its content (overflow hidden); the cursor clip-path percentages resolve against the cursor element's own box (w × h from CONFIG). The end scale is a cover scale: max(stage width / screen width, stage height / screen height); at the default geometry the width ratio (2.034) exceeds the height ratio (203/113 ≈ 1.796), so the default end pose is identical to a width-derived scale.

Presented states by phase (what a viewer is actually shown):
- Distant hold: the title is the ONLY presented text. The pill is presented as an empty shell (a yellow bar at 0.35 of its full width, no text). The result rows are absent (opacity 0 by construction).
- Inside pose (camera arrival): the title and the pill shell are presented; the pill text is still empty; rows still absent.
- Settle window: the pill grows from 0.35 to full width while its text types in character by character; the rows fade/slide in one after another; all are present at the window's end.
- Hold: the full webpage state — title, full pill with full text, all rows.

| Element | Container | Ink width (local) | Visible width at hold | Ink height: distant / inside pose / hold (stage px) | Font-size at hold |
|---|---|---|---|---|---|
| inner.title "Webpage" @9 px bold | screen 177×113 | 39.6 px | 177 px | 5.5 / **17.1** / **17.1** | 18.3 px |
| pill shell (no text presented before its window) | pill 118×13 at full width; 41.3 px wide before the window | — | 118 px | — (no text) | — |
| pill text "Motion Design Training" @7.5 px | pill | 75.6 px | 118 px | not presented / not presented / **14.3** | 15.3 px |
| row "Result one" @8.0 px | row 130×11 (124 usable) | 37.3 px | 124 px | not presented / not presented / **12.0** | 16.3 px |
| row "Result two" @8.0 px | row 130×11 | 36.4 px | 124 px | not presented / not presented / **12.0** | 16.3 px |
| long-copy title @9 px bold | screen | 265.0 px (wraps: 2 lines, counted by actual word wrapping at the 177 px available width) | 177 px | — / — / wraps inside window (budgeted height 73.4 ≤ visible height 99.8) | 18.3 px |

Wrapped-title agreement: the source budgets the title's wrapped line count (counted by word wrapping at the available width) and this leg's model counts the same wrapped lines — both give 2 lines and a 73.4 px stack budget for the long-copy fixture. The check was also run independently of the source's counting formula (a separate wrapped-line counter): 3 lines vs 3 on a longer heading, 2 vs 2 on an uneven-word heading, and a single oversized token counts 1 line with the fit governed by width instead.
Row ink through the settle (same PIL basis throughout): rows stand at full hold ink (12.0 px) at the inside pose itself, because the content displacement is zero there. Row 1 first becomes visible at ink 11.3 px, row 2 at 11.5 px; at the displacement peak the rows measure 11.2 px — every value at or above the ~11 px floor from first visible appearance onward.
Short-rectangle cover state: with the screen height at 60 local px, the cover scale is 203/60 ≈ 3.383, the visible window is the full 60 px of screen height (the frame is filled; no device shows), and the content fit derives from that visible rectangle (fit scale 0.972 for the default stack).
Hierarchy: title/pill ink-height ratio = 1.20 (local), identical at hold — measured size hierarchy, not hue-only. ✓
Legibility floor (~11 px ink height): every presented text element clears it in its reading state (hold: 17.1 / 14.3 / 12.0 / 12.0) and the rows clear it from their first visible appearance through the displacement peak.

HIT list: **1 HIT carried** —
- HIT-1 (carried, re-priced for the presented state): in the DISTANT state the only presented text is the title at 5.5 px ink height, below the floor; the pill presents no text and the rows are absent, so no other text is measured there. Disposition: the distant state is approach framing; the reading state is the hold, where every element clears. In the specimen the screen at the equivalent framing is blank teal — the build's title is present-but-unread there, the nested-DOM price of the no-swap mechanism. Residual price carried knowingly; this measurement is fed to the readability packet.

Revision note — this leg was re-run on a revised build within the same build round; the statements below supersede the corresponding statements above where they differ.
- Short-rectangle cover state, revised: on the 60 px screen-height fixture the camera's end target is the swapped screen's own centre (170.5, 73) by construction — the resolved cursor path's final waypoint is the configured screen centre — and the end pose covers the whole stage: the screen's edges map to [-119.4, 0.0 → 479.4, 203.0] against the 360×203 stage. Full-frame coverage on the swap is established, not the cover scale alone.
- Wrapped-title width basis, revised: the fit's width term for the title is its widest WRAPPED line — the width the stack actually occupies — not its unwrapped single-line width. For the long-copy fixture (unwrapped ink 265.0 px, 2 wrapped lines) the width term is within the 177 px window, so the fit for a wrapped title is governed by its height budget (73.4 ≤ 99.8), not capped by the unwrapped width.

Second revision note — re-run on a further revised build within the same build round; the statements below supersede the corresponding statements above where they differ.
- Title wrapping basis: the title element's rendered width is set to the same visible-window width the fit model wraps at, so the browser's line breaks and the model's counted lines cannot diverge on a narrower visible window. Probed on a tall-stage swap (visible window 127.1 px): the title box measures 127.1 px, a long heading wraps to the counted 2 lines, and the stack stands inside the visible window (fit 0.978).
