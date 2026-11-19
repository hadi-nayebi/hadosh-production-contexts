Could not write `codex/lens-reusability.md`: the execution tool failed to start. Return for the consumer to persist verbatim:

**Reusability: 86/100**

The supplied source supports CONFIG-driven reuse for title, body, gradient, typography, geometry, footer styling, and landing duration. The reported four-part swap is consistent with the code: `600 + 12900` derives a 13500 ms cycle, and modulo timing leaves no undefined interval. The reported config census has an empty HIT list; source inspection supports the key-to-application coverage.

An empty census does not establish that every shaping choice lives in CONFIG:

- Landing easing is hardcoded to `easeOutCubic`; production cannot change the motion curve through CONFIG.
- Text width estimates use fixed Arial-like character metrics despite a configurable font family. Changing fonts can invalidate fit predictions without changing their reported result.
- Footer construction fixes its orientation and rounded stroke treatment. `footer.motif` selects the existing motif or hides it; it does not provide alternative constructions.

**Next-attempt cures:** expose easing through CONFIG; measure fit using the configured browser font and actual DOM bounds; explicitly document the footer’s supported variation boundary or parameterize its remaining shaping choices. Repeat the existing swap in a browser and include a font-change check.

The supplied swap supports reuse within the demonstrated content range. Browser layout under broader substitutions remains unverified. No independent filesystem hash or runtime verification was possible in this run.

BODY-WRITE: none (read-only run); consumer must persist this return verbatim to `codex/lens-reusability.md`.
SCORE: 86
