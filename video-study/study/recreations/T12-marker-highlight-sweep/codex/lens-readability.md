# Codex return — lens: READABILITY (T12 attempt 1, filed verbatim 2026-11-14)

Readability score: **62/100**, assessed from source; a rendered phone-size check was unavailable.

- **Highlight contrast passes.** Dark, bold text remains clear on both white and the yellow fill. The fill stays behind the glyphs, so its moving edge changes the ground without obscuring letters.
- **Stamp overlap fails.** At the default wide-card height, `top:42%` places the stamp across the second and third body lines, including highlighted text. Phone wrapping increases card height and shifts the overlap, but provides no protected area. The red lettering and double border compete with the words throughout the verdict hold.
- **Phone framing is unsafe.** At a 390 px-wide, 16:9 viewport, the card has roughly 295 px of text width. Wrapping makes the card taller than the approximately 219 px frame; vertical centering and hidden overflow can clip the header and footer.
- **Small labels are conditional.** The muted color has adequate contrast against white at native size. Scaling the entire composition down further would make the 13.5–14 px labels difficult to read.
- **Longer swaps need correction.** Line spacing is adequate, but one absolutely positioned fill inside a wrapping inline span does not reliably produce a separate marker strip behind every wrapped line.

BODY-WRITE: Require a stamp area that intersects no body text, a verified phone-frame fit, and per-line highlight fills for wrapped phrases before this build passes readability.
SCORE: 62
