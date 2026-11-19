Verdict: READABILITY passes this lens’s ≥70 floor. Overall passage remains unassessed because the other lens scores are absent.

Findings:

- **Phone-size typography is credible, but ink height is unverified.** Source `CONFIG.type` specifies 24px italic quotes, 20px speakers, 15px roles, and a 12px tag. `effectiveGeom()` preserves font sizes at 320px. The main reading hierarchy is adequate; the role and tag are the weakest small text. No measured glyph ink heights appear in the packet, so nominal font sizes cannot establish their actual visible height.

- **Contrast supports reading.** `CONFIG.palette` and the DOM setters place pale `#f5f2e6` quote/speaker text and gold `#e8c86a` attribution text against dark `#101f3a`. Neither substantive text block depends on a low-contrast treatment. Entrance and exit opacity reduce contrast temporarily; settled reading time should carry the assessment.

- **Both modes provide sufficient reading time for these texts.** Using the stated lexical counts, quote plus attribution requires 5.4s, 5.1s, and 8.4s at 200 wpm: tokens × 60/200. From `stateAt()` and `CONFIG`, sequence time after entrance completes and before exit begins is respectively 5.95s, 5.45s, and 11.35s. Specimen mode provides 11s before fading. The latest Sal Khan line receives 3s in specimen mode and 3.8s in sequence mode. These support progressive reading; the entire quote need not be reread after its final line appears.

- **Fit and attribution clearance are supported on the disclosed metric basis.** `quoteZoneDepth()` gives 412−18−104−64 = **226px**. At 24px with 1.32 line height, the reported maximum five-line wrap occupies **158.4px**, leaving **67.6px** before the reserved attribution region. `attrTextWidth()` gives 274px at 360 and approximately 243.6px at 320. `fitCard()` checks speaker wrapping, role wrapping, and attribution height. The own-check packet reports successful fits at both widths, though these are supplied results rather than independently reproduced measurements.

Limits: GEORGIA-UNVERIFIED and PIXEL-UNVERIFIED materially constrain confidence. Actual ink heights, browser wrapping, and rendered attribution clearance remain unconfirmed. Assessment uses only the supplied payload; no independent visual inspection or source-hash verification was performed.

Body-write: none (read-only run)

SCORE: 86