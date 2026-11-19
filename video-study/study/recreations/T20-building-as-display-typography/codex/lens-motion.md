Motion fidelity is strong on source inspection; rendered motion remains unverified.

- **Reading-order reveal:** `letterList` assigns non-space characters in line order, and `cell.letter < s.lettersLit` switches each glyph’s window cells on together. Letters accumulate without random-cell flicker or simultaneous full-title illumination.
- **Discrete window construction:** the visible facade uses grid-aligned rectangles sampled from glyph masks. Smooth text supplies the mask; it is never drawn directly onto the facade.
- **Slow orbit approximation:** far, mid, and hero layers translate at different amplitudes while the facade grid remains rigid. This satisfies the described parallax mechanism, although the shared sinusoid reverses direction twice per loop and reads more as lateral sway than a sustained camera orbit.
- **Secondary marquee:** its rapid typing completes early and then holds while facade letters continue accumulating.
- **Completed-title hold:** lighting is cumulative, and every letter remains illuminated through the final pre-reset frame.

Next-attempt cure: replace the reversing sway with a slow, directionally consistent parallax passage during the reveal, preserving rigid window geometry and the completed-title hold. Verify that passage in playback before claiming camera-orbit equivalence.

BODY-WRITE: Record that the reveal, window-cell construction, marquee hierarchy, and final hold match the described mechanics; the remaining motion gap is reversing lateral sway in place of a sustained orbit-like passage.
SCORE: 92
