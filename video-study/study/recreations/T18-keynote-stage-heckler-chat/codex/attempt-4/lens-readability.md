Readability is strong for the title and chat body, with smaller secondary text remaining the main weakness. This is a source-based judgment; no rendered phone view was available.

At 360px width:

| Element | CSS font size | Approx. smallest framed size* | Judgment |
|---|---:|---:|---|
| Title | 18.72px | 17.25px | Clearly readable, bold |
| Chat body | 14.5px | 13.36px | Readable during holds |
| Sender/time | 12px | 11.06px | Small; requires closer attention |
| Stat values | 16px | 14.74px | Readable, bold |
| Stat labels | 12px | 11.06px | Marginal for quick reading |

*Using the smallest framing scale, 0.95, and the packet’s conservative 0.97 perspective factor; these are model estimates, not measured glyph heights.

The title column is approximately 180px wide, the chat column 124px, with a 13.8px gap before transforms. That provides adequate separation. The long first title line wraps, reducing its headline impact but preserving readable words.

White and retained yellow contrast strongly against the dark screen; chat text also has strong contrast against its dark bubbles. Dark letters on the yellow sweep remain readable once covered. One residual issue: colour changes only when the bar crosses a character’s right edge, so partially covered characters can briefly show white or yellow against yellow, weakening contrast within that character.

The framing clamp uses content bounds and correctly accounts for scaled translation. The supplied checks support containment across the specified phone heights and framings. They do not independently prove rendered ink containment: the bounds approximate font metrics and omit the actual screen perspective transformation.

Carry forward: improve sender/time and stat-label size, verify a rendered 360px view, and inspect partial-character sweep contrast.

BODY-WRITE: Record secondary text as marginal at approximately 11px after framing; require rendered phone verification and a partial-character highlight contrast check before closing those readability risks.
SCORE: 84