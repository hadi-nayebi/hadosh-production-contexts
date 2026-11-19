Verdict: **87/100** — Act-1 card timing closely matches the measured anchors, but the HUD changes to 2025 three seconds too early. The two-act structure is coherent; Act-2 timing remains an allocation, not a verified recreation.

Findings:

1. **Act-1 entrance, hold and clearance match the anchors.** In `CONFIG.beats[0]`, `graphicEntrance:3000`, `enterBorderMs:1000` and `followUp:5000`, combined with `stateAt()`, produce absence through 3 s, a fully drawn border with zero text opacity at 4 s, and settlement at 5 s. Clearance starts at `11500−1000−500 = 10000 ms`; restoration starts at `11500−500 = 11000 ms`. This matches the supplied observations: border at approximately 4 s, settled 5–10 s, gone by 11 s.

2. **The opening HUD violates an observed timing anchor.** The build record specifies HUD **2037 during seg 0–3 s**. However, `hudYearAt()` returns the beat’s year for every phase except `"restore"`, so Act-1 `"lead"` displays **2025 throughout 0–3 s**. The own-check packet’s “Table H default years” does not clear this discrepancy. **Next-attempt cure:** return `cfg.hud.sceneYear` during Act-1’s lead, while preserving 2025 at the 4 s border anchor and 2037 during restoration.

3. **The longer cycle is honestly allocated across two acts.** The source yields Act-2 construction at 11.5–13 s, settled hold at 13–19 s, and an additional settled end hold at 19–20 s. Thus its continuous settled display lasts **7 s**, calculated as `6 s hold + 1 s endHold`. These timings support a readable second demonstration, but the supplied still establishes form only. They earn structural credit without establishing original-tempo fidelity.

Limits: Assessment uses only the supplied payload and source. No rendered playback, original footage or audible dialogue was available; actual audiovisual synchronization and browser frame timing are unverified.

SCORE: 87
BODY-WRITE: none (read-only run)