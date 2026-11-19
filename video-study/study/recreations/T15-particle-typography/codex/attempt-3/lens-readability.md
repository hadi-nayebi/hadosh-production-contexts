The source supports strong desktop readability, with phone legibility the main unresolved weakness.

- **Separation:** Words render last at alpha 1.0, versus 0.28 for reserve dust and 0.16 for surplus. This should create perceptible separation, though persistent trails make the reported compositing model insufficient to establish actual contrast.
- **Stability:** HOLD offsets are bounded to ±0.35 px per axis. Letterforms should remain coherent and comfortably still.
- **Density and completeness:** Every sampled target receives a particle. However, 1.6 px squares on a 4 px sampling grid produce dotted letterforms. When the longest phrase shrinks onto one phone-width line, thin strokes and punctuation may receive too few samples for effortless recognition. The stub’s filled rectangles cannot test actual glyph completeness.
- **Time:** A fully formed 2.5 s HOLD gives adequate reading time for the five-word phrase, provided recognition is immediate. Formation adds preview time; dissolution should not count toward stable reading time.
- **Fit:** Width and height fitting logic is sensible, and the reported containment checks support it. Containment alone does not establish comfortable phone reading size, and real-font bounds remain unverified.

Overall, the brightness hierarchy, tiny jitter, and reading interval support a good reading experience. Sparse sampling at the longest phrase’s phone size prevents a higher-confidence score.

BODY-WRITE: Require a real-font phone-width HOLD check for the longest phrase, including punctuation; if strokes become ambiguous, use multiline layout or denser sampling to preserve complete, comfortable reading.

SCORE: 83