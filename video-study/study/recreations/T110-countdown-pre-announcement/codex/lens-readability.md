Readability passes this lens. The 30 px bold white countdown has strong contrast against the darkened pink strip: compositing the supplied colors gives approximately #A13B5B, with white contrast around 6.5:1. The text remains fully opaque because strip opacity applies to a separate element.

The full-width band gives the default label ample room, and the supplied fit estimates leave substantial margin for longer technique names. At 360 px width, the countdown should be immediately readable. Its position and size clearly establish its teaching role.

Two limitations prevent a higher score:

- The demo’s 16 px text is readable but less comfortable, particularly the regular-weight lines. The reported 11.5 px ink height offers little reserve for further shrinking.
- Fit measurements use an approximate font model rather than browser-rendered glyph bounds. No phone-size rendered frame was available to confirm clipping, baseline placement, or visual comfort. The hero’s final line deserves particular inspection because its line box extends beyond the panel.

Next-attempt cure: verify actual browser text bounds and inspect countdown and demo frames at 360 px width; give the demo’s final line more vertical space.

This clears the readability threshold; overall RECREATED status requires the complete five-lens result.

BODY-WRITE: none (read-only run)
SCORE: 88
