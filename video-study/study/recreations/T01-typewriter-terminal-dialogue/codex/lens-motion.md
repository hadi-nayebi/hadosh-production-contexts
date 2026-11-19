Motion fidelity is strong for typing and accumulation, but scrolling misses the requested continuous tracking.

- **Character reveal:** Banner, subline, and dialogue reveal one character at a time.
- **Cursor tracking:** A solid block follows the revealed text during typing and pauses. However, after the final line’s pause expires, `cursorTarget` defaults back to `"sub"`, moving the cursor away from the final dialogue line.
- **Accumulation:** Completed lines remain visible in the log; later dialogue adds content without replacing earlier lines.
- **Scrolling:** `shiftUnits` increases only when a line starts. Each overflow event instantly moves the entire log by 55 px. This produces discrete jumps rather than continuous tracking and ignores additional height from wrapped text.
- **Banner and prefixes:** The banner belongs to the translated log and scrolls away. Green chevrons and orange dots appear as their respective speaker rows begin, preserving speaker differentiation.

The next attempt should derive scrolling from actual content height and active cursor position, move the log continuously, and retain the cursor on the final dialogue line during the ending hold.

Assessment is based on the supplied source; playback was not verified. The filesystem tool failed before reading or writing files, so this return remains ready for the named consumer to file.

SCORE: 78
BODY-WRITE: Records the motion finding for the consumer to file in codex/lens-motion.md: replace line-start scroll jumps with continuous cursor tracking and prevent the ending cursor from returning to the banner subline; no file was written in this run.
