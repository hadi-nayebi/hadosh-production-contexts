Readability score: **82/100**, based on source and supplied fit measurements. **PIXEL-UNVERIFIED.** This clears the individual-lens floor; the five-lens tier decision remains with Verify.

The settled year’s ~55.4 px ink height gives strong phone-size legibility. One opaque register prevents competing year layers during the count. Its rapid changes limit recognition of individual intermediate years, but the large digits support reading the downward count and final 2026.

The ~20.8 px clock is comfortably sized. Raising the sub-line, HUD-year line, and ruler label to ~11.1 px ink was the right readability trade. These remain small, but the increase protects meaningful subject text. The ruler label and ~11.8 px question mark use full ink against the dark sky, with useful separation from the city below.

Cure 1 helps, although window opacity 0.85 is only modest attenuation. The stronger protection is spatial: buildings cannot rise above y=155, leaving the year, ruler, and mark largely against sky. Small window cells and half-opacity stars further reduce competition. Actual antialiasing and local contrast remain unverified.

Two readability weaknesses prevent a stronger score:

- **The entry transform defeats the sub-line’s size floor.** At entry, scale 0.62 reduces its ~11.1 px settled ink height to approximately **6.9 px**. At 1000 ms it is approximately **8.1 px**. It reaches ~11 px only near entry completion. The year remains large enough, but the sub-line does not retain phone-size readability throughout entry.
- **The full-ink moon potentially interferes with the HUD-year line.** Its disc occupies x=119–145 and y=17–43, overlapping the HUD text row’s region. Higher text stacking does not create contrast where light glyphs cross the light crescent. The supplied measurements do not establish glyph-level clearance.

Next-attempt cures: keep the sub-line at readable size independently of the year’s entry scaling, or reveal it once it reaches that size; establish explicit clearance between the moon and HUD text. Verify both at 360 px in rendered frames, including early entry and the opening HUD.

I could not save `codex/lens-readability.md`: the execution tool failed to start because its host executable is missing.

BODY-WRITE: No file written; the intended codex/lens-readability.md report is returned above for the named consumer to file.
SCORE: 82
