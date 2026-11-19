Readability score: **64/100**. The palette and speaker markers are strong, but phone readability and wrapped-line visibility are insufficiently protected. This is a source-based assessment; rendered phone frames were unavailable.

- **Contrast:** Against `#070807`, dialogue contrast is approximately **14.2:1** for user text and **9.9:1** for AI text. Both are strong. Green `❭` and orange `●` distinguish speakers through shape as well as color. The bright green block cursor clearly marks the insertion point.
- **Secondary text:** Status text is approximately **4.1:1** against the terminal ground; chrome text is approximately **3.9:1** against its chrome background. These are weak for 13 px text. Banner subtext has stronger contrast, approximately **6.4:1**, but becomes small under stage scaling.
- **Phone size:** Scaling a 960-wide stage to 390 px makes 30 px dialogue approximately **12.2 px**, banner subtext **7.6 px**, and 13 px chrome **5.3 px**. That fails the reference’s instant-glance standard. The supplied source itself has no scaling transform: if displayed directly at phone width, text remains 30 px, creating substantially more wrapping instead. Both presentation modes need verification.
- **Wrapping and scrolling:** `overflow-wrap:anywhere` permits mid-word breaks when necessary. More seriously, scrolling counts each dialogue entry as one 55 px unit regardless of its actual wrapped height. Wrapped entries therefore consume space the scroll calculation ignores, potentially pushing the active text and cursor below the clipped viewport. `visibleLines` also ignores viewport height.
- **Hierarchy and spacing:** The 1.5 line-height provides generous separation. The cursor identifies the active line, but completed dialogue retains equal brightness; the current line has only a localized salience advantage.

The next attempt should preserve readable phone text sizes, strengthen secondary-text contrast, prefer whole-word wrapping, and scroll from measured active-line bounds. Verify partial and completed long lines at the actual comparison-pane dimensions.

SCORE: 64
BODY-WRITE: This return records the readability finding for codex/lens-readability.md and scores.md: strong dialogue contrast does not compensate for phone downscaling and scroll arithmetic that ignores wrapped text height.
