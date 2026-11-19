Readability is strong in the geometry model, with limited phone-size tolerance.

At 360 px, the longest label needs 49.50 px within 54.71 px of available room, including the check reservation. Identifying words come first. The strip occupies 33.8% of panel height, leaving most artwork exposed, though 8.25 px labels remain small.

The 9.35 px lyrics clear the grid by 11.2 px when all four lines accumulate. The longest line fits with only 1.94 px spare after prompt and cursor reservations: acceptable mathematically, fragile to actual font metrics. Full-size typography and spacing are substantially more comfortable.

Orange labels, off-white lyrics and the green cursor have strong nominal contrast against their dark backgrounds. At roughly 69×36 px, broad waveform, planet and scene silhouettes should remain distinguishable; sequencer notes, room details and spiral strokes are less secure, especially beneath the label strip.

Over-wide labels are shortened or truncated with named warnings; over-wide lyrics are rejected. These protect modelled fit, but `nowrap`, panel overflow clipping and assumed character advances leave rendered clipping unverified. PIXEL-UNVERIFIED prevents a stronger verdict.

BODY-WRITE: Require rendered phone-size verification of the longest lyric’s 1.94 px fit margin and artwork recognition beneath the label strips before recording readability as verified.
SCORE: 85