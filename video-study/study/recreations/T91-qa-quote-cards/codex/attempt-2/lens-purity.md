Construction is highly configuration-driven: card content, HUD text, labels, palette, font family and sizes, schedule timings, reveal anchors, fit settings, and dimensional geometry originate in CONFIG. Derived wrapping, viewport scaling, and phase calculations preserve that construction. The supplied source contains no specimen media, traced assets, imports, or external references.

One substantive exception prevents full purity: `fitCard()` hardcodes `roleLines.length > 4`. Four lines is a typography/layout constraint shaping which attribution content the build accepts, rather than a structural index or bound. It should be exposed through CONFIG, with the diagnostic derived from that setting.

Smaller presentation choices also remain fixed outside CONFIG: the card border’s `"solid"` style and the non-quote measurement font style `"normal"`. These leave part of the visual construction outside the configuration surface.

The reported consumption census supports configuration coverage, but consuming every configured leaf does not establish that every shaping value is configured. This finding comes from inspecting the supplied source; it does not rely on the claimed literal whitelist or browser verification.

SCORE: 95