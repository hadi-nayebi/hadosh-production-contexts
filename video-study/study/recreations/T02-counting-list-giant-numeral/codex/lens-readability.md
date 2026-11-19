Readability fails at a 360 × 202.5px phone stage. Strong contrast and a clear numeral cannot compensate for clipped listing content.

- **Type sizes:** list 10.44px; numeral 122.4px; caption 12.96px; accented zero 16.2px; “projects” 10.8px. The numeral dominates, although its font size is about 60% of stage height, exceeding the reference’s roughly one third.
- **Contrast against #050505:** listing ≈14.4:1; checks ≈7.9:1; orange numeral/zero ≈9.5:1; prompt ≈16.6:1; white caption ≈20.4:1. All are strong.
- **Vertical clipping:** the list window is 135.68px tall. Each row occupies 16.91px, so only eight complete rows fit. Thirteen require 219.87px. The configured 13-line scroll window therefore hides several newly revealed lines below the clipping boundary.
- **Horizontal clipping:** the column is 201.6px wide. Both named long lines contain 36 characters; at a typical monospace advance of 0.6em, each needs approximately 237px including check and gap. Their endings clip.
- **Landing:** the orange, enlarged zero clearly emphasizes the punchline. However, the visible playback buttons occupy the caption’s lower-right region and compete with or obscure it. The caption gets only one second before the timeline ends.
- **Pulse:** the 5.5% scale change preserves glyph clarity. It grows then abruptly resets, creating repeated visual jitter; the tightly fitted two-digit numeral also needs a right-edge clipping check at peak scale.

Required cures: size typography relative to the stage; explicitly fit all 13 rows; measure the longest labels before fixing column width; remove controls from the presentation area; reserve clear caption space; and use a smooth pulse that stays within verified numeral bounds.

The filesystem tool failed to start, so this assessment was not written to the working records.

BODY-WRITE: Record the failed readability gate in build-record.md and scores.md; require verified 13-row visibility, complete long labels, and an unobstructed landing caption before the next scoring attempt.
SCORE: 48
