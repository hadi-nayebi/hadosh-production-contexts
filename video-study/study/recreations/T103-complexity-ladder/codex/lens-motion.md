Motion fidelity: **84/100**. This lens clears the 70-point floor; RECREATED-tier still requires the other four scores.

The source implements the core device: three stacked rows, one persistent orange triangle stepping Easy→Intermediate→Difficult, items beneath only the active name, and inactive names dimmed. `render(t)` updates marker position, name color, and item visibility together.

Priced deductions:

- **−7 — Missing staged reveal.** Observed frames show tier names before Easy’s items appear. `render(0)` immediately shows both; there is no names-only state.
- **−6 — Missing departure and return.** The digest describes the card returning between tiers. The recreation remains continuously visible while selection changes.
- **−3 — Missing assembly motion.** The measured entrance includes names fading in and the marker entering. `build()` creates the names immediately, and `render()` directly assigns marker position.

Next attempt should add explicit entrance, names-only, item-reveal, and departure/return states. Label unmeasured movement as allocation. Intermediate/Difficult stepping is supported by the digest but remains unverified against source frames. No deduction here for allocated dwell times or the card palette; those concern other lenses.

Assessment uses the supplied source and neutral facts; no playback was verified.

BODY-WRITE: Nothing filed. The execution host failed to start, preventing writes to `codex/` and `scores.md`.
SCORE: 84
