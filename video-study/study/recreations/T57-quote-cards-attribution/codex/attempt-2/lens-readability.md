At a 360 px stage, the card is approximately 259 px wide with 223 px available for text. The quote starts at 14.4 px; attribution is 14.04 px. Both are readable, though the quote has little size advantage over the attribution and feels modest for the card’s main content.

The formed-state palette is strong: off-white quote text, white speaker text, and gold occasion text all clear the recorded 4.5:1 contrast floor against the slate panel. Bold speaker text and italic occasion text distinguish the attribution roles.

The two supplied cards appear comfortably within the 182.25 px height budget under the recorded measurements. The longer Semafor attribution needs wrapping, which the fit calculation allows for. However, `chipLineCount()` returns only one or two lines regardless of content, while the browser wraps the attribution naturally. Its CSS line height is also unspecified, whereas the height estimate assumes 1.3. Thus, complete-card fit is estimated rather than guaranteed for wrapped attribution states.

PIXEL-UNVERIFIED materially limits confidence: stand-in font measurements cannot establish actual Georgia wrapping, glyph bounds, or absence of clipping. No clipping is demonstrated by the supplied evidence, but a browser-level clearance remains outstanding.

SCORE: 85
BODY-WRITE: Require a 360 px browser verification of both formed cards, and measure the actual attribution block with explicit line height instead of assuming a maximum of two lines.